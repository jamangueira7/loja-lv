webpackJsonp([2],{

/***/ 1:
/***/ (function(module, exports) {

/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file.
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

module.exports = function normalizeComponent (
  rawScriptExports,
  compiledTemplate,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */
) {
  var esModule
  var scriptExports = rawScriptExports = rawScriptExports || {}

  // ES6 modules interop
  var type = typeof rawScriptExports.default
  if (type === 'object' || type === 'function') {
    esModule = rawScriptExports
    scriptExports = rawScriptExports.default
  }

  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (compiledTemplate) {
    options.render = compiledTemplate.render
    options.staticRenderFns = compiledTemplate.staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = injectStyles
  }

  if (hook) {
    var functional = options.functional
    var existing = functional
      ? options.render
      : options.beforeCreate

    if (!functional) {
      // inject component registration as beforeCreate hook
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    } else {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return existing(h, context)
      }
    }
  }

  return {
    esModule: esModule,
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(57);


/***/ }),

/***/ 57:
/***/ (function(module, exports, __webpack_require__) {


/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

window.Vue = __webpack_require__(3);

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

Vue.component('shopping', __webpack_require__(58));

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 58:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(59)
/* template */
var __vue_template__ = __webpack_require__(60)
/* template functional */
var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = null
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __vue_script__,
  __vue_template__,
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)
Component.options.__file = "resources/js/shoppings/components/Shoppings.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c0afab4", Component.options)
  } else {
    hotAPI.reload("data-v-0c0afab4", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['code', 'total', 'price'],
    data: function data() {
        return {
            shoppings_response: [],
            headers_response: [],
            logged: window.user || {}

        };
    },

    methods: {
        getShoppings: function getShoppings() {
            var _this = this;

            window.axios.get('/shoppingsjson').then(function (response) {
                _this.shoppings_response = response.data;
            });
        },
        getHeaders: function getHeaders() {
            var _this2 = this;

            window.axios.get('/headersjson').then(function (response) {
                _this2.headers_response = response.data;
            });
        }
    },
    mounted: function mounted() {
        this.getShoppings();
        this.getHeaders();
    }
});

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "card" },
    _vm._l(_vm.headers_response, function(headers) {
      return _c(
        "div",
        { staticClass: "card-content" },
        _vm._l(headers, function(header) {
          return _c("div", { staticClass: "card-text" }, [
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.code) + ": ")]),
              _vm._v(" " + _vm._s(header.code))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.total) + ": ")]),
              _vm._v("R$ " + _vm._s(header.total))
            ]),
            _c("br"),
            _vm._v(" "),
            _c(
              "ul",
              { staticClass: "collection" },
              _vm._l(_vm.shoppings_response, function(shopping) {
                return header.code === shopping.code
                  ? _c("li", { staticClass: "collection-item avatar" }, [
                      _c("img", {
                        staticClass: "circle",
                        attrs: { src: "/img/" + shopping.image, alt: "" }
                      }),
                      _vm._v(" "),
                      _c("span", { staticClass: "title" }, [
                        _c("b", [_vm._v(_vm._s(_vm.code) + ":")]),
                        _vm._v(" " + _vm._s(shopping.name))
                      ]),
                      _c("br"),
                      _vm._v(" "),
                      _c("span", { staticClass: "title" }, [
                        _c("b", [_vm._v(_vm._s(_vm.price) + ":")]),
                        _vm._v(" " + _vm._s(shopping.price))
                      ]),
                      _c("br")
                    ])
                  : _vm._e()
              })
            )
          ])
        })
      )
    })
  )
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0c0afab4", module.exports)
  }
}

/***/ })

},[56]);