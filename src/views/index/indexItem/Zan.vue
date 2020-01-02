<template>
    <div>
        <span class="iconfont icon-getwx li-icons" ></span>
        <span class="iconfont icon-share li-icons" @click="showImg(info)"></span>
        <span class="iconfont icon-haibao li-icons" ></span>
        <span class="iconfont  li-icons" :class="getIcon(status)" :style=" getColor(status)" @click="changeZan(status,id)"></span>
<!--        <van-icon :name="" :color="" size="1.4rem" class="li-icon" />-->
        <van-popup v-model="show" class="tanchuang" style="background: none;">
            <img width="250" :src="img">
            <p class="tanchuangp">温馨提示：每邀请一个好友可获得左钻，将此码群发好友或转发到朋友圈可有更大几率获得左钻</p>
            <p class="baocun" >
                <img src="~assets/img/baocun.png" width="50px" alt=""><br>
                <span>长按图片保存到本地</span>
            </p>
        </van-popup>

    </div>
</template>

<script>
    import {changeZan,getShareImg} from "network";
    export default {
        name: "Zan",
        comments:{
        },
        props:{
            info:Object,
        },
        data(){
            return{
                status:this.info.zan,
                id:this.info.id,
                show:false,
                img:""
            }
        },
        created(){
        },
        methods:{
            getIcon(status){
                return status == 1 ? "icon-zan-on" :"icon-zan";
            },
            getColor(status){
                return status == 1 ? "color:#ffa98d" :"";
            },
            changeZan(status,id){
                this.status = status == 1 ? 0 : 1;
                changeZan(id,this.status).then()
            },
            showImg(info){
                let that = this
                getShareImg(info.id,info.title,info.description).then(res=>{
                    if (res.code == 200){
                        that.img = res.msg.img
                        that.show = true;
                    }else{
                        this.$toast("生成失败！")
                    }
                })
            },
        }
    }
</script>

<style scoped>
    .li-icon{
        margin-top: -5px;
    }
    .li-icons{

        font-size: 20px;
        color: #C7C7C7;
        margin-left: 12px;
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
    .noshow{
        width: 100%;
        height: 3rem;
        border: none;
        background: #fff;
        border-top: 1px solid #EEEEEE;
        position: absolute;
        bottom: 0px;
    }
</style>