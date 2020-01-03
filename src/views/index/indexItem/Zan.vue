<template>
    <div>
        <span class="iconfont icon-getwx li-icons" @click="getwx(info)"></span>
        <span class="iconfont icon-share li-icons" @click="showImg(info)"></span>
        <span class="iconfont icon-haibao li-icons" @click="shang(info)"></span>
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
        <van-popup v-model="show_pay" closeable close-icon-position="top-right">
            <div  class="alertpay">
                <p class="ptit">获取作者联系方式支付</p>
                <p class="midcon paymid">{{money}}￥</p>
                <div style="clear: both"></div>
                <div class="ftbtn">
                    <van-row justify="center" type="flex" class="list-li">
                        <van-col span="12" >
                            <button class="alertbtn surepay" @click="paymoney(2)">确定付款</button>
                        </van-col>
                    </van-row>

                </div>
            </div>
        </van-popup>
        <van-popup v-model="show_author" closeable close-icon-position="top-right">
            <div  class="alertpay">
                <p class="ptit "><span class="iconfont icon-weixin author-icon" ></span>作者微信号</p>
                <p class="midcon author-mid">({{author}})</p>
                <p class="author-bei">(添加微信时备注来源左巷)</p>
                <div style="clear: both"></div>
                <div class="ftbtn">
                    <van-row justify="center" type="flex" class="list-li">
                        <van-col span="18" >
                            <button class="alertbtn surepay" @click="close()">好的</button>
                        </van-col>
                    </van-row>

                </div>
            </div>
        </van-popup>
        <van-popup v-model="show_list" closeable close-icon-position="top-right">
            <div  class="alertpay">
                <p class="ptit">打赏作者</p>
                <div class="shang-mid">
                    <van-grid :gutter="22" :column-num="3" :border="false" :square="true" >
                    <van-grid-item class="gezi" @click="clickgezi(5)">
                        <div class="gezi-b" :class="isActive(5)"> <p>5</p> <span class="iconfont ">元</span> </div>
                    </van-grid-item>
                        <van-grid-item class="gezi" @click="clickgezi(10)">
                            <div class="gezi-b" :class="isActive(10)"> <p>10</p> <span class="iconfont ">元</span> </div>
                        </van-grid-item>
                        <van-grid-item class="gezi" @click="clickgezi(20)">
                            <div class="gezi-b" :class="isActive(20)"> <p>20</p> <span class="iconfont ">元</span> </div>
                        </van-grid-item>
                        <van-grid-item class="gezi" @click="clickgezi(50)">
                            <div class="gezi-b" :class="isActive(50)"> <p>50</p> <span class="iconfont ">元</span> </div>
                        </van-grid-item>
                        <van-grid-item class="gezi" @click="clickgezi(100)">
                            <div class="gezi-b" :class="isActive(100)"> <p>100</p> <span class="iconfont ">元</span> </div>
                        </van-grid-item>
                        <van-grid-item class="gezi" @click="clickgezi(200)">
                            <div class="gezi-b" :class="isActive(200)"> <p>200</p> <span class="iconfont ">元</span> </div>
                        </van-grid-item>
                </van-grid></div>
                <div style="clear: both"></div>
                <div class="ftbtn">
                    <van-row justify="center" type="flex" class="list-li">
                        <van-col span="12" >
                            <button class="alertbtn shangpay" @click="paymoney(1)">好的</button>
                        </van-col>
                        <van-col span="12" >
                            <button class="alertbtn shangpay shang-qu" @click="close()">取消</button>
                        </van-col>
                    </van-row>

                </div>
            </div>
        </van-popup>
        <!--公共-->
        <van-popup v-model="show_ok">
            <div  class="alertpay">
                <p class="ptit">{{okmsg}}</p>
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
        <van-popup v-model="show_err">
            <div  class="alertpay">
                <p class="ptit">{{errmsg}}</p>
                <p class="midcon okmid"><span class="iconfont icon-shibai " ></span></p>
                <div style="clear: both"></div>
                <div class="ftbtn">
                    <van-row justify="center" type="flex" class="list-li">
                        <van-col span="12" >
                            <button class="alertbtn feepay" @click="close()">好的</button>
                        </van-col>
                    </van-row>

                </div>
            </div>
        </van-popup>
    </div>
</template>

<script>
    import {changeZan,getShareImg,getauthor,payMoney} from "network";
    export default {
        name: "Zan",
        components: {

        },
        props:{
            info:Object,
        },
        data(){
            return{
                status:this.info.zan,
                id:this.info.id,
                show:false,
                img:"",
                author:'',
                money:0,
                show_pay:false,
                show_author:false,
                show_list:false,
                show_ok:false,
                show_err:false,
                errmsg:"支付失败",
                okmsg:'支付成功',
                shangid:0
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
            getwx(info){
                getauthor(info.id).then(res=>{
                    console.log(res);
                    if (res.code == 200){
                        if (res.msg.status == 1){
                            this.author = res.msg.author
                            this.show_author = true
                        }else{
                            this.money = res.msg.money
                            this.show_pay = true
                        }
                    }else{
                        this.$toast("加载失败！")
                    }
                })
            },
            shang(){
                this.show_list = true
            },
            paymoney(type){
                let money = 0;
                if (type == 1){
                    money = this.shangid
                }else{
                    money = this.money
                }
                payMoney(type,this.info.id,money).then(res=>{
                    if (res.code == 200){
                        if (type == 2){
                            this.show_pay = false
                        }
                        this.show_ok = true
                    }
                    console.log(res);
                })
            },
            close(){
                this.show_ok= false;
                this.show_err= false;
                this.show_pay= false;
                this.show_author= false;
                this.show_list = false
            },
            isActive(i){
                return this.shangid == i ? 'gezi-on' :'';
            },
            clickgezi(i){
                this.shangid = i;
            },
        }
    }
</script>

<style scoped>
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
    .shangpay{
        background-color: #303030;
        width:88px;
        height:36px;

    }
    .feepay{
        width:100px;
        height:36px;
        background-color: #40D9BE;
    }
    .paymid{
        padding: 80px 0;
    }
    .okmid{
        padding: 50px 0;
    }
    .author-mid{
        font-size: 20px;
        padding-top:50px;
        color: #303030;
    }
    .author-bei{
        font-size: 14px;
        text-align: center;
        padding-top:10px;
        padding-bottom: 70px;
        color: #939393;
    }
    .author-icon{
        font-size: 24px;
        line-height: 30px;
        padding-right: 10px;
    }
    .gezi{
        font-size: 25px;
    }
    .gezi-b{
        border:1px solid #000000;
        border-radius: 4px;
        position: relative;
    }
    .gezi-b p{
        font-size: 14px;
        width: 45px;
        height: 45px;
        text-align: center;
        line-height: 45px;
    }
    .gezi-b span{
        position: absolute;
        right: 3px;
        bottom: 3px;
        font-size: 10px;
    }
    .gezi-on{
        background-color: #000000;
        color: #ffffff;
    }
    .shang-mid{
        padding-top: 30px;
        padding-bottom: 20px;
    }
    .shang-qu{
        background-color: #40D9BE;
    }
</style>