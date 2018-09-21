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
        <el-row>
          <el-col :span="3">
            <div style="line-height:38px">已选择0个活动</div>
          </el-col>
          <el-col :span="3">
            <el-select v-model="activeSelect">
              <el-option v-for="item in activeSelects" :label="item.name" :key="item.name" :value="item.value"></el-option>
            </el-select>
          </el-col>
          <el-col :span="6" :offset="1">
            <el-button @click="removeSelect([activeInfo[0]])">删除</el-button>
            <el-button>置顶</el-button>
            <el-button>复制</el-button>
          </el-col>
        </el-row>
      </div>

      <el-table :data="activeInfo" style="width: 100%" ref="infoTable">
        <el-table-column type="selection" width="55">
        </el-table-column>
        <el-table-column fixed prop="date" label="日期" width="150">
        </el-table-column>
        <el-table-column prop="name" label="姓名" width="120">
        </el-table-column>
        <el-table-column prop="province" label="省份" width="120">
        </el-table-column>
        <el-table-column prop="city" label="市区" width="150">
        </el-table-column>
        <el-table-column prop="address" label="地址" width="350">
        </el-table-column>
        <el-table-column fixed="right" label="操作">
          <template slot-scope="scope">
            <el-button type="text" size="small">
              查看详情
            </el-button>
          </template>
        </el-table-column>
      </el-table>

      <div class="pagination">
        <el-pagination layout="prev,pager,next,->" :total="200" background></el-pagination>
      </div>

    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    return {
      activeSelect: "",
      activeSelects: [
        {
          value: 1,
          name: "测试活动"
        },
        {
          value: 2,
          name: "免费活动"
        },
        {
          value: 3,
          name: "收费活动"
        }
      ],
      activeInfo: [
        {
          date: "2016-05-03",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          province: "上海",
          city: "普陀区",
          address: "上海市普陀区金沙江路 1518 弄"
        }
      ]
    };
  },
  methods: {
    removeSelect: function(row,rows) {

      

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
    float: right;
    padding: 20px 0;
  }
}
</style>

