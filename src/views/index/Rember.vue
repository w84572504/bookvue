<template>
  <div>
    记录
    <tab-bar :active="active"></tab-bar>
  </div>
</template>

<script>
  import tabBar from "components/tabBar";
  export default {
    name: "Rember",
    components:{
      tabBar
    },
    data() {
      return {
        active: "rember"
      }
    }
  }
</script>

<style scoped>

</style>