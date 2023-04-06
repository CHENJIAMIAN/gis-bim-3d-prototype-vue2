<script setup lang="ts">
    import { onMounted } from 'vue';
    import CesiumTool from '@/utils/cesium-tool';

    onMounted(async () => {
        const cesiumTool = new CesiumTool();
        var tileset = (window.tileset = await cesiumTool.load3DTile());
        cesiumTool.loadTileSetViewModel(tileset);
    });
</script>

<template>
    <main class="relative">
        <div id="cesiumContainer"></div>
        <div id="toolbar">
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
                            <input
                                type="text"
                                size="5"
                                data-bind="value: longitude"
                            />
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
                            <input
                                type="text"
                                size="5"
                                data-bind="value: latitude"
                            />
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
                            <input
                                type="text"
                                size="5"
                                data-bind="value: height"
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <pre>
            'Cesium地球加载粗模'
            模型的方位矫正
            编写Cesium删粗模功能[满足楼可换]
            编写Cesium移动精模楼体（建模人员建）的功能
            编写Cesium模型换色功能[满足可变色]
            编写告警数据弹出面板
            编写告警数据弹出面板关联数据功能[满足可关联告警数据]
            编写Cesium楼之间的管线潮流效果[满足有楼之间的潮流关系]
            //基本地图工具,模型加载,模型管理,管线潮流,数据可视化,告警设计,bim模型加载
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
