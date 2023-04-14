<template>
  <div class="p-5">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>模型管理</span>
      </div>
      <!-- card body -->
      <el-table
        :data="[
          {name: '模型1'},
          {name: '模型2'},
          {name: '模型3'},
          {name: '模型4'},
          {name: '模型5'},
          {name: '模型6'},
          ]"
        border
        stripe
      >
        <el-table-column
          v-for="col in [
            { id: 'name', label: '模型', width: 80 },
          ]"
          :prop="col.id"
          :key="col.id"
          :label="col.label"
          :width="col.width"
        ></el-table-column>
        <el-table-column label="操作">
          <template slot-scope="scope">
            <el-button size="mini" @click="handleLink(scope.row)">
              关联告警
            </el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
