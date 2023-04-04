import {
    Viewer,
    BingMapsImageryProvider,
    createWorldTerrain,
    BingMapsStyle,
    HeadingPitchRoll,
    Cartesian3,
    Cesium3DTileset,
    knockout,
} from 'cesium';
import * as Cesium from 'cesium';
window.Cesium = Cesium;

const tileUrl = 'http://localhost:3000/Tilesets/Tileset/tileset.json';

class CesiumTool {
    constructor() {
        this.viewer = null;

        this.createCesium('cesiumContainer');
        this.setCesiumCamera();
    }

    createCesium(containerId) {
        const viewer =
            (this.viewer =
            window.viewer =
                new Viewer(containerId, {
                    //viewer用于构建应用程序的基本小部件。它将所有标准Cesium小部件组合到一个可重用的程序包中
                    animation: false, // 是否显示动画小部件（左下角仪表盘）
                    baseLayerPicker: true, // 是否显示图层选择器
                    fullscreenButton: true, // 是否显示全屏按钮
                    geocoder: true, // 是否显示 geocoder 小部件（右上角查询按钮）
                    vrButton: false, // 是否显示 VR 按钮
                    homeButton: true, // 是否显示 Home 按钮
                    infoBox: true, // 是否显示信息框
                    sceneModePicker: true, // 是否显示 3D/2D 选择器
                    selectionIndicator: false, // 是否显示指示器组件
                    timeline: false, // 是否显示时间轴
                    navigationHelpButton: false, // 是否显示右上角的帮助按钮
                    scene3DOnly: false, // 如果设置为 true，则所有几何图形以 3D 模式绘制以节约GPU资源
                    shadows: false, // 是否显示阴影
                    shouldAnimate: false, // 是否显示动画
                    // imageryProvider: new BingMapsImageryProvider({
                    //     url: 'https://dev.virtualearth.net',
                    //     key: 'YourBingMapKey',
                    //     mapStyle: BingMapsStyle.AERIAL,
                    // }),
                    // 加载地形系统
                    terrainProvider: createWorldTerrain({
                        requestWaterMask: true, // 动态水纹
                        requestVertexNormals: true, // 光效
                    }),
                }));

        viewer.cesiumWidget.creditContainer.style.display = 'none'; //隐藏版权信息
        viewer.extend(Cesium.viewerCesiumInspectorMixin);//使用Inspector面板
        // viewer.scene.debugShowFramesPerSecond = true; // 显示帧率
        // viewer.scene.globe.depthTestAgainstTerrain = true; // 控制视角不转到地下（确保在地形后面的物体被正确地遮挡，只有最前端的对象可见）
    }

    setCesiumCamera() {
        // 初始化相机参数
        const initialOrientation = new HeadingPitchRoll.fromDegrees(0, -90, 0);
        const homeCameraView = {
            // [115.04080787632513, 30.34712342090306, 13655.54656925315]//鄂州机场
            destination: new Cartesian3.fromDegrees(
                115.04080787632513,
                30.34712342090306,
                13655.54656925315
            ),
            orientation: {
                //Heading //想象再飞机头,左右方向的改变
                //Pitch //飞机头俯仰角度的改变
                //Roll //飞机身向左右翻滚
                //Range //距中心的距离，以米为单位。
                heading: initialOrientation.heading,
                ///不知道设多少可以从控制台的camera.heading获取！！/
                pitch: initialOrientation.pitch,
                roll: initialOrientation.roll,
            },
        };
        //HeadingPitchRange
        viewer.scene.camera.setView(homeCameraView); // 设置初始视野视角
        //也可以重写 homeButton
        viewer.homeButton.viewModel.command.beforeExecute.addEventListener(
            (e) => {
                e.cancel = true;
                viewer.camera.flyTo(homeCameraView);
            }
        );
    }

    update3dtilesMaxtrix(
        tileset,
        params = {
            tx: 0, //模型中心X轴坐标（经度，单位：十进制度）
            ty: 0, //模型中心Y轴坐标（纬度，单位：十进制度）
            tz: 0, //模型中心Z轴坐标（高程，单位：米）
            rx: 0, //X轴（经度）方向旋转角度（单位：度）
            ry: 0, //Y轴（纬度）方向旋转角度（单位：度）
            rz: 0, //Z轴（高程）方向旋转角度（单位：度）
            scale: 1, //缩放比例
        }
        ) {
        // this.update3dtilesMaxtrix(tileset, {
        //   tx: 113.9509894204082, //模型中心X轴坐标（经度，单位：十进制度）
        //   ty: 23.026304042520447, //模型中心Y轴坐标（纬度，单位：十进制度）
        //   tz: -44.68409132670809, //模型中心Z轴坐标（高程，单位：米）
        //   rx: 0, //X轴（经度）方向旋转角度（单位：度）
        //   ry: 0, //Y轴（纬度）方向旋转角度（单位：度）
        //   rz: 0, //Z轴（高程）方向旋转角度（单位：度）
        //   scale: 1 //缩放比例
        // });
        //旋转
        let mx = Cesium.Matrix3.fromRotationX(Cesium.Math.toRadians(params.rx));
        let my = Cesium.Matrix3.fromRotationY(Cesium.Math.toRadians(params.ry));
        let mz = Cesium.Matrix3.fromRotationZ(Cesium.Math.toRadians(params.rz));
        let rotationX = Cesium.Matrix4.fromRotationTranslation(mx);
        let rotationY = Cesium.Matrix4.fromRotationTranslation(my);
        let rotationZ = Cesium.Matrix4.fromRotationTranslation(mz);

        //-1.31972,0.69884  转为经纬度
        /* 
        将经度-1.31972和纬度0.69884从弧度转换为度数，可以得到：
        - 经度：-1.31972 × 180 / π ≈ -75.5245度
        - 纬度：0.69884 × 180 / π ≈ 39.9985度
        因此，这个点的地理坐标是西经75.5245度、北纬39.9985度。
         */
        //平移
        let position = Cesium.Cartesian3.fromDegrees(
            params.tx,
            params.ty,
            params.tz
        );
        position.x -=6378137;//减去赤道半径???待商榷
        let m_translation = Cesium.Transforms.eastNorthUpToFixedFrame(position);
        // let m_translation = Cesium.Matrix4.IDENTITY.clone();

        //旋转、平移矩阵相乘
        Cesium.Matrix4.multiply(m_translation, rotationX, m_translation);
        Cesium.Matrix4.multiply(m_translation, rotationY, m_translation);
        Cesium.Matrix4.multiply(m_translation, rotationZ, m_translation);
        //赋值给tileset
        console.log('原始tileset._root.transform');
        console.log(tileset._root.transform.toString());
        tileset._root.transform = m_translation;
        //缩放
        let scale = (params.scale || 1) * 1;
        tileset._root.customTransform = {
            matrix: {
                origin: tileset._root.transform.clone(),
                rotation: Cesium.Matrix4.IDENTITY,
                translation: Cesium.Matrix4.IDENTITY,
            },
        };
        let m_scale = Cesium.Matrix4.fromScale(
            new Cesium.Cartesian3(scale, scale, scale)
        );
        tileset._root.customTransform.matrix.scale = m_scale;
        tileset._root.customTransform.scale = scale;
        let m2 = new Cesium.Matrix4();
        // 原始*旋转
        Cesium.Matrix4.multiply(
            tileset._root.customTransform.matrix.origin,
            tileset._root.customTransform.matrix.rotation,
            m2
        );
        // 原始*旋转*缩放
        Cesium.Matrix4.multiply(
            m2,
            tileset._root.customTransform.matrix.scale,
            m2
        );
        // 原始*旋转*缩放*移动
        Cesium.Matrix4.multiply(
            m2,
            tileset._root.customTransform.matrix.translation,
            tileset._root.transform
        );
        console.log('处理后tileset._root.transform');
        console.log(tileset._root.transform.toString());
    }

    // 切片位置调参面板
    loadTileSetViewModel(tileset) {
        const { viewer } = this;
        const viewModel = {
            height: 0,
            latitude: 0,
            longitude: 0,
        };
        knockout.track(viewModel);

        const toolbar = document.getElementById('toolbar');
        knockout.applyBindings(viewModel, toolbar);

        knockout
            .getObservable(viewModel, 'latitude')
            .subscribe(function (latitudeChange) {
                const cartographic = Cesium.Cartographic.fromCartesian(
                    tileset.boundingSphere.center
                );
                const surface = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude,
                    cartographic.latitude,
                    0.0
                );
                const offset = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude + Number(viewModel.longitude),
                    cartographic.latitude + Number(latitudeChange), // 改变维度
                    Number(viewModel.height)
                );
                const translation = Cesium.Cartesian3.subtract(
                    offset,
                    surface,
                    new Cesium.Cartesian3()
                );
                tileset.modelMatrix =
                    Cesium.Matrix4.fromTranslation(translation);
            });
        knockout
            .getObservable(viewModel, 'longitude')
            .subscribe(function (longitudeChange) {
                const cartographic = Cesium.Cartographic.fromCartesian(
                    tileset.boundingSphere.center
                );
                const surface = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude,
                    cartographic.latitude,
                    0.0
                );
                const offset = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude + Number(longitudeChange), // 改变经度
                    cartographic.latitude + Number(viewModel.latitude),
                    Number(viewModel.height)
                );
                const translation = Cesium.Cartesian3.subtract(
                    offset,
                    surface,
                    new Cesium.Cartesian3()
                );
                tileset.modelMatrix =
                    Cesium.Matrix4.fromTranslation(translation);
            });

        knockout
            .getObservable(viewModel, 'height')
            .subscribe(function (height) {
                height = Number(height);
                if (isNaN(height) || !Cesium.defined(tileset)) {
                    return;
                }

                const cartographic = Cesium.Cartographic.fromCartesian(
                    tileset.boundingSphere.center
                );
                const surface = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude,
                    cartographic.latitude,
                    0.0
                );
                const offset = Cesium.Cartesian3.fromRadians(
                    cartographic.longitude + Number(viewModel.longitude),
                    cartographic.latitude + Number(viewModel.latitude),
                    height //改变了高度
                );
                const translation = Cesium.Cartesian3.subtract(
                    offset,
                    surface,
                    new Cesium.Cartesian3()
                );
                tileset.modelMatrix =
                    Cesium.Matrix4.fromTranslation(translation);
            });
    }

    async load3DTile() {
        const { viewer } = this;
        var tileset = await Cesium3DTileset.fromUrl(tileUrl, {});
        viewer.scene.primitives.add(tileset);
        viewer.zoomTo(tileset);
        return tileset;
    }
}

export default CesiumTool;
