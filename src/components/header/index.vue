<template lang="html">
  <div class="head">
    <div class="head-info">
      <div class="head-avatar l">
        <img :src="seller.avatar" alt="">
      </div>
      <div class="head-infoList l">
        <span class="head-infoList--title"><i></i>{{seller.name}}</span>
        <span class="head-infoList--time">{{seller.description}}/{{seller.deliveryTime}}分钟送达</span>
        <span class="head-infoList--activity" v-if="seller.supports"><i :class="classMap[seller.supports[0].type]"></i>{{seller.supports[0].description}}</span>
      </div>
      <div class="head-activitySum" v-if='seller.supports' @click="showPup(true)">
        {{seller.supports.length}}个 <i class="iconfont icon-keyboard_arrow_right"></i>
      </div>
    </div>
    <div class="head-content" @click="showPup(true)">
      <span><i></i>{{seller.bulletin}}</span>
      <i class="iconfont icon-keyboard_arrow_right"></i>
    </div>
    <div class="bgimg">
      <img :src="seller.avatar" alt="" width="100%" height="100%">
    </div>
    <div class="head-popu" v-if="popuShow">
      <div class="popu-wrapper clearfix">
        <div class="popu-main">
          <h1 class="name">{{seller.name}}</h1>
          <star :size="48" :score="seller.score"></star>
          <div class="title">
            <div class="line"></div>
            <div class="text">优惠信息</div>
            <div class="line"></div>
          </div>
          <ul v-if="seller.supports" class="supports">
            <li class="support-item" v-for="(item, index) in seller.supports">
              <span class="icon" :class="classMap[seller.supports[index].type]"></span>
              <span class="text">{{seller.supports[index].description}}</span>
            </li>
          </ul>
          <div class="title">
            <div class="line"></div>
            <div class="text">商家信息</div>
            <div class="line"></div>
          </div>
          <div class="bulletin">
            <p class="content">{{seller.bulletin}}</p>
          </div>
        </div>
      </div>
      <div class="popu-close" @click="showPup(false)">
        <i class="iconfont icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
import star from '../star/star'

export default {
  data() {
    return {
      popuShow: false
    }
  },
  props: {
    seller: {
      type: Object
    }
  },
  created() {
    this.classMap = ['decrease','discount','special','invoice','guarantee']
  },
  methods: {
    showPup(value) {
      this.popuShow = value;
    }
  },
  components: {
    star
  }

};
</script>

<style lang="scss">
@import "../../common/style/minxin";

.head {
  position: relative;
  overflow: hidden;
  height: 100%;
  margin: 0 auto;
  color: #fff;
  background: rgba(7,17,27,0.5);

  .head-popu {
    position: fixed;
    z-index: 100;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background: rgba(7,17,27,0.8);

    .popu-wrapper {
      min-height: 100%;
      width: 100%;

      .popu-main {
        margin-top: 1.28rem;
        padding-bottom: 1.28rem;

        .name {
          font-size: .32rem;
          font-weight: 700;
          line-height: .32rem;
          color: #fff;
          margin-bottom: .32rem;
          text-align: center;
        }

        .title {
          display: flex;
          width: 80%;
          margin: .56rem auto .48rem auto;
          .line {
            flex: 1;
            position: relative;
            top: -.12rem;
            border-bottom: .01rem solid rgba(255, 255, 255, 0.2);
          }
          .text {
            padding: 0 .24rem;
            font-weight: 700;
            font-size: .24rem;
          }
        }

        .bulletin {
          width: 80%;
          margin: 0 auto;
          .content {
            padding: 0 .24rem;
            line-height: .48rem;
            font-size: .24rem;
            }
          }
        .supports {
          width: 80%;
          margin: 0 auto;
          .support-item {
            padding: 0 .24rem;
            margin-bottom: .24rem;
            &:last-child {
              margin-bottom: 0;
            }
            .icon {
              display: inline-block;
              width: .32rem;
              height: .32rem;
              vertical-align: top;
              margin-right: .12rem;
              background-repeat: no-repeat;
              &.decrease {
                @include bg-image('decrease_2');;
              }

              &.discount {
                @include bg-image('discount_2');
              }

              &.guarantee {
                @include bg-image('guarantee_2');
              }

              &.invoice {
                @include bg-image('invoice_2');
              }

              &.special {
                @include bg-image('special_2');
              }

            }
            .text {
              line-height: .32rem;
              font-size: .24rem;
            }
          }
        }
      }
    }

    .popu-close {
      position: relative;
      width: .64rem;
      height: .64rem;
      margin: -1.28rem auto 0 auto;
      clear: both;
      i {
        font-size: .64rem;
      }
    }

  }

  .bgimg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: -1;
    filter: blur(10px);
  }

  .head-content {
    position: relative;
    bottom: 0;
    padding: 0 .38rem 0 .24rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    line-height: .56rem;
    display: block;
    background: rgba(0,0,0,0.2);

    .icon-keyboard_arrow_right {
      position: absolute;
      right: .24rem;
      bottom: 0;
      font-size: .24rem;
    }

    span {
      line-height: .56rem;
      font-size: .24rem;
      i {
        display: inline-block;
        height: .24rem;
        width: .40rem;
        vertical-align: top;
        margin-top: .16rem;
        line-height: .56rem;
        @include bg-image(bulletin);
        background-size: cover;
        margin-right: .08rem;

      }

    }
  }

  .head-info {
    position: relative;
    margin: .48rem .32rem .36rem .48rem;
    overflow: hidden;

    .head-activitySum {
      position: absolute;
      bottom: 0;
      right: 0;
      padding: .14rem .16rem;
      border-radius:50px;
      background-color: rgba(0,0,0,.2);
      i {
        display: inline-block;
        font-size: .24rem!important;
        font-weight: 400;
      }
    }
  }

  .head-avatar {
    img {
      height: 1.28rem;
      width: 1.28rem;
      border-radius: 5px;
    }
  }
  .head-infoList {
    span {
      display: block;
      margin-left: .32rem;
    }
    .head-infoList--time {
      margin-bottom: .2rem;
      font-size: .24rem;
      line-height: .24rem;
      font-weight: 400;
    }
    .head-infoList--activity {
      margin-bottom: .04rem;
      font-size: .24rem;
      font-weight: 400;
      line-height: .24rem;
      i {
        display: inline-block;
        vertical-align: top;
        margin-right: .08rem;
        width: .24rem;
        height: .24rem;
        &.decrease {
          @include bg-image(decrease_1);
          background-size: cover;
          background-repeat: no-repeat;
        };
        &.discount {
          @include bg-image(discount_1);
          background-size: cover;
          background-repeat: no-repeat;
        };
        &.guarantee {
          @include bg-image(guarantee_1);
          background-size: cover;
          background-repeat: no-repeat;
        };
        &.invoice {
          @include bg-image(invoice_1);
          background-size: cover;
          background-repeat: no-repeat;
        };
        &.special {
          @include bg-image(special_1);
          background-size: cover;
          background-repeat: no-repeat;
        }

      }
    }
    .head-infoList--title {
      margin-top: .04rem;
      margin-bottom: .12rem;
      font-size: .36rem;
      line-height: .36rem;
      font-weight: bold;
      i {
        display: inline-block;
        vertical-align: top;
        margin-right: .12rem;
        width: .6rem;
        height: .36rem;
        @include bg-image(brand);
        background-size: .6rem .36rem;
        background-repeat: no-repeat;
      }
    }
  }
}
</style>
