<template>
    <div>
        <div class="user-top">
            <van-row justify="center" type="flex" class="top">
                <van-col span="22" >
                    <div class="top-box">
                        <van-icon name="setting-o" class="icon-set" />
                        <div class="uimg"><van-image round width="5rem" height="5rem" :src="user.wx_img" /></div>
                        <p>{{user.wx_name}}</p>
                        <p>ID:{{user.id}}</p>
                    </div>
                </van-col>
            </van-row>
        </div>
        <div class="ucell">
            <van-cell is-link size="large" class="lis" >
                <template slot="title">
                    <span class="custom-title">
                        <span class="iconfont icon-zuan iconp"  ></span>获取左钻
                    </span>

                </template>
            </van-cell>
            <van-cell is-link size="large" class="lis">
                <template slot="title">
                    <span class="custom-title">
                        <span class="iconfont icon-liwu iconp"  ></span>推荐有礼
                    </span>

                </template>
            </van-cell>
            <van-cell is-link size="large" class="lis">
                <template slot="title">
                    <span class="custom-title">
                        <span class="iconfont icon-lianxi iconp"  ></span>联系我们
                    </span>

                </template>
            </van-cell>
            <van-cell is-link size="large" class="lis">
                <template slot="title">
                    <span class="custom-title">
                        <span class="iconfont icon-guanyu iconp"  ></span>关于左巷
                    </span>

                </template>
            </van-cell>
            <div class="van-hairline--bottom"></div>
        </div>
        <van-row justify="center" type="flex" class="top">
            <van-col span="18" >
                <p class="zhuyi">
                    注:关注运营主体公众号以防把我们弄丢哦 <br>(搜索左巷story或zuoxiangstory公众号关注即可）
                </p>

            </van-col>
        </van-row>
    </div>
</template>

<script>
    import { getuser } from "network/index"
    export default {
        name: "About",
        components:{
        },
        data(){
            return {
                user:{}
            }
        },
        created(){
            this._getuser()
        },
        methods:{
            _getuser(){
                getuser().then(res=>{
                    if (res.code == 200){
                        this.user = res.msg.user;
                    }
                })
            }
        }
    }
</script>

<style scoped>
    .top-box{
        text-align: center;
        position: relative;
        color: #fff;
    }
    .top-box p{
        height: 30px;
        line-height: 30px;
    }
    .icon-set{
        position: absolute;
        right: 0px;
        top: 0px;
        font-size: 25px;
    }
    .user-top{
        background-image: url("~assets/img/userbg.jpg");
        background-repeat: no-repeat;
        background-size: cover; /* 重点二 */
        height: 170px;
    }
    .uimg{
        margin-top: 20px;
    }
    .ucell{
        padding-top: 20px;
    }
    .iconp{
        font-size: 20px;
        padding-right: 10px;
    }
    .zhuyi{
        text-align: center;
        font-size: 12px;
        color: #979797;
        padding-top: 7rem;
        line-height: 20px;
    }
    .custom-title{
        font-size: 14px;
    }
    .lis{
        padding-bottom: 5px;
        padding-top: 25px;
    }
</style>