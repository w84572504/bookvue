<template>
  <div id="app">
        <!--<keep-alive>-->
    <router-view v-if="isRouterAlive" />
    <loading />
        <!--</keep-alive>-->
  </div>
</template>

<script>
  import Loading from "components/Loding/Loding";
  export default {
    name: 'home',
    components: {
      Loading
    },
    provide(){
      return {
          reload: this.reload
      }
    },
    data: function () {
        return {
            isRouterAlive: true
        }
    },
    methods:{
      // 刷新方法
      reload: function () {
          this.isRouterAlive = false
          this.$nextTick(function () {
              this.isRouterAlive = true
          })
      }
    }
  }
</script>
<style>
  @import url('assets/css/base.css');

</style>
