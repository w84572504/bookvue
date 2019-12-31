<template>
  <div class="tabbar">
     <tab-bar-item path="/index/index" icon="icon-weibiaoti--" icon1="icon-weibiaoti--5">
       <span>左巷</span>
     </tab-bar-item>
    <tab-bar-item path="/index/story" icon="icon-weibiaoti--1" icon1="icon-weibiaoti--4">
      <span>故事</span>
    </tab-bar-item>
    <tab-bar-item path="/index/rember" icon="icon-weibiaoti--2" icon1="icon-weibiaoti--6">
      <span>记录</span>
    </tab-bar-item>
    <tab-bar-item path="/index/about" icon="icon-weibiaoti--3" icon1="icon-weibiaoti--7">
      <span>关于你</span>
    </tab-bar-item>
  </div>
</template>

<script>
  import tabBarItem from "./tabBarItem";

  export default {
    name: "tabBar",
    components:{
      tabBarItem,
    },
    data(){
      return{
        curIndex:0
      }
    }
  }
</script>

<style scoped>
  .tabbar{
    height: 70px;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #fff;
    box-shadow: 0 0 1px lightgray;
    display: flex;
    position: fixed;
  }
</style>