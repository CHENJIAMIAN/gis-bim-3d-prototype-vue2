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
