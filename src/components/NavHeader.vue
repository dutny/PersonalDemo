<template>
  <div>
    <nav class="navbar navbar-default navbar-fixed-top navbar-inverse" role="navigation">
      <div class="container-fluid">
        <div class="navbar-header">
        </div>
        <span class="glyphicon glyphicon-th-list navbar-left" @click="childrenchange"></span>
        <span class="title" >dutny.com</span>
        <div class="nav navbar-right ">
          <span class="glyphicon glyphicon-user user-icon" @click="changeloginflag"></span>
        </div>
      </div>
    </nav>
    <div v-if="loginflag">
      <login @func="changeloginflag"></login>
    </div>
  </div>
</template>
<script>
import login from '../views/Login'
export default {
  name: "NavHeader",
  data(){
    return{
      routername:this.$route.name,
      loginflag:false,
    }
  },
  components:{
    login,
  },
  mounted: function() {
    //在页面加载完毕后初始化 tooltip， 相当于$(function(){ $('[data-toggle="tooltip"]').tooltip(); }
    $('[data-toggle="tooltip"]').tooltip();
  },
  methods: {
    childrenchange() {
      // console.log(this.$parent.$navsider.changeCollapse)
      // this.$parent.$navsider.changeCollapse();
      // this.$store.commit('changecollapse')
      this.$store.dispatch("changecollapsefoot");
      console.log(this.$store.state.Collapse);
    },
    changeloginflag(){
      this.loginflag=!this.loginflag;
      console.log(this.loginflag)
    }
  }
};
</script>
<style scoped lang="scss">
.container-fluid {
  form {
    margin-right: 50px;
  }
}
.title {
  margin-left: 650px;
  color: #409eff;
  margin-top: 20px;
  font-size: 28px;
}
.glyphicon-th-list {
  font-size: 23px;
  padding-top: 10px;
  padding-left: 20px;
  color: #409eff;
  cursor: pointer;
}
.glyphicon-th-list:hover {
  color: #696969;
}
.user-icon{
  font-size:25px;
  color:  #409eff;
  right:50px;
  top: 10px;
  cursor: pointer;
}
</style>
