<script setup lang="tsx">
import { reactive, ref, getCurrentInstance, onMounted,watch } from "vue";
import Cesiumer from "@/utils/cesiumer";

/*---------------------------------------------------------------------------------------*/
let cesiumer = null;
onMounted(() => {
  cesiumer = new Cesiumer({ containerId: "amCesiumContainer",action:"alarm-manage-view" });
  const { viewer } = cesiumer;
});
/*---------------------------------------------------------------------------------------*/

const form1 = reactive({
  vvv1: "1111",
  vvv2: "1",
  vvv3: "1",
  vvv4: "11111111",
});

const onSubmit = () => {
  console.log(JSON.parse(JSON.stringify(form1.value)));
};
</script>

<template>
  <div class="p-5">
    <div id="amCesiumContainer"></div>

    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <div slot="header">告警关联</div>
      <!-- card body -->
      <el-form
        :model="form1"
        ref="form1Ref"
        :rules="rules1"
        :inline="false"
        size="normal"
      >
        <el-form-item label="选择关联模型" size="small">
          <el-select
            v-model="form1.vvv1"
            value-key="value"
            placeholder="选择关联模型"
            clearable
            filterable
            class="mr-2"
            @change=""
          >
            <el-option
              v-for="item in [
                { label: '模型1', value: '1' },
                { label: '模型2', value: '2' },
              ]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择告警" size="small">
          <el-select
            v-model="form1.vvv2"
            value-key="value"
            placeholder="选择告警"
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
        </el-form-item>
        <el-form-item label="选择告警模型效果" size="small">
          <el-select
            v-model="form1.vvv3"
            value-key="value"
            placeholder="选择告警模型效果"
            clearable
            filterable
            class="mr-2"
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
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="告警信息面板内容" size="normal">
          <el-input
            type="textarea"
            v-model="form1.vvv4"
            placeholder="告警信息面板内容"
            size="normal"
            class="!w-1/2"
            clearable
            @change=""
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="onSubmit">
            保存
          </el-button>
          <el-button size="medium">取消</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>

<style></style>
