<template>
  <div id="app">

    <router-view></router-view>

  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeBg: "#000"
    };
  }
};
</script>
<style lang="scss" scoped>
</style>
