<script setup lang="ts">
    /* 
defineProps<{
  msg: string;
}>();
*/
</script>

<template>
    <div id="app" class="">
        <header class="p-5 flex gap-5">
            <router-link to="/">Home</router-link>
            <router-link to="/about">About</router-link>
        </header>

        <div class="app-content">
          <pre>
            'Cesium地球加载底图+粗模'
            模型的方位矫正
            编写Cesium删粗模功能[满足楼可换]
            编写Cesium移动精模楼体（建模人员建）的功能
            编写Cesium模型换色功能[满足可变色]
            编写告警数据弹出面板
            编写告警数据弹出面板关联数据功能[满足可关联告警数据]
            编写Cesium楼之间的管线潮流效果[满足有楼之间的潮流关系]
            //地图显示,基本地图工具,模型加载,模型管理,管线潮流,数据可视化,告警设计,bim模型加载
        </pre
          >
          <router-view />
        </div>
    </div>
</template>

<style scoped></style>
