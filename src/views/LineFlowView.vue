<template>
  <div class="p-5">
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">
        <span>管线潮流</span>
      </div>
      <!-- card body -->
      <el-table
        :data="[
          { name: '管线1',effect:'效果1' },
          { name: '管线2',effect:'效果1' },
          { name: '管线3',effect:'效果1' },
          { name: '管线4',effect:'效果2' },
          { name: '管线5',effect:'效果2' },
          { name: '管线6',effect:'效果3' },
        ]"
        border
        stripe
      >
        <el-table-column
          v-for="col in [
            { id: 'name', label: '管线', width: 80 },
            { id: 'effect', label: '效果', width: 80 }
        
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
          </template>
        </el-table-column>
      </el-table>
    </el-card>
  </div>
</template>

<style></style>
