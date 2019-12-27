<template>
  <div>
    <top-li :data="data" :onid="onid" :time="time" @changeListId="getData"></top-li>
    <van-swipe :autoplay="6000" indicator-color="white" class="ban">
      <van-swipe-item v-for="(v, i) in banner" :key="i">
        <img class="banner" :src="v.img" />
      </van-swipe-item>
    </van-swipe>
    <hline></hline>
    <list :list="list"></list>
    <tab-bar :active="active"></tab-bar>
  </div>
</template>

<script>
  import tabBar from "components/tabBar";
  import topLi from "./indexItem/topLi";
  import List from "./indexItem/List";
  import Hline from "./indexItem/Hline";
  import {getIndex,getList} from "network/index"
  export default {
    name: "Index",
    components:{
      List,
      tabBar,
      topLi,
      Hline,
    },
    data() {
      return {
        active: "index",
        banner:"",
        time:"",
        data:[],
        onid:0,
        list:[]
      }
    },
    created(){
      this._getIndex()
    },
    methods:{
      _getIndex(){
        getIndex().then(res=>{
        if (res.code == 200){
          console.log(res.msg);
          this.time = res.msg.time;
          this.banner = res.msg.banner;
          this.data = res.msg.list;
          this.onid = this.data[0].id
          this._getList(this.onid)
        }else{
          this.$toast.fail(res.msg);
        }
        })
      },
      _getList(id){
        getList(id).then(res=>{
          if (res.code == 200){
            console.log(res);
            let arr = res.msg.data
            if (arr.length != 0){
              arr.map( item => {
                this.list.push(item);
              });
            }
          }else{
            this.$toast.fail(res.msg);
          }
        })
      },
      getData(id){
        this.list.splice(0,this.list.length);
        this._getList(id)
      }
    }
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

</style>