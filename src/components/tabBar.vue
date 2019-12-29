<template>
  <div>
    <div style="height: 60px;"></div>
    <van-tabbar v-model="active" active-color="#333333" inactive-color="#979797" >
      <van-tabbar-item name="index" icon="home-o"  to="/index/index">左巷</van-tabbar-item>
      <van-tabbar-item name="story" icon="search" to="/index/story">故事</van-tabbar-item>
      <van-tabbar-item name="rember" icon="friends-o" to="/index/rember">记录</van-tabbar-item>
      <van-tabbar-item name="about" icon="setting-o" to="/index/about">关于你</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
  export default {
    name: "tabBar",
    data(){
      return{
        active: 'index'
      }
    },
    created(){

    }
  }
</script>

<style scoped>

</style>