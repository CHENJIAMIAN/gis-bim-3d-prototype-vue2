<script setup lang="tsx">
import { reactive, ref, getCurrentInstance, onMounted,watch } from "vue";
import Cesiumer from "@/utils/cesiumer";

/*---------------------------------------------------------------------------------------*/
let cesiumer = null;
onMounted(() => {
  cesiumer = new Cesiumer({ containerId: "mmCesiumContainer",action:"model-manage-view" });
  const { viewer } = cesiumer;
});
/*---------------------------------------------------------------------------------------*/

const handleTransform = (row)=>{
  const {name,classType,color,matrix} = row;
  // 根据信息找出tileset
  // cesiumer.createTransformEditor(tileset);
  if(name === '鄂州机场-中心站-室外模型'){
    cesiumer.createTransformEditor(model);
  }else{
    cesiumer.transformEditor.destroy();
  }
}
</script>
<template>
  <div class="p-5">
    <div id="mmCesiumContainer"></div>

    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>模型管理</span>
        <el-upload
          class="mt-2"
          ref="upload"
          :action="uploadUrl"
          :headers="{ Authorization: token }"
          :on-change="handleUploadChange"
          :before-upload="beforeUpload"
          :auto-upload="false"
          :file-list="fileList"
        >
          <el-button
            size="small"
            type="primary"
            title="系统应该支持GeoJSON、glTF、3DTiles的模型加载展示"
          >
            上传模型
          </el-button>
          <div slot="tip" class="el-upload__tip">只能上传zip格式的文件</div>
        </el-upload>
      </div>
      <!-- card body -->
      <el-table
        :data="[
          {
            name: '鄂州机场-中心站-室外模型',
            color: '#3A42F2',
            matrix: `原始`,
            classType: '室外',
          },
          {
            name: '鄂州机场-中心站-室内模型-房间',
            color: '#2F45B2',
            matrix: '已设置',
            classType: '室内',
          },
        ]"
        border
        stripe
      >
        <el-table-column
          v-for="col in [
            { id: 'name', label: '模型', width: 80 },
            { id: 'classType', label: '模型类别', width: 80 },
            { id: 'color', label: '告警颜色', width: 80 },
            { id: 'matrix', label: ' 位置姿态参数', width: 80 },
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
            <el-button
              type="primary"
              class="!ml-0"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row)"
            >
              编辑元信息
            </el-button>
            <el-button
              type="danger"
              class="!ml-0"
              icon="el-icon-delete"
              size="mini"
              @click="deleteRow(scope.row)"
            >
              删除
            </el-button>
            <el-button class="!ml-0" size="mini" @click="handleLink(scope.row)">
              关联告警
            </el-button>
            <el-button class="!ml-0" size="mini" @click="handleTransform(scope.row)"
              >位置姿态调整</el-button
            >
            <el-button class="!ml-0" size="mini" @click=""
              >关联告警/信息面板</el-button
            >
          </div>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
