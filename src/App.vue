<template>
  <div id="app">
    <!-- <router-link to="/about">about</router-link>|
    <router-link to="/scroll">scroll</router-link>
    <router-view></router-view>-->
    <div class="bg"></div>
    <div class="head">
      <navheader></navheader>
    </div>

    <div class="sider">
      <navsider></navsider>
    </div>

    <div class="containter">
      <transition mode="out-in" appear name="leftIn">
        <router-view></router-view>
      </transition>
    </div>

    <div class="footer"></div>
  </div>
</template>
<script>
import navheader from "./components/NavHeader";
import navsider from "./components/NavSider";
import foot from "./views/Foot";
import contain from "./views/Contain";
import carousel from "./views/Carousel";
export default {
  name: "App",
  components: {
    navheader,
    navsider,
    foot,
    contain,
    carousel
  },
  mounted: function() {}
};
</script>
<style scope lang="scss">
.sider {
  margin-top: 50px;
  width: 200px;
  z-index: 999;
}
.containter {
  position: absolute;
  z-index: 1;
  left: 10%;
  right: 10%;
  height: 100%;
}
#app {
  .bg {
    background-image: url(./assets/image/bgImg.jpg);
    background-repeat: no-repeat;
    background-size: 100%;
    height: 100%;
    width: 100%;
    z-index: -1;
    background-attachment: fixed;
    // margin-left:27%;/
    // padding-left:-27%;
    padding-top: 100%;
    // margin-top:50%;
    position: absolute;
    opacity: 0.5;
  }
  position: relative;
  // height: 100%;
}
</style>
