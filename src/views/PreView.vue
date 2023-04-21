<script setup lang="tsx">
import { onMounted, default as Vue, ref, getCurrentInstance } from "vue";
import Cesiumer from "@/utils/cesiumer";

const { proxy: vm } = getCurrentInstance();

let cesiumer = null;
const aaa = ref(123);

let search = "";
/*---------------------------------------------------------------------------------------*/
onMounted(() => {
  cesiumer = new Cesiumer({
    containerId: "cesiumContainer",
    action: "main-view",
  });
  const { viewer } = cesiumer;
  //
  const pointOrRangeQueryButton = new Vue({
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
  viewer._toolbar.insertBefore(
    pointOrRangeQueryButton.$el,
    viewer._toolbar.firstChild
  );
  //
  const deviceSearchInput = new Vue({
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
  viewer._toolbar.insertBefore(
    deviceSearchInput.$el,
    viewer._toolbar.firstChild
  );
  //
  const alertTable = new Vue({
    render: () => {
      return (
        <el-card
          shadow="always"
          bodyStyle="{ padding: '20px' }"
          class={
            "absolute z-10 bg-red-500 -translate-x-2/4 -translate-y-2/4 left-3/4 top-2/4"
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
              <el-button size="mini" onClick={flyToDegree3}>
                在地图查看
              </el-button>
            </el-table-column>
          </el-table>
        </el-card>
      );
    },
  }).$mount();
  const onAlarmTableClick = (tableVue) => {
    const container = viewer.cesiumWidget.container;
    if (container.contains(tableVue.$el)) container.removeChild(tableVue.$el);
    else container.insertBefore(tableVue.$el, container.firstChild);
  };
  const alertTableButton = new Vue({
    render: () => {
      return (
        <div
          class={
            "mr-2 cursor-pointer inline-block h-8 transition-[width] duration-[0.8s] whitespace-nowrap border text-[#edffff] stroke-[#edffff] stroke-2 fill-transparent border-solid border-[#444]  bg-[#303336]"
          }
          onClick={() => onAlarmTableClick(alertTable)}
        >
          告警列表
        </div>
      );
    },
  }).$mount();
  viewer._toolbar.insertBefore(
    alertTableButton.$el,
    viewer._toolbar.firstChild
  );
  //
  const modelTable = new Vue({
    render: () => {
      return (
        <el-card
          shadow="always"
          bodyStyle="{ padding: '20px' }"
          class={
            "absolute z-10 bg-red-500 -translate-x-2/4 -translate-y-2/4 left-3/4 top-2/4"
          }
        >
          <div slot="header">
            <span>模型列表</span>
          </div>
          <el-table
            class="overflow-auto"
            data={[
              { 模型名词: "楼栋1", 类型: "楼栋" },
              { 模型名词: "楼栋1", 类型: "楼栋" },
              { 模型名词: "设备2", 类型: "设备" },
              { 模型名词: "设备2", 类型: "设备" },
            ]}
            border
            stripe
          >
            {[
              { id: "模型名词", label: "模型名词", width: 100 },
              { id: "类型", label: "类型", width: 100 },
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
              <el-button size="mini" onClick={flyToDegree3}>
                在地图查看
              </el-button>
            </el-table-column>
          </el-table>
        </el-card>
      );
    },
  }).$mount();
  const onModelTableClick = (tableVue) => {
    const container = viewer.cesiumWidget.container;
    if (container.contains(tableVue.$el)) container.removeChild(tableVue.$el);
    else container.insertBefore(tableVue.$el, container.firstChild);
  };
  const modelTableButton = new Vue({
    render: () => {
      return (
        <div
          class={
            "mr-2 cursor-pointer inline-block h-8 transition-[width] duration-[0.8s] whitespace-nowrap border text-[#edffff] stroke-[#edffff] stroke-2 fill-transparent border-solid border-[#444]  bg-[#303336]"
          }
          onClick={() => onModelTableClick(modelTable)}
        >
          模型列表
        </div>
      );
    },
  }).$mount();
  viewer._toolbar.insertBefore(
    modelTableButton.$el,
    viewer._toolbar.firstChild
  );
});
/*---------------------------------------------------------------------------------------*/
function flyToDegree3(degrees3 = [113.9049, 22.5149, 500.0]) {
  cesiumer?.flyToDegree3(degrees3);
}
const locate = () => {};
const onClickFlyTo = () => {
  viewer.flyTo(tileset);
};
const onCreateTransformEditor = () => {
  // 又改一下matrix
  cesiumer.createTransformEditor(tileset);
  console.log("createTransformEditor后:");
  console.log(tileset.modelMatrix.toString());
};
const storeCamera = () => {
  cesiumer.storeCamera();
};
const handleAction = () => {
  const action = vm.$route.query.action;

  if (action === "get-view-parameters") {
    // 获取视图参数
    vm.$message("获取视图参数");
  } else if (action === "get-viewport-parameters") {
    vm.$message("获取视角参数");
  } else {
    // 不支持的操作
  }
};
handleAction();
</script>

<template>
  <main class="relative">
    <div id="cesiumContainer"></div>
    <div id="toolbar" v-if="false">
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
