webpackJsonp([3],{

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

/***/ 39:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),

/***/ 40:
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

Vue.component('product', __webpack_require__(43));

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 43:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(44)
/* template */
var __vue_template__ = __webpack_require__(45)
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
Component.options.__file = "resources/js/products/components/Products.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0deebca0", Component.options)
  } else {
    hotAPI.reload("data-v-0deebca0", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 44:
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
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    props: ['name', 'descripton', 'image', 'price', 'send', 'open', 'buy', 'details', 'category', 'newProduct'],

    data: function data() {
        return {
            products_response: [],
            categories_response: [],
            logged: window.user || {},
            products_to_save: {
                name: '',
                descripton: '',
                image: '',
                price: '',
                category_id: ''
            }
        };
    },

    methods: {
        save: function save() {
            var _this = this;

            window.axios.post('/products/new', this.products_to_save).then(function () {
                _this.getProducts();
            });
        },
        getProducts: function getProducts() {
            var _this2 = this;

            window.axios.get('/productsjson').then(function (response) {
                _this2.products_response = response.data;
            });
        },
        getCategory: function getCategory() {
            var _this3 = this;

            window.axios.get('/categoriesjson').then(function (response) {
                _this3.categories_response = response.data;
            });
        }
    },
    mounted: function mounted() {
        this.getProducts();
        this.getCategory();
    }
});

/***/ }),

/***/ 45:
/***/ (function(module, exports, __webpack_require__) {

var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "card" }, [
    _c("div", { staticClass: "card-content" }, [
      _c(
        "ul",
        { staticClass: "collection" },
        _vm._l(_vm.products_response.data, function(product) {
          return _c("li", { staticClass: "collection-item avatar" }, [
            _c("img", {
              staticClass: "circle",
              attrs: { src: "/img/" + product.image, alt: "" }
            }),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.name) + ":")]),
              _vm._v(" " + _vm._s(product.name))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.price) + ":")]),
              _vm._v(" R$ " + _vm._s(product.price))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.category) + ":")]),
              _vm._v(" "),
              _c(
                "a",
                {
                  staticClass: "modal-content",
                  attrs: {
                    href: "/products/listcategory/" + product.category.id
                  }
                },
                [_vm._v(_vm._s(product.category.name))]
              )
            ]),
            _vm._v(" "),
            _c("p", [
              _c("b", [_vm._v(_vm._s(_vm.descripton) + ":")]),
              _vm._v(" " + _vm._s(product.descripton) + " "),
              _c("br")
            ]),
            _vm._v(" "),
            _c("br"),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "modal-content",
                attrs: { href: "/card/" + product.id }
              },
              [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v(_vm._s(_vm.buy))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "modal-content",
                attrs: { href: "/products/" + product.id }
              },
              [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v(_vm._s(_vm.details))
                ])
              ]
            )
          ])
        })
      )
    ]),
    _vm._v(" "),
    _vm.logged.role == 0
      ? _c("div", { staticClass: "card-content" }, [
          _c("span", { staticClass: "card-title" }, [
            _vm._v(_vm._s(_vm.newProduct))
          ]),
          _vm._v(" "),
          _c(
            "form",
            {
              on: {
                submit: function($event) {
                  _vm.save()
                }
              }
            },
            [
              _c("div", { staticClass: "input-field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.products_to_save.name,
                      expression: "products_to_save.name"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.name },
                  domProps: { value: _vm.products_to_save.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.products_to_save,
                        "name",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.products_to_save.price,
                      expression: "products_to_save.price"
                    }
                  ],
                  attrs: { type: "number", placeholder: _vm.price },
                  domProps: { value: _vm.products_to_save.price },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.products_to_save,
                        "price",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-field" }, [
                _c("span", { staticClass: "card-text" }, [
                  _vm._v(_vm._s(_vm.category) + ":")
                ]),
                _vm._v(" "),
                _c(
                  "select",
                  {
                    directives: [
                      {
                        name: "model",
                        rawName: "v-model",
                        value: _vm.products_to_save.category_id,
                        expression: "products_to_save.category_id"
                      }
                    ],
                    staticClass: "browser-default",
                    attrs: { name: "category_id" },
                    on: {
                      change: function($event) {
                        var $$selectedVal = Array.prototype.filter
                          .call($event.target.options, function(o) {
                            return o.selected
                          })
                          .map(function(o) {
                            var val = "_value" in o ? o._value : o.value
                            return val
                          })
                        _vm.$set(
                          _vm.products_to_save,
                          "category_id",
                          $event.target.multiple
                            ? $$selectedVal
                            : $$selectedVal[0]
                        )
                      }
                    }
                  },
                  _vm._l(_vm.categories_response.data, function(category) {
                    return _c("option", { domProps: { value: category.id } }, [
                      _vm._v(_vm._s(category.name) + "\n                    ")
                    ])
                  })
                )
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-field" }, [
                _c("input", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.products_to_save.image,
                      expression: "products_to_save.image"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.image },
                  domProps: { value: _vm.products_to_save.image },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.products_to_save,
                        "image",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "input-field" }, [
                _c("textarea", {
                  directives: [
                    {
                      name: "model",
                      rawName: "v-model",
                      value: _vm.products_to_save.descripton,
                      expression: "products_to_save.descripton"
                    }
                  ],
                  staticClass: "materialize-textarea",
                  attrs: { placeholder: _vm.descripton },
                  domProps: { value: _vm.products_to_save.descripton },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.products_to_save,
                        "descripton",
                        $event.target.value
                      )
                    }
                  }
                })
              ]),
              _vm._v(" "),
              _c(
                "button",
                { staticClass: "btn red accent-2", attrs: { type: "submit" } },
                [_vm._v(_vm._s(_vm.send))]
              )
            ]
          )
        ])
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true
module.exports = { render: render, staticRenderFns: staticRenderFns }
if (false) {
  module.hot.accept()
  if (module.hot.data) {
    require("vue-hot-reload-api")      .rerender("data-v-0deebca0", module.exports)
  }
}

/***/ })

},[39]);