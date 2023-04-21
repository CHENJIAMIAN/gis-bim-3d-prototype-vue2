<script setup lang="ts">
import {
  reactive,
  ref,
  getCurrentInstance,
  onMounted,
  watch,
  defineComponent,
} from "vue";
import Cesiumer from "@/utils/cesiumer";
//
import AlarmManageView from "@/views/AlarmManageView.vue";
import LineFlowView from "@/views/LineFlowView.vue";
import MapConfigView from "@/views/MapConfigView.vue";
import ModelManageView from "@/views/ModelManageView.vue";
//
const selectedEntities = []; // 已选中的实体
//
const tab = ref("map-config-view");
const treeData = ref([]); // 树形数据
const defaultProps = reactive({
  label: "name",
  children: "children",
});

/*---------------------------------------------------------------------------------------*/
watch(tab, (n, o) => {
  console.log("tab changed", n, o);
  cesiumer?.destroy();
  cesiumer = new Cesiumer({
    containerId: "cesiumContainer",
    action: n,
  });
});
/*---------------------------------------------------------------------------------------*/
let cesiumer  = null;
onMounted(() => {
  cesiumer = new Cesiumer({
    containerId: "cesiumContainer",
    action: "main-view",
  });
  loadModelsWithTree();
});
/*---------------------------------------------------------------------------------------*/
// 加载模型并构造模型树
const loadModelsWithTree = () => {
  const { viewer } = cesiumer;
  // TODO：加载模型，并根据模型构造模型树
  // 将生成的模型树设置为treeData
  /* {
  id: 'xxx', // 节点ID
  name: '模型名称', // 节点名称
  entityId: 'xxx', // 3D模型实体ID
  children: [], // 子节点的数组
} */

  // 创建根节点
  const rootNode = {
    id: "root",
    name: "3D模型树",
    children: [],
  };

  // 加载3D模型
  const modelUrl = "/static/models/3d-model.gltf";
  const modelEntity = viewer.entities.add({
    position: Cesium.Cartesian3.fromDegrees(0, 0, 0),
    model: {
      uri: modelUrl,
    },
  });
  const modelNode = {
    id: "model",
    name: "3D模型",
    entityId: modelEntity.id,
    children: [],
  };
  rootNode.children.push(modelNode);

  // 将树形结构设置为模型树
  treeData.value = [rootNode];
  // 上述代码中，我们使用`Cesium.Cartesian3.fromDegrees`方法来指定模型的位置，使用`Cesium.Entity`来创建一个3D模型实体，并将其添加到Cesium Viewer中。然后，我们使用模型实体的`id`来标识该3D模型对应的节点，在树形结构中添加该节点即可。
};

// 选中/取消选中实体
const onCheckChanged = (value, node) => {
  const { viewer } = cesiumer;
  // console.log(value, node);
  cesiumer?.flyToDegree3([113.9069, 22.5159, 500.0]);
  // const entityId = node.data.entityId;
  // const entity = viewer.entities.getById(entityId);
  // if (value) {
  //   viewer.zoomTo(entity);
  //   selectedEntities.push(entity);
  //   entity.show = true;
  // } else {
  //   entity.show = false;
  //   const index = selectedEntities.indexOf(entity);
  //   if (index !== -1) {
  //     selectedEntities.splice(index, 1);
  //   }
  // }
};
// 清空选中的实体
const clearSelectedEntities = () => {
  selectedEntities.forEach((entity) => {
    entity.show = false;
  });
  selectedEntities = [];
};
function handleTabClick(a, b, c) {}
</script>

<template>
  <div id="main">
    <!-- <header
      class="p-5 flex gap-5 bg-gray-200 text-gray-600 font-bold"
      v-if="$route.path !== '/preView'"
    >
      <router-link to="/">🎈地图显示</router-link>
      <router-link to="/mc">🎇地图配置</router-link>
      <router-link to="/am">🧨告警管理</router-link>
      <router-link to="/mm">🎉模型管理</router-link>
      <router-link to="/lf">🎃管线潮流</router-link>
    </header> -->

    <div class="flex h-screen">
      <div class="w-1/4 max-w-md h-200 h-full">
        <el-tree
          :data="treeData"
          default-expand-all
          show-checkbox
          node-key="id"
          :props="defaultProps"
          @check="onCheckChanged"
          class="m-4"
        ></el-tree>
      </div>
      <div id="cesiumContainer" class="flex-1 h-full bg-black relative">
        <!-- relative以让info-box相对于它，否则absolute元素的位置将相对于文档的视口而不是父级元素，会挤开视口 -->
      </div>
      <div class="w-1/4 max-w-md h-full">
        <el-tabs
          v-model="tab"
          type="card"
          tab-position="top"
          @tab-click="handleTabClick"
        >
          <el-tab-pane
            key="map-config-view"
            label="地图配置"
            name="map-config-view"
          >
            <MapConfigView />
          </el-tab-pane>
          <el-tab-pane
            key="alarm-manage-view"
            label="告警管理"
            name="alarm-manage-view"
          >
            <AlarmManageView />
          </el-tab-pane>
          <el-tab-pane
            key="model-manage-view"
            label="模型管理"
            name="model-manage-view"
          >
            <ModelManageView />
          </el-tab-pane>
          <el-tab-pane
            key="line-flow-view"
            label="管线潮流"
            name="line-flow-view"
          >
            <LineFlowView />
          </el-tab-pane>
        </el-tabs>
      </div>
    </div>
  </div>
</template>

<style scoped>
.router-link-exact-active {
  color: black;
  font-weight: bold;
  text-decoration: none;
  border-bottom: 2px solid black;
}
</style>
