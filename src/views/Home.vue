<template>
  <div class="home">
    <transition name="sidertest">
      <carousel></carousel>
    </transition>
    <br>
    <br>
    <contain></contain>
  </div>
</template>

<script>
import contain from "../views/Contain";
import carousel from "../views/Carousel";
export default {
  name: "home",
  components: {
    contain,
    carousel
  }
};
</script>
