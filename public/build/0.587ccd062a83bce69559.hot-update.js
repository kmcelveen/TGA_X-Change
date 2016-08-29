webpackHotUpdate(0,{

/***/ 76:
/***/ function(module, exports, __webpack_require__) {

	eval("'use strict';\n\nvar _react = __webpack_require__(77);\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactDom = __webpack_require__(233);\n\nvar _reactRedux = __webpack_require__(234);\n\nvar _redux = __webpack_require__(241);\n\nvar _App = __webpack_require__(!(function webpackMissingModule() { var e = new Error(\"Cannot find module \\\"./public/components/App\\\"\"); e.code = 'MODULE_NOT_FOUND'; throw e; }()));\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _reducers = __webpack_require__(511);\n\nvar _reducers2 = _interopRequireDefault(_reducers);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar styles = __webpack_require__(512);\n\nvar store = (0, _redux.createStore)(_reducers2.default);\n\n(0, _reactDom.render)(_react2.default.createElement(\n  _reactRedux.Provider,\n  { store: store },\n  _react2.default.createElement(_App2.default, null)\n), document.getElementById('app'));\n\n/*****************\n ** WEBPACK FOOTER\n ** ./index.js\n ** module id = 76\n ** module chunks = 0\n **/\n//# sourceURL=webpack:///./index.js?");

/***/ }

})