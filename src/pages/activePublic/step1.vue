<template>
  <div class="step1">
    <el-form :model="ruleForm" :rules="rules" label-position="top">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动分类" required>
        <el-radio-group v-model="ruleForm.activityType">
          <el-radio v-for="item in ruleForm.activityTypes" :key="item.type" :label="item.type"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动标签" required>

        <el-tag class="active-tag" closable @close="closeTag(tag)" v-for="tag in ruleForm.activeTags" :key="tag.name">{{tag.name}}</el-tag>

        <el-button icon="el-icon-plus" @click="ruleForm.dialogFormVisible = true"></el-button>
        <el-dialog title="添加活动标签" :visible.sync="ruleForm.dialogFormVisible">
          <el-input v-model="ruleForm.addTag"></el-input>
          <div slot="footer" class="dialog-footer">
            <el-button @click="ruleForm.dialogFormVisible = false">取 消</el-button>
            <el-button type="primary" @click="ruleForm.dialogFormVisible = false">添 加</el-button>
          </div>
        </el-dialog>

      </el-form-item>

      <el-form-item label="活动时间" required style="width:750px">
        <el-row>
          <el-col :span="5">
            <el-form-item prop="activityStartDate">
              <el-date-picker v-model="ruleForm.activityStartDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item prop="activityStartTime">
              <el-time-picker v-model="ruleForm.activityStartTime" placeholder="选择时间"></el-time-picker>
            </el-form-item>
          </el-col>
          <el-col :span="1"> — </el-col>
          <el-col :span="5">
            <el-form-item prop="activityEndDate">
              <el-date-picker v-model="ruleForm.activityEndDate" type="date" placeholder="选择日期"></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="5">
            <el-form-item prop="activityEndTime">
              <el-time-picker v-model="ruleForm.activityEndTime" placeholder="选择时间"></el-time-picker>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="活动地点" required>
        <el-select v-model="ruleForm.placeValue" placeholder="请选择">
          <el-option v-for="item in ruleForm.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="活动人数">
        <el-row>
          <el-col :span="6" style="width: 187px">
            <el-radio v-model="ruleForm.activityPeople" label="无限制"></el-radio>
            <el-radio v-model="ruleForm.activityPeople" label="限制"></el-radio>
          </el-col>
          <el-col :span="6">
            <el-input placeholder="0" v-model="ruleForm.activityPeopleNum" :disabled="ruleForm.activityPeople === '无限制'">
              <template slot="append">人</template>
            </el-input>
          </el-col>
        </el-row>
      </el-form-item>

      <el-form-item label="活动封面" required>
        <el-upload action="https://jsonplaceholder.typicode.com/posts/" list-type="picture-card" :on-preview="handlePictureCardPreview" :on-remove="handleRemove">
          <i class="el-icon-plus"></i>
        </el-upload>
        <el-dialog :visible.sync="ruleForm.dialogVisible">
          <img width="100%" :src="ruleForm.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item>
        <el-button @click="preView">预览</el-button>
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      ruleForm: {
        name: "新建活动", //活动名称
        activityType: "",
        // 活动分类
        activityTypes: [
          { type: "限时活动" },
          { type: "打折活动" },
          { type: "清仓活动" }
        ],
        inputVisible: false,
        inputValue: "",
        activityStartDate: "", //活动开始时间
        activityStartTime: "",
        activityEndDate: "",
        activityEndTime: "", //活动结束时间
        activityPeople: "", //活动人数
        activityPeopleNum: "", //限制人数
        options: [
          {
            value: "选项1",
<<<<<<< HEAD
            label: "上海"
          }
        ],
        placeValue: "", // 地点
        dialogImageUrl: "", //图片地址
        dialogVisible: false, // 初始化对话框
        dialogFormVisible: false, //添加标签对话框
        addTag: "",
        activeTags: [{ name: "111" }, { name: "222" }, { name: "333" }]
=======
            label: "黄金糕"
          }
        ],
        placeValue: "",
        dialogImageUrl: "", //图片地址
        dialogVisible: false // 初始化对话框
>>>>>>> dc4e4b08f9176c03415ac482dee51ca03ffbd75b
      },
      rules: {
        name: [
          { message: "请输入活动名称", trigger: "blur", required: true },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
        ],
        activityStartDate: [
          { required: true, message: "请选择活动开始日期", trigger: "change" }
        ],
        activityStartTime: [
          { required: true, message: "请选择活动开始时间", trigger: "change" }
        ],
        activityEndDate: [
          { required: true, message: "请选择活动结束日期", trigger: "change" }
        ],
        activityEndTime: [
          { required: true, message: "请选择活动结束时间", trigger: "change" }
        ]
      }
    };
  },
  methods: {
<<<<<<< HEAD
    closeTag(tag) {
      this.ruleForm.activeTags.splice(this.ruleForm.activeTags.indexOf(tag), 1);
    },
    // 图片上传
=======
>>>>>>> dc4e4b08f9176c03415ac482dee51ca03ffbd75b
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.ruleForm.dialogImageUrl = file.url;
      this.ruleForm.dialogVisible = true;
    },

    preView: function() {
      console.log("预览");
    },
    onSubmit: function() {
      console.log("提交");
    }
  }
};
</script>
<style lang="scss" scoped>
.step1 {
  height: 100%;
  padding-top: 20px;
  .active-tag {
    margin-right: 20px;
  }
  .input-tag {
    width: 90px;
  }
}
</style>


