<template>
  <div id="app">
    <v-head :seller="seller"></v-head>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link to="/" exact>商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script>
import {urlParse} from './common/js/util';
import head from '@/components/header'
import tab from '@/components/tab'
import content from '@/components/content'
export default {
  name: 'app',
  data() {
    return {
      seller: {
        id: (() => {
            let queryParam = urlParse();
            return queryParam.id;
          })()
      }
    }
  },
  components: {
    'v-head': head
  },
  created() {
    //获取商家所有信息
    this.$http.get('/api/seller').then((res) => {
      this.seller = res.data.data
    })
  }
}
</script>

<style lang='scss'>

</style>
