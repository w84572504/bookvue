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
                    <van-grid-item icon="chat-o" text="微信" @click="pengyou()"/>
                    <van-grid-item icon="photo-o" text="朋友圈" @click="quan()"/>
                    <van-grid-item icon="photo-o" text="复制链接" @click="copy()"/>
                    <van-grid-item icon="photo-o" text="生成海报" />
                </van-grid>
                </van-col>
                <button class="noshow" @click="show = false">取消</button>
            </van-row>
        </van-popup>
    </div>
</template>

<script>
    import {changeZan,wxconfig} from "network";
    import wx from 'weixin-js-sdk';
    export default {
        name: "Zan",
        comments:{
            wx,
        },
        props:{
            info:Object,
        },
        data(){
            return{
                status:this.info.zan,
                id:this.info.id,
                show:false
            }
        },
        created(){
            WeixinJSBridge.call(‘hideOptionMenu’);
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
                console.log(this.info);
                let url =  location.href
                wxconfig(url).then(res=>{
                    wx.config({
                        debug: true, // 开启调试模式,调用的所有api的返回值会在客户端alert出来，若要查看传入的参数，可以在pc端打开，参数信息会通过log打出，仅在pc端时才会打印。
                        appId: res.msg.data.appId, // 必填，公众号的唯一标识
                        timestamp: res.msg.data.timestamp, // 必填，生成签名的时间戳
                        nonceStr: res.msg.data.nonceStr, // 必填，生成签名的随机串
                        signature:  res.msg.data.signature,// 必填，签名
                        jsApiList: ['updateAppMessageShareData','updateTimelineShareData','checkJsApi','onMenuShareTimeline','onMenuShareAppMessage','onMenuShareQQ','onMenuShareWeibo'] // 必填，需要使用的JS接口列表
                    });
                })
            },
            pengyou(){
                // this._weconfig()
                console.log(WeixinJSBridge);
                this.weixinShareTimeline("23",'123','www.baicaiec.com','')
                // wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                //     wx.updateAppMessageShareData({
                //         title: this.info.title, // 分享标题
                //         desc: this.info.description, // 分享描述
                //         link: 'www.baicaiec.com/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                //         imgUrl: '', // 分享图标
                //         success: function () {
                //             // 设置成功
                //             console.log('分享成功');
                //         }
                //     })
                // });
            },
            quan(){
                this._weconfig()
                // wx.ready(function () {   //需在用户可能点击分享按钮前就先调用
                //     wx.updateTimelineShareData({
                //         title: this.info.title, // 分享标题
                //         link: 'www.baicaiec.com/index', // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
                //         imgUrl: '', // 分享图标
                //         success: function () {
                //             // 设置成功
                //             console.log('分享成功2');
                //         }
                //     })
                // });
            },
            weixinShareTimeline(title,desc,link,imgUrl){
                WeixinJSBridge.invoke('menu:share:appmessage',{
                    "img_url":imgUrl,
                    "link":link,
                    "desc": desc,
                    "title":title
                });
            },
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