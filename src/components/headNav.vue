<template>
  <div class="header">
    <div class="head-fixed">
      <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="head-nav">
        <el-menu-item index="1">高级插件</el-menu-item>
        <el-submenu index="2">
          <template slot="title">在线商城</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
          <el-submenu index="2-4">
            <template slot="title">选项4</template>
            <el-menu-item index="2-4-1">选项1</el-menu-item>
            <el-menu-item index="2-4-2">选项2</el-menu-item>
            <el-menu-item index="2-4-3">选项3</el-menu-item>
          </el-submenu>
        </el-submenu>
        <el-menu-item index="3">客户管理</el-menu-item>
        <el-menu-item index="4">系统设置</el-menu-item>
        <el-menu-item index="5">活动发布</el-menu-item>
      </el-menu>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
      activeIndex: "5"
    };
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    }
  }
};
</script>
<style lang="scss" scoped>
.head-fixed {
  width: 100%;
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091f2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  .head-nav {
    padding-left: 800px !important;
    background-color: #eff2f7;
  }
}
</style>


