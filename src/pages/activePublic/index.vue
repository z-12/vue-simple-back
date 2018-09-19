<template>
  <div class="step-container">
    <el-steps :space="400" :active="active" finish-status="success">
      <el-step title="活动信息"></el-step>
      <el-step title="报名签到"></el-step>
      <el-step title="分享设置"></el-step>
      <el-step title="个性设置"></el-step>
    </el-steps>

    <router-view></router-view>

    <div class="btn-group">
      <el-button>预览</el-button>
      <el-button>上一步</el-button>
      <el-button type="primary">下一步</el-button>
      <el-button type="primary">发布</el-button>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: "hello",
      active: 0
    };
  },
  mounted() {},
  methods: {}
};
</script>
<style lang="scss" scoped>
.step-container {
  margin: 0 auto;
}
</style>


