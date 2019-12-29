<template>
  <div>
    <keep-alive>
    <router-view></router-view>
    </keep-alive>
    <tab-bar ></tab-bar>
  </div>
</template>

<script>
  import tabBar from "components/tabBar";
  export default {
    name: "Home",
    components:{
      tabBar
    },
  }
</script>

<style scoped>

</style>