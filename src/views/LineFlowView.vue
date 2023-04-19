<script setup lang="ts">
import { reactive, ref } from "vue";

const dialogVisible1 = ref(false);
const form1 = reactive({
  vvv1: 0,
});
const rules1 = reactive({});

const beforeUpload = (file) => {
  const isGlb = file.type === "model/gltf-binary";
  const hasGltfFolder =
    file.name.indexOf(".gltf") !== -1 && file.name.lastIndexOf("/") !== -1;

  if (!isGlb && !hasGltfFolder) {
    this.$message.error("只能上传glb或带有gltf文件夹的文件");
    return false;
  }
  return true;
};
</script>
<template>
  <div class="p-5">
    <!--  -->
    <el-dialog
      title="潮流配置"
      :visible.sync="dialogVisible1"
      width="60%"
      @close=""
    >
      <el-form
        :model="form1"
        ref="form1"
        :rules="rules1"
        label-width="80px"
        :inline="false"
        size="mini"
      >
        <el-form-item label="效果">
          <el-select
            v-model="form1.vvv1"
            value-key="value"
            placeholder="请选择效果"
            clearable
            filterable
            @change=""
          >
            <el-option
              v-for="item in [{label: '效果1', value: '1'}, {label: '效果2', value: '2'}]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            >
            </el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="颜色">
          <el-color-picker
            v-model="form1.vvv2"
            :show-alpha="true"
          ></el-color-picker>
        </el-form-item>
        <el-form-item label="大小">
          <el-input v-model="form1.vvv3"></el-input>
        </el-form-item>
        <el-form-item label="方向">
          <el-input v-model="form1.vvv4"></el-input>
        </el-form-item>
        <el-form-item label="速度">
          <el-input v-model="form1.vvv5"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button @click="dialogVisible1 = false">取消</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>

    <!--  -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>管线潮流</span>
        <el-upload
          class="mt-2 !ml-0"
          :action="baseUrl + '/api/upload/gltf'"
          :headers="headers"
          :before-upload="beforeUpload"
          multiple
        >
          <el-button size="small" type="primary" slot="trigger"
            >上传管线模型</el-button
          >
        </el-upload>
      </div>

      <!-- card body -->
      <el-table
        :data="[
          {
            name: '管线1',
            effect: '效果1',
            color: '颜色1',
            size: '大小1',
            direction: '方向1',
            speed: '速度1',
          },
          {
            name: '管线2',
            effect: '效果1',
            color: '颜色2',
            size: '大小2',
            direction: '方向2',
            speed: '速度2',
          },
          {
            name: '管线3',
            effect: '效果1',
            color: '颜色3',
            size: '大小3',
            direction: '方向3',
            speed: '速度3',
          },
        ]"
        border
        stripe
      >
        <el-table-column
          v-for="col in [
            { id: 'name', label: '管线', width: 80 },
            { id: 'effect', label: '效果', width: 80 },
            { id: 'color', label: '颜色/渐变', width: 100 },
            { id: 'size', label: '箭头大小', width: 80 },
            { id: 'direction', label: '箭头方向', width: 80 },
            { id: 'speed', label: '流动速度', width: 80 },
          ]"
          :prop="col.id"
          :key="col.id"
          :label="col.label"
          :width="col.width"
        ></el-table-column>
        <el-table-column label="操作">
          <div class="flex gap-2 flex-wrap" slot-scope="scope">
            <el-button size="mini" @click="handleLink(scope.row)">
              管线关联
            </el-button>
            <el-button class="!ml-0" size="mini" @click="dialogVisible1 = true"
              >潮流配置</el-button
            >
          </div>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
