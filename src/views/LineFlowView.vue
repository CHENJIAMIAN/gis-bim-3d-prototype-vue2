<script setup lang="ts"></script>
<template>
  <div class="p-5">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>管线潮流</span>
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
          {
            name: '管线4',
            effect: '效果2',
            color: '颜色4',
            size: '大小4',
            direction: '方向4',
            speed: '速度4',
          },
          {
            name: '管线5',
            effect: '效果2',
            color: '颜色5',
            size: '大小5',
            direction: '方向5',
            speed: '速度5',
          },
          {
            name: '管线6',
            effect: '效果3',
            color: '颜色6',
            size: '大小6',
            direction: '方向6',
            speed: '速度6',
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
          <template slot-scope="scope">
            <el-button size="mini" @click="handleLink(scope.row)">
              管线关联
            </el-button>
            <el-button size="mini" @click="">潮流配置</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
