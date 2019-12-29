<template>
    <div>
        <van-icon name="replay" color="#C7C7C7" size="1.4rem" class="li-icon"/>
        <van-icon name="share" @click="share(id)" color="#C7C7C7" size="1.4rem" class="li-icon" />
        <van-icon name="paid" color="#C7C7C7" size="1.4rem" class="li-icon"/>
        <van-icon :name="getIcon(status)" :color="getColor(status)" size="1.4rem" class="li-icon" @click="changeZan(status,id)"/>
        <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }" >
            <van-row justify="center" type="flex" class="list-li">
                <van-col span="20" class="top-box">
                <van-grid :border="false" class="libtn" >
                    <van-grid-item icon="chat-o" text="微信" @click=""/>
                    <van-grid-item icon="photo-o" text="朋友圈" />
                    <van-grid-item icon="photo-o" text="复制链接" />
                    <van-grid-item icon="photo-o" text="生成海报" />
                </van-grid>
                </van-col>
                <button class="noshow" @click="show = false">取消</button>
            </van-row>
        </van-popup>
    </div>
</template>

<script>
    import {changeZan} from "network";
    import wx from 'weixin-js-sdk';
    export default {
        name: "Zan",
        comments:{
            wx,
        },
        props:{
            zan:Number,
            id:Number,
        },
        data(){
            return{
                status:this.zan,
                show:false
            }
        },
        methods:{
            getIcon(status){
                return status == 1 ? "good-job" :"good-job-o";
            },
            getColor(status){
                return status == 1 ? "#ffa98d" :"#C7C7C7";
            },
            changeZan(status,id){
                this.status = status == 1 ? 0 : 1;
                changeZan(id,this.status).then()
            },
            share(id){
                this.show = true;
            },
            _weconfig(){
                wx.config({
                    debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                    appId: '', // 必填，公众号的唯一标识
                    timestamp: 123, // 必填，生成签名的时间戳
                    nonceStr: '', // 必填，生成签名的随机串
                    signature: '',// 必填，签名
                    jsApiList: [] // 必填，需要使用的JS接口列表
                });
            }
        }
    }
</script>

<style scoped>
    .li-icon{
        margin-left: 10px;
    }
    .libtn{
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