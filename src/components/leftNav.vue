<template>
  <div class="left-nav">
    <el-menu default-active="1" class="" @open="handleOpen" @close="handleClose">
      <el-menu-item index="1">
        <i class="el-icon-location"></i>
        <span>活动发布</span>
      </el-menu-item>
      <el-menu-item index="2">
        <i class="el-icon-menu"></i>
        <span slot="title">活动管理</span>
      </el-menu-item>
    </el-menu>
  </div>

</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped>
.left-nav {
  min-height: 800px;
  background-color: transparent;
  .el-menu {
    border: none;
  }
}
</style>


