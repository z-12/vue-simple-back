<template>

  <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="header-bar" :router="true">
    <el-menu-item index="1">高级插件</el-menu-item>
    <el-menu-item index="2">在线商城</el-menu-item>
    <el-menu-item index="3">客户管理</el-menu-item>
    <el-menu-item index="4">系统设置</el-menu-item>
    <el-menu-item index="/activePublic">活动发布</el-menu-item>
  </el-menu>

</template>
<script>
export default {
  data() {
    return {
      activeIndex: "1"
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
</style>


