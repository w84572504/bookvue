<template>
  <div id="app">
    <!--    <keep-alive>-->
    <router-view/>
    <loading />
    <!--    </keep-alive>-->
  </div>
</template>

<script>
  import Index from "./views/index/Index";
  import Loading from "components/Loding/Loding";
  export default {
    name: 'home',
    components: {
      Index,
      Loading
    },
  }
</script>
<style>
  @import url('assets/css/base.css');

</style>
