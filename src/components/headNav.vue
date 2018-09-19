<template>

  <div class="header">
    <el-row>
      <el-col>
        <el-menu :default-active="activeIndex" mode="horizontal" @select="handleSelect" class="header-bar">
          <el-menu-item index="1">高级插件</el-menu-item>
          <el-menu-item index="2">在线商城</el-menu-item>
          <el-menu-item index="3">客户管理</el-menu-item>
          <el-menu-item index="4">系统设置</el-menu-item>
          <el-menu-item index="5">活动发布</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
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
.header {
  width: 100%;
  z-index: 1000;
  min-width: 1200px;
  transition: all 0.5s ease;
  border-top: solid 4px #3091f2;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
  .header-bar {
    padding-left: 300px;
  }
}
</style>


