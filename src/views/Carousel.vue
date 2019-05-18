<template>
  <el-carousel :interval="3000" arrow="always">
    <!-- <el-carousel-item v-for="(item,index) in items" :key="index">
      <img src='item.src' class="carosuel-img">
    </el-carousel-item>-->
    <el-carousel-item>
      <img src="@/assets/image/carousel-4.jpg" class="carosuel-img">
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/image/carousel-5.jpg" class="carosuel-img">
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/image/carousel-6.jpg" class="carosuel-img">
    </el-carousel-item>
    <el-carousel-item>
      <img src="@/assets/image/carousel-7.jpg" class="carosuel-img">
    </el-carousel-item>
  </el-carousel>
</template>
<script>
export default {
  name: "Carousel",
  data() {
    return {};
  }
};
</script>

<style>
.el-carousel__item h3 {
  color: #475669;
  font-size: 18px;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
.el-carousel {
  margin-top: 10px;
}
.carosuel-img {
  width: 100%;
}
</style>