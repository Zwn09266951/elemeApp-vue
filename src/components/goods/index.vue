<template lang="html">
  <div class="goods">
    <div class="menu-wrapper">
      <ul>
        <li v-for="(item, index) in goods" class="menu-item">
           <span class="text">
             <span v-show="item.type>0" class="icon" :class="classMap[item.type]"></span>{{item.name}}
           </span>
        </li>
      </ul>
    </div>
    <div class="foods-wrapper">
      <ul>
        <li v-for="(item, index) in goods" class="food-list food-list-hook">
          <h1 class="title">{{item.name}}</h1>
          <ul>
            <li v-for="(food, index) in item.foods" class="food-item border-1px">
              <div class="icon">
                <img :src="food.icon" alt="">
              </div>
              <div class="content">
                <h2 class="name">{{food.name}}</h2>
                <p class="desc">{{food.description}}</p>
                <div class="extra">
                  <span class="count">月售{{food.sellCount}}份</span>
                  <span>好评率{{food.rating}}%</span>
                </div>
                <div class="price">
                  <span class="now">¥{{food.price}}</span><span class="old" v-show="food.oldPrice">¥{{food.oldPrice}}</span>
                </div>
                <div class="cartcontrol-wrapper">
                    <cartcontrol :food="food"></cartcontrol>
                  </div>
              </div>

            </li>
          </ul>
        </li>
      </ul>
    </div>
    <shopcart></shopcart>
  </div>
</template>

<script>
import cartcontrol from '../cartcontrol'
import shopcart from '../shopcart/shopcart';
export default {
  props: {
    seller: {
      type: Object
    }
  },
  data() {
    return {
      goods: {}
    }
  },
  created() {
    this.classMap = ['decrease','discount','special','invoice','guarantee'];

    this.$http.get('/api/goods').then((res) => {
      console.log(res);
      this.goods = res.data.data
    })
  },
  components: {
    cartcontrol,
    shopcart
    // food
  },
  computed: {
    selectFoods() {
      let foods = [];
      this.goods.forEach((good) => {
        good.foods.forEach((food) => {
          if (food.count) {
            foods.push(food);
          }
        });
      });
      return foods;
    }
  }
};
</script>

<style lang="scss">
@import "../../common/style/minxin";

.goods {
  display: flex;
  position: absolute;
  top: 3.48rem;
  left: 0;
  bottom: .92rem;
  width: 100%;
  overflow: hidden;
  .menu-wrapper {
    flex: 0 0 1.6rem;
    width: 1.6rem;
    background: #f3f5f7;
    overflow: auto;
    .menu-item {
      display: table;
      height: 1.08rem;
      width: 1.12rem;
      padding: 0 .24rem;
      line-height: .28rem;
      .text {
        display: table-cell;
        width: 1.12rem;
        vertical-align: middle;
        font-size: .24rem;
        @include border-1px(rgba(7,17,27,0.1));
      }
      .icon {
        display: inline-block;
        vertical-align: top;
        width: .24rem;
        height: .24rem;
        margin-right: 2px;
        background-repeat: no-repeat;
        &.decrease {
          @include bg-image('decrease_3');
        }

        &.discount {
          @include bg-image('decrease_3');
        }

        &.guarantee {
          @include bg-image('decrease_3');
        }

        &.invoice {
          @include bg-image('invoice_3');
        }

        &.special {
          @include bg-image('special_3');
        }

      }
      &.current {
        position: relative;
        z-index: 10;
        margin-top: -.02rem;
        background: #fff;
        font-weight: 700;
        .text {

        }
      }
    }
  }
  .foods-wrapper {
    flex: 1;
    overflow: auto;
    .title {
      padding-left: .24rem;
      height: .52rem;
      line-height: .52rem;
      border-left: .04rem solid #d9dde1;
      font-size: .24rem;
      color: rgb(147,153,159);
      background: #f3f5f7;
    }
    .food-item {
      display: flex;
      margin: .36rem;
      padding-bottom: .36rem;
      @include border-1px(rgba(7, 17, 27, 0.1));
      &:last-child {
        @include border-none()
        margin-bottom: 0;
      }
      .icon {
        flex: 0 0 1.14rem;
        margin-right: 10px;
      }
      .content {
        flex: 1;
        .name {
          margin: .04rem 0 .16rem 0;
          height: .28rem;
          line-height: .28rem;
          font-size: .28rem;
          color: rgb(7, 17, 27);
        }
        .desc, .extra {
          line-height: .2rem;
          font-size: .2rem;
          color: rgb(147, 153, 159);
        }
        .desc {
          line-height: .24rem;
          margin-bottom: .16rem;
        }

        .extra {
          .count {
            margin-right: 12px;
          }
        }
        .price {
          font-weight: 700;
          line-height: .48rem;
          .now {
            margin-right: .16rem;
            font-size: .28rem;
            color: rgb(240, 20, 20);
          }
          .old {
            text-decoration: line-through;
            font-size: .2rem;
            color: rgb(147, 153, 159);
          }
        }
        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: .24rem;
        }

      }

    }
  }

}
</style>
