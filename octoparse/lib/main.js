(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["webpackNumbers"] = factory();
	else
		root["webpackNumbers"] = factory();
})(global, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _octoParse__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./octoParse */ "./src/octoParse.js");
/* harmony import */ var _mountAction__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./mountAction */ "./src/mountAction.js");


var octoparse = {
  htmlParse: _octoParse__WEBPACK_IMPORTED_MODULE_0__["htmlParse"],
  install: _octoParse__WEBPACK_IMPORTED_MODULE_0__["install"],
  mountAction: _mountAction__WEBPACK_IMPORTED_MODULE_1__["default"]
};
/* harmony default export */ __webpack_exports__["default"] = (octoparse);

/***/ }),

/***/ "./src/mountAction.js":
/*!****************************!*\
  !*** ./src/mountAction.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// 图片点击事件
function octoParseImgTap(e) {
  var that = this;
  var nowImgUrl = e.currentTarget.dataset.src;
  var tagFrom = e.currentTarget.dataset.from;

  if (typeof tagFrom != 'undefined' && tagFrom.length > 0) {
    wx.previewImage({
      current: nowImgUrl,
      // 当前显示图片的http链接
      // urls: that.data[tagFrom].imageUrls // 需要预览的图片http链接列表
      urls: [nowImgUrl]
    });
  }
} /// a 跳转事件


function octoParseTagATap(e) {
  var href = e.currentTarget.dataset.src;
} /// 默认事件


function defaultEvent(e) {}

function mountDefaultAction(wx) {
  wx.octoParseImgTap = octoParseImgTap;
  wx.octoParseTagATap = octoParseTagATap;
  wx.defaultEvent = defaultEvent;
} /////eventMap增加事件


function addEvent2EventMap(eventMap, opt) {
  if (opt.filter) {
    if (opt.filter.indexOf('#') === 0) {
      var id = opt.filter.slice(1);

      if (!eventMap['id'][id]) {
        eventMap['id'][id] = {}; // eventMap['id'][id] = Object.assign(eventMap['id'][id], opt.events); 
      }

      eventMap['id'][id] = Object.assign(eventMap['id'][id], opt.events);
    } else if (opt.filter.indexOf('.') === 0) {
      var className = opt.filter.slice(1);

      if (!eventMap['class'][className]) {
        eventMap['class'][className] = {}; // eventMap['class'][className] = Object.assign(eventMap['class'][className], opt.events);
      }

      eventMap['class'][className] = Object.assign(eventMap['class'][className], opt.events);
    }
  } else if (!opt.filter) {
    eventMap['base'] = Object.assign(eventMap['base'], opt.events);
  }
}

function findClassInRule(ruleClass, classStr) {
  var res = '';
  if (!classStr) return res;
  var classArray = classStr.split(' ');
  var length = classArray.length;

  for (var i = length - 1; i >= 0; i--) {
    var className = classArray[i].slice(1);

    if (ruleClass[className]) {
      res = className;
      break;
    }
  }

  return res;
} /////返回默认方法


function defaultEventName(e) {
  switch (e.type) {
    case 'tap':
      if (e.currentTarget.dataset.tag == 'img') {
        octoParseImgTap(e);
      } else if (e.currentTarget.dataset.tag == 'a') {
        octoParseTagATap(e);
      }

      break;

    default:
      defaultEvent(e);
  }
} ////生成挂载代理事件


function generateAgentFunc(optionArray) {
  var rule = {};

  if (Array.isArray(optionArray)) {
    optionArray.forEach(function (opt) {
      if (!rule[opt.tag]) {
        rule[opt.tag] = {
          base: {},
          class: {},
          id: {}
        };
        addEvent2EventMap(rule[opt.tag], opt);
      } else {
        addEvent2EventMap(rule[opt.tag], opt);
      }
    });
  }

  return function (e) {
    var dataset = e.currentTarget.dataset;

    if (dataset && rule[dataset.tag]) {
      if (rule[dataset.tag]['id'][dataset.id]) {
        rule[dataset.tag]['id'][dataset.id][e.type](e);
      } else if (findClassInRule(rule[dataset.tag]['class'], dataset.class)) {
        var className = findClassInRule(rule[dataset.tag]['class'], dataset.class);
        rule[dataset.tag]['class'][className][e.type](e);
      } else if (typeof rule[dataset.tag]['base'][e.type] == 'function') {
        rule[dataset.tag]['base'][e.type](e);
      } else {
        defaultEventName(e);
      }
    } else {
      return defaultEventName(e);
    }
  };
} /////事件挂载函数


function mountAction(wx, optionArray) {
  // mountDefaultAction(wx);  ////挂载默认事件
  // registerEvent2Page(wx, optionArray);  ////在page上注册所有的事件
  var agentFunc = generateAgentFunc(optionArray);
  wx.agentFunc = agentFunc; ////注册代理事件
} // module.exports = {
//     mountAction: mountAction
// }


/* harmony default export */ __webpack_exports__["default"] = (mountAction);

/***/ }),

/***/ "./src/octoParse.js":
/*!**************************!*\
  !*** ./src/octoParse.js ***!
  \**************************/
/*! exports provided: htmlParse, install */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "htmlParse", function() { return htmlParse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "install", function() { return install; });
/* harmony import */ var _parse_html2json__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./parse/html2json */ "./src/parse/html2json.js");
/**
 * utils函数引入
 **/
 // function agentFunc(){
// };

/**
 * 主函数入口区
 **/

function htmlParse() {
  var data = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '<div></div>';
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var transData = {}; //存放转化后的数据

  var res = {}; //返回的数据

  transData = Object(_parse_html2json__WEBPACK_IMPORTED_MODULE_0__["html2json"])(data, 'root', options); // console.log('解析结果是', transData);

  res = transData;
  return res;
}
/**
 * plugin挂载方法
 **/


function install(Vue) {
  Vue.prototype.$htmlParse = htmlParse;
  Vue.prototype.$agentFunc = agentFunc;
}



/***/ }),

/***/ "./src/parse/constant/index.js":
/*!*************************************!*\
  !*** ./src/parse/constant/index.js ***!
  \*************************************/
/*! exports provided: startTag, endTag, attr, empty, block, inline, closeSelf, fillAttrs, special, __placeImgeUrlHttps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "startTag", function() { return startTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "endTag", function() { return endTag; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "attr", function() { return attr; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "empty", function() { return empty; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "block", function() { return block; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "inline", function() { return inline; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "closeSelf", function() { return closeSelf; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fillAttrs", function() { return fillAttrs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "special", function() { return special; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__placeImgeUrlHttps", function() { return __placeImgeUrlHttps; });
// Regular Expressions for parsing tags and attributes
var startTag = /^<([-A-Za-z0-9_]+)((?:\s+[a-zA-Z_:][-a-zA-Z0-9_:.]*(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/;
var endTag = /^<\/([-A-Za-z0-9_]+)[^>]*>/;
var attr = /([a-zA-Z_:][-a-zA-Z0-9_:.]*)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g; // Empty Elements - HTML 5

var empty = makeMap("area,base,basefont,br,col,frame,hr,img,input,link,meta,param,embed,command,keygen,source,track,wbr"); // Block Elements - HTML 5

var block = makeMap("a,address,code,article,applet,aside,audio,blockquote,button,canvas,center,dd,del,dir,div,dl,dt,fieldset,figcaption,figure,footer,form,frameset,h1,h2,h3,h4,h5,h6,header,hgroup,hr,iframe,ins,isindex,li,map,menu,noframes,noscript,object,ol,output,p,pre,section,script,table,tbody,td,tfoot,th,thead,tr,ul,video"); // Inline Elements - HTML 5

var inline = makeMap("abbr,acronym,applet,b,basefont,bdo,big,br,button,cite,del,dfn,em,font,i,iframe,img,input,ins,kbd,label,map,object,q,s,samp,script,select,small,span,strike,strong,sub,sup,textarea,tt,u,let"); // Elements that you can, intentionally, leave open
// (and which close themselves)

var closeSelf = makeMap("colgroup,dd,dt,li,options,p,td,tfoot,th,thead,tr"); // Attributes that have their values filled in disabled="disabled"

var fillAttrs = makeMap("checked,compact,declare,defer,disabled,ismap,multiple,nohref,noresize,noshade,nowrap,readonly,selected"); // Special Elements (can contain anything)

var special = makeMap("wxxxcode-style,script,style,view,scroll-view,block");
var __placeImgeUrlHttps = "https";

function makeMap(str) {
  var obj = {},
      items = str.split(",");

  for (var i = 0; i < items.length; i++) {
    obj[items[i]] = true;
  }

  return obj;
}



/***/ }),

/***/ "./src/parse/html2json.js":
/*!********************************!*\
  !*** ./src/parse/html2json.js ***!
  \********************************/
/*! exports provided: html2json */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "html2json", function() { return html2json; });
/* harmony import */ var _utils_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/index */ "./src/parse/utils/index.js");
/* harmony import */ var _htmlparser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./htmlparser */ "./src/parse/htmlparser.js");
/* harmony import */ var _utils_decode__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils/decode */ "./src/parse/utils/decode.js");
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./constant/index */ "./src/parse/constant/index.js");
/**
 * html2Json 改造来自: https://github.com/Jxck/html2json
 * 
 */





function html2json(html) {
  var bindName = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'root';
  var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
  //处理字符串
  html = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["removeDOCTYPE"])(html);
  html = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["trimHtml"])(html);
  html = Object(_utils_decode__WEBPACK_IMPORTED_MODULE_2__["default"])(html); //生成node节点

  var bufArray = [];
  var results = {
    node: bindName,
    nodes: [],
    images: [],
    imageUrls: []
  };
  var index = 0;
  Object(_htmlparser__WEBPACK_IMPORTED_MODULE_1__["HTMLParser"])(html, {
    start: function start(tag, attrs, unary) {
      var node = {
        node: 'element',
        tag: tag
      };

      if (bufArray.length === 0) {
        node.index = index.toString();
        index += 1;
      } else {
        var parent = bufArray[0];

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        node.index = parent.index + '.' + parent.nodes.length;
      }

      if (_constant_index__WEBPACK_IMPORTED_MODULE_3__["block"][tag]) {
        node.tagType = "block";
      } else if (_constant_index__WEBPACK_IMPORTED_MODULE_3__["inline"][tag]) {
        node.tagType = "inline";
      } else if (_constant_index__WEBPACK_IMPORTED_MODULE_3__["closeSelf"][tag]) {
        node.tagType = "closeSelf";
      }

      if (attrs.length !== 0) {
        node.attr = attrs.reduce(function (pre, attr) {
          var name = attr.name;
          var value = attr.value;

          if (name == 'class') {
            // console.dir(value);
            //  value = value.join("")
            node.classStr = value;
          } // has multi attibutes
          // make it array of attribute


          if (name == 'style') {
            node.styleStr = value;
          }

          if (value.match(/ /) && name !== 'style') {
            value = value.split(' ');
          } else if (value.match(/;/) && name === 'style') {
            value = value.split(';');
          } // if attr already exists
          // merge it


          if (pre[name]) {
            if (Array.isArray(pre[name])) {
              // already array, push to last
              pre[name].push(value);
            } else {
              // single value, make it array
              pre[name] = [pre[name], value];
            }
          } else {
            // not exist, put it
            pre[name] = value;
          }

          return pre;
        }, {});
      } //对img添加额外数据


      if (node.tag === 'img') {
        node.imgIndex = results.images.length;
        var imgUrl = node.attr.src;

        if (imgUrl[0] == '') {
          imgUrl.splice(0, 1);
        }

        imgUrl = Object(_utils_index__WEBPACK_IMPORTED_MODULE_0__["urlToHttpUrl"])(imgUrl, _constant_index__WEBPACK_IMPORTED_MODULE_3__["__placeImgeUrlHttps"]);
        node.attr.src = imgUrl;
        node.from = bindName; // node.bindtap = test;

        results.images.push(node);
        results.imageUrls.push(imgUrl);
      } // 处理font标签样式属性


      if (node.tag === 'font') {
        var fontSize = ['x-small', 'small', 'medium', 'large', 'x-large', 'xx-large', '-webkit-xxx-large'];
        var styleAttrs = {
          'color': 'color',
          'face': 'font-family',
          'size': 'font-size'
        };
        if (!node.attr.style) node.attr.style = [];
        if (!node.styleStr) node.styleStr = '';

        for (var key in styleAttrs) {
          if (node.attr[key]) {
            var value = key === 'size' ? fontSize[node.attr[key] - 1] : node.attr[key];
            node.attr.style.push(styleAttrs[key]);
            node.attr.style.push(value);
            node.styleStr += styleAttrs[key] + ': ' + value + ';';
          }
        }
      } //临时记录source资源


      if (node.tag === 'source') {
        results.source = node.attr.src;
      }

      if (unary) {
        // if this tag doesn't have end tag
        // like <img src="hoge.png"/>
        // add to parents
        var parent = bufArray[0] || results;

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        parent.nodes.push(node);
      } else {
        bufArray.unshift(node);
      }

      if (!node.styleStr) {
        node.styleStr = '';
      }

      if (!node.classStr) {
        node.classStr = '';
      } ////调用插件


      if (options && Array.isArray(options.plugins)) {
        options.plugins.forEach(function (plugin) {
          if (typeof plugin === 'function') {
            plugin(node);
          }
        });
      } ////调用visitors 


      if (options && options.visitors) {
        var func = options.visitors;

        if (func[node.tag]) {
          func[node.tag](node);
        }
      }
    },
    end: function end(tag) {
      //debug(tag);
      // merge into parent tag
      var node = bufArray.shift();
      if (node.tag !== tag) console.error('invalid state: mismatch end tag'); //当有缓存source资源时于于video补上src资源

      if (node.tag === 'video' && results.source) {
        node.attr.src = results.source;
        delete results.source;
      }

      if (bufArray.length === 0) {
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        parent.nodes.push(node);
      }
    },
    chars: function chars(text) {
      //debug(text);
      var node = {
        node: 'text',
        text: text // textArray:transEmojiStr(text)

      };

      if (bufArray.length === 0) {
        node.index = index.toString();
        index += 1;
        results.nodes.push(node);
      } else {
        var parent = bufArray[0];

        if (parent.nodes === undefined) {
          parent.nodes = [];
        }

        node.index = parent.index + '.' + parent.nodes.length;
        parent.nodes.push(node);
      }
    },
    comment: function comment(text) {//debug(text);
      // var node = {
      //     node: 'comment',
      //     text: text,
      // };
      // var parent = bufArray[0];
      // if (parent.nodes === undefined) {
      //     parent.nodes = [];
      // }
      // parent.nodes.push(node);
    }
  });
  return results.nodes;
}

;


/***/ }),

/***/ "./src/parse/htmlparser.js":
/*!*********************************!*\
  !*** ./src/parse/htmlparser.js ***!
  \*********************************/
/*! exports provided: HTMLParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HTMLParser", function() { return HTMLParser; });
/* harmony import */ var _constant_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./constant/index */ "./src/parse/constant/index.js");
/**
 * 
 * htmlParser改造自: https://github.com/blowsie/Pure-JavaScript-HTML5-Parser
 * 
 */


function HTMLParser(html, handler) {
  var index,
      chars,
      match,
      stack = [],
      last = html;

  stack.last = function () {
    return this[this.length - 1];
  };

  while (html) {
    chars = true; // console.log('stack.last是', stack.last());
    // Make sure we're not in a script or style element

    if (!stack.last() || !_constant_index__WEBPACK_IMPORTED_MODULE_0__["special"][stack.last()]) {
      // Comment
      if (html.indexOf("<!--") == 0) {
        index = html.indexOf("-->");

        if (index >= 0) {
          if (handler.comment) handler.comment(html.substring(4, index));
          html = html.substring(index + 3);
          chars = false;
        } // end tag

      } else if (html.indexOf("</") == 0) {
        match = html.match(_constant_index__WEBPACK_IMPORTED_MODULE_0__["endTag"]);

        if (match) {
          html = html.substring(match[0].length);
          match[0].replace(_constant_index__WEBPACK_IMPORTED_MODULE_0__["endTag"], parseEndTag); ///这句话干嘛用的？
          // console.log('替换完成后的match[0]是', match[0]);

          chars = false;
        } // start tag

      } else if (html.indexOf("<") == 0) {
        match = html.match(_constant_index__WEBPACK_IMPORTED_MODULE_0__["startTag"]); // console.log('match的是', match);

        if (match) {
          html = html.substring(match[0].length); // console.log('replace前的是', match[0])	

          match[0].replace(_constant_index__WEBPACK_IMPORTED_MODULE_0__["startTag"], parseStartTag); // console.log('replace后的是', match[0])

          chars = false;
        }
      }

      if (chars) {
        index = html.indexOf("<");
        var text = '';

        while (index === 0) {
          text += "<";
          html = html.substring(1);
          index = html.indexOf("<");
        }

        text += index < 0 ? html : html.substring(0, index);
        html = index < 0 ? "" : html.substring(index);
        if (handler.chars) handler.chars(text);
      }
    } else {
      html = html.replace(new RegExp("([\\s\\S]*?)<\/" + stack.last() + "[^>]*>"), function (all, text) {
        text = text.replace(/<!--([\s\S]*?)-->|<!\[CDATA\[([\s\S]*?)]]>/g, "$1$2");
        if (handler.chars) handler.chars(text);
        return "";
      });
      parseEndTag("", stack.last());
    }

    if (html == last) throw "Parse Error: " + html;
    last = html;
  } // Clean up any remaining tags


  parseEndTag();

  function parseStartTag(tag, tagName, rest, unary) {
    tagName = tagName.toLowerCase();

    if (_constant_index__WEBPACK_IMPORTED_MODULE_0__["block"][tagName]) {
      while (stack.last() && _constant_index__WEBPACK_IMPORTED_MODULE_0__["inline"][stack.last()]) {
        parseEndTag("", stack.last());
      }
    }

    if (_constant_index__WEBPACK_IMPORTED_MODULE_0__["closeSelf"][tagName] && stack.last() == tagName) {
      parseEndTag("", tagName);
    }

    unary = _constant_index__WEBPACK_IMPORTED_MODULE_0__["empty"][tagName] || !!unary;
    if (!unary) stack.push(tagName);

    if (handler.start) {
      var attrs = []; // console.log('rest是', rest);

      rest.replace(_constant_index__WEBPACK_IMPORTED_MODULE_0__["attr"], function (match, name) {
        // console.log('match是', match);
        // console.log('name是', name);
        // console.log('arguments是',arguments.length)
        var value = arguments[2] ? arguments[2] : arguments[3] ? arguments[3] : arguments[4] ? arguments[4] : _constant_index__WEBPACK_IMPORTED_MODULE_0__["fillAttrs"][name] ? name : ""; // console.log('value是', value);

        attrs.push({
          name: name,
          value: value,
          escaped: value.replace(/(^|[^\\])"/g, '$1\\\"') //"

        });
      });

      if (handler.start) {
        handler.start(tagName, attrs, unary);
      }
    }
  }

  function parseEndTag(tag, tagName) {
    // If no tag name is provided, clean shop
    if (!tagName) var pos = 0; // Find the closest opened tag of the same type
    else {
        tagName = tagName.toLowerCase();

        for (var pos = stack.length - 1; pos >= 0; pos--) {
          if (stack[pos] == tagName) break;
        }
      }

    if (pos >= 0) {
      // Close all the open elements, up the stack
      for (var i = stack.length - 1; i >= pos; i--) {
        if (handler.end) handler.end(stack[i]);
      } // Remove the open elements from the stack


      stack.length = pos;
    }
  }
}

;


/***/ }),

/***/ "./src/parse/utils/decode.js":
/*!***********************************!*\
  !*** ./src/parse/utils/decode.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return strDecode; });
// HTML 支持的数学符号
function strNumDiscode(str) {
  str = str.replace(/&forall;/g, '∀');
  str = str.replace(/&part;/g, '∂');
  str = str.replace(/&exists;/g, '∃');
  str = str.replace(/&empty;/g, '∅');
  str = str.replace(/&nabla;/g, '∇');
  str = str.replace(/&isin;/g, '∈');
  str = str.replace(/&notin;/g, '∉');
  str = str.replace(/&ni;/g, '∋');
  str = str.replace(/&prod;/g, '∏');
  str = str.replace(/&sum;/g, '∑');
  str = str.replace(/&minus;/g, '−');
  str = str.replace(/&lowast;/g, '∗');
  str = str.replace(/&radic;/g, '√');
  str = str.replace(/&prop;/g, '∝');
  str = str.replace(/&infin;/g, '∞');
  str = str.replace(/&ang;/g, '∠');
  str = str.replace(/&and;/g, '∧');
  str = str.replace(/&or;/g, '∨');
  str = str.replace(/&cap;/g, '∩');
  str = str.replace(/&cap;/g, '∪');
  str = str.replace(/&int;/g, '∫');
  str = str.replace(/&there4;/g, '∴');
  str = str.replace(/&sim;/g, '∼');
  str = str.replace(/&cong;/g, '≅');
  str = str.replace(/&asymp;/g, '≈');
  str = str.replace(/&ne;/g, '≠');
  str = str.replace(/&le;/g, '≤');
  str = str.replace(/&ge;/g, '≥');
  str = str.replace(/&sub;/g, '⊂');
  str = str.replace(/&sup;/g, '⊃');
  str = str.replace(/&nsub;/g, '⊄');
  str = str.replace(/&sube;/g, '⊆');
  str = str.replace(/&supe;/g, '⊇');
  str = str.replace(/&oplus;/g, '⊕');
  str = str.replace(/&otimes;/g, '⊗');
  str = str.replace(/&perp;/g, '⊥');
  str = str.replace(/&sdot;/g, '⋅');
  return str;
} //HTML 支持的希腊字母


function strGreeceDiscode(str) {
  str = str.replace(/&Alpha;/g, 'Α');
  str = str.replace(/&Beta;/g, 'Β');
  str = str.replace(/&Gamma;/g, 'Γ');
  str = str.replace(/&Delta;/g, 'Δ');
  str = str.replace(/&Epsilon;/g, 'Ε');
  str = str.replace(/&Zeta;/g, 'Ζ');
  str = str.replace(/&Eta;/g, 'Η');
  str = str.replace(/&Theta;/g, 'Θ');
  str = str.replace(/&Iota;/g, 'Ι');
  str = str.replace(/&Kappa;/g, 'Κ');
  str = str.replace(/&Lambda;/g, 'Λ');
  str = str.replace(/&Mu;/g, 'Μ');
  str = str.replace(/&Nu;/g, 'Ν');
  str = str.replace(/&Xi;/g, 'Ν');
  str = str.replace(/&Omicron;/g, 'Ο');
  str = str.replace(/&Pi;/g, 'Π');
  str = str.replace(/&Rho;/g, 'Ρ');
  str = str.replace(/&Sigma;/g, 'Σ');
  str = str.replace(/&Tau;/g, 'Τ');
  str = str.replace(/&Upsilon;/g, 'Υ');
  str = str.replace(/&Phi;/g, 'Φ');
  str = str.replace(/&Chi;/g, 'Χ');
  str = str.replace(/&Psi;/g, 'Ψ');
  str = str.replace(/&Omega;/g, 'Ω');
  str = str.replace(/&alpha;/g, 'α');
  str = str.replace(/&beta;/g, 'β');
  str = str.replace(/&gamma;/g, 'γ');
  str = str.replace(/&delta;/g, 'δ');
  str = str.replace(/&epsilon;/g, 'ε');
  str = str.replace(/&zeta;/g, 'ζ');
  str = str.replace(/&eta;/g, 'η');
  str = str.replace(/&theta;/g, 'θ');
  str = str.replace(/&iota;/g, 'ι');
  str = str.replace(/&kappa;/g, 'κ');
  str = str.replace(/&lambda;/g, 'λ');
  str = str.replace(/&mu;/g, 'μ');
  str = str.replace(/&nu;/g, 'ν');
  str = str.replace(/&xi;/g, 'ξ');
  str = str.replace(/&omicron;/g, 'ο');
  str = str.replace(/&pi;/g, 'π');
  str = str.replace(/&rho;/g, 'ρ');
  str = str.replace(/&sigmaf;/g, 'ς');
  str = str.replace(/&sigma;/g, 'σ');
  str = str.replace(/&tau;/g, 'τ');
  str = str.replace(/&upsilon;/g, 'υ');
  str = str.replace(/&phi;/g, 'φ');
  str = str.replace(/&chi;/g, 'χ');
  str = str.replace(/&psi;/g, 'ψ');
  str = str.replace(/&omega;/g, 'ω');
  str = str.replace(/&thetasym;/g, 'ϑ');
  str = str.replace(/&upsih;/g, 'ϒ');
  str = str.replace(/&piv;/g, 'ϖ');
  str = str.replace(/&middot;/g, '·');
  return str;
} // 


function strcharacterDiscode(str) {
  // 加入常用解析
  str = str.replace(/&nbsp;/g, ' ');
  str = str.replace(/&quot;/g, "'");
  str = str.replace(/&amp;/g, '&'); // str = str.replace(/&lt;/g, '‹');
  // str = str.replace(/&gt;/g, '›');

  str = str.replace(/&lt;/g, '<');
  str = str.replace(/&gt;/g, '>');
  str = str.replace(/&#8226;/g, '•');
  return str;
} // HTML 支持的其他实体


function strOtherDiscode(str) {
  str = str.replace(/&OElig;/g, 'Œ');
  str = str.replace(/&oelig;/g, 'œ');
  str = str.replace(/&Scaron;/g, 'Š');
  str = str.replace(/&scaron;/g, 'š');
  str = str.replace(/&Yuml;/g, 'Ÿ');
  str = str.replace(/&fnof;/g, 'ƒ');
  str = str.replace(/&circ;/g, 'ˆ');
  str = str.replace(/&tilde;/g, '˜');
  str = str.replace(/&ensp;/g, '');
  str = str.replace(/&emsp;/g, '');
  str = str.replace(/&thinsp;/g, '');
  str = str.replace(/&zwnj;/g, '');
  str = str.replace(/&zwj;/g, '');
  str = str.replace(/&lrm;/g, '');
  str = str.replace(/&rlm;/g, '');
  str = str.replace(/&ndash;/g, '–');
  str = str.replace(/&mdash;/g, '—');
  str = str.replace(/&lsquo;/g, '‘');
  str = str.replace(/&rsquo;/g, '’');
  str = str.replace(/&sbquo;/g, '‚');
  str = str.replace(/&ldquo;/g, '“');
  str = str.replace(/&rdquo;/g, '”');
  str = str.replace(/&bdquo;/g, '„');
  str = str.replace(/&dagger;/g, '†');
  str = str.replace(/&Dagger;/g, '‡');
  str = str.replace(/&bull;/g, '•');
  str = str.replace(/&hellip;/g, '…');
  str = str.replace(/&permil;/g, '‰');
  str = str.replace(/&prime;/g, '′');
  str = str.replace(/&Prime;/g, '″');
  str = str.replace(/&lsaquo;/g, '‹');
  str = str.replace(/&rsaquo;/g, '›');
  str = str.replace(/&oline;/g, '‾');
  str = str.replace(/&euro;/g, '€');
  str = str.replace(/&trade;/g, '™');
  str = str.replace(/&larr;/g, '←');
  str = str.replace(/&uarr;/g, '↑');
  str = str.replace(/&rarr;/g, '→');
  str = str.replace(/&darr;/g, '↓');
  str = str.replace(/&harr;/g, '↔');
  str = str.replace(/&crarr;/g, '↵');
  str = str.replace(/&lceil;/g, '⌈');
  str = str.replace(/&rceil;/g, '⌉');
  str = str.replace(/&lfloor;/g, '⌊');
  str = str.replace(/&rfloor;/g, '⌋');
  str = str.replace(/&loz;/g, '◊');
  str = str.replace(/&spades;/g, '♠');
  str = str.replace(/&clubs;/g, '♣');
  str = str.replace(/&hearts;/g, '♥');
  str = str.replace(/&diams;/g, '♦');
  str = str.replace(/&#39;/g, '\'');
  return str;
}

function strMoreDiscode(str) {
  str = str.replace(/\r\n/g, "");
  str = str.replace(/\n/g, "");
  str = str.replace(/code/g, "wxxxcode-style");
  return str;
}

function strDecode(str) {
  str = strNumDiscode(str);
  str = strGreeceDiscode(str);
  str = strcharacterDiscode(str);
  str = strOtherDiscode(str);
  str = strMoreDiscode(str);
  return str;
}

/***/ }),

/***/ "./src/parse/utils/index.js":
/*!**********************************!*\
  !*** ./src/parse/utils/index.js ***!
  \**********************************/
/*! exports provided: urlToHttpUrl, removeDOCTYPE, trimHtml */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "urlToHttpUrl", function() { return urlToHttpUrl; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeDOCTYPE", function() { return removeDOCTYPE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "trimHtml", function() { return trimHtml; });
function urlToHttpUrl(url, rep) {
  var patt1 = new RegExp("^//");
  var result = patt1.test(url);

  if (result) {
    url = rep + ":" + url;
  }

  return url;
}

function removeDOCTYPE(html) {
  return html.replace(/<\?xml.*\?>\n/, '').replace(/<.*!doctype.*\>\n/, '').replace(/<.*!DOCTYPE.*\>\n/, '');
}

function trimHtml(html) {
  return html.replace(/\r?\n+/g, '').replace(/<!--.*?-->/ig, '').replace(/\/\*.*?\*\//ig, '').replace(/[ ]+</ig, '<');
}



/***/ })

/******/ });
});
//# sourceMappingURL=main.js.map