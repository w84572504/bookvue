<template>
  <div>
    关于我们
    <tab-bar :active="active"></tab-bar>
  </div>
</template>

<script>
  import tabBar from "components/tabBar";
  export default {
    name: "Index",
    components:{
      tabBar
    },
    data() {
      return {
        active: "about"
      }
    }
  }
</script>

<style scoped>

</style>