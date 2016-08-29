webpackHotUpdate(0,{

/***/ 512:
/***/ function(module, exports, __webpack_require__) {

	eval("// style-loader: Adds some css to the DOM by adding a <style> tag\n\n// load the styles\nvar content = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"!!./../node_modules/css-loader/index.js!./styles.css\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\nif(typeof content === 'string') content = [[module.id, content, '']];\n// add the styles to the DOM\nvar update = __webpack_require__(515)(content, {});\nif(content.locals) module.exports = content.locals;\n// Hot Module Replacement\nif(true) {\n\t// When the styles change, update the <style> tags\n\tif(!content.locals) {\n\t\tmodule.hot.accept(513, function() {\n\t\t\tvar newContent = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"!!./../node_modules/css-loader/index.js!./styles.css\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\t\t\tif(typeof newContent === 'string') newContent = [[module.id, newContent, '']];\n\t\t\tupdate(newContent);\n\t\t});\n\t}\n\t// When the module is disposed, remove the <style> tags\n\tmodule.hot.dispose(function() { update(); });\n}\n\n/*****************\n ** WEBPACK FOOTER\n ** ./public/styles.css\n ** module id = 512\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./public/styles.css?");

/***/ }

})