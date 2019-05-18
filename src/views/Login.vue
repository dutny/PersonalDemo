<template>
  <div class="modal" id="login">
    <div class="modal-content">
      <br>
      <div class="img-container">
        <span class="glyphicon glyphicon-remove close" @click="change"></span>
        <img src="https://static.runoob.com/images/mix/img_avatar.png" class="img-circle">
      </div>
      <form class="bs-example bs-example-form" role="form">
        <div class="input-group">
          <label>
            <strong>UserName</strong>
          </label>
          <input type="text" class="form-control" placeholder="username">
        </div>
        <br>
        <div class="input-group">
          <label>
            <strong>Password</strong>
          </label>
          <input type="text" class="form-control" placeholder="password">
        </div>
        <br>
        <router-link to="/none-login">
          <button class="btn btn-primary input-group" @click="change">登录</button>
        </router-link>
        <br>
        <div class="input-group">
          <label class="checkbox-inline">
            <input type="checkbox" value="option1"> 记住我
          </label>
        </div>
        <div class="input-group foot">
          <router-link to="/none-cancel">
            <button class="btn btn-danger cancel" @click="change">取消</button>
          </router-link>
          <router-link to="/none-forgive">
            <a class="forgive" @click="change">Forgot Password?</a>
          </router-link>
        </div>
      </form>
    </div>
  </div>
</template>
<script>
export default {
  name: "Login",
  methods: {
    change() {
      this.$emit("func");
    }
  }
};
</script>
<style lang="scss" scoped>
.img-container {
  text-align: center;
}
img {
  width: 35%;
}
.close {
  float: right;
  top: 0px;
  right: 5px;
  color: black;
}
.input-group {
  width: 70%;
  left: 15%;
}
.cancel {
  position: absolute;
  width: 100px;
  left: 4%;
  top: 25px;
}
.forgive {
  position: absolute;
  right: 5%;
  top: 30px;
}
.foot {
  height: 80px;
  background-color: #f1f1f1;
}
.modal {
  width: 100%;
  display: block;
  z-index: 999;
  position: fixed;
  -webkit-animation-name: up; //此动画亦可放在modal-content中，需要修改width为50%
  animation-name: up;
  animation-duration: 1s;
  -webkit-animation-duration: 1s;
}
.modal-content {
  position: relative;
  width: 50%;
  margin: 5% auto 15% auto;
  border-radius: 18px;
  border: 1px;
  background-color: white;
  display: block;
  z-index: 2;
}
@keyframes up {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}
</style>
