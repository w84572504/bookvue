<template>
  <div>
    <van-row type="flex" justify="center">
      <van-col span="20" class="weixin">
        <van-icon name="warning" size="5rem" color="#1989fa" />
        <p>请使用微信内置浏览器访问</p>
      </van-col>
    </van-row>
  </div>
</template>

<script>
  export default {
    name: "Index"
  }
</script>

<style scoped>
.weixin{
  text-align: center;
  margin-top: 10rem;
}
  .weixin p {
    padding-top: 1rem;
    font-size: 1.2rem;
  }
</style>