<template>
    <div>
        <van-row justify="center" type="flex" class="end">
            <van-col span="8" class="top-box">
                <!--<van-row>-->
                    <!--<van-col :span="row">-->
                        <!--<ul class="index_list">-->
                            <!--<li v-for="(v,i) in data" :key="i" :class="isActive(i)" @click="changeList(i,v.id)">{{v.name}}</li>-->
                        <!--</ul>-->
                    <!--</van-col>-->
                <!--</van-row>-->

            </van-col>
            <van-col v-for="(v,i) in data" :key="i" span="8" class="top-font t-mid" v-if="isShow(i)">
            {{v.name}}
            </van-col>
            <van-col v-for="(v,i) in data" :key="i"  span="8" class="top-font t-mid" v-if="!isShow(i)" @click="changeList(i,v.id)">
                {{v.name}}
            </van-col>
        </van-row>
    </div>
</template>

<script>
    export default {
        name: "TopStory",
        props:{
            data:Array,
            onid:Number,
        },
        data(){
            return{
                acid:this.onid,
            }
        },
        created(){
            this.name = this.title
        },
        methods:{
            changeList(id,tid){
                this.acid = id
                this.$emit('changeListId',tid)
            },
            isActive(i){
                return this.acid ===i ? ['onactive'] :''
            },
            isShow(i){
                return this.acid ===i ? true : false
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
    .top-font{
        font-size:18px;
        font-family:PingFangSC-Regular,PingFang SC;
        text-align: center;
        line-height: 60px;
    }
    .t-right{
        text-align: right;
        padding-right: 15px;
    }
</style>