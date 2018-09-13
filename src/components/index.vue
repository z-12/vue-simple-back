<template>
  <div class="home">
    <el-row>
      <el-col :span="20">
      </el-col>
      <header-nav></header-nav>
      <news></news>
      <div class="container">
        <h3>{{count}}</h3>
        <div>
          <el-button @click="$store.commit('add',10)">++</el-button>
          <el-button @click="reduce">--</el-button>
        </div>
        <div>
          <el-button @click="addAction">++</el-button>
          <el-button @click="reduceAction">--</el-button>
        </div>
      </div>
    </el-row>
    <router-view></router-view>
  </div>
</template>
<script>
import headerNav from "@/components/nav";
import news from "@/components/news";
import store from "@/vuex/store.js";
import { mapState, mapMutations, mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  components: {
    headerNav,
    news
  },
  // computed: mapState({
  //   count: state => state.count
  // }),
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["count"])
  },
  methods: {
    ...mapMutations(["reduce"]),
    ...mapActions(["addAction", "reduceAction"])
  },
  store
};
</script>
<style lang="scss" scoped>
.container {
  width: 80%;
  margin: 0 auto;
  text-align: center;
}
</style>

