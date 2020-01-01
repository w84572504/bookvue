<template>
  <div>
    <van-row justify="center" type="flex" class="top">
      <van-col span="22" class="top-box">
        <van-row>
          <van-col :span="row">
            <ul class="index_list">
              <li v-for="(v,i) in data" :key="i" :class="isActive(i)" @click="changeList(i,v.id)">{{v.name}}</li>
            </ul>
          </van-col>
          <slot name="gengxin">

          </slot>

        </van-row>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "topLi",
    data(){
      return{
        acid:this.onid
      }
    },
    props:{
      data:Array,
      onid:Number,
      time:String,
      row:Number

    },
    methods:{
      changeList(id,tid){
        this.acid = id
        this.$emit('changeListId',tid)
      },
      isActive(i){
        return this.acid ===i ? ['onactive'] :''
      }
    },
    computed:{

    }
  }
</script>

<style scoped>
  .top{
    margin-bottom: 10px;
  }
  .index_list{
    padding-top: 20px;
  }
  .index_list li {
    float: left;
    font-size: 16px;
    margin: 0  10px;
    font-family:PingFangSC-Light,PingFang SC;
    font-weight:300;
    color:#605C5C;
  }
  .onactive{
    font-size:16px;
    font-family:PingFangSC-Regular,PingFang SC;
    font-weight:400;
    color:#3B3B3B !important;
    padding-bottom: 3px;
    border-bottom: 3px solid #3BD7BB;
    border-radius: 3px;
  }

</style>