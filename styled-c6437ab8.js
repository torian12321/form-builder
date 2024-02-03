import * as te from "react";
import { forwardRef as sn, useContext as cn } from "react";
function B() {
  return B = Object.assign ? Object.assign.bind() : function(e) {
    for (var r = 1; r < arguments.length; r++) {
      var t = arguments[r];
      for (var n in t)
        Object.prototype.hasOwnProperty.call(t, n) && (e[n] = t[n]);
    }
    return e;
  }, B.apply(this, arguments);
}
function be(e) {
  return e !== null && typeof e == "object" && e.constructor === Object;
}
function kt(e) {
  if (!be(e))
    return e;
  const r = {};
  return Object.keys(e).forEach((t) => {
    r[t] = kt(e[t]);
  }), r;
}
function ue(e, r, t = {
  clone: !0
}) {
  const n = t.clone ? B({}, e) : e;
  return be(e) && be(r) && Object.keys(r).forEach((o) => {
    o !== "__proto__" && (be(r[o]) && o in e && be(e[o]) ? n[o] = ue(e[o], r[o], t) : t.clone ? n[o] = be(r[o]) ? kt(r[o]) : r[o] : n[o] = r[o]);
  }), n;
}
function un(e) {
  return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e;
}
function $a(e) {
  if (e.__esModule)
    return e;
  var r = e.default;
  if (typeof r == "function") {
    var t = function n() {
      return this instanceof n ? Reflect.construct(r, arguments, this.constructor) : r.apply(this, arguments);
    };
    t.prototype = r.prototype;
  } else
    t = {};
  return Object.defineProperty(t, "__esModule", { value: !0 }), Object.keys(e).forEach(function(n) {
    var o = Object.getOwnPropertyDescriptor(e, n);
    Object.defineProperty(t, n, o.get ? o : {
      enumerable: !0,
      get: function() {
        return e[n];
      }
    });
  }), t;
}
var Cr = { exports: {} }, Xe = { exports: {} }, F = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gr;
function fn() {
  if (Gr)
    return F;
  Gr = 1;
  var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
  function w(m) {
    if (typeof m == "object" && m !== null) {
      var W = m.$$typeof;
      switch (W) {
        case r:
          switch (m = m.type, m) {
            case u:
            case l:
            case n:
            case i:
            case o:
            case h:
              return m;
            default:
              switch (m = m && m.$$typeof, m) {
                case s:
                case d:
                case g:
                case b:
                case a:
                  return m;
                default:
                  return W;
              }
          }
        case t:
          return W;
      }
    }
  }
  function O(m) {
    return w(m) === l;
  }
  return F.AsyncMode = u, F.ConcurrentMode = l, F.ContextConsumer = s, F.ContextProvider = a, F.Element = r, F.ForwardRef = d, F.Fragment = n, F.Lazy = g, F.Memo = b, F.Portal = t, F.Profiler = i, F.StrictMode = o, F.Suspense = h, F.isAsyncMode = function(m) {
    return O(m) || w(m) === u;
  }, F.isConcurrentMode = O, F.isContextConsumer = function(m) {
    return w(m) === s;
  }, F.isContextProvider = function(m) {
    return w(m) === a;
  }, F.isElement = function(m) {
    return typeof m == "object" && m !== null && m.$$typeof === r;
  }, F.isForwardRef = function(m) {
    return w(m) === d;
  }, F.isFragment = function(m) {
    return w(m) === n;
  }, F.isLazy = function(m) {
    return w(m) === g;
  }, F.isMemo = function(m) {
    return w(m) === b;
  }, F.isPortal = function(m) {
    return w(m) === t;
  }, F.isProfiler = function(m) {
    return w(m) === i;
  }, F.isStrictMode = function(m) {
    return w(m) === o;
  }, F.isSuspense = function(m) {
    return w(m) === h;
  }, F.isValidElementType = function(m) {
    return typeof m == "string" || typeof m == "function" || m === n || m === l || m === i || m === o || m === h || m === p || typeof m == "object" && m !== null && (m.$$typeof === g || m.$$typeof === b || m.$$typeof === a || m.$$typeof === s || m.$$typeof === d || m.$$typeof === f || m.$$typeof === S || m.$$typeof === $ || m.$$typeof === c);
  }, F.typeOf = w, F;
}
var U = {};
/** @license React v16.13.1
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Hr;
function ln() {
  return Hr || (Hr = 1, process.env.NODE_ENV !== "production" && function() {
    var e = typeof Symbol == "function" && Symbol.for, r = e ? Symbol.for("react.element") : 60103, t = e ? Symbol.for("react.portal") : 60106, n = e ? Symbol.for("react.fragment") : 60107, o = e ? Symbol.for("react.strict_mode") : 60108, i = e ? Symbol.for("react.profiler") : 60114, a = e ? Symbol.for("react.provider") : 60109, s = e ? Symbol.for("react.context") : 60110, u = e ? Symbol.for("react.async_mode") : 60111, l = e ? Symbol.for("react.concurrent_mode") : 60111, d = e ? Symbol.for("react.forward_ref") : 60112, h = e ? Symbol.for("react.suspense") : 60113, p = e ? Symbol.for("react.suspense_list") : 60120, b = e ? Symbol.for("react.memo") : 60115, g = e ? Symbol.for("react.lazy") : 60116, c = e ? Symbol.for("react.block") : 60121, f = e ? Symbol.for("react.fundamental") : 60117, S = e ? Symbol.for("react.responder") : 60118, $ = e ? Symbol.for("react.scope") : 60119;
    function w(v) {
      return typeof v == "string" || typeof v == "function" || // Note: its typeof might be other than 'symbol' or 'number' if it's a polyfill.
      v === n || v === l || v === i || v === o || v === h || v === p || typeof v == "object" && v !== null && (v.$$typeof === g || v.$$typeof === b || v.$$typeof === a || v.$$typeof === s || v.$$typeof === d || v.$$typeof === f || v.$$typeof === S || v.$$typeof === $ || v.$$typeof === c);
    }
    function O(v) {
      if (typeof v == "object" && v !== null) {
        var ce = v.$$typeof;
        switch (ce) {
          case r:
            var x = v.type;
            switch (x) {
              case u:
              case l:
              case n:
              case i:
              case o:
              case h:
                return x;
              default:
                var _e = x && x.$$typeof;
                switch (_e) {
                  case s:
                  case d:
                  case g:
                  case b:
                  case a:
                    return _e;
                  default:
                    return ce;
                }
            }
          case t:
            return ce;
        }
      }
    }
    var m = u, W = l, C = s, de = a, ne = r, _ = d, H = n, Z = g, fe = b, Q = t, pe = i, oe = o, ge = h, xe = !1;
    function we(v) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 17+. Update your code to use ReactIs.isConcurrentMode() instead. It has the exact same API.")), y(v) || O(v) === u;
    }
    function y(v) {
      return O(v) === l;
    }
    function E(v) {
      return O(v) === s;
    }
    function N(v) {
      return O(v) === a;
    }
    function P(v) {
      return typeof v == "object" && v !== null && v.$$typeof === r;
    }
    function T(v) {
      return O(v) === d;
    }
    function k(v) {
      return O(v) === n;
    }
    function R(v) {
      return O(v) === g;
    }
    function A(v) {
      return O(v) === b;
    }
    function I(v) {
      return O(v) === t;
    }
    function D(v) {
      return O(v) === i;
    }
    function M(v) {
      return O(v) === o;
    }
    function ee(v) {
      return O(v) === h;
    }
    U.AsyncMode = m, U.ConcurrentMode = W, U.ContextConsumer = C, U.ContextProvider = de, U.Element = ne, U.ForwardRef = _, U.Fragment = H, U.Lazy = Z, U.Memo = fe, U.Portal = Q, U.Profiler = pe, U.StrictMode = oe, U.Suspense = ge, U.isAsyncMode = we, U.isConcurrentMode = y, U.isContextConsumer = E, U.isContextProvider = N, U.isElement = P, U.isForwardRef = T, U.isFragment = k, U.isLazy = R, U.isMemo = A, U.isPortal = I, U.isProfiler = D, U.isStrictMode = M, U.isSuspense = ee, U.isValidElementType = w, U.typeOf = O;
  }()), U;
}
var Xr;
function It() {
  return Xr || (Xr = 1, process.env.NODE_ENV === "production" ? Xe.exports = fn() : Xe.exports = ln()), Xe.exports;
}
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/
var br, Jr;
function dn() {
  if (Jr)
    return br;
  Jr = 1;
  var e = Object.getOwnPropertySymbols, r = Object.prototype.hasOwnProperty, t = Object.prototype.propertyIsEnumerable;
  function n(i) {
    if (i == null)
      throw new TypeError("Object.assign cannot be called with null or undefined");
    return Object(i);
  }
  function o() {
    try {
      if (!Object.assign)
        return !1;
      var i = new String("abc");
      if (i[5] = "de", Object.getOwnPropertyNames(i)[0] === "5")
        return !1;
      for (var a = {}, s = 0; s < 10; s++)
        a["_" + String.fromCharCode(s)] = s;
      var u = Object.getOwnPropertyNames(a).map(function(d) {
        return a[d];
      });
      if (u.join("") !== "0123456789")
        return !1;
      var l = {};
      return "abcdefghijklmnopqrst".split("").forEach(function(d) {
        l[d] = d;
      }), Object.keys(Object.assign({}, l)).join("") === "abcdefghijklmnopqrst";
    } catch {
      return !1;
    }
  }
  return br = o() ? Object.assign : function(i, a) {
    for (var s, u = n(i), l, d = 1; d < arguments.length; d++) {
      s = Object(arguments[d]);
      for (var h in s)
        r.call(s, h) && (u[h] = s[h]);
      if (e) {
        l = e(s);
        for (var p = 0; p < l.length; p++)
          t.call(s, l[p]) && (u[l[p]] = s[l[p]]);
      }
    }
    return u;
  }, br;
}
var Er, Zr;
function kr() {
  if (Zr)
    return Er;
  Zr = 1;
  var e = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Er = e, Er;
}
var Sr, Qr;
function Mt() {
  return Qr || (Qr = 1, Sr = Function.call.bind(Object.prototype.hasOwnProperty)), Sr;
}
var xr, et;
function pn() {
  if (et)
    return xr;
  et = 1;
  var e = function() {
  };
  if (process.env.NODE_ENV !== "production") {
    var r = kr(), t = {}, n = Mt();
    e = function(i) {
      var a = "Warning: " + i;
      typeof console < "u" && console.error(a);
      try {
        throw new Error(a);
      } catch {
      }
    };
  }
  function o(i, a, s, u, l) {
    if (process.env.NODE_ENV !== "production") {
      for (var d in i)
        if (n(i, d)) {
          var h;
          try {
            if (typeof i[d] != "function") {
              var p = Error(
                (u || "React class") + ": " + s + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof i[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`."
              );
              throw p.name = "Invariant Violation", p;
            }
            h = i[d](a, d, u, s, null, r);
          } catch (g) {
            h = g;
          }
          if (h && !(h instanceof Error) && e(
            (u || "React class") + ": type specification of " + s + " `" + d + "` is invalid; the type checker function must return `null` or an `Error` but returned a " + typeof h + ". You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument)."
          ), h instanceof Error && !(h.message in t)) {
            t[h.message] = !0;
            var b = l ? l() : "";
            e(
              "Failed " + s + " type: " + h.message + (b ?? "")
            );
          }
        }
    }
  }
  return o.resetWarningCache = function() {
    process.env.NODE_ENV !== "production" && (t = {});
  }, xr = o, xr;
}
var Or, rt;
function mn() {
  if (rt)
    return Or;
  rt = 1;
  var e = It(), r = dn(), t = kr(), n = Mt(), o = pn(), i = function() {
  };
  process.env.NODE_ENV !== "production" && (i = function(s) {
    var u = "Warning: " + s;
    typeof console < "u" && console.error(u);
    try {
      throw new Error(u);
    } catch {
    }
  });
  function a() {
    return null;
  }
  return Or = function(s, u) {
    var l = typeof Symbol == "function" && Symbol.iterator, d = "@@iterator";
    function h(y) {
      var E = y && (l && y[l] || y[d]);
      if (typeof E == "function")
        return E;
    }
    var p = "<<anonymous>>", b = {
      array: S("array"),
      bigint: S("bigint"),
      bool: S("boolean"),
      func: S("function"),
      number: S("number"),
      object: S("object"),
      string: S("string"),
      symbol: S("symbol"),
      any: $(),
      arrayOf: w,
      element: O(),
      elementType: m(),
      instanceOf: W,
      node: _(),
      objectOf: de,
      oneOf: C,
      oneOfType: ne,
      shape: Z,
      exact: fe
    };
    function g(y, E) {
      return y === E ? y !== 0 || 1 / y === 1 / E : y !== y && E !== E;
    }
    function c(y, E) {
      this.message = y, this.data = E && typeof E == "object" ? E : {}, this.stack = "";
    }
    c.prototype = Error.prototype;
    function f(y) {
      if (process.env.NODE_ENV !== "production")
        var E = {}, N = 0;
      function P(k, R, A, I, D, M, ee) {
        if (I = I || p, M = M || A, ee !== t) {
          if (u) {
            var v = new Error(
              "Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types"
            );
            throw v.name = "Invariant Violation", v;
          } else if (process.env.NODE_ENV !== "production" && typeof console < "u") {
            var ce = I + ":" + A;
            !E[ce] && // Avoid spamming the console because they are often not actionable except for lib authors
            N < 3 && (i(
              "You are manually calling a React.PropTypes validation function for the `" + M + "` prop on `" + I + "`. This is deprecated and will throw in the standalone `prop-types` package. You may be seeing this warning due to a third-party PropTypes library. See https://fb.me/react-warning-dont-call-proptypes for details."
            ), E[ce] = !0, N++);
          }
        }
        return R[A] == null ? k ? R[A] === null ? new c("The " + D + " `" + M + "` is marked as required " + ("in `" + I + "`, but its value is `null`.")) : new c("The " + D + " `" + M + "` is marked as required in " + ("`" + I + "`, but its value is `undefined`.")) : null : y(R, A, I, D, M);
      }
      var T = P.bind(null, !1);
      return T.isRequired = P.bind(null, !0), T;
    }
    function S(y) {
      function E(N, P, T, k, R, A) {
        var I = N[P], D = oe(I);
        if (D !== y) {
          var M = ge(I);
          return new c(
            "Invalid " + k + " `" + R + "` of type " + ("`" + M + "` supplied to `" + T + "`, expected ") + ("`" + y + "`."),
            { expectedType: y }
          );
        }
        return null;
      }
      return f(E);
    }
    function $() {
      return f(a);
    }
    function w(y) {
      function E(N, P, T, k, R) {
        if (typeof y != "function")
          return new c("Property `" + R + "` of component `" + T + "` has invalid PropType notation inside arrayOf.");
        var A = N[P];
        if (!Array.isArray(A)) {
          var I = oe(A);
          return new c("Invalid " + k + " `" + R + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected an array."));
        }
        for (var D = 0; D < A.length; D++) {
          var M = y(A, D, T, k, R + "[" + D + "]", t);
          if (M instanceof Error)
            return M;
        }
        return null;
      }
      return f(E);
    }
    function O() {
      function y(E, N, P, T, k) {
        var R = E[N];
        if (!s(R)) {
          var A = oe(R);
          return new c("Invalid " + T + " `" + k + "` of type " + ("`" + A + "` supplied to `" + P + "`, expected a single ReactElement."));
        }
        return null;
      }
      return f(y);
    }
    function m() {
      function y(E, N, P, T, k) {
        var R = E[N];
        if (!e.isValidElementType(R)) {
          var A = oe(R);
          return new c("Invalid " + T + " `" + k + "` of type " + ("`" + A + "` supplied to `" + P + "`, expected a single ReactElement type."));
        }
        return null;
      }
      return f(y);
    }
    function W(y) {
      function E(N, P, T, k, R) {
        if (!(N[P] instanceof y)) {
          var A = y.name || p, I = we(N[P]);
          return new c("Invalid " + k + " `" + R + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected ") + ("instance of `" + A + "`."));
        }
        return null;
      }
      return f(E);
    }
    function C(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && (arguments.length > 1 ? i(
          "Invalid arguments supplied to oneOf, expected an array, got " + arguments.length + " arguments. A common mistake is to write oneOf(x, y, z) instead of oneOf([x, y, z])."
        ) : i("Invalid argument supplied to oneOf, expected an array.")), a;
      function E(N, P, T, k, R) {
        for (var A = N[P], I = 0; I < y.length; I++)
          if (g(A, y[I]))
            return null;
        var D = JSON.stringify(y, function(ee, v) {
          var ce = ge(v);
          return ce === "symbol" ? String(v) : v;
        });
        return new c("Invalid " + k + " `" + R + "` of value `" + String(A) + "` " + ("supplied to `" + T + "`, expected one of " + D + "."));
      }
      return f(E);
    }
    function de(y) {
      function E(N, P, T, k, R) {
        if (typeof y != "function")
          return new c("Property `" + R + "` of component `" + T + "` has invalid PropType notation inside objectOf.");
        var A = N[P], I = oe(A);
        if (I !== "object")
          return new c("Invalid " + k + " `" + R + "` of type " + ("`" + I + "` supplied to `" + T + "`, expected an object."));
        for (var D in A)
          if (n(A, D)) {
            var M = y(A, D, T, k, R + "." + D, t);
            if (M instanceof Error)
              return M;
          }
        return null;
      }
      return f(E);
    }
    function ne(y) {
      if (!Array.isArray(y))
        return process.env.NODE_ENV !== "production" && i("Invalid argument supplied to oneOfType, expected an instance of array."), a;
      for (var E = 0; E < y.length; E++) {
        var N = y[E];
        if (typeof N != "function")
          return i(
            "Invalid argument supplied to oneOfType. Expected an array of check functions, but received " + xe(N) + " at index " + E + "."
          ), a;
      }
      function P(T, k, R, A, I) {
        for (var D = [], M = 0; M < y.length; M++) {
          var ee = y[M], v = ee(T, k, R, A, I, t);
          if (v == null)
            return null;
          v.data && n(v.data, "expectedType") && D.push(v.data.expectedType);
        }
        var ce = D.length > 0 ? ", expected one of type [" + D.join(", ") + "]" : "";
        return new c("Invalid " + A + " `" + I + "` supplied to " + ("`" + R + "`" + ce + "."));
      }
      return f(P);
    }
    function _() {
      function y(E, N, P, T, k) {
        return Q(E[N]) ? null : new c("Invalid " + T + " `" + k + "` supplied to " + ("`" + P + "`, expected a ReactNode."));
      }
      return f(y);
    }
    function H(y, E, N, P, T) {
      return new c(
        (y || "React class") + ": " + E + " type `" + N + "." + P + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + T + "`."
      );
    }
    function Z(y) {
      function E(N, P, T, k, R) {
        var A = N[P], I = oe(A);
        if (I !== "object")
          return new c("Invalid " + k + " `" + R + "` of type `" + I + "` " + ("supplied to `" + T + "`, expected `object`."));
        for (var D in y) {
          var M = y[D];
          if (typeof M != "function")
            return H(T, k, R, D, ge(M));
          var ee = M(A, D, T, k, R + "." + D, t);
          if (ee)
            return ee;
        }
        return null;
      }
      return f(E);
    }
    function fe(y) {
      function E(N, P, T, k, R) {
        var A = N[P], I = oe(A);
        if (I !== "object")
          return new c("Invalid " + k + " `" + R + "` of type `" + I + "` " + ("supplied to `" + T + "`, expected `object`."));
        var D = r({}, N[P], y);
        for (var M in D) {
          var ee = y[M];
          if (n(y, M) && typeof ee != "function")
            return H(T, k, R, M, ge(ee));
          if (!ee)
            return new c(
              "Invalid " + k + " `" + R + "` key `" + M + "` supplied to `" + T + "`.\nBad object: " + JSON.stringify(N[P], null, "  ") + `
Valid keys: ` + JSON.stringify(Object.keys(y), null, "  ")
            );
          var v = ee(A, M, T, k, R + "." + M, t);
          if (v)
            return v;
        }
        return null;
      }
      return f(E);
    }
    function Q(y) {
      switch (typeof y) {
        case "number":
        case "string":
        case "undefined":
          return !0;
        case "boolean":
          return !y;
        case "object":
          if (Array.isArray(y))
            return y.every(Q);
          if (y === null || s(y))
            return !0;
          var E = h(y);
          if (E) {
            var N = E.call(y), P;
            if (E !== y.entries) {
              for (; !(P = N.next()).done; )
                if (!Q(P.value))
                  return !1;
            } else
              for (; !(P = N.next()).done; ) {
                var T = P.value;
                if (T && !Q(T[1]))
                  return !1;
              }
          } else
            return !1;
          return !0;
        default:
          return !1;
      }
    }
    function pe(y, E) {
      return y === "symbol" ? !0 : E ? E["@@toStringTag"] === "Symbol" || typeof Symbol == "function" && E instanceof Symbol : !1;
    }
    function oe(y) {
      var E = typeof y;
      return Array.isArray(y) ? "array" : y instanceof RegExp ? "object" : pe(E, y) ? "symbol" : E;
    }
    function ge(y) {
      if (typeof y > "u" || y === null)
        return "" + y;
      var E = oe(y);
      if (E === "object") {
        if (y instanceof Date)
          return "date";
        if (y instanceof RegExp)
          return "regexp";
      }
      return E;
    }
    function xe(y) {
      var E = ge(y);
      switch (E) {
        case "array":
        case "object":
          return "an " + E;
        case "boolean":
        case "date":
        case "regexp":
          return "a " + E;
        default:
          return E;
      }
    }
    function we(y) {
      return !y.constructor || !y.constructor.name ? p : y.constructor.name;
    }
    return b.checkPropTypes = o, b.resetWarningCache = o.resetWarningCache, b.PropTypes = b, b;
  }, Or;
}
var wr, tt;
function hn() {
  if (tt)
    return wr;
  tt = 1;
  var e = kr();
  function r() {
  }
  function t() {
  }
  return t.resetWarningCache = r, wr = function() {
    function n(a, s, u, l, d, h) {
      if (h !== e) {
        var p = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw p.name = "Invariant Violation", p;
      }
    }
    n.isRequired = n;
    function o() {
      return n;
    }
    var i = {
      array: n,
      bigint: n,
      bool: n,
      func: n,
      number: n,
      object: n,
      string: n,
      symbol: n,
      any: n,
      arrayOf: o,
      element: n,
      elementType: n,
      instanceOf: o,
      node: n,
      objectOf: o,
      oneOf: o,
      oneOfType: o,
      shape: o,
      exact: o,
      checkPropTypes: t,
      resetWarningCache: r
    };
    return i.PropTypes = i, i;
  }, wr;
}
if (process.env.NODE_ENV !== "production") {
  var yn = It(), gn = !0;
  Cr.exports = mn()(yn.isElement, gn);
} else
  Cr.exports = hn()();
var vn = Cr.exports;
const je = /* @__PURE__ */ un(vn);
function Ie(e) {
  let r = "https://mui.com/production-error/?code=" + e;
  for (let t = 1; t < arguments.length; t += 1)
    r += "&args[]=" + encodeURIComponent(arguments[t]);
  return "Minified MUI error #" + e + "; visit " + r + " for the full message.";
}
var Rr = { exports: {} }, V = {};
/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var nt;
function bn() {
  if (nt)
    return V;
  nt = 1;
  var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g;
  g = Symbol.for("react.module.reference");
  function c(f) {
    if (typeof f == "object" && f !== null) {
      var S = f.$$typeof;
      switch (S) {
        case e:
          switch (f = f.type, f) {
            case t:
            case o:
            case n:
            case l:
            case d:
              return f;
            default:
              switch (f = f && f.$$typeof, f) {
                case s:
                case a:
                case u:
                case p:
                case h:
                case i:
                  return f;
                default:
                  return S;
              }
          }
        case r:
          return S;
      }
    }
  }
  return V.ContextConsumer = a, V.ContextProvider = i, V.Element = e, V.ForwardRef = u, V.Fragment = t, V.Lazy = p, V.Memo = h, V.Portal = r, V.Profiler = o, V.StrictMode = n, V.Suspense = l, V.SuspenseList = d, V.isAsyncMode = function() {
    return !1;
  }, V.isConcurrentMode = function() {
    return !1;
  }, V.isContextConsumer = function(f) {
    return c(f) === a;
  }, V.isContextProvider = function(f) {
    return c(f) === i;
  }, V.isElement = function(f) {
    return typeof f == "object" && f !== null && f.$$typeof === e;
  }, V.isForwardRef = function(f) {
    return c(f) === u;
  }, V.isFragment = function(f) {
    return c(f) === t;
  }, V.isLazy = function(f) {
    return c(f) === p;
  }, V.isMemo = function(f) {
    return c(f) === h;
  }, V.isPortal = function(f) {
    return c(f) === r;
  }, V.isProfiler = function(f) {
    return c(f) === o;
  }, V.isStrictMode = function(f) {
    return c(f) === n;
  }, V.isSuspense = function(f) {
    return c(f) === l;
  }, V.isSuspenseList = function(f) {
    return c(f) === d;
  }, V.isValidElementType = function(f) {
    return typeof f == "string" || typeof f == "function" || f === t || f === o || f === n || f === l || f === d || f === b || typeof f == "object" && f !== null && (f.$$typeof === p || f.$$typeof === h || f.$$typeof === i || f.$$typeof === a || f.$$typeof === u || f.$$typeof === g || f.getModuleId !== void 0);
  }, V.typeOf = c, V;
}
var z = {};
/**
 * @license React
 * react-is.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var ot;
function En() {
  return ot || (ot = 1, process.env.NODE_ENV !== "production" && function() {
    var e = Symbol.for("react.element"), r = Symbol.for("react.portal"), t = Symbol.for("react.fragment"), n = Symbol.for("react.strict_mode"), o = Symbol.for("react.profiler"), i = Symbol.for("react.provider"), a = Symbol.for("react.context"), s = Symbol.for("react.server_context"), u = Symbol.for("react.forward_ref"), l = Symbol.for("react.suspense"), d = Symbol.for("react.suspense_list"), h = Symbol.for("react.memo"), p = Symbol.for("react.lazy"), b = Symbol.for("react.offscreen"), g = !1, c = !1, f = !1, S = !1, $ = !1, w;
    w = Symbol.for("react.module.reference");
    function O(x) {
      return !!(typeof x == "string" || typeof x == "function" || x === t || x === o || $ || x === n || x === l || x === d || S || x === b || g || c || f || typeof x == "object" && x !== null && (x.$$typeof === p || x.$$typeof === h || x.$$typeof === i || x.$$typeof === a || x.$$typeof === u || // This needs to include all possible module reference object
      // types supported by any Flight configuration anywhere since
      // we don't know which Flight build this will end up being used
      // with.
      x.$$typeof === w || x.getModuleId !== void 0));
    }
    function m(x) {
      if (typeof x == "object" && x !== null) {
        var _e = x.$$typeof;
        switch (_e) {
          case e:
            var He = x.type;
            switch (He) {
              case t:
              case o:
              case n:
              case l:
              case d:
                return He;
              default:
                var Kr = He && He.$$typeof;
                switch (Kr) {
                  case s:
                  case a:
                  case u:
                  case p:
                  case h:
                  case i:
                    return Kr;
                  default:
                    return _e;
                }
            }
          case r:
            return _e;
        }
      }
    }
    var W = a, C = i, de = e, ne = u, _ = t, H = p, Z = h, fe = r, Q = o, pe = n, oe = l, ge = d, xe = !1, we = !1;
    function y(x) {
      return xe || (xe = !0, console.warn("The ReactIs.isAsyncMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function E(x) {
      return we || (we = !0, console.warn("The ReactIs.isConcurrentMode() alias has been deprecated, and will be removed in React 18+.")), !1;
    }
    function N(x) {
      return m(x) === a;
    }
    function P(x) {
      return m(x) === i;
    }
    function T(x) {
      return typeof x == "object" && x !== null && x.$$typeof === e;
    }
    function k(x) {
      return m(x) === u;
    }
    function R(x) {
      return m(x) === t;
    }
    function A(x) {
      return m(x) === p;
    }
    function I(x) {
      return m(x) === h;
    }
    function D(x) {
      return m(x) === r;
    }
    function M(x) {
      return m(x) === o;
    }
    function ee(x) {
      return m(x) === n;
    }
    function v(x) {
      return m(x) === l;
    }
    function ce(x) {
      return m(x) === d;
    }
    z.ContextConsumer = W, z.ContextProvider = C, z.Element = de, z.ForwardRef = ne, z.Fragment = _, z.Lazy = H, z.Memo = Z, z.Portal = fe, z.Profiler = Q, z.StrictMode = pe, z.Suspense = oe, z.SuspenseList = ge, z.isAsyncMode = y, z.isConcurrentMode = E, z.isContextConsumer = N, z.isContextProvider = P, z.isElement = T, z.isForwardRef = k, z.isFragment = R, z.isLazy = A, z.isMemo = I, z.isPortal = D, z.isProfiler = M, z.isStrictMode = ee, z.isSuspense = v, z.isSuspenseList = ce, z.isValidElementType = O, z.typeOf = m;
  }()), z;
}
process.env.NODE_ENV === "production" ? Rr.exports = bn() : Rr.exports = En();
var it = Rr.exports;
const Sn = /^\s*function(?:\s|\s*\/\*.*\*\/\s*)+([^(\s/]*)\s*/;
function xn(e) {
  const r = `${e}`.match(Sn);
  return r && r[1] || "";
}
function Dt(e, r = "") {
  return e.displayName || e.name || xn(e) || r;
}
function at(e, r, t) {
  const n = Dt(r);
  return e.displayName || (n !== "" ? `${t}(${n})` : t);
}
function On(e) {
  if (e != null) {
    if (typeof e == "string")
      return e;
    if (typeof e == "function")
      return Dt(e, "Component");
    if (typeof e == "object")
      switch (e.$$typeof) {
        case it.ForwardRef:
          return at(e, e.render, "ForwardRef");
        case it.Memo:
          return at(e, e.type, "memo");
        default:
          return;
      }
  }
}
function Ae(e) {
  if (typeof e != "string")
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `capitalize(string)` expects a string argument." : Ie(7));
  return e.charAt(0).toUpperCase() + e.slice(1);
}
const st = (e) => e, wn = () => {
  let e = st;
  return {
    configure(r) {
      e = r;
    },
    generate(r) {
      return e(r);
    },
    reset() {
      e = st;
    }
  };
}, _n = wn(), Tn = _n, Cn = {
  active: "active",
  checked: "checked",
  completed: "completed",
  disabled: "disabled",
  error: "error",
  expanded: "expanded",
  focused: "focused",
  focusVisible: "focusVisible",
  open: "open",
  readOnly: "readOnly",
  required: "required",
  selected: "selected"
};
function Rn(e, r, t = "Mui") {
  const n = Cn[r];
  return n ? `${t}-${n}` : `${Tn.generate(e)}-${r}`;
}
function jt(e) {
  var r = /* @__PURE__ */ Object.create(null);
  return function(t) {
    return r[t] === void 0 && (r[t] = e(t)), r[t];
  };
}
var $n = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|enterKeyHint|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/, Pn = /* @__PURE__ */ jt(
  function(e) {
    return $n.test(e) || e.charCodeAt(0) === 111 && e.charCodeAt(1) === 110 && e.charCodeAt(2) < 91;
  }
  /* Z+1 */
);
function An(e) {
  if (e.sheet)
    return e.sheet;
  for (var r = 0; r < document.styleSheets.length; r++)
    if (document.styleSheets[r].ownerNode === e)
      return document.styleSheets[r];
}
function Nn(e) {
  var r = document.createElement("style");
  return r.setAttribute("data-emotion", e.key), e.nonce !== void 0 && r.setAttribute("nonce", e.nonce), r.appendChild(document.createTextNode("")), r.setAttribute("data-s", ""), r;
}
var kn = /* @__PURE__ */ function() {
  function e(t) {
    var n = this;
    this._insertTag = function(o) {
      var i;
      n.tags.length === 0 ? n.insertionPoint ? i = n.insertionPoint.nextSibling : n.prepend ? i = n.container.firstChild : i = n.before : i = n.tags[n.tags.length - 1].nextSibling, n.container.insertBefore(o, i), n.tags.push(o);
    }, this.isSpeedy = t.speedy === void 0 ? process.env.NODE_ENV === "production" : t.speedy, this.tags = [], this.ctr = 0, this.nonce = t.nonce, this.key = t.key, this.container = t.container, this.prepend = t.prepend, this.insertionPoint = t.insertionPoint, this.before = null;
  }
  var r = e.prototype;
  return r.hydrate = function(n) {
    n.forEach(this._insertTag);
  }, r.insert = function(n) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(Nn(this));
    var o = this.tags[this.tags.length - 1];
    if (process.env.NODE_ENV !== "production") {
      var i = n.charCodeAt(0) === 64 && n.charCodeAt(1) === 105;
      i && this._alreadyInsertedOrderInsensitiveRule && console.error(`You're attempting to insert the following rule:
` + n + "\n\n`@import` rules must be before all other types of rules in a stylesheet but other rules have already been inserted. Please ensure that `@import` rules are before all other rules."), this._alreadyInsertedOrderInsensitiveRule = this._alreadyInsertedOrderInsensitiveRule || !i;
    }
    if (this.isSpeedy) {
      var a = An(o);
      try {
        a.insertRule(n, a.cssRules.length);
      } catch (s) {
        process.env.NODE_ENV !== "production" && !/:(-moz-placeholder|-moz-focus-inner|-moz-focusring|-ms-input-placeholder|-moz-read-write|-moz-read-only|-ms-clear|-ms-expand|-ms-reveal){/.test(n) && console.error('There was a problem inserting the following rule: "' + n + '"', s);
      }
    } else
      o.appendChild(document.createTextNode(n));
    this.ctr++;
  }, r.flush = function() {
    this.tags.forEach(function(n) {
      return n.parentNode && n.parentNode.removeChild(n);
    }), this.tags = [], this.ctr = 0, process.env.NODE_ENV !== "production" && (this._alreadyInsertedOrderInsensitiveRule = !1);
  }, e;
}(), re = "-ms-", tr = "-moz-", j = "-webkit-", Ir = "comm", Mr = "rule", Dr = "decl", In = "@import", Lt = "@keyframes", Mn = "@layer", Dn = Math.abs, sr = String.fromCharCode, jn = Object.assign;
function Ln(e, r) {
  return J(e, 0) ^ 45 ? (((r << 2 ^ J(e, 0)) << 2 ^ J(e, 1)) << 2 ^ J(e, 2)) << 2 ^ J(e, 3) : 0;
}
function Ft(e) {
  return e.trim();
}
function Fn(e, r) {
  return (e = r.exec(e)) ? e[0] : e;
}
function L(e, r, t) {
  return e.replace(r, t);
}
function $r(e, r) {
  return e.indexOf(r);
}
function J(e, r) {
  return e.charCodeAt(r) | 0;
}
function ze(e, r, t) {
  return e.slice(r, t);
}
function me(e) {
  return e.length;
}
function jr(e) {
  return e.length;
}
function Je(e, r) {
  return r.push(e), e;
}
function Un(e, r) {
  return e.map(r).join("");
}
var cr = 1, Me = 1, Ut = 0, ie = 0, X = 0, De = "";
function ur(e, r, t, n, o, i, a) {
  return { value: e, root: r, parent: t, type: n, props: o, children: i, line: cr, column: Me, length: a, return: "" };
}
function Le(e, r) {
  return jn(ur("", null, null, "", null, null, 0), e, { length: -e.length }, r);
}
function Vn() {
  return X;
}
function zn() {
  return X = ie > 0 ? J(De, --ie) : 0, Me--, X === 10 && (Me = 1, cr--), X;
}
function se() {
  return X = ie < Ut ? J(De, ie++) : 0, Me++, X === 10 && (Me = 1, cr++), X;
}
function ye() {
  return J(De, ie);
}
function Ze() {
  return ie;
}
function qe(e, r) {
  return ze(De, e, r);
}
function Ye(e) {
  switch (e) {
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    case 59:
    case 123:
    case 125:
      return 4;
    case 58:
      return 3;
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function Vt(e) {
  return cr = Me = 1, Ut = me(De = e), ie = 0, [];
}
function zt(e) {
  return De = "", e;
}
function Qe(e) {
  return Ft(qe(ie - 1, Pr(e === 91 ? e + 2 : e === 40 ? e + 1 : e)));
}
function Yn(e) {
  for (; (X = ye()) && X < 33; )
    se();
  return Ye(e) > 2 || Ye(X) > 3 ? "" : " ";
}
function Wn(e, r) {
  for (; --r && se() && !(X < 48 || X > 102 || X > 57 && X < 65 || X > 70 && X < 97); )
    ;
  return qe(e, Ze() + (r < 6 && ye() == 32 && se() == 32));
}
function Pr(e) {
  for (; se(); )
    switch (X) {
      case e:
        return ie;
      case 34:
      case 39:
        e !== 34 && e !== 39 && Pr(X);
        break;
      case 40:
        e === 41 && Pr(e);
        break;
      case 92:
        se();
        break;
    }
  return ie;
}
function Bn(e, r) {
  for (; se() && e + X !== 47 + 10; )
    if (e + X === 42 + 42 && ye() === 47)
      break;
  return "/*" + qe(r, ie - 1) + "*" + sr(e === 47 ? e : se());
}
function qn(e) {
  for (; !Ye(ye()); )
    se();
  return qe(e, ie);
}
function Kn(e) {
  return zt(er("", null, null, null, [""], e = Vt(e), 0, [0], e));
}
function er(e, r, t, n, o, i, a, s, u) {
  for (var l = 0, d = 0, h = a, p = 0, b = 0, g = 0, c = 1, f = 1, S = 1, $ = 0, w = "", O = o, m = i, W = n, C = w; f; )
    switch (g = $, $ = se()) {
      case 40:
        if (g != 108 && J(C, h - 1) == 58) {
          $r(C += L(Qe($), "&", "&\f"), "&\f") != -1 && (S = -1);
          break;
        }
      case 34:
      case 39:
      case 91:
        C += Qe($);
        break;
      case 9:
      case 10:
      case 13:
      case 32:
        C += Yn(g);
        break;
      case 92:
        C += Wn(Ze() - 1, 7);
        continue;
      case 47:
        switch (ye()) {
          case 42:
          case 47:
            Je(Gn(Bn(se(), Ze()), r, t), u);
            break;
          default:
            C += "/";
        }
        break;
      case 123 * c:
        s[l++] = me(C) * S;
      case 125 * c:
      case 59:
      case 0:
        switch ($) {
          case 0:
          case 125:
            f = 0;
          case 59 + d:
            S == -1 && (C = L(C, /\f/g, "")), b > 0 && me(C) - h && Je(b > 32 ? ut(C + ";", n, t, h - 1) : ut(L(C, " ", "") + ";", n, t, h - 2), u);
            break;
          case 59:
            C += ";";
          default:
            if (Je(W = ct(C, r, t, l, d, o, s, w, O = [], m = [], h), i), $ === 123)
              if (d === 0)
                er(C, r, W, W, O, i, h, s, m);
              else
                switch (p === 99 && J(C, 3) === 110 ? 100 : p) {
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    er(e, W, W, n && Je(ct(e, W, W, 0, 0, o, s, w, o, O = [], h), m), o, m, h, s, n ? O : m);
                    break;
                  default:
                    er(C, W, W, W, [""], m, 0, s, m);
                }
        }
        l = d = b = 0, c = S = 1, w = C = "", h = a;
        break;
      case 58:
        h = 1 + me(C), b = g;
      default:
        if (c < 1) {
          if ($ == 123)
            --c;
          else if ($ == 125 && c++ == 0 && zn() == 125)
            continue;
        }
        switch (C += sr($), $ * c) {
          case 38:
            S = d > 0 ? 1 : (C += "\f", -1);
            break;
          case 44:
            s[l++] = (me(C) - 1) * S, S = 1;
            break;
          case 64:
            ye() === 45 && (C += Qe(se())), p = ye(), d = h = me(w = C += qn(Ze())), $++;
            break;
          case 45:
            g === 45 && me(C) == 2 && (c = 0);
        }
    }
  return i;
}
function ct(e, r, t, n, o, i, a, s, u, l, d) {
  for (var h = o - 1, p = o === 0 ? i : [""], b = jr(p), g = 0, c = 0, f = 0; g < n; ++g)
    for (var S = 0, $ = ze(e, h + 1, h = Dn(c = a[g])), w = e; S < b; ++S)
      (w = Ft(c > 0 ? p[S] + " " + $ : L($, /&\f/g, p[S]))) && (u[f++] = w);
  return ur(e, r, t, o === 0 ? Mr : s, u, l, d);
}
function Gn(e, r, t) {
  return ur(e, r, t, Ir, sr(Vn()), ze(e, 2, -2), 0);
}
function ut(e, r, t, n) {
  return ur(e, r, t, Dr, ze(e, 0, n), ze(e, n + 1, -1), n);
}
function Ne(e, r) {
  for (var t = "", n = jr(e), o = 0; o < n; o++)
    t += r(e[o], o, e, r) || "";
  return t;
}
function Hn(e, r, t, n) {
  switch (e.type) {
    case Mn:
      if (e.children.length)
        break;
    case In:
    case Dr:
      return e.return = e.return || e.value;
    case Ir:
      return "";
    case Lt:
      return e.return = e.value + "{" + Ne(e.children, n) + "}";
    case Mr:
      e.value = e.props.join(",");
  }
  return me(t = Ne(e.children, n)) ? e.return = e.value + "{" + t + "}" : "";
}
function Xn(e) {
  var r = jr(e);
  return function(t, n, o, i) {
    for (var a = "", s = 0; s < r; s++)
      a += e[s](t, n, o, i) || "";
    return a;
  };
}
function Jn(e) {
  return function(r) {
    r.root || (r = r.return) && e(r);
  };
}
var Zn = function(r, t, n) {
  for (var o = 0, i = 0; o = i, i = ye(), o === 38 && i === 12 && (t[n] = 1), !Ye(i); )
    se();
  return qe(r, ie);
}, Qn = function(r, t) {
  var n = -1, o = 44;
  do
    switch (Ye(o)) {
      case 0:
        o === 38 && ye() === 12 && (t[n] = 1), r[n] += Zn(ie - 1, t, n);
        break;
      case 2:
        r[n] += Qe(o);
        break;
      case 4:
        if (o === 44) {
          r[++n] = ye() === 58 ? "&\f" : "", t[n] = r[n].length;
          break;
        }
      default:
        r[n] += sr(o);
    }
  while (o = se());
  return r;
}, eo = function(r, t) {
  return zt(Qn(Vt(r), t));
}, ft = /* @__PURE__ */ new WeakMap(), ro = function(r) {
  if (!(r.type !== "rule" || !r.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  r.length < 1)) {
    for (var t = r.value, n = r.parent, o = r.column === n.column && r.line === n.line; n.type !== "rule"; )
      if (n = n.parent, !n)
        return;
    if (!(r.props.length === 1 && t.charCodeAt(0) !== 58 && !ft.get(n)) && !o) {
      ft.set(r, !0);
      for (var i = [], a = eo(t, i), s = n.props, u = 0, l = 0; u < a.length; u++)
        for (var d = 0; d < s.length; d++, l++)
          r.props[l] = i[u] ? a[u].replace(/&\f/g, s[d]) : s[d] + " " + a[u];
    }
  }
}, to = function(r) {
  if (r.type === "decl") {
    var t = r.value;
    // charcode for l
    t.charCodeAt(0) === 108 && // charcode for b
    t.charCodeAt(2) === 98 && (r.return = "", r.value = "");
  }
}, no = "emotion-disable-server-rendering-unsafe-selector-warning-please-do-not-use-this-the-warning-exists-for-a-reason", oo = function(r) {
  return r.type === "comm" && r.children.indexOf(no) > -1;
}, io = function(r) {
  return function(t, n, o) {
    if (!(t.type !== "rule" || r.compat)) {
      var i = t.value.match(/(:first|:nth|:nth-last)-child/g);
      if (i) {
        for (var a = !!t.parent, s = a ? t.parent.children : (
          // global rule at the root level
          o
        ), u = s.length - 1; u >= 0; u--) {
          var l = s[u];
          if (l.line < t.line)
            break;
          if (l.column < t.column) {
            if (oo(l))
              return;
            break;
          }
        }
        i.forEach(function(d) {
          console.error('The pseudo class "' + d + '" is potentially unsafe when doing server-side rendering. Try changing it to "' + d.split("-child")[0] + '-of-type".');
        });
      }
    }
  };
}, Yt = function(r) {
  return r.type.charCodeAt(1) === 105 && r.type.charCodeAt(0) === 64;
}, ao = function(r, t) {
  for (var n = r - 1; n >= 0; n--)
    if (!Yt(t[n]))
      return !0;
  return !1;
}, lt = function(r) {
  r.type = "", r.value = "", r.return = "", r.children = "", r.props = "";
}, so = function(r, t, n) {
  Yt(r) && (r.parent ? (console.error("`@import` rules can't be nested inside other rules. Please move it to the top level and put it before regular rules. Keep in mind that they can only be used within global styles."), lt(r)) : ao(t, n) && (console.error("`@import` rules can't be after other rules. Please put your `@import` rules before your other rules."), lt(r)));
};
function Wt(e, r) {
  switch (Ln(e, r)) {
    case 5103:
      return j + "print-" + e + e;
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return j + e + e;
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return j + e + tr + e + re + e + e;
    case 6828:
    case 4268:
      return j + e + re + e + e;
    case 6165:
      return j + e + re + "flex-" + e + e;
    case 5187:
      return j + e + L(e, /(\w+).+(:[^]+)/, j + "box-$1$2" + re + "flex-$1$2") + e;
    case 5443:
      return j + e + re + "flex-item-" + L(e, /flex-|-self/, "") + e;
    case 4675:
      return j + e + re + "flex-line-pack" + L(e, /align-content|flex-|-self/, "") + e;
    case 5548:
      return j + e + re + L(e, "shrink", "negative") + e;
    case 5292:
      return j + e + re + L(e, "basis", "preferred-size") + e;
    case 6060:
      return j + "box-" + L(e, "-grow", "") + j + e + re + L(e, "grow", "positive") + e;
    case 4554:
      return j + L(e, /([^-])(transform)/g, "$1" + j + "$2") + e;
    case 6187:
      return L(L(L(e, /(zoom-|grab)/, j + "$1"), /(image-set)/, j + "$1"), e, "") + e;
    case 5495:
    case 3959:
      return L(e, /(image-set\([^]*)/, j + "$1$`$1");
    case 4968:
      return L(L(e, /(.+:)(flex-)?(.*)/, j + "box-pack:$3" + re + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + j + e + e;
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return L(e, /(.+)-inline(.+)/, j + "$1$2") + e;
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (me(e) - 1 - r > 6)
        switch (J(e, r + 1)) {
          case 109:
            if (J(e, r + 4) !== 45)
              break;
          case 102:
            return L(e, /(.+:)(.+)-([^]+)/, "$1" + j + "$2-$3$1" + tr + (J(e, r + 3) == 108 ? "$3" : "$2-$3")) + e;
          case 115:
            return ~$r(e, "stretch") ? Wt(L(e, "stretch", "fill-available"), r) + e : e;
        }
      break;
    case 4949:
      if (J(e, r + 1) !== 115)
        break;
    case 6444:
      switch (J(e, me(e) - 3 - (~$r(e, "!important") && 10))) {
        case 107:
          return L(e, ":", ":" + j) + e;
        case 101:
          return L(e, /(.+:)([^;!]+)(;|!.+)?/, "$1" + j + (J(e, 14) === 45 ? "inline-" : "") + "box$3$1" + j + "$2$3$1" + re + "$2box$3") + e;
      }
      break;
    case 5936:
      switch (J(e, r + 11)) {
        case 114:
          return j + e + re + L(e, /[svh]\w+-[tblr]{2}/, "tb") + e;
        case 108:
          return j + e + re + L(e, /[svh]\w+-[tblr]{2}/, "tb-rl") + e;
        case 45:
          return j + e + re + L(e, /[svh]\w+-[tblr]{2}/, "lr") + e;
      }
      return j + e + re + e + e;
  }
  return e;
}
var co = function(r, t, n, o) {
  if (r.length > -1 && !r.return)
    switch (r.type) {
      case Dr:
        r.return = Wt(r.value, r.length);
        break;
      case Lt:
        return Ne([Le(r, {
          value: L(r.value, "@", "@" + j)
        })], o);
      case Mr:
        if (r.length)
          return Un(r.props, function(i) {
            switch (Fn(i, /(::plac\w+|:read-\w+)/)) {
              case ":read-only":
              case ":read-write":
                return Ne([Le(r, {
                  props: [L(i, /:(read-\w+)/, ":" + tr + "$1")]
                })], o);
              case "::placeholder":
                return Ne([Le(r, {
                  props: [L(i, /:(plac\w+)/, ":" + j + "input-$1")]
                }), Le(r, {
                  props: [L(i, /:(plac\w+)/, ":" + tr + "$1")]
                }), Le(r, {
                  props: [L(i, /:(plac\w+)/, re + "input-$1")]
                })], o);
            }
            return "";
          });
    }
}, uo = [co], fo = function(r) {
  var t = r.key;
  if (process.env.NODE_ENV !== "production" && !t)
    throw new Error(`You have to configure \`key\` for your cache. Please make sure it's unique (and not equal to 'css') as it's used for linking styles to your cache.
If multiple caches share the same key they might "fight" for each other's style elements.`);
  if (t === "css") {
    var n = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(n, function(c) {
      var f = c.getAttribute("data-emotion");
      f.indexOf(" ") !== -1 && (document.head.appendChild(c), c.setAttribute("data-s", ""));
    });
  }
  var o = r.stylisPlugins || uo;
  if (process.env.NODE_ENV !== "production" && /[^a-z-]/.test(t))
    throw new Error('Emotion key must only contain lower case alphabetical characters and - but "' + t + '" was passed');
  var i = {}, a, s = [];
  a = r.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + t + ' "]'),
    function(c) {
      for (var f = c.getAttribute("data-emotion").split(" "), S = 1; S < f.length; S++)
        i[f[S]] = !0;
      s.push(c);
    }
  );
  var u, l = [ro, to];
  process.env.NODE_ENV !== "production" && l.push(io({
    get compat() {
      return g.compat;
    }
  }), so);
  {
    var d, h = [Hn, process.env.NODE_ENV !== "production" ? function(c) {
      c.root || (c.return ? d.insert(c.return) : c.value && c.type !== Ir && d.insert(c.value + "{}"));
    } : Jn(function(c) {
      d.insert(c);
    })], p = Xn(l.concat(o, h)), b = function(f) {
      return Ne(Kn(f), p);
    };
    u = function(f, S, $, w) {
      d = $, process.env.NODE_ENV !== "production" && S.map !== void 0 && (d = {
        insert: function(m) {
          $.insert(m + S.map);
        }
      }), b(f ? f + "{" + S.styles + "}" : S.styles), w && (g.inserted[S.name] = !0);
    };
  }
  var g = {
    key: t,
    sheet: new kn({
      key: t,
      container: a,
      nonce: r.nonce,
      speedy: r.speedy,
      prepend: r.prepend,
      insertionPoint: r.insertionPoint
    }),
    nonce: r.nonce,
    inserted: i,
    registered: {},
    insert: u
  };
  return g.sheet.hydrate(s), g;
}, lo = !0;
function Bt(e, r, t) {
  var n = "";
  return t.split(" ").forEach(function(o) {
    e[o] !== void 0 ? r.push(e[o] + ";") : n += o + " ";
  }), n;
}
var Lr = function(r, t, n) {
  var o = r.key + "-" + t.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (n === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  lo === !1) && r.registered[o] === void 0 && (r.registered[o] = t.styles);
}, qt = function(r, t, n) {
  Lr(r, t, n);
  var o = r.key + "-" + t.name;
  if (r.inserted[t.name] === void 0) {
    var i = t;
    do
      r.insert(t === i ? "." + o : "", i, r.sheet, !0), i = i.next;
    while (i !== void 0);
  }
};
function po(e) {
  for (var r = 0, t, n = 0, o = e.length; o >= 4; ++n, o -= 4)
    t = e.charCodeAt(n) & 255 | (e.charCodeAt(++n) & 255) << 8 | (e.charCodeAt(++n) & 255) << 16 | (e.charCodeAt(++n) & 255) << 24, t = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16), t ^= /* k >>> r: */
    t >>> 24, r = /* Math.imul(k, m): */
    (t & 65535) * 1540483477 + ((t >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  switch (o) {
    case 3:
      r ^= (e.charCodeAt(n + 2) & 255) << 16;
    case 2:
      r ^= (e.charCodeAt(n + 1) & 255) << 8;
    case 1:
      r ^= e.charCodeAt(n) & 255, r = /* Math.imul(h, m): */
      (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16);
  }
  return r ^= r >>> 13, r = /* Math.imul(h, m): */
  (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), ((r ^ r >>> 15) >>> 0).toString(36);
}
var mo = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, dt = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, ho = "You have passed in falsy value as style object's key (can happen when in example you pass unexported component as computed key).", yo = /[A-Z]|^ms/g, Kt = /_EMO_([^_]+?)_([^]*?)_EMO_/g, Fr = function(r) {
  return r.charCodeAt(1) === 45;
}, pt = function(r) {
  return r != null && typeof r != "boolean";
}, _r = /* @__PURE__ */ jt(function(e) {
  return Fr(e) ? e : e.replace(yo, "-$&").toLowerCase();
}), nr = function(r, t) {
  switch (r) {
    case "animation":
    case "animationName":
      if (typeof t == "string")
        return t.replace(Kt, function(n, o, i) {
          return le = {
            name: o,
            styles: i,
            next: le
          }, o;
        });
  }
  return mo[r] !== 1 && !Fr(r) && typeof t == "number" && t !== 0 ? t + "px" : t;
};
if (process.env.NODE_ENV !== "production") {
  var go = /(var|attr|counters?|url|element|(((repeating-)?(linear|radial))|conic)-gradient)\(|(no-)?(open|close)-quote/, vo = ["normal", "none", "initial", "inherit", "unset"], bo = nr, Eo = /^-ms-/, So = /-(.)/g, mt = {};
  nr = function(r, t) {
    if (r === "content" && (typeof t != "string" || vo.indexOf(t) === -1 && !go.test(t) && (t.charAt(0) !== t.charAt(t.length - 1) || t.charAt(0) !== '"' && t.charAt(0) !== "'")))
      throw new Error("You seem to be using a value for 'content' without quotes, try replacing it with `content: '\"" + t + "\"'`");
    var n = bo(r, t);
    return n !== "" && !Fr(r) && r.indexOf("-") !== -1 && mt[r] === void 0 && (mt[r] = !0, console.error("Using kebab-case for css properties in objects is not supported. Did you mean " + r.replace(Eo, "ms-").replace(So, function(o, i) {
      return i.toUpperCase();
    }) + "?")), n;
  };
}
var Gt = "Component selectors can only be used in conjunction with @emotion/babel-plugin, the swc Emotion plugin, or another Emotion-aware compiler transform.";
function We(e, r, t) {
  if (t == null)
    return "";
  if (t.__emotion_styles !== void 0) {
    if (process.env.NODE_ENV !== "production" && t.toString() === "NO_COMPONENT_SELECTOR")
      throw new Error(Gt);
    return t;
  }
  switch (typeof t) {
    case "boolean":
      return "";
    case "object": {
      if (t.anim === 1)
        return le = {
          name: t.name,
          styles: t.styles,
          next: le
        }, t.name;
      if (t.styles !== void 0) {
        var n = t.next;
        if (n !== void 0)
          for (; n !== void 0; )
            le = {
              name: n.name,
              styles: n.styles,
              next: le
            }, n = n.next;
        var o = t.styles + ";";
        return process.env.NODE_ENV !== "production" && t.map !== void 0 && (o += t.map), o;
      }
      return xo(e, r, t);
    }
    case "function": {
      if (e !== void 0) {
        var i = le, a = t(e);
        return le = i, We(e, r, a);
      } else
        process.env.NODE_ENV !== "production" && console.error("Functions that are interpolated in css calls will be stringified.\nIf you want to have a css call based on props, create a function that returns a css call like this\nlet dynamicStyle = (props) => css`color: ${props.color}`\nIt can be called directly with props or interpolated in a styled call like this\nlet SomeComponent = styled('div')`${dynamicStyle}`");
      break;
    }
    case "string":
      if (process.env.NODE_ENV !== "production") {
        var s = [], u = t.replace(Kt, function(d, h, p) {
          var b = "animation" + s.length;
          return s.push("const " + b + " = keyframes`" + p.replace(/^@keyframes animation-\w+/, "") + "`"), "${" + b + "}";
        });
        s.length && console.error("`keyframes` output got interpolated into plain string, please wrap it with `css`.\n\nInstead of doing this:\n\n" + [].concat(s, ["`" + u + "`"]).join(`
`) + `

You should wrap it with \`css\` like this:

` + ("css`" + u + "`"));
      }
      break;
  }
  if (r == null)
    return t;
  var l = r[t];
  return l !== void 0 ? l : t;
}
function xo(e, r, t) {
  var n = "";
  if (Array.isArray(t))
    for (var o = 0; o < t.length; o++)
      n += We(e, r, t[o]) + ";";
  else
    for (var i in t) {
      var a = t[i];
      if (typeof a != "object")
        r != null && r[a] !== void 0 ? n += i + "{" + r[a] + "}" : pt(a) && (n += _r(i) + ":" + nr(i, a) + ";");
      else {
        if (i === "NO_COMPONENT_SELECTOR" && process.env.NODE_ENV !== "production")
          throw new Error(Gt);
        if (Array.isArray(a) && typeof a[0] == "string" && (r == null || r[a[0]] === void 0))
          for (var s = 0; s < a.length; s++)
            pt(a[s]) && (n += _r(i) + ":" + nr(i, a[s]) + ";");
        else {
          var u = We(e, r, a);
          switch (i) {
            case "animation":
            case "animationName": {
              n += _r(i) + ":" + u + ";";
              break;
            }
            default:
              process.env.NODE_ENV !== "production" && i === "undefined" && console.error(ho), n += i + "{" + u + "}";
          }
        }
      }
    }
  return n;
}
var ht = /label:\s*([^\s;\n{]+)\s*(;|$)/g, Ht;
process.env.NODE_ENV !== "production" && (Ht = /\/\*#\ssourceMappingURL=data:application\/json;\S+\s+\*\//g);
var le, Ar = function(r, t, n) {
  if (r.length === 1 && typeof r[0] == "object" && r[0] !== null && r[0].styles !== void 0)
    return r[0];
  var o = !0, i = "";
  le = void 0;
  var a = r[0];
  a == null || a.raw === void 0 ? (o = !1, i += We(n, t, a)) : (process.env.NODE_ENV !== "production" && a[0] === void 0 && console.error(dt), i += a[0]);
  for (var s = 1; s < r.length; s++)
    i += We(n, t, r[s]), o && (process.env.NODE_ENV !== "production" && a[s] === void 0 && console.error(dt), i += a[s]);
  var u;
  process.env.NODE_ENV !== "production" && (i = i.replace(Ht, function(p) {
    return u = p, "";
  })), ht.lastIndex = 0;
  for (var l = "", d; (d = ht.exec(i)) !== null; )
    l += "-" + // $FlowFixMe we know it's not null
    d[1];
  var h = po(i) + l;
  return process.env.NODE_ENV !== "production" ? {
    name: h,
    styles: i,
    map: u,
    next: le,
    toString: function() {
      return "You have tried to stringify object returned from `css` function. It isn't supposed to be used directly (e.g. as value of the `className` prop), but rather handed to emotion so it can handle it (e.g. as value of `css` prop).";
    }
  } : {
    name: h,
    styles: i,
    next: le
  };
}, Oo = function(r) {
  return r();
}, Xt = te["useInsertionEffect"] ? te["useInsertionEffect"] : !1, Jt = Xt || Oo, Pa = Xt || te.useLayoutEffect, wo = {}.hasOwnProperty, Ur = /* @__PURE__ */ te.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ fo({
    key: "css"
  }) : null
);
process.env.NODE_ENV !== "production" && (Ur.displayName = "EmotionCacheContext");
Ur.Provider;
var Zt = function(r) {
  return /* @__PURE__ */ sn(function(t, n) {
    var o = cn(Ur);
    return r(t, o, n);
  });
}, Vr = /* @__PURE__ */ te.createContext({});
process.env.NODE_ENV !== "production" && (Vr.displayName = "EmotionThemeContext");
var yt = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", gt = "__EMOTION_LABEL_PLEASE_DO_NOT_USE__", _o = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Lr(t, n, o), Jt(function() {
    return qt(t, n, o);
  }), null;
}, To = /* @__PURE__ */ Zt(function(e, r, t) {
  var n = e.css;
  typeof n == "string" && r.registered[n] !== void 0 && (n = r.registered[n]);
  var o = e[yt], i = [n], a = "";
  typeof e.className == "string" ? a = Bt(r.registered, i, e.className) : e.className != null && (a = e.className + " ");
  var s = Ar(i, void 0, te.useContext(Vr));
  if (process.env.NODE_ENV !== "production" && s.name.indexOf("-") === -1) {
    var u = e[gt];
    u && (s = Ar([s, "label:" + u + ";"]));
  }
  a += r.key + "-" + s.name;
  var l = {};
  for (var d in e)
    wo.call(e, d) && d !== "css" && d !== yt && (process.env.NODE_ENV === "production" || d !== gt) && (l[d] = e[d]);
  return l.ref = t, l.className = a, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement(_o, {
    cache: r,
    serialized: s,
    isStringTag: typeof o == "string"
  }), /* @__PURE__ */ te.createElement(o, l));
});
process.env.NODE_ENV !== "production" && (To.displayName = "EmotionCssPropInternal");
var Co = Pn, Ro = function(r) {
  return r !== "theme";
}, vt = function(r) {
  return typeof r == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  r.charCodeAt(0) > 96 ? Co : Ro;
}, bt = function(r, t, n) {
  var o;
  if (t) {
    var i = t.shouldForwardProp;
    o = r.__emotion_forwardProp && i ? function(a) {
      return r.__emotion_forwardProp(a) && i(a);
    } : i;
  }
  return typeof o != "function" && n && (o = r.__emotion_forwardProp), o;
}, Et = `You have illegal escape sequence in your template literal, most likely inside content's property value.
Because you write your CSS inside a JavaScript string you actually have to do double escaping, so for example "content: '\\00d7';" should become "content: '\\\\00d7';".
You can read more about this here:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Template_literals#ES2018_revision_of_illegal_escape_sequences`, $o = function(r) {
  var t = r.cache, n = r.serialized, o = r.isStringTag;
  return Lr(t, n, o), Jt(function() {
    return qt(t, n, o);
  }), null;
}, Po = function e(r, t) {
  if (process.env.NODE_ENV !== "production" && r === void 0)
    throw new Error(`You are trying to create a styled element with an undefined component.
You may have forgotten to import it.`);
  var n = r.__emotion_real === r, o = n && r.__emotion_base || r, i, a;
  t !== void 0 && (i = t.label, a = t.target);
  var s = bt(r, t, n), u = s || vt(o), l = !u("as");
  return function() {
    var d = arguments, h = n && r.__emotion_styles !== void 0 ? r.__emotion_styles.slice(0) : [];
    if (i !== void 0 && h.push("label:" + i + ";"), d[0] == null || d[0].raw === void 0)
      h.push.apply(h, d);
    else {
      process.env.NODE_ENV !== "production" && d[0][0] === void 0 && console.error(Et), h.push(d[0][0]);
      for (var p = d.length, b = 1; b < p; b++)
        process.env.NODE_ENV !== "production" && d[0][b] === void 0 && console.error(Et), h.push(d[b], d[0][b]);
    }
    var g = Zt(function(c, f, S) {
      var $ = l && c.as || o, w = "", O = [], m = c;
      if (c.theme == null) {
        m = {};
        for (var W in c)
          m[W] = c[W];
        m.theme = te.useContext(Vr);
      }
      typeof c.className == "string" ? w = Bt(f.registered, O, c.className) : c.className != null && (w = c.className + " ");
      var C = Ar(h.concat(O), f.registered, m);
      w += f.key + "-" + C.name, a !== void 0 && (w += " " + a);
      var de = l && s === void 0 ? vt($) : u, ne = {};
      for (var _ in c)
        l && _ === "as" || // $FlowFixMe
        de(_) && (ne[_] = c[_]);
      return ne.className = w, ne.ref = S, /* @__PURE__ */ te.createElement(te.Fragment, null, /* @__PURE__ */ te.createElement($o, {
        cache: f,
        serialized: C,
        isStringTag: typeof $ == "string"
      }), /* @__PURE__ */ te.createElement($, ne));
    });
    return g.displayName = i !== void 0 ? i : "Styled(" + (typeof o == "string" ? o : o.displayName || o.name || "Component") + ")", g.defaultProps = r.defaultProps, g.__emotion_real = g, g.__emotion_base = o, g.__emotion_styles = h, g.__emotion_forwardProp = s, Object.defineProperty(g, "toString", {
      value: function() {
        return a === void 0 && process.env.NODE_ENV !== "production" ? "NO_COMPONENT_SELECTOR" : "." + a;
      }
    }), g.withComponent = function(c, f) {
      return e(c, B({}, t, f, {
        shouldForwardProp: bt(g, f, !0)
      })).apply(void 0, h);
    }, g;
  };
}, Ao = [
  "a",
  "abbr",
  "address",
  "area",
  "article",
  "aside",
  "audio",
  "b",
  "base",
  "bdi",
  "bdo",
  "big",
  "blockquote",
  "body",
  "br",
  "button",
  "canvas",
  "caption",
  "cite",
  "code",
  "col",
  "colgroup",
  "data",
  "datalist",
  "dd",
  "del",
  "details",
  "dfn",
  "dialog",
  "div",
  "dl",
  "dt",
  "em",
  "embed",
  "fieldset",
  "figcaption",
  "figure",
  "footer",
  "form",
  "h1",
  "h2",
  "h3",
  "h4",
  "h5",
  "h6",
  "head",
  "header",
  "hgroup",
  "hr",
  "html",
  "i",
  "iframe",
  "img",
  "input",
  "ins",
  "kbd",
  "keygen",
  "label",
  "legend",
  "li",
  "link",
  "main",
  "map",
  "mark",
  "marquee",
  "menu",
  "menuitem",
  "meta",
  "meter",
  "nav",
  "noscript",
  "object",
  "ol",
  "optgroup",
  "option",
  "output",
  "p",
  "param",
  "picture",
  "pre",
  "progress",
  "q",
  "rp",
  "rt",
  "ruby",
  "s",
  "samp",
  "script",
  "section",
  "select",
  "small",
  "source",
  "span",
  "strong",
  "style",
  "sub",
  "summary",
  "sup",
  "table",
  "tbody",
  "td",
  "textarea",
  "tfoot",
  "th",
  "thead",
  "time",
  "title",
  "tr",
  "track",
  "u",
  "ul",
  "var",
  "video",
  "wbr",
  // SVG
  "circle",
  "clipPath",
  "defs",
  "ellipse",
  "foreignObject",
  "g",
  "image",
  "line",
  "linearGradient",
  "mask",
  "path",
  "pattern",
  "polygon",
  "polyline",
  "radialGradient",
  "rect",
  "stop",
  "svg",
  "text",
  "tspan"
], Nr = Po.bind();
Ao.forEach(function(e) {
  Nr[e] = Nr(e);
});
/**
 * @mui/styled-engine v5.14.14
 *
 * @license MIT
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
function No(e, r) {
  const t = Nr(e, r);
  return process.env.NODE_ENV !== "production" ? (...n) => {
    const o = typeof e == "string" ? `"${e}"` : "component";
    return n.length === 0 ? console.error([`MUI: Seems like you called \`styled(${o})()\` without a \`style\` argument.`, 'You must provide a `styles` argument: `styled("div")(styleYouForgotToPass)`.'].join(`
`)) : n.some((i) => i === void 0) && console.error(`MUI: the styled(${o})(...args) API requires all its args to be defined.`), t(...n);
  } : t;
}
const ko = (e, r) => {
  Array.isArray(e.__emotion_styles) && (e.__emotion_styles = r(e.__emotion_styles));
};
function Ee(e, r) {
  if (e == null)
    return {};
  var t = {}, n = Object.keys(e), o, i;
  for (i = 0; i < n.length; i++)
    o = n[i], !(r.indexOf(o) >= 0) && (t[o] = e[o]);
  return t;
}
const Io = ["values", "unit", "step"], Mo = (e) => {
  const r = Object.keys(e).map((t) => ({
    key: t,
    val: e[t]
  })) || [];
  return r.sort((t, n) => t.val - n.val), r.reduce((t, n) => B({}, t, {
    [n.key]: n.val
  }), {});
};
function Do(e) {
  const {
    // The breakpoint **start** at this value.
    // For instance with the first breakpoint xs: [xs, sm).
    values: r = {
      xs: 0,
      // phone
      sm: 600,
      // tablet
      md: 900,
      // small laptop
      lg: 1200,
      // desktop
      xl: 1536
      // large screen
    },
    unit: t = "px",
    step: n = 5
  } = e, o = Ee(e, Io), i = Mo(r), a = Object.keys(i);
  function s(p) {
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t})`;
  }
  function u(p) {
    return `@media (max-width:${(typeof r[p] == "number" ? r[p] : p) - n / 100}${t})`;
  }
  function l(p, b) {
    const g = a.indexOf(b);
    return `@media (min-width:${typeof r[p] == "number" ? r[p] : p}${t}) and (max-width:${(g !== -1 && typeof r[a[g]] == "number" ? r[a[g]] : b) - n / 100}${t})`;
  }
  function d(p) {
    return a.indexOf(p) + 1 < a.length ? l(p, a[a.indexOf(p) + 1]) : s(p);
  }
  function h(p) {
    const b = a.indexOf(p);
    return b === 0 ? s(a[1]) : b === a.length - 1 ? u(a[b]) : l(p, a[a.indexOf(p) + 1]).replace("@media", "@media not all and");
  }
  return B({
    keys: a,
    values: i,
    up: s,
    down: u,
    between: l,
    only: d,
    not: h,
    unit: t
  }, o);
}
const jo = {
  borderRadius: 4
}, Lo = jo, Fo = process.env.NODE_ENV !== "production" ? je.oneOfType([je.number, je.string, je.object, je.array]) : {}, Se = Fo;
function Ue(e, r) {
  return r ? ue(e, r, {
    clone: !1
    // No need to clone deep, it's way faster.
  }) : e;
}
const zr = {
  xs: 0,
  // phone
  sm: 600,
  // tablet
  md: 900,
  // small laptop
  lg: 1200,
  // desktop
  xl: 1536
  // large screen
}, St = {
  // Sorted ASC by size. That's important.
  // It can't be configured as it's used statically for propTypes.
  keys: ["xs", "sm", "md", "lg", "xl"],
  up: (e) => `@media (min-width:${zr[e]}px)`
};
function ve(e, r, t) {
  const n = e.theme || {};
  if (Array.isArray(r)) {
    const i = n.breakpoints || St;
    return r.reduce((a, s, u) => (a[i.up(i.keys[u])] = t(r[u]), a), {});
  }
  if (typeof r == "object") {
    const i = n.breakpoints || St;
    return Object.keys(r).reduce((a, s) => {
      if (Object.keys(i.values || zr).indexOf(s) !== -1) {
        const u = i.up(s);
        a[u] = t(r[s], s);
      } else {
        const u = s;
        a[u] = r[u];
      }
      return a;
    }, {});
  }
  return t(r);
}
function Qt(e = {}) {
  var r;
  return ((r = e.keys) == null ? void 0 : r.reduce((n, o) => {
    const i = e.up(o);
    return n[i] = {}, n;
  }, {})) || {};
}
function en(e, r) {
  return e.reduce((t, n) => {
    const o = t[n];
    return (!o || Object.keys(o).length === 0) && delete t[n], t;
  }, r);
}
function Aa(e, ...r) {
  const t = Qt(e), n = [t, ...r].reduce((o, i) => ue(o, i), {});
  return en(Object.keys(t), n);
}
function Uo(e, r) {
  if (typeof e != "object")
    return {};
  const t = {}, n = Object.keys(r);
  return Array.isArray(e) ? n.forEach((o, i) => {
    i < e.length && (t[o] = !0);
  }) : n.forEach((o) => {
    e[o] != null && (t[o] = !0);
  }), t;
}
function Na({
  values: e,
  breakpoints: r,
  base: t
}) {
  const n = t || Uo(e, r), o = Object.keys(n);
  if (o.length === 0)
    return e;
  let i;
  return o.reduce((a, s, u) => (Array.isArray(e) ? (a[s] = e[u] != null ? e[u] : e[i], i = u) : typeof e == "object" ? (a[s] = e[s] != null ? e[s] : e[i], i = s) : a[s] = e, a), {});
}
function fr(e, r, t = !0) {
  if (!r || typeof r != "string")
    return null;
  if (e && e.vars && t) {
    const n = `vars.${r}`.split(".").reduce((o, i) => o && o[i] ? o[i] : null, e);
    if (n != null)
      return n;
  }
  return r.split(".").reduce((n, o) => n && n[o] != null ? n[o] : null, e);
}
function or(e, r, t, n = t) {
  let o;
  return typeof e == "function" ? o = e(t) : Array.isArray(e) ? o = e[t] || n : o = fr(e, t) || n, r && (o = r(o, n, e)), o;
}
function Y(e) {
  const {
    prop: r,
    cssProperty: t = e.prop,
    themeKey: n,
    transform: o
  } = e, i = (a) => {
    if (a[r] == null)
      return null;
    const s = a[r], u = a.theme, l = fr(u, n) || {};
    return ve(a, s, (h) => {
      let p = or(l, o, h);
      return h === p && typeof h == "string" && (p = or(l, o, `${r}${h === "default" ? "" : Ae(h)}`, h)), t === !1 ? p : {
        [t]: p
      };
    });
  };
  return i.propTypes = process.env.NODE_ENV !== "production" ? {
    [r]: Se
  } : {}, i.filterProps = [r], i;
}
function Vo(e) {
  const r = {};
  return (t) => (r[t] === void 0 && (r[t] = e(t)), r[t]);
}
const zo = {
  m: "margin",
  p: "padding"
}, Yo = {
  t: "Top",
  r: "Right",
  b: "Bottom",
  l: "Left",
  x: ["Left", "Right"],
  y: ["Top", "Bottom"]
}, xt = {
  marginX: "mx",
  marginY: "my",
  paddingX: "px",
  paddingY: "py"
}, Wo = Vo((e) => {
  if (e.length > 2)
    if (xt[e])
      e = xt[e];
    else
      return [e];
  const [r, t] = e.split(""), n = zo[r], o = Yo[t] || "";
  return Array.isArray(o) ? o.map((i) => n + i) : [n + o];
}), lr = ["m", "mt", "mr", "mb", "ml", "mx", "my", "margin", "marginTop", "marginRight", "marginBottom", "marginLeft", "marginX", "marginY", "marginInline", "marginInlineStart", "marginInlineEnd", "marginBlock", "marginBlockStart", "marginBlockEnd"], dr = ["p", "pt", "pr", "pb", "pl", "px", "py", "padding", "paddingTop", "paddingRight", "paddingBottom", "paddingLeft", "paddingX", "paddingY", "paddingInline", "paddingInlineStart", "paddingInlineEnd", "paddingBlock", "paddingBlockStart", "paddingBlockEnd"], Bo = [...lr, ...dr];
function Ke(e, r, t, n) {
  var o;
  const i = (o = fr(e, r, !1)) != null ? o : t;
  return typeof i == "number" ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && typeof a != "number" && console.error(`MUI: Expected ${n} argument to be a number or a string, got ${a}.`), i * a) : Array.isArray(i) ? (a) => typeof a == "string" ? a : (process.env.NODE_ENV !== "production" && (Number.isInteger(a) ? a > i.length - 1 && console.error([`MUI: The value provided (${a}) overflows.`, `The supported values are: ${JSON.stringify(i)}.`, `${a} > ${i.length - 1}, you need to add the missing values.`].join(`
`)) : console.error([`MUI: The \`theme.${r}\` array type cannot be combined with non integer values.You should either use an integer value that can be used as index, or define the \`theme.${r}\` as a number.`].join(`
`))), i[a]) : typeof i == "function" ? i : (process.env.NODE_ENV !== "production" && console.error([`MUI: The \`theme.${r}\` value (${i}) is invalid.`, "It should be a number, an array or a function."].join(`
`)), () => {
  });
}
function rn(e) {
  return Ke(e, "spacing", 8, "spacing");
}
function Ge(e, r) {
  if (typeof r == "string" || r == null)
    return r;
  const t = Math.abs(r), n = e(t);
  return r >= 0 ? n : typeof n == "number" ? -n : `-${n}`;
}
function qo(e, r) {
  return (t) => e.reduce((n, o) => (n[o] = Ge(r, t), n), {});
}
function Ko(e, r, t, n) {
  if (r.indexOf(t) === -1)
    return null;
  const o = Wo(t), i = qo(o, n), a = e[t];
  return ve(e, a, i);
}
function tn(e, r) {
  const t = rn(e.theme);
  return Object.keys(e).map((n) => Ko(e, r, n, t)).reduce(Ue, {});
}
function K(e) {
  return tn(e, lr);
}
K.propTypes = process.env.NODE_ENV !== "production" ? lr.reduce((e, r) => (e[r] = Se, e), {}) : {};
K.filterProps = lr;
function G(e) {
  return tn(e, dr);
}
G.propTypes = process.env.NODE_ENV !== "production" ? dr.reduce((e, r) => (e[r] = Se, e), {}) : {};
G.filterProps = dr;
process.env.NODE_ENV !== "production" && Bo.reduce((e, r) => (e[r] = Se, e), {});
function Go(e = 8) {
  if (e.mui)
    return e;
  const r = rn({
    spacing: e
  }), t = (...n) => (process.env.NODE_ENV !== "production" && (n.length <= 4 || console.error(`MUI: Too many arguments provided, expected between 0 and 4, got ${n.length}`)), (n.length === 0 ? [1] : n).map((i) => {
    const a = r(i);
    return typeof a == "number" ? `${a}px` : a;
  }).join(" "));
  return t.mui = !0, t;
}
function pr(...e) {
  const r = e.reduce((n, o) => (o.filterProps.forEach((i) => {
    n[i] = o;
  }), n), {}), t = (n) => Object.keys(n).reduce((o, i) => r[i] ? Ue(o, r[i](n)) : o, {});
  return t.propTypes = process.env.NODE_ENV !== "production" ? e.reduce((n, o) => Object.assign(n, o.propTypes), {}) : {}, t.filterProps = e.reduce((n, o) => n.concat(o.filterProps), []), t;
}
function he(e) {
  return typeof e != "number" ? e : `${e}px solid`;
}
const Ho = Y({
  prop: "border",
  themeKey: "borders",
  transform: he
}), Xo = Y({
  prop: "borderTop",
  themeKey: "borders",
  transform: he
}), Jo = Y({
  prop: "borderRight",
  themeKey: "borders",
  transform: he
}), Zo = Y({
  prop: "borderBottom",
  themeKey: "borders",
  transform: he
}), Qo = Y({
  prop: "borderLeft",
  themeKey: "borders",
  transform: he
}), ei = Y({
  prop: "borderColor",
  themeKey: "palette"
}), ri = Y({
  prop: "borderTopColor",
  themeKey: "palette"
}), ti = Y({
  prop: "borderRightColor",
  themeKey: "palette"
}), ni = Y({
  prop: "borderBottomColor",
  themeKey: "palette"
}), oi = Y({
  prop: "borderLeftColor",
  themeKey: "palette"
}), mr = (e) => {
  if (e.borderRadius !== void 0 && e.borderRadius !== null) {
    const r = Ke(e.theme, "shape.borderRadius", 4, "borderRadius"), t = (n) => ({
      borderRadius: Ge(r, n)
    });
    return ve(e, e.borderRadius, t);
  }
  return null;
};
mr.propTypes = process.env.NODE_ENV !== "production" ? {
  borderRadius: Se
} : {};
mr.filterProps = ["borderRadius"];
pr(Ho, Xo, Jo, Zo, Qo, ei, ri, ti, ni, oi, mr);
const hr = (e) => {
  if (e.gap !== void 0 && e.gap !== null) {
    const r = Ke(e.theme, "spacing", 8, "gap"), t = (n) => ({
      gap: Ge(r, n)
    });
    return ve(e, e.gap, t);
  }
  return null;
};
hr.propTypes = process.env.NODE_ENV !== "production" ? {
  gap: Se
} : {};
hr.filterProps = ["gap"];
const yr = (e) => {
  if (e.columnGap !== void 0 && e.columnGap !== null) {
    const r = Ke(e.theme, "spacing", 8, "columnGap"), t = (n) => ({
      columnGap: Ge(r, n)
    });
    return ve(e, e.columnGap, t);
  }
  return null;
};
yr.propTypes = process.env.NODE_ENV !== "production" ? {
  columnGap: Se
} : {};
yr.filterProps = ["columnGap"];
const gr = (e) => {
  if (e.rowGap !== void 0 && e.rowGap !== null) {
    const r = Ke(e.theme, "spacing", 8, "rowGap"), t = (n) => ({
      rowGap: Ge(r, n)
    });
    return ve(e, e.rowGap, t);
  }
  return null;
};
gr.propTypes = process.env.NODE_ENV !== "production" ? {
  rowGap: Se
} : {};
gr.filterProps = ["rowGap"];
const ii = Y({
  prop: "gridColumn"
}), ai = Y({
  prop: "gridRow"
}), si = Y({
  prop: "gridAutoFlow"
}), ci = Y({
  prop: "gridAutoColumns"
}), ui = Y({
  prop: "gridAutoRows"
}), fi = Y({
  prop: "gridTemplateColumns"
}), li = Y({
  prop: "gridTemplateRows"
}), di = Y({
  prop: "gridTemplateAreas"
}), pi = Y({
  prop: "gridArea"
});
pr(hr, yr, gr, ii, ai, si, ci, ui, fi, li, di, pi);
function ke(e, r) {
  return r === "grey" ? r : e;
}
const mi = Y({
  prop: "color",
  themeKey: "palette",
  transform: ke
}), hi = Y({
  prop: "bgcolor",
  cssProperty: "backgroundColor",
  themeKey: "palette",
  transform: ke
}), yi = Y({
  prop: "backgroundColor",
  themeKey: "palette",
  transform: ke
});
pr(mi, hi, yi);
function ae(e) {
  return e <= 1 && e !== 0 ? `${e * 100}%` : e;
}
const gi = Y({
  prop: "width",
  transform: ae
}), Yr = (e) => {
  if (e.maxWidth !== void 0 && e.maxWidth !== null) {
    const r = (t) => {
      var n, o;
      const i = ((n = e.theme) == null || (n = n.breakpoints) == null || (n = n.values) == null ? void 0 : n[t]) || zr[t];
      return i ? ((o = e.theme) == null || (o = o.breakpoints) == null ? void 0 : o.unit) !== "px" ? {
        maxWidth: `${i}${e.theme.breakpoints.unit}`
      } : {
        maxWidth: i
      } : {
        maxWidth: ae(t)
      };
    };
    return ve(e, e.maxWidth, r);
  }
  return null;
};
Yr.filterProps = ["maxWidth"];
const vi = Y({
  prop: "minWidth",
  transform: ae
}), bi = Y({
  prop: "height",
  transform: ae
}), Ei = Y({
  prop: "maxHeight",
  transform: ae
}), Si = Y({
  prop: "minHeight",
  transform: ae
});
Y({
  prop: "size",
  cssProperty: "width",
  transform: ae
});
Y({
  prop: "size",
  cssProperty: "height",
  transform: ae
});
const xi = Y({
  prop: "boxSizing"
});
pr(gi, Yr, vi, bi, Ei, Si, xi);
const Oi = {
  // borders
  border: {
    themeKey: "borders",
    transform: he
  },
  borderTop: {
    themeKey: "borders",
    transform: he
  },
  borderRight: {
    themeKey: "borders",
    transform: he
  },
  borderBottom: {
    themeKey: "borders",
    transform: he
  },
  borderLeft: {
    themeKey: "borders",
    transform: he
  },
  borderColor: {
    themeKey: "palette"
  },
  borderTopColor: {
    themeKey: "palette"
  },
  borderRightColor: {
    themeKey: "palette"
  },
  borderBottomColor: {
    themeKey: "palette"
  },
  borderLeftColor: {
    themeKey: "palette"
  },
  borderRadius: {
    themeKey: "shape.borderRadius",
    style: mr
  },
  // palette
  color: {
    themeKey: "palette",
    transform: ke
  },
  bgcolor: {
    themeKey: "palette",
    cssProperty: "backgroundColor",
    transform: ke
  },
  backgroundColor: {
    themeKey: "palette",
    transform: ke
  },
  // spacing
  p: {
    style: G
  },
  pt: {
    style: G
  },
  pr: {
    style: G
  },
  pb: {
    style: G
  },
  pl: {
    style: G
  },
  px: {
    style: G
  },
  py: {
    style: G
  },
  padding: {
    style: G
  },
  paddingTop: {
    style: G
  },
  paddingRight: {
    style: G
  },
  paddingBottom: {
    style: G
  },
  paddingLeft: {
    style: G
  },
  paddingX: {
    style: G
  },
  paddingY: {
    style: G
  },
  paddingInline: {
    style: G
  },
  paddingInlineStart: {
    style: G
  },
  paddingInlineEnd: {
    style: G
  },
  paddingBlock: {
    style: G
  },
  paddingBlockStart: {
    style: G
  },
  paddingBlockEnd: {
    style: G
  },
  m: {
    style: K
  },
  mt: {
    style: K
  },
  mr: {
    style: K
  },
  mb: {
    style: K
  },
  ml: {
    style: K
  },
  mx: {
    style: K
  },
  my: {
    style: K
  },
  margin: {
    style: K
  },
  marginTop: {
    style: K
  },
  marginRight: {
    style: K
  },
  marginBottom: {
    style: K
  },
  marginLeft: {
    style: K
  },
  marginX: {
    style: K
  },
  marginY: {
    style: K
  },
  marginInline: {
    style: K
  },
  marginInlineStart: {
    style: K
  },
  marginInlineEnd: {
    style: K
  },
  marginBlock: {
    style: K
  },
  marginBlockStart: {
    style: K
  },
  marginBlockEnd: {
    style: K
  },
  // display
  displayPrint: {
    cssProperty: !1,
    transform: (e) => ({
      "@media print": {
        display: e
      }
    })
  },
  display: {},
  overflow: {},
  textOverflow: {},
  visibility: {},
  whiteSpace: {},
  // flexbox
  flexBasis: {},
  flexDirection: {},
  flexWrap: {},
  justifyContent: {},
  alignItems: {},
  alignContent: {},
  order: {},
  flex: {},
  flexGrow: {},
  flexShrink: {},
  alignSelf: {},
  justifyItems: {},
  justifySelf: {},
  // grid
  gap: {
    style: hr
  },
  rowGap: {
    style: gr
  },
  columnGap: {
    style: yr
  },
  gridColumn: {},
  gridRow: {},
  gridAutoFlow: {},
  gridAutoColumns: {},
  gridAutoRows: {},
  gridTemplateColumns: {},
  gridTemplateRows: {},
  gridTemplateAreas: {},
  gridArea: {},
  // positions
  position: {},
  zIndex: {
    themeKey: "zIndex"
  },
  top: {},
  right: {},
  bottom: {},
  left: {},
  // shadows
  boxShadow: {
    themeKey: "shadows"
  },
  // sizing
  width: {
    transform: ae
  },
  maxWidth: {
    style: Yr
  },
  minWidth: {
    transform: ae
  },
  height: {
    transform: ae
  },
  maxHeight: {
    transform: ae
  },
  minHeight: {
    transform: ae
  },
  boxSizing: {},
  // typography
  fontFamily: {
    themeKey: "typography"
  },
  fontSize: {
    themeKey: "typography"
  },
  fontStyle: {
    themeKey: "typography"
  },
  fontWeight: {
    themeKey: "typography"
  },
  letterSpacing: {},
  textTransform: {},
  lineHeight: {},
  textAlign: {},
  typography: {
    cssProperty: !1,
    themeKey: "typography"
  }
}, Wr = Oi;
function wi(...e) {
  const r = e.reduce((n, o) => n.concat(Object.keys(o)), []), t = new Set(r);
  return e.every((n) => t.size === Object.keys(n).length);
}
function _i(e, r) {
  return typeof e == "function" ? e(r) : e;
}
function Ti() {
  function e(t, n, o, i) {
    const a = {
      [t]: n,
      theme: o
    }, s = i[t];
    if (!s)
      return {
        [t]: n
      };
    const {
      cssProperty: u = t,
      themeKey: l,
      transform: d,
      style: h
    } = s;
    if (n == null)
      return null;
    if (l === "typography" && n === "inherit")
      return {
        [t]: n
      };
    const p = fr(o, l) || {};
    return h ? h(a) : ve(a, n, (g) => {
      let c = or(p, d, g);
      return g === c && typeof g == "string" && (c = or(p, d, `${t}${g === "default" ? "" : Ae(g)}`, g)), u === !1 ? c : {
        [u]: c
      };
    });
  }
  function r(t) {
    var n;
    const {
      sx: o,
      theme: i = {}
    } = t || {};
    if (!o)
      return null;
    const a = (n = i.unstable_sxConfig) != null ? n : Wr;
    function s(u) {
      let l = u;
      if (typeof u == "function")
        l = u(i);
      else if (typeof u != "object")
        return u;
      if (!l)
        return null;
      const d = Qt(i.breakpoints), h = Object.keys(d);
      let p = d;
      return Object.keys(l).forEach((b) => {
        const g = _i(l[b], i);
        if (g != null)
          if (typeof g == "object")
            if (a[b])
              p = Ue(p, e(b, g, i, a));
            else {
              const c = ve({
                theme: i
              }, g, (f) => ({
                [b]: f
              }));
              wi(c, g) ? p[b] = r({
                sx: g,
                theme: i
              }) : p = Ue(p, c);
            }
          else
            p = Ue(p, e(b, g, i, a));
      }), en(h, p);
    }
    return Array.isArray(o) ? o.map(s) : s(o);
  }
  return r;
}
const nn = Ti();
nn.filterProps = ["sx"];
const Br = nn, Ci = ["breakpoints", "palette", "spacing", "shape"];
function on(e = {}, ...r) {
  const {
    breakpoints: t = {},
    palette: n = {},
    spacing: o,
    shape: i = {}
  } = e, a = Ee(e, Ci), s = Do(t), u = Go(o);
  let l = ue({
    breakpoints: s,
    direction: "ltr",
    components: {},
    // Inject component definitions.
    palette: B({
      mode: "light"
    }, n),
    spacing: u,
    shape: B({}, Lo, i)
  }, a);
  return l = r.reduce((d, h) => ue(d, h), l), l.unstable_sxConfig = B({}, Wr, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return Br({
      sx: h,
      theme: this
    });
  }, l;
}
const Ri = ["variant"];
function Ot(e) {
  return e.length === 0;
}
function an(e) {
  const {
    variant: r
  } = e, t = Ee(e, Ri);
  let n = r || "";
  return Object.keys(t).sort().forEach((o) => {
    o === "color" ? n += Ot(n) ? e[o] : Ae(e[o]) : n += `${Ot(n) ? o : Ae(o)}${Ae(e[o].toString())}`;
  }), n;
}
const $i = ["name", "slot", "skipVariantsResolver", "skipSx", "overridesResolver"];
function Pi(e) {
  return Object.keys(e).length === 0;
}
function Ai(e) {
  return typeof e == "string" && // 96 is one less than the char code
  // for "a" so this is checking that
  // it's a lowercase character
  e.charCodeAt(0) > 96;
}
const Ni = (e, r) => r.components && r.components[e] && r.components[e].styleOverrides ? r.components[e].styleOverrides : null, ir = (e) => {
  const r = {};
  return e && e.forEach((t) => {
    const n = an(t.props);
    r[n] = t.style;
  }), r;
}, ki = (e, r) => {
  let t = [];
  return r && r.components && r.components[e] && r.components[e].variants && (t = r.components[e].variants), ir(t);
}, ar = (e, r, t) => {
  const {
    ownerState: n = {}
  } = e, o = [];
  return t && t.forEach((i) => {
    let a = !0;
    Object.keys(i.props).forEach((s) => {
      n[s] !== i.props[s] && e[s] !== i.props[s] && (a = !1);
    }), a && o.push(r[an(i.props)]);
  }), o;
}, Ii = (e, r, t, n) => {
  var o;
  const i = t == null || (o = t.components) == null || (o = o[n]) == null ? void 0 : o.variants;
  return ar(e, r, i);
};
function Ve(e) {
  return e !== "ownerState" && e !== "theme" && e !== "sx" && e !== "as";
}
const Mi = on(), wt = (e) => e && e.charAt(0).toLowerCase() + e.slice(1);
function rr({
  defaultTheme: e,
  theme: r,
  themeId: t
}) {
  return Pi(r) ? e : r[t] || r;
}
function Di(e) {
  return e ? (r, t) => t[e] : null;
}
const _t = ({
  styledArg: e,
  props: r,
  defaultTheme: t,
  themeId: n
}) => {
  const o = e(B({}, r, {
    theme: rr(B({}, r, {
      defaultTheme: t,
      themeId: n
    }))
  }));
  let i;
  if (o && o.variants && (i = o.variants, delete o.variants), i) {
    const a = ar(r, ir(i), i);
    return [o, ...a];
  }
  return o;
};
function ji(e = {}) {
  const {
    themeId: r,
    defaultTheme: t = Mi,
    rootShouldForwardProp: n = Ve,
    slotShouldForwardProp: o = Ve
  } = e, i = (a) => Br(B({}, a, {
    theme: rr(B({}, a, {
      defaultTheme: t,
      themeId: r
    }))
  }));
  return i.__mui_systemSx = !0, (a, s = {}) => {
    ko(a, (O) => O.filter((m) => !(m != null && m.__mui_systemSx)));
    const {
      name: u,
      slot: l,
      skipVariantsResolver: d,
      skipSx: h,
      // TODO v6: remove `lowercaseFirstLetter()` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      overridesResolver: p = Di(wt(l))
    } = s, b = Ee(s, $i), g = d !== void 0 ? d : (
      // TODO v6: remove `Root` in the next major release
      // For more details: https://github.com/mui/material-ui/pull/37908
      l && l !== "Root" && l !== "root" || !1
    ), c = h || !1;
    let f;
    process.env.NODE_ENV !== "production" && u && (f = `${u}-${wt(l || "Root")}`);
    let S = Ve;
    l === "Root" || l === "root" ? S = n : l ? S = o : Ai(a) && (S = void 0);
    const $ = No(a, B({
      shouldForwardProp: S,
      label: f
    }, b)), w = (O, ...m) => {
      const W = m ? m.map((_) => {
        if (typeof _ == "function" && _.__emotion_real !== _)
          return (H) => _t({
            styledArg: _,
            props: H,
            defaultTheme: t,
            themeId: r
          });
        if (be(_)) {
          let H = _, Z;
          return _ && _.variants && (Z = _.variants, delete H.variants, H = (fe) => {
            let Q = _;
            return ar(fe, ir(Z), Z).forEach((oe) => {
              Q = ue(Q, oe);
            }), Q;
          }), H;
        }
        return _;
      }) : [];
      let C = O;
      if (be(O)) {
        let _;
        O && O.variants && (_ = O.variants, delete C.variants, C = (H) => {
          let Z = O;
          return ar(H, ir(_), _).forEach((Q) => {
            Z = ue(Z, Q);
          }), Z;
        });
      } else
        typeof O == "function" && // On the server Emotion doesn't use React.forwardRef for creating components, so the created
        // component stays as a function. This condition makes sure that we do not interpolate functions
        // which are basically components used as a selectors.
        O.__emotion_real !== O && (C = (_) => _t({
          styledArg: O,
          props: _,
          defaultTheme: t,
          themeId: r
        }));
      u && p && W.push((_) => {
        const H = rr(B({}, _, {
          defaultTheme: t,
          themeId: r
        })), Z = Ni(u, H);
        if (Z) {
          const fe = {};
          return Object.entries(Z).forEach(([Q, pe]) => {
            fe[Q] = typeof pe == "function" ? pe(B({}, _, {
              theme: H
            })) : pe;
          }), p(_, fe);
        }
        return null;
      }), u && !g && W.push((_) => {
        const H = rr(B({}, _, {
          defaultTheme: t,
          themeId: r
        }));
        return Ii(_, ki(u, H), H, u);
      }), c || W.push(i);
      const de = W.length - m.length;
      if (Array.isArray(O) && de > 0) {
        const _ = new Array(de).fill("");
        C = [...O, ..._], C.raw = [...O.raw, ..._];
      }
      const ne = $(C, ...W);
      if (process.env.NODE_ENV !== "production") {
        let _;
        u && (_ = `${u}${Ae(l || "")}`), _ === void 0 && (_ = `Styled(${On(a)})`), ne.displayName = _;
      }
      return a.muiName && (ne.muiName = a.muiName), ne;
    };
    return $.withConfig && (w.withConfig = $.withConfig), w;
  };
}
function qr(e, r = 0, t = 1) {
  return process.env.NODE_ENV !== "production" && (e < r || e > t) && console.error(`MUI: The value provided ${e} is out of range [${r}, ${t}].`), Math.min(Math.max(r, e), t);
}
function Li(e) {
  e = e.slice(1);
  const r = new RegExp(`.{1,${e.length >= 6 ? 2 : 1}}`, "g");
  let t = e.match(r);
  return t && t[0].length === 1 && (t = t.map((n) => n + n)), t ? `rgb${t.length === 4 ? "a" : ""}(${t.map((n, o) => o < 3 ? parseInt(n, 16) : Math.round(parseInt(n, 16) / 255 * 1e3) / 1e3).join(", ")})` : "";
}
function Oe(e) {
  if (e.type)
    return e;
  if (e.charAt(0) === "#")
    return Oe(Li(e));
  const r = e.indexOf("("), t = e.substring(0, r);
  if (["rgb", "rgba", "hsl", "hsla", "color"].indexOf(t) === -1)
    throw new Error(process.env.NODE_ENV !== "production" ? `MUI: Unsupported \`${e}\` color.
The following formats are supported: #nnn, #nnnnnn, rgb(), rgba(), hsl(), hsla(), color().` : Ie(9, e));
  let n = e.substring(r + 1, e.length - 1), o;
  if (t === "color") {
    if (n = n.split(" "), o = n.shift(), n.length === 4 && n[3].charAt(0) === "/" && (n[3] = n[3].slice(1)), ["srgb", "display-p3", "a98-rgb", "prophoto-rgb", "rec-2020"].indexOf(o) === -1)
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: unsupported \`${o}\` color space.
The following color spaces are supported: srgb, display-p3, a98-rgb, prophoto-rgb, rec-2020.` : Ie(10, o));
  } else
    n = n.split(",");
  return n = n.map((i) => parseFloat(i)), {
    type: t,
    values: n,
    colorSpace: o
  };
}
function vr(e) {
  const {
    type: r,
    colorSpace: t
  } = e;
  let {
    values: n
  } = e;
  return r.indexOf("rgb") !== -1 ? n = n.map((o, i) => i < 3 ? parseInt(o, 10) : o) : r.indexOf("hsl") !== -1 && (n[1] = `${n[1]}%`, n[2] = `${n[2]}%`), r.indexOf("color") !== -1 ? n = `${t} ${n.join(" ")}` : n = `${n.join(", ")}`, `${r}(${n})`;
}
function Fi(e) {
  e = Oe(e);
  const {
    values: r
  } = e, t = r[0], n = r[1] / 100, o = r[2] / 100, i = n * Math.min(o, 1 - o), a = (l, d = (l + t / 30) % 12) => o - i * Math.max(Math.min(d - 3, 9 - d, 1), -1);
  let s = "rgb";
  const u = [Math.round(a(0) * 255), Math.round(a(8) * 255), Math.round(a(4) * 255)];
  return e.type === "hsla" && (s += "a", u.push(r[3])), vr({
    type: s,
    values: u
  });
}
function Tt(e) {
  e = Oe(e);
  let r = e.type === "hsl" || e.type === "hsla" ? Oe(Fi(e)).values : e.values;
  return r = r.map((t) => (e.type !== "color" && (t /= 255), t <= 0.03928 ? t / 12.92 : ((t + 0.055) / 1.055) ** 2.4)), Number((0.2126 * r[0] + 0.7152 * r[1] + 0.0722 * r[2]).toFixed(3));
}
function Ct(e, r) {
  const t = Tt(e), n = Tt(r);
  return (Math.max(t, n) + 0.05) / (Math.min(t, n) + 0.05);
}
function ka(e, r) {
  return e = Oe(e), r = qr(r), (e.type === "rgb" || e.type === "hsl") && (e.type += "a"), e.type === "color" ? e.values[3] = `/${r}` : e.values[3] = r, vr(e);
}
function Ui(e, r) {
  if (e = Oe(e), r = qr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] *= 1 - r;
  else if (e.type.indexOf("rgb") !== -1 || e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] *= 1 - r;
  return vr(e);
}
function Vi(e, r) {
  if (e = Oe(e), r = qr(r), e.type.indexOf("hsl") !== -1)
    e.values[2] += (100 - e.values[2]) * r;
  else if (e.type.indexOf("rgb") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (255 - e.values[t]) * r;
  else if (e.type.indexOf("color") !== -1)
    for (let t = 0; t < 3; t += 1)
      e.values[t] += (1 - e.values[t]) * r;
  return vr(e);
}
const zi = "$$material";
function Yi(e, r) {
  return B({
    toolbar: {
      minHeight: 56,
      [e.up("xs")]: {
        "@media (orientation: landscape)": {
          minHeight: 48
        }
      },
      [e.up("sm")]: {
        minHeight: 64
      }
    }
  }, r);
}
const Wi = {
  black: "#000",
  white: "#fff"
}, Be = Wi, Bi = {
  50: "#fafafa",
  100: "#f5f5f5",
  200: "#eeeeee",
  300: "#e0e0e0",
  400: "#bdbdbd",
  500: "#9e9e9e",
  600: "#757575",
  700: "#616161",
  800: "#424242",
  900: "#212121",
  A100: "#f5f5f5",
  A200: "#eeeeee",
  A400: "#bdbdbd",
  A700: "#616161"
}, qi = Bi, Ki = {
  50: "#f3e5f5",
  100: "#e1bee7",
  200: "#ce93d8",
  300: "#ba68c8",
  400: "#ab47bc",
  500: "#9c27b0",
  600: "#8e24aa",
  700: "#7b1fa2",
  800: "#6a1b9a",
  900: "#4a148c",
  A100: "#ea80fc",
  A200: "#e040fb",
  A400: "#d500f9",
  A700: "#aa00ff"
}, Te = Ki, Gi = {
  50: "#ffebee",
  100: "#ffcdd2",
  200: "#ef9a9a",
  300: "#e57373",
  400: "#ef5350",
  500: "#f44336",
  600: "#e53935",
  700: "#d32f2f",
  800: "#c62828",
  900: "#b71c1c",
  A100: "#ff8a80",
  A200: "#ff5252",
  A400: "#ff1744",
  A700: "#d50000"
}, Ce = Gi, Hi = {
  50: "#fff3e0",
  100: "#ffe0b2",
  200: "#ffcc80",
  300: "#ffb74d",
  400: "#ffa726",
  500: "#ff9800",
  600: "#fb8c00",
  700: "#f57c00",
  800: "#ef6c00",
  900: "#e65100",
  A100: "#ffd180",
  A200: "#ffab40",
  A400: "#ff9100",
  A700: "#ff6d00"
}, Fe = Hi, Xi = {
  50: "#e3f2fd",
  100: "#bbdefb",
  200: "#90caf9",
  300: "#64b5f6",
  400: "#42a5f5",
  500: "#2196f3",
  600: "#1e88e5",
  700: "#1976d2",
  800: "#1565c0",
  900: "#0d47a1",
  A100: "#82b1ff",
  A200: "#448aff",
  A400: "#2979ff",
  A700: "#2962ff"
}, Re = Xi, Ji = {
  50: "#e1f5fe",
  100: "#b3e5fc",
  200: "#81d4fa",
  300: "#4fc3f7",
  400: "#29b6f6",
  500: "#03a9f4",
  600: "#039be5",
  700: "#0288d1",
  800: "#0277bd",
  900: "#01579b",
  A100: "#80d8ff",
  A200: "#40c4ff",
  A400: "#00b0ff",
  A700: "#0091ea"
}, $e = Ji, Zi = {
  50: "#e8f5e9",
  100: "#c8e6c9",
  200: "#a5d6a7",
  300: "#81c784",
  400: "#66bb6a",
  500: "#4caf50",
  600: "#43a047",
  700: "#388e3c",
  800: "#2e7d32",
  900: "#1b5e20",
  A100: "#b9f6ca",
  A200: "#69f0ae",
  A400: "#00e676",
  A700: "#00c853"
}, Pe = Zi, Qi = ["mode", "contrastThreshold", "tonalOffset"], Rt = {
  // The colors used to style the text.
  text: {
    // The most important text.
    primary: "rgba(0, 0, 0, 0.87)",
    // Secondary text.
    secondary: "rgba(0, 0, 0, 0.6)",
    // Disabled text have even lower visual prominence.
    disabled: "rgba(0, 0, 0, 0.38)"
  },
  // The color used to divide different elements.
  divider: "rgba(0, 0, 0, 0.12)",
  // The background colors used to style the surfaces.
  // Consistency between these values is important.
  background: {
    paper: Be.white,
    default: Be.white
  },
  // The colors used to style the action elements.
  action: {
    // The color of an active action like an icon button.
    active: "rgba(0, 0, 0, 0.54)",
    // The color of an hovered action.
    hover: "rgba(0, 0, 0, 0.04)",
    hoverOpacity: 0.04,
    // The color of a selected action.
    selected: "rgba(0, 0, 0, 0.08)",
    selectedOpacity: 0.08,
    // The color of a disabled action.
    disabled: "rgba(0, 0, 0, 0.26)",
    // The background color of a disabled action.
    disabledBackground: "rgba(0, 0, 0, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(0, 0, 0, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.12
  }
}, Tr = {
  text: {
    primary: Be.white,
    secondary: "rgba(255, 255, 255, 0.7)",
    disabled: "rgba(255, 255, 255, 0.5)",
    icon: "rgba(255, 255, 255, 0.5)"
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#121212",
    default: "#121212"
  },
  action: {
    active: Be.white,
    hover: "rgba(255, 255, 255, 0.08)",
    hoverOpacity: 0.08,
    selected: "rgba(255, 255, 255, 0.16)",
    selectedOpacity: 0.16,
    disabled: "rgba(255, 255, 255, 0.3)",
    disabledBackground: "rgba(255, 255, 255, 0.12)",
    disabledOpacity: 0.38,
    focus: "rgba(255, 255, 255, 0.12)",
    focusOpacity: 0.12,
    activatedOpacity: 0.24
  }
};
function $t(e, r, t, n) {
  const o = n.light || n, i = n.dark || n * 1.5;
  e[r] || (e.hasOwnProperty(t) ? e[r] = e[t] : r === "light" ? e.light = Vi(e.main, o) : r === "dark" && (e.dark = Ui(e.main, i)));
}
function ea(e = "light") {
  return e === "dark" ? {
    main: Re[200],
    light: Re[50],
    dark: Re[400]
  } : {
    main: Re[700],
    light: Re[400],
    dark: Re[800]
  };
}
function ra(e = "light") {
  return e === "dark" ? {
    main: Te[200],
    light: Te[50],
    dark: Te[400]
  } : {
    main: Te[500],
    light: Te[300],
    dark: Te[700]
  };
}
function ta(e = "light") {
  return e === "dark" ? {
    main: Ce[500],
    light: Ce[300],
    dark: Ce[700]
  } : {
    main: Ce[700],
    light: Ce[400],
    dark: Ce[800]
  };
}
function na(e = "light") {
  return e === "dark" ? {
    main: $e[400],
    light: $e[300],
    dark: $e[700]
  } : {
    main: $e[700],
    light: $e[500],
    dark: $e[900]
  };
}
function oa(e = "light") {
  return e === "dark" ? {
    main: Pe[400],
    light: Pe[300],
    dark: Pe[700]
  } : {
    main: Pe[800],
    light: Pe[500],
    dark: Pe[900]
  };
}
function ia(e = "light") {
  return e === "dark" ? {
    main: Fe[400],
    light: Fe[300],
    dark: Fe[700]
  } : {
    main: "#ed6c02",
    // closest to orange[800] that pass 3:1.
    light: Fe[500],
    dark: Fe[900]
  };
}
function aa(e) {
  const {
    mode: r = "light",
    contrastThreshold: t = 3,
    tonalOffset: n = 0.2
  } = e, o = Ee(e, Qi), i = e.primary || ea(r), a = e.secondary || ra(r), s = e.error || ta(r), u = e.info || na(r), l = e.success || oa(r), d = e.warning || ia(r);
  function h(c) {
    const f = Ct(c, Tr.text.primary) >= t ? Tr.text.primary : Rt.text.primary;
    if (process.env.NODE_ENV !== "production") {
      const S = Ct(c, f);
      S < 3 && console.error([`MUI: The contrast ratio of ${S}:1 for ${f} on ${c}`, "falls below the WCAG recommended absolute minimum contrast ratio of 3:1.", "https://www.w3.org/TR/2008/REC-WCAG20-20081211/#visual-audio-contrast-contrast"].join(`
`));
    }
    return f;
  }
  const p = ({
    color: c,
    name: f,
    mainShade: S = 500,
    lightShade: $ = 300,
    darkShade: w = 700
  }) => {
    if (c = B({}, c), !c.main && c[S] && (c.main = c[S]), !c.hasOwnProperty("main"))
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
The color object needs to have a \`main\` property or a \`${S}\` property.` : Ie(11, f ? ` (${f})` : "", S));
    if (typeof c.main != "string")
      throw new Error(process.env.NODE_ENV !== "production" ? `MUI: The color${f ? ` (${f})` : ""} provided to augmentColor(color) is invalid.
\`color.main\` should be a string, but \`${JSON.stringify(c.main)}\` was provided instead.

Did you intend to use one of the following approaches?

import { green } from "@mui/material/colors";

const theme1 = createTheme({ palette: {
  primary: green,
} });

const theme2 = createTheme({ palette: {
  primary: { main: green[500] },
} });` : Ie(12, f ? ` (${f})` : "", JSON.stringify(c.main)));
    return $t(c, "light", $, n), $t(c, "dark", w, n), c.contrastText || (c.contrastText = h(c.main)), c;
  }, b = {
    dark: Tr,
    light: Rt
  };
  return process.env.NODE_ENV !== "production" && (b[r] || console.error(`MUI: The palette mode \`${r}\` is not supported.`)), ue(B({
    // A collection of common colors.
    common: B({}, Be),
    // prevent mutable object.
    // The palette mode, can be light or dark.
    mode: r,
    // The colors used to represent primary interface elements for a user.
    primary: p({
      color: i,
      name: "primary"
    }),
    // The colors used to represent secondary interface elements for a user.
    secondary: p({
      color: a,
      name: "secondary",
      mainShade: "A400",
      lightShade: "A200",
      darkShade: "A700"
    }),
    // The colors used to represent interface elements that the user should be made aware of.
    error: p({
      color: s,
      name: "error"
    }),
    // The colors used to represent potentially dangerous actions or important messages.
    warning: p({
      color: d,
      name: "warning"
    }),
    // The colors used to present information to the user that is neutral and not necessarily important.
    info: p({
      color: u,
      name: "info"
    }),
    // The colors used to indicate the successful completion of an action that user triggered.
    success: p({
      color: l,
      name: "success"
    }),
    // The grey colors.
    grey: qi,
    // Used by `getContrastText()` to maximize the contrast between
    // the background and the text.
    contrastThreshold: t,
    // Takes a background color and returns the text color that maximizes the contrast.
    getContrastText: h,
    // Generate a rich color object.
    augmentColor: p,
    // Used by the functions below to shift a color's luminance by approximately
    // two indexes within its tonal palette.
    // E.g., shift from Red 500 to Red 300 or Red 700.
    tonalOffset: n
  }, b[r]), o);
}
const sa = ["fontFamily", "fontSize", "fontWeightLight", "fontWeightRegular", "fontWeightMedium", "fontWeightBold", "htmlFontSize", "allVariants", "pxToRem"];
function ca(e) {
  return Math.round(e * 1e5) / 1e5;
}
const Pt = {
  textTransform: "uppercase"
}, At = '"Roboto", "Helvetica", "Arial", sans-serif';
function ua(e, r) {
  const t = typeof r == "function" ? r(e) : r, {
    fontFamily: n = At,
    // The default font size of the Material Specification.
    fontSize: o = 14,
    // px
    fontWeightLight: i = 300,
    fontWeightRegular: a = 400,
    fontWeightMedium: s = 500,
    fontWeightBold: u = 700,
    // Tell MUI what's the font-size on the html element.
    // 16px is the default font-size used by browsers.
    htmlFontSize: l = 16,
    // Apply the CSS properties to all the variants.
    allVariants: d,
    pxToRem: h
  } = t, p = Ee(t, sa);
  process.env.NODE_ENV !== "production" && (typeof o != "number" && console.error("MUI: `fontSize` is required to be a number."), typeof l != "number" && console.error("MUI: `htmlFontSize` is required to be a number."));
  const b = o / 14, g = h || ((S) => `${S / l * b}rem`), c = (S, $, w, O, m) => B({
    fontFamily: n,
    fontWeight: S,
    fontSize: g($),
    // Unitless following https://meyerweb.com/eric/thoughts/2006/02/08/unitless-line-heights/
    lineHeight: w
  }, n === At ? {
    letterSpacing: `${ca(O / $)}em`
  } : {}, m, d), f = {
    h1: c(i, 96, 1.167, -1.5),
    h2: c(i, 60, 1.2, -0.5),
    h3: c(a, 48, 1.167, 0),
    h4: c(a, 34, 1.235, 0.25),
    h5: c(a, 24, 1.334, 0),
    h6: c(s, 20, 1.6, 0.15),
    subtitle1: c(a, 16, 1.75, 0.15),
    subtitle2: c(s, 14, 1.57, 0.1),
    body1: c(a, 16, 1.5, 0.15),
    body2: c(a, 14, 1.43, 0.15),
    button: c(s, 14, 1.75, 0.4, Pt),
    caption: c(a, 12, 1.66, 0.4),
    overline: c(a, 12, 2.66, 1, Pt),
    // TODO v6: Remove handling of 'inherit' variant from the theme as it is already handled in Material UI's Typography component. Also, remember to remove the associated types.
    inherit: {
      fontFamily: "inherit",
      fontWeight: "inherit",
      fontSize: "inherit",
      lineHeight: "inherit",
      letterSpacing: "inherit"
    }
  };
  return ue(B({
    htmlFontSize: l,
    pxToRem: g,
    fontFamily: n,
    fontSize: o,
    fontWeightLight: i,
    fontWeightRegular: a,
    fontWeightMedium: s,
    fontWeightBold: u
  }, f), p, {
    clone: !1
    // No need to clone deep
  });
}
const fa = 0.2, la = 0.14, da = 0.12;
function q(...e) {
  return [`${e[0]}px ${e[1]}px ${e[2]}px ${e[3]}px rgba(0,0,0,${fa})`, `${e[4]}px ${e[5]}px ${e[6]}px ${e[7]}px rgba(0,0,0,${la})`, `${e[8]}px ${e[9]}px ${e[10]}px ${e[11]}px rgba(0,0,0,${da})`].join(",");
}
const pa = ["none", q(0, 2, 1, -1, 0, 1, 1, 0, 0, 1, 3, 0), q(0, 3, 1, -2, 0, 2, 2, 0, 0, 1, 5, 0), q(0, 3, 3, -2, 0, 3, 4, 0, 0, 1, 8, 0), q(0, 2, 4, -1, 0, 4, 5, 0, 0, 1, 10, 0), q(0, 3, 5, -1, 0, 5, 8, 0, 0, 1, 14, 0), q(0, 3, 5, -1, 0, 6, 10, 0, 0, 1, 18, 0), q(0, 4, 5, -2, 0, 7, 10, 1, 0, 2, 16, 1), q(0, 5, 5, -3, 0, 8, 10, 1, 0, 3, 14, 2), q(0, 5, 6, -3, 0, 9, 12, 1, 0, 3, 16, 2), q(0, 6, 6, -3, 0, 10, 14, 1, 0, 4, 18, 3), q(0, 6, 7, -4, 0, 11, 15, 1, 0, 4, 20, 3), q(0, 7, 8, -4, 0, 12, 17, 2, 0, 5, 22, 4), q(0, 7, 8, -4, 0, 13, 19, 2, 0, 5, 24, 4), q(0, 7, 9, -4, 0, 14, 21, 2, 0, 5, 26, 4), q(0, 8, 9, -5, 0, 15, 22, 2, 0, 6, 28, 5), q(0, 8, 10, -5, 0, 16, 24, 2, 0, 6, 30, 5), q(0, 8, 11, -5, 0, 17, 26, 2, 0, 6, 32, 5), q(0, 9, 11, -5, 0, 18, 28, 2, 0, 7, 34, 6), q(0, 9, 12, -6, 0, 19, 29, 2, 0, 7, 36, 6), q(0, 10, 13, -6, 0, 20, 31, 3, 0, 8, 38, 7), q(0, 10, 13, -6, 0, 21, 33, 3, 0, 8, 40, 7), q(0, 10, 14, -6, 0, 22, 35, 3, 0, 8, 42, 7), q(0, 11, 14, -7, 0, 23, 36, 3, 0, 9, 44, 8), q(0, 11, 15, -7, 0, 24, 38, 3, 0, 9, 46, 8)], ma = pa, ha = ["duration", "easing", "delay"], ya = {
  // This is the most common easing curve.
  easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
  // Objects enter the screen at full velocity from off-screen and
  // slowly decelerate to a resting point.
  easeOut: "cubic-bezier(0.0, 0, 0.2, 1)",
  // Objects leave the screen at full velocity. They do not decelerate when off-screen.
  easeIn: "cubic-bezier(0.4, 0, 1, 1)",
  // The sharp curve is used by objects that may return to the screen at any time.
  sharp: "cubic-bezier(0.4, 0, 0.6, 1)"
}, ga = {
  shortest: 150,
  shorter: 200,
  short: 250,
  // most basic recommended timing
  standard: 300,
  // this is to be used in complex animations
  complex: 375,
  // recommended when something is entering screen
  enteringScreen: 225,
  // recommended when something is leaving screen
  leavingScreen: 195
};
function Nt(e) {
  return `${Math.round(e)}ms`;
}
function va(e) {
  if (!e)
    return 0;
  const r = e / 36;
  return Math.round((4 + 15 * r ** 0.25 + r / 5) * 10);
}
function ba(e) {
  const r = B({}, ya, e.easing), t = B({}, ga, e.duration);
  return B({
    getAutoHeightDuration: va,
    create: (o = ["all"], i = {}) => {
      const {
        duration: a = t.standard,
        easing: s = r.easeInOut,
        delay: u = 0
      } = i, l = Ee(i, ha);
      if (process.env.NODE_ENV !== "production") {
        const d = (p) => typeof p == "string", h = (p) => !isNaN(parseFloat(p));
        !d(o) && !Array.isArray(o) && console.error('MUI: Argument "props" must be a string or Array.'), !h(a) && !d(a) && console.error(`MUI: Argument "duration" must be a number or a string but found ${a}.`), d(s) || console.error('MUI: Argument "easing" must be a string.'), !h(u) && !d(u) && console.error('MUI: Argument "delay" must be a number or a string.'), typeof i != "object" && console.error(["MUI: Secong argument of transition.create must be an object.", "Arguments should be either `create('prop1', options)` or `create(['prop1', 'prop2'], options)`"].join(`
`)), Object.keys(l).length !== 0 && console.error(`MUI: Unrecognized argument(s) [${Object.keys(l).join(",")}].`);
      }
      return (Array.isArray(o) ? o : [o]).map((d) => `${d} ${typeof a == "string" ? a : Nt(a)} ${s} ${typeof u == "string" ? u : Nt(u)}`).join(",");
    }
  }, e, {
    easing: r,
    duration: t
  });
}
const Ea = {
  mobileStepper: 1e3,
  fab: 1050,
  speedDial: 1050,
  appBar: 1100,
  drawer: 1200,
  modal: 1300,
  snackbar: 1400,
  tooltip: 1500
}, Sa = Ea, xa = ["breakpoints", "mixins", "spacing", "palette", "transitions", "typography", "shape"];
function Oa(e = {}, ...r) {
  const {
    mixins: t = {},
    palette: n = {},
    transitions: o = {},
    typography: i = {}
  } = e, a = Ee(e, xa);
  if (e.vars)
    throw new Error(process.env.NODE_ENV !== "production" ? "MUI: `vars` is a private field used for CSS variables support.\nPlease use another name." : Ie(18));
  const s = aa(n), u = on(e);
  let l = ue(u, {
    mixins: Yi(u.breakpoints, t),
    palette: s,
    // Don't use [...shadows] until you've verified its transpiled code is not invoking the iterator protocol.
    shadows: ma.slice(),
    typography: ua(s, i),
    transitions: ba(o),
    zIndex: B({}, Sa)
  });
  if (l = ue(l, a), l = r.reduce((d, h) => ue(d, h), l), process.env.NODE_ENV !== "production") {
    const d = ["active", "checked", "completed", "disabled", "error", "expanded", "focused", "focusVisible", "required", "selected"], h = (p, b) => {
      let g;
      for (g in p) {
        const c = p[g];
        if (d.indexOf(g) !== -1 && Object.keys(c).length > 0) {
          if (process.env.NODE_ENV !== "production") {
            const f = Rn("", g);
            console.error([`MUI: The \`${b}\` component increases the CSS specificity of the \`${g}\` internal state.`, "You can not override it like this: ", JSON.stringify(p, null, 2), "", `Instead, you need to use the '&.${f}' syntax:`, JSON.stringify({
              root: {
                [`&.${f}`]: c
              }
            }, null, 2), "", "https://mui.com/r/state-classes-guide"].join(`
`));
          }
          p[g] = {};
        }
      }
    };
    Object.keys(l.components).forEach((p) => {
      const b = l.components[p].styleOverrides;
      b && p.indexOf("Mui") === 0 && h(b, p);
    });
  }
  return l.unstable_sxConfig = B({}, Wr, a == null ? void 0 : a.unstable_sxConfig), l.unstable_sx = function(h) {
    return Br({
      sx: h,
      theme: this
    });
  }, l;
}
const wa = Oa(), _a = wa, Ta = (e) => Ve(e) && e !== "classes", Ia = Ve, Ca = ji({
  themeId: zi,
  defaultTheme: _a,
  rootShouldForwardProp: Ta
}), Ma = Ca;
export {
  qt as A,
  Jt as B,
  Tn as C,
  Lr as D,
  Bt as E,
  $a as F,
  ga as G,
  it as H,
  un as I,
  Ie as J,
  Ia as K,
  je as P,
  zi as T,
  Ee as _,
  B as a,
  Wr as b,
  No as c,
  _a as d,
  Br as e,
  Oa as f,
  Rn as g,
  Ae as h,
  be as i,
  ka as j,
  Ui as k,
  Vi as l,
  Vr as m,
  on as n,
  ji as o,
  ve as p,
  Na as q,
  Ta as r,
  Ma as s,
  rn as t,
  ue as u,
  Aa as v,
  Ge as w,
  Ar as x,
  Zt as y,
  Pa as z
};
