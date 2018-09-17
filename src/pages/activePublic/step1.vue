<template>
  <div class="step1">
    <el-form :model="ruleForm" :rules="rules" label-position="top">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动分类" required>
        <el-radio-group v-model="ruleForm.radio">
          <el-radio :label="3">打折活动</el-radio>
          <el-radio :label="6">清仓活动</el-radio>
          <el-radio :label="9">限时活动</el-radio>
        </el-radio-group>

        <!-- <el-input class="input-tag" v-if="ruleForm.inputVisible" v-model="ruleForm.inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
        <el-button v-else size="small" @click="showInput"> 添加活动</el-button> -->

      </el-form-item>

      <el-form-item label="活动标签" required>
        <el-button icon="el-icon-plus"></el-button>
      </el-form-item>

      <el-form-item label="活动时间" required>
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
      </el-form-item>

      <el-form-item label="活动地点" required>

        <el-select v-model="ruleForm.placeValue" placeholder="请选择">
          <el-option v-for="item in ruleForm.options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>

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
        name: "新建活动",
        radio: 3,
        tags: [{ name: "标签1" }, { name: "标签2" }, { name: "标签3" }],
        inputVisible: false,
        inputValue: "",
        activityStartDate: "",
        activityStartTime: "",
        activityEndDate: "",
        activityEndTime: "",
        options: [
          {
            value: "选项1",
            label: "黄金糕"
          },
          {
            value: "选项2",
            label: "双皮奶"
          },
          {
            value: "选项3",
            label: "蚵仔煎"
          },
          {
            value: "选项4",
            label: "龙须面"
          },
          {
            value: "选项5",
            label: "北京烤鸭"
          }
        ],
        placeValue: ""
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
    closeTag: function(tag) {
      this.ruleForm.tags.splice(this.ruleForm.tags.indexOf(tag), 1);
    },

    showInput() {
      this.ruleForm.inputVisible = true;
      this.$nextTick(_ => {
        this.$refs.saveTagInput.$refs.input.focus();
      });
    },

    handleInputConfirm() {
      let inputValue = this.ruleForm.inputValue;
      if (inputValue) {
        this.ruleForm.tags.push(inputValue);
      }
      this.ruleForm.inputVisible = false;
      this.ruleForm.inputValue = "";
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
  padding-top: 20px;
  .active-tag {
    margin-right: 20px;
  }
  .input-tag {
    width: 90px;
  }
}
</style>


