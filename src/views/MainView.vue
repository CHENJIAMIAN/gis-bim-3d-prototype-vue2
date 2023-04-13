<script setup lang="ts">
  import { onMounted } from "vue";
  import CesiumTool from "@/utils/cesium-tool";

  let cesiumTool = null;
  onMounted(async () => {
    cesiumTool = new CesiumTool();
  });

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
            按效果排行
            6.编写告警数据弹出面板
            7.编写Cesium模型换色功能[满足可变色]
            8.编写Cesium楼之间的管线潮流效果[满足有楼之间的潮流关系]
                https://sandcastle.cesium.com/gallery/Underground%20Color.html
            9.编写Cesium删粗模功能[满足楼可换]
            10.编写Cesium移动精模楼体gltf（建模人员建）的功能
            11.编写告警数据弹出面板关联数据功能[满足可关联告警数据]
            12.模型管理
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
