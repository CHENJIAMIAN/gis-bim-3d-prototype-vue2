import {
  Viewer,
  BingMapsImageryProvider,
  createWorldTerrain,
  BingMapsStyle,
  HeadingPitchRoll,
  Cartesian3,
  Cesium3DTileset,
  knockout,
  Cartographic,
} from "cesium";
import * as Cesium from "cesium";

import CesiumNavigation from "cesium-navigation-es6";
import {
  TransformEditor,
  viewerMeasureMixin,
  Measure,
} from "./cesium-ion-plugins";
/*---------------------------------------------------------------------------------------*/
window.Cesium = Cesium;
/*---------------------------------------------------------------------------------------*/
const tileUrl =
  "http://localhost:3000/Instanced/InstancedGltfExternal/tileset.json";
// "http://localhost:3000/ionTileset/tileset.json";
const shenzhenCoord = [113.9470726, 22.5108667];
/*---------------------------------------------------------------------------------------*/
class Cesiumer {
  viewer: Viewer;

  /**
   *
   * @param options
   */
  constructor(options) {
    this.viewer = null;
    window.cesiumer = this;

    if (options.action === "alarm-manage-view") {
      this.createCesium(options.containerId);
      this.addMonitorPoint();
    } else if (options.action === "line-flow-view") {
      this.createCesium(options.containerId);
      this.loadLineFlow(); //管线潮流
    } else if (options.action === "main-view") {
      this.createCesium(options.containerId, {
        infoBox: true,
        homeButton: true,
        baseLayerPicker: true,
        fullscreenButton: true,
      });
      this.viewer.scene.primitives.add(Cesium.createOsmBuildings()); //OSM的全球粗模
      this.setHomeButtonCamera({
        destination: Cesium.Cartesian3.fromDegrees(
          113.93629759724732,
          22.49755606524342,
          1403.3702549681943
        ), // 设置高度为5000000米，可以根据需要调整
        orientation: {
          heading: Cesium.Math.toRadians(0),
          pitch: Cesium.Math.toRadians(-30),
          roll: Cesium.Math.toRadians(0),
        },
      });
      // this.createCityModelByGeojson();
      this.createMeasurePlugin(); //测量插件
    } else if (options.action === "map-config-view") {
      this.createCesium(options.containerId, {
        baseLayerPicker: true,
      });
    } else if (options.action === "model-manage-view") {
      this.createCesium(options.containerId);
      const { viewer } = this;
      this.loadGlbModel(113.94150864076296, 22.5154337740315, 0);
      // this.load3DTileset().then((tileset) => {
      //   // 楼变色/改3dtiles的颜色
      //   tileset.style = new Cesium.Cesium3DTileStyle({
      //     color: {
      //       conditions: [
      //         // ["${Height} >= 83", "color('purple', 0.5)"],
      //         // ["${Height} >= 1", "color('cyan')"],
      //         ["true", "color('#8caced')"],
      //       ],
      //     },
      //   });
      //   viewer.zoomTo(tileset);
      //   // 监听Tileset的可见性变化
      //   let flag = true;
      //   tileset.tileVisible.addEventListener((root) => {
      //     if (flag) {
      //       this.printAllPropertiesOfTileSet(tileset);
      //       flag = false;
      //     }
      //   });

      //   const center = tileset.boundingSphere.center;
      //   console.log("tileset center", center);
      //   // this.createTransformEditor(tileset);
      //   console.log("createTransformEditor后的modelMatrix:");
      //   console.log(tileset.modelMatrix.toString());
      // });
    } else {
      // this.createCesium(options.containerId);
    }
    const { viewer } = this;
    // viewer.extend(Cesium.viewerCesiumInspectorMixin); //地球调试插件
    // viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);//3DTilesI调试插件
  }

  destroy() {
    const { viewer } = this;
    viewer?.destroy();
  }

  createMeasurePlugin(options = {}) {
    const { viewer } = this;
    //挂载在viewer.measure

    options = Cesium.defaultValue(options, {});
    var scene = viewer.scene;
    var cesiumMeasureContainer = document.createElement("div");
    cesiumMeasureContainer.className = "cesium-viewer-measureContainer";
    viewer._toolbar.insertBefore(
      cesiumMeasureContainer,
      viewer._toolbar.firstChild
    );
    options = Cesium.clone(options);
    options.container = cesiumMeasureContainer;
    options.scene = scene;
    var measure = new Measure(options);

    var removeListener = scene.postUpdate.addEventListener(function () {
      var panelMaxHeight = viewer._container.clientHeight - 125;
      measure._dropdown.style.maxHeight = panelMaxHeight + "px";
    });

    viewer.destroy = Cesium.wrapFunction(viewer, viewer.destroy, function () {
      removeListener();
      measure.destroy();
    });
    measure.destroy = Cesium.wrapFunction(
      measure,
      measure.destroy,
      function () {
        cesiumMeasureContainer.remove();
      }
    );

    viewer.measure = measure;
  }

  async loadLineFlow() {
    const { viewer } = this;

    // Model positioning ===============================================
    const position = Cesium.Cartesian3.fromDegrees(
      shenzhenCoord[0],
      shenzhenCoord[1],
      -150
    );
    const hpr = new Cesium.HeadingPitchRoll(0, 0, 0);
    const fixedFrameTransform =
      Cesium.Transforms.localFrameToFixedFrameGenerator("north", "west");
    const url = "http://localhost:3000/ParcLeadMine.glb";
    // const url = "http://localhost:3000/Instanced/InstancedGltfExternal/box.glb";
    const textureUrl = Cesium.buildModuleUrl(
      "http://localhost:3000/cesium_stripes.png"
    );
    // Custom Shader Definitions ========================================
    const textureUniformShader = new Cesium.CustomShader({
      uniforms: {
        // 动画经过的时间（以秒为单位）
        u_time: {
          type: Cesium.UniformType.FLOAT,
          value: 0,
        },
        // 用户定义的纹理
        u_stripes: {
          type: Cesium.UniformType.SAMPLER_2D,
          value: new Cesium.TextureUniform({
            url: textureUrl,
          }),
        },
      },
      // 将纹理应用于模型，但随着时间的推移稍微移动纹理坐标，使其具有动画效果。
      fragmentShaderText: /* c */ `
    void fragmentMain(FragmentInput fsInput, inout czm_modelMaterial material)
    {
        vec2 texCoord = fsInput.attributes.texCoord_0 + 0.1 * vec2(0.0, u_time);
        material.diffuse = texture(u_stripes, texCoord).rgb;
    }
    `,
    });
    // Demos ==============================================================
    viewer.scene.primitives.removeAll();
    try {
      const model = viewer.scene.primitives.add(
        await Cesium.Model.fromGltfAsync({
          url: url,
          customShader: textureUniformShader,
          modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(
            position,
            hpr,
            Cesium.Ellipsoid.WGS84,
            fixedFrameTransform
          ),
        })
      );

      const removeListener = model.readyEvent.addEventListener(() => {
        viewer.camera.flyToBoundingSphere(model.boundingSphere, {
          duration: 0.5,
        });

        removeListener();
      });
    } catch (error) {
      console.log(`Error loading model: ${error}`);
    }
    // Event handlers =====================================================
    const startTime = performance.now();
    viewer.scene.postUpdate.addEventListener(function () {
      const elapsedTimeSeconds = (performance.now() - startTime) / 300;
      textureUniformShader.setUniform("u_time", elapsedTimeSeconds);
    });
  }

  flyToDegree3(degrees3 = [113.9049, 22.5149, 500.0]) {
    const { viewer } = this;
    viewer.camera.flyTo({
      destination: Cesium.Cartesian3.fromDegrees(...degrees3),
    });
  }

  convertCartesian3ToDegrees(cartesian3) {
    const cartographic = Cesium.Cartographic.fromCartesian(cartesian3);
    const longitude = Cesium.Math.toDegrees(cartographic.longitude);
    const latitude = Cesium.Math.toDegrees(cartographic.latitude);
    const height = cartographic.height;
    return [longitude, latitude, height];
  }
  convertCartesian2ToDegrees(cartesian2) {
    const cartographic = Cesium.Cartographic.fromCartesian(cartesian2);
    const longitude = Cesium.Math.toDegrees(cartographic.longitude);
    const latitude = Cesium.Math.toDegrees(cartographic.latitude);
    return [longitude, latitude];
  }

  createInfoBoxOfEntityOrModels(entityOrModel) {
    const { viewer } = this;
    // 创建 InfoBox
    var infoBox = new Cesium.InfoBox(viewer.container.id);
    infoBox.viewModel.showInfo = false;
    infoBox.viewModel.closeClicked.addEventListener(function () {
      infoBox.viewModel.showInfo = false;
    });

    viewer.destroy = Cesium.wrapFunction(viewer, viewer.destroy, function () {
      infoBox.destroy();
    });

    // 在点击实体时弹出 InfoBox
    viewer.screenSpaceEventHandler.setInputAction((movement) => {
      var pickedObject = viewer.scene.pick(movement.position);
      //
      if (
        !entityOrModel.includes(pickedObject.id) &&
        !entityOrModel.includes(pickedObject.primitive)
      )
        return;
      //
      if (
        Cesium.defined(pickedObject) &&
        pickedObject.id instanceof Cesium.Entity
      ) {
        var position = pickedObject.id.position.getValue(
          viewer.clock.currentTime
        );

        const [longitude, latitude, height] =
          this.convertCartesian3ToDegrees(position);

        var description = /* html */ `
            <h2>${pickedObject.id.name}</h2>
            <p>${[longitude, latitude, height]}</p>
            `;
        infoBox.viewModel.showInfo = true;
        infoBox.viewModel.description = description;
      } else if (
        Cesium.defined(pickedObject) &&
        pickedObject.primitive instanceof Cesium.Model
      ) {
        var currentPosition = Cesium.Matrix4.getTranslation(
          pickedObject.primitive.modelMatrix,
          new Cesium.Cartesian3()
        );
        var currentCartographic =
          Cesium.Cartographic.fromCartesian(currentPosition);
        var currentLongitude = Cesium.Math.toDegrees(
          currentCartographic.longitude
        );
        var currentLatitude = Cesium.Math.toDegrees(
          currentCartographic.latitude
        );
        var currentHeight = currentCartographic.height;

        var description = /* html */ `
        <h2>${pickedObject.primitive.type}</h2>
        <p>${pickedObject.primitive._resource._url}</p>
        <p>${[currentLongitude, currentLatitude, currentHeight]}</p>
        <!-- <p>巡检状态:${["已巡检"]}</p> -->
        `;
        infoBox.viewModel.showInfo = true;
        infoBox.viewModel.description = description;
      } else {
        infoBox.viewModel.showInfo = false;
      }
    }, Cesium.ScreenSpaceEventType.LEFT_CLICK);
  }

  addMonitorPoint() {
    const { viewer } = this;
    const pinBuilder = new Cesium.PinBuilder();

    const bluePin = viewer.entities.add({
      name: "Blank blue pin",
      position: Cesium.Cartesian3.fromDegrees(113.9470726, 22.5108667),
      billboard: {
        image: pinBuilder.fromColor(Cesium.Color.ROYALBLUE, 48).toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });

    const questionPin = viewer.entities.add({
      name: "Question mark",
      position: Cesium.Cartesian3.fromDegrees(113.94698529, 22.5120071),
      billboard: {
        image: pinBuilder
          .fromText("测点1", Cesium.Color.BLACK, 100)
          .toDataURL(),
        verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      },
    });

    const url = Cesium.buildModuleUrl("Assets/Textures/maki/grocery.png");
    const groceryPinPromise = Promise.resolve(
      pinBuilder.fromUrl(url, Cesium.Color.GREEN, 48)
    ).then(function (canvas) {
      return viewer.entities.add({
        name: "Grocery store",
        position: Cesium.Cartesian3.fromDegrees(113.94605217, 22.511786),
        billboard: {
          image: canvas.toDataURL(),
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        },
      });
    });

    //从 maki 图标集创建一个代表医院的红色图钉。
    const hospitalPinPromise = Promise.resolve(
      pinBuilder.fromMakiIconId("hospital", Cesium.Color.RED, 48)
    ).then(function (canvas) {
      return viewer.entities.add({
        name: "Hospital",
        position: Cesium.Cartesian3.fromDegrees(113.94698606, 22.5111275),
        billboard: {
          image: canvas.toDataURL(),
          verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
        },
      });
    });

    //由于一些引脚是异步创建的，因此在缩放之前等待它们全部加载/
    Promise.all([
      bluePin,
      questionPin,
      groceryPinPromise,
      hospitalPinPromise,
    ]).then(async (pins) => {
      this.createInfoBoxOfEntityOrModels([
        bluePin,
        questionPin,
        await groceryPinPromise,
        await hospitalPinPromise,
      ]);
      viewer.zoomTo(pins);
    });
  }

  async loadGlbModel(longitude, latitude, height) {
    const { viewer } = this;

    /*这种加载方式无法使用模型编辑器---------------------------------------------------------------------------------------*/
    // const woodTower = {
    //   name: "Wood Tower",
    //   height: 0.0,
    //   model: {
    //     uri: "http://localhost:3000/Wood_Tower.glb",
    //   },
    // };
    // const entity = (window.glbEntity = viewer.entities.add(woodTower));
    // entity.position = Cesium.Cartesian3.fromDegrees(
    //   longitude,
    //   latitude,
    //   height + entity.height
    // );
    /*---------------------------------------------------------------------------------------*/
    // 创建一个heading、pitch、roll坐标系
    const hpr = new Cesium.HeadingPitchRoll(0, 0, 0);
    // 生成一个从参考帧计算 4x4 变换矩阵的函数 转换原始点坐标 到 椭球体的固定参考系。
    const fixedFrameTransform =
      Cesium.Transforms.localFrameToFixedFrameGenerator("north", "west");
    try {
      // 异步加载模型文件，并添加至场景中
      const model = (window.model = viewer.scene.primitives.add(
        await Cesium.Model.fromGltfAsync({
          // 加载模型文件的url
          url: "http://localhost:3000/Wood_Tower.glb",
          // 指定模型文件的位置姿态
          modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(
            // @paramorigin — 局部参考系的中心点。
            Cesium.Cartesian3.fromDegrees(longitude, latitude, height),
            // @paramheadingPitchRoll — 模型的航向、俯仰和滚动。
            hpr,
            // @paramellipsoid — 其固定框架用于转换的椭圆体。
            Cesium.Ellipsoid.WGS84,
            // @paramfixedFrameTransform 4x4 变换 从参考系到提供的WGS84椭球体的固定参考系的矩阵
            fixedFrameTransform
          ),
        })
      ));
      this.createInfoBoxOfEntityOrModels([model]);

      const removeListener = model.readyEvent.addEventListener(() => {
        // this.createTransformEditor(model);
        viewer.camera.flyToBoundingSphere(model.boundingSphere, {
          duration: 0.5,
        });

        removeListener();
      });
    } catch (error) {
      console.log(`Error loading model: ${error}`);
    }
  }

  _savedCameraState: CameraState = {};
  storeCamera() {
    const { viewer } = this;
    // 获取当前摄像机状态
    var cameraPosition = viewer.camera.position.clone();
    var cameraDirection = viewer.camera.direction.clone();
    var cameraUp = viewer.camera.up.clone();

    // 保存状态
    this._savedCameraState = {
      position: cameraPosition.clone(),
      direction: cameraDirection.clone(),
      up: cameraUp.clone(),
    };
    console.log(
      "storeCamera",
      this._savedCameraState,
      JSON.stringify(this._savedCameraState)
    );
    return this._savedCameraState;
  }

  restoreCamera(savedCameraStateIn) {
    const { viewer, _savedCameraState } = this;
    const savedCameraState = savedCameraStateIn || _savedCameraState;
    // 恢复状态
    viewer.camera.setView({
      destination: savedCameraState.position,
      orientation: {
        direction: savedCameraState.direction,
        up: savedCameraState.up,
      },
    });
  }

  convertGeoJsonDataSourceToGeoJson(dataSource) {
    // 按id以高度分类
    const heightMapEntites = {};
    dataSource.entities.values.forEach((et) => {
      const { height } = et.properties.getValue(0);
      if (!heightMapEntites[height]) heightMapEntites[height] = [];
      heightMapEntites[height].push(et);
    });
    const featuresGeoJSON = [];
    for (let height in heightMapEntites) {
      const entities = heightMapEntites[height];

      var Feature = {
        type: "Feature",
        properties: { height: Number(height) },
        geometry: {
          type: "MultiPolygon",
          coordinates: [
            //建筑1的面
            //建筑2的面
          ],
        },
      };

      entities.forEach((entity) => {
        if (entity.polygon) {
          var positions = entity.polygon.hierarchy.getValue().positions;
          const ring1CoordinatesOfEntity = [];
          for (var i = 0; i < positions.length; i++) {
            var position = positions[i];

            const [longitude, latitude] =
              this.convertCartesian2ToDegrees(position);
            ring1CoordinatesOfEntity.push([longitude, latitude]);
          }
          Feature.geometry.coordinates.push([ring1CoordinatesOfEntity]);
        }
      });

      featuresGeoJSON.push(Feature);
    }

    const geoJSON = {
      type: "FeatureCollection",
      features: featuresGeoJSON,
    };
    console.log("TOFIX:输出的新geoJSON有错误（没有挖洞）", geoJSON);
    return geoJSON;
  }
  // 并根据给的property里带height的geojson文件,生成城市粗模
  createCityModelByGeojson() {
    const { viewer } = this;

    var dataSource = new Cesium.GeoJsonDataSource();
    const geojsonURL = "http://localhost:3000/从优锘爬的南山建筑_sub.geojson";
    var promise = dataSource.load(geojsonURL);
    promise.then(async (dataSource) => {
      viewer.dataSources.add(dataSource);
      window.dataSource = dataSource;
      var entities = dataSource.entities.values;
      /*---------------------------------------------------------------------------------------*/
      const response = await fetch(geojsonURL);
      const data = await response.json();
      // the content of the GeoJSON file is in the data variable
      console.log(data);
      this.convertGeoJsonDataSourceToGeoJson(dataSource);
      /*---------------------------------------------------------------------------------------*/
      // const colorHash = {};
      for (let i = 0; i < entities.length; i++) {
        //   //对于每个实体，根据状态名称创建随机颜色。
        //   //有些状态有多个实体，因此我们将颜色存储在哈希中，以便我们对整个状态使用相同的颜色。
        const entity = entities[i];
        //   const id = entity.id;
        //   let color = colorHash[id];
        //   if (!color) {
        //     color = Cesium.Color.fromRandom({
        //       alpha: 1.0
        //     });
        //     colorHash[id] = color;
        //   }

        //   //将多边形材质设置为我们的随机颜色。
        //   entity.polygon.material = color;
        //   //删除轮廓。
        entity.polygon.outline = false;

        // 根据height拉伸多边形
        entity.polygon.extrudedHeight = entity.properties.height;

        if (i === entities.length - 1) {
          // 相机看南山
          viewer.camera.flyTo({
            destination: Cesium.Cartesian3.fromDegrees(
              113.94698606,
              22.5111275,
              1000
            ),
          });
        }
      }
    });
  }

  private setTilesetModelMatrixData(tileset, modelMatrixData) {
    // var position = modelMatrixData.position;

    var center = Cesium.Cartesian3.fromDegrees(
      modelMatrixData.longitude,
      modelMatrixData.latitude,
      modelMatrixData.altitude
    );

    var headingPitchRoll = modelMatrixData.headingPitchRoll;

    var hpr = new Cesium.HeadingPitchRoll(
      headingPitchRoll.heading,
      headingPitchRoll.pitch,
      headingPitchRoll.roll
    );

    var scale = modelMatrixData.scale;

    var scaleCartesian3 = new Cesium.Cartesian3(scale.x, scale.y, scale.z);

    var modelMatrix = Cesium.Transforms.headingPitchRollToFixedFrame(
      center,
      hpr
    );

    tileset.modelMatrix = Cesium.Matrix4.setScale(
      modelMatrix,
      scaleCartesian3,
      new Cesium.Matrix4()
    );
  }

  createTransformEditor(tileset) {
    const { viewer } = this;

    const transformEditor = new TransformEditor({
      container: viewer.container,
      tileset: tileset,
      scene: viewer.scene,
      transform: tileset.modelMatrix,
      boundingSphere: tileset.boundingSphere,
    });
    this.transformEditor = transformEditor;
    transformEditor.viewModel.activate();

    return transformEditor;
  }

  async load3DTileset() {
    const { viewer } = this;
    const tileset = (window.tileset = new Cesium3DTileset({
      url: tileUrl,
    }));
    viewer.scene.primitives.add(tileset);

    return tileset.readyPromise;
  }
  // 打印所有属性
  printAllPropertiesOfTileSet(tileset) {
    const batchTable = tileset.root.content.batchTable;
    let i = 0;
    while (i < batchTable.featuresLength) {
      const fea = batchTable.getFeature(i);
      const propIds = fea.getPropertyIds();
      propIds.forEach((key) => {
        const value = fea.getProperty(key);
        console.log(key, value);
      });
      i++;
    }
  }

  cesiumNavigation;
  createNavigatorPlugin() {
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
      roll: Cesium.Math.toRadians(360),
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
    this.cesiumNavigation = new CesiumNavigation(viewer, options);
  }

  createCesium(containerId, viewerOptions = {}) {
    //viewer用于构建应用程序的基本小部件。它将所有标准Cesium小部件组合到一个可重用的程序包中
    const baseOptions = {
      infoBox: false, // 是否显示信息框
      homeButton: false, // 是否显示 Home 按钮
      // baseLayer: Cesium.ImageryLayer.fromProviderAsync(//离线时，CesiumJS 附带一组来自 Natural Earth II 的低分辨率图像，格式为Assets/Textures/NaturalEarthII.
      //   Cesium.TileMapServiceImageryProvider.fromUrl(
      //     Cesium.buildModuleUrl("Assets/Textures/NaturalEarthII")
      //   )
      // ),
      baseLayerPicker: false, // 是否显示图层选择器
      fullscreenButton: false, // 是否显示全屏按钮
      animation: false, // 是否显示动画小部件（左下角仪表盘）
      geocoder: false, // 是否显示 geocoder 小部件（右上角查询按钮）
      vrButton: false, // 是否显示 VR 按钮
      sceneModePicker: false, // 是否显示 3D/2D 选择器
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
      // terrainProvider: createWorldTerrain({
      //     requestWaterMask: true, // 动态水纹
      //     requestVertexNormals: true, // 光效
      // }),
    };
    const viewer =
      (this.viewer =
      window.viewer =
        new Viewer(containerId, Object.assign(baseOptions, viewerOptions)));

    viewer.cesiumWidget.creditContainer.style.display = "none"; //隐藏版权信息
    this.createNavigatorPlugin();
    this._customBaseLayerPicker(); //添加高德底图

    // viewer.baseLayerPicker 怎么默认为ProviderViewModel的name为"高德地图"的那一个
    {
      // 获取名为 "高德地图" 的 ProviderViewModel
      var gaodeProviderViewModel;
      viewer.baseLayerPicker.viewModel.imageryProviderViewModels.forEach(
        function (viewModel) {
          if (viewModel.name === "高德地图") {
            gaodeProviderViewModel = viewModel;
          }
        }
      );
      // 将名为 "高德地图" 的 ProviderViewModel 设置为默认图层
      viewer.baseLayerPicker.viewModel.selectedImagery = gaodeProviderViewModel;
    }
    
    this.setHomeButtonCamera({
      destination: Cesium.Cartesian3.fromDegrees(
        116.4074,
        39.9042,
        10000 * 1000
      ), // 设置高度为5000000米，可以根据需要调整
      orientation: {
        heading: Cesium.Math.toRadians(0),
        pitch: Cesium.Math.toRadians(-90),
        roll: Cesium.Math.toRadians(0),
      },
    });
    viewer.scene.screenSpaceCameraController.inertiaZoom = 0.9; //设置丝滑惯性缩放，默认0.8，越接近1惯性越大
    // viewer.extend(Cesium.viewerCesiumInspectorMixin);//使用Inspector面板
    // viewer.scene.debugShowFramesPerSecond = true; // 显示帧率
    // viewer.scene.globe.depthTestAgainstTerrain = true; // 控制视角不转到地下（确保在地形后面的物体被正确地遮挡，只有最前端的对象可见）
  }

  private _customBaseLayerPicker() {
    const { viewer } = this;
    if (!viewer.baseLayerPicker) return;

    // 获取默认的ImageryViewModel数组
    const defaultViewModels = Cesium.createDefaultImageryProviderViewModels();

    // 从数组中删除Bing Maps和OpenStreetMap图层
    defaultViewModels.splice(0, 2);

    // 获取ImageryViewModel数组
    const viewModelArray =
      viewer.baseLayerPicker.viewModel.imageryProviderViewModels;
    //imageryProviderViewModels中只保留第一个Bing的地图,其他全部去掉
    viewModelArray.splice(1, viewModelArray.length - 1);
    this._appendGaodeMap();
    this._appendGaodeMap({ ptype: "img" });
  }

  private _appendGaodeMap(optionsParam = {}) {
    const { viewer } = this;

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
      maximumLevel,
    });
    // 创建高德地图的ImageryViewModel对象
    const gaodeViewModel = new Cesium.ProviderViewModel({
      name: options.ptype === "img" ? "高德卫星" : "高德地图",
      iconUrl:
        options.ptype === "img"
          ? "data:image/png;base64,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"
          : "data:image/png;base64,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",
      tooltip: "高德地图",
      creationFunction: function () {
        return gaodeProvider;
      },
    });
    // 将高德地图的ImageryViewModel对象添加到imageryProviderViewModels数组中
    viewer.baseLayerPicker.viewModel.imageryProviderViewModels.push(
      gaodeViewModel
    );
    // const gaodeLayer =
    //   viewer.imageryLayers.addImageryProvider(gaodeProvider);
    return gaodeProvider;
  }

  //设置默认位置，重置HomeButton位置
  setHomeButtonCamera(view) {
    const { viewer } = this;
    if (!viewer.homeButton) return;

    viewer.scene.camera.setView(view); // 设置初始视野视角
    //重写 homeButton
    viewer.homeButton.viewModel.command.beforeExecute.addEventListener((e) => {
      e.cancel = true;
      viewer.camera.flyTo(view);
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
        - 经度：-1.31972 × 180 / π ≈ 113.5245度
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
      longitude: 0,
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
}

export default Cesiumer;
