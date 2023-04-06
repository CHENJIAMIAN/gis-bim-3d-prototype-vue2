import {
  Viewer,
  BingMapsImageryProvider,
  createWorldTerrain,
  BingMapsStyle,
  HeadingPitchRoll,
  Cartesian3,
  Cesium3DTileset,
  knockout,Cartographic
} from "cesium";
import * as Cesium from "cesium";
import CesiumNavigation from "cesium-navigation-es6";
window.Cesium = Cesium;

const tileUrl = "http://localhost:3000/Tilesets/Tileset/tileset.json";

class CesiumTool {
  constructor() {
    this.viewer = null;

    this.createCesium("cesiumContainer");
    this.loadNavigatorPlugin();
    this.customBaseLayerPicker();
    this.setCesiumCamera();
  }

  loadNavigatorPlugin() {
    const { viewer } = this;
    const options = {};
    // 用于在使用重置导航重置地图视图时设置默认视图控制。接受的值是Cesium.Cartographic 和 Cesium.Rectangle.
    // options.defaultResetView = Rectangle.fromDegrees(80, 22, 130, 50)
    options.defaultResetView = new Cartographic(
      Cesium.Math.toRadians(111.50623801848565),
      Cesium.Math.toRadians(2.8997206760441205),
      8213979.400955964
    );
    //相机方向
    options.orientation = {
      heading: Cesium.Math.toRadians(350.94452087411315),
      pitch: Cesium.Math.toRadians(-66.6402342251215),
      roll: Cesium.Math.toRadians(360)
    };
    //相机延时
    options.duration = 4; //默认为3s

    // 用于启用或禁用罗盘。true是启用罗盘，false是禁用罗盘。默认值为true。如果将选项设置为false，则罗盘将不会添加到地图中。
    options.enableCompass = true;
    // 用于启用或禁用缩放控件。true是启用，false是禁用。默认值为true。如果将选项设置为false，则缩放控件将不会添加到地图中。
    options.enableZoomControls = true;
    // 用于启用或禁用距离图例。true是启用，false是禁用。默认值为true。如果将选项设置为false，距离图例将不会添加到地图中。
    options.enableDistanceLegend = true;
    // 用于启用或禁用指南针外环。true是启用，false是禁用。默认值为true。如果将选项设置为false，则该环将可见但无效。
    options.enableCompassOuterRing = true;

    //修改重置视图的tooltip
    options.resetTooltip = "重置视图";
    //修改放大按钮的tooltip
    options.zoomInTooltip = "放大";
    //修改缩小按钮的tooltip
    options.zoomOutTooltip = "缩小";

    //如需自定义罗盘控件，请看下面的自定义罗盘控件
    new CesiumNavigation(viewer, options);
  }

  createCesium(containerId) {
    const viewer =
      (this.viewer =
      window.viewer =
        new Viewer(containerId, {
          //viewer用于构建应用程序的基本小部件。它将所有标准Cesium小部件组合到一个可重用的程序包中
          infoBox: true, // 是否显示信息框
          homeButton: true, // 是否显示 Home 按钮
          baseLayerPicker: true, // 是否显示图层选择器
          fullscreenButton: true, // 是否显示全屏按钮
          animation: false, // 是否显示动画小部件（左下角仪表盘）
          geocoder: false, // 是否显示 geocoder 小部件（右上角查询按钮）
          vrButton: false, // 是否显示 VR 按钮
          sceneModePicker: false, // 是否显示 3D/2D 选择器
          selectionIndicator: false, // 是否显示指示器组件
          timeline: false, // 是否显示时间轴
          navigationHelpButton: false, // 是否显示右上角的帮助按钮
          scene3DOnly: false, // 如果设置为 true，则所有几何图形以 3D 模式绘制以节约GPU资源
          shadows: false, // 是否显示阴影
          shouldAnimate: false // 是否显示动画
          // imageryProvider: new BingMapsImageryProvider({
          //     url: 'https://dev.virtualearth.net',
          //     key: 'YourBingMapKey',
          //     mapStyle: BingMapsStyle.AERIAL,
          // }),
          // 加载地形系统
          // terrainProvider: createWorldTerrain({
          //     requestWaterMask: true, // 动态水纹
          //     requestVertexNormals: true, // 光效
          // }),
        }));
    viewer.cesiumWidget.creditContainer.style.display = "none"; //隐藏版权信息
    // viewer.extend(Cesium.viewerCesiumInspectorMixin);//使用Inspector面板
    // viewer.scene.debugShowFramesPerSecond = true; // 显示帧率
    // viewer.scene.globe.depthTestAgainstTerrain = true; // 控制视角不转到地下（确保在地形后面的物体被正确地遮挡，只有最前端的对象可见）
  }

  private customBaseLayerPicker() {
    const { viewer } = this;

    // 获取默认的ImageryViewModel数组
    const defaultViewModels = Cesium.createDefaultImageryProviderViewModels();

    // 从数组中删除Bing Maps和OpenStreetMap图层
    defaultViewModels.splice(0, 2);

    // 获取ImageryViewModel数组
    const viewModelArray =
      viewer.baseLayerPicker.viewModel.imageryProviderViewModels;
    //imageryProviderViewModels中只保留第一个Bing的地图,其他全部去掉
    viewModelArray.splice(1, viewModelArray.length - 1);
    this.appendGaodeMap({});
  }

  appendGaodeMap(optionsParam) {
    const { viewer } = this;
    const baseLayerPicker = viewer.baseLayerPicker;

    const options = Cesium.defaultValue(optionsParam, {});
    const maximumLevel = Cesium.defaultValue(options.maximumLevel, 16);
    const baseUrl =
      "http://{s}.is.autonavi.com/appmaptile?&size=1&scale=1&x={x}&y={y}&z={z}";
    let url = baseUrl;
    switch (options.ptype) {
      case "img":
        url =
          "https://{s}.is.autonavi.com/appmaptile?style=6&x={x}&y={y}&z={z}";
        break;
      case "road":
        url += "&scl=2&style=8&ltype=11";
        break;
      default:
        url += "&style=7";
        break;
    }
    const gaodeProvider = new Cesium.UrlTemplateImageryProvider({
      url,
      credit: new Cesium.Credit("高德地图服务"),
      subdomains: ["webst01", "webst02", "webst03", "webst04"],
      tilingScheme: new Cesium.WebMercatorTilingScheme(),
      maximumLevel
    });
    // 创建高德地图的ImageryViewModel对象
    const gaodeViewModel = new Cesium.ProviderViewModel({
      name: "高德地图",
      iconUrl:
        "data:image/png;base64,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",
      tooltip: "高德地图",
      creationFunction: function () {
        return gaodeProvider;
      }
    });
    // 将高德地图的ImageryViewModel对象添加到imageryProviderViewModels数组中
    baseLayerPicker.viewModel.imageryProviderViewModels.push(gaodeViewModel);
    // const gaodeLayer =
    //   viewer.imageryLayers.addImageryProvider(gaodeProvider);
    return gaodeProvider;
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
        roll: initialOrientation.roll
      }
    };
    //HeadingPitchRange
    viewer.scene.camera.setView(homeCameraView); // 设置初始视野视角
    //也可以重写 homeButton
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener((e) => {
      e.cancel = true;
      viewer.camera.flyTo(homeCameraView);
    });
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
      scale: 1 //缩放比例
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
    position.x -= 6378137; //减去赤道半径???待商榷
    let m_translation = Cesium.Transforms.eastNorthUpToFixedFrame(position);
    // let m_translation = Cesium.Matrix4.IDENTITY.clone();

    //旋转、平移矩阵相乘
    Cesium.Matrix4.multiply(m_translation, rotationX, m_translation);
    Cesium.Matrix4.multiply(m_translation, rotationY, m_translation);
    Cesium.Matrix4.multiply(m_translation, rotationZ, m_translation);
    //赋值给tileset
    console.log("原始tileset._root.transform");
    console.log(tileset._root.transform.toString());
    tileset._root.transform = m_translation;
    //缩放
    let scale = (params.scale || 1) * 1;
    tileset._root.customTransform = {
      matrix: {
        origin: tileset._root.transform.clone(),
        rotation: Cesium.Matrix4.IDENTITY,
        translation: Cesium.Matrix4.IDENTITY
      }
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
    Cesium.Matrix4.multiply(m2, tileset._root.customTransform.matrix.scale, m2);
    // 原始*旋转*缩放*移动
    Cesium.Matrix4.multiply(
      m2,
      tileset._root.customTransform.matrix.translation,
      tileset._root.transform
    );
    console.log("处理后tileset._root.transform");
    console.log(tileset._root.transform.toString());
  }

  // 切片位置调参面板 //这样是不对的!!!
  loadTileSetViewModel(tileset) {
    const { viewer } = this;
    const viewModel = {
      height: 0,
      latitude: 0,
      longitude: 0
    };
    knockout.track(viewModel);

    const toolbar = document.getElementById("toolbar");
    knockout.applyBindings(viewModel, toolbar);

    knockout
      .getObservable(viewModel, "latitude")
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
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
      });
    knockout
      .getObservable(viewModel, "longitude")
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
        tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
      });

    knockout.getObservable(viewModel, "height").subscribe(function (height) {
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
      tileset.modelMatrix = Cesium.Matrix4.fromTranslation(translation);
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
