<template>
  <div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <div style="padding-top: 80px;"></div>
    <tab-bar ></tab-bar>
  </div>
</template>

<script>
  import tabBar from "components/tabBar/tabBar";
  export default {
    name: "Home",
    components:{
      tabBar
    },
  }
</script>

<style scoped>

</style>