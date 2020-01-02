<template>
  <div >
    <div class="yaobg">
      <van-popup v-model="show" class="tanchuang" style="background: none;" :close-on-click-overlay="false" >
        <img class="yaoimg" :src="img">
        <p class="tanchuangp">温馨提示：每邀请一个好友可获得左钻，将此码群发好友或转发到朋友圈可有更大几率获得左钻</p>
        <p class="baocun" >
          <img src="~assets/img/baocun.png" width="20px" alt=""><br>
          <span>长按图片保存到本地</span>
        </p>
      </van-popup>
    </div>

  </div>
</template>

<script>
  import {getShareImgs} from "network";
  export default {
    name: "TuiJian",
    data(){
      return{
        img:"",
        show:true
      }
    },
    created(){
      getShareImgs().then(res=>{
        if (res.code == 200){
          this.img = res.msg.img
        }else{
          this.$toast("生成失败！")
        }
      })
    },
  }
</script>

<style scoped>
  .tanchuang{
    background-color: none;
  }
  .tanchuangp{
    color: #fff;
    font-size: 10px;
    line-height: 18px;
    text-align: center;
    padding: 12px 10px;
  }
  .baocun{
    width: 100%;
    text-align: center;
    color: #fff;
    font-size: 12px;
  }
  .baocun span{
    line-height: 30px;
  }
  .yaobg{
    background-color: #979797;
    height: 100vh;
  }
  .yaoimg{
    width: 250px;

  }
</style>