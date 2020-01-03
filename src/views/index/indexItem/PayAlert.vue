<template>
  <div>
    <van-popup v-model="show" closeable close-icon-position="top-right">
      <div  class="alertpay">
        <p class="ptit"><slot name="title"></slot></p>
        <p class="midcon"><span class="iconfont icon-chenggong " ></span></p>
        <div style="clear: both"></div>
        <div class="ftbtn">
          <van-row justify="center" type="flex" class="list-li">
            <van-col span="12" >
              <button class="alertbtn surepay" @click="showoks()">继续阅读</button>
            </van-col>
          </van-row>
        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  export default {
    name: "PayAlert",
    props:{
      show:Boolean,
      title:String
    },
    data(){
      return{
        payshows:this.show
      }

    }
  }
</script>

<style scoped>
  .alertpay{
    width: 18rem;
    border-radius: 10px;
  }
  .ptit{
    font-size: 20px;
    text-align: center;
    padding-top: 20px;
  }
  .midcon{
    font-size:100px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(48,48,48,1);
    text-align: center;
    padding-top: 10px;
  }
  .midcon span{
    font-size: 100px;
  }
  .xzuan{
    float: right;
    margin-top: -35px;
    margin-right: 80px;
  }
  .sheng{
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    float: right;
    color: #C7C7C7;
    padding-right: 10px;
    height: 40px;
    line-height: 40px;
  }
  .ftbtn{
    text-align: center;
  }
  .alertbtn{
    border:none;
    color: #fff;
    font-family: PingFangSC-Regular;
    font-size: 16px;
    border-radius:4px;
  }
  .surepay{
    background-color: #303030;
    width:88px;
    height:36px;

  }
  .feepay{
    width:100px;
    height:36px;
    background-color: #40D9BE;
  }
  .errmsg{
    text-align: center;
    font-size: 14px;
    line-height: 28px;
  }
</style>