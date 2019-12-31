<template>
  <div>
    <ul>
      <li v-for="(v,i) in arr" :key="i" >
        <van-row justify="center" type="flex" class="list-li">
          <van-col span="20" class="top-box">
            <p class="li-con li-ov" :ref="'text'+v.id" v-html="v.content"> </p>
            <p class="li-tit" >《{{v.title}}》</p>
            <div style="clear: both"></div>
            <p class="li-tit" style="color: #20a8ff;" :ref="'more'+v.id" @click="loadMore(v.id)">显示全文 ></p>
            <div style="clear: both"></div>
            <span class="li-btn">
              <zan :info="v"></zan>
            </span>
          </van-col>
        </van-row>
        <hline></hline>
      </li>
    </ul>
    <van-row justify="center" type="flex" class="list-li" >
      <van-col span="15" >
        <button class="getMore" @click="showZuan()">查看更多</button>
      </van-col>
    </van-row>
    <van-popup v-model="show" closeable close-icon-position="top-right">
      <div  class="alertpay">
        <p class="ptit">需要支付</p>
        <p class="midcon">{{payscore}} </p>
        <span class="iconfont icon-zuan xzuan" ></span>
        <p class="sheng">剩余 {{score}} <span class="iconfont icon-zuan " ></span></p>
        <div style="clear: both"></div>
        <div class="ftbtn">
          <van-row justify="center" type="flex" class="list-li">
            <van-col span="12" >
              <button class="alertbtn surepay" @click="getMore()">确认</button>
            </van-col>
            <van-col span="12" >
              <button class="alertbtn feepay" >免费获取</button>
            </van-col>
          </van-row>

        </div>
      </div>
    </van-popup>
  </div>
</template>

<script>
  import Hline from "./Hline";
  import Zan from "./Zan"
  import {getMore,uInfo} from "network/index"
  export default {
    name: "List",
    components:{
      Hline,
      Zan
    },
    props:{
      list:Array,
      onid:Number,

    },
    data(){
      return{
        arr:this.list,
        score:0,
        show:false,
        payscore:0,
      }
    },
    methods:{

      loadMore(id){
        let ids = 'text'+id;
        let mores = 'more'+id;
        if (this.$refs[mores][0].innerHTML == "收起"){
          this.$refs[ids][0].style.height='60px'
          this.$refs[mores][0].innerHTML='显示全文 >'
        }else{
          this.$refs[ids][0].style.height='auto'
          this.$refs[mores][0].innerHTML='收起'
        }
      },
      showZuan(){
        let that = this
        uInfo().then(res=>{
          if (res.code == 200){
            that.score = res.msg.msg.score
            that.show = true
            that.payscore = res.msg.msg.payscore
          }
        })

      },
      getMore(){
        let that = this;
        getMore(that.onid).then(res=>{
          if (res.code ==200){
            that.arr.push(res.msg.data);
            that.show = false;
          }else{
            that.show = false;
            this.$toast(res.msg);
          }
        })
      }


    }
  }
</script>

<style scoped>
  .list-li{
    padding: 20px 0;
  }
  .li-con{
    font-size:15px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:rgba(37,31,31,1);
    line-height: 30px;
  }
  .li-ov{
    height: 60px;
    overflow: hidden;
  }
  .li-tit{
    font-family:PingFangSC-Regular,PingFang SC;
    float: right;
    height: 30px;
    color: #939393;
    font-size: 12px;
    line-height: 30px;
  }
  .li-btn{
    float: right;
  }
  .getMore{
    font-family:PingFangSC-Regular,PingFang SC;
    width: 100%;
    height: 40px;
    background-color: #303030;
    border: none;
    color: #fff;
    border-radius: 5px;
  }
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
  .xzuan{
    float: right;
    margin-top: -35px;
    margin-right: 80px;
  }
  .sheng{
    font-size:16px;
    font-family:PingFangSC-Light,PingFang SC;
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
    font-family: PingFangSC-Light;
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
</style>