<template>
  <div id="app">
    <header>
      <head-nav></head-nav>
    </header>
    <section class="main">
      <el-row>
        <el-col :span="4">
          <div class="main-left">
            <left-nav></left-nav>
          </div>
        </el-col>
        <el-col :span="20">
          <div class="main-right">
            <router-view></router-view>
          </div>
        </el-col>
      </el-row>
    </section>
  </div>
</template>

<script>
import headNav from "@/components/headNav";
import leftNav from "@/components/leftNav";
export default {
  data() {
    return {
      activeIndex: "1"
    };
  },
  methods: {},
  components: {
    headNav,
    leftNav
  }
};
</script>
<style lang="scss">
html,
body {
  height: 100%;
}
#app {
  min-width: 1200px;
  height: 100%;
  margin: 0 auto;
  background-color: #eff2f7;
  .main {
    margin: 0 auto;
    background: #fff;
    margin: 30px 70px;
    min-height: 800px;
    .main-left {
      background-color: #fcfcfc;
    }
    .main-right {
      padding: 30px 100px;
    }
  }
}
</style>
