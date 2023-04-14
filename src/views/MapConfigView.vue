<script setup lang="ts">
import { reactive } from "vue";

const form1 = reactive({
  vvv1: "高德卫星底图",
  vvv2: "1",
  vvv3: true,
  vvv4: true,
});

const onSubmit = () => {
  console.log(form1.value);
};
</script>
<template>
  <div class="p-5">
     <el-card shadow="always" :body-style="{ padding: '20px' }">
       <!-- <div slot="header">
       </div> -->
       <!-- card body -->
       <el-form
         :model="form1"
         ref="form1"
         :rules="rules1"
         :inline="false"
         size="normal"
       >
         <el-form-item label="默认底图选择">
           <el-radio-group v-model="form1.vvv1">
             <el-radio
               v-for="item in [
                 { label: '高德卫星底图' },
                 { label: '高德普通底图' },
               ]"
               :key="item.key"
               :label="item.label"
             ></el-radio>
           </el-radio-group>
         </el-form-item>
         <el-form-item label="初始视图配置" size="small">
           <el-select
             v-model="form1.vvv2"
             value-key="value"
             placeholder="选择已保存的视图"
             clearable
             filterable
             class="mr-2"
             @change=""
           >
             <el-option
               v-for="item in [
                 { label: '视图1', value: '1' },
                 { label: '视图2', value: '2' },
               ]"
               :key="item.value"
               :label="item.label"
               :value="item.value"
             ></el-option>
           </el-select>
           <el-button type="primary" size="small" @click="">
             获取视图参数
           </el-button>
         </el-form-item>
         <el-form-item label="是否显示地图选择器" size="normal">
           <el-checkbox
             v-model="form1.vvv3"
             label=""
             :indeterminate="false"
             @change=""
           ></el-checkbox>
         </el-form-item>
         <el-form-item label="是否显示指北针" size="normal">
           <el-checkbox
             v-model="form1.vvv4"
             label=""
             :indeterminate="false"
             @change=""
           ></el-checkbox>
         </el-form-item>
         <el-form-item>
           <el-button size="medium" type="primary" @click="onSubmit">
             保存
           </el-button>
           <el-button size="medium">取消</el-button>
         </el-form-item>
       </el-form>
       <el-button type="danger" @click="showMapConfigDialog = true">
         发布地图
       </el-button>
     </el-card>
  </div>
</template>

<style></style>
