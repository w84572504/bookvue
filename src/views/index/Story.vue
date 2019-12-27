<template>
  <div>
    故事
    <tab-bar :active="active"></tab-bar>
  </div>
</template>

<script>
  import tabBar from "components/tabBar";
  export default {
    name: "Story",
    components:{
      tabBar
    },
    data() {
      return {
        active: "story"
      }
    }
  }
</script>

<style scoped>

</style>