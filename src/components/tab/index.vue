<template lang="html">
  <!-- <div class="tab">
    <div class="tab-item">
      <a v-link="{path:'/good'}">商品</a>
    </div>
    <div class="tab-item">
      <a v-link="{path:'/ratings'}">评论</a></div>
    <div class="tab-item">
      <a v-link="{path:'/seller'}">商家</a></div>
  </div> -->
</template>

<script>
export default {
  data() {
    return {
    };
  },
  computed: {},
  ready() {},
  attached() {},
  methods: {},
  components: {}
};
</script>

<style lang="scss">
@import "../../common/style/minxin";

.tab {
  display: flex;
  width: 100%;
  height: .8rem;
  line-height: .8rem;
  // border-bottom: 1px solid rgba(7,17,27,0.1);
  @include border-1px(rgba(7,17,27,0.1));
  .tab-item {
    flex: 1;
    text-align: center;
    .active {
      color: red!important;
    }

    a {
      display: inline-block;
      width: 100%;
      color: rgb(77, 85, 93);
    }
  }
}
</style>
