import { x as A, y as L, m as V, z as O, A as q, B as ye, D as ve, E as Ee } from "./styled-c6437ab8.js";
import * as S from "react";
var P = { exports: {} }, i = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var I;
function be() {
  if (I)
    return i;
  I = 1;
  var t = typeof Symbol == "function" && Symbol.for, o = t ? Symbol.for("react.element") : 60103, u = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, m = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, p = t ? Symbol.for("react.async_mode") : 60111, y = t ? Symbol.for("react.concurrent_mode") : 60111, v = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, C = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, R = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
  function E(e) {
    if (typeof e == "object" && e !== null) {
      var h = e.$$typeof;
      switch (h) {
        case o:
          switch (e = e.type, e) {
            case p:
            case y:
            case n:
            case c:
            case m:
            case f:
              return e;
            default:
              switch (e = e && e.$$typeof, e) {
                case l:
                case v:
                case _:
                case b:
                case s:
                  return e;
                default:
                  return h;
              }
          }
        case u:
          return h;
      }
    }
  }
  function d(e) {
    return E(e) === y;
  }
  return i.AsyncMode = p, i.ConcurrentMode = y, i.ContextConsumer = l, i.ContextProvider = s, i.Element = o, i.ForwardRef = v, i.Fragment = n, i.Lazy = _, i.Memo = b, i.Portal = u, i.Profiler = c, i.StrictMode = m, i.Suspense = f, i.isAsyncMode = function(e) {
    return d(e) || E(e) === p;
  }, i.isConcurrentMode = d, i.isContextConsumer = function(e) {
    return E(e) === l;
  }, i.isContextProvider = function(e) {
    return E(e) === s;
  }, i.isElement = function(e) {
    return typeof e == "object" && e !== null && e.$$typeof === o;
  }, i.isForwardRef = function(e) {
    return E(e) === v;
  }, i.isFragment = function(e) {
    return E(e) === n;
  }, i.isLazy = function(e) {
    return E(e) === _;
  }, i.isMemo = function(e) {
    return E(e) === b;
  }, i.isPortal = function(e) {
    return E(e) === u;
  }, i.isProfiler = function(e) {
    return E(e) === c;
  }, i.isStrictMode = function(e) {
    return E(e) === m;
  }, i.isSuspense = function(e) {
    return E(e) === f;
  }, i.isValidElementType = function(e) {
    return typeof e == "string" || typeof e == "function" || e === n || e === y || e === c || e === m || e === f || e === x || typeof e == "object" && e !== null && (e.$$typeof === _ || e.$$typeof === b || e.$$typeof === s || e.$$typeof === l || e.$$typeof === v || e.$$typeof === T || e.$$typeof === R || e.$$typeof === w || e.$$typeof === C);
  }, i.typeOf = E, i;
}
var a = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var F;
function _e() {
  return F || (F = 1, process.env.NODE_ENV !== "production" && function() {
    var t = typeof Symbol == "function" && Symbol.for, o = t ? Symbol.for("react.element") : 60103, u = t ? Symbol.for("react.portal") : 60106, n = t ? Symbol.for("react.fragment") : 60107, m = t ? Symbol.for("react.strict_mode") : 60108, c = t ? Symbol.for("react.profiler") : 60114, s = t ? Symbol.for("react.provider") : 60109, l = t ? Symbol.for("react.context") : 60110, p = t ? Symbol.for("react.async_mode") : 60111, y = t ? Symbol.for("react.concurrent_mode") : 60111, v = t ? Symbol.for("react.forward_ref") : 60112, f = t ? Symbol.for("react.suspense") : 60113, x = t ? Symbol.for("react.suspense_list") : 60120, b = t ? Symbol.for("react.memo") : 60115, _ = t ? Symbol.for("react.lazy") : 60116, C = t ? Symbol.for("react.block") : 60121, T = t ? Symbol.for("react.fundamental") : 60117, R = t ? Symbol.for("react.responder") : 60118, w = t ? Symbol.for("react.scope") : 60119;
    function E(r) {
      return typeof r == "string" || typeof r == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      r === n || r === y || r === c || r === m || r === f || r === x || typeof r == "object" && r !== null && (r.$$typeof === _ || r.$$typeof === b || r.$$typeof === s || r.$$typeof === l || r.$$typeof === v || r.$$typeof === T || r.$$typeof === R || r.$$typeof === w || r.$$typeof === C);
    }
    function d(r) {
      if (typeof r == "object" && r !== null) {
        var g = r.$$typeof;
        switch (g) {
          case o:
            var j = r.type;
            switch (j) {
              case p:
              case y:
              case n:
              case c:
              case m:
              case f:
                return j;
              default:
                var N = j && j.$$typeof;
                switch (N) {
                  case l:
                  case v:
                  case _:
                  case b:
                  case s:
                    return N;
                  default:
                    return g;
                }
            }
          case u:
            return g;
        }
      }
    }
    var e = p, h = y, W = l, B = s, X = o, Z = v, H = n, J = _, K = b, Q = u, ee = c, re = m, te = f, $ = !1;
    function oe(r) {
      return $ || ($ = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), M(r) || d(r) === p;
    }
    function M(r) {
      return d(r) === y;
    }
    function se(r) {
      return d(r) === l;
    }
    function ne(r) {
      return d(r) === s;
    }
    function ie(r) {
      return typeof r == "object" && r !== null && r.$$typeof === o;
    }
    function ae(r) {
      return d(r) === v;
    }
    function ce(r) {
      return d(r) === n;
    }
    function ue(r) {
      return d(r) === _;
    }
    function me(r) {
      return d(r) === b;
    }
    function le(r) {
      return d(r) === u;
    }
    function fe(r) {
      return d(r) === c;
    }
    function de(r) {
      return d(r) === m;
    }
    function pe(r) {
      return d(r) === f;
    }
    a.AsyncMode = e, a.ConcurrentMode = h, a.ContextConsumer = W, a.ContextProvider = B, a.Element = X, a.ForwardRef = Z, a.Fragment = H, a.Lazy = J, a.Memo = K, a.Portal = Q, a.Profiler = ee, a.StrictMode = re, a.Suspense = te, a.isAsyncMode = oe, a.isConcurrentMode = M, a.isContextConsumer = se, a.isContextProvider = ne, a.isElement = ie, a.isForwardRef = ae, a.isFragment = ce, a.isLazy = ue, a.isMemo = me, a.isPortal = le, a.isProfiler = fe, a.isStrictMode = de, a.isSuspense = pe, a.isValidElementType = E, a.typeOf = d;
  }()), a;
}
process.env.NODE_ENV === "production" ? P.exports = be() : P.exports = _e();
var xe = P.exports, G = xe, Se = {
  $$typeof: !0,
  render: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0
}, he = {
  $$typeof: !0,
  compare: !0,
  defaultProps: !0,
  displayName: !0,
  propTypes: !0,
  type: !0
}, U = {};
U[G.ForwardRef] = Se;
U[G.Memo] = he;
var je = {
  name: "@emotion/react",
  version: "11.11.1",
  main: "dist/emotion-react.cjs.js",
  module: "dist/emotion-react.esm.js",
  browser: {
    "./dist/emotion-react.esm.js": "./dist/emotion-react.browser.esm.js"
  },
  exports: {
    ".": {
      module: {
        worker: "./dist/emotion-react.worker.esm.js",
        browser: "./dist/emotion-react.browser.esm.js",
        default: "./dist/emotion-react.esm.js"
      },
      import: "./dist/emotion-react.cjs.mjs",
      default: "./dist/emotion-react.cjs.js"
    },
    "./jsx-runtime": {
      module: {
        worker: "./jsx-runtime/dist/emotion-react-jsx-runtime.worker.esm.js",
        browser: "./jsx-runtime/dist/emotion-react-jsx-runtime.browser.esm.js",
        default: "./jsx-runtime/dist/emotion-react-jsx-runtime.esm.js"
      },
      import: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.mjs",
      default: "./jsx-runtime/dist/emotion-react-jsx-runtime.cjs.js"
    },
    "./_isolated-hnrs": {
      module: {
        worker: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.worker.esm.js",
        browser: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.browser.esm.js",
        default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.esm.js"
      },
      import: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.mjs",
      default: "./_isolated-hnrs/dist/emotion-react-_isolated-hnrs.cjs.js"
    },
    "./jsx-dev-runtime": {
      module: {
        worker: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.worker.esm.js",
        browser: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.browser.esm.js",
        default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.esm.js"
      },
      import: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.mjs",
      default: "./jsx-dev-runtime/dist/emotion-react-jsx-dev-runtime.cjs.js"
    },
    "./package.json": "./package.json",
    "./types/css-prop": "./types/css-prop.d.ts",
    "./macro": {
      types: {
        import: "./macro.d.mts",
        default: "./macro.d.ts"
      },
      default: "./macro.js"
    }
  },
  types: "types/index.d.ts",
  files: [
    "src",
    "dist",
    "jsx-runtime",
    "jsx-dev-runtime",
    "_isolated-hnrs",
    "types/*.d.ts",
    "macro.*"
  ],
  sideEffects: !1,
  author: "Emotion Contributors",
  license: "MIT",
  scripts: {
    "test:typescript": "dtslint types"
  },
  dependencies: {
    "@babel/runtime": "^7.18.3",
    "@emotion/babel-plugin": "^11.11.0",
    "@emotion/cache": "^11.11.0",
    "@emotion/serialize": "^1.1.2",
    "@emotion/use-insertion-effect-with-fallbacks": "^1.0.1",
    "@emotion/utils": "^1.2.1",
    "@emotion/weak-memoize": "^0.3.1",
    "hoist-non-react-statics": "^3.3.1"
  },
  peerDependencies: {
    react: ">=16.8.0"
  },
  peerDependenciesMeta: {
    "@types/react": {
      optional: !0
    }
  },
  devDependencies: {
    "@definitelytyped/dtslint": "0.0.112",
    "@emotion/css": "11.11.0",
    "@emotion/css-prettifier": "1.1.3",
    "@emotion/server": "11.11.0",
    "@emotion/styled": "11.11.0",
    "html-tag-names": "^1.1.2",
    react: "16.14.0",
    "svg-tag-names": "^1.1.1",
    typescript: "^4.5.5"
  },
  repository: "https://github.com/emotion-js/emotion/tree/main/packages/react",
  publishConfig: {
    access: "public"
  },
  "umd:main": "dist/emotion-react.umd.min.js",
  preconstruct: {
    entrypoints: [
      "./index.js",
      "./jsx-runtime.js",
      "./jsx-dev-runtime.js",
      "./_isolated-hnrs.js"
    ],
    umdName: "emotionReact",
    exports: {
      envConditions: [
        "browser",
        "worker"
      ],
      extra: {
        "./types/css-prop": "./types/css-prop.d.ts",
        "./macro": {
          types: {
            import: "./macro.d.mts",
            default: "./macro.d.ts"
          },
          default: "./macro.js"
        }
      }
    }
  }
}, Y = !1, Ce = /* @__PURE__ */ L(function(t, o) {
  process.env.NODE_ENV !== "production" && !Y && // check for className as well since the user is
  // probably using the custom createElement which
  // means it will be turned into a className prop
  // $FlowFixMe I don't really want to add it to the type since it shouldn't be used
  (t.className || t.css) && (console.error("It looks like you're using the css prop on Global, did you mean to use the styles prop instead?"), Y = !0);
  var u = t.styles, n = A([u], void 0, S.useContext(V)), m = S.useRef();
  return O(function() {
    var c = o.key + "-global", s = new o.sheet.constructor({
      key: c,
      nonce: o.sheet.nonce,
      container: o.sheet.container,
      speedy: o.sheet.isSpeedy
    }), l = !1, p = document.querySelector('style[data-emotion="' + c + " " + n.name + '"]');
    return o.sheet.tags.length && (s.before = o.sheet.tags[0]), p !== null && (l = !0, p.setAttribute("data-emotion", c), s.hydrate([p])), m.current = [s, l], function() {
      s.flush();
    };
  }, [o]), O(function() {
    var c = m.current, s = c[0], l = c[1];
    if (l) {
      c[1] = !1;
      return;
    }
    if (n.next !== void 0 && q(o, n.next, !0), s.tags.length) {
      var p = s.tags[s.tags.length - 1].nextElementSibling;
      s.before = p, s.flush();
    }
    o.insert("", n, s, !1);
  }, [o, n.name]), null;
});
process.env.NODE_ENV !== "production" && (Ce.displayName = "EmotionGlobal");
function Te() {
  for (var t = arguments.length, o = new Array(t), u = 0; u < t; u++)
    o[u] = arguments[u];
  return A(o);
}
var Me = function() {
  var o = Te.apply(void 0, arguments), u = "animation-" + o.name;
  return {
    name: u,
    styles: "@keyframes " + u + "{" + o.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}, Re = function t(o) {
  for (var u = o.length, n = 0, m = ""; n < u; n++) {
    var c = o[n];
    if (c != null) {
      var s = void 0;
      switch (typeof c) {
        case "boolean":
          break;
        case "object": {
          if (Array.isArray(c))
            s = t(c);
          else {
            process.env.NODE_ENV !== "production" && c.styles !== void 0 && c.name !== void 0 && console.error("You have passed styles created with `css` from `@emotion/react` package to the `cx`.\n`cx` is meant to compose class names (strings) so you should convert those styles to a class name by passing them to the `css` received from <ClassNames/> component."), s = "";
            for (var l in c)
              c[l] && l && (s && (s += " "), s += l);
          }
          break;
        }
        default:
          s = c;
      }
      s && (m && (m += " "), m += s);
    }
  }
  return m;
};
function we(t, o, u) {
  var n = [], m = Ee(t, n, u);
  return n.length < 2 ? u : m + o(n);
}
var ge = function(o) {
  var u = o.cache, n = o.serializedArr;
  return ye(function() {
    for (var m = 0; m < n.length; m++)
      q(u, n[m], !1);
  }), null;
}, Pe = /* @__PURE__ */ L(function(t, o) {
  var u = !1, n = [], m = function() {
    if (u && process.env.NODE_ENV !== "production")
      throw new Error("css can only be used during render");
    for (var y = arguments.length, v = new Array(y), f = 0; f < y; f++)
      v[f] = arguments[f];
    var x = A(v, o.registered);
    return n.push(x), ve(o, x, !1), o.key + "-" + x.name;
  }, c = function() {
    if (u && process.env.NODE_ENV !== "production")
      throw new Error("cx can only be used during render");
    for (var y = arguments.length, v = new Array(y), f = 0; f < y; f++)
      v[f] = arguments[f];
    return we(o.registered, m, Re(v));
  }, s = {
    css: m,
    cx: c,
    theme: S.useContext(V)
  }, l = t.children(s);
  return u = !0, /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(ge, {
    cache: o,
    serializedArr: n
  }), l);
});
process.env.NODE_ENV !== "production" && (Pe.displayName = "EmotionClassNames");
if (process.env.NODE_ENV !== "production") {
  var k = !0, Ae = typeof jest < "u" || typeof vi < "u";
  if (k && !Ae) {
    var D = (
      // $FlowIgnore
      typeof globalThis < "u" ? globalThis : k ? window : global
    ), z = "__EMOTION_REACT_" + je.version.split(".")[0] + "__";
    D[z] && console.warn("You are loading @emotion/react when it is already loaded. Running multiple instances may cause problems. This can happen if multiple versions are used, or if multiple builds of the same version are used."), D[z] = !0;
  }
}
export {
  Ce as G,
  Te as c,
  Me as k
};
