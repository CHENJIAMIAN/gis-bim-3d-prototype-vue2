/* 
获取打印整个对象,不管它多大(解除循环引用限制)
```js
function stringifyWithoutCircularAndKeys(obj) {
  const cache = new Set();
  return JSON.stringify(obj, (key, value) => {
    if (typeof value === 'object' && value !== null) {
      if (cache.has(value)) {
        return; // remove circular reference
      }
      cache.add(value);
    }
    if (key === '_typedArray' || key === '_shaders' || key === "_vertexShaderSource" || key === "sources"
    || key === "keyword" || key==="_vertexShaderText"|| key==="_fragmentShaderText" || key==="_shadersByTexturesFlags" 
    || key==="vertices" || key==="_html" || key==="_owner"||key==="_us"||key==="primitive"||key==="primitives"
    ) {
      return; // remove unwanted keys
    }
    return value;
  });
}
stringifyWithoutCircularAndKeys(model.sceneGraph.components.scene.nodes)
```
*/
const data /* model.sceneGraph.components.scene.nodes精简而来 */ = [
  {
    name: "GroundVehicle",
    index: 0,
    children: [
      {
        name: "Wheels",
        index: 1,
        children: [],
        translation: {
          x: 0.06188185140490532,
          y: 0.5803464651107788,
          z: 2.4023993015289307,
        },
        rotation: {
          x: -0.19509030878543854,
          y: 0,
          z: 0,
          w: 0.9807853102684021,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
        morphWeights: [],
      },
      {
        name: "Wheels_mid",
        index: 2,
        children: [],
        translation: {
          x: 0.06188185140490532,
          y: 0.5803464651107788,
          z: -1.3548873662948608,
        },
        rotation: {
          x: -0.19509030878543854,
          y: 0,
          z: 0,
          w: 0.9807853102684021,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
        morphWeights: [],
      },
      {
        name: "Wheels_rear",
        index: 3,
        children: [],
        translation: {
          x: 0.06188185140490532,
          y: 0.5803464651107788,
          z: -2.660991668701172,
        },
        rotation: {
          x: -0.19509030878543854,
          y: 0,
          z: 0,
          w: 0.9807853102684021,
        },
        scale: {
          x: 1,
          y: 1,
          z: 1,
        },
        morphWeights: [],
      },
    ],
    matrix: {
      0: 1,
      1: 0,
      2: 0,
      3: 0,
      4: 0,
      5: 1,
      6: 0,
      7: 0,
      8: 0,
      9: 0,
      10: 1,
      11: 0,
      12: 0,
      13: 0,
      14: 0,
      15: 1,
    },
    morphWeights: [],
  },
];

function convertToTreeData(data) {
  const result = [];
  for (const item of data) {
    const node = {
      label: item.name,
      id: item.index,
      children: convertToTreeData(item.children),
    };
    if (node.children.length === 0) {
      delete node.children;
    }
    result.push(node);
  }
  return result;
}
const treeData = convertToTreeData(data); // 将数据转换成element-ui的tree组件的数据格式

// convertToTreeData(model.sceneGraph.components.scene.nodes);
// [
//   {
//       "label": "GroundVehicle",
//       "id": 0,
//       "children": [
//           {
//               "label": "Wheels",
//               "id": 1
//           },
//           {
//               "label": "Wheels_mid",
//               "id": 2
//           },
//           {
//               "label": "Wheels_rear",
//               "id": 3
//           }
//       ]
//   }
// ]

// 隐藏
// model.getNode('Wheels_mid').show=false
