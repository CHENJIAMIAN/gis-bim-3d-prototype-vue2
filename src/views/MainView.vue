<script setup lang="tsx">
import { onMounted, default as Vue, ref } from "vue";
import CesiumTool from "@/utils/cesium-tool";

let cesiumTool = null;
const aaa = ref(123);
let search = "";

onMounted(() => {
  cesiumTool = new CesiumTool();
  const { viewer } = cesiumTool;

  const vue1 = new Vue({
    render: () => {
      return (
        <div
          class={
            "inline-block h-8 transition-[width] duration-[0.8s] whitespace-nowrap border text-[#edffff] stroke-[#edffff] stroke-2 fill-transparent border-solid border-[#444]  bg-[#303336]"
          }
        >
          <el-button size="mini">点\范围属性查询</el-button>
        </div>
      );
    },
  }).$mount();
  viewer._toolbar.insertBefore(vue1.$el, viewer._toolbar.firstChild);

  const vue2 = new Vue({
    render: () => {
      return (
        <div
          class={
            "mr-20 inline-block h-8 transition-[width] duration-[0.8s] whitespace-nowrap border text-[#edffff] stroke-[#edffff] stroke-2 fill-transparent border-solid border-[#444]  bg-[#303336]"
          }
        >
          <el-input
            size="mini"
            v-model={search}
            placeholder="输入模型/设备/楼栋名词"
          ></el-input>
          <el-button size="mini" onClick={locate} class="!ml-2">
            查找
          </el-button>
        </div>
      );
    },
  }).$mount();
  viewer._toolbar.insertBefore(vue2.$el, viewer._toolbar.firstChild);

  const vue4 = new Vue({
    render: () => {
      return (
        <el-card
          shadow="always"
          bodyStyle="{ padding: '20px' }"
          class={
            "absolute z-10 bg-red-500 -translate-x-2/4 -translate-y-2/4 left-2/4 top-2/4"
          }
        >
          <div slot="header">
            <span>告警列表</span>
          </div>
          <el-table
            class="overflow-auto"
            data={[
              { 设备名词: "设备1", 告警级别: "22" },
              { 设备名词: "设备2", 告警级别: "11" },
            ]}
            border
            stripe
          >
            {[
              { id: "设备名词", label: "设备名词", width: 100 },
              { id: "告警级别", label: "告警级别", width: 100 },
            ].map((col) => {
              return (
                <el-table-column
                  prop={col.id}
                  key={col.id}
                  label={col.label}
                  width={col.width}
                ></el-table-column>
              );
            })}
            <el-table-column label="操作" width="150px">
              <el-button size="mini">在地图查看</el-button>
            </el-table-column>
          </el-table>
        </el-card>
      );
    },
  }).$mount();
  const onAlarmListClick = (vue4) => {
    const container = viewer.cesiumWidget.container;
    if (container.contains(vue4.$el)) container.removeChild(vue4.$el);
    else container.insertBefore(vue4.$el, container.firstChild);
  };
  const vue3 = new Vue({
    render: () => {
      return (
        <div
          class={
            "mr-2 cursor-pointer inline-block h-8 transition-[width] duration-[0.8s] whitespace-nowrap border text-[#edffff] stroke-[#edffff] stroke-2 fill-transparent border-solid border-[#444]  bg-[#303336]"
          }
          onClick={() => onAlarmListClick(vue4)}
        >
          告警列表
        </div>
      );
    },
  }).$mount();
  viewer._toolbar.insertBefore(vue3.$el, viewer._toolbar.firstChild);
});

const locate = () => {};
const onClickFlyTo = () => {
  viewer.flyTo(tileset);
};
const onCreateTransformEditor = () => {
  // 又改一下matrix
  cesiumTool.createTransformEditor(tileset);
  console.log("createTransformEditor后:");
  console.log(tileset.modelMatrix.toString());
};
const storeCamera = () => {
  cesiumTool.storeCamera();
};
</script>

<template>
  <main class="relative">
    <div id="cesiumContainer"></div>
    <div id="toolbar">
      <el-button theme="primary" @click="storeCamera">storeCamera</el-button>
      <el-button theme="primary" @click="onClickFlyTo">fly to</el-button>
      <el-button theme="primary" @click="onCreateTransformEditor">
        createTransformEditor
      </el-button>
      <table>
        <tbody>
          <tr>
            <td>longitude</td>
            <td>
              <input
                type="range"
                min="-0.0001"
                max="0.0001"
                step="0.00000001"
                data-bind="value: longitude, valueUpdate: 'input'"
              />
              <input type="text" size="5" data-bind="value: longitude" />
            </td>
          </tr>

          <tr>
            <td>latitude</td>
            <td>
              <input
                type="range"
                min="-0.0001"
                max="0.0001"
                step="0.00000001"
                data-bind="value: latitude, valueUpdate: 'input'"
              />
              <input type="text" size="5" data-bind="value: latitude" />
            </td>
          </tr>

          <tr>
            <td>Height</td>
            <td>
              <input
                type="range"
                min="-100.0"
                max="100.0"
                step="1"
                data-bind="value: height, valueUpdate: 'input'"
              />
              <input type="text" size="5" data-bind="value: height" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <pre class="text-black ml-80">
            9.编写Cesium删粗模功能[满足楼可换]
            10.编写Cesium移动精模楼体gltf（建模人员建）的功能
        </pre
    >
  </main>
</template>

<style>
html,
body,
#cesiumContainer {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
  overflow: hidden;
}
#toolbar {
  color: white;
  margin: 5px;
  padding: 2px 5px;
  position: absolute;
}
#toolbar {
  background: rgba(42, 42, 42, 0.8);
  padding: 4px;
  border-radius: 4px;
}
#toolbar input {
  color: black;
  vertical-align: middle;
  padding-top: 2px;
  padding-bottom: 2px;
}
</style>
