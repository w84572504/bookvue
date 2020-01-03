<template>
  <div>
    <van-row justify="center" type="flex" class="top">
      <van-col span="24" >
        <img src="~assets/img/ban.jpg" class="banner">
        <div class="con" v-html="message"></div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  import {about} from "network";
  export default {
    name: "Us",
    data(){
      return{
        message:''
      }
    },
    created(){
      about(1).then(res=>{
        if (res.code == 200){
          console.log(res);
          this.message = res.msg.msg.content
        }else{
          this.$toast("生成失败！")
        }
      })
    },
  }
</script>

<style scoped>
.banner{
  width: 100%;
  height: auto;
}
  .con{
    padding: 20px;
    line-height: 25px;
    font-size: 14px;
  }
</style>