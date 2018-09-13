<template>
  <div class="news">
    <el-row>
      <el-col>
        <div class="news-container">
          <ul>
            <li v-for="item in newsList" :key="item.id">{{item.text}}</li>
          </ul>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      newsList: []
    };
  },
  created() {
    axios({
      url:
        "http://route.showapi.com/255-1?showapi_appid=68789&showapi_sign=afb66c6443474626bf89bba98f4354e1",
      method: "get",
      data: {
        type: "29"
      }
    })
      .then(res => {
        let newsData = res.data.showapi_res_body.pagebean.contentlist;
        console.log(newsData);
        this.newsList = this.newsList.concat(newsData);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
</script>
<style lang="scss" scoped>
.news-container {
  margin: 20px auto;
  padding: 0 15px;
  width: 80%;
}
.news-container ul li {
  padding: 5px 0;
}
</style>