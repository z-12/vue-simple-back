<template>
  <div id="app">
    <header>
      <el-row>
        <el-col :span="24">
          <head-nav class="header-bar"></head-nav>
        </el-col>
      </el-row>
    </header>

    <main>
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
    </main>

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
  header {
    width: 100%;
    min-width: 1200px;
    transition: all 0.5s ease;
    border-top: solid 4px #3091f2;
    box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.12), 0 0 6px 0 rgba(0, 0, 0, 0.04);
    .header-bar {
      padding-left: 300px;
    }
  }

  main {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    min-height: 800px;
    border: solid 40px #e9ecf1;
    background-color: #fcfcfc;
    .main-left {
   
    }
    .main-right {
      padding: 30px 100px;
    }
  }
}
</style>
