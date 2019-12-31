<template>
  <div class="item" :class="isActive" @click="ItemClick">
      <span class="iconfont" :class="geticon" ></span>
      <p><slot></slot></p>
  </div>
</template>

<script>
  export default {
    name: "tabBarItem",
    props:{
      path: String,
      icon:String,
      icon1:String
    },
    data(){
      return {
        curIndex: 0,
      }
    },
    computed:{
      isActive(){
        return this.$route.fullPath.indexOf(this.path) != -1 ? {'active':true} : ""
      },
      geticon(){
        return this.$route.fullPath.indexOf(this.path) != -1 ? this.icon1 : this.icon
      }
    },
    methods:{
      ItemClick(){
        this.$router.replace(this.path)
      }
    }
  }
</script>

<style scoped>
.item{
  flex: 1;
  text-align: center;
  padding-top: 6px;
  font-size: 12px;
  color: #979797;
  font-family:PingFangSC-Regular,PingFang SC;
}
  .item .iconfont{
    font-size: 30px;
  }
  .active{
    color: #251F1F;
  }
</style>