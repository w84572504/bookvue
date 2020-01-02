<template>
  <div>
    <div class="ucell">
      <van-cell is-link size="large" class="lis" @click="publish">
        <template slot="title">
          <span class="custom-title" > 头像 </span>
        </template>
        <div slot="right-icon">
            <van-image round width="3rem" height="3rem" :src="user.wx_img" />
            <van-icon  style="float: right; padding-top: 1.4rem; font-size: 18px; padding-left: 10px;" name="arrow"></van-icon>
        </div>
      </van-cell>
      <van-cell is-link size="large" class="lis" @click="showName()">
        <template slot="title">
          <span class="custom-title"> 昵称 </span>
        </template>
        <div slot="right-icon">
          <span style="line-height: 3rem; font-size: 18px;">{{user.wx_name}}</span>
          <van-icon  style="float: right; padding-top: 1.2rem; font-size: 18px; padding-left: 10px;" name="arrow"></van-icon>
        </div>
      </van-cell>
      <div class="van-hairline--bottom"></div>
    </div>
    <input  id="img" type="file" accept="image/*" class="input" name="image" v-show="false" @change="changeInput()">
    <van-popup v-model="show" round position="bottom" :style="{ height: '20%' }" closeable>
        <van-row justify="center" type="flex" class="bt-name">
          <van-col span="20" class="top-box">
            <van-field v-model="newname" label="昵称" placeholder="请输入新的昵称" :error-message="errmsg" >
              <van-button slot="button" size="small" type="primary" @click="editName">确认</van-button>
            </van-field>
          </van-col>
        </van-row>
    </van-popup>
  </div>
</template>

<script>
  import { getuser,upImg,editname } from "network/index"
  import Until from 'common/Until'
  export default {
    name: "SetUser",
    data(){
      return {
        user:{},
        show:false,
        newname:"",
        errmsg :'',

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
      },
      setUser(){
        this.$router.push('/index/about/setuser')
      },
      publish(){
        document.getElementById("img").click();
      },
      changeInput(){
        let files = document.getElementById('img').files[0];
        let name = document.getElementById('img').files[0].name;
        let arr = name.split('.');
        if (!Until.inArray(arr[1],['png','jpeg','jpg','gif'])){
          this.$toast.fail("上传图片类型不符合");
        }
        let fileSize = 0;
        let fileMaxSize = 50240;//1M
        if(files){
          fileSize =files.size;
          if (fileSize > fileMaxSize) {
            this.$toast.fail("文件大小不能大于5M");
            return false;
          }else if (fileSize <= 0) {
            this.$toast.fail("文件大小不能为0M");
            return false;
          }
        }else{
          return false;
        }
        //转码base64
        let reader = new FileReader();
        let imgFile;
        let that = this
        reader.readAsDataURL(files)
        reader.onload = e => {
          imgFile = e.target.result;
          upImg(imgFile).then(res => {
            if(res.code == 200){
              that.user.wx_img = res.msg.url;
              this.$toast('修改成功！')
            }else{
              alert(res.msg)
              this.$toast.fail(res.msg);
            }
          });
        }
        reader.onerror = function (error) {
          console.log('Error: ', error)
          // 上传失败
          this.$toast.fail("上传失败");
        }
      },
      showName(){
        this.show = true
      },
      editName(){
        if (this.newname == ''){
          this.errmsg='不能是空！'
          return false
        }
        if (this.newname.length > 16){
          this.errmsg='不能超过16个字符！'
          return false
        }
        editname(this.newname).then(res => {
          this.show = false
          if(res.code == 200){
            this.user.wx_name = this.newname
            this.$toast('修改成功！')
          }else{
            this.$toast.fail(res.msg);
          }
        });
      }
    }
  }
</script>

<style scoped>
  .ucell{
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
    font-size: 18px;
    line-height: 3rem;
  }
  .lis{
    padding-bottom: 5px;
    padding-top: 25px;
    width: 100%;
  }
  .bt-name{
    padding-top: 20px;
  }
</style>