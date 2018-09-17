<template>
  <div class="step1">
    <el-form :model="ruleForm" :rules="rules" label-position="top">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="活动分类" required>

        <el-tag class="active-tag" closable v-for="tag in ruleForm.tags" @close="closeTag(tag)" :key="tag.name">
          {{tag.name}}
        </el-tag>
        <el-input class="input-tag" v-if="ruleForm.inputVisible" v-model="ruleForm.inputValue" ref="saveTagInput" size="small" @keyup.enter.native="handleInputConfirm" @blur="handleInputConfirm"></el-input>
        <el-button v-else size="small" @click="showInput">+ 添加活动</el-button>

      </el-form-item>

      <el-form-item label="活动标签" required>
        <el-button icon="el-icon-plus"></el-button>
      </el-form-item>

      <el-form-item label="活动时间" required>

        <el-date-picker v-model="value1" type="date" placeholder="选择日期">
        </el-date-picker>

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
        tags: [{ name: "标签1" }, { name: "标签2" }, { name: "标签3" }],
        inputVisible: false,
        inputValue: ""
      },
      rules: {
        name: [
          { message: "请输入活动名称", trigger: "blur", required: true },
          { min: 3, max: 5, message: "长度在 3 到 5 个字符", trigger: "blur" }
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
    }
  }
};
</script>
<style lang="scss" scoped>
.step1 {
  .active-tag {
    margin-right: 20px;
  }
  .input-tag {
    width: 90px;
  }
}
</style>


