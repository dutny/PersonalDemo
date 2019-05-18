<template>
  <div>
    <el-menu default-active="1-4-1" class="el-menu-vertical-demo" :collapse="isCollapse">
      <router-link to="/">
        <el-menu-item index="1" @click="elclick">
          <i class="el-icon-s-home"></i>
          <span slot="title">回到首页</span>
        </el-menu-item>
      </router-link>
      <router-link to="/list">
        <el-menu-item index="2">
          <i class="el-icon-edit"></i>
          <span slot="title">记事本</span>
        </el-menu-item>
      </router-link>
      <router-link to="/404">
        <el-menu-item index="3">
          <i class="el-icon-document"></i>
          <span slot="title">未完成</span>
        </el-menu-item>
      </router-link>
      <el-menu-item index="4">
        <i class="el-icon-setting"></i>
        <span slot="title">未完成</span>
      </el-menu-item>
      <el-menu-item index="5">
        <i class="el-icon-menu"></i>
        <span slot="title">未完成</span>
      </el-menu-item>
      <el-menu-item index="6">
        <i class="el-icon-menu"></i>
        <span slot="title">未完成</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
import { watch } from "fs";
export default {
  name: "NavSider",
  data() {
    return {
      isCollapse: this.$store.state.Collapse
    };
  },
  methods: {
    changeCollapse() {
      isCollapse = !isCollapse;
    },
    elclick() {
      console.log("click");
    }
  },
  computed: {
    getCollapse() {
      return this.$store.state.Collapse;
    }
  },
  watch: {
    getCollapse() {
      this.isCollapse = this.$store.state.Collapse;
    }
  }
};
</script>
<style scoped lang="scss">
  div {
    margin-top: 0px;
    position: fixed;
    color: #409eff;
    .el-menu-vertical-demo {
      background-color: #303133;
      color: #409eff;
      .el-menu-item {
        i {
          color: #409eff !important;
        }
        span {
          color: #409eff !important;
        }
      }
    }
    el-submenu {
      background-color: #303133 !important;
    }
  }
</style>
