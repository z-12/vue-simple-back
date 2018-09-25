<template>
  <div class="activeManage">
    <div class="head">
      <el-row :gutter="20">
        <el-col :span="18">
          <div class="active-box">
            <div class="flex-box">
              3
              <p>活动总数</p>
            </div>
            <div class="flex-box">
              3
              <p>报名总数</p>
            </div>
            <div class="flex-box">
              3
              <p>待审核 </p>
            </div>
          </div>
        </el-col>
        <el-col :span="5" :offset="1">
          <div class="view-vip">
            3
            <p>查看会员</p>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-card>
      <div slot="header" class="card-header">
        <h3>活动列表</h3>
        <el-row type="flex">
          <el-col :span="5">
            已选择{{activeNum}}个活动
          </el-col>
          <el-col :span="5">
            <el-select v-model="currentType" placeholder="请选择活动分类">
              <el-option v-for="item in activeSelects" :key="item" :label="item" :value="item"></el-option>
            </el-select>
          </el-col>
          <el-col :span="13">
            <el-button @click="removeSelect" type="danger">删除</el-button>
            <el-button type="info">置顶</el-button>
            <el-button type="info">复制</el-button>
          </el-col>
        </el-row>
      </div>

      <el-table :data="filteredTableData" style="width: 100%">
        <el-table-column type="selection" width="55"></el-table-column>
        <el-table-column fixed prop="date" label="活动日期" width="150"></el-table-column>
        <el-table-column prop="name" label="活动名称"></el-table-column>
        <el-table-column prop="type" label="活动分类" width="200"></el-table-column>
        <el-table-column prop="address" label="活动地点"></el-table-column>
        <el-table-column prop="peopleNum" label="报名人数"></el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">查看详情</el-button>
          </template>
        </el-table-column>
      </el-table>

      <el-row type="flex" justify="end" class="pagination">
        <el-pagination layout="prev,pager,next" :total="200" background></el-pagination>
      </el-row>

    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeNum: 0, //活动数量
      activeSelect: "",
      currentType: "全部",
      activeSelects: ["全部", "电子竞技", "收费活动"],
      activeInfo: [
        {
          id: "01",
          type: "电子竞技",
          date: "2016-05-03",
          name: "LOL",
          address: "上海市普陀区金沙江路 1518 弄",
          peopleNum: "10"
        },
        {
          id: "02",
          type: "电子竞技",
          date: "2016-05-02",
          name: "绝地求生",
          address: "上海市普陀区金沙江路 1518 弄",
          peopleNum: "10"
        },
        {
          id: "03",
          type: "电子竞技",
          date: "2016-05-04",
          name: "穿越火线",
          address: "上海市普陀区金沙江路 1518 弄",
          peopleNum: "10"
        }
      ],
      infoBackup: []
    };
  },
  computed: {
    filteredTableData: function() {
      let type = this.currentType;
      return this.activeInfo.filter(data => {
        if (type == "全部" || type == "") {
          return true;
        } else {
          return data.type == type;
        }
      });
    }
  },
  methods: {
    removeSelect: function() {
      let infoData = this.activeInfo;
      this.infoBackup.forEach(id => {
        infoData.forEach(data => {
          if (id == data.id) {
            infoData.splice(infoData.indexOf(data), 1);
          }
        });
      });
      this.infoBackup = [];
    }
  }
};
</script>

<style lang="scss" scoped>
.activeManage {
  .head {
    padding-bottom: 50px;
    .active-box {
      background-color: rgb(51, 204, 204);
      padding: 30px 0;
      display: flex;
      justify-content: space-around;
      .flex-box {
        width: 33.3333%;
        border-right: 1px solid #fff;
        padding: 20px 0;
        display: flex;
        flex-direction: column;
        align-items: center;
        font-size: 30px;
        color: #fff;
        p {
          color: #fff;
          font-size: 16px;
          padding-top: 10px;
        }
      }
      .flex-box:last-child {
        border: none;
      }
    }
    .view-vip {
      text-align: center;
      font-size: 30px;
      color: #fff;
      background-color: #20a0ff;
      padding: 50px 0;
      p {
        font-size: 16px;
        padding-top: 10px;
      }
    }
  }
  .card-header {
    h3 {
      padding-bottom: 20px;
    }
  }
  .pagination {
    padding: 20px 0;
  }
}
</style>

