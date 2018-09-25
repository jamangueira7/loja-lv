webpackJsonp([4],{

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

/***/ 51:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(52);


/***/ }),

/***/ 52:
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

Vue.component('delivery', __webpack_require__(53));

var app = new Vue({
  el: '#app'
});

/***/ }),

/***/ 53:
/***/ (function(module, exports, __webpack_require__) {

var disposed = false
var normalizeComponent = __webpack_require__(1)
/* script */
var __vue_script__ = __webpack_require__(54)
/* template */
var __vue_template__ = __webpack_require__(55)
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
Component.options.__file = "resources/js/deliveries/components/Deliveries.vue"

/* hot reload */
if (false) {(function () {
  var hotAPI = require("vue-hot-reload-api")
  hotAPI.install(require("vue"), false)
  if (!hotAPI.compatible) return
  module.hot.accept()
  if (!module.hot.data) {
    hotAPI.createRecord("data-v-0c5849e8", Component.options)
  } else {
    hotAPI.reload("data-v-0c5849e8", Component.options)
  }
  module.hot.dispose(function (data) {
    disposed = true
  })
})()}

module.exports = Component.exports


/***/ }),

/***/ 54:
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
    props: ['name', 'phone', 'street', 'neighborhood', 'state', 'country', 'postalCode', 'complement', 'number', 'reference', 'send', 'open', 'edit', 'del', 'newDelivery'],
    data: function data() {
        return {
            deliveries_response: [],
            logged: window.user || {},
            deliveries_to_save: {
                name: '',
                phone: '',
                street: '',
                neighborhood: '',
                state: '',
                country: '',
                postalcode: '',
                complement: '',
                number: '',
                reference: ''
            }
        };
    },

    methods: {
        save: function save() {
            var _this = this;

            window.axios.post('/deliveries/new', this.deliveries_to_save).then(function () {
                _this.getDeliveries();
            });
        },
        getDeliveries: function getDeliveries() {
            var _this2 = this;

            window.axios.get('/deliveriesjson/' + this.logged.id).then(function (response) {
                _this2.deliveries_response = response.data;
            });
        }
    },
    mounted: function mounted() {
        this.getDeliveries();
    }
});

/***/ }),

/***/ 55:
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
        _vm._l(_vm.deliveries_response.data, function(delivery) {
          return _c("li", { staticClass: "collection-item avatar" }, [
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.name) + ":")]),
              _vm._v(" " + _vm._s(delivery.name))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.phone) + ":")]),
              _vm._v(" " + _vm._s(delivery.phone))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.street) + ":")]),
              _vm._v(" " + _vm._s(delivery.street))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.neighborhood) + ":")]),
              _vm._v(" " + _vm._s(delivery.neighborhood))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.state) + ":")]),
              _vm._v(" " + _vm._s(delivery.state))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.country) + ":")]),
              _vm._v(" " + _vm._s(delivery.country))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.postalCode) + ":")]),
              _vm._v(" " + _vm._s(delivery.postal_code))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.complement) + ":")]),
              _vm._v(" " + _vm._s(delivery.complement))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "number" }, [
              _c("b", [_vm._v(_vm._s(_vm.number) + ":")]),
              _vm._v(" " + _vm._s(delivery.number))
            ]),
            _c("br"),
            _vm._v(" "),
            _c("span", { staticClass: "title" }, [
              _c("b", [_vm._v(_vm._s(_vm.reference) + ":")]),
              _vm._v(" " + _vm._s(delivery.reference))
            ]),
            _c("br"),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "modal-content",
                attrs: { href: "/deliveries/" + delivery.id + "/edit" }
              },
              [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v(_vm._s(_vm.edit))
                ])
              ]
            ),
            _vm._v(" "),
            _c(
              "a",
              {
                staticClass: "modal-content",
                attrs: { href: "/deliveries/" + delivery.id + "/delete" }
              },
              [
                _c("i", { staticClass: "material-icons" }, [
                  _vm._v(_vm._s(_vm.del))
                ])
              ]
            )
          ])
        })
      )
    ]),
    _vm._v(" "),
    _vm.logged.role == 1
      ? _c("div", { staticClass: "card-content" }, [
          _c("span", { staticClass: "card-title" }, [
            _vm._v(_vm._s(_vm.newDelivery))
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
                      value: _vm.deliveries_to_save.name,
                      expression: "deliveries_to_save.name"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.name },
                  domProps: { value: _vm.deliveries_to_save.name },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
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
                      value: _vm.deliveries_to_save.phone,
                      expression: "deliveries_to_save.phone"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.phone },
                  domProps: { value: _vm.deliveries_to_save.phone },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "phone",
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
                      value: _vm.deliveries_to_save.street,
                      expression: "deliveries_to_save.street"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.street },
                  domProps: { value: _vm.deliveries_to_save.street },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "street",
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
                      value: _vm.deliveries_to_save.neighborhood,
                      expression: "deliveries_to_save.neighborhood"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.neighborhood },
                  domProps: { value: _vm.deliveries_to_save.neighborhood },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "neighborhood",
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
                      value: _vm.deliveries_to_save.state,
                      expression: "deliveries_to_save.state"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.state },
                  domProps: { value: _vm.deliveries_to_save.state },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "state",
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
                      value: _vm.deliveries_to_save.country,
                      expression: "deliveries_to_save.country"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.country },
                  domProps: { value: _vm.deliveries_to_save.country },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "country",
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
                      value: _vm.deliveries_to_save.postalcode,
                      expression: "deliveries_to_save.postalcode"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.postalCode },
                  domProps: { value: _vm.deliveries_to_save.postalcode },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "postalcode",
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
                      value: _vm.deliveries_to_save.complement,
                      expression: "deliveries_to_save.complement"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.complement },
                  domProps: { value: _vm.deliveries_to_save.complement },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "complement",
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
                      value: _vm.deliveries_to_save.number,
                      expression: "deliveries_to_save.number"
                    }
                  ],
                  attrs: { type: "number", placeholder: _vm.number },
                  domProps: { value: _vm.deliveries_to_save.number },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "number",
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
                      value: _vm.deliveries_to_save.reference,
                      expression: "deliveries_to_save.reference"
                    }
                  ],
                  attrs: { type: "text", placeholder: _vm.reference },
                  domProps: { value: _vm.deliveries_to_save.reference },
                  on: {
                    input: function($event) {
                      if ($event.target.composing) {
                        return
                      }
                      _vm.$set(
                        _vm.deliveries_to_save,
                        "reference",
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
    require("vue-hot-reload-api")      .rerender("data-v-0c5849e8", module.exports)
  }
}

/***/ })

},[51]);