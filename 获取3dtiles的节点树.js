Cesium.Ion.defaultAccessToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiI1Yzg3ZDEzOS0zN2Q1LTQ2N2YtOWJhMy1mNWU4MWY5N2ExYzkiLCJpZCI6MjAxMzIsInNjb3BlcyI6WyJhc3IiLCJnYyJdLCJpYXQiOjE1NzY4MTIzNzR9.SfNeHedDyXWLIPiNbc4qSsHBACm7uvaqRsQprL2J4Cw";

const viewer = (window.viewer = new Cesium.Viewer("cesiumContainer", {
  terrain: Cesium.Terrain.fromWorldTerrain(),
}));

viewer.scene.globe.depthTestAgainstTerrain = true;

viewer.extend(Cesium.viewerCesium3DTilesInspectorMixin);
const inspectorViewModel = viewer.cesium3DTilesInspector.viewModel;

const position = Cesium.Cartesian3.fromDegrees(-123.0744619, 44.0503706, 200);
const hpr = new Cesium.HeadingPitchRoll(0, 0, 0);
const fixedFrameTransform = Cesium.Transforms.localFrameToFixedFrameGenerator(
  "north",
  "west"
);

const tileset = (window.tileset = await Cesium.Cesium3DTileset.fromUrl(
  "http://localhost:3001/tileset.json",
  {
    enableDebugWireframe: true,
    modelMatrix: Cesium.Transforms.headingPitchRollToFixedFrame(
      position,
      hpr,
      Cesium.Ellipsoid.WGS84,
      fixedFrameTransform
    ),
  }
));
viewer.scene.primitives.add(tileset);

viewer.zoomTo(
  tileset,
  new Cesium.HeadingPitchRange(0.0, -0.5, tileset.boundingSphere.radius / 4.0)
);
/*---------------------------------------------------------------------------------------*/
const processTileFeature = (content, callback) => {
  const innerContents = content.innerContents;
  if (innerContents !== undefined) {
    innerContents.forEach((item) => processTileFeature(item, callback));
  } else {
    // processContentFeature
    const length = content.featuresLength;
    for (let i = 0; i < length; i++) {
      const feature = content.getFeature(i);
      callback(feature);
    }
  }
};

// tileset.tileLoad.addEventListener((tile) => {
//   processTileFeature(tile.content, (feature) => {
//     feature
//       .getPropertyIds()
//       .forEach((id) => console.log(`${id}:${feature.getProperty(id)}\n`));
//   });
// });

/*---------------------------------------------------------------------------------------*/

// 定义一个节点类，用于表示要素节点
class ElementNode {
  constructor(label, children, feature, parentContentUrl) {
    this.label = label; // 节点名称
    this.children = children; // 子节点数组
    this.feature = feature; // 关联的要素对象
    this.parentContentUrl = parentContentUrl; // 关联的要素对象
  }
}

// 构建3D Tiles要素节点树
const buildElementTree = (tileset) => {
  const rootNode = new ElementNode("Root", [], null, ""); // 根节点
  const nodeMap = new Map(); // 节点映射，用于记录每个tile中的内容对应的节点
  // 将要素节点树转化为elementui的tree控件的数据格式
  const convertToElementUITreeData = (node) => {
    if (node.children.length === 0) {
      return {
        label: node.label,
        feature: node.feature,
      };
    } else {
      return {
        label: node.label,
        children: node.children.map((child) =>
          convertToElementUITreeData(child)
        ),
      };
    }
  };
  // 打印elementui的tree控件的数据
  const printElementUITreeData = (data) => {
    console.log(JSON.stringify(data, null, 2));
  };

  // 遍历tileset
  tileset.tileLoad.addEventListener((tile) => {
    console.log("tile", tile); //tile===tileset.root.children[0]

    const tileNode = new ElementNode(
      `Tile ${tile._contentResource.url}`,
      [],
      null,
      ""
    ); // tile节点
    rootNode.children.push(tileNode);

    //tilset -> tile -> Composite3DTileContent -> contents[Model3DTileContent1,Model3DTileContent2] ->  feature

    // 遍历tile的内容
    processTileFeature(tile.content, (feature) => {
      const featId = `id:${feature.getProperty(
        "id"
      )};name:${feature.getProperty("name")}`;
      const featureContentUrl = feature.content.url;

      const featureNode = new ElementNode(
        featId,
        [],
        featId,
        featureContentUrl
      ); // 要素节点

      const contentNode = new ElementNode(
        featureContentUrl,
        [],
        featureContentUrl,
        featureContentUrl
      );

      // 记录节点映射
      const key = `featurecontenturl:${featureContentUrl};featureId:${feature.featureId}`;
      nodeMap.set(key, featureNode);
      nodeMap.set(featureContentUrl, contentNode);
    });
    console.log("nodeMap", nodeMap);
    // 构建节点树
    nodeMap.forEach((node, key) => {
      const parentContentUrl =
        nodeMap.get(key) /* Cesium3DTileFeature */.parentContentUrl; // 查找父节点
      if (parentContentUrl) {
        const contentNode = nodeMap.get(parentContentUrl); // 查找父节点
        if (node.label !== contentNode.label) contentNode.children.push(node); // 添加到父节点的子节点数组中
        if (!tileNode.children.some((i) => i === contentNode))
          tileNode.children.push(contentNode);
      }
    });

    console.log("rootNode", rootNode);
    const elementUITreeData = convertToElementUITreeData(rootNode);
    printElementUITreeData(elementUITreeData);
  });
};

// 使用示例,在控制台打印出3dtiles节点树
buildElementTree(tileset);
