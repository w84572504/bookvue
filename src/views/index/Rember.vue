<template>
  <div>
    <top-li :data="data" :onid="onid" :time="time" @changeListId="getData" :row="22" class="topli">
    </top-li>
    <van-swipe :autoplay="6000" indicator-color="white" class="ban">
      <van-swipe-item v-for="(v, i) in banner" :key="i">
        <img class="banner" :src="v.img" />
      </van-swipe-item>
    </van-swipe>
    <hline></hline>
    <list v-for="(v,i) in data" :key="i" :id="v.id" :list="v.data" v-show="isShow(v.id)"></list>
  </div>
</template>

<script>
  import topLi from "./indexItem/topLi";
  import List from "./indexItem/List";
  import Hline from "./indexItem/Hline";
  import {getRember} from "network/index"
  export default {
    name: "Index",
    components:{
      List,
      topLi,
      Hline,
    },
    data() {
      return {
        banner:"",
        time:"",
        data:[],
        onid:0,
        list:[],
      }
    },
    mounted() {
      this.$wxShare('',()=>{
      })
    },
    created(){
      this._getRember()
    },
    methods:{
      _getRember(){
        getRember().then(res=>{
          if (res.code == 200){
            console.log(res);
            this.time = res.msg.time;
            this.banner = res.msg.banner;
            this.data = res.msg.list;
            this.onid = this.data[0].id
          }else{
            this.$toast.fail(res.msg);
          }
        })
      },
      isShow(id){
        return this.onid == id ? true : false
      },
      getData(id){
        this.onid = id;
      }
    },
  }
</script>

<style scoped>
  .ban{
    margin-bottom: 10px;
  }
  .banner{
    width: 100%;
    height: 200px;
  }
  .topli{
    height: 60px;
  }
</style>