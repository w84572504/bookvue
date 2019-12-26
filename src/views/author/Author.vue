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
          this._getUrl(this.redirect,0)
        }
      }
    },
    methods:{
      ...mapActions([ 'alogin', // 将 `this.alogin()` 映射为 `this.$store.dispatch('alogin')`
      ]),
      _getOpen(code){
        getOpen(code).then(res=>{
          console.log(res);
          if (res.code == 200){
            if (res.msg.status == 1){
              this.token = res.msg.token.access_token;
              this.alogin(res.msg.token.access_token)
              this.$router.replace('/')
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
            alert(res.msg.url)
            location.href = res.msg.url;
          }else{

          }

        })
      },
      _getCode(){

      }
    }

  }
</script>

<style scoped>

</style>