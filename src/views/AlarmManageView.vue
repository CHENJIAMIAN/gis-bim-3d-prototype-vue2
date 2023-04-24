<script setup lang="tsx">
import { reactive, ref, getCurrentInstance, onMounted, watch,defineEmits } from "vue";
import Cesiumer from "@/utils/cesiumer";

const form1 = reactive({
  vvv1: "1",
  vvv2: "1",
  effect: "1",
  alarmContent: "XXX过载了",
  alarmColor:'rgba(218, 72, 72, 1)',
});
const rules1 = reactive({
  vvv1: [{ required: true, message: "请选择关联模型", trigger: "change" }],
  vvv2: [{ required: true, message: "请选择告警顶牌", trigger: "change" }],
  effect: [{ required: true, message: "请选择告警模型效果", trigger: "change" }],
  alarmContent: [{ required: true, message: "请输入告警内容", trigger: "change" }],
  alarmColor: [{ required: true, message: "请选择告警颜色", trigger: "change" }],
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
      <el-checkbox>{{'是否默认'}}</el-checkbox>
      
      
      <!-- card body -->
      <el-form
        :model="form1"
        ref="form1Ref"
        :rules="rules1"
        :inline="false"
        size="mini"
      >
        <el-form-item label="关联模型">
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
                { label: '鄂州机场-中心站-室外模型', value: '1' },
                { label: '鄂州机场-中心站-室内模型-房间', value: '2' },
              ]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="选择告警">
          <el-select
            v-model="form1.vvv2"
            value-key="value"
            placeholder="告警顶牌"
            clearable
            filterable
            class="mr-2"
            @change=""
          >
            <el-option
              v-for="item in [
                { label: '告警顶牌样式1', value: '1' },
                { label: '告警顶牌样式2', value: '2' },
              ]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="告警模型效果">
          <el-select
            v-model="form1.effect"
            value-key="value"
            placeholder="选择告警模型效果"
            clearable
            filterable
            class="mr-2"
            @change=""
          >
            <el-option
              v-for="item in [
                { label: '发光', value: '1' },
                { label: '闪烁', value: '2' },
              ]"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="告警颜色">
          <el-color-picker v-model="form1.alarmColor" :show-alpha="true" ></el-color-picker>
        </el-form-item>
        <el-form-item label="告警信息面板内容" size="normal">
          <el-input
            type="textarea"
            v-model="form1.alarmContent"
            placeholder="告警信息面板内容"
            size="normal"
            class="!w-1/2"
            clearable
            @change=""
          ></el-input>
          <pre>
            选择面板UI：
              告警统计信息
              告警列表详情
                /alarmReally页面
              告警信息（需绑定测点）
                /alarmReally页面-设置拉下的选项们
          </pre>
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
