/**
 * @title 简化为最简单的代码便于理解
 */


const modules = {
  "./src/index.js": function (module, exports, require) {
    eval("var a =  require(/*! ./math */ \"./src/math.js\")\r\n\r\na()\n\n//# sourceURL=webpack:///./src/index.js?");
  },


  "./src/math.js": function (module, exports) {
    eval("function add(){\r\n  console.log(\"this is module a\")\r\n}\r\n\r\nmodule.exports = add;\n\n//# sourceURL=webpack:///./src/math.js?");
  }

};

// The module cache
let installedModules = {};

// moduleId ./src/index.js
function require(moduleId) {

  if (installedModules[moduleId]) return installedModules[moduleId].exports;

  // 创建一个新的module
  let obj = { id: moduleId, loaded: false, exports: {} };

  // 把新的module放到缓存中
  installedModules[moduleId] = obj;

  // 执行 参数模块 的方法
  modules[moduleId].call(obj.exports, obj, obj.exports, require);
  obj.loaded = true;
  return obj.exports;
}

require.modules = modules;
require.cache = installedModules;

// define getter function for harmony exports
require.d = function (exports, name, getter) {
  if (!require.o(exports, name)) {
    Object.defineProperty(exports, name, {enumerable: true, get: getter});
  }
};

// define __esModule on exports
require.r = function (exports) {
  if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
    Object.defineProperty(exports, Symbol.toStringTag, {value: 'Module'});
  }
  Object.defineProperty(exports, '__esModule', {value: true});
};

// create a fake namespace object
// mode & 1: value is a module id, require it
// mode & 2: merge all properties of value into the ns
// mode & 4: return value when already ns object
// mode & 8|1: behave like require
require.t = function (value, mode) {
  if (mode & 1) value = require(value);
  if (mode & 8) return value;
  if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
  var ns = Object.create(null);
  require.r(ns);
  Object.defineProperty(ns, 'default', {enumerable: true, value: value});
  if (mode & 2 && typeof value != 'string') for (var key in value) require.d(ns, key, function (key) {
    return value[key];
  }.bind(null, key));
  return ns;
};

// getDefaultExport function for compatibility with non-harmony modules
require.n = function (module) {
  var getter = module && module.__esModule ?
    function getDefault() {
      return module['default'];
    } :
    function getModuleExports() {
      return module;
    };
  require.d(getter, 'a', getter);
  return getter;
};

// Object.prototype.hasOwnProperty.call
require.o = function (object, property) {
  return Object.prototype.hasOwnProperty.call(object, property);
};

// __webpack_public_path__
require.public_path = "";

require.start = "./src/index.js";
// Load entry module and return exports
require(require.start);

