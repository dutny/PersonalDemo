<template>
  <div>
    <transition mode="out-in" appear name="leftIn">
      <el-row>
        <el-col :span="24" class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="card-containter">
              <!-- 鼠标悬浮时显示1 -->
              <el-row>
                <el-col :span="16">
                  <h2>
                    <a href="http://www.bootcss.com/" target="_blank">Bootstrap</a>
                  </h2>
                  <br>
                  <span style="font-size:15px;">
                    Bootstrap是美国Twitter公司的设计师Mark Otto和Jacob Thornton合作基于HTML、
                    CSS、JavaScript 开发的简洁、直观、强悍的前端开发框架，使得 Web 开发更加快捷。
                    Bootstrap提供了优雅的HTML和CSS规范，它即是由动态CSS语言Less写成。
                    Bootstrap一经推出后颇受欢迎，一直是GitHub上的热门开源项目，
                    包括NASA的MSNBC（微软全国广播公司）的Breaking News都使用了该项目。
                    国内一些移动开发者较为熟悉的框架，如WeX5前端开源框架等，也是基于Bootstrap源码进行性能优化而来。
                  </span>
                </el-col>
                <el-col :span="8" class="scale">
                  <img src="../assets/logo/bootstrap.jpg" class="fill to-0-100-0">
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </transition>
    <transition mode="out-in" appear name="rightIn">
      <el-row>
        <el-col :span="24" class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="card-containter">
              <!-- 鼠标悬浮时显示1 -->
              <el-row>
                <el-col :span="16">
                  <h2>
                    <a href="https://cn.vuejs.org/" target="_blank">Vue</a>
                  </h2>
                  <br>
                  <span style="font-size:15px;">
                    Vue.js是一个构建数据驱动的 web 界面的渐进式框架。
                    Vue.js 的目标是通过尽可能简单的 API 实现响应的数据绑定和组合的视图组件。
                    它不仅易于上手，还便于与第三方库或既有项目整合。
                    另一方面，当与单文件组件和 Vue 生态系统支持的库结合使用时，
                    Vue 也完全能够为复杂的单页应用程序提供驱动。
                  </span>
                </el-col>
                <el-col :span="8" class="scale">
                  <img src="../assets/logo.png" style="margin: 0 auto;vertical-align:middle;" class="fill to-0-100-0">
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </transition>
    <transition mode="out-in" appear name="rightIn">
      <el-row>
        <el-col :span="24" class="grid-content bg-purple">
          <el-card shadow="hover">
            <div class="card-containter">
              <!-- 鼠标悬浮时显示1 -->
              <el-row>
                <el-col :span="16">
                  <h2>
                    <a href="https://element.eleme.cn/2.0/#/zh-CN" target="_blank">Element</a>
                  </h2>
                  <br>
                  <span style="font-size:15px;">Element，一套为开发者、设计师和产品经理准备的基于 Vue 2.0 的桌面端组件库</span>
                </el-col>
                <el-col :span="8" class="scale">
                  <img src="../assets/logo.png" style="margin: 0 auto;vertical-align:middle;" class="fill to-0-100-0">
                </el-col>
              </el-row>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </transition>
  </div>
</template>
<script>
export default {
  name: "Contain"
};
</script>
<style lang="scss" scoped>
.el-card {
  background-color: transparent;
  // opacity: 0.2;
}

</style>
