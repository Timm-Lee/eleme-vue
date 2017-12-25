<template>
  <div>
    <Header :seller="seller"/>
    <div class="tab border-1px">
      <div class="tab-item">
        <router-link
          to="/goods"
          tag="a"
        >商品
        </router-link>
      </div>
      <div class="tab-item">
        <router-link
          to="/ratings"
          tag="a"
        >评论
        </router-link>
      </div>
      <div class="tab-item">
        <router-link
          to="/seller"
          tag="a"
        >商家
        </router-link>
      </div>
    </div>
    <router-view :seller="seller"></router-view>
  </div>
</template>

<script type="text/ecmascript-6">
import axios from 'axios';
import Header from './components/header/header';
import { urlParse } from 'common/js/util';

const ERR_OK = 0;

export default {
  data() {
    return {
      seller: {
        id: (() => {
          let queryParm = urlParse();
          console.log(queryParm);
          return queryParm.id;
        })()
      }
    };
  },
  created() {
    // axios.get('http://localhost:8080/api/seller?id=' + this.seller.id).then((response) => {
    axios.get('http://localhost:8080/api/seller').then((response) => {
      const data = response.data;
      // console.log(data);
      if (data.errno === ERR_OK) {
        this.seller = data.data;
        // console.log(this.seller);
        this.seller = Object.assign({}, this.seller, data.data);
      }
    });
  },
  components: {
    Header
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
@import './common/stylus/mixin.styl'

.tab
  height: 40px
  width: 100%
  line-height: 40px
  display: flex
  // border-bottom: 1px solid rgba(7, 17, 27, .1)
  border-1px(rgba(7, 17, 27, 0.1))

  .tab-item
    flex: 1
    text-align: center

    & > a
      display: block
      font-size: 14px
      color: rgb(77, 85, 93)

      &.active
        color: rgb(240, 20, 20)
</style>
