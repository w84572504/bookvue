<template>
  <div>
    <van-row justify="center" type="flex" class="top">
      <van-col span="22" >
        <button class="btn-mf" @click="showimg()">免费获取</button>
        <div style="clear: both"></div>
        <van-row justify="center" type="flex" class="top">
          <van-col span="19" >
            <p class="zhuyi">注： 1个左钻等于1人民币</p>
          </van-col>
        </van-row>
        <van-grid :gutter="22" :column-num="3" :border="false" :square="true" >
          <van-grid-item v-for="(v,i) in data" :key="i" class="gezi" @click="clickgezi(i)">
            <div class="gezi-b" :class="isActive(i)">
              <p>{{i}}</p>
              <span class="iconfont icon-zuan"></span>
            </div>
          </van-grid-item>
        </van-grid>
        <van-row justify="center" type="flex" class="top">
          <van-col span="14" >
        <button class="btn-zhifu" @click="zhifu()" >微信支付</button>
          </van-col>
        </van-row>
      </van-col>
    </van-row>
    <van-popup v-model="show" class="tanchuang" style="background: none;">
      <img width="250" :src="img">
      <p class="tanchuangp">温馨提示：每邀请一个好友可获得左钻，将此码群发好友或转发到朋友圈可有更大几率获得左钻</p>
      <p class="baocun" >
        <img src="~assets/img/baocun.png" width="50px" alt=""><br>
        <span>长按图片保存到本地</span>
      </p>
    </van-popup>
    <van-popup v-model="show_ok">
      <div  class="alertpay">
        <p class="ptit">支付成功</p>
        <p class="midcon okmid"><span class="iconfont icon-chenggong " ></span></p>
        <div style="clear: both"></div>
        <div class="ftbtn">
          <van-row justify="center" type="flex" class="list-li">
            <van-col span="12" >
              <button class="alertbtn surepay" @click="close()">好的</button>
            </van-col>
          </van-row>

        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import {getShareImgs,rechagelist,payMoney} from "network";
  export default {
    name: "Rechage",
    data(){
      return{
        img:"",
        show:false,
        data:[],
        onid:0,
        show_ok:false
      }
    },
    created(){
      this.$wxShare('',()=>{
      })
      this._rechagelist()
    },
    methods:{
      showimg(){
        let that = this
        getShareImgs().then(res=>{
          if (res.code == 200){
            that.img = res.msg.img
            that.show = true;
          }else{
            this.$toast("生成失败！")
          }
        })
      },
      _rechagelist(){
        rechagelist().then(res=>{
          if (res.code == 200){
            this.data= res.msg.data;
          }else{
            this.$toast("获取列表失败！")
          }
        })
      },
      isActive(i){
        return this.onid == i ? 'gezi-on' :'';
      },
      clickgezi(i){
        this.onid = i;
      },
      zhifu(){
        if (this.onid == 0){
          this.$toast.fail('选择支付金额！');
        }else {
          payMoney(0,0,this.onid).then(res=>{
            if(res.code == 200){
              let config = res.msg.config
              this.onBridgeReady(config)
            }
          })
        }

      },
      onBridgeReady(config){
        let that = this
        WeixinJSBridge.invoke(
          'getBrandWCPayRequest', {
            "appId":config.appId,     //公众号名称，由商户传入
            "timeStamp":config.timeStamp,         //时间戳，自1970年以来的秒数
            "nonceStr":config.nonceStr, //随机串
            "package":config.package,
            "signType":config.signType,         //微信签名方式：
            "paySign":config.paySign //微信签名
          },
          function(res){
            if(res.err_msg == "get_brand_wcpay_request:ok" ){
              that.show_ok = true
            }
          });
      },
      close(){
        this.show_ok=false
      }
    },
  }
</script>

<style scoped>
  .top{
    padding-top: 10px;
  }
  .btn-mf{
    border-radius: 35px;
    color: #fff;
    background-color: #000000;
    border:none;
    font-size: 14px;
    width:88px;
    height:30px;
    float: right;
    margin-top: 10px;
  }
  .btn-zhifu{
    border-radius: 35px;
    color: #fff;
    background-color: #333333;
    border:none;
    font-size: 14px;
    width:100%;
    height:40px;
  }
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
    font-size: 14px;
  }
  .baocun span{
    line-height: 30px;
  }
  .zhuyi{
    font-size: 14px;
    padding-bottom: 20px;
    padding-top: 20px;
  }
  .gezi{
    font-size: 25px;
  }
  .gezi-b{
    border:1px solid #000000;
    padding: 10px;
    border-radius: 4px;
    position: relative;
  }
  .gezi-b p{
    width: 50px;
    height: 50px;
    text-align: center;
    line-height: 50px;
  }
  .gezi-b span{
    position: absolute;
    right: 5px;
    bottom: 5px;
    font-size: 12px;
  }
  .gezi-on{
    background-color: #000000;
    color: #ffffff;
  }

  .alertpay{
    width: 18rem;
    border-radius: 10px;
  }
  .ptit{
    font-size: 16px;
    text-align: center;
    padding-top: 20px;
    font-weight: bold;
  }
  .midcon{
    font-size:50px;
    font-weight: bold;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(48,48,48,1);
    text-align: center;
    padding-top: 10px;
  }
  .midcon span{
    font-size: 100px;
  }
  .ftbtn{
    text-align: center;
    padding-bottom: 20px;
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
    width:150px;
    height:36px;

  }
  .okmid{
    padding: 50px 0;
  }

</style>