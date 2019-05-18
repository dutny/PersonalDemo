<template>
  <div>
    <div>
      <br>
      <el-row>
        <transition-group name="up" appear tag="el-row" mode="out-in">
        <el-col :span="8" v-for="(item,index) in items" :key="index='1'" class="scale">
          <el-collapse-transition>
            <el-card class="box-card fill to-0-100-0">
              <div slot="header" class="clearfix">
                <span>{{ item.title }}+{{ index }}</span>
                <el-button style="float: right; padding: 3px 0" type="text">
                  <i class="el-icon-close" @click="deleteitem(index)"></i>
                </el-button>
              </div>
              <div
                class="text item"
              >{{ item.containter === 'undefined' ? '对不起，这里没有留下任何评论哦':item.containter }}</div>
              <hr>
              <div class="text-bottom item-bottom">{{ item.time | dataformat }}</div>
            </el-card>
          </el-collapse-transition>
        </el-col>
        </transition-group>
        <el-col :span="8"  class="scale">
          <el-card class="box-card fill to-0-100-0" style="width:200px;">
            <div class="text item-append">
              <i class="el-icon-plus" @click="dialogVisible = true"></i>
            </div>
          </el-card>
        </el-col>
        
      </el-row>
    </div>
    <div>
      <el-dialog
        title="添加备忘录"
        :visible.sync="dialogVisible"
        width="30%"
        :before-close="handleClose"
        :modal="false"
      >
        <div>
          <el-form ref="form" label-width="80px">
            <el-form-item label="标题">
              <el-input v-model="itemtitle"></el-input>
            </el-form-item>
            <el-form-item label="内容">
              <el-input type="textarea" v-model="itemcontainter"></el-input>
            </el-form-item>
          </el-form>
        </div>
        <span slot="footer" class="dialog-footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </span>
      </el-dialog>
    </div>
  </div>
</template>
<script>
export default {
  name: "List",
  data() {
    return {
      dialogVisible: false,
      itemtitle: "",
      itemcontainter: "",
      items: [
        {
          title: "title",
          containter: "containter",
          time: new Date()
        },
        { title: "title", containter: "containter", time: new Date() },
        { title: "title", containter: "containter", time: new Date() }
      ]
    };
  },
  created() {},
  methods: {
    shownewlist() {
      this.axios
        .get("http://www.liulongbin.top:3005/api/getnewslist")
        .then(response => {
          console.log(response);
          console.log(new Date());
          // this.newlist=response.data.message
          // console.log(this.newlist[0])
        })
        .catch(error => {
          console.log(error);
        });
    },
    handleClose(done) {
      this.$confirm("确认关闭？")
        .then(_ => {
          done();
        })
        .catch(_ => {});
    },
    onSubmit() {
      this.dialogVisible = false;
      var item = {
        title: this.itemtitle,
        containter: this.itemcontainter,
        time: new Date()
      };
      this.items.unshift(item);
      console.log(this.items);
    },
    deleteitem(index){
      console.log('delete')
      this.items.splice(index,1)
    },
  },
  filters: {
    dataformat: function(dataStr, pattern = "YYYY-MM-DD hh-mm-ss") {
      // return moment(dataStr).format(pattern)
      var dt = new Date(dataStr);
      // 获取年月日
      var y = dt.getFullYear();
      var m = (dt.getMonth() + 1).toString().padStart(2, "0");
      var d = dt
        .getDate()
        .toString()
        .padStart(2, "0");
      // 如果 传递进来的字符串类型，转为小写之后，等于 yyyy-mm-dd，那么就返回 年-月-日
      // 否则，就返回  年-月-日 时：分：秒
      if (pattern.toLowerCase() === "yyyy-mm-dd") {
        return `${y}-${m}-${d}`;
      } else {
        // 获取时分秒
        var hh = dt
          .getHours()
          .toString()
          .padStart(2, "0");
        var mm = dt
          .getMinutes()
          .toString()
          .padStart(2, "0");
        var ss = dt
          .getSeconds()
          .toString()
          .padStart(2, "0");
        return `${y}-${m}-${d} ${hh}:${mm}:${ss}`;
      }
    }
  }
};
</script>
<style lang="scss" scoped>
.text {
  font-size: 14px;
}
.item-append {
  margin-left: 30px;
  font-size: 100px;
  cursor: pointer;
}
.item-append:hover,
.item-append::after {
  color: #409eff;
}
.item-head {
  font-size: 20px;
}
.item {
  margin-bottom: 18px;
  font-size: 16px;
}
.item-bottom {
  padding-left: 55%;
  font-weight: 500;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 400px;
  margin-bottom: 50px;
}
  .up-enter,
  .up-leave-to{
    // transform: translateX(-400px);
    opacity: 0;
  }
  .up-leave,
  .up-enter-to{
    // transform: translateX(0);
    opacity: 1;
  }
  .up-enter-active{
    transition: all 0.8s ease;
  }
  .up-leave-active{
    position: absolute;
  }
  .up-move{
    transition: all 3s ease;
  }
</style>
