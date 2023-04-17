<template>
  <div class="p-5">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>模型管理</span>
        <el-button
          type="primary"
          size="mini"
          @click=""
          class="!ml-5"
          title="系统应该支持GeoJSON、glTF、3DTiles的模型加载展示"
        >
          上传模型
        </el-button>
      </div>
      <!-- card body -->
      <el-table
        :data="[
          { name: '模型1', color: '#3A42F2', matrix: 'matrix1',class:'类别1' },
          { name: '模型2', color: '#3A42F2', matrix: 'matrix2',class:'类别2' },
          { name: '模型3', color: '#3A42F2', matrix: 'matrix3',class:'类别3' },
          { name: '模型4', color: '#3A42F2', matrix: 'matrix4',class:'类别4' },
          { name: '模型5', color: '#3A42F2', matrix: 'matrix5',class:'类别5' },
          { name: '模型6', color: '#3A42F2', matrix: 'matrix6',class:'类别6' },
        ]"
        border
        stripe
      >
        <el-table-column
          v-for="col in [
            { id: 'name', label: '模型', width: 80 },
            { id: 'class', label: '模型类别', width: 80 },
            { id: 'color', label: '告警颜色', width: 80 },
            { id: 'matrix', label: ' 位置姿态参数', width: 80 },
          ]"
          :prop="col.id"
          :key="col.id"
          :label="col.label"
          :width="col.width"
        >
          <template slot-scope="{ row, column, $index, $rowKey }">
            <span v-if="col.id !== 'color'">{{ row[column.property] }}</span>
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
          <template slot-scope="scope">
            <el-button
              type="primary"
              icon="el-icon-edit"
              size="mini"
              @click="showEditDialog(scope.row)"
            >
              编辑元信息
            </el-button>
            <el-button
              type="danger"
              icon="el-icon-delete"
              size="mini"
              @click="deleteRow(scope.row)"
            >
              删除
            </el-button>
            <el-button size="mini" @click="handleLink(scope.row)">
              关联告警
            </el-button>
            <el-button size="mini" @click="">位置姿态调整</el-button>
            <el-button size="mini" @click="">关联告警/信息面板</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
