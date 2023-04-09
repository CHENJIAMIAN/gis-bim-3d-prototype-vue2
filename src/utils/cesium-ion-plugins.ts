import * as Cesium from "cesium";

function styleInject(css, ref) {
  if (ref === void 0) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === "undefined") {
    return;
  }

  var head = document.head || document.getElementsByTagName("head")[0];
  var style = document.createElement("style");
  style.type = "text/css";

  if (insertAt === "top") {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css =
  ".cesium-measure-toolbar {\n    width: 40px;\n    height: 32px;\n    overflow: hidden;\n    transition: width 0.8s;\n    white-space: nowrap;\n    background: #303336;\n    border: 1px solid #444;\n    color: #edffff;\n    stroke: #edffff;\n    stroke-width: 2;\n    fill: transparent;\n}\n.cesium-measure-toolbar.expanded {\n    width: 423px;\n}\n.cesium-measure-button {\n    vertical-align: top;\n    display: inline-block;\n    border-right: 1px solid #444;\n    cursor: pointer;\n    padding: 4px 8px;\n    height: 25px;\n    width: 25px;\n    margin-left: -4px /*removes space between buttons*/\n}\n.cesium-measure-button:first-child {\n    margin-left: 0;\n}\n.cesium-measure-button:hover {\n    background-color: #48b;\n}\n.cesium-measure-button:last-child {\n    border-right: none;\n}\n\n.cesium-measure-button.active {\n    background-color: #1a71cc;\n    cursor: default;\n}\n.cesium-measure-button-main {\n    stroke-width: 1.3;\n}\n.cesium-measure-help {\n    stroke-width: 0;\n    padding: 6px 8px;\n    fill: #edffff;\n}\n.cesium-measure-instructions {\n    position: absolute;\n    max-height: 500px;\n    width: 403px;\n    border: 1px solid #444;\n    overflow-y: auto;\n    border-radius: 0;\n    background-color: rgba(48,51,54,0.8);\n    color: #edffff;\n    padding: 10px;\n    stroke: #edffff;\n    stroke-width: 2;\n}\n.cesium-measure-icon {\n    margin-right: 10px;\n}\n.cesium-measure-instructions .bold {\n    margin-bottom: 3px;\n}\n.cesium-measure-instructions > ul {\n    padding-left: 20px;\n}\n";
styleInject(css);

var css$1 =
  ".transform-editor-menu {\n    position: absolute;\n    stroke: none;\n    fill: #edffff;\n}\n\n.transform-editor-button {\n    padding: 0;\n    width: 25px;\n    height: 25px;\n    border-radius: 13px;\n}\n\n.transform-editor-button > svg {\n    margin-top: 2px;\n    margin-left: 2px;\n}\n\n.transform-editor-options {\n    position: relative;\n    left: -16px;\n    background-color: #303336;\n    color: #edffff;\n}\n\n.transform-editor-button-row > div {\n    display: inline-block;\n    cursor: pointer;\n    padding-top: 4px;\n    padding-left: 4px;\n    width: 30px;\n    height: 30px;\n    border: 1px solid #444;\n}\n\n.transform-editor-button-row > div.selected {\n    background-color: #1E90FF;\n}\n\n.transform-editor-button-row > div:hover {\n    background-color: #48b;\n}\n";
styleInject(css$1);

var css$2 =
  ".cesium-viewer-measureContainer {\r\n    position: relative;\r\n    display: inline-block;\r\n    margin: 0 3px;\r\n    vertical-align: middle;\r\n}";
styleInject(css$2);

/**
 * 用于测量小部件的距离单位。
 *
 * @exports 距离单位
 * @ionsdk
 */
var DistanceUnits = {
  /**
   * @type {String}
   * @constant
   */
  METERS: "METERS",

  /**
   * @type {String}
   * @constant
   */
  CENTIMETERS: "CENTIMETERS",

  /**
   * @type {String}
   * @constant
   */
  KILOMETERS: "KILOMETERS",

  /**
   * @type {String}
   * @constant
   */
  FEET: "FEET",

  /**
   * @type {String}
   * @constant
   */
  US_SURVEY_FEET: "US_SURVEY_FEET",

  /**
   * @type {String}
   * @constant
   */
  INCHES: "INCHES",

  /**
   * @type {String}
   * @constant
   */
  YARDS: "YARDS",

  /**
   * @type {String}
   * @constant
   */
  MILES: "MILES"
};
var DistanceUnits$1 = Object.freeze(DistanceUnits);

/**
 * 用于度量小部件的面积单位。
 *
 * @exports 面积单位
 * @ionsdk
 */
var AreaUnits = {
  /**
   * @type {String}
   * @constant
   */
  SQUARE_METERS: "SQUARE_METERS",

  /**
   * @type {String}
   * @constant
   */
  SQUARE_CENTIMETERS: "SQUARE_CENTIMETERS",

  /**
   * @type {String}
   * @constant
   */
  SQUARE_KILOMETERS: "SQUARE_KILOMETERS",

  /**
   * @type {String}
   * @constant
   */
  SQUARE_FEET: "SQUARE_FEET",

  /**
   * @type {String}
   * @constant
   */
  SQUARE_INCHES: "SQUARE_INCHES",

  /**
   * @type {String}
   * @constant
   */
  SQUARE_YARDS: "SQUARE_YARDS",

  /**
   * @type {String}
   * @constant
   */
  SQUARE_MILES: "SQUARE_MILES",

  /**
   * @type {String}
   * @constant
   */
  ACRES: "ACRES",

  /**
   * @type {String}
   * @constant
   */
  HECTARES: "HECTARES"
};
var VolumeUnits = Object.freeze(AreaUnits);

/**
 * Volume units used for the measure widget.
 *
 * @exports VolumeUnits
 * @ionsdk
 */
var VolumeUnits$1 = {
  /**
   * @type {String}
   * @constant
   */
  CUBIC_METERS: "CUBIC_METERS",

  /**
   * @type {String}
   * @constant
   */
  CUBIC_CENTIMETERS: "CUBIC_CENTIMETERS",

  /**
   * @type {String}
   * @constant
   */
  CUBIC_KILOMETERS: "CUBIC_KILOMETERS",

  /**
   * @type {String}
   * @constant
   */
  CUBIC_FEET: "CUBIC_FEET",

  /**
   * @type {String}
   * @constant
   */
  CUBIC_INCHES: "CUBIC_INCHES",

  /**
   * @type {String}
   * @constant
   */
  CUBIC_YARDS: "CUBIC_YARDS",

  /**
   * @type {String}
   * @constant
   */
  CUBIC_MILES: "CUBIC_MILES"
};
var VolumeUnits$2 = Object.freeze(VolumeUnits$1);

/**
 * 用于测量小部件的角度单位。
 *
 * @exports 角度单位
 * @ionsdk
 */
var AngleUnits = {
  /**
   * @type {String}
   * @constant
   */
  DEGREES: "DEGREES",

  /**
   * @type {String}
   * @constant
   */
  RADIANS: "RADIANS",

  /**
   * @type {String}
   * @constant
   */
  DEGREES_MINUTES_SECONDS: "DEGREES_MINUTES_SECONDS",

  /**
   * @type {String}
   * @constant
   */
  GRADE: "GRADE",

  /**
   * @type {String}
   * @constant
   */
  RATIO: "RATIO"
};
var AngleUnits$1 = Object.freeze(AngleUnits);

/**
 * 用于度量小部件的度量单位。
 *
 * @param {Object} options 具有以下属性的对象：
 * @param {DistanceUnits} [options.distanceUnits=] 距离单位。
 * @param {AreaUnits} [options.areaUnits=] 面积的基本单位。
 * @param {VolumeUnits} [options.volumeUnits=] 体积的基本单位。
 * @param {AngleUnits} [options.angleUnits=] 角度单位。
 * @param {AngleUnits} [options.slopeUnits=] 坡度单位。
 *
 * @alias MeasureUnits
 * @constructor
 * @ionsdk
 */
function MeasureUnits(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  this.distanceUnits = Cesium.defaultValue(
    options.distanceUnits,
    DistanceUnits$1.METERS
  );
  this.areaUnits = Cesium.defaultValue(
    options.areaUnits,
    VolumeUnits.SQUARE_METERS
  );
  this.volumeUnits = Cesium.defaultValue(
    options.volumeUnits,
    VolumeUnits$2.CUBIC_METERS
  );
  this.angleUnits = Cesium.defaultValue(
    options.angleUnits,
    AngleUnits$1.DEGREES
  );
  this.slopeUnits = Cesium.defaultValue(
    options.slopeUnits,
    AngleUnits$1.DEGREES
  );
}

/**
 * @private
 */
MeasureUnits.convertDistance = function (distance, from, to) {
  if (from === to) {
    return distance;
  }
  var toMeters = getDistanceUnitConversion(from);
  var fromMeters = 1.0 / getDistanceUnitConversion(to);
  return distance * toMeters * fromMeters;
};

/**
 * @private
 */
MeasureUnits.convertArea = function (area, from, to) {
  if (from === to) {
    return area;
  }
  var toMeters = getAreaUnitConversion(from);
  var fromMeters = 1.0 / getAreaUnitConversion(to);
  return area * toMeters * fromMeters;
};

/**
 * @private
 */
MeasureUnits.convertVolume = function (volume, from, to) {
  if (from === to) {
    return volume;
  }
  var toMeters = getVolumeUnitConversion(from);
  var fromMeters = 1.0 / getVolumeUnitConversion(to);
  return volume * toMeters * fromMeters;
};

/**
 * @private
 */
MeasureUnits.convertAngle = function (angle, from, to) {
  if (from === to) {
    return angle;
  }
  var radians = convertAngleToRadians(angle, from);
  return convertAngleFromRadians(radians, to);
};

/**
 * @private
 */
MeasureUnits.numberToString = function (
  number,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  return numberToFormattedString(
    number,
    selectedLocale,
    maximumFractionDigits,
    minimumFractionDigits
  );
};

/**
 * @private
 */
MeasureUnits.distanceToString = function (
  meters,
  distanceUnits,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  var distance = MeasureUnits.convertDistance(
    meters,
    DistanceUnits$1.METERS,
    distanceUnits
  );
  return (
    numberToFormattedString(
      distance,
      selectedLocale,
      maximumFractionDigits,
      minimumFractionDigits
    ) +
    MeasureUnits.getDistanceUnitSpacing(distanceUnits) +
    MeasureUnits.getDistanceUnitSymbol(distanceUnits)
  );
};

/**
 * @private
 */
MeasureUnits.areaToString = function (
  metersSquared,
  areaUnits,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  var area = MeasureUnits.convertArea(
    metersSquared,
    VolumeUnits.SQUARE_METERS,
    areaUnits
  );
  return (
    numberToFormattedString(
      area,
      selectedLocale,
      maximumFractionDigits,
      minimumFractionDigits
    ) +
    MeasureUnits.getAreaUnitSpacing(areaUnits) +
    MeasureUnits.getAreaUnitSymbol(areaUnits)
  );
};

/**
 * @private
 */
MeasureUnits.volumeToString = function (
  metersCubed,
  volumeUnits,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  var volume = MeasureUnits.convertVolume(
    metersCubed,
    VolumeUnits$2.CUBIC_METERS,
    volumeUnits
  );
  return (
    numberToFormattedString(
      volume,
      selectedLocale,
      maximumFractionDigits,
      minimumFractionDigits
    ) +
    MeasureUnits.getVolumeUnitSpacing(volumeUnits) +
    MeasureUnits.getVolumeUnitSymbol(volumeUnits)
  );
};

/**
 * @private
 */
MeasureUnits.angleToString = function (
  angleRadians,
  angleUnits,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  if (
    angleUnits === AngleUnits$1.DEGREES ||
    angleUnits === AngleUnits$1.RADIANS ||
    angleUnits === AngleUnits$1.GRADE
  ) {
    var angle = convertAngleFromRadians(angleRadians, angleUnits);
    return (
      numberToFormattedString(
        angle,
        selectedLocale,
        maximumFractionDigits,
        minimumFractionDigits
      ) +
      MeasureUnits.getAngleUnitSpacing(angleUnits) +
      MeasureUnits.getAngleUnitSymbol(angleUnits)
    );
  } else if (angleUnits === AngleUnits$1.DEGREES_MINUTES_SECONDS) {
    var deg = Cesium.Math.toDegrees(angleRadians);
    var sign = deg < 0 ? "-" : "";
    deg = Math.abs(deg);
    var d = Math.floor(deg);
    var minfloat = (deg - d) * 60;
    var m = Math.floor(minfloat);
    var s = (minfloat - m) * 60;
    s = numberToFormattedString(
      s,
      undefined,
      maximumFractionDigits,
      minimumFractionDigits
    ); // The locale is undefined so that a period is used instead of a comma for the decimal
    return sign + d + "° " + m + "' " + s + '"';
  } else if (angleUnits === AngleUnits$1.RATIO) {
    var riseOverRun = convertAngleFromRadians(angleRadians, angleUnits);
    var run = 1.0 / riseOverRun;
    return (
      "1:" +
      numberToFormattedString(run, selectedLocale, maximumFractionDigits, 0)
    );
  }
};

/**
 * @private
 */
MeasureUnits.longitudeToString = function (
  longitude,
  angleUnits,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  return (
    MeasureUnits.angleToString(
      Math.abs(longitude),
      angleUnits,
      selectedLocale,
      maximumFractionDigits,
      minimumFractionDigits
    ) +
    " " +
    (longitude < 0.0 ? "W" : "E")
  );
};

/**
 * @private
 */
MeasureUnits.latitudeToString = function (
  latitude,
  angleUnits,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  return (
    MeasureUnits.angleToString(
      Math.abs(latitude),
      angleUnits,
      selectedLocale,
      maximumFractionDigits,
      minimumFractionDigits
    ) +
    " " +
    (latitude < 0.0 ? "S" : "N")
  );
};

/**
 * @private
 */
MeasureUnits.getDistanceUnitSymbol = function (distanceUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("distanceUnits", distanceUnits);
  //>>includeEnd('debug');

  if (distanceUnits === DistanceUnits$1.METERS) {
    return "m";
  } else if (distanceUnits === DistanceUnits$1.CENTIMETERS) {
    return "cm";
  } else if (distanceUnits === DistanceUnits$1.KILOMETERS) {
    return "km";
  } else if (
    distanceUnits === DistanceUnits$1.FEET ||
    distanceUnits === DistanceUnits$1.US_SURVEY_FEET
  ) {
    return "ft";
  } else if (distanceUnits === DistanceUnits$1.INCHES) {
    return "in";
  } else if (distanceUnits === DistanceUnits$1.YARDS) {
    return "yd";
  } else if (distanceUnits === DistanceUnits$1.MILES) {
    return "mi";
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid distance units: " + distanceUnits);
  //>>includeEnd('debug');
};

MeasureUnits.getDistanceUnitSpacing = function (distanceUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("distanceUnits", distanceUnits);
  //>>includeEnd('debug');

  return " ";
};

/**
 * @private
 */
MeasureUnits.getAreaUnitSymbol = function (areaUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("areaUnits", areaUnits);
  //>>includeEnd('debug');

  if (areaUnits === VolumeUnits.SQUARE_METERS) {
    return "m²";
  } else if (areaUnits === VolumeUnits.SQUARE_CENTIMETERS) {
    return "cm²";
  } else if (areaUnits === VolumeUnits.SQUARE_KILOMETERS) {
    return "km²";
  } else if (areaUnits === VolumeUnits.SQUARE_FEET) {
    return "sq ft";
  } else if (areaUnits === VolumeUnits.SQUARE_INCHES) {
    return "sq in";
  } else if (areaUnits === VolumeUnits.SQUARE_YARDS) {
    return "sq yd";
  } else if (areaUnits === VolumeUnits.SQUARE_MILES) {
    return "sq mi";
  } else if (areaUnits === VolumeUnits.ACRES) {
    return "ac";
  } else if (areaUnits === VolumeUnits.HECTARES) {
    return "ha";
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid area units: " + areaUnits);
  //>>includeEnd('debug');
};

/**
 * @private
 */
MeasureUnits.getAreaUnitSpacing = function (areaUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("areaUnits", areaUnits);
  //>>includeEnd('debug');

  return " ";
};

/**
 * @private
 */
MeasureUnits.getVolumeUnitSymbol = function (volumeUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("volumeUnits", volumeUnits);
  //>>includeEnd('debug');

  if (volumeUnits === VolumeUnits$2.CUBIC_METERS) {
    return "m³";
  } else if (volumeUnits === VolumeUnits$2.CUBIC_CENTIMETERS) {
    return "cm³";
  } else if (volumeUnits === VolumeUnits$2.CUBIC_KILOMETERS) {
    return "km³";
  } else if (volumeUnits === VolumeUnits$2.CUBIC_FEET) {
    return "cu ft";
  } else if (volumeUnits === VolumeUnits$2.CUBIC_INCHES) {
    return "cu in";
  } else if (volumeUnits === VolumeUnits$2.CUBIC_YARDS) {
    return "cu yd";
  } else if (volumeUnits === VolumeUnits$2.CUBIC_MILES) {
    return "cu mi";
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid volume units: " + volumeUnits);
  //>>includeEnd('debug');
};

/**
 * @private
 */
MeasureUnits.getVolumeUnitSpacing = function (volumeUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("volumeUnits", volumeUnits);
  //>>includeEnd('debug');

  return " ";
};

/**
 * @private
 */
MeasureUnits.getAngleUnitSymbol = function (angleUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("angleUnits", angleUnits);
  //>>includeEnd('debug');

  if (angleUnits === AngleUnits$1.DEGREES) {
    return "°";
  } else if (angleUnits === AngleUnits$1.RADIANS) {
    return "rad";
  } else if (angleUnits === AngleUnits$1.GRADE) {
    return "%";
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid angle units: " + angleUnits);
  //>>includeEnd('debug');
};

/**
 * @private
 */
MeasureUnits.getAngleUnitSpacing = function (angleUnits) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("angleUnits", angleUnits);
  //>>includeEnd('debug');

  if (angleUnits === AngleUnits$1.RADIANS) {
    return " ";
  }
  return "";
};

var negativeZero = -0.0;
var positiveZero = 0.0;
function numberToFormattedString(
  number,
  selectedLocale,
  maximumFractionDigits,
  minimumFractionDigits
) {
  maximumFractionDigits = Cesium.defaultValue(maximumFractionDigits, 2);
  minimumFractionDigits = Cesium.defaultValue(
    minimumFractionDigits,
    maximumFractionDigits
  );
  var localeStringOptions = {
    minimumFractionDigits: minimumFractionDigits,
    maximumFractionDigits: maximumFractionDigits
  };
  // If locale is undefined, the runtime's default locale is used.
  var numberString = number.toLocaleString(selectedLocale, localeStringOptions);
  var negativeZeroString = negativeZero.toLocaleString(
    selectedLocale,
    localeStringOptions
  );
  if (numberString === negativeZeroString) {
    return positiveZero.toLocaleString(selectedLocale, localeStringOptions);
  }
  return numberString;
}

function getDistanceUnitConversion(distanceUnits) {
  if (distanceUnits === DistanceUnits$1.METERS) {
    return 1.0;
  } else if (distanceUnits === DistanceUnits$1.CENTIMETERS) {
    return 0.01;
  } else if (distanceUnits === DistanceUnits$1.KILOMETERS) {
    return 1000.0;
  } else if (distanceUnits === DistanceUnits$1.FEET) {
    return 0.3048;
  } else if (distanceUnits === DistanceUnits$1.US_SURVEY_FEET) {
    return 1200.0 / 3937.0;
  } else if (distanceUnits === DistanceUnits$1.INCHES) {
    return 0.0254;
  } else if (distanceUnits === DistanceUnits$1.YARDS) {
    return 0.9144;
  } else if (distanceUnits === DistanceUnits$1.MILES) {
    return 1609.344;
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid distance units:" + distanceUnits);
  //>>includeEnd('debug');
}

function getAreaUnitConversion(areaUnits) {
  if (areaUnits === VolumeUnits.SQUARE_METERS) {
    return 1.0;
  } else if (areaUnits === VolumeUnits.SQUARE_CENTIMETERS) {
    return 0.0001;
  } else if (areaUnits === VolumeUnits.SQUARE_KILOMETERS) {
    return 1000000.0;
  } else if (areaUnits === VolumeUnits.SQUARE_FEET) {
    return 0.3048 * 0.3048;
  } else if (areaUnits === VolumeUnits.SQUARE_INCHES) {
    return 0.0254 * 0.0254;
  } else if (areaUnits === VolumeUnits.SQUARE_YARDS) {
    return 0.9144 * 0.9144;
  } else if (areaUnits === VolumeUnits.SQUARE_MILES) {
    return 1609.344 * 1609.344;
  } else if (areaUnits === VolumeUnits.ACRES) {
    return 4046.85642232;
  } else if (areaUnits === VolumeUnits.HECTARES) {
    return 10000.0;
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid area units:" + areaUnits);
  //>>includeEnd('debug');
}

function getVolumeUnitConversion(volumeUnits) {
  if (volumeUnits === VolumeUnits$2.CUBIC_METERS) {
    return 1.0;
  } else if (volumeUnits === VolumeUnits$2.CUBIC_CENTIMETERS) {
    return 0.000001;
  } else if (volumeUnits === VolumeUnits$2.CUBIC_KILOMETERS) {
    return 1000000000.0;
  } else if (volumeUnits === VolumeUnits$2.CUBIC_FEET) {
    return 0.3048 * 0.3048 * 0.3048;
  } else if (volumeUnits === VolumeUnits$2.CUBIC_INCHES) {
    return 0.0254 * 0.0254 * 0.0254;
  } else if (volumeUnits === VolumeUnits$2.CUBIC_YARDS) {
    return 0.9144 * 0.9144 * 0.9144;
  } else if (volumeUnits === VolumeUnits$2.CUBIC_MILES) {
    return 1609.344 * 1609.344 * 1609.344;
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid volume units:" + volumeUnits);
  //>>includeEnd('debug');
}

var degreesMinutesSecondsRegex =
  /(-?)(\d+)\s*°\s*(\d+)\s*'\s*([\d.,]+)"\s*([WENS]?)/i;

function convertAngleToRadians(value, angleUnits) {
  if (angleUnits === AngleUnits$1.RADIANS) {
    return value;
  } else if (angleUnits === AngleUnits$1.DEGREES) {
    return Cesium.Math.toRadians(value);
  } else if (angleUnits === AngleUnits$1.GRADE) {
    if (value === Number.POSITIVE_INFINITY) {
      return Cesium.Math.PI_OVER_TWO;
    }
    return Math.atan(value / 100.0);
  } else if (angleUnits === AngleUnits$1.RATIO) {
    // Converts to radians where value is rise/run
    return Math.atan(value);
  } else if (angleUnits === AngleUnits$1.DEGREES_MINUTES_SECONDS) {
    var matches = degreesMinutesSecondsRegex.exec(value);
    if (!Cesium.defined(matches)) {
      throw new Cesium.RuntimeError(
        "Could not convert angle to radians: " + value
      );
    }
    var sign = matches[1].length > 0 ? -1.0 : 1.0;
    var degrees = parseInt(matches[2]);
    var minutes = parseInt(matches[3]);
    var seconds = parseFloat(matches[4]);
    var cardinal = matches[5];

    if (cardinal.length === 1) {
      cardinal = cardinal.toUpperCase();
      if (cardinal === "W" || cardinal === "S") {
        sign *= -1.0;
      }
    }

    var degreesDecimal = sign * (degrees + minutes / 60.0 + seconds / 3600.0);
    return Cesium.Math.toRadians(degreesDecimal);
  }

  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid angle units: " + angleUnits);
  //>>includeEnd('debug');
}

function convertAngleFromRadians(value, angleUnits) {
  if (angleUnits === AngleUnits$1.RADIANS) {
    return value;
  } else if (angleUnits === AngleUnits$1.DEGREES) {
    return Cesium.Math.toDegrees(value);
  } else if (angleUnits === AngleUnits$1.GRADE) {
    value = Cesium.Math.clamp(value, 0.0, Cesium.Math.PI_OVER_TWO);
    if (value === Cesium.Math.PI_OVER_TWO) {
      return Number.POSITIVE_INFINITY;
    }
    return 100.0 * Math.tan(value);
  } else if (angleUnits === AngleUnits$1.RATIO) {
    var rise = Math.sin(value);
    var run = Math.cos(value);
    return rise / run;
  }
  //>>includeStart('debug', pragmas.debug);
  throw new Cesium.DeveloperError("Invalid angle units: " + angleUnits);
  //>>includeEnd('debug');
}

var noScale = new Cesium.Cartesian3(1.0, 1.0, 1.0);
var matrixScratch = new Cesium.Matrix4();
var scaleScratch = new Cesium.Cartesian3();

/**
 * 从变换和原点偏移计算变换编辑器小部件原点
 * @param {Matrix4} transform 变换
 * @ionsdk
 * @param {Cartesian3} originOffset 距变换原点的偏移量
 * @param {Cartesian3} 结果
 * @return {Cartesian3}
 *
 * @private
 */
function getWidgetOrigin(transform, originOffset, result) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("transform", transform);
  Cesium.Check.defined("originOffset", originOffset);
  Cesium.Check.defined("result", result);
  //>>includeEnd('debug');

  var startScale = Cesium.Matrix4.getScale(transform, scaleScratch);
  var modelMatrix = Cesium.Matrix4.setScale(transform, noScale, matrixScratch);

  return Cesium.Matrix4.multiplyByPoint(
    modelMatrix,
    Cesium.Cartesian3.multiplyComponents(originOffset, startScale, result),
    result
  );
}

/**
 * @private
 * @ionsdk
 *
 * @param {Cartesian3[]} options.positions The positions of the polyline
 * @param {Color} options.color The color of the line
 * @param {Boolean} [options.show=true] Whether the primitive is visible
 * @param {Object} [options.id] An id for the primitive
 * @param {Boolean} [options.loop=false] True if the polyline should loop
 * @param {Boolean} [options.arrow=false] True if the arrow material should be used
 * @param {Boolean} [options.width] The width of the polyline
 * @param {Boolean} [options.depthFail=true] True if a depthfail material should be used
 */
function AxisLinePrimitive(options) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options", options);
  Cesium.Check.defined("options.positions", options.positions);
  Cesium.Check.defined("options.color", options.color);
  //>>includeEnd('debug');

  this.show = Cesium.defaultValue(options.show, true);
  this.id = options.id;

  var positions = options.positions;
  if (options.loop) {
    positions = positions.slice();
    positions.push(positions[0]);
  }
  var isArrow = Cesium.defaultValue(options.arrow, false);
  this._width = Cesium.defined(options.width)
    ? options.width
    : isArrow
    ? 25
    : 8;
  this._color = options.color;
  this._depthFailColor = options.color.withAlpha(0.3);
  this._positions = positions;
  this._arrow = isArrow;
  this._depthFail = Cesium.defaultValue(options.depthFail, true);

  this._primitive = undefined;
  this._boundingSphere = Cesium.BoundingSphere.fromPoints(positions);
  this._transformedBoundingSphere = Cesium.BoundingSphere.clone(
    this._boundingSphere
  );
  this._modelMatrix = Cesium.Matrix4.clone(Cesium.Matrix4.IDENTITY);

  this._update = true;
}

Object.defineProperties(AxisLinePrimitive.prototype, {
  modelMatrix: {
    get: function get() {
      return this._modelMatrix;
    },
    set: function set(value) {
      if (
        Cesium.Matrix4.equalsEpsilon(
          value,
          this._modelMatrix,
          Cesium.Math.EPSILON10
        )
      ) {
        return;
      }
      this._modelMatrix = Cesium.Matrix4.clone(value, this._modelMatrix);
      this._update = true;
    }
  },
  positions: {
    get: function get() {
      return this._positions;
    },
    set: function set(positions) {
      this._positions = positions;
      this._update = true;
    }
  },
  color: {
    get: function get() {
      return this._color;
    }
  },
  width: {
    get: function get() {
      return this._width;
    }
  },
  boundingVolume: {
    get: function get() {
      return this._transformedBoundingSphere;
    }
  }
});

AxisLinePrimitive.prototype.update = function (frameState) {
  if (!this.show) {
    return;
  }

  if (this._update) {
    this._update = false;
    this._primitive = this._primitive && this._primitive.destroy();

    var geometry = new Cesium.PolylineGeometry({
      positions: this._positions,
      width: this._width,
      vertexFormat: Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,
      arcType: Cesium.ArcType.NONE
    });

    var appearance1;
    var appearance2;
    if (this._arrow) {
      appearance1 = new Cesium.PolylineMaterialAppearance({
        material: Cesium.Material.fromType(Cesium.Material.PolylineArrowType, {
          color: this._color
        })
      });
      if (this._depthFail) {
        appearance2 = new Cesium.PolylineMaterialAppearance({
          material: Cesium.Material.fromType(
            Cesium.Material.PolylineArrowType,
            {
              color: this._depthFailColor
            }
          )
        });
      }
    } else {
      appearance1 = new Cesium.PolylineColorAppearance({
        translucent: this._color.alpha !== 1.0
      });
      if (this._depthFail) {
        appearance2 = new Cesium.PolylineColorAppearance({
          translucent: this._depthFailColor.alpha !== 1.0
        });
      }
    }

    var modelMatrix = this._modelMatrix;
    this._primitive = new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: geometry,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(this._color),
          depthFailColor: Cesium.ColorGeometryInstanceAttribute.fromColor(
            this._depthFailColor
          )
        },
        id: this.id,
        modelMatrix: modelMatrix
      }),
      appearance: appearance1,
      depthFailAppearance: appearance2,
      asynchronous: false
    });
    this._transformedBoundingSphere = Cesium.BoundingSphere.transform(
      this._boundingSphere,
      modelMatrix,
      this._transformedBoundingSphere
    );
  }

  this._primitive.update(frameState);
};

AxisLinePrimitive.prototype.isDestroyed = function () {
  return false;
};

AxisLinePrimitive.prototype.destroy = function () {
  this._primitive = this._primitive && this._primitive.destroy();
  return Cesium.destroyObject(this);
};

/**
 * @private
 * @ionsdk
 */
var TransformAxis = {
  X: "X",
  Y: "Y",
  Z: "Z"
};

TransformAxis.getValue = function (axis) {
  if (axis === TransformAxis.X) {
    return Cesium.Cartesian3.UNIT_X;
  } else if (axis === TransformAxis.Y) {
    return Cesium.Cartesian3.UNIT_Y;
  }
  return Cesium.Cartesian3.UNIT_Z;
};

TransformAxis.getColor = function (axis) {
  if (axis === TransformAxis.X) {
    return Cesium.Color.RED;
  } else if (axis === TransformAxis.Y) {
    return Cesium.Color.GREEN;
  }
  return Cesium.Color.BLUE;
};
var TransformAxis$1 = Object.freeze(TransformAxis);

var noScale$1 = new Cesium.Cartesian3(1.0, 1.0, 1.0);
var offsetScratch = new Cesium.Cartesian3();
var widgetOriginScratch = new Cesium.Cartesian3();
var rotationWorldScratch = new Cesium.Cartesian3();
var rotatedTransformScratch = new Cesium.Matrix4();
var inverseTransformScratch = new Cesium.Matrix4();
var localStartScratch = new Cesium.Cartesian3();
var localEndScratch = new Cesium.Cartesian3();
var vector1Scratch = new Cesium.Cartesian2();
var vector2Scratch = new Cesium.Cartesian2();
var hprScratch = new Cesium.HeadingPitchRoll();
var rayScratch = new Cesium.Ray();
var intersectionScratch = new Cesium.Cartesian3();
var quaternionScratch = new Cesium.Quaternion();
var matrix3Scratch = new Cesium.Matrix3();

function getUnitCirclePositions() {
  var xAxis = [];
  var yAxis = [];
  var zAxis = [];

  for (var i = 0; i < 360; i++) {
    var rad = Cesium.Math.toRadians(i);
    var x = Math.cos(rad);
    var y = Math.sin(rad);

    xAxis.push(new Cesium.Cartesian3(0.0, x, y));
    yAxis.push(new Cesium.Cartesian3(y, 0.0, x));
    zAxis.push(new Cesium.Cartesian3(x, y, 0.0));
  }
  return {
    x: xAxis,
    y: yAxis,
    z: zAxis
  };
}

function getRotationAngle(transform, originOffset, axis, start, end) {
  var inverseTransform = Cesium.Matrix4.inverse(
    transform,
    inverseTransformScratch
  );
  var localStart = Cesium.Matrix4.multiplyByPoint(
    inverseTransform,
    start,
    localStartScratch
  ); //project points to local coordinates so we can project to 2D
  var localEnd = Cesium.Matrix4.multiplyByPoint(
    inverseTransform,
    end,
    localEndScratch
  );

  localStart = Cesium.Cartesian3.subtract(localStart, originOffset, localStart);
  localEnd = Cesium.Cartesian3.subtract(localEnd, originOffset, localEnd);

  var v1 = vector1Scratch;
  var v2 = vector2Scratch;
  if (axis.x) {
    v1.x = localStart.y;
    v1.y = localStart.z;
    v2.x = localEnd.y;
    v2.y = localEnd.z;
  } else if (axis.y) {
    v1.x = -localStart.x;
    v1.y = localStart.z;
    v2.x = -localEnd.x;
    v2.y = localEnd.z;
  } else {
    v1.x = localStart.x;
    v1.y = localStart.y;
    v2.x = localEnd.x;
    v2.y = localEnd.y;
  }
  var ccw = v1.x * v2.y - v1.y * v2.x >= 0.0; //true when minimal angle between start and end is a counter clockwise rotation
  var angle = Cesium.Cartesian2.angleBetween(v1, v2);
  if (!ccw) {
    angle = -angle;
  }
  return angle;
}

function getLinePrimitive(positions, axis) {
  return new AxisLinePrimitive({
    positions: positions,
    color: TransformAxis$1.getColor(axis),
    loop: true,
    show: false,
    id: axis
  });
}

/**
 * @private
 * @ionsdk
 *
 * @param {Object} options
 * @param {Scene} options.scene
 * @param {Cartesian3} options.originOffset
 * @param {Function} options.setHeadingPitchRoll
 * @param {Function} options.setPosition
 * @param {Matrix4} options.transform
 * @param {Number} options.radius
 */
function RotationEditor(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  var scene = options.scene;

  this._vectorLine1 = scene.primitives.add(
    new AxisLinePrimitive({
      width: 5,
      positions: [new Cesium.Cartesian3(), new Cesium.Cartesian3()],
      color: Cesium.Color.YELLOW,
      show: false
    })
  );
  this._vectorLine2 = scene.primitives.add(
    new AxisLinePrimitive({
      width: 5,
      positions: [new Cesium.Cartesian3(), new Cesium.Cartesian3()],
      color: Cesium.Color.YELLOW,
      show: false
    })
  );

  var circles = getUnitCirclePositions();

  this._polylineX = scene.primitives.add(
    getLinePrimitive(circles.x, TransformAxis$1.X)
  );
  this._polylineY = scene.primitives.add(
    getLinePrimitive(circles.y, TransformAxis$1.Y)
  );
  this._polylineZ = scene.primitives.add(
    getLinePrimitive(circles.z, TransformAxis$1.Z)
  );
  this._modelMatrix = Cesium.Matrix4.clone(Cesium.Matrix4.IDENTITY);

  this.originOffset = options.originOffset;
  this._scene = scene;
  this._setHPRCallback = options.setHeadingPitchRoll;
  this._setPositionCallback = options.setPosition;
  this._transform = options.transform;
  this._radius = options.radius;

  this._active = false;
  this._dragging = false;
  this._startTransform = new Cesium.Matrix4();
  this._startRotation = new Cesium.Matrix3();
  this._widgetOrigin = new Cesium.Cartesian3();
  this._modelOrigin = new Cesium.Cartesian3();
  this._rotationAxis = undefined;
  this._rotationPlane = new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0.0);
  this._rotationStartPoint = new Cesium.Cartesian3();

  this.update();
}

Object.defineProperties(RotationEditor.prototype, {
  active: {
    get: function get() {
      return this._active;
    },
    set: function set(active) {
      this._active = active;
      if (active) {
        this._polylineX.show = true;
        this._polylineY.show = true;
        this._polylineZ.show = true;
      } else {
        this._polylineX.show = false;
        this._polylineY.show = false;
        this._polylineZ.show = false;
        this._dragging = false;
      }
    }
  }
});

RotationEditor.prototype.update = function () {
  var transform = this._transform;
  var modelMatrix = this._modelMatrix;
  modelMatrix = Cesium.Matrix4.setScale(transform, noScale$1, modelMatrix);

  var widgetOrigin = getWidgetOrigin(
    transform,
    this.originOffset,
    widgetOriginScratch
  );
  modelMatrix = Cesium.Matrix4.setTranslation(
    modelMatrix,
    widgetOrigin,
    modelMatrix
  );

  var radius =
    this._radius * Cesium.Matrix4.getMaximumScale(this._transform) * 1.25;
  modelMatrix = Cesium.Matrix4.multiplyByUniformScale(
    modelMatrix,
    radius,
    modelMatrix
  );

  this._polylineX.modelMatrix = modelMatrix;
  this._polylineY.modelMatrix = modelMatrix;
  this._polylineZ.modelMatrix = modelMatrix;
};

RotationEditor.prototype.handleLeftDown = function (position) {
  var scene = this._scene;
  var pickedObjects = scene.drillPick(position);
  var pickedAxis;
  for (var i = 0; i < pickedObjects.length; i++) {
    var object = pickedObjects[i];
    if (
      Cesium.defined(object.id) &&
      Cesium.defined(TransformAxis$1[object.id])
    ) {
      pickedAxis = object.id;
      break;
    }
  }
  if (!Cesium.defined(pickedAxis)) {
    return;
  }

  var rotationAxis = TransformAxis$1.getValue(pickedAxis);
  var startTransform = Cesium.Matrix4.setScale(
    this._transform,
    noScale$1,
    this._startTransform
  );
  this._startRotation = Cesium.Matrix4.getMatrix3(
    startTransform,
    this._startRotation
  );
  var modelOrigin = Cesium.Matrix4.getTranslation(
    startTransform,
    this._modelOrigin
  );

  var widgetOrigin = getWidgetOrigin(
    this._transform,
    this.originOffset,
    this._widgetOrigin
  );

  var rotationAxisEndWorld = Cesium.Matrix4.multiplyByPoint(
    startTransform,
    rotationAxis,
    rotationWorldScratch
  );
  var rotationAxisVectorWorld = Cesium.Cartesian3.subtract(
    rotationAxisEndWorld,
    modelOrigin,
    rotationAxisEndWorld
  );
  rotationAxisVectorWorld = Cesium.Cartesian3.normalize(
    rotationAxisVectorWorld,
    rotationAxisVectorWorld
  );

  var rotationPlane = Cesium.Plane.fromPointNormal(
    widgetOrigin,
    rotationAxisVectorWorld,
    this._rotationPlane
  );
  var rotationStartPoint = Cesium.IntersectionTests.rayPlane(
    scene.camera.getPickRay(position, rayScratch),
    rotationPlane,
    this._rotationStartPoint
  );
  this._dragging = Cesium.defined(rotationStartPoint);
  this._rotationAxis = rotationAxis;
  scene.screenSpaceCameraController.enableInputs = false;
};

RotationEditor.prototype.handleMouseMove = function (position) {
  if (!this._dragging) {
    return;
  }
  var scene = this._scene;
  var ray = scene.camera.getPickRay(position, rayScratch);
  var intersection = Cesium.IntersectionTests.rayPlane(
    ray,
    this._rotationPlane,
    intersectionScratch
  );

  if (!Cesium.defined(intersection)) {
    return;
  }

  var widgetOrigin = this._widgetOrigin;
  var modelOrigin = this._modelOrigin;
  var rotationStartPoint = this._rotationStartPoint;
  var vector1 = this._vectorLine1;
  var v1Pos = vector1.positions;
  var vector2 = this._vectorLine2;
  var v2Pos = vector2.positions;

  var v1 = Cesium.Cartesian3.subtract(
    rotationStartPoint,
    widgetOrigin,
    vector1Scratch
  );
  var v2 = Cesium.Cartesian3.subtract(
    intersection,
    widgetOrigin,
    vector2Scratch
  );
  v2 = Cesium.Cartesian3.normalize(v2, v2);
  v2 = Cesium.Cartesian3.multiplyByScalar(
    v2,
    Cesium.Cartesian3.magnitude(v1),
    v2
  );
  intersection = Cesium.Cartesian3.add(widgetOrigin, v2, intersection);

  v1Pos[0] = widgetOrigin;
  v1Pos[1] = rotationStartPoint;
  v2Pos[0] = widgetOrigin;
  v2Pos[1] = intersection;
  vector1.positions = v1Pos;
  vector2.positions = v2Pos;
  vector1.show = true;
  vector2.show = true;

  var offset = Cesium.Cartesian3.multiplyComponents(
    this.originOffset,
    Cesium.Matrix4.getScale(this._transform, offsetScratch),
    offsetScratch
  );
  var rotationAxis = this._rotationAxis;
  var angle = getRotationAngle(
    this._startTransform,
    offset,
    rotationAxis,
    rotationStartPoint,
    intersection
  );
  var rotation = Cesium.Matrix3.fromQuaternion(
    Cesium.Quaternion.fromAxisAngle(rotationAxis, angle, quaternionScratch),
    matrix3Scratch
  );

  rotation = Cesium.Matrix3.multiply(this._startRotation, rotation, rotation);
  var rotationTransform = Cesium.Matrix4.fromRotationTranslation(
    rotation,
    modelOrigin,
    rotatedTransformScratch
  );
  this._setHPRCallback(
    Cesium.Transforms.fixedFrameToHeadingPitchRoll(
      rotationTransform,
      scene.mapProjection.ellipsoid,
      undefined,
      hprScratch
    )
  );

  var newOffset = Cesium.Cartesian3.negate(offset, vector1Scratch);
  newOffset = Cesium.Matrix3.multiplyByVector(rotation, newOffset, newOffset);

  modelOrigin = Cesium.Cartesian3.add(newOffset, widgetOrigin, modelOrigin);
  this._setPositionCallback(modelOrigin);
};

RotationEditor.prototype.handleLeftUp = function () {
  this._dragging = false;
  this._vectorLine1.show = false;
  this._vectorLine2.show = false;
  this._scene.screenSpaceCameraController.enableInputs = true;
};

RotationEditor.prototype.isDestroyed = function () {
  return false;
};

RotationEditor.prototype.destroy = function () {
  this.active = false;
  var scene = this._scene;

  scene.primitives.remove(this._vectorLine1);
  scene.primitives.remove(this._vectorLine2);
  scene.primitives.remove(this._polylineX);
  scene.primitives.remove(this._polylineY);
  scene.primitives.remove(this._polylineZ);

  Cesium.destroyObject(this);
};

// exposed for testing
RotationEditor._getRotationAngle = getRotationAngle;

var widgetOriginScratch$1 = new Cesium.Cartesian3();
var originScratch = new Cesium.Cartesian3();
var directionScratch = new Cesium.Cartesian3();
var planeNormalScratch = new Cesium.Cartesian3();
var pickedPointScratch = new Cesium.Cartesian3();
var moveScratch = new Cesium.Cartesian3();
var offsetScratch$1 = new Cesium.Cartesian3();
var rayScratch$1 = new Cesium.Ray();
var noScale$2 = new Cesium.Cartesian3(1.0, 1.0, 1.0);

function getPoint(axis) {
  return {
    position: TransformAxis$1.getValue(axis),
    show: false,
    color: TransformAxis$1.getColor(axis),
    pixelSize: 20,
    disableDepthTestDistance: Number.POSITIVE_INFINITY,
    id: axis
  };
}

function getLinePrimitive$1(axis) {
  return new AxisLinePrimitive({
    positions: [Cesium.Cartesian3.ZERO, TransformAxis$1.getValue(axis)],
    color: TransformAxis$1.getColor(axis),
    id: axis,
    show: false
  });
}

/**
 * @private
 * @ionsdk
 *
 * @param {Object} options
 * @param {Scene} options.scene;
 * @param {Matrix4} options.transform
 * @param {Cartesian3} options.originOffset
 * @param {KnockoutObservable<Boolean>} options.enableNonUniformScaling
 * @param {Function} options.setPosition
 * @param {Function} options.setScale
 * @param {Number} options.radius
 */
function ScaleEditor(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  var scene = options.scene;
  var transform = options.transform;

  var points = scene.primitives.add(new Cesium.PointPrimitiveCollection());

  this.originOffset = options.originOffset;

  this._points = points;
  this._pointX = points.add(getPoint(TransformAxis$1.X));
  this._pointY = points.add(getPoint(TransformAxis$1.Y));
  this._pointZ = points.add(getPoint(TransformAxis$1.Z));

  this._polylineX = scene.primitives.add(getLinePrimitive$1(TransformAxis$1.X));
  this._polylineY = scene.primitives.add(getLinePrimitive$1(TransformAxis$1.Y));
  this._polylineZ = scene.primitives.add(getLinePrimitive$1(TransformAxis$1.Z));

  this._scene = scene;
  this._canvas = scene.canvas;
  this._enableNonUniformScaling = options.enableNonUniformScaling;
  this._setPositionCallback = options.setPosition;
  this._setScaleCallback = options.setScale;
  this._modelMatrix = new Cesium.Matrix4();

  this._pickedAxis = undefined;
  this._dragAlongVector = undefined;
  this._offsetVector = new Cesium.Cartesian3();
  this._pickingPlane = new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0.0);
  this._dragging = false;
  this._startPosition = new Cesium.Cartesian3();
  this._startScale = new Cesium.Cartesian3();
  this._startOffset = new Cesium.Cartesian3();
  this._startTransform = new Cesium.Matrix4();
  this._active = false;

  this._transform = transform;
  this._lineLength = options.radius * 1.5;

  this.update();
}

Object.defineProperties(ScaleEditor.prototype, {
  active: {
    get: function get() {
      return this._active;
    },
    set: function set(active) {
      this._active = active;
      if (active) {
        this._pointX.show = true;
        this._pointY.show = true;
        this._pointZ.show = true;
        this._polylineX.show = true;
        this._polylineY.show = true;
        this._polylineZ.show = true;
      } else {
        this._pointX.show = false;
        this._pointY.show = false;
        this._pointZ.show = false;
        this._polylineX.show = false;
        this._polylineY.show = false;
        this._polylineZ.show = false;
        this._dragging = false;
      }
    }
  }
});

ScaleEditor.prototype.handleLeftDown = function (position) {
  var scene = this._scene;
  var transform = this._transform;
  var camera = scene.camera;

  var pickedObjects = scene.drillPick(position);
  var origin = Cesium.Matrix4.getTranslation(transform, originScratch);

  var pickedAxis;
  for (var i = 0; i < pickedObjects.length; i++) {
    var object = pickedObjects[i];
    if (
      Cesium.defined(object.id) &&
      Cesium.defined(TransformAxis$1[object.id])
    ) {
      pickedAxis = object.id;
      break;
    }
  }
  if (!Cesium.defined(pickedAxis)) {
    return;
  }
  var dragAlongVector = TransformAxis$1.getValue(pickedAxis);
  var directionVector = Cesium.Matrix4.multiplyByPointAsVector(
    this._modelMatrix,
    dragAlongVector,
    directionScratch
  );

  var planeNormal = planeNormalScratch;
  if (Math.abs(Cesium.Cartesian3.dot(camera.upWC, directionVector)) > 0.7) {
    // if up and the direction are close to parallel, the dot product will be close to 1
    planeNormal = Cesium.Cartesian3.cross(
      camera.rightWC,
      directionVector,
      planeNormal
    );
  } else {
    planeNormal = Cesium.Cartesian3.cross(
      camera.upWC,
      directionVector,
      planeNormal
    );
  }
  Cesium.Cartesian3.normalize(planeNormal, planeNormal);
  var pickingPlane = Cesium.Plane.fromPointNormal(
    origin,
    planeNormal,
    this._pickingPlane
  );
  var startPosition = Cesium.IntersectionTests.rayPlane(
    camera.getPickRay(position, rayScratch$1),
    pickingPlane,
    this._startPosition
  );
  if (!Cesium.defined(startPosition)) {
    return;
  }
  this._offsetVector = Cesium.Cartesian3.subtract(
    startPosition,
    origin,
    this._offsetVector
  );
  this._dragging = true;

  var startScale = Cesium.Matrix4.getScale(transform, this._startScale);
  var startValue;
  if (pickedAxis === TransformAxis$1.X) {
    startValue = startScale.x;
  } else if (pickedAxis === TransformAxis$1.Y) {
    startValue = startScale.y;
  } else {
    startValue = startScale.z;
  }
  this._startValue = startValue;
  this._startOffset = Cesium.Cartesian3.multiplyComponents(
    this.originOffset,
    startScale,
    this._startOffset
  );
  this._dragAlongVector = dragAlongVector;
  this._pickedAxis = pickedAxis;
  this._startTransform = Cesium.Matrix4.setScale(
    transform,
    noScale$2,
    this._startTransform
  );
  scene.screenSpaceCameraController.enableInputs = false;
};

ScaleEditor.prototype.handleMouseMove = function (position) {
  if (!this._dragging) {
    return;
  }
  var scene = this._scene;
  var camera = scene.camera;

  var pickedPoint = Cesium.IntersectionTests.rayPlane(
    camera.getPickRay(position, rayScratch$1),
    this._pickingPlane,
    pickedPointScratch
  );
  if (!Cesium.defined(pickedPoint)) {
    return;
  }

  var dragAlongVector = this._dragAlongVector;
  var directionVector = Cesium.Matrix4.multiplyByPointAsVector(
    this._modelMatrix,
    dragAlongVector,
    directionScratch
  );
  var scaleVector = Cesium.Cartesian3.subtract(
    pickedPoint,
    this._startPosition,
    moveScratch
  );
  scaleVector = Cesium.Cartesian3.projectVector(
    scaleVector,
    directionVector,
    scaleVector
  );
  var scale = Cesium.Cartesian3.magnitude(scaleVector);
  if (Cesium.Cartesian3.dot(scaleVector, this._offsetVector) < 0) {
    // mouse drag is backwards, so we want to scale down
    scale = -scale;
  }

  scale /= this._lineLength;

  scale += this._startValue;
  if (scale <= 0) {
    return;
  }

  var pickedAxis = this._pickedAxis;
  var startScale = this._startScale;
  if (!this._enableNonUniformScaling()) {
    startScale.x = scale;
    startScale.y = scale;
    startScale.z = scale;
  } else if (pickedAxis === TransformAxis$1.X) {
    startScale.x = scale;
  } else if (pickedAxis === TransformAxis$1.Y) {
    startScale.y = scale;
  } else {
    startScale.z = scale;
  }

  var newOffset = Cesium.Cartesian3.multiplyComponents(
    this.originOffset,
    startScale,
    offsetScratch$1
  );
  newOffset = Cesium.Cartesian3.subtract(
    this._startOffset,
    newOffset,
    newOffset
  );
  newOffset = Cesium.Matrix4.multiplyByPoint(
    this._startTransform,
    newOffset,
    newOffset
  );

  this._setScaleCallback(startScale);
  this._setPositionCallback(newOffset);
};

ScaleEditor.prototype.handleLeftUp = function () {
  this._dragging = false;
  this._scene.screenSpaceCameraController.enableInputs = true;
};

ScaleEditor.prototype.update = function () {
  var transform = this._transform;
  var widgetOrigin = getWidgetOrigin(
    transform,
    this.originOffset,
    widgetOriginScratch$1
  );
  var modelMatrix = Cesium.Matrix4.multiplyByUniformScale(
    transform,
    this._lineLength,
    this._modelMatrix
  );
  modelMatrix = Cesium.Matrix4.setTranslation(
    modelMatrix,
    widgetOrigin,
    modelMatrix
  );

  this._polylineX.modelMatrix = modelMatrix;
  this._polylineY.modelMatrix = modelMatrix;
  this._polylineZ.modelMatrix = modelMatrix;
  this._points.modelMatrix = modelMatrix;
};

ScaleEditor.prototype.isDestroyed = function () {
  return false;
};

ScaleEditor.prototype.destroy = function () {
  this.active = false;
  var scene = this._scene;
  this._points.removeAll();
  scene.primitives.remove(this._polylineX);
  scene.primitives.remove(this._polylineY);
  scene.primitives.remove(this._polylineZ);
  scene.primitives.remove(this._points);
  Cesium.destroyObject(this);
};

var widgetOriginScratch$2 = new Cesium.Cartesian3();
var originScratch$1 = new Cesium.Cartesian3();
var directionScratch$1 = new Cesium.Cartesian3();
var planeNormalScratch$1 = new Cesium.Cartesian3();
var pickedPointScratch$1 = new Cesium.Cartesian3();
var moveScratch$1 = new Cesium.Cartesian3();
var offsetProjectedScratch = new Cesium.Cartesian3();
var rayScratch$2 = new Cesium.Ray();

function getLinePrimitive$2(axis) {
  return new AxisLinePrimitive({
    positions: [Cesium.Cartesian3.ZERO, TransformAxis$1.getValue(axis)],
    arrow: true,
    color: TransformAxis$1.getColor(axis),
    id: axis,
    show: false
  });
}

/**
 * @private
 * @ionsdk
 *
 * @param {Object} options
 * @param {Scene} options.scene
 * @param {Cartesian3} options.originOffset
 * @param {Function} options.setPosition
 * @param {Matrix4} options.transform
 * @param {Number} options.radius
 */
function TranslationEditor(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  var scene = options.scene;

  this.originOffset = options.originOffset;

  this._polylineX = scene.primitives.add(getLinePrimitive$2(TransformAxis$1.X));
  this._polylineY = scene.primitives.add(getLinePrimitive$2(TransformAxis$1.Y));
  this._polylineZ = scene.primitives.add(getLinePrimitive$2(TransformAxis$1.Z));

  this._scene = scene;
  this._canvas = scene.canvas;
  this._setPositionCallback = options.setPosition;
  this._modelMatrix = new Cesium.Matrix4();
  this._fixedFrame = new Cesium.Matrix4();
  this._hpr = new Cesium.HeadingPitchRoll();

  this._dragAlongVector = undefined;
  this._offsetVector = new Cesium.Cartesian3();
  this._pickingPlane = new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0.0);
  this._dragging = false;
  this._active = false;

  this._transform = options.transform;
  this._radius = options.radius;
  this.update();
}

Object.defineProperties(TranslationEditor.prototype, {
  active: {
    get: function get() {
      return this._active;
    },
    set: function set(active) {
      this._active = active;
      if (active) {
        this._polylineX.show = true;
        this._polylineY.show = true;
        this._polylineZ.show = true;
      } else {
        this._polylineX.show = false;
        this._polylineY.show = false;
        this._polylineZ.show = false;
        this._dragging = false;
      }
    }
  }
});

TranslationEditor.prototype.update = function () {
  var transform = this._transform;
  var ellipsoid = this._scene.mapProjection.ellipsoid;

  var modelOrigin = Cesium.Matrix4.getTranslation(transform, originScratch$1);
  var widgetOrigin = getWidgetOrigin(
    transform,
    this.originOffset,
    widgetOriginScratch$2
  );

  var length =
    this._radius * Cesium.Matrix4.getMaximumScale(this._transform) * 1.5;
  var hpr = Cesium.Transforms.fixedFrameToHeadingPitchRoll(
    this._transform,
    ellipsoid,
    undefined,
    this._hpr
  );
  hpr.pitch = 0;
  hpr.roll = 0;

  var hprToFF = Cesium.Transforms.headingPitchRollToFixedFrame(
    modelOrigin,
    hpr,
    ellipsoid,
    undefined,
    this._fixedFrame
  );
  hprToFF = Cesium.Matrix4.setTranslation(hprToFF, widgetOrigin, hprToFF);
  var modelMatrix = Cesium.Matrix4.multiplyByUniformScale(
    hprToFF,
    length,
    this._modelMatrix
  );

  this._polylineX.modelMatrix = modelMatrix;
  this._polylineY.modelMatrix = modelMatrix;
  this._polylineZ.modelMatrix = modelMatrix;
};

TranslationEditor.prototype.handleLeftDown = function (position) {
  var scene = this._scene;
  var camera = scene.camera;

  var pickedObjects = scene.drillPick(position);

  var pickedAxis;
  for (var i = 0; i < pickedObjects.length; i++) {
    var object = pickedObjects[i];
    if (
      Cesium.defined(object.id) &&
      Cesium.defined(TransformAxis$1[object.id])
    ) {
      pickedAxis = object.id;
      break;
    }
  }
  if (!Cesium.defined(pickedAxis)) {
    return;
  }

  var origin = Cesium.Matrix4.getTranslation(this._transform, originScratch$1);
  var dragAlongVector = TransformAxis$1.getValue(pickedAxis);
  var directionVector = Cesium.Matrix4.multiplyByPointAsVector(
    this._fixedFrame,
    dragAlongVector,
    directionScratch$1
  );

  //Finds a picking plane that includes the dragged axis and is somewhat perpendicular to the camera
  var planeNormal = planeNormalScratch$1;
  if (Math.abs(Cesium.Cartesian3.dot(camera.upWC, directionVector)) > 0.7) {
    // if up and the direction are close to parellel, the dot product will be close to 1
    planeNormal = Cesium.Cartesian3.cross(
      camera.rightWC,
      directionVector,
      planeNormal
    );
  } else {
    planeNormal = Cesium.Cartesian3.cross(
      camera.upWC,
      directionVector,
      planeNormal
    );
  }
  Cesium.Cartesian3.normalize(planeNormal, planeNormal);

  var pickingPlane = Cesium.Plane.fromPointNormal(
    origin,
    planeNormal,
    this._pickingPlane
  );
  var offsetVector = Cesium.IntersectionTests.rayPlane(
    camera.getPickRay(position, rayScratch$2),
    pickingPlane,
    this._offsetVector
  );
  if (!Cesium.defined(offsetVector)) {
    return;
  }
  Cesium.Cartesian3.subtract(offsetVector, origin, offsetVector);
  this._dragging = true;
  this._dragAlongVector = dragAlongVector;
  scene.screenSpaceCameraController.enableInputs = false;
};

TranslationEditor.prototype.handleMouseMove = function (position) {
  if (!this._dragging) {
    return;
  }
  var scene = this._scene;
  var camera = scene.camera;

  var pickedPoint = Cesium.IntersectionTests.rayPlane(
    camera.getPickRay(position, rayScratch$2),
    this._pickingPlane,
    pickedPointScratch$1
  );
  if (!Cesium.defined(pickedPoint)) {
    return;
  }

  var dragAlongVector = this._dragAlongVector;
  var origin = Cesium.Matrix4.getTranslation(this._transform, originScratch$1);
  var directionVector = Cesium.Matrix4.multiplyByPointAsVector(
    this._fixedFrame,
    dragAlongVector,
    directionScratch$1
  );
  var moveVector = Cesium.Cartesian3.subtract(
    pickedPoint,
    origin,
    moveScratch$1
  );
  moveVector = Cesium.Cartesian3.projectVector(
    moveVector,
    directionVector,
    moveVector
  );
  var offset = Cesium.Cartesian3.projectVector(
    this._offsetVector,
    directionVector,
    offsetProjectedScratch
  );
  moveVector = Cesium.Cartesian3.subtract(moveVector, offset, moveVector);

  origin = Cesium.Cartesian3.add(origin, moveVector, origin);
  this._setPositionCallback(origin);
};

TranslationEditor.prototype.handleLeftUp = function () {
  this._dragging = false;
  this._scene.screenSpaceCameraController.enableInputs = true;
};

TranslationEditor.prototype.isDestroyed = function () {
  return false;
};

TranslationEditor.prototype.destroy = function () {
  this.active = false;
  var scene = this._scene;
  scene.primitives.remove(this._polylineX);
  scene.primitives.remove(this._polylineY);
  scene.primitives.remove(this._polylineZ);
  Cesium.destroyObject(this);
};

var widgetPosition = new Cesium.Cartesian3();
var screenPosition = new Cesium.Cartesian2();

var noScale$3 = new Cesium.Cartesian3(1.0, 1.0, 1.0);
var transformScratch = new Cesium.Matrix4();
var vectorScratch = new Cesium.Cartesian3();
var scaleScratch$1 = new Cesium.Cartesian3();

var EditorMode = {
  TRANSLATION: "translation",
  ROTATION: "rotation",
  SCALE: "scale"
};

var setHprQuaternion = new Cesium.Quaternion();
var setHprQuaternion2 = new Cesium.Quaternion();
var setHprTranslation = new Cesium.Cartesian3();
var setHprScale = new Cesium.Cartesian3();
var setHprCenter = new Cesium.Cartesian3();
var setHprTransform = new Cesium.Matrix4();
var setHprRotation = new Cesium.Matrix3();

function setHeadingPitchRoll(transform, headingPitchRoll) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("transform", transform);
  Cesium.Check.defined("headingPitchRoll", headingPitchRoll);
  //>>includeEnd('debug');

  var rotationQuaternion = Cesium.Quaternion.fromHeadingPitchRoll(
    headingPitchRoll,
    setHprQuaternion
  );
  var translation = Cesium.Matrix4.getTranslation(transform, setHprTranslation);
  var scale = Cesium.Matrix4.getScale(transform, setHprScale);
  var center = Cesium.Matrix4.multiplyByPoint(
    transform,
    Cesium.Cartesian3.ZERO,
    setHprCenter
  );
  var backTransform = Cesium.Transforms.eastNorthUpToFixedFrame(
    center,
    undefined,
    setHprTransform
  );

  var rotationFixed = Cesium.Matrix4.getMatrix3(backTransform, setHprRotation);
  var quaternionFixed = Cesium.Quaternion.fromRotationMatrix(
    rotationFixed,
    setHprQuaternion2
  );
  var rotation = Cesium.Quaternion.multiply(
    quaternionFixed,
    rotationQuaternion,
    rotationFixed
  );

  return Cesium.Matrix4.fromTranslationQuaternionRotationScale(
    translation,
    rotation,
    scale,
    transform
  );
}

/**
 * 创建交互式变换编辑器
 * @alias TransformEditorViewModel
 * @ionsdk
 * @constructor
 *
 * @param {Object} options 具有以下属性的对象
 * @param {Scene} options.scene 场景
 * @param {Matrix4} options.transform 需要定位的图元的变换
 * @param {BoundingSphere} options.boundingSphere 需要定位的图元的包围球
 * @param {Cartesian3} [options.originOffset] 从变换平移定义的原点的偏移向量（在局部坐标中）。
 */
function TransformEditorViewModel(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  Cesium.Check.defined("options.transform", options.transform);
  Cesium.Check.defined("options.boundingSphere", options.boundingSphere);
  //>>includeEnd('debug');

  var scene = options.scene;
  var transform = options.transform;
  var boundingSphere = options.boundingSphere.clone();

  var originOffset = Cesium.defaultValue(
    options.originOffset,
    Cesium.Cartesian3.ZERO
  );

  var position = Cesium.Matrix4.getTranslation(
    transform,
    new Cesium.Cartesian3()
  );
  var headingPitchRoll = Cesium.Transforms.fixedFrameToHeadingPitchRoll(
    transform,
    scene.mapProjection.ellipsoid,
    undefined,
    new Cesium.HeadingPitchRoll()
  );
  var scale = Cesium.Matrix4.getScale(transform, new Cesium.Cartesian3());

  if (
    Cesium.Cartesian3.equalsEpsilon(
      position,
      Cesium.Cartesian3.ZERO,
      Cesium.Math.EPSILON10
    )
  ) {
    position = Cesium.Cartesian3.fromDegrees(
      0,
      0,
      0,
      scene.mapProjection.ellipsoid,
      position
    );
    transform = Cesium.Matrix4.setTranslation(transform, position, transform);
    setHeadingPitchRoll(transform, headingPitchRoll);
  }

  var nonUniformScaling = true;
  if (
    Cesium.Math.equalsEpsilon(scale.x, scale.y, Cesium.Math.EPSILON10) &&
    Cesium.Math.equalsEpsilon(scale.x, scale.z, Cesium.Math.EPSILON10)
  ) {
    nonUniformScaling = false;
    scale.y = scale.x;
    scale.z = scale.x;
  }

  var initialRadius =
    boundingSphere.radius / Cesium.Cartesian3.maximumComponent(scale);

  /**
   * 获取和设置选定的交互模式。
   * @type {EditorMode}
   */
  this.editorMode = undefined;
  var editorMode = Cesium.knockout.observable();
  Cesium.knockout.defineProperty(this, "editorMode", {
    get: function get() {
      return editorMode();
    },
    set: function set(value) {
      editorMode(value);
      if (Cesium.defined(this._activeEditor)) {
        this._activeEditor.active = false;
      }
      var activeEditor;
      if (value === EditorMode.ROTATION) {
        activeEditor = this._rotationEditor;
      } else if (value === EditorMode.TRANSLATION) {
        activeEditor = this._translationEditor;
      } else if (value === EditorMode.SCALE) {
        activeEditor = this._scaleEditor;
      }
      activeEditor.update();
      activeEditor.active = true;
      this._activeEditor = activeEditor;
    }
  });

  /**
   * 获取和设置是否启用非均匀缩放
   * @type {布尔}
   */
  this.enableNonUniformScaling = nonUniformScaling;
  var enableNonUniformScaling = Cesium.knockout.observable(
    this.enableNonUniformScaling
  );
  Cesium.knockout.defineProperty(this, "enableNonUniformScaling", {
    get: function get() {
      return enableNonUniformScaling();
    },
    set: function set(value) {
      if (value === enableNonUniformScaling()) {
        return;
      }
      enableNonUniformScaling(value);
      if (!value) {
        this.scale = new Cesium.Cartesian3(scale.x, scale.x, scale.x);
        if (scene.requestRenderMode) {
          scene.requestRender();
        }
      }
    }
  });

  /**
   * 获取和设置位置
   * @type {Cartesian3}
   */
  this.position = position;
  var positionObservable = Cesium.knockout.observable(this.position);
  Cesium.knockout.defineProperty(this, "position", {
    get: function get() {
      return positionObservable();
    },
    set: function set(value) {
      if (Cesium.Cartesian3.equals(value, this.position)) {
        return;
      }
      var position = Cesium.Cartesian3.clone(value, this.position);
      positionObservable(position);
      var transform = this._transform;
      transform = Cesium.Matrix4.setTranslation(transform, position, transform);
      setHeadingPitchRoll(transform, this.headingPitchRoll);
      if (scene.requestRenderMode) {
        scene.requestRender();
      }

      // custom edd code

      var carto = Cesium.Cartographic.fromCartesian(value);

      var longitude = Cesium.Math.toDegrees(carto.longitude);
      var latitude = Cesium.Math.toDegrees(carto.latitude);

      // $("#tileset_longitude").val(longitude);
      // $("#tileset_latitude").val(latitude);
      // $("#tileset_altitude").val(carto.height);
      console.log("longitude: " + longitude);
      console.log("latitude: " + latitude);
      console.log("altitude: " + carto.height);
    }
  });

  /**
   * 获取和设置航向俯仰滚转
   * @type {HeadingPitchRoll}
   */
  this.headingPitchRoll = headingPitchRoll;
  var headingPitchRollObservable = Cesium.knockout.observable(
    this.headingPitchRoll
  );
  Cesium.knockout.defineProperty(this, "headingPitchRoll", {
    get: function get() {
      return headingPitchRollObservable();
    },
    set: function set(value) {
      if (Cesium.HeadingPitchRoll.equals(value, this.headingPitchRoll)) {
        return;
      }
      var hpr = Cesium.HeadingPitchRoll.clone(value, this.headingPitchRoll);
      headingPitchRollObservable(hpr);
      setHeadingPitchRoll(this._transform, hpr);
      if (scene.requestRenderMode) {
        scene.requestRender();
      }
    }
  });

  /**
   * 获取和设置比例
   * @type {Cartesian3}
   */
  this.scale = scale;
  var scaleObservable = Cesium.knockout.observable(this.scale);
  Cesium.knockout.defineProperty(this, "scale", {
    get: function get() {
      return scaleObservable();
    },
    set: function set(value) {
      if (Cesium.Cartesian3.equals(value, this.scale)) {
        return;
      }
      var scale = Cesium.Cartesian3.clone(value, this.scale);
      scaleObservable(scale);
      Cesium.Matrix4.setScale(this._transform, scale, this._transform);
      this._translationEditor.update(); //applies the scale to the editing primitives
      this._rotationEditor.update();
      if (scene.requestRenderMode) {
        scene.requestRender();
      }
    }
  });

  /**
   * Gets and sets whether the menu is expanded
   * @type {Boolean}
   */
  this.menuExpanded = false;

  /**
   * Gets the x screen coordinate of the widget menu
   * @type {String}
   * @readonly
   */
  this.left = "0";

  /**
   * Gets the y screen coordinate of the widget menu
   * @type {String}
   * @readonly
   */
  this.top = "0";

  /**
   * 获取小部件是否处于活动状态。使用 activate 和 deactivate 函数来设置这个值。
   * @type {Boolean}
   * @readonly
   */
  this.active = false;

  Cesium.knockout.track(this, ["menuExpanded", "left", "top", "active"]);

  var that = this;
  this._rotationEditor = new RotationEditor({
    scene: scene,
    transform: transform,
    radius: initialRadius,
    originOffset: originOffset,
    setPosition: function setPosition(value) {
      that.position = value;
    },
    setHeadingPitchRoll: function setHeadingPitchRoll(value) {
      that.headingPitchRoll = value;
    }
  });
  this._translationEditor = new TranslationEditor({
    scene: scene,
    transform: transform,
    radius: initialRadius,
    originOffset: originOffset,
    setPosition: function setPosition(value) {
      that.position = value;
    }
  });
  this._scaleEditor = new ScaleEditor({
    scene: scene,
    transform: transform,
    enableNonUniformScaling: enableNonUniformScaling,
    radius: initialRadius,
    originOffset: originOffset,
    setScale: function setScale(value) {
      that.scale = value;
    },
    setPosition: function setPosition(value) {
      that.position = value;
    }
  });

  this._sseh = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  this._scene = scene;
  this._transform = transform;
  this._boundingSphere = boundingSphere;
  this._active = false;
  this._activeEditor = undefined;
  this._originOffset = originOffset;

  this.position = position;
  this.headingPitchRoll = headingPitchRoll;
  this.scale = scale;

  this._removePostUpdateEvent = this._scene.preUpdate.addEventListener(
    TransformEditorViewModel.prototype._update,
    this
  );
}

Object.defineProperties(TransformEditorViewModel.prototype, {
  /**
   * Gets and sets the offset of the transform editor UI components from the origin as defined by the transform
   * @type {Cartesian3}
   * @memberof TransformEditorViewModel
   */
  originOffset: {
    get: function get() {
      return this._originOffset;
    },
    set: function set(value) {
      //>>includeStart('debug', pragmas.debug);
      Cesium.Check.defined("value", value);
      //>>includeEnd('debug');
      this._originOffset = value;

      this._translationEditor.originOffset = value;
      this._rotationEditor.originOffset = value;
      this._scaleEditor.originOffset = value;
    }
  }
});

/**
 * Sets the originOffset based on the Cartesian3 position in world coordinates
 * @param {Cartesian3} position
 */
TransformEditorViewModel.prototype.setOriginPosition = function (position) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("position", position);
  //>>includeEnd('debug');
  var transform = Cesium.Matrix4.setScale(
    this._transform,
    noScale$3,
    transformScratch
  );
  var worldToLocalCoordinates = Cesium.Matrix4.inverseTransformation(
    transform,
    transform
  );
  var point = Cesium.Matrix4.multiplyByPoint(
    worldToLocalCoordinates,
    position,
    vectorScratch
  );
  var offset = Cesium.Cartesian3.divideComponents(
    point,
    Cesium.Matrix4.getScale(this._transform, scaleScratch$1),
    point
  );

  this.originOffset = offset;
};

/**
 * Activates the widget by showing the primitives and enabling mouse handlers
 */
TransformEditorViewModel.prototype.activate = function () {
  var sseh = this._sseh;
  var scene = this._scene;

  sseh.setInputAction(
    this._leftDown.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_DOWN
  );
  sseh.setInputAction(
    this._leftUp.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_UP
  );
  sseh.setInputAction(
    this._mouseMove.bind(this),
    Cesium.ScreenSpaceEventType.MOUSE_MOVE
  );
  this.active = true;
  if (Cesium.defined(this._activeEditor)) {
    this._activeEditor.active = true;
  } else {
    this.setModeTranslation();
  }
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * Deactivates the widget by disabling mouse handlers and hiding the primitives
 */
TransformEditorViewModel.prototype.deactivate = function () {
  var sseh = this._sseh;
  var scene = this._scene;

  sseh.removeInputAction(
    this._leftDown.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_DOWN
  );
  sseh.removeInputAction(
    this._leftUp.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_UP
  );
  sseh.removeInputAction(
    this._mouseMove.bind(this),
    Cesium.ScreenSpaceEventType.MOUSE_MOVE
  );
  this.active = false;
  if (Cesium.defined(this._activeEditor)) {
    this._activeEditor.active = false;
  }
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * Expands the widget menu
 */
TransformEditorViewModel.prototype.expandMenu = function () {
  this.menuExpanded = true;
};

/**
 * Activates the translation interactive mode
 */
TransformEditorViewModel.prototype.setModeTranslation = function () {
  this.editorMode = EditorMode.TRANSLATION;
  this.menuExpanded = false;
};

/**
 * Activates the rotation interactive mode
 */
TransformEditorViewModel.prototype.setModeRotation = function () {
  this.editorMode = EditorMode.ROTATION;
  this.menuExpanded = false;
};

/**
 * Activates the scale interactive mode
 */
TransformEditorViewModel.prototype.setModeScale = function () {
  this.editorMode = EditorMode.SCALE;
  this.menuExpanded = false;
};

/**
 * Toggles whether non-uniform scaling is enabled
 */
TransformEditorViewModel.prototype.toggleNonUniformScaling = function () {
  this.enableNonUniformScaling = !this.enableNonUniformScaling;
};

/**
 * @private
 */
TransformEditorViewModel.prototype._leftDown = function (click) {
  this._activeEditor.handleLeftDown(click.position);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @private
 */
TransformEditorViewModel.prototype._mouseMove = function (movement) {
  this._activeEditor.handleMouseMove(movement.endPosition);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @private
 */
TransformEditorViewModel.prototype._leftUp = function (click) {
  this.menuExpanded = false;
  this._activeEditor.handleLeftUp(click.position);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * Updates the active editor
 * @private
 */
TransformEditorViewModel.prototype._update = function () {
  if (!this.active) {
    return;
  }
  this._activeEditor.update();
  var scene = this._scene;
  var position = getWidgetOrigin(
    this._transform,
    this._originOffset,
    widgetPosition
  );
  var newPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    position,
    screenPosition
  );
  if (Cesium.defined(newPos)) {
    this.left = Math.floor(newPos.x - 13) + "px";
    this.top = Math.floor(newPos.y) + "px";
  }
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
TransformEditorViewModel.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the view model.
 */
TransformEditorViewModel.prototype.destroy = function () {
  this.deactivate();
  this._sseh.destroy();
  this._rotationEditor.destroy();
  this._translationEditor.destroy();
  this._scaleEditor.destroy();
  this._removePostUpdateEvent();
  Cesium.destroyObject(this);
};

TransformEditorViewModel.EditorMode = EditorMode;

/**
 * Creates a DOM Node from a String containing HTML
 *
 * @param {String} html The html string
 * @ionsdk
 *
 * @private
 */
function createDomNode(html) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.typeOf.string("html", html);
  //>>includeEnd('debug');

  var div = document.createElement("div");
  div.innerHTML = html;

  if (div.children.length === 1) {
    return div.removeChild(div.firstChild);
  }

  return div;
}

/**
 * If element is a string, look up the element in the DOM by ID.  Otherwise return element.
 *
 * @private
 *
 * @exception {DeveloperError} Element with id "id" does not exist in the document.
 */
function getElement(element) {
  if (typeof element === "string") {
    var foundElement = document.getElementById(element);

    //>>includeStart('debug', pragmas.debug);
    if (foundElement === null) {
      throw new Cesium.DeveloperError(
        'Element with id "' + element + '" does not exist in the document.'
      );
    }
    //>>includeEnd('debug');

    element = foundElement;
  }
  return element;
}

var html =
  '<div class="transform-editor-menu" data-bind="style: {left: left, top: top}, visible: active">\
        <div class="cesium-button transform-editor-button" data-bind="click: expandMenu, visible: !menuExpanded">\
            <svg width="20" height="20" viewBox="0 0 20 20">\
                <g>\
                    <circle cx="2" cy="10" r="2" />\
                    <circle cx="10" cy="10" r="2" />\
                    <circle cx="18" cy="10" r="2" />\
                </g>\
            </svg>\
        </div>\
        <div class="transform-editor-options" data-bind="visible: menuExpanded">\
            <div class="transform-editor-button-row">\
                <div title="Translation" data-bind="click: setModeTranslation, css: {selected: editorMode === \'translation\'}">\
                    <svg viewBox="0 0 25 25" height="25" width="25">\
                        <g>\
                            <circle r="3" cy="22" cx="3" />\
                            <path d="M 19.543379,4.59439 3.9750205,19.96158 5.3793174,21.3854 20.947676,6.01822 Z"/>\
                            <path d="m 14.699824,3.80366 10.231411,-3.34922 -3.215586,10.03096 z"/>\
                        </g>\
                    </svg>\
                </div\
                ><div title="Rotation" data-bind="click: setModeRotation, css: {selected: editorMode === \'rotation\'}">\
                    <svg viewBox="0 0 25 25" height="25" width="25">\
                        <g>\
                            <path d="M 13.033371,10.08295 2.6713568,7.16272 10.931013,0.62527 Z"/>\
                            <path d="m 13.741358,3.87055 c -0.747592,-0.006 -1.506137,0.0593 -2.263621,0.20287 l 0.484334,2.29127 c 4.712769,-0.89305 9.471467,2.11386 10.414021,6.57912 0.942553,4.46525 -2.229345,8.97402 -6.942115,9.86707 -4.71277,0.89305 -9.4731664,-2.11226 -10.4157205,-6.57752 l -2.4165696,0.45729 c 1.2119755,5.74161 7.2550484,9.55981 13.3149241,8.41149 6.059877,-1.14833 10.089725,-6.87562 8.87775,-12.61723 -1.060479,-5.02391 -5.819851,-8.57436 -11.053003,-8.61436 z"/>\
                        </g>\
                    </svg>\
               </div>\
            </div>\
            <div class="transform-editor-button-row">\
                <div title="Scale" data-bind="click: setModeScale, css: {selected: editorMode === \'scale\'}">\
                    <svg width="25" height="25" viewBox="0 0 25 25">\
                        <g>\
                            <path d="M 19.543379,4.59439 3.9750205,19.96158 5.3793174,21.3854 20.947676,6.01822 Z"/>\
                            <path d="m 14.699824,3.80366 10.231411,-3.34922 -3.215586,10.03096 z" />\
                            <path d="M 10.333866,21.9809 0.10245523,25.33012 3.3180412,15.29916 Z" />\
                        </g>\
                    </svg>\
                </div\
                ><div data-bind="click: toggleNonUniformScaling">\
                    <div title="Switch to non-uniform scaling" data-bind="visible: !enableNonUniformScaling">\
                        <svg width="25" height="25" viewBox="0 0 25 25">\
                            <g>\
                                <path d="m 0.5,1.38477 h 1.9960938 v -1 H 0.5 c 0,0.33333 0,0.66667 0,1 z m 2.9941406,0 h 1.9980469 v -1 H 3.4941406 Z m 2.9960938,0 h 1.9960937 v -1 H 6.4902344 Z m 2.9960937,0 h 1.9960939 v -1 H 9.4863281 Z m 2.9941409,0 h 1.998047 v -1 h -1.998047 z m 2.996093,0 h 1.996094 v -1 h -1.996094 z m 2.994141,0 h 1.998047 v -1 h -1.998047 z m 2.996094,0 h 1.998047 v -1 h -1.998047 z m 2.535156,-0.5 v 1.95898 H 25 v -1.95898 z M 0,4.0332 h 0.99804688 v -1.99609 H 0 Z m 24.001953,1.80469 H 25 V 3.8418 H 24.001953 Z M 0,7.0293 h 0.99804688 v -1.99805 H 0 Z m 24.001953,1.80468 H 25 v -1.99609 H 24.001953 Z M 0,10.02344 h 0.99804688 v -1.9961 H 0 Z m 24.001953,1.80664 H 25 v -1.99805 H 24.001953 Z M 0,13.01953 h 0.99804688 v -1.99609 H 0 Z m 24.001953,1.80469 H 25 v -1.9961 H 24.001953 Z M 0,16.01562 h 0.99804688 v -1.99804 H 0 Z m 24.001953,1.80469 H 25 v -1.99804 H 24.001953 Z M 0,19.00977 h 0.99804688 v -1.9961 H 0 Z m 24.001953,1.80664 H 25 v -1.99805 H 24.001953 Z M 0,22.00586 h 0.99804688 v -1.99609 H 0 Z m 24.001953,1.80469 H 25 v -1.9961 H 24.001953 Z M 0,24.88672 v 0.49805 h 0.5 0.11523438 v -0.49805 h 0.3828125 v -1.88281 H 0 Z m 1.6132812,0.49805 H 3.609375 v -0.99805 H 1.6132812 Z m 2.9941407,0 h 1.9980469 v -0.99805 H 4.6074219 Z m 2.9960937,0 h 1.9980469 v -0.99805 H 7.6035156 Z m 2.9960934,0 h 1.996094 v -0.99805 h -1.996094 z m 2.994141,0 h 1.998047 v -0.99805 H 13.59375 Z m 2.996094,0 h 1.996094 v -0.99805 h -1.996094 z m 2.996094,0 h 1.996093 v -0.99805 h -1.996093 z m 2.99414,0 H 24.5 25 v -0.49805 -0.0781 h -0.5 v -0.42187 h -1.919922 z" />\
                                <path d="m 0,10.38477 v 1.02343 13.97657 h 15 v -15 z m 2.0449219,2.04492 H 12.955078 V 23.3418 H 2.0449219 Z"/>\
                                <g>\
                                    <path d="m 21.158203,3.81836 0.355469,0.35156 0.351562,-0.35547 -0.353515,-0.35156 z m -0.703125,0.70898 0.355469,0.35157 0.351562,-0.35352 -0.355468,-0.35351 z m -0.705078,0.71094 0.355469,0.35156 0.351562,-0.35546 -0.353515,-0.35157 z m -0.703125,0.70899 0.355469,0.35351 0.351562,-0.35547 -0.355468,-0.35156 z m -0.705078,0.71093 0.355469,0.35157 0.353515,-0.35547 -0.355469,-0.35157 z m -0.703125,0.71094 0.355469,0.35156 0.351562,-0.35547 -0.355469,-0.35156 z m -0.703125,0.70898 0.353515,0.35157 0.353516,-0.35352 -0.355469,-0.35351 z m -0.705078,0.71094 0.355469,0.35156 0.351562,-0.35546 -0.355469,-0.35157 z m -0.703125,0.70899 0.353515,0.35351 0.353516,-0.35547 -0.355469,-0.35351 z m -0.705078,0.71093 0.355468,0.35157 0.351563,-0.35547 -0.355469,-0.35156 z"/>\
                                    <path d="m 23.382049,1.93037 -1.015775,3.8652 -2.840556,-2.81624 z"/>\
                                </g>\
                            </g>\
                        </svg>\
                    </div>\
                    <div title="Switch to uniform scaling" data-bind="visible: enableNonUniformScaling">\
                        <svg width="25" height="25" viewBox="0 0 25 25">\
                            <g>\
                                <path d="M 0.49414062,10.87891 H 0 v 1.95117 h 0.98828125 v -1.45703 H 2.4707031 v -0.98828 H 0.49414062 Z m 2.96289058,0.49414 h 1.9765626 v -0.98828 H 3.4570312 Z m 2.9648438,0 h 1.9765625 v -0.98828 H 6.421875 Z m 2.9628906,0 h 1.9765624 v -0.98828 H 9.3847656 Z m 2.9648434,0 h 1.976563 v -0.98828 h -1.976563 z m 2.964844,0 h 1.974609 v -0.98828 h -1.974609 z m 2.962891,0 h 1.976562 v -0.98828 h -1.976562 z m 2.964844,0 h 1.974609 v -0.98828 h -1.974609 z m 2.96289,-0.49414 h -0.193359 v 1.67578 H 25 v -1.67578 -0.49414 h -0.494141 -0.300781 z m -0.193359,4.63867 H 25 v -1.97461 H 24.011719 Z M 0,15.79297 h 0.98828125 v -1.97461 H 0 Z m 24.011719,2.68945 H 25 v -1.97656 H 24.011719 Z M 0,18.75781 h 0.98828125 v -1.97656 H 0 Z m 24.011719,2.6875 H 25 V 19.4707 H 24.011719 Z M 0,21.7207 h 0.98828125 v -1.97461 H 0 Z m 24.011719,2.68946 H 25 v -1.97657 H 24.011719 Z M 0,24.68555 h 0.98828125 v -1.97657 H 0 Z m 1.2753906,0.69922 h 1.9765625 v -0.98829 H 1.2753906 Z m 2.9648438,0 h 1.9765625 v -0.98829 H 4.2402344 Z m 2.9628906,0 h 1.9765625 v -0.98829 H 7.203125 Z m 2.964844,0 h 1.976562 v -0.98829 h -1.976562 z m 2.96289,0 h 1.976563 v -0.98829 h -1.976563 z m 2.964844,0 h 1.976563 v -0.98829 h -1.976563 z m 2.962891,0 h 1.976562 v -0.98829 h -1.976562 z m 2.964844,0 H 24 v -0.98829 h -1.976562 z"/>\
                                <path d="m 0,10.38477 v 1.02343 13.97657 h 15 v -15 z m 2.0449219,2.04492 H 12.955078 V 23.3418 H 2.0449219 Z"/>\
                                <g>\
                                    <path d="m 22.251953,18.26172 h 0.179688 l -0.0039,-0.5 h -0.179687 z m -1.003906,-0.49024 0.0039,0.5 0.5,-0.004 -0.0039,-0.5 z m -1,0.008 0.0039,0.5 0.5,-0.004 -0.0039,-0.5 z m -1,0.01 0.0039,0.5 0.5,-0.006 -0.0039,-0.5 z m -1,0.008 0.0039,0.5 0.5,-0.004 -0.0039,-0.5 z m -1,0.008 0.0039,0.5 0.5,-0.004 -0.0039,-0.5 z m -1,0.01 0.0039,0.5 0.5,-0.004 -0.0039,-0.5 z m -1,0.008 0.0039,0.5 0.5,-0.004 -0.0039,-0.5 z"/>\
                                    <path d="m 23.885095,18.00809 -2.030696,1.17348 -0.02037,-2.31243 z"/>\
                                </g>\
                            </g>\
                        </svg>\
                    </div>\
                </div>\
            </div>\
        </div>\
    </div>';

/**
 * 用于编辑对象变换的工具
 * @alias TransformEditor
 * @ionsdk
 * @constructor
 *
 * @param {Object} options 具有以下属性的对象
 * @param {Element} options.container
 * @param {Scene} options.scene 场景
 * @param {Matrix4} options.transform 需要定位的图元初始变换
 * @param {BoundingSphere} options.boundingSphere 需要定位的图元的包围球
 */
function TransformEditor(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.container", options.container);
  Cesium.Check.defined("options.scene", options.scene);
  Cesium.Check.defined("options.transform", options.transform);
  Cesium.Check.defined("options.boundingSphere", options.boundingSphere);
  //>>includeEnd('debug');

  var container = getElement(options.container);

  var element = createDomNode(html);
  container.appendChild(element);

  var viewModel = new TransformEditorViewModel(options);

  Cesium.knockout.applyBindings(viewModel, element);

  this._viewModel = viewModel;
  this._element = element;
  this._container = container;
}

Object.defineProperties(TransformEditor.prototype, {
  /**
   * Gets the parent container.
   * @memberof TransformEditor.prototype
   * @type {Element}
   * @readonly
   */
  container: {
    get: function get() {
      return this._container;
    }
  },

  /**
   * Gets the view model.
   * @memberof TransformEditor.prototype
   * @type {TransformEditorViewModel}
   * @readonly
   */
  viewModel: {
    get: function get() {
      return this._viewModel;
    }
  }
});

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
TransformEditor.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.  Should be called if permanently
 * removing the widget from layout.
 */
TransformEditor.prototype.destroy = function () {
  Cesium.knockout.cleanNode(this._element);
  this._container.removeChild(this._element);
  this._viewModel.destroy();

  return Cesium.destroyObject(this);
};

/**
 * 定义测量的抽象类。
 * @alias 测量
 * @ionsdk
 *
 * @param {Object} options 具有以下属性的对象：
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PrimitiveCollection} options.primitives 存储测量基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PointPrimitiveCollection} options.points 添加点的集合
 *
 * @constructor
 */
function Measurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  Cesium.Check.defined("options.units", options.units);
  Cesium.Check.defined("options.points", options.points);
  Cesium.Check.defined("options.labels", options.labels);
  Cesium.Check.defined("options.primitives", options.primitives);
  //>>includeEnd('debug');

  this._labelCollection = options.labels;
  this._pointCollection = options.points;
  this._primitives = options.primitives;
  this._selectedUnits = options.units;
  this._selectedLocale = options.locale;
  this._scene = options.scene;
}

Object.defineProperties(Measurement.prototype, {
  /**
   * Gets the icon.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  icon: {
    value: ""
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: ""
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  type: {
    value: ""
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: []
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  id: {
    value: ""
  }
});

/**
 * Handles double click events while performing a measurement.
 */
Measurement.prototype.handleDoubleClick = function () {};

/**
 * Handles click events while performing a measurement.
 * @param {Cartesian2} clickPosition The click position
 */
Measurement.prototype.handleClick = function (clickPosition) {};

/**
 * Handles mouse move events while performing a measurement.
 * @param {Cartesian2} mousePosition The mouse position
 */
Measurement.prototype.handleMouseMove = function (mousePosition) {};

/**
 * Handles left down mouse events while performing a measurement.
 * @param {Cartesian2} mousePosition The mouse position
 */
Measurement.prototype.handleLeftDown = function (mousePosition) {};

/**
 * Handles left up mouse events while performing a measurement.
 * @param {Cartesian2} mousePosition The mouse position
 */
Measurement.prototype.handleLeftUp = function (mousePosition) {};

/**
 * Resets the widget.
 */
Measurement.prototype.reset = Cesium.DeveloperError.throwInstantiationError;

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
Measurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.
 */
Measurement.prototype.destroy = Cesium.DeveloperError.throwInstantiationError;

/**
 * @private
 * @ionsdk
 */
var DrawingMode = {
  BeforeDraw: 0,
  Drawing: 1,
  AfterDraw: 2
};
var DrawingMode$1 = Object.freeze(DrawingMode);

/**
 * @private
 * @ionsdk
 */
function PolygonPrimitive(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

  this.show = Cesium.defaultValue(options.show, true);
  var color = Cesium.Color.clone(
    Cesium.defaultValue(options.color, Cesium.Color.WHITE)
  );
  this._id = Cesium.createGuid();
  this._color = color;
  this._depthFailColor = color;
  this._positions = [];

  this._boundingSphere = new Cesium.BoundingSphere();
  this._primitive = undefined;
  this._update = true;
}

Object.defineProperties(PolygonPrimitive.prototype, {
  positions: {
    get: function get() {
      return this._positions;
    },
    set: function set(positions) {
      this._positions = positions;
      this._update = true;
    }
  },
  color: {
    get: function get() {
      return this._color;
    }
  },
  boundingVolume: {
    get: function get() {
      return this._boundingSphere;
    }
  }
});

PolygonPrimitive.prototype.update = function (frameState) {
  if (!this.show) {
    return;
  }

  var positions = this._positions;
  if (positions.length < 3) {
    this._primitive = this._primitive && this._primitive.destroy();
    return;
  }

  if (this._update) {
    this._update = false;

    this._primitive = this._primitive && this._primitive.destroy();
    var geometry = Cesium.CoplanarPolygonGeometry.fromPositions({
      positions: positions,
      vertexFormat: Cesium.PerInstanceColorAppearance.FLAT_VERTEX_FORMAT
    });
    this._primitive = new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: geometry,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(this._color),
          depthFailColor: Cesium.ColorGeometryInstanceAttribute.fromColor(
            this._depthFailColor
          )
        },
        id: this._id
      }),
      appearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        closed: false,
        translucent: this._color.alpha < 1.0
      }),
      depthFailAppearance: new Cesium.PerInstanceColorAppearance({
        flat: true,
        closed: false,
        translucent: this._depthFailColor.alpha < 1.0
      }),
      allowPicking: false,
      asynchronous: false
    });
    this._boundingSphere = Cesium.BoundingSphere.fromPoints(
      positions,
      this._boundingSphere
    );
  }

  this._primitive.update(frameState);
};

PolygonPrimitive.prototype.isDestroyed = function () {
  return false;
};

PolygonPrimitive.prototype.destroy = function () {
  this._primitive = this._primitive && this._primitive.destroy();
  return Cesium.destroyObject(this);
};

/**
 * @private
 * @ionsdk
 */
function PolylinePrimitive(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

  this.show = Cesium.defaultValue(options.show, true);

  this._ellipsoid = Cesium.defaultValue(
    options.ellipsoid,
    Cesium.Ellipsoid.WGS84
  );
  this._width = Cesium.defaultValue(options.width, 3);
  this._color = Cesium.Color.clone(
    Cesium.defaultValue(options.color, Cesium.Color.WHITE)
  );
  this._id = Cesium.createGuid();
  this._positions = Cesium.defaultValue(options.positions, []);
  this._primitive = undefined;
  this._boundingSphere = new Cesium.BoundingSphere();
  this._dashed = Cesium.defaultValue(options.dashed, false);
  this._loop = Cesium.defaultValue(options.loop, false);

  this._update = true;
}

Object.defineProperties(PolylinePrimitive.prototype, {
  positions: {
    get: function get() {
      return this._positions;
    },
    set: function set(positions) {
      this._positions = positions;
      this._update = true;
    }
  },
  color: {
    get: function get() {
      return this._color;
    }
  },
  boundingVolume: {
    get: function get() {
      return this._boundingSphere;
    }
  },
  width: {
    get: function get() {
      return this._width;
    }
  },
  ellipsoid: {
    get: function get() {
      return this._ellipsoid;
    }
  },
  dashed: {
    get: function get() {
      return this._dashed;
    }
  },
  loop: {
    get: function get() {
      return this._loop;
    }
  }
});

PolylinePrimitive.prototype.update = function (frameState) {
  if (!this.show) {
    return;
  }

  var positions = this._positions;
  if (!Cesium.defined(positions) || positions.length < 2) {
    this._primitive = this._primitive && this._primitive.destroy();
    return;
  }

  if (this._update) {
    this._update = false;
    this._id = this.id;

    this._primitive = this._primitive && this._primitive.destroy();
    if (this._loop) {
      positions = positions.slice();
      positions.push(positions[0]);
    }
    var geometry = new Cesium.PolylineGeometry({
      positions: positions,
      width: this.width,
      vertexFormat: Cesium.PolylineMaterialAppearance.VERTEX_FORMAT,
      ellipsoid: this._ellipsoid,
      arcType: Cesium.ArcType.NONE
    });

    var appearance1;
    if (this._dashed) {
      appearance1 = new Cesium.PolylineMaterialAppearance({
        material: Cesium.Material.fromType(Cesium.Material.PolylineDashType, {
          color: this._color
        })
      });
    } else {
      appearance1 = new Cesium.PolylineColorAppearance();
    }

    this._primitive = new Cesium.Primitive({
      geometryInstances: new Cesium.GeometryInstance({
        geometry: geometry,
        attributes: {
          color: Cesium.ColorGeometryInstanceAttribute.fromColor(this._color),
          depthFailColor: Cesium.ColorGeometryInstanceAttribute.fromColor(
            this._color
          )
        },
        id: this.id
      }),
      appearance: appearance1,
      depthFailAppearance: appearance1,
      asynchronous: false,
      allowPicking: false
    });
    this._boundingSphere = Cesium.BoundingSphere.fromPoints(
      positions,
      this._boundingSphere
    );
  }

  this._primitive.update(frameState);
};

PolylinePrimitive.prototype.isDestroyed = function () {
  return false;
};

PolylinePrimitive.prototype.destroy = function () {
  this._primitive = this._primitive && this._primitive.destroy();
  return Cesium.destroyObject(this);
};

function VisibilityState() {
  this.states = new Cesium.ManagedArray();
  this.count = 0;
}

VisibilityState.prototype.hidePrimitiveCollection = function (
  primitiveCollection
) {
  var primitivesLength = primitiveCollection.length;
  for (var i = 0; i < primitivesLength; ++i) {
    var primitive = primitiveCollection.get(i);
    if (primitive instanceof Cesium.PrimitiveCollection) {
      this.hidePrimitiveCollection(primitive);
      continue;
    }

    this.states.push(primitive.show);

    if (
      primitive instanceof Cesium.Cesium3DTileset ||
      primitive instanceof Cesium.Model
    ) {
      continue;
    }
    primitive.show = false;
  }
};

VisibilityState.prototype.restorePrimitiveCollection = function (
  primitiveCollection
) {
  var primitivesLength = primitiveCollection.length;
  for (var i = 0; i < primitivesLength; ++i) {
    var primitive = primitiveCollection.get(i);
    if (primitive instanceof Cesium.PrimitiveCollection) {
      this.restorePrimitiveCollection(primitive);
      continue;
    }

    primitive.show = this.states.get(this.count++);
  }
};

VisibilityState.prototype.hide = function (scene) {
  this.states.length = 0;

  this.hidePrimitiveCollection(scene.primitives);
  this.hidePrimitiveCollection(scene.groundPrimitives);
};

VisibilityState.prototype.restore = function (scene) {
  this.count = 0;

  this.restorePrimitiveCollection(scene.primitives);
  this.restorePrimitiveCollection(scene.groundPrimitives);
};

var cartesianScratch = new Cesium.Cartesian3();
var rayScratch$3 = new Cesium.Ray();
var visibilityState = new VisibilityState();

/**
 * Computes the world position on either the terrain or tileset from a mouse position.
 *
 * @param {Scene} scene The scene
 * @ionsdk
 * @param {Cartesian2} mousePosition The mouse position
 * @param {Cartesian3} result The result position
 * @returns {Cartesian3} The position in world space
 */
function getWorldPosition(scene, mousePosition, result) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("scene", scene);
  Cesium.Check.defined("mousePosition", mousePosition);
  Cesium.Check.defined("result", result);
  //>>includeEnd('debug');
  var position;
  if (scene.pickPositionSupported) {
    // Hide every primitive that isn't a tileset
    visibilityState.hide(scene);

    // Don't pick default 3x3, or scene.pick may allow a mousePosition that isn't on the tileset to pickPosition.
    var pickedObject = scene.pick(mousePosition, 1, 1);

    visibilityState.restore(scene);

    if (
      Cesium.defined(pickedObject) &&
      (pickedObject instanceof Cesium.Cesium3DTileFeature ||
        pickedObject.primitive instanceof Cesium.Cesium3DTileset ||
        pickedObject.primitive instanceof Cesium.Model)
    ) {
      // check to let us know if we should pick against the globe instead
      position = scene.pickPosition(mousePosition, cartesianScratch);

      if (Cesium.defined(position)) {
        return Cesium.Cartesian3.clone(position, result);
      }
    }
  }

  if (!Cesium.defined(scene.globe)) {
    return;
  }

  var ray = scene.camera.getPickRay(mousePosition, rayScratch$3);
  position = scene.globe.pick(ray, scene, cartesianScratch);

  if (Cesium.defined(position)) {
    return Cesium.Cartesian3.clone(position, result);
  }
}

var clickDistanceScratch = new Cesium.Cartesian2();
var cart3Scratch = new Cesium.Cartesian3();

var mouseDelta = 10;

/**
 * @private
 * @ionsdk
 */
function PolygonDrawing(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  //>>includeEnd('debug');

  var scene = options.scene;
  var primitives = Cesium.defaultValue(options.primitives, scene.primitives);
  var removePoints = false;
  var points = options.points;
  if (!Cesium.defined(points)) {
    points = primitives.add(new Cesium.PointPrimitiveCollection());
    removePoints = true;
  }

  this._polygon = primitives.add(new PolygonPrimitive(options.polygonOptions));
  this._polyline = primitives.add(
    new PolylinePrimitive(
      Cesium.combine(
        {
          loop: true
        },
        options.polylineOptions
      )
    )
  );
  this._pointOptions = options.pointOptions;
  this._pointCollection = points;
  this._removePoints = removePoints;
  this._scene = scene;
  this._primitives = primitives;
  this._positions = [];
  this._points = [];
  this._tempNextPos = new Cesium.Cartesian3();
  this._mode = DrawingMode$1.BeforeDraw;
  this._lastClickPosition = new Cesium.Cartesian2(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
}

/**
 * Adds a point to the polygon.
 * @param {Cartesian3} position The position to add
 * @private
 */
PolygonDrawing.prototype.addPoint = function (position) {
  var positions = this._positions;
  positions.push(position);
  this._polyline.positions = positions;
  this._polygon.positions = positions;
  var point = this._pointCollection.add(this._pointOptions);
  point.position = position;
  point.show = true;
  this._points.push(point);
};

/**
 * Ends drawing on double click.
 */
PolygonDrawing.prototype.handleDoubleClick = function () {
  // expect point to be added by handleClick
  this._mode = DrawingMode$1.AfterDraw;

  // Sometimes a move event is fired between the ending
  // click and doubleClick events, so make sure the polyline
  // and polygon have the correct positions.
  var positions = this._positions;
  this._polyline.positions = positions;
  this._polygon.positions = positions;
};

/**
 * Handles click events while drawing a polygon.
 * @param {Cartesian2} clickPosition The click position
 */
PolygonDrawing.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  if (this._mode === DrawingMode$1.AfterDraw) {
    return;
  }

  // Don't handle if clickPos is too close to previous click.
  // This typically indicates a double click handler will be fired next,
  // we don't expect the user to wait and click this point again.
  var lastClickPos = this._lastClickPosition;
  var distance = Cesium.Cartesian2.magnitude(
    Cesium.Cartesian2.subtract(
      lastClickPos,
      clickPosition,
      clickDistanceScratch
    )
  );
  if (distance < mouseDelta) {
    return;
  }

  var position = PolygonDrawing._getWorldPosition(
    this._scene,
    clickPosition,
    cart3Scratch
  );
  if (!Cesium.defined(position)) {
    return;
  }

  this.addPoint(Cesium.Cartesian3.clone(position, new Cesium.Cartesian3()));
  this._mode = DrawingMode$1.Drawing;

  Cesium.Cartesian2.clone(clickPosition, lastClickPos);

  return position;
};

/**
 * Handles mouse move events while drawing a polygon.
 * @param {Cartesian2} mousePosition The mouse position
 */
PolygonDrawing.prototype.handleMouseMove = function (mousePosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  //>>includeEnd('debug');

  if (this._mode !== DrawingMode$1.Drawing) {
    return;
  }
  var scene = this._scene;
  var nextPos = PolygonDrawing._getWorldPosition(
    scene,
    mousePosition,
    cart3Scratch
  );
  if (!Cesium.defined(nextPos)) {
    return;
  }
  var positions = this._positions.slice();
  positions.push(Cesium.Cartesian3.clone(nextPos, this._tempNextPos));
  this._polyline.positions = positions;
  this._polygon.positions = positions;

  return nextPos;
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
PolygonDrawing.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.
 */
PolygonDrawing.prototype.destroy = function () {
  var primitives = this._primitives;
  if (this._removePoints) {
    primitives.remove(this._points);
  } else {
    var points = this._points;
    var pointCollection = this._pointCollection;
    for (var i = 0; i < points.length; i++) {
      pointCollection.remove(points[i]);
    }
  }

  primitives.remove(this._polygon);
  primitives.remove(this._polyline);

  return Cesium.destroyObject(this);
};

// Exposed for specs
PolygonDrawing._getWorldPosition = getWorldPosition;

var defaultLabelPixelOffset = new Cesium.Cartesian2(0, -9);

/**
 * 包含用于配置测量小部件基元样式的选项。
 *
 * @exports 测量设置
 * @ionsdk
 */
var MeasurementSettings = {};

/**
 * Gets and sets the color used for the measurement primitives.
 * @type {Color}
 * @default Color.YELLOW
 */
MeasurementSettings.color = Cesium.Color.YELLOW;

/**
 * Gets and sets the font used for the measurement labels.
 * @type {string}
 * @default '24px sans-serif'
 */
MeasurementSettings.labelFont = "16px Lucida Console";

/**
 * Gets and sets the color used for the measurement labels.
 * @type {Color}
 * @default Color.WHITE
 */
MeasurementSettings.textColor = Cesium.Color.WHITE;

/**
 * Gets and sets the background color used for the measurement labels.
 * @type {Color}
 * @default Cesium.Color(0.165, 0.165, 0.165, 0.8);
 */
MeasurementSettings.backgroundColor = new Cesium.Color(
  0.165,
  0.165,
  0.165,
  0.8
);

/**
 * Gets and sets the background the horizontal and vertical background padding in pixels.
 * @type {Cartesian2}
 * @default Cesium.Cartesian2(7, 5);
 */
MeasurementSettings.backgroundPadding = new Cesium.Cartesian2(7, 5);

/**
 * @private
 */
MeasurementSettings.getPolylineOptions = function (options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  return {
    show: options.show,
    ellipsoid: options.ellipsoid,
    width: Cesium.defaultValue(options.width, 3),
    color: Cesium.defaultValue(options.color, MeasurementSettings.color),
    depthFailColor: Cesium.defaultValue(
      Cesium.defaultValue(options.depthFailColor, options.color),
      MeasurementSettings.color
    ),
    id: options.id,
    positions: options.positions,
    materialType: options.materialType,
    depthFailMaterialType: options.depthFailMaterialType,
    loop: options.loop,
    clampToGround: options.clampToGround,
    classificationType: options.classificationType,
    allowPicking: Cesium.defaultValue(options.allowPicking, false)
  };
};

/**
 * @private
 */
MeasurementSettings.getPolygonOptions = function (options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  return {
    show: options.show,
    ellipsoid: options.ellipsoid,
    color: Cesium.defaultValue(options.color, MeasurementSettings.color),
    depthFailColor: Cesium.defaultValue(
      Cesium.defaultValue(options.depthFailColor, options.color),
      MeasurementSettings.color
    ),
    id: options.id,
    positions: options.positions,
    clampToGround: options.clampToGround,
    classificationType: options.classificationType,
    allowPicking: Cesium.defaultValue(options.allowPicking, false)
  };
};

/**
 * @private
 */
MeasurementSettings.getPointOptions = function () {
  return {
    pixelSize: 10,
    color: MeasurementSettings.color,
    position: new Cesium.Cartesian3(),
    disableDepthTestDistance: Number.POSITIVE_INFINITY, // for draw-over
    show: false
  };
};

/**
 * @private
 */
MeasurementSettings.getLabelOptions = function (options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  return {
    show: false,
    font: MeasurementSettings.labelFont,
    scale: Cesium.defaultValue(options.scale, 1.0),
    fillColor: Cesium.defaultValue(
      options.fillColor,
      MeasurementSettings.textColor
    ),
    showBackground: true,
    backgroundColor: Cesium.defaultValue(
      options.backgroundColor,
      MeasurementSettings.backgroundColor
    ),
    backgroundPadding: Cesium.defaultValue(
      options.backgroundPadding,
      MeasurementSettings.backgroundPadding
    ),
    horizontalOrigin: Cesium.defaultValue(
      options.horizontalOrigin,
      Cesium.HorizontalOrigin.CENTER
    ),
    verticalOrigin: Cesium.defaultValue(
      options.verticalOrigin,
      Cesium.VerticalOrigin.BOTTOM
    ),
    pixelOffset: Cesium.defined(options.pixelOffset)
      ? options.pixelOffset
      : Cesium.Cartesian2.clone(defaultLabelPixelOffset),
    disableDepthTestDistance: Number.POSITIVE_INFINITY, // for draw-over
    position: new Cesium.Cartesian3()
  };
};

var cart2Scratch1 = new Cesium.Cartesian2();
var cart2Scratch2 = new Cesium.Cartesian2();

var p0Scratch = new Cesium.Cartesian3();
var p1Scratch = new Cesium.Cartesian3();
var p2Scratch = new Cesium.Cartesian3();
var v0Scratch = new Cesium.Cartesian3();
var v1Scratch = new Cesium.Cartesian3();

function triangleArea(p0, p1, p2) {
  var v0 = Cesium.Cartesian3.subtract(p0, p1, v0Scratch);
  var v1 = Cesium.Cartesian3.subtract(p2, p1, v1Scratch);
  var cross = Cesium.Cartesian3.cross(v0, v1, v0);
  return Cesium.Cartesian3.magnitude(cross) * 0.5;
}

/**
 * @private
 * @ionsdk
 */
function AreaMeasurementDrawing(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  Cesium.Check.defined("options.primitives", options.primitives);
  Cesium.Check.defined("options.units", options.units);
  Cesium.Check.defined("options.points", options.points);
  Cesium.Check.defined("options.labels", options.labels);
  //>>includeEnd('debug');

  options.polylineOptions = MeasurementSettings.getPolylineOptions({
    ellipsoid: options.ellipsoid
  });
  options.pointOptions = MeasurementSettings.getPointOptions();
  options.polygonOptions = {
    color: MeasurementSettings.color.withAlpha(0.8)
  };
  PolygonDrawing.call(this, options);

  var labels = options.labels;
  this._labelCollection = labels;
  this._label = labels.add(MeasurementSettings.getLabelOptions());
  this._selectedUnits = options.units;
  this._selectedLocale = options.locale;
  this._area = 0;

  var that = this;
  this._removeEvent = this._scene.preRender.addEventListener(function () {
    that.updateLabel();
  });
}

AreaMeasurementDrawing.prototype = Object.create(PolygonDrawing.prototype);
AreaMeasurementDrawing.prototype.constructor = AreaMeasurementDrawing;

Object.defineProperties(AreaMeasurementDrawing.prototype, {
  /**
   * Gets the area value in meters squared
   * @type {Number}
   * @memberof AreaMeasurementDrawing.prototype
   * @readonly
   */
  area: {
    get: function get() {
      return this._area;
    }
  }
});

/**
 * Computes the area of the polygon.
 * @param {Cartesian3[]} positions An array of positions
 * @private
 */
AreaMeasurementDrawing.prototype.updateArea = function (positions) {
  var geometry = Cesium.CoplanarPolygonGeometry.createGeometry(
    Cesium.CoplanarPolygonGeometry.fromPositions({
      positions: positions,
      vertexFormat: Cesium.VertexFormat.POSITION_ONLY
    })
  );
  if (!Cesium.defined(geometry)) {
    this._label.text = "";
    return;
  }

  var flatPositions = geometry.attributes.position.values;
  var indices = geometry.indices;

  var area = 0;
  for (var i = 0; i < indices.length; i += 3) {
    var i0 = indices[i];
    var i1 = indices[i + 1];
    var i2 = indices[i + 2];

    var p0 = Cesium.Cartesian3.unpack(flatPositions, i0 * 3, p0Scratch);
    var p1 = Cesium.Cartesian3.unpack(flatPositions, i1 * 3, p1Scratch);
    var p2 = Cesium.Cartesian3.unpack(flatPositions, i2 * 3, p2Scratch);
    area += triangleArea(p0, p1, p2);
  }

  this._area = area;
  this._label.text = MeasureUnits.areaToString(
    area,
    this._selectedUnits.areaUnits,
    this._selectedLocale
  );
};

/**
 * Updates the label position.
 * @private
 */
AreaMeasurementDrawing.prototype.updateLabel = function () {
  var positions = this._positions;
  if (positions.length < 2) {
    return;
  }
  var scene = this._scene;
  var top = positions[0];
  var pos2d = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    top,
    cart2Scratch1
  );
  var lastY = Cesium.defined(pos2d) ? pos2d.y : Number.POSITIVE_INFINITY;
  for (var i = 1; i < positions.length; i++) {
    var nextScreenPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      scene,
      positions[i],
      cart2Scratch2
    );
    if (!Cesium.defined(nextScreenPos)) {
      continue;
    }
    if (nextScreenPos.y < lastY) {
      lastY = nextScreenPos.y;
      top = positions[i];
    }
  }
  this._label.position = top;
};

/**
 * Adds a point to the polygon.
 * @param {Cartesian3} position The position to add
 * @private
 */
AreaMeasurementDrawing.prototype.addPoint = function (position) {
  PolygonDrawing.prototype.addPoint.call(this, position);
  this.updateArea(this._positions);
};

/**
 * Handles click events while drawing a polygon.
 * @param {Cartesian2} clickPosition The click position
 */
AreaMeasurementDrawing.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  if (this._mode === DrawingMode$1.AfterDraw) {
    this.reset();
  }

  var position = PolygonDrawing.prototype.handleClick.call(this, clickPosition);
  if (Cesium.defined(position)) {
    this._label.show = true;
    this._polygon.show = true;
    this._polyline.show = true;
  }
};

/**
 * Handles mouse move events while drawing a polygon.
 * @param {Cartesian2} mousePosition The mouse position
 */
AreaMeasurementDrawing.prototype.handleMouseMove = function (mousePosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  //>>includeEnd('debug');

  var nextPos = PolygonDrawing.prototype.handleMouseMove.call(
    this,
    mousePosition
  );
  if (!Cesium.defined(nextPos)) {
    return;
  }
  var positions = this._positions.slice();
  positions.push(nextPos);
  this.updateArea(positions);
};

/**
 * Resets the widget.
 */
AreaMeasurementDrawing.prototype.reset = function () {
  this._label.show = false;
  this._label.text = "";
  this._positions = [];
  this._polyline.positions = [];
  this._polygon.positions = [];
  this._polyline.show = false;
  this._polygon.show = false;
  this._area = 0;
  var points = this._points;
  var pointCollection = this._pointCollection;
  for (var i = 0; i < points.length; i++) {
    pointCollection.remove(points[i]);
  }
  points.length = 0;

  this._mode = DrawingMode$1.BeforeDraw;
  this._lastClickPosition.x = Number.POSITIVE_INFINITY;
  this._lastClickPosition.y = Number.POSITIVE_INFINITY;
};

/**
 * Destroys the widget.
 */
AreaMeasurementDrawing.prototype.destroy = function () {
  this._removeEvent();
  this._labelCollection.remove(this._label);

  PolygonDrawing.prototype.destroy.call(this);
};

function getIcon(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                 <g transform="translate(0,-267)">\n\
                   <circle r="2.0788691" cy="293.99896" cx="3.8532958"/>\n\
                   <circle r="2.0788691" cy="282.76791" cx="26.927404"/>\n\
                   <circle r="2.0788691" cy="270.20621" cx="4.0090437"/>\n\
                   <path d="m 26.326048,283.77014 -9.394396,5.02295 -9.3943948,5.02295 0.3471933,-10.64726 0.3471933,-10.64726 9.0472022,5.62431 z" transform="matrix(1.1625734,0,0,0.99297729,-4.6787891,1.2180486)"/>\n\
                 </g>\n\
               </svg>'
  );
}

/**
 * 创建多边形面积测量。
 * @alias AreaMeasurement
 * @ionsdk
 *
 * @param {Object} options 具有以下属性的对象：
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PrimitiveCollection} options.primitives 存储测量基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PointPrimitiveCollection} options.points 添加点的集合
 *
 * @constuctor
 */
function AreaMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  this._drawing = new AreaMeasurementDrawing(options);
}

AreaMeasurement.prototype = Object.create(Measurement.prototype);
AreaMeasurement.prototype.constructor = AreaMeasurement;

Object.defineProperties(AreaMeasurement.prototype, {
  /**
   * Gets the area value in meters squared
   * @type {Number}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  area: {
    get: function get() {
      return this._drawing.area;
    }
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  icon: {
    value: getIcon(15)
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: getIcon(25)
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  type: {
    value: "Area"
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Click to start drawing a polygon",
      "Keep clicking to add more points",
      "Double click to finish drawing"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  id: {
    value: "areaMeasurement"
  }
});

/**
 * Ends drawing on double click.
 */
AreaMeasurement.prototype.handleDoubleClick = function () {
  this._drawing.handleDoubleClick();
};

/**
 * Handles click events while drawing a polygon.
 * @param {Cartesian2} clickPosition The click position
 */
AreaMeasurement.prototype.handleClick = function (clickPosition) {
  this._drawing.handleClick(clickPosition);
};

/**
 * Handles mouse move events while drawing a polygon.
 * @param {Cartesian2} mousePosition The mouse position
 */
AreaMeasurement.prototype.handleMouseMove = function (mousePosition) {
  this._drawing.handleMouseMove(mousePosition);
};

/**
 * Resets the widget.
 */
AreaMeasurement.prototype.reset = function () {
  this._drawing.reset();
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
AreaMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.
 */
AreaMeasurement.prototype.destroy = function () {
  this._drawing.destroy();

  return Cesium.destroyObject(this);
};

var Mode = {
  BeforeDraw: 0,
  Drawing: 1,
  AfterDraw: 2
};

var cart2Scratch1$1 = new Cesium.Cartesian2();
var cart2Scratch2$1 = new Cesium.Cartesian2();
var scratchCarto = new Cesium.Cartographic();

var cart3Scratch1 = new Cesium.Cartesian3();
var cart3Scratch2 = new Cesium.Cartesian3();
var cart3Scratch3 = new Cesium.Cartesian3();

function getIcon$1(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                 <g transform="translate(0,-267)">\n\
                  <path d="m 4.934989,292.6549 20.67981,-20.80395"/>\n\
                   <circle r="2.0788691" cy="270.1637" cx="27.025297"/>\n\
                   <circle r="2.0788691" cy="294.07068" cx="3.1183045"/>\n\
                 </g>\n\
               </svg>\n'
  );
}

function getComponentIcon(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                 <g transform="translate(0,-267)">\n\
                   <path d="m 4.934989,292.6549 20.67981,-20.80395" />\n\
                   <circle r="2.0788691" cy="270.1637" cx="27.025297" />\n\
                   <circle r="2.0788691" cy="294.07068" cx="3.1183045" />\n\
                   <path style="stroke-dasharray:2.00314951, 1.00157475;stroke-dashoffset:0;" d="m 3.3194019,292.73274 -0.046996,-22.53109 21.6420984,-0.0266" />\n\
                 </g>\n\
               </svg>\n'
  );
}

/**
 * 在两点之间绘制测量值。
 *
 * @param {Object} options 具有以下属性的对象：
 * @ionsdk
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PointPrimitiveCollection} options.points 用于添加点基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PrimitiveCollection} options.primitives 用于添加图元的集合
 * @param {Boolean} [options.showComponentLines=] 是否显示x和y分量线
 *
 * @constructor
 * @alias DistanceMeasurement
 */
function DistanceMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  var that = this;
  var pointCollection = this._pointCollection;
  var labelCollection = this._labelCollection;
  var primitives = this._primitives;
  var scene = this._scene;

  var positions = [new Cesium.Cartesian3(), new Cesium.Cartesian3()];
  var xyPolylinePositions = [
    new Cesium.Cartesian3(),
    new Cesium.Cartesian3(),
    new Cesium.Cartesian3()
  ];
  var xyBoxPositions = [
    new Cesium.Cartesian3(),
    new Cesium.Cartesian3(),
    new Cesium.Cartesian3()
  ];

  var yPixelOffset = new Cesium.Cartesian2(-9, 0);
  var xPixelOffset = new Cesium.Cartesian2(9, 0);

  var ellipsoid = scene.frameState.mapProjection.ellipsoid;

  this._startPoint = pointCollection.add(MeasurementSettings.getPointOptions());
  this._endPoint = pointCollection.add(MeasurementSettings.getPointOptions());

  this._positions = positions;
  this._polyline = primitives.add(
    new PolylinePrimitive(
      MeasurementSettings.getPolylineOptions({
        ellipsoid: ellipsoid,
        width: 3,
        show: false,
        positions: positions
      })
    )
  );

  this._xyPolylinePositions = xyPolylinePositions;
  this._xyPolyline = primitives.add(
    new PolylinePrimitive(
      MeasurementSettings.getPolylineOptions({
        ellipsoid: ellipsoid,
        width: 2,
        positions: xyPolylinePositions,
        materialType: Cesium.Material.PolylineDashType
      })
    )
  );

  this._xyBoxPositions = xyBoxPositions;
  this._xyBox = primitives.add(
    new PolylinePrimitive(
      MeasurementSettings.getPolylineOptions({
        ellipsoid: ellipsoid,
        width: 1,
        positions: xyBoxPositions
      })
    )
  );

  this._label = labelCollection.add(
    MeasurementSettings.getLabelOptions({
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      pixelOffset: new Cesium.Cartesian2(10, 10)
    })
  );

  this._xPixelOffset = xPixelOffset;
  this._xLabel = labelCollection.add(
    MeasurementSettings.getLabelOptions({
      scale: 0.6
    })
  );
  this._xAngleLabel = labelCollection.add(
    MeasurementSettings.getLabelOptions({
      scale: 0.6,
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.MIDDLE,
      pixelOffset: xPixelOffset
    })
  );

  this._yPixelOffset = yPixelOffset;
  this._yLabel = labelCollection.add(
    MeasurementSettings.getLabelOptions({
      scale: 0.6,
      horizontalOrigin: Cesium.HorizontalOrigin.RIGHT,
      pixelOffset: yPixelOffset
    })
  );
  this._yAngleLabel = labelCollection.add(
    MeasurementSettings.getLabelOptions({
      scale: 0.6,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      pixelOffset: new Cesium.Cartesian2(0, 9)
    })
  );

  this._distance = 0;
  this._xDistance = 0;
  this._yDistance = 0;
  this._xAngle = 0;
  this._yAngle = 0;

  this._mode = Mode.BeforeDraw;
  this._showComponentLines = Cesium.defaultValue(
    options.showComponentLines,
    false
  );

  this._removeEvent = scene.preRender.addEventListener(function () {
    that._updateLabelPosition();
  });
}

DistanceMeasurement.prototype = Object.create(Measurement.prototype);
DistanceMeasurement.prototype.constructor = DistanceMeasurement;

Object.defineProperties(DistanceMeasurement.prototype, {
  /**
   * Gets the distance of the measurement in meters
   * @type {Number}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._distance;
    }
  },
  /**
   * Gets the horizontal component of distance of the measurement in meters
   * @type {Number}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  horizontalDistance: {
    get: function get() {
      return this._xDistance;
    }
  },
  /**
   * Gets the vertical component of the distance of the measurement in meters
   * @type {Number}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  verticalDistance: {
    get: function get() {
      return this._yDistance;
    }
  },
  /**
   * Gets the angle between horizontal and the distance line in radians
   * @type {Number}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  angleFromHorizontal: {
    get: function get() {
      return this._xAngle;
    }
  },
  /**
   * Gets the angle between vertical and the distance line in radians
   * @type {Number}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  angleFromVertical: {
    get: function get() {
      return this._yAngle;
    }
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  icon: {
    get: function get() {
      if (this._showComponentLines) {
        return getComponentIcon(15);
      }
      return getIcon$1(15);
    }
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    get: function get() {
      if (this._showComponentLines) {
        return getComponentIcon(25);
      }
      return getIcon$1(25);
    }
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  type: {
    get: function get() {
      if (this._showComponentLines) {
        return "Component Distance";
      }
      return "Distance";
    }
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Click on the point cloud or the globe to set the start point and end points",
      "To make a new measurement, click to clear the previous measurement"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof DistanceMeasurement.prototype
   * @readonly
   */
  id: {
    get: function get() {
      if (this._showComponentLines) {
        return "componentDistanceMeasurement";
      }
      return "distanceMeasurement";
    }
  },
  /**
   * Gets and sets whether or not to show the x and y component lines of the measurement.
   * @type {Boolean}
   * @memberof DistanceMeasurement.prototype
   * @default false
   */
  showComponentLines: {
    get: function get() {
      return this._showComponentLines;
    },
    set: function set(value) {
      this._showComponentLines = value;
      if (this._mode !== Mode.BeforeDraw) {
        this._updateComponents();
      }
    }
  }
});

/**
 * Updates the label positions.
 * @private
 */
DistanceMeasurement.prototype._updateComponents = function () {
  var show = this._showComponentLines;
  var xLabel = this._xLabel;
  var yLabel = this._yLabel;
  var xAngleLabel = this._xAngleLabel;
  var yAngleLabel = this._yAngleLabel;
  var xyPolyline = this._xyPolyline;
  var xyBox = this._xyBox;

  // always set to false first in case we can't compute the values.
  xLabel.show = false;
  yLabel.show = false;
  xAngleLabel.show = false;
  yAngleLabel.show = false;
  xyPolyline.show = false;
  xyBox.show = false;

  if (!show) {
    return;
  }

  var ellipsoid = this._scene.frameState.mapProjection.ellipsoid;

  var positions = this._positions;
  var p0 = positions[0];
  var p1 = positions[1];
  var height0 = ellipsoid.cartesianToCartographic(p0, scratchCarto).height;
  var height1 = ellipsoid.cartesianToCartographic(p1, scratchCarto).height;
  var bottomPoint;
  var topPoint;
  var topHeight;
  var bottomHeight;
  if (height0 < height1) {
    bottomPoint = p0;
    topPoint = p1;
    topHeight = height1;
    bottomHeight = height0;
  } else {
    bottomPoint = p1;
    topPoint = p0;
    topHeight = height0;
    bottomHeight = height1;
  }

  var xyPositions = this._xyPolylinePositions;
  xyPositions[0] = Cesium.Cartesian3.clone(bottomPoint, xyPositions[0]);
  xyPositions[2] = Cesium.Cartesian3.clone(topPoint, xyPositions[2]);
  var normal = ellipsoid.geodeticSurfaceNormal(bottomPoint, cart3Scratch1);
  normal = Cesium.Cartesian3.multiplyByScalar(
    normal,
    topHeight - bottomHeight,
    normal
  );
  var corner = Cesium.Cartesian3.add(bottomPoint, normal, xyPositions[1]);

  xyPolyline.positions = xyPositions;

  if (
    Cesium.Cartesian3.equalsEpsilon(corner, topPoint, Cesium.Math.EPSILON10) ||
    Cesium.Cartesian3.equalsEpsilon(corner, bottomPoint, Cesium.Math.EPSILON10)
  ) {
    return;
  }

  yLabel.show = true;
  xLabel.show = true;
  yAngleLabel.show = true;
  xAngleLabel.show = true;
  xyPolyline.show = true;
  xyBox.show = true;

  var v1 = Cesium.Cartesian3.subtract(topPoint, corner, cart3Scratch1);
  var v2 = Cesium.Cartesian3.subtract(bottomPoint, corner, cart3Scratch2);
  var mag = Math.min(
    Cesium.Cartesian3.magnitude(v1),
    Cesium.Cartesian3.magnitude(v2)
  );
  var scale = mag > 15.0 ? mag * 0.15 : mag * 0.25;
  v1 = Cesium.Cartesian3.normalize(v1, v1);
  v2 = Cesium.Cartesian3.normalize(v2, v2);
  v1 = Cesium.Cartesian3.multiplyByScalar(v1, scale, v1);
  v2 = Cesium.Cartesian3.multiplyByScalar(v2, scale, v2);

  var boxPos = this._xyBoxPositions;
  boxPos[0] = Cesium.Cartesian3.add(corner, v1, boxPos[0]);
  boxPos[1] = Cesium.Cartesian3.add(boxPos[0], v2, boxPos[1]);
  boxPos[2] = Cesium.Cartesian3.add(corner, v2, boxPos[2]);
  xyBox.positions = boxPos;

  xLabel.position = Cesium.Cartesian3.midpoint(corner, topPoint, cart3Scratch1);
  yLabel.position = Cesium.Cartesian3.midpoint(
    bottomPoint,
    corner,
    cart3Scratch1
  );
  xAngleLabel.position = Cesium.Cartesian3.clone(topPoint, cart3Scratch1);
  yAngleLabel.position = Cesium.Cartesian3.clone(bottomPoint, cart3Scratch1);

  var vx = Cesium.Cartesian3.subtract(corner, topPoint, cart3Scratch2);
  var vy = Cesium.Cartesian3.subtract(corner, bottomPoint, cart3Scratch1);
  var v = Cesium.Cartesian3.subtract(topPoint, bottomPoint, cart3Scratch3);

  var yAngle = Cesium.Cartesian3.angleBetween(vy, v);
  v = Cesium.Cartesian3.negate(v, v);
  var xAngle = Cesium.Cartesian3.angleBetween(vx, v);

  var xDistance = Cesium.Cartesian3.magnitude(vx);
  var yDistance = Cesium.Cartesian3.magnitude(vy);

  var selectedUnits = this._selectedUnits;
  var selectedLocale = this._selectedLocale;
  xLabel.text = MeasureUnits.distanceToString(
    xDistance,
    selectedUnits.distanceUnits,
    selectedLocale
  );
  yLabel.text = MeasureUnits.distanceToString(
    yDistance,
    selectedUnits.distanceUnits,
    selectedLocale
  );

  xAngleLabel.text = MeasureUnits.angleToString(
    xAngle,
    selectedUnits.slopeUnits,
    selectedLocale
  );
  yAngleLabel.text = MeasureUnits.angleToString(
    yAngle,
    selectedUnits.slopeUnits,
    selectedLocale
  );

  this._xDistance = xDistance;
  this._yDistance = yDistance;
  this._xAngle = xAngle;
  this._yAngle = yAngle;
};

/**
 * Updates the label positions.
 * @private
 */
DistanceMeasurement.prototype._updateLabelPosition = function () {
  var positions = this._positions;
  if (this._mode === Mode.BeforeDraw) {
    return;
  }
  var scene = this._scene;
  var p0 = positions[0];
  var p1 = positions[1];

  var pos0 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    p0,
    cart2Scratch1$1
  );
  var pos1 = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    p1,
    cart2Scratch2$1
  );

  if (!Cesium.defined(pos0) || !Cesium.defined(pos1)) {
    return;
  }

  var label = this._label;
  var yLabel = this._yLabel;
  var xAngleLabel = this._xAngleLabel;
  var m = (pos0.y - pos1.y) / (pos1.x - pos0.x);
  if (m > 0) {
    this._yPixelOffset.x = -9;
    this._xPixelOffset.x = 12;
    yLabel.pixelOffset = this._yPixelOffset;
    yLabel.horizontalOrigin = Cesium.HorizontalOrigin.RIGHT;
    xAngleLabel.pixelOffset = this._xPixelOffset;
    xAngleLabel.horizontalOrigin = Cesium.HorizontalOrigin.LEFT;
    label.horizontalOrigin = Cesium.HorizontalOrigin.LEFT;
  } else {
    this._yPixelOffset.x = 9;
    this._xPixelOffset.x = -12;
    yLabel.pixelOffset = this._yPixelOffset;
    yLabel.horizontalOrigin = Cesium.HorizontalOrigin.LEFT;
    xAngleLabel.pixelOffset = this._xPixelOffset;
    xAngleLabel.horizontalOrigin = Cesium.HorizontalOrigin.RIGHT;
    label.horizontalOrigin = Cesium.HorizontalOrigin.RIGHT;
  }
};

/**
 * Handles click events while drawing a distance measurement.
 * @param {Cartesian2} clickPosition The click position
 */
DistanceMeasurement.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  var scene = this._scene;
  if (this._mode === Mode.AfterDraw) {
    this.reset();
  }
  var mode = this._mode;

  var positions = this._positions;
  if (mode === Mode.BeforeDraw) {
    var pos = DistanceMeasurement._getWorldPosition(
      scene,
      clickPosition,
      positions[0]
    );
    if (!Cesium.defined(pos)) {
      return;
    }
    this._polyline.show = true;
    positions[0] = pos.clone(positions[0]);
    positions[1] = pos.clone(positions[1]);
    this._startPoint.position = pos;
    this._startPoint.show = true;
    this._mode = Mode.Drawing;
    this._polyline.positions = positions;
  } else if (mode === Mode.Drawing) {
    this._endPoint.position = positions[1];
    this._endPoint.show = true;
    this._polyline.positions = positions;
    this._mode = Mode.AfterDraw;
  }
};

/**
 * Handles mouse move events while drawing a distance measurement.
 * @param {Cartesian2} mousePosition The mouse position
 */
DistanceMeasurement.prototype.handleMouseMove = function (mousePosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  //>>includeEnd('debug');

  if (this._mode !== Mode.Drawing) {
    return;
  }

  var scene = this._scene;
  var positions = this._positions;
  var pos = DistanceMeasurement._getWorldPosition(
    scene,
    mousePosition,
    cart3Scratch1
  );

  if (!Cesium.defined(pos)) {
    return;
  }

  var pos0 = positions[0];
  var pos1 = Cesium.Cartesian3.clone(pos, positions[1]);

  var vec = Cesium.Cartesian3.subtract(pos1, pos0, cart3Scratch1);
  var distance = Cesium.Cartesian3.magnitude(vec);

  var label = this._label;
  label.position = Cesium.Cartesian3.midpoint(pos0, pos1, cart3Scratch1);
  label.text = MeasureUnits.distanceToString(
    distance,
    this._selectedUnits.distanceUnits,
    this._selectedLocale
  );
  label.show = true;

  this._distance = distance;
  this._polyline.positions = positions;

  this._updateComponents();
};

/**
 * Resets the measurement.
 */
DistanceMeasurement.prototype.reset = function () {
  this._polyline.show = false;
  this._xyPolyline.show = false;
  this._xyBox.show = false;
  this._label.show = false;
  this._xLabel.show = false;
  this._yLabel.show = false;
  this._xAngleLabel.show = false;
  this._yAngleLabel.show = false;
  this._startPoint.show = false;
  this._endPoint.show = false;
  this._mode = Mode.BeforeDraw;
  this._distance = 0;
  this._xDistance = 0;
  this._yDistance = 0;
  this._xAngle = 0;
  this._yAngle = 0;
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
DistanceMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the measurement.
 */
DistanceMeasurement.prototype.destroy = function () {
  this._removeEvent();

  var primitives = this._primitives;
  primitives.remove(this._polyline);
  primitives.remove(this._xyPolyline);
  primitives.remove(this._xyBox);

  var points = this._pointCollection;
  points.remove(this._startPoint);
  points.remove(this._endPoint);

  var labels = this._labelCollection;
  labels.remove(this._label);
  labels.remove(this._xLabel);
  labels.remove(this._yLabel);
  labels.remove(this._xAngleLabel);
  labels.remove(this._yAngleLabel);

  return Cesium.destroyObject(this);
};

// Exposed for specs
DistanceMeasurement._getWorldPosition = getWorldPosition;

var scratch = new Cesium.Cartesian3();
var scratchCarto$1 = new Cesium.Cartographic();

function getIcon$2(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
             <g transform="translate(0,-267)">\n\
               <path d="m 15.042838,272.34414 0.01712,19.60575"/>\n\
               <circle r="2.0788691" cy="270.01154" cx="15.078616"/>\n\
               <path d="m 0.64901081,296.20687 8.80039389,-6.01044 7.9375003,3.1183 12.347278,-3.34365"/>\n\
             </g>\n\
           </svg>'
  );
}

/**
 * 在选定点和该点下方的地面之间绘制测量值。
 *
 * @param {Object} options 具有以下属性的对象：
 * @ionsdk
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PointPrimitiveCollection} options.points 用于添加点基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PrimitiveCollection} options.primitives 用于添加图元的集合
 *
 * @constructor
 * @alias HeightMeasurement
 */
function HeightMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  var positions = [new Cesium.Cartesian3(), new Cesium.Cartesian3()];
  var pointCollection = this._pointCollection;

  this._startPoint = pointCollection.add(MeasurementSettings.getPointOptions());
  this._endPoint = pointCollection.add(MeasurementSettings.getPointOptions());

  this._polyline = this._primitives.add(
    new PolylinePrimitive(
      MeasurementSettings.getPolylineOptions({
        ellipsoid: this._scene.frameState.mapProjection.ellipsoid,
        positions: positions
      })
    )
  );

  this._label = this._labelCollection.add(
    MeasurementSettings.getLabelOptions({
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      pixelOffset: new Cesium.Cartesian2(10, 10)
    })
  );

  this._positions = positions;
  this._distance = 0;
}

HeightMeasurement.prototype = Object.create(Measurement.prototype);
HeightMeasurement.prototype.constructor = HeightMeasurement;

Object.defineProperties(HeightMeasurement.prototype, {
  /**
   * Gets the distance in meters
   * @type {Number}
   * @memberof HeightMeasurement.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._distance;
    }
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof HeightMeasurement.prototype
   * @readonly
   */
  icon: {
    value: getIcon$2(15)
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof HeightMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: getIcon$2(25)
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof HeightMeasurement.prototype
   * @readonly
   */
  type: {
    value: "Height from terrain"
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof HeightMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Click on the point cloud to get a distance from that point to terrain"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof HeightMeasurement.prototype
   * @readonly
   */
  id: {
    value: "heightMeasurement"
  }
});

/**
 * Handles click events while drawing a height measurement.
 * @param {Cartesian2} clickPosition The click position
 */
HeightMeasurement.prototype.handleClick = function (clickPosition) {
  var scene = this._scene;
  this.reset();

  var positions = this._positions;

  var pos0 = HeightMeasurement._getWorldPosition(
    scene,
    clickPosition,
    positions[0]
  );
  if (!Cesium.defined(pos0)) {
    return;
  }

  var globe = scene.globe;
  var ellipsoid = scene.frameState.mapProjection.ellipsoid;

  var carto = ellipsoid.cartesianToCartographic(pos0, scratchCarto$1);
  if (Cesium.defined(globe)) {
    carto.height = Cesium.defaultValue(globe.getHeight(carto), 0);
  } else {
    carto.height = 0;
  }
  var pos1 = ellipsoid.cartographicToCartesian(carto, positions[1]);

  var vec = Cesium.Cartesian3.subtract(pos1, pos0, scratch);
  var distance = Cesium.Cartesian3.magnitude(vec);

  var label = this._label;
  label.position = pos0;
  label.show = true;
  label.text = MeasureUnits.distanceToString(
    distance,
    this._selectedUnits.distanceUnits,
    this._selectedLocale
  );

  this._polyline.positions = positions;
  this._polyline.show = true;
  this._startPoint.position = pos0;
  this._startPoint.show = true;
  this._endPoint.position = pos1;
  this._endPoint.show = true;

  this._distance = distance;
};

/**
 * Resets the widget.
 */
HeightMeasurement.prototype.reset = function () {
  this._polyline.show = false;
  this._label.show = false;
  this._startPoint.show = false;
  this._endPoint.show = false;
  this._distance = 0;
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
HeightMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the measurement.
 */
HeightMeasurement.prototype.destroy = function () {
  this._primitives.remove(this._polyline);

  var points = this._pointCollection;
  points.remove(this._startPoint);
  points.remove(this._endPoint);

  this._labelCollection.remove(this._label);

  return Cesium.destroyObject(this);
};

// exposed for specs
HeightMeasurement._getWorldPosition = getWorldPosition;

var clickDistanceScratch$1 = new Cesium.Cartesian2();
var cart3Scratch$1 = new Cesium.Cartesian3();

var mouseDelta$1 = 10;

/**
 * @private
 * @ionsdk
 */
function PolylineDrawing(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  //>>includeEnd('debug');

  var scene = options.scene;
  var primitives = Cesium.defaultValue(options.primitives, scene.primitives);
  var points = options.points;
  var removePoints = false;
  if (!Cesium.defined(points)) {
    points = primitives.add(new Cesium.PointPrimitiveCollection());
    removePoints = true;
  }

  this._scene = scene;
  this._pointCollection = points;
  this._removePoints = removePoints;
  this._polyline = primitives.add(
    new PolylinePrimitive(options.polylineOptions)
  );
  this._primitives = primitives;
  this._pointOptions = options.pointOptions;
  this._positions = [];
  this._points = [];
  this._tempNextPos = new Cesium.Cartesian3();
  this._mode = DrawingMode$1.BeforeDraw;
  this._lastClickPosition = new Cesium.Cartesian2(
    Number.POSITIVE_INFINITY,
    Number.POSITIVE_INFINITY
  );
}

/**
 * Adds a point to the polyline.
 * @param {Cartesian3} position The position to add
 * @private
 */
PolylineDrawing.prototype.addPoint = function (position) {
  var positions = this._positions;
  positions.push(position);
  this._polyline.positions = positions;
  var point = this._pointCollection.add(this._pointOptions);
  point.position = position;
  point.show = true;
  this._points.push(point);
};

/**
 * Ends drawing on double click.
 */
PolylineDrawing.prototype.handleDoubleClick = function () {
  // expect point to be added by handleClick
  this._mode = DrawingMode$1.AfterDraw;

  // Sometimes a move event is fired between the ending
  // click and doubleClick events, so make sure the polyline
  // has the correct positions.
  this._polyline.positions = this._positions;
};

/**
 * Handles click events while drawing a polyline.
 * @param {Cartesian2} clickPosition The click position
 */
PolylineDrawing.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  if (this._mode === DrawingMode$1.AfterDraw) {
    return;
  }

  // Don't handle if clickPos is too close to previous click.
  // This typically indicates a double click handler will be fired next,
  // we don't expect the user to wait and click this point again.
  var lastClickPos = this._lastClickPosition;
  var distance = Cesium.Cartesian2.magnitude(
    Cesium.Cartesian2.subtract(
      lastClickPos,
      clickPosition,
      clickDistanceScratch$1
    )
  );
  if (distance < mouseDelta$1) {
    return;
  }

  var position = PolylineDrawing._getWorldPosition(
    this._scene,
    clickPosition,
    cart3Scratch$1
  );
  if (!Cesium.defined(position)) {
    return;
  }

  this.addPoint(Cesium.Cartesian3.clone(position, new Cesium.Cartesian3()));
  this._mode = DrawingMode$1.Drawing;
  Cesium.Cartesian2.clone(clickPosition, lastClickPos);
  return position;
};

/**
 * Handles mouse move events while drawing a polyline.
 * @param {Cartesian2} mousePosition The mouse position
 */
PolylineDrawing.prototype.handleMouseMove = function (mousePosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  //>>includeEnd('debug');

  if (this._mode !== DrawingMode$1.Drawing) {
    return;
  }
  var scene = this._scene;
  var nextPos = PolylineDrawing._getWorldPosition(
    scene,
    mousePosition,
    cart3Scratch$1
  );
  if (!Cesium.defined(nextPos)) {
    return;
  }
  var positions = this._positions.slice();
  positions.push(Cesium.Cartesian3.clone(nextPos, this._tempNextPos));
  this._polyline.positions = positions;
  return nextPos;
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
PolylineDrawing.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.
 */
PolylineDrawing.prototype.destroy = function () {
  if (this._removePoints) {
    this._primitives.remove(this._points);
  } else {
    var points = this._points;
    var pointCollection = this._pointCollection;
    for (var i = 0; i < points.length; i++) {
      pointCollection.remove(points[i]);
    }
  }
  this._primitives.remove(this._polyline);

  return Cesium.destroyObject(this);
};

// Exposed for specs
PolylineDrawing._getWorldPosition = getWorldPosition;

var clickDistanceScratch$2 = new Cesium.Cartesian2();
var cart3Scratch$2 = new Cesium.Cartesian3();
var cart3Scratch1$1 = new Cesium.Cartesian3();
var normalScratch = new Cesium.Cartesian3();
var rayScratch$4 = new Cesium.Ray();
var v1Scratch$1 = new Cesium.Cartesian3();
var v2Scratch = new Cesium.Cartesian3();
var cartoScratch = new Cesium.Cartographic();

var mouseDelta$2 = 10;

/**
 * @private
 * @ionsdk
 */
function HorizontalPolylineDrawing(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  //>>includeEnd('debug');
  PolylineDrawing.call(this, options);
  var polylineOptions = Cesium.defaultValue(
    options.polylineOptions,
    Cesium.defaultValue.EMPTY_OBJECT
  );

  var dashLineOptions = {
    color: polylineOptions.color,
    ellipsoid: polylineOptions.ellipsoid,
    width: 2,
    dashed: true
  };
  var moveDashLine = this._primitives.add(
    new PolylinePrimitive(dashLineOptions)
  );
  moveDashLine.positions = [new Cesium.Cartesian3(), new Cesium.Cartesian3()];
  moveDashLine.show = false;
  this._dashLineOptions = dashLineOptions;
  this._dashedLines = [];
  this._moveDashLine = moveDashLine;

  this._heightPlane = new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0);
  this._heightPlaneCV = new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0);
  this._firstMove = false;
  this._height = 0;
}

HorizontalPolylineDrawing.prototype = Object.create(PolylineDrawing.prototype);
HorizontalPolylineDrawing.prototype.constructor = HorizontalPolylineDrawing;

HorizontalPolylineDrawing.prototype._setDashLinePositions = function (
  line,
  position
) {
  var globe = this._scene.globe;
  var ellipsoid = this._scene.frameState.mapProjection.ellipsoid;

  var positions = line.positions;
  positions[0] = Cesium.Cartesian3.clone(position, positions[0]);

  var carto = ellipsoid.cartesianToCartographic(position, cartoScratch);
  if (Cesium.defined(globe)) {
    carto.height = Cesium.defaultValue(globe.getHeight(carto), 0);
  } else {
    carto.height = 0;
  }
  positions[1] = ellipsoid.cartographicToCartesian(carto, positions[1]);
  line.positions = positions;
};

/**
 * Adds a point to the polyline.
 * @param {Cartesian3} position The position to add
 * @private
 */
HorizontalPolylineDrawing.prototype.addPoint = function (position) {
  PolylineDrawing.prototype.addPoint.call(this, position);

  var dashLine = this._primitives.add(
    new PolylinePrimitive(this._dashLineOptions)
  );
  dashLine.positions = [new Cesium.Cartesian3(), new Cesium.Cartesian3()];
  this._dashedLines.push(dashLine);

  this._setDashLinePositions(dashLine, position);
};

/**
 * Ends drawing on double click.
 */
HorizontalPolylineDrawing.prototype.handleDoubleClick = function () {
  // expect point to be added by handleClick
  this._mode = DrawingMode$1.AfterDraw;

  // Sometimes a move event is fired between the ending
  // click and doubleClick events, so make sure the polyline
  // has the correct positions.
  this._polyline.positions = this._positions;
  this._moveDashLine.show = false;
};

/**
 * Handles click events while drawing a polyline.
 * @param {Cartesian2} clickPosition The click position
 */
HorizontalPolylineDrawing.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  var pos;
  if (this._positions.length === 0) {
    var scene = this._scene;
    var ellipsoid = scene.frameState.mapProjection.ellipsoid;
    pos = PolylineDrawing.prototype.handleClick.call(this, clickPosition);
    if (!Cesium.defined(pos)) {
      return;
    }
    this._heightPlane = Cesium.Plane.fromPointNormal(
      pos,
      ellipsoid.geodeticSurfaceNormal(pos, normalScratch),
      this._heightPlane
    );

    var cartoPos = ellipsoid.cartesianToCartographic(pos, cartoScratch);
    var planePoint = scene.mapProjection.project(cartoPos, cart3Scratch1$1);
    var posCV = Cesium.Cartesian3.fromElements(
      planePoint.z,
      planePoint.x,
      planePoint.y,
      planePoint
    );

    this._heightPlaneCV = Cesium.Plane.fromPointNormal(
      posCV,
      Cesium.Cartesian3.UNIT_X,
      this._heightPlaneCV
    );
    this._height = ellipsoid.cartesianToCartographic(pos, cartoScratch).height;
    this._firstMove = true;
  } else {
    // Don't handle if clickPos is too close to previous click.
    // This typically indicates a double click handler will be fired next,
    // we don't expect the user to wait and click this point again.
    var lastClickPos = this._lastClickPosition;
    var distance = Cesium.Cartesian2.magnitude(
      Cesium.Cartesian2.subtract(
        lastClickPos,
        clickPosition,
        clickDistanceScratch$2
      )
    );
    if (distance < mouseDelta$2) {
      return;
    }
    Cesium.Cartesian2.clone(clickPosition, lastClickPos);
    pos = Cesium.Cartesian3.clone(this._tempNextPos);
    this.addPoint(pos);
    this._firstMove = true;
  }
  return pos;
};

/**
 * Handles mouse move events while drawing a polyline.
 * @param {Cartesian2} mousePosition The mouse position
 * @param {Boolean} shift True if the shift key was pressed
 */
HorizontalPolylineDrawing.prototype.handleMouseMove = function (
  mousePosition,
  shift
) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  Cesium.Check.defined("shift", shift);
  //>>includeEnd('debug');

  if (this._mode !== DrawingMode$1.Drawing) {
    return;
  }
  var scene = this._scene;
  var ellipsoid = scene.frameState.mapProjection.ellipsoid;
  var positions = this._positions;

  var nextPos;
  var ray = scene.camera.getPickRay(mousePosition, rayScratch$4);
  if (scene.mode === Cesium.SceneMode.SCENE3D) {
    nextPos = Cesium.IntersectionTests.rayPlane(
      ray,
      this._heightPlane,
      cart3Scratch$2
    );
  } else if (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW) {
    nextPos = Cesium.IntersectionTests.rayPlane(
      ray,
      this._heightPlaneCV,
      cart3Scratch$2
    );
    nextPos = Cesium.Cartesian3.fromElements(
      nextPos.y,
      nextPos.z,
      nextPos.x,
      nextPos
    );
    var carto = scene.mapProjection.unproject(nextPos, cartoScratch);
    nextPos = ellipsoid.cartographicToCartesian(carto, nextPos);
  } else {
    nextPos = scene.camera.pickEllipsoid(
      mousePosition,
      ellipsoid,
      cart3Scratch$2
    );
    if (Cesium.defined(nextPos)) {
      var cartoPos = ellipsoid.cartesianToCartographic(nextPos, cartoScratch);
      cartoPos.height = this._height;
      nextPos = ellipsoid.cartographicToCartesian(cartoPos, nextPos);
    }
  }

  if (!Cesium.defined(nextPos)) {
    return;
  }

  if (!this._firstMove && shift) {
    var anchorPos = positions[positions.length - 1];
    var lastPos = this._tempNextPos;
    var direction = Cesium.Cartesian3.subtract(lastPos, anchorPos, v1Scratch$1);
    var newDirection = Cesium.Cartesian3.subtract(
      nextPos,
      anchorPos,
      v2Scratch
    );
    newDirection = Cesium.Cartesian3.projectVector(
      newDirection,
      direction,
      newDirection
    );
    nextPos = Cesium.Cartesian3.add(anchorPos, newDirection, nextPos);
  }

  positions = positions.slice();
  positions.push(Cesium.Cartesian3.clone(nextPos, this._tempNextPos));
  this._polyline.positions = positions;
  this._firstMove = false;
  this._moveDashLine.show = true;
  this._setDashLinePositions(this._moveDashLine, nextPos);

  return nextPos;
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
HorizontalPolylineDrawing.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.
 */
HorizontalPolylineDrawing.prototype.destroy = function () {
  var primitives = this._primitives;
  var dashLines = this._dashedLines;
  for (var i = 0; i < dashLines.length; i++) {
    primitives.remove(dashLines[i]);
  }
  primitives.remove(this._moveDashLine);

  PolylineDrawing.prototype.destroy.call(this);
};

var cart3Scratch$3 = new Cesium.Cartesian3();
var cart2Scratch1$2 = new Cesium.Cartesian2();
var cart2Scratch2$2 = new Cesium.Cartesian2();
var cart2Scratch3 = new Cesium.Cartesian2();
var v1Scratch$2 = new Cesium.Cartesian3();

/**
 * @private
 * @ionsdk
 */
function HorizontalMeasurementDrawing(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  Cesium.Check.defined("options.primitives", options.primitives);
  Cesium.Check.defined("options.units", options.units);
  Cesium.Check.defined("options.points", options.points);
  Cesium.Check.defined("options.labels", options.labels);
  //>>includeEnd('debug');
  HorizontalPolylineDrawing.call(this, options);

  var labels = options.labels;
  this._labelCollection = labels;
  this._label = labels.add(
    MeasurementSettings.getLabelOptions({
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.BOTTOM,
      pixelOffset: new Cesium.Cartesian2(10, -10)
    })
  );
  this._segmentLabels = [];
  this._selectedUnits = options.units;
  this._selectedLocale = options.locale;
  this._previousDistance = 0;
  this._distance = 0;

  var that = this;
  this._removeEvent = this._scene.preRender.addEventListener(function () {
    that.updateLabels();
  });
}

HorizontalMeasurementDrawing.prototype = Object.create(
  HorizontalPolylineDrawing.prototype
);
HorizontalMeasurementDrawing.prototype.constructor =
  HorizontalMeasurementDrawing;

Object.defineProperties(HorizontalMeasurementDrawing.prototype, {
  /**
   * Gets the distance in meters
   * @type {Number}
   * @memberof HorizontalMeasurementDrawing.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._distance;
    }
  }
});

/**
 * Updates the label position.
 * @private
 */
HorizontalMeasurementDrawing.prototype.updateLabels = function () {
  var positions = this._positions;
  if (positions.length < 2) {
    return;
  }
  var scene = this._scene;
  var top = positions[0];
  var pos2d = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    top,
    cart2Scratch1$2
  );
  var lastScreenPos = Cesium.defined(pos2d)
    ? Cesium.Cartesian2.clone(pos2d, cart2Scratch3)
    : Cesium.Cartesian2.fromElements(
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        cart2Scratch3
      );
  var topY = lastScreenPos.y;
  var labels = this._segmentLabels;
  labels[0].show = this._polyline.positions.length > 2;
  for (var i = 1; i < positions.length; i++) {
    var nextScreenPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      scene,
      positions[i],
      cart2Scratch2$2
    );
    if (!Cesium.defined(nextScreenPos)) {
      continue;
    }

    var m =
      (lastScreenPos.y - nextScreenPos.y) / (nextScreenPos.x - lastScreenPos.x);
    var label = labels[i - 1];
    if (m > 0) {
      label.horizontalOrigin = Cesium.HorizontalOrigin.LEFT;
    } else {
      label.horizontalOrigin = Cesium.HorizontalOrigin.RIGHT;
    }

    if (nextScreenPos.y < topY) {
      topY = nextScreenPos.y;
      top = positions[i];
    }
    lastScreenPos = Cesium.Cartesian2.clone(nextScreenPos, lastScreenPos);
  }
  if (this._mode === DrawingMode$1.AfterDraw) {
    this._label.position = top;
  }
};

HorizontalMeasurementDrawing.prototype.addPoint = function (position) {
  var positions = this._positions;
  if (positions.length > 0) {
    // store distance that was calculated on mouse move
    this._previousDistance = this._distance;

    var label = this._labelCollection.add(
      MeasurementSettings.getLabelOptions({
        scale: 0.8,
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.TOP,
        pixelOffset: new Cesium.Cartesian2(5, 5)
      })
    );
    var p1 = positions[positions.length - 1];
    label.position = Cesium.Cartesian3.midpoint(
      p1,
      position,
      new Cesium.Cartesian3()
    );
    label.text = MeasureUnits.distanceToString(
      Cesium.Cartesian3.distance(p1, position),
      this._selectedUnits.distanceUnits,
      this._selectedLocale
    );
    label.show = true;
    this._segmentLabels.push(label);
  }
  HorizontalPolylineDrawing.prototype.addPoint.call(this, position);
};

/**
 * Handles click events while drawing a polyline.
 * @param {Cartesian2} clickPosition The click position
 */
HorizontalMeasurementDrawing.prototype.handleClick = function (clickPosition) {
  if (this._mode === DrawingMode$1.AfterDraw) {
    this.reset();
  }
  var position = HorizontalPolylineDrawing.prototype.handleClick.call(
    this,
    clickPosition
  );
  if (Cesium.defined(position)) {
    this._label.show = true;
    this._polyline.show = true;
  }
};

/**
 * Handles mouse movements while drawing a horizontal measurement.
 * @param {Cartesian2} mousePosition The mouse position
 * @param {Boolean} shift True if the shift key was pressed
 */
HorizontalMeasurementDrawing.prototype.handleMouseMove = function (
  mousePosition,
  shift
) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  Cesium.Check.defined("shift", shift);
  //>>includeEnd('debug');

  var nextPos = HorizontalPolylineDrawing.prototype.handleMouseMove.call(
    this,
    mousePosition,
    shift
  );
  if (!Cesium.defined(nextPos)) {
    return;
  }

  var positions = this._positions;
  var lastPos = positions[positions.length - 1];
  var vec = Cesium.Cartesian3.subtract(nextPos, lastPos, v1Scratch$2);
  var distance = this._previousDistance + Cesium.Cartesian3.magnitude(vec);

  var label = this._label;
  label.position = Cesium.Cartesian3.midpoint(lastPos, nextPos, cart3Scratch$3);
  label.text = MeasureUnits.distanceToString(
    distance,
    this._selectedUnits.distanceUnits,
    this._selectedLocale
  );
  label.show = true;

  this._distance = distance;
};

/**
 * Resets the measurement.
 */
HorizontalMeasurementDrawing.prototype.reset = function () {
  var i;
  var primitives = this._primitives;
  var dashLines = this._dashedLines;
  for (i = 0; i < dashLines.length; i++) {
    primitives.remove(dashLines[i]);
  }
  this._dashedLines = [];

  this._polyline.positions = [];
  this._polyline.show = false;

  this._label.show = false;
  this._label.text = "";

  this._previousDistance = 0;
  this._distance = 0;

  this._positions = [];

  var points = this._points;
  var pointCollection = this._pointCollection;
  for (i = 0; i < points.length; i++) {
    pointCollection.remove(points[i]);
  }
  points.length = 0;

  var labelCollection = this._labelCollection;
  var labels = this._segmentLabels;
  for (i = 0; i < labels.length; i++) {
    labelCollection.remove(labels[i]);
  }
  labels.length = 0;

  this._moveDashLine.show = false;
  this._mode = DrawingMode$1.BeforeDraw;
  this._lastClickPosition.x = Number.POSITIVE_INFINITY;
  this._lastClickPosition.y = Number.POSITIVE_INFINITY;
};

/**
 * Destroys the measurement.
 */
HorizontalMeasurementDrawing.prototype.destroy = function () {
  this._removeEvent();

  var i;
  var labelCollection = this._labelCollection;
  var labels = this._segmentLabels;
  for (i = 0; i < labels.length; i++) {
    labelCollection.remove(labels[i]);
  }

  var primitives = this._primitives;
  var dashLines = this._dashedLines;
  for (i = 0; i < dashLines.length; i++) {
    primitives.remove(dashLines[i]);
  }

  this._labelCollection.remove(this._label);

  HorizontalPolylineDrawing.prototype.destroy.call(this);
};

function getIcon$3(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                 <g transform="translate(0,-267)">\n\
                   <path d="m 5.5492003,281.78808 18.9375757,0.0497"/>\n\
                   <circle r="2.0788691" cy="281.63776" cx="3.0514872"/>\n\
                   <circle r="2.0788691" cy="281.71384" cx="26.985731"/>\n\
                 </g>\n\
               </svg>'
  );
}

/**
 * 在具有相同高度的两个点之间绘制测量值。
 *
 * @param {Object} options 具有以下属性的对象：
 * @ionsdk
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PointPrimitiveCollection} options.points 用于添加点基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PrimitiveCollection} options.primitives 用于添加图元的集合
 *
 * @constructor
 * @alias HorizontalMeasurement
 */
function HorizontalMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  this._drawing = new HorizontalMeasurementDrawing(options);
}

HorizontalMeasurement.prototype = Object.create(Measurement.prototype);
HorizontalMeasurement.prototype.constructor = HorizontalMeasurement;

Object.defineProperties(HorizontalMeasurement.prototype, {
  /**
   * Gets the distance in meters
   * @type {Number}
   * @memberof HorizontalMeasurement.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._drawing.distance;
    }
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof HorizontalMeasurement.prototype
   * @readonly
   */
  icon: {
    value: getIcon$3(15)
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof AreaMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: getIcon$3(25)
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof HorizontalMeasurement.prototype
   * @readonly
   */
  type: {
    value: "Horizontal distance"
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof HorizontalMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Click on the point cloud or the globe to set the start point",
      "Move the mouse to drag the line",
      "Press this shift key to clamp the direction of the line",
      "Click again to set the end point",
      "To make a new measurement, click to clear the previous measurement"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof HorizontalMeasurement.prototype
   * @readonly
   */
  id: {
    value: "horizontalMeasurement"
  }
});

/**
 * Ends drawing on double click.
 */
HorizontalMeasurement.prototype.handleDoubleClick = function () {
  this._drawing.handleDoubleClick();
};

/**
 * Handles click events while drawing a horizontal measurement.
 * @param {Cartesian2} clickPosition The click position
 */
HorizontalMeasurement.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  this._drawing.handleClick(clickPosition);
};

/**
 * Handles mouse movements while drawing a horizontal measurement.
 * @param {Cartesian2} mousePosition The mouse position
 * @param {Boolean} shift True if the shift key was pressed
 */
HorizontalMeasurement.prototype.handleMouseMove = function (
  mousePosition,
  shift
) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  Cesium.Check.defined("shift", shift);
  //>>includeEnd('debug');

  this._drawing.handleMouseMove(mousePosition, shift);
};

/**
 * Resets the measurement.
 */
HorizontalMeasurement.prototype.reset = function () {
  this._drawing.reset();
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
HorizontalMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the measurement.
 */
HorizontalMeasurement.prototype.destroy = function () {
  this._drawing.destroy();

  return Cesium.destroyObject(this);
};

/**
 * 用于激活和处理测量小部件的鼠标交互的辅助类。
 * @alias MeasurementMouseHandler
 * @ionsdk
 *
 * @param {Scene} 场景 场景
 *
 * @constructor
 */
function MeasurementMouseHandler(scene) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("scene", scene);
  //>>includeEnd('debug');

  this.selectedMeasurement = undefined;
  this._sseh = new Cesium.ScreenSpaceEventHandler(scene.canvas);
  this._scene = scene;
}

Object.defineProperties(MeasurementMouseHandler.prototype, {
  /**
   * Gets the scene.
   * @type {Scene}
   * @memberof MeasurementMouseHandler.prototype
   * @readonly
   */
  scene: {
    get: function get() {
      return this._scene;
    }
  }
});

/**
 * Activates the mouse handler.
 */
MeasurementMouseHandler.prototype.activate = function () {
  var sseh = this._sseh;
  sseh.setInputAction(
    this._click.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_CLICK
  );
  sseh.setInputAction(
    this._clickShift.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_CLICK,
    Cesium.KeyboardEventModifier.SHIFT
  );
  sseh.setInputAction(
    this._mouseMove.bind(this),
    Cesium.ScreenSpaceEventType.MOUSE_MOVE
  );
  sseh.setInputAction(
    this._mouseMoveShift.bind(this),
    Cesium.ScreenSpaceEventType.MOUSE_MOVE,
    Cesium.KeyboardEventModifier.SHIFT
  );
  sseh.setInputAction(
    this._handleLeftDown.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_DOWN
  );
  sseh.setInputAction(
    this._handleLeftUp.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_UP
  );
  sseh.setInputAction(
    this._handleDoubleClick.bind(this),
    Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK
  );
};

/**
 * Deactivates the mouse handler.
 */
MeasurementMouseHandler.prototype.deactivate = function () {
  var sseh = this._sseh;
  sseh.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_CLICK);
  sseh.removeInputAction(
    Cesium.ScreenSpaceEventType.LEFT_CLICK,
    Cesium.KeyboardEventModifier.SHIFT
  );
  sseh.removeInputAction(Cesium.ScreenSpaceEventType.MOUSE_MOVE);
  sseh.removeInputAction(
    Cesium.ScreenSpaceEventType.MOUSE_MOVE,
    Cesium.KeyboardEventModifier.SHIFT
  );
  sseh.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOWN);
  sseh.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_UP);
  sseh.removeInputAction(Cesium.ScreenSpaceEventType.LEFT_DOUBLE_CLICK);
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._handleDoubleClick = function (click) {
  this.selectedMeasurement.handleDoubleClick(click.position);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._handleClick = function (click, shift) {
  this.selectedMeasurement.handleClick(click.position, shift);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._clickShift = function (click) {
  this._handleClick(click, true);
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._click = function (click) {
  this._handleClick(click, false);
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._handleMouseMove = function (
  movement,
  shift
) {
  this.selectedMeasurement.handleMouseMove(movement.endPosition, shift);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._mouseMove = function (movement) {
  this._handleMouseMove(movement, false);
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._mouseMoveShift = function (movement) {
  this._handleMouseMove(movement, true);
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._handleLeftDown = function (event) {
  this.selectedMeasurement.handleLeftDown(event.position);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @private
 */
MeasurementMouseHandler.prototype._handleLeftUp = function (event) {
  this.selectedMeasurement.handleLeftUp(event.position);
  var scene = this._scene;
  if (scene.requestRenderMode) {
    scene.requestRender();
  }
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
MeasurementMouseHandler.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the mouse handler.
 */
MeasurementMouseHandler.prototype.destroy = function () {
  this.deactivate();
  this._sseh.destroy();
  return Cesium.destroyObject(this);
};

var positionScratch = new Cesium.Cartesian3();
var normalScratch$1 = new Cesium.Cartesian3();
var surfaceNormalScratch = new Cesium.Cartesian3();

var scratchCartesian2s = [
  new Cesium.Cartesian2(),
  new Cesium.Cartesian2(),
  new Cesium.Cartesian2(),
  new Cesium.Cartesian2()
];
var scratchCartesian3s = [
  new Cesium.Cartesian3(),
  new Cesium.Cartesian3(),
  new Cesium.Cartesian3(),
  new Cesium.Cartesian3(),
  new Cesium.Cartesian3()
];

/**
 * 计算由窗口坐标定义的点处的斜率。
 *
 * @param {Scene} 场景 场景
 * @ionsdk
 * @param {Cartesian2} windowCoordinates 窗口坐标
 * @returns {Number} [0, PI/2] 之间点相对于地面的坡度。
 */
function getSlope(scene, windowCoordinates) {
  Cesium.Check.defined("scene", scene);
  Cesium.Check.defined("windowCoordinates", windowCoordinates);

  var worldPosition = getSlope._getWorldPosition(
    scene,
    windowCoordinates,
    positionScratch
  );
  if (!Cesium.defined(worldPosition)) {
    return;
  }

  var distanceCameraToPositionThreshold = 10000.0;
  var pixelOffset = 2;
  var offsetDistanceRatioThreshold = 0.05;

  var cameraPosition = scene.camera.position;
  var distanceCameraToPosition = Cesium.Cartesian3.distance(
    worldPosition,
    cameraPosition
  );

  if (distanceCameraToPosition > distanceCameraToPositionThreshold) {
    // don't compute slope if camera is more than 10km away from point
    return;
  }

  var sc0 = scratchCartesian3s[0];
  var sc1 = scratchCartesian3s[1];
  var sc2 = scratchCartesian3s[2];
  var sc3 = scratchCartesian3s[3];

  var normal = scene.frameState.mapProjection.ellipsoid.geodeticSurfaceNormal(
    worldPosition,
    normalScratch$1
  );
  normal = Cesium.Cartesian3.negate(normal, normal);

  var sampledWindowCoordinate0 = Cesium.Cartesian2.clone(
    windowCoordinates,
    scratchCartesian2s[0]
  );
  sampledWindowCoordinate0.x -= pixelOffset;
  sampledWindowCoordinate0.y -= pixelOffset;

  var sampledWindowCoordinate1 = Cesium.Cartesian2.clone(
    windowCoordinates,
    scratchCartesian2s[1]
  );
  sampledWindowCoordinate1.x -= pixelOffset;
  sampledWindowCoordinate1.y += pixelOffset;

  var sampledWindowCoordinate2 = Cesium.Cartesian2.clone(
    windowCoordinates,
    scratchCartesian2s[2]
  );
  sampledWindowCoordinate2.x += pixelOffset;
  sampledWindowCoordinate2.y += pixelOffset;

  var sampledWindowCoordinate3 = Cesium.Cartesian2.clone(
    windowCoordinates,
    scratchCartesian2s[3]
  );
  sampledWindowCoordinate3.x += pixelOffset;
  sampledWindowCoordinate3.y -= pixelOffset;

  var sPosition0 = getSlope._getWorldPosition(
    scene,
    sampledWindowCoordinate0,
    sc0
  );
  var sPosition1 = getSlope._getWorldPosition(
    scene,
    sampledWindowCoordinate1,
    sc1
  );
  var sPosition2 = getSlope._getWorldPosition(
    scene,
    sampledWindowCoordinate2,
    sc2
  );
  var sPosition3 = getSlope._getWorldPosition(
    scene,
    sampledWindowCoordinate3,
    sc3
  );

  var v0, v1, v2, v3;
  if (Cesium.defined(sPosition0)) {
    var line0 = Cesium.Cartesian3.subtract(sPosition0, worldPosition, sc0);
    var d0 = Cesium.Cartesian3.magnitude(line0);
    v0 =
      d0 / distanceCameraToPosition <= offsetDistanceRatioThreshold
        ? Cesium.Cartesian3.normalize(line0, sc0)
        : undefined;
  }

  if (Cesium.defined(sPosition1)) {
    var line1 = Cesium.Cartesian3.subtract(sPosition1, worldPosition, sc1);
    var d1 = Cesium.Cartesian3.magnitude(line1);
    v1 =
      d1 / distanceCameraToPosition <= offsetDistanceRatioThreshold
        ? Cesium.Cartesian3.normalize(line1, sc1)
        : undefined;
  }

  if (Cesium.defined(sPosition2)) {
    var line2 = Cesium.Cartesian3.subtract(sPosition2, worldPosition, sc2);
    var d2 = Cesium.Cartesian3.magnitude(line2);
    v2 =
      d2 / distanceCameraToPosition <= offsetDistanceRatioThreshold
        ? Cesium.Cartesian3.normalize(line2, sc2)
        : undefined;
  }

  if (Cesium.defined(sPosition3)) {
    var line3 = Cesium.Cartesian3.subtract(sPosition3, worldPosition, sc3);
    var d3 = Cesium.Cartesian3.magnitude(line3);
    v3 =
      d3 / distanceCameraToPosition <= offsetDistanceRatioThreshold
        ? Cesium.Cartesian3.normalize(line3, sc3)
        : undefined;
  }

  var surfaceNormal = Cesium.Cartesian3.clone(
    Cesium.Cartesian3.ZERO,
    surfaceNormalScratch
  );
  var scratchNormal = scratchCartesian3s[4];

  if (Cesium.defined(v0) && Cesium.defined(v1)) {
    scratchNormal = Cesium.Cartesian3.normalize(
      Cesium.Cartesian3.cross(v0, v1, scratchNormal),
      scratchNormal
    );
    surfaceNormal = Cesium.Cartesian3.add(
      surfaceNormal,
      scratchNormal,
      surfaceNormal
    );
  }
  if (Cesium.defined(v1) && Cesium.defined(v2)) {
    scratchNormal = Cesium.Cartesian3.normalize(
      Cesium.Cartesian3.cross(v1, v2, scratchNormal),
      scratchNormal
    );
    surfaceNormal = Cesium.Cartesian3.add(
      surfaceNormal,
      scratchNormal,
      surfaceNormal
    );
  }
  if (Cesium.defined(v2) && Cesium.defined(v3)) {
    scratchNormal = Cesium.Cartesian3.normalize(
      Cesium.Cartesian3.cross(v2, v3, scratchNormal),
      scratchNormal
    );
    surfaceNormal = Cesium.Cartesian3.add(
      surfaceNormal,
      scratchNormal,
      surfaceNormal
    );
  }
  if (Cesium.defined(v3) && Cesium.defined(v0)) {
    scratchNormal = Cesium.Cartesian3.normalize(
      Cesium.Cartesian3.cross(v3, v0, scratchNormal),
      scratchNormal
    );
    surfaceNormal = Cesium.Cartesian3.add(
      surfaceNormal,
      scratchNormal,
      surfaceNormal
    );
  }

  if (surfaceNormal.equals(Cesium.Cartesian3.ZERO)) {
    return;
  }

  surfaceNormal = Cesium.Cartesian3.normalize(surfaceNormal, surfaceNormal);

  return Cesium.Math.asinClamped(
    Math.abs(Math.sin(Cesium.Cartesian3.angleBetween(surfaceNormal, normal)))
  ); // Always between 0 and PI/2.
}

// exposed for specs
getSlope._getWorldPosition = getWorldPosition;

var scratchCartesian = new Cesium.Cartesian3();
var scratchCartographic = new Cesium.Cartographic();

function getIcon$4(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                 <g transform="translate(0,-267)">\n\
                   <circle r="2.0788691" cy="281.90503" cx="15.212251"/>\n\
                 </g>\n\
               </svg>'
  );
}

/**
 * 绘制一个点以及该点的经度、纬度、高度和坡度。
 *
 * @param {Object} options 具有以下属性的对象：
 * @ionsdk
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PointPrimitiveCollection} options.points 用于添加点基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PrimitiveCollection} options.primitives 用于添加图元的集合
 *
 * @constructor
 * @alias 点测量
 */
function PointMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  this._point = this._pointCollection.add(
    MeasurementSettings.getPointOptions()
  );
  this._label = this._labelCollection.add(
    MeasurementSettings.getLabelOptions({
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.CENTER,
      pixelOffset: new Cesium.Cartesian2(10, 0)
    })
  );
  this._position = new Cesium.Cartesian3();
  this._height = 0.0;
  this._slope = 0.0;
}

PointMeasurement.prototype = Object.create(Measurement.prototype);
PointMeasurement.prototype.constructor = PointMeasurement;

Object.defineProperties(PointMeasurement.prototype, {
  /**
   * Gets the position.
   * @type {Cartesian3}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  position: {
    get: function get() {
      return this._position;
    }
  },
  /**
   * Gets the height.
   * @type {Number}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  height: {
    get: function get() {
      return this._height;
    }
  },
  /**
   * Gets the slope in radians.
   * @type {Number}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  slope: {
    get: function get() {
      return this._slope;
    }
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  icon: {
    value: getIcon$4(15)
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: getIcon$4(25)
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  type: {
    value: "Point coordinates"
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Move the mouse to see the longitude, latitude and height of the point"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof PointMeasurement.prototype
   * @readonly
   */
  id: {
    value: "pointMeasurement"
  }
});

PointMeasurement.prototype._pickPositionSupported = function () {
  return this._scene.pickPositionSupported;
};

/**
 * Handles drawing on mouse move.
 */
PointMeasurement.prototype.handleMouseMove = function (movePosition) {
  var scene = this._scene;
  this.reset();

  if (scene.mode === Cesium.SceneMode.MORPHING) {
    return;
  }

  this._point.show = false;

  var position = PointMeasurement._getWorldPosition(
    scene,
    movePosition,
    scratchCartesian
  );
  if (!Cesium.defined(position)) {
    return;
  }

  this._point.position = position;

  var positionCartographic =
    scene.frameState.mapProjection.ellipsoid.cartesianToCartographic(
      position,
      scratchCartographic
    );
  var height = 0.0;
  if (Cesium.defined(scene.globe)) {
    height = Cesium.defaultValue(
      scene.globe.getHeight(positionCartographic),
      0.0
    );
  }
  height = positionCartographic.height - height;
  if (Cesium.Math.equalsEpsilon(height, 0.0, Cesium.Math.EPSILON3)) {
    height = 0.0;
  }

  var slope;
  if (scene.mode !== Cesium.SceneMode.SCENE2D) {
    slope = PointMeasurement._getSlope(scene, movePosition, this._primitives);
  }

  this._point.show = true;

  var label = this._label;
  label.position = position;
  label.show = true;
  label.text =
    "lon: " +
    MeasureUnits.angleToString(
      positionCartographic.longitude,
      AngleUnits$1.DEGREES_MINUTES_SECONDS,
      this._selectedLocale
    ) +
    "\n" +
    "lat: " +
    MeasureUnits.angleToString(
      positionCartographic.latitude,
      AngleUnits$1.DEGREES_MINUTES_SECONDS,
      this._selectedLocale
    );

  if (
    scene.mode !== Cesium.SceneMode.SCENE2D &&
    this._pickPositionSupported()
  ) {
    label.text +=
      "\nheight: " +
      MeasureUnits.distanceToString(
        height,
        this._selectedUnits.distanceUnits,
        this._selectedLocale
      );
    if (Cesium.defined(slope)) {
      label.text +=
        "\nslope: " +
        MeasureUnits.angleToString(
          slope,
          this._selectedUnits.slopeUnits,
          this._selectedLocale,
          3
        );
    }
  }

  this._position = Cesium.Cartesian3.clone(position, this._position);
  this._height = height;
  this._slope = slope;
};

/**
 * Resets the widget.
 */
PointMeasurement.prototype.reset = function () {
  this._label.show = false;
  this._point.show = false;
  this._position = Cesium.Cartesian3.clone(
    Cesium.Cartesian3.ZERO,
    this._position
  );
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
PointMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the measurement.
 */
PointMeasurement.prototype.destroy = function () {
  this._labelCollection.remove(this._label);
  this._pointCollection.remove(this._point);

  return Cesium.destroyObject(this);
};

// exposed for specs
PointMeasurement._getSlope = getSlope;
PointMeasurement._getWorldPosition = getWorldPosition;

var cart2Scratch1$3 = new Cesium.Cartesian2();
var cart2Scratch2$3 = new Cesium.Cartesian2();
var cart2Scratch3$1 = new Cesium.Cartesian2();

var scratch$1 = new Cesium.Cartesian3();

/**
 * @private
 * @ionsdk
 */
function PolylineMeasurementDrawing(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", options.scene);
  Cesium.Check.defined("options.primitives", options.primitives);
  Cesium.Check.defined("options.units", options.units);
  Cesium.Check.defined("options.points", options.points);
  Cesium.Check.defined("options.labels", options.labels);
  //>>includeEnd('debug');

  options.polylineOptions = MeasurementSettings.getPolylineOptions({
    ellipsoid: options.ellipsoid
  });
  options.pointOptions = MeasurementSettings.getPointOptions();
  PolylineDrawing.call(this, options);

  var scene = this._scene;
  var labels = options.labels;
  this._labelCollection = labels;
  this._label = labels.add(MeasurementSettings.getLabelOptions());
  this._segmentLabels = [];
  this._selectedUnits = options.units;
  this._selectedLocale = options.locale;
  this._previousDistance = 0;
  this._distance = 0;

  var that = this;
  this._removeEvent = scene.preRender.addEventListener(function () {
    that.updateLabel();
  });
}

PolylineMeasurementDrawing.prototype = Object.create(PolylineDrawing.prototype);
PolylineMeasurementDrawing.prototype.constructor = PolylineMeasurementDrawing;

Object.defineProperties(PolylineMeasurementDrawing.prototype, {
  /**
   * Gets the distance in meters.
   * @type {Number}
   * @memberof PolylineMeasurementDrawing.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._distance;
    }
  }
});

/**
 * Updates the label position.
 * @private
 */
PolylineMeasurementDrawing.prototype.updateLabel = function () {
  var positions = this._positions;
  if (positions.length < 2) {
    return;
  }
  var scene = this._scene;
  var top = positions[0];
  var pos2d = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    top,
    cart2Scratch1$3
  );
  var lastScreenPos = Cesium.defined(pos2d)
    ? Cesium.Cartesian2.clone(pos2d, cart2Scratch3$1)
    : Cesium.Cartesian2.fromElements(
        Number.NEGATIVE_INFINITY,
        Number.POSITIVE_INFINITY,
        cart2Scratch3$1
      );
  var topY = lastScreenPos.y;
  var labels = this._segmentLabels;
  labels[0].show = this._polyline.positions.length > 2;
  for (var i = 1; i < positions.length; i++) {
    var nextScreenPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
      scene,
      positions[i],
      cart2Scratch2$3
    );
    if (!Cesium.defined(nextScreenPos)) {
      continue;
    }

    var m =
      (lastScreenPos.y - nextScreenPos.y) / (nextScreenPos.x - lastScreenPos.x);
    var label = labels[i - 1];
    if (m > 0) {
      label.horizontalOrigin = Cesium.HorizontalOrigin.LEFT;
    } else {
      label.horizontalOrigin = Cesium.HorizontalOrigin.RIGHT;
    }

    if (nextScreenPos.y < topY) {
      topY = nextScreenPos.y;
      top = positions[i];
    }
    lastScreenPos = Cesium.Cartesian2.clone(nextScreenPos, lastScreenPos);
  }
  if (this._mode === DrawingMode$1.AfterDraw) {
    this._label.position = top;
  }
};

/**
 * Adds a point to the polyline.
 * @param {Cartesian3} position The position to add
 * @private
 */
PolylineMeasurementDrawing.prototype.addPoint = function (position) {
  var positions = this._positions;
  if (positions.length > 0) {
    // store distance that was calculated on mouse move
    this._previousDistance = this._distance;

    var label = this._labelCollection.add(
      MeasurementSettings.getLabelOptions({
        scale: 0.8,
        horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
        verticalOrigin: Cesium.VerticalOrigin.TOP,
        pixelOffset: new Cesium.Cartesian2(5, 5)
      })
    );
    var p1 = positions[positions.length - 1];
    label.position = Cesium.Cartesian3.midpoint(
      p1,
      position,
      new Cesium.Cartesian3()
    );
    label.text = MeasureUnits.distanceToString(
      Cesium.Cartesian3.distance(p1, position),
      this._selectedUnits.distanceUnits,
      this._selectedLocale
    );
    label.show = true;
    this._segmentLabels.push(label);
  }
  PolylineDrawing.prototype.addPoint.call(this, position);
};

/**
 * Handles click events while drawing a polyline.
 * @param {Cartesian2} clickPosition The click position
 */
PolylineMeasurementDrawing.prototype.handleClick = function (clickPosition) {
  if (this._mode === DrawingMode$1.AfterDraw) {
    this.reset();
  }
  var position = PolylineDrawing.prototype.handleClick.call(
    this,
    clickPosition
  );
  if (Cesium.defined(position)) {
    this._label.show = true;
    this._polyline.show = true;
  }
};

/**
 * Handles mouse move events while drawing a polyline.
 * @param {Cartesian2} mousePosition The mouse position
 */
PolylineMeasurementDrawing.prototype.handleMouseMove = function (
  mousePosition
) {
  var nextPos = PolylineDrawing.prototype.handleMouseMove.call(
    this,
    mousePosition
  );
  if (!Cesium.defined(nextPos)) {
    return;
  }

  var pos1 = this._positions[this._positions.length - 1];
  var pos2 = nextPos;
  var vec = Cesium.Cartesian3.subtract(pos2, pos1, scratch$1);
  var distance = this._previousDistance + Cesium.Cartesian3.magnitude(vec);

  var label = this._label;
  label.position = pos2;
  label.text = MeasureUnits.distanceToString(
    distance,
    this._selectedUnits.distanceUnits,
    this._selectedLocale
  );
  label.show = true;

  this._distance = distance;
};

/**
 * Resets the widget.
 */
PolylineMeasurementDrawing.prototype.reset = function () {
  this._label.show = false;
  this._label.text = "";
  this._positions = [];
  this._polyline.positions = [];
  this._polyline.show = false;
  this._previousDistance = 0;
  this._distance = 0;

  var i;
  var points = this._points;
  var pointCollection = this._pointCollection;
  for (i = 0; i < points.length; i++) {
    pointCollection.remove(points[i]);
  }
  points.length = 0;

  var labelCollection = this._labelCollection;
  var labels = this._segmentLabels;
  for (i = 0; i < labels.length; i++) {
    labelCollection.remove(labels[i]);
  }
  labels.length = 0;

  this._mode = DrawingMode$1.BeforeDraw;
  this._lastClickPosition.x = Number.POSITIVE_INFINITY;
  this._lastClickPosition.y = Number.POSITIVE_INFINITY;
};

/**
 * Destroys the widget.
 */
PolylineMeasurementDrawing.prototype.destroy = function () {
  this._removeEvent();

  var labelCollection = this._labelCollection;
  labelCollection.remove(this._label);
  var labels = this._segmentLabels;
  for (var i = 0; i < labels.length; i++) {
    labelCollection.remove(labels[i]);
  }

  PolylineDrawing.prototype.destroy.call(this);
};

function getIcon$5(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                  <g transform="translate(0,-267)">\n\
                   <circle cx="3.8532958" cy="293.99896" r="2.0788691" />\n\
                   <circle cx="7.2651663" cy="276.26389" r="2.0788691" />\n\
                   <circle cx="24.571842" cy="285.56577" r="2.0788691" />\n\
                   <circle cx="26.916754" cy="270.38345" r="2.0788691" />\n\
                   <path d="m 3.7523356,294.14823 3.602242,-17.81109 17.3608064,9.35582 2.401494,-15.00934" />\n\
                 </g>\n\
               </svg>'
  );
}

/**
 * 创建多线距离测量。
 * @alias 折线测量
 * @ionsdk
 *
 * @param {Object} options 具有以下属性的对象：
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PrimitiveCollection} options.primitives 存储测量基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PointPrimitiveCollection} options.points 添加点的集合
 *
 * @constructor
 */
function PolylineMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  this._drawing = new PolylineMeasurementDrawing(options);
}

PolylineMeasurement.prototype = Object.create(Measurement.prototype);
PolylineMeasurement.prototype.constructor = PolylineMeasurement;

Object.defineProperties(PolylineMeasurement.prototype, {
  /**
   * Gets the distance in meters.
   * @type {Number}
   * @memberof PolylineMeasurement.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._drawing.distance;
    }
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof PolylineMeasurement.prototype
   * @readonly
   */
  icon: {
    value: getIcon$5(15)
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof PolylineMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: getIcon$5(25)
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof PolylineMeasurement.prototype
   * @readonly
   */
  type: {
    value: "Polyline Distance"
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof PolylineMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Click to start drawing a polyline",
      "Keep clicking to add more points",
      "Double click to finish drawing"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof PolylineMeasurement.prototype
   * @readonly
   */
  id: {
    value: "polylineMeasurement"
  }
});

/**
 * Ends drawing on double click.
 */
PolylineMeasurement.prototype.handleDoubleClick = function () {
  this._drawing.handleDoubleClick();
};

/**
 * Handles click events while drawing a polyline.
 * @param {Cartesian2} clickPosition The click position
 */
PolylineMeasurement.prototype.handleClick = function (clickPosition) {
  this._drawing.handleClick(clickPosition);
};

/**
 * Handles mouse move events while drawing a polyline.
 * @param {Cartesian2} mousePosition The mouse position
 */
PolylineMeasurement.prototype.handleMouseMove = function (mousePosition) {
  this._drawing.handleMouseMove(mousePosition);
};

/**
 * Resets the widget.
 */
PolylineMeasurement.prototype.reset = function () {
  this._drawing.reset();
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
PolylineMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.
 */
PolylineMeasurement.prototype.destroy = function () {
  this._drawing.destroy();

  return Cesium.destroyObject(this);
};

var Mode$1 = {
  BeforeDraw: 0,
  Drawing: 1,
  AfterDraw: 2
};

var scratch$2 = new Cesium.Cartesian3();
var cart2 = new Cesium.Cartesian2();
var normalScratch$2 = new Cesium.Cartesian3();
var v1 = new Cesium.Cartesian3();
var rayScratch$5 = new Cesium.Ray();
var positionScratch$1 = new Cesium.Cartesian3();
var scratchCarto$2 = new Cesium.Cartographic();

function getIcon$6(size) {
  return (
    '<svg viewBox="0 0 30 30" height="' +
    size +
    'px" width="' +
    size +
    'px">\n\
                 <g transform="translate(0,-267)">\n\
                   <path d="m 15.042838,272.34414 -0.0497,18.93758"/>\n\
                   <circle r="2.0788691" cy="270.01154" cx="15.078616"/>\n\
                   <circle r="2.0788691" cy="293.97095" cx="15.092237"/>\n\
                 </g>\n\
               </svg>'
  );
}

function getHeightPosition(measurement, mousePos) {
  var positions = measurement._positions;
  var pos0 = positions[0];
  var pos1 = positions[1];
  var plane = measurement._draggingPlane;
  var normal = measurement._surfaceNormal;
  var scene = measurement._scene;
  var camera = scene.camera;
  var cameraDirection = camera.direction;
  var ellipsoid = scene.frameState.mapProjection.ellipsoid;

  var planePoint = pos0;
  var surfaceNormal = normal;

  if (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW) {
    surfaceNormal = Cesium.Cartesian3.UNIT_X;
    var cartoPos = ellipsoid.cartesianToCartographic(pos0, scratchCarto$2);
    planePoint = scene.mapProjection.project(cartoPos, scratch$2);
    Cesium.Cartesian3.fromElements(
      planePoint.z,
      planePoint.x,
      planePoint.y,
      planePoint
    );
  }

  var planeNormal = Cesium.Cartesian3.cross(
    surfaceNormal,
    cameraDirection,
    normalScratch$2
  );
  planeNormal = Cesium.Cartesian3.cross(
    surfaceNormal,
    planeNormal,
    planeNormal
  );
  planeNormal = Cesium.Cartesian3.normalize(planeNormal, planeNormal);
  plane = Cesium.Plane.fromPointNormal(planePoint, planeNormal, plane);
  var ray = camera.getPickRay(mousePos, rayScratch$5);

  pos1 = Cesium.IntersectionTests.rayPlane(ray, plane, pos1);
  if (!Cesium.defined(pos1)) {
    return;
  }

  if (scene.mode === Cesium.SceneMode.COLUMBUS_VIEW) {
    pos1 = Cesium.Cartesian3.fromElements(pos1.y, pos1.z, pos1.x, pos1);
    var carto = scene.mapProjection.unproject(pos1, scratchCarto$2);
    pos1 = ellipsoid.cartographicToCartesian(carto, pos1);
  }

  var screenPos = Cesium.SceneTransforms.wgs84ToWindowCoordinates(
    scene,
    positions[0],
    cart2
  );
  if (screenPos.y < mousePos.y) {
    normal = Cesium.Cartesian3.negate(normal, normalScratch$2);
  }
  v1 = Cesium.Cartesian3.subtract(pos1, pos0, v1);
  v1 = Cesium.Cartesian3.projectVector(v1, normal, v1);
  pos1 = Cesium.Cartesian3.add(pos0, v1, pos1);
  return pos1;
}

/**
 * 在仅高度不同的两点之间绘制测量值。
 *
 * @param {Object} options 具有以下属性的对象：
 * @ionsdk
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} options.units 选定的计量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PointPrimitiveCollection} options.points 用于添加点基元的集合
 * @param {LabelCollection} options.labels 添加标签的集合
 * @param {PrimitiveCollection} options.primitives 用于添加图元的集合
 *
 * @constructor
 * @alias VerticalMeasurement
 */
function VerticalMeasurement(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  Measurement.call(this, options);

  var pointCollection = this._pointCollection;
  var positions = [new Cesium.Cartesian3(), new Cesium.Cartesian3()];

  this._startPoint = pointCollection.add(MeasurementSettings.getPointOptions());
  this._endPoint = pointCollection.add(MeasurementSettings.getPointOptions());

  this._positions = positions;
  this._polyline = this._primitives.add(
    new PolylinePrimitive(
      MeasurementSettings.getPolylineOptions({
        ellipsoid: this._scene.frameState.mapProjection.ellipsoid,
        positions: positions
      })
    )
  );

  this._label = this._labelCollection.add(
    MeasurementSettings.getLabelOptions({
      horizontalOrigin: Cesium.HorizontalOrigin.LEFT,
      verticalOrigin: Cesium.VerticalOrigin.TOP,
      pixelOffset: new Cesium.Cartesian2(10, 10)
    })
  );

  this._mode = Mode$1.BeforeDraw;
  this._draggingPlane = new Cesium.Plane(Cesium.Cartesian3.UNIT_X, 0);
  this._surfaceNormal = new Cesium.Cartesian3();
  this._distance = 0;
}

VerticalMeasurement.prototype = Object.create(Measurement.prototype);
VerticalMeasurement.prototype.constructor = VerticalMeasurement;

Object.defineProperties(VerticalMeasurement.prototype, {
  /**
   * Gets the distance.
   * @type {Number}
   * @memberof VerticalMeasurement.prototype
   * @readonly
   */
  distance: {
    get: function get() {
      return this._distance;
    }
  },
  /**
   * Gets the type.
   * @type {String}
   * @memberof VerticalMeasurement.prototype
   * @readonly
   */
  type: {
    value: "Vertical distance"
  },
  /**
   * Gets the icon.
   * @type {String}
   * @memberof VerticalMeasurement.prototype
   * @readonly
   */
  icon: {
    value: getIcon$6(15)
  },
  /**
   * Gets the thumbnail.
   * @type {String}
   * @memberof VerticalMeasurement.prototype
   * @readonly
   */
  thumbnail: {
    value: getIcon$6(25)
  },
  /**
   * Gets the instruction text.
   * @type {String[]}
   * @memberof VerticalMeasurement.prototype
   * @readonly
   */
  instructions: {
    value: [
      "Click on the point cloud or the globe to set the start point",
      "Move the mouse to drag the line",
      "Click again to set the end point",
      "To make a new measurement, click to clear the previous measurement"
    ]
  },
  /**
   * Gets the id.
   * @type {String}
   * @memberof VerticalMeasurement.prototype
   * @readonly
   */
  id: {
    value: "verticalMeasurement"
  }
});

/**
 * Handles click events while drawing a vertical measurement.
 * @param {Cartesian2} clickPosition The click position
 */
VerticalMeasurement.prototype.handleClick = function (clickPosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("clickPosition", clickPosition);
  //>>includeEnd('debug');

  var scene = this._scene;
  var ellipsoid = scene.frameState.mapProjection.ellipsoid;
  if (this._mode === Mode$1.AfterDraw) {
    this.reset();
  }

  var mode = this._mode;
  var positions = this._positions;
  if (mode === Mode$1.BeforeDraw) {
    var pos = VerticalMeasurement._getWorldPosition(
      scene,
      clickPosition,
      positions[0]
    );
    if (!Cesium.defined(pos)) {
      return;
    }
    this._polyline.show = true;
    positions[0] = Cesium.Cartesian3.clone(pos, positions[0]);
    positions[1] = Cesium.Cartesian3.clone(pos, positions[1]);
    this._startPoint.position = pos;
    this._startPoint.show = true;
    this._mode = Mode$1.Drawing;
    this._polyline.positions = positions;
    this._surfaceNormal = ellipsoid.geodeticSurfaceNormal(
      pos,
      this._surfaceNormal
    );
  } else if (mode === Mode$1.Drawing) {
    this._endPoint.position = positions[1];
    this._endPoint.show = true;
    this._mode = Mode$1.AfterDraw;
  }
};

/**
 * Handles mouse movement while drawing a vertical measurement.
 * @param {Cartesian2} mousePosition The mouse position
 */
VerticalMeasurement.prototype.handleMouseMove = function (mousePosition) {
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("mousePosition", mousePosition);
  //>>includeEnd('debug');

  if (this._mode !== Mode$1.Drawing) {
    return;
  }

  var label = this._label;
  if (this._scene.mode === Cesium.SceneMode.SCENE2D) {
    label.position = this._positions[0];
    label.text = MeasureUnits.distanceToString(
      0,
      this._selectedUnits.distanceUnits,
      this._selectedLocale
    );
    label.show = true;
    this._mode = Mode$1.AfterDraw;
    return;
  }
  var pos = VerticalMeasurement._getHeightPosition(this, mousePosition);
  if (!Cesium.defined(pos)) {
    return;
  }

  var positions = this._positions;
  var pos1 = positions[0];
  var pos2 = positions[1];

  var vec = Cesium.Cartesian3.subtract(pos2, pos1, scratch$2);
  var distance = Cesium.Cartesian3.magnitude(vec);

  label.position = Cesium.Cartesian3.midpoint(pos1, pos2, positionScratch$1);
  label.text = MeasureUnits.distanceToString(
    distance,
    this._selectedUnits.distanceUnits,
    this._selectedLocale
  );
  label.show = true;

  this._polyline.positions = positions; //triggers polyline update
  this._distance = distance;
};

/**
 * Resets the measurement.
 */
VerticalMeasurement.prototype.reset = function () {
  this._polyline.show = false;
  this._label.show = false;
  this._startPoint.show = false;
  this._endPoint.show = false;
  this._mode = Mode$1.BeforeDraw;
  this._distance = 0;
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
VerticalMeasurement.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the measurement.
 */
VerticalMeasurement.prototype.destroy = function () {
  this._primitives.remove(this._polyline);
  var points = this._pointCollection;
  points.remove(this._startPoint);
  points.remove(this._endPoint);
  this._labelCollection.remove(this._label);

  return Cesium.destroyObject(this);
};

// exposed for specs
VerticalMeasurement._getWorldPosition = getWorldPosition;
VerticalMeasurement._getHeightPosition = getHeightPosition;

/**
 * 用于进行短暂测量的小部件。
 * @alias MeasureViewModel
 * @ionsdk
 *
 * @param {Object} options 具有以下属性的对象：
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} [options.units] 测量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PrimitiveCollection} [options.primitives] 存储测量基元的集合
 *
 * @constructor
 */
function MeasureViewModel(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);

  var scene = options.scene;
  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.scene", scene);
  //>>includeEnd('debug');

  var units = Cesium.defined(options.units)
    ? options.units
    : new MeasureUnits();
  var primitives = Cesium.defined(options.primitives)
    ? options.primitives
    : scene.primitives.add(new Cesium.PrimitiveCollection());
  var points = primitives.add(new Cesium.PointPrimitiveCollection());
  var labels = primitives.add(new Cesium.LabelCollection());

  var mouseHandler = new MeasurementMouseHandler(scene);
  var measurementOptions = {
    scene: scene,
    units: units,
    locale: options.locale,
    points: points,
    labels: labels,
    primitives: primitives
  };
  var componentOptions = Cesium.clone(measurementOptions);
  componentOptions.showComponentLines = true;

  var measurements = [
    new DistanceMeasurement(measurementOptions),
    new DistanceMeasurement(componentOptions),
    new PolylineMeasurement(measurementOptions),
    new HorizontalMeasurement(measurementOptions),
    new VerticalMeasurement(measurementOptions),
    new HeightMeasurement(measurementOptions),
    new AreaMeasurement(measurementOptions),
    new PointMeasurement(measurementOptions)
  ];

  /**
   * Gets and sets whether the measurement toolbar is expanded.
   * @type {Boolean}
   * @default false
   */
  this.expanded = false;

  /**
   * Gets and sets whether the instructions are visible.
   * @type {Boolean}
   * @default false
   */
  this.instructionsVisible = false;

  /**
   * Gets or sets the currently selected measurement.  This property is observable.
   * @type {Measurement}
   * @default undefined
   */
  this.selectedMeasurement = undefined;
  var selectedMeasurement = Cesium.knockout.observable();
  Cesium.knockout.defineProperty(this, "selectedMeasurement", {
    get: function get() {
      return selectedMeasurement();
    },
    set: function set(value) {
      var old = selectedMeasurement();
      if (Cesium.defined(old)) {
        old.reset();
      }
      selectedMeasurement(value);
      mouseHandler.selectedMeasurement = value;
      if (scene.requestRenderMode) {
        scene.requestRender();
      }
    }
  });

  Cesium.knockout.track(this, ["expanded", "instructionsVisible"]);

  this._measurements = measurements;
  this._units = units;
  this._mouseHandler = mouseHandler;
  this._primitives = primitives;

  this._scene = scene;

  this._removeListener = scene.morphStart.addEventListener(
    MeasureViewModel.prototype.onMorph,
    this
  );
}

Object.defineProperties(MeasureViewModel.prototype, {
  /**
   * Gets the scene.
   * @type {Scene}
   * @memberof MeasureViewModel.prototype
   * @readonly
   */
  scene: {
    get: function get() {
      return this._scene;
    }
  },
  /**
   * Gets the array of available measurement types.
   * @type {Measurement[]}
   * @memberof MeasureViewModel.prototype
   * @readonly
   */
  measurements: {
    get: function get() {
      return this._measurements;
    }
  },
  /**
   * Gets the selected unit of measurement.
   * @type {MeasureUnits}
   * @memberof MeasureViewModel.prototype
   * @readonly
   */
  units: {
    get: function get() {
      return this._units;
    }
  }
});

/**
 * Toggles the state of the toolbar.
 */
MeasureViewModel.prototype.toggleActive = function () {
  var expanded = this.expanded;
  if (!expanded) {
    this._activate();
  } else {
    this._deactivate();
  }
  this.expanded = !expanded;
};

/**
 * Toggles the visibility of the instructions panel.
 */
MeasureViewModel.prototype.toggleInstructions = function () {
  this.instructionsVisible = !this.instructionsVisible;
};

/**
 * @private
 */
MeasureViewModel.prototype._activate = function () {
  this._mouseHandler.activate();
  this.selectedMeasurement = this._measurements[0];
};

/**
 * @private
 */
MeasureViewModel.prototype._deactivate = function () {
  this._mouseHandler.deactivate();
  this.selectedMeasurement = undefined;
  this.reset();
};

MeasureViewModel.prototype.onMorph = function (
  transitioner,
  oldMode,
  newMode,
  isMorphing
) {
  this.reset();
};

/**
 * Resets the widget.
 */
MeasureViewModel.prototype.reset = function () {
  this.instructionsVisible = false;
  this._measurements.forEach(function (measurement) {
    measurement.reset();
  });
};

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
MeasureViewModel.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget view model.
 */
MeasureViewModel.prototype.destroy = function () {
  this._deactivate();
  this._mouseHandler.destroy();
  this._measurements.forEach(function (measurement) {
    measurement.destroy();
  });
  this._scene.primitives.remove(this._primitives);
  return Cesium.destroyObject(this);
};

var html$1 =
  '<div class="cesium-measure-toolbar" data-bind="css: {expanded: expanded}">\n\
                   <div class="cesium-measure-button cesium-measure-button-main" data-bind="click: toggleActive, attr: {title: expanded ? \'Collapse\' : \'Expand\'}">\n\
                       <svg width="25px" height="25px" viewBox="0 0 30 30">\
                          <path d="M 14.851122,11.545456 25.578177,0.95157924 29.306163,4.6249483 18.537701,15.246448 M 15.097088,18.640104 4.1531358,29.434698 0.62547531,25.653101 11.515909,14.853004"/>\
                          <path d="M 22.983411,26.662767 0.8350882,3.9632787 4.2110211,0.77972226 26.222602,23.217308 Z"/>\
                          <path d="m 23.126668,26.856584 5.906658,2.311965 -2.630951,-5.79394"/>\
                          <path d="M 3.8120758,6.6472825 7.2277612,3.4338416"/>\
                          <path d="M 5.2416124,27.76234 3.6377555,26.08552"/>\
                          <path d="M 7.0148521,26.015847 5.4109952,24.339027"/>\
                          <path d="M 8.9787697,24.078675 7.3749129,22.401855"/>\
                          <path d="M 10.974467,22.173284 9.3706099,20.496464"/>\
                          <path d="m 12.990856,20.120081 -1.603857,-1.67682"/>\
                          <path d="m 19.676091,13.638423 -1.603857,-1.67682"/>\
                          <path d="M 21.449331,11.89193 19.845474,10.21511"/>\
                          <path d="M 23.413248,9.9547586 21.809392,8.2779376"/>\
                          <path d="M 25.448671,7.9858073 23.805089,6.3725466"/>\
                          <path d="M 27.425335,5.9961636 25.765864,4.3670131"/>\
                    </svg>\
               </div>\n\
                   <!-- ko foreach: measurements -->\n\
                   <div class="cesium-measure-button" data-bind="click: function($data) { $parent.selectedMeasurement = $data; }, attr: {title: type}, css: {active: $data === $parent.selectedMeasurement}, html: thumbnail"></div>\n\
                   <!-- /ko -->\n\
                   <div class="cesium-measure-button cesium-measure-help" title="Settings and Help" data-bind="click: toggleInstructions, css: {active: instructionsVisible}">\n\
                       <svg width="20px" height="20px" viewBox="0 0 30 30">\
                            <g transform="translate(0,-267)">\
                            <g>\
                            <path d="M 16.891904,289.31984 H 11.7387 q -0.02021,-1.11147 -0.02021,-1.35398 0,-2.50587 0.828554,-4.12256 0.828555,-1.61669 3.314218,-3.63756 2.485663,-2.02086 2.970671,-2.64733 0.747719,-0.99022 0.747719,-2.18253 0,-1.65711 -1.33377,-2.82921 -1.313562,-1.19231 -3.556721,-1.19231 -2.162325,0 -3.617348,1.23273 -1.4550219,1.23272 -2.0006553,3.7588 l -5.2138301,-0.64667 q 0.2222951,-3.61735 3.0717138,-6.14343 2.8696274,-2.52608 7.5176156,-2.52608 4.890492,0 7.780328,2.5665 2.889836,2.54629 2.889836,5.94134 0,1.8794 -1.071058,3.55672 -1.05085,1.67732 -4.526737,4.56715 -1.798569,1.49544 -2.243159,2.40483 -0.424381,0.90939 -0.383964,3.25359 z m -5.153204,7.63887 v -5.67863 h 5.678629 v 5.67863 z" />\
                            </g>\
                            </g>\
                        </svg>\
                   </div>\n\
               </div>\n\
               <div class="cesium-measure-instructions" data-bind="visible: instructionsVisible">\n\
                   <!-- ko foreach: measurements -->\n\
                   <div><div class="cesium-measure-icon" data-bind="html: icon" style="display: inline"></div><span data-bind="text: type"></span></div>\n\
                   <ul data-bind="foreach: instructions">\n\
                       <li data-bind="text: $data"></li>\n\
                   </ul>\n\
                   <hr>\n\
                   <!-- /ko -->\n\
               </div>';

/**
 * <span style="display: block; text-align: center;">
 * <img src="Images/Measure.png" width="348" height="44" alt="" />
 * <br/>测量工具栏展开。
 * </span>
 * <br/><br/>
 * Measure 是一个小部件，允许用户通过单击地球表面以及 Cesium3DTiles 和 glTF 模型来进行短暂的测量。
 *
 * <p>
 * 测量类型包括：
 * <ul>
 * <li>
 * 面积：计算任意多边形的面积。请注意，多边形区域不考虑地形的轮廓。
 * </li><li>
 * 距离：计算两点之间的线性距离。请注意，地球上的测量不符合地形。
 * </li><li>
 * 分量距离：计算两点之间的线性距离，包括水平和垂直分量以及直线的角度。请注意，地球上的测量不符合地形。
 * </li><li>
 * 高度：计算空间中某点与该点下方地形之间的线性距离。如果在 2D 模式下激活，该值将始终为 0。
 * </li><li>
 * 水平：计算相对于 WGS84 椭球处于相同高度的两点之间的线性距离。
 * </li><li>
 * 点：显示空间中指定点的经纬度坐标和高于地形的高度。
 * </li><li>
 * 垂直：计算经度/纬度相同但高度不同的两点之间的直线距离。如果在 2D 模式下激活，该值将始终为 0。
 * </li>
 * </ul>
 * </p>
 *
 * 请注意，并非所有浏览器都支持在 3D 瓷砖和模型上绘制测量值。检查 tilesetMeasurementSupported 以查看它是否受支持。
 *
 * @ionsdk
 *
 * @see 面积测量
 * @see 距离测量
 * @see 高度测量
 * @see 水平测量
 * @see 点测量
 * @see 垂直测量
 *
 * @alias Measure
 * @constructor
 *
 * @param {Object} options 具有以下属性的对象
 * @param {String|Element} options.container 小部件的容器
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} [options.units] 默认的测量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 * @param {PrimitiveCollection} [options.primitives] 存储测量基元的集合
 *
 * @demo <a href="/Apps/Sandcastle/index.html?src=Measure%20Widget.html">Cesium Sandcastle 测量小部件演示</a>
 *
 * @example
 * // In HTML head, include a link to the Measure.css stylesheet,
 * // and in the body, include: <div id="measureContainer"></div>
 * // Note: This code assumes you already have a Scene instance.
 *
 * var measureWidget = new Cesium.Measure({
 *      container : 'measureContainer',
 *      scene : scene,
 *      units : new Cesium.MeasureUnits({
 *          distanceUnits : Cesium.DistanceUnits.METERS,
 *          areaUnits : Cesium.AreaUnits.SQUARE_METERS,
 *          volumeUnits : Cesium.VolumeUnits.CUBIC_FEET,
 *          angleUnits : Cesium.AngleUnits.DEGREES,
 *          slopeUnits : Cesium.AngleUnits.GRADE
 *      })
 * });
 */
function Measure(options) {
  options = Cesium.defaultValue(options, Cesium.defaultValue.EMPTY_OBJECT);
  var container = options.container;

  //>>includeStart('debug', pragmas.debug);
  Cesium.Check.defined("options.container", container);
  Cesium.Check.defined("options.scene", options.scene);
  //>>includeEnd('debug');

  var element = createDomNode(html$1);

  container = getElement(container);
  element = container.appendChild(element);

  var viewModel = new MeasureViewModel(options);

  Cesium.knockout.applyBindings(viewModel, container);

  this._viewModel = viewModel;
  this._container = container;
  this._element = element;
  this._dropdown = element.getElementsByClassName(
    "cesium-measure-instructions"
  )[0];
}

Object.defineProperties(Measure.prototype, {
  /**
   * Gets the parent container.
   * @memberof Measure.prototype
   *
   * @type {Element}
   * @readonly
   */
  container: {
    get: function get() {
      return this._container;
    }
  },

  /**
   * Gets the view model.
   * @memberof Measure.prototype
   *
   * @type {MeasureViewModel}
   * @readonly
   */
  viewModel: {
    get: function get() {
      return this._viewModel;
    }
  },

  /**
   * Gets whether drawing a measurement on a Cesium3DTileset or Model is supported
   * @memberof Measure.prototype
   *
   * @type {Boolean}
   * @readonly
   */
  tilesetMeasurementSupported: {
    get: function get() {
      return this._scene.pickPositionSupported;
    }
  }
});

/**
 * @returns {Boolean} true if the object has been destroyed, false otherwise.
 */
Measure.prototype.isDestroyed = function () {
  return false;
};

/**
 * Destroys the widget.  Should be called if permanently
 * removing the widget from layout.
 */
Measure.prototype.destroy = function () {
  this._viewModel.destroy();
  Cesium.knockout.cleanNode(this._container);
  this._container.removeChild(this._element);

  return Cesium.destroyObject(this);
};

/**
 * 将 Measure 小部件添加到 Viewer 小部件的 mixin。
 * 该函数不是直接调用，而是通常作为参数传递给 {@link Viewer#extend}，如下例所示。
 * @exports viewerMeasureMixin
 * @ionsdk
 *
 * @param {Viewer} viewer 查看器实例。
 * @param {Object} [options] 具有以下属性的对象：
 * @param {String|Element} options.container 小部件的容器
 * @param {Scene} options.scene 场景
 * @param {MeasureUnits} [options.units=] 默认的测量单位
 * @param {String} [options.locale] {@link https://tools.ietf.org/html/rfc5646|BCP 47 语言标签} 字符串自定义语言敏感数字格式。如果 <code>undefined</code>，则使用运行时的默认语言环境。请参阅{@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Intl#Locale_identification_and_negotiation|MDN 上的国际页面}
 *
 * @exception {DeveloperError} 查看器是必需的。
 *
 * @example
 * var viewer = new Cesium.Viewer('cesiumContainer');
 * viewer.extend(Cesium.viewerMeasureMixin);
 *
 */
function viewerMeasureMixin(viewer, options) {
  //>>includeStart('debug', pragmas.debug);
  if (!Cesium.defined(viewer)) {
    throw new Cesium.DeveloperError("viewer is required.");
  }
  //>>includeEnd('debug');

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

  Object.defineProperties(viewer, {
    measure: {
      get: function get() {
        return measure;
      }
    }
  });
}

export {
  AngleUnits,//用于测量小部件的角度单位。
  AreaMeasurement,//创建多边形面积测量。
  AreaUnits,//用于度量小部件的面积单位。
  // ClippingPlanesEditor, //裁剪平面编辑器, 在另一个文件中
  // formatOptionsFunction, //格式选项功能,未找到相关用处和源码来源
  // isPickableCallback,//未找到相关用处和源码来源
  DistanceMeasurement, //在两点之间绘制测量值。
  DistanceUnits,//用于测量小部件的距离单位。
  EditorMode,//平移,旋转,缩放
  getSlope,//计算由窗口坐标定义的点处的斜率。
  HeightMeasurement,//在选定点和该点下方的地面之间绘制测量值。
  HorizontalMeasurement, //在具有相同高度的两个点之间绘制测量值。
  Measure,//面积测量  距离测量  高度测量  水平测量  点测量  垂直测量
  Measurement,//定义测量的抽象类。
  MeasurementMouseHandler, //用于激活和处理测量小部件的鼠标交互的辅助类。
  MeasurementSettings, //包含用于配置测量小部件基元样式的选项。
  MeasureUnits,//用于度量小部件的度量单位。
  MeasureViewModel,//用于进行短暂测量的小部件。
  PointMeasurement,//绘制一个点以及该点的经度、纬度、高度和坡度。
  PolylineMeasurement, //创建多线距离测量。
  TransformEditor,//用于编辑对象变换的工具
  TransformEditorViewModel,//创建交互式变换编辑器
  VerticalMeasurement, //在仅高度不同的两点之间绘制测量值。
  viewerMeasureMixin //将 Measure 小部件添加到 Viewer 小部件的 mixin。

  // 常用
  // MeasureUnits,
  // DistanceUnits$1,
  // VolumeUnits,
  // TransformEditor,
  // viewerMeasureMixin
};
// 参考 https://github1s.com/Construkted-Reality/edd6b-Construkted/blob/master/edd-cesiumjs-customize/includes/js/CesiumIonSDKPlugin.js
// https://cesium.com/learn/ion-sdk/ref-doc/
