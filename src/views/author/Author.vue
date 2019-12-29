<template>
  <div>
  </div>
</template>

<script>
  import {getUrl,getOpen} from "network/author";
  import { mapActions } from 'vuex'
  export default {
    name: "Author",
    data(){
      return{
        redirect:"",
        token:"",
        url:""
      }
    },
    created() {
      if (this.$store.state.Authorization){
        this.$router.replace('/index/index')
      }else{
        this.redirect = this.$route.query.redirect;
        let code  = this.$route.query.code;
        if (code){

          this._getOpen(code);
        }else{
          //1.先获取默认跳转的code
          this._getUrl(this.redirect,1)
        }
      }
    },
    methods:{
      ...mapActions([ 'alogin', // 将 `this.alogin()` 映射为 `this.$store.dispatch('alogin')`
      ]),
      _getOpen(code){
        let urlarr = this.$route.query.url.split("?");
        let invest_id = 0;
        if (urlarr.length>1){
          let yid = urlarr[1].split("=");
          invest_id = yid[0] == 'yid' ? yid[1] : 0;
        }
        getOpen(code,invest_id).then(res=>{
          if (res.code == 200){
            if (res.msg.status == 1){
              let  token = "Bearer " + res.msg.token
              this.alogin(token)
              this.$router.replace(urlarr[0])
            }else{
              //授权页面登录
              this.url = res.msg.url;
              location.href = res.msg.url;
            }
          }
        })
      },
      _getUrl(reurl,type){
        getUrl(reurl,type).then(res=>{
          if (res.code == 200){
            location.href = res.msg.url;
          }
        })
      },
    }

  }
</script>

<style scoped>

</style>