<template>
  <div class="step1">
    <el-form :model="ruleForm" :rules="rules" label-position="top">
      <el-form-item label="活动名称" prop="name">
        <el-input v-model="ruleForm.name"></el-input>
      </el-form-item>
      <el-form-item label="" required>

        <el-row style="height: 35px;" type="flex" align="middle">
          <el-col :span="2">
            <div class="el-form-item__label" style="padding-bottom: 0;">活动分类</div>
          </el-col>
          <el-col :span="2">
            <el-button type="text" style="margin: 0;padding: 0;" @click="dialogTypeVisible = true">设置</el-button>
          </el-col>
        </el-row>

        <el-radio-group v-model="ruleForm.classTag">
          <el-radio v-for="item in ruleForm.classTags" :key="item.name" :label="item.name"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="活动标签" required>
        <el-tag class="active-tag" closable @close="closeTag(tag)" v-for="tag in ruleForm.activeTags" :key="tag.name">{{tag.name}}</el-tag>
        <el-button icon="el-icon-plus" @click="dialogFormVisible = true"></el-button>
      </el-form-item>

      <el-form-item label="活动时间" required>
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
          <el-col :span="1" style="text-align:center;"> — </el-col>
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
        <el-row>
          <el-col :span="5">
            <el-select v-model="ruleForm.placeValue" placeholder="请选择">
              <el-option v-for="item in ruleForm.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="5">
            <el-select v-model="ruleForm.placeValue" placeholder="请选择">
              <el-option v-for="item in ruleForm.options" :key="item.value" :label="item.label" :value="item.value">
              </el-option>
            </el-select>
          </el-col>
          <el-col :span="14">
            <el-input v-model="ruleForm.placeInput" placeholder="请输入详细地址"></el-input>
          </el-col>
        </el-row>

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
        <el-dialog :visible.sync="dialogVisible">
          <img width="100%" :src="ruleForm.dialogImageUrl" alt="">
        </el-dialog>
      </el-form-item>

      <el-form-item label="活动简介">
        <el-input type="textarea" placeholder="请输入内容" v-model="ruleForm.activeDescribe"></el-input>
      </el-form-item>

      <el-form-item label="报名用户信息展示">
        <el-radio-group v-model="ruleForm.signUserInfo">
          <el-radio v-for="item in ruleForm.signUserInfos" :label="item.name" :key="item.name"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="评价功能">
        <el-radio-group v-model="ruleForm.evaFunction">
          <el-radio v-for="item in ruleForm.evaFunctions" :label="item.name" :key="item.name"></el-radio>
        </el-radio-group>
      </el-form-item>

      <el-form-item label="">
        <el-row>
          <el-col :span="2">赞助广告</el-col>
          <el-col :span="2">
            <el-button type="text" @click="openAd">开通赞助广告</el-button>
          </el-col>
        </el-row>
        <el-upload class="upload-demo" drag action="https://jsonplaceholder.typicode.com/posts/" multiple>
          <i class="el-icon-upload"></i>
          <div class="el-upload__text">将文件拖到此处，或
            <em>点击上传</em>
          </div>
          <div class="el-upload__tip" slot="tip">图片尺寸建议比例1；4.18，如160*666像素，且不超过2M</div>
        </el-upload>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="请填写您的广告标题" v-model="ruleForm.adTitle">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="请填写您的广告内容" v-model="ruleForm.adContent">
        </el-input>
      </el-form-item>

      <el-form-item>
        <el-input placeholder="请填写您的赞助链接" v-model="ruleForm.adLink">
        </el-input>
      </el-form-item>

    </el-form>

    <el-dialog title="添加活动标签" :visible.sync="dialogFormVisible">
      <el-input v-model="dialogFormTag.name"></el-input>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="addClassTag(dialogFormTag.name,dialogFormTag,ruleForm.activeTags)">添 加</el-button>
      </div>
    </el-dialog>

    <el-dialog title="设置活动分类" :visible.sync="dialogTypeVisible">
      <el-form v-model="dialogFormClass">

        <el-form-item>
          <el-tag class="active-tag" :key="tag.name" v-for="tag in ruleForm.classTags" closable @close="closeClassTag(tag)">
            {{tag.name}}
          </el-tag>
        </el-form-item>

        <el-form-item>
          <el-input v-model="dialogFormClass.name"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogTypeVisible = false">取 消</el-button>
        <el-button type="primary" @click="addClassTag(dialogFormClass.name,dialogFormClass,ruleForm.classTags)">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
export default {
  data() {
    return {
      dialogFormTag: { name: "" }, // 设置活动标签
      dialogFormClass: { name: "" }, // 添加活动分类
      dialogTypeVisible: false, // 活动分类对话框
      dialogFormVisible: false, //添加标签对话框
      dialogVisible: false, // 图片
      ruleForm: {
        name: "", //活动名称
        activityType: "",

        classTag: "", //当前选中的活动分类
        classTags: [{ name: "分类1" }],
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
            label: "上海"
          }
        ],
        placeValue: "", // 地点

        dialogImageUrl: "", //图片地址

        activeTags: [{ name: "新标签" }],

        placeValue: "",
        placeInput: "", //活动地点
        dialogImageUrl: "", //图片地址

        signUserInfo: "", //用户报名信息展示
        activeDescribe: "", //活动简介
        signUserInfos: [
          { name: "不展示" },
          { name: "展示报名人数" },
          { name: "展示报名清单" },
          { name: "报名成功显示完整用户资料" }
        ],
        evaFunction: "", //评论
        evaFunctions: [
          { name: "不开启" },
          { name: "实时评价" },
          { name: "审核后评论" }
        ],

        //广告
        adTitle: "",
        adContent: "",
        adLink: ""
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
    // 删除标签
    closeTag: function(tag) {
      this.ruleForm.activeTags.splice(this.ruleForm.activeTags.indexOf(tag), 1);
    },
    // 删除活动分类标签
    closeClassTag: function(tag) {
      let index = this.ruleForm.classTags.indexOf(tag);
      this.ruleForm.classTags.splice(index, 1);
    },
    // 图片上传
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.ruleForm.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    //添加标签
    addClassTag: function(tag, form, tags) {
      if (tag && tag.trim().length !== 0) {
        // 标签默认不存在
        let isExist = false;
        tag = tag.trim();
        for (let i = 0; i < tags.length; i++) {
          if (tags[i].name == tag) {
            isExist = true;
          }
        }
        if (isExist == true) {
          this.$message({
            message: "该标签已经存在",
            type: "warning"
          });
        } else {
          this.dialogFormVisible = false;
          this.dialogTypeVisible = false;
          tags.push({
            name: tag
          });
        }
      } else {
        this.$message({
          message: "标签不能为空",
          type: "warning"
        });
      }
    },

    //开通广告
    openAd: function() {
      this.$message({
        showClose: true,
        message: "该功能正在完善",
        type: "warning"
      });
    }
  },
  watch: {}
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