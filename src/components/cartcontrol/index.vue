<template>
  <div class="cartcontrol">

      <div class="cart-decrease" v-show="food.count>0" @click.stop.prevent="decreaseCart"
           transition="move">
        <span class="inner iconfont icon-remove_circle_outline"></span>
      </div>


    <div class="cart-count" v-show="food.count>0">{{food.count}}</div>
    <div class="cart-add iconfont icon-add_circle" @click.stop.prevent="addCart"></div>
  </div>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue';

  export default {
    props: {
      food: {
        type: Object
      }
    },
    methods: {
      addCart() {

        // if (!event._constructed) {
        //   return;
        // }
        if (!this.food.count) {
          Vue.set(this.food, 'count', 1);
        } else {
          this.food.count++;
        }
        // this.$dispatch('cart.add', event.target);
      },
      decreaseCart() {
        // if (!event._constructed) {
        //   return;
        // }
        if (this.food.count) {
          this.food.count--;
        }
      }
    }
  };
</script>

<style lang="scss">
  .cartcontrol {
    .iconfont {
      font-size: .48rem;
      color: rgb(0, 160, 220);
    }
    .cart-decrease {
      display: inline-block;
      padding: .12rem;
      font-size: .48rem;
      transition: all 0.4s linear;
      &.move-transition {
        opacity: 1;
        transform: translate3d(0, 0, 0);
        .inner {
          display: inline-block;
          line-height: .48rem;
          font-size: .48rem;
          color: rgb(0, 160, 220);
          transition: all 0.4s linear;
          transform: rotate(0);
        }
      }

      &.move-enter, &.move-leave {
        opacity: 0;
        transform: translate3d(24px, 0, 0);
        .inner {
          transform: rotate(180deg);
        }
      }
    }

    .cart-count {
      display: inline-block;
      vertical-align: top;
      width: .24rem;
      padding-top: .12rem;
      line-height: .48rem;
      text-align: center;
      font-size: .2rem;
      color: rgb(147, 153, 159);
    }
    .cart-add {
      display: inline-block;
      padding: .12rem;
      line-height: .48rem;
      font-size: .48rem;
      color: rgb(0, 160, 220);
    }

  }

</style>
