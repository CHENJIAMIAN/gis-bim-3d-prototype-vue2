<script setup lang="tsx">
import { reactive, ref, getCurrentInstance, onMounted, watch } from "vue";
import Cesiumer from "@/utils/cesiumer";

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
const handleLink = () => {};
const onSubmit = () => {
  console.log(JSON.parse(JSON.stringify(form1)));
};
</script>
<template>
  <div class="p-5">
    <div id="lfCesiumContainer"></div>

    <!--  -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>管线潮流</span>
        <el-upload
          class="mt-2 ml-2 inline"
          action="'/api/upload/gltf'"
          :before-upload="beforeUpload"
          multiple
          directory
          accept=".glb,.gltf"
        >
          <el-button size="mini" type="primary" slot="trigger"
            >上传管线模型</el-button
          >
          参考模型的选择
        </el-upload>
      </div>

      <!-- card body -->
      <el-table
        :data="[
          {
            name: '综合楼到南开闭站的管线',
            effect: '发光',
            color: '#3A42F2',
            size: '30',
            direction: '正向',
            speed: '较低',
          },
          {
            name: '2#塔台到3#塔台的管线',
            effect: '箭头',
            color: '#3A42F2',
            size: '20',
            direction: '反向',
            speed: '适中',
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
        >
          <template slot-scope="{ row, column, $index, $rowKey }">
            <span v-if="col.id !== 'color'" :title="row[column.property]">{{
              row[column.property].substring(0, 60)
            }}</span>
            <el-color-picker
              v-else
              v-model="row.color"
              size="mini"
              show-alpha
              :predefine="['transparent']"
            />
          </template>
        </el-table-column>
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

    <!--  -->
    <el-dialog
      title="潮流配置"
      :visible.sync="dialogVisible1"
      width="60%"
      @close=""
    >
      <el-form
        :model="form1"
        ref="form1Ref"
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
              v-for="item in [
                { label: '效果1', value: '1' },
                { label: '效果2', value: '2' },
              ]"
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
  </div>
</template>

<style scoped></style>
