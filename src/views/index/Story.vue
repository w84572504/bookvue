<template>
  <div>
    故事
    <van-tabbar v-model="active" active-color="#333333" inactive-color="#979797">
      <van-tabbar-item icon="home-o"  to="/index/index">左巷</van-tabbar-item>
      <van-tabbar-item icon="search" to="/index/story">故事</van-tabbar-item>
      <van-tabbar-item icon="friends-o" to="/index/rember">记录</van-tabbar-item>
      <van-tabbar-item icon="setting-o" to="/about/index">关于你</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "Story",
    data() {
      return {
        active: 1
      }
    }
  }
</script>

<style scoped>

</style>