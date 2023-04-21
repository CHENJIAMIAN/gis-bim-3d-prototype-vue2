<script setup lang="ts">
import { reactive, ref, getCurrentInstance, onMounted, watch } from "vue";
import Cesiumer from "@/utils/cesiumer";

const { proxy: vm } = getCurrentInstance();
console.log("vm.$route.query", vm.$route.query);
const showMapConfigDialog = ref(false);

const form1 = reactive({
  vvv1: "高德卫星底图",
  vvv2: "1",
  showBaseLayerPicker: true,
  showNavigation: true,
  showMeasurePlugin: false,
  vvv6: [],
});
const rules1 = reactive({});
const lonlat3_1 = ref([0, 0, 0]);
const lonlat3_2 = ref([0, 0, 0]);
/*---------------------------------------------------------------------------------------*/
watch(
  () => form1.vvv1,
  (newValue, oldValue) => {
    cesiumer?.viewer.baseLayerPicker.viewModel.imageryProviderViewModels.forEach(
      function (viewModel) {
        if (viewModel.name === newValue) {
          viewer.baseLayerPicker.viewModel.selectedImagery = viewModel;
        }
      }
    );
  }
);
watch(
  () => form1.showBaseLayerPicker,
  (newValue, oldValue) => {
    if (newValue) {
      cesiumer.viewer.baseLayerPicker._dropPanel.style.display = "block";
      cesiumer.viewer.baseLayerPicker._element.style.display = "inline-block";
    } else {
      cesiumer.viewer.baseLayerPicker._dropPanel.style.display = "none";
      cesiumer.viewer.baseLayerPicker._element.style.display = "none";
    }
  }
);
watch(
  () => form1.showNavigation,
  (newValue, oldValue) => {
    if (newValue) cesiumer?.createNavigatorPlugin();
    else cesiumer?.cesiumNavigation.destroy();
  }
);
watch(
  () => form1.showMeasurePlugin,
  (newValue, oldValue) => {
    if (newValue) cesiumer?.createMeasurePlugin();
    else {
      cesiumer?.viewer.measure.destroy();
    }
  }
);

const onSubmit = () => {
  console.log(form1.value);
};
const handleGetViewParams = () => {
  const { position } = cesiumer?.storeCamera();
  const lonlat = cesiumer?.convertCartesian3ToDegrees(position);
  lonlat3_1.value = lonlat.map((num) => Number(num.toFixed(3)));
};
const handleGetFullViewParams = () => {
  const { position } = cesiumer?.storeCamera();
  const lonlat = cesiumer?.convertCartesian3ToDegrees(position);
  lonlat3_2.value = lonlat.map((num) => Number(num.toFixed(3)));
};
const handlePublish = () => {
  const { href } = vm.$router.resolve({ path: "/preView" });
  window.open(href, "_blank");
};
</script>
<template>
  <div class="p-5">
    <div id="mcCesiumContainer"></div>
    <!-- :aaa="
      (() => {
        debugger;
        console.log(this);
      })()
    " -->
    <el-card shadow="always" :body-style="{ padding: '20px' }">
      <!-- <div slot="header">
       </div> -->
      <!-- card body -->
      <el-form
        :model="form1"
        ref="form1Ref"
        :rules="rules1"
        :inline="false"
        size="mini"
      >
        <el-form-item label="默认底图选择">
          <el-radio-group v-model="form1.vvv1">
            <el-radio
              v-for="item in [
                { label: '高德地图', bgY: '0' },
                { label: '高德卫星', bgY: '-181' },
              ]"
              :key="item.label"
              :label="item.label"
            >
              {{ item.label }}
              <div
                class="mt-2 ml-7 bg-[url(//webmap1.bdimg.com/wolfman/static/common/images/new/maptype\_a6d3e9b.png)] h-[60px] w-[86px] bg-[86px_240px]"
                :style="`background-position: 0 ${item.bgY}px;`"
                src="https://webmap1.bdimg.com/wolfman/static/common/images/new/maptype_a6d3e9b.png"
              ></div>
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label="初始视图配置" size="small">
          <!-- <el-select
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
          </el-select> -->
          <el-button type="primary" size="small" @click="handleGetViewParams">
            获取视图参数 {{ lonlat3_1 }}</el-button
          >
        </el-form-item>
        <el-form-item label="全图视角配置" size="small">
          <!-- <el-select
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
          </el-select> -->
          <el-button
            type="primary"
            size="small"
            @click="handleGetFullViewParams"
          >
            获取视角参数 {{ lonlat3_2 }}</el-button
          >
        </el-form-item>
        <el-form-item label="是否显示地图选择器" size="mini">
          <el-checkbox
            v-model="form1.showBaseLayerPicker"
            label=""
            :indeterminate="false"
            @change=""
          ></el-checkbox>
        </el-form-item>
        <el-form-item label="是否显示指北针" size="mini">
          <el-checkbox
            v-model="form1.showNavigation"
            label=""
            :indeterminate="false"
            @change=""
          ></el-checkbox>
        </el-form-item>
        <el-form-item label="是否显示测量工具" size="mini">
          <el-checkbox
            v-model="form1.showMeasurePlugin"
            label=""
            :indeterminate="false"
            @change=""
          ></el-checkbox>
        </el-form-item>
        <el-form-item label="添加模型" size="mini">
          <el-select
            v-model="form1.vvv6"
            class="ml-2"
            value-key="value"
            placeholder="地图相关模型"
            clearable
            filterable
            multiple
            @change=""
          >
            <el-option
              v-for="item in ['模型1', '模型2']"
              :key="item"
              :label="item"
              :value="item"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item>
          <el-button size="medium" type="primary" @click="onSubmit">
            保存
          </el-button>
          <el-button size="medium">取消</el-button>
        </el-form-item>
      </el-form>
      <el-button type="danger" @click="handlePublish"> 发布地图 </el-button>
    </el-card>
  </div>
</template>
