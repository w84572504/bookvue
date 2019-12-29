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
              <zan :zan="v.zan" :id="v.id"></zan>
            </span>
          </van-col>
        </van-row>
        <hline></hline>
      </li>
    </ul>
  </div>
</template>

<script>
  import Hline from "./Hline";
  import Zan from "./Zan"

  export default {
    name: "List",
    components:{
      Hline,
      Zan
    },
    props:{
      list:Array,

    },
    data(){
      return{
        arr:this.list,
        show:false
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

</style>