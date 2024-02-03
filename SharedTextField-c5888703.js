import { jsx as qe, jsxs as Za } from "react/jsx-runtime";
import { P as c, a as K, I as KO, _ as qt, g as Kr, s as kt, d as XO, T as ZO, h as Oi, J as C1, r as bs, u as lE, H as uE, K as JO } from "./styled-c6437ab8.js";
import * as X from "react";
import bf from "react";
import { u as eN, c as cr } from "./clsx-f0826a09.js";
import { g as Xr, u as ba, c as Zr } from "./useThemeProps-7889d54e.js";
import { a as Zp, F as T1, u as e1 } from "./useFormControl-a3d8b2b6.js";
import { o as Xa, a as Es, c as t1, d as x1, f as Jp, i as Z0, u as R1, M as tN } from "./FormHelperText-5a47fd9c.js";
import { u as sE } from "./useTheme-f100ae81.js";
import { c as cE, _ as nN, T as w1, a as Ja, u as n1, b as Cf, s as r1, e as D1, r as iu } from "./TransitionGroupContext-fe4c547b.js";
import { P as rN, i as aN } from "./Paper-79c19457.js";
import { c as iN } from "./createSvgIcon-4c228bdf.js";
import { G as oN } from "./emotion-react.browser.esm-3aa427f2.js";
function lN(v) {
  const {
    prototype: m = {}
  } = v;
  return !!m.isReactComponent;
}
function k1(v, m, S, x, w) {
  const R = v[m], g = w || m;
  if (R == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for Emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let A;
  const z = R.type;
  return typeof z == "function" && !lN(z) && (A = "Did you accidentally use a plain function component for an element instead?"), A !== void 0 ? new Error(`Invalid ${x} \`${g}\` supplied to \`${S}\`. Expected an element that can hold a ref. ${A} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const O1 = cE(c.element, k1);
O1.isRequired = cE(c.element.isRequired, k1);
const vy = O1, uN = "exact-prop: ​";
function N1(v) {
  return process.env.NODE_ENV === "production" ? v : K({}, v, {
    [uN]: (m) => {
      const S = Object.keys(m).filter((x) => !v.hasOwnProperty(x));
      return S.length > 0 ? new Error(`The following props are not supported: ${S.map((x) => `\`${x}\``).join(", ")}. Please remove them.`) : null;
    }
  });
}
function Xp(v, m, S, x, w) {
  if (process.env.NODE_ENV === "production")
    return null;
  const R = v[m], g = w || m;
  return R == null ? null : R && R.nodeType !== 1 ? new Error(`Invalid ${x} \`${g}\` supplied to \`${S}\`. Expected an HTMLElement.`) : null;
}
function M1(v) {
  const m = v.documentElement.clientWidth;
  return Math.abs(window.innerWidth - m);
}
function sN(v) {
  return v == null || Object.keys(v).length === 0;
}
function _1(v) {
  const {
    styles: m,
    defaultTheme: S = {}
  } = v;
  return /* @__PURE__ */ qe(oN, {
    styles: typeof m == "function" ? (w) => m(sN(w) ? S : w) : m
  });
}
process.env.NODE_ENV !== "production" && (_1.propTypes = {
  defaultTheme: c.object,
  styles: c.oneOfType([c.array, c.string, c.object, c.func])
});
function L1({
  styles: v,
  themeId: m,
  defaultTheme: S = {}
}) {
  const x = eN(S), w = typeof v == "function" ? v(m && x[m] || x) : v;
  return /* @__PURE__ */ qe(_1, {
    styles: w
  });
}
process.env.NODE_ENV !== "production" && (L1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  defaultTheme: c.object,
  /**
   * @ignore
   */
  styles: c.oneOfType([c.array, c.func, c.number, c.object, c.string, c.bool]),
  /**
   * @ignore
   */
  themeId: c.string
});
var aE = { exports: {} }, Sa = {}, iy = { exports: {} }, J0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var a1;
function cN() {
  return a1 || (a1 = 1, function(v) {
    function m(W, fe) {
      var ue = W.length;
      W.push(fe);
      e:
        for (; 0 < ue; ) {
          var ut = ue - 1 >>> 1, Ze = W[ut];
          if (0 < w(Ze, fe))
            W[ut] = fe, W[ue] = Ze, ue = ut;
          else
            break e;
        }
    }
    function S(W) {
      return W.length === 0 ? null : W[0];
    }
    function x(W) {
      if (W.length === 0)
        return null;
      var fe = W[0], ue = W.pop();
      if (ue !== fe) {
        W[0] = ue;
        e:
          for (var ut = 0, Ze = W.length, gt = Ze >>> 1; ut < gt; ) {
            var st = 2 * (ut + 1) - 1, _t = W[st], yt = st + 1, dn = W[yt];
            if (0 > w(_t, ue))
              yt < Ze && 0 > w(dn, _t) ? (W[ut] = dn, W[yt] = ue, ut = yt) : (W[ut] = _t, W[st] = ue, ut = st);
            else if (yt < Ze && 0 > w(dn, ue))
              W[ut] = dn, W[yt] = ue, ut = yt;
            else
              break e;
          }
      }
      return fe;
    }
    function w(W, fe) {
      var ue = W.sortIndex - fe.sortIndex;
      return ue !== 0 ? ue : W.id - fe.id;
    }
    if (typeof performance == "object" && typeof performance.now == "function") {
      var R = performance;
      v.unstable_now = function() {
        return R.now();
      };
    } else {
      var g = Date, A = g.now();
      v.unstable_now = function() {
        return g.now() - A;
      };
    }
    var z = [], F = [], ne = 1, V = null, q = 3, I = !1, ee = !1, pe = !1, de = typeof setTimeout == "function" ? setTimeout : null, me = typeof clearTimeout == "function" ? clearTimeout : null, Se = typeof setImmediate < "u" ? setImmediate : null;
    typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
    function B(W) {
      for (var fe = S(F); fe !== null; ) {
        if (fe.callback === null)
          x(F);
        else if (fe.startTime <= W)
          x(F), fe.sortIndex = fe.expirationTime, m(z, fe);
        else
          break;
        fe = S(F);
      }
    }
    function $(W) {
      if (pe = !1, B(W), !ee)
        if (S(z) !== null)
          ee = !0, be(te);
        else {
          var fe = S(F);
          fe !== null && Ae($, fe.startTime - W);
        }
    }
    function te(W, fe) {
      ee = !1, pe && (pe = !1, me(ke), ke = -1), I = !0;
      var ue = q;
      try {
        for (B(fe), V = S(z); V !== null && (!(V.expirationTime > fe) || W && !Ne()); ) {
          var ut = V.callback;
          if (typeof ut == "function") {
            V.callback = null, q = V.priorityLevel;
            var Ze = ut(V.expirationTime <= fe);
            fe = v.unstable_now(), typeof Ze == "function" ? V.callback = Ze : V === S(z) && x(z), B(fe);
          } else
            x(z);
          V = S(z);
        }
        if (V !== null)
          var gt = !0;
        else {
          var st = S(F);
          st !== null && Ae($, st.startTime - fe), gt = !1;
        }
        return gt;
      } finally {
        V = null, q = ue, I = !1;
      }
    }
    var le = !1, J = null, ke = -1, Ve = 5, Ue = -1;
    function Ne() {
      return !(v.unstable_now() - Ue < Ve);
    }
    function Be() {
      if (J !== null) {
        var W = v.unstable_now();
        Ue = W;
        var fe = !0;
        try {
          fe = J(!0, W);
        } finally {
          fe ? se() : (le = !1, J = null);
        }
      } else
        le = !1;
    }
    var se;
    if (typeof Se == "function")
      se = function() {
        Se(Be);
      };
    else if (typeof MessageChannel < "u") {
      var ve = new MessageChannel(), Ce = ve.port2;
      ve.port1.onmessage = Be, se = function() {
        Ce.postMessage(null);
      };
    } else
      se = function() {
        de(Be, 0);
      };
    function be(W) {
      J = W, le || (le = !0, se());
    }
    function Ae(W, fe) {
      ke = de(function() {
        W(v.unstable_now());
      }, fe);
    }
    v.unstable_IdlePriority = 5, v.unstable_ImmediatePriority = 1, v.unstable_LowPriority = 4, v.unstable_NormalPriority = 3, v.unstable_Profiling = null, v.unstable_UserBlockingPriority = 2, v.unstable_cancelCallback = function(W) {
      W.callback = null;
    }, v.unstable_continueExecution = function() {
      ee || I || (ee = !0, be(te));
    }, v.unstable_forceFrameRate = function(W) {
      0 > W || 125 < W ? console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported") : Ve = 0 < W ? Math.floor(1e3 / W) : 5;
    }, v.unstable_getCurrentPriorityLevel = function() {
      return q;
    }, v.unstable_getFirstCallbackNode = function() {
      return S(z);
    }, v.unstable_next = function(W) {
      switch (q) {
        case 1:
        case 2:
        case 3:
          var fe = 3;
          break;
        default:
          fe = q;
      }
      var ue = q;
      q = fe;
      try {
        return W();
      } finally {
        q = ue;
      }
    }, v.unstable_pauseExecution = function() {
    }, v.unstable_requestPaint = function() {
    }, v.unstable_runWithPriority = function(W, fe) {
      switch (W) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          W = 3;
      }
      var ue = q;
      q = W;
      try {
        return fe();
      } finally {
        q = ue;
      }
    }, v.unstable_scheduleCallback = function(W, fe, ue) {
      var ut = v.unstable_now();
      switch (typeof ue == "object" && ue !== null ? (ue = ue.delay, ue = typeof ue == "number" && 0 < ue ? ut + ue : ut) : ue = ut, W) {
        case 1:
          var Ze = -1;
          break;
        case 2:
          Ze = 250;
          break;
        case 5:
          Ze = 1073741823;
          break;
        case 4:
          Ze = 1e4;
          break;
        default:
          Ze = 5e3;
      }
      return Ze = ue + Ze, W = { id: ne++, callback: fe, priorityLevel: W, startTime: ue, expirationTime: Ze, sortIndex: -1 }, ue > ut ? (W.sortIndex = ue, m(F, W), S(z) === null && W === S(F) && (pe ? (me(ke), ke = -1) : pe = !0, Ae($, ue - ut))) : (W.sortIndex = Ze, m(z, W), ee || I || (ee = !0, be(te))), W;
    }, v.unstable_shouldYield = Ne, v.unstable_wrapCallback = function(W) {
      var fe = q;
      return function() {
        var ue = q;
        q = fe;
        try {
          return W.apply(this, arguments);
        } finally {
          q = ue;
        }
      };
    };
  }(J0)), J0;
}
var eE = {};
/**
 * @license React
 * scheduler.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var i1;
function fN() {
  return i1 || (i1 = 1, function(v) {
    process.env.NODE_ENV !== "production" && function() {
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
      var m = !1, S = !1, x = 5;
      function w(Ee, He) {
        var ft = Ee.length;
        Ee.push(He), A(Ee, He, ft);
      }
      function R(Ee) {
        return Ee.length === 0 ? null : Ee[0];
      }
      function g(Ee) {
        if (Ee.length === 0)
          return null;
        var He = Ee[0], ft = Ee.pop();
        return ft !== He && (Ee[0] = ft, z(Ee, ft, 0)), He;
      }
      function A(Ee, He, ft) {
        for (var he = ft; he > 0; ) {
          var $e = he - 1 >>> 1, Ct = Ee[$e];
          if (F(Ct, He) > 0)
            Ee[$e] = He, Ee[he] = Ct, he = $e;
          else
            return;
        }
      }
      function z(Ee, He, ft) {
        for (var he = ft, $e = Ee.length, Ct = $e >>> 1; he < Ct; ) {
          var Vt = (he + 1) * 2 - 1, fr = Ee[Vt], on = Vt + 1, Ua = Ee[on];
          if (F(fr, He) < 0)
            on < $e && F(Ua, fr) < 0 ? (Ee[he] = Ua, Ee[on] = He, he = on) : (Ee[he] = fr, Ee[Vt] = He, he = Vt);
          else if (on < $e && F(Ua, He) < 0)
            Ee[he] = Ua, Ee[on] = He, he = on;
          else
            return;
        }
      }
      function F(Ee, He) {
        var ft = Ee.sortIndex - He.sortIndex;
        return ft !== 0 ? ft : Ee.id - He.id;
      }
      var ne = 1, V = 2, q = 3, I = 4, ee = 5;
      function pe(Ee, He) {
      }
      var de = typeof performance == "object" && typeof performance.now == "function";
      if (de) {
        var me = performance;
        v.unstable_now = function() {
          return me.now();
        };
      } else {
        var Se = Date, B = Se.now();
        v.unstable_now = function() {
          return Se.now() - B;
        };
      }
      var $ = 1073741823, te = -1, le = 250, J = 5e3, ke = 1e4, Ve = $, Ue = [], Ne = [], Be = 1, se = null, ve = q, Ce = !1, be = !1, Ae = !1, W = typeof setTimeout == "function" ? setTimeout : null, fe = typeof clearTimeout == "function" ? clearTimeout : null, ue = typeof setImmediate < "u" ? setImmediate : null;
      typeof navigator < "u" && navigator.scheduling !== void 0 && navigator.scheduling.isInputPending !== void 0 && navigator.scheduling.isInputPending.bind(navigator.scheduling);
      function ut(Ee) {
        for (var He = R(Ne); He !== null; ) {
          if (He.callback === null)
            g(Ne);
          else if (He.startTime <= Ee)
            g(Ne), He.sortIndex = He.expirationTime, w(Ue, He);
          else
            return;
          He = R(Ne);
        }
      }
      function Ze(Ee) {
        if (Ae = !1, ut(Ee), !be)
          if (R(Ue) !== null)
            be = !0, Tr(gt);
          else {
            var He = R(Ne);
            He !== null && yn(Ze, He.startTime - Ee);
          }
      }
      function gt(Ee, He) {
        be = !1, Ae && (Ae = !1, ct()), Ce = !0;
        var ft = ve;
        try {
          var he;
          if (!S)
            return st(Ee, He);
        } finally {
          se = null, ve = ft, Ce = !1;
        }
      }
      function st(Ee, He) {
        var ft = He;
        for (ut(ft), se = R(Ue); se !== null && !m && !(se.expirationTime > ft && (!Ee || Jn())); ) {
          var he = se.callback;
          if (typeof he == "function") {
            se.callback = null, ve = se.priorityLevel;
            var $e = se.expirationTime <= ft, Ct = he($e);
            ft = v.unstable_now(), typeof Ct == "function" ? se.callback = Ct : se === R(Ue) && g(Ue), ut(ft);
          } else
            g(Ue);
          se = R(Ue);
        }
        if (se !== null)
          return !0;
        var Vt = R(Ne);
        return Vt !== null && yn(Ze, Vt.startTime - ft), !1;
      }
      function _t(Ee, He) {
        switch (Ee) {
          case ne:
          case V:
          case q:
          case I:
          case ee:
            break;
          default:
            Ee = q;
        }
        var ft = ve;
        ve = Ee;
        try {
          return He();
        } finally {
          ve = ft;
        }
      }
      function yt(Ee) {
        var He;
        switch (ve) {
          case ne:
          case V:
          case q:
            He = q;
            break;
          default:
            He = ve;
            break;
        }
        var ft = ve;
        ve = He;
        try {
          return Ee();
        } finally {
          ve = ft;
        }
      }
      function dn(Ee) {
        var He = ve;
        return function() {
          var ft = ve;
          ve = He;
          try {
            return Ee.apply(this, arguments);
          } finally {
            ve = ft;
          }
        };
      }
      function Bt(Ee, He, ft) {
        var he = v.unstable_now(), $e;
        if (typeof ft == "object" && ft !== null) {
          var Ct = ft.delay;
          typeof Ct == "number" && Ct > 0 ? $e = he + Ct : $e = he;
        } else
          $e = he;
        var Vt;
        switch (Ee) {
          case ne:
            Vt = te;
            break;
          case V:
            Vt = le;
            break;
          case ee:
            Vt = Ve;
            break;
          case I:
            Vt = ke;
            break;
          case q:
          default:
            Vt = J;
            break;
        }
        var fr = $e + Vt, on = {
          id: Be++,
          callback: He,
          priorityLevel: Ee,
          startTime: $e,
          expirationTime: fr,
          sortIndex: -1
        };
        return $e > he ? (on.sortIndex = $e, w(Ne, on), R(Ue) === null && on === R(Ne) && (Ae ? ct() : Ae = !0, yn(Ze, $e - he))) : (on.sortIndex = fr, w(Ue, on), !be && !Ce && (be = !0, Tr(gt))), on;
      }
      function an() {
      }
      function Mn() {
        !be && !Ce && (be = !0, Tr(gt));
      }
      function at() {
        return R(Ue);
      }
      function wt(Ee) {
        Ee.callback = null;
      }
      function Ge() {
        return ve;
      }
      var tt = !1, pt = null, Jt = -1, Gt = x, mn = -1;
      function Jn() {
        var Ee = v.unstable_now() - mn;
        return !(Ee < Gt);
      }
      function er() {
      }
      function Lt(Ee) {
        if (Ee < 0 || Ee > 125) {
          console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported");
          return;
        }
        Ee > 0 ? Gt = Math.floor(1e3 / Ee) : Gt = x;
      }
      var _n = function() {
        if (pt !== null) {
          var Ee = v.unstable_now();
          mn = Ee;
          var He = !0, ft = !0;
          try {
            ft = pt(He, Ee);
          } finally {
            ft ? Kt() : (tt = !1, pt = null);
          }
        } else
          tt = !1;
      }, Kt;
      if (typeof ue == "function")
        Kt = function() {
          ue(_n);
        };
      else if (typeof MessageChannel < "u") {
        var zt = new MessageChannel(), Vn = zt.port2;
        zt.port1.onmessage = _n, Kt = function() {
          Vn.postMessage(null);
        };
      } else
        Kt = function() {
          W(_n, 0);
        };
      function Tr(Ee) {
        pt = Ee, tt || (tt = !0, Kt());
      }
      function yn(Ee, He) {
        Jt = W(function() {
          Ee(v.unstable_now());
        }, He);
      }
      function ct() {
        fe(Jt), Jt = -1;
      }
      var Ca = er, tr = null;
      v.unstable_IdlePriority = ee, v.unstable_ImmediatePriority = ne, v.unstable_LowPriority = I, v.unstable_NormalPriority = q, v.unstable_Profiling = tr, v.unstable_UserBlockingPriority = V, v.unstable_cancelCallback = wt, v.unstable_continueExecution = Mn, v.unstable_forceFrameRate = Lt, v.unstable_getCurrentPriorityLevel = Ge, v.unstable_getFirstCallbackNode = at, v.unstable_next = yt, v.unstable_pauseExecution = an, v.unstable_requestPaint = Ca, v.unstable_runWithPriority = _t, v.unstable_scheduleCallback = Bt, v.unstable_shouldYield = Jn, v.unstable_wrapCallback = dn, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
    }();
  }(eE)), eE;
}
var o1;
function z1() {
  return o1 || (o1 = 1, process.env.NODE_ENV === "production" ? iy.exports = cN() : iy.exports = fN()), iy.exports;
}
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var l1;
function dN() {
  if (l1)
    return Sa;
  l1 = 1;
  var v = bf, m = z1();
  function S(n) {
    for (var r = "https://reactjs.org/docs/error-decoder.html?invariant=" + n, o = 1; o < arguments.length; o++)
      r += "&args[]=" + encodeURIComponent(arguments[o]);
    return "Minified React error #" + n + "; visit " + r + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  var x = /* @__PURE__ */ new Set(), w = {};
  function R(n, r) {
    g(n, r), g(n + "Capture", r);
  }
  function g(n, r) {
    for (w[n] = r, n = 0; n < r.length; n++)
      x.add(r[n]);
  }
  var A = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), z = Object.prototype.hasOwnProperty, F = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/, ne = {}, V = {};
  function q(n) {
    return z.call(V, n) ? !0 : z.call(ne, n) ? !1 : F.test(n) ? V[n] = !0 : (ne[n] = !0, !1);
  }
  function I(n, r, o, u) {
    if (o !== null && o.type === 0)
      return !1;
    switch (typeof r) {
      case "function":
      case "symbol":
        return !0;
      case "boolean":
        return u ? !1 : o !== null ? !o.acceptsBooleans : (n = n.toLowerCase().slice(0, 5), n !== "data-" && n !== "aria-");
      default:
        return !1;
    }
  }
  function ee(n, r, o, u) {
    if (r === null || typeof r > "u" || I(n, r, o, u))
      return !0;
    if (u)
      return !1;
    if (o !== null)
      switch (o.type) {
        case 3:
          return !r;
        case 4:
          return r === !1;
        case 5:
          return isNaN(r);
        case 6:
          return isNaN(r) || 1 > r;
      }
    return !1;
  }
  function pe(n, r, o, u, f, p, E) {
    this.acceptsBooleans = r === 2 || r === 3 || r === 4, this.attributeName = u, this.attributeNamespace = f, this.mustUseProperty = o, this.propertyName = n, this.type = r, this.sanitizeURL = p, this.removeEmptyString = E;
  }
  var de = {};
  "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n) {
    de[n] = new pe(n, 0, !1, n, null, !1, !1);
  }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(n) {
    var r = n[0];
    de[r] = new pe(r, 1, !1, n[1], null, !1, !1);
  }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(n) {
    de[n] = new pe(n, 2, !1, n.toLowerCase(), null, !1, !1);
  }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(n) {
    de[n] = new pe(n, 2, !1, n, null, !1, !1);
  }), "allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n) {
    de[n] = new pe(n, 3, !1, n.toLowerCase(), null, !1, !1);
  }), ["checked", "multiple", "muted", "selected"].forEach(function(n) {
    de[n] = new pe(n, 3, !0, n, null, !1, !1);
  }), ["capture", "download"].forEach(function(n) {
    de[n] = new pe(n, 4, !1, n, null, !1, !1);
  }), ["cols", "rows", "size", "span"].forEach(function(n) {
    de[n] = new pe(n, 6, !1, n, null, !1, !1);
  }), ["rowSpan", "start"].forEach(function(n) {
    de[n] = new pe(n, 5, !1, n.toLowerCase(), null, !1, !1);
  });
  var me = /[\-:]([a-z])/g;
  function Se(n) {
    return n[1].toUpperCase();
  }
  "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n) {
    var r = n.replace(
      me,
      Se
    );
    de[r] = new pe(r, 1, !1, n, null, !1, !1);
  }), "xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n) {
    var r = n.replace(me, Se);
    de[r] = new pe(r, 1, !1, n, "http://www.w3.org/1999/xlink", !1, !1);
  }), ["xml:base", "xml:lang", "xml:space"].forEach(function(n) {
    var r = n.replace(me, Se);
    de[r] = new pe(r, 1, !1, n, "http://www.w3.org/XML/1998/namespace", !1, !1);
  }), ["tabIndex", "crossOrigin"].forEach(function(n) {
    de[n] = new pe(n, 1, !1, n.toLowerCase(), null, !1, !1);
  }), de.xlinkHref = new pe("xlinkHref", 1, !1, "xlink:href", "http://www.w3.org/1999/xlink", !0, !1), ["src", "href", "action", "formAction"].forEach(function(n) {
    de[n] = new pe(n, 1, !1, n.toLowerCase(), null, !0, !0);
  });
  function B(n, r, o, u) {
    var f = de.hasOwnProperty(r) ? de[r] : null;
    (f !== null ? f.type !== 0 : u || !(2 < r.length) || r[0] !== "o" && r[0] !== "O" || r[1] !== "n" && r[1] !== "N") && (ee(r, o, f, u) && (o = null), u || f === null ? q(r) && (o === null ? n.removeAttribute(r) : n.setAttribute(r, "" + o)) : f.mustUseProperty ? n[f.propertyName] = o === null ? f.type === 3 ? !1 : "" : o : (r = f.attributeName, u = f.attributeNamespace, o === null ? n.removeAttribute(r) : (f = f.type, o = f === 3 || f === 4 && o === !0 ? "" : "" + o, u ? n.setAttributeNS(u, r, o) : n.setAttribute(r, o))));
  }
  var $ = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, te = Symbol.for("react.element"), le = Symbol.for("react.portal"), J = Symbol.for("react.fragment"), ke = Symbol.for("react.strict_mode"), Ve = Symbol.for("react.profiler"), Ue = Symbol.for("react.provider"), Ne = Symbol.for("react.context"), Be = Symbol.for("react.forward_ref"), se = Symbol.for("react.suspense"), ve = Symbol.for("react.suspense_list"), Ce = Symbol.for("react.memo"), be = Symbol.for("react.lazy"), Ae = Symbol.for("react.offscreen"), W = Symbol.iterator;
  function fe(n) {
    return n === null || typeof n != "object" ? null : (n = W && n[W] || n["@@iterator"], typeof n == "function" ? n : null);
  }
  var ue = Object.assign, ut;
  function Ze(n) {
    if (ut === void 0)
      try {
        throw Error();
      } catch (o) {
        var r = o.stack.trim().match(/\n( *(at )?)/);
        ut = r && r[1] || "";
      }
    return `
` + ut + n;
  }
  var gt = !1;
  function st(n, r) {
    if (!n || gt)
      return "";
    gt = !0;
    var o = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      if (r)
        if (r = function() {
          throw Error();
        }, Object.defineProperty(r.prototype, "props", { set: function() {
          throw Error();
        } }), typeof Reflect == "object" && Reflect.construct) {
          try {
            Reflect.construct(r, []);
          } catch (j) {
            var u = j;
          }
          Reflect.construct(n, [], r);
        } else {
          try {
            r.call();
          } catch (j) {
            u = j;
          }
          n.call(r.prototype);
        }
      else {
        try {
          throw Error();
        } catch (j) {
          u = j;
        }
        n();
      }
    } catch (j) {
      if (j && u && typeof j.stack == "string") {
        for (var f = j.stack.split(`
`), p = u.stack.split(`
`), E = f.length - 1, T = p.length - 1; 1 <= E && 0 <= T && f[E] !== p[T]; )
          T--;
        for (; 1 <= E && 0 <= T; E--, T--)
          if (f[E] !== p[T]) {
            if (E !== 1 || T !== 1)
              do
                if (E--, T--, 0 > T || f[E] !== p[T]) {
                  var D = `
` + f[E].replace(" at new ", " at ");
                  return n.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", n.displayName)), D;
                }
              while (1 <= E && 0 <= T);
            break;
          }
      }
    } finally {
      gt = !1, Error.prepareStackTrace = o;
    }
    return (n = n ? n.displayName || n.name : "") ? Ze(n) : "";
  }
  function _t(n) {
    switch (n.tag) {
      case 5:
        return Ze(n.type);
      case 16:
        return Ze("Lazy");
      case 13:
        return Ze("Suspense");
      case 19:
        return Ze("SuspenseList");
      case 0:
      case 2:
      case 15:
        return n = st(n.type, !1), n;
      case 11:
        return n = st(n.type.render, !1), n;
      case 1:
        return n = st(n.type, !0), n;
      default:
        return "";
    }
  }
  function yt(n) {
    if (n == null)
      return null;
    if (typeof n == "function")
      return n.displayName || n.name || null;
    if (typeof n == "string")
      return n;
    switch (n) {
      case J:
        return "Fragment";
      case le:
        return "Portal";
      case Ve:
        return "Profiler";
      case ke:
        return "StrictMode";
      case se:
        return "Suspense";
      case ve:
        return "SuspenseList";
    }
    if (typeof n == "object")
      switch (n.$$typeof) {
        case Ne:
          return (n.displayName || "Context") + ".Consumer";
        case Ue:
          return (n._context.displayName || "Context") + ".Provider";
        case Be:
          var r = n.render;
          return n = n.displayName, n || (n = r.displayName || r.name || "", n = n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef"), n;
        case Ce:
          return r = n.displayName || null, r !== null ? r : yt(n.type) || "Memo";
        case be:
          r = n._payload, n = n._init;
          try {
            return yt(n(r));
          } catch {
          }
      }
    return null;
  }
  function dn(n) {
    var r = n.type;
    switch (n.tag) {
      case 24:
        return "Cache";
      case 9:
        return (r.displayName || "Context") + ".Consumer";
      case 10:
        return (r._context.displayName || "Context") + ".Provider";
      case 18:
        return "DehydratedFragment";
      case 11:
        return n = r.render, n = n.displayName || n.name || "", r.displayName || (n !== "" ? "ForwardRef(" + n + ")" : "ForwardRef");
      case 7:
        return "Fragment";
      case 5:
        return r;
      case 4:
        return "Portal";
      case 3:
        return "Root";
      case 6:
        return "Text";
      case 16:
        return yt(r);
      case 8:
        return r === ke ? "StrictMode" : "Mode";
      case 22:
        return "Offscreen";
      case 12:
        return "Profiler";
      case 21:
        return "Scope";
      case 13:
        return "Suspense";
      case 19:
        return "SuspenseList";
      case 25:
        return "TracingMarker";
      case 1:
      case 0:
      case 17:
      case 2:
      case 14:
      case 15:
        if (typeof r == "function")
          return r.displayName || r.name || null;
        if (typeof r == "string")
          return r;
    }
    return null;
  }
  function Bt(n) {
    switch (typeof n) {
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return n;
      case "object":
        return n;
      default:
        return "";
    }
  }
  function an(n) {
    var r = n.type;
    return (n = n.nodeName) && n.toLowerCase() === "input" && (r === "checkbox" || r === "radio");
  }
  function Mn(n) {
    var r = an(n) ? "checked" : "value", o = Object.getOwnPropertyDescriptor(n.constructor.prototype, r), u = "" + n[r];
    if (!n.hasOwnProperty(r) && typeof o < "u" && typeof o.get == "function" && typeof o.set == "function") {
      var f = o.get, p = o.set;
      return Object.defineProperty(n, r, { configurable: !0, get: function() {
        return f.call(this);
      }, set: function(E) {
        u = "" + E, p.call(this, E);
      } }), Object.defineProperty(n, r, { enumerable: o.enumerable }), { getValue: function() {
        return u;
      }, setValue: function(E) {
        u = "" + E;
      }, stopTracking: function() {
        n._valueTracker = null, delete n[r];
      } };
    }
  }
  function at(n) {
    n._valueTracker || (n._valueTracker = Mn(n));
  }
  function wt(n) {
    if (!n)
      return !1;
    var r = n._valueTracker;
    if (!r)
      return !0;
    var o = r.getValue(), u = "";
    return n && (u = an(n) ? n.checked ? "true" : "false" : n.value), n = u, n !== o ? (r.setValue(n), !0) : !1;
  }
  function Ge(n) {
    if (n = n || (typeof document < "u" ? document : void 0), typeof n > "u")
      return null;
    try {
      return n.activeElement || n.body;
    } catch {
      return n.body;
    }
  }
  function tt(n, r) {
    var o = r.checked;
    return ue({}, r, { defaultChecked: void 0, defaultValue: void 0, value: void 0, checked: o ?? n._wrapperState.initialChecked });
  }
  function pt(n, r) {
    var o = r.defaultValue == null ? "" : r.defaultValue, u = r.checked != null ? r.checked : r.defaultChecked;
    o = Bt(r.value != null ? r.value : o), n._wrapperState = { initialChecked: u, initialValue: o, controlled: r.type === "checkbox" || r.type === "radio" ? r.checked != null : r.value != null };
  }
  function Jt(n, r) {
    r = r.checked, r != null && B(n, "checked", r, !1);
  }
  function Gt(n, r) {
    Jt(n, r);
    var o = Bt(r.value), u = r.type;
    if (o != null)
      u === "number" ? (o === 0 && n.value === "" || n.value != o) && (n.value = "" + o) : n.value !== "" + o && (n.value = "" + o);
    else if (u === "submit" || u === "reset") {
      n.removeAttribute("value");
      return;
    }
    r.hasOwnProperty("value") ? Jn(n, r.type, o) : r.hasOwnProperty("defaultValue") && Jn(n, r.type, Bt(r.defaultValue)), r.checked == null && r.defaultChecked != null && (n.defaultChecked = !!r.defaultChecked);
  }
  function mn(n, r, o) {
    if (r.hasOwnProperty("value") || r.hasOwnProperty("defaultValue")) {
      var u = r.type;
      if (!(u !== "submit" && u !== "reset" || r.value !== void 0 && r.value !== null))
        return;
      r = "" + n._wrapperState.initialValue, o || r === n.value || (n.value = r), n.defaultValue = r;
    }
    o = n.name, o !== "" && (n.name = ""), n.defaultChecked = !!n._wrapperState.initialChecked, o !== "" && (n.name = o);
  }
  function Jn(n, r, o) {
    (r !== "number" || Ge(n.ownerDocument) !== n) && (o == null ? n.defaultValue = "" + n._wrapperState.initialValue : n.defaultValue !== "" + o && (n.defaultValue = "" + o));
  }
  var er = Array.isArray;
  function Lt(n, r, o, u) {
    if (n = n.options, r) {
      r = {};
      for (var f = 0; f < o.length; f++)
        r["$" + o[f]] = !0;
      for (o = 0; o < n.length; o++)
        f = r.hasOwnProperty("$" + n[o].value), n[o].selected !== f && (n[o].selected = f), f && u && (n[o].defaultSelected = !0);
    } else {
      for (o = "" + Bt(o), r = null, f = 0; f < n.length; f++) {
        if (n[f].value === o) {
          n[f].selected = !0, u && (n[f].defaultSelected = !0);
          return;
        }
        r !== null || n[f].disabled || (r = n[f]);
      }
      r !== null && (r.selected = !0);
    }
  }
  function _n(n, r) {
    if (r.dangerouslySetInnerHTML != null)
      throw Error(S(91));
    return ue({}, r, { value: void 0, defaultValue: void 0, children: "" + n._wrapperState.initialValue });
  }
  function Kt(n, r) {
    var o = r.value;
    if (o == null) {
      if (o = r.children, r = r.defaultValue, o != null) {
        if (r != null)
          throw Error(S(92));
        if (er(o)) {
          if (1 < o.length)
            throw Error(S(93));
          o = o[0];
        }
        r = o;
      }
      r == null && (r = ""), o = r;
    }
    n._wrapperState = { initialValue: Bt(o) };
  }
  function zt(n, r) {
    var o = Bt(r.value), u = Bt(r.defaultValue);
    o != null && (o = "" + o, o !== n.value && (n.value = o), r.defaultValue == null && n.defaultValue !== o && (n.defaultValue = o)), u != null && (n.defaultValue = "" + u);
  }
  function Vn(n) {
    var r = n.textContent;
    r === n._wrapperState.initialValue && r !== "" && r !== null && (n.value = r);
  }
  function Tr(n) {
    switch (n) {
      case "svg":
        return "http://www.w3.org/2000/svg";
      case "math":
        return "http://www.w3.org/1998/Math/MathML";
      default:
        return "http://www.w3.org/1999/xhtml";
    }
  }
  function yn(n, r) {
    return n == null || n === "http://www.w3.org/1999/xhtml" ? Tr(r) : n === "http://www.w3.org/2000/svg" && r === "foreignObject" ? "http://www.w3.org/1999/xhtml" : n;
  }
  var ct, Ca = function(n) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(r, o, u, f) {
      MSApp.execUnsafeLocalFunction(function() {
        return n(r, o, u, f);
      });
    } : n;
  }(function(n, r) {
    if (n.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in n)
      n.innerHTML = r;
    else {
      for (ct = ct || document.createElement("div"), ct.innerHTML = "<svg>" + r.valueOf().toString() + "</svg>", r = ct.firstChild; n.firstChild; )
        n.removeChild(n.firstChild);
      for (; r.firstChild; )
        n.appendChild(r.firstChild);
    }
  });
  function tr(n, r) {
    if (r) {
      var o = n.firstChild;
      if (o && o === n.lastChild && o.nodeType === 3) {
        o.nodeValue = r;
        return;
      }
    }
    n.textContent = r;
  }
  var Ee = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0
  }, He = ["Webkit", "ms", "Moz", "O"];
  Object.keys(Ee).forEach(function(n) {
    He.forEach(function(r) {
      r = r + n.charAt(0).toUpperCase() + n.substring(1), Ee[r] = Ee[n];
    });
  });
  function ft(n, r, o) {
    return r == null || typeof r == "boolean" || r === "" ? "" : o || typeof r != "number" || r === 0 || Ee.hasOwnProperty(n) && Ee[n] ? ("" + r).trim() : r + "px";
  }
  function he(n, r) {
    n = n.style;
    for (var o in r)
      if (r.hasOwnProperty(o)) {
        var u = o.indexOf("--") === 0, f = ft(o, r[o], u);
        o === "float" && (o = "cssFloat"), u ? n.setProperty(o, f) : n[o] = f;
      }
  }
  var $e = ue({ menuitem: !0 }, { area: !0, base: !0, br: !0, col: !0, embed: !0, hr: !0, img: !0, input: !0, keygen: !0, link: !0, meta: !0, param: !0, source: !0, track: !0, wbr: !0 });
  function Ct(n, r) {
    if (r) {
      if ($e[n] && (r.children != null || r.dangerouslySetInnerHTML != null))
        throw Error(S(137, n));
      if (r.dangerouslySetInnerHTML != null) {
        if (r.children != null)
          throw Error(S(60));
        if (typeof r.dangerouslySetInnerHTML != "object" || !("__html" in r.dangerouslySetInnerHTML))
          throw Error(S(61));
      }
      if (r.style != null && typeof r.style != "object")
        throw Error(S(62));
    }
  }
  function Vt(n, r) {
    if (n.indexOf("-") === -1)
      return typeof r.is == "string";
    switch (n) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var fr = null;
  function on(n) {
    return n = n.target || n.srcElement || window, n.correspondingUseElement && (n = n.correspondingUseElement), n.nodeType === 3 ? n.parentNode : n;
  }
  var Ua = null, gn = null, ln = null;
  function ev(n) {
    if (n = Nu(n)) {
      if (typeof Ua != "function")
        throw Error(S(280));
      var r = n.stateNode;
      r && (r = Ie(r), Ua(n.stateNode, n.type, r));
    }
  }
  function Cs(n) {
    gn ? ln ? ln.push(n) : ln = [n] : gn = n;
  }
  function Ts() {
    if (gn) {
      var n = gn, r = ln;
      if (ln = gn = null, ev(n), r)
        for (n = 0; n < r.length; n++)
          ev(r[n]);
    }
  }
  function tv(n, r) {
    return n(r);
  }
  function nv() {
  }
  var xs = !1;
  function Rf(n, r, o) {
    if (xs)
      return n(r, o);
    xs = !0;
    try {
      return tv(n, r, o);
    } finally {
      xs = !1, (gn !== null || ln !== null) && (nv(), Ts());
    }
  }
  function ou(n, r) {
    var o = n.stateNode;
    if (o === null)
      return null;
    var u = Ie(o);
    if (u === null)
      return null;
    o = u[r];
    e:
      switch (r) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          (u = !u.disabled) || (n = n.type, u = !(n === "button" || n === "input" || n === "select" || n === "textarea")), n = !u;
          break e;
        default:
          n = !1;
      }
    if (n)
      return null;
    if (o && typeof o != "function")
      throw Error(S(231, r, typeof o));
    return o;
  }
  var Rs = !1;
  if (A)
    try {
      var co = {};
      Object.defineProperty(co, "passive", { get: function() {
        Rs = !0;
      } }), window.addEventListener("test", co, co), window.removeEventListener("test", co, co);
    } catch {
      Rs = !1;
    }
  function nl(n, r, o, u, f, p, E, T, D) {
    var j = Array.prototype.slice.call(arguments, 3);
    try {
      r.apply(o, j);
    } catch (ae) {
      this.onError(ae);
    }
  }
  var Ta = !1, ei = null, rl = !1, lu = null, wf = { onError: function(n) {
    Ta = !0, ei = n;
  } };
  function Df(n, r, o, u, f, p, E, T, D) {
    Ta = !1, ei = null, nl.apply(wf, arguments);
  }
  function al(n, r, o, u, f, p, E, T, D) {
    if (Df.apply(this, arguments), Ta) {
      if (Ta) {
        var j = ei;
        Ta = !1, ei = null;
      } else
        throw Error(S(198));
      rl || (rl = !0, lu = j);
    }
  }
  function Aa(n) {
    var r = n, o = n;
    if (n.alternate)
      for (; r.return; )
        r = r.return;
    else {
      n = r;
      do
        r = n, r.flags & 4098 && (o = r.return), n = r.return;
      while (n);
    }
    return r.tag === 3 ? o : null;
  }
  function uu(n) {
    if (n.tag === 13) {
      var r = n.memoizedState;
      if (r === null && (n = n.alternate, n !== null && (r = n.memoizedState)), r !== null)
        return r.dehydrated;
    }
    return null;
  }
  function il(n) {
    if (Aa(n) !== n)
      throw Error(S(188));
  }
  function dr(n) {
    var r = n.alternate;
    if (!r) {
      if (r = Aa(n), r === null)
        throw Error(S(188));
      return r !== n ? null : n;
    }
    for (var o = n, u = r; ; ) {
      var f = o.return;
      if (f === null)
        break;
      var p = f.alternate;
      if (p === null) {
        if (u = f.return, u !== null) {
          o = u;
          continue;
        }
        break;
      }
      if (f.child === p.child) {
        for (p = f.child; p; ) {
          if (p === o)
            return il(f), n;
          if (p === u)
            return il(f), r;
          p = p.sibling;
        }
        throw Error(S(188));
      }
      if (o.return !== u.return)
        o = f, u = p;
      else {
        for (var E = !1, T = f.child; T; ) {
          if (T === o) {
            E = !0, o = f, u = p;
            break;
          }
          if (T === u) {
            E = !0, u = f, o = p;
            break;
          }
          T = T.sibling;
        }
        if (!E) {
          for (T = p.child; T; ) {
            if (T === o) {
              E = !0, o = p, u = f;
              break;
            }
            if (T === u) {
              E = !0, u = p, o = f;
              break;
            }
            T = T.sibling;
          }
          if (!E)
            throw Error(S(189));
        }
      }
      if (o.alternate !== u)
        throw Error(S(190));
    }
    if (o.tag !== 3)
      throw Error(S(188));
    return o.stateNode.current === o ? n : r;
  }
  function rv(n) {
    return n = dr(n), n !== null ? av(n) : null;
  }
  function av(n) {
    if (n.tag === 5 || n.tag === 6)
      return n;
    for (n = n.child; n !== null; ) {
      var r = av(n);
      if (r !== null)
        return r;
      n = n.sibling;
    }
    return null;
  }
  var kf = m.unstable_scheduleCallback, iv = m.unstable_cancelCallback, Sy = m.unstable_shouldYield, Ey = m.unstable_requestPaint, un = m.unstable_now, by = m.unstable_getCurrentPriorityLevel, ti = m.unstable_ImmediatePriority, vt = m.unstable_UserBlockingPriority, Ni = m.unstable_NormalPriority, ov = m.unstable_LowPriority, Of = m.unstable_IdlePriority, su = null, xa = null;
  function lv(n) {
    if (xa && typeof xa.onCommitFiberRoot == "function")
      try {
        xa.onCommitFiberRoot(su, n, void 0, (n.current.flags & 128) === 128);
      } catch {
      }
  }
  var Jr = Math.clz32 ? Math.clz32 : Cy, uv = Math.log, sv = Math.LN2;
  function Cy(n) {
    return n >>>= 0, n === 0 ? 32 : 31 - (uv(n) / sv | 0) | 0;
  }
  var ws = 64, ol = 4194304;
  function fo(n) {
    switch (n & -n) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return n & 4194240;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return n & 130023424;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 1073741824;
      default:
        return n;
    }
  }
  function Ra(n, r) {
    var o = n.pendingLanes;
    if (o === 0)
      return 0;
    var u = 0, f = n.suspendedLanes, p = n.pingedLanes, E = o & 268435455;
    if (E !== 0) {
      var T = E & ~f;
      T !== 0 ? u = fo(T) : (p &= E, p !== 0 && (u = fo(p)));
    } else
      E = o & ~f, E !== 0 ? u = fo(E) : p !== 0 && (u = fo(p));
    if (u === 0)
      return 0;
    if (r !== 0 && r !== u && !(r & f) && (f = u & -u, p = r & -r, f >= p || f === 16 && (p & 4194240) !== 0))
      return r;
    if (u & 4 && (u |= o & 16), r = n.entangledLanes, r !== 0)
      for (n = n.entanglements, r &= u; 0 < r; )
        o = 31 - Jr(r), f = 1 << o, u |= n[o], r &= ~f;
    return u;
  }
  function Nf(n, r) {
    switch (n) {
      case 1:
      case 2:
      case 4:
        return r + 250;
      case 8:
      case 16:
      case 32:
      case 64:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return r + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
      case 67108864:
        return -1;
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Ds(n, r) {
    for (var o = n.suspendedLanes, u = n.pingedLanes, f = n.expirationTimes, p = n.pendingLanes; 0 < p; ) {
      var E = 31 - Jr(p), T = 1 << E, D = f[E];
      D === -1 ? (!(T & o) || T & u) && (f[E] = Nf(T, r)) : D <= r && (n.expiredLanes |= T), p &= ~T;
    }
  }
  function Mf(n) {
    return n = n.pendingLanes & -1073741825, n !== 0 ? n : n & 1073741824 ? 1073741824 : 0;
  }
  function ks() {
    var n = ws;
    return ws <<= 1, !(ws & 4194240) && (ws = 64), n;
  }
  function _f(n) {
    for (var r = [], o = 0; 31 > o; o++)
      r.push(n);
    return r;
  }
  function po(n, r, o) {
    n.pendingLanes |= r, r !== 536870912 && (n.suspendedLanes = 0, n.pingedLanes = 0), n = n.eventTimes, r = 31 - Jr(r), n[r] = o;
  }
  function Ty(n, r) {
    var o = n.pendingLanes & ~r;
    n.pendingLanes = r, n.suspendedLanes = 0, n.pingedLanes = 0, n.expiredLanes &= r, n.mutableReadLanes &= r, n.entangledLanes &= r, r = n.entanglements;
    var u = n.eventTimes;
    for (n = n.expirationTimes; 0 < o; ) {
      var f = 31 - Jr(o), p = 1 << f;
      r[f] = 0, u[f] = -1, n[f] = -1, o &= ~p;
    }
  }
  function cu(n, r) {
    var o = n.entangledLanes |= r;
    for (n = n.entanglements; o; ) {
      var u = 31 - Jr(o), f = 1 << u;
      f & r | n[u] & r && (n[u] |= r), o &= ~f;
    }
  }
  var Mt = 0;
  function Lf(n) {
    return n &= -n, 1 < n ? 4 < n ? n & 268435455 ? 16 : 536870912 : 4 : 1;
  }
  var cv, Os, Pt, fv, zf, it = !1, fu = [], Sn = null, ea = null, ta = null, du = /* @__PURE__ */ new Map(), xn = /* @__PURE__ */ new Map(), Ut = [], xy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
  function wa(n, r) {
    switch (n) {
      case "focusin":
      case "focusout":
        Sn = null;
        break;
      case "dragenter":
      case "dragleave":
        ea = null;
        break;
      case "mouseover":
      case "mouseout":
        ta = null;
        break;
      case "pointerover":
      case "pointerout":
        du.delete(r.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        xn.delete(r.pointerId);
    }
  }
  function nr(n, r, o, u, f, p) {
    return n === null || n.nativeEvent !== p ? (n = { blockedOn: r, domEventName: o, eventSystemFlags: u, nativeEvent: p, targetContainers: [f] }, r !== null && (r = Nu(r), r !== null && Os(r)), n) : (n.eventSystemFlags |= u, r = n.targetContainers, f !== null && r.indexOf(f) === -1 && r.push(f), n);
  }
  function Mi(n, r, o, u, f) {
    switch (r) {
      case "focusin":
        return Sn = nr(Sn, n, r, o, u, f), !0;
      case "dragenter":
        return ea = nr(ea, n, r, o, u, f), !0;
      case "mouseover":
        return ta = nr(ta, n, r, o, u, f), !0;
      case "pointerover":
        var p = f.pointerId;
        return du.set(p, nr(du.get(p) || null, n, r, o, u, f)), !0;
      case "gotpointercapture":
        return p = f.pointerId, xn.set(p, nr(xn.get(p) || null, n, r, o, u, f)), !0;
    }
    return !1;
  }
  function dv(n) {
    var r = ra(n.target);
    if (r !== null) {
      var o = Aa(r);
      if (o !== null) {
        if (r = o.tag, r === 13) {
          if (r = uu(o), r !== null) {
            n.blockedOn = r, zf(n.priority, function() {
              Pt(o);
            });
            return;
          }
        } else if (r === 3 && o.stateNode.current.memoizedState.isDehydrated) {
          n.blockedOn = o.tag === 3 ? o.stateNode.containerInfo : null;
          return;
        }
      }
    }
    n.blockedOn = null;
  }
  function ll(n) {
    if (n.blockedOn !== null)
      return !1;
    for (var r = n.targetContainers; 0 < r.length; ) {
      var o = _s(n.domEventName, n.eventSystemFlags, r[0], n.nativeEvent);
      if (o === null) {
        o = n.nativeEvent;
        var u = new o.constructor(o.type, o);
        fr = u, o.target.dispatchEvent(u), fr = null;
      } else
        return r = Nu(o), r !== null && Os(r), n.blockedOn = o, !1;
      r.shift();
    }
    return !0;
  }
  function Uf(n, r, o) {
    ll(n) && o.delete(r);
  }
  function pv() {
    it = !1, Sn !== null && ll(Sn) && (Sn = null), ea !== null && ll(ea) && (ea = null), ta !== null && ll(ta) && (ta = null), du.forEach(Uf), xn.forEach(Uf);
  }
  function pu(n, r) {
    n.blockedOn === r && (n.blockedOn = null, it || (it = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, pv)));
  }
  function vu(n) {
    function r(f) {
      return pu(f, n);
    }
    if (0 < fu.length) {
      pu(fu[0], n);
      for (var o = 1; o < fu.length; o++) {
        var u = fu[o];
        u.blockedOn === n && (u.blockedOn = null);
      }
    }
    for (Sn !== null && pu(Sn, n), ea !== null && pu(ea, n), ta !== null && pu(ta, n), du.forEach(r), xn.forEach(r), o = 0; o < Ut.length; o++)
      u = Ut[o], u.blockedOn === n && (u.blockedOn = null);
    for (; 0 < Ut.length && (o = Ut[0], o.blockedOn === null); )
      dv(o), o.blockedOn === null && Ut.shift();
  }
  var ul = $.ReactCurrentBatchConfig, vo = !0;
  function vv(n, r, o, u) {
    var f = Mt, p = ul.transition;
    ul.transition = null;
    try {
      Mt = 1, Ms(n, r, o, u);
    } finally {
      Mt = f, ul.transition = p;
    }
  }
  function Ns(n, r, o, u) {
    var f = Mt, p = ul.transition;
    ul.transition = null;
    try {
      Mt = 4, Ms(n, r, o, u);
    } finally {
      Mt = f, ul.transition = p;
    }
  }
  function Ms(n, r, o, u) {
    if (vo) {
      var f = _s(n, r, o, u);
      if (f === null)
        $s(n, r, u, hu, o), wa(n, u);
      else if (Mi(f, n, r, o, u))
        u.stopPropagation();
      else if (wa(n, u), r & 4 && -1 < xy.indexOf(n)) {
        for (; f !== null; ) {
          var p = Nu(f);
          if (p !== null && cv(p), p = _s(n, r, o, u), p === null && $s(n, r, u, hu, o), p === f)
            break;
          f = p;
        }
        f !== null && u.stopPropagation();
      } else
        $s(n, r, u, null, o);
    }
  }
  var hu = null;
  function _s(n, r, o, u) {
    if (hu = null, n = on(u), n = ra(n), n !== null)
      if (r = Aa(n), r === null)
        n = null;
      else if (o = r.tag, o === 13) {
        if (n = uu(r), n !== null)
          return n;
        n = null;
      } else if (o === 3) {
        if (r.stateNode.current.memoizedState.isDehydrated)
          return r.tag === 3 ? r.stateNode.containerInfo : null;
        n = null;
      } else
        r !== n && (n = null);
    return hu = n, null;
  }
  function Af(n) {
    switch (n) {
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "resize":
      case "seeked":
      case "submit":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 1;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "scroll":
      case "toggle":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 4;
      case "message":
        switch (by()) {
          case ti:
            return 1;
          case vt:
            return 4;
          case Ni:
          case ov:
            return 16;
          case Of:
            return 536870912;
          default:
            return 16;
        }
      default:
        return 16;
    }
  }
  var ni = null, mu = null, yu = null;
  function Ff() {
    if (yu)
      return yu;
    var n, r = mu, o = r.length, u, f = "value" in ni ? ni.value : ni.textContent, p = f.length;
    for (n = 0; n < o && r[n] === f[n]; n++)
      ;
    var E = o - n;
    for (u = 1; u <= E && r[o - u] === f[p - u]; u++)
      ;
    return yu = f.slice(n, 1 < u ? 1 - u : void 0);
  }
  function sl(n) {
    var r = n.keyCode;
    return "charCode" in n ? (n = n.charCode, n === 0 && r === 13 && (n = 13)) : n = r, n === 10 && (n = 13), 32 <= n || n === 13 ? n : 0;
  }
  function gu() {
    return !0;
  }
  function hv() {
    return !1;
  }
  function Pr(n) {
    function r(o, u, f, p, E) {
      this._reactName = o, this._targetInst = f, this.type = u, this.nativeEvent = p, this.target = E, this.currentTarget = null;
      for (var T in n)
        n.hasOwnProperty(T) && (o = n[T], this[T] = o ? o(p) : p[T]);
      return this.isDefaultPrevented = (p.defaultPrevented != null ? p.defaultPrevented : p.returnValue === !1) ? gu : hv, this.isPropagationStopped = hv, this;
    }
    return ue(r.prototype, { preventDefault: function() {
      this.defaultPrevented = !0;
      var o = this.nativeEvent;
      o && (o.preventDefault ? o.preventDefault() : typeof o.returnValue != "unknown" && (o.returnValue = !1), this.isDefaultPrevented = gu);
    }, stopPropagation: function() {
      var o = this.nativeEvent;
      o && (o.stopPropagation ? o.stopPropagation() : typeof o.cancelBubble != "unknown" && (o.cancelBubble = !0), this.isPropagationStopped = gu);
    }, persist: function() {
    }, isPersistent: gu }), r;
  }
  var _i = { eventPhase: 0, bubbles: 0, cancelable: 0, timeStamp: function(n) {
    return n.timeStamp || Date.now();
  }, defaultPrevented: 0, isTrusted: 0 }, Ls = Pr(_i), cl = ue({}, _i, { view: 0, detail: 0 }), mv = Pr(cl), zs, Pf, Su, Ln = ue({}, cl, { screenX: 0, screenY: 0, clientX: 0, clientY: 0, pageX: 0, pageY: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, getModifierState: Bf, button: 0, buttons: 0, relatedTarget: function(n) {
    return n.relatedTarget === void 0 ? n.fromElement === n.srcElement ? n.toElement : n.fromElement : n.relatedTarget;
  }, movementX: function(n) {
    return "movementX" in n ? n.movementX : (n !== Su && (Su && n.type === "mousemove" ? (zs = n.screenX - Su.screenX, Pf = n.screenY - Su.screenY) : Pf = zs = 0, Su = n), zs);
  }, movementY: function(n) {
    return "movementY" in n ? n.movementY : Pf;
  } }), Us = Pr(Ln), yv = ue({}, Ln, { dataTransfer: 0 }), gv = Pr(yv), Ry = ue({}, cl, { relatedTarget: 0 }), Li = Pr(Ry), Hf = ue({}, _i, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }), Sv = Pr(Hf), wy = ue({}, _i, { clipboardData: function(n) {
    return "clipboardData" in n ? n.clipboardData : window.clipboardData;
  } }), Dy = Pr(wy), ky = ue({}, _i, { data: 0 }), jf = Pr(ky), Vf = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Ev = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, bv = { Alt: "altKey", Control: "ctrlKey", Meta: "metaKey", Shift: "shiftKey" };
  function Cv(n) {
    var r = this.nativeEvent;
    return r.getModifierState ? r.getModifierState(n) : (n = bv[n]) ? !!r[n] : !1;
  }
  function Bf() {
    return Cv;
  }
  var ri = ue({}, cl, { key: function(n) {
    if (n.key) {
      var r = Vf[n.key] || n.key;
      if (r !== "Unidentified")
        return r;
    }
    return n.type === "keypress" ? (n = sl(n), n === 13 ? "Enter" : String.fromCharCode(n)) : n.type === "keydown" || n.type === "keyup" ? Ev[n.keyCode] || "Unidentified" : "";
  }, code: 0, location: 0, ctrlKey: 0, shiftKey: 0, altKey: 0, metaKey: 0, repeat: 0, locale: 0, getModifierState: Bf, charCode: function(n) {
    return n.type === "keypress" ? sl(n) : 0;
  }, keyCode: function(n) {
    return n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  }, which: function(n) {
    return n.type === "keypress" ? sl(n) : n.type === "keydown" || n.type === "keyup" ? n.keyCode : 0;
  } }), Oy = Pr(ri), If = ue({}, Ln, { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: 0, isPrimary: 0 }), As = Pr(If), $f = ue({}, cl, { touches: 0, targetTouches: 0, changedTouches: 0, altKey: 0, metaKey: 0, ctrlKey: 0, shiftKey: 0, getModifierState: Bf }), Ny = Pr($f), Fs = ue({}, _i, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }), Tv = Pr(Fs), xr = ue({}, Ln, {
    deltaX: function(n) {
      return "deltaX" in n ? n.deltaX : "wheelDeltaX" in n ? -n.wheelDeltaX : 0;
    },
    deltaY: function(n) {
      return "deltaY" in n ? n.deltaY : "wheelDeltaY" in n ? -n.wheelDeltaY : "wheelDelta" in n ? -n.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ai = Pr(xr), En = [9, 13, 27, 32], Da = A && "CompositionEvent" in window, ho = null;
  A && "documentMode" in document && (ho = document.documentMode);
  var Ps = A && "TextEvent" in window && !ho, xv = A && (!Da || ho && 8 < ho && 11 >= ho), fl = String.fromCharCode(32), Rv = !1;
  function wv(n, r) {
    switch (n) {
      case "keyup":
        return En.indexOf(r.keyCode) !== -1;
      case "keydown":
        return r.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Hs(n) {
    return n = n.detail, typeof n == "object" && "data" in n ? n.data : null;
  }
  var dl = !1;
  function My(n, r) {
    switch (n) {
      case "compositionend":
        return Hs(r);
      case "keypress":
        return r.which !== 32 ? null : (Rv = !0, fl);
      case "textInput":
        return n = r.data, n === fl && Rv ? null : n;
      default:
        return null;
    }
  }
  function _y(n, r) {
    if (dl)
      return n === "compositionend" || !Da && wv(n, r) ? (n = Ff(), yu = mu = ni = null, dl = !1, n) : null;
    switch (n) {
      case "paste":
        return null;
      case "keypress":
        if (!(r.ctrlKey || r.altKey || r.metaKey) || r.ctrlKey && r.altKey) {
          if (r.char && 1 < r.char.length)
            return r.char;
          if (r.which)
            return String.fromCharCode(r.which);
        }
        return null;
      case "compositionend":
        return xv && r.locale !== "ko" ? null : r.data;
      default:
        return null;
    }
  }
  var Dv = { color: !0, date: !0, datetime: !0, "datetime-local": !0, email: !0, month: !0, number: !0, password: !0, range: !0, search: !0, tel: !0, text: !0, time: !0, url: !0, week: !0 };
  function kv(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r === "input" ? !!Dv[n.type] : r === "textarea";
  }
  function Ov(n, r, o, u) {
    Cs(u), r = Du(r, "onChange"), 0 < r.length && (o = new Ls("onChange", "change", null, o, u), n.push({ event: o, listeners: r }));
  }
  var Eu = null, pl = null;
  function vl(n) {
    Is(n, 0);
  }
  function hl(n) {
    var r = yl(n);
    if (wt(r))
      return n;
  }
  function Nv(n, r) {
    if (n === "change")
      return r;
  }
  var Wf = !1;
  if (A) {
    var Yf;
    if (A) {
      var Qf = "oninput" in document;
      if (!Qf) {
        var Mv = document.createElement("div");
        Mv.setAttribute("oninput", "return;"), Qf = typeof Mv.oninput == "function";
      }
      Yf = Qf;
    } else
      Yf = !1;
    Wf = Yf && (!document.documentMode || 9 < document.documentMode);
  }
  function _v() {
    Eu && (Eu.detachEvent("onpropertychange", Lv), pl = Eu = null);
  }
  function Lv(n) {
    if (n.propertyName === "value" && hl(pl)) {
      var r = [];
      Ov(r, pl, n, on(n)), Rf(vl, r);
    }
  }
  function Ly(n, r, o) {
    n === "focusin" ? (_v(), Eu = r, pl = o, Eu.attachEvent("onpropertychange", Lv)) : n === "focusout" && _v();
  }
  function zy(n) {
    if (n === "selectionchange" || n === "keyup" || n === "keydown")
      return hl(pl);
  }
  function Uy(n, r) {
    if (n === "click")
      return hl(r);
  }
  function zv(n, r) {
    if (n === "input" || n === "change")
      return hl(r);
  }
  function Ay(n, r) {
    return n === r && (n !== 0 || 1 / n === 1 / r) || n !== n && r !== r;
  }
  var na = typeof Object.is == "function" ? Object.is : Ay;
  function bu(n, r) {
    if (na(n, r))
      return !0;
    if (typeof n != "object" || n === null || typeof r != "object" || r === null)
      return !1;
    var o = Object.keys(n), u = Object.keys(r);
    if (o.length !== u.length)
      return !1;
    for (u = 0; u < o.length; u++) {
      var f = o[u];
      if (!z.call(r, f) || !na(n[f], r[f]))
        return !1;
    }
    return !0;
  }
  function Uv(n) {
    for (; n && n.firstChild; )
      n = n.firstChild;
    return n;
  }
  function Av(n, r) {
    var o = Uv(n);
    n = 0;
    for (var u; o; ) {
      if (o.nodeType === 3) {
        if (u = n + o.textContent.length, n <= r && u >= r)
          return { node: o, offset: r - n };
        n = u;
      }
      e: {
        for (; o; ) {
          if (o.nextSibling) {
            o = o.nextSibling;
            break e;
          }
          o = o.parentNode;
        }
        o = void 0;
      }
      o = Uv(o);
    }
  }
  function Fv(n, r) {
    return n && r ? n === r ? !0 : n && n.nodeType === 3 ? !1 : r && r.nodeType === 3 ? Fv(n, r.parentNode) : "contains" in n ? n.contains(r) : n.compareDocumentPosition ? !!(n.compareDocumentPosition(r) & 16) : !1 : !1;
  }
  function js() {
    for (var n = window, r = Ge(); r instanceof n.HTMLIFrameElement; ) {
      try {
        var o = typeof r.contentWindow.location.href == "string";
      } catch {
        o = !1;
      }
      if (o)
        n = r.contentWindow;
      else
        break;
      r = Ge(n.document);
    }
    return r;
  }
  function ii(n) {
    var r = n && n.nodeName && n.nodeName.toLowerCase();
    return r && (r === "input" && (n.type === "text" || n.type === "search" || n.type === "tel" || n.type === "url" || n.type === "password") || r === "textarea" || n.contentEditable === "true");
  }
  function Vs(n) {
    var r = js(), o = n.focusedElem, u = n.selectionRange;
    if (r !== o && o && o.ownerDocument && Fv(o.ownerDocument.documentElement, o)) {
      if (u !== null && ii(o)) {
        if (r = u.start, n = u.end, n === void 0 && (n = r), "selectionStart" in o)
          o.selectionStart = r, o.selectionEnd = Math.min(n, o.value.length);
        else if (n = (r = o.ownerDocument || document) && r.defaultView || window, n.getSelection) {
          n = n.getSelection();
          var f = o.textContent.length, p = Math.min(u.start, f);
          u = u.end === void 0 ? p : Math.min(u.end, f), !n.extend && p > u && (f = u, u = p, p = f), f = Av(o, p);
          var E = Av(
            o,
            u
          );
          f && E && (n.rangeCount !== 1 || n.anchorNode !== f.node || n.anchorOffset !== f.offset || n.focusNode !== E.node || n.focusOffset !== E.offset) && (r = r.createRange(), r.setStart(f.node, f.offset), n.removeAllRanges(), p > u ? (n.addRange(r), n.extend(E.node, E.offset)) : (r.setEnd(E.node, E.offset), n.addRange(r)));
        }
      }
      for (r = [], n = o; n = n.parentNode; )
        n.nodeType === 1 && r.push({ element: n, left: n.scrollLeft, top: n.scrollTop });
      for (typeof o.focus == "function" && o.focus(), o = 0; o < r.length; o++)
        n = r[o], n.element.scrollLeft = n.left, n.element.scrollTop = n.top;
    }
  }
  var Pv = A && "documentMode" in document && 11 >= document.documentMode, ka = null, qf = null, Cu = null, Gf = !1;
  function Hv(n, r, o) {
    var u = o.window === o ? o.document : o.nodeType === 9 ? o : o.ownerDocument;
    Gf || ka == null || ka !== Ge(u) || (u = ka, "selectionStart" in u && ii(u) ? u = { start: u.selectionStart, end: u.selectionEnd } : (u = (u.ownerDocument && u.ownerDocument.defaultView || window).getSelection(), u = { anchorNode: u.anchorNode, anchorOffset: u.anchorOffset, focusNode: u.focusNode, focusOffset: u.focusOffset }), Cu && bu(Cu, u) || (Cu = u, u = Du(qf, "onSelect"), 0 < u.length && (r = new Ls("onSelect", "select", null, r, o), n.push({ event: r, listeners: u }), r.target = ka)));
  }
  function Bs(n, r) {
    var o = {};
    return o[n.toLowerCase()] = r.toLowerCase(), o["Webkit" + n] = "webkit" + r, o["Moz" + n] = "moz" + r, o;
  }
  var mo = { animationend: Bs("Animation", "AnimationEnd"), animationiteration: Bs("Animation", "AnimationIteration"), animationstart: Bs("Animation", "AnimationStart"), transitionend: Bs("Transition", "TransitionEnd") }, Kf = {}, Xf = {};
  A && (Xf = document.createElement("div").style, "AnimationEvent" in window || (delete mo.animationend.animation, delete mo.animationiteration.animation, delete mo.animationstart.animation), "TransitionEvent" in window || delete mo.transitionend.transition);
  function zn(n) {
    if (Kf[n])
      return Kf[n];
    if (!mo[n])
      return n;
    var r = mo[n], o;
    for (o in r)
      if (r.hasOwnProperty(o) && o in Xf)
        return Kf[n] = r[o];
    return n;
  }
  var Zf = zn("animationend"), jv = zn("animationiteration"), Vv = zn("animationstart"), Bv = zn("transitionend"), Iv = /* @__PURE__ */ new Map(), $v = "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
  function oi(n, r) {
    Iv.set(n, r), R(r, [n]);
  }
  for (var Tu = 0; Tu < $v.length; Tu++) {
    var yo = $v[Tu], Fy = yo.toLowerCase(), xu = yo[0].toUpperCase() + yo.slice(1);
    oi(Fy, "on" + xu);
  }
  oi(Zf, "onAnimationEnd"), oi(jv, "onAnimationIteration"), oi(Vv, "onAnimationStart"), oi("dblclick", "onDoubleClick"), oi("focusin", "onFocus"), oi("focusout", "onBlur"), oi(Bv, "onTransitionEnd"), g("onMouseEnter", ["mouseout", "mouseover"]), g("onMouseLeave", ["mouseout", "mouseover"]), g("onPointerEnter", ["pointerout", "pointerover"]), g("onPointerLeave", ["pointerout", "pointerover"]), R("onChange", "change click focusin focusout input keydown keyup selectionchange".split(" ")), R("onSelect", "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")), R("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), R("onCompositionEnd", "compositionend focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionStart", "compositionstart focusout keydown keypress keyup mousedown".split(" ")), R("onCompositionUpdate", "compositionupdate focusout keydown keypress keyup mousedown".split(" "));
  var Ru = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "), Py = new Set("cancel close invalid load scroll toggle".split(" ").concat(Ru));
  function Wv(n, r, o) {
    var u = n.type || "unknown-event";
    n.currentTarget = o, al(u, r, void 0, n), n.currentTarget = null;
  }
  function Is(n, r) {
    r = (r & 4) !== 0;
    for (var o = 0; o < n.length; o++) {
      var u = n[o], f = u.event;
      u = u.listeners;
      e: {
        var p = void 0;
        if (r)
          for (var E = u.length - 1; 0 <= E; E--) {
            var T = u[E], D = T.instance, j = T.currentTarget;
            if (T = T.listener, D !== p && f.isPropagationStopped())
              break e;
            Wv(f, T, j), p = D;
          }
        else
          for (E = 0; E < u.length; E++) {
            if (T = u[E], D = T.instance, j = T.currentTarget, T = T.listener, D !== p && f.isPropagationStopped())
              break e;
            Wv(f, T, j), p = D;
          }
      }
    }
    if (rl)
      throw n = lu, rl = !1, lu = null, n;
  }
  function Ht(n, r) {
    var o = r[id];
    o === void 0 && (o = r[id] = /* @__PURE__ */ new Set());
    var u = n + "__bubble";
    o.has(u) || (Yv(r, n, 2, !1), o.add(u));
  }
  function zi(n, r, o) {
    var u = 0;
    r && (u |= 4), Yv(o, n, u, r);
  }
  var li = "_reactListening" + Math.random().toString(36).slice(2);
  function ml(n) {
    if (!n[li]) {
      n[li] = !0, x.forEach(function(o) {
        o !== "selectionchange" && (Py.has(o) || zi(o, !1, n), zi(o, !0, n));
      });
      var r = n.nodeType === 9 ? n : n.ownerDocument;
      r === null || r[li] || (r[li] = !0, zi("selectionchange", !1, r));
    }
  }
  function Yv(n, r, o, u) {
    switch (Af(r)) {
      case 1:
        var f = vv;
        break;
      case 4:
        f = Ns;
        break;
      default:
        f = Ms;
    }
    o = f.bind(null, r, o, n), f = void 0, !Rs || r !== "touchstart" && r !== "touchmove" && r !== "wheel" || (f = !0), u ? f !== void 0 ? n.addEventListener(r, o, { capture: !0, passive: f }) : n.addEventListener(r, o, !0) : f !== void 0 ? n.addEventListener(r, o, { passive: f }) : n.addEventListener(r, o, !1);
  }
  function $s(n, r, o, u, f) {
    var p = u;
    if (!(r & 1) && !(r & 2) && u !== null)
      e:
        for (; ; ) {
          if (u === null)
            return;
          var E = u.tag;
          if (E === 3 || E === 4) {
            var T = u.stateNode.containerInfo;
            if (T === f || T.nodeType === 8 && T.parentNode === f)
              break;
            if (E === 4)
              for (E = u.return; E !== null; ) {
                var D = E.tag;
                if ((D === 3 || D === 4) && (D = E.stateNode.containerInfo, D === f || D.nodeType === 8 && D.parentNode === f))
                  return;
                E = E.return;
              }
            for (; T !== null; ) {
              if (E = ra(T), E === null)
                return;
              if (D = E.tag, D === 5 || D === 6) {
                u = p = E;
                continue e;
              }
              T = T.parentNode;
            }
          }
          u = u.return;
        }
    Rf(function() {
      var j = p, ae = on(o), ie = [];
      e: {
        var re = Iv.get(n);
        if (re !== void 0) {
          var xe = Ls, Me = n;
          switch (n) {
            case "keypress":
              if (sl(o) === 0)
                break e;
            case "keydown":
            case "keyup":
              xe = Oy;
              break;
            case "focusin":
              Me = "focus", xe = Li;
              break;
            case "focusout":
              Me = "blur", xe = Li;
              break;
            case "beforeblur":
            case "afterblur":
              xe = Li;
              break;
            case "click":
              if (o.button === 2)
                break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              xe = Us;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              xe = gv;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              xe = Ny;
              break;
            case Zf:
            case jv:
            case Vv:
              xe = Sv;
              break;
            case Bv:
              xe = Tv;
              break;
            case "scroll":
              xe = mv;
              break;
            case "wheel":
              xe = ai;
              break;
            case "copy":
            case "cut":
            case "paste":
              xe = Dy;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              xe = As;
          }
          var ze = (r & 4) !== 0, vn = !ze && n === "scroll", M = ze ? re !== null ? re + "Capture" : null : re;
          ze = [];
          for (var O = j, U; O !== null; ) {
            U = O;
            var ce = U.stateNode;
            if (U.tag === 5 && ce !== null && (U = ce, M !== null && (ce = ou(O, M), ce != null && ze.push(wu(O, ce, U)))), vn)
              break;
            O = O.return;
          }
          0 < ze.length && (re = new xe(re, Me, null, o, ae), ie.push({ event: re, listeners: ze }));
        }
      }
      if (!(r & 7)) {
        e: {
          if (re = n === "mouseover" || n === "pointerover", xe = n === "mouseout" || n === "pointerout", re && o !== fr && (Me = o.relatedTarget || o.fromElement) && (ra(Me) || Me[ui]))
            break e;
          if ((xe || re) && (re = ae.window === ae ? ae : (re = ae.ownerDocument) ? re.defaultView || re.parentWindow : window, xe ? (Me = o.relatedTarget || o.toElement, xe = j, Me = Me ? ra(Me) : null, Me !== null && (vn = Aa(Me), Me !== vn || Me.tag !== 5 && Me.tag !== 6) && (Me = null)) : (xe = null, Me = j), xe !== Me)) {
            if (ze = Us, ce = "onMouseLeave", M = "onMouseEnter", O = "mouse", (n === "pointerout" || n === "pointerover") && (ze = As, ce = "onPointerLeave", M = "onPointerEnter", O = "pointer"), vn = xe == null ? re : yl(xe), U = Me == null ? re : yl(Me), re = new ze(ce, O + "leave", xe, o, ae), re.target = vn, re.relatedTarget = U, ce = null, ra(ae) === j && (ze = new ze(M, O + "enter", Me, o, ae), ze.target = U, ze.relatedTarget = vn, ce = ze), vn = ce, xe && Me)
              t: {
                for (ze = xe, M = Me, O = 0, U = ze; U; U = go(U))
                  O++;
                for (U = 0, ce = M; ce; ce = go(ce))
                  U++;
                for (; 0 < O - U; )
                  ze = go(ze), O--;
                for (; 0 < U - O; )
                  M = go(M), U--;
                for (; O--; ) {
                  if (ze === M || M !== null && ze === M.alternate)
                    break t;
                  ze = go(ze), M = go(M);
                }
                ze = null;
              }
            else
              ze = null;
            xe !== null && Jf(ie, re, xe, ze, !1), Me !== null && vn !== null && Jf(ie, vn, Me, ze, !0);
          }
        }
        e: {
          if (re = j ? yl(j) : window, xe = re.nodeName && re.nodeName.toLowerCase(), xe === "select" || xe === "input" && re.type === "file")
            var Fe = Nv;
          else if (kv(re))
            if (Wf)
              Fe = zv;
            else {
              Fe = zy;
              var _e = Ly;
            }
          else
            (xe = re.nodeName) && xe.toLowerCase() === "input" && (re.type === "checkbox" || re.type === "radio") && (Fe = Uy);
          if (Fe && (Fe = Fe(n, j))) {
            Ov(ie, Fe, o, ae);
            break e;
          }
          _e && _e(n, re, j), n === "focusout" && (_e = re._wrapperState) && _e.controlled && re.type === "number" && Jn(re, "number", re.value);
        }
        switch (_e = j ? yl(j) : window, n) {
          case "focusin":
            (kv(_e) || _e.contentEditable === "true") && (ka = _e, qf = j, Cu = null);
            break;
          case "focusout":
            Cu = qf = ka = null;
            break;
          case "mousedown":
            Gf = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Gf = !1, Hv(ie, o, ae);
            break;
          case "selectionchange":
            if (Pv)
              break;
          case "keydown":
          case "keyup":
            Hv(ie, o, ae);
        }
        var je;
        if (Da)
          e: {
            switch (n) {
              case "compositionstart":
                var et = "onCompositionStart";
                break e;
              case "compositionend":
                et = "onCompositionEnd";
                break e;
              case "compositionupdate":
                et = "onCompositionUpdate";
                break e;
            }
            et = void 0;
          }
        else
          dl ? wv(n, o) && (et = "onCompositionEnd") : n === "keydown" && o.keyCode === 229 && (et = "onCompositionStart");
        et && (xv && o.locale !== "ko" && (dl || et !== "onCompositionStart" ? et === "onCompositionEnd" && dl && (je = Ff()) : (ni = ae, mu = "value" in ni ? ni.value : ni.textContent, dl = !0)), _e = Du(j, et), 0 < _e.length && (et = new jf(et, n, null, o, ae), ie.push({ event: et, listeners: _e }), je ? et.data = je : (je = Hs(o), je !== null && (et.data = je)))), (je = Ps ? My(n, o) : _y(n, o)) && (j = Du(j, "onBeforeInput"), 0 < j.length && (ae = new jf("onBeforeInput", "beforeinput", null, o, ae), ie.push({ event: ae, listeners: j }), ae.data = je));
      }
      Is(ie, r);
    });
  }
  function wu(n, r, o) {
    return { instance: n, listener: r, currentTarget: o };
  }
  function Du(n, r) {
    for (var o = r + "Capture", u = []; n !== null; ) {
      var f = n, p = f.stateNode;
      f.tag === 5 && p !== null && (f = p, p = ou(n, o), p != null && u.unshift(wu(n, p, f)), p = ou(n, r), p != null && u.push(wu(n, p, f))), n = n.return;
    }
    return u;
  }
  function go(n) {
    if (n === null)
      return null;
    do
      n = n.return;
    while (n && n.tag !== 5);
    return n || null;
  }
  function Jf(n, r, o, u, f) {
    for (var p = r._reactName, E = []; o !== null && o !== u; ) {
      var T = o, D = T.alternate, j = T.stateNode;
      if (D !== null && D === u)
        break;
      T.tag === 5 && j !== null && (T = j, f ? (D = ou(o, p), D != null && E.unshift(wu(o, D, T))) : f || (D = ou(o, p), D != null && E.push(wu(o, D, T)))), o = o.return;
    }
    E.length !== 0 && n.push({ event: r, listeners: E });
  }
  var ed = /\r\n?/g, Hy = /\u0000|\uFFFD/g;
  function td(n) {
    return (typeof n == "string" ? n : "" + n).replace(ed, `
`).replace(Hy, "");
  }
  function Ws(n, r, o) {
    if (r = td(r), td(n) !== r && o)
      throw Error(S(425));
  }
  function Ys() {
  }
  var nd = null, So = null;
  function ku(n, r) {
    return n === "textarea" || n === "noscript" || typeof r.children == "string" || typeof r.children == "number" || typeof r.dangerouslySetInnerHTML == "object" && r.dangerouslySetInnerHTML !== null && r.dangerouslySetInnerHTML.__html != null;
  }
  var Eo = typeof setTimeout == "function" ? setTimeout : void 0, Qv = typeof clearTimeout == "function" ? clearTimeout : void 0, rd = typeof Promise == "function" ? Promise : void 0, ad = typeof queueMicrotask == "function" ? queueMicrotask : typeof rd < "u" ? function(n) {
    return rd.resolve(null).then(n).catch(jy);
  } : Eo;
  function jy(n) {
    setTimeout(function() {
      throw n;
    });
  }
  function Ui(n, r) {
    var o = r, u = 0;
    do {
      var f = o.nextSibling;
      if (n.removeChild(o), f && f.nodeType === 8)
        if (o = f.data, o === "/$") {
          if (u === 0) {
            n.removeChild(f), vu(r);
            return;
          }
          u--;
        } else
          o !== "$" && o !== "$?" && o !== "$!" || u++;
      o = f;
    } while (o);
    vu(r);
  }
  function Oa(n) {
    for (; n != null; n = n.nextSibling) {
      var r = n.nodeType;
      if (r === 1 || r === 3)
        break;
      if (r === 8) {
        if (r = n.data, r === "$" || r === "$!" || r === "$?")
          break;
        if (r === "/$")
          return null;
      }
    }
    return n;
  }
  function Ou(n) {
    n = n.previousSibling;
    for (var r = 0; n; ) {
      if (n.nodeType === 8) {
        var o = n.data;
        if (o === "$" || o === "$!" || o === "$?") {
          if (r === 0)
            return n;
          r--;
        } else
          o === "/$" && r++;
      }
      n = n.previousSibling;
    }
    return null;
  }
  var Ai = Math.random().toString(36).slice(2), Fa = "__reactFiber$" + Ai, bo = "__reactProps$" + Ai, ui = "__reactContainer$" + Ai, id = "__reactEvents$" + Ai, Vy = "__reactListeners$" + Ai, od = "__reactHandles$" + Ai;
  function ra(n) {
    var r = n[Fa];
    if (r)
      return r;
    for (var o = n.parentNode; o; ) {
      if (r = o[ui] || o[Fa]) {
        if (o = r.alternate, r.child !== null || o !== null && o.child !== null)
          for (n = Ou(n); n !== null; ) {
            if (o = n[Fa])
              return o;
            n = Ou(n);
          }
        return r;
      }
      n = o, o = n.parentNode;
    }
    return null;
  }
  function Nu(n) {
    return n = n[Fa] || n[ui], !n || n.tag !== 5 && n.tag !== 6 && n.tag !== 13 && n.tag !== 3 ? null : n;
  }
  function yl(n) {
    if (n.tag === 5 || n.tag === 6)
      return n.stateNode;
    throw Error(S(33));
  }
  function Ie(n) {
    return n[bo] || null;
  }
  var Fi = [], It = -1;
  function ot(n) {
    return { current: n };
  }
  function Dt(n) {
    0 > It || (n.current = Fi[It], Fi[It] = null, It--);
  }
  function Ot(n, r) {
    It++, Fi[It] = n.current, n.current = r;
  }
  var Pa = {}, Je = ot(Pa), sn = ot(!1), Rr = Pa;
  function aa(n, r) {
    var o = n.type.contextTypes;
    if (!o)
      return Pa;
    var u = n.stateNode;
    if (u && u.__reactInternalMemoizedUnmaskedChildContext === r)
      return u.__reactInternalMemoizedMaskedChildContext;
    var f = {}, p;
    for (p in o)
      f[p] = r[p];
    return u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = r, n.__reactInternalMemoizedMaskedChildContext = f), f;
  }
  function Xt(n) {
    return n = n.childContextTypes, n != null;
  }
  function ia() {
    Dt(sn), Dt(Je);
  }
  function Pi(n, r, o) {
    if (Je.current !== Pa)
      throw Error(S(168));
    Ot(Je, r), Ot(sn, o);
  }
  function Mu(n, r, o) {
    var u = n.stateNode;
    if (r = r.childContextTypes, typeof u.getChildContext != "function")
      return o;
    u = u.getChildContext();
    for (var f in u)
      if (!(f in r))
        throw Error(S(108, dn(n) || "Unknown", f));
    return ue({}, o, u);
  }
  function Qs(n) {
    return n = (n = n.stateNode) && n.__reactInternalMemoizedMergedChildContext || Pa, Rr = Je.current, Ot(Je, n), Ot(sn, sn.current), !0;
  }
  function qv(n, r, o) {
    var u = n.stateNode;
    if (!u)
      throw Error(S(169));
    o ? (n = Mu(n, r, Rr), u.__reactInternalMemoizedMergedChildContext = n, Dt(sn), Dt(Je), Ot(Je, n)) : Dt(sn), Ot(sn, o);
  }
  var Hr = null, Un = !1, _u = !1;
  function ld(n) {
    Hr === null ? Hr = [n] : Hr.push(n);
  }
  function ud(n) {
    Un = !0, ld(n);
  }
  function wr() {
    if (!_u && Hr !== null) {
      _u = !0;
      var n = 0, r = Mt;
      try {
        var o = Hr;
        for (Mt = 1; n < o.length; n++) {
          var u = o[n];
          do
            u = u(!0);
          while (u !== null);
        }
        Hr = null, Un = !1;
      } catch (f) {
        throw Hr !== null && (Hr = Hr.slice(n + 1)), kf(ti, wr), f;
      } finally {
        Mt = r, _u = !1;
      }
    }
    return null;
  }
  var Hi = [], Dr = 0, Co = null, gl = 0, kr = [], rr = 0, oa = null, Bn = 1, si = "";
  function jr(n, r) {
    Hi[Dr++] = gl, Hi[Dr++] = Co, Co = n, gl = r;
  }
  function sd(n, r, o) {
    kr[rr++] = Bn, kr[rr++] = si, kr[rr++] = oa, oa = n;
    var u = Bn;
    n = si;
    var f = 32 - Jr(u) - 1;
    u &= ~(1 << f), o += 1;
    var p = 32 - Jr(r) + f;
    if (30 < p) {
      var E = f - f % 5;
      p = (u & (1 << E) - 1).toString(32), u >>= E, f -= E, Bn = 1 << 32 - Jr(r) + f | o << f | u, si = p + n;
    } else
      Bn = 1 << p | o << f | u, si = n;
  }
  function qs(n) {
    n.return !== null && (jr(n, 1), sd(n, 1, 0));
  }
  function cd(n) {
    for (; n === Co; )
      Co = Hi[--Dr], Hi[Dr] = null, gl = Hi[--Dr], Hi[Dr] = null;
    for (; n === oa; )
      oa = kr[--rr], kr[rr] = null, si = kr[--rr], kr[rr] = null, Bn = kr[--rr], kr[rr] = null;
  }
  var Vr = null, Or = null, $t = !1, la = null;
  function fd(n, r) {
    var o = pa(5, null, null, 0);
    o.elementType = "DELETED", o.stateNode = r, o.return = n, r = n.deletions, r === null ? (n.deletions = [o], n.flags |= 16) : r.push(o);
  }
  function Gv(n, r) {
    switch (n.tag) {
      case 5:
        var o = n.type;
        return r = r.nodeType !== 1 || o.toLowerCase() !== r.nodeName.toLowerCase() ? null : r, r !== null ? (n.stateNode = r, Vr = n, Or = Oa(r.firstChild), !0) : !1;
      case 6:
        return r = n.pendingProps === "" || r.nodeType !== 3 ? null : r, r !== null ? (n.stateNode = r, Vr = n, Or = null, !0) : !1;
      case 13:
        return r = r.nodeType !== 8 ? null : r, r !== null ? (o = oa !== null ? { id: Bn, overflow: si } : null, n.memoizedState = { dehydrated: r, treeContext: o, retryLane: 1073741824 }, o = pa(18, null, null, 0), o.stateNode = r, o.return = n, n.child = o, Vr = n, Or = null, !0) : !1;
      default:
        return !1;
    }
  }
  function Gs(n) {
    return (n.mode & 1) !== 0 && (n.flags & 128) === 0;
  }
  function Ks(n) {
    if ($t) {
      var r = Or;
      if (r) {
        var o = r;
        if (!Gv(n, r)) {
          if (Gs(n))
            throw Error(S(418));
          r = Oa(o.nextSibling);
          var u = Vr;
          r && Gv(n, r) ? fd(u, o) : (n.flags = n.flags & -4097 | 2, $t = !1, Vr = n);
        }
      } else {
        if (Gs(n))
          throw Error(S(418));
        n.flags = n.flags & -4097 | 2, $t = !1, Vr = n;
      }
    }
  }
  function Kv(n) {
    for (n = n.return; n !== null && n.tag !== 5 && n.tag !== 3 && n.tag !== 13; )
      n = n.return;
    Vr = n;
  }
  function Xs(n) {
    if (n !== Vr)
      return !1;
    if (!$t)
      return Kv(n), $t = !0, !1;
    var r;
    if ((r = n.tag !== 3) && !(r = n.tag !== 5) && (r = n.type, r = r !== "head" && r !== "body" && !ku(n.type, n.memoizedProps)), r && (r = Or)) {
      if (Gs(n))
        throw Xv(), Error(S(418));
      for (; r; )
        fd(n, r), r = Oa(r.nextSibling);
    }
    if (Kv(n), n.tag === 13) {
      if (n = n.memoizedState, n = n !== null ? n.dehydrated : null, !n)
        throw Error(S(317));
      e: {
        for (n = n.nextSibling, r = 0; n; ) {
          if (n.nodeType === 8) {
            var o = n.data;
            if (o === "/$") {
              if (r === 0) {
                Or = Oa(n.nextSibling);
                break e;
              }
              r--;
            } else
              o !== "$" && o !== "$!" && o !== "$?" || r++;
          }
          n = n.nextSibling;
        }
        Or = null;
      }
    } else
      Or = Vr ? Oa(n.stateNode.nextSibling) : null;
    return !0;
  }
  function Xv() {
    for (var n = Or; n; )
      n = Oa(n.nextSibling);
  }
  function en() {
    Or = Vr = null, $t = !1;
  }
  function dd(n) {
    la === null ? la = [n] : la.push(n);
  }
  var Zs = $.ReactCurrentBatchConfig;
  function Br(n, r) {
    if (n && n.defaultProps) {
      r = ue({}, r), n = n.defaultProps;
      for (var o in n)
        r[o] === void 0 && (r[o] = n[o]);
      return r;
    }
    return r;
  }
  var Ha = ot(null), Js = null, ji = null, pd = null;
  function vd() {
    pd = ji = Js = null;
  }
  function Vi(n) {
    var r = Ha.current;
    Dt(Ha), n._currentValue = r;
  }
  function An(n, r, o) {
    for (; n !== null; ) {
      var u = n.alternate;
      if ((n.childLanes & r) !== r ? (n.childLanes |= r, u !== null && (u.childLanes |= r)) : u !== null && (u.childLanes & r) !== r && (u.childLanes |= r), n === o)
        break;
      n = n.return;
    }
  }
  function ye(n, r) {
    Js = n, pd = ji = null, n = n.dependencies, n !== null && n.firstContext !== null && (n.lanes & r && (bn = !0), n.firstContext = null);
  }
  function pn(n) {
    var r = n._currentValue;
    if (pd !== n)
      if (n = { context: n, memoizedValue: r, next: null }, ji === null) {
        if (Js === null)
          throw Error(S(308));
        ji = n, Js.dependencies = { lanes: 0, firstContext: n };
      } else
        ji = ji.next = n;
    return r;
  }
  var In = null;
  function hd(n) {
    In === null ? In = [n] : In.push(n);
  }
  function Zv(n, r, o, u) {
    var f = r.interleaved;
    return f === null ? (o.next = o, hd(r)) : (o.next = f.next, f.next = o), r.interleaved = o, ci(n, u);
  }
  function ci(n, r) {
    n.lanes |= r;
    var o = n.alternate;
    for (o !== null && (o.lanes |= r), o = n, n = n.return; n !== null; )
      n.childLanes |= r, o = n.alternate, o !== null && (o.childLanes |= r), o = n, n = n.return;
    return o.tag === 3 ? o.stateNode : null;
  }
  var Bi = !1;
  function md(n) {
    n.updateQueue = { baseState: n.memoizedState, firstBaseUpdate: null, lastBaseUpdate: null, shared: { pending: null, interleaved: null, lanes: 0 }, effects: null };
  }
  function Rn(n, r) {
    n = n.updateQueue, r.updateQueue === n && (r.updateQueue = { baseState: n.baseState, firstBaseUpdate: n.firstBaseUpdate, lastBaseUpdate: n.lastBaseUpdate, shared: n.shared, effects: n.effects });
  }
  function fi(n, r) {
    return { eventTime: n, lane: r, tag: 0, payload: null, callback: null, next: null };
  }
  function Ii(n, r, o) {
    var u = n.updateQueue;
    if (u === null)
      return null;
    if (u = u.shared, ht & 2) {
      var f = u.pending;
      return f === null ? r.next = r : (r.next = f.next, f.next = r), u.pending = r, ci(n, o);
    }
    return f = u.interleaved, f === null ? (r.next = r, hd(u)) : (r.next = f.next, f.next = r), u.interleaved = r, ci(n, o);
  }
  function ec(n, r, o) {
    if (r = r.updateQueue, r !== null && (r = r.shared, (o & 4194240) !== 0)) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, cu(n, o);
    }
  }
  function yd(n, r) {
    var o = n.updateQueue, u = n.alternate;
    if (u !== null && (u = u.updateQueue, o === u)) {
      var f = null, p = null;
      if (o = o.firstBaseUpdate, o !== null) {
        do {
          var E = { eventTime: o.eventTime, lane: o.lane, tag: o.tag, payload: o.payload, callback: o.callback, next: null };
          p === null ? f = p = E : p = p.next = E, o = o.next;
        } while (o !== null);
        p === null ? f = p = r : p = p.next = r;
      } else
        f = p = r;
      o = { baseState: u.baseState, firstBaseUpdate: f, lastBaseUpdate: p, shared: u.shared, effects: u.effects }, n.updateQueue = o;
      return;
    }
    n = o.lastBaseUpdate, n === null ? o.firstBaseUpdate = r : n.next = r, o.lastBaseUpdate = r;
  }
  function $i(n, r, o, u) {
    var f = n.updateQueue;
    Bi = !1;
    var p = f.firstBaseUpdate, E = f.lastBaseUpdate, T = f.shared.pending;
    if (T !== null) {
      f.shared.pending = null;
      var D = T, j = D.next;
      D.next = null, E === null ? p = j : E.next = j, E = D;
      var ae = n.alternate;
      ae !== null && (ae = ae.updateQueue, T = ae.lastBaseUpdate, T !== E && (T === null ? ae.firstBaseUpdate = j : T.next = j, ae.lastBaseUpdate = D));
    }
    if (p !== null) {
      var ie = f.baseState;
      E = 0, ae = j = D = null, T = p;
      do {
        var re = T.lane, xe = T.eventTime;
        if ((u & re) === re) {
          ae !== null && (ae = ae.next = {
            eventTime: xe,
            lane: 0,
            tag: T.tag,
            payload: T.payload,
            callback: T.callback,
            next: null
          });
          e: {
            var Me = n, ze = T;
            switch (re = r, xe = o, ze.tag) {
              case 1:
                if (Me = ze.payload, typeof Me == "function") {
                  ie = Me.call(xe, ie, re);
                  break e;
                }
                ie = Me;
                break e;
              case 3:
                Me.flags = Me.flags & -65537 | 128;
              case 0:
                if (Me = ze.payload, re = typeof Me == "function" ? Me.call(xe, ie, re) : Me, re == null)
                  break e;
                ie = ue({}, ie, re);
                break e;
              case 2:
                Bi = !0;
            }
          }
          T.callback !== null && T.lane !== 0 && (n.flags |= 64, re = f.effects, re === null ? f.effects = [T] : re.push(T));
        } else
          xe = { eventTime: xe, lane: re, tag: T.tag, payload: T.payload, callback: T.callback, next: null }, ae === null ? (j = ae = xe, D = ie) : ae = ae.next = xe, E |= re;
        if (T = T.next, T === null) {
          if (T = f.shared.pending, T === null)
            break;
          re = T, T = re.next, re.next = null, f.lastBaseUpdate = re, f.shared.pending = null;
        }
      } while (1);
      if (ae === null && (D = ie), f.baseState = D, f.firstBaseUpdate = j, f.lastBaseUpdate = ae, r = f.shared.interleaved, r !== null) {
        f = r;
        do
          E |= f.lane, f = f.next;
        while (f !== r);
      } else
        p === null && (f.shared.lanes = 0);
      hi |= E, n.lanes = E, n.memoizedState = ie;
    }
  }
  function To(n, r, o) {
    if (n = r.effects, r.effects = null, n !== null)
      for (r = 0; r < n.length; r++) {
        var u = n[r], f = u.callback;
        if (f !== null) {
          if (u.callback = null, u = o, typeof f != "function")
            throw Error(S(191, f));
          f.call(u);
        }
      }
  }
  var Jv = new v.Component().refs;
  function gd(n, r, o, u) {
    r = n.memoizedState, o = o(u, r), o = o == null ? r : ue({}, r, o), n.memoizedState = o, n.lanes === 0 && (n.updateQueue.baseState = o);
  }
  var tc = { isMounted: function(n) {
    return (n = n._reactInternals) ? Aa(n) === n : !1;
  }, enqueueSetState: function(n, r, o) {
    n = n._reactInternals;
    var u = lr(), f = Cn(n), p = fi(u, f);
    p.payload = r, o != null && (p.callback = o), r = Ii(n, p, f), r !== null && (ur(r, n, f, u), ec(r, n, f));
  }, enqueueReplaceState: function(n, r, o) {
    n = n._reactInternals;
    var u = lr(), f = Cn(n), p = fi(u, f);
    p.tag = 1, p.payload = r, o != null && (p.callback = o), r = Ii(n, p, f), r !== null && (ur(r, n, f, u), ec(r, n, f));
  }, enqueueForceUpdate: function(n, r) {
    n = n._reactInternals;
    var o = lr(), u = Cn(n), f = fi(o, u);
    f.tag = 2, r != null && (f.callback = r), r = Ii(n, f, u), r !== null && (ur(r, n, u, o), ec(r, n, u));
  } };
  function eh(n, r, o, u, f, p, E) {
    return n = n.stateNode, typeof n.shouldComponentUpdate == "function" ? n.shouldComponentUpdate(u, p, E) : r.prototype && r.prototype.isPureReactComponent ? !bu(o, u) || !bu(f, p) : !0;
  }
  function th(n, r, o) {
    var u = !1, f = Pa, p = r.contextType;
    return typeof p == "object" && p !== null ? p = pn(p) : (f = Xt(r) ? Rr : Je.current, u = r.contextTypes, p = (u = u != null) ? aa(n, f) : Pa), r = new r(o, p), n.memoizedState = r.state !== null && r.state !== void 0 ? r.state : null, r.updater = tc, n.stateNode = r, r._reactInternals = n, u && (n = n.stateNode, n.__reactInternalMemoizedUnmaskedChildContext = f, n.__reactInternalMemoizedMaskedChildContext = p), r;
  }
  function nh(n, r, o, u) {
    n = r.state, typeof r.componentWillReceiveProps == "function" && r.componentWillReceiveProps(o, u), typeof r.UNSAFE_componentWillReceiveProps == "function" && r.UNSAFE_componentWillReceiveProps(o, u), r.state !== n && tc.enqueueReplaceState(r, r.state, null);
  }
  function nc(n, r, o, u) {
    var f = n.stateNode;
    f.props = o, f.state = n.memoizedState, f.refs = Jv, md(n);
    var p = r.contextType;
    typeof p == "object" && p !== null ? f.context = pn(p) : (p = Xt(r) ? Rr : Je.current, f.context = aa(n, p)), f.state = n.memoizedState, p = r.getDerivedStateFromProps, typeof p == "function" && (gd(n, r, p, o), f.state = n.memoizedState), typeof r.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (r = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), r !== f.state && tc.enqueueReplaceState(f, f.state, null), $i(n, o, f, u), f.state = n.memoizedState), typeof f.componentDidMount == "function" && (n.flags |= 4194308);
  }
  function Sl(n, r, o) {
    if (n = o.ref, n !== null && typeof n != "function" && typeof n != "object") {
      if (o._owner) {
        if (o = o._owner, o) {
          if (o.tag !== 1)
            throw Error(S(309));
          var u = o.stateNode;
        }
        if (!u)
          throw Error(S(147, n));
        var f = u, p = "" + n;
        return r !== null && r.ref !== null && typeof r.ref == "function" && r.ref._stringRef === p ? r.ref : (r = function(E) {
          var T = f.refs;
          T === Jv && (T = f.refs = {}), E === null ? delete T[p] : T[p] = E;
        }, r._stringRef = p, r);
      }
      if (typeof n != "string")
        throw Error(S(284));
      if (!o._owner)
        throw Error(S(290, n));
    }
    return n;
  }
  function rc(n, r) {
    throw n = Object.prototype.toString.call(r), Error(S(31, n === "[object Object]" ? "object with keys {" + Object.keys(r).join(", ") + "}" : n));
  }
  function rh(n) {
    var r = n._init;
    return r(n._payload);
  }
  function ah(n) {
    function r(M, O) {
      if (n) {
        var U = M.deletions;
        U === null ? (M.deletions = [O], M.flags |= 16) : U.push(O);
      }
    }
    function o(M, O) {
      if (!n)
        return null;
      for (; O !== null; )
        r(M, O), O = O.sibling;
      return null;
    }
    function u(M, O) {
      for (M = /* @__PURE__ */ new Map(); O !== null; )
        O.key !== null ? M.set(O.key, O) : M.set(O.index, O), O = O.sibling;
      return M;
    }
    function f(M, O) {
      return M = Zi(M, O), M.index = 0, M.sibling = null, M;
    }
    function p(M, O, U) {
      return M.index = U, n ? (U = M.alternate, U !== null ? (U = U.index, U < O ? (M.flags |= 2, O) : U) : (M.flags |= 2, O)) : (M.flags |= 1048576, O);
    }
    function E(M) {
      return n && M.alternate === null && (M.flags |= 2), M;
    }
    function T(M, O, U, ce) {
      return O === null || O.tag !== 6 ? (O = Xu(U, M.mode, ce), O.return = M, O) : (O = f(O, U), O.return = M, O);
    }
    function D(M, O, U, ce) {
      var Fe = U.type;
      return Fe === J ? ae(M, O, U.props.children, ce, U.key) : O !== null && (O.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === be && rh(Fe) === O.type) ? (ce = f(O, U.props), ce.ref = Sl(M, O, U), ce.return = M, ce) : (ce = Uc(U.type, U.key, U.props, null, M.mode, ce), ce.ref = Sl(M, O, U), ce.return = M, ce);
    }
    function j(M, O, U, ce) {
      return O === null || O.tag !== 4 || O.stateNode.containerInfo !== U.containerInfo || O.stateNode.implementation !== U.implementation ? (O = Bo(U, M.mode, ce), O.return = M, O) : (O = f(O, U.children || []), O.return = M, O);
    }
    function ae(M, O, U, ce, Fe) {
      return O === null || O.tag !== 7 ? (O = Vo(U, M.mode, ce, Fe), O.return = M, O) : (O = f(O, U), O.return = M, O);
    }
    function ie(M, O, U) {
      if (typeof O == "string" && O !== "" || typeof O == "number")
        return O = Xu("" + O, M.mode, U), O.return = M, O;
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case te:
            return U = Uc(O.type, O.key, O.props, null, M.mode, U), U.ref = Sl(M, null, O), U.return = M, U;
          case le:
            return O = Bo(O, M.mode, U), O.return = M, O;
          case be:
            var ce = O._init;
            return ie(M, ce(O._payload), U);
        }
        if (er(O) || fe(O))
          return O = Vo(O, M.mode, U, null), O.return = M, O;
        rc(M, O);
      }
      return null;
    }
    function re(M, O, U, ce) {
      var Fe = O !== null ? O.key : null;
      if (typeof U == "string" && U !== "" || typeof U == "number")
        return Fe !== null ? null : T(M, O, "" + U, ce);
      if (typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case te:
            return U.key === Fe ? D(M, O, U, ce) : null;
          case le:
            return U.key === Fe ? j(M, O, U, ce) : null;
          case be:
            return Fe = U._init, re(
              M,
              O,
              Fe(U._payload),
              ce
            );
        }
        if (er(U) || fe(U))
          return Fe !== null ? null : ae(M, O, U, ce, null);
        rc(M, U);
      }
      return null;
    }
    function xe(M, O, U, ce, Fe) {
      if (typeof ce == "string" && ce !== "" || typeof ce == "number")
        return M = M.get(U) || null, T(O, M, "" + ce, Fe);
      if (typeof ce == "object" && ce !== null) {
        switch (ce.$$typeof) {
          case te:
            return M = M.get(ce.key === null ? U : ce.key) || null, D(O, M, ce, Fe);
          case le:
            return M = M.get(ce.key === null ? U : ce.key) || null, j(O, M, ce, Fe);
          case be:
            var _e = ce._init;
            return xe(M, O, U, _e(ce._payload), Fe);
        }
        if (er(ce) || fe(ce))
          return M = M.get(U) || null, ae(O, M, ce, Fe, null);
        rc(O, ce);
      }
      return null;
    }
    function Me(M, O, U, ce) {
      for (var Fe = null, _e = null, je = O, et = O = 0, Hn = null; je !== null && et < U.length; et++) {
        je.index > et ? (Hn = je, je = null) : Hn = je.sibling;
        var Tt = re(M, je, U[et], ce);
        if (Tt === null) {
          je === null && (je = Hn);
          break;
        }
        n && je && Tt.alternate === null && r(M, je), O = p(Tt, O, et), _e === null ? Fe = Tt : _e.sibling = Tt, _e = Tt, je = Hn;
      }
      if (et === U.length)
        return o(M, je), $t && jr(M, et), Fe;
      if (je === null) {
        for (; et < U.length; et++)
          je = ie(M, U[et], ce), je !== null && (O = p(je, O, et), _e === null ? Fe = je : _e.sibling = je, _e = je);
        return $t && jr(M, et), Fe;
      }
      for (je = u(M, je); et < U.length; et++)
        Hn = xe(je, M, et, U[et], ce), Hn !== null && (n && Hn.alternate !== null && je.delete(Hn.key === null ? et : Hn.key), O = p(Hn, O, et), _e === null ? Fe = Hn : _e.sibling = Hn, _e = Hn);
      return n && je.forEach(function(Ji) {
        return r(M, Ji);
      }), $t && jr(M, et), Fe;
    }
    function ze(M, O, U, ce) {
      var Fe = fe(U);
      if (typeof Fe != "function")
        throw Error(S(150));
      if (U = Fe.call(U), U == null)
        throw Error(S(151));
      for (var _e = Fe = null, je = O, et = O = 0, Hn = null, Tt = U.next(); je !== null && !Tt.done; et++, Tt = U.next()) {
        je.index > et ? (Hn = je, je = null) : Hn = je.sibling;
        var Ji = re(M, je, Tt.value, ce);
        if (Ji === null) {
          je === null && (je = Hn);
          break;
        }
        n && je && Ji.alternate === null && r(M, je), O = p(Ji, O, et), _e === null ? Fe = Ji : _e.sibling = Ji, _e = Ji, je = Hn;
      }
      if (Tt.done)
        return o(
          M,
          je
        ), $t && jr(M, et), Fe;
      if (je === null) {
        for (; !Tt.done; et++, Tt = U.next())
          Tt = ie(M, Tt.value, ce), Tt !== null && (O = p(Tt, O, et), _e === null ? Fe = Tt : _e.sibling = Tt, _e = Tt);
        return $t && jr(M, et), Fe;
      }
      for (je = u(M, je); !Tt.done; et++, Tt = U.next())
        Tt = xe(je, M, et, Tt.value, ce), Tt !== null && (n && Tt.alternate !== null && je.delete(Tt.key === null ? et : Tt.key), O = p(Tt, O, et), _e === null ? Fe = Tt : _e.sibling = Tt, _e = Tt);
      return n && je.forEach(function(lg) {
        return r(M, lg);
      }), $t && jr(M, et), Fe;
    }
    function vn(M, O, U, ce) {
      if (typeof U == "object" && U !== null && U.type === J && U.key === null && (U = U.props.children), typeof U == "object" && U !== null) {
        switch (U.$$typeof) {
          case te:
            e: {
              for (var Fe = U.key, _e = O; _e !== null; ) {
                if (_e.key === Fe) {
                  if (Fe = U.type, Fe === J) {
                    if (_e.tag === 7) {
                      o(M, _e.sibling), O = f(_e, U.props.children), O.return = M, M = O;
                      break e;
                    }
                  } else if (_e.elementType === Fe || typeof Fe == "object" && Fe !== null && Fe.$$typeof === be && rh(Fe) === _e.type) {
                    o(M, _e.sibling), O = f(_e, U.props), O.ref = Sl(M, _e, U), O.return = M, M = O;
                    break e;
                  }
                  o(M, _e);
                  break;
                } else
                  r(M, _e);
                _e = _e.sibling;
              }
              U.type === J ? (O = Vo(U.props.children, M.mode, ce, U.key), O.return = M, M = O) : (ce = Uc(U.type, U.key, U.props, null, M.mode, ce), ce.ref = Sl(M, O, U), ce.return = M, M = ce);
            }
            return E(M);
          case le:
            e: {
              for (_e = U.key; O !== null; ) {
                if (O.key === _e)
                  if (O.tag === 4 && O.stateNode.containerInfo === U.containerInfo && O.stateNode.implementation === U.implementation) {
                    o(M, O.sibling), O = f(O, U.children || []), O.return = M, M = O;
                    break e;
                  } else {
                    o(M, O);
                    break;
                  }
                else
                  r(M, O);
                O = O.sibling;
              }
              O = Bo(U, M.mode, ce), O.return = M, M = O;
            }
            return E(M);
          case be:
            return _e = U._init, vn(M, O, _e(U._payload), ce);
        }
        if (er(U))
          return Me(M, O, U, ce);
        if (fe(U))
          return ze(M, O, U, ce);
        rc(M, U);
      }
      return typeof U == "string" && U !== "" || typeof U == "number" ? (U = "" + U, O !== null && O.tag === 6 ? (o(M, O.sibling), O = f(O, U), O.return = M, M = O) : (o(M, O), O = Xu(U, M.mode, ce), O.return = M, M = O), E(M)) : o(M, O);
    }
    return vn;
  }
  var El = ah(!0), ih = ah(!1), Lu = {}, Na = ot(Lu), zu = ot(Lu), bl = ot(Lu);
  function xo(n) {
    if (n === Lu)
      throw Error(S(174));
    return n;
  }
  function Sd(n, r) {
    switch (Ot(bl, r), Ot(zu, n), Ot(Na, Lu), n = r.nodeType, n) {
      case 9:
      case 11:
        r = (r = r.documentElement) ? r.namespaceURI : yn(null, "");
        break;
      default:
        n = n === 8 ? r.parentNode : r, r = n.namespaceURI || null, n = n.tagName, r = yn(r, n);
    }
    Dt(Na), Ot(Na, r);
  }
  function Wi() {
    Dt(Na), Dt(zu), Dt(bl);
  }
  function Ye(n) {
    xo(bl.current);
    var r = xo(Na.current), o = yn(r, n.type);
    r !== o && (Ot(zu, n), Ot(Na, o));
  }
  function dt(n) {
    zu.current === n && (Dt(Na), Dt(zu));
  }
  var Qe = ot(0);
  function tn(n) {
    for (var r = n; r !== null; ) {
      if (r.tag === 13) {
        var o = r.memoizedState;
        if (o !== null && (o = o.dehydrated, o === null || o.data === "$?" || o.data === "$!"))
          return r;
      } else if (r.tag === 19 && r.memoizedProps.revealOrder !== void 0) {
        if (r.flags & 128)
          return r;
      } else if (r.child !== null) {
        r.child.return = r, r = r.child;
        continue;
      }
      if (r === n)
        break;
      for (; r.sibling === null; ) {
        if (r.return === null || r.return === n)
          return null;
        r = r.return;
      }
      r.sibling.return = r.return, r = r.sibling;
    }
    return null;
  }
  var ua = [];
  function ac() {
    for (var n = 0; n < ua.length; n++)
      ua[n]._workInProgressVersionPrimary = null;
    ua.length = 0;
  }
  var ic = $.ReactCurrentDispatcher, Ed = $.ReactCurrentBatchConfig, Ro = 0, Wt = null, G = null, St = null, Ke = !1, ja = !1, Ir = 0, wo = 0;
  function Yt() {
    throw Error(S(321));
  }
  function Do(n, r) {
    if (r === null)
      return !1;
    for (var o = 0; o < r.length && o < n.length; o++)
      if (!na(n[o], r[o]))
        return !1;
    return !0;
  }
  function Yi(n, r, o, u, f, p) {
    if (Ro = p, Wt = r, r.memoizedState = null, r.updateQueue = null, r.lanes = 0, ic.current = n === null || n.memoizedState === null ? Iy : $y, n = o(u, f), ja) {
      p = 0;
      do {
        if (ja = !1, Ir = 0, 25 <= p)
          throw Error(S(301));
        p += 1, St = G = null, r.updateQueue = null, ic.current = Cd, n = o(u, f);
      } while (ja);
    }
    if (ic.current = bc, r = G !== null && G.next !== null, Ro = 0, St = G = Wt = null, Ke = !1, r)
      throw Error(S(300));
    return n;
  }
  function ko() {
    var n = Ir !== 0;
    return Ir = 0, n;
  }
  function sa() {
    var n = { memoizedState: null, baseState: null, baseQueue: null, queue: null, next: null };
    return St === null ? Wt.memoizedState = St = n : St = St.next = n, St;
  }
  function Nr() {
    if (G === null) {
      var n = Wt.alternate;
      n = n !== null ? n.memoizedState : null;
    } else
      n = G.next;
    var r = St === null ? Wt.memoizedState : St.next;
    if (r !== null)
      St = r, G = n;
    else {
      if (n === null)
        throw Error(S(310));
      G = n, n = { memoizedState: G.memoizedState, baseState: G.baseState, baseQueue: G.baseQueue, queue: G.queue, next: null }, St === null ? Wt.memoizedState = St = n : St = St.next = n;
    }
    return St;
  }
  function Oo(n, r) {
    return typeof r == "function" ? r(n) : r;
  }
  function Uu(n) {
    var r = Nr(), o = r.queue;
    if (o === null)
      throw Error(S(311));
    o.lastRenderedReducer = n;
    var u = G, f = u.baseQueue, p = o.pending;
    if (p !== null) {
      if (f !== null) {
        var E = f.next;
        f.next = p.next, p.next = E;
      }
      u.baseQueue = f = p, o.pending = null;
    }
    if (f !== null) {
      p = f.next, u = u.baseState;
      var T = E = null, D = null, j = p;
      do {
        var ae = j.lane;
        if ((Ro & ae) === ae)
          D !== null && (D = D.next = { lane: 0, action: j.action, hasEagerState: j.hasEagerState, eagerState: j.eagerState, next: null }), u = j.hasEagerState ? j.eagerState : n(u, j.action);
        else {
          var ie = {
            lane: ae,
            action: j.action,
            hasEagerState: j.hasEagerState,
            eagerState: j.eagerState,
            next: null
          };
          D === null ? (T = D = ie, E = u) : D = D.next = ie, Wt.lanes |= ae, hi |= ae;
        }
        j = j.next;
      } while (j !== null && j !== p);
      D === null ? E = u : D.next = T, na(u, r.memoizedState) || (bn = !0), r.memoizedState = u, r.baseState = E, r.baseQueue = D, o.lastRenderedState = u;
    }
    if (n = o.interleaved, n !== null) {
      f = n;
      do
        p = f.lane, Wt.lanes |= p, hi |= p, f = f.next;
      while (f !== n);
    } else
      f === null && (o.lanes = 0);
    return [r.memoizedState, o.dispatch];
  }
  function Au(n) {
    var r = Nr(), o = r.queue;
    if (o === null)
      throw Error(S(311));
    o.lastRenderedReducer = n;
    var u = o.dispatch, f = o.pending, p = r.memoizedState;
    if (f !== null) {
      o.pending = null;
      var E = f = f.next;
      do
        p = n(p, E.action), E = E.next;
      while (E !== f);
      na(p, r.memoizedState) || (bn = !0), r.memoizedState = p, r.baseQueue === null && (r.baseState = p), o.lastRenderedState = p;
    }
    return [p, u];
  }
  function oc() {
  }
  function lc(n, r) {
    var o = Wt, u = Nr(), f = r(), p = !na(u.memoizedState, f);
    if (p && (u.memoizedState = f, bn = !0), u = u.queue, Fu(cc.bind(null, o, u, n), [n]), u.getSnapshot !== r || p || St !== null && St.memoizedState.tag & 1) {
      if (o.flags |= 2048, No(9, sc.bind(null, o, u, f, r), void 0, null), nn === null)
        throw Error(S(349));
      Ro & 30 || uc(o, r, f);
    }
    return f;
  }
  function uc(n, r, o) {
    n.flags |= 16384, n = { getSnapshot: r, value: o }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.stores = [n]) : (o = r.stores, o === null ? r.stores = [n] : o.push(n));
  }
  function sc(n, r, o, u) {
    r.value = o, r.getSnapshot = u, fc(r) && dc(n);
  }
  function cc(n, r, o) {
    return o(function() {
      fc(r) && dc(n);
    });
  }
  function fc(n) {
    var r = n.getSnapshot;
    n = n.value;
    try {
      var o = r();
      return !na(n, o);
    } catch {
      return !0;
    }
  }
  function dc(n) {
    var r = ci(n, 1);
    r !== null && ur(r, n, 1, -1);
  }
  function pc(n) {
    var r = sa();
    return typeof n == "function" && (n = n()), r.memoizedState = r.baseState = n, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: Oo, lastRenderedState: n }, r.queue = n, n = n.dispatch = Ec.bind(null, Wt, n), [r.memoizedState, n];
  }
  function No(n, r, o, u) {
    return n = { tag: n, create: r, destroy: o, deps: u, next: null }, r = Wt.updateQueue, r === null ? (r = { lastEffect: null, stores: null }, Wt.updateQueue = r, r.lastEffect = n.next = n) : (o = r.lastEffect, o === null ? r.lastEffect = n.next = n : (u = o.next, o.next = n, n.next = u, r.lastEffect = n)), n;
  }
  function vc() {
    return Nr().memoizedState;
  }
  function Mo(n, r, o, u) {
    var f = sa();
    Wt.flags |= n, f.memoizedState = No(1 | r, o, void 0, u === void 0 ? null : u);
  }
  function di(n, r, o, u) {
    var f = Nr();
    u = u === void 0 ? null : u;
    var p = void 0;
    if (G !== null) {
      var E = G.memoizedState;
      if (p = E.destroy, u !== null && Do(u, E.deps)) {
        f.memoizedState = No(r, o, p, u);
        return;
      }
    }
    Wt.flags |= n, f.memoizedState = No(1 | r, o, p, u);
  }
  function hc(n, r) {
    return Mo(8390656, 8, n, r);
  }
  function Fu(n, r) {
    return di(2048, 8, n, r);
  }
  function mc(n, r) {
    return di(4, 2, n, r);
  }
  function yc(n, r) {
    return di(4, 4, n, r);
  }
  function bd(n, r) {
    if (typeof r == "function")
      return n = n(), r(n), function() {
        r(null);
      };
    if (r != null)
      return n = n(), r.current = n, function() {
        r.current = null;
      };
  }
  function Cl(n, r, o) {
    return o = o != null ? o.concat([n]) : null, di(4, 4, bd.bind(null, r, n), o);
  }
  function gc() {
  }
  function Tl(n, r) {
    var o = Nr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Do(r, u[1]) ? u[0] : (o.memoizedState = [n, r], n);
  }
  function Qi(n, r) {
    var o = Nr();
    r = r === void 0 ? null : r;
    var u = o.memoizedState;
    return u !== null && r !== null && Do(r, u[1]) ? u[0] : (n = n(), o.memoizedState = [n, r], n);
  }
  function Mr(n, r, o) {
    return Ro & 21 ? (na(o, r) || (o = ks(), Wt.lanes |= o, hi |= o, n.baseState = !0), r) : (n.baseState && (n.baseState = !1, bn = !0), n.memoizedState = o);
  }
  function By(n, r) {
    var o = Mt;
    Mt = o !== 0 && 4 > o ? o : 4, n(!0);
    var u = Ed.transition;
    Ed.transition = {};
    try {
      n(!1), r();
    } finally {
      Mt = o, Ed.transition = u;
    }
  }
  function jt() {
    return Nr().memoizedState;
  }
  function Sc(n, r, o) {
    var u = Cn(n);
    if (o = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null }, xl(n))
      Pu(r, o);
    else if (o = Zv(n, r, o, u), o !== null) {
      var f = lr();
      ur(o, n, u, f), oh(o, r, u);
    }
  }
  function Ec(n, r, o) {
    var u = Cn(n), f = { lane: u, action: o, hasEagerState: !1, eagerState: null, next: null };
    if (xl(n))
      Pu(r, f);
    else {
      var p = n.alternate;
      if (n.lanes === 0 && (p === null || p.lanes === 0) && (p = r.lastRenderedReducer, p !== null))
        try {
          var E = r.lastRenderedState, T = p(E, o);
          if (f.hasEagerState = !0, f.eagerState = T, na(T, E)) {
            var D = r.interleaved;
            D === null ? (f.next = f, hd(r)) : (f.next = D.next, D.next = f), r.interleaved = f;
            return;
          }
        } catch {
        } finally {
        }
      o = Zv(n, r, f, u), o !== null && (f = lr(), ur(o, n, u, f), oh(o, r, u));
    }
  }
  function xl(n) {
    var r = n.alternate;
    return n === Wt || r !== null && r === Wt;
  }
  function Pu(n, r) {
    ja = Ke = !0;
    var o = n.pending;
    o === null ? r.next = r : (r.next = o.next, o.next = r), n.pending = r;
  }
  function oh(n, r, o) {
    if (o & 4194240) {
      var u = r.lanes;
      u &= n.pendingLanes, o |= u, r.lanes = o, cu(n, o);
    }
  }
  var bc = { readContext: pn, useCallback: Yt, useContext: Yt, useEffect: Yt, useImperativeHandle: Yt, useInsertionEffect: Yt, useLayoutEffect: Yt, useMemo: Yt, useReducer: Yt, useRef: Yt, useState: Yt, useDebugValue: Yt, useDeferredValue: Yt, useTransition: Yt, useMutableSource: Yt, useSyncExternalStore: Yt, useId: Yt, unstable_isNewReconciler: !1 }, Iy = { readContext: pn, useCallback: function(n, r) {
    return sa().memoizedState = [n, r === void 0 ? null : r], n;
  }, useContext: pn, useEffect: hc, useImperativeHandle: function(n, r, o) {
    return o = o != null ? o.concat([n]) : null, Mo(
      4194308,
      4,
      bd.bind(null, r, n),
      o
    );
  }, useLayoutEffect: function(n, r) {
    return Mo(4194308, 4, n, r);
  }, useInsertionEffect: function(n, r) {
    return Mo(4, 2, n, r);
  }, useMemo: function(n, r) {
    var o = sa();
    return r = r === void 0 ? null : r, n = n(), o.memoizedState = [n, r], n;
  }, useReducer: function(n, r, o) {
    var u = sa();
    return r = o !== void 0 ? o(r) : r, u.memoizedState = u.baseState = r, n = { pending: null, interleaved: null, lanes: 0, dispatch: null, lastRenderedReducer: n, lastRenderedState: r }, u.queue = n, n = n.dispatch = Sc.bind(null, Wt, n), [u.memoizedState, n];
  }, useRef: function(n) {
    var r = sa();
    return n = { current: n }, r.memoizedState = n;
  }, useState: pc, useDebugValue: gc, useDeferredValue: function(n) {
    return sa().memoizedState = n;
  }, useTransition: function() {
    var n = pc(!1), r = n[0];
    return n = By.bind(null, n[1]), sa().memoizedState = n, [r, n];
  }, useMutableSource: function() {
  }, useSyncExternalStore: function(n, r, o) {
    var u = Wt, f = sa();
    if ($t) {
      if (o === void 0)
        throw Error(S(407));
      o = o();
    } else {
      if (o = r(), nn === null)
        throw Error(S(349));
      Ro & 30 || uc(u, r, o);
    }
    f.memoizedState = o;
    var p = { value: o, getSnapshot: r };
    return f.queue = p, hc(cc.bind(
      null,
      u,
      p,
      n
    ), [n]), u.flags |= 2048, No(9, sc.bind(null, u, p, o, r), void 0, null), o;
  }, useId: function() {
    var n = sa(), r = nn.identifierPrefix;
    if ($t) {
      var o = si, u = Bn;
      o = (u & ~(1 << 32 - Jr(u) - 1)).toString(32) + o, r = ":" + r + "R" + o, o = Ir++, 0 < o && (r += "H" + o.toString(32)), r += ":";
    } else
      o = wo++, r = ":" + r + "r" + o.toString(32) + ":";
    return n.memoizedState = r;
  }, unstable_isNewReconciler: !1 }, $y = {
    readContext: pn,
    useCallback: Tl,
    useContext: pn,
    useEffect: Fu,
    useImperativeHandle: Cl,
    useInsertionEffect: mc,
    useLayoutEffect: yc,
    useMemo: Qi,
    useReducer: Uu,
    useRef: vc,
    useState: function() {
      return Uu(Oo);
    },
    useDebugValue: gc,
    useDeferredValue: function(n) {
      var r = Nr();
      return Mr(r, G.memoizedState, n);
    },
    useTransition: function() {
      var n = Uu(Oo)[0], r = Nr().memoizedState;
      return [n, r];
    },
    useMutableSource: oc,
    useSyncExternalStore: lc,
    useId: jt,
    unstable_isNewReconciler: !1
  }, Cd = { readContext: pn, useCallback: Tl, useContext: pn, useEffect: Fu, useImperativeHandle: Cl, useInsertionEffect: mc, useLayoutEffect: yc, useMemo: Qi, useReducer: Au, useRef: vc, useState: function() {
    return Au(Oo);
  }, useDebugValue: gc, useDeferredValue: function(n) {
    var r = Nr();
    return G === null ? r.memoizedState = n : Mr(r, G.memoizedState, n);
  }, useTransition: function() {
    var n = Au(Oo)[0], r = Nr().memoizedState;
    return [n, r];
  }, useMutableSource: oc, useSyncExternalStore: lc, useId: jt, unstable_isNewReconciler: !1 };
  function Rl(n, r) {
    try {
      var o = "", u = r;
      do
        o += _t(u), u = u.return;
      while (u);
      var f = o;
    } catch (p) {
      f = `
Error generating stack: ` + p.message + `
` + p.stack;
    }
    return { value: n, source: r, stack: f, digest: null };
  }
  function Hu(n, r, o) {
    return { value: n, source: null, stack: o ?? null, digest: r ?? null };
  }
  function Cc(n, r) {
    try {
      console.error(r.value);
    } catch (o) {
      setTimeout(function() {
        throw o;
      });
    }
  }
  var Wy = typeof WeakMap == "function" ? WeakMap : Map;
  function lh(n, r, o) {
    o = fi(-1, o), o.tag = 3, o.payload = { element: null };
    var u = r.value;
    return o.callback = function() {
      Oc || (Oc = !0, Ao = u), Cc(n, r);
    }, o;
  }
  function ju(n, r, o) {
    o = fi(-1, o), o.tag = 3;
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = r.value;
      o.payload = function() {
        return u(f);
      }, o.callback = function() {
        Cc(n, r);
      };
    }
    var p = n.stateNode;
    return p !== null && typeof p.componentDidCatch == "function" && (o.callback = function() {
      Cc(n, r), typeof u != "function" && (Ia === null ? Ia = /* @__PURE__ */ new Set([this]) : Ia.add(this));
      var E = r.stack;
      this.componentDidCatch(r.value, { componentStack: E !== null ? E : "" });
    }), o;
  }
  function uh(n, r, o) {
    var u = n.pingCache;
    if (u === null) {
      u = n.pingCache = new Wy();
      var f = /* @__PURE__ */ new Set();
      u.set(r, f);
    } else
      f = u.get(r), f === void 0 && (f = /* @__PURE__ */ new Set(), u.set(r, f));
    f.has(o) || (f.add(o), n = Zy.bind(null, n, r, o), r.then(n, n));
  }
  function Td(n) {
    do {
      var r;
      if ((r = n.tag === 13) && (r = n.memoizedState, r = r !== null ? r.dehydrated !== null : !0), r)
        return n;
      n = n.return;
    } while (n !== null);
    return null;
  }
  function xd(n, r, o, u, f) {
    return n.mode & 1 ? (n.flags |= 65536, n.lanes = f, n) : (n === r ? n.flags |= 65536 : (n.flags |= 128, o.flags |= 131072, o.flags &= -52805, o.tag === 1 && (o.alternate === null ? o.tag = 17 : (r = fi(-1, 1), r.tag = 2, Ii(o, r, 1))), o.lanes |= 1), n);
  }
  var Yy = $.ReactCurrentOwner, bn = !1;
  function wn(n, r, o, u) {
    r.child = n === null ? ih(r, null, o, u) : El(r, n.child, o, u);
  }
  function qi(n, r, o, u, f) {
    o = o.render;
    var p = r.ref;
    return ye(r, f), u = Yi(n, r, o, u, p, f), o = ko(), n !== null && !bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, $n(n, r, f)) : ($t && o && qs(r), r.flags |= 1, wn(n, r, u, f), r.child);
  }
  function Tc(n, r, o, u, f) {
    if (n === null) {
      var p = o.type;
      return typeof p == "function" && !Id(p) && p.defaultProps === void 0 && o.compare === null && o.defaultProps === void 0 ? (r.tag = 15, r.type = p, _r(n, r, p, u, f)) : (n = Uc(o.type, null, u, r, r.mode, f), n.ref = r.ref, n.return = r, r.child = n);
    }
    if (p = n.child, !(n.lanes & f)) {
      var E = p.memoizedProps;
      if (o = o.compare, o = o !== null ? o : bu, o(E, u) && n.ref === r.ref)
        return $n(n, r, f);
    }
    return r.flags |= 1, n = Zi(p, u), n.ref = r.ref, n.return = r, r.child = n;
  }
  function _r(n, r, o, u, f) {
    if (n !== null) {
      var p = n.memoizedProps;
      if (bu(p, u) && n.ref === r.ref)
        if (bn = !1, r.pendingProps = u = p, (n.lanes & f) !== 0)
          n.flags & 131072 && (bn = !0);
        else
          return r.lanes = n.lanes, $n(n, r, f);
    }
    return wl(n, r, o, u, f);
  }
  function _o(n, r, o) {
    var u = r.pendingProps, f = u.children, p = n !== null ? n.memoizedState : null;
    if (u.mode === "hidden")
      if (!(r.mode & 1))
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, Ot(_l, $r), $r |= o;
      else {
        if (!(o & 1073741824))
          return n = p !== null ? p.baseLanes | o : o, r.lanes = r.childLanes = 1073741824, r.memoizedState = { baseLanes: n, cachePool: null, transitions: null }, r.updateQueue = null, Ot(_l, $r), $r |= n, null;
        r.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }, u = p !== null ? p.baseLanes : o, Ot(_l, $r), $r |= u;
      }
    else
      p !== null ? (u = p.baseLanes | o, r.memoizedState = null) : u = o, Ot(_l, $r), $r |= u;
    return wn(n, r, f, o), r.child;
  }
  function lt(n, r) {
    var o = r.ref;
    (n === null && o !== null || n !== null && n.ref !== o) && (r.flags |= 512, r.flags |= 2097152);
  }
  function wl(n, r, o, u, f) {
    var p = Xt(o) ? Rr : Je.current;
    return p = aa(r, p), ye(r, f), o = Yi(n, r, o, u, p, f), u = ko(), n !== null && !bn ? (r.updateQueue = n.updateQueue, r.flags &= -2053, n.lanes &= ~f, $n(n, r, f)) : ($t && u && qs(r), r.flags |= 1, wn(n, r, o, f), r.child);
  }
  function Rd(n, r, o, u, f) {
    if (Xt(o)) {
      var p = !0;
      Qs(r);
    } else
      p = !1;
    if (ye(r, f), r.stateNode === null)
      ar(n, r), th(r, o, u), nc(r, o, u, f), u = !0;
    else if (n === null) {
      var E = r.stateNode, T = r.memoizedProps;
      E.props = T;
      var D = E.context, j = o.contextType;
      typeof j == "object" && j !== null ? j = pn(j) : (j = Xt(o) ? Rr : Je.current, j = aa(r, j));
      var ae = o.getDerivedStateFromProps, ie = typeof ae == "function" || typeof E.getSnapshotBeforeUpdate == "function";
      ie || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (T !== u || D !== j) && nh(r, E, u, j), Bi = !1;
      var re = r.memoizedState;
      E.state = re, $i(r, u, E, f), D = r.memoizedState, T !== u || re !== D || sn.current || Bi ? (typeof ae == "function" && (gd(r, o, ae, u), D = r.memoizedState), (T = Bi || eh(r, o, T, u, re, D, j)) ? (ie || typeof E.UNSAFE_componentWillMount != "function" && typeof E.componentWillMount != "function" || (typeof E.componentWillMount == "function" && E.componentWillMount(), typeof E.UNSAFE_componentWillMount == "function" && E.UNSAFE_componentWillMount()), typeof E.componentDidMount == "function" && (r.flags |= 4194308)) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), r.memoizedProps = u, r.memoizedState = D), E.props = u, E.state = D, E.context = j, u = T) : (typeof E.componentDidMount == "function" && (r.flags |= 4194308), u = !1);
    } else {
      E = r.stateNode, Rn(n, r), T = r.memoizedProps, j = r.type === r.elementType ? T : Br(r.type, T), E.props = j, ie = r.pendingProps, re = E.context, D = o.contextType, typeof D == "object" && D !== null ? D = pn(D) : (D = Xt(o) ? Rr : Je.current, D = aa(r, D));
      var xe = o.getDerivedStateFromProps;
      (ae = typeof xe == "function" || typeof E.getSnapshotBeforeUpdate == "function") || typeof E.UNSAFE_componentWillReceiveProps != "function" && typeof E.componentWillReceiveProps != "function" || (T !== ie || re !== D) && nh(r, E, u, D), Bi = !1, re = r.memoizedState, E.state = re, $i(r, u, E, f);
      var Me = r.memoizedState;
      T !== ie || re !== Me || sn.current || Bi ? (typeof xe == "function" && (gd(r, o, xe, u), Me = r.memoizedState), (j = Bi || eh(r, o, j, u, re, Me, D) || !1) ? (ae || typeof E.UNSAFE_componentWillUpdate != "function" && typeof E.componentWillUpdate != "function" || (typeof E.componentWillUpdate == "function" && E.componentWillUpdate(u, Me, D), typeof E.UNSAFE_componentWillUpdate == "function" && E.UNSAFE_componentWillUpdate(u, Me, D)), typeof E.componentDidUpdate == "function" && (r.flags |= 4), typeof E.getSnapshotBeforeUpdate == "function" && (r.flags |= 1024)) : (typeof E.componentDidUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), r.memoizedProps = u, r.memoizedState = Me), E.props = u, E.state = Me, E.context = D, u = j) : (typeof E.componentDidUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 4), typeof E.getSnapshotBeforeUpdate != "function" || T === n.memoizedProps && re === n.memoizedState || (r.flags |= 1024), u = !1);
    }
    return sh(n, r, o, u, p, f);
  }
  function sh(n, r, o, u, f, p) {
    lt(n, r);
    var E = (r.flags & 128) !== 0;
    if (!u && !E)
      return f && qv(r, o, !1), $n(n, r, p);
    u = r.stateNode, Yy.current = r;
    var T = E && typeof o.getDerivedStateFromError != "function" ? null : u.render();
    return r.flags |= 1, n !== null && E ? (r.child = El(r, n.child, null, p), r.child = El(r, null, T, p)) : wn(n, r, T, p), r.memoizedState = u.state, f && qv(r, o, !0), r.child;
  }
  function ch(n) {
    var r = n.stateNode;
    r.pendingContext ? Pi(n, r.pendingContext, r.pendingContext !== r.context) : r.context && Pi(n, r.context, !1), Sd(n, r.containerInfo);
  }
  function xc(n, r, o, u, f) {
    return en(), dd(f), r.flags |= 256, wn(n, r, o, u), r.child;
  }
  var Lo = { dehydrated: null, treeContext: null, retryLane: 0 };
  function wd(n) {
    return { baseLanes: n, cachePool: null, transitions: null };
  }
  function Dd(n, r, o) {
    var u = r.pendingProps, f = Qe.current, p = !1, E = (r.flags & 128) !== 0, T;
    if ((T = E) || (T = n !== null && n.memoizedState === null ? !1 : (f & 2) !== 0), T ? (p = !0, r.flags &= -129) : (n === null || n.memoizedState !== null) && (f |= 1), Ot(Qe, f & 1), n === null)
      return Ks(r), n = r.memoizedState, n !== null && (n = n.dehydrated, n !== null) ? (r.mode & 1 ? n.data === "$!" ? r.lanes = 8 : r.lanes = 1073741824 : r.lanes = 1, null) : (E = u.children, n = u.fallback, p ? (u = r.mode, p = r.child, E = { mode: "hidden", children: E }, !(u & 1) && p !== null ? (p.childLanes = 0, p.pendingProps = E) : p = Ku(E, u, 0, null), n = Vo(n, u, o, null), p.return = r, n.return = r, p.sibling = n, r.child = p, r.child.memoizedState = wd(o), r.memoizedState = Lo, n) : kd(r, E));
    if (f = n.memoizedState, f !== null && (T = f.dehydrated, T !== null))
      return Qy(n, r, E, u, T, f, o);
    if (p) {
      p = u.fallback, E = r.mode, f = n.child, T = f.sibling;
      var D = { mode: "hidden", children: u.children };
      return !(E & 1) && r.child !== f ? (u = r.child, u.childLanes = 0, u.pendingProps = D, r.deletions = null) : (u = Zi(f, D), u.subtreeFlags = f.subtreeFlags & 14680064), T !== null ? p = Zi(T, p) : (p = Vo(p, E, o, null), p.flags |= 2), p.return = r, u.return = r, u.sibling = p, r.child = u, u = p, p = r.child, E = n.child.memoizedState, E = E === null ? wd(o) : { baseLanes: E.baseLanes | o, cachePool: null, transitions: E.transitions }, p.memoizedState = E, p.childLanes = n.childLanes & ~o, r.memoizedState = Lo, u;
    }
    return p = n.child, n = p.sibling, u = Zi(p, { mode: "visible", children: u.children }), !(r.mode & 1) && (u.lanes = o), u.return = r, u.sibling = null, n !== null && (o = r.deletions, o === null ? (r.deletions = [n], r.flags |= 16) : o.push(n)), r.child = u, r.memoizedState = null, u;
  }
  function kd(n, r) {
    return r = Ku({ mode: "visible", children: r }, n.mode, 0, null), r.return = n, n.child = r;
  }
  function Dl(n, r, o, u) {
    return u !== null && dd(u), El(r, n.child, null, o), n = kd(r, r.pendingProps.children), n.flags |= 2, r.memoizedState = null, n;
  }
  function Qy(n, r, o, u, f, p, E) {
    if (o)
      return r.flags & 256 ? (r.flags &= -257, u = Hu(Error(S(422))), Dl(n, r, E, u)) : r.memoizedState !== null ? (r.child = n.child, r.flags |= 128, null) : (p = u.fallback, f = r.mode, u = Ku({ mode: "visible", children: u.children }, f, 0, null), p = Vo(p, f, E, null), p.flags |= 2, u.return = r, p.return = r, u.sibling = p, r.child = u, r.mode & 1 && El(r, n.child, null, E), r.child.memoizedState = wd(E), r.memoizedState = Lo, p);
    if (!(r.mode & 1))
      return Dl(n, r, E, null);
    if (f.data === "$!") {
      if (u = f.nextSibling && f.nextSibling.dataset, u)
        var T = u.dgst;
      return u = T, p = Error(S(419)), u = Hu(p, u, void 0), Dl(n, r, E, u);
    }
    if (T = (E & n.childLanes) !== 0, bn || T) {
      if (u = nn, u !== null) {
        switch (E & -E) {
          case 4:
            f = 2;
            break;
          case 16:
            f = 8;
            break;
          case 64:
          case 128:
          case 256:
          case 512:
          case 1024:
          case 2048:
          case 4096:
          case 8192:
          case 16384:
          case 32768:
          case 65536:
          case 131072:
          case 262144:
          case 524288:
          case 1048576:
          case 2097152:
          case 4194304:
          case 8388608:
          case 16777216:
          case 33554432:
          case 67108864:
            f = 32;
            break;
          case 536870912:
            f = 268435456;
            break;
          default:
            f = 0;
        }
        f = f & (u.suspendedLanes | E) ? 0 : f, f !== 0 && f !== p.retryLane && (p.retryLane = f, ci(n, f), ur(u, n, f, -1));
      }
      return jd(), u = Hu(Error(S(421))), Dl(n, r, E, u);
    }
    return f.data === "$?" ? (r.flags |= 128, r.child = n.child, r = Jy.bind(null, n), f._reactRetry = r, null) : (n = p.treeContext, Or = Oa(f.nextSibling), Vr = r, $t = !0, la = null, n !== null && (kr[rr++] = Bn, kr[rr++] = si, kr[rr++] = oa, Bn = n.id, si = n.overflow, oa = r), r = kd(r, u.children), r.flags |= 4096, r);
  }
  function Od(n, r, o) {
    n.lanes |= r;
    var u = n.alternate;
    u !== null && (u.lanes |= r), An(n.return, r, o);
  }
  function Rc(n, r, o, u, f) {
    var p = n.memoizedState;
    p === null ? n.memoizedState = { isBackwards: r, rendering: null, renderingStartTime: 0, last: u, tail: o, tailMode: f } : (p.isBackwards = r, p.rendering = null, p.renderingStartTime = 0, p.last = u, p.tail = o, p.tailMode = f);
  }
  function Nd(n, r, o) {
    var u = r.pendingProps, f = u.revealOrder, p = u.tail;
    if (wn(n, r, u.children, o), u = Qe.current, u & 2)
      u = u & 1 | 2, r.flags |= 128;
    else {
      if (n !== null && n.flags & 128)
        e:
          for (n = r.child; n !== null; ) {
            if (n.tag === 13)
              n.memoizedState !== null && Od(n, o, r);
            else if (n.tag === 19)
              Od(n, o, r);
            else if (n.child !== null) {
              n.child.return = n, n = n.child;
              continue;
            }
            if (n === r)
              break e;
            for (; n.sibling === null; ) {
              if (n.return === null || n.return === r)
                break e;
              n = n.return;
            }
            n.sibling.return = n.return, n = n.sibling;
          }
      u &= 1;
    }
    if (Ot(Qe, u), !(r.mode & 1))
      r.memoizedState = null;
    else
      switch (f) {
        case "forwards":
          for (o = r.child, f = null; o !== null; )
            n = o.alternate, n !== null && tn(n) === null && (f = o), o = o.sibling;
          o = f, o === null ? (f = r.child, r.child = null) : (f = o.sibling, o.sibling = null), Rc(r, !1, f, o, p);
          break;
        case "backwards":
          for (o = null, f = r.child, r.child = null; f !== null; ) {
            if (n = f.alternate, n !== null && tn(n) === null) {
              r.child = f;
              break;
            }
            n = f.sibling, f.sibling = o, o = f, f = n;
          }
          Rc(r, !0, o, null, p);
          break;
        case "together":
          Rc(r, !1, null, null, void 0);
          break;
        default:
          r.memoizedState = null;
      }
    return r.child;
  }
  function ar(n, r) {
    !(r.mode & 1) && n !== null && (n.alternate = null, r.alternate = null, r.flags |= 2);
  }
  function $n(n, r, o) {
    if (n !== null && (r.dependencies = n.dependencies), hi |= r.lanes, !(o & r.childLanes))
      return null;
    if (n !== null && r.child !== n.child)
      throw Error(S(153));
    if (r.child !== null) {
      for (n = r.child, o = Zi(n, n.pendingProps), r.child = o, o.return = r; n.sibling !== null; )
        n = n.sibling, o = o.sibling = Zi(n, n.pendingProps), o.return = r;
      o.sibling = null;
    }
    return r.child;
  }
  function pi(n, r, o) {
    switch (r.tag) {
      case 3:
        ch(r), en();
        break;
      case 5:
        Ye(r);
        break;
      case 1:
        Xt(r.type) && Qs(r);
        break;
      case 4:
        Sd(r, r.stateNode.containerInfo);
        break;
      case 10:
        var u = r.type._context, f = r.memoizedProps.value;
        Ot(Ha, u._currentValue), u._currentValue = f;
        break;
      case 13:
        if (u = r.memoizedState, u !== null)
          return u.dehydrated !== null ? (Ot(Qe, Qe.current & 1), r.flags |= 128, null) : o & r.child.childLanes ? Dd(n, r, o) : (Ot(Qe, Qe.current & 1), n = $n(n, r, o), n !== null ? n.sibling : null);
        Ot(Qe, Qe.current & 1);
        break;
      case 19:
        if (u = (o & r.childLanes) !== 0, n.flags & 128) {
          if (u)
            return Nd(n, r, o);
          r.flags |= 128;
        }
        if (f = r.memoizedState, f !== null && (f.rendering = null, f.tail = null, f.lastEffect = null), Ot(Qe, Qe.current), u)
          break;
        return null;
      case 22:
      case 23:
        return r.lanes = 0, _o(n, r, o);
    }
    return $n(n, r, o);
  }
  var Vu, zo, ca, Dn;
  Vu = function(n, r) {
    for (var o = r.child; o !== null; ) {
      if (o.tag === 5 || o.tag === 6)
        n.appendChild(o.stateNode);
      else if (o.tag !== 4 && o.child !== null) {
        o.child.return = o, o = o.child;
        continue;
      }
      if (o === r)
        break;
      for (; o.sibling === null; ) {
        if (o.return === null || o.return === r)
          return;
        o = o.return;
      }
      o.sibling.return = o.return, o = o.sibling;
    }
  }, zo = function() {
  }, ca = function(n, r, o, u) {
    var f = n.memoizedProps;
    if (f !== u) {
      n = r.stateNode, xo(Na.current);
      var p = null;
      switch (o) {
        case "input":
          f = tt(n, f), u = tt(n, u), p = [];
          break;
        case "select":
          f = ue({}, f, { value: void 0 }), u = ue({}, u, { value: void 0 }), p = [];
          break;
        case "textarea":
          f = _n(n, f), u = _n(n, u), p = [];
          break;
        default:
          typeof f.onClick != "function" && typeof u.onClick == "function" && (n.onclick = Ys);
      }
      Ct(o, u);
      var E;
      o = null;
      for (j in f)
        if (!u.hasOwnProperty(j) && f.hasOwnProperty(j) && f[j] != null)
          if (j === "style") {
            var T = f[j];
            for (E in T)
              T.hasOwnProperty(E) && (o || (o = {}), o[E] = "");
          } else
            j !== "dangerouslySetInnerHTML" && j !== "children" && j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && j !== "autoFocus" && (w.hasOwnProperty(j) ? p || (p = []) : (p = p || []).push(j, null));
      for (j in u) {
        var D = u[j];
        if (T = f != null ? f[j] : void 0, u.hasOwnProperty(j) && D !== T && (D != null || T != null))
          if (j === "style")
            if (T) {
              for (E in T)
                !T.hasOwnProperty(E) || D && D.hasOwnProperty(E) || (o || (o = {}), o[E] = "");
              for (E in D)
                D.hasOwnProperty(E) && T[E] !== D[E] && (o || (o = {}), o[E] = D[E]);
            } else
              o || (p || (p = []), p.push(
                j,
                o
              )), o = D;
          else
            j === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, T = T ? T.__html : void 0, D != null && T !== D && (p = p || []).push(j, D)) : j === "children" ? typeof D != "string" && typeof D != "number" || (p = p || []).push(j, "" + D) : j !== "suppressContentEditableWarning" && j !== "suppressHydrationWarning" && (w.hasOwnProperty(j) ? (D != null && j === "onScroll" && Ht("scroll", n), p || T === D || (p = [])) : (p = p || []).push(j, D));
      }
      o && (p = p || []).push("style", o);
      var j = p;
      (r.updateQueue = j) && (r.flags |= 4);
    }
  }, Dn = function(n, r, o, u) {
    o !== u && (r.flags |= 4);
  };
  function Bu(n, r) {
    if (!$t)
      switch (n.tailMode) {
        case "hidden":
          r = n.tail;
          for (var o = null; r !== null; )
            r.alternate !== null && (o = r), r = r.sibling;
          o === null ? n.tail = null : o.sibling = null;
          break;
        case "collapsed":
          o = n.tail;
          for (var u = null; o !== null; )
            o.alternate !== null && (u = o), o = o.sibling;
          u === null ? r || n.tail === null ? n.tail = null : n.tail.sibling = null : u.sibling = null;
      }
  }
  function ir(n) {
    var r = n.alternate !== null && n.alternate.child === n.child, o = 0, u = 0;
    if (r)
      for (var f = n.child; f !== null; )
        o |= f.lanes | f.childLanes, u |= f.subtreeFlags & 14680064, u |= f.flags & 14680064, f.return = n, f = f.sibling;
    else
      for (f = n.child; f !== null; )
        o |= f.lanes | f.childLanes, u |= f.subtreeFlags, u |= f.flags, f.return = n, f = f.sibling;
    return n.subtreeFlags |= u, n.childLanes = o, r;
  }
  function qy(n, r, o) {
    var u = r.pendingProps;
    switch (cd(r), r.tag) {
      case 2:
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return ir(r), null;
      case 1:
        return Xt(r.type) && ia(), ir(r), null;
      case 3:
        return u = r.stateNode, Wi(), Dt(sn), Dt(Je), ac(), u.pendingContext && (u.context = u.pendingContext, u.pendingContext = null), (n === null || n.child === null) && (Xs(r) ? r.flags |= 4 : n === null || n.memoizedState.isDehydrated && !(r.flags & 256) || (r.flags |= 1024, la !== null && (Gu(la), la = null))), zo(n, r), ir(r), null;
      case 5:
        dt(r);
        var f = xo(bl.current);
        if (o = r.type, n !== null && r.stateNode != null)
          ca(n, r, o, u, f), n.ref !== r.ref && (r.flags |= 512, r.flags |= 2097152);
        else {
          if (!u) {
            if (r.stateNode === null)
              throw Error(S(166));
            return ir(r), null;
          }
          if (n = xo(Na.current), Xs(r)) {
            u = r.stateNode, o = r.type;
            var p = r.memoizedProps;
            switch (u[Fa] = r, u[bo] = p, n = (r.mode & 1) !== 0, o) {
              case "dialog":
                Ht("cancel", u), Ht("close", u);
                break;
              case "iframe":
              case "object":
              case "embed":
                Ht("load", u);
                break;
              case "video":
              case "audio":
                for (f = 0; f < Ru.length; f++)
                  Ht(Ru[f], u);
                break;
              case "source":
                Ht("error", u);
                break;
              case "img":
              case "image":
              case "link":
                Ht(
                  "error",
                  u
                ), Ht("load", u);
                break;
              case "details":
                Ht("toggle", u);
                break;
              case "input":
                pt(u, p), Ht("invalid", u);
                break;
              case "select":
                u._wrapperState = { wasMultiple: !!p.multiple }, Ht("invalid", u);
                break;
              case "textarea":
                Kt(u, p), Ht("invalid", u);
            }
            Ct(o, p), f = null;
            for (var E in p)
              if (p.hasOwnProperty(E)) {
                var T = p[E];
                E === "children" ? typeof T == "string" ? u.textContent !== T && (p.suppressHydrationWarning !== !0 && Ws(u.textContent, T, n), f = ["children", T]) : typeof T == "number" && u.textContent !== "" + T && (p.suppressHydrationWarning !== !0 && Ws(
                  u.textContent,
                  T,
                  n
                ), f = ["children", "" + T]) : w.hasOwnProperty(E) && T != null && E === "onScroll" && Ht("scroll", u);
              }
            switch (o) {
              case "input":
                at(u), mn(u, p, !0);
                break;
              case "textarea":
                at(u), Vn(u);
                break;
              case "select":
              case "option":
                break;
              default:
                typeof p.onClick == "function" && (u.onclick = Ys);
            }
            u = f, r.updateQueue = u, u !== null && (r.flags |= 4);
          } else {
            E = f.nodeType === 9 ? f : f.ownerDocument, n === "http://www.w3.org/1999/xhtml" && (n = Tr(o)), n === "http://www.w3.org/1999/xhtml" ? o === "script" ? (n = E.createElement("div"), n.innerHTML = "<script><\/script>", n = n.removeChild(n.firstChild)) : typeof u.is == "string" ? n = E.createElement(o, { is: u.is }) : (n = E.createElement(o), o === "select" && (E = n, u.multiple ? E.multiple = !0 : u.size && (E.size = u.size))) : n = E.createElementNS(n, o), n[Fa] = r, n[bo] = u, Vu(n, r, !1, !1), r.stateNode = n;
            e: {
              switch (E = Vt(o, u), o) {
                case "dialog":
                  Ht("cancel", n), Ht("close", n), f = u;
                  break;
                case "iframe":
                case "object":
                case "embed":
                  Ht("load", n), f = u;
                  break;
                case "video":
                case "audio":
                  for (f = 0; f < Ru.length; f++)
                    Ht(Ru[f], n);
                  f = u;
                  break;
                case "source":
                  Ht("error", n), f = u;
                  break;
                case "img":
                case "image":
                case "link":
                  Ht(
                    "error",
                    n
                  ), Ht("load", n), f = u;
                  break;
                case "details":
                  Ht("toggle", n), f = u;
                  break;
                case "input":
                  pt(n, u), f = tt(n, u), Ht("invalid", n);
                  break;
                case "option":
                  f = u;
                  break;
                case "select":
                  n._wrapperState = { wasMultiple: !!u.multiple }, f = ue({}, u, { value: void 0 }), Ht("invalid", n);
                  break;
                case "textarea":
                  Kt(n, u), f = _n(n, u), Ht("invalid", n);
                  break;
                default:
                  f = u;
              }
              Ct(o, f), T = f;
              for (p in T)
                if (T.hasOwnProperty(p)) {
                  var D = T[p];
                  p === "style" ? he(n, D) : p === "dangerouslySetInnerHTML" ? (D = D ? D.__html : void 0, D != null && Ca(n, D)) : p === "children" ? typeof D == "string" ? (o !== "textarea" || D !== "") && tr(n, D) : typeof D == "number" && tr(n, "" + D) : p !== "suppressContentEditableWarning" && p !== "suppressHydrationWarning" && p !== "autoFocus" && (w.hasOwnProperty(p) ? D != null && p === "onScroll" && Ht("scroll", n) : D != null && B(n, p, D, E));
                }
              switch (o) {
                case "input":
                  at(n), mn(n, u, !1);
                  break;
                case "textarea":
                  at(n), Vn(n);
                  break;
                case "option":
                  u.value != null && n.setAttribute("value", "" + Bt(u.value));
                  break;
                case "select":
                  n.multiple = !!u.multiple, p = u.value, p != null ? Lt(n, !!u.multiple, p, !1) : u.defaultValue != null && Lt(
                    n,
                    !!u.multiple,
                    u.defaultValue,
                    !0
                  );
                  break;
                default:
                  typeof f.onClick == "function" && (n.onclick = Ys);
              }
              switch (o) {
                case "button":
                case "input":
                case "select":
                case "textarea":
                  u = !!u.autoFocus;
                  break e;
                case "img":
                  u = !0;
                  break e;
                default:
                  u = !1;
              }
            }
            u && (r.flags |= 4);
          }
          r.ref !== null && (r.flags |= 512, r.flags |= 2097152);
        }
        return ir(r), null;
      case 6:
        if (n && r.stateNode != null)
          Dn(n, r, n.memoizedProps, u);
        else {
          if (typeof u != "string" && r.stateNode === null)
            throw Error(S(166));
          if (o = xo(bl.current), xo(Na.current), Xs(r)) {
            if (u = r.stateNode, o = r.memoizedProps, u[Fa] = r, (p = u.nodeValue !== o) && (n = Vr, n !== null))
              switch (n.tag) {
                case 3:
                  Ws(u.nodeValue, o, (n.mode & 1) !== 0);
                  break;
                case 5:
                  n.memoizedProps.suppressHydrationWarning !== !0 && Ws(u.nodeValue, o, (n.mode & 1) !== 0);
              }
            p && (r.flags |= 4);
          } else
            u = (o.nodeType === 9 ? o : o.ownerDocument).createTextNode(u), u[Fa] = r, r.stateNode = u;
        }
        return ir(r), null;
      case 13:
        if (Dt(Qe), u = r.memoizedState, n === null || n.memoizedState !== null && n.memoizedState.dehydrated !== null) {
          if ($t && Or !== null && r.mode & 1 && !(r.flags & 128))
            Xv(), en(), r.flags |= 98560, p = !1;
          else if (p = Xs(r), u !== null && u.dehydrated !== null) {
            if (n === null) {
              if (!p)
                throw Error(S(318));
              if (p = r.memoizedState, p = p !== null ? p.dehydrated : null, !p)
                throw Error(S(317));
              p[Fa] = r;
            } else
              en(), !(r.flags & 128) && (r.memoizedState = null), r.flags |= 4;
            ir(r), p = !1;
          } else
            la !== null && (Gu(la), la = null), p = !0;
          if (!p)
            return r.flags & 65536 ? r : null;
        }
        return r.flags & 128 ? (r.lanes = o, r) : (u = u !== null, u !== (n !== null && n.memoizedState !== null) && u && (r.child.flags |= 8192, r.mode & 1 && (n === null || Qe.current & 1 ? On === 0 && (On = 3) : jd())), r.updateQueue !== null && (r.flags |= 4), ir(r), null);
      case 4:
        return Wi(), zo(n, r), n === null && ml(r.stateNode.containerInfo), ir(r), null;
      case 10:
        return Vi(r.type._context), ir(r), null;
      case 17:
        return Xt(r.type) && ia(), ir(r), null;
      case 19:
        if (Dt(Qe), p = r.memoizedState, p === null)
          return ir(r), null;
        if (u = (r.flags & 128) !== 0, E = p.rendering, E === null)
          if (u)
            Bu(p, !1);
          else {
            if (On !== 0 || n !== null && n.flags & 128)
              for (n = r.child; n !== null; ) {
                if (E = tn(n), E !== null) {
                  for (r.flags |= 128, Bu(p, !1), u = E.updateQueue, u !== null && (r.updateQueue = u, r.flags |= 4), r.subtreeFlags = 0, u = o, o = r.child; o !== null; )
                    p = o, n = u, p.flags &= 14680066, E = p.alternate, E === null ? (p.childLanes = 0, p.lanes = n, p.child = null, p.subtreeFlags = 0, p.memoizedProps = null, p.memoizedState = null, p.updateQueue = null, p.dependencies = null, p.stateNode = null) : (p.childLanes = E.childLanes, p.lanes = E.lanes, p.child = E.child, p.subtreeFlags = 0, p.deletions = null, p.memoizedProps = E.memoizedProps, p.memoizedState = E.memoizedState, p.updateQueue = E.updateQueue, p.type = E.type, n = E.dependencies, p.dependencies = n === null ? null : { lanes: n.lanes, firstContext: n.firstContext }), o = o.sibling;
                  return Ot(Qe, Qe.current & 1 | 2), r.child;
                }
                n = n.sibling;
              }
            p.tail !== null && un() > zl && (r.flags |= 128, u = !0, Bu(p, !1), r.lanes = 4194304);
          }
        else {
          if (!u)
            if (n = tn(E), n !== null) {
              if (r.flags |= 128, u = !0, o = n.updateQueue, o !== null && (r.updateQueue = o, r.flags |= 4), Bu(p, !0), p.tail === null && p.tailMode === "hidden" && !E.alternate && !$t)
                return ir(r), null;
            } else
              2 * un() - p.renderingStartTime > zl && o !== 1073741824 && (r.flags |= 128, u = !0, Bu(p, !1), r.lanes = 4194304);
          p.isBackwards ? (E.sibling = r.child, r.child = E) : (o = p.last, o !== null ? o.sibling = E : r.child = E, p.last = E);
        }
        return p.tail !== null ? (r = p.tail, p.rendering = r, p.tail = r.sibling, p.renderingStartTime = un(), r.sibling = null, o = Qe.current, Ot(Qe, u ? o & 1 | 2 : o & 1), r) : (ir(r), null);
      case 22:
      case 23:
        return Hd(), u = r.memoizedState !== null, n !== null && n.memoizedState !== null !== u && (r.flags |= 8192), u && r.mode & 1 ? $r & 1073741824 && (ir(r), r.subtreeFlags & 6 && (r.flags |= 8192)) : ir(r), null;
      case 24:
        return null;
      case 25:
        return null;
    }
    throw Error(S(156, r.tag));
  }
  function Md(n, r) {
    switch (cd(r), r.tag) {
      case 1:
        return Xt(r.type) && ia(), n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 3:
        return Wi(), Dt(sn), Dt(Je), ac(), n = r.flags, n & 65536 && !(n & 128) ? (r.flags = n & -65537 | 128, r) : null;
      case 5:
        return dt(r), null;
      case 13:
        if (Dt(Qe), n = r.memoizedState, n !== null && n.dehydrated !== null) {
          if (r.alternate === null)
            throw Error(S(340));
          en();
        }
        return n = r.flags, n & 65536 ? (r.flags = n & -65537 | 128, r) : null;
      case 19:
        return Dt(Qe), null;
      case 4:
        return Wi(), null;
      case 10:
        return Vi(r.type._context), null;
      case 22:
      case 23:
        return Hd(), null;
      case 24:
        return null;
      default:
        return null;
    }
  }
  var Iu = !1, kn = !1, fh = typeof WeakSet == "function" ? WeakSet : Set, Oe = null;
  function kl(n, r) {
    var o = n.ref;
    if (o !== null)
      if (typeof o == "function")
        try {
          o(null);
        } catch (u) {
          fn(n, r, u);
        }
      else
        o.current = null;
  }
  function $u(n, r, o) {
    try {
      o();
    } catch (u) {
      fn(n, r, u);
    }
  }
  var dh = !1;
  function ph(n, r) {
    if (nd = vo, n = js(), ii(n)) {
      if ("selectionStart" in n)
        var o = { start: n.selectionStart, end: n.selectionEnd };
      else
        e: {
          o = (o = n.ownerDocument) && o.defaultView || window;
          var u = o.getSelection && o.getSelection();
          if (u && u.rangeCount !== 0) {
            o = u.anchorNode;
            var f = u.anchorOffset, p = u.focusNode;
            u = u.focusOffset;
            try {
              o.nodeType, p.nodeType;
            } catch {
              o = null;
              break e;
            }
            var E = 0, T = -1, D = -1, j = 0, ae = 0, ie = n, re = null;
            t:
              for (; ; ) {
                for (var xe; ie !== o || f !== 0 && ie.nodeType !== 3 || (T = E + f), ie !== p || u !== 0 && ie.nodeType !== 3 || (D = E + u), ie.nodeType === 3 && (E += ie.nodeValue.length), (xe = ie.firstChild) !== null; )
                  re = ie, ie = xe;
                for (; ; ) {
                  if (ie === n)
                    break t;
                  if (re === o && ++j === f && (T = E), re === p && ++ae === u && (D = E), (xe = ie.nextSibling) !== null)
                    break;
                  ie = re, re = ie.parentNode;
                }
                ie = xe;
              }
            o = T === -1 || D === -1 ? null : { start: T, end: D };
          } else
            o = null;
        }
      o = o || { start: 0, end: 0 };
    } else
      o = null;
    for (So = { focusedElem: n, selectionRange: o }, vo = !1, Oe = r; Oe !== null; )
      if (r = Oe, n = r.child, (r.subtreeFlags & 1028) !== 0 && n !== null)
        n.return = r, Oe = n;
      else
        for (; Oe !== null; ) {
          r = Oe;
          try {
            var Me = r.alternate;
            if (r.flags & 1024)
              switch (r.tag) {
                case 0:
                case 11:
                case 15:
                  break;
                case 1:
                  if (Me !== null) {
                    var ze = Me.memoizedProps, vn = Me.memoizedState, M = r.stateNode, O = M.getSnapshotBeforeUpdate(r.elementType === r.type ? ze : Br(r.type, ze), vn);
                    M.__reactInternalSnapshotBeforeUpdate = O;
                  }
                  break;
                case 3:
                  var U = r.stateNode.containerInfo;
                  U.nodeType === 1 ? U.textContent = "" : U.nodeType === 9 && U.documentElement && U.removeChild(U.documentElement);
                  break;
                case 5:
                case 6:
                case 4:
                case 17:
                  break;
                default:
                  throw Error(S(163));
              }
          } catch (ce) {
            fn(r, r.return, ce);
          }
          if (n = r.sibling, n !== null) {
            n.return = r.return, Oe = n;
            break;
          }
          Oe = r.return;
        }
    return Me = dh, dh = !1, Me;
  }
  function Wu(n, r, o) {
    var u = r.updateQueue;
    if (u = u !== null ? u.lastEffect : null, u !== null) {
      var f = u = u.next;
      do {
        if ((f.tag & n) === n) {
          var p = f.destroy;
          f.destroy = void 0, p !== void 0 && $u(r, o, p);
        }
        f = f.next;
      } while (f !== u);
    }
  }
  function Yu(n, r) {
    if (r = r.updateQueue, r = r !== null ? r.lastEffect : null, r !== null) {
      var o = r = r.next;
      do {
        if ((o.tag & n) === n) {
          var u = o.create;
          o.destroy = u();
        }
        o = o.next;
      } while (o !== r);
    }
  }
  function _d(n) {
    var r = n.ref;
    if (r !== null) {
      var o = n.stateNode;
      switch (n.tag) {
        case 5:
          n = o;
          break;
        default:
          n = o;
      }
      typeof r == "function" ? r(n) : r.current = n;
    }
  }
  function Ld(n) {
    var r = n.alternate;
    r !== null && (n.alternate = null, Ld(r)), n.child = null, n.deletions = null, n.sibling = null, n.tag === 5 && (r = n.stateNode, r !== null && (delete r[Fa], delete r[bo], delete r[id], delete r[Vy], delete r[od])), n.stateNode = null, n.return = null, n.dependencies = null, n.memoizedProps = null, n.memoizedState = null, n.pendingProps = null, n.stateNode = null, n.updateQueue = null;
  }
  function vh(n) {
    return n.tag === 5 || n.tag === 3 || n.tag === 4;
  }
  function wc(n) {
    e:
      for (; ; ) {
        for (; n.sibling === null; ) {
          if (n.return === null || vh(n.return))
            return null;
          n = n.return;
        }
        for (n.sibling.return = n.return, n = n.sibling; n.tag !== 5 && n.tag !== 6 && n.tag !== 18; ) {
          if (n.flags & 2 || n.child === null || n.tag === 4)
            continue e;
          n.child.return = n, n = n.child;
        }
        if (!(n.flags & 2))
          return n.stateNode;
      }
  }
  function Ol(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.nodeType === 8 ? o.parentNode.insertBefore(n, r) : o.insertBefore(n, r) : (o.nodeType === 8 ? (r = o.parentNode, r.insertBefore(n, o)) : (r = o, r.appendChild(n)), o = o._reactRootContainer, o != null || r.onclick !== null || (r.onclick = Ys));
    else if (u !== 4 && (n = n.child, n !== null))
      for (Ol(n, r, o), n = n.sibling; n !== null; )
        Ol(n, r, o), n = n.sibling;
  }
  function Va(n, r, o) {
    var u = n.tag;
    if (u === 5 || u === 6)
      n = n.stateNode, r ? o.insertBefore(n, r) : o.appendChild(n);
    else if (u !== 4 && (n = n.child, n !== null))
      for (Va(n, r, o), n = n.sibling; n !== null; )
        Va(n, r, o), n = n.sibling;
  }
  var Zt = null, Fn = !1;
  function fa(n, r, o) {
    for (o = o.child; o !== null; )
      Nl(n, r, o), o = o.sibling;
  }
  function Nl(n, r, o) {
    if (xa && typeof xa.onCommitFiberUnmount == "function")
      try {
        xa.onCommitFiberUnmount(su, o);
      } catch {
      }
    switch (o.tag) {
      case 5:
        kn || kl(o, r);
      case 6:
        var u = Zt, f = Fn;
        Zt = null, fa(n, r, o), Zt = u, Fn = f, Zt !== null && (Fn ? (n = Zt, o = o.stateNode, n.nodeType === 8 ? n.parentNode.removeChild(o) : n.removeChild(o)) : Zt.removeChild(o.stateNode));
        break;
      case 18:
        Zt !== null && (Fn ? (n = Zt, o = o.stateNode, n.nodeType === 8 ? Ui(n.parentNode, o) : n.nodeType === 1 && Ui(n, o), vu(n)) : Ui(Zt, o.stateNode));
        break;
      case 4:
        u = Zt, f = Fn, Zt = o.stateNode.containerInfo, Fn = !0, fa(n, r, o), Zt = u, Fn = f;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        if (!kn && (u = o.updateQueue, u !== null && (u = u.lastEffect, u !== null))) {
          f = u = u.next;
          do {
            var p = f, E = p.destroy;
            p = p.tag, E !== void 0 && (p & 2 || p & 4) && $u(o, r, E), f = f.next;
          } while (f !== u);
        }
        fa(n, r, o);
        break;
      case 1:
        if (!kn && (kl(o, r), u = o.stateNode, typeof u.componentWillUnmount == "function"))
          try {
            u.props = o.memoizedProps, u.state = o.memoizedState, u.componentWillUnmount();
          } catch (T) {
            fn(o, r, T);
          }
        fa(n, r, o);
        break;
      case 21:
        fa(n, r, o);
        break;
      case 22:
        o.mode & 1 ? (kn = (u = kn) || o.memoizedState !== null, fa(n, r, o), kn = u) : fa(n, r, o);
        break;
      default:
        fa(n, r, o);
    }
  }
  function vi(n) {
    var r = n.updateQueue;
    if (r !== null) {
      n.updateQueue = null;
      var o = n.stateNode;
      o === null && (o = n.stateNode = new fh()), r.forEach(function(u) {
        var f = eg.bind(null, n, u);
        o.has(u) || (o.add(u), u.then(f, f));
      });
    }
  }
  function Ma(n, r) {
    var o = r.deletions;
    if (o !== null)
      for (var u = 0; u < o.length; u++) {
        var f = o[u];
        try {
          var p = n, E = r, T = E;
          e:
            for (; T !== null; ) {
              switch (T.tag) {
                case 5:
                  Zt = T.stateNode, Fn = !1;
                  break e;
                case 3:
                  Zt = T.stateNode.containerInfo, Fn = !0;
                  break e;
                case 4:
                  Zt = T.stateNode.containerInfo, Fn = !0;
                  break e;
              }
              T = T.return;
            }
          if (Zt === null)
            throw Error(S(160));
          Nl(p, E, f), Zt = null, Fn = !1;
          var D = f.alternate;
          D !== null && (D.return = null), f.return = null;
        } catch (j) {
          fn(f, r, j);
        }
      }
    if (r.subtreeFlags & 12854)
      for (r = r.child; r !== null; )
        hh(r, n), r = r.sibling;
  }
  function hh(n, r) {
    var o = n.alternate, u = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (Ma(r, n), Ba(n), u & 4) {
          try {
            Wu(3, n, n.return), Yu(3, n);
          } catch (ze) {
            fn(n, n.return, ze);
          }
          try {
            Wu(5, n, n.return);
          } catch (ze) {
            fn(n, n.return, ze);
          }
        }
        break;
      case 1:
        Ma(r, n), Ba(n), u & 512 && o !== null && kl(o, o.return);
        break;
      case 5:
        if (Ma(r, n), Ba(n), u & 512 && o !== null && kl(o, o.return), n.flags & 32) {
          var f = n.stateNode;
          try {
            tr(f, "");
          } catch (ze) {
            fn(n, n.return, ze);
          }
        }
        if (u & 4 && (f = n.stateNode, f != null)) {
          var p = n.memoizedProps, E = o !== null ? o.memoizedProps : p, T = n.type, D = n.updateQueue;
          if (n.updateQueue = null, D !== null)
            try {
              T === "input" && p.type === "radio" && p.name != null && Jt(f, p), Vt(T, E);
              var j = Vt(T, p);
              for (E = 0; E < D.length; E += 2) {
                var ae = D[E], ie = D[E + 1];
                ae === "style" ? he(f, ie) : ae === "dangerouslySetInnerHTML" ? Ca(f, ie) : ae === "children" ? tr(f, ie) : B(f, ae, ie, j);
              }
              switch (T) {
                case "input":
                  Gt(f, p);
                  break;
                case "textarea":
                  zt(f, p);
                  break;
                case "select":
                  var re = f._wrapperState.wasMultiple;
                  f._wrapperState.wasMultiple = !!p.multiple;
                  var xe = p.value;
                  xe != null ? Lt(f, !!p.multiple, xe, !1) : re !== !!p.multiple && (p.defaultValue != null ? Lt(
                    f,
                    !!p.multiple,
                    p.defaultValue,
                    !0
                  ) : Lt(f, !!p.multiple, p.multiple ? [] : "", !1));
              }
              f[bo] = p;
            } catch (ze) {
              fn(n, n.return, ze);
            }
        }
        break;
      case 6:
        if (Ma(r, n), Ba(n), u & 4) {
          if (n.stateNode === null)
            throw Error(S(162));
          f = n.stateNode, p = n.memoizedProps;
          try {
            f.nodeValue = p;
          } catch (ze) {
            fn(n, n.return, ze);
          }
        }
        break;
      case 3:
        if (Ma(r, n), Ba(n), u & 4 && o !== null && o.memoizedState.isDehydrated)
          try {
            vu(r.containerInfo);
          } catch (ze) {
            fn(n, n.return, ze);
          }
        break;
      case 4:
        Ma(r, n), Ba(n);
        break;
      case 13:
        Ma(r, n), Ba(n), f = n.child, f.flags & 8192 && (p = f.memoizedState !== null, f.stateNode.isHidden = p, !p || f.alternate !== null && f.alternate.memoizedState !== null || (Ad = un())), u & 4 && vi(n);
        break;
      case 22:
        if (ae = o !== null && o.memoizedState !== null, n.mode & 1 ? (kn = (j = kn) || ae, Ma(r, n), kn = j) : Ma(r, n), Ba(n), u & 8192) {
          if (j = n.memoizedState !== null, (n.stateNode.isHidden = j) && !ae && n.mode & 1)
            for (Oe = n, ae = n.child; ae !== null; ) {
              for (ie = Oe = ae; Oe !== null; ) {
                switch (re = Oe, xe = re.child, re.tag) {
                  case 0:
                  case 11:
                  case 14:
                  case 15:
                    Wu(4, re, re.return);
                    break;
                  case 1:
                    kl(re, re.return);
                    var Me = re.stateNode;
                    if (typeof Me.componentWillUnmount == "function") {
                      u = re, o = re.return;
                      try {
                        r = u, Me.props = r.memoizedProps, Me.state = r.memoizedState, Me.componentWillUnmount();
                      } catch (ze) {
                        fn(u, o, ze);
                      }
                    }
                    break;
                  case 5:
                    kl(re, re.return);
                    break;
                  case 22:
                    if (re.memoizedState !== null) {
                      zd(ie);
                      continue;
                    }
                }
                xe !== null ? (xe.return = re, Oe = xe) : zd(ie);
              }
              ae = ae.sibling;
            }
          e:
            for (ae = null, ie = n; ; ) {
              if (ie.tag === 5) {
                if (ae === null) {
                  ae = ie;
                  try {
                    f = ie.stateNode, j ? (p = f.style, typeof p.setProperty == "function" ? p.setProperty("display", "none", "important") : p.display = "none") : (T = ie.stateNode, D = ie.memoizedProps.style, E = D != null && D.hasOwnProperty("display") ? D.display : null, T.style.display = ft("display", E));
                  } catch (ze) {
                    fn(n, n.return, ze);
                  }
                }
              } else if (ie.tag === 6) {
                if (ae === null)
                  try {
                    ie.stateNode.nodeValue = j ? "" : ie.memoizedProps;
                  } catch (ze) {
                    fn(n, n.return, ze);
                  }
              } else if ((ie.tag !== 22 && ie.tag !== 23 || ie.memoizedState === null || ie === n) && ie.child !== null) {
                ie.child.return = ie, ie = ie.child;
                continue;
              }
              if (ie === n)
                break e;
              for (; ie.sibling === null; ) {
                if (ie.return === null || ie.return === n)
                  break e;
                ae === ie && (ae = null), ie = ie.return;
              }
              ae === ie && (ae = null), ie.sibling.return = ie.return, ie = ie.sibling;
            }
        }
        break;
      case 19:
        Ma(r, n), Ba(n), u & 4 && vi(n);
        break;
      case 21:
        break;
      default:
        Ma(
          r,
          n
        ), Ba(n);
    }
  }
  function Ba(n) {
    var r = n.flags;
    if (r & 2) {
      try {
        e: {
          for (var o = n.return; o !== null; ) {
            if (vh(o)) {
              var u = o;
              break e;
            }
            o = o.return;
          }
          throw Error(S(160));
        }
        switch (u.tag) {
          case 5:
            var f = u.stateNode;
            u.flags & 32 && (tr(f, ""), u.flags &= -33);
            var p = wc(n);
            Va(n, p, f);
            break;
          case 3:
          case 4:
            var E = u.stateNode.containerInfo, T = wc(n);
            Ol(n, T, E);
            break;
          default:
            throw Error(S(161));
        }
      } catch (D) {
        fn(n, n.return, D);
      }
      n.flags &= -3;
    }
    r & 4096 && (n.flags &= -4097);
  }
  function mh(n, r, o) {
    Oe = n, Ml(n);
  }
  function Ml(n, r, o) {
    for (var u = (n.mode & 1) !== 0; Oe !== null; ) {
      var f = Oe, p = f.child;
      if (f.tag === 22 && u) {
        var E = f.memoizedState !== null || Iu;
        if (!E) {
          var T = f.alternate, D = T !== null && T.memoizedState !== null || kn;
          T = Iu;
          var j = kn;
          if (Iu = E, (kn = D) && !j)
            for (Oe = f; Oe !== null; )
              E = Oe, D = E.child, E.tag === 22 && E.memoizedState !== null ? gh(f) : D !== null ? (D.return = E, Oe = D) : gh(f);
          for (; p !== null; )
            Oe = p, Ml(p), p = p.sibling;
          Oe = f, Iu = T, kn = j;
        }
        yh(n);
      } else
        f.subtreeFlags & 8772 && p !== null ? (p.return = f, Oe = p) : yh(n);
    }
  }
  function yh(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      if (r.flags & 8772) {
        var o = r.alternate;
        try {
          if (r.flags & 8772)
            switch (r.tag) {
              case 0:
              case 11:
              case 15:
                kn || Yu(5, r);
                break;
              case 1:
                var u = r.stateNode;
                if (r.flags & 4 && !kn)
                  if (o === null)
                    u.componentDidMount();
                  else {
                    var f = r.elementType === r.type ? o.memoizedProps : Br(r.type, o.memoizedProps);
                    u.componentDidUpdate(f, o.memoizedState, u.__reactInternalSnapshotBeforeUpdate);
                  }
                var p = r.updateQueue;
                p !== null && To(r, p, u);
                break;
              case 3:
                var E = r.updateQueue;
                if (E !== null) {
                  if (o = null, r.child !== null)
                    switch (r.child.tag) {
                      case 5:
                        o = r.child.stateNode;
                        break;
                      case 1:
                        o = r.child.stateNode;
                    }
                  To(r, E, o);
                }
                break;
              case 5:
                var T = r.stateNode;
                if (o === null && r.flags & 4) {
                  o = T;
                  var D = r.memoizedProps;
                  switch (r.type) {
                    case "button":
                    case "input":
                    case "select":
                    case "textarea":
                      D.autoFocus && o.focus();
                      break;
                    case "img":
                      D.src && (o.src = D.src);
                  }
                }
                break;
              case 6:
                break;
              case 4:
                break;
              case 12:
                break;
              case 13:
                if (r.memoizedState === null) {
                  var j = r.alternate;
                  if (j !== null) {
                    var ae = j.memoizedState;
                    if (ae !== null) {
                      var ie = ae.dehydrated;
                      ie !== null && vu(ie);
                    }
                  }
                }
                break;
              case 19:
              case 17:
              case 21:
              case 22:
              case 23:
              case 25:
                break;
              default:
                throw Error(S(163));
            }
          kn || r.flags & 512 && _d(r);
        } catch (re) {
          fn(r, r.return, re);
        }
      }
      if (r === n) {
        Oe = null;
        break;
      }
      if (o = r.sibling, o !== null) {
        o.return = r.return, Oe = o;
        break;
      }
      Oe = r.return;
    }
  }
  function zd(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      if (r === n) {
        Oe = null;
        break;
      }
      var o = r.sibling;
      if (o !== null) {
        o.return = r.return, Oe = o;
        break;
      }
      Oe = r.return;
    }
  }
  function gh(n) {
    for (; Oe !== null; ) {
      var r = Oe;
      try {
        switch (r.tag) {
          case 0:
          case 11:
          case 15:
            var o = r.return;
            try {
              Yu(4, r);
            } catch (D) {
              fn(r, o, D);
            }
            break;
          case 1:
            var u = r.stateNode;
            if (typeof u.componentDidMount == "function") {
              var f = r.return;
              try {
                u.componentDidMount();
              } catch (D) {
                fn(r, f, D);
              }
            }
            var p = r.return;
            try {
              _d(r);
            } catch (D) {
              fn(r, p, D);
            }
            break;
          case 5:
            var E = r.return;
            try {
              _d(r);
            } catch (D) {
              fn(r, E, D);
            }
        }
      } catch (D) {
        fn(r, r.return, D);
      }
      if (r === n) {
        Oe = null;
        break;
      }
      var T = r.sibling;
      if (T !== null) {
        T.return = r.return, Oe = T;
        break;
      }
      Oe = r.return;
    }
  }
  var Dc = Math.ceil, Qu = $.ReactCurrentDispatcher, Ud = $.ReactCurrentOwner, or = $.ReactCurrentBatchConfig, ht = 0, nn = null, cn = null, Pn = 0, $r = 0, _l = ot(0), On = 0, qu = null, hi = 0, kc = 0, Ll = 0, Uo = null, pr = null, Ad = 0, zl = 1 / 0, mi = null, Oc = !1, Ao = null, Ia = null, Gi = !1, Ki = null, Nc = 0, Ul = 0, Mc = null, Fo = -1, Po = 0;
  function lr() {
    return ht & 6 ? un() : Fo !== -1 ? Fo : Fo = un();
  }
  function Cn(n) {
    return n.mode & 1 ? ht & 2 && Pn !== 0 ? Pn & -Pn : Zs.transition !== null ? (Po === 0 && (Po = ks()), Po) : (n = Mt, n !== 0 || (n = window.event, n = n === void 0 ? 16 : Af(n.type)), n) : 1;
  }
  function ur(n, r, o, u) {
    if (50 < Ul)
      throw Ul = 0, Mc = null, Error(S(185));
    po(n, o, u), (!(ht & 2) || n !== nn) && (n === nn && (!(ht & 2) && (kc |= o), On === 4 && da(n, Pn)), sr(n, u), o === 1 && ht === 0 && !(r.mode & 1) && (zl = un() + 500, Un && wr()));
  }
  function sr(n, r) {
    var o = n.callbackNode;
    Ds(n, r);
    var u = Ra(n, n === nn ? Pn : 0);
    if (u === 0)
      o !== null && iv(o), n.callbackNode = null, n.callbackPriority = 0;
    else if (r = u & -u, n.callbackPriority !== r) {
      if (o != null && iv(o), r === 1)
        n.tag === 0 ? ud(Sh.bind(null, n)) : ld(Sh.bind(null, n)), ad(function() {
          !(ht & 6) && wr();
        }), o = null;
      else {
        switch (Lf(u)) {
          case 1:
            o = ti;
            break;
          case 4:
            o = vt;
            break;
          case 16:
            o = Ni;
            break;
          case 536870912:
            o = Of;
            break;
          default:
            o = Ni;
        }
        o = Bd(o, Al.bind(null, n));
      }
      n.callbackPriority = r, n.callbackNode = o;
    }
  }
  function Al(n, r) {
    if (Fo = -1, Po = 0, ht & 6)
      throw Error(S(327));
    var o = n.callbackNode;
    if (Pl() && n.callbackNode !== o)
      return null;
    var u = Ra(n, n === nn ? Pn : 0);
    if (u === 0)
      return null;
    if (u & 30 || u & n.expiredLanes || r)
      r = Lc(n, u);
    else {
      r = u;
      var f = ht;
      ht |= 2;
      var p = _c();
      (nn !== n || Pn !== r) && (mi = null, zl = un() + 500, Ho(n, r));
      do
        try {
          Ky();
          break;
        } catch (T) {
          Eh(n, T);
        }
      while (1);
      vd(), Qu.current = p, ht = f, cn !== null ? r = 0 : (nn = null, Pn = 0, r = On);
    }
    if (r !== 0) {
      if (r === 2 && (f = Mf(n), f !== 0 && (u = f, r = Fd(n, f))), r === 1)
        throw o = qu, Ho(n, 0), da(n, u), sr(n, un()), o;
      if (r === 6)
        da(n, u);
      else {
        if (f = n.current.alternate, !(u & 30) && !Pd(f) && (r = Lc(n, u), r === 2 && (p = Mf(n), p !== 0 && (u = p, r = Fd(n, p))), r === 1))
          throw o = qu, Ho(n, 0), da(n, u), sr(n, un()), o;
        switch (n.finishedWork = f, n.finishedLanes = u, r) {
          case 0:
          case 1:
            throw Error(S(345));
          case 2:
            jo(n, pr, mi);
            break;
          case 3:
            if (da(n, u), (u & 130023424) === u && (r = Ad + 500 - un(), 10 < r)) {
              if (Ra(n, 0) !== 0)
                break;
              if (f = n.suspendedLanes, (f & u) !== u) {
                lr(), n.pingedLanes |= n.suspendedLanes & f;
                break;
              }
              n.timeoutHandle = Eo(jo.bind(null, n, pr, mi), r);
              break;
            }
            jo(n, pr, mi);
            break;
          case 4:
            if (da(n, u), (u & 4194240) === u)
              break;
            for (r = n.eventTimes, f = -1; 0 < u; ) {
              var E = 31 - Jr(u);
              p = 1 << E, E = r[E], E > f && (f = E), u &= ~p;
            }
            if (u = f, u = un() - u, u = (120 > u ? 120 : 480 > u ? 480 : 1080 > u ? 1080 : 1920 > u ? 1920 : 3e3 > u ? 3e3 : 4320 > u ? 4320 : 1960 * Dc(u / 1960)) - u, 10 < u) {
              n.timeoutHandle = Eo(jo.bind(null, n, pr, mi), u);
              break;
            }
            jo(n, pr, mi);
            break;
          case 5:
            jo(n, pr, mi);
            break;
          default:
            throw Error(S(329));
        }
      }
    }
    return sr(n, un()), n.callbackNode === o ? Al.bind(null, n) : null;
  }
  function Fd(n, r) {
    var o = Uo;
    return n.current.memoizedState.isDehydrated && (Ho(n, r).flags |= 256), n = Lc(n, r), n !== 2 && (r = pr, pr = o, r !== null && Gu(r)), n;
  }
  function Gu(n) {
    pr === null ? pr = n : pr.push.apply(pr, n);
  }
  function Pd(n) {
    for (var r = n; ; ) {
      if (r.flags & 16384) {
        var o = r.updateQueue;
        if (o !== null && (o = o.stores, o !== null))
          for (var u = 0; u < o.length; u++) {
            var f = o[u], p = f.getSnapshot;
            f = f.value;
            try {
              if (!na(p(), f))
                return !1;
            } catch {
              return !1;
            }
          }
      }
      if (o = r.child, r.subtreeFlags & 16384 && o !== null)
        o.return = r, r = o;
      else {
        if (r === n)
          break;
        for (; r.sibling === null; ) {
          if (r.return === null || r.return === n)
            return !0;
          r = r.return;
        }
        r.sibling.return = r.return, r = r.sibling;
      }
    }
    return !0;
  }
  function da(n, r) {
    for (r &= ~Ll, r &= ~kc, n.suspendedLanes |= r, n.pingedLanes &= ~r, n = n.expirationTimes; 0 < r; ) {
      var o = 31 - Jr(r), u = 1 << o;
      n[o] = -1, r &= ~u;
    }
  }
  function Sh(n) {
    if (ht & 6)
      throw Error(S(327));
    Pl();
    var r = Ra(n, 0);
    if (!(r & 1))
      return sr(n, un()), null;
    var o = Lc(n, r);
    if (n.tag !== 0 && o === 2) {
      var u = Mf(n);
      u !== 0 && (r = u, o = Fd(n, u));
    }
    if (o === 1)
      throw o = qu, Ho(n, 0), da(n, r), sr(n, un()), o;
    if (o === 6)
      throw Error(S(345));
    return n.finishedWork = n.current.alternate, n.finishedLanes = r, jo(n, pr, mi), sr(n, un()), null;
  }
  function Fl(n, r) {
    var o = ht;
    ht |= 1;
    try {
      return n(r);
    } finally {
      ht = o, ht === 0 && (zl = un() + 500, Un && wr());
    }
  }
  function Xi(n) {
    Ki !== null && Ki.tag === 0 && !(ht & 6) && Pl();
    var r = ht;
    ht |= 1;
    var o = or.transition, u = Mt;
    try {
      if (or.transition = null, Mt = 1, n)
        return n();
    } finally {
      Mt = u, or.transition = o, ht = r, !(ht & 6) && wr();
    }
  }
  function Hd() {
    $r = _l.current, Dt(_l);
  }
  function Ho(n, r) {
    n.finishedWork = null, n.finishedLanes = 0;
    var o = n.timeoutHandle;
    if (o !== -1 && (n.timeoutHandle = -1, Qv(o)), cn !== null)
      for (o = cn.return; o !== null; ) {
        var u = o;
        switch (cd(u), u.tag) {
          case 1:
            u = u.type.childContextTypes, u != null && ia();
            break;
          case 3:
            Wi(), Dt(sn), Dt(Je), ac();
            break;
          case 5:
            dt(u);
            break;
          case 4:
            Wi();
            break;
          case 13:
            Dt(Qe);
            break;
          case 19:
            Dt(Qe);
            break;
          case 10:
            Vi(u.type._context);
            break;
          case 22:
          case 23:
            Hd();
        }
        o = o.return;
      }
    if (nn = n, cn = n = Zi(n.current, null), Pn = $r = r, On = 0, qu = null, Ll = kc = hi = 0, pr = Uo = null, In !== null) {
      for (r = 0; r < In.length; r++)
        if (o = In[r], u = o.interleaved, u !== null) {
          o.interleaved = null;
          var f = u.next, p = o.pending;
          if (p !== null) {
            var E = p.next;
            p.next = f, u.next = E;
          }
          o.pending = u;
        }
      In = null;
    }
    return n;
  }
  function Eh(n, r) {
    do {
      var o = cn;
      try {
        if (vd(), ic.current = bc, Ke) {
          for (var u = Wt.memoizedState; u !== null; ) {
            var f = u.queue;
            f !== null && (f.pending = null), u = u.next;
          }
          Ke = !1;
        }
        if (Ro = 0, St = G = Wt = null, ja = !1, Ir = 0, Ud.current = null, o === null || o.return === null) {
          On = 1, qu = r, cn = null;
          break;
        }
        e: {
          var p = n, E = o.return, T = o, D = r;
          if (r = Pn, T.flags |= 32768, D !== null && typeof D == "object" && typeof D.then == "function") {
            var j = D, ae = T, ie = ae.tag;
            if (!(ae.mode & 1) && (ie === 0 || ie === 11 || ie === 15)) {
              var re = ae.alternate;
              re ? (ae.updateQueue = re.updateQueue, ae.memoizedState = re.memoizedState, ae.lanes = re.lanes) : (ae.updateQueue = null, ae.memoizedState = null);
            }
            var xe = Td(E);
            if (xe !== null) {
              xe.flags &= -257, xd(xe, E, T, p, r), xe.mode & 1 && uh(p, j, r), r = xe, D = j;
              var Me = r.updateQueue;
              if (Me === null) {
                var ze = /* @__PURE__ */ new Set();
                ze.add(D), r.updateQueue = ze;
              } else
                Me.add(D);
              break e;
            } else {
              if (!(r & 1)) {
                uh(p, j, r), jd();
                break e;
              }
              D = Error(S(426));
            }
          } else if ($t && T.mode & 1) {
            var vn = Td(E);
            if (vn !== null) {
              !(vn.flags & 65536) && (vn.flags |= 256), xd(vn, E, T, p, r), dd(Rl(D, T));
              break e;
            }
          }
          p = D = Rl(D, T), On !== 4 && (On = 2), Uo === null ? Uo = [p] : Uo.push(p), p = E;
          do {
            switch (p.tag) {
              case 3:
                p.flags |= 65536, r &= -r, p.lanes |= r;
                var M = lh(p, D, r);
                yd(p, M);
                break e;
              case 1:
                T = D;
                var O = p.type, U = p.stateNode;
                if (!(p.flags & 128) && (typeof O.getDerivedStateFromError == "function" || U !== null && typeof U.componentDidCatch == "function" && (Ia === null || !Ia.has(U)))) {
                  p.flags |= 65536, r &= -r, p.lanes |= r;
                  var ce = ju(p, T, r);
                  yd(p, ce);
                  break e;
                }
            }
            p = p.return;
          } while (p !== null);
        }
        Vd(o);
      } catch (Fe) {
        r = Fe, cn === o && o !== null && (cn = o = o.return);
        continue;
      }
      break;
    } while (1);
  }
  function _c() {
    var n = Qu.current;
    return Qu.current = bc, n === null ? bc : n;
  }
  function jd() {
    (On === 0 || On === 3 || On === 2) && (On = 4), nn === null || !(hi & 268435455) && !(kc & 268435455) || da(nn, Pn);
  }
  function Lc(n, r) {
    var o = ht;
    ht |= 2;
    var u = _c();
    (nn !== n || Pn !== r) && (mi = null, Ho(n, r));
    do
      try {
        Gy();
        break;
      } catch (f) {
        Eh(n, f);
      }
    while (1);
    if (vd(), ht = o, Qu.current = u, cn !== null)
      throw Error(S(261));
    return nn = null, Pn = 0, On;
  }
  function Gy() {
    for (; cn !== null; )
      bh(cn);
  }
  function Ky() {
    for (; cn !== null && !Sy(); )
      bh(cn);
  }
  function bh(n) {
    var r = Th(n.alternate, n, $r);
    n.memoizedProps = n.pendingProps, r === null ? Vd(n) : cn = r, Ud.current = null;
  }
  function Vd(n) {
    var r = n;
    do {
      var o = r.alternate;
      if (n = r.return, r.flags & 32768) {
        if (o = Md(o, r), o !== null) {
          o.flags &= 32767, cn = o;
          return;
        }
        if (n !== null)
          n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null;
        else {
          On = 6, cn = null;
          return;
        }
      } else if (o = qy(o, r, $r), o !== null) {
        cn = o;
        return;
      }
      if (r = r.sibling, r !== null) {
        cn = r;
        return;
      }
      cn = r = n;
    } while (r !== null);
    On === 0 && (On = 5);
  }
  function jo(n, r, o) {
    var u = Mt, f = or.transition;
    try {
      or.transition = null, Mt = 1, Xy(n, r, o, u);
    } finally {
      or.transition = f, Mt = u;
    }
    return null;
  }
  function Xy(n, r, o, u) {
    do
      Pl();
    while (Ki !== null);
    if (ht & 6)
      throw Error(S(327));
    o = n.finishedWork;
    var f = n.finishedLanes;
    if (o === null)
      return null;
    if (n.finishedWork = null, n.finishedLanes = 0, o === n.current)
      throw Error(S(177));
    n.callbackNode = null, n.callbackPriority = 0;
    var p = o.lanes | o.childLanes;
    if (Ty(n, p), n === nn && (cn = nn = null, Pn = 0), !(o.subtreeFlags & 2064) && !(o.flags & 2064) || Gi || (Gi = !0, Bd(Ni, function() {
      return Pl(), null;
    })), p = (o.flags & 15990) !== 0, o.subtreeFlags & 15990 || p) {
      p = or.transition, or.transition = null;
      var E = Mt;
      Mt = 1;
      var T = ht;
      ht |= 4, Ud.current = null, ph(n, o), hh(o, n), Vs(So), vo = !!nd, So = nd = null, n.current = o, mh(o), Ey(), ht = T, Mt = E, or.transition = p;
    } else
      n.current = o;
    if (Gi && (Gi = !1, Ki = n, Nc = f), p = n.pendingLanes, p === 0 && (Ia = null), lv(o.stateNode), sr(n, un()), r !== null)
      for (u = n.onRecoverableError, o = 0; o < r.length; o++)
        f = r[o], u(f.value, { componentStack: f.stack, digest: f.digest });
    if (Oc)
      throw Oc = !1, n = Ao, Ao = null, n;
    return Nc & 1 && n.tag !== 0 && Pl(), p = n.pendingLanes, p & 1 ? n === Mc ? Ul++ : (Ul = 0, Mc = n) : Ul = 0, wr(), null;
  }
  function Pl() {
    if (Ki !== null) {
      var n = Lf(Nc), r = or.transition, o = Mt;
      try {
        if (or.transition = null, Mt = 16 > n ? 16 : n, Ki === null)
          var u = !1;
        else {
          if (n = Ki, Ki = null, Nc = 0, ht & 6)
            throw Error(S(331));
          var f = ht;
          for (ht |= 4, Oe = n.current; Oe !== null; ) {
            var p = Oe, E = p.child;
            if (Oe.flags & 16) {
              var T = p.deletions;
              if (T !== null) {
                for (var D = 0; D < T.length; D++) {
                  var j = T[D];
                  for (Oe = j; Oe !== null; ) {
                    var ae = Oe;
                    switch (ae.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wu(8, ae, p);
                    }
                    var ie = ae.child;
                    if (ie !== null)
                      ie.return = ae, Oe = ie;
                    else
                      for (; Oe !== null; ) {
                        ae = Oe;
                        var re = ae.sibling, xe = ae.return;
                        if (Ld(ae), ae === j) {
                          Oe = null;
                          break;
                        }
                        if (re !== null) {
                          re.return = xe, Oe = re;
                          break;
                        }
                        Oe = xe;
                      }
                  }
                }
                var Me = p.alternate;
                if (Me !== null) {
                  var ze = Me.child;
                  if (ze !== null) {
                    Me.child = null;
                    do {
                      var vn = ze.sibling;
                      ze.sibling = null, ze = vn;
                    } while (ze !== null);
                  }
                }
                Oe = p;
              }
            }
            if (p.subtreeFlags & 2064 && E !== null)
              E.return = p, Oe = E;
            else
              e:
                for (; Oe !== null; ) {
                  if (p = Oe, p.flags & 2048)
                    switch (p.tag) {
                      case 0:
                      case 11:
                      case 15:
                        Wu(9, p, p.return);
                    }
                  var M = p.sibling;
                  if (M !== null) {
                    M.return = p.return, Oe = M;
                    break e;
                  }
                  Oe = p.return;
                }
          }
          var O = n.current;
          for (Oe = O; Oe !== null; ) {
            E = Oe;
            var U = E.child;
            if (E.subtreeFlags & 2064 && U !== null)
              U.return = E, Oe = U;
            else
              e:
                for (E = O; Oe !== null; ) {
                  if (T = Oe, T.flags & 2048)
                    try {
                      switch (T.tag) {
                        case 0:
                        case 11:
                        case 15:
                          Yu(9, T);
                      }
                    } catch (Fe) {
                      fn(T, T.return, Fe);
                    }
                  if (T === E) {
                    Oe = null;
                    break e;
                  }
                  var ce = T.sibling;
                  if (ce !== null) {
                    ce.return = T.return, Oe = ce;
                    break e;
                  }
                  Oe = T.return;
                }
          }
          if (ht = f, wr(), xa && typeof xa.onPostCommitFiberRoot == "function")
            try {
              xa.onPostCommitFiberRoot(su, n);
            } catch {
            }
          u = !0;
        }
        return u;
      } finally {
        Mt = o, or.transition = r;
      }
    }
    return !1;
  }
  function Ch(n, r, o) {
    r = Rl(o, r), r = lh(n, r, 1), n = Ii(n, r, 1), r = lr(), n !== null && (po(n, 1, r), sr(n, r));
  }
  function fn(n, r, o) {
    if (n.tag === 3)
      Ch(n, n, o);
    else
      for (; r !== null; ) {
        if (r.tag === 3) {
          Ch(r, n, o);
          break;
        } else if (r.tag === 1) {
          var u = r.stateNode;
          if (typeof r.type.getDerivedStateFromError == "function" || typeof u.componentDidCatch == "function" && (Ia === null || !Ia.has(u))) {
            n = Rl(o, n), n = ju(r, n, 1), r = Ii(r, n, 1), n = lr(), r !== null && (po(r, 1, n), sr(r, n));
            break;
          }
        }
        r = r.return;
      }
  }
  function Zy(n, r, o) {
    var u = n.pingCache;
    u !== null && u.delete(r), r = lr(), n.pingedLanes |= n.suspendedLanes & o, nn === n && (Pn & o) === o && (On === 4 || On === 3 && (Pn & 130023424) === Pn && 500 > un() - Ad ? Ho(n, 0) : Ll |= o), sr(n, r);
  }
  function zc(n, r) {
    r === 0 && (n.mode & 1 ? (r = ol, ol <<= 1, !(ol & 130023424) && (ol = 4194304)) : r = 1);
    var o = lr();
    n = ci(n, r), n !== null && (po(n, r, o), sr(n, o));
  }
  function Jy(n) {
    var r = n.memoizedState, o = 0;
    r !== null && (o = r.retryLane), zc(n, o);
  }
  function eg(n, r) {
    var o = 0;
    switch (n.tag) {
      case 13:
        var u = n.stateNode, f = n.memoizedState;
        f !== null && (o = f.retryLane);
        break;
      case 19:
        u = n.stateNode;
        break;
      default:
        throw Error(S(314));
    }
    u !== null && u.delete(r), zc(n, o);
  }
  var Th;
  Th = function(n, r, o) {
    if (n !== null)
      if (n.memoizedProps !== r.pendingProps || sn.current)
        bn = !0;
      else {
        if (!(n.lanes & o) && !(r.flags & 128))
          return bn = !1, pi(n, r, o);
        bn = !!(n.flags & 131072);
      }
    else
      bn = !1, $t && r.flags & 1048576 && sd(r, gl, r.index);
    switch (r.lanes = 0, r.tag) {
      case 2:
        var u = r.type;
        ar(n, r), n = r.pendingProps;
        var f = aa(r, Je.current);
        ye(r, o), f = Yi(null, r, u, n, f, o);
        var p = ko();
        return r.flags |= 1, typeof f == "object" && f !== null && typeof f.render == "function" && f.$$typeof === void 0 ? (r.tag = 1, r.memoizedState = null, r.updateQueue = null, Xt(u) ? (p = !0, Qs(r)) : p = !1, r.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, md(r), f.updater = tc, r.stateNode = f, f._reactInternals = r, nc(r, u, n, o), r = sh(null, r, u, !0, p, o)) : (r.tag = 0, $t && p && qs(r), wn(null, r, f, o), r = r.child), r;
      case 16:
        u = r.elementType;
        e: {
          switch (ar(n, r), n = r.pendingProps, f = u._init, u = f(u._payload), r.type = u, f = r.tag = ng(u), n = Br(u, n), f) {
            case 0:
              r = wl(null, r, u, n, o);
              break e;
            case 1:
              r = Rd(null, r, u, n, o);
              break e;
            case 11:
              r = qi(null, r, u, n, o);
              break e;
            case 14:
              r = Tc(null, r, u, Br(u.type, n), o);
              break e;
          }
          throw Error(S(
            306,
            u,
            ""
          ));
        }
        return r;
      case 0:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Br(u, f), wl(n, r, u, f, o);
      case 1:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Br(u, f), Rd(n, r, u, f, o);
      case 3:
        e: {
          if (ch(r), n === null)
            throw Error(S(387));
          u = r.pendingProps, p = r.memoizedState, f = p.element, Rn(n, r), $i(r, u, null, o);
          var E = r.memoizedState;
          if (u = E.element, p.isDehydrated)
            if (p = { element: u, isDehydrated: !1, cache: E.cache, pendingSuspenseBoundaries: E.pendingSuspenseBoundaries, transitions: E.transitions }, r.updateQueue.baseState = p, r.memoizedState = p, r.flags & 256) {
              f = Rl(Error(S(423)), r), r = xc(n, r, u, o, f);
              break e;
            } else if (u !== f) {
              f = Rl(Error(S(424)), r), r = xc(n, r, u, o, f);
              break e;
            } else
              for (Or = Oa(r.stateNode.containerInfo.firstChild), Vr = r, $t = !0, la = null, o = ih(r, null, u, o), r.child = o; o; )
                o.flags = o.flags & -3 | 4096, o = o.sibling;
          else {
            if (en(), u === f) {
              r = $n(n, r, o);
              break e;
            }
            wn(n, r, u, o);
          }
          r = r.child;
        }
        return r;
      case 5:
        return Ye(r), n === null && Ks(r), u = r.type, f = r.pendingProps, p = n !== null ? n.memoizedProps : null, E = f.children, ku(u, f) ? E = null : p !== null && ku(u, p) && (r.flags |= 32), lt(n, r), wn(n, r, E, o), r.child;
      case 6:
        return n === null && Ks(r), null;
      case 13:
        return Dd(n, r, o);
      case 4:
        return Sd(r, r.stateNode.containerInfo), u = r.pendingProps, n === null ? r.child = El(r, null, u, o) : wn(n, r, u, o), r.child;
      case 11:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Br(u, f), qi(n, r, u, f, o);
      case 7:
        return wn(n, r, r.pendingProps, o), r.child;
      case 8:
        return wn(n, r, r.pendingProps.children, o), r.child;
      case 12:
        return wn(n, r, r.pendingProps.children, o), r.child;
      case 10:
        e: {
          if (u = r.type._context, f = r.pendingProps, p = r.memoizedProps, E = f.value, Ot(Ha, u._currentValue), u._currentValue = E, p !== null)
            if (na(p.value, E)) {
              if (p.children === f.children && !sn.current) {
                r = $n(n, r, o);
                break e;
              }
            } else
              for (p = r.child, p !== null && (p.return = r); p !== null; ) {
                var T = p.dependencies;
                if (T !== null) {
                  E = p.child;
                  for (var D = T.firstContext; D !== null; ) {
                    if (D.context === u) {
                      if (p.tag === 1) {
                        D = fi(-1, o & -o), D.tag = 2;
                        var j = p.updateQueue;
                        if (j !== null) {
                          j = j.shared;
                          var ae = j.pending;
                          ae === null ? D.next = D : (D.next = ae.next, ae.next = D), j.pending = D;
                        }
                      }
                      p.lanes |= o, D = p.alternate, D !== null && (D.lanes |= o), An(
                        p.return,
                        o,
                        r
                      ), T.lanes |= o;
                      break;
                    }
                    D = D.next;
                  }
                } else if (p.tag === 10)
                  E = p.type === r.type ? null : p.child;
                else if (p.tag === 18) {
                  if (E = p.return, E === null)
                    throw Error(S(341));
                  E.lanes |= o, T = E.alternate, T !== null && (T.lanes |= o), An(E, o, r), E = p.sibling;
                } else
                  E = p.child;
                if (E !== null)
                  E.return = p;
                else
                  for (E = p; E !== null; ) {
                    if (E === r) {
                      E = null;
                      break;
                    }
                    if (p = E.sibling, p !== null) {
                      p.return = E.return, E = p;
                      break;
                    }
                    E = E.return;
                  }
                p = E;
              }
          wn(n, r, f.children, o), r = r.child;
        }
        return r;
      case 9:
        return f = r.type, u = r.pendingProps.children, ye(r, o), f = pn(f), u = u(f), r.flags |= 1, wn(n, r, u, o), r.child;
      case 14:
        return u = r.type, f = Br(u, r.pendingProps), f = Br(u.type, f), Tc(n, r, u, f, o);
      case 15:
        return _r(n, r, r.type, r.pendingProps, o);
      case 17:
        return u = r.type, f = r.pendingProps, f = r.elementType === u ? f : Br(u, f), ar(n, r), r.tag = 1, Xt(u) ? (n = !0, Qs(r)) : n = !1, ye(r, o), th(r, u, f), nc(r, u, f, o), sh(null, r, u, !0, n, o);
      case 19:
        return Nd(n, r, o);
      case 22:
        return _o(n, r, o);
    }
    throw Error(S(156, r.tag));
  };
  function Bd(n, r) {
    return kf(n, r);
  }
  function tg(n, r, o, u) {
    this.tag = n, this.key = o, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = r, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = u, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function pa(n, r, o, u) {
    return new tg(n, r, o, u);
  }
  function Id(n) {
    return n = n.prototype, !(!n || !n.isReactComponent);
  }
  function ng(n) {
    if (typeof n == "function")
      return Id(n) ? 1 : 0;
    if (n != null) {
      if (n = n.$$typeof, n === Be)
        return 11;
      if (n === Ce)
        return 14;
    }
    return 2;
  }
  function Zi(n, r) {
    var o = n.alternate;
    return o === null ? (o = pa(n.tag, r, n.key, n.mode), o.elementType = n.elementType, o.type = n.type, o.stateNode = n.stateNode, o.alternate = n, n.alternate = o) : (o.pendingProps = r, o.type = n.type, o.flags = 0, o.subtreeFlags = 0, o.deletions = null), o.flags = n.flags & 14680064, o.childLanes = n.childLanes, o.lanes = n.lanes, o.child = n.child, o.memoizedProps = n.memoizedProps, o.memoizedState = n.memoizedState, o.updateQueue = n.updateQueue, r = n.dependencies, o.dependencies = r === null ? null : { lanes: r.lanes, firstContext: r.firstContext }, o.sibling = n.sibling, o.index = n.index, o.ref = n.ref, o;
  }
  function Uc(n, r, o, u, f, p) {
    var E = 2;
    if (u = n, typeof n == "function")
      Id(n) && (E = 1);
    else if (typeof n == "string")
      E = 5;
    else
      e:
        switch (n) {
          case J:
            return Vo(o.children, f, p, r);
          case ke:
            E = 8, f |= 8;
            break;
          case Ve:
            return n = pa(12, o, r, f | 2), n.elementType = Ve, n.lanes = p, n;
          case se:
            return n = pa(13, o, r, f), n.elementType = se, n.lanes = p, n;
          case ve:
            return n = pa(19, o, r, f), n.elementType = ve, n.lanes = p, n;
          case Ae:
            return Ku(o, f, p, r);
          default:
            if (typeof n == "object" && n !== null)
              switch (n.$$typeof) {
                case Ue:
                  E = 10;
                  break e;
                case Ne:
                  E = 9;
                  break e;
                case Be:
                  E = 11;
                  break e;
                case Ce:
                  E = 14;
                  break e;
                case be:
                  E = 16, u = null;
                  break e;
              }
            throw Error(S(130, n == null ? n : typeof n, ""));
        }
    return r = pa(E, o, r, f), r.elementType = n, r.type = u, r.lanes = p, r;
  }
  function Vo(n, r, o, u) {
    return n = pa(7, n, u, r), n.lanes = o, n;
  }
  function Ku(n, r, o, u) {
    return n = pa(22, n, u, r), n.elementType = Ae, n.lanes = o, n.stateNode = { isHidden: !1 }, n;
  }
  function Xu(n, r, o) {
    return n = pa(6, n, null, r), n.lanes = o, n;
  }
  function Bo(n, r, o) {
    return r = pa(4, n.children !== null ? n.children : [], n.key, r), r.lanes = o, r.stateNode = { containerInfo: n.containerInfo, pendingChildren: null, implementation: n.implementation }, r;
  }
  function rg(n, r, o, u, f) {
    this.tag = r, this.containerInfo = n, this.finishedWork = this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.pendingContext = this.context = null, this.callbackPriority = 0, this.eventTimes = _f(0), this.expirationTimes = _f(-1), this.entangledLanes = this.finishedLanes = this.mutableReadLanes = this.expiredLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = _f(0), this.identifierPrefix = u, this.onRecoverableError = f, this.mutableSourceEagerHydrationData = null;
  }
  function Ac(n, r, o, u, f, p, E, T, D) {
    return n = new rg(n, r, o, T, D), r === 1 ? (r = 1, p === !0 && (r |= 8)) : r = 0, p = pa(3, null, null, r), n.current = p, p.stateNode = n, p.memoizedState = { element: u, isDehydrated: o, cache: null, transitions: null, pendingSuspenseBoundaries: null }, md(p), n;
  }
  function xh(n, r, o) {
    var u = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return { $$typeof: le, key: u == null ? null : "" + u, children: n, containerInfo: r, implementation: o };
  }
  function $d(n) {
    if (!n)
      return Pa;
    n = n._reactInternals;
    e: {
      if (Aa(n) !== n || n.tag !== 1)
        throw Error(S(170));
      var r = n;
      do {
        switch (r.tag) {
          case 3:
            r = r.stateNode.context;
            break e;
          case 1:
            if (Xt(r.type)) {
              r = r.stateNode.__reactInternalMemoizedMergedChildContext;
              break e;
            }
        }
        r = r.return;
      } while (r !== null);
      throw Error(S(171));
    }
    if (n.tag === 1) {
      var o = n.type;
      if (Xt(o))
        return Mu(n, o, r);
    }
    return r;
  }
  function Rh(n, r, o, u, f, p, E, T, D) {
    return n = Ac(o, u, !0, n, f, p, E, T, D), n.context = $d(null), o = n.current, u = lr(), f = Cn(o), p = fi(u, f), p.callback = r ?? null, Ii(o, p, f), n.current.lanes = f, po(n, f, u), sr(n, u), n;
  }
  function Zu(n, r, o, u) {
    var f = r.current, p = lr(), E = Cn(f);
    return o = $d(o), r.context === null ? r.context = o : r.pendingContext = o, r = fi(p, E), r.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (r.callback = u), n = Ii(f, r, E), n !== null && (ur(n, f, E, p), ec(n, f, E)), E;
  }
  function Fc(n) {
    if (n = n.current, !n.child)
      return null;
    switch (n.child.tag) {
      case 5:
        return n.child.stateNode;
      default:
        return n.child.stateNode;
    }
  }
  function wh(n, r) {
    if (n = n.memoizedState, n !== null && n.dehydrated !== null) {
      var o = n.retryLane;
      n.retryLane = o !== 0 && o < r ? o : r;
    }
  }
  function Wd(n, r) {
    wh(n, r), (n = n.alternate) && wh(n, r);
  }
  function Dh() {
    return null;
  }
  var Yd = typeof reportError == "function" ? reportError : function(n) {
    console.error(n);
  };
  function Pc(n) {
    this._internalRoot = n;
  }
  yi.prototype.render = Pc.prototype.render = function(n) {
    var r = this._internalRoot;
    if (r === null)
      throw Error(S(409));
    Zu(n, r, null, null);
  }, yi.prototype.unmount = Pc.prototype.unmount = function() {
    var n = this._internalRoot;
    if (n !== null) {
      this._internalRoot = null;
      var r = n.containerInfo;
      Xi(function() {
        Zu(null, n, null, null);
      }), r[ui] = null;
    }
  };
  function yi(n) {
    this._internalRoot = n;
  }
  yi.prototype.unstable_scheduleHydration = function(n) {
    if (n) {
      var r = fv();
      n = { blockedOn: null, target: n, priority: r };
      for (var o = 0; o < Ut.length && r !== 0 && r < Ut[o].priority; o++)
        ;
      Ut.splice(o, 0, n), o === 0 && dv(n);
    }
  };
  function Qd(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11);
  }
  function Hc(n) {
    return !(!n || n.nodeType !== 1 && n.nodeType !== 9 && n.nodeType !== 11 && (n.nodeType !== 8 || n.nodeValue !== " react-mount-point-unstable "));
  }
  function kh() {
  }
  function ag(n, r, o, u, f) {
    if (f) {
      if (typeof u == "function") {
        var p = u;
        u = function() {
          var j = Fc(E);
          p.call(j);
        };
      }
      var E = Rh(r, u, n, 0, null, !1, !1, "", kh);
      return n._reactRootContainer = E, n[ui] = E.current, ml(n.nodeType === 8 ? n.parentNode : n), Xi(), E;
    }
    for (; f = n.lastChild; )
      n.removeChild(f);
    if (typeof u == "function") {
      var T = u;
      u = function() {
        var j = Fc(D);
        T.call(j);
      };
    }
    var D = Ac(n, 0, !1, null, null, !1, !1, "", kh);
    return n._reactRootContainer = D, n[ui] = D.current, ml(n.nodeType === 8 ? n.parentNode : n), Xi(function() {
      Zu(r, D, o, u);
    }), D;
  }
  function jc(n, r, o, u, f) {
    var p = o._reactRootContainer;
    if (p) {
      var E = p;
      if (typeof f == "function") {
        var T = f;
        f = function() {
          var D = Fc(E);
          T.call(D);
        };
      }
      Zu(r, E, n, f);
    } else
      E = ag(o, r, n, f, u);
    return Fc(E);
  }
  cv = function(n) {
    switch (n.tag) {
      case 3:
        var r = n.stateNode;
        if (r.current.memoizedState.isDehydrated) {
          var o = fo(r.pendingLanes);
          o !== 0 && (cu(r, o | 1), sr(r, un()), !(ht & 6) && (zl = un() + 500, wr()));
        }
        break;
      case 13:
        Xi(function() {
          var u = ci(n, 1);
          if (u !== null) {
            var f = lr();
            ur(u, n, 1, f);
          }
        }), Wd(n, 1);
    }
  }, Os = function(n) {
    if (n.tag === 13) {
      var r = ci(n, 134217728);
      if (r !== null) {
        var o = lr();
        ur(r, n, 134217728, o);
      }
      Wd(n, 134217728);
    }
  }, Pt = function(n) {
    if (n.tag === 13) {
      var r = Cn(n), o = ci(n, r);
      if (o !== null) {
        var u = lr();
        ur(o, n, r, u);
      }
      Wd(n, r);
    }
  }, fv = function() {
    return Mt;
  }, zf = function(n, r) {
    var o = Mt;
    try {
      return Mt = n, r();
    } finally {
      Mt = o;
    }
  }, Ua = function(n, r, o) {
    switch (r) {
      case "input":
        if (Gt(n, o), r = o.name, o.type === "radio" && r != null) {
          for (o = n; o.parentNode; )
            o = o.parentNode;
          for (o = o.querySelectorAll("input[name=" + JSON.stringify("" + r) + '][type="radio"]'), r = 0; r < o.length; r++) {
            var u = o[r];
            if (u !== n && u.form === n.form) {
              var f = Ie(u);
              if (!f)
                throw Error(S(90));
              wt(u), Gt(u, f);
            }
          }
        }
        break;
      case "textarea":
        zt(n, o);
        break;
      case "select":
        r = o.value, r != null && Lt(n, !!o.multiple, r, !1);
    }
  }, tv = Fl, nv = Xi;
  var ig = { usingClientEntryPoint: !1, Events: [Nu, yl, Ie, Cs, Ts, Fl] }, Hl = { findFiberByHostInstance: ra, bundleType: 0, version: "18.2.0", rendererPackageName: "react-dom" }, og = { bundleType: Hl.bundleType, version: Hl.version, rendererPackageName: Hl.rendererPackageName, rendererConfig: Hl.rendererConfig, overrideHookState: null, overrideHookStateDeletePath: null, overrideHookStateRenamePath: null, overrideProps: null, overridePropsDeletePath: null, overridePropsRenamePath: null, setErrorHandler: null, setSuspenseHandler: null, scheduleUpdate: null, currentDispatcherRef: $.ReactCurrentDispatcher, findHostInstanceByFiber: function(n) {
    return n = rv(n), n === null ? null : n.stateNode;
  }, findFiberByHostInstance: Hl.findFiberByHostInstance || Dh, findHostInstancesForRefresh: null, scheduleRefresh: null, scheduleRoot: null, setRefreshHandler: null, getCurrentFiber: null, reconcilerVersion: "18.2.0-next-9e3b772b8-20220608" };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Vc = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Vc.isDisabled && Vc.supportsFiber)
      try {
        su = Vc.inject(og), xa = Vc;
      } catch {
      }
  }
  return Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = ig, Sa.createPortal = function(n, r) {
    var o = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!Qd(r))
      throw Error(S(200));
    return xh(n, r, null, o);
  }, Sa.createRoot = function(n, r) {
    if (!Qd(n))
      throw Error(S(299));
    var o = !1, u = "", f = Yd;
    return r != null && (r.unstable_strictMode === !0 && (o = !0), r.identifierPrefix !== void 0 && (u = r.identifierPrefix), r.onRecoverableError !== void 0 && (f = r.onRecoverableError)), r = Ac(n, 1, !1, null, null, o, !1, u, f), n[ui] = r.current, ml(n.nodeType === 8 ? n.parentNode : n), new Pc(r);
  }, Sa.findDOMNode = function(n) {
    if (n == null)
      return null;
    if (n.nodeType === 1)
      return n;
    var r = n._reactInternals;
    if (r === void 0)
      throw typeof n.render == "function" ? Error(S(188)) : (n = Object.keys(n).join(","), Error(S(268, n)));
    return n = rv(r), n = n === null ? null : n.stateNode, n;
  }, Sa.flushSync = function(n) {
    return Xi(n);
  }, Sa.hydrate = function(n, r, o) {
    if (!Hc(r))
      throw Error(S(200));
    return jc(null, n, r, !0, o);
  }, Sa.hydrateRoot = function(n, r, o) {
    if (!Qd(n))
      throw Error(S(405));
    var u = o != null && o.hydratedSources || null, f = !1, p = "", E = Yd;
    if (o != null && (o.unstable_strictMode === !0 && (f = !0), o.identifierPrefix !== void 0 && (p = o.identifierPrefix), o.onRecoverableError !== void 0 && (E = o.onRecoverableError)), r = Rh(r, null, n, 1, o ?? null, f, !1, p, E), n[ui] = r.current, ml(n), u)
      for (n = 0; n < u.length; n++)
        o = u[n], f = o._getVersion, f = f(o._source), r.mutableSourceEagerHydrationData == null ? r.mutableSourceEagerHydrationData = [o, f] : r.mutableSourceEagerHydrationData.push(
          o,
          f
        );
    return new yi(r);
  }, Sa.render = function(n, r, o) {
    if (!Hc(r))
      throw Error(S(200));
    return jc(null, n, r, !1, o);
  }, Sa.unmountComponentAtNode = function(n) {
    if (!Hc(n))
      throw Error(S(40));
    return n._reactRootContainer ? (Xi(function() {
      jc(null, null, n, !1, function() {
        n._reactRootContainer = null, n[ui] = null;
      });
    }), !0) : !1;
  }, Sa.unstable_batchedUpdates = Fl, Sa.unstable_renderSubtreeIntoContainer = function(n, r, o, u) {
    if (!Hc(o))
      throw Error(S(200));
    if (n == null || n._reactInternals === void 0)
      throw Error(S(38));
    return jc(n, r, o, !1, u);
  }, Sa.version = "18.2.0-next-9e3b772b8-20220608", Sa;
}
var Ea = {};
/**
 * @license React
 * react-dom.development.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var u1;
function pN() {
  return u1 || (u1 = 1, process.env.NODE_ENV !== "production" && function() {
    typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStart(new Error());
    var v = bf, m = z1(), S = v.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED, x = !1;
    function w(e) {
      x = e;
    }
    function R(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("warn", e, a);
      }
    }
    function g(e) {
      if (!x) {
        for (var t = arguments.length, a = new Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
          a[i - 1] = arguments[i];
        A("error", e, a);
      }
    }
    function A(e, t, a) {
      {
        var i = S.ReactDebugCurrentFrame, l = i.getStackAddendum();
        l !== "" && (t += "%s", a = a.concat([l]));
        var s = a.map(function(d) {
          return String(d);
        });
        s.unshift("Warning: " + t), Function.prototype.apply.call(console[e], console, s);
      }
    }
    var z = 0, F = 1, ne = 2, V = 3, q = 4, I = 5, ee = 6, pe = 7, de = 8, me = 9, Se = 10, B = 11, $ = 12, te = 13, le = 14, J = 15, ke = 16, Ve = 17, Ue = 18, Ne = 19, Be = 21, se = 22, ve = 23, Ce = 24, be = 25, Ae = !0, W = !1, fe = !1, ue = !1, ut = !1, Ze = !0, gt = !1, st = !1, _t = !0, yt = !0, dn = !0, Bt = /* @__PURE__ */ new Set(), an = {}, Mn = {};
    function at(e, t) {
      wt(e, t), wt(e + "Capture", t);
    }
    function wt(e, t) {
      an[e] && g("EventRegistry: More than one plugin attempted to publish the same registration name, `%s`.", e), an[e] = t;
      {
        var a = e.toLowerCase();
        Mn[a] = e, e === "onDoubleClick" && (Mn.ondblclick = e);
      }
      for (var i = 0; i < t.length; i++)
        Bt.add(t[i]);
    }
    var Ge = typeof window < "u" && typeof window.document < "u" && typeof window.document.createElement < "u", tt = Object.prototype.hasOwnProperty;
    function pt(e) {
      {
        var t = typeof Symbol == "function" && Symbol.toStringTag, a = t && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return a;
      }
    }
    function Jt(e) {
      try {
        return Gt(e), !1;
      } catch {
        return !0;
      }
    }
    function Gt(e) {
      return "" + e;
    }
    function mn(e, t) {
      if (Jt(e))
        return g("The provided `%s` attribute is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pt(e)), Gt(e);
    }
    function Jn(e) {
      if (Jt(e))
        return g("The provided key is an unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Gt(e);
    }
    function er(e, t) {
      if (Jt(e))
        return g("The provided `%s` prop is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pt(e)), Gt(e);
    }
    function Lt(e, t) {
      if (Jt(e))
        return g("The provided `%s` CSS property is an unsupported type %s. This value must be coerced to a string before before using it here.", t, pt(e)), Gt(e);
    }
    function _n(e) {
      if (Jt(e))
        return g("The provided HTML markup uses a value of unsupported type %s. This value must be coerced to a string before before using it here.", pt(e)), Gt(e);
    }
    function Kt(e) {
      if (Jt(e))
        return g("Form field values (value, checked, defaultValue, or defaultChecked props) must be strings, not %s. This value must be coerced to a string before before using it here.", pt(e)), Gt(e);
    }
    var zt = 0, Vn = 1, Tr = 2, yn = 3, ct = 4, Ca = 5, tr = 6, Ee = ":A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD", He = Ee + "\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040", ft = new RegExp("^[" + Ee + "][" + He + "]*$"), he = {}, $e = {};
    function Ct(e) {
      return tt.call($e, e) ? !0 : tt.call(he, e) ? !1 : ft.test(e) ? ($e[e] = !0, !0) : (he[e] = !0, g("Invalid attribute name: `%s`", e), !1);
    }
    function Vt(e, t, a) {
      return t !== null ? t.type === zt : a ? !1 : e.length > 2 && (e[0] === "o" || e[0] === "O") && (e[1] === "n" || e[1] === "N");
    }
    function fr(e, t, a, i) {
      if (a !== null && a.type === zt)
        return !1;
      switch (typeof t) {
        case "function":
        case "symbol":
          return !0;
        case "boolean": {
          if (i)
            return !1;
          if (a !== null)
            return !a.acceptsBooleans;
          var l = e.toLowerCase().slice(0, 5);
          return l !== "data-" && l !== "aria-";
        }
        default:
          return !1;
      }
    }
    function on(e, t, a, i) {
      if (t === null || typeof t > "u" || fr(e, t, a, i))
        return !0;
      if (i)
        return !1;
      if (a !== null)
        switch (a.type) {
          case yn:
            return !t;
          case ct:
            return t === !1;
          case Ca:
            return isNaN(t);
          case tr:
            return isNaN(t) || t < 1;
        }
      return !1;
    }
    function Ua(e) {
      return ln.hasOwnProperty(e) ? ln[e] : null;
    }
    function gn(e, t, a, i, l, s, d) {
      this.acceptsBooleans = t === Tr || t === yn || t === ct, this.attributeName = i, this.attributeNamespace = l, this.mustUseProperty = a, this.propertyName = e, this.type = t, this.sanitizeURL = s, this.removeEmptyString = d;
    }
    var ln = {}, ev = [
      "children",
      "dangerouslySetInnerHTML",
      // TODO: This prevents the assignment of defaultValue to regular
      // elements (not just inputs). Now that ReactDOMInput assigns to the
      // defaultValue property -- do we need this?
      "defaultValue",
      "defaultChecked",
      "innerHTML",
      "suppressContentEditableWarning",
      "suppressHydrationWarning",
      "style"
    ];
    ev.forEach(function(e) {
      ln[e] = new gn(
        e,
        zt,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [["acceptCharset", "accept-charset"], ["className", "class"], ["htmlFor", "for"], ["httpEquiv", "http-equiv"]].forEach(function(e) {
      var t = e[0], a = e[1];
      ln[t] = new gn(
        t,
        Vn,
        !1,
        // mustUseProperty
        a,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["contentEditable", "draggable", "spellCheck", "value"].forEach(function(e) {
      ln[e] = new gn(
        e,
        Tr,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach(function(e) {
      ln[e] = new gn(
        e,
        Tr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "allowFullScreen",
      "async",
      // Note: there is a special case that prevents it from being written to the DOM
      // on the client side because the browsers are inconsistent. Instead we call focus().
      "autoFocus",
      "autoPlay",
      "controls",
      "default",
      "defer",
      "disabled",
      "disablePictureInPicture",
      "disableRemotePlayback",
      "formNoValidate",
      "hidden",
      "loop",
      "noModule",
      "noValidate",
      "open",
      "playsInline",
      "readOnly",
      "required",
      "reversed",
      "scoped",
      "seamless",
      // Microdata
      "itemScope"
    ].forEach(function(e) {
      ln[e] = new gn(
        e,
        yn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "checked",
      // Note: `option.selected` is not updated if `select.multiple` is
      // disabled with `removeAttribute`. We have special logic for handling this.
      "multiple",
      "muted",
      "selected"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ln[e] = new gn(
        e,
        yn,
        !0,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "capture",
      "download"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ln[e] = new gn(
        e,
        ct,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "cols",
      "rows",
      "size",
      "span"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      ln[e] = new gn(
        e,
        tr,
        !1,
        // mustUseProperty
        e,
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), ["rowSpan", "start"].forEach(function(e) {
      ln[e] = new gn(
        e,
        Ca,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var Cs = /[\-\:]([a-z])/g, Ts = function(e) {
      return e[1].toUpperCase();
    };
    [
      "accent-height",
      "alignment-baseline",
      "arabic-form",
      "baseline-shift",
      "cap-height",
      "clip-path",
      "clip-rule",
      "color-interpolation",
      "color-interpolation-filters",
      "color-profile",
      "color-rendering",
      "dominant-baseline",
      "enable-background",
      "fill-opacity",
      "fill-rule",
      "flood-color",
      "flood-opacity",
      "font-family",
      "font-size",
      "font-size-adjust",
      "font-stretch",
      "font-style",
      "font-variant",
      "font-weight",
      "glyph-name",
      "glyph-orientation-horizontal",
      "glyph-orientation-vertical",
      "horiz-adv-x",
      "horiz-origin-x",
      "image-rendering",
      "letter-spacing",
      "lighting-color",
      "marker-end",
      "marker-mid",
      "marker-start",
      "overline-position",
      "overline-thickness",
      "paint-order",
      "panose-1",
      "pointer-events",
      "rendering-intent",
      "shape-rendering",
      "stop-color",
      "stop-opacity",
      "strikethrough-position",
      "strikethrough-thickness",
      "stroke-dasharray",
      "stroke-dashoffset",
      "stroke-linecap",
      "stroke-linejoin",
      "stroke-miterlimit",
      "stroke-opacity",
      "stroke-width",
      "text-anchor",
      "text-decoration",
      "text-rendering",
      "underline-position",
      "underline-thickness",
      "unicode-bidi",
      "unicode-range",
      "units-per-em",
      "v-alphabetic",
      "v-hanging",
      "v-ideographic",
      "v-mathematical",
      "vector-effect",
      "vert-adv-y",
      "vert-origin-x",
      "vert-origin-y",
      "word-spacing",
      "writing-mode",
      "xmlns:xlink",
      "x-height"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cs, Ts);
      ln[t] = new gn(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xlink:actuate",
      "xlink:arcrole",
      "xlink:role",
      "xlink:show",
      "xlink:title",
      "xlink:type"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cs, Ts);
      ln[t] = new gn(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/1999/xlink",
        !1,
        // sanitizeURL
        !1
      );
    }), [
      "xml:base",
      "xml:lang",
      "xml:space"
      // NOTE: if you add a camelCased prop to this list,
      // you'll need to set attributeName to name.toLowerCase()
      // instead in the assignment below.
    ].forEach(function(e) {
      var t = e.replace(Cs, Ts);
      ln[t] = new gn(
        t,
        Vn,
        !1,
        // mustUseProperty
        e,
        "http://www.w3.org/XML/1998/namespace",
        !1,
        // sanitizeURL
        !1
      );
    }), ["tabIndex", "crossOrigin"].forEach(function(e) {
      ln[e] = new gn(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !1,
        // sanitizeURL
        !1
      );
    });
    var tv = "xlinkHref";
    ln[tv] = new gn(
      "xlinkHref",
      Vn,
      !1,
      // mustUseProperty
      "xlink:href",
      "http://www.w3.org/1999/xlink",
      !0,
      // sanitizeURL
      !1
    ), ["src", "href", "action", "formAction"].forEach(function(e) {
      ln[e] = new gn(
        e,
        Vn,
        !1,
        // mustUseProperty
        e.toLowerCase(),
        // attributeName
        null,
        // attributeNamespace
        !0,
        // sanitizeURL
        !0
      );
    });
    var nv = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*\:/i, xs = !1;
    function Rf(e) {
      !xs && nv.test(e) && (xs = !0, g("A future version of React will block javascript: URLs as a security precaution. Use event handlers instead if you can. If you need to generate unsafe HTML try using dangerouslySetInnerHTML instead. React was passed %s.", JSON.stringify(e)));
    }
    function ou(e, t, a, i) {
      if (i.mustUseProperty) {
        var l = i.propertyName;
        return e[l];
      } else {
        mn(a, t), i.sanitizeURL && Rf("" + a);
        var s = i.attributeName, d = null;
        if (i.type === ct) {
          if (e.hasAttribute(s)) {
            var h = e.getAttribute(s);
            return h === "" ? !0 : on(t, a, i, !1) ? h : h === "" + a ? a : h;
          }
        } else if (e.hasAttribute(s)) {
          if (on(t, a, i, !1))
            return e.getAttribute(s);
          if (i.type === yn)
            return a;
          d = e.getAttribute(s);
        }
        return on(t, a, i, !1) ? d === null ? a : d : d === "" + a ? a : d;
      }
    }
    function Rs(e, t, a, i) {
      {
        if (!Ct(t))
          return;
        if (!e.hasAttribute(t))
          return a === void 0 ? void 0 : null;
        var l = e.getAttribute(t);
        return mn(a, t), l === "" + a ? a : l;
      }
    }
    function co(e, t, a, i) {
      var l = Ua(t);
      if (!Vt(t, l, i)) {
        if (on(t, a, l, i) && (a = null), i || l === null) {
          if (Ct(t)) {
            var s = t;
            a === null ? e.removeAttribute(s) : (mn(a, t), e.setAttribute(s, "" + a));
          }
          return;
        }
        var d = l.mustUseProperty;
        if (d) {
          var h = l.propertyName;
          if (a === null) {
            var y = l.type;
            e[h] = y === yn ? !1 : "";
          } else
            e[h] = a;
          return;
        }
        var b = l.attributeName, C = l.attributeNamespace;
        if (a === null)
          e.removeAttribute(b);
        else {
          var N = l.type, k;
          N === yn || N === ct && a === !0 ? k = "" : (mn(a, b), k = "" + a, l.sanitizeURL && Rf(k.toString())), C ? e.setAttributeNS(C, b, k) : e.setAttribute(b, k);
        }
      }
    }
    var nl = Symbol.for("react.element"), Ta = Symbol.for("react.portal"), ei = Symbol.for("react.fragment"), rl = Symbol.for("react.strict_mode"), lu = Symbol.for("react.profiler"), wf = Symbol.for("react.provider"), Df = Symbol.for("react.context"), al = Symbol.for("react.forward_ref"), Aa = Symbol.for("react.suspense"), uu = Symbol.for("react.suspense_list"), il = Symbol.for("react.memo"), dr = Symbol.for("react.lazy"), rv = Symbol.for("react.scope"), av = Symbol.for("react.debug_trace_mode"), kf = Symbol.for("react.offscreen"), iv = Symbol.for("react.legacy_hidden"), Sy = Symbol.for("react.cache"), Ey = Symbol.for("react.tracing_marker"), un = Symbol.iterator, by = "@@iterator";
    function ti(e) {
      if (e === null || typeof e != "object")
        return null;
      var t = un && e[un] || e[by];
      return typeof t == "function" ? t : null;
    }
    var vt = Object.assign, Ni = 0, ov, Of, su, xa, lv, Jr, uv;
    function sv() {
    }
    sv.__reactDisabledLog = !0;
    function Cy() {
      {
        if (Ni === 0) {
          ov = console.log, Of = console.info, su = console.warn, xa = console.error, lv = console.group, Jr = console.groupCollapsed, uv = console.groupEnd;
          var e = {
            configurable: !0,
            enumerable: !0,
            value: sv,
            writable: !0
          };
          Object.defineProperties(console, {
            info: e,
            log: e,
            warn: e,
            error: e,
            group: e,
            groupCollapsed: e,
            groupEnd: e
          });
        }
        Ni++;
      }
    }
    function ws() {
      {
        if (Ni--, Ni === 0) {
          var e = {
            configurable: !0,
            enumerable: !0,
            writable: !0
          };
          Object.defineProperties(console, {
            log: vt({}, e, {
              value: ov
            }),
            info: vt({}, e, {
              value: Of
            }),
            warn: vt({}, e, {
              value: su
            }),
            error: vt({}, e, {
              value: xa
            }),
            group: vt({}, e, {
              value: lv
            }),
            groupCollapsed: vt({}, e, {
              value: Jr
            }),
            groupEnd: vt({}, e, {
              value: uv
            })
          });
        }
        Ni < 0 && g("disabledDepth fell below zero. This is a bug in React. Please file an issue.");
      }
    }
    var ol = S.ReactCurrentDispatcher, fo;
    function Ra(e, t, a) {
      {
        if (fo === void 0)
          try {
            throw Error();
          } catch (l) {
            var i = l.stack.trim().match(/\n( *(at )?)/);
            fo = i && i[1] || "";
          }
        return `
` + fo + e;
      }
    }
    var Nf = !1, Ds;
    {
      var Mf = typeof WeakMap == "function" ? WeakMap : Map;
      Ds = new Mf();
    }
    function ks(e, t) {
      if (!e || Nf)
        return "";
      {
        var a = Ds.get(e);
        if (a !== void 0)
          return a;
      }
      var i;
      Nf = !0;
      var l = Error.prepareStackTrace;
      Error.prepareStackTrace = void 0;
      var s;
      s = ol.current, ol.current = null, Cy();
      try {
        if (t) {
          var d = function() {
            throw Error();
          };
          if (Object.defineProperty(d.prototype, "props", {
            set: function() {
              throw Error();
            }
          }), typeof Reflect == "object" && Reflect.construct) {
            try {
              Reflect.construct(d, []);
            } catch (H) {
              i = H;
            }
            Reflect.construct(e, [], d);
          } else {
            try {
              d.call();
            } catch (H) {
              i = H;
            }
            e.call(d.prototype);
          }
        } else {
          try {
            throw Error();
          } catch (H) {
            i = H;
          }
          e();
        }
      } catch (H) {
        if (H && i && typeof H.stack == "string") {
          for (var h = H.stack.split(`
`), y = i.stack.split(`
`), b = h.length - 1, C = y.length - 1; b >= 1 && C >= 0 && h[b] !== y[C]; )
            C--;
          for (; b >= 1 && C >= 0; b--, C--)
            if (h[b] !== y[C]) {
              if (b !== 1 || C !== 1)
                do
                  if (b--, C--, C < 0 || h[b] !== y[C]) {
                    var N = `
` + h[b].replace(" at new ", " at ");
                    return e.displayName && N.includes("<anonymous>") && (N = N.replace("<anonymous>", e.displayName)), typeof e == "function" && Ds.set(e, N), N;
                  }
                while (b >= 1 && C >= 0);
              break;
            }
        }
      } finally {
        Nf = !1, ol.current = s, ws(), Error.prepareStackTrace = l;
      }
      var k = e ? e.displayName || e.name : "", P = k ? Ra(k) : "";
      return typeof e == "function" && Ds.set(e, P), P;
    }
    function _f(e, t, a) {
      return ks(e, !0);
    }
    function po(e, t, a) {
      return ks(e, !1);
    }
    function Ty(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cu(e, t, a) {
      if (e == null)
        return "";
      if (typeof e == "function")
        return ks(e, Ty(e));
      if (typeof e == "string")
        return Ra(e);
      switch (e) {
        case Aa:
          return Ra("Suspense");
        case uu:
          return Ra("SuspenseList");
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case al:
            return po(e.render);
          case il:
            return cu(e.type, t, a);
          case dr: {
            var i = e, l = i._payload, s = i._init;
            try {
              return cu(s(l), t, a);
            } catch {
            }
          }
        }
      return "";
    }
    function Mt(e) {
      switch (e._debugOwner && e._debugOwner.type, e._debugSource, e.tag) {
        case I:
          return Ra(e.type);
        case ke:
          return Ra("Lazy");
        case te:
          return Ra("Suspense");
        case Ne:
          return Ra("SuspenseList");
        case z:
        case ne:
        case J:
          return po(e.type);
        case B:
          return po(e.type.render);
        case F:
          return _f(e.type);
        default:
          return "";
      }
    }
    function Lf(e) {
      try {
        var t = "", a = e;
        do
          t += Mt(a), a = a.return;
        while (a);
        return t;
      } catch (i) {
        return `
Error generating stack: ` + i.message + `
` + i.stack;
      }
    }
    function cv(e, t, a) {
      var i = e.displayName;
      if (i)
        return i;
      var l = t.displayName || t.name || "";
      return l !== "" ? a + "(" + l + ")" : a;
    }
    function Os(e) {
      return e.displayName || "Context";
    }
    function Pt(e) {
      if (e == null)
        return null;
      if (typeof e.tag == "number" && g("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."), typeof e == "function")
        return e.displayName || e.name || null;
      if (typeof e == "string")
        return e;
      switch (e) {
        case ei:
          return "Fragment";
        case Ta:
          return "Portal";
        case lu:
          return "Profiler";
        case rl:
          return "StrictMode";
        case Aa:
          return "Suspense";
        case uu:
          return "SuspenseList";
      }
      if (typeof e == "object")
        switch (e.$$typeof) {
          case Df:
            var t = e;
            return Os(t) + ".Consumer";
          case wf:
            var a = e;
            return Os(a._context) + ".Provider";
          case al:
            return cv(e, e.render, "ForwardRef");
          case il:
            var i = e.displayName || null;
            return i !== null ? i : Pt(e.type) || "Memo";
          case dr: {
            var l = e, s = l._payload, d = l._init;
            try {
              return Pt(d(s));
            } catch {
              return null;
            }
          }
        }
      return null;
    }
    function fv(e, t, a) {
      var i = t.displayName || t.name || "";
      return e.displayName || (i !== "" ? a + "(" + i + ")" : a);
    }
    function zf(e) {
      return e.displayName || "Context";
    }
    function it(e) {
      var t = e.tag, a = e.type;
      switch (t) {
        case Ce:
          return "Cache";
        case me:
          var i = a;
          return zf(i) + ".Consumer";
        case Se:
          var l = a;
          return zf(l._context) + ".Provider";
        case Ue:
          return "DehydratedFragment";
        case B:
          return fv(a, a.render, "ForwardRef");
        case pe:
          return "Fragment";
        case I:
          return a;
        case q:
          return "Portal";
        case V:
          return "Root";
        case ee:
          return "Text";
        case ke:
          return Pt(a);
        case de:
          return a === rl ? "StrictMode" : "Mode";
        case se:
          return "Offscreen";
        case $:
          return "Profiler";
        case Be:
          return "Scope";
        case te:
          return "Suspense";
        case Ne:
          return "SuspenseList";
        case be:
          return "TracingMarker";
        case F:
        case z:
        case Ve:
        case ne:
        case le:
        case J:
          if (typeof a == "function")
            return a.displayName || a.name || null;
          if (typeof a == "string")
            return a;
          break;
      }
      return null;
    }
    var fu = S.ReactDebugCurrentFrame, Sn = null, ea = !1;
    function ta() {
      {
        if (Sn === null)
          return null;
        var e = Sn._debugOwner;
        if (e !== null && typeof e < "u")
          return it(e);
      }
      return null;
    }
    function du() {
      return Sn === null ? "" : Lf(Sn);
    }
    function xn() {
      fu.getCurrentStack = null, Sn = null, ea = !1;
    }
    function Ut(e) {
      fu.getCurrentStack = e === null ? null : du, Sn = e, ea = !1;
    }
    function xy() {
      return Sn;
    }
    function wa(e) {
      ea = e;
    }
    function nr(e) {
      return "" + e;
    }
    function Mi(e) {
      switch (typeof e) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return e;
        case "object":
          return Kt(e), e;
        default:
          return "";
      }
    }
    var dv = {
      button: !0,
      checkbox: !0,
      image: !0,
      hidden: !0,
      radio: !0,
      reset: !0,
      submit: !0
    };
    function ll(e, t) {
      dv[t.type] || t.onChange || t.onInput || t.readOnly || t.disabled || t.value == null || g("You provided a `value` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultValue`. Otherwise, set either `onChange` or `readOnly`."), t.onChange || t.readOnly || t.disabled || t.checked == null || g("You provided a `checked` prop to a form field without an `onChange` handler. This will render a read-only field. If the field should be mutable use `defaultChecked`. Otherwise, set either `onChange` or `readOnly`.");
    }
    function Uf(e) {
      var t = e.type, a = e.nodeName;
      return a && a.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
    }
    function pv(e) {
      return e._valueTracker;
    }
    function pu(e) {
      e._valueTracker = null;
    }
    function vu(e) {
      var t = "";
      return e && (Uf(e) ? t = e.checked ? "true" : "false" : t = e.value), t;
    }
    function ul(e) {
      var t = Uf(e) ? "checked" : "value", a = Object.getOwnPropertyDescriptor(e.constructor.prototype, t);
      Kt(e[t]);
      var i = "" + e[t];
      if (!(e.hasOwnProperty(t) || typeof a > "u" || typeof a.get != "function" || typeof a.set != "function")) {
        var l = a.get, s = a.set;
        Object.defineProperty(e, t, {
          configurable: !0,
          get: function() {
            return l.call(this);
          },
          set: function(h) {
            Kt(h), i = "" + h, s.call(this, h);
          }
        }), Object.defineProperty(e, t, {
          enumerable: a.enumerable
        });
        var d = {
          getValue: function() {
            return i;
          },
          setValue: function(h) {
            Kt(h), i = "" + h;
          },
          stopTracking: function() {
            pu(e), delete e[t];
          }
        };
        return d;
      }
    }
    function vo(e) {
      pv(e) || (e._valueTracker = ul(e));
    }
    function vv(e) {
      if (!e)
        return !1;
      var t = pv(e);
      if (!t)
        return !0;
      var a = t.getValue(), i = vu(e);
      return i !== a ? (t.setValue(i), !0) : !1;
    }
    function Ns(e) {
      if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u")
        return null;
      try {
        return e.activeElement || e.body;
      } catch {
        return e.body;
      }
    }
    var Ms = !1, hu = !1, _s = !1, Af = !1;
    function ni(e) {
      var t = e.type === "checkbox" || e.type === "radio";
      return t ? e.checked != null : e.value != null;
    }
    function mu(e, t) {
      var a = e, i = t.checked, l = vt({}, t, {
        defaultChecked: void 0,
        defaultValue: void 0,
        value: void 0,
        checked: i ?? a._wrapperState.initialChecked
      });
      return l;
    }
    function yu(e, t) {
      ll("input", t), t.checked !== void 0 && t.defaultChecked !== void 0 && !hu && (g("%s contains an input of type %s with both checked and defaultChecked props. Input elements must be either controlled or uncontrolled (specify either the checked prop, or the defaultChecked prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component", t.type), hu = !0), t.value !== void 0 && t.defaultValue !== void 0 && !Ms && (g("%s contains an input of type %s with both value and defaultValue props. Input elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled input element and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component", t.type), Ms = !0);
      var a = e, i = t.defaultValue == null ? "" : t.defaultValue;
      a._wrapperState = {
        initialChecked: t.checked != null ? t.checked : t.defaultChecked,
        initialValue: Mi(t.value != null ? t.value : i),
        controlled: ni(t)
      };
    }
    function Ff(e, t) {
      var a = e, i = t.checked;
      i != null && co(a, "checked", i, !1);
    }
    function sl(e, t) {
      var a = e;
      {
        var i = ni(t);
        !a._wrapperState.controlled && i && !Af && (g("A component is changing an uncontrolled input to be controlled. This is likely caused by the value changing from undefined to a defined value, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), Af = !0), a._wrapperState.controlled && !i && !_s && (g("A component is changing a controlled input to be uncontrolled. This is likely caused by the value changing from a defined to undefined, which should not happen. Decide between using a controlled or uncontrolled input element for the lifetime of the component. More info: https://reactjs.org/link/controlled-components"), _s = !0);
      }
      Ff(e, t);
      var l = Mi(t.value), s = t.type;
      if (l != null)
        s === "number" ? (l === 0 && a.value === "" || // We explicitly want to coerce to number here if possible.
        // eslint-disable-next-line
        a.value != l) && (a.value = nr(l)) : a.value !== nr(l) && (a.value = nr(l));
      else if (s === "submit" || s === "reset") {
        a.removeAttribute("value");
        return;
      }
      t.hasOwnProperty("value") ? _i(a, t.type, l) : t.hasOwnProperty("defaultValue") && _i(a, t.type, Mi(t.defaultValue)), t.checked == null && t.defaultChecked != null && (a.defaultChecked = !!t.defaultChecked);
    }
    function gu(e, t, a) {
      var i = e;
      if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
        var l = t.type, s = l === "submit" || l === "reset";
        if (s && (t.value === void 0 || t.value === null))
          return;
        var d = nr(i._wrapperState.initialValue);
        a || d !== i.value && (i.value = d), i.defaultValue = d;
      }
      var h = i.name;
      h !== "" && (i.name = ""), i.defaultChecked = !i.defaultChecked, i.defaultChecked = !!i._wrapperState.initialChecked, h !== "" && (i.name = h);
    }
    function hv(e, t) {
      var a = e;
      sl(a, t), Pr(a, t);
    }
    function Pr(e, t) {
      var a = t.name;
      if (t.type === "radio" && a != null) {
        for (var i = e; i.parentNode; )
          i = i.parentNode;
        mn(a, "name");
        for (var l = i.querySelectorAll("input[name=" + JSON.stringify("" + a) + '][type="radio"]'), s = 0; s < l.length; s++) {
          var d = l[s];
          if (!(d === e || d.form !== e.form)) {
            var h = Wh(d);
            if (!h)
              throw new Error("ReactDOMInput: Mixing React and non-React radio inputs with the same `name` is not supported.");
            vv(d), sl(d, h);
          }
        }
      }
    }
    function _i(e, t, a) {
      // Focused number inputs synchronize on blur. See ChangeEventPlugin.js
      (t !== "number" || Ns(e.ownerDocument) !== e) && (a == null ? e.defaultValue = nr(e._wrapperState.initialValue) : e.defaultValue !== nr(a) && (e.defaultValue = nr(a)));
    }
    var Ls = !1, cl = !1, mv = !1;
    function zs(e, t) {
      t.value == null && (typeof t.children == "object" && t.children !== null ? v.Children.forEach(t.children, function(a) {
        a != null && (typeof a == "string" || typeof a == "number" || cl || (cl = !0, g("Cannot infer the option value of complex children. Pass a `value` prop or use a plain string as children to <option>.")));
      }) : t.dangerouslySetInnerHTML != null && (mv || (mv = !0, g("Pass a `value` prop if you set dangerouslyInnerHTML so React knows which value should be selected.")))), t.selected != null && !Ls && (g("Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>."), Ls = !0);
    }
    function Pf(e, t) {
      t.value != null && e.setAttribute("value", nr(Mi(t.value)));
    }
    var Su = Array.isArray;
    function Ln(e) {
      return Su(e);
    }
    var Us;
    Us = !1;
    function yv() {
      var e = ta();
      return e ? `

Check the render method of \`` + e + "`." : "";
    }
    var gv = ["value", "defaultValue"];
    function Ry(e) {
      {
        ll("select", e);
        for (var t = 0; t < gv.length; t++) {
          var a = gv[t];
          if (e[a] != null) {
            var i = Ln(e[a]);
            e.multiple && !i ? g("The `%s` prop supplied to <select> must be an array if `multiple` is true.%s", a, yv()) : !e.multiple && i && g("The `%s` prop supplied to <select> must be a scalar value if `multiple` is false.%s", a, yv());
          }
        }
      }
    }
    function Li(e, t, a, i) {
      var l = e.options;
      if (t) {
        for (var s = a, d = {}, h = 0; h < s.length; h++)
          d["$" + s[h]] = !0;
        for (var y = 0; y < l.length; y++) {
          var b = d.hasOwnProperty("$" + l[y].value);
          l[y].selected !== b && (l[y].selected = b), b && i && (l[y].defaultSelected = !0);
        }
      } else {
        for (var C = nr(Mi(a)), N = null, k = 0; k < l.length; k++) {
          if (l[k].value === C) {
            l[k].selected = !0, i && (l[k].defaultSelected = !0);
            return;
          }
          N === null && !l[k].disabled && (N = l[k]);
        }
        N !== null && (N.selected = !0);
      }
    }
    function Hf(e, t) {
      return vt({}, t, {
        value: void 0
      });
    }
    function Sv(e, t) {
      var a = e;
      Ry(t), a._wrapperState = {
        wasMultiple: !!t.multiple
      }, t.value !== void 0 && t.defaultValue !== void 0 && !Us && (g("Select elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled select element and remove one of these props. More info: https://reactjs.org/link/controlled-components"), Us = !0);
    }
    function wy(e, t) {
      var a = e;
      a.multiple = !!t.multiple;
      var i = t.value;
      i != null ? Li(a, !!t.multiple, i, !1) : t.defaultValue != null && Li(a, !!t.multiple, t.defaultValue, !0);
    }
    function Dy(e, t) {
      var a = e, i = a._wrapperState.wasMultiple;
      a._wrapperState.wasMultiple = !!t.multiple;
      var l = t.value;
      l != null ? Li(a, !!t.multiple, l, !1) : i !== !!t.multiple && (t.defaultValue != null ? Li(a, !!t.multiple, t.defaultValue, !0) : Li(a, !!t.multiple, t.multiple ? [] : "", !1));
    }
    function ky(e, t) {
      var a = e, i = t.value;
      i != null && Li(a, !!t.multiple, i, !1);
    }
    var jf = !1;
    function Vf(e, t) {
      var a = e;
      if (t.dangerouslySetInnerHTML != null)
        throw new Error("`dangerouslySetInnerHTML` does not make sense on <textarea>.");
      var i = vt({}, t, {
        value: void 0,
        defaultValue: void 0,
        children: nr(a._wrapperState.initialValue)
      });
      return i;
    }
    function Ev(e, t) {
      var a = e;
      ll("textarea", t), t.value !== void 0 && t.defaultValue !== void 0 && !jf && (g("%s contains a textarea with both value and defaultValue props. Textarea elements must be either controlled or uncontrolled (specify either the value prop, or the defaultValue prop, but not both). Decide between using a controlled or uncontrolled textarea and remove one of these props. More info: https://reactjs.org/link/controlled-components", ta() || "A component"), jf = !0);
      var i = t.value;
      if (i == null) {
        var l = t.children, s = t.defaultValue;
        if (l != null) {
          g("Use the `defaultValue` or `value` props instead of setting children on <textarea>.");
          {
            if (s != null)
              throw new Error("If you supply `defaultValue` on a <textarea>, do not pass children.");
            if (Ln(l)) {
              if (l.length > 1)
                throw new Error("<textarea> can only have at most one child.");
              l = l[0];
            }
            s = l;
          }
        }
        s == null && (s = ""), i = s;
      }
      a._wrapperState = {
        initialValue: Mi(i)
      };
    }
    function bv(e, t) {
      var a = e, i = Mi(t.value), l = Mi(t.defaultValue);
      if (i != null) {
        var s = nr(i);
        s !== a.value && (a.value = s), t.defaultValue == null && a.defaultValue !== s && (a.defaultValue = s);
      }
      l != null && (a.defaultValue = nr(l));
    }
    function Cv(e, t) {
      var a = e, i = a.textContent;
      i === a._wrapperState.initialValue && i !== "" && i !== null && (a.value = i);
    }
    function Bf(e, t) {
      bv(e, t);
    }
    var ri = "http://www.w3.org/1999/xhtml", Oy = "http://www.w3.org/1998/Math/MathML", If = "http://www.w3.org/2000/svg";
    function As(e) {
      switch (e) {
        case "svg":
          return If;
        case "math":
          return Oy;
        default:
          return ri;
      }
    }
    function $f(e, t) {
      return e == null || e === ri ? As(t) : e === If && t === "foreignObject" ? ri : e;
    }
    var Ny = function(e) {
      return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction ? function(t, a, i, l) {
        MSApp.execUnsafeLocalFunction(function() {
          return e(t, a, i, l);
        });
      } : e;
    }, Fs, Tv = Ny(function(e, t) {
      if (e.namespaceURI === If && !("innerHTML" in e)) {
        Fs = Fs || document.createElement("div"), Fs.innerHTML = "<svg>" + t.valueOf().toString() + "</svg>";
        for (var a = Fs.firstChild; e.firstChild; )
          e.removeChild(e.firstChild);
        for (; a.firstChild; )
          e.appendChild(a.firstChild);
        return;
      }
      e.innerHTML = t;
    }), xr = 1, ai = 3, En = 8, Da = 9, ho = 11, Ps = function(e, t) {
      if (t) {
        var a = e.firstChild;
        if (a && a === e.lastChild && a.nodeType === ai) {
          a.nodeValue = t;
          return;
        }
      }
      e.textContent = t;
    }, xv = {
      animation: ["animationDelay", "animationDirection", "animationDuration", "animationFillMode", "animationIterationCount", "animationName", "animationPlayState", "animationTimingFunction"],
      background: ["backgroundAttachment", "backgroundClip", "backgroundColor", "backgroundImage", "backgroundOrigin", "backgroundPositionX", "backgroundPositionY", "backgroundRepeat", "backgroundSize"],
      backgroundPosition: ["backgroundPositionX", "backgroundPositionY"],
      border: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth", "borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth", "borderLeftColor", "borderLeftStyle", "borderLeftWidth", "borderRightColor", "borderRightStyle", "borderRightWidth", "borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderBlockEnd: ["borderBlockEndColor", "borderBlockEndStyle", "borderBlockEndWidth"],
      borderBlockStart: ["borderBlockStartColor", "borderBlockStartStyle", "borderBlockStartWidth"],
      borderBottom: ["borderBottomColor", "borderBottomStyle", "borderBottomWidth"],
      borderColor: ["borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor"],
      borderImage: ["borderImageOutset", "borderImageRepeat", "borderImageSlice", "borderImageSource", "borderImageWidth"],
      borderInlineEnd: ["borderInlineEndColor", "borderInlineEndStyle", "borderInlineEndWidth"],
      borderInlineStart: ["borderInlineStartColor", "borderInlineStartStyle", "borderInlineStartWidth"],
      borderLeft: ["borderLeftColor", "borderLeftStyle", "borderLeftWidth"],
      borderRadius: ["borderBottomLeftRadius", "borderBottomRightRadius", "borderTopLeftRadius", "borderTopRightRadius"],
      borderRight: ["borderRightColor", "borderRightStyle", "borderRightWidth"],
      borderStyle: ["borderBottomStyle", "borderLeftStyle", "borderRightStyle", "borderTopStyle"],
      borderTop: ["borderTopColor", "borderTopStyle", "borderTopWidth"],
      borderWidth: ["borderBottomWidth", "borderLeftWidth", "borderRightWidth", "borderTopWidth"],
      columnRule: ["columnRuleColor", "columnRuleStyle", "columnRuleWidth"],
      columns: ["columnCount", "columnWidth"],
      flex: ["flexBasis", "flexGrow", "flexShrink"],
      flexFlow: ["flexDirection", "flexWrap"],
      font: ["fontFamily", "fontFeatureSettings", "fontKerning", "fontLanguageOverride", "fontSize", "fontSizeAdjust", "fontStretch", "fontStyle", "fontVariant", "fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition", "fontWeight", "lineHeight"],
      fontVariant: ["fontVariantAlternates", "fontVariantCaps", "fontVariantEastAsian", "fontVariantLigatures", "fontVariantNumeric", "fontVariantPosition"],
      gap: ["columnGap", "rowGap"],
      grid: ["gridAutoColumns", "gridAutoFlow", "gridAutoRows", "gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      gridArea: ["gridColumnEnd", "gridColumnStart", "gridRowEnd", "gridRowStart"],
      gridColumn: ["gridColumnEnd", "gridColumnStart"],
      gridColumnGap: ["columnGap"],
      gridGap: ["columnGap", "rowGap"],
      gridRow: ["gridRowEnd", "gridRowStart"],
      gridRowGap: ["rowGap"],
      gridTemplate: ["gridTemplateAreas", "gridTemplateColumns", "gridTemplateRows"],
      listStyle: ["listStyleImage", "listStylePosition", "listStyleType"],
      margin: ["marginBottom", "marginLeft", "marginRight", "marginTop"],
      marker: ["markerEnd", "markerMid", "markerStart"],
      mask: ["maskClip", "maskComposite", "maskImage", "maskMode", "maskOrigin", "maskPositionX", "maskPositionY", "maskRepeat", "maskSize"],
      maskPosition: ["maskPositionX", "maskPositionY"],
      outline: ["outlineColor", "outlineStyle", "outlineWidth"],
      overflow: ["overflowX", "overflowY"],
      padding: ["paddingBottom", "paddingLeft", "paddingRight", "paddingTop"],
      placeContent: ["alignContent", "justifyContent"],
      placeItems: ["alignItems", "justifyItems"],
      placeSelf: ["alignSelf", "justifySelf"],
      textDecoration: ["textDecorationColor", "textDecorationLine", "textDecorationStyle"],
      textEmphasis: ["textEmphasisColor", "textEmphasisStyle"],
      transition: ["transitionDelay", "transitionDuration", "transitionProperty", "transitionTimingFunction"],
      wordWrap: ["overflowWrap"]
    }, fl = {
      animationIterationCount: !0,
      aspectRatio: !0,
      borderImageOutset: !0,
      borderImageSlice: !0,
      borderImageWidth: !0,
      boxFlex: !0,
      boxFlexGroup: !0,
      boxOrdinalGroup: !0,
      columnCount: !0,
      columns: !0,
      flex: !0,
      flexGrow: !0,
      flexPositive: !0,
      flexShrink: !0,
      flexNegative: !0,
      flexOrder: !0,
      gridArea: !0,
      gridRow: !0,
      gridRowEnd: !0,
      gridRowSpan: !0,
      gridRowStart: !0,
      gridColumn: !0,
      gridColumnEnd: !0,
      gridColumnSpan: !0,
      gridColumnStart: !0,
      fontWeight: !0,
      lineClamp: !0,
      lineHeight: !0,
      opacity: !0,
      order: !0,
      orphans: !0,
      tabSize: !0,
      widows: !0,
      zIndex: !0,
      zoom: !0,
      // SVG-related properties
      fillOpacity: !0,
      floodOpacity: !0,
      stopOpacity: !0,
      strokeDasharray: !0,
      strokeDashoffset: !0,
      strokeMiterlimit: !0,
      strokeOpacity: !0,
      strokeWidth: !0
    };
    function Rv(e, t) {
      return e + t.charAt(0).toUpperCase() + t.substring(1);
    }
    var wv = ["Webkit", "ms", "Moz", "O"];
    Object.keys(fl).forEach(function(e) {
      wv.forEach(function(t) {
        fl[Rv(t, e)] = fl[e];
      });
    });
    function Hs(e, t, a) {
      var i = t == null || typeof t == "boolean" || t === "";
      return i ? "" : !a && typeof t == "number" && t !== 0 && !(fl.hasOwnProperty(e) && fl[e]) ? t + "px" : (Lt(t, e), ("" + t).trim());
    }
    var dl = /([A-Z])/g, My = /^ms-/;
    function _y(e) {
      return e.replace(dl, "-$1").toLowerCase().replace(My, "-ms-");
    }
    var Dv = function() {
    };
    {
      var kv = /^(?:webkit|moz|o)[A-Z]/, Ov = /^-ms-/, Eu = /-(.)/g, pl = /;\s*$/, vl = {}, hl = {}, Nv = !1, Wf = !1, Yf = function(e) {
        return e.replace(Eu, function(t, a) {
          return a.toUpperCase();
        });
      }, Qf = function(e) {
        vl.hasOwnProperty(e) && vl[e] || (vl[e] = !0, g(
          "Unsupported style property %s. Did you mean %s?",
          e,
          // As Andi Smith suggests
          // (http://www.andismith.com/blog/2012/02/modernizr-prefixed/), an `-ms` prefix
          // is converted to lowercase `ms`.
          Yf(e.replace(Ov, "ms-"))
        ));
      }, Mv = function(e) {
        vl.hasOwnProperty(e) && vl[e] || (vl[e] = !0, g("Unsupported vendor-prefixed style property %s. Did you mean %s?", e, e.charAt(0).toUpperCase() + e.slice(1)));
      }, _v = function(e, t) {
        hl.hasOwnProperty(t) && hl[t] || (hl[t] = !0, g(`Style property values shouldn't contain a semicolon. Try "%s: %s" instead.`, e, t.replace(pl, "")));
      }, Lv = function(e, t) {
        Nv || (Nv = !0, g("`NaN` is an invalid value for the `%s` css style property.", e));
      }, Ly = function(e, t) {
        Wf || (Wf = !0, g("`Infinity` is an invalid value for the `%s` css style property.", e));
      };
      Dv = function(e, t) {
        e.indexOf("-") > -1 ? Qf(e) : kv.test(e) ? Mv(e) : pl.test(t) && _v(e, t), typeof t == "number" && (isNaN(t) ? Lv(e, t) : isFinite(t) || Ly(e, t));
      };
    }
    var zy = Dv;
    function Uy(e) {
      {
        var t = "", a = "";
        for (var i in e)
          if (e.hasOwnProperty(i)) {
            var l = e[i];
            if (l != null) {
              var s = i.indexOf("--") === 0;
              t += a + (s ? i : _y(i)) + ":", t += Hs(i, l, s), a = ";";
            }
          }
        return t || null;
      }
    }
    function zv(e, t) {
      var a = e.style;
      for (var i in t)
        if (t.hasOwnProperty(i)) {
          var l = i.indexOf("--") === 0;
          l || zy(i, t[i]);
          var s = Hs(i, t[i], l);
          i === "float" && (i = "cssFloat"), l ? a.setProperty(i, s) : a[i] = s;
        }
    }
    function Ay(e) {
      return e == null || typeof e == "boolean" || e === "";
    }
    function na(e) {
      var t = {};
      for (var a in e)
        for (var i = xv[a] || [a], l = 0; l < i.length; l++)
          t[i[l]] = a;
      return t;
    }
    function bu(e, t) {
      {
        if (!t)
          return;
        var a = na(e), i = na(t), l = {};
        for (var s in a) {
          var d = a[s], h = i[s];
          if (h && d !== h) {
            var y = d + "," + h;
            if (l[y])
              continue;
            l[y] = !0, g("%s a style property during rerender (%s) when a conflicting property is set (%s) can lead to styling bugs. To avoid this, don't mix shorthand and non-shorthand properties for the same value; instead, replace the shorthand with separate values.", Ay(e[d]) ? "Removing" : "Updating", d, h);
          }
        }
      }
    }
    var Uv = {
      area: !0,
      base: !0,
      br: !0,
      col: !0,
      embed: !0,
      hr: !0,
      img: !0,
      input: !0,
      keygen: !0,
      link: !0,
      meta: !0,
      param: !0,
      source: !0,
      track: !0,
      wbr: !0
      // NOTE: menuitem's close tag should be omitted, but that causes problems.
    }, Av = vt({
      menuitem: !0
    }, Uv), Fv = "__html";
    function js(e, t) {
      if (t) {
        if (Av[e] && (t.children != null || t.dangerouslySetInnerHTML != null))
          throw new Error(e + " is a void element tag and must neither have `children` nor use `dangerouslySetInnerHTML`.");
        if (t.dangerouslySetInnerHTML != null) {
          if (t.children != null)
            throw new Error("Can only set one of `children` or `props.dangerouslySetInnerHTML`.");
          if (typeof t.dangerouslySetInnerHTML != "object" || !(Fv in t.dangerouslySetInnerHTML))
            throw new Error("`props.dangerouslySetInnerHTML` must be in the form `{__html: ...}`. Please visit https://reactjs.org/link/dangerously-set-inner-html for more information.");
        }
        if (!t.suppressContentEditableWarning && t.contentEditable && t.children != null && g("A component is `contentEditable` and contains `children` managed by React. It is now your responsibility to guarantee that none of those nodes are unexpectedly modified or duplicated. This is probably not intentional."), t.style != null && typeof t.style != "object")
          throw new Error("The `style` prop expects a mapping from style properties to values, not a string. For example, style={{marginRight: spacing + 'em'}} when using JSX.");
      }
    }
    function ii(e, t) {
      if (e.indexOf("-") === -1)
        return typeof t.is == "string";
      switch (e) {
        case "annotation-xml":
        case "color-profile":
        case "font-face":
        case "font-face-src":
        case "font-face-uri":
        case "font-face-format":
        case "font-face-name":
        case "missing-glyph":
          return !1;
        default:
          return !0;
      }
    }
    var Vs = {
      // HTML
      accept: "accept",
      acceptcharset: "acceptCharset",
      "accept-charset": "acceptCharset",
      accesskey: "accessKey",
      action: "action",
      allowfullscreen: "allowFullScreen",
      alt: "alt",
      as: "as",
      async: "async",
      autocapitalize: "autoCapitalize",
      autocomplete: "autoComplete",
      autocorrect: "autoCorrect",
      autofocus: "autoFocus",
      autoplay: "autoPlay",
      autosave: "autoSave",
      capture: "capture",
      cellpadding: "cellPadding",
      cellspacing: "cellSpacing",
      challenge: "challenge",
      charset: "charSet",
      checked: "checked",
      children: "children",
      cite: "cite",
      class: "className",
      classid: "classID",
      classname: "className",
      cols: "cols",
      colspan: "colSpan",
      content: "content",
      contenteditable: "contentEditable",
      contextmenu: "contextMenu",
      controls: "controls",
      controlslist: "controlsList",
      coords: "coords",
      crossorigin: "crossOrigin",
      dangerouslysetinnerhtml: "dangerouslySetInnerHTML",
      data: "data",
      datetime: "dateTime",
      default: "default",
      defaultchecked: "defaultChecked",
      defaultvalue: "defaultValue",
      defer: "defer",
      dir: "dir",
      disabled: "disabled",
      disablepictureinpicture: "disablePictureInPicture",
      disableremoteplayback: "disableRemotePlayback",
      download: "download",
      draggable: "draggable",
      enctype: "encType",
      enterkeyhint: "enterKeyHint",
      for: "htmlFor",
      form: "form",
      formmethod: "formMethod",
      formaction: "formAction",
      formenctype: "formEncType",
      formnovalidate: "formNoValidate",
      formtarget: "formTarget",
      frameborder: "frameBorder",
      headers: "headers",
      height: "height",
      hidden: "hidden",
      high: "high",
      href: "href",
      hreflang: "hrefLang",
      htmlfor: "htmlFor",
      httpequiv: "httpEquiv",
      "http-equiv": "httpEquiv",
      icon: "icon",
      id: "id",
      imagesizes: "imageSizes",
      imagesrcset: "imageSrcSet",
      innerhtml: "innerHTML",
      inputmode: "inputMode",
      integrity: "integrity",
      is: "is",
      itemid: "itemID",
      itemprop: "itemProp",
      itemref: "itemRef",
      itemscope: "itemScope",
      itemtype: "itemType",
      keyparams: "keyParams",
      keytype: "keyType",
      kind: "kind",
      label: "label",
      lang: "lang",
      list: "list",
      loop: "loop",
      low: "low",
      manifest: "manifest",
      marginwidth: "marginWidth",
      marginheight: "marginHeight",
      max: "max",
      maxlength: "maxLength",
      media: "media",
      mediagroup: "mediaGroup",
      method: "method",
      min: "min",
      minlength: "minLength",
      multiple: "multiple",
      muted: "muted",
      name: "name",
      nomodule: "noModule",
      nonce: "nonce",
      novalidate: "noValidate",
      open: "open",
      optimum: "optimum",
      pattern: "pattern",
      placeholder: "placeholder",
      playsinline: "playsInline",
      poster: "poster",
      preload: "preload",
      profile: "profile",
      radiogroup: "radioGroup",
      readonly: "readOnly",
      referrerpolicy: "referrerPolicy",
      rel: "rel",
      required: "required",
      reversed: "reversed",
      role: "role",
      rows: "rows",
      rowspan: "rowSpan",
      sandbox: "sandbox",
      scope: "scope",
      scoped: "scoped",
      scrolling: "scrolling",
      seamless: "seamless",
      selected: "selected",
      shape: "shape",
      size: "size",
      sizes: "sizes",
      span: "span",
      spellcheck: "spellCheck",
      src: "src",
      srcdoc: "srcDoc",
      srclang: "srcLang",
      srcset: "srcSet",
      start: "start",
      step: "step",
      style: "style",
      summary: "summary",
      tabindex: "tabIndex",
      target: "target",
      title: "title",
      type: "type",
      usemap: "useMap",
      value: "value",
      width: "width",
      wmode: "wmode",
      wrap: "wrap",
      // SVG
      about: "about",
      accentheight: "accentHeight",
      "accent-height": "accentHeight",
      accumulate: "accumulate",
      additive: "additive",
      alignmentbaseline: "alignmentBaseline",
      "alignment-baseline": "alignmentBaseline",
      allowreorder: "allowReorder",
      alphabetic: "alphabetic",
      amplitude: "amplitude",
      arabicform: "arabicForm",
      "arabic-form": "arabicForm",
      ascent: "ascent",
      attributename: "attributeName",
      attributetype: "attributeType",
      autoreverse: "autoReverse",
      azimuth: "azimuth",
      basefrequency: "baseFrequency",
      baselineshift: "baselineShift",
      "baseline-shift": "baselineShift",
      baseprofile: "baseProfile",
      bbox: "bbox",
      begin: "begin",
      bias: "bias",
      by: "by",
      calcmode: "calcMode",
      capheight: "capHeight",
      "cap-height": "capHeight",
      clip: "clip",
      clippath: "clipPath",
      "clip-path": "clipPath",
      clippathunits: "clipPathUnits",
      cliprule: "clipRule",
      "clip-rule": "clipRule",
      color: "color",
      colorinterpolation: "colorInterpolation",
      "color-interpolation": "colorInterpolation",
      colorinterpolationfilters: "colorInterpolationFilters",
      "color-interpolation-filters": "colorInterpolationFilters",
      colorprofile: "colorProfile",
      "color-profile": "colorProfile",
      colorrendering: "colorRendering",
      "color-rendering": "colorRendering",
      contentscripttype: "contentScriptType",
      contentstyletype: "contentStyleType",
      cursor: "cursor",
      cx: "cx",
      cy: "cy",
      d: "d",
      datatype: "datatype",
      decelerate: "decelerate",
      descent: "descent",
      diffuseconstant: "diffuseConstant",
      direction: "direction",
      display: "display",
      divisor: "divisor",
      dominantbaseline: "dominantBaseline",
      "dominant-baseline": "dominantBaseline",
      dur: "dur",
      dx: "dx",
      dy: "dy",
      edgemode: "edgeMode",
      elevation: "elevation",
      enablebackground: "enableBackground",
      "enable-background": "enableBackground",
      end: "end",
      exponent: "exponent",
      externalresourcesrequired: "externalResourcesRequired",
      fill: "fill",
      fillopacity: "fillOpacity",
      "fill-opacity": "fillOpacity",
      fillrule: "fillRule",
      "fill-rule": "fillRule",
      filter: "filter",
      filterres: "filterRes",
      filterunits: "filterUnits",
      floodopacity: "floodOpacity",
      "flood-opacity": "floodOpacity",
      floodcolor: "floodColor",
      "flood-color": "floodColor",
      focusable: "focusable",
      fontfamily: "fontFamily",
      "font-family": "fontFamily",
      fontsize: "fontSize",
      "font-size": "fontSize",
      fontsizeadjust: "fontSizeAdjust",
      "font-size-adjust": "fontSizeAdjust",
      fontstretch: "fontStretch",
      "font-stretch": "fontStretch",
      fontstyle: "fontStyle",
      "font-style": "fontStyle",
      fontvariant: "fontVariant",
      "font-variant": "fontVariant",
      fontweight: "fontWeight",
      "font-weight": "fontWeight",
      format: "format",
      from: "from",
      fx: "fx",
      fy: "fy",
      g1: "g1",
      g2: "g2",
      glyphname: "glyphName",
      "glyph-name": "glyphName",
      glyphorientationhorizontal: "glyphOrientationHorizontal",
      "glyph-orientation-horizontal": "glyphOrientationHorizontal",
      glyphorientationvertical: "glyphOrientationVertical",
      "glyph-orientation-vertical": "glyphOrientationVertical",
      glyphref: "glyphRef",
      gradienttransform: "gradientTransform",
      gradientunits: "gradientUnits",
      hanging: "hanging",
      horizadvx: "horizAdvX",
      "horiz-adv-x": "horizAdvX",
      horizoriginx: "horizOriginX",
      "horiz-origin-x": "horizOriginX",
      ideographic: "ideographic",
      imagerendering: "imageRendering",
      "image-rendering": "imageRendering",
      in2: "in2",
      in: "in",
      inlist: "inlist",
      intercept: "intercept",
      k1: "k1",
      k2: "k2",
      k3: "k3",
      k4: "k4",
      k: "k",
      kernelmatrix: "kernelMatrix",
      kernelunitlength: "kernelUnitLength",
      kerning: "kerning",
      keypoints: "keyPoints",
      keysplines: "keySplines",
      keytimes: "keyTimes",
      lengthadjust: "lengthAdjust",
      letterspacing: "letterSpacing",
      "letter-spacing": "letterSpacing",
      lightingcolor: "lightingColor",
      "lighting-color": "lightingColor",
      limitingconeangle: "limitingConeAngle",
      local: "local",
      markerend: "markerEnd",
      "marker-end": "markerEnd",
      markerheight: "markerHeight",
      markermid: "markerMid",
      "marker-mid": "markerMid",
      markerstart: "markerStart",
      "marker-start": "markerStart",
      markerunits: "markerUnits",
      markerwidth: "markerWidth",
      mask: "mask",
      maskcontentunits: "maskContentUnits",
      maskunits: "maskUnits",
      mathematical: "mathematical",
      mode: "mode",
      numoctaves: "numOctaves",
      offset: "offset",
      opacity: "opacity",
      operator: "operator",
      order: "order",
      orient: "orient",
      orientation: "orientation",
      origin: "origin",
      overflow: "overflow",
      overlineposition: "overlinePosition",
      "overline-position": "overlinePosition",
      overlinethickness: "overlineThickness",
      "overline-thickness": "overlineThickness",
      paintorder: "paintOrder",
      "paint-order": "paintOrder",
      panose1: "panose1",
      "panose-1": "panose1",
      pathlength: "pathLength",
      patterncontentunits: "patternContentUnits",
      patterntransform: "patternTransform",
      patternunits: "patternUnits",
      pointerevents: "pointerEvents",
      "pointer-events": "pointerEvents",
      points: "points",
      pointsatx: "pointsAtX",
      pointsaty: "pointsAtY",
      pointsatz: "pointsAtZ",
      prefix: "prefix",
      preservealpha: "preserveAlpha",
      preserveaspectratio: "preserveAspectRatio",
      primitiveunits: "primitiveUnits",
      property: "property",
      r: "r",
      radius: "radius",
      refx: "refX",
      refy: "refY",
      renderingintent: "renderingIntent",
      "rendering-intent": "renderingIntent",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      requiredextensions: "requiredExtensions",
      requiredfeatures: "requiredFeatures",
      resource: "resource",
      restart: "restart",
      result: "result",
      results: "results",
      rotate: "rotate",
      rx: "rx",
      ry: "ry",
      scale: "scale",
      security: "security",
      seed: "seed",
      shaperendering: "shapeRendering",
      "shape-rendering": "shapeRendering",
      slope: "slope",
      spacing: "spacing",
      specularconstant: "specularConstant",
      specularexponent: "specularExponent",
      speed: "speed",
      spreadmethod: "spreadMethod",
      startoffset: "startOffset",
      stddeviation: "stdDeviation",
      stemh: "stemh",
      stemv: "stemv",
      stitchtiles: "stitchTiles",
      stopcolor: "stopColor",
      "stop-color": "stopColor",
      stopopacity: "stopOpacity",
      "stop-opacity": "stopOpacity",
      strikethroughposition: "strikethroughPosition",
      "strikethrough-position": "strikethroughPosition",
      strikethroughthickness: "strikethroughThickness",
      "strikethrough-thickness": "strikethroughThickness",
      string: "string",
      stroke: "stroke",
      strokedasharray: "strokeDasharray",
      "stroke-dasharray": "strokeDasharray",
      strokedashoffset: "strokeDashoffset",
      "stroke-dashoffset": "strokeDashoffset",
      strokelinecap: "strokeLinecap",
      "stroke-linecap": "strokeLinecap",
      strokelinejoin: "strokeLinejoin",
      "stroke-linejoin": "strokeLinejoin",
      strokemiterlimit: "strokeMiterlimit",
      "stroke-miterlimit": "strokeMiterlimit",
      strokewidth: "strokeWidth",
      "stroke-width": "strokeWidth",
      strokeopacity: "strokeOpacity",
      "stroke-opacity": "strokeOpacity",
      suppresscontenteditablewarning: "suppressContentEditableWarning",
      suppresshydrationwarning: "suppressHydrationWarning",
      surfacescale: "surfaceScale",
      systemlanguage: "systemLanguage",
      tablevalues: "tableValues",
      targetx: "targetX",
      targety: "targetY",
      textanchor: "textAnchor",
      "text-anchor": "textAnchor",
      textdecoration: "textDecoration",
      "text-decoration": "textDecoration",
      textlength: "textLength",
      textrendering: "textRendering",
      "text-rendering": "textRendering",
      to: "to",
      transform: "transform",
      typeof: "typeof",
      u1: "u1",
      u2: "u2",
      underlineposition: "underlinePosition",
      "underline-position": "underlinePosition",
      underlinethickness: "underlineThickness",
      "underline-thickness": "underlineThickness",
      unicode: "unicode",
      unicodebidi: "unicodeBidi",
      "unicode-bidi": "unicodeBidi",
      unicoderange: "unicodeRange",
      "unicode-range": "unicodeRange",
      unitsperem: "unitsPerEm",
      "units-per-em": "unitsPerEm",
      unselectable: "unselectable",
      valphabetic: "vAlphabetic",
      "v-alphabetic": "vAlphabetic",
      values: "values",
      vectoreffect: "vectorEffect",
      "vector-effect": "vectorEffect",
      version: "version",
      vertadvy: "vertAdvY",
      "vert-adv-y": "vertAdvY",
      vertoriginx: "vertOriginX",
      "vert-origin-x": "vertOriginX",
      vertoriginy: "vertOriginY",
      "vert-origin-y": "vertOriginY",
      vhanging: "vHanging",
      "v-hanging": "vHanging",
      videographic: "vIdeographic",
      "v-ideographic": "vIdeographic",
      viewbox: "viewBox",
      viewtarget: "viewTarget",
      visibility: "visibility",
      vmathematical: "vMathematical",
      "v-mathematical": "vMathematical",
      vocab: "vocab",
      widths: "widths",
      wordspacing: "wordSpacing",
      "word-spacing": "wordSpacing",
      writingmode: "writingMode",
      "writing-mode": "writingMode",
      x1: "x1",
      x2: "x2",
      x: "x",
      xchannelselector: "xChannelSelector",
      xheight: "xHeight",
      "x-height": "xHeight",
      xlinkactuate: "xlinkActuate",
      "xlink:actuate": "xlinkActuate",
      xlinkarcrole: "xlinkArcrole",
      "xlink:arcrole": "xlinkArcrole",
      xlinkhref: "xlinkHref",
      "xlink:href": "xlinkHref",
      xlinkrole: "xlinkRole",
      "xlink:role": "xlinkRole",
      xlinkshow: "xlinkShow",
      "xlink:show": "xlinkShow",
      xlinktitle: "xlinkTitle",
      "xlink:title": "xlinkTitle",
      xlinktype: "xlinkType",
      "xlink:type": "xlinkType",
      xmlbase: "xmlBase",
      "xml:base": "xmlBase",
      xmllang: "xmlLang",
      "xml:lang": "xmlLang",
      xmlns: "xmlns",
      "xml:space": "xmlSpace",
      xmlnsxlink: "xmlnsXlink",
      "xmlns:xlink": "xmlnsXlink",
      xmlspace: "xmlSpace",
      y1: "y1",
      y2: "y2",
      y: "y",
      ychannelselector: "yChannelSelector",
      z: "z",
      zoomandpan: "zoomAndPan"
    }, Pv = {
      "aria-current": 0,
      // state
      "aria-description": 0,
      "aria-details": 0,
      "aria-disabled": 0,
      // state
      "aria-hidden": 0,
      // state
      "aria-invalid": 0,
      // state
      "aria-keyshortcuts": 0,
      "aria-label": 0,
      "aria-roledescription": 0,
      // Widget Attributes
      "aria-autocomplete": 0,
      "aria-checked": 0,
      "aria-expanded": 0,
      "aria-haspopup": 0,
      "aria-level": 0,
      "aria-modal": 0,
      "aria-multiline": 0,
      "aria-multiselectable": 0,
      "aria-orientation": 0,
      "aria-placeholder": 0,
      "aria-pressed": 0,
      "aria-readonly": 0,
      "aria-required": 0,
      "aria-selected": 0,
      "aria-sort": 0,
      "aria-valuemax": 0,
      "aria-valuemin": 0,
      "aria-valuenow": 0,
      "aria-valuetext": 0,
      // Live Region Attributes
      "aria-atomic": 0,
      "aria-busy": 0,
      "aria-live": 0,
      "aria-relevant": 0,
      // Drag-and-Drop Attributes
      "aria-dropeffect": 0,
      "aria-grabbed": 0,
      // Relationship Attributes
      "aria-activedescendant": 0,
      "aria-colcount": 0,
      "aria-colindex": 0,
      "aria-colspan": 0,
      "aria-controls": 0,
      "aria-describedby": 0,
      "aria-errormessage": 0,
      "aria-flowto": 0,
      "aria-labelledby": 0,
      "aria-owns": 0,
      "aria-posinset": 0,
      "aria-rowcount": 0,
      "aria-rowindex": 0,
      "aria-rowspan": 0,
      "aria-setsize": 0
    }, ka = {}, qf = new RegExp("^(aria)-[" + He + "]*$"), Cu = new RegExp("^(aria)[A-Z][" + He + "]*$");
    function Gf(e, t) {
      {
        if (tt.call(ka, t) && ka[t])
          return !0;
        if (Cu.test(t)) {
          var a = "aria-" + t.slice(4).toLowerCase(), i = Pv.hasOwnProperty(a) ? a : null;
          if (i == null)
            return g("Invalid ARIA attribute `%s`. ARIA attributes follow the pattern aria-* and must be lowercase.", t), ka[t] = !0, !0;
          if (t !== i)
            return g("Invalid ARIA attribute `%s`. Did you mean `%s`?", t, i), ka[t] = !0, !0;
        }
        if (qf.test(t)) {
          var l = t.toLowerCase(), s = Pv.hasOwnProperty(l) ? l : null;
          if (s == null)
            return ka[t] = !0, !1;
          if (t !== s)
            return g("Unknown ARIA attribute `%s`. Did you mean `%s`?", t, s), ka[t] = !0, !0;
        }
      }
      return !0;
    }
    function Hv(e, t) {
      {
        var a = [];
        for (var i in t) {
          var l = Gf(e, i);
          l || a.push(i);
        }
        var s = a.map(function(d) {
          return "`" + d + "`";
        }).join(", ");
        a.length === 1 ? g("Invalid aria prop %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e) : a.length > 1 && g("Invalid aria props %s on <%s> tag. For details, see https://reactjs.org/link/invalid-aria-props", s, e);
      }
    }
    function Bs(e, t) {
      ii(e, t) || Hv(e, t);
    }
    var mo = !1;
    function Kf(e, t) {
      {
        if (e !== "input" && e !== "textarea" && e !== "select")
          return;
        t != null && t.value === null && !mo && (mo = !0, e === "select" && t.multiple ? g("`value` prop on `%s` should not be null. Consider using an empty array when `multiple` is set to `true` to clear the component or `undefined` for uncontrolled components.", e) : g("`value` prop on `%s` should not be null. Consider using an empty string to clear the component or `undefined` for uncontrolled components.", e));
      }
    }
    var Xf = function() {
    };
    {
      var zn = {}, Zf = /^on./, jv = /^on[^A-Z]/, Vv = new RegExp("^(aria)-[" + He + "]*$"), Bv = new RegExp("^(aria)[A-Z][" + He + "]*$");
      Xf = function(e, t, a, i) {
        if (tt.call(zn, t) && zn[t])
          return !0;
        var l = t.toLowerCase();
        if (l === "onfocusin" || l === "onfocusout")
          return g("React uses onFocus and onBlur instead of onFocusIn and onFocusOut. All React events are normalized to bubble, so onFocusIn and onFocusOut are not needed/supported by React."), zn[t] = !0, !0;
        if (i != null) {
          var s = i.registrationNameDependencies, d = i.possibleRegistrationNames;
          if (s.hasOwnProperty(t))
            return !0;
          var h = d.hasOwnProperty(l) ? d[l] : null;
          if (h != null)
            return g("Invalid event handler property `%s`. Did you mean `%s`?", t, h), zn[t] = !0, !0;
          if (Zf.test(t))
            return g("Unknown event handler property `%s`. It will be ignored.", t), zn[t] = !0, !0;
        } else if (Zf.test(t))
          return jv.test(t) && g("Invalid event handler property `%s`. React events use the camelCase naming convention, for example `onClick`.", t), zn[t] = !0, !0;
        if (Vv.test(t) || Bv.test(t))
          return !0;
        if (l === "innerhtml")
          return g("Directly setting property `innerHTML` is not permitted. For more information, lookup documentation on `dangerouslySetInnerHTML`."), zn[t] = !0, !0;
        if (l === "aria")
          return g("The `aria` attribute is reserved for future use in React. Pass individual `aria-` attributes instead."), zn[t] = !0, !0;
        if (l === "is" && a !== null && a !== void 0 && typeof a != "string")
          return g("Received a `%s` for a string attribute `is`. If this is expected, cast the value to a string.", typeof a), zn[t] = !0, !0;
        if (typeof a == "number" && isNaN(a))
          return g("Received NaN for the `%s` attribute. If this is expected, cast the value to a string.", t), zn[t] = !0, !0;
        var y = Ua(t), b = y !== null && y.type === zt;
        if (Vs.hasOwnProperty(l)) {
          var C = Vs[l];
          if (C !== t)
            return g("Invalid DOM property `%s`. Did you mean `%s`?", t, C), zn[t] = !0, !0;
        } else if (!b && t !== l)
          return g("React does not recognize the `%s` prop on a DOM element. If you intentionally want it to appear in the DOM as a custom attribute, spell it as lowercase `%s` instead. If you accidentally passed it from a parent component, remove it from the DOM element.", t, l), zn[t] = !0, !0;
        return typeof a == "boolean" && fr(t, a, y, !1) ? (a ? g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.', a, t, t, a, t) : g('Received `%s` for a non-boolean attribute `%s`.\n\nIf you want to write it to the DOM, pass a string instead: %s="%s" or %s={value.toString()}.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.', a, t, t, a, t, t, t), zn[t] = !0, !0) : b ? !0 : fr(t, a, y, !1) ? (zn[t] = !0, !1) : ((a === "false" || a === "true") && y !== null && y.type === yn && (g("Received the string `%s` for the boolean attribute `%s`. %s Did you mean %s={%s}?", a, t, a === "false" ? "The browser will interpret it as a truthy value." : 'Although this works, it will not work as expected if you pass the string "false".', t, a), zn[t] = !0), !0);
      };
    }
    var Iv = function(e, t, a) {
      {
        var i = [];
        for (var l in t) {
          var s = Xf(e, l, t[l], a);
          s || i.push(l);
        }
        var d = i.map(function(h) {
          return "`" + h + "`";
        }).join(", ");
        i.length === 1 ? g("Invalid value for prop %s on <%s> tag. Either remove it from the element, or pass a string or number value to keep it in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e) : i.length > 1 && g("Invalid values for props %s on <%s> tag. Either remove them from the element, or pass a string or number value to keep them in the DOM. For details, see https://reactjs.org/link/attribute-behavior ", d, e);
      }
    };
    function $v(e, t, a) {
      ii(e, t) || Iv(e, t, a);
    }
    var oi = 1, Tu = 2, yo = 4, Fy = oi | Tu | yo, xu = null;
    function Ru(e) {
      xu !== null && g("Expected currently replaying event to be null. This error is likely caused by a bug in React. Please file an issue."), xu = e;
    }
    function Py() {
      xu === null && g("Expected currently replaying event to not be null. This error is likely caused by a bug in React. Please file an issue."), xu = null;
    }
    function Wv(e) {
      return e === xu;
    }
    function Is(e) {
      var t = e.target || e.srcElement || window;
      return t.correspondingUseElement && (t = t.correspondingUseElement), t.nodeType === ai ? t.parentNode : t;
    }
    var Ht = null, zi = null, li = null;
    function ml(e) {
      var t = Bl(e);
      if (t) {
        if (typeof Ht != "function")
          throw new Error("setRestoreImplementation() needs to be called to handle a target for controlled events. This error is likely caused by a bug in React. Please file an issue.");
        var a = t.stateNode;
        if (a) {
          var i = Wh(a);
          Ht(t.stateNode, t.type, i);
        }
      }
    }
    function Yv(e) {
      Ht = e;
    }
    function $s(e) {
      zi ? li ? li.push(e) : li = [e] : zi = e;
    }
    function wu() {
      return zi !== null || li !== null;
    }
    function Du() {
      if (zi) {
        var e = zi, t = li;
        if (zi = null, li = null, ml(e), t)
          for (var a = 0; a < t.length; a++)
            ml(t[a]);
      }
    }
    var go = function(e, t) {
      return e(t);
    }, Jf = function() {
    }, ed = !1;
    function Hy() {
      var e = wu();
      e && (Jf(), Du());
    }
    function td(e, t, a) {
      if (ed)
        return e(t, a);
      ed = !0;
      try {
        return go(e, t, a);
      } finally {
        ed = !1, Hy();
      }
    }
    function Ws(e, t, a) {
      go = e, Jf = a;
    }
    function Ys(e) {
      return e === "button" || e === "input" || e === "select" || e === "textarea";
    }
    function nd(e, t, a) {
      switch (e) {
        case "onClick":
        case "onClickCapture":
        case "onDoubleClick":
        case "onDoubleClickCapture":
        case "onMouseDown":
        case "onMouseDownCapture":
        case "onMouseMove":
        case "onMouseMoveCapture":
        case "onMouseUp":
        case "onMouseUpCapture":
        case "onMouseEnter":
          return !!(a.disabled && Ys(t));
        default:
          return !1;
      }
    }
    function So(e, t) {
      var a = e.stateNode;
      if (a === null)
        return null;
      var i = Wh(a);
      if (i === null)
        return null;
      var l = i[t];
      if (nd(t, e.type, i))
        return null;
      if (l && typeof l != "function")
        throw new Error("Expected `" + t + "` listener to be a function, instead got a value of `" + typeof l + "` type.");
      return l;
    }
    var ku = !1;
    if (Ge)
      try {
        var Eo = {};
        Object.defineProperty(Eo, "passive", {
          get: function() {
            ku = !0;
          }
        }), window.addEventListener("test", Eo, Eo), window.removeEventListener("test", Eo, Eo);
      } catch {
        ku = !1;
      }
    function Qv(e, t, a, i, l, s, d, h, y) {
      var b = Array.prototype.slice.call(arguments, 3);
      try {
        t.apply(a, b);
      } catch (C) {
        this.onError(C);
      }
    }
    var rd = Qv;
    if (typeof window < "u" && typeof window.dispatchEvent == "function" && typeof document < "u" && typeof document.createEvent == "function") {
      var ad = document.createElement("react");
      rd = function(t, a, i, l, s, d, h, y, b) {
        if (typeof document > "u" || document === null)
          throw new Error("The `document` global was defined when React was initialized, but is not defined anymore. This can happen in a test environment if a component schedules an update from an asynchronous callback, but the test has already finished running. To solve this, you can either unmount the component at the end of your test (and ensure that any asynchronous operations get canceled in `componentWillUnmount`), or you can change the test itself to be asynchronous.");
        var C = document.createEvent("Event"), N = !1, k = !0, P = window.event, H = Object.getOwnPropertyDescriptor(window, "event");
        function Y() {
          ad.removeEventListener(Q, We, !1), typeof window.event < "u" && window.hasOwnProperty("event") && (window.event = P);
        }
        var we = Array.prototype.slice.call(arguments, 3);
        function We() {
          N = !0, Y(), a.apply(i, we), k = !1;
        }
        var Pe, bt = !1, mt = !1;
        function _(L) {
          if (Pe = L.error, bt = !0, Pe === null && L.colno === 0 && L.lineno === 0 && (mt = !0), L.defaultPrevented && Pe != null && typeof Pe == "object")
            try {
              Pe._suppressLogging = !0;
            } catch {
            }
        }
        var Q = "react-" + (t || "invokeguardedcallback");
        if (window.addEventListener("error", _), ad.addEventListener(Q, We, !1), C.initEvent(Q, !1, !1), ad.dispatchEvent(C), H && Object.defineProperty(window, "event", H), N && k && (bt ? mt && (Pe = new Error("A cross-origin error was thrown. React doesn't have access to the actual error object in development. See https://reactjs.org/link/crossorigin-error for more information.")) : Pe = new Error(`An error was thrown inside one of your components, but React doesn't know what it was. This is likely due to browser flakiness. React does its best to preserve the "Pause on exceptions" behavior of the DevTools, which requires some DEV-mode only tricks. It's possible that these don't work in your browser. Try triggering the error in production mode, or switching to a modern browser. If you suspect that this is actually an issue with React, please file an issue.`), this.onError(Pe)), window.removeEventListener("error", _), !N)
          return Y(), Qv.apply(this, arguments);
      };
    }
    var jy = rd, Ui = !1, Oa = null, Ou = !1, Ai = null, Fa = {
      onError: function(e) {
        Ui = !0, Oa = e;
      }
    };
    function bo(e, t, a, i, l, s, d, h, y) {
      Ui = !1, Oa = null, jy.apply(Fa, arguments);
    }
    function ui(e, t, a, i, l, s, d, h, y) {
      if (bo.apply(this, arguments), Ui) {
        var b = od();
        Ou || (Ou = !0, Ai = b);
      }
    }
    function id() {
      if (Ou) {
        var e = Ai;
        throw Ou = !1, Ai = null, e;
      }
    }
    function Vy() {
      return Ui;
    }
    function od() {
      if (Ui) {
        var e = Oa;
        return Ui = !1, Oa = null, e;
      } else
        throw new Error("clearCaughtError was called but no error was captured. This error is likely caused by a bug in React. Please file an issue.");
    }
    function ra(e) {
      return e._reactInternals;
    }
    function Nu(e) {
      return e._reactInternals !== void 0;
    }
    function yl(e, t) {
      e._reactInternals = t;
    }
    var Ie = (
      /*                      */
      0
    ), Fi = (
      /*                */
      1
    ), It = (
      /*                    */
      2
    ), ot = (
      /*                       */
      4
    ), Dt = (
      /*                */
      16
    ), Ot = (
      /*                 */
      32
    ), Pa = (
      /*                     */
      64
    ), Je = (
      /*                   */
      128
    ), sn = (
      /*            */
      256
    ), Rr = (
      /*                          */
      512
    ), aa = (
      /*                     */
      1024
    ), Xt = (
      /*                      */
      2048
    ), ia = (
      /*                    */
      4096
    ), Pi = (
      /*                   */
      8192
    ), Mu = (
      /*             */
      16384
    ), Qs = Xt | ot | Pa | Rr | aa | Mu, qv = (
      /*               */
      32767
    ), Hr = (
      /*                   */
      32768
    ), Un = (
      /*                */
      65536
    ), _u = (
      /* */
      131072
    ), ld = (
      /*                       */
      1048576
    ), ud = (
      /*                    */
      2097152
    ), wr = (
      /*                 */
      4194304
    ), Hi = (
      /*                */
      8388608
    ), Dr = (
      /*               */
      16777216
    ), Co = (
      /*              */
      33554432
    ), gl = (
      // TODO: Remove Update flag from before mutation phase by re-landing Visibility
      // flag logic (see #20043)
      ot | aa | 0
    ), kr = It | ot | Dt | Ot | Rr | ia | Pi, rr = ot | Pa | Rr | Pi, oa = Xt | Dt, Bn = wr | Hi | ud, si = S.ReactCurrentOwner;
    function jr(e) {
      var t = e, a = e;
      if (e.alternate)
        for (; t.return; )
          t = t.return;
      else {
        var i = t;
        do
          t = i, (t.flags & (It | ia)) !== Ie && (a = t.return), i = t.return;
        while (i);
      }
      return t.tag === V ? a : null;
    }
    function sd(e) {
      if (e.tag === te) {
        var t = e.memoizedState;
        if (t === null) {
          var a = e.alternate;
          a !== null && (t = a.memoizedState);
        }
        if (t !== null)
          return t.dehydrated;
      }
      return null;
    }
    function qs(e) {
      return e.tag === V ? e.stateNode.containerInfo : null;
    }
    function cd(e) {
      return jr(e) === e;
    }
    function Vr(e) {
      {
        var t = si.current;
        if (t !== null && t.tag === F) {
          var a = t, i = a.stateNode;
          i._warnedAboutRefsInRender || g("%s is accessing isMounted inside its render() function. render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", it(a) || "A component"), i._warnedAboutRefsInRender = !0;
        }
      }
      var l = ra(e);
      return l ? jr(l) === l : !1;
    }
    function Or(e) {
      if (jr(e) !== e)
        throw new Error("Unable to find node on an unmounted component.");
    }
    function $t(e) {
      var t = e.alternate;
      if (!t) {
        var a = jr(e);
        if (a === null)
          throw new Error("Unable to find node on an unmounted component.");
        return a !== e ? null : e;
      }
      for (var i = e, l = t; ; ) {
        var s = i.return;
        if (s === null)
          break;
        var d = s.alternate;
        if (d === null) {
          var h = s.return;
          if (h !== null) {
            i = l = h;
            continue;
          }
          break;
        }
        if (s.child === d.child) {
          for (var y = s.child; y; ) {
            if (y === i)
              return Or(s), e;
            if (y === l)
              return Or(s), t;
            y = y.sibling;
          }
          throw new Error("Unable to find node on an unmounted component.");
        }
        if (i.return !== l.return)
          i = s, l = d;
        else {
          for (var b = !1, C = s.child; C; ) {
            if (C === i) {
              b = !0, i = s, l = d;
              break;
            }
            if (C === l) {
              b = !0, l = s, i = d;
              break;
            }
            C = C.sibling;
          }
          if (!b) {
            for (C = d.child; C; ) {
              if (C === i) {
                b = !0, i = d, l = s;
                break;
              }
              if (C === l) {
                b = !0, l = d, i = s;
                break;
              }
              C = C.sibling;
            }
            if (!b)
              throw new Error("Child was not found in either parent set. This indicates a bug in React related to the return pointer. Please file an issue.");
          }
        }
        if (i.alternate !== l)
          throw new Error("Return fibers should always be each others' alternates. This error is likely caused by a bug in React. Please file an issue.");
      }
      if (i.tag !== V)
        throw new Error("Unable to find node on an unmounted component.");
      return i.stateNode.current === i ? e : t;
    }
    function la(e) {
      var t = $t(e);
      return t !== null ? fd(t) : null;
    }
    function fd(e) {
      if (e.tag === I || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        var a = fd(t);
        if (a !== null)
          return a;
        t = t.sibling;
      }
      return null;
    }
    function Gv(e) {
      var t = $t(e);
      return t !== null ? Gs(t) : null;
    }
    function Gs(e) {
      if (e.tag === I || e.tag === ee)
        return e;
      for (var t = e.child; t !== null; ) {
        if (t.tag !== q) {
          var a = Gs(t);
          if (a !== null)
            return a;
        }
        t = t.sibling;
      }
      return null;
    }
    var Ks = m.unstable_scheduleCallback, Kv = m.unstable_cancelCallback, Xs = m.unstable_shouldYield, Xv = m.unstable_requestPaint, en = m.unstable_now, dd = m.unstable_getCurrentPriorityLevel, Zs = m.unstable_ImmediatePriority, Br = m.unstable_UserBlockingPriority, Ha = m.unstable_NormalPriority, Js = m.unstable_LowPriority, ji = m.unstable_IdlePriority, pd = m.unstable_yieldValue, vd = m.unstable_setDisableYieldValue, Vi = null, An = null, ye = null, pn = !1, In = typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u";
    function hd(e) {
      if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u")
        return !1;
      var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
      if (t.isDisabled)
        return !0;
      if (!t.supportsFiber)
        return g("The installed version of React DevTools is too old and will not work with the current version of React. Please update React DevTools. https://reactjs.org/link/react-devtools"), !0;
      try {
        _t && (e = vt({}, e, {
          getLaneLabelMap: Ii,
          injectProfilingHooks: fi
        })), Vi = t.inject(e), An = t;
      } catch (a) {
        g("React instrumentation encountered an error: %s.", a);
      }
      return !!t.checkDCE;
    }
    function Zv(e, t) {
      if (An && typeof An.onScheduleFiberRoot == "function")
        try {
          An.onScheduleFiberRoot(Vi, e, t);
        } catch (a) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", a));
        }
    }
    function ci(e, t) {
      if (An && typeof An.onCommitFiberRoot == "function")
        try {
          var a = (e.current.flags & Je) === Je;
          if (yt) {
            var i;
            switch (t) {
              case ar:
                i = Zs;
                break;
              case $n:
                i = Br;
                break;
              case pi:
                i = Ha;
                break;
              case Vu:
                i = ji;
                break;
              default:
                i = Ha;
                break;
            }
            An.onCommitFiberRoot(Vi, e, i, a);
          }
        } catch (l) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", l));
        }
    }
    function Bi(e) {
      if (An && typeof An.onPostCommitFiberRoot == "function")
        try {
          An.onPostCommitFiberRoot(Vi, e);
        } catch (t) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function md(e) {
      if (An && typeof An.onCommitFiberUnmount == "function")
        try {
          An.onCommitFiberUnmount(Vi, e);
        } catch (t) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function Rn(e) {
      if (typeof pd == "function" && (vd(e), w(e)), An && typeof An.setStrictMode == "function")
        try {
          An.setStrictMode(Vi, e);
        } catch (t) {
          pn || (pn = !0, g("React instrumentation encountered an error: %s", t));
        }
    }
    function fi(e) {
      ye = e;
    }
    function Ii() {
      {
        for (var e = /* @__PURE__ */ new Map(), t = 1, a = 0; a < Wt; a++) {
          var i = By(t);
          e.set(t, i), t *= 2;
        }
        return e;
      }
    }
    function ec(e) {
      ye !== null && typeof ye.markCommitStarted == "function" && ye.markCommitStarted(e);
    }
    function yd() {
      ye !== null && typeof ye.markCommitStopped == "function" && ye.markCommitStopped();
    }
    function $i(e) {
      ye !== null && typeof ye.markComponentRenderStarted == "function" && ye.markComponentRenderStarted(e);
    }
    function To() {
      ye !== null && typeof ye.markComponentRenderStopped == "function" && ye.markComponentRenderStopped();
    }
    function Jv(e) {
      ye !== null && typeof ye.markComponentPassiveEffectMountStarted == "function" && ye.markComponentPassiveEffectMountStarted(e);
    }
    function gd() {
      ye !== null && typeof ye.markComponentPassiveEffectMountStopped == "function" && ye.markComponentPassiveEffectMountStopped();
    }
    function tc(e) {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStarted == "function" && ye.markComponentPassiveEffectUnmountStarted(e);
    }
    function eh() {
      ye !== null && typeof ye.markComponentPassiveEffectUnmountStopped == "function" && ye.markComponentPassiveEffectUnmountStopped();
    }
    function th(e) {
      ye !== null && typeof ye.markComponentLayoutEffectMountStarted == "function" && ye.markComponentLayoutEffectMountStarted(e);
    }
    function nh() {
      ye !== null && typeof ye.markComponentLayoutEffectMountStopped == "function" && ye.markComponentLayoutEffectMountStopped();
    }
    function nc(e) {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStarted == "function" && ye.markComponentLayoutEffectUnmountStarted(e);
    }
    function Sl() {
      ye !== null && typeof ye.markComponentLayoutEffectUnmountStopped == "function" && ye.markComponentLayoutEffectUnmountStopped();
    }
    function rc(e, t, a) {
      ye !== null && typeof ye.markComponentErrored == "function" && ye.markComponentErrored(e, t, a);
    }
    function rh(e, t, a) {
      ye !== null && typeof ye.markComponentSuspended == "function" && ye.markComponentSuspended(e, t, a);
    }
    function ah(e) {
      ye !== null && typeof ye.markLayoutEffectsStarted == "function" && ye.markLayoutEffectsStarted(e);
    }
    function El() {
      ye !== null && typeof ye.markLayoutEffectsStopped == "function" && ye.markLayoutEffectsStopped();
    }
    function ih(e) {
      ye !== null && typeof ye.markPassiveEffectsStarted == "function" && ye.markPassiveEffectsStarted(e);
    }
    function Lu() {
      ye !== null && typeof ye.markPassiveEffectsStopped == "function" && ye.markPassiveEffectsStopped();
    }
    function Na(e) {
      ye !== null && typeof ye.markRenderStarted == "function" && ye.markRenderStarted(e);
    }
    function zu() {
      ye !== null && typeof ye.markRenderYielded == "function" && ye.markRenderYielded();
    }
    function bl() {
      ye !== null && typeof ye.markRenderStopped == "function" && ye.markRenderStopped();
    }
    function xo(e) {
      ye !== null && typeof ye.markRenderScheduled == "function" && ye.markRenderScheduled(e);
    }
    function Sd(e, t) {
      ye !== null && typeof ye.markForceUpdateScheduled == "function" && ye.markForceUpdateScheduled(e, t);
    }
    function Wi(e, t) {
      ye !== null && typeof ye.markStateUpdateScheduled == "function" && ye.markStateUpdateScheduled(e, t);
    }
    var Ye = (
      /*                         */
      0
    ), dt = (
      /*                 */
      1
    ), Qe = (
      /*                    */
      2
    ), tn = (
      /*               */
      8
    ), ua = (
      /*              */
      16
    ), ac = Math.clz32 ? Math.clz32 : Ro, ic = Math.log, Ed = Math.LN2;
    function Ro(e) {
      var t = e >>> 0;
      return t === 0 ? 32 : 31 - (ic(t) / Ed | 0) | 0;
    }
    var Wt = 31, G = (
      /*                        */
      0
    ), St = (
      /*                          */
      0
    ), Ke = (
      /*                        */
      1
    ), ja = (
      /*    */
      2
    ), Ir = (
      /*             */
      4
    ), wo = (
      /*            */
      8
    ), Yt = (
      /*                     */
      16
    ), Do = (
      /*                */
      32
    ), Yi = (
      /*                       */
      4194240
    ), ko = (
      /*                        */
      64
    ), sa = (
      /*                        */
      128
    ), Nr = (
      /*                        */
      256
    ), Oo = (
      /*                        */
      512
    ), Uu = (
      /*                        */
      1024
    ), Au = (
      /*                        */
      2048
    ), oc = (
      /*                        */
      4096
    ), lc = (
      /*                        */
      8192
    ), uc = (
      /*                        */
      16384
    ), sc = (
      /*                       */
      32768
    ), cc = (
      /*                       */
      65536
    ), fc = (
      /*                       */
      131072
    ), dc = (
      /*                       */
      262144
    ), pc = (
      /*                       */
      524288
    ), No = (
      /*                       */
      1048576
    ), vc = (
      /*                       */
      2097152
    ), Mo = (
      /*                            */
      130023424
    ), di = (
      /*                             */
      4194304
    ), hc = (
      /*                             */
      8388608
    ), Fu = (
      /*                             */
      16777216
    ), mc = (
      /*                             */
      33554432
    ), yc = (
      /*                             */
      67108864
    ), bd = di, Cl = (
      /*          */
      134217728
    ), gc = (
      /*                          */
      268435455
    ), Tl = (
      /*               */
      268435456
    ), Qi = (
      /*                        */
      536870912
    ), Mr = (
      /*                   */
      1073741824
    );
    function By(e) {
      {
        if (e & Ke)
          return "Sync";
        if (e & ja)
          return "InputContinuousHydration";
        if (e & Ir)
          return "InputContinuous";
        if (e & wo)
          return "DefaultHydration";
        if (e & Yt)
          return "Default";
        if (e & Do)
          return "TransitionHydration";
        if (e & Yi)
          return "Transition";
        if (e & Mo)
          return "Retry";
        if (e & Cl)
          return "SelectiveHydration";
        if (e & Tl)
          return "IdleHydration";
        if (e & Qi)
          return "Idle";
        if (e & Mr)
          return "Offscreen";
      }
    }
    var jt = -1, Sc = ko, Ec = di;
    function xl(e) {
      switch (bn(e)) {
        case Ke:
          return Ke;
        case ja:
          return ja;
        case Ir:
          return Ir;
        case wo:
          return wo;
        case Yt:
          return Yt;
        case Do:
          return Do;
        case ko:
        case sa:
        case Nr:
        case Oo:
        case Uu:
        case Au:
        case oc:
        case lc:
        case uc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case No:
        case vc:
          return e & Yi;
        case di:
        case hc:
        case Fu:
        case mc:
        case yc:
          return e & Mo;
        case Cl:
          return Cl;
        case Tl:
          return Tl;
        case Qi:
          return Qi;
        case Mr:
          return Mr;
        default:
          return g("Should have found matching lanes. This is a bug in React."), e;
      }
    }
    function Pu(e, t) {
      var a = e.pendingLanes;
      if (a === G)
        return G;
      var i = G, l = e.suspendedLanes, s = e.pingedLanes, d = a & gc;
      if (d !== G) {
        var h = d & ~l;
        if (h !== G)
          i = xl(h);
        else {
          var y = d & s;
          y !== G && (i = xl(y));
        }
      } else {
        var b = a & ~l;
        b !== G ? i = xl(b) : s !== G && (i = xl(s));
      }
      if (i === G)
        return G;
      if (t !== G && t !== i && // If we already suspended with a delay, then interrupting is fine. Don't
      // bother waiting until the root is complete.
      (t & l) === G) {
        var C = bn(i), N = bn(t);
        if (
          // Tests whether the next lane is equal or lower priority than the wip
          // one. This works because the bits decrease in priority as you go left.
          C >= N || // Default priority updates should not interrupt transition updates. The
          // only difference between default updates and transition updates is that
          // default updates do not support refresh transitions.
          C === Yt && (N & Yi) !== G
        )
          return t;
      }
      (i & Ir) !== G && (i |= a & Yt);
      var k = e.entangledLanes;
      if (k !== G)
        for (var P = e.entanglements, H = i & k; H > 0; ) {
          var Y = qi(H), we = 1 << Y;
          i |= P[Y], H &= ~we;
        }
      return i;
    }
    function oh(e, t) {
      for (var a = e.eventTimes, i = jt; t > 0; ) {
        var l = qi(t), s = 1 << l, d = a[l];
        d > i && (i = d), t &= ~s;
      }
      return i;
    }
    function bc(e, t) {
      switch (e) {
        case Ke:
        case ja:
        case Ir:
          return t + 250;
        case wo:
        case Yt:
        case Do:
        case ko:
        case sa:
        case Nr:
        case Oo:
        case Uu:
        case Au:
        case oc:
        case lc:
        case uc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case No:
        case vc:
          return t + 5e3;
        case di:
        case hc:
        case Fu:
        case mc:
        case yc:
          return jt;
        case Cl:
        case Tl:
        case Qi:
        case Mr:
          return jt;
        default:
          return g("Should have found matching lanes. This is a bug in React."), jt;
      }
    }
    function Iy(e, t) {
      for (var a = e.pendingLanes, i = e.suspendedLanes, l = e.pingedLanes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = qi(d), y = 1 << h, b = s[h];
        b === jt ? ((y & i) === G || (y & l) !== G) && (s[h] = bc(y, t)) : b <= t && (e.expiredLanes |= y), d &= ~y;
      }
    }
    function $y(e) {
      return xl(e.pendingLanes);
    }
    function Cd(e) {
      var t = e.pendingLanes & ~Mr;
      return t !== G ? t : t & Mr ? Mr : G;
    }
    function Rl(e) {
      return (e & Ke) !== G;
    }
    function Hu(e) {
      return (e & gc) !== G;
    }
    function Cc(e) {
      return (e & Mo) === e;
    }
    function Wy(e) {
      var t = Ke | Ir | Yt;
      return (e & t) === G;
    }
    function lh(e) {
      return (e & Yi) === e;
    }
    function ju(e, t) {
      var a = ja | Ir | wo | Yt;
      return (t & a) !== G;
    }
    function uh(e, t) {
      return (t & e.expiredLanes) !== G;
    }
    function Td(e) {
      return (e & Yi) !== G;
    }
    function xd() {
      var e = Sc;
      return Sc <<= 1, (Sc & Yi) === G && (Sc = ko), e;
    }
    function Yy() {
      var e = Ec;
      return Ec <<= 1, (Ec & Mo) === G && (Ec = di), e;
    }
    function bn(e) {
      return e & -e;
    }
    function wn(e) {
      return bn(e);
    }
    function qi(e) {
      return 31 - ac(e);
    }
    function Tc(e) {
      return qi(e);
    }
    function _r(e, t) {
      return (e & t) !== G;
    }
    function _o(e, t) {
      return (e & t) === t;
    }
    function lt(e, t) {
      return e | t;
    }
    function wl(e, t) {
      return e & ~t;
    }
    function Rd(e, t) {
      return e & t;
    }
    function sh(e) {
      return e;
    }
    function ch(e, t) {
      return e !== St && e < t ? e : t;
    }
    function xc(e) {
      for (var t = [], a = 0; a < Wt; a++)
        t.push(e);
      return t;
    }
    function Lo(e, t, a) {
      e.pendingLanes |= t, t !== Qi && (e.suspendedLanes = G, e.pingedLanes = G);
      var i = e.eventTimes, l = Tc(t);
      i[l] = a;
    }
    function wd(e, t) {
      e.suspendedLanes |= t, e.pingedLanes &= ~t;
      for (var a = e.expirationTimes, i = t; i > 0; ) {
        var l = qi(i), s = 1 << l;
        a[l] = jt, i &= ~s;
      }
    }
    function Dd(e, t, a) {
      e.pingedLanes |= e.suspendedLanes & t;
    }
    function kd(e, t) {
      var a = e.pendingLanes & ~t;
      e.pendingLanes = t, e.suspendedLanes = G, e.pingedLanes = G, e.expiredLanes &= t, e.mutableReadLanes &= t, e.entangledLanes &= t;
      for (var i = e.entanglements, l = e.eventTimes, s = e.expirationTimes, d = a; d > 0; ) {
        var h = qi(d), y = 1 << h;
        i[h] = G, l[h] = jt, s[h] = jt, d &= ~y;
      }
    }
    function Dl(e, t) {
      for (var a = e.entangledLanes |= t, i = e.entanglements, l = a; l; ) {
        var s = qi(l), d = 1 << s;
        // Is this one of the newly entangled lanes?
        d & t | // Is this lane transitively entangled with the newly entangled lanes?
        i[s] & t && (i[s] |= t), l &= ~d;
      }
    }
    function Qy(e, t) {
      var a = bn(t), i;
      switch (a) {
        case Ir:
          i = ja;
          break;
        case Yt:
          i = wo;
          break;
        case ko:
        case sa:
        case Nr:
        case Oo:
        case Uu:
        case Au:
        case oc:
        case lc:
        case uc:
        case sc:
        case cc:
        case fc:
        case dc:
        case pc:
        case No:
        case vc:
        case di:
        case hc:
        case Fu:
        case mc:
        case yc:
          i = Do;
          break;
        case Qi:
          i = Tl;
          break;
        default:
          i = St;
          break;
      }
      return (i & (e.suspendedLanes | t)) !== St ? St : i;
    }
    function Od(e, t, a) {
      if (In)
        for (var i = e.pendingUpdatersLaneMap; a > 0; ) {
          var l = Tc(a), s = 1 << l, d = i[l];
          d.add(t), a &= ~s;
        }
    }
    function Rc(e, t) {
      if (In)
        for (var a = e.pendingUpdatersLaneMap, i = e.memoizedUpdaters; t > 0; ) {
          var l = Tc(t), s = 1 << l, d = a[l];
          d.size > 0 && (d.forEach(function(h) {
            var y = h.alternate;
            (y === null || !i.has(y)) && i.add(h);
          }), d.clear()), t &= ~s;
        }
    }
    function Nd(e, t) {
      return null;
    }
    var ar = Ke, $n = Ir, pi = Yt, Vu = Qi, zo = St;
    function ca() {
      return zo;
    }
    function Dn(e) {
      zo = e;
    }
    function Bu(e, t) {
      var a = zo;
      try {
        return zo = e, t();
      } finally {
        zo = a;
      }
    }
    function ir(e, t) {
      return e !== 0 && e < t ? e : t;
    }
    function qy(e, t) {
      return e === 0 || e > t ? e : t;
    }
    function Md(e, t) {
      return e !== 0 && e < t;
    }
    function Iu(e) {
      var t = bn(e);
      return Md(ar, t) ? Md($n, t) ? Hu(t) ? pi : Vu : $n : ar;
    }
    function kn(e) {
      var t = e.current.memoizedState;
      return t.isDehydrated;
    }
    var fh;
    function Oe(e) {
      fh = e;
    }
    function kl(e) {
      fh(e);
    }
    var $u;
    function dh(e) {
      $u = e;
    }
    var ph;
    function Wu(e) {
      ph = e;
    }
    var Yu;
    function _d(e) {
      Yu = e;
    }
    var Ld;
    function vh(e) {
      Ld = e;
    }
    var wc = !1, Ol = [], Va = null, Zt = null, Fn = null, fa = /* @__PURE__ */ new Map(), Nl = /* @__PURE__ */ new Map(), vi = [], Ma = [
      "mousedown",
      "mouseup",
      "touchcancel",
      "touchend",
      "touchstart",
      "auxclick",
      "dblclick",
      "pointercancel",
      "pointerdown",
      "pointerup",
      "dragend",
      "dragstart",
      "drop",
      "compositionend",
      "compositionstart",
      "keydown",
      "keypress",
      "keyup",
      "input",
      "textInput",
      // Intentionally camelCase
      "copy",
      "cut",
      "paste",
      "click",
      "change",
      "contextmenu",
      "reset",
      "submit"
    ];
    function hh(e) {
      return Ma.indexOf(e) > -1;
    }
    function Ba(e, t, a, i, l) {
      return {
        blockedOn: e,
        domEventName: t,
        eventSystemFlags: a,
        nativeEvent: l,
        targetContainers: [i]
      };
    }
    function mh(e, t) {
      switch (e) {
        case "focusin":
        case "focusout":
          Va = null;
          break;
        case "dragenter":
        case "dragleave":
          Zt = null;
          break;
        case "mouseover":
        case "mouseout":
          Fn = null;
          break;
        case "pointerover":
        case "pointerout": {
          var a = t.pointerId;
          fa.delete(a);
          break;
        }
        case "gotpointercapture":
        case "lostpointercapture": {
          var i = t.pointerId;
          Nl.delete(i);
          break;
        }
      }
    }
    function Ml(e, t, a, i, l, s) {
      if (e === null || e.nativeEvent !== s) {
        var d = Ba(t, a, i, l, s);
        if (t !== null) {
          var h = Bl(t);
          h !== null && $u(h);
        }
        return d;
      }
      e.eventSystemFlags |= i;
      var y = e.targetContainers;
      return l !== null && y.indexOf(l) === -1 && y.push(l), e;
    }
    function yh(e, t, a, i, l) {
      switch (t) {
        case "focusin": {
          var s = l;
          return Va = Ml(Va, e, t, a, i, s), !0;
        }
        case "dragenter": {
          var d = l;
          return Zt = Ml(Zt, e, t, a, i, d), !0;
        }
        case "mouseover": {
          var h = l;
          return Fn = Ml(Fn, e, t, a, i, h), !0;
        }
        case "pointerover": {
          var y = l, b = y.pointerId;
          return fa.set(b, Ml(fa.get(b) || null, e, t, a, i, y)), !0;
        }
        case "gotpointercapture": {
          var C = l, N = C.pointerId;
          return Nl.set(N, Ml(Nl.get(N) || null, e, t, a, i, C)), !0;
        }
      }
      return !1;
    }
    function zd(e) {
      var t = ts(e.target);
      if (t !== null) {
        var a = jr(t);
        if (a !== null) {
          var i = a.tag;
          if (i === te) {
            var l = sd(a);
            if (l !== null) {
              e.blockedOn = l, Ld(e.priority, function() {
                ph(a);
              });
              return;
            }
          } else if (i === V) {
            var s = a.stateNode;
            if (kn(s)) {
              e.blockedOn = qs(a);
              return;
            }
          }
        }
      }
      e.blockedOn = null;
    }
    function gh(e) {
      for (var t = Yu(), a = {
        blockedOn: null,
        target: e,
        priority: t
      }, i = 0; i < vi.length && Md(t, vi[i].priority); i++)
        ;
      vi.splice(i, 0, a), i === 0 && zd(a);
    }
    function Dc(e) {
      if (e.blockedOn !== null)
        return !1;
      for (var t = e.targetContainers; t.length > 0; ) {
        var a = t[0], i = Uo(e.domEventName, e.eventSystemFlags, a, e.nativeEvent);
        if (i === null) {
          var l = e.nativeEvent, s = new l.constructor(l.type, l);
          Ru(s), l.target.dispatchEvent(s), Py();
        } else {
          var d = Bl(i);
          return d !== null && $u(d), e.blockedOn = i, !1;
        }
        t.shift();
      }
      return !0;
    }
    function Qu(e, t, a) {
      Dc(e) && a.delete(t);
    }
    function Ud() {
      wc = !1, Va !== null && Dc(Va) && (Va = null), Zt !== null && Dc(Zt) && (Zt = null), Fn !== null && Dc(Fn) && (Fn = null), fa.forEach(Qu), Nl.forEach(Qu);
    }
    function or(e, t) {
      e.blockedOn === t && (e.blockedOn = null, wc || (wc = !0, m.unstable_scheduleCallback(m.unstable_NormalPriority, Ud)));
    }
    function ht(e) {
      if (Ol.length > 0) {
        or(Ol[0], e);
        for (var t = 1; t < Ol.length; t++) {
          var a = Ol[t];
          a.blockedOn === e && (a.blockedOn = null);
        }
      }
      Va !== null && or(Va, e), Zt !== null && or(Zt, e), Fn !== null && or(Fn, e);
      var i = function(h) {
        return or(h, e);
      };
      fa.forEach(i), Nl.forEach(i);
      for (var l = 0; l < vi.length; l++) {
        var s = vi[l];
        s.blockedOn === e && (s.blockedOn = null);
      }
      for (; vi.length > 0; ) {
        var d = vi[0];
        if (d.blockedOn !== null)
          break;
        zd(d), d.blockedOn === null && vi.shift();
      }
    }
    var nn = S.ReactCurrentBatchConfig, cn = !0;
    function Pn(e) {
      cn = !!e;
    }
    function $r() {
      return cn;
    }
    function _l(e, t, a) {
      var i = pr(t), l;
      switch (i) {
        case ar:
          l = On;
          break;
        case $n:
          l = qu;
          break;
        case pi:
        default:
          l = hi;
          break;
      }
      return l.bind(null, t, a, e);
    }
    function On(e, t, a, i) {
      var l = ca(), s = nn.transition;
      nn.transition = null;
      try {
        Dn(ar), hi(e, t, a, i);
      } finally {
        Dn(l), nn.transition = s;
      }
    }
    function qu(e, t, a, i) {
      var l = ca(), s = nn.transition;
      nn.transition = null;
      try {
        Dn($n), hi(e, t, a, i);
      } finally {
        Dn(l), nn.transition = s;
      }
    }
    function hi(e, t, a, i) {
      cn && kc(e, t, a, i);
    }
    function kc(e, t, a, i) {
      var l = Uo(e, t, a, i);
      if (l === null) {
        vg(e, t, i, Ll, a), mh(e, i);
        return;
      }
      if (yh(l, e, t, a, i)) {
        i.stopPropagation();
        return;
      }
      if (mh(e, i), t & yo && hh(e)) {
        for (; l !== null; ) {
          var s = Bl(l);
          s !== null && kl(s);
          var d = Uo(e, t, a, i);
          if (d === null && vg(e, t, i, Ll, a), d === l)
            break;
          l = d;
        }
        l !== null && i.stopPropagation();
        return;
      }
      vg(e, t, i, null, a);
    }
    var Ll = null;
    function Uo(e, t, a, i) {
      Ll = null;
      var l = Is(i), s = ts(l);
      if (s !== null) {
        var d = jr(s);
        if (d === null)
          s = null;
        else {
          var h = d.tag;
          if (h === te) {
            var y = sd(d);
            if (y !== null)
              return y;
            s = null;
          } else if (h === V) {
            var b = d.stateNode;
            if (kn(b))
              return qs(d);
            s = null;
          } else
            d !== s && (s = null);
        }
      }
      return Ll = s, null;
    }
    function pr(e) {
      switch (e) {
        case "cancel":
        case "click":
        case "close":
        case "contextmenu":
        case "copy":
        case "cut":
        case "auxclick":
        case "dblclick":
        case "dragend":
        case "dragstart":
        case "drop":
        case "focusin":
        case "focusout":
        case "input":
        case "invalid":
        case "keydown":
        case "keypress":
        case "keyup":
        case "mousedown":
        case "mouseup":
        case "paste":
        case "pause":
        case "play":
        case "pointercancel":
        case "pointerdown":
        case "pointerup":
        case "ratechange":
        case "reset":
        case "resize":
        case "seeked":
        case "submit":
        case "touchcancel":
        case "touchend":
        case "touchstart":
        case "volumechange":
        case "change":
        case "selectionchange":
        case "textInput":
        case "compositionstart":
        case "compositionend":
        case "compositionupdate":
        case "beforeblur":
        case "afterblur":
        case "beforeinput":
        case "blur":
        case "fullscreenchange":
        case "focus":
        case "hashchange":
        case "popstate":
        case "select":
        case "selectstart":
          return ar;
        case "drag":
        case "dragenter":
        case "dragexit":
        case "dragleave":
        case "dragover":
        case "mousemove":
        case "mouseout":
        case "mouseover":
        case "pointermove":
        case "pointerout":
        case "pointerover":
        case "scroll":
        case "toggle":
        case "touchmove":
        case "wheel":
        case "mouseenter":
        case "mouseleave":
        case "pointerenter":
        case "pointerleave":
          return $n;
        case "message": {
          var t = dd();
          switch (t) {
            case Zs:
              return ar;
            case Br:
              return $n;
            case Ha:
            case Js:
              return pi;
            case ji:
              return Vu;
            default:
              return pi;
          }
        }
        default:
          return pi;
      }
    }
    function Ad(e, t, a) {
      return e.addEventListener(t, a, !1), a;
    }
    function zl(e, t, a) {
      return e.addEventListener(t, a, !0), a;
    }
    function mi(e, t, a, i) {
      return e.addEventListener(t, a, {
        capture: !0,
        passive: i
      }), a;
    }
    function Oc(e, t, a, i) {
      return e.addEventListener(t, a, {
        passive: i
      }), a;
    }
    var Ao = null, Ia = null, Gi = null;
    function Ki(e) {
      return Ao = e, Ia = Mc(), !0;
    }
    function Nc() {
      Ao = null, Ia = null, Gi = null;
    }
    function Ul() {
      if (Gi)
        return Gi;
      var e, t = Ia, a = t.length, i, l = Mc(), s = l.length;
      for (e = 0; e < a && t[e] === l[e]; e++)
        ;
      var d = a - e;
      for (i = 1; i <= d && t[a - i] === l[s - i]; i++)
        ;
      var h = i > 1 ? 1 - i : void 0;
      return Gi = l.slice(e, h), Gi;
    }
    function Mc() {
      return "value" in Ao ? Ao.value : Ao.textContent;
    }
    function Fo(e) {
      var t, a = e.keyCode;
      return "charCode" in e ? (t = e.charCode, t === 0 && a === 13 && (t = 13)) : t = a, t === 10 && (t = 13), t >= 32 || t === 13 ? t : 0;
    }
    function Po() {
      return !0;
    }
    function lr() {
      return !1;
    }
    function Cn(e) {
      function t(a, i, l, s, d) {
        this._reactName = a, this._targetInst = l, this.type = i, this.nativeEvent = s, this.target = d, this.currentTarget = null;
        for (var h in e)
          if (e.hasOwnProperty(h)) {
            var y = e[h];
            y ? this[h] = y(s) : this[h] = s[h];
          }
        var b = s.defaultPrevented != null ? s.defaultPrevented : s.returnValue === !1;
        return b ? this.isDefaultPrevented = Po : this.isDefaultPrevented = lr, this.isPropagationStopped = lr, this;
      }
      return vt(t.prototype, {
        preventDefault: function() {
          this.defaultPrevented = !0;
          var a = this.nativeEvent;
          a && (a.preventDefault ? a.preventDefault() : typeof a.returnValue != "unknown" && (a.returnValue = !1), this.isDefaultPrevented = Po);
        },
        stopPropagation: function() {
          var a = this.nativeEvent;
          a && (a.stopPropagation ? a.stopPropagation() : typeof a.cancelBubble != "unknown" && (a.cancelBubble = !0), this.isPropagationStopped = Po);
        },
        /**
         * We release all dispatched `SyntheticEvent`s after each event loop, adding
         * them back into the pool. This allows a way to hold onto a reference that
         * won't be added back into the pool.
         */
        persist: function() {
        },
        /**
         * Checks if this event should be released back into the pool.
         *
         * @return {boolean} True if this should not be released, false otherwise.
         */
        isPersistent: Po
      }), t;
    }
    var ur = {
      eventPhase: 0,
      bubbles: 0,
      cancelable: 0,
      timeStamp: function(e) {
        return e.timeStamp || Date.now();
      },
      defaultPrevented: 0,
      isTrusted: 0
    }, sr = Cn(ur), Al = vt({}, ur, {
      view: 0,
      detail: 0
    }), Fd = Cn(Al), Gu, Pd, da;
    function Sh(e) {
      e !== da && (da && e.type === "mousemove" ? (Gu = e.screenX - da.screenX, Pd = e.screenY - da.screenY) : (Gu = 0, Pd = 0), da = e);
    }
    var Fl = vt({}, Al, {
      screenX: 0,
      screenY: 0,
      clientX: 0,
      clientY: 0,
      pageX: 0,
      pageY: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      getModifierState: zc,
      button: 0,
      buttons: 0,
      relatedTarget: function(e) {
        return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
      },
      movementX: function(e) {
        return "movementX" in e ? e.movementX : (Sh(e), Gu);
      },
      movementY: function(e) {
        return "movementY" in e ? e.movementY : Pd;
      }
    }), Xi = Cn(Fl), Hd = vt({}, Fl, {
      dataTransfer: 0
    }), Ho = Cn(Hd), Eh = vt({}, Al, {
      relatedTarget: 0
    }), _c = Cn(Eh), jd = vt({}, ur, {
      animationName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), Lc = Cn(jd), Gy = vt({}, ur, {
      clipboardData: function(e) {
        return "clipboardData" in e ? e.clipboardData : window.clipboardData;
      }
    }), Ky = Cn(Gy), bh = vt({}, ur, {
      data: 0
    }), Vd = Cn(bh), jo = Vd, Xy = {
      Esc: "Escape",
      Spacebar: " ",
      Left: "ArrowLeft",
      Up: "ArrowUp",
      Right: "ArrowRight",
      Down: "ArrowDown",
      Del: "Delete",
      Win: "OS",
      Menu: "ContextMenu",
      Apps: "ContextMenu",
      Scroll: "ScrollLock",
      MozPrintableKey: "Unidentified"
    }, Pl = {
      8: "Backspace",
      9: "Tab",
      12: "Clear",
      13: "Enter",
      16: "Shift",
      17: "Control",
      18: "Alt",
      19: "Pause",
      20: "CapsLock",
      27: "Escape",
      32: " ",
      33: "PageUp",
      34: "PageDown",
      35: "End",
      36: "Home",
      37: "ArrowLeft",
      38: "ArrowUp",
      39: "ArrowRight",
      40: "ArrowDown",
      45: "Insert",
      46: "Delete",
      112: "F1",
      113: "F2",
      114: "F3",
      115: "F4",
      116: "F5",
      117: "F6",
      118: "F7",
      119: "F8",
      120: "F9",
      121: "F10",
      122: "F11",
      123: "F12",
      144: "NumLock",
      145: "ScrollLock",
      224: "Meta"
    };
    function Ch(e) {
      if (e.key) {
        var t = Xy[e.key] || e.key;
        if (t !== "Unidentified")
          return t;
      }
      if (e.type === "keypress") {
        var a = Fo(e);
        return a === 13 ? "Enter" : String.fromCharCode(a);
      }
      return e.type === "keydown" || e.type === "keyup" ? Pl[e.keyCode] || "Unidentified" : "";
    }
    var fn = {
      Alt: "altKey",
      Control: "ctrlKey",
      Meta: "metaKey",
      Shift: "shiftKey"
    };
    function Zy(e) {
      var t = this, a = t.nativeEvent;
      if (a.getModifierState)
        return a.getModifierState(e);
      var i = fn[e];
      return i ? !!a[i] : !1;
    }
    function zc(e) {
      return Zy;
    }
    var Jy = vt({}, Al, {
      key: Ch,
      code: 0,
      location: 0,
      ctrlKey: 0,
      shiftKey: 0,
      altKey: 0,
      metaKey: 0,
      repeat: 0,
      locale: 0,
      getModifierState: zc,
      // Legacy Interface
      charCode: function(e) {
        return e.type === "keypress" ? Fo(e) : 0;
      },
      keyCode: function(e) {
        return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      },
      which: function(e) {
        return e.type === "keypress" ? Fo(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
      }
    }), eg = Cn(Jy), Th = vt({}, Fl, {
      pointerId: 0,
      width: 0,
      height: 0,
      pressure: 0,
      tangentialPressure: 0,
      tiltX: 0,
      tiltY: 0,
      twist: 0,
      pointerType: 0,
      isPrimary: 0
    }), Bd = Cn(Th), tg = vt({}, Al, {
      touches: 0,
      targetTouches: 0,
      changedTouches: 0,
      altKey: 0,
      metaKey: 0,
      ctrlKey: 0,
      shiftKey: 0,
      getModifierState: zc
    }), pa = Cn(tg), Id = vt({}, ur, {
      propertyName: 0,
      elapsedTime: 0,
      pseudoElement: 0
    }), ng = Cn(Id), Zi = vt({}, Fl, {
      deltaX: function(e) {
        return "deltaX" in e ? e.deltaX : (
          // Fallback to `wheelDeltaX` for Webkit and normalize (right is positive).
          "wheelDeltaX" in e ? -e.wheelDeltaX : 0
        );
      },
      deltaY: function(e) {
        return "deltaY" in e ? e.deltaY : (
          // Fallback to `wheelDeltaY` for Webkit and normalize (down is positive).
          "wheelDeltaY" in e ? -e.wheelDeltaY : (
            // Fallback to `wheelDelta` for IE<9 and normalize (down is positive).
            "wheelDelta" in e ? -e.wheelDelta : 0
          )
        );
      },
      deltaZ: 0,
      // Browsers without "deltaMode" is reporting in raw wheel delta where one
      // notch on the scroll is always +/- 120, roughly equivalent to pixels.
      // A good approximation of DOM_DELTA_LINE (1) is 5% of viewport size or
      // ~40 pixels, for DOM_DELTA_SCREEN (2) it is 87.5% of viewport size.
      deltaMode: 0
    }), Uc = Cn(Zi), Vo = [9, 13, 27, 32], Ku = 229, Xu = Ge && "CompositionEvent" in window, Bo = null;
    Ge && "documentMode" in document && (Bo = document.documentMode);
    var rg = Ge && "TextEvent" in window && !Bo, Ac = Ge && (!Xu || Bo && Bo > 8 && Bo <= 11), xh = 32, $d = String.fromCharCode(xh);
    function Rh() {
      at("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]), at("onCompositionEnd", ["compositionend", "focusout", "keydown", "keypress", "keyup", "mousedown"]), at("onCompositionStart", ["compositionstart", "focusout", "keydown", "keypress", "keyup", "mousedown"]), at("onCompositionUpdate", ["compositionupdate", "focusout", "keydown", "keypress", "keyup", "mousedown"]);
    }
    var Zu = !1;
    function Fc(e) {
      return (e.ctrlKey || e.altKey || e.metaKey) && // ctrlKey && altKey is equivalent to AltGr, and is not a command.
      !(e.ctrlKey && e.altKey);
    }
    function wh(e) {
      switch (e) {
        case "compositionstart":
          return "onCompositionStart";
        case "compositionend":
          return "onCompositionEnd";
        case "compositionupdate":
          return "onCompositionUpdate";
      }
    }
    function Wd(e, t) {
      return e === "keydown" && t.keyCode === Ku;
    }
    function Dh(e, t) {
      switch (e) {
        case "keyup":
          return Vo.indexOf(t.keyCode) !== -1;
        case "keydown":
          return t.keyCode !== Ku;
        case "keypress":
        case "mousedown":
        case "focusout":
          return !0;
        default:
          return !1;
      }
    }
    function Yd(e) {
      var t = e.detail;
      return typeof t == "object" && "data" in t ? t.data : null;
    }
    function Pc(e) {
      return e.locale === "ko";
    }
    var yi = !1;
    function Qd(e, t, a, i, l) {
      var s, d;
      if (Xu ? s = wh(t) : yi ? Dh(t, i) && (s = "onCompositionEnd") : Wd(t, i) && (s = "onCompositionStart"), !s)
        return null;
      Ac && !Pc(i) && (!yi && s === "onCompositionStart" ? yi = Ki(l) : s === "onCompositionEnd" && yi && (d = Ul()));
      var h = _h(a, s);
      if (h.length > 0) {
        var y = new Vd(s, t, null, i, l);
        if (e.push({
          event: y,
          listeners: h
        }), d)
          y.data = d;
        else {
          var b = Yd(i);
          b !== null && (y.data = b);
        }
      }
    }
    function Hc(e, t) {
      switch (e) {
        case "compositionend":
          return Yd(t);
        case "keypress":
          var a = t.which;
          return a !== xh ? null : (Zu = !0, $d);
        case "textInput":
          var i = t.data;
          return i === $d && Zu ? null : i;
        default:
          return null;
      }
    }
    function kh(e, t) {
      if (yi) {
        if (e === "compositionend" || !Xu && Dh(e, t)) {
          var a = Ul();
          return Nc(), yi = !1, a;
        }
        return null;
      }
      switch (e) {
        case "paste":
          return null;
        case "keypress":
          if (!Fc(t)) {
            if (t.char && t.char.length > 1)
              return t.char;
            if (t.which)
              return String.fromCharCode(t.which);
          }
          return null;
        case "compositionend":
          return Ac && !Pc(t) ? null : t.data;
        default:
          return null;
      }
    }
    function ag(e, t, a, i, l) {
      var s;
      if (rg ? s = Hc(t, i) : s = kh(t, i), !s)
        return null;
      var d = _h(a, "onBeforeInput");
      if (d.length > 0) {
        var h = new jo("onBeforeInput", "beforeinput", null, i, l);
        e.push({
          event: h,
          listeners: d
        }), h.data = s;
      }
    }
    function jc(e, t, a, i, l, s, d) {
      Qd(e, t, a, i, l), ag(e, t, a, i, l);
    }
    var ig = {
      color: !0,
      date: !0,
      datetime: !0,
      "datetime-local": !0,
      email: !0,
      month: !0,
      number: !0,
      password: !0,
      range: !0,
      search: !0,
      tel: !0,
      text: !0,
      time: !0,
      url: !0,
      week: !0
    };
    function Hl(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t === "input" ? !!ig[e.type] : t === "textarea";
    }
    /**
     * Checks if an event is supported in the current execution environment.
     *
     * NOTE: This will not work correctly for non-generic events such as `change`,
     * `reset`, `load`, `error`, and `select`.
     *
     * Borrows from Modernizr.
     *
     * @param {string} eventNameSuffix Event name, e.g. "click".
     * @return {boolean} True if the event is supported.
     * @internal
     * @license Modernizr 3.0.0pre (Custom Build) | MIT
     */
    function og(e) {
      if (!Ge)
        return !1;
      var t = "on" + e, a = t in document;
      if (!a) {
        var i = document.createElement("div");
        i.setAttribute(t, "return;"), a = typeof i[t] == "function";
      }
      return a;
    }
    function Vc() {
      at("onChange", ["change", "click", "focusin", "focusout", "input", "keydown", "keyup", "selectionchange"]);
    }
    function n(e, t, a, i) {
      $s(i);
      var l = _h(t, "onChange");
      if (l.length > 0) {
        var s = new sr("onChange", "change", null, a, i);
        e.push({
          event: s,
          listeners: l
        });
      }
    }
    var r = null, o = null;
    function u(e) {
      var t = e.nodeName && e.nodeName.toLowerCase();
      return t === "select" || t === "input" && e.type === "file";
    }
    function f(e) {
      var t = [];
      n(t, o, e, Is(e)), td(p, t);
    }
    function p(e) {
      _E(e, 0);
    }
    function E(e) {
      var t = Qc(e);
      if (vv(t))
        return e;
    }
    function T(e, t) {
      if (e === "change")
        return t;
    }
    var D = !1;
    Ge && (D = og("input") && (!document.documentMode || document.documentMode > 9));
    function j(e, t) {
      r = e, o = t, r.attachEvent("onpropertychange", ie);
    }
    function ae() {
      r && (r.detachEvent("onpropertychange", ie), r = null, o = null);
    }
    function ie(e) {
      e.propertyName === "value" && E(o) && f(e);
    }
    function re(e, t, a) {
      e === "focusin" ? (ae(), j(t, a)) : e === "focusout" && ae();
    }
    function xe(e, t) {
      if (e === "selectionchange" || e === "keyup" || e === "keydown")
        return E(o);
    }
    function Me(e) {
      var t = e.nodeName;
      return t && t.toLowerCase() === "input" && (e.type === "checkbox" || e.type === "radio");
    }
    function ze(e, t) {
      if (e === "click")
        return E(t);
    }
    function vn(e, t) {
      if (e === "input" || e === "change")
        return E(t);
    }
    function M(e) {
      var t = e._wrapperState;
      !t || !t.controlled || e.type !== "number" || _i(e, "number", e.value);
    }
    function O(e, t, a, i, l, s, d) {
      var h = a ? Qc(a) : window, y, b;
      if (u(h) ? y = T : Hl(h) ? D ? y = vn : (y = xe, b = re) : Me(h) && (y = ze), y) {
        var C = y(t, a);
        if (C) {
          n(e, C, i, l);
          return;
        }
      }
      b && b(t, h, a), t === "focusout" && M(h);
    }
    function U() {
      wt("onMouseEnter", ["mouseout", "mouseover"]), wt("onMouseLeave", ["mouseout", "mouseover"]), wt("onPointerEnter", ["pointerout", "pointerover"]), wt("onPointerLeave", ["pointerout", "pointerover"]);
    }
    function ce(e, t, a, i, l, s, d) {
      var h = t === "mouseover" || t === "pointerover", y = t === "mouseout" || t === "pointerout";
      if (h && !Wv(i)) {
        var b = i.relatedTarget || i.fromElement;
        if (b && (ts(b) || lp(b)))
          return;
      }
      if (!(!y && !h)) {
        var C;
        if (l.window === l)
          C = l;
        else {
          var N = l.ownerDocument;
          N ? C = N.defaultView || N.parentWindow : C = window;
        }
        var k, P;
        if (y) {
          var H = i.relatedTarget || i.toElement;
          if (k = a, P = H ? ts(H) : null, P !== null) {
            var Y = jr(P);
            (P !== Y || P.tag !== I && P.tag !== ee) && (P = null);
          }
        } else
          k = null, P = a;
        if (k !== P) {
          var we = Xi, We = "onMouseLeave", Pe = "onMouseEnter", bt = "mouse";
          (t === "pointerout" || t === "pointerover") && (we = Bd, We = "onPointerLeave", Pe = "onPointerEnter", bt = "pointer");
          var mt = k == null ? C : Qc(k), _ = P == null ? C : Qc(P), Q = new we(We, bt + "leave", k, i, l);
          Q.target = mt, Q.relatedTarget = _;
          var L = null, oe = ts(l);
          if (oe === a) {
            var De = new we(Pe, bt + "enter", P, i, l);
            De.target = _, De.relatedTarget = mt, L = De;
          }
          Ox(e, Q, L, k, P);
        }
      }
    }
    function Fe(e, t) {
      return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
    }
    var _e = typeof Object.is == "function" ? Object.is : Fe;
    function je(e, t) {
      if (_e(e, t))
        return !0;
      if (typeof e != "object" || e === null || typeof t != "object" || t === null)
        return !1;
      var a = Object.keys(e), i = Object.keys(t);
      if (a.length !== i.length)
        return !1;
      for (var l = 0; l < a.length; l++) {
        var s = a[l];
        if (!tt.call(t, s) || !_e(e[s], t[s]))
          return !1;
      }
      return !0;
    }
    function et(e) {
      for (; e && e.firstChild; )
        e = e.firstChild;
      return e;
    }
    function Hn(e) {
      for (; e; ) {
        if (e.nextSibling)
          return e.nextSibling;
        e = e.parentNode;
      }
    }
    function Tt(e, t) {
      for (var a = et(e), i = 0, l = 0; a; ) {
        if (a.nodeType === ai) {
          if (l = i + a.textContent.length, i <= t && l >= t)
            return {
              node: a,
              offset: t - i
            };
          i = l;
        }
        a = et(Hn(a));
      }
    }
    function Ji(e) {
      var t = e.ownerDocument, a = t && t.defaultView || window, i = a.getSelection && a.getSelection();
      if (!i || i.rangeCount === 0)
        return null;
      var l = i.anchorNode, s = i.anchorOffset, d = i.focusNode, h = i.focusOffset;
      try {
        l.nodeType, d.nodeType;
      } catch {
        return null;
      }
      return lg(e, l, s, d, h);
    }
    function lg(e, t, a, i, l) {
      var s = 0, d = -1, h = -1, y = 0, b = 0, C = e, N = null;
      e:
        for (; ; ) {
          for (var k = null; C === t && (a === 0 || C.nodeType === ai) && (d = s + a), C === i && (l === 0 || C.nodeType === ai) && (h = s + l), C.nodeType === ai && (s += C.nodeValue.length), (k = C.firstChild) !== null; )
            N = C, C = k;
          for (; ; ) {
            if (C === e)
              break e;
            if (N === t && ++y === a && (d = s), N === i && ++b === l && (h = s), (k = C.nextSibling) !== null)
              break;
            C = N, N = C.parentNode;
          }
          C = k;
        }
      return d === -1 || h === -1 ? null : {
        start: d,
        end: h
      };
    }
    function cx(e, t) {
      var a = e.ownerDocument || document, i = a && a.defaultView || window;
      if (i.getSelection) {
        var l = i.getSelection(), s = e.textContent.length, d = Math.min(t.start, s), h = t.end === void 0 ? d : Math.min(t.end, s);
        if (!l.extend && d > h) {
          var y = h;
          h = d, d = y;
        }
        var b = Tt(e, d), C = Tt(e, h);
        if (b && C) {
          if (l.rangeCount === 1 && l.anchorNode === b.node && l.anchorOffset === b.offset && l.focusNode === C.node && l.focusOffset === C.offset)
            return;
          var N = a.createRange();
          N.setStart(b.node, b.offset), l.removeAllRanges(), d > h ? (l.addRange(N), l.extend(C.node, C.offset)) : (N.setEnd(C.node, C.offset), l.addRange(N));
        }
      }
    }
    function EE(e) {
      return e && e.nodeType === ai;
    }
    function bE(e, t) {
      return !e || !t ? !1 : e === t ? !0 : EE(e) ? !1 : EE(t) ? bE(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1;
    }
    function fx(e) {
      return e && e.ownerDocument && bE(e.ownerDocument.documentElement, e);
    }
    function dx(e) {
      try {
        return typeof e.contentWindow.location.href == "string";
      } catch {
        return !1;
      }
    }
    function CE() {
      for (var e = window, t = Ns(); t instanceof e.HTMLIFrameElement; ) {
        if (dx(t))
          e = t.contentWindow;
        else
          return t;
        t = Ns(e.document);
      }
      return t;
    }
    function ug(e) {
      var t = e && e.nodeName && e.nodeName.toLowerCase();
      return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
    }
    function px() {
      var e = CE();
      return {
        focusedElem: e,
        selectionRange: ug(e) ? hx(e) : null
      };
    }
    function vx(e) {
      var t = CE(), a = e.focusedElem, i = e.selectionRange;
      if (t !== a && fx(a)) {
        i !== null && ug(a) && mx(a, i);
        for (var l = [], s = a; s = s.parentNode; )
          s.nodeType === xr && l.push({
            element: s,
            left: s.scrollLeft,
            top: s.scrollTop
          });
        typeof a.focus == "function" && a.focus();
        for (var d = 0; d < l.length; d++) {
          var h = l[d];
          h.element.scrollLeft = h.left, h.element.scrollTop = h.top;
        }
      }
    }
    function hx(e) {
      var t;
      return "selectionStart" in e ? t = {
        start: e.selectionStart,
        end: e.selectionEnd
      } : t = Ji(e), t || {
        start: 0,
        end: 0
      };
    }
    function mx(e, t) {
      var a = t.start, i = t.end;
      i === void 0 && (i = a), "selectionStart" in e ? (e.selectionStart = a, e.selectionEnd = Math.min(i, e.value.length)) : cx(e, t);
    }
    var yx = Ge && "documentMode" in document && document.documentMode <= 11;
    function gx() {
      at("onSelect", ["focusout", "contextmenu", "dragend", "focusin", "keydown", "keyup", "mousedown", "mouseup", "selectionchange"]);
    }
    var Bc = null, sg = null, qd = null, cg = !1;
    function Sx(e) {
      if ("selectionStart" in e && ug(e))
        return {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      var t = e.ownerDocument && e.ownerDocument.defaultView || window, a = t.getSelection();
      return {
        anchorNode: a.anchorNode,
        anchorOffset: a.anchorOffset,
        focusNode: a.focusNode,
        focusOffset: a.focusOffset
      };
    }
    function Ex(e) {
      return e.window === e ? e.document : e.nodeType === Da ? e : e.ownerDocument;
    }
    function TE(e, t, a) {
      var i = Ex(a);
      if (!(cg || Bc == null || Bc !== Ns(i))) {
        var l = Sx(Bc);
        if (!qd || !je(qd, l)) {
          qd = l;
          var s = _h(sg, "onSelect");
          if (s.length > 0) {
            var d = new sr("onSelect", "select", null, t, a);
            e.push({
              event: d,
              listeners: s
            }), d.target = Bc;
          }
        }
      }
    }
    function bx(e, t, a, i, l, s, d) {
      var h = a ? Qc(a) : window;
      switch (t) {
        case "focusin":
          (Hl(h) || h.contentEditable === "true") && (Bc = h, sg = a, qd = null);
          break;
        case "focusout":
          Bc = null, sg = null, qd = null;
          break;
        case "mousedown":
          cg = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          cg = !1, TE(e, i, l);
          break;
        case "selectionchange":
          if (yx)
            break;
        case "keydown":
        case "keyup":
          TE(e, i, l);
      }
    }
    function Oh(e, t) {
      var a = {};
      return a[e.toLowerCase()] = t.toLowerCase(), a["Webkit" + e] = "webkit" + t, a["Moz" + e] = "moz" + t, a;
    }
    var Ic = {
      animationend: Oh("Animation", "AnimationEnd"),
      animationiteration: Oh("Animation", "AnimationIteration"),
      animationstart: Oh("Animation", "AnimationStart"),
      transitionend: Oh("Transition", "TransitionEnd")
    }, fg = {}, xE = {};
    Ge && (xE = document.createElement("div").style, "AnimationEvent" in window || (delete Ic.animationend.animation, delete Ic.animationiteration.animation, delete Ic.animationstart.animation), "TransitionEvent" in window || delete Ic.transitionend.transition);
    function Nh(e) {
      if (fg[e])
        return fg[e];
      if (!Ic[e])
        return e;
      var t = Ic[e];
      for (var a in t)
        if (t.hasOwnProperty(a) && a in xE)
          return fg[e] = t[a];
      return e;
    }
    var RE = Nh("animationend"), wE = Nh("animationiteration"), DE = Nh("animationstart"), kE = Nh("transitionend"), OE = /* @__PURE__ */ new Map(), NE = ["abort", "auxClick", "cancel", "canPlay", "canPlayThrough", "click", "close", "contextMenu", "copy", "cut", "drag", "dragEnd", "dragEnter", "dragExit", "dragLeave", "dragOver", "dragStart", "drop", "durationChange", "emptied", "encrypted", "ended", "error", "gotPointerCapture", "input", "invalid", "keyDown", "keyPress", "keyUp", "load", "loadedData", "loadedMetadata", "loadStart", "lostPointerCapture", "mouseDown", "mouseMove", "mouseOut", "mouseOver", "mouseUp", "paste", "pause", "play", "playing", "pointerCancel", "pointerDown", "pointerMove", "pointerOut", "pointerOver", "pointerUp", "progress", "rateChange", "reset", "resize", "seeked", "seeking", "stalled", "submit", "suspend", "timeUpdate", "touchCancel", "touchEnd", "touchStart", "volumeChange", "scroll", "toggle", "touchMove", "waiting", "wheel"];
    function jl(e, t) {
      OE.set(e, t), at(t, [e]);
    }
    function Cx() {
      for (var e = 0; e < NE.length; e++) {
        var t = NE[e], a = t.toLowerCase(), i = t[0].toUpperCase() + t.slice(1);
        jl(a, "on" + i);
      }
      jl(RE, "onAnimationEnd"), jl(wE, "onAnimationIteration"), jl(DE, "onAnimationStart"), jl("dblclick", "onDoubleClick"), jl("focusin", "onFocus"), jl("focusout", "onBlur"), jl(kE, "onTransitionEnd");
    }
    function Tx(e, t, a, i, l, s, d) {
      var h = OE.get(t);
      if (h !== void 0) {
        var y = sr, b = t;
        switch (t) {
          case "keypress":
            if (Fo(i) === 0)
              return;
          case "keydown":
          case "keyup":
            y = eg;
            break;
          case "focusin":
            b = "focus", y = _c;
            break;
          case "focusout":
            b = "blur", y = _c;
            break;
          case "beforeblur":
          case "afterblur":
            y = _c;
            break;
          case "click":
            if (i.button === 2)
              return;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            y = Xi;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            y = Ho;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            y = pa;
            break;
          case RE:
          case wE:
          case DE:
            y = Lc;
            break;
          case kE:
            y = ng;
            break;
          case "scroll":
            y = Fd;
            break;
          case "wheel":
            y = Uc;
            break;
          case "copy":
          case "cut":
          case "paste":
            y = Ky;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            y = Bd;
            break;
        }
        var C = (s & yo) !== 0;
        {
          var N = !C && // TODO: ideally, we'd eventually add all events from
          // nonDelegatedEvents list in DOMPluginEventSystem.
          // Then we can remove this special list.
          // This is a breaking change that can wait until React 18.
          t === "scroll", k = Dx(a, h, i.type, C, N);
          if (k.length > 0) {
            var P = new y(h, b, null, i, l);
            e.push({
              event: P,
              listeners: k
            });
          }
        }
      }
    }
    Cx(), U(), Vc(), gx(), Rh();
    function xx(e, t, a, i, l, s, d) {
      Tx(e, t, a, i, l, s);
      var h = (s & Fy) === 0;
      h && (ce(e, t, a, i, l), O(e, t, a, i, l), bx(e, t, a, i, l), jc(e, t, a, i, l));
    }
    var Gd = ["abort", "canplay", "canplaythrough", "durationchange", "emptied", "encrypted", "ended", "error", "loadeddata", "loadedmetadata", "loadstart", "pause", "play", "playing", "progress", "ratechange", "resize", "seeked", "seeking", "stalled", "suspend", "timeupdate", "volumechange", "waiting"], dg = new Set(["cancel", "close", "invalid", "load", "scroll", "toggle"].concat(Gd));
    function ME(e, t, a) {
      var i = e.type || "unknown-event";
      e.currentTarget = a, ui(i, t, void 0, e), e.currentTarget = null;
    }
    function Rx(e, t, a) {
      var i;
      if (a)
        for (var l = t.length - 1; l >= 0; l--) {
          var s = t[l], d = s.instance, h = s.currentTarget, y = s.listener;
          if (d !== i && e.isPropagationStopped())
            return;
          ME(e, y, h), i = d;
        }
      else
        for (var b = 0; b < t.length; b++) {
          var C = t[b], N = C.instance, k = C.currentTarget, P = C.listener;
          if (N !== i && e.isPropagationStopped())
            return;
          ME(e, P, k), i = N;
        }
    }
    function _E(e, t) {
      for (var a = (t & yo) !== 0, i = 0; i < e.length; i++) {
        var l = e[i], s = l.event, d = l.listeners;
        Rx(s, d, a);
      }
      id();
    }
    function wx(e, t, a, i, l) {
      var s = Is(a), d = [];
      xx(d, e, i, a, s, t), _E(d, t);
    }
    function rn(e, t) {
      dg.has(e) || g('Did not expect a listenToNonDelegatedEvent() call for "%s". This is a bug in React. Please file an issue.', e);
      var a = !1, i = nw(t), l = Nx(e, a);
      i.has(l) || (LE(t, e, Tu, a), i.add(l));
    }
    function pg(e, t, a) {
      dg.has(e) && !t && g('Did not expect a listenToNativeEvent() call for "%s" in the bubble phase. This is a bug in React. Please file an issue.', e);
      var i = 0;
      t && (i |= yo), LE(a, e, i, t);
    }
    var Mh = "_reactListening" + Math.random().toString(36).slice(2);
    function Kd(e) {
      if (!e[Mh]) {
        e[Mh] = !0, Bt.forEach(function(a) {
          a !== "selectionchange" && (dg.has(a) || pg(a, !1, e), pg(a, !0, e));
        });
        var t = e.nodeType === Da ? e : e.ownerDocument;
        t !== null && (t[Mh] || (t[Mh] = !0, pg("selectionchange", !1, t)));
      }
    }
    function LE(e, t, a, i, l) {
      var s = _l(e, t, a), d = void 0;
      ku && (t === "touchstart" || t === "touchmove" || t === "wheel") && (d = !0), e = e, i ? d !== void 0 ? mi(e, t, s, d) : zl(e, t, s) : d !== void 0 ? Oc(e, t, s, d) : Ad(e, t, s);
    }
    function zE(e, t) {
      return e === t || e.nodeType === En && e.parentNode === t;
    }
    function vg(e, t, a, i, l) {
      var s = i;
      if (!(t & oi) && !(t & Tu)) {
        var d = l;
        if (i !== null) {
          var h = i;
          e:
            for (; ; ) {
              if (h === null)
                return;
              var y = h.tag;
              if (y === V || y === q) {
                var b = h.stateNode.containerInfo;
                if (zE(b, d))
                  break;
                if (y === q)
                  for (var C = h.return; C !== null; ) {
                    var N = C.tag;
                    if (N === V || N === q) {
                      var k = C.stateNode.containerInfo;
                      if (zE(k, d))
                        return;
                    }
                    C = C.return;
                  }
                for (; b !== null; ) {
                  var P = ts(b);
                  if (P === null)
                    return;
                  var H = P.tag;
                  if (H === I || H === ee) {
                    h = s = P;
                    continue e;
                  }
                  b = b.parentNode;
                }
              }
              h = h.return;
            }
        }
      }
      td(function() {
        return wx(e, t, a, s);
      });
    }
    function Xd(e, t, a) {
      return {
        instance: e,
        listener: t,
        currentTarget: a
      };
    }
    function Dx(e, t, a, i, l, s) {
      for (var d = t !== null ? t + "Capture" : null, h = i ? d : t, y = [], b = e, C = null; b !== null; ) {
        var N = b, k = N.stateNode, P = N.tag;
        if (P === I && k !== null && (C = k, h !== null)) {
          var H = So(b, h);
          H != null && y.push(Xd(b, H, C));
        }
        if (l)
          break;
        b = b.return;
      }
      return y;
    }
    function _h(e, t) {
      for (var a = t + "Capture", i = [], l = e; l !== null; ) {
        var s = l, d = s.stateNode, h = s.tag;
        if (h === I && d !== null) {
          var y = d, b = So(l, a);
          b != null && i.unshift(Xd(l, b, y));
          var C = So(l, t);
          C != null && i.push(Xd(l, C, y));
        }
        l = l.return;
      }
      return i;
    }
    function $c(e) {
      if (e === null)
        return null;
      do
        e = e.return;
      while (e && e.tag !== I);
      return e || null;
    }
    function kx(e, t) {
      for (var a = e, i = t, l = 0, s = a; s; s = $c(s))
        l++;
      for (var d = 0, h = i; h; h = $c(h))
        d++;
      for (; l - d > 0; )
        a = $c(a), l--;
      for (; d - l > 0; )
        i = $c(i), d--;
      for (var y = l; y--; ) {
        if (a === i || i !== null && a === i.alternate)
          return a;
        a = $c(a), i = $c(i);
      }
      return null;
    }
    function UE(e, t, a, i, l) {
      for (var s = t._reactName, d = [], h = a; h !== null && h !== i; ) {
        var y = h, b = y.alternate, C = y.stateNode, N = y.tag;
        if (b !== null && b === i)
          break;
        if (N === I && C !== null) {
          var k = C;
          if (l) {
            var P = So(h, s);
            P != null && d.unshift(Xd(h, P, k));
          } else if (!l) {
            var H = So(h, s);
            H != null && d.push(Xd(h, H, k));
          }
        }
        h = h.return;
      }
      d.length !== 0 && e.push({
        event: t,
        listeners: d
      });
    }
    function Ox(e, t, a, i, l) {
      var s = i && l ? kx(i, l) : null;
      i !== null && UE(e, t, i, s, !1), l !== null && a !== null && UE(e, a, l, s, !0);
    }
    function Nx(e, t) {
      return e + "__" + (t ? "capture" : "bubble");
    }
    var va = !1, Zd = "dangerouslySetInnerHTML", Lh = "suppressContentEditableWarning", Vl = "suppressHydrationWarning", AE = "autoFocus", Ju = "children", es = "style", zh = "__html", hg, Uh, Jd, FE, Ah, PE, HE;
    hg = {
      // There are working polyfills for <dialog>. Let people use it.
      dialog: !0,
      // Electron ships a custom <webview> tag to display external web content in
      // an isolated frame and process.
      // This tag is not present in non Electron environments such as JSDom which
      // is often used for testing purposes.
      // @see https://electronjs.org/docs/api/webview-tag
      webview: !0
    }, Uh = function(e, t) {
      Bs(e, t), Kf(e, t), $v(e, t, {
        registrationNameDependencies: an,
        possibleRegistrationNames: Mn
      });
    }, PE = Ge && !document.documentMode, Jd = function(e, t, a) {
      if (!va) {
        var i = Fh(a), l = Fh(t);
        l !== i && (va = !0, g("Prop `%s` did not match. Server: %s Client: %s", e, JSON.stringify(l), JSON.stringify(i)));
      }
    }, FE = function(e) {
      if (!va) {
        va = !0;
        var t = [];
        e.forEach(function(a) {
          t.push(a);
        }), g("Extra attributes from the server: %s", t);
      }
    }, Ah = function(e, t) {
      t === !1 ? g("Expected `%s` listener to be a function, instead got `false`.\n\nIf you used to conditionally omit it with %s={condition && value}, pass %s={condition ? value : undefined} instead.", e, e, e) : g("Expected `%s` listener to be a function, instead got a value of `%s` type.", e, typeof t);
    }, HE = function(e, t) {
      var a = e.namespaceURI === ri ? e.ownerDocument.createElement(e.tagName) : e.ownerDocument.createElementNS(e.namespaceURI, e.tagName);
      return a.innerHTML = t, a.innerHTML;
    };
    var Mx = /\r\n?/g, _x = /\u0000|\uFFFD/g;
    function Fh(e) {
      _n(e);
      var t = typeof e == "string" ? e : "" + e;
      return t.replace(Mx, `
`).replace(_x, "");
    }
    function Ph(e, t, a, i) {
      var l = Fh(t), s = Fh(e);
      if (s !== l && (i && (va || (va = !0, g('Text content did not match. Server: "%s" Client: "%s"', s, l))), a && Ae))
        throw new Error("Text content does not match server-rendered HTML.");
    }
    function jE(e) {
      return e.nodeType === Da ? e : e.ownerDocument;
    }
    function Lx() {
    }
    function Hh(e) {
      e.onclick = Lx;
    }
    function zx(e, t, a, i, l) {
      for (var s in i)
        if (i.hasOwnProperty(s)) {
          var d = i[s];
          if (s === es)
            d && Object.freeze(d), zv(t, d);
          else if (s === Zd) {
            var h = d ? d[zh] : void 0;
            h != null && Tv(t, h);
          } else if (s === Ju)
            if (typeof d == "string") {
              var y = e !== "textarea" || d !== "";
              y && Ps(t, d);
            } else
              typeof d == "number" && Ps(t, "" + d);
          else
            s === Lh || s === Vl || s === AE || (an.hasOwnProperty(s) ? d != null && (typeof d != "function" && Ah(s, d), s === "onScroll" && rn("scroll", t)) : d != null && co(t, s, d, l));
        }
    }
    function Ux(e, t, a, i) {
      for (var l = 0; l < t.length; l += 2) {
        var s = t[l], d = t[l + 1];
        s === es ? zv(e, d) : s === Zd ? Tv(e, d) : s === Ju ? Ps(e, d) : co(e, s, d, i);
      }
    }
    function Ax(e, t, a, i) {
      var l, s = jE(a), d, h = i;
      if (h === ri && (h = As(e)), h === ri) {
        if (l = ii(e, t), !l && e !== e.toLowerCase() && g("<%s /> is using incorrect casing. Use PascalCase for React components, or lowercase for HTML elements.", e), e === "script") {
          var y = s.createElement("div");
          y.innerHTML = "<script><\/script>";
          var b = y.firstChild;
          d = y.removeChild(b);
        } else if (typeof t.is == "string")
          d = s.createElement(e, {
            is: t.is
          });
        else if (d = s.createElement(e), e === "select") {
          var C = d;
          t.multiple ? C.multiple = !0 : t.size && (C.size = t.size);
        }
      } else
        d = s.createElementNS(h, e);
      return h === ri && !l && Object.prototype.toString.call(d) === "[object HTMLUnknownElement]" && !tt.call(hg, e) && (hg[e] = !0, g("The tag <%s> is unrecognized in this browser. If you meant to render a React component, start its name with an uppercase letter.", e)), d;
    }
    function Fx(e, t) {
      return jE(t).createTextNode(e);
    }
    function Px(e, t, a, i) {
      var l = ii(t, a);
      Uh(t, a);
      var s;
      switch (t) {
        case "dialog":
          rn("cancel", e), rn("close", e), s = a;
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e), s = a;
          break;
        case "video":
        case "audio":
          for (var d = 0; d < Gd.length; d++)
            rn(Gd[d], e);
          s = a;
          break;
        case "source":
          rn("error", e), s = a;
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e), s = a;
          break;
        case "details":
          rn("toggle", e), s = a;
          break;
        case "input":
          yu(e, a), s = mu(e, a), rn("invalid", e);
          break;
        case "option":
          zs(e, a), s = a;
          break;
        case "select":
          Sv(e, a), s = Hf(e, a), rn("invalid", e);
          break;
        case "textarea":
          Ev(e, a), s = Vf(e, a), rn("invalid", e);
          break;
        default:
          s = a;
      }
      switch (js(t, s), zx(t, e, i, s, l), t) {
        case "input":
          vo(e), gu(e, a, !1);
          break;
        case "textarea":
          vo(e), Cv(e);
          break;
        case "option":
          Pf(e, a);
          break;
        case "select":
          wy(e, a);
          break;
        default:
          typeof s.onClick == "function" && Hh(e);
          break;
      }
    }
    function Hx(e, t, a, i, l) {
      Uh(t, i);
      var s = null, d, h;
      switch (t) {
        case "input":
          d = mu(e, a), h = mu(e, i), s = [];
          break;
        case "select":
          d = Hf(e, a), h = Hf(e, i), s = [];
          break;
        case "textarea":
          d = Vf(e, a), h = Vf(e, i), s = [];
          break;
        default:
          d = a, h = i, typeof d.onClick != "function" && typeof h.onClick == "function" && Hh(e);
          break;
      }
      js(t, h);
      var y, b, C = null;
      for (y in d)
        if (!(h.hasOwnProperty(y) || !d.hasOwnProperty(y) || d[y] == null))
          if (y === es) {
            var N = d[y];
            for (b in N)
              N.hasOwnProperty(b) && (C || (C = {}), C[b] = "");
          } else
            y === Zd || y === Ju || y === Lh || y === Vl || y === AE || (an.hasOwnProperty(y) ? s || (s = []) : (s = s || []).push(y, null));
      for (y in h) {
        var k = h[y], P = d != null ? d[y] : void 0;
        if (!(!h.hasOwnProperty(y) || k === P || k == null && P == null))
          if (y === es)
            if (k && Object.freeze(k), P) {
              for (b in P)
                P.hasOwnProperty(b) && (!k || !k.hasOwnProperty(b)) && (C || (C = {}), C[b] = "");
              for (b in k)
                k.hasOwnProperty(b) && P[b] !== k[b] && (C || (C = {}), C[b] = k[b]);
            } else
              C || (s || (s = []), s.push(y, C)), C = k;
          else if (y === Zd) {
            var H = k ? k[zh] : void 0, Y = P ? P[zh] : void 0;
            H != null && Y !== H && (s = s || []).push(y, H);
          } else
            y === Ju ? (typeof k == "string" || typeof k == "number") && (s = s || []).push(y, "" + k) : y === Lh || y === Vl || (an.hasOwnProperty(y) ? (k != null && (typeof k != "function" && Ah(y, k), y === "onScroll" && rn("scroll", e)), !s && P !== k && (s = [])) : (s = s || []).push(y, k));
      }
      return C && (bu(C, h[es]), (s = s || []).push(es, C)), s;
    }
    function jx(e, t, a, i, l) {
      a === "input" && l.type === "radio" && l.name != null && Ff(e, l);
      var s = ii(a, i), d = ii(a, l);
      switch (Ux(e, t, s, d), a) {
        case "input":
          sl(e, l);
          break;
        case "textarea":
          bv(e, l);
          break;
        case "select":
          Dy(e, l);
          break;
      }
    }
    function Vx(e) {
      {
        var t = e.toLowerCase();
        return Vs.hasOwnProperty(t) && Vs[t] || null;
      }
    }
    function Bx(e, t, a, i, l, s, d) {
      var h, y;
      switch (h = ii(t, a), Uh(t, a), t) {
        case "dialog":
          rn("cancel", e), rn("close", e);
          break;
        case "iframe":
        case "object":
        case "embed":
          rn("load", e);
          break;
        case "video":
        case "audio":
          for (var b = 0; b < Gd.length; b++)
            rn(Gd[b], e);
          break;
        case "source":
          rn("error", e);
          break;
        case "img":
        case "image":
        case "link":
          rn("error", e), rn("load", e);
          break;
        case "details":
          rn("toggle", e);
          break;
        case "input":
          yu(e, a), rn("invalid", e);
          break;
        case "option":
          zs(e, a);
          break;
        case "select":
          Sv(e, a), rn("invalid", e);
          break;
        case "textarea":
          Ev(e, a), rn("invalid", e);
          break;
      }
      js(t, a);
      {
        y = /* @__PURE__ */ new Set();
        for (var C = e.attributes, N = 0; N < C.length; N++) {
          var k = C[N].name.toLowerCase();
          switch (k) {
            case "value":
              break;
            case "checked":
              break;
            case "selected":
              break;
            default:
              y.add(C[N].name);
          }
        }
      }
      var P = null;
      for (var H in a)
        if (a.hasOwnProperty(H)) {
          var Y = a[H];
          if (H === Ju)
            typeof Y == "string" ? e.textContent !== Y && (a[Vl] !== !0 && Ph(e.textContent, Y, s, d), P = [Ju, Y]) : typeof Y == "number" && e.textContent !== "" + Y && (a[Vl] !== !0 && Ph(e.textContent, Y, s, d), P = [Ju, "" + Y]);
          else if (an.hasOwnProperty(H))
            Y != null && (typeof Y != "function" && Ah(H, Y), H === "onScroll" && rn("scroll", e));
          else if (d && // Convince Flow we've calculated it (it's DEV-only in this method.)
          typeof h == "boolean") {
            var we = void 0, We = h && gt ? null : Ua(H);
            if (a[Vl] !== !0) {
              if (!(H === Lh || H === Vl || // Controlled attributes are not validated
              // TODO: Only ignore them on controlled tags.
              H === "value" || H === "checked" || H === "selected")) {
                if (H === Zd) {
                  var Pe = e.innerHTML, bt = Y ? Y[zh] : void 0;
                  if (bt != null) {
                    var mt = HE(e, bt);
                    mt !== Pe && Jd(H, Pe, mt);
                  }
                } else if (H === es) {
                  if (y.delete(H), PE) {
                    var _ = Uy(Y);
                    we = e.getAttribute("style"), _ !== we && Jd(H, we, _);
                  }
                } else if (h && !gt)
                  y.delete(H.toLowerCase()), we = Rs(e, H, Y), Y !== we && Jd(H, we, Y);
                else if (!Vt(H, We, h) && !on(H, Y, We, h)) {
                  var Q = !1;
                  if (We !== null)
                    y.delete(We.attributeName), we = ou(e, H, Y, We);
                  else {
                    var L = i;
                    if (L === ri && (L = As(t)), L === ri)
                      y.delete(H.toLowerCase());
                    else {
                      var oe = Vx(H);
                      oe !== null && oe !== H && (Q = !0, y.delete(oe)), y.delete(H);
                    }
                    we = Rs(e, H, Y);
                  }
                  var De = gt;
                  !De && Y !== we && !Q && Jd(H, we, Y);
                }
              }
            }
          }
        }
      switch (d && // $FlowFixMe - Should be inferred as not undefined.
      y.size > 0 && a[Vl] !== !0 && FE(y), t) {
        case "input":
          vo(e), gu(e, a, !0);
          break;
        case "textarea":
          vo(e), Cv(e);
          break;
        case "select":
        case "option":
          break;
        default:
          typeof a.onClick == "function" && Hh(e);
          break;
      }
      return P;
    }
    function Ix(e, t, a) {
      var i = e.nodeValue !== t;
      return i;
    }
    function mg(e, t) {
      {
        if (va)
          return;
        va = !0, g("Did not expect server HTML to contain a <%s> in <%s>.", t.nodeName.toLowerCase(), e.nodeName.toLowerCase());
      }
    }
    function yg(e, t) {
      {
        if (va)
          return;
        va = !0, g('Did not expect server HTML to contain the text node "%s" in <%s>.', t.nodeValue, e.nodeName.toLowerCase());
      }
    }
    function gg(e, t, a) {
      {
        if (va)
          return;
        va = !0, g("Expected server HTML to contain a matching <%s> in <%s>.", t, e.nodeName.toLowerCase());
      }
    }
    function Sg(e, t) {
      {
        if (t === "" || va)
          return;
        va = !0, g('Expected server HTML to contain a matching text node for "%s" in <%s>.', t, e.nodeName.toLowerCase());
      }
    }
    function $x(e, t, a) {
      switch (t) {
        case "input":
          hv(e, a);
          return;
        case "textarea":
          Bf(e, a);
          return;
        case "select":
          ky(e, a);
          return;
      }
    }
    var ep = function() {
    }, tp = function() {
    };
    {
      var Wx = ["address", "applet", "area", "article", "aside", "base", "basefont", "bgsound", "blockquote", "body", "br", "button", "caption", "center", "col", "colgroup", "dd", "details", "dir", "div", "dl", "dt", "embed", "fieldset", "figcaption", "figure", "footer", "form", "frame", "frameset", "h1", "h2", "h3", "h4", "h5", "h6", "head", "header", "hgroup", "hr", "html", "iframe", "img", "input", "isindex", "li", "link", "listing", "main", "marquee", "menu", "menuitem", "meta", "nav", "noembed", "noframes", "noscript", "object", "ol", "p", "param", "plaintext", "pre", "script", "section", "select", "source", "style", "summary", "table", "tbody", "td", "template", "textarea", "tfoot", "th", "thead", "title", "tr", "track", "ul", "wbr", "xmp"], VE = [
        "applet",
        "caption",
        "html",
        "table",
        "td",
        "th",
        "marquee",
        "object",
        "template",
        // https://html.spec.whatwg.org/multipage/syntax.html#html-integration-point
        // TODO: Distinguish by namespace here -- for <title>, including it here
        // errs on the side of fewer warnings
        "foreignObject",
        "desc",
        "title"
      ], Yx = VE.concat(["button"]), Qx = ["dd", "dt", "li", "option", "optgroup", "p", "rp", "rt"], BE = {
        current: null,
        formTag: null,
        aTagInScope: null,
        buttonTagInScope: null,
        nobrTagInScope: null,
        pTagInButtonScope: null,
        listItemTagAutoclosing: null,
        dlItemTagAutoclosing: null
      };
      tp = function(e, t) {
        var a = vt({}, e || BE), i = {
          tag: t
        };
        return VE.indexOf(t) !== -1 && (a.aTagInScope = null, a.buttonTagInScope = null, a.nobrTagInScope = null), Yx.indexOf(t) !== -1 && (a.pTagInButtonScope = null), Wx.indexOf(t) !== -1 && t !== "address" && t !== "div" && t !== "p" && (a.listItemTagAutoclosing = null, a.dlItemTagAutoclosing = null), a.current = i, t === "form" && (a.formTag = i), t === "a" && (a.aTagInScope = i), t === "button" && (a.buttonTagInScope = i), t === "nobr" && (a.nobrTagInScope = i), t === "p" && (a.pTagInButtonScope = i), t === "li" && (a.listItemTagAutoclosing = i), (t === "dd" || t === "dt") && (a.dlItemTagAutoclosing = i), a;
      };
      var qx = function(e, t) {
        switch (t) {
          case "select":
            return e === "option" || e === "optgroup" || e === "#text";
          case "optgroup":
            return e === "option" || e === "#text";
          case "option":
            return e === "#text";
          case "tr":
            return e === "th" || e === "td" || e === "style" || e === "script" || e === "template";
          case "tbody":
          case "thead":
          case "tfoot":
            return e === "tr" || e === "style" || e === "script" || e === "template";
          case "colgroup":
            return e === "col" || e === "template";
          case "table":
            return e === "caption" || e === "colgroup" || e === "tbody" || e === "tfoot" || e === "thead" || e === "style" || e === "script" || e === "template";
          case "head":
            return e === "base" || e === "basefont" || e === "bgsound" || e === "link" || e === "meta" || e === "title" || e === "noscript" || e === "noframes" || e === "style" || e === "script" || e === "template";
          case "html":
            return e === "head" || e === "body" || e === "frameset";
          case "frameset":
            return e === "frame";
          case "#document":
            return e === "html";
        }
        switch (e) {
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t !== "h1" && t !== "h2" && t !== "h3" && t !== "h4" && t !== "h5" && t !== "h6";
          case "rp":
          case "rt":
            return Qx.indexOf(t) === -1;
          case "body":
          case "caption":
          case "col":
          case "colgroup":
          case "frameset":
          case "frame":
          case "head":
          case "html":
          case "tbody":
          case "td":
          case "tfoot":
          case "th":
          case "thead":
          case "tr":
            return t == null;
        }
        return !0;
      }, Gx = function(e, t) {
        switch (e) {
          case "address":
          case "article":
          case "aside":
          case "blockquote":
          case "center":
          case "details":
          case "dialog":
          case "dir":
          case "div":
          case "dl":
          case "fieldset":
          case "figcaption":
          case "figure":
          case "footer":
          case "header":
          case "hgroup":
          case "main":
          case "menu":
          case "nav":
          case "ol":
          case "p":
          case "section":
          case "summary":
          case "ul":
          case "pre":
          case "listing":
          case "table":
          case "hr":
          case "xmp":
          case "h1":
          case "h2":
          case "h3":
          case "h4":
          case "h5":
          case "h6":
            return t.pTagInButtonScope;
          case "form":
            return t.formTag || t.pTagInButtonScope;
          case "li":
            return t.listItemTagAutoclosing;
          case "dd":
          case "dt":
            return t.dlItemTagAutoclosing;
          case "button":
            return t.buttonTagInScope;
          case "a":
            return t.aTagInScope;
          case "nobr":
            return t.nobrTagInScope;
        }
        return null;
      }, IE = {};
      ep = function(e, t, a) {
        a = a || BE;
        var i = a.current, l = i && i.tag;
        t != null && (e != null && g("validateDOMNesting: when childText is passed, childTag should be null"), e = "#text");
        var s = qx(e, l) ? null : i, d = s ? null : Gx(e, a), h = s || d;
        if (h) {
          var y = h.tag, b = !!s + "|" + e + "|" + y;
          if (!IE[b]) {
            IE[b] = !0;
            var C = e, N = "";
            if (e === "#text" ? /\S/.test(t) ? C = "Text nodes" : (C = "Whitespace text nodes", N = " Make sure you don't have any extra whitespace between tags on each line of your source code.") : C = "<" + e + ">", s) {
              var k = "";
              y === "table" && e === "tr" && (k += " Add a <tbody>, <thead> or <tfoot> to your code to match the DOM tree generated by the browser."), g("validateDOMNesting(...): %s cannot appear as a child of <%s>.%s%s", C, y, N, k);
            } else
              g("validateDOMNesting(...): %s cannot appear as a descendant of <%s>.", C, y);
          }
        }
      };
    }
    var jh = "suppressHydrationWarning", Vh = "$", Bh = "/$", np = "$?", rp = "$!", Kx = "style", Eg = null, bg = null;
    function Xx(e) {
      var t, a, i = e.nodeType;
      switch (i) {
        case Da:
        case ho: {
          t = i === Da ? "#document" : "#fragment";
          var l = e.documentElement;
          a = l ? l.namespaceURI : $f(null, "");
          break;
        }
        default: {
          var s = i === En ? e.parentNode : e, d = s.namespaceURI || null;
          t = s.tagName, a = $f(d, t);
          break;
        }
      }
      {
        var h = t.toLowerCase(), y = tp(null, h);
        return {
          namespace: a,
          ancestorInfo: y
        };
      }
    }
    function Zx(e, t, a) {
      {
        var i = e, l = $f(i.namespace, t), s = tp(i.ancestorInfo, t);
        return {
          namespace: l,
          ancestorInfo: s
        };
      }
    }
    function q_(e) {
      return e;
    }
    function Jx(e) {
      Eg = $r(), bg = px();
      var t = null;
      return Pn(!1), t;
    }
    function eR(e) {
      vx(bg), Pn(Eg), Eg = null, bg = null;
    }
    function tR(e, t, a, i, l) {
      var s;
      {
        var d = i;
        if (ep(e, null, d.ancestorInfo), typeof t.children == "string" || typeof t.children == "number") {
          var h = "" + t.children, y = tp(d.ancestorInfo, e);
          ep(null, h, y);
        }
        s = d.namespace;
      }
      var b = Ax(e, t, a, s);
      return op(l, b), Og(b, t), b;
    }
    function nR(e, t) {
      e.appendChild(t);
    }
    function rR(e, t, a, i, l) {
      switch (Px(e, t, a, i), t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          return !!a.autoFocus;
        case "img":
          return !0;
        default:
          return !1;
      }
    }
    function aR(e, t, a, i, l, s) {
      {
        var d = s;
        if (typeof i.children != typeof a.children && (typeof i.children == "string" || typeof i.children == "number")) {
          var h = "" + i.children, y = tp(d.ancestorInfo, t);
          ep(null, h, y);
        }
      }
      return Hx(e, t, a, i);
    }
    function Cg(e, t) {
      return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
    }
    function iR(e, t, a, i) {
      {
        var l = a;
        ep(null, e, l.ancestorInfo);
      }
      var s = Fx(e, t);
      return op(i, s), s;
    }
    function oR() {
      var e = window.event;
      return e === void 0 ? pi : pr(e.type);
    }
    var Tg = typeof setTimeout == "function" ? setTimeout : void 0, lR = typeof clearTimeout == "function" ? clearTimeout : void 0, xg = -1, $E = typeof Promise == "function" ? Promise : void 0, uR = typeof queueMicrotask == "function" ? queueMicrotask : typeof $E < "u" ? function(e) {
      return $E.resolve(null).then(e).catch(sR);
    } : Tg;
    function sR(e) {
      setTimeout(function() {
        throw e;
      });
    }
    function cR(e, t, a, i) {
      switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          a.autoFocus && e.focus();
          return;
        case "img": {
          a.src && (e.src = a.src);
          return;
        }
      }
    }
    function fR(e, t, a, i, l, s) {
      jx(e, t, a, i, l), Og(e, l);
    }
    function WE(e) {
      Ps(e, "");
    }
    function dR(e, t, a) {
      e.nodeValue = a;
    }
    function pR(e, t) {
      e.appendChild(t);
    }
    function vR(e, t) {
      var a;
      e.nodeType === En ? (a = e.parentNode, a.insertBefore(t, e)) : (a = e, a.appendChild(t));
      var i = e._reactRootContainer;
      i == null && a.onclick === null && Hh(a);
    }
    function hR(e, t, a) {
      e.insertBefore(t, a);
    }
    function mR(e, t, a) {
      e.nodeType === En ? e.parentNode.insertBefore(t, a) : e.insertBefore(t, a);
    }
    function yR(e, t) {
      e.removeChild(t);
    }
    function gR(e, t) {
      e.nodeType === En ? e.parentNode.removeChild(t) : e.removeChild(t);
    }
    function Rg(e, t) {
      var a = t, i = 0;
      do {
        var l = a.nextSibling;
        if (e.removeChild(a), l && l.nodeType === En) {
          var s = l.data;
          if (s === Bh)
            if (i === 0) {
              e.removeChild(l), ht(t);
              return;
            } else
              i--;
          else
            (s === Vh || s === np || s === rp) && i++;
        }
        a = l;
      } while (a);
      ht(t);
    }
    function SR(e, t) {
      e.nodeType === En ? Rg(e.parentNode, t) : e.nodeType === xr && Rg(e, t), ht(e);
    }
    function ER(e) {
      e = e;
      var t = e.style;
      typeof t.setProperty == "function" ? t.setProperty("display", "none", "important") : t.display = "none";
    }
    function bR(e) {
      e.nodeValue = "";
    }
    function CR(e, t) {
      e = e;
      var a = t[Kx], i = a != null && a.hasOwnProperty("display") ? a.display : null;
      e.style.display = Hs("display", i);
    }
    function TR(e, t) {
      e.nodeValue = t;
    }
    function xR(e) {
      e.nodeType === xr ? e.textContent = "" : e.nodeType === Da && e.documentElement && e.removeChild(e.documentElement);
    }
    function RR(e, t, a) {
      return e.nodeType !== xr || t.toLowerCase() !== e.nodeName.toLowerCase() ? null : e;
    }
    function wR(e, t) {
      return t === "" || e.nodeType !== ai ? null : e;
    }
    function DR(e) {
      return e.nodeType !== En ? null : e;
    }
    function YE(e) {
      return e.data === np;
    }
    function wg(e) {
      return e.data === rp;
    }
    function kR(e) {
      var t = e.nextSibling && e.nextSibling.dataset, a, i, l;
      return t && (a = t.dgst, i = t.msg, l = t.stck), {
        message: i,
        digest: a,
        stack: l
      };
    }
    function OR(e, t) {
      e._reactRetry = t;
    }
    function Ih(e) {
      for (; e != null; e = e.nextSibling) {
        var t = e.nodeType;
        if (t === xr || t === ai)
          break;
        if (t === En) {
          var a = e.data;
          if (a === Vh || a === rp || a === np)
            break;
          if (a === Bh)
            return null;
        }
      }
      return e;
    }
    function ap(e) {
      return Ih(e.nextSibling);
    }
    function NR(e) {
      return Ih(e.firstChild);
    }
    function MR(e) {
      return Ih(e.firstChild);
    }
    function _R(e) {
      return Ih(e.nextSibling);
    }
    function LR(e, t, a, i, l, s, d) {
      op(s, e), Og(e, a);
      var h;
      {
        var y = l;
        h = y.namespace;
      }
      var b = (s.mode & dt) !== Ye;
      return Bx(e, t, a, h, i, b, d);
    }
    function zR(e, t, a, i) {
      return op(a, e), a.mode & dt, Ix(e, t);
    }
    function UR(e, t) {
      op(t, e);
    }
    function AR(e) {
      for (var t = e.nextSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === Bh) {
            if (a === 0)
              return ap(t);
            a--;
          } else
            (i === Vh || i === rp || i === np) && a++;
        }
        t = t.nextSibling;
      }
      return null;
    }
    function QE(e) {
      for (var t = e.previousSibling, a = 0; t; ) {
        if (t.nodeType === En) {
          var i = t.data;
          if (i === Vh || i === rp || i === np) {
            if (a === 0)
              return t;
            a--;
          } else
            i === Bh && a++;
        }
        t = t.previousSibling;
      }
      return null;
    }
    function FR(e) {
      ht(e);
    }
    function PR(e) {
      ht(e);
    }
    function HR(e) {
      return e !== "head" && e !== "body";
    }
    function jR(e, t, a, i) {
      var l = !0;
      Ph(t.nodeValue, a, i, l);
    }
    function VR(e, t, a, i, l, s) {
      if (t[jh] !== !0) {
        var d = !0;
        Ph(i.nodeValue, l, s, d);
      }
    }
    function BR(e, t) {
      t.nodeType === xr ? mg(e, t) : t.nodeType === En || yg(e, t);
    }
    function IR(e, t) {
      {
        var a = e.parentNode;
        a !== null && (t.nodeType === xr ? mg(a, t) : t.nodeType === En || yg(a, t));
      }
    }
    function $R(e, t, a, i, l) {
      (l || t[jh] !== !0) && (i.nodeType === xr ? mg(a, i) : i.nodeType === En || yg(a, i));
    }
    function WR(e, t, a) {
      gg(e, t);
    }
    function YR(e, t) {
      Sg(e, t);
    }
    function QR(e, t, a) {
      {
        var i = e.parentNode;
        i !== null && gg(i, t);
      }
    }
    function qR(e, t) {
      {
        var a = e.parentNode;
        a !== null && Sg(a, t);
      }
    }
    function GR(e, t, a, i, l, s) {
      (s || t[jh] !== !0) && gg(a, i);
    }
    function KR(e, t, a, i, l) {
      (l || t[jh] !== !0) && Sg(a, i);
    }
    function XR(e) {
      g("An error occurred during hydration. The server HTML was replaced with client content in <%s>.", e.nodeName.toLowerCase());
    }
    function ZR(e) {
      Kd(e);
    }
    var Wc = Math.random().toString(36).slice(2), Yc = "__reactFiber$" + Wc, Dg = "__reactProps$" + Wc, ip = "__reactContainer$" + Wc, kg = "__reactEvents$" + Wc, JR = "__reactListeners$" + Wc, ew = "__reactHandles$" + Wc;
    function tw(e) {
      delete e[Yc], delete e[Dg], delete e[kg], delete e[JR], delete e[ew];
    }
    function op(e, t) {
      t[Yc] = e;
    }
    function $h(e, t) {
      t[ip] = e;
    }
    function qE(e) {
      e[ip] = null;
    }
    function lp(e) {
      return !!e[ip];
    }
    function ts(e) {
      var t = e[Yc];
      if (t)
        return t;
      for (var a = e.parentNode; a; ) {
        if (t = a[ip] || a[Yc], t) {
          var i = t.alternate;
          if (t.child !== null || i !== null && i.child !== null)
            for (var l = QE(e); l !== null; ) {
              var s = l[Yc];
              if (s)
                return s;
              l = QE(l);
            }
          return t;
        }
        e = a, a = e.parentNode;
      }
      return null;
    }
    function Bl(e) {
      var t = e[Yc] || e[ip];
      return t && (t.tag === I || t.tag === ee || t.tag === te || t.tag === V) ? t : null;
    }
    function Qc(e) {
      if (e.tag === I || e.tag === ee)
        return e.stateNode;
      throw new Error("getNodeFromInstance: Invalid argument.");
    }
    function Wh(e) {
      return e[Dg] || null;
    }
    function Og(e, t) {
      e[Dg] = t;
    }
    function nw(e) {
      var t = e[kg];
      return t === void 0 && (t = e[kg] = /* @__PURE__ */ new Set()), t;
    }
    var GE = {}, KE = S.ReactDebugCurrentFrame;
    function Yh(e) {
      if (e) {
        var t = e._owner, a = cu(e.type, e._source, t ? t.type : null);
        KE.setExtraStackFrame(a);
      } else
        KE.setExtraStackFrame(null);
    }
    function gi(e, t, a, i, l) {
      {
        var s = Function.call.bind(tt);
        for (var d in e)
          if (s(e, d)) {
            var h = void 0;
            try {
              if (typeof e[d] != "function") {
                var y = Error((i || "React class") + ": " + a + " type `" + d + "` is invalid; it must be a function, usually from the `prop-types` package, but received `" + typeof e[d] + "`.This often happens because of typos such as `PropTypes.function` instead of `PropTypes.func`.");
                throw y.name = "Invariant Violation", y;
              }
              h = e[d](t, d, i, a, null, "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED");
            } catch (b) {
              h = b;
            }
            h && !(h instanceof Error) && (Yh(l), g("%s: type specification of %s `%s` is invalid; the type checker function must return `null` or an `Error` but returned a %s. You may have forgotten to pass an argument to the type checker creator (arrayOf, instanceOf, objectOf, oneOf, oneOfType, and shape all require an argument).", i || "React class", a, d, typeof h), Yh(null)), h instanceof Error && !(h.message in GE) && (GE[h.message] = !0, Yh(l), g("Failed %s type: %s", a, h.message), Yh(null));
          }
      }
    }
    var Ng = [], Qh;
    Qh = [];
    var Io = -1;
    function Il(e) {
      return {
        current: e
      };
    }
    function Lr(e, t) {
      if (Io < 0) {
        g("Unexpected pop.");
        return;
      }
      t !== Qh[Io] && g("Unexpected Fiber popped."), e.current = Ng[Io], Ng[Io] = null, Qh[Io] = null, Io--;
    }
    function zr(e, t, a) {
      Io++, Ng[Io] = e.current, Qh[Io] = a, e.current = t;
    }
    var Mg;
    Mg = {};
    var _a = {};
    Object.freeze(_a);
    var $o = Il(_a), eo = Il(!1), _g = _a;
    function qc(e, t, a) {
      return a && to(t) ? _g : $o.current;
    }
    function XE(e, t, a) {
      {
        var i = e.stateNode;
        i.__reactInternalMemoizedUnmaskedChildContext = t, i.__reactInternalMemoizedMaskedChildContext = a;
      }
    }
    function Gc(e, t) {
      {
        var a = e.type, i = a.contextTypes;
        if (!i)
          return _a;
        var l = e.stateNode;
        if (l && l.__reactInternalMemoizedUnmaskedChildContext === t)
          return l.__reactInternalMemoizedMaskedChildContext;
        var s = {};
        for (var d in i)
          s[d] = t[d];
        {
          var h = it(e) || "Unknown";
          gi(i, s, "context", h);
        }
        return l && XE(e, t, s), s;
      }
    }
    function qh() {
      return eo.current;
    }
    function to(e) {
      {
        var t = e.childContextTypes;
        return t != null;
      }
    }
    function Gh(e) {
      Lr(eo, e), Lr($o, e);
    }
    function Lg(e) {
      Lr(eo, e), Lr($o, e);
    }
    function ZE(e, t, a) {
      {
        if ($o.current !== _a)
          throw new Error("Unexpected context found on stack. This error is likely caused by a bug in React. Please file an issue.");
        zr($o, t, e), zr(eo, a, e);
      }
    }
    function JE(e, t, a) {
      {
        var i = e.stateNode, l = t.childContextTypes;
        if (typeof i.getChildContext != "function") {
          {
            var s = it(e) || "Unknown";
            Mg[s] || (Mg[s] = !0, g("%s.childContextTypes is specified but there is no getChildContext() method on the instance. You can either define getChildContext() on %s or remove childContextTypes from it.", s, s));
          }
          return a;
        }
        var d = i.getChildContext();
        for (var h in d)
          if (!(h in l))
            throw new Error((it(e) || "Unknown") + '.getChildContext(): key "' + h + '" is not defined in childContextTypes.');
        {
          var y = it(e) || "Unknown";
          gi(l, d, "child context", y);
        }
        return vt({}, a, d);
      }
    }
    function Kh(e) {
      {
        var t = e.stateNode, a = t && t.__reactInternalMemoizedMergedChildContext || _a;
        return _g = $o.current, zr($o, a, e), zr(eo, eo.current, e), !0;
      }
    }
    function eb(e, t, a) {
      {
        var i = e.stateNode;
        if (!i)
          throw new Error("Expected to have an instance by this point. This error is likely caused by a bug in React. Please file an issue.");
        if (a) {
          var l = JE(e, t, _g);
          i.__reactInternalMemoizedMergedChildContext = l, Lr(eo, e), Lr($o, e), zr($o, l, e), zr(eo, a, e);
        } else
          Lr(eo, e), zr(eo, a, e);
      }
    }
    function rw(e) {
      {
        if (!cd(e) || e.tag !== F)
          throw new Error("Expected subtree parent to be a mounted class component. This error is likely caused by a bug in React. Please file an issue.");
        var t = e;
        do {
          switch (t.tag) {
            case V:
              return t.stateNode.context;
            case F: {
              var a = t.type;
              if (to(a))
                return t.stateNode.__reactInternalMemoizedMergedChildContext;
              break;
            }
          }
          t = t.return;
        } while (t !== null);
        throw new Error("Found unexpected detached subtree parent. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    var $l = 0, Xh = 1, Wo = null, zg = !1, Ug = !1;
    function tb(e) {
      Wo === null ? Wo = [e] : Wo.push(e);
    }
    function aw(e) {
      zg = !0, tb(e);
    }
    function nb() {
      zg && Wl();
    }
    function Wl() {
      if (!Ug && Wo !== null) {
        Ug = !0;
        var e = 0, t = ca();
        try {
          var a = !0, i = Wo;
          for (Dn(ar); e < i.length; e++) {
            var l = i[e];
            do
              l = l(a);
            while (l !== null);
          }
          Wo = null, zg = !1;
        } catch (s) {
          throw Wo !== null && (Wo = Wo.slice(e + 1)), Ks(Zs, Wl), s;
        } finally {
          Dn(t), Ug = !1;
        }
      }
      return null;
    }
    var Kc = [], Xc = 0, Zh = null, Jh = 0, $a = [], Wa = 0, ns = null, Yo = 1, Qo = "";
    function iw(e) {
      return as(), (e.flags & ld) !== Ie;
    }
    function ow(e) {
      return as(), Jh;
    }
    function lw() {
      var e = Qo, t = Yo, a = t & ~uw(t);
      return a.toString(32) + e;
    }
    function rs(e, t) {
      as(), Kc[Xc++] = Jh, Kc[Xc++] = Zh, Zh = e, Jh = t;
    }
    function rb(e, t, a) {
      as(), $a[Wa++] = Yo, $a[Wa++] = Qo, $a[Wa++] = ns, ns = e;
      var i = Yo, l = Qo, s = em(i) - 1, d = i & ~(1 << s), h = a + 1, y = em(t) + s;
      if (y > 30) {
        var b = s - s % 5, C = (1 << b) - 1, N = (d & C).toString(32), k = d >> b, P = s - b, H = em(t) + P, Y = h << P, we = Y | k, We = N + l;
        Yo = 1 << H | we, Qo = We;
      } else {
        var Pe = h << s, bt = Pe | d, mt = l;
        Yo = 1 << y | bt, Qo = mt;
      }
    }
    function Ag(e) {
      as();
      var t = e.return;
      if (t !== null) {
        var a = 1, i = 0;
        rs(e, a), rb(e, a, i);
      }
    }
    function em(e) {
      return 32 - ac(e);
    }
    function uw(e) {
      return 1 << em(e) - 1;
    }
    function Fg(e) {
      for (; e === Zh; )
        Zh = Kc[--Xc], Kc[Xc] = null, Jh = Kc[--Xc], Kc[Xc] = null;
      for (; e === ns; )
        ns = $a[--Wa], $a[Wa] = null, Qo = $a[--Wa], $a[Wa] = null, Yo = $a[--Wa], $a[Wa] = null;
    }
    function sw() {
      return as(), ns !== null ? {
        id: Yo,
        overflow: Qo
      } : null;
    }
    function cw(e, t) {
      as(), $a[Wa++] = Yo, $a[Wa++] = Qo, $a[Wa++] = ns, Yo = t.id, Qo = t.overflow, ns = e;
    }
    function as() {
      hr() || g("Expected to be hydrating. This is a bug in React. Please file an issue.");
    }
    var vr = null, Ya = null, Si = !1, is = !1, Yl = null;
    function fw() {
      Si && g("We should not be hydrating here. This is a bug in React. Please file a bug.");
    }
    function ab() {
      is = !0;
    }
    function dw() {
      return is;
    }
    function pw(e) {
      var t = e.stateNode.containerInfo;
      return Ya = MR(t), vr = e, Si = !0, Yl = null, is = !1, !0;
    }
    function vw(e, t, a) {
      return Ya = _R(t), vr = e, Si = !0, Yl = null, is = !1, a !== null && cw(e, a), !0;
    }
    function ib(e, t) {
      switch (e.tag) {
        case V: {
          BR(e.stateNode.containerInfo, t);
          break;
        }
        case I: {
          var a = (e.mode & dt) !== Ye;
          $R(
            e.type,
            e.memoizedProps,
            e.stateNode,
            t,
            // TODO: Delete this argument when we remove the legacy root API.
            a
          );
          break;
        }
        case te: {
          var i = e.memoizedState;
          i.dehydrated !== null && IR(i.dehydrated, t);
          break;
        }
      }
    }
    function ob(e, t) {
      ib(e, t);
      var a = yO();
      a.stateNode = t, a.return = e;
      var i = e.deletions;
      i === null ? (e.deletions = [a], e.flags |= Dt) : i.push(a);
    }
    function Pg(e, t) {
      {
        if (is)
          return;
        switch (e.tag) {
          case V: {
            var a = e.stateNode.containerInfo;
            switch (t.tag) {
              case I:
                var i = t.type;
                t.pendingProps, WR(a, i);
                break;
              case ee:
                var l = t.pendingProps;
                YR(a, l);
                break;
            }
            break;
          }
          case I: {
            var s = e.type, d = e.memoizedProps, h = e.stateNode;
            switch (t.tag) {
              case I: {
                var y = t.type, b = t.pendingProps, C = (e.mode & dt) !== Ye;
                GR(
                  s,
                  d,
                  h,
                  y,
                  b,
                  // TODO: Delete this argument when we remove the legacy root API.
                  C
                );
                break;
              }
              case ee: {
                var N = t.pendingProps, k = (e.mode & dt) !== Ye;
                KR(
                  s,
                  d,
                  h,
                  N,
                  // TODO: Delete this argument when we remove the legacy root API.
                  k
                );
                break;
              }
            }
            break;
          }
          case te: {
            var P = e.memoizedState, H = P.dehydrated;
            if (H !== null)
              switch (t.tag) {
                case I:
                  var Y = t.type;
                  t.pendingProps, QR(H, Y);
                  break;
                case ee:
                  var we = t.pendingProps;
                  qR(H, we);
                  break;
              }
            break;
          }
          default:
            return;
        }
      }
    }
    function lb(e, t) {
      t.flags = t.flags & ~ia | It, Pg(e, t);
    }
    function ub(e, t) {
      switch (e.tag) {
        case I: {
          var a = e.type;
          e.pendingProps;
          var i = RR(t, a);
          return i !== null ? (e.stateNode = i, vr = e, Ya = NR(i), !0) : !1;
        }
        case ee: {
          var l = e.pendingProps, s = wR(t, l);
          return s !== null ? (e.stateNode = s, vr = e, Ya = null, !0) : !1;
        }
        case te: {
          var d = DR(t);
          if (d !== null) {
            var h = {
              dehydrated: d,
              treeContext: sw(),
              retryLane: Mr
            };
            e.memoizedState = h;
            var y = gO(d);
            return y.return = e, e.child = y, vr = e, Ya = null, !0;
          }
          return !1;
        }
        default:
          return !1;
      }
    }
    function Hg(e) {
      return (e.mode & dt) !== Ye && (e.flags & Je) === Ie;
    }
    function jg(e) {
      throw new Error("Hydration failed because the initial UI does not match what was rendered on the server.");
    }
    function Vg(e) {
      if (Si) {
        var t = Ya;
        if (!t) {
          Hg(e) && (Pg(vr, e), jg()), lb(vr, e), Si = !1, vr = e;
          return;
        }
        var a = t;
        if (!ub(e, t)) {
          Hg(e) && (Pg(vr, e), jg()), t = ap(a);
          var i = vr;
          if (!t || !ub(e, t)) {
            lb(vr, e), Si = !1, vr = e;
            return;
          }
          ob(i, a);
        }
      }
    }
    function hw(e, t, a) {
      var i = e.stateNode, l = !is, s = LR(i, e.type, e.memoizedProps, t, a, e, l);
      return e.updateQueue = s, s !== null;
    }
    function mw(e) {
      var t = e.stateNode, a = e.memoizedProps, i = zR(t, a, e);
      if (i) {
        var l = vr;
        if (l !== null)
          switch (l.tag) {
            case V: {
              var s = l.stateNode.containerInfo, d = (l.mode & dt) !== Ye;
              jR(
                s,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                d
              );
              break;
            }
            case I: {
              var h = l.type, y = l.memoizedProps, b = l.stateNode, C = (l.mode & dt) !== Ye;
              VR(
                h,
                y,
                b,
                t,
                a,
                // TODO: Delete this argument when we remove the legacy root API.
                C
              );
              break;
            }
          }
      }
      return i;
    }
    function yw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      UR(a, e);
    }
    function gw(e) {
      var t = e.memoizedState, a = t !== null ? t.dehydrated : null;
      if (!a)
        throw new Error("Expected to have a hydrated suspense instance. This error is likely caused by a bug in React. Please file an issue.");
      return AR(a);
    }
    function sb(e) {
      for (var t = e.return; t !== null && t.tag !== I && t.tag !== V && t.tag !== te; )
        t = t.return;
      vr = t;
    }
    function tm(e) {
      if (e !== vr)
        return !1;
      if (!Si)
        return sb(e), Si = !0, !1;
      if (e.tag !== V && (e.tag !== I || HR(e.type) && !Cg(e.type, e.memoizedProps))) {
        var t = Ya;
        if (t)
          if (Hg(e))
            cb(e), jg();
          else
            for (; t; )
              ob(e, t), t = ap(t);
      }
      return sb(e), e.tag === te ? Ya = gw(e) : Ya = vr ? ap(e.stateNode) : null, !0;
    }
    function Sw() {
      return Si && Ya !== null;
    }
    function cb(e) {
      for (var t = Ya; t; )
        ib(e, t), t = ap(t);
    }
    function Zc() {
      vr = null, Ya = null, Si = !1, is = !1;
    }
    function fb() {
      Yl !== null && (iT(Yl), Yl = null);
    }
    function hr() {
      return Si;
    }
    function Bg(e) {
      Yl === null ? Yl = [e] : Yl.push(e);
    }
    var Ew = S.ReactCurrentBatchConfig, bw = null;
    function Cw() {
      return Ew.transition;
    }
    var Ei = {
      recordUnsafeLifecycleWarnings: function(e, t) {
      },
      flushPendingUnsafeLifecycleWarnings: function() {
      },
      recordLegacyContextWarning: function(e, t) {
      },
      flushLegacyContextWarning: function() {
      },
      discardPendingWarnings: function() {
      }
    };
    {
      var Tw = function(e) {
        for (var t = null, a = e; a !== null; )
          a.mode & tn && (t = a), a = a.return;
        return t;
      }, os = function(e) {
        var t = [];
        return e.forEach(function(a) {
          t.push(a);
        }), t.sort().join(", ");
      }, up = [], sp = [], cp = [], fp = [], dp = [], pp = [], ls = /* @__PURE__ */ new Set();
      Ei.recordUnsafeLifecycleWarnings = function(e, t) {
        ls.has(e.type) || (typeof t.componentWillMount == "function" && // Don't warn about react-lifecycles-compat polyfilled components.
        t.componentWillMount.__suppressDeprecationWarning !== !0 && up.push(e), e.mode & tn && typeof t.UNSAFE_componentWillMount == "function" && sp.push(e), typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps.__suppressDeprecationWarning !== !0 && cp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillReceiveProps == "function" && fp.push(e), typeof t.componentWillUpdate == "function" && t.componentWillUpdate.__suppressDeprecationWarning !== !0 && dp.push(e), e.mode & tn && typeof t.UNSAFE_componentWillUpdate == "function" && pp.push(e));
      }, Ei.flushPendingUnsafeLifecycleWarnings = function() {
        var e = /* @__PURE__ */ new Set();
        up.length > 0 && (up.forEach(function(k) {
          e.add(it(k) || "Component"), ls.add(k.type);
        }), up = []);
        var t = /* @__PURE__ */ new Set();
        sp.length > 0 && (sp.forEach(function(k) {
          t.add(it(k) || "Component"), ls.add(k.type);
        }), sp = []);
        var a = /* @__PURE__ */ new Set();
        cp.length > 0 && (cp.forEach(function(k) {
          a.add(it(k) || "Component"), ls.add(k.type);
        }), cp = []);
        var i = /* @__PURE__ */ new Set();
        fp.length > 0 && (fp.forEach(function(k) {
          i.add(it(k) || "Component"), ls.add(k.type);
        }), fp = []);
        var l = /* @__PURE__ */ new Set();
        dp.length > 0 && (dp.forEach(function(k) {
          l.add(it(k) || "Component"), ls.add(k.type);
        }), dp = []);
        var s = /* @__PURE__ */ new Set();
        if (pp.length > 0 && (pp.forEach(function(k) {
          s.add(it(k) || "Component"), ls.add(k.type);
        }), pp = []), t.size > 0) {
          var d = os(t);
          g(`Using UNSAFE_componentWillMount in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.

Please update the following components: %s`, d);
        }
        if (i.size > 0) {
          var h = os(i);
          g(`Using UNSAFE_componentWillReceiveProps in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state

Please update the following components: %s`, h);
        }
        if (s.size > 0) {
          var y = os(s);
          g(`Using UNSAFE_componentWillUpdate in strict mode is not recommended and may indicate bugs in your code. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.

Please update the following components: %s`, y);
        }
        if (e.size > 0) {
          var b = os(e);
          R(`componentWillMount has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move code with side effects to componentDidMount, and set initial state in the constructor.
* Rename componentWillMount to UNSAFE_componentWillMount to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, b);
        }
        if (a.size > 0) {
          var C = os(a);
          R(`componentWillReceiveProps has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* If you're updating state whenever props change, refactor your code to use memoization techniques or move it to static getDerivedStateFromProps. Learn more at: https://reactjs.org/link/derived-state
* Rename componentWillReceiveProps to UNSAFE_componentWillReceiveProps to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, C);
        }
        if (l.size > 0) {
          var N = os(l);
          R(`componentWillUpdate has been renamed, and is not recommended for use. See https://reactjs.org/link/unsafe-component-lifecycles for details.

* Move data fetching code or side effects to componentDidUpdate.
* Rename componentWillUpdate to UNSAFE_componentWillUpdate to suppress this warning in non-strict mode. In React 18.x, only the UNSAFE_ name will work. To rename all deprecated lifecycles to their new names, you can run \`npx react-codemod rename-unsafe-lifecycles\` in your project source folder.

Please update the following components: %s`, N);
        }
      };
      var nm = /* @__PURE__ */ new Map(), db = /* @__PURE__ */ new Set();
      Ei.recordLegacyContextWarning = function(e, t) {
        var a = Tw(e);
        if (a === null) {
          g("Expected to find a StrictMode component in a strict mode tree. This error is likely caused by a bug in React. Please file an issue.");
          return;
        }
        if (!db.has(e.type)) {
          var i = nm.get(a);
          (e.type.contextTypes != null || e.type.childContextTypes != null || t !== null && typeof t.getChildContext == "function") && (i === void 0 && (i = [], nm.set(a, i)), i.push(e));
        }
      }, Ei.flushLegacyContextWarning = function() {
        nm.forEach(function(e, t) {
          if (e.length !== 0) {
            var a = e[0], i = /* @__PURE__ */ new Set();
            e.forEach(function(s) {
              i.add(it(s) || "Component"), db.add(s.type);
            });
            var l = os(i);
            try {
              Ut(a), g(`Legacy context API has been detected within a strict-mode tree.

The old API will be supported in all 16.x releases, but applications using it should migrate to the new version.

Please update the following components: %s

Learn more about this warning here: https://reactjs.org/link/legacy-context`, l);
            } finally {
              xn();
            }
          }
        });
      }, Ei.discardPendingWarnings = function() {
        up = [], sp = [], cp = [], fp = [], dp = [], pp = [], nm = /* @__PURE__ */ new Map();
      };
    }
    function bi(e, t) {
      if (e && e.defaultProps) {
        var a = vt({}, t), i = e.defaultProps;
        for (var l in i)
          a[l] === void 0 && (a[l] = i[l]);
        return a;
      }
      return t;
    }
    var Ig = Il(null), $g;
    $g = {};
    var rm = null, Jc = null, Wg = null, am = !1;
    function im() {
      rm = null, Jc = null, Wg = null, am = !1;
    }
    function pb() {
      am = !0;
    }
    function vb() {
      am = !1;
    }
    function hb(e, t, a) {
      zr(Ig, t._currentValue, e), t._currentValue = a, t._currentRenderer !== void 0 && t._currentRenderer !== null && t._currentRenderer !== $g && g("Detected multiple renderers concurrently rendering the same context provider. This is currently unsupported."), t._currentRenderer = $g;
    }
    function Yg(e, t) {
      var a = Ig.current;
      Lr(Ig, t), e._currentValue = a;
    }
    function Qg(e, t, a) {
      for (var i = e; i !== null; ) {
        var l = i.alternate;
        if (_o(i.childLanes, t) ? l !== null && !_o(l.childLanes, t) && (l.childLanes = lt(l.childLanes, t)) : (i.childLanes = lt(i.childLanes, t), l !== null && (l.childLanes = lt(l.childLanes, t))), i === a)
          break;
        i = i.return;
      }
      i !== a && g("Expected to find the propagation root when scheduling context work. This error is likely caused by a bug in React. Please file an issue.");
    }
    function xw(e, t, a) {
      Rw(e, t, a);
    }
    function Rw(e, t, a) {
      var i = e.child;
      for (i !== null && (i.return = e); i !== null; ) {
        var l = void 0, s = i.dependencies;
        if (s !== null) {
          l = i.child;
          for (var d = s.firstContext; d !== null; ) {
            if (d.context === t) {
              if (i.tag === F) {
                var h = wn(a), y = qo(jt, h);
                y.tag = lm;
                var b = i.updateQueue;
                if (b !== null) {
                  var C = b.shared, N = C.pending;
                  N === null ? y.next = y : (y.next = N.next, N.next = y), C.pending = y;
                }
              }
              i.lanes = lt(i.lanes, a);
              var k = i.alternate;
              k !== null && (k.lanes = lt(k.lanes, a)), Qg(i.return, a, e), s.lanes = lt(s.lanes, a);
              break;
            }
            d = d.next;
          }
        } else if (i.tag === Se)
          l = i.type === e.type ? null : i.child;
        else if (i.tag === Ue) {
          var P = i.return;
          if (P === null)
            throw new Error("We just came from a parent so we must have had a parent. This is a bug in React.");
          P.lanes = lt(P.lanes, a);
          var H = P.alternate;
          H !== null && (H.lanes = lt(H.lanes, a)), Qg(P, a, e), l = i.sibling;
        } else
          l = i.child;
        if (l !== null)
          l.return = i;
        else
          for (l = i; l !== null; ) {
            if (l === e) {
              l = null;
              break;
            }
            var Y = l.sibling;
            if (Y !== null) {
              Y.return = l.return, l = Y;
              break;
            }
            l = l.return;
          }
        i = l;
      }
    }
    function ef(e, t) {
      rm = e, Jc = null, Wg = null;
      var a = e.dependencies;
      if (a !== null) {
        var i = a.firstContext;
        i !== null && (_r(a.lanes, t) && Dp(), a.firstContext = null);
      }
    }
    function jn(e) {
      am && g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      var t = e._currentValue;
      if (Wg !== e) {
        var a = {
          context: e,
          memoizedValue: t,
          next: null
        };
        if (Jc === null) {
          if (rm === null)
            throw new Error("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
          Jc = a, rm.dependencies = {
            lanes: G,
            firstContext: a
          };
        } else
          Jc = Jc.next = a;
      }
      return t;
    }
    var us = null;
    function qg(e) {
      us === null ? us = [e] : us.push(e);
    }
    function ww() {
      if (us !== null) {
        for (var e = 0; e < us.length; e++) {
          var t = us[e], a = t.interleaved;
          if (a !== null) {
            t.interleaved = null;
            var i = a.next, l = t.pending;
            if (l !== null) {
              var s = l.next;
              l.next = i, a.next = s;
            }
            t.pending = a;
          }
        }
        us = null;
      }
    }
    function mb(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, om(e, i);
    }
    function Dw(e, t, a, i) {
      var l = t.interleaved;
      l === null ? (a.next = a, qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a;
    }
    function kw(e, t, a, i) {
      var l = t.interleaved;
      return l === null ? (a.next = a, qg(t)) : (a.next = l.next, l.next = a), t.interleaved = a, om(e, i);
    }
    function ha(e, t) {
      return om(e, t);
    }
    var Ow = om;
    function om(e, t) {
      e.lanes = lt(e.lanes, t);
      var a = e.alternate;
      a !== null && (a.lanes = lt(a.lanes, t)), a === null && (e.flags & (It | ia)) !== Ie && yT(e);
      for (var i = e, l = e.return; l !== null; )
        l.childLanes = lt(l.childLanes, t), a = l.alternate, a !== null ? a.childLanes = lt(a.childLanes, t) : (l.flags & (It | ia)) !== Ie && yT(e), i = l, l = l.return;
      if (i.tag === V) {
        var s = i.stateNode;
        return s;
      } else
        return null;
    }
    var yb = 0, gb = 1, lm = 2, Gg = 3, um = !1, Kg, sm;
    Kg = !1, sm = null;
    function Xg(e) {
      var t = {
        baseState: e.memoizedState,
        firstBaseUpdate: null,
        lastBaseUpdate: null,
        shared: {
          pending: null,
          interleaved: null,
          lanes: G
        },
        effects: null
      };
      e.updateQueue = t;
    }
    function Sb(e, t) {
      var a = t.updateQueue, i = e.updateQueue;
      if (a === i) {
        var l = {
          baseState: i.baseState,
          firstBaseUpdate: i.firstBaseUpdate,
          lastBaseUpdate: i.lastBaseUpdate,
          shared: i.shared,
          effects: i.effects
        };
        t.updateQueue = l;
      }
    }
    function qo(e, t) {
      var a = {
        eventTime: e,
        lane: t,
        tag: yb,
        payload: null,
        callback: null,
        next: null
      };
      return a;
    }
    function Ql(e, t, a) {
      var i = e.updateQueue;
      if (i === null)
        return null;
      var l = i.shared;
      if (sm === l && !Kg && (g("An update (setState, replaceState, or forceUpdate) was scheduled from inside an update function. Update functions should be pure, with zero side-effects. Consider using componentDidUpdate or a callback."), Kg = !0), Ok()) {
        var s = l.pending;
        return s === null ? t.next = t : (t.next = s.next, s.next = t), l.pending = t, Ow(e, a);
      } else
        return kw(e, l, t, a);
    }
    function cm(e, t, a) {
      var i = t.updateQueue;
      if (i !== null) {
        var l = i.shared;
        if (Td(a)) {
          var s = l.lanes;
          s = Rd(s, e.pendingLanes);
          var d = lt(s, a);
          l.lanes = d, Dl(e, d);
        }
      }
    }
    function Zg(e, t) {
      var a = e.updateQueue, i = e.alternate;
      if (i !== null) {
        var l = i.updateQueue;
        if (a === l) {
          var s = null, d = null, h = a.firstBaseUpdate;
          if (h !== null) {
            var y = h;
            do {
              var b = {
                eventTime: y.eventTime,
                lane: y.lane,
                tag: y.tag,
                payload: y.payload,
                callback: y.callback,
                next: null
              };
              d === null ? s = d = b : (d.next = b, d = b), y = y.next;
            } while (y !== null);
            d === null ? s = d = t : (d.next = t, d = t);
          } else
            s = d = t;
          a = {
            baseState: l.baseState,
            firstBaseUpdate: s,
            lastBaseUpdate: d,
            shared: l.shared,
            effects: l.effects
          }, e.updateQueue = a;
          return;
        }
      }
      var C = a.lastBaseUpdate;
      C === null ? a.firstBaseUpdate = t : C.next = t, a.lastBaseUpdate = t;
    }
    function Nw(e, t, a, i, l, s) {
      switch (a.tag) {
        case gb: {
          var d = a.payload;
          if (typeof d == "function") {
            pb();
            var h = d.call(s, i, l);
            {
              if (e.mode & tn) {
                Rn(!0);
                try {
                  d.call(s, i, l);
                } finally {
                  Rn(!1);
                }
              }
              vb();
            }
            return h;
          }
          return d;
        }
        case Gg:
          e.flags = e.flags & ~Un | Je;
        case yb: {
          var y = a.payload, b;
          if (typeof y == "function") {
            pb(), b = y.call(s, i, l);
            {
              if (e.mode & tn) {
                Rn(!0);
                try {
                  y.call(s, i, l);
                } finally {
                  Rn(!1);
                }
              }
              vb();
            }
          } else
            b = y;
          return b == null ? i : vt({}, i, b);
        }
        case lm:
          return um = !0, i;
      }
      return i;
    }
    function fm(e, t, a, i) {
      var l = e.updateQueue;
      um = !1, sm = l.shared;
      var s = l.firstBaseUpdate, d = l.lastBaseUpdate, h = l.shared.pending;
      if (h !== null) {
        l.shared.pending = null;
        var y = h, b = y.next;
        y.next = null, d === null ? s = b : d.next = b, d = y;
        var C = e.alternate;
        if (C !== null) {
          var N = C.updateQueue, k = N.lastBaseUpdate;
          k !== d && (k === null ? N.firstBaseUpdate = b : k.next = b, N.lastBaseUpdate = y);
        }
      }
      if (s !== null) {
        var P = l.baseState, H = G, Y = null, we = null, We = null, Pe = s;
        do {
          var bt = Pe.lane, mt = Pe.eventTime;
          if (_o(i, bt)) {
            if (We !== null) {
              var Q = {
                eventTime: mt,
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: St,
                tag: Pe.tag,
                payload: Pe.payload,
                callback: Pe.callback,
                next: null
              };
              We = We.next = Q;
            }
            P = Nw(e, l, Pe, P, t, a);
            var L = Pe.callback;
            if (L !== null && // If the update was already committed, we should not queue its
            // callback again.
            Pe.lane !== St) {
              e.flags |= Pa;
              var oe = l.effects;
              oe === null ? l.effects = [Pe] : oe.push(Pe);
            }
          } else {
            var _ = {
              eventTime: mt,
              lane: bt,
              tag: Pe.tag,
              payload: Pe.payload,
              callback: Pe.callback,
              next: null
            };
            We === null ? (we = We = _, Y = P) : We = We.next = _, H = lt(H, bt);
          }
          if (Pe = Pe.next, Pe === null) {
            if (h = l.shared.pending, h === null)
              break;
            var De = h, Te = De.next;
            De.next = null, Pe = Te, l.lastBaseUpdate = De, l.shared.pending = null;
          }
        } while (!0);
        We === null && (Y = P), l.baseState = Y, l.firstBaseUpdate = we, l.lastBaseUpdate = We;
        var Xe = l.shared.interleaved;
        if (Xe !== null) {
          var rt = Xe;
          do
            H = lt(H, rt.lane), rt = rt.next;
          while (rt !== Xe);
        } else
          s === null && (l.shared.lanes = G);
        Hp(H), e.lanes = H, e.memoizedState = P;
      }
      sm = null;
    }
    function Mw(e, t) {
      if (typeof e != "function")
        throw new Error("Invalid argument passed as callback. Expected a function. Instead " + ("received: " + e));
      e.call(t);
    }
    function Eb() {
      um = !1;
    }
    function dm() {
      return um;
    }
    function bb(e, t, a) {
      var i = t.effects;
      if (t.effects = null, i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l], d = s.callback;
          d !== null && (s.callback = null, Mw(d, a));
        }
    }
    var Jg = {}, Cb = new v.Component().refs, eS, tS, nS, rS, aS, Tb, pm, iS, oS, lS;
    {
      eS = /* @__PURE__ */ new Set(), tS = /* @__PURE__ */ new Set(), nS = /* @__PURE__ */ new Set(), rS = /* @__PURE__ */ new Set(), iS = /* @__PURE__ */ new Set(), aS = /* @__PURE__ */ new Set(), oS = /* @__PURE__ */ new Set(), lS = /* @__PURE__ */ new Set();
      var xb = /* @__PURE__ */ new Set();
      pm = function(e, t) {
        if (!(e === null || typeof e == "function")) {
          var a = t + "_" + e;
          xb.has(a) || (xb.add(a), g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e));
        }
      }, Tb = function(e, t) {
        if (t === void 0) {
          var a = Pt(e) || "Component";
          aS.has(a) || (aS.add(a), g("%s.getDerivedStateFromProps(): A valid state object (or null) must be returned. You have returned undefined.", a));
        }
      }, Object.defineProperty(Jg, "_processChildContext", {
        enumerable: !1,
        value: function() {
          throw new Error("_processChildContext is not available in React 16+. This likely means you have multiple copies of React and are attempting to nest a React 15 tree inside a React 16 tree using unstable_renderSubtreeIntoContainer, which isn't supported. Try to make sure you have only one copy of React (and ideally, switch to ReactDOM.createPortal).");
        }
      }), Object.freeze(Jg);
    }
    function uS(e, t, a, i) {
      var l = e.memoizedState, s = a(i, l);
      {
        if (e.mode & tn) {
          Rn(!0);
          try {
            s = a(i, l);
          } finally {
            Rn(!1);
          }
        }
        Tb(t, s);
      }
      var d = s == null ? l : vt({}, l, s);
      if (e.memoizedState = d, e.lanes === G) {
        var h = e.updateQueue;
        h.baseState = d;
      }
    }
    var sS = {
      isMounted: Vr,
      enqueueSetState: function(e, t, a) {
        var i = ra(e), l = Qr(), s = tu(i), d = qo(l, s);
        d.payload = t, a != null && (pm(a, "setState"), d.callback = a);
        var h = Ql(i, d, s);
        h !== null && (Zn(h, i, s, l), cm(h, i, s)), Wi(i, s);
      },
      enqueueReplaceState: function(e, t, a) {
        var i = ra(e), l = Qr(), s = tu(i), d = qo(l, s);
        d.tag = gb, d.payload = t, a != null && (pm(a, "replaceState"), d.callback = a);
        var h = Ql(i, d, s);
        h !== null && (Zn(h, i, s, l), cm(h, i, s)), Wi(i, s);
      },
      enqueueForceUpdate: function(e, t) {
        var a = ra(e), i = Qr(), l = tu(a), s = qo(i, l);
        s.tag = lm, t != null && (pm(t, "forceUpdate"), s.callback = t);
        var d = Ql(a, s, l);
        d !== null && (Zn(d, a, l, i), cm(d, a, l)), Sd(a, l);
      }
    };
    function Rb(e, t, a, i, l, s, d) {
      var h = e.stateNode;
      if (typeof h.shouldComponentUpdate == "function") {
        var y = h.shouldComponentUpdate(i, s, d);
        {
          if (e.mode & tn) {
            Rn(!0);
            try {
              y = h.shouldComponentUpdate(i, s, d);
            } finally {
              Rn(!1);
            }
          }
          y === void 0 && g("%s.shouldComponentUpdate(): Returned undefined instead of a boolean value. Make sure to return true or false.", Pt(t) || "Component");
        }
        return y;
      }
      return t.prototype && t.prototype.isPureReactComponent ? !je(a, i) || !je(l, s) : !0;
    }
    function _w(e, t, a) {
      var i = e.stateNode;
      {
        var l = Pt(t) || "Component", s = i.render;
        s || (t.prototype && typeof t.prototype.render == "function" ? g("%s(...): No `render` method found on the returned component instance: did you accidentally return an object from the constructor?", l) : g("%s(...): No `render` method found on the returned component instance: you may have forgotten to define `render`.", l)), i.getInitialState && !i.getInitialState.isReactClassApproved && !i.state && g("getInitialState was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Did you mean to define a state property instead?", l), i.getDefaultProps && !i.getDefaultProps.isReactClassApproved && g("getDefaultProps was defined on %s, a plain JavaScript class. This is only supported for classes created using React.createClass. Use a static property to define defaultProps instead.", l), i.propTypes && g("propTypes was defined as an instance property on %s. Use a static property to define propTypes instead.", l), i.contextType && g("contextType was defined as an instance property on %s. Use a static property to define contextType instead.", l), i.contextTypes && g("contextTypes was defined as an instance property on %s. Use a static property to define contextTypes instead.", l), t.contextType && t.contextTypes && !oS.has(t) && (oS.add(t), g("%s declares both contextTypes and contextType static properties. The legacy contextTypes property will be ignored.", l)), typeof i.componentShouldUpdate == "function" && g("%s has a method called componentShouldUpdate(). Did you mean shouldComponentUpdate()? The name is phrased as a question because the function is expected to return a value.", l), t.prototype && t.prototype.isPureReactComponent && typeof i.shouldComponentUpdate < "u" && g("%s has a method called shouldComponentUpdate(). shouldComponentUpdate should not be used when extending React.PureComponent. Please extend React.Component if shouldComponentUpdate is used.", Pt(t) || "A pure component"), typeof i.componentDidUnmount == "function" && g("%s has a method called componentDidUnmount(). But there is no such lifecycle method. Did you mean componentWillUnmount()?", l), typeof i.componentDidReceiveProps == "function" && g("%s has a method called componentDidReceiveProps(). But there is no such lifecycle method. If you meant to update the state in response to changing props, use componentWillReceiveProps(). If you meant to fetch data or run side-effects or mutations after React has updated the UI, use componentDidUpdate().", l), typeof i.componentWillRecieveProps == "function" && g("%s has a method called componentWillRecieveProps(). Did you mean componentWillReceiveProps()?", l), typeof i.UNSAFE_componentWillRecieveProps == "function" && g("%s has a method called UNSAFE_componentWillRecieveProps(). Did you mean UNSAFE_componentWillReceiveProps()?", l);
        var d = i.props !== a;
        i.props !== void 0 && d && g("%s(...): When calling super() in `%s`, make sure to pass up the same props that your component's constructor was passed.", l, l), i.defaultProps && g("Setting defaultProps as an instance property on %s is not supported and will be ignored. Instead, define defaultProps as a static property on %s.", l, l), typeof i.getSnapshotBeforeUpdate == "function" && typeof i.componentDidUpdate != "function" && !nS.has(t) && (nS.add(t), g("%s: getSnapshotBeforeUpdate() should be used with componentDidUpdate(). This component defines getSnapshotBeforeUpdate() only.", Pt(t))), typeof i.getDerivedStateFromProps == "function" && g("%s: getDerivedStateFromProps() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof i.getDerivedStateFromError == "function" && g("%s: getDerivedStateFromError() is defined as an instance method and will be ignored. Instead, declare it as a static method.", l), typeof t.getSnapshotBeforeUpdate == "function" && g("%s: getSnapshotBeforeUpdate() is defined as a static method and will be ignored. Instead, declare it as an instance method.", l);
        var h = i.state;
        h && (typeof h != "object" || Ln(h)) && g("%s.state: must be set to an object or null", l), typeof i.getChildContext == "function" && typeof t.childContextTypes != "object" && g("%s.getChildContext(): childContextTypes must be defined in order to use getChildContext().", l);
      }
    }
    function wb(e, t) {
      t.updater = sS, e.stateNode = t, yl(t, e), t._reactInternalInstance = Jg;
    }
    function Db(e, t, a) {
      var i = !1, l = _a, s = _a, d = t.contextType;
      if ("contextType" in t) {
        var h = (
          // Allow null for conditional declaration
          d === null || d !== void 0 && d.$$typeof === Df && d._context === void 0
        );
        if (!h && !lS.has(t)) {
          lS.add(t);
          var y = "";
          d === void 0 ? y = " However, it is set to undefined. This can be caused by a typo or by mixing up named and default imports. This can also happen due to a circular dependency, so try moving the createContext() call to a separate file." : typeof d != "object" ? y = " However, it is set to a " + typeof d + "." : d.$$typeof === wf ? y = " Did you accidentally pass the Context.Provider instead?" : d._context !== void 0 ? y = " Did you accidentally pass the Context.Consumer instead?" : y = " However, it is set to an object with keys {" + Object.keys(d).join(", ") + "}.", g("%s defines an invalid contextType. contextType should point to the Context object returned by React.createContext().%s", Pt(t) || "Component", y);
        }
      }
      if (typeof d == "object" && d !== null)
        s = jn(d);
      else {
        l = qc(e, t, !0);
        var b = t.contextTypes;
        i = b != null, s = i ? Gc(e, l) : _a;
      }
      var C = new t(a, s);
      if (e.mode & tn) {
        Rn(!0);
        try {
          C = new t(a, s);
        } finally {
          Rn(!1);
        }
      }
      var N = e.memoizedState = C.state !== null && C.state !== void 0 ? C.state : null;
      wb(e, C);
      {
        if (typeof t.getDerivedStateFromProps == "function" && N === null) {
          var k = Pt(t) || "Component";
          tS.has(k) || (tS.add(k), g("`%s` uses `getDerivedStateFromProps` but its initial state is %s. This is not recommended. Instead, define the initial state by assigning an object to `this.state` in the constructor of `%s`. This ensures that `getDerivedStateFromProps` arguments have a consistent shape.", k, C.state === null ? "null" : "undefined", k));
        }
        if (typeof t.getDerivedStateFromProps == "function" || typeof C.getSnapshotBeforeUpdate == "function") {
          var P = null, H = null, Y = null;
          if (typeof C.componentWillMount == "function" && C.componentWillMount.__suppressDeprecationWarning !== !0 ? P = "componentWillMount" : typeof C.UNSAFE_componentWillMount == "function" && (P = "UNSAFE_componentWillMount"), typeof C.componentWillReceiveProps == "function" && C.componentWillReceiveProps.__suppressDeprecationWarning !== !0 ? H = "componentWillReceiveProps" : typeof C.UNSAFE_componentWillReceiveProps == "function" && (H = "UNSAFE_componentWillReceiveProps"), typeof C.componentWillUpdate == "function" && C.componentWillUpdate.__suppressDeprecationWarning !== !0 ? Y = "componentWillUpdate" : typeof C.UNSAFE_componentWillUpdate == "function" && (Y = "UNSAFE_componentWillUpdate"), P !== null || H !== null || Y !== null) {
            var we = Pt(t) || "Component", We = typeof t.getDerivedStateFromProps == "function" ? "getDerivedStateFromProps()" : "getSnapshotBeforeUpdate()";
            rS.has(we) || (rS.add(we), g(`Unsafe legacy lifecycles will not be called for components using new component APIs.

%s uses %s but also contains the following legacy lifecycles:%s%s%s

The above lifecycles should be removed. Learn more about this warning here:
https://reactjs.org/link/unsafe-component-lifecycles`, we, We, P !== null ? `
  ` + P : "", H !== null ? `
  ` + H : "", Y !== null ? `
  ` + Y : ""));
          }
        }
      }
      return i && XE(e, l, s), C;
    }
    function Lw(e, t) {
      var a = t.state;
      typeof t.componentWillMount == "function" && t.componentWillMount(), typeof t.UNSAFE_componentWillMount == "function" && t.UNSAFE_componentWillMount(), a !== t.state && (g("%s.componentWillMount(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", it(e) || "Component"), sS.enqueueReplaceState(t, t.state, null));
    }
    function kb(e, t, a, i) {
      var l = t.state;
      if (typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(a, i), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(a, i), t.state !== l) {
        {
          var s = it(e) || "Component";
          eS.has(s) || (eS.add(s), g("%s.componentWillReceiveProps(): Assigning directly to this.state is deprecated (except inside a component's constructor). Use setState instead.", s));
        }
        sS.enqueueReplaceState(t, t.state, null);
      }
    }
    function cS(e, t, a, i) {
      _w(e, t, a);
      var l = e.stateNode;
      l.props = a, l.state = e.memoizedState, l.refs = Cb, Xg(e);
      var s = t.contextType;
      if (typeof s == "object" && s !== null)
        l.context = jn(s);
      else {
        var d = qc(e, t, !0);
        l.context = Gc(e, d);
      }
      {
        if (l.state === a) {
          var h = Pt(t) || "Component";
          iS.has(h) || (iS.add(h), g("%s: It is not recommended to assign props directly to state because updates to props won't be reflected in state. In most cases, it is better to use props directly.", h));
        }
        e.mode & tn && Ei.recordLegacyContextWarning(e, l), Ei.recordUnsafeLifecycleWarnings(e, l);
      }
      l.state = e.memoizedState;
      var y = t.getDerivedStateFromProps;
      if (typeof y == "function" && (uS(e, t, y, a), l.state = e.memoizedState), typeof t.getDerivedStateFromProps != "function" && typeof l.getSnapshotBeforeUpdate != "function" && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (Lw(e, l), fm(e, a, l, i), l.state = e.memoizedState), typeof l.componentDidMount == "function") {
        var b = ot;
        b |= wr, (e.mode & ua) !== Ye && (b |= Dr), e.flags |= b;
      }
    }
    function zw(e, t, a, i) {
      var l = e.stateNode, s = e.memoizedProps;
      l.props = s;
      var d = l.context, h = t.contextType, y = _a;
      if (typeof h == "object" && h !== null)
        y = jn(h);
      else {
        var b = qc(e, t, !0);
        y = Gc(e, b);
      }
      var C = t.getDerivedStateFromProps, N = typeof C == "function" || typeof l.getSnapshotBeforeUpdate == "function";
      !N && (typeof l.UNSAFE_componentWillReceiveProps == "function" || typeof l.componentWillReceiveProps == "function") && (s !== a || d !== y) && kb(e, l, a, y), Eb();
      var k = e.memoizedState, P = l.state = k;
      if (fm(e, a, l, i), P = e.memoizedState, s === a && k === P && !qh() && !dm()) {
        if (typeof l.componentDidMount == "function") {
          var H = ot;
          H |= wr, (e.mode & ua) !== Ye && (H |= Dr), e.flags |= H;
        }
        return !1;
      }
      typeof C == "function" && (uS(e, t, C, a), P = e.memoizedState);
      var Y = dm() || Rb(e, t, s, a, k, P, y);
      if (Y) {
        if (!N && (typeof l.UNSAFE_componentWillMount == "function" || typeof l.componentWillMount == "function") && (typeof l.componentWillMount == "function" && l.componentWillMount(), typeof l.UNSAFE_componentWillMount == "function" && l.UNSAFE_componentWillMount()), typeof l.componentDidMount == "function") {
          var we = ot;
          we |= wr, (e.mode & ua) !== Ye && (we |= Dr), e.flags |= we;
        }
      } else {
        if (typeof l.componentDidMount == "function") {
          var We = ot;
          We |= wr, (e.mode & ua) !== Ye && (We |= Dr), e.flags |= We;
        }
        e.memoizedProps = a, e.memoizedState = P;
      }
      return l.props = a, l.state = P, l.context = y, Y;
    }
    function Uw(e, t, a, i, l) {
      var s = t.stateNode;
      Sb(e, t);
      var d = t.memoizedProps, h = t.type === t.elementType ? d : bi(t.type, d);
      s.props = h;
      var y = t.pendingProps, b = s.context, C = a.contextType, N = _a;
      if (typeof C == "object" && C !== null)
        N = jn(C);
      else {
        var k = qc(t, a, !0);
        N = Gc(t, k);
      }
      var P = a.getDerivedStateFromProps, H = typeof P == "function" || typeof s.getSnapshotBeforeUpdate == "function";
      !H && (typeof s.UNSAFE_componentWillReceiveProps == "function" || typeof s.componentWillReceiveProps == "function") && (d !== y || b !== N) && kb(t, s, i, N), Eb();
      var Y = t.memoizedState, we = s.state = Y;
      if (fm(t, i, s, l), we = t.memoizedState, d === y && Y === we && !qh() && !dm() && !fe)
        return typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= ot), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= aa), !1;
      typeof P == "function" && (uS(t, a, P, i), we = t.memoizedState);
      var We = dm() || Rb(t, a, h, i, Y, we, N) || // TODO: In some cases, we'll end up checking if context has changed twice,
      // both before and after `shouldComponentUpdate` has been called. Not ideal,
      // but I'm loath to refactor this function. This only happens for memoized
      // components so it's not that common.
      fe;
      return We ? (!H && (typeof s.UNSAFE_componentWillUpdate == "function" || typeof s.componentWillUpdate == "function") && (typeof s.componentWillUpdate == "function" && s.componentWillUpdate(i, we, N), typeof s.UNSAFE_componentWillUpdate == "function" && s.UNSAFE_componentWillUpdate(i, we, N)), typeof s.componentDidUpdate == "function" && (t.flags |= ot), typeof s.getSnapshotBeforeUpdate == "function" && (t.flags |= aa)) : (typeof s.componentDidUpdate == "function" && (d !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= ot), typeof s.getSnapshotBeforeUpdate == "function" && (d !== e.memoizedProps || Y !== e.memoizedState) && (t.flags |= aa), t.memoizedProps = i, t.memoizedState = we), s.props = i, s.state = we, s.context = N, We;
    }
    var fS, dS, pS, vS, hS, Ob = function(e, t) {
    };
    fS = !1, dS = !1, pS = {}, vS = {}, hS = {}, Ob = function(e, t) {
      if (!(e === null || typeof e != "object") && !(!e._store || e._store.validated || e.key != null)) {
        if (typeof e._store != "object")
          throw new Error("React Component in warnForMissingKey should have a _store. This error is likely caused by a bug in React. Please file an issue.");
        e._store.validated = !0;
        var a = it(t) || "Component";
        vS[a] || (vS[a] = !0, g('Each child in a list should have a unique "key" prop. See https://reactjs.org/link/warning-keys for more information.'));
      }
    };
    function vp(e, t, a) {
      var i = a.ref;
      if (i !== null && typeof i != "function" && typeof i != "object") {
        if ((e.mode & tn || st) && // We warn in ReactElement.js if owner and self are equal for string refs
        // because these cannot be automatically converted to an arrow function
        // using a codemod. Therefore, we don't have to warn about string refs again.
        !(a._owner && a._self && a._owner.stateNode !== a._self)) {
          var l = it(e) || "Component";
          pS[l] || (g('A string ref, "%s", has been found within a strict mode tree. String refs are a source of potential bugs and should be avoided. We recommend using useRef() or createRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref', i), pS[l] = !0);
        }
        if (a._owner) {
          var s = a._owner, d;
          if (s) {
            var h = s;
            if (h.tag !== F)
              throw new Error("Function components cannot have string refs. We recommend using useRef() instead. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-string-ref");
            d = h.stateNode;
          }
          if (!d)
            throw new Error("Missing owner for string ref " + i + ". This error is likely caused by a bug in React. Please file an issue.");
          var y = d;
          er(i, "ref");
          var b = "" + i;
          if (t !== null && t.ref !== null && typeof t.ref == "function" && t.ref._stringRef === b)
            return t.ref;
          var C = function(N) {
            var k = y.refs;
            k === Cb && (k = y.refs = {}), N === null ? delete k[b] : k[b] = N;
          };
          return C._stringRef = b, C;
        } else {
          if (typeof i != "string")
            throw new Error("Expected ref to be a function, a string, an object returned by React.createRef(), or null.");
          if (!a._owner)
            throw new Error("Element ref was specified as a string (" + i + `) but no owner was set. This could happen for one of the following reasons:
1. You may be adding a ref to a function component
2. You may be adding a ref to a component that was not created inside a component's render method
3. You have multiple copies of React loaded
See https://reactjs.org/link/refs-must-have-owner for more information.`);
        }
      }
      return i;
    }
    function vm(e, t) {
      var a = Object.prototype.toString.call(t);
      throw new Error("Objects are not valid as a React child (found: " + (a === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : a) + "). If you meant to render a collection of children, use an array instead.");
    }
    function hm(e) {
      {
        var t = it(e) || "Component";
        if (hS[t])
          return;
        hS[t] = !0, g("Functions are not valid as a React child. This may happen if you return a Component instead of <Component /> from render. Or maybe you meant to call this function rather than return it.");
      }
    }
    function Nb(e) {
      var t = e._payload, a = e._init;
      return a(t);
    }
    function Mb(e) {
      function t(_, Q) {
        if (e) {
          var L = _.deletions;
          L === null ? (_.deletions = [Q], _.flags |= Dt) : L.push(Q);
        }
      }
      function a(_, Q) {
        if (!e)
          return null;
        for (var L = Q; L !== null; )
          t(_, L), L = L.sibling;
        return null;
      }
      function i(_, Q) {
        for (var L = /* @__PURE__ */ new Map(), oe = Q; oe !== null; )
          oe.key !== null ? L.set(oe.key, oe) : L.set(oe.index, oe), oe = oe.sibling;
        return L;
      }
      function l(_, Q) {
        var L = ms(_, Q);
        return L.index = 0, L.sibling = null, L;
      }
      function s(_, Q, L) {
        if (_.index = L, !e)
          return _.flags |= ld, Q;
        var oe = _.alternate;
        if (oe !== null) {
          var De = oe.index;
          return De < Q ? (_.flags |= It, Q) : De;
        } else
          return _.flags |= It, Q;
      }
      function d(_) {
        return e && _.alternate === null && (_.flags |= It), _;
      }
      function h(_, Q, L, oe) {
        if (Q === null || Q.tag !== ee) {
          var De = B0(L, _.mode, oe);
          return De.return = _, De;
        } else {
          var Te = l(Q, L);
          return Te.return = _, Te;
        }
      }
      function y(_, Q, L, oe) {
        var De = L.type;
        if (De === ei)
          return C(_, Q, L.props.children, oe, L.key);
        if (Q !== null && (Q.elementType === De || // Keep this check inline so it only runs on the false path:
        bT(Q, L) || // Lazy types should reconcile their resolved type.
        // We need to do this after the Hot Reloading check above,
        // because hot reloading has different semantics than prod because
        // it doesn't resuspend. So we can't let the call below suspend.
        typeof De == "object" && De !== null && De.$$typeof === dr && Nb(De) === Q.type)) {
          var Te = l(Q, L.props);
          return Te.ref = vp(_, Q, L), Te.return = _, Te._debugSource = L._source, Te._debugOwner = L._owner, Te;
        }
        var Xe = V0(L, _.mode, oe);
        return Xe.ref = vp(_, Q, L), Xe.return = _, Xe;
      }
      function b(_, Q, L, oe) {
        if (Q === null || Q.tag !== q || Q.stateNode.containerInfo !== L.containerInfo || Q.stateNode.implementation !== L.implementation) {
          var De = I0(L, _.mode, oe);
          return De.return = _, De;
        } else {
          var Te = l(Q, L.children || []);
          return Te.return = _, Te;
        }
      }
      function C(_, Q, L, oe, De) {
        if (Q === null || Q.tag !== pe) {
          var Te = ru(L, _.mode, oe, De);
          return Te.return = _, Te;
        } else {
          var Xe = l(Q, L);
          return Xe.return = _, Xe;
        }
      }
      function N(_, Q, L) {
        if (typeof Q == "string" && Q !== "" || typeof Q == "number") {
          var oe = B0("" + Q, _.mode, L);
          return oe.return = _, oe;
        }
        if (typeof Q == "object" && Q !== null) {
          switch (Q.$$typeof) {
            case nl: {
              var De = V0(Q, _.mode, L);
              return De.ref = vp(_, null, Q), De.return = _, De;
            }
            case Ta: {
              var Te = I0(Q, _.mode, L);
              return Te.return = _, Te;
            }
            case dr: {
              var Xe = Q._payload, rt = Q._init;
              return N(_, rt(Xe), L);
            }
          }
          if (Ln(Q) || ti(Q)) {
            var Ft = ru(Q, _.mode, L, null);
            return Ft.return = _, Ft;
          }
          vm(_, Q);
        }
        return typeof Q == "function" && hm(_), null;
      }
      function k(_, Q, L, oe) {
        var De = Q !== null ? Q.key : null;
        if (typeof L == "string" && L !== "" || typeof L == "number")
          return De !== null ? null : h(_, Q, "" + L, oe);
        if (typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case nl:
              return L.key === De ? y(_, Q, L, oe) : null;
            case Ta:
              return L.key === De ? b(_, Q, L, oe) : null;
            case dr: {
              var Te = L._payload, Xe = L._init;
              return k(_, Q, Xe(Te), oe);
            }
          }
          if (Ln(L) || ti(L))
            return De !== null ? null : C(_, Q, L, oe, null);
          vm(_, L);
        }
        return typeof L == "function" && hm(_), null;
      }
      function P(_, Q, L, oe, De) {
        if (typeof oe == "string" && oe !== "" || typeof oe == "number") {
          var Te = _.get(L) || null;
          return h(Q, Te, "" + oe, De);
        }
        if (typeof oe == "object" && oe !== null) {
          switch (oe.$$typeof) {
            case nl: {
              var Xe = _.get(oe.key === null ? L : oe.key) || null;
              return y(Q, Xe, oe, De);
            }
            case Ta: {
              var rt = _.get(oe.key === null ? L : oe.key) || null;
              return b(Q, rt, oe, De);
            }
            case dr:
              var Ft = oe._payload, xt = oe._init;
              return P(_, Q, L, xt(Ft), De);
          }
          if (Ln(oe) || ti(oe)) {
            var Nn = _.get(L) || null;
            return C(Q, Nn, oe, De, null);
          }
          vm(Q, oe);
        }
        return typeof oe == "function" && hm(Q), null;
      }
      function H(_, Q, L) {
        {
          if (typeof _ != "object" || _ === null)
            return Q;
          switch (_.$$typeof) {
            case nl:
            case Ta:
              Ob(_, L);
              var oe = _.key;
              if (typeof oe != "string")
                break;
              if (Q === null) {
                Q = /* @__PURE__ */ new Set(), Q.add(oe);
                break;
              }
              if (!Q.has(oe)) {
                Q.add(oe);
                break;
              }
              g("Encountered two children with the same key, `%s`. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.", oe);
              break;
            case dr:
              var De = _._payload, Te = _._init;
              H(Te(De), Q, L);
              break;
          }
        }
        return Q;
      }
      function Y(_, Q, L, oe) {
        for (var De = null, Te = 0; Te < L.length; Te++) {
          var Xe = L[Te];
          De = H(Xe, De, _);
        }
        for (var rt = null, Ft = null, xt = Q, Nn = 0, Rt = 0, Tn = null; xt !== null && Rt < L.length; Rt++) {
          xt.index > Rt ? (Tn = xt, xt = null) : Tn = xt.sibling;
          var Ar = k(_, xt, L[Rt], oe);
          if (Ar === null) {
            xt === null && (xt = Tn);
            break;
          }
          e && xt && Ar.alternate === null && t(_, xt), Nn = s(Ar, Nn, Rt), Ft === null ? rt = Ar : Ft.sibling = Ar, Ft = Ar, xt = Tn;
        }
        if (Rt === L.length) {
          if (a(_, xt), hr()) {
            var Cr = Rt;
            rs(_, Cr);
          }
          return rt;
        }
        if (xt === null) {
          for (; Rt < L.length; Rt++) {
            var za = N(_, L[Rt], oe);
            za !== null && (Nn = s(za, Nn, Rt), Ft === null ? rt = za : Ft.sibling = za, Ft = za);
          }
          if (hr()) {
            var qr = Rt;
            rs(_, qr);
          }
          return rt;
        }
        for (var Gr = i(_, xt); Rt < L.length; Rt++) {
          var Fr = P(Gr, _, Rt, L[Rt], oe);
          Fr !== null && (e && Fr.alternate !== null && Gr.delete(Fr.key === null ? Rt : Fr.key), Nn = s(Fr, Nn, Rt), Ft === null ? rt = Fr : Ft.sibling = Fr, Ft = Fr);
        }
        if (e && Gr.forEach(function(gf) {
          return t(_, gf);
        }), hr()) {
          var el = Rt;
          rs(_, el);
        }
        return rt;
      }
      function we(_, Q, L, oe) {
        var De = ti(L);
        if (typeof De != "function")
          throw new Error("An object is not an iterable. This error is likely caused by a bug in React. Please file an issue.");
        {
          typeof Symbol == "function" && // $FlowFixMe Flow doesn't know about toStringTag
          L[Symbol.toStringTag] === "Generator" && (dS || g("Using Generators as children is unsupported and will likely yield unexpected results because enumerating a generator mutates it. You may convert it to an array with `Array.from()` or the `[...spread]` operator before rendering. Keep in mind you might need to polyfill these features for older browsers."), dS = !0), L.entries === De && (fS || g("Using Maps as children is not supported. Use an array of keyed ReactElements instead."), fS = !0);
          var Te = De.call(L);
          if (Te)
            for (var Xe = null, rt = Te.next(); !rt.done; rt = Te.next()) {
              var Ft = rt.value;
              Xe = H(Ft, Xe, _);
            }
        }
        var xt = De.call(L);
        if (xt == null)
          throw new Error("An iterable object provided no iterator.");
        for (var Nn = null, Rt = null, Tn = Q, Ar = 0, Cr = 0, za = null, qr = xt.next(); Tn !== null && !qr.done; Cr++, qr = xt.next()) {
          Tn.index > Cr ? (za = Tn, Tn = null) : za = Tn.sibling;
          var Gr = k(_, Tn, qr.value, oe);
          if (Gr === null) {
            Tn === null && (Tn = za);
            break;
          }
          e && Tn && Gr.alternate === null && t(_, Tn), Ar = s(Gr, Ar, Cr), Rt === null ? Nn = Gr : Rt.sibling = Gr, Rt = Gr, Tn = za;
        }
        if (qr.done) {
          if (a(_, Tn), hr()) {
            var Fr = Cr;
            rs(_, Fr);
          }
          return Nn;
        }
        if (Tn === null) {
          for (; !qr.done; Cr++, qr = xt.next()) {
            var el = N(_, qr.value, oe);
            el !== null && (Ar = s(el, Ar, Cr), Rt === null ? Nn = el : Rt.sibling = el, Rt = el);
          }
          if (hr()) {
            var gf = Cr;
            rs(_, gf);
          }
          return Nn;
        }
        for (var $p = i(_, Tn); !qr.done; Cr++, qr = xt.next()) {
          var so = P($p, _, Cr, qr.value, oe);
          so !== null && (e && so.alternate !== null && $p.delete(so.key === null ? Cr : so.key), Ar = s(so, Ar, Cr), Rt === null ? Nn = so : Rt.sibling = so, Rt = so);
        }
        if (e && $p.forEach(function(GO) {
          return t(_, GO);
        }), hr()) {
          var qO = Cr;
          rs(_, qO);
        }
        return Nn;
      }
      function We(_, Q, L, oe) {
        if (Q !== null && Q.tag === ee) {
          a(_, Q.sibling);
          var De = l(Q, L);
          return De.return = _, De;
        }
        a(_, Q);
        var Te = B0(L, _.mode, oe);
        return Te.return = _, Te;
      }
      function Pe(_, Q, L, oe) {
        for (var De = L.key, Te = Q; Te !== null; ) {
          if (Te.key === De) {
            var Xe = L.type;
            if (Xe === ei) {
              if (Te.tag === pe) {
                a(_, Te.sibling);
                var rt = l(Te, L.props.children);
                return rt.return = _, rt._debugSource = L._source, rt._debugOwner = L._owner, rt;
              }
            } else if (Te.elementType === Xe || // Keep this check inline so it only runs on the false path:
            bT(Te, L) || // Lazy types should reconcile their resolved type.
            // We need to do this after the Hot Reloading check above,
            // because hot reloading has different semantics than prod because
            // it doesn't resuspend. So we can't let the call below suspend.
            typeof Xe == "object" && Xe !== null && Xe.$$typeof === dr && Nb(Xe) === Te.type) {
              a(_, Te.sibling);
              var Ft = l(Te, L.props);
              return Ft.ref = vp(_, Te, L), Ft.return = _, Ft._debugSource = L._source, Ft._debugOwner = L._owner, Ft;
            }
            a(_, Te);
            break;
          } else
            t(_, Te);
          Te = Te.sibling;
        }
        if (L.type === ei) {
          var xt = ru(L.props.children, _.mode, oe, L.key);
          return xt.return = _, xt;
        } else {
          var Nn = V0(L, _.mode, oe);
          return Nn.ref = vp(_, Q, L), Nn.return = _, Nn;
        }
      }
      function bt(_, Q, L, oe) {
        for (var De = L.key, Te = Q; Te !== null; ) {
          if (Te.key === De)
            if (Te.tag === q && Te.stateNode.containerInfo === L.containerInfo && Te.stateNode.implementation === L.implementation) {
              a(_, Te.sibling);
              var Xe = l(Te, L.children || []);
              return Xe.return = _, Xe;
            } else {
              a(_, Te);
              break;
            }
          else
            t(_, Te);
          Te = Te.sibling;
        }
        var rt = I0(L, _.mode, oe);
        return rt.return = _, rt;
      }
      function mt(_, Q, L, oe) {
        var De = typeof L == "object" && L !== null && L.type === ei && L.key === null;
        if (De && (L = L.props.children), typeof L == "object" && L !== null) {
          switch (L.$$typeof) {
            case nl:
              return d(Pe(_, Q, L, oe));
            case Ta:
              return d(bt(_, Q, L, oe));
            case dr:
              var Te = L._payload, Xe = L._init;
              return mt(_, Q, Xe(Te), oe);
          }
          if (Ln(L))
            return Y(_, Q, L, oe);
          if (ti(L))
            return we(_, Q, L, oe);
          vm(_, L);
        }
        return typeof L == "string" && L !== "" || typeof L == "number" ? d(We(_, Q, "" + L, oe)) : (typeof L == "function" && hm(_), a(_, Q));
      }
      return mt;
    }
    var tf = Mb(!0), _b = Mb(!1);
    function Aw(e, t) {
      if (e !== null && t.child !== e.child)
        throw new Error("Resuming work not yet implemented.");
      if (t.child !== null) {
        var a = t.child, i = ms(a, a.pendingProps);
        for (t.child = i, i.return = t; a.sibling !== null; )
          a = a.sibling, i = i.sibling = ms(a, a.pendingProps), i.return = t;
        i.sibling = null;
      }
    }
    function Fw(e, t) {
      for (var a = e.child; a !== null; )
        dO(a, t), a = a.sibling;
    }
    var hp = {}, ql = Il(hp), mp = Il(hp), mm = Il(hp);
    function ym(e) {
      if (e === hp)
        throw new Error("Expected host context to exist. This error is likely caused by a bug in React. Please file an issue.");
      return e;
    }
    function Lb() {
      var e = ym(mm.current);
      return e;
    }
    function mS(e, t) {
      zr(mm, t, e), zr(mp, e, e), zr(ql, hp, e);
      var a = Xx(t);
      Lr(ql, e), zr(ql, a, e);
    }
    function nf(e) {
      Lr(ql, e), Lr(mp, e), Lr(mm, e);
    }
    function yS() {
      var e = ym(ql.current);
      return e;
    }
    function zb(e) {
      ym(mm.current);
      var t = ym(ql.current), a = Zx(t, e.type);
      t !== a && (zr(mp, e, e), zr(ql, a, e));
    }
    function gS(e) {
      mp.current === e && (Lr(ql, e), Lr(mp, e));
    }
    var Pw = 0, Ub = 1, Ab = 1, yp = 2, Ci = Il(Pw);
    function SS(e, t) {
      return (e & t) !== 0;
    }
    function rf(e) {
      return e & Ub;
    }
    function ES(e, t) {
      return e & Ub | t;
    }
    function Hw(e, t) {
      return e | t;
    }
    function Gl(e, t) {
      zr(Ci, t, e);
    }
    function af(e) {
      Lr(Ci, e);
    }
    function jw(e, t) {
      var a = e.memoizedState;
      return a !== null ? a.dehydrated !== null : (e.memoizedProps, !0);
    }
    function gm(e) {
      for (var t = e; t !== null; ) {
        if (t.tag === te) {
          var a = t.memoizedState;
          if (a !== null) {
            var i = a.dehydrated;
            if (i === null || YE(i) || wg(i))
              return t;
          }
        } else if (t.tag === Ne && // revealOrder undefined can't be trusted because it don't
        // keep track of whether it suspended or not.
        t.memoizedProps.revealOrder !== void 0) {
          var l = (t.flags & Je) !== Ie;
          if (l)
            return t;
        } else if (t.child !== null) {
          t.child.return = t, t = t.child;
          continue;
        }
        if (t === e)
          return null;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return null;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return null;
    }
    var ma = (
      /*   */
      0
    ), Wn = (
      /* */
      1
    ), no = (
      /*  */
      2
    ), Yn = (
      /*    */
      4
    ), mr = (
      /*   */
      8
    ), bS = [];
    function CS() {
      for (var e = 0; e < bS.length; e++) {
        var t = bS[e];
        t._workInProgressVersionPrimary = null;
      }
      bS.length = 0;
    }
    function Vw(e, t) {
      var a = t._getVersion, i = a(t._source);
      e.mutableSourceEagerHydrationData == null ? e.mutableSourceEagerHydrationData = [t, i] : e.mutableSourceEagerHydrationData.push(t, i);
    }
    var Re = S.ReactCurrentDispatcher, gp = S.ReactCurrentBatchConfig, TS, of;
    TS = /* @__PURE__ */ new Set();
    var ss = G, At = null, Qn = null, qn = null, Sm = !1, Sp = !1, Ep = 0, Bw = 0, Iw = 25, Z = null, Qa = null, Kl = -1, xS = !1;
    function Nt() {
      {
        var e = Z;
        Qa === null ? Qa = [e] : Qa.push(e);
      }
    }
    function ge() {
      {
        var e = Z;
        Qa !== null && (Kl++, Qa[Kl] !== e && $w(e));
      }
    }
    function lf(e) {
      e != null && !Ln(e) && g("%s received a final argument that is not an array (instead, received `%s`). When specified, the final argument must be an array.", Z, typeof e);
    }
    function $w(e) {
      {
        var t = it(At);
        if (!TS.has(t) && (TS.add(t), Qa !== null)) {
          for (var a = "", i = 30, l = 0; l <= Kl; l++) {
            for (var s = Qa[l], d = l === Kl ? e : s, h = l + 1 + ". " + s; h.length < i; )
              h += " ";
            h += d + `
`, a += h;
          }
          g(`React has detected a change in the order of Hooks called by %s. This will lead to bugs and errors if not fixed. For more information, read the Rules of Hooks: https://reactjs.org/link/rules-of-hooks

   Previous render            Next render
   ------------------------------------------------------
%s   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
`, t, a);
        }
      }
    }
    function Ur() {
      throw new Error(`Invalid hook call. Hooks can only be called inside of the body of a function component. This could happen for one of the following reasons:
1. You might have mismatching versions of React and the renderer (such as React DOM)
2. You might be breaking the Rules of Hooks
3. You might have more than one copy of React in the same app
See https://reactjs.org/link/invalid-hook-call for tips about how to debug and fix this problem.`);
    }
    function RS(e, t) {
      if (xS)
        return !1;
      if (t === null)
        return g("%s received a final argument during this render, but not during the previous render. Even though the final argument is optional, its type cannot change between renders.", Z), !1;
      e.length !== t.length && g(`The final argument passed to %s changed size between renders. The order and size of this array must remain constant.

Previous: %s
Incoming: %s`, Z, "[" + t.join(", ") + "]", "[" + e.join(", ") + "]");
      for (var a = 0; a < t.length && a < e.length; a++)
        if (!_e(e[a], t[a]))
          return !1;
      return !0;
    }
    function uf(e, t, a, i, l, s) {
      ss = s, At = t, Qa = e !== null ? e._debugHookTypes : null, Kl = -1, xS = e !== null && e.type !== t.type, t.memoizedState = null, t.updateQueue = null, t.lanes = G, e !== null && e.memoizedState !== null ? Re.current = aC : Qa !== null ? Re.current = rC : Re.current = nC;
      var d = a(i, l);
      if (Sp) {
        var h = 0;
        do {
          if (Sp = !1, Ep = 0, h >= Iw)
            throw new Error("Too many re-renders. React limits the number of renders to prevent an infinite loop.");
          h += 1, xS = !1, Qn = null, qn = null, t.updateQueue = null, Kl = -1, Re.current = iC, d = a(i, l);
        } while (Sp);
      }
      Re.current = _m, t._debugHookTypes = Qa;
      var y = Qn !== null && Qn.next !== null;
      if (ss = G, At = null, Qn = null, qn = null, Z = null, Qa = null, Kl = -1, e !== null && (e.flags & Bn) !== (t.flags & Bn) && // Disable this warning in legacy mode, because legacy Suspense is weird
      // and creates false positives. To make this work in legacy mode, we'd
      // need to mark fibers that commit in an incomplete state, somehow. For
      // now I'll disable the warning that most of the bugs that would trigger
      // it are either exclusive to concurrent mode or exist in both.
      (e.mode & dt) !== Ye && g("Internal React error: Expected static flag was missing. Please notify the React team."), Sm = !1, y)
        throw new Error("Rendered fewer hooks than expected. This may be caused by an accidental early return statement.");
      return d;
    }
    function sf() {
      var e = Ep !== 0;
      return Ep = 0, e;
    }
    function Fb(e, t, a) {
      t.updateQueue = e.updateQueue, (t.mode & ua) !== Ye ? t.flags &= ~(Co | Dr | Xt | ot) : t.flags &= ~(Xt | ot), e.lanes = wl(e.lanes, a);
    }
    function Pb() {
      if (Re.current = _m, Sm) {
        for (var e = At.memoizedState; e !== null; ) {
          var t = e.queue;
          t !== null && (t.pending = null), e = e.next;
        }
        Sm = !1;
      }
      ss = G, At = null, Qn = null, qn = null, Qa = null, Kl = -1, Z = null, Xb = !1, Sp = !1, Ep = 0;
    }
    function ro() {
      var e = {
        memoizedState: null,
        baseState: null,
        baseQueue: null,
        queue: null,
        next: null
      };
      return qn === null ? At.memoizedState = qn = e : qn = qn.next = e, qn;
    }
    function qa() {
      var e;
      if (Qn === null) {
        var t = At.alternate;
        t !== null ? e = t.memoizedState : e = null;
      } else
        e = Qn.next;
      var a;
      if (qn === null ? a = At.memoizedState : a = qn.next, a !== null)
        qn = a, a = qn.next, Qn = e;
      else {
        if (e === null)
          throw new Error("Rendered more hooks than during the previous render.");
        Qn = e;
        var i = {
          memoizedState: Qn.memoizedState,
          baseState: Qn.baseState,
          baseQueue: Qn.baseQueue,
          queue: Qn.queue,
          next: null
        };
        qn === null ? At.memoizedState = qn = i : qn = qn.next = i;
      }
      return qn;
    }
    function Hb() {
      return {
        lastEffect: null,
        stores: null
      };
    }
    function wS(e, t) {
      return typeof t == "function" ? t(e) : t;
    }
    function DS(e, t, a) {
      var i = ro(), l;
      a !== void 0 ? l = a(t) : l = t, i.memoizedState = i.baseState = l;
      var s = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      };
      i.queue = s;
      var d = s.dispatch = qw.bind(null, At, s);
      return [i.memoizedState, d];
    }
    function kS(e, t, a) {
      var i = qa(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = Qn, d = s.baseQueue, h = l.pending;
      if (h !== null) {
        if (d !== null) {
          var y = d.next, b = h.next;
          d.next = b, h.next = y;
        }
        s.baseQueue !== d && g("Internal error: Expected work-in-progress queue to be a clone. This is a bug in React."), s.baseQueue = d = h, l.pending = null;
      }
      if (d !== null) {
        var C = d.next, N = s.baseState, k = null, P = null, H = null, Y = C;
        do {
          var we = Y.lane;
          if (_o(ss, we)) {
            if (H !== null) {
              var Pe = {
                // This update is going to be committed so we never want uncommit
                // it. Using NoLane works because 0 is a subset of all bitmasks, so
                // this will never be skipped by the check above.
                lane: St,
                action: Y.action,
                hasEagerState: Y.hasEagerState,
                eagerState: Y.eagerState,
                next: null
              };
              H = H.next = Pe;
            }
            if (Y.hasEagerState)
              N = Y.eagerState;
            else {
              var bt = Y.action;
              N = e(N, bt);
            }
          } else {
            var We = {
              lane: we,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            };
            H === null ? (P = H = We, k = N) : H = H.next = We, At.lanes = lt(At.lanes, we), Hp(we);
          }
          Y = Y.next;
        } while (Y !== null && Y !== C);
        H === null ? k = N : H.next = P, _e(N, i.memoizedState) || Dp(), i.memoizedState = N, i.baseState = k, i.baseQueue = H, l.lastRenderedState = N;
      }
      var mt = l.interleaved;
      if (mt !== null) {
        var _ = mt;
        do {
          var Q = _.lane;
          At.lanes = lt(At.lanes, Q), Hp(Q), _ = _.next;
        } while (_ !== mt);
      } else
        d === null && (l.lanes = G);
      var L = l.dispatch;
      return [i.memoizedState, L];
    }
    function OS(e, t, a) {
      var i = qa(), l = i.queue;
      if (l === null)
        throw new Error("Should have a queue. This is likely a bug in React. Please file an issue.");
      l.lastRenderedReducer = e;
      var s = l.dispatch, d = l.pending, h = i.memoizedState;
      if (d !== null) {
        l.pending = null;
        var y = d.next, b = y;
        do {
          var C = b.action;
          h = e(h, C), b = b.next;
        } while (b !== y);
        _e(h, i.memoizedState) || Dp(), i.memoizedState = h, i.baseQueue === null && (i.baseState = h), l.lastRenderedState = h;
      }
      return [h, s];
    }
    function G_(e, t, a) {
    }
    function K_(e, t, a) {
    }
    function NS(e, t, a) {
      var i = At, l = ro(), s, d = hr();
      if (d) {
        if (a === void 0)
          throw new Error("Missing getServerSnapshot, which is required for server-rendered content. Will revert to client rendering.");
        s = a(), of || s !== a() && (g("The result of getServerSnapshot should be cached to avoid an infinite loop"), of = !0);
      } else {
        if (s = t(), !of) {
          var h = t();
          _e(s, h) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
        }
        var y = Km();
        if (y === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ju(y, ss) || jb(i, t, s);
      }
      l.memoizedState = s;
      var b = {
        value: s,
        getSnapshot: t
      };
      return l.queue = b, xm(Bb.bind(null, i, b, e), [e]), i.flags |= Xt, bp(Wn | mr, Vb.bind(null, i, b, s, t), void 0, null), s;
    }
    function Em(e, t, a) {
      var i = At, l = qa(), s = t();
      if (!of) {
        var d = t();
        _e(s, d) || (g("The result of getSnapshot should be cached to avoid an infinite loop"), of = !0);
      }
      var h = l.memoizedState, y = !_e(h, s);
      y && (l.memoizedState = s, Dp());
      var b = l.queue;
      if (Tp(Bb.bind(null, i, b, e), [e]), b.getSnapshot !== t || y || // Check if the susbcribe function changed. We can save some memory by
      // checking whether we scheduled a subscription effect above.
      qn !== null && qn.memoizedState.tag & Wn) {
        i.flags |= Xt, bp(Wn | mr, Vb.bind(null, i, b, s, t), void 0, null);
        var C = Km();
        if (C === null)
          throw new Error("Expected a work-in-progress root. This is a bug in React. Please file an issue.");
        ju(C, ss) || jb(i, t, s);
      }
      return s;
    }
    function jb(e, t, a) {
      e.flags |= Mu;
      var i = {
        getSnapshot: t,
        value: a
      }, l = At.updateQueue;
      if (l === null)
        l = Hb(), At.updateQueue = l, l.stores = [i];
      else {
        var s = l.stores;
        s === null ? l.stores = [i] : s.push(i);
      }
    }
    function Vb(e, t, a, i) {
      t.value = a, t.getSnapshot = i, Ib(t) && $b(e);
    }
    function Bb(e, t, a) {
      var i = function() {
        Ib(t) && $b(e);
      };
      return a(i);
    }
    function Ib(e) {
      var t = e.getSnapshot, a = e.value;
      try {
        var i = t();
        return !_e(a, i);
      } catch {
        return !0;
      }
    }
    function $b(e) {
      var t = ha(e, Ke);
      t !== null && Zn(t, e, Ke, jt);
    }
    function bm(e) {
      var t = ro();
      typeof e == "function" && (e = e()), t.memoizedState = t.baseState = e;
      var a = {
        pending: null,
        interleaved: null,
        lanes: G,
        dispatch: null,
        lastRenderedReducer: wS,
        lastRenderedState: e
      };
      t.queue = a;
      var i = a.dispatch = Gw.bind(null, At, a);
      return [t.memoizedState, i];
    }
    function MS(e) {
      return kS(wS);
    }
    function _S(e) {
      return OS(wS);
    }
    function bp(e, t, a, i) {
      var l = {
        tag: e,
        create: t,
        destroy: a,
        deps: i,
        // Circular
        next: null
      }, s = At.updateQueue;
      if (s === null)
        s = Hb(), At.updateQueue = s, s.lastEffect = l.next = l;
      else {
        var d = s.lastEffect;
        if (d === null)
          s.lastEffect = l.next = l;
        else {
          var h = d.next;
          d.next = l, l.next = h, s.lastEffect = l;
        }
      }
      return l;
    }
    function LS(e) {
      var t = ro();
      {
        var a = {
          current: e
        };
        return t.memoizedState = a, a;
      }
    }
    function Cm(e) {
      var t = qa();
      return t.memoizedState;
    }
    function Cp(e, t, a, i) {
      var l = ro(), s = i === void 0 ? null : i;
      At.flags |= e, l.memoizedState = bp(Wn | t, a, void 0, s);
    }
    function Tm(e, t, a, i) {
      var l = qa(), s = i === void 0 ? null : i, d = void 0;
      if (Qn !== null) {
        var h = Qn.memoizedState;
        if (d = h.destroy, s !== null) {
          var y = h.deps;
          if (RS(s, y)) {
            l.memoizedState = bp(t, a, d, s);
            return;
          }
        }
      }
      At.flags |= e, l.memoizedState = bp(Wn | t, a, d, s);
    }
    function xm(e, t) {
      return (At.mode & ua) !== Ye ? Cp(Co | Xt | Hi, mr, e, t) : Cp(Xt | Hi, mr, e, t);
    }
    function Tp(e, t) {
      return Tm(Xt, mr, e, t);
    }
    function zS(e, t) {
      return Cp(ot, no, e, t);
    }
    function Rm(e, t) {
      return Tm(ot, no, e, t);
    }
    function US(e, t) {
      var a = ot;
      return a |= wr, (At.mode & ua) !== Ye && (a |= Dr), Cp(a, Yn, e, t);
    }
    function wm(e, t) {
      return Tm(ot, Yn, e, t);
    }
    function Wb(e, t) {
      if (typeof t == "function") {
        var a = t, i = e();
        return a(i), function() {
          a(null);
        };
      } else if (t != null) {
        var l = t;
        l.hasOwnProperty("current") || g("Expected useImperativeHandle() first argument to either be a ref callback or React.createRef() object. Instead received: %s.", "an object with keys {" + Object.keys(l).join(", ") + "}");
        var s = e();
        return l.current = s, function() {
          l.current = null;
        };
      }
    }
    function AS(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null, l = ot;
      return l |= wr, (At.mode & ua) !== Ye && (l |= Dr), Cp(l, Yn, Wb.bind(null, t, e), i);
    }
    function Dm(e, t, a) {
      typeof t != "function" && g("Expected useImperativeHandle() second argument to be a function that creates a handle. Instead received: %s.", t !== null ? typeof t : "null");
      var i = a != null ? a.concat([e]) : null;
      return Tm(ot, Yn, Wb.bind(null, t, e), i);
    }
    function Ww(e, t) {
    }
    var km = Ww;
    function FS(e, t) {
      var a = ro(), i = t === void 0 ? null : t;
      return a.memoizedState = [e, i], e;
    }
    function Om(e, t) {
      var a = qa(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (RS(i, s))
          return l[0];
      }
      return a.memoizedState = [e, i], e;
    }
    function PS(e, t) {
      var a = ro(), i = t === void 0 ? null : t, l = e();
      return a.memoizedState = [l, i], l;
    }
    function Nm(e, t) {
      var a = qa(), i = t === void 0 ? null : t, l = a.memoizedState;
      if (l !== null && i !== null) {
        var s = l[1];
        if (RS(i, s))
          return l[0];
      }
      var d = e();
      return a.memoizedState = [d, i], d;
    }
    function HS(e) {
      var t = ro();
      return t.memoizedState = e, e;
    }
    function Yb(e) {
      var t = qa(), a = Qn, i = a.memoizedState;
      return qb(t, i, e);
    }
    function Qb(e) {
      var t = qa();
      if (Qn === null)
        return t.memoizedState = e, e;
      var a = Qn.memoizedState;
      return qb(t, a, e);
    }
    function qb(e, t, a) {
      var i = !Wy(ss);
      if (i) {
        if (!_e(a, t)) {
          var l = xd();
          At.lanes = lt(At.lanes, l), Hp(l), e.baseState = !0;
        }
        return t;
      } else
        return e.baseState && (e.baseState = !1, Dp()), e.memoizedState = a, a;
    }
    function Yw(e, t, a) {
      var i = ca();
      Dn(ir(i, $n)), e(!0);
      var l = gp.transition;
      gp.transition = {};
      var s = gp.transition;
      gp.transition._updatedFibers = /* @__PURE__ */ new Set();
      try {
        e(!1), t();
      } finally {
        if (Dn(i), gp.transition = l, l === null && s._updatedFibers) {
          var d = s._updatedFibers.size;
          d > 10 && R("Detected a large number of updates inside startTransition. If this is due to a subscription please re-write it to use React provided hooks. Otherwise concurrent mode guarantees are off the table."), s._updatedFibers.clear();
        }
      }
    }
    function jS() {
      var e = bm(!1), t = e[0], a = e[1], i = Yw.bind(null, a), l = ro();
      return l.memoizedState = i, [t, i];
    }
    function Gb() {
      var e = MS(), t = e[0], a = qa(), i = a.memoizedState;
      return [t, i];
    }
    function Kb() {
      var e = _S(), t = e[0], a = qa(), i = a.memoizedState;
      return [t, i];
    }
    var Xb = !1;
    function Qw() {
      return Xb;
    }
    function VS() {
      var e = ro(), t = Km(), a = t.identifierPrefix, i;
      if (hr()) {
        var l = lw();
        i = ":" + a + "R" + l;
        var s = Ep++;
        s > 0 && (i += "H" + s.toString(32)), i += ":";
      } else {
        var d = Bw++;
        i = ":" + a + "r" + d.toString(32) + ":";
      }
      return e.memoizedState = i, i;
    }
    function Mm() {
      var e = qa(), t = e.memoizedState;
      return t;
    }
    function qw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = tu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Zb(e))
        Jb(t, l);
      else {
        var s = mb(e, t, l, i);
        if (s !== null) {
          var d = Qr();
          Zn(s, e, i, d), eC(s, t, i);
        }
      }
      tC(e, i);
    }
    function Gw(e, t, a) {
      typeof arguments[3] == "function" && g("State updates from the useState() and useReducer() Hooks don't support the second callback argument. To execute a side effect after rendering, declare it in the component body with useEffect().");
      var i = tu(e), l = {
        lane: i,
        action: a,
        hasEagerState: !1,
        eagerState: null,
        next: null
      };
      if (Zb(e))
        Jb(t, l);
      else {
        var s = e.alternate;
        if (e.lanes === G && (s === null || s.lanes === G)) {
          var d = t.lastRenderedReducer;
          if (d !== null) {
            var h;
            h = Re.current, Re.current = Ti;
            try {
              var y = t.lastRenderedState, b = d(y, a);
              if (l.hasEagerState = !0, l.eagerState = b, _e(b, y)) {
                Dw(e, t, l, i);
                return;
              }
            } catch {
            } finally {
              Re.current = h;
            }
          }
        }
        var C = mb(e, t, l, i);
        if (C !== null) {
          var N = Qr();
          Zn(C, e, i, N), eC(C, t, i);
        }
      }
      tC(e, i);
    }
    function Zb(e) {
      var t = e.alternate;
      return e === At || t !== null && t === At;
    }
    function Jb(e, t) {
      Sp = Sm = !0;
      var a = e.pending;
      a === null ? t.next = t : (t.next = a.next, a.next = t), e.pending = t;
    }
    function eC(e, t, a) {
      if (Td(a)) {
        var i = t.lanes;
        i = Rd(i, e.pendingLanes);
        var l = lt(i, a);
        t.lanes = l, Dl(e, l);
      }
    }
    function tC(e, t, a) {
      Wi(e, t);
    }
    var _m = {
      readContext: jn,
      useCallback: Ur,
      useContext: Ur,
      useEffect: Ur,
      useImperativeHandle: Ur,
      useInsertionEffect: Ur,
      useLayoutEffect: Ur,
      useMemo: Ur,
      useReducer: Ur,
      useRef: Ur,
      useState: Ur,
      useDebugValue: Ur,
      useDeferredValue: Ur,
      useTransition: Ur,
      useMutableSource: Ur,
      useSyncExternalStore: Ur,
      useId: Ur,
      unstable_isNewReconciler: W
    }, nC = null, rC = null, aC = null, iC = null, ao = null, Ti = null, Lm = null;
    {
      var BS = function() {
        g("Context can only be read while React is rendering. In classes, you can read it in the render method or getDerivedStateFromProps. In function components, you can read it directly in the function body, but not inside Hooks like useReducer() or useMemo().");
      }, nt = function() {
        g("Do not call Hooks inside useEffect(...), useMemo(...), or other built-in Hooks. You can only call Hooks at the top level of your React function. For more information, see https://reactjs.org/link/rules-of-hooks");
      };
      nC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", Nt(), lf(t), FS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", Nt(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", Nt(), lf(t), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", Nt(), lf(a), AS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", Nt(), lf(t), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", Nt(), lf(t), US(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", Nt(), lf(t);
          var a = Re.current;
          Re.current = ao;
          try {
            return PS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", Nt();
          var i = Re.current;
          Re.current = ao;
          try {
            return DS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", Nt(), LS(e);
        },
        useState: function(e) {
          Z = "useState", Nt();
          var t = Re.current;
          Re.current = ao;
          try {
            return bm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", Nt(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", Nt(), HS(e);
        },
        useTransition: function() {
          return Z = "useTransition", Nt(), jS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", Nt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", Nt(), NS(e, t, a);
        },
        useId: function() {
          return Z = "useId", Nt(), VS();
        },
        unstable_isNewReconciler: W
      }, rC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", ge(), FS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", ge(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", ge(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", ge(), AS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", ge(), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", ge(), US(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", ge();
          var a = Re.current;
          Re.current = ao;
          try {
            return PS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", ge();
          var i = Re.current;
          Re.current = ao;
          try {
            return DS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", ge(), LS(e);
        },
        useState: function(e) {
          Z = "useState", ge();
          var t = Re.current;
          Re.current = ao;
          try {
            return bm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", ge(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", ge(), HS(e);
        },
        useTransition: function() {
          return Z = "useTransition", ge(), jS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", ge(), NS(e, t, a);
        },
        useId: function() {
          return Z = "useId", ge(), VS();
        },
        unstable_isNewReconciler: W
      }, aC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", ge(), Om(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", ge(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", ge(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", ge(), Dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", ge(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", ge(), wm(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", ge();
          var a = Re.current;
          Re.current = Ti;
          try {
            return Nm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", ge();
          var i = Re.current;
          Re.current = Ti;
          try {
            return kS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", ge(), Cm();
        },
        useState: function(e) {
          Z = "useState", ge();
          var t = Re.current;
          Re.current = Ti;
          try {
            return MS(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", ge(), km();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", ge(), Yb(e);
        },
        useTransition: function() {
          return Z = "useTransition", ge(), Gb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", ge(), Em(e, t);
        },
        useId: function() {
          return Z = "useId", ge(), Mm();
        },
        unstable_isNewReconciler: W
      }, iC = {
        readContext: function(e) {
          return jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", ge(), Om(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", ge(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", ge(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", ge(), Dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", ge(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", ge(), wm(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", ge();
          var a = Re.current;
          Re.current = Lm;
          try {
            return Nm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", ge();
          var i = Re.current;
          Re.current = Lm;
          try {
            return OS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", ge(), Cm();
        },
        useState: function(e) {
          Z = "useState", ge();
          var t = Re.current;
          Re.current = Lm;
          try {
            return _S(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", ge(), km();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", ge(), Qb(e);
        },
        useTransition: function() {
          return Z = "useTransition", ge(), Kb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", ge(), Em(e, t);
        },
        useId: function() {
          return Z = "useId", ge(), Mm();
        },
        unstable_isNewReconciler: W
      }, ao = {
        readContext: function(e) {
          return BS(), jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", nt(), Nt(), FS(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", nt(), Nt(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", nt(), Nt(), xm(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", nt(), Nt(), AS(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", nt(), Nt(), zS(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", nt(), Nt(), US(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", nt(), Nt();
          var a = Re.current;
          Re.current = ao;
          try {
            return PS(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", nt(), Nt();
          var i = Re.current;
          Re.current = ao;
          try {
            return DS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", nt(), Nt(), LS(e);
        },
        useState: function(e) {
          Z = "useState", nt(), Nt();
          var t = Re.current;
          Re.current = ao;
          try {
            return bm(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", nt(), Nt(), void 0;
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", nt(), Nt(), HS(e);
        },
        useTransition: function() {
          return Z = "useTransition", nt(), Nt(), jS();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", nt(), Nt(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", nt(), Nt(), NS(e, t, a);
        },
        useId: function() {
          return Z = "useId", nt(), Nt(), VS();
        },
        unstable_isNewReconciler: W
      }, Ti = {
        readContext: function(e) {
          return BS(), jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", nt(), ge(), Om(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", nt(), ge(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", nt(), ge(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", nt(), ge(), Dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", nt(), ge(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", nt(), ge(), wm(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", nt(), ge();
          var a = Re.current;
          Re.current = Ti;
          try {
            return Nm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", nt(), ge();
          var i = Re.current;
          Re.current = Ti;
          try {
            return kS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", nt(), ge(), Cm();
        },
        useState: function(e) {
          Z = "useState", nt(), ge();
          var t = Re.current;
          Re.current = Ti;
          try {
            return MS(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", nt(), ge(), km();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", nt(), ge(), Yb(e);
        },
        useTransition: function() {
          return Z = "useTransition", nt(), ge(), Gb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", nt(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", nt(), ge(), Em(e, t);
        },
        useId: function() {
          return Z = "useId", nt(), ge(), Mm();
        },
        unstable_isNewReconciler: W
      }, Lm = {
        readContext: function(e) {
          return BS(), jn(e);
        },
        useCallback: function(e, t) {
          return Z = "useCallback", nt(), ge(), Om(e, t);
        },
        useContext: function(e) {
          return Z = "useContext", nt(), ge(), jn(e);
        },
        useEffect: function(e, t) {
          return Z = "useEffect", nt(), ge(), Tp(e, t);
        },
        useImperativeHandle: function(e, t, a) {
          return Z = "useImperativeHandle", nt(), ge(), Dm(e, t, a);
        },
        useInsertionEffect: function(e, t) {
          return Z = "useInsertionEffect", nt(), ge(), Rm(e, t);
        },
        useLayoutEffect: function(e, t) {
          return Z = "useLayoutEffect", nt(), ge(), wm(e, t);
        },
        useMemo: function(e, t) {
          Z = "useMemo", nt(), ge();
          var a = Re.current;
          Re.current = Ti;
          try {
            return Nm(e, t);
          } finally {
            Re.current = a;
          }
        },
        useReducer: function(e, t, a) {
          Z = "useReducer", nt(), ge();
          var i = Re.current;
          Re.current = Ti;
          try {
            return OS(e, t, a);
          } finally {
            Re.current = i;
          }
        },
        useRef: function(e) {
          return Z = "useRef", nt(), ge(), Cm();
        },
        useState: function(e) {
          Z = "useState", nt(), ge();
          var t = Re.current;
          Re.current = Ti;
          try {
            return _S(e);
          } finally {
            Re.current = t;
          }
        },
        useDebugValue: function(e, t) {
          return Z = "useDebugValue", nt(), ge(), km();
        },
        useDeferredValue: function(e) {
          return Z = "useDeferredValue", nt(), ge(), Qb(e);
        },
        useTransition: function() {
          return Z = "useTransition", nt(), ge(), Kb();
        },
        useMutableSource: function(e, t, a) {
          return Z = "useMutableSource", nt(), ge(), void 0;
        },
        useSyncExternalStore: function(e, t, a) {
          return Z = "useSyncExternalStore", nt(), ge(), Em(e, t);
        },
        useId: function() {
          return Z = "useId", nt(), ge(), Mm();
        },
        unstable_isNewReconciler: W
      };
    }
    var Xl = m.unstable_now, oC = 0, zm = -1, xp = -1, Um = -1, IS = !1, Am = !1;
    function lC() {
      return IS;
    }
    function Kw() {
      Am = !0;
    }
    function Xw() {
      IS = !1, Am = !1;
    }
    function Zw() {
      IS = Am, Am = !1;
    }
    function uC() {
      return oC;
    }
    function sC() {
      oC = Xl();
    }
    function $S(e) {
      xp = Xl(), e.actualStartTime < 0 && (e.actualStartTime = Xl());
    }
    function cC(e) {
      xp = -1;
    }
    function Fm(e, t) {
      if (xp >= 0) {
        var a = Xl() - xp;
        e.actualDuration += a, t && (e.selfBaseDuration = a), xp = -1;
      }
    }
    function io(e) {
      if (zm >= 0) {
        var t = Xl() - zm;
        zm = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case V:
              var i = a.stateNode;
              i.effectDuration += t;
              return;
            case $:
              var l = a.stateNode;
              l.effectDuration += t;
              return;
          }
          a = a.return;
        }
      }
    }
    function WS(e) {
      if (Um >= 0) {
        var t = Xl() - Um;
        Um = -1;
        for (var a = e.return; a !== null; ) {
          switch (a.tag) {
            case V:
              var i = a.stateNode;
              i !== null && (i.passiveEffectDuration += t);
              return;
            case $:
              var l = a.stateNode;
              l !== null && (l.passiveEffectDuration += t);
              return;
          }
          a = a.return;
        }
      }
    }
    function oo() {
      zm = Xl();
    }
    function YS() {
      Um = Xl();
    }
    function QS(e) {
      for (var t = e.child; t; )
        e.actualDuration += t.actualDuration, t = t.sibling;
    }
    function cs(e, t) {
      return {
        value: e,
        source: t,
        stack: Lf(t),
        digest: null
      };
    }
    function qS(e, t, a) {
      return {
        value: e,
        source: null,
        stack: a ?? null,
        digest: t ?? null
      };
    }
    function Jw(e, t) {
      return !0;
    }
    function GS(e, t) {
      try {
        var a = Jw(e, t);
        if (a === !1)
          return;
        var i = t.value, l = t.source, s = t.stack, d = s !== null ? s : "";
        if (i != null && i._suppressLogging) {
          if (e.tag === F)
            return;
          console.error(i);
        }
        var h = l ? it(l) : null, y = h ? "The above error occurred in the <" + h + "> component:" : "The above error occurred in one of your React components:", b;
        if (e.tag === V)
          b = `Consider adding an error boundary to your tree to customize error handling behavior.
Visit https://reactjs.org/link/error-boundaries to learn more about error boundaries.`;
        else {
          var C = it(e) || "Anonymous";
          b = "React will try to recreate this component tree from scratch " + ("using the error boundary you provided, " + C + ".");
        }
        var N = y + `
` + d + `

` + ("" + b);
        console.error(N);
      } catch (k) {
        setTimeout(function() {
          throw k;
        });
      }
    }
    var eD = typeof WeakMap == "function" ? WeakMap : Map;
    function fC(e, t, a) {
      var i = qo(jt, a);
      i.tag = Gg, i.payload = {
        element: null
      };
      var l = t.value;
      return i.callback = function() {
        Yk(l), GS(e, t);
      }, i;
    }
    function KS(e, t, a) {
      var i = qo(jt, a);
      i.tag = Gg;
      var l = e.type.getDerivedStateFromError;
      if (typeof l == "function") {
        var s = t.value;
        i.payload = function() {
          return l(s);
        }, i.callback = function() {
          CT(e), GS(e, t);
        };
      }
      var d = e.stateNode;
      return d !== null && typeof d.componentDidCatch == "function" && (i.callback = function() {
        CT(e), GS(e, t), typeof l != "function" && $k(this);
        var y = t.value, b = t.stack;
        this.componentDidCatch(y, {
          componentStack: b !== null ? b : ""
        }), typeof l != "function" && (_r(e.lanes, Ke) || g("%s: Error boundaries should implement getDerivedStateFromError(). In that method, return a state update to display an error message or fallback UI.", it(e) || "Unknown"));
      }), i;
    }
    function dC(e, t, a) {
      var i = e.pingCache, l;
      if (i === null ? (i = e.pingCache = new eD(), l = /* @__PURE__ */ new Set(), i.set(t, l)) : (l = i.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), i.set(t, l))), !l.has(a)) {
        l.add(a);
        var s = Qk.bind(null, e, t, a);
        In && jp(e, a), t.then(s, s);
      }
    }
    function tD(e, t, a, i) {
      var l = e.updateQueue;
      if (l === null) {
        var s = /* @__PURE__ */ new Set();
        s.add(a), e.updateQueue = s;
      } else
        l.add(a);
    }
    function nD(e, t) {
      var a = e.tag;
      if ((e.mode & dt) === Ye && (a === z || a === B || a === J)) {
        var i = e.alternate;
        i ? (e.updateQueue = i.updateQueue, e.memoizedState = i.memoizedState, e.lanes = i.lanes) : (e.updateQueue = null, e.memoizedState = null);
      }
    }
    function pC(e) {
      var t = e;
      do {
        if (t.tag === te && jw(t))
          return t;
        t = t.return;
      } while (t !== null);
      return null;
    }
    function vC(e, t, a, i, l) {
      if ((e.mode & dt) === Ye) {
        if (e === t)
          e.flags |= Un;
        else {
          if (e.flags |= Je, a.flags |= _u, a.flags &= ~(Qs | Hr), a.tag === F) {
            var s = a.alternate;
            if (s === null)
              a.tag = Ve;
            else {
              var d = qo(jt, Ke);
              d.tag = lm, Ql(a, d, Ke);
            }
          }
          a.lanes = lt(a.lanes, Ke);
        }
        return e;
      }
      return e.flags |= Un, e.lanes = l, e;
    }
    function rD(e, t, a, i, l) {
      if (a.flags |= Hr, In && jp(e, l), i !== null && typeof i == "object" && typeof i.then == "function") {
        var s = i;
        nD(a), hr() && a.mode & dt && ab();
        var d = pC(t);
        if (d !== null) {
          d.flags &= ~sn, vC(d, t, a, e, l), d.mode & dt && dC(e, s, l), tD(d, e, s);
          return;
        } else {
          if (!Rl(l)) {
            dC(e, s, l), O0();
            return;
          }
          var h = new Error("A component suspended while responding to synchronous input. This will cause the UI to be replaced with a loading indicator. To fix, updates that suspend should be wrapped with startTransition.");
          i = h;
        }
      } else if (hr() && a.mode & dt) {
        ab();
        var y = pC(t);
        if (y !== null) {
          (y.flags & Un) === Ie && (y.flags |= sn), vC(y, t, a, e, l), Bg(cs(i, a));
          return;
        }
      }
      i = cs(i, a), Ak(i);
      var b = t;
      do {
        switch (b.tag) {
          case V: {
            var C = i;
            b.flags |= Un;
            var N = wn(l);
            b.lanes = lt(b.lanes, N);
            var k = fC(b, C, N);
            Zg(b, k);
            return;
          }
          case F:
            var P = i, H = b.type, Y = b.stateNode;
            if ((b.flags & Je) === Ie && (typeof H.getDerivedStateFromError == "function" || Y !== null && typeof Y.componentDidCatch == "function" && !pT(Y))) {
              b.flags |= Un;
              var we = wn(l);
              b.lanes = lt(b.lanes, we);
              var We = KS(b, P, we);
              Zg(b, We);
              return;
            }
            break;
        }
        b = b.return;
      } while (b !== null);
    }
    function aD() {
      return null;
    }
    var Rp = S.ReactCurrentOwner, xi = !1, XS, wp, ZS, JS, e0, fs, t0, Pm;
    XS = {}, wp = {}, ZS = {}, JS = {}, e0 = {}, fs = !1, t0 = {}, Pm = {};
    function Wr(e, t, a, i) {
      e === null ? t.child = _b(t, null, a, i) : t.child = tf(t, e.child, a, i);
    }
    function iD(e, t, a, i) {
      t.child = tf(t, e.child, null, i), t.child = tf(t, null, a, i);
    }
    function hC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && gi(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d = a.render, h = t.ref, y, b;
      ef(t, l), $i(t);
      {
        if (Rp.current = t, wa(!0), y = uf(e, t, d, i, h, l), b = sf(), t.mode & tn) {
          Rn(!0);
          try {
            y = uf(e, t, d, i, h, l), b = sf();
          } finally {
            Rn(!1);
          }
        }
        wa(!1);
      }
      return To(), e !== null && !xi ? (Fb(e, t, l), Go(e, t, l)) : (hr() && b && Ag(t), t.flags |= Fi, Wr(e, t, y, l), t.child);
    }
    function mC(e, t, a, i, l) {
      if (e === null) {
        var s = a.type;
        if (cO(s) && a.compare === null && // SimpleMemoComponent codepath doesn't resolve outer props either.
        a.defaultProps === void 0) {
          var d = s;
          return d = yf(s), t.tag = J, t.type = d, a0(t, s), yC(e, t, d, i, l);
        }
        {
          var h = s.propTypes;
          h && gi(
            h,
            i,
            // Resolved props
            "prop",
            Pt(s)
          );
        }
        var y = j0(a.type, null, i, t, t.mode, l);
        return y.ref = t.ref, y.return = t, t.child = y, y;
      }
      {
        var b = a.type, C = b.propTypes;
        C && gi(
          C,
          i,
          // Resolved props
          "prop",
          Pt(b)
        );
      }
      var N = e.child, k = c0(e, l);
      if (!k) {
        var P = N.memoizedProps, H = a.compare;
        if (H = H !== null ? H : je, H(P, i) && e.ref === t.ref)
          return Go(e, t, l);
      }
      t.flags |= Fi;
      var Y = ms(N, i);
      return Y.ref = t.ref, Y.return = t, t.child = Y, Y;
    }
    function yC(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = t.elementType;
        if (s.$$typeof === dr) {
          var d = s, h = d._payload, y = d._init;
          try {
            s = y(h);
          } catch {
            s = null;
          }
          var b = s && s.propTypes;
          b && gi(
            b,
            i,
            // Resolved (SimpleMemoComponent has no defaultProps)
            "prop",
            Pt(s)
          );
        }
      }
      if (e !== null) {
        var C = e.memoizedProps;
        if (je(C, i) && e.ref === t.ref && // Prevent bailout if the implementation changed due to hot reload.
        t.type === e.type)
          if (xi = !1, t.pendingProps = i = C, c0(e, l))
            (e.flags & _u) !== Ie && (xi = !0);
          else
            return t.lanes = e.lanes, Go(e, t, l);
      }
      return n0(e, t, a, i, l);
    }
    function gC(e, t, a) {
      var i = t.pendingProps, l = i.children, s = e !== null ? e.memoizedState : null;
      if (i.mode === "hidden" || ue)
        if ((t.mode & dt) === Ye) {
          var d = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = d, Xm(t, a);
        } else if (_r(a, Mr)) {
          var N = {
            baseLanes: G,
            cachePool: null,
            transitions: null
          };
          t.memoizedState = N;
          var k = s !== null ? s.baseLanes : a;
          Xm(t, k);
        } else {
          var h = null, y;
          if (s !== null) {
            var b = s.baseLanes;
            y = lt(b, a);
          } else
            y = a;
          t.lanes = t.childLanes = Mr;
          var C = {
            baseLanes: y,
            cachePool: h,
            transitions: null
          };
          return t.memoizedState = C, t.updateQueue = null, Xm(t, y), null;
        }
      else {
        var P;
        s !== null ? (P = lt(s.baseLanes, a), t.memoizedState = null) : P = a, Xm(t, P);
      }
      return Wr(e, t, l, a), t.child;
    }
    function oD(e, t, a) {
      var i = t.pendingProps;
      return Wr(e, t, i, a), t.child;
    }
    function lD(e, t, a) {
      var i = t.pendingProps.children;
      return Wr(e, t, i, a), t.child;
    }
    function uD(e, t, a) {
      {
        t.flags |= ot;
        {
          var i = t.stateNode;
          i.effectDuration = 0, i.passiveEffectDuration = 0;
        }
      }
      var l = t.pendingProps, s = l.children;
      return Wr(e, t, s, a), t.child;
    }
    function SC(e, t) {
      var a = t.ref;
      (e === null && a !== null || e !== null && e.ref !== a) && (t.flags |= Rr, t.flags |= ud);
    }
    function n0(e, t, a, i, l) {
      if (t.type !== t.elementType) {
        var s = a.propTypes;
        s && gi(
          s,
          i,
          // Resolved props
          "prop",
          Pt(a)
        );
      }
      var d;
      {
        var h = qc(t, a, !0);
        d = Gc(t, h);
      }
      var y, b;
      ef(t, l), $i(t);
      {
        if (Rp.current = t, wa(!0), y = uf(e, t, a, i, d, l), b = sf(), t.mode & tn) {
          Rn(!0);
          try {
            y = uf(e, t, a, i, d, l), b = sf();
          } finally {
            Rn(!1);
          }
        }
        wa(!1);
      }
      return To(), e !== null && !xi ? (Fb(e, t, l), Go(e, t, l)) : (hr() && b && Ag(t), t.flags |= Fi, Wr(e, t, y, l), t.child);
    }
    function EC(e, t, a, i, l) {
      {
        switch (RO(t)) {
          case !1: {
            var s = t.stateNode, d = t.type, h = new d(t.memoizedProps, s.context), y = h.state;
            s.updater.enqueueSetState(s, y, null);
            break;
          }
          case !0: {
            t.flags |= Je, t.flags |= Un;
            var b = new Error("Simulated error coming from DevTools"), C = wn(l);
            t.lanes = lt(t.lanes, C);
            var N = KS(t, cs(b, t), C);
            Zg(t, N);
            break;
          }
        }
        if (t.type !== t.elementType) {
          var k = a.propTypes;
          k && gi(
            k,
            i,
            // Resolved props
            "prop",
            Pt(a)
          );
        }
      }
      var P;
      to(a) ? (P = !0, Kh(t)) : P = !1, ef(t, l);
      var H = t.stateNode, Y;
      H === null ? (jm(e, t), Db(t, a, i), cS(t, a, i, l), Y = !0) : e === null ? Y = zw(t, a, i, l) : Y = Uw(e, t, a, i, l);
      var we = r0(e, t, a, Y, P, l);
      {
        var We = t.stateNode;
        Y && We.props !== i && (fs || g("It looks like %s is reassigning its own `this.props` while rendering. This is not supported and can lead to confusing bugs.", it(t) || "a component"), fs = !0);
      }
      return we;
    }
    function r0(e, t, a, i, l, s) {
      SC(e, t);
      var d = (t.flags & Je) !== Ie;
      if (!i && !d)
        return l && eb(t, a, !1), Go(e, t, s);
      var h = t.stateNode;
      Rp.current = t;
      var y;
      if (d && typeof a.getDerivedStateFromError != "function")
        y = null, cC();
      else {
        $i(t);
        {
          if (wa(!0), y = h.render(), t.mode & tn) {
            Rn(!0);
            try {
              h.render();
            } finally {
              Rn(!1);
            }
          }
          wa(!1);
        }
        To();
      }
      return t.flags |= Fi, e !== null && d ? iD(e, t, y, s) : Wr(e, t, y, s), t.memoizedState = h.state, l && eb(t, a, !0), t.child;
    }
    function bC(e) {
      var t = e.stateNode;
      t.pendingContext ? ZE(e, t.pendingContext, t.pendingContext !== t.context) : t.context && ZE(e, t.context, !1), mS(e, t.containerInfo);
    }
    function sD(e, t, a) {
      if (bC(t), e === null)
        throw new Error("Should have a current fiber. This is a bug in React.");
      var i = t.pendingProps, l = t.memoizedState, s = l.element;
      Sb(e, t), fm(t, i, null, a);
      var d = t.memoizedState;
      t.stateNode;
      var h = d.element;
      if (l.isDehydrated) {
        var y = {
          element: h,
          isDehydrated: !1,
          cache: d.cache,
          pendingSuspenseBoundaries: d.pendingSuspenseBoundaries,
          transitions: d.transitions
        }, b = t.updateQueue;
        if (b.baseState = y, t.memoizedState = y, t.flags & sn) {
          var C = cs(new Error("There was an error while hydrating. Because the error happened outside of a Suspense boundary, the entire root will switch to client rendering."), t);
          return CC(e, t, h, a, C);
        } else if (h !== s) {
          var N = cs(new Error("This root received an early update, before anything was able hydrate. Switched the entire root to client rendering."), t);
          return CC(e, t, h, a, N);
        } else {
          pw(t);
          var k = _b(t, null, h, a);
          t.child = k;
          for (var P = k; P; )
            P.flags = P.flags & ~It | ia, P = P.sibling;
        }
      } else {
        if (Zc(), h === s)
          return Go(e, t, a);
        Wr(e, t, h, a);
      }
      return t.child;
    }
    function CC(e, t, a, i, l) {
      return Zc(), Bg(l), t.flags |= sn, Wr(e, t, a, i), t.child;
    }
    function cD(e, t, a) {
      zb(t), e === null && Vg(t);
      var i = t.type, l = t.pendingProps, s = e !== null ? e.memoizedProps : null, d = l.children, h = Cg(i, l);
      return h ? d = null : s !== null && Cg(i, s) && (t.flags |= Ot), SC(e, t), Wr(e, t, d, a), t.child;
    }
    function fD(e, t) {
      return e === null && Vg(t), null;
    }
    function dD(e, t, a, i) {
      jm(e, t);
      var l = t.pendingProps, s = a, d = s._payload, h = s._init, y = h(d);
      t.type = y;
      var b = t.tag = fO(y), C = bi(y, l), N;
      switch (b) {
        case z:
          return a0(t, y), t.type = y = yf(y), N = n0(null, t, y, C, i), N;
        case F:
          return t.type = y = z0(y), N = EC(null, t, y, C, i), N;
        case B:
          return t.type = y = U0(y), N = hC(null, t, y, C, i), N;
        case le: {
          if (t.type !== t.elementType) {
            var k = y.propTypes;
            k && gi(
              k,
              C,
              // Resolved for outer only
              "prop",
              Pt(y)
            );
          }
          return N = mC(
            null,
            t,
            y,
            bi(y.type, C),
            // The inner type can have defaults too
            i
          ), N;
        }
      }
      var P = "";
      throw y !== null && typeof y == "object" && y.$$typeof === dr && (P = " Did you wrap a component in React.lazy() more than once?"), new Error("Element type is invalid. Received a promise that resolves to: " + y + ". " + ("Lazy element type must resolve to a class or function." + P));
    }
    function pD(e, t, a, i, l) {
      jm(e, t), t.tag = F;
      var s;
      return to(a) ? (s = !0, Kh(t)) : s = !1, ef(t, l), Db(t, a, i), cS(t, a, i, l), r0(null, t, a, !0, s, l);
    }
    function vD(e, t, a, i) {
      jm(e, t);
      var l = t.pendingProps, s;
      {
        var d = qc(t, a, !1);
        s = Gc(t, d);
      }
      ef(t, i);
      var h, y;
      $i(t);
      {
        if (a.prototype && typeof a.prototype.render == "function") {
          var b = Pt(a) || "Unknown";
          XS[b] || (g("The <%s /> component appears to have a render method, but doesn't extend React.Component. This is likely to cause errors. Change %s to extend React.Component instead.", b, b), XS[b] = !0);
        }
        t.mode & tn && Ei.recordLegacyContextWarning(t, null), wa(!0), Rp.current = t, h = uf(null, t, a, l, s, i), y = sf(), wa(!1);
      }
      if (To(), t.flags |= Fi, typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0) {
        var C = Pt(a) || "Unknown";
        wp[C] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", C, C, C), wp[C] = !0);
      }
      if (
        // Run these checks in production only if the flag is off.
        // Eventually we'll delete this branch altogether.
        typeof h == "object" && h !== null && typeof h.render == "function" && h.$$typeof === void 0
      ) {
        {
          var N = Pt(a) || "Unknown";
          wp[N] || (g("The <%s /> component appears to be a function component that returns a class instance. Change %s to a class that extends React.Component instead. If you can't use a class try assigning the prototype on the function as a workaround. `%s.prototype = React.Component.prototype`. Don't use an arrow function since it cannot be called with `new` by React.", N, N, N), wp[N] = !0);
        }
        t.tag = F, t.memoizedState = null, t.updateQueue = null;
        var k = !1;
        return to(a) ? (k = !0, Kh(t)) : k = !1, t.memoizedState = h.state !== null && h.state !== void 0 ? h.state : null, Xg(t), wb(t, h), cS(t, a, l, i), r0(null, t, a, !0, k, i);
      } else {
        if (t.tag = z, t.mode & tn) {
          Rn(!0);
          try {
            h = uf(null, t, a, l, s, i), y = sf();
          } finally {
            Rn(!1);
          }
        }
        return hr() && y && Ag(t), Wr(null, t, h, i), a0(t, a), t.child;
      }
    }
    function a0(e, t) {
      {
        if (t && t.childContextTypes && g("%s(...): childContextTypes cannot be defined on a function component.", t.displayName || t.name || "Component"), e.ref !== null) {
          var a = "", i = ta();
          i && (a += `

Check the render method of \`` + i + "`.");
          var l = i || "", s = e._debugSource;
          s && (l = s.fileName + ":" + s.lineNumber), e0[l] || (e0[l] = !0, g("Function components cannot be given refs. Attempts to access this ref will fail. Did you mean to use React.forwardRef()?%s", a));
        }
        if (typeof t.getDerivedStateFromProps == "function") {
          var d = Pt(t) || "Unknown";
          JS[d] || (g("%s: Function components do not support getDerivedStateFromProps.", d), JS[d] = !0);
        }
        if (typeof t.contextType == "object" && t.contextType !== null) {
          var h = Pt(t) || "Unknown";
          ZS[h] || (g("%s: Function components do not support contextType.", h), ZS[h] = !0);
        }
      }
    }
    var i0 = {
      dehydrated: null,
      treeContext: null,
      retryLane: St
    };
    function o0(e) {
      return {
        baseLanes: e,
        cachePool: aD(),
        transitions: null
      };
    }
    function hD(e, t) {
      var a = null;
      return {
        baseLanes: lt(e.baseLanes, t),
        cachePool: a,
        transitions: e.transitions
      };
    }
    function mD(e, t, a, i) {
      if (t !== null) {
        var l = t.memoizedState;
        if (l === null)
          return !1;
      }
      return SS(e, yp);
    }
    function yD(e, t) {
      return wl(e.childLanes, t);
    }
    function TC(e, t, a) {
      var i = t.pendingProps;
      wO(t) && (t.flags |= Je);
      var l = Ci.current, s = !1, d = (t.flags & Je) !== Ie;
      if (d || mD(l, e) ? (s = !0, t.flags &= ~Je) : (e === null || e.memoizedState !== null) && (l = Hw(l, Ab)), l = rf(l), Gl(t, l), e === null) {
        Vg(t);
        var h = t.memoizedState;
        if (h !== null) {
          var y = h.dehydrated;
          if (y !== null)
            return CD(t, y);
        }
        var b = i.children, C = i.fallback;
        if (s) {
          var N = gD(t, b, C, a), k = t.child;
          return k.memoizedState = o0(a), t.memoizedState = i0, N;
        } else
          return l0(t, b);
      } else {
        var P = e.memoizedState;
        if (P !== null) {
          var H = P.dehydrated;
          if (H !== null)
            return TD(e, t, d, i, H, P, a);
        }
        if (s) {
          var Y = i.fallback, we = i.children, We = ED(e, t, we, Y, a), Pe = t.child, bt = e.child.memoizedState;
          return Pe.memoizedState = bt === null ? o0(a) : hD(bt, a), Pe.childLanes = yD(e, a), t.memoizedState = i0, We;
        } else {
          var mt = i.children, _ = SD(e, t, mt, a);
          return t.memoizedState = null, _;
        }
      }
    }
    function l0(e, t, a) {
      var i = e.mode, l = {
        mode: "visible",
        children: t
      }, s = u0(l, i);
      return s.return = e, e.child = s, s;
    }
    function gD(e, t, a, i) {
      var l = e.mode, s = e.child, d = {
        mode: "hidden",
        children: t
      }, h, y;
      return (l & dt) === Ye && s !== null ? (h = s, h.childLanes = G, h.pendingProps = d, e.mode & Qe && (h.actualDuration = 0, h.actualStartTime = -1, h.selfBaseDuration = 0, h.treeBaseDuration = 0), y = ru(a, l, i, null)) : (h = u0(d, l), y = ru(a, l, i, null)), h.return = e, y.return = e, h.sibling = y, e.child = h, y;
    }
    function u0(e, t, a) {
      return xT(e, t, G, null);
    }
    function xC(e, t) {
      return ms(e, t);
    }
    function SD(e, t, a, i) {
      var l = e.child, s = l.sibling, d = xC(l, {
        mode: "visible",
        children: a
      });
      if ((t.mode & dt) === Ye && (d.lanes = i), d.return = t, d.sibling = null, s !== null) {
        var h = t.deletions;
        h === null ? (t.deletions = [s], t.flags |= Dt) : h.push(s);
      }
      return t.child = d, d;
    }
    function ED(e, t, a, i, l) {
      var s = t.mode, d = e.child, h = d.sibling, y = {
        mode: "hidden",
        children: a
      }, b;
      if (
        // In legacy mode, we commit the primary tree as if it successfully
        // completed, even though it's in an inconsistent state.
        (s & dt) === Ye && // Make sure we're on the second pass, i.e. the primary child fragment was
        // already cloned. In legacy mode, the only case where this isn't true is
        // when DevTools forces us to display a fallback; we skip the first render
        // pass entirely and go straight to rendering the fallback. (In Concurrent
        // Mode, SuspenseList can also trigger this scenario, but this is a legacy-
        // only codepath.)
        t.child !== d
      ) {
        var C = t.child;
        b = C, b.childLanes = G, b.pendingProps = y, t.mode & Qe && (b.actualDuration = 0, b.actualStartTime = -1, b.selfBaseDuration = d.selfBaseDuration, b.treeBaseDuration = d.treeBaseDuration), t.deletions = null;
      } else
        b = xC(d, y), b.subtreeFlags = d.subtreeFlags & Bn;
      var N;
      return h !== null ? N = ms(h, i) : (N = ru(i, s, l, null), N.flags |= It), N.return = t, b.return = t, b.sibling = N, t.child = b, N;
    }
    function Hm(e, t, a, i) {
      i !== null && Bg(i), tf(t, e.child, null, a);
      var l = t.pendingProps, s = l.children, d = l0(t, s);
      return d.flags |= It, t.memoizedState = null, d;
    }
    function bD(e, t, a, i, l) {
      var s = t.mode, d = {
        mode: "visible",
        children: a
      }, h = u0(d, s), y = ru(i, s, l, null);
      return y.flags |= It, h.return = t, y.return = t, h.sibling = y, t.child = h, (t.mode & dt) !== Ye && tf(t, e.child, null, l), y;
    }
    function CD(e, t, a) {
      return (e.mode & dt) === Ye ? (g("Cannot hydrate Suspense in legacy mode. Switch from ReactDOM.hydrate(element, container) to ReactDOMClient.hydrateRoot(container, <App />).render(element) or remove the Suspense components from the server rendered components."), e.lanes = Ke) : wg(t) ? e.lanes = wo : e.lanes = Mr, null;
    }
    function TD(e, t, a, i, l, s, d) {
      if (a)
        if (t.flags & sn) {
          t.flags &= ~sn;
          var _ = qS(new Error("There was an error while hydrating this Suspense boundary. Switched to client rendering."));
          return Hm(e, t, d, _);
        } else {
          if (t.memoizedState !== null)
            return t.child = e.child, t.flags |= Je, null;
          var Q = i.children, L = i.fallback, oe = bD(e, t, Q, L, d), De = t.child;
          return De.memoizedState = o0(d), t.memoizedState = i0, oe;
        }
      else {
        if (fw(), (t.mode & dt) === Ye)
          return Hm(
            e,
            t,
            d,
            // TODO: When we delete legacy mode, we should make this error argument
            // required — every concurrent mode path that causes hydration to
            // de-opt to client rendering should have an error message.
            null
          );
        if (wg(l)) {
          var h, y, b;
          {
            var C = kR(l);
            h = C.digest, y = C.message, b = C.stack;
          }
          var N;
          y ? N = new Error(y) : N = new Error("The server could not finish this Suspense boundary, likely due to an error during server rendering. Switched to client rendering.");
          var k = qS(N, h, b);
          return Hm(e, t, d, k);
        }
        var P = _r(d, e.childLanes);
        if (xi || P) {
          var H = Km();
          if (H !== null) {
            var Y = Qy(H, d);
            if (Y !== St && Y !== s.retryLane) {
              s.retryLane = Y;
              var we = jt;
              ha(e, Y), Zn(H, e, Y, we);
            }
          }
          O0();
          var We = qS(new Error("This Suspense boundary received an update before it finished hydrating. This caused the boundary to switch to client rendering. The usual way to fix this is to wrap the original update in startTransition."));
          return Hm(e, t, d, We);
        } else if (YE(l)) {
          t.flags |= Je, t.child = e.child;
          var Pe = qk.bind(null, e);
          return OR(l, Pe), null;
        } else {
          vw(t, l, s.treeContext);
          var bt = i.children, mt = l0(t, bt);
          return mt.flags |= ia, mt;
        }
      }
    }
    function RC(e, t, a) {
      e.lanes = lt(e.lanes, t);
      var i = e.alternate;
      i !== null && (i.lanes = lt(i.lanes, t)), Qg(e.return, t, a);
    }
    function xD(e, t, a) {
      for (var i = t; i !== null; ) {
        if (i.tag === te) {
          var l = i.memoizedState;
          l !== null && RC(i, a, e);
        } else if (i.tag === Ne)
          RC(i, a, e);
        else if (i.child !== null) {
          i.child.return = i, i = i.child;
          continue;
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          i = i.return;
        }
        i.sibling.return = i.return, i = i.sibling;
      }
    }
    function RD(e) {
      for (var t = e, a = null; t !== null; ) {
        var i = t.alternate;
        i !== null && gm(i) === null && (a = t), t = t.sibling;
      }
      return a;
    }
    function wD(e) {
      if (e !== void 0 && e !== "forwards" && e !== "backwards" && e !== "together" && !t0[e])
        if (t0[e] = !0, typeof e == "string")
          switch (e.toLowerCase()) {
            case "together":
            case "forwards":
            case "backwards": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. Use lowercase "%s" instead.', e, e.toLowerCase());
              break;
            }
            case "forward":
            case "backward": {
              g('"%s" is not a valid value for revealOrder on <SuspenseList />. React uses the -s suffix in the spelling. Use "%ss" instead.', e, e.toLowerCase());
              break;
            }
            default:
              g('"%s" is not a supported revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
              break;
          }
        else
          g('%s is not a supported value for revealOrder on <SuspenseList />. Did you mean "together", "forwards" or "backwards"?', e);
    }
    function DD(e, t) {
      e !== void 0 && !Pm[e] && (e !== "collapsed" && e !== "hidden" ? (Pm[e] = !0, g('"%s" is not a supported value for tail on <SuspenseList />. Did you mean "collapsed" or "hidden"?', e)) : t !== "forwards" && t !== "backwards" && (Pm[e] = !0, g('<SuspenseList tail="%s" /> is only valid if revealOrder is "forwards" or "backwards". Did you mean to specify revealOrder="forwards"?', e)));
    }
    function wC(e, t) {
      {
        var a = Ln(e), i = !a && typeof ti(e) == "function";
        if (a || i) {
          var l = a ? "array" : "iterable";
          return g("A nested %s was passed to row #%s in <SuspenseList />. Wrap it in an additional SuspenseList to configure its revealOrder: <SuspenseList revealOrder=...> ... <SuspenseList revealOrder=...>{%s}</SuspenseList> ... </SuspenseList>", l, t, l), !1;
        }
      }
      return !0;
    }
    function kD(e, t) {
      if ((t === "forwards" || t === "backwards") && e !== void 0 && e !== null && e !== !1)
        if (Ln(e)) {
          for (var a = 0; a < e.length; a++)
            if (!wC(e[a], a))
              return;
        } else {
          var i = ti(e);
          if (typeof i == "function") {
            var l = i.call(e);
            if (l)
              for (var s = l.next(), d = 0; !s.done; s = l.next()) {
                if (!wC(s.value, d))
                  return;
                d++;
              }
          } else
            g('A single row was passed to a <SuspenseList revealOrder="%s" />. This is not useful since it needs multiple rows. Did you mean to pass multiple children or an array?', t);
        }
    }
    function s0(e, t, a, i, l) {
      var s = e.memoizedState;
      s === null ? e.memoizedState = {
        isBackwards: t,
        rendering: null,
        renderingStartTime: 0,
        last: i,
        tail: a,
        tailMode: l
      } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = i, s.tail = a, s.tailMode = l);
    }
    function DC(e, t, a) {
      var i = t.pendingProps, l = i.revealOrder, s = i.tail, d = i.children;
      wD(l), DD(s, l), kD(d, l), Wr(e, t, d, a);
      var h = Ci.current, y = SS(h, yp);
      if (y)
        h = ES(h, yp), t.flags |= Je;
      else {
        var b = e !== null && (e.flags & Je) !== Ie;
        b && xD(t, t.child, a), h = rf(h);
      }
      if (Gl(t, h), (t.mode & dt) === Ye)
        t.memoizedState = null;
      else
        switch (l) {
          case "forwards": {
            var C = RD(t.child), N;
            C === null ? (N = t.child, t.child = null) : (N = C.sibling, C.sibling = null), s0(
              t,
              !1,
              // isBackwards
              N,
              C,
              s
            );
            break;
          }
          case "backwards": {
            var k = null, P = t.child;
            for (t.child = null; P !== null; ) {
              var H = P.alternate;
              if (H !== null && gm(H) === null) {
                t.child = P;
                break;
              }
              var Y = P.sibling;
              P.sibling = k, k = P, P = Y;
            }
            s0(
              t,
              !0,
              // isBackwards
              k,
              null,
              // last
              s
            );
            break;
          }
          case "together": {
            s0(
              t,
              !1,
              // isBackwards
              null,
              // tail
              null,
              // last
              void 0
            );
            break;
          }
          default:
            t.memoizedState = null;
        }
      return t.child;
    }
    function OD(e, t, a) {
      mS(t, t.stateNode.containerInfo);
      var i = t.pendingProps;
      return e === null ? t.child = tf(t, null, i, a) : Wr(e, t, i, a), t.child;
    }
    var kC = !1;
    function ND(e, t, a) {
      var i = t.type, l = i._context, s = t.pendingProps, d = t.memoizedProps, h = s.value;
      {
        "value" in s || kC || (kC = !0, g("The `value` prop is required for the `<Context.Provider>`. Did you misspell it or forget to pass it?"));
        var y = t.type.propTypes;
        y && gi(y, s, "prop", "Context.Provider");
      }
      if (hb(t, l, h), d !== null) {
        var b = d.value;
        if (_e(b, h)) {
          if (d.children === s.children && !qh())
            return Go(e, t, a);
        } else
          xw(t, l, a);
      }
      var C = s.children;
      return Wr(e, t, C, a), t.child;
    }
    var OC = !1;
    function MD(e, t, a) {
      var i = t.type;
      i._context === void 0 ? i !== i.Consumer && (OC || (OC = !0, g("Rendering <Context> directly is not supported and will be removed in a future major release. Did you mean to render <Context.Consumer> instead?"))) : i = i._context;
      var l = t.pendingProps, s = l.children;
      typeof s != "function" && g("A context consumer was rendered with multiple children, or a child that isn't a function. A context consumer expects a single child that is a function. If you did pass a function, make sure there is no trailing or leading whitespace around it."), ef(t, a);
      var d = jn(i);
      $i(t);
      var h;
      return Rp.current = t, wa(!0), h = s(d), wa(!1), To(), t.flags |= Fi, Wr(e, t, h, a), t.child;
    }
    function Dp() {
      xi = !0;
    }
    function jm(e, t) {
      (t.mode & dt) === Ye && e !== null && (e.alternate = null, t.alternate = null, t.flags |= It);
    }
    function Go(e, t, a) {
      return e !== null && (t.dependencies = e.dependencies), cC(), Hp(t.lanes), _r(a, t.childLanes) ? (Aw(e, t), t.child) : null;
    }
    function _D(e, t, a) {
      {
        var i = t.return;
        if (i === null)
          throw new Error("Cannot swap the root fiber.");
        if (e.alternate = null, t.alternate = null, a.index = t.index, a.sibling = t.sibling, a.return = t.return, a.ref = t.ref, t === i.child)
          i.child = a;
        else {
          var l = i.child;
          if (l === null)
            throw new Error("Expected parent to have a child.");
          for (; l.sibling !== t; )
            if (l = l.sibling, l === null)
              throw new Error("Expected to find the previous sibling.");
          l.sibling = a;
        }
        var s = i.deletions;
        return s === null ? (i.deletions = [e], i.flags |= Dt) : s.push(e), a.flags |= It, a;
      }
    }
    function c0(e, t) {
      var a = e.lanes;
      return !!_r(a, t);
    }
    function LD(e, t, a) {
      switch (t.tag) {
        case V:
          bC(t), t.stateNode, Zc();
          break;
        case I:
          zb(t);
          break;
        case F: {
          var i = t.type;
          to(i) && Kh(t);
          break;
        }
        case q:
          mS(t, t.stateNode.containerInfo);
          break;
        case Se: {
          var l = t.memoizedProps.value, s = t.type._context;
          hb(t, s, l);
          break;
        }
        case $:
          {
            var d = _r(a, t.childLanes);
            d && (t.flags |= ot);
            {
              var h = t.stateNode;
              h.effectDuration = 0, h.passiveEffectDuration = 0;
            }
          }
          break;
        case te: {
          var y = t.memoizedState;
          if (y !== null) {
            if (y.dehydrated !== null)
              return Gl(t, rf(Ci.current)), t.flags |= Je, null;
            var b = t.child, C = b.childLanes;
            if (_r(a, C))
              return TC(e, t, a);
            Gl(t, rf(Ci.current));
            var N = Go(e, t, a);
            return N !== null ? N.sibling : null;
          } else
            Gl(t, rf(Ci.current));
          break;
        }
        case Ne: {
          var k = (e.flags & Je) !== Ie, P = _r(a, t.childLanes);
          if (k) {
            if (P)
              return DC(e, t, a);
            t.flags |= Je;
          }
          var H = t.memoizedState;
          if (H !== null && (H.rendering = null, H.tail = null, H.lastEffect = null), Gl(t, Ci.current), P)
            break;
          return null;
        }
        case se:
        case ve:
          return t.lanes = G, gC(e, t, a);
      }
      return Go(e, t, a);
    }
    function NC(e, t, a) {
      if (t._debugNeedsRemount && e !== null)
        return _D(e, t, j0(t.type, t.key, t.pendingProps, t._debugOwner || null, t.mode, t.lanes));
      if (e !== null) {
        var i = e.memoizedProps, l = t.pendingProps;
        if (i !== l || qh() || // Force a re-render if the implementation changed due to hot reload:
        t.type !== e.type)
          xi = !0;
        else {
          var s = c0(e, a);
          if (!s && // If this is the second pass of an error or suspense boundary, there
          // may not be work scheduled on `current`, so we check for this flag.
          (t.flags & Je) === Ie)
            return xi = !1, LD(e, t, a);
          (e.flags & _u) !== Ie ? xi = !0 : xi = !1;
        }
      } else if (xi = !1, hr() && iw(t)) {
        var d = t.index, h = ow();
        rb(t, h, d);
      }
      switch (t.lanes = G, t.tag) {
        case ne:
          return vD(e, t, t.type, a);
        case ke: {
          var y = t.elementType;
          return dD(e, t, y, a);
        }
        case z: {
          var b = t.type, C = t.pendingProps, N = t.elementType === b ? C : bi(b, C);
          return n0(e, t, b, N, a);
        }
        case F: {
          var k = t.type, P = t.pendingProps, H = t.elementType === k ? P : bi(k, P);
          return EC(e, t, k, H, a);
        }
        case V:
          return sD(e, t, a);
        case I:
          return cD(e, t, a);
        case ee:
          return fD(e, t);
        case te:
          return TC(e, t, a);
        case q:
          return OD(e, t, a);
        case B: {
          var Y = t.type, we = t.pendingProps, We = t.elementType === Y ? we : bi(Y, we);
          return hC(e, t, Y, We, a);
        }
        case pe:
          return oD(e, t, a);
        case de:
          return lD(e, t, a);
        case $:
          return uD(e, t, a);
        case Se:
          return ND(e, t, a);
        case me:
          return MD(e, t, a);
        case le: {
          var Pe = t.type, bt = t.pendingProps, mt = bi(Pe, bt);
          if (t.type !== t.elementType) {
            var _ = Pe.propTypes;
            _ && gi(
              _,
              mt,
              // Resolved for outer only
              "prop",
              Pt(Pe)
            );
          }
          return mt = bi(Pe.type, mt), mC(e, t, Pe, mt, a);
        }
        case J:
          return yC(e, t, t.type, t.pendingProps, a);
        case Ve: {
          var Q = t.type, L = t.pendingProps, oe = t.elementType === Q ? L : bi(Q, L);
          return pD(e, t, Q, oe, a);
        }
        case Ne:
          return DC(e, t, a);
        case Be:
          break;
        case se:
          return gC(e, t, a);
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function cf(e) {
      e.flags |= ot;
    }
    function MC(e) {
      e.flags |= Rr, e.flags |= ud;
    }
    var _C, f0, LC, zC;
    _C = function(e, t, a, i) {
      for (var l = t.child; l !== null; ) {
        if (l.tag === I || l.tag === ee)
          nR(e, l.stateNode);
        else if (l.tag !== q) {
          if (l.child !== null) {
            l.child.return = l, l = l.child;
            continue;
          }
        }
        if (l === t)
          return;
        for (; l.sibling === null; ) {
          if (l.return === null || l.return === t)
            return;
          l = l.return;
        }
        l.sibling.return = l.return, l = l.sibling;
      }
    }, f0 = function(e, t) {
    }, LC = function(e, t, a, i, l) {
      var s = e.memoizedProps;
      if (s !== i) {
        var d = t.stateNode, h = yS(), y = aR(d, a, s, i, l, h);
        t.updateQueue = y, y && cf(t);
      }
    }, zC = function(e, t, a, i) {
      a !== i && cf(t);
    };
    function kp(e, t) {
      if (!hr())
        switch (e.tailMode) {
          case "hidden": {
            for (var a = e.tail, i = null; a !== null; )
              a.alternate !== null && (i = a), a = a.sibling;
            i === null ? e.tail = null : i.sibling = null;
            break;
          }
          case "collapsed": {
            for (var l = e.tail, s = null; l !== null; )
              l.alternate !== null && (s = l), l = l.sibling;
            s === null ? !t && e.tail !== null ? e.tail.sibling = null : e.tail = null : s.sibling = null;
            break;
          }
        }
    }
    function yr(e) {
      var t = e.alternate !== null && e.alternate.child === e.child, a = G, i = Ie;
      if (t) {
        if ((e.mode & Qe) !== Ye) {
          for (var y = e.selfBaseDuration, b = e.child; b !== null; )
            a = lt(a, lt(b.lanes, b.childLanes)), i |= b.subtreeFlags & Bn, i |= b.flags & Bn, y += b.treeBaseDuration, b = b.sibling;
          e.treeBaseDuration = y;
        } else
          for (var C = e.child; C !== null; )
            a = lt(a, lt(C.lanes, C.childLanes)), i |= C.subtreeFlags & Bn, i |= C.flags & Bn, C.return = e, C = C.sibling;
        e.subtreeFlags |= i;
      } else {
        if ((e.mode & Qe) !== Ye) {
          for (var l = e.actualDuration, s = e.selfBaseDuration, d = e.child; d !== null; )
            a = lt(a, lt(d.lanes, d.childLanes)), i |= d.subtreeFlags, i |= d.flags, l += d.actualDuration, s += d.treeBaseDuration, d = d.sibling;
          e.actualDuration = l, e.treeBaseDuration = s;
        } else
          for (var h = e.child; h !== null; )
            a = lt(a, lt(h.lanes, h.childLanes)), i |= h.subtreeFlags, i |= h.flags, h.return = e, h = h.sibling;
        e.subtreeFlags |= i;
      }
      return e.childLanes = a, t;
    }
    function zD(e, t, a) {
      if (Sw() && (t.mode & dt) !== Ye && (t.flags & Je) === Ie)
        return cb(t), Zc(), t.flags |= sn | Hr | Un, !1;
      var i = tm(t);
      if (a !== null && a.dehydrated !== null)
        if (e === null) {
          if (!i)
            throw new Error("A dehydrated suspense component was completed without a hydrated node. This is probably a bug in React.");
          if (yw(t), yr(t), (t.mode & Qe) !== Ye) {
            var l = a !== null;
            if (l) {
              var s = t.child;
              s !== null && (t.treeBaseDuration -= s.treeBaseDuration);
            }
          }
          return !1;
        } else {
          if (Zc(), (t.flags & Je) === Ie && (t.memoizedState = null), t.flags |= ot, yr(t), (t.mode & Qe) !== Ye) {
            var d = a !== null;
            if (d) {
              var h = t.child;
              h !== null && (t.treeBaseDuration -= h.treeBaseDuration);
            }
          }
          return !1;
        }
      else
        return fb(), !0;
    }
    function UC(e, t, a) {
      var i = t.pendingProps;
      switch (Fg(t), t.tag) {
        case ne:
        case ke:
        case J:
        case z:
        case B:
        case pe:
        case de:
        case $:
        case me:
        case le:
          return yr(t), null;
        case F: {
          var l = t.type;
          return to(l) && Gh(t), yr(t), null;
        }
        case V: {
          var s = t.stateNode;
          if (nf(t), Lg(t), CS(), s.pendingContext && (s.context = s.pendingContext, s.pendingContext = null), e === null || e.child === null) {
            var d = tm(t);
            if (d)
              cf(t);
            else if (e !== null) {
              var h = e.memoizedState;
              // Check if this is a client root
              (!h.isDehydrated || // Check if we reverted to client rendering (e.g. due to an error)
              (t.flags & sn) !== Ie) && (t.flags |= aa, fb());
            }
          }
          return f0(e, t), yr(t), null;
        }
        case I: {
          gS(t);
          var y = Lb(), b = t.type;
          if (e !== null && t.stateNode != null)
            LC(e, t, b, i, y), e.ref !== t.ref && MC(t);
          else {
            if (!i) {
              if (t.stateNode === null)
                throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
              return yr(t), null;
            }
            var C = yS(), N = tm(t);
            if (N)
              hw(t, y, C) && cf(t);
            else {
              var k = tR(b, i, y, C, t);
              _C(k, t, !1, !1), t.stateNode = k, rR(k, b, i, y) && cf(t);
            }
            t.ref !== null && MC(t);
          }
          return yr(t), null;
        }
        case ee: {
          var P = i;
          if (e && t.stateNode != null) {
            var H = e.memoizedProps;
            zC(e, t, H, P);
          } else {
            if (typeof P != "string" && t.stateNode === null)
              throw new Error("We must have new props for new mounts. This error is likely caused by a bug in React. Please file an issue.");
            var Y = Lb(), we = yS(), We = tm(t);
            We ? mw(t) && cf(t) : t.stateNode = iR(P, Y, we, t);
          }
          return yr(t), null;
        }
        case te: {
          af(t);
          var Pe = t.memoizedState;
          if (e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
            var bt = zD(e, t, Pe);
            if (!bt)
              return t.flags & Un ? t : null;
          }
          if ((t.flags & Je) !== Ie)
            return t.lanes = a, (t.mode & Qe) !== Ye && QS(t), t;
          var mt = Pe !== null, _ = e !== null && e.memoizedState !== null;
          if (mt !== _ && mt) {
            var Q = t.child;
            if (Q.flags |= Pi, (t.mode & dt) !== Ye) {
              var L = e === null && (t.memoizedProps.unstable_avoidThisFallback !== !0 || !ut);
              L || SS(Ci.current, Ab) ? Uk() : O0();
            }
          }
          var oe = t.updateQueue;
          if (oe !== null && (t.flags |= ot), yr(t), (t.mode & Qe) !== Ye && mt) {
            var De = t.child;
            De !== null && (t.treeBaseDuration -= De.treeBaseDuration);
          }
          return null;
        }
        case q:
          return nf(t), f0(e, t), e === null && ZR(t.stateNode.containerInfo), yr(t), null;
        case Se:
          var Te = t.type._context;
          return Yg(Te, t), yr(t), null;
        case Ve: {
          var Xe = t.type;
          return to(Xe) && Gh(t), yr(t), null;
        }
        case Ne: {
          af(t);
          var rt = t.memoizedState;
          if (rt === null)
            return yr(t), null;
          var Ft = (t.flags & Je) !== Ie, xt = rt.rendering;
          if (xt === null)
            if (Ft)
              kp(rt, !1);
            else {
              var Nn = Fk() && (e === null || (e.flags & Je) === Ie);
              if (!Nn)
                for (var Rt = t.child; Rt !== null; ) {
                  var Tn = gm(Rt);
                  if (Tn !== null) {
                    Ft = !0, t.flags |= Je, kp(rt, !1);
                    var Ar = Tn.updateQueue;
                    return Ar !== null && (t.updateQueue = Ar, t.flags |= ot), t.subtreeFlags = Ie, Fw(t, a), Gl(t, ES(Ci.current, yp)), t.child;
                  }
                  Rt = Rt.sibling;
                }
              rt.tail !== null && en() > nT() && (t.flags |= Je, Ft = !0, kp(rt, !1), t.lanes = bd);
            }
          else {
            if (!Ft) {
              var Cr = gm(xt);
              if (Cr !== null) {
                t.flags |= Je, Ft = !0;
                var za = Cr.updateQueue;
                if (za !== null && (t.updateQueue = za, t.flags |= ot), kp(rt, !0), rt.tail === null && rt.tailMode === "hidden" && !xt.alternate && !hr())
                  return yr(t), null;
              } else
                // The time it took to render last row is greater than the remaining
                // time we have to render. So rendering one more row would likely
                // exceed it.
                en() * 2 - rt.renderingStartTime > nT() && a !== Mr && (t.flags |= Je, Ft = !0, kp(rt, !1), t.lanes = bd);
            }
            if (rt.isBackwards)
              xt.sibling = t.child, t.child = xt;
            else {
              var qr = rt.last;
              qr !== null ? qr.sibling = xt : t.child = xt, rt.last = xt;
            }
          }
          if (rt.tail !== null) {
            var Gr = rt.tail;
            rt.rendering = Gr, rt.tail = Gr.sibling, rt.renderingStartTime = en(), Gr.sibling = null;
            var Fr = Ci.current;
            return Ft ? Fr = ES(Fr, yp) : Fr = rf(Fr), Gl(t, Fr), Gr;
          }
          return yr(t), null;
        }
        case Be:
          break;
        case se:
        case ve: {
          k0(t);
          var el = t.memoizedState, gf = el !== null;
          if (e !== null) {
            var $p = e.memoizedState, so = $p !== null;
            so !== gf && // LegacyHidden doesn't do any hiding — it only pre-renders.
            !ue && (t.flags |= Pi);
          }
          return !gf || (t.mode & dt) === Ye ? yr(t) : _r(uo, Mr) && (yr(t), t.subtreeFlags & (It | ot) && (t.flags |= Pi)), null;
        }
        case Ce:
          return null;
        case be:
          return null;
      }
      throw new Error("Unknown unit of work tag (" + t.tag + "). This error is likely caused by a bug in React. Please file an issue.");
    }
    function UD(e, t, a) {
      switch (Fg(t), t.tag) {
        case F: {
          var i = t.type;
          to(i) && Gh(t);
          var l = t.flags;
          return l & Un ? (t.flags = l & ~Un | Je, (t.mode & Qe) !== Ye && QS(t), t) : null;
        }
        case V: {
          t.stateNode, nf(t), Lg(t), CS();
          var s = t.flags;
          return (s & Un) !== Ie && (s & Je) === Ie ? (t.flags = s & ~Un | Je, t) : null;
        }
        case I:
          return gS(t), null;
        case te: {
          af(t);
          var d = t.memoizedState;
          if (d !== null && d.dehydrated !== null) {
            if (t.alternate === null)
              throw new Error("Threw in newly mounted dehydrated component. This is likely a bug in React. Please file an issue.");
            Zc();
          }
          var h = t.flags;
          return h & Un ? (t.flags = h & ~Un | Je, (t.mode & Qe) !== Ye && QS(t), t) : null;
        }
        case Ne:
          return af(t), null;
        case q:
          return nf(t), null;
        case Se:
          var y = t.type._context;
          return Yg(y, t), null;
        case se:
        case ve:
          return k0(t), null;
        case Ce:
          return null;
        default:
          return null;
      }
    }
    function AC(e, t, a) {
      switch (Fg(t), t.tag) {
        case F: {
          var i = t.type.childContextTypes;
          i != null && Gh(t);
          break;
        }
        case V: {
          t.stateNode, nf(t), Lg(t), CS();
          break;
        }
        case I: {
          gS(t);
          break;
        }
        case q:
          nf(t);
          break;
        case te:
          af(t);
          break;
        case Ne:
          af(t);
          break;
        case Se:
          var l = t.type._context;
          Yg(l, t);
          break;
        case se:
        case ve:
          k0(t);
          break;
      }
    }
    var FC = null;
    FC = /* @__PURE__ */ new Set();
    var Vm = !1, gr = !1, AD = typeof WeakSet == "function" ? WeakSet : Set, Le = null, ff = null, df = null;
    function FD(e) {
      bo(null, function() {
        throw e;
      }), od();
    }
    var PD = function(e, t) {
      if (t.props = e.memoizedProps, t.state = e.memoizedState, e.mode & Qe)
        try {
          oo(), t.componentWillUnmount();
        } finally {
          io(e);
        }
      else
        t.componentWillUnmount();
    };
    function PC(e, t) {
      try {
        Zl(Yn, e);
      } catch (a) {
        Qt(e, t, a);
      }
    }
    function d0(e, t, a) {
      try {
        PD(e, a);
      } catch (i) {
        Qt(e, t, i);
      }
    }
    function HD(e, t, a) {
      try {
        a.componentDidMount();
      } catch (i) {
        Qt(e, t, i);
      }
    }
    function HC(e, t) {
      try {
        VC(e);
      } catch (a) {
        Qt(e, t, a);
      }
    }
    function pf(e, t) {
      var a = e.ref;
      if (a !== null)
        if (typeof a == "function") {
          var i;
          try {
            if (yt && dn && e.mode & Qe)
              try {
                oo(), i = a(null);
              } finally {
                io(e);
              }
            else
              i = a(null);
          } catch (l) {
            Qt(e, t, l);
          }
          typeof i == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", it(e));
        } else
          a.current = null;
    }
    function Bm(e, t, a) {
      try {
        a();
      } catch (i) {
        Qt(e, t, i);
      }
    }
    var jC = !1;
    function jD(e, t) {
      Jx(e.containerInfo), Le = t, VD();
      var a = jC;
      return jC = !1, a;
    }
    function VD() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        (e.subtreeFlags & gl) !== Ie && t !== null ? (t.return = e, Le = t) : BD();
      }
    }
    function BD() {
      for (; Le !== null; ) {
        var e = Le;
        Ut(e);
        try {
          ID(e);
        } catch (a) {
          Qt(e, e.return, a);
        }
        xn();
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function ID(e) {
      var t = e.alternate, a = e.flags;
      if ((a & aa) !== Ie) {
        switch (Ut(e), e.tag) {
          case z:
          case B:
          case J:
            break;
          case F: {
            if (t !== null) {
              var i = t.memoizedProps, l = t.memoizedState, s = e.stateNode;
              e.type === e.elementType && !fs && (s.props !== e.memoizedProps && g("Expected %s props to match memoized props before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(e) || "instance"), s.state !== e.memoizedState && g("Expected %s state to match memoized state before getSnapshotBeforeUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(e) || "instance"));
              var d = s.getSnapshotBeforeUpdate(e.elementType === e.type ? i : bi(e.type, i), l);
              {
                var h = FC;
                d === void 0 && !h.has(e.type) && (h.add(e.type), g("%s.getSnapshotBeforeUpdate(): A snapshot value (or null) must be returned. You have returned undefined.", it(e)));
              }
              s.__reactInternalSnapshotBeforeUpdate = d;
            }
            break;
          }
          case V: {
            {
              var y = e.stateNode;
              xR(y.containerInfo);
            }
            break;
          }
          case I:
          case ee:
          case q:
          case Ve:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
        xn();
      }
    }
    function Ri(e, t, a) {
      var i = t.updateQueue, l = i !== null ? i.lastEffect : null;
      if (l !== null) {
        var s = l.next, d = s;
        do {
          if ((d.tag & e) === e) {
            var h = d.destroy;
            d.destroy = void 0, h !== void 0 && ((e & mr) !== ma ? tc(t) : (e & Yn) !== ma && nc(t), (e & no) !== ma && Vp(!0), Bm(t, a, h), (e & no) !== ma && Vp(!1), (e & mr) !== ma ? eh() : (e & Yn) !== ma && Sl());
          }
          d = d.next;
        } while (d !== s);
      }
    }
    function Zl(e, t) {
      var a = t.updateQueue, i = a !== null ? a.lastEffect : null;
      if (i !== null) {
        var l = i.next, s = l;
        do {
          if ((s.tag & e) === e) {
            (e & mr) !== ma ? Jv(t) : (e & Yn) !== ma && th(t);
            var d = s.create;
            (e & no) !== ma && Vp(!0), s.destroy = d(), (e & no) !== ma && Vp(!1), (e & mr) !== ma ? gd() : (e & Yn) !== ma && nh();
            {
              var h = s.destroy;
              if (h !== void 0 && typeof h != "function") {
                var y = void 0;
                (s.tag & Yn) !== Ie ? y = "useLayoutEffect" : (s.tag & no) !== Ie ? y = "useInsertionEffect" : y = "useEffect";
                var b = void 0;
                h === null ? b = " You returned null. If your effect does not require clean up, return undefined (or nothing)." : typeof h.then == "function" ? b = `

It looks like you wrote ` + y + `(async () => ...) or returned a Promise. Instead, write the async function inside your effect and call it immediately:

` + y + `(() => {
  async function fetchData() {
    // You can await here
    const response = await MyAPI.getData(someId);
    // ...
  }
  fetchData();
}, [someId]); // Or [] if effect doesn't need props or state

Learn more about data fetching with Hooks: https://reactjs.org/link/hooks-data-fetching` : b = " You returned: " + h, g("%s must not return anything besides a function, which is used for clean-up.%s", y, b);
              }
            }
          }
          s = s.next;
        } while (s !== l);
      }
    }
    function $D(e, t) {
      if ((t.flags & ot) !== Ie)
        switch (t.tag) {
          case $: {
            var a = t.stateNode.passiveEffectDuration, i = t.memoizedProps, l = i.id, s = i.onPostCommit, d = uC(), h = t.alternate === null ? "mount" : "update";
            lC() && (h = "nested-update"), typeof s == "function" && s(l, h, a, d);
            var y = t.return;
            e:
              for (; y !== null; ) {
                switch (y.tag) {
                  case V:
                    var b = y.stateNode;
                    b.passiveEffectDuration += a;
                    break e;
                  case $:
                    var C = y.stateNode;
                    C.passiveEffectDuration += a;
                    break e;
                }
                y = y.return;
              }
            break;
          }
        }
    }
    function WD(e, t, a, i) {
      if ((a.flags & rr) !== Ie)
        switch (a.tag) {
          case z:
          case B:
          case J: {
            if (!gr)
              if (a.mode & Qe)
                try {
                  oo(), Zl(Yn | Wn, a);
                } finally {
                  io(a);
                }
              else
                Zl(Yn | Wn, a);
            break;
          }
          case F: {
            var l = a.stateNode;
            if (a.flags & ot && !gr)
              if (t === null)
                if (a.type === a.elementType && !fs && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidMount. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), a.mode & Qe)
                  try {
                    oo(), l.componentDidMount();
                  } finally {
                    io(a);
                  }
                else
                  l.componentDidMount();
              else {
                var s = a.elementType === a.type ? t.memoizedProps : bi(a.type, t.memoizedProps), d = t.memoizedState;
                if (a.type === a.elementType && !fs && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before componentDidUpdate. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), a.mode & Qe)
                  try {
                    oo(), l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
                  } finally {
                    io(a);
                  }
                else
                  l.componentDidUpdate(s, d, l.__reactInternalSnapshotBeforeUpdate);
              }
            var h = a.updateQueue;
            h !== null && (a.type === a.elementType && !fs && (l.props !== a.memoizedProps && g("Expected %s props to match memoized props before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.props`. Please file an issue.", it(a) || "instance"), l.state !== a.memoizedState && g("Expected %s state to match memoized state before processing the update queue. This might either be because of a bug in React, or because a component reassigns its own `this.state`. Please file an issue.", it(a) || "instance")), bb(a, h, l));
            break;
          }
          case V: {
            var y = a.updateQueue;
            if (y !== null) {
              var b = null;
              if (a.child !== null)
                switch (a.child.tag) {
                  case I:
                    b = a.child.stateNode;
                    break;
                  case F:
                    b = a.child.stateNode;
                    break;
                }
              bb(a, y, b);
            }
            break;
          }
          case I: {
            var C = a.stateNode;
            if (t === null && a.flags & ot) {
              var N = a.type, k = a.memoizedProps;
              cR(C, N, k);
            }
            break;
          }
          case ee:
            break;
          case q:
            break;
          case $: {
            {
              var P = a.memoizedProps, H = P.onCommit, Y = P.onRender, we = a.stateNode.effectDuration, We = uC(), Pe = t === null ? "mount" : "update";
              lC() && (Pe = "nested-update"), typeof Y == "function" && Y(a.memoizedProps.id, Pe, a.actualDuration, a.treeBaseDuration, a.actualStartTime, We);
              {
                typeof H == "function" && H(a.memoizedProps.id, Pe, we, We), Bk(a);
                var bt = a.return;
                e:
                  for (; bt !== null; ) {
                    switch (bt.tag) {
                      case V:
                        var mt = bt.stateNode;
                        mt.effectDuration += we;
                        break e;
                      case $:
                        var _ = bt.stateNode;
                        _.effectDuration += we;
                        break e;
                    }
                    bt = bt.return;
                  }
              }
            }
            break;
          }
          case te: {
            JD(e, a);
            break;
          }
          case Ne:
          case Ve:
          case Be:
          case se:
          case ve:
          case be:
            break;
          default:
            throw new Error("This unit of work tag should not have side-effects. This error is likely caused by a bug in React. Please file an issue.");
        }
      gr || a.flags & Rr && VC(a);
    }
    function YD(e) {
      switch (e.tag) {
        case z:
        case B:
        case J: {
          if (e.mode & Qe)
            try {
              oo(), PC(e, e.return);
            } finally {
              io(e);
            }
          else
            PC(e, e.return);
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentDidMount == "function" && HD(e, e.return, t), HC(e, e.return);
          break;
        }
        case I: {
          HC(e, e.return);
          break;
        }
      }
    }
    function QD(e, t) {
      for (var a = null, i = e; ; ) {
        if (i.tag === I) {
          if (a === null) {
            a = i;
            try {
              var l = i.stateNode;
              t ? ER(l) : CR(i.stateNode, i.memoizedProps);
            } catch (d) {
              Qt(e, e.return, d);
            }
          }
        } else if (i.tag === ee) {
          if (a === null)
            try {
              var s = i.stateNode;
              t ? bR(s) : TR(s, i.memoizedProps);
            } catch (d) {
              Qt(e, e.return, d);
            }
        } else if (!((i.tag === se || i.tag === ve) && i.memoizedState !== null && i !== e)) {
          if (i.child !== null) {
            i.child.return = i, i = i.child;
            continue;
          }
        }
        if (i === e)
          return;
        for (; i.sibling === null; ) {
          if (i.return === null || i.return === e)
            return;
          a === i && (a = null), i = i.return;
        }
        a === i && (a = null), i.sibling.return = i.return, i = i.sibling;
      }
    }
    function VC(e) {
      var t = e.ref;
      if (t !== null) {
        var a = e.stateNode, i;
        switch (e.tag) {
          case I:
            i = a;
            break;
          default:
            i = a;
        }
        if (typeof t == "function") {
          var l;
          if (e.mode & Qe)
            try {
              oo(), l = t(i);
            } finally {
              io(e);
            }
          else
            l = t(i);
          typeof l == "function" && g("Unexpected return value from a callback ref in %s. A callback ref should not return a function.", it(e));
        } else
          t.hasOwnProperty("current") || g("Unexpected ref object provided for %s. Use either a ref-setter function or React.createRef().", it(e)), t.current = i;
      }
    }
    function qD(e) {
      var t = e.alternate;
      t !== null && (t.return = null), e.return = null;
    }
    function BC(e) {
      var t = e.alternate;
      t !== null && (e.alternate = null, BC(t));
      {
        if (e.child = null, e.deletions = null, e.sibling = null, e.tag === I) {
          var a = e.stateNode;
          a !== null && tw(a);
        }
        e.stateNode = null, e._debugOwner = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
      }
    }
    function GD(e) {
      for (var t = e.return; t !== null; ) {
        if (IC(t))
          return t;
        t = t.return;
      }
      throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
    }
    function IC(e) {
      return e.tag === I || e.tag === V || e.tag === q;
    }
    function $C(e) {
      var t = e;
      e:
        for (; ; ) {
          for (; t.sibling === null; ) {
            if (t.return === null || IC(t.return))
              return null;
            t = t.return;
          }
          for (t.sibling.return = t.return, t = t.sibling; t.tag !== I && t.tag !== ee && t.tag !== Ue; ) {
            if (t.flags & It || t.child === null || t.tag === q)
              continue e;
            t.child.return = t, t = t.child;
          }
          if (!(t.flags & It))
            return t.stateNode;
        }
    }
    function KD(e) {
      var t = GD(e);
      switch (t.tag) {
        case I: {
          var a = t.stateNode;
          t.flags & Ot && (WE(a), t.flags &= ~Ot);
          var i = $C(e);
          v0(e, i, a);
          break;
        }
        case V:
        case q: {
          var l = t.stateNode.containerInfo, s = $C(e);
          p0(e, s, l);
          break;
        }
        default:
          throw new Error("Invalid host parent fiber. This error is likely caused by a bug in React. Please file an issue.");
      }
    }
    function p0(e, t, a) {
      var i = e.tag, l = i === I || i === ee;
      if (l) {
        var s = e.stateNode;
        t ? mR(a, s, t) : vR(a, s);
      } else if (i !== q) {
        var d = e.child;
        if (d !== null) {
          p0(d, t, a);
          for (var h = d.sibling; h !== null; )
            p0(h, t, a), h = h.sibling;
        }
      }
    }
    function v0(e, t, a) {
      var i = e.tag, l = i === I || i === ee;
      if (l) {
        var s = e.stateNode;
        t ? hR(a, s, t) : pR(a, s);
      } else if (i !== q) {
        var d = e.child;
        if (d !== null) {
          v0(d, t, a);
          for (var h = d.sibling; h !== null; )
            v0(h, t, a), h = h.sibling;
        }
      }
    }
    var Sr = null, wi = !1;
    function XD(e, t, a) {
      {
        var i = t;
        e:
          for (; i !== null; ) {
            switch (i.tag) {
              case I: {
                Sr = i.stateNode, wi = !1;
                break e;
              }
              case V: {
                Sr = i.stateNode.containerInfo, wi = !0;
                break e;
              }
              case q: {
                Sr = i.stateNode.containerInfo, wi = !0;
                break e;
              }
            }
            i = i.return;
          }
        if (Sr === null)
          throw new Error("Expected to find a host parent. This error is likely caused by a bug in React. Please file an issue.");
        WC(e, t, a), Sr = null, wi = !1;
      }
      qD(a);
    }
    function Jl(e, t, a) {
      for (var i = a.child; i !== null; )
        WC(e, t, i), i = i.sibling;
    }
    function WC(e, t, a) {
      switch (md(a), a.tag) {
        case I:
          gr || pf(a, t);
        case ee: {
          {
            var i = Sr, l = wi;
            Sr = null, Jl(e, t, a), Sr = i, wi = l, Sr !== null && (wi ? gR(Sr, a.stateNode) : yR(Sr, a.stateNode));
          }
          return;
        }
        case Ue: {
          Sr !== null && (wi ? SR(Sr, a.stateNode) : Rg(Sr, a.stateNode));
          return;
        }
        case q: {
          {
            var s = Sr, d = wi;
            Sr = a.stateNode.containerInfo, wi = !0, Jl(e, t, a), Sr = s, wi = d;
          }
          return;
        }
        case z:
        case B:
        case le:
        case J: {
          if (!gr) {
            var h = a.updateQueue;
            if (h !== null) {
              var y = h.lastEffect;
              if (y !== null) {
                var b = y.next, C = b;
                do {
                  var N = C, k = N.destroy, P = N.tag;
                  k !== void 0 && ((P & no) !== ma ? Bm(a, t, k) : (P & Yn) !== ma && (nc(a), a.mode & Qe ? (oo(), Bm(a, t, k), io(a)) : Bm(a, t, k), Sl())), C = C.next;
                } while (C !== b);
              }
            }
          }
          Jl(e, t, a);
          return;
        }
        case F: {
          if (!gr) {
            pf(a, t);
            var H = a.stateNode;
            typeof H.componentWillUnmount == "function" && d0(a, t, H);
          }
          Jl(e, t, a);
          return;
        }
        case Be: {
          Jl(e, t, a);
          return;
        }
        case se: {
          if (
            // TODO: Remove this dead flag
            a.mode & dt
          ) {
            var Y = gr;
            gr = Y || a.memoizedState !== null, Jl(e, t, a), gr = Y;
          } else
            Jl(e, t, a);
          break;
        }
        default: {
          Jl(e, t, a);
          return;
        }
      }
    }
    function ZD(e) {
      e.memoizedState;
    }
    function JD(e, t) {
      var a = t.memoizedState;
      if (a === null) {
        var i = t.alternate;
        if (i !== null) {
          var l = i.memoizedState;
          if (l !== null) {
            var s = l.dehydrated;
            s !== null && PR(s);
          }
        }
      }
    }
    function YC(e) {
      var t = e.updateQueue;
      if (t !== null) {
        e.updateQueue = null;
        var a = e.stateNode;
        a === null && (a = e.stateNode = new AD()), t.forEach(function(i) {
          var l = Gk.bind(null, e, i);
          if (!a.has(i)) {
            if (a.add(i), In)
              if (ff !== null && df !== null)
                jp(df, ff);
              else
                throw Error("Expected finished root and lanes to be set. This is a bug in React.");
            i.then(l, l);
          }
        });
      }
    }
    function ek(e, t, a) {
      ff = a, df = e, Ut(t), QC(t, e), Ut(t), ff = null, df = null;
    }
    function Di(e, t, a) {
      var i = t.deletions;
      if (i !== null)
        for (var l = 0; l < i.length; l++) {
          var s = i[l];
          try {
            XD(e, t, s);
          } catch (y) {
            Qt(s, t, y);
          }
        }
      var d = xy();
      if (t.subtreeFlags & kr)
        for (var h = t.child; h !== null; )
          Ut(h), QC(h, e), h = h.sibling;
      Ut(d);
    }
    function QC(e, t, a) {
      var i = e.alternate, l = e.flags;
      switch (e.tag) {
        case z:
        case B:
        case le:
        case J: {
          if (Di(t, e), lo(e), l & ot) {
            try {
              Ri(no | Wn, e, e.return), Zl(no | Wn, e);
            } catch (Xe) {
              Qt(e, e.return, Xe);
            }
            if (e.mode & Qe) {
              try {
                oo(), Ri(Yn | Wn, e, e.return);
              } catch (Xe) {
                Qt(e, e.return, Xe);
              }
              io(e);
            } else
              try {
                Ri(Yn | Wn, e, e.return);
              } catch (Xe) {
                Qt(e, e.return, Xe);
              }
          }
          return;
        }
        case F: {
          Di(t, e), lo(e), l & Rr && i !== null && pf(i, i.return);
          return;
        }
        case I: {
          Di(t, e), lo(e), l & Rr && i !== null && pf(i, i.return);
          {
            if (e.flags & Ot) {
              var s = e.stateNode;
              try {
                WE(s);
              } catch (Xe) {
                Qt(e, e.return, Xe);
              }
            }
            if (l & ot) {
              var d = e.stateNode;
              if (d != null) {
                var h = e.memoizedProps, y = i !== null ? i.memoizedProps : h, b = e.type, C = e.updateQueue;
                if (e.updateQueue = null, C !== null)
                  try {
                    fR(d, C, b, y, h, e);
                  } catch (Xe) {
                    Qt(e, e.return, Xe);
                  }
              }
            }
          }
          return;
        }
        case ee: {
          if (Di(t, e), lo(e), l & ot) {
            if (e.stateNode === null)
              throw new Error("This should have a text node initialized. This error is likely caused by a bug in React. Please file an issue.");
            var N = e.stateNode, k = e.memoizedProps, P = i !== null ? i.memoizedProps : k;
            try {
              dR(N, P, k);
            } catch (Xe) {
              Qt(e, e.return, Xe);
            }
          }
          return;
        }
        case V: {
          if (Di(t, e), lo(e), l & ot && i !== null) {
            var H = i.memoizedState;
            if (H.isDehydrated)
              try {
                FR(t.containerInfo);
              } catch (Xe) {
                Qt(e, e.return, Xe);
              }
          }
          return;
        }
        case q: {
          Di(t, e), lo(e);
          return;
        }
        case te: {
          Di(t, e), lo(e);
          var Y = e.child;
          if (Y.flags & Pi) {
            var we = Y.stateNode, We = Y.memoizedState, Pe = We !== null;
            if (we.isHidden = Pe, Pe) {
              var bt = Y.alternate !== null && Y.alternate.memoizedState !== null;
              bt || zk();
            }
          }
          if (l & ot) {
            try {
              ZD(e);
            } catch (Xe) {
              Qt(e, e.return, Xe);
            }
            YC(e);
          }
          return;
        }
        case se: {
          var mt = i !== null && i.memoizedState !== null;
          if (
            // TODO: Remove this dead flag
            e.mode & dt
          ) {
            var _ = gr;
            gr = _ || mt, Di(t, e), gr = _;
          } else
            Di(t, e);
          if (lo(e), l & Pi) {
            var Q = e.stateNode, L = e.memoizedState, oe = L !== null, De = e;
            if (Q.isHidden = oe, oe && !mt && (De.mode & dt) !== Ye) {
              Le = De;
              for (var Te = De.child; Te !== null; )
                Le = Te, nk(Te), Te = Te.sibling;
            }
            QD(De, oe);
          }
          return;
        }
        case Ne: {
          Di(t, e), lo(e), l & ot && YC(e);
          return;
        }
        case Be:
          return;
        default: {
          Di(t, e), lo(e);
          return;
        }
      }
    }
    function lo(e) {
      var t = e.flags;
      if (t & It) {
        try {
          KD(e);
        } catch (a) {
          Qt(e, e.return, a);
        }
        e.flags &= ~It;
      }
      t & ia && (e.flags &= ~ia);
    }
    function tk(e, t, a) {
      ff = a, df = t, Le = e, qC(e, t, a), ff = null, df = null;
    }
    function qC(e, t, a) {
      for (var i = (e.mode & dt) !== Ye; Le !== null; ) {
        var l = Le, s = l.child;
        if (l.tag === se && i) {
          var d = l.memoizedState !== null, h = d || Vm;
          if (h) {
            h0(e, t, a);
            continue;
          } else {
            var y = l.alternate, b = y !== null && y.memoizedState !== null, C = b || gr, N = Vm, k = gr;
            Vm = h, gr = C, gr && !k && (Le = l, rk(l));
            for (var P = s; P !== null; )
              Le = P, qC(
                P,
                // New root; bubble back up to here and stop.
                t,
                a
              ), P = P.sibling;
            Le = l, Vm = N, gr = k, h0(e, t, a);
            continue;
          }
        }
        (l.subtreeFlags & rr) !== Ie && s !== null ? (s.return = l, Le = s) : h0(e, t, a);
      }
    }
    function h0(e, t, a) {
      for (; Le !== null; ) {
        var i = Le;
        if ((i.flags & rr) !== Ie) {
          var l = i.alternate;
          Ut(i);
          try {
            WD(t, l, i, a);
          } catch (d) {
            Qt(i, i.return, d);
          }
          xn();
        }
        if (i === e) {
          Le = null;
          return;
        }
        var s = i.sibling;
        if (s !== null) {
          s.return = i.return, Le = s;
          return;
        }
        Le = i.return;
      }
    }
    function nk(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        switch (t.tag) {
          case z:
          case B:
          case le:
          case J: {
            if (t.mode & Qe)
              try {
                oo(), Ri(Yn, t, t.return);
              } finally {
                io(t);
              }
            else
              Ri(Yn, t, t.return);
            break;
          }
          case F: {
            pf(t, t.return);
            var i = t.stateNode;
            typeof i.componentWillUnmount == "function" && d0(t, t.return, i);
            break;
          }
          case I: {
            pf(t, t.return);
            break;
          }
          case se: {
            var l = t.memoizedState !== null;
            if (l) {
              GC(e);
              continue;
            }
            break;
          }
        }
        a !== null ? (a.return = t, Le = a) : GC(e);
      }
    }
    function GC(e) {
      for (; Le !== null; ) {
        var t = Le;
        if (t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function rk(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.child;
        if (t.tag === se) {
          var i = t.memoizedState !== null;
          if (i) {
            KC(e);
            continue;
          }
        }
        a !== null ? (a.return = t, Le = a) : KC(e);
      }
    }
    function KC(e) {
      for (; Le !== null; ) {
        var t = Le;
        Ut(t);
        try {
          YD(t);
        } catch (i) {
          Qt(t, t.return, i);
        }
        if (xn(), t === e) {
          Le = null;
          return;
        }
        var a = t.sibling;
        if (a !== null) {
          a.return = t.return, Le = a;
          return;
        }
        Le = t.return;
      }
    }
    function ak(e, t, a, i) {
      Le = t, ik(t, e, a, i);
    }
    function ik(e, t, a, i) {
      for (; Le !== null; ) {
        var l = Le, s = l.child;
        (l.subtreeFlags & oa) !== Ie && s !== null ? (s.return = l, Le = s) : ok(e, t, a, i);
      }
    }
    function ok(e, t, a, i) {
      for (; Le !== null; ) {
        var l = Le;
        if ((l.flags & Xt) !== Ie) {
          Ut(l);
          try {
            lk(t, l, a, i);
          } catch (d) {
            Qt(l, l.return, d);
          }
          xn();
        }
        if (l === e) {
          Le = null;
          return;
        }
        var s = l.sibling;
        if (s !== null) {
          s.return = l.return, Le = s;
          return;
        }
        Le = l.return;
      }
    }
    function lk(e, t, a, i) {
      switch (t.tag) {
        case z:
        case B:
        case J: {
          if (t.mode & Qe) {
            YS();
            try {
              Zl(mr | Wn, t);
            } finally {
              WS(t);
            }
          } else
            Zl(mr | Wn, t);
          break;
        }
      }
    }
    function uk(e) {
      Le = e, sk();
    }
    function sk() {
      for (; Le !== null; ) {
        var e = Le, t = e.child;
        if ((Le.flags & Dt) !== Ie) {
          var a = e.deletions;
          if (a !== null) {
            for (var i = 0; i < a.length; i++) {
              var l = a[i];
              Le = l, dk(l, e);
            }
            {
              var s = e.alternate;
              if (s !== null) {
                var d = s.child;
                if (d !== null) {
                  s.child = null;
                  do {
                    var h = d.sibling;
                    d.sibling = null, d = h;
                  } while (d !== null);
                }
              }
            }
            Le = e;
          }
        }
        (e.subtreeFlags & oa) !== Ie && t !== null ? (t.return = e, Le = t) : ck();
      }
    }
    function ck() {
      for (; Le !== null; ) {
        var e = Le;
        (e.flags & Xt) !== Ie && (Ut(e), fk(e), xn());
        var t = e.sibling;
        if (t !== null) {
          t.return = e.return, Le = t;
          return;
        }
        Le = e.return;
      }
    }
    function fk(e) {
      switch (e.tag) {
        case z:
        case B:
        case J: {
          e.mode & Qe ? (YS(), Ri(mr | Wn, e, e.return), WS(e)) : Ri(mr | Wn, e, e.return);
          break;
        }
      }
    }
    function dk(e, t) {
      for (; Le !== null; ) {
        var a = Le;
        Ut(a), vk(a, t), xn();
        var i = a.child;
        i !== null ? (i.return = a, Le = i) : pk(e);
      }
    }
    function pk(e) {
      for (; Le !== null; ) {
        var t = Le, a = t.sibling, i = t.return;
        if (BC(t), t === e) {
          Le = null;
          return;
        }
        if (a !== null) {
          a.return = i, Le = a;
          return;
        }
        Le = i;
      }
    }
    function vk(e, t) {
      switch (e.tag) {
        case z:
        case B:
        case J: {
          e.mode & Qe ? (YS(), Ri(mr, e, t), WS(e)) : Ri(mr, e, t);
          break;
        }
      }
    }
    function hk(e) {
      switch (e.tag) {
        case z:
        case B:
        case J: {
          try {
            Zl(Yn | Wn, e);
          } catch (a) {
            Qt(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          try {
            t.componentDidMount();
          } catch (a) {
            Qt(e, e.return, a);
          }
          break;
        }
      }
    }
    function mk(e) {
      switch (e.tag) {
        case z:
        case B:
        case J: {
          try {
            Zl(mr | Wn, e);
          } catch (t) {
            Qt(e, e.return, t);
          }
          break;
        }
      }
    }
    function yk(e) {
      switch (e.tag) {
        case z:
        case B:
        case J: {
          try {
            Ri(Yn | Wn, e, e.return);
          } catch (a) {
            Qt(e, e.return, a);
          }
          break;
        }
        case F: {
          var t = e.stateNode;
          typeof t.componentWillUnmount == "function" && d0(e, e.return, t);
          break;
        }
      }
    }
    function gk(e) {
      switch (e.tag) {
        case z:
        case B:
        case J:
          try {
            Ri(mr | Wn, e, e.return);
          } catch (t) {
            Qt(e, e.return, t);
          }
      }
    }
    if (typeof Symbol == "function" && Symbol.for) {
      var Op = Symbol.for;
      Op("selector.component"), Op("selector.has_pseudo_class"), Op("selector.role"), Op("selector.test_id"), Op("selector.text");
    }
    var Sk = [];
    function Ek() {
      Sk.forEach(function(e) {
        return e();
      });
    }
    var bk = S.ReactCurrentActQueue;
    function Ck(e) {
      {
        var t = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        ), a = typeof jest < "u";
        return a && t !== !1;
      }
    }
    function XC() {
      {
        var e = (
          // $FlowExpectedError – Flow doesn't know about IS_REACT_ACT_ENVIRONMENT global
          typeof IS_REACT_ACT_ENVIRONMENT < "u" ? IS_REACT_ACT_ENVIRONMENT : void 0
        );
        return !e && bk.current !== null && g("The current testing environment is not configured to support act(...)"), e;
      }
    }
    var Tk = Math.ceil, m0 = S.ReactCurrentDispatcher, y0 = S.ReactCurrentOwner, Er = S.ReactCurrentBatchConfig, ki = S.ReactCurrentActQueue, Gn = (
      /*             */
      0
    ), ZC = (
      /*               */
      1
    ), br = (
      /*                */
      2
    ), Ga = (
      /*                */
      4
    ), Ko = 0, Np = 1, ds = 2, Im = 3, Mp = 4, JC = 5, g0 = 6, Et = Gn, Yr = null, hn = null, Kn = G, uo = G, S0 = Il(G), Xn = Ko, _p = null, $m = G, Lp = G, Wm = G, zp = null, ya = null, E0 = 0, eT = 500, tT = 1 / 0, xk = 500, Xo = null;
    function Up() {
      tT = en() + xk;
    }
    function nT() {
      return tT;
    }
    var Ym = !1, b0 = null, vf = null, ps = !1, eu = null, Ap = G, C0 = [], T0 = null, Rk = 50, Fp = 0, x0 = null, R0 = !1, Qm = !1, wk = 50, hf = 0, qm = null, Pp = jt, Gm = G, rT = !1;
    function Km() {
      return Yr;
    }
    function Qr() {
      return (Et & (br | Ga)) !== Gn ? en() : (Pp !== jt || (Pp = en()), Pp);
    }
    function tu(e) {
      var t = e.mode;
      if ((t & dt) === Ye)
        return Ke;
      if ((Et & br) !== Gn && Kn !== G)
        return wn(Kn);
      var a = Cw() !== bw;
      if (a) {
        if (Er.transition !== null) {
          var i = Er.transition;
          i._updatedFibers || (i._updatedFibers = /* @__PURE__ */ new Set()), i._updatedFibers.add(e);
        }
        return Gm === St && (Gm = xd()), Gm;
      }
      var l = ca();
      if (l !== St)
        return l;
      var s = oR();
      return s;
    }
    function Dk(e) {
      var t = e.mode;
      return (t & dt) === Ye ? Ke : Yy();
    }
    function Zn(e, t, a, i) {
      Xk(), rT && g("useInsertionEffect must not schedule updates."), R0 && (Qm = !0), Lo(e, a, i), (Et & br) !== G && e === Yr ? eO(t) : (In && Od(e, t, a), tO(t), e === Yr && ((Et & br) === Gn && (Lp = lt(Lp, a)), Xn === Mp && nu(e, Kn)), ga(e, i), a === Ke && Et === Gn && (t.mode & dt) === Ye && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
      !ki.isBatchingLegacy && (Up(), nb()));
    }
    function kk(e, t, a) {
      var i = e.current;
      i.lanes = t, Lo(e, t, a), ga(e, a);
    }
    function Ok(e) {
      return (
        // TODO: Remove outdated deferRenderPhaseUpdateToNextBatch experiment. We
        // decided not to enable it.
        (Et & br) !== Gn
      );
    }
    function ga(e, t) {
      var a = e.callbackNode;
      Iy(e, t);
      var i = Pu(e, e === Yr ? Kn : G);
      if (i === G) {
        a !== null && ST(a), e.callbackNode = null, e.callbackPriority = St;
        return;
      }
      var l = bn(i), s = e.callbackPriority;
      if (s === l && // Special case related to `act`. If the currently scheduled task is a
      // Scheduler task, rather than an `act` task, cancel it and re-scheduled
      // on the `act` queue.
      !(ki.current !== null && a !== _0)) {
        a == null && s !== Ke && g("Expected scheduled callback to exist. This error is likely caused by a bug in React. Please file an issue.");
        return;
      }
      a != null && ST(a);
      var d;
      if (l === Ke)
        e.tag === $l ? (ki.isBatchingLegacy !== null && (ki.didScheduleLegacyUpdate = !0), aw(oT.bind(null, e))) : tb(oT.bind(null, e)), ki.current !== null ? ki.current.push(Wl) : uR(function() {
          (Et & (br | Ga)) === Gn && Wl();
        }), d = null;
      else {
        var h;
        switch (Iu(i)) {
          case ar:
            h = Zs;
            break;
          case $n:
            h = Br;
            break;
          case pi:
            h = Ha;
            break;
          case Vu:
            h = ji;
            break;
          default:
            h = Ha;
            break;
        }
        d = L0(h, aT.bind(null, e));
      }
      e.callbackPriority = l, e.callbackNode = d;
    }
    function aT(e, t) {
      if (Xw(), Pp = jt, Gm = G, (Et & (br | Ga)) !== Gn)
        throw new Error("Should not already be working.");
      var a = e.callbackNode, i = Jo();
      if (i && e.callbackNode !== a)
        return null;
      var l = Pu(e, e === Yr ? Kn : G);
      if (l === G)
        return null;
      var s = !ju(e, l) && !uh(e, l) && !t, d = s ? Hk(e, l) : Zm(e, l);
      if (d !== Ko) {
        if (d === ds) {
          var h = Cd(e);
          h !== G && (l = h, d = w0(e, h));
        }
        if (d === Np) {
          var y = _p;
          throw vs(e, G), nu(e, l), ga(e, en()), y;
        }
        if (d === g0)
          nu(e, l);
        else {
          var b = !ju(e, l), C = e.current.alternate;
          if (b && !Mk(C)) {
            if (d = Zm(e, l), d === ds) {
              var N = Cd(e);
              N !== G && (l = N, d = w0(e, N));
            }
            if (d === Np) {
              var k = _p;
              throw vs(e, G), nu(e, l), ga(e, en()), k;
            }
          }
          e.finishedWork = C, e.finishedLanes = l, Nk(e, d, l);
        }
      }
      return ga(e, en()), e.callbackNode === a ? aT.bind(null, e) : null;
    }
    function w0(e, t) {
      var a = zp;
      if (kn(e)) {
        var i = vs(e, t);
        i.flags |= sn, XR(e.containerInfo);
      }
      var l = Zm(e, t);
      if (l !== ds) {
        var s = ya;
        ya = a, s !== null && iT(s);
      }
      return l;
    }
    function iT(e) {
      ya === null ? ya = e : ya.push.apply(ya, e);
    }
    function Nk(e, t, a) {
      switch (t) {
        case Ko:
        case Np:
          throw new Error("Root did not complete. This is a bug in React.");
        case ds: {
          hs(e, ya, Xo);
          break;
        }
        case Im: {
          if (nu(e, a), Cc(a) && // do not delay if we're inside an act() scope
          !ET()) {
            var i = E0 + eT - en();
            if (i > 10) {
              var l = Pu(e, G);
              if (l !== G)
                break;
              var s = e.suspendedLanes;
              if (!_o(s, a)) {
                Qr(), Dd(e, s);
                break;
              }
              e.timeoutHandle = Tg(hs.bind(null, e, ya, Xo), i);
              break;
            }
          }
          hs(e, ya, Xo);
          break;
        }
        case Mp: {
          if (nu(e, a), lh(a))
            break;
          if (!ET()) {
            var d = oh(e, a), h = d, y = en() - h, b = Kk(y) - y;
            if (b > 10) {
              e.timeoutHandle = Tg(hs.bind(null, e, ya, Xo), b);
              break;
            }
          }
          hs(e, ya, Xo);
          break;
        }
        case JC: {
          hs(e, ya, Xo);
          break;
        }
        default:
          throw new Error("Unknown root exit status.");
      }
    }
    function Mk(e) {
      for (var t = e; ; ) {
        if (t.flags & Mu) {
          var a = t.updateQueue;
          if (a !== null) {
            var i = a.stores;
            if (i !== null)
              for (var l = 0; l < i.length; l++) {
                var s = i[l], d = s.getSnapshot, h = s.value;
                try {
                  if (!_e(d(), h))
                    return !1;
                } catch {
                  return !1;
                }
              }
          }
        }
        var y = t.child;
        if (t.subtreeFlags & Mu && y !== null) {
          y.return = t, t = y;
          continue;
        }
        if (t === e)
          return !0;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e)
            return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
      return !0;
    }
    function nu(e, t) {
      t = wl(t, Wm), t = wl(t, Lp), wd(e, t);
    }
    function oT(e) {
      if (Zw(), (Et & (br | Ga)) !== Gn)
        throw new Error("Should not already be working.");
      Jo();
      var t = Pu(e, G);
      if (!_r(t, Ke))
        return ga(e, en()), null;
      var a = Zm(e, t);
      if (e.tag !== $l && a === ds) {
        var i = Cd(e);
        i !== G && (t = i, a = w0(e, i));
      }
      if (a === Np) {
        var l = _p;
        throw vs(e, G), nu(e, t), ga(e, en()), l;
      }
      if (a === g0)
        throw new Error("Root did not complete. This is a bug in React.");
      var s = e.current.alternate;
      return e.finishedWork = s, e.finishedLanes = t, hs(e, ya, Xo), ga(e, en()), null;
    }
    function _k(e, t) {
      t !== G && (Dl(e, lt(t, Ke)), ga(e, en()), (Et & (br | Ga)) === Gn && (Up(), Wl()));
    }
    function D0(e, t) {
      var a = Et;
      Et |= ZC;
      try {
        return e(t);
      } finally {
        Et = a, Et === Gn && // Treat `act` as if it's inside `batchedUpdates`, even in legacy mode.
        !ki.isBatchingLegacy && (Up(), nb());
      }
    }
    function Lk(e, t, a, i, l) {
      var s = ca(), d = Er.transition;
      try {
        return Er.transition = null, Dn(ar), e(t, a, i, l);
      } finally {
        Dn(s), Er.transition = d, Et === Gn && Up();
      }
    }
    function Zo(e) {
      eu !== null && eu.tag === $l && (Et & (br | Ga)) === Gn && Jo();
      var t = Et;
      Et |= ZC;
      var a = Er.transition, i = ca();
      try {
        return Er.transition = null, Dn(ar), e ? e() : void 0;
      } finally {
        Dn(i), Er.transition = a, Et = t, (Et & (br | Ga)) === Gn && Wl();
      }
    }
    function lT() {
      return (Et & (br | Ga)) !== Gn;
    }
    function Xm(e, t) {
      zr(S0, uo, e), uo = lt(uo, t);
    }
    function k0(e) {
      uo = S0.current, Lr(S0, e);
    }
    function vs(e, t) {
      e.finishedWork = null, e.finishedLanes = G;
      var a = e.timeoutHandle;
      if (a !== xg && (e.timeoutHandle = xg, lR(a)), hn !== null)
        for (var i = hn.return; i !== null; ) {
          var l = i.alternate;
          AC(l, i), i = i.return;
        }
      Yr = e;
      var s = ms(e.current, null);
      return hn = s, Kn = uo = t, Xn = Ko, _p = null, $m = G, Lp = G, Wm = G, zp = null, ya = null, ww(), Ei.discardPendingWarnings(), s;
    }
    function uT(e, t) {
      do {
        var a = hn;
        try {
          if (im(), Pb(), xn(), y0.current = null, a === null || a.return === null) {
            Xn = Np, _p = t, hn = null;
            return;
          }
          if (yt && a.mode & Qe && Fm(a, !0), _t)
            if (To(), t !== null && typeof t == "object" && typeof t.then == "function") {
              var i = t;
              rh(a, i, Kn);
            } else
              rc(a, t, Kn);
          rD(e, a.return, a, t, Kn), dT(a);
        } catch (l) {
          t = l, hn === a && a !== null ? (a = a.return, hn = a) : a = hn;
          continue;
        }
        return;
      } while (!0);
    }
    function sT() {
      var e = m0.current;
      return m0.current = _m, e === null ? _m : e;
    }
    function cT(e) {
      m0.current = e;
    }
    function zk() {
      E0 = en();
    }
    function Hp(e) {
      $m = lt(e, $m);
    }
    function Uk() {
      Xn === Ko && (Xn = Im);
    }
    function O0() {
      (Xn === Ko || Xn === Im || Xn === ds) && (Xn = Mp), Yr !== null && (Hu($m) || Hu(Lp)) && nu(Yr, Kn);
    }
    function Ak(e) {
      Xn !== Mp && (Xn = ds), zp === null ? zp = [e] : zp.push(e);
    }
    function Fk() {
      return Xn === Ko;
    }
    function Zm(e, t) {
      var a = Et;
      Et |= br;
      var i = sT();
      if (Yr !== e || Kn !== t) {
        if (In) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (jp(e, Kn), l.clear()), Rc(e, t);
        }
        Xo = Nd(), vs(e, t);
      }
      Na(t);
      do
        try {
          Pk();
          break;
        } catch (s) {
          uT(e, s);
        }
      while (!0);
      if (im(), Et = a, cT(i), hn !== null)
        throw new Error("Cannot commit an incomplete root. This error is likely caused by a bug in React. Please file an issue.");
      return bl(), Yr = null, Kn = G, Xn;
    }
    function Pk() {
      for (; hn !== null; )
        fT(hn);
    }
    function Hk(e, t) {
      var a = Et;
      Et |= br;
      var i = sT();
      if (Yr !== e || Kn !== t) {
        if (In) {
          var l = e.memoizedUpdaters;
          l.size > 0 && (jp(e, Kn), l.clear()), Rc(e, t);
        }
        Xo = Nd(), Up(), vs(e, t);
      }
      Na(t);
      do
        try {
          jk();
          break;
        } catch (s) {
          uT(e, s);
        }
      while (!0);
      return im(), cT(i), Et = a, hn !== null ? (zu(), Ko) : (bl(), Yr = null, Kn = G, Xn);
    }
    function jk() {
      for (; hn !== null && !Xs(); )
        fT(hn);
    }
    function fT(e) {
      var t = e.alternate;
      Ut(e);
      var a;
      (e.mode & Qe) !== Ye ? ($S(e), a = N0(t, e, uo), Fm(e, !0)) : a = N0(t, e, uo), xn(), e.memoizedProps = e.pendingProps, a === null ? dT(e) : hn = a, y0.current = null;
    }
    function dT(e) {
      var t = e;
      do {
        var a = t.alternate, i = t.return;
        if ((t.flags & Hr) === Ie) {
          Ut(t);
          var l = void 0;
          if ((t.mode & Qe) === Ye ? l = UC(a, t, uo) : ($S(t), l = UC(a, t, uo), Fm(t, !1)), xn(), l !== null) {
            hn = l;
            return;
          }
        } else {
          var s = UD(a, t);
          if (s !== null) {
            s.flags &= qv, hn = s;
            return;
          }
          if ((t.mode & Qe) !== Ye) {
            Fm(t, !1);
            for (var d = t.actualDuration, h = t.child; h !== null; )
              d += h.actualDuration, h = h.sibling;
            t.actualDuration = d;
          }
          if (i !== null)
            i.flags |= Hr, i.subtreeFlags = Ie, i.deletions = null;
          else {
            Xn = g0, hn = null;
            return;
          }
        }
        var y = t.sibling;
        if (y !== null) {
          hn = y;
          return;
        }
        t = i, hn = t;
      } while (t !== null);
      Xn === Ko && (Xn = JC);
    }
    function hs(e, t, a) {
      var i = ca(), l = Er.transition;
      try {
        Er.transition = null, Dn(ar), Vk(e, t, a, i);
      } finally {
        Er.transition = l, Dn(i);
      }
      return null;
    }
    function Vk(e, t, a, i) {
      do
        Jo();
      while (eu !== null);
      if (Zk(), (Et & (br | Ga)) !== Gn)
        throw new Error("Should not already be working.");
      var l = e.finishedWork, s = e.finishedLanes;
      if (ec(s), l === null)
        return yd(), null;
      if (s === G && g("root.finishedLanes should not be empty during a commit. This is a bug in React."), e.finishedWork = null, e.finishedLanes = G, l === e.current)
        throw new Error("Cannot commit the same tree as before. This error is likely caused by a bug in React. Please file an issue.");
      e.callbackNode = null, e.callbackPriority = St;
      var d = lt(l.lanes, l.childLanes);
      kd(e, d), e === Yr && (Yr = null, hn = null, Kn = G), ((l.subtreeFlags & oa) !== Ie || (l.flags & oa) !== Ie) && (ps || (ps = !0, T0 = a, L0(Ha, function() {
        return Jo(), null;
      })));
      var h = (l.subtreeFlags & (gl | kr | rr | oa)) !== Ie, y = (l.flags & (gl | kr | rr | oa)) !== Ie;
      if (h || y) {
        var b = Er.transition;
        Er.transition = null;
        var C = ca();
        Dn(ar);
        var N = Et;
        Et |= Ga, y0.current = null, jD(e, l), sC(), ek(e, l, s), eR(e.containerInfo), e.current = l, ah(s), tk(l, e, s), El(), Xv(), Et = N, Dn(C), Er.transition = b;
      } else
        e.current = l, sC();
      var k = ps;
      if (ps ? (ps = !1, eu = e, Ap = s) : (hf = 0, qm = null), d = e.pendingLanes, d === G && (vf = null), k || mT(e.current, !1), ci(l.stateNode, i), In && e.memoizedUpdaters.clear(), Ek(), ga(e, en()), t !== null)
        for (var P = e.onRecoverableError, H = 0; H < t.length; H++) {
          var Y = t[H], we = Y.stack, We = Y.digest;
          P(Y.value, {
            componentStack: we,
            digest: We
          });
        }
      if (Ym) {
        Ym = !1;
        var Pe = b0;
        throw b0 = null, Pe;
      }
      return _r(Ap, Ke) && e.tag !== $l && Jo(), d = e.pendingLanes, _r(d, Ke) ? (Kw(), e === x0 ? Fp++ : (Fp = 0, x0 = e)) : Fp = 0, Wl(), yd(), null;
    }
    function Jo() {
      if (eu !== null) {
        var e = Iu(Ap), t = qy(pi, e), a = Er.transition, i = ca();
        try {
          return Er.transition = null, Dn(t), Ik();
        } finally {
          Dn(i), Er.transition = a;
        }
      }
      return !1;
    }
    function Bk(e) {
      C0.push(e), ps || (ps = !0, L0(Ha, function() {
        return Jo(), null;
      }));
    }
    function Ik() {
      if (eu === null)
        return !1;
      var e = T0;
      T0 = null;
      var t = eu, a = Ap;
      if (eu = null, Ap = G, (Et & (br | Ga)) !== Gn)
        throw new Error("Cannot flush passive effects while already rendering.");
      R0 = !0, Qm = !1, ih(a);
      var i = Et;
      Et |= Ga, uk(t.current), ak(t, t.current, a, e);
      {
        var l = C0;
        C0 = [];
        for (var s = 0; s < l.length; s++) {
          var d = l[s];
          $D(t, d);
        }
      }
      Lu(), mT(t.current, !0), Et = i, Wl(), Qm ? t === qm ? hf++ : (hf = 0, qm = t) : hf = 0, R0 = !1, Qm = !1, Bi(t);
      {
        var h = t.current.stateNode;
        h.effectDuration = 0, h.passiveEffectDuration = 0;
      }
      return !0;
    }
    function pT(e) {
      return vf !== null && vf.has(e);
    }
    function $k(e) {
      vf === null ? vf = /* @__PURE__ */ new Set([e]) : vf.add(e);
    }
    function Wk(e) {
      Ym || (Ym = !0, b0 = e);
    }
    var Yk = Wk;
    function vT(e, t, a) {
      var i = cs(a, t), l = fC(e, i, Ke), s = Ql(e, l, Ke), d = Qr();
      s !== null && (Lo(s, Ke, d), ga(s, d));
    }
    function Qt(e, t, a) {
      if (FD(a), Vp(!1), e.tag === V) {
        vT(e, e, a);
        return;
      }
      var i = null;
      for (i = t; i !== null; ) {
        if (i.tag === V) {
          vT(i, e, a);
          return;
        } else if (i.tag === F) {
          var l = i.type, s = i.stateNode;
          if (typeof l.getDerivedStateFromError == "function" || typeof s.componentDidCatch == "function" && !pT(s)) {
            var d = cs(a, e), h = KS(i, d, Ke), y = Ql(i, h, Ke), b = Qr();
            y !== null && (Lo(y, Ke, b), ga(y, b));
            return;
          }
        }
        i = i.return;
      }
      g(`Internal React error: Attempted to capture a commit phase error inside a detached tree. This indicates a bug in React. Likely causes include deleting the same fiber more than once, committing an already-finished tree, or an inconsistent return pointer.

Error message:

%s`, a);
    }
    function Qk(e, t, a) {
      var i = e.pingCache;
      i !== null && i.delete(t);
      var l = Qr();
      Dd(e, a), nO(e), Yr === e && _o(Kn, a) && (Xn === Mp || Xn === Im && Cc(Kn) && en() - E0 < eT ? vs(e, G) : Wm = lt(Wm, a)), ga(e, l);
    }
    function hT(e, t) {
      t === St && (t = Dk(e));
      var a = Qr(), i = ha(e, t);
      i !== null && (Lo(i, t, a), ga(i, a));
    }
    function qk(e) {
      var t = e.memoizedState, a = St;
      t !== null && (a = t.retryLane), hT(e, a);
    }
    function Gk(e, t) {
      var a = St, i;
      switch (e.tag) {
        case te:
          i = e.stateNode;
          var l = e.memoizedState;
          l !== null && (a = l.retryLane);
          break;
        case Ne:
          i = e.stateNode;
          break;
        default:
          throw new Error("Pinged unknown suspense boundary type. This is probably a bug in React.");
      }
      i !== null && i.delete(t), hT(e, a);
    }
    function Kk(e) {
      return e < 120 ? 120 : e < 480 ? 480 : e < 1080 ? 1080 : e < 1920 ? 1920 : e < 3e3 ? 3e3 : e < 4320 ? 4320 : Tk(e / 1960) * 1960;
    }
    function Xk() {
      if (Fp > Rk)
        throw Fp = 0, x0 = null, new Error("Maximum update depth exceeded. This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. React limits the number of nested updates to prevent infinite loops.");
      hf > wk && (hf = 0, qm = null, g("Maximum update depth exceeded. This can happen when a component calls setState inside useEffect, but useEffect either doesn't have a dependency array, or one of the dependencies changes on every render."));
    }
    function Zk() {
      Ei.flushLegacyContextWarning(), Ei.flushPendingUnsafeLifecycleWarnings();
    }
    function mT(e, t) {
      Ut(e), Jm(e, Dr, yk), t && Jm(e, Co, gk), Jm(e, Dr, hk), t && Jm(e, Co, mk), xn();
    }
    function Jm(e, t, a) {
      for (var i = e, l = null; i !== null; ) {
        var s = i.subtreeFlags & t;
        i !== l && i.child !== null && s !== Ie ? i = i.child : ((i.flags & t) !== Ie && a(i), i.sibling !== null ? i = i.sibling : i = l = i.return);
      }
    }
    var ey = null;
    function yT(e) {
      {
        if ((Et & br) !== Gn || !(e.mode & dt))
          return;
        var t = e.tag;
        if (t !== ne && t !== V && t !== F && t !== z && t !== B && t !== le && t !== J)
          return;
        var a = it(e) || "ReactComponent";
        if (ey !== null) {
          if (ey.has(a))
            return;
          ey.add(a);
        } else
          ey = /* @__PURE__ */ new Set([a]);
        var i = Sn;
        try {
          Ut(e), g("Can't perform a React state update on a component that hasn't mounted yet. This indicates that you have a side-effect in your render function that asynchronously later calls tries to update the component. Move this work to useEffect instead.");
        } finally {
          i ? Ut(e) : xn();
        }
      }
    }
    var N0;
    {
      var Jk = null;
      N0 = function(e, t, a) {
        var i = RT(Jk, t);
        try {
          return NC(e, t, a);
        } catch (s) {
          if (dw() || s !== null && typeof s == "object" && typeof s.then == "function")
            throw s;
          if (im(), Pb(), AC(e, t), RT(t, i), t.mode & Qe && $S(t), bo(null, NC, null, e, t, a), Vy()) {
            var l = od();
            typeof l == "object" && l !== null && l._suppressLogging && typeof s == "object" && s !== null && !s._suppressLogging && (s._suppressLogging = !0);
          }
          throw s;
        }
      };
    }
    var gT = !1, M0;
    M0 = /* @__PURE__ */ new Set();
    function eO(e) {
      if (ea && !Qw())
        switch (e.tag) {
          case z:
          case B:
          case J: {
            var t = hn && it(hn) || "Unknown", a = t;
            if (!M0.has(a)) {
              M0.add(a);
              var i = it(e) || "Unknown";
              g("Cannot update a component (`%s`) while rendering a different component (`%s`). To locate the bad setState() call inside `%s`, follow the stack trace as described in https://reactjs.org/link/setstate-in-render", i, t, t);
            }
            break;
          }
          case F: {
            gT || (g("Cannot update during an existing state transition (such as within `render`). Render methods should be a pure function of props and state."), gT = !0);
            break;
          }
        }
    }
    function jp(e, t) {
      if (In) {
        var a = e.memoizedUpdaters;
        a.forEach(function(i) {
          Od(e, i, t);
        });
      }
    }
    var _0 = {};
    function L0(e, t) {
      {
        var a = ki.current;
        return a !== null ? (a.push(t), _0) : Ks(e, t);
      }
    }
    function ST(e) {
      if (e !== _0)
        return Kv(e);
    }
    function ET() {
      return ki.current !== null;
    }
    function tO(e) {
      {
        if (e.mode & dt) {
          if (!XC())
            return;
        } else if (!Ck() || Et !== Gn || e.tag !== z && e.tag !== B && e.tag !== J)
          return;
        if (ki.current === null) {
          var t = Sn;
          try {
            Ut(e), g(`An update to %s inside a test was not wrapped in act(...).

When testing, code that causes React state updates should be wrapped into act(...):

act(() => {
  /* fire events that update state */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`, it(e));
          } finally {
            t ? Ut(e) : xn();
          }
        }
      }
    }
    function nO(e) {
      e.tag !== $l && XC() && ki.current === null && g(`A suspended resource finished loading inside a test, but the event was not wrapped in act(...).

When testing, code that resolves suspended data should be wrapped into act(...):

act(() => {
  /* finish loading suspended data */
});
/* assert on the output */

This ensures that you're testing the behavior the user would see in the browser. Learn more at https://reactjs.org/link/wrap-tests-with-act`);
    }
    function Vp(e) {
      rT = e;
    }
    var Ka = null, mf = null, rO = function(e) {
      Ka = e;
    };
    function yf(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        return t === void 0 ? e : t.current;
      }
    }
    function z0(e) {
      return yf(e);
    }
    function U0(e) {
      {
        if (Ka === null)
          return e;
        var t = Ka(e);
        if (t === void 0) {
          if (e != null && typeof e.render == "function") {
            var a = yf(e.render);
            if (e.render !== a) {
              var i = {
                $$typeof: al,
                render: a
              };
              return e.displayName !== void 0 && (i.displayName = e.displayName), i;
            }
          }
          return e;
        }
        return t.current;
      }
    }
    function bT(e, t) {
      {
        if (Ka === null)
          return !1;
        var a = e.elementType, i = t.type, l = !1, s = typeof i == "object" && i !== null ? i.$$typeof : null;
        switch (e.tag) {
          case F: {
            typeof i == "function" && (l = !0);
            break;
          }
          case z: {
            (typeof i == "function" || s === dr) && (l = !0);
            break;
          }
          case B: {
            (s === al || s === dr) && (l = !0);
            break;
          }
          case le:
          case J: {
            (s === il || s === dr) && (l = !0);
            break;
          }
          default:
            return !1;
        }
        if (l) {
          var d = Ka(a);
          if (d !== void 0 && d === Ka(i))
            return !0;
        }
        return !1;
      }
    }
    function CT(e) {
      {
        if (Ka === null || typeof WeakSet != "function")
          return;
        mf === null && (mf = /* @__PURE__ */ new WeakSet()), mf.add(e);
      }
    }
    var aO = function(e, t) {
      {
        if (Ka === null)
          return;
        var a = t.staleFamilies, i = t.updatedFamilies;
        Jo(), Zo(function() {
          A0(e.current, i, a);
        });
      }
    }, iO = function(e, t) {
      {
        if (e.context !== _a)
          return;
        Jo(), Zo(function() {
          Bp(t, e, null, null);
        });
      }
    };
    function A0(e, t, a) {
      {
        var i = e.alternate, l = e.child, s = e.sibling, d = e.tag, h = e.type, y = null;
        switch (d) {
          case z:
          case J:
          case F:
            y = h;
            break;
          case B:
            y = h.render;
            break;
        }
        if (Ka === null)
          throw new Error("Expected resolveFamily to be set during hot reload.");
        var b = !1, C = !1;
        if (y !== null) {
          var N = Ka(y);
          N !== void 0 && (a.has(N) ? C = !0 : t.has(N) && (d === F ? C = !0 : b = !0));
        }
        if (mf !== null && (mf.has(e) || i !== null && mf.has(i)) && (C = !0), C && (e._debugNeedsRemount = !0), C || b) {
          var k = ha(e, Ke);
          k !== null && Zn(k, e, Ke, jt);
        }
        l !== null && !C && A0(l, t, a), s !== null && A0(s, t, a);
      }
    }
    var oO = function(e, t) {
      {
        var a = /* @__PURE__ */ new Set(), i = new Set(t.map(function(l) {
          return l.current;
        }));
        return F0(e.current, i, a), a;
      }
    };
    function F0(e, t, a) {
      {
        var i = e.child, l = e.sibling, s = e.tag, d = e.type, h = null;
        switch (s) {
          case z:
          case J:
          case F:
            h = d;
            break;
          case B:
            h = d.render;
            break;
        }
        var y = !1;
        h !== null && t.has(h) && (y = !0), y ? lO(e, a) : i !== null && F0(i, t, a), l !== null && F0(l, t, a);
      }
    }
    function lO(e, t) {
      {
        var a = uO(e, t);
        if (a)
          return;
        for (var i = e; ; ) {
          switch (i.tag) {
            case I:
              t.add(i.stateNode);
              return;
            case q:
              t.add(i.stateNode.containerInfo);
              return;
            case V:
              t.add(i.stateNode.containerInfo);
              return;
          }
          if (i.return === null)
            throw new Error("Expected to reach root first.");
          i = i.return;
        }
      }
    }
    function uO(e, t) {
      for (var a = e, i = !1; ; ) {
        if (a.tag === I)
          i = !0, t.add(a.stateNode);
        else if (a.child !== null) {
          a.child.return = a, a = a.child;
          continue;
        }
        if (a === e)
          return i;
        for (; a.sibling === null; ) {
          if (a.return === null || a.return === e)
            return i;
          a = a.return;
        }
        a.sibling.return = a.return, a = a.sibling;
      }
      return !1;
    }
    var P0;
    {
      P0 = !1;
      try {
        var TT = Object.preventExtensions({});
      } catch {
        P0 = !0;
      }
    }
    function sO(e, t, a, i) {
      this.tag = e, this.key = a, this.elementType = null, this.type = null, this.stateNode = null, this.return = null, this.child = null, this.sibling = null, this.index = 0, this.ref = null, this.pendingProps = t, this.memoizedProps = null, this.updateQueue = null, this.memoizedState = null, this.dependencies = null, this.mode = i, this.flags = Ie, this.subtreeFlags = Ie, this.deletions = null, this.lanes = G, this.childLanes = G, this.alternate = null, this.actualDuration = Number.NaN, this.actualStartTime = Number.NaN, this.selfBaseDuration = Number.NaN, this.treeBaseDuration = Number.NaN, this.actualDuration = 0, this.actualStartTime = -1, this.selfBaseDuration = 0, this.treeBaseDuration = 0, this._debugSource = null, this._debugOwner = null, this._debugNeedsRemount = !1, this._debugHookTypes = null, !P0 && typeof Object.preventExtensions == "function" && Object.preventExtensions(this);
    }
    var La = function(e, t, a, i) {
      return new sO(e, t, a, i);
    };
    function H0(e) {
      var t = e.prototype;
      return !!(t && t.isReactComponent);
    }
    function cO(e) {
      return typeof e == "function" && !H0(e) && e.defaultProps === void 0;
    }
    function fO(e) {
      if (typeof e == "function")
        return H0(e) ? F : z;
      if (e != null) {
        var t = e.$$typeof;
        if (t === al)
          return B;
        if (t === il)
          return le;
      }
      return ne;
    }
    function ms(e, t) {
      var a = e.alternate;
      a === null ? (a = La(e.tag, t, e.key, e.mode), a.elementType = e.elementType, a.type = e.type, a.stateNode = e.stateNode, a._debugSource = e._debugSource, a._debugOwner = e._debugOwner, a._debugHookTypes = e._debugHookTypes, a.alternate = e, e.alternate = a) : (a.pendingProps = t, a.type = e.type, a.flags = Ie, a.subtreeFlags = Ie, a.deletions = null, a.actualDuration = 0, a.actualStartTime = -1), a.flags = e.flags & Bn, a.childLanes = e.childLanes, a.lanes = e.lanes, a.child = e.child, a.memoizedProps = e.memoizedProps, a.memoizedState = e.memoizedState, a.updateQueue = e.updateQueue;
      var i = e.dependencies;
      switch (a.dependencies = i === null ? null : {
        lanes: i.lanes,
        firstContext: i.firstContext
      }, a.sibling = e.sibling, a.index = e.index, a.ref = e.ref, a.selfBaseDuration = e.selfBaseDuration, a.treeBaseDuration = e.treeBaseDuration, a._debugNeedsRemount = e._debugNeedsRemount, a.tag) {
        case ne:
        case z:
        case J:
          a.type = yf(e.type);
          break;
        case F:
          a.type = z0(e.type);
          break;
        case B:
          a.type = U0(e.type);
          break;
      }
      return a;
    }
    function dO(e, t) {
      e.flags &= Bn | It;
      var a = e.alternate;
      if (a === null)
        e.childLanes = G, e.lanes = t, e.child = null, e.subtreeFlags = Ie, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null, e.selfBaseDuration = 0, e.treeBaseDuration = 0;
      else {
        e.childLanes = a.childLanes, e.lanes = a.lanes, e.child = a.child, e.subtreeFlags = Ie, e.deletions = null, e.memoizedProps = a.memoizedProps, e.memoizedState = a.memoizedState, e.updateQueue = a.updateQueue, e.type = a.type;
        var i = a.dependencies;
        e.dependencies = i === null ? null : {
          lanes: i.lanes,
          firstContext: i.firstContext
        }, e.selfBaseDuration = a.selfBaseDuration, e.treeBaseDuration = a.treeBaseDuration;
      }
      return e;
    }
    function pO(e, t, a) {
      var i;
      return e === Xh ? (i = dt, t === !0 && (i |= tn, i |= ua)) : i = Ye, In && (i |= Qe), La(V, null, null, i);
    }
    function j0(e, t, a, i, l, s) {
      var d = ne, h = e;
      if (typeof e == "function")
        H0(e) ? (d = F, h = z0(h)) : h = yf(h);
      else if (typeof e == "string")
        d = I;
      else
        e:
          switch (e) {
            case ei:
              return ru(a.children, l, s, t);
            case rl:
              d = de, l |= tn, (l & dt) !== Ye && (l |= ua);
              break;
            case lu:
              return vO(a, l, s, t);
            case Aa:
              return hO(a, l, s, t);
            case uu:
              return mO(a, l, s, t);
            case kf:
              return xT(a, l, s, t);
            case iv:
            case rv:
            case Sy:
            case Ey:
            case av:
            default: {
              if (typeof e == "object" && e !== null)
                switch (e.$$typeof) {
                  case wf:
                    d = Se;
                    break e;
                  case Df:
                    d = me;
                    break e;
                  case al:
                    d = B, h = U0(h);
                    break e;
                  case il:
                    d = le;
                    break e;
                  case dr:
                    d = ke, h = null;
                    break e;
                }
              var y = "";
              {
                (e === void 0 || typeof e == "object" && e !== null && Object.keys(e).length === 0) && (y += " You likely forgot to export your component from the file it's defined in, or you might have mixed up default and named imports.");
                var b = i ? it(i) : null;
                b && (y += `

Check the render method of \`` + b + "`.");
              }
              throw new Error("Element type is invalid: expected a string (for built-in components) or a class/function (for composite components) " + ("but got: " + (e == null ? e : typeof e) + "." + y));
            }
          }
      var C = La(d, a, t, l);
      return C.elementType = e, C.type = h, C.lanes = s, C._debugOwner = i, C;
    }
    function V0(e, t, a) {
      var i = null;
      i = e._owner;
      var l = e.type, s = e.key, d = e.props, h = j0(l, s, d, i, t, a);
      return h._debugSource = e._source, h._debugOwner = e._owner, h;
    }
    function ru(e, t, a, i) {
      var l = La(pe, e, i, t);
      return l.lanes = a, l;
    }
    function vO(e, t, a, i) {
      typeof e.id != "string" && g('Profiler must specify an "id" of type `string` as a prop. Received the type `%s` instead.', typeof e.id);
      var l = La($, e, i, t | Qe);
      return l.elementType = lu, l.lanes = a, l.stateNode = {
        effectDuration: 0,
        passiveEffectDuration: 0
      }, l;
    }
    function hO(e, t, a, i) {
      var l = La(te, e, i, t);
      return l.elementType = Aa, l.lanes = a, l;
    }
    function mO(e, t, a, i) {
      var l = La(Ne, e, i, t);
      return l.elementType = uu, l.lanes = a, l;
    }
    function xT(e, t, a, i) {
      var l = La(se, e, i, t);
      l.elementType = kf, l.lanes = a;
      var s = {
        isHidden: !1
      };
      return l.stateNode = s, l;
    }
    function B0(e, t, a) {
      var i = La(ee, e, null, t);
      return i.lanes = a, i;
    }
    function yO() {
      var e = La(I, null, null, Ye);
      return e.elementType = "DELETED", e;
    }
    function gO(e) {
      var t = La(Ue, null, null, Ye);
      return t.stateNode = e, t;
    }
    function I0(e, t, a) {
      var i = e.children !== null ? e.children : [], l = La(q, i, e.key, t);
      return l.lanes = a, l.stateNode = {
        containerInfo: e.containerInfo,
        pendingChildren: null,
        // Used by persistent updates
        implementation: e.implementation
      }, l;
    }
    function RT(e, t) {
      return e === null && (e = La(ne, null, null, Ye)), e.tag = t.tag, e.key = t.key, e.elementType = t.elementType, e.type = t.type, e.stateNode = t.stateNode, e.return = t.return, e.child = t.child, e.sibling = t.sibling, e.index = t.index, e.ref = t.ref, e.pendingProps = t.pendingProps, e.memoizedProps = t.memoizedProps, e.updateQueue = t.updateQueue, e.memoizedState = t.memoizedState, e.dependencies = t.dependencies, e.mode = t.mode, e.flags = t.flags, e.subtreeFlags = t.subtreeFlags, e.deletions = t.deletions, e.lanes = t.lanes, e.childLanes = t.childLanes, e.alternate = t.alternate, e.actualDuration = t.actualDuration, e.actualStartTime = t.actualStartTime, e.selfBaseDuration = t.selfBaseDuration, e.treeBaseDuration = t.treeBaseDuration, e._debugSource = t._debugSource, e._debugOwner = t._debugOwner, e._debugNeedsRemount = t._debugNeedsRemount, e._debugHookTypes = t._debugHookTypes, e;
    }
    function SO(e, t, a, i, l) {
      this.tag = t, this.containerInfo = e, this.pendingChildren = null, this.current = null, this.pingCache = null, this.finishedWork = null, this.timeoutHandle = xg, this.context = null, this.pendingContext = null, this.callbackNode = null, this.callbackPriority = St, this.eventTimes = xc(G), this.expirationTimes = xc(jt), this.pendingLanes = G, this.suspendedLanes = G, this.pingedLanes = G, this.expiredLanes = G, this.mutableReadLanes = G, this.finishedLanes = G, this.entangledLanes = G, this.entanglements = xc(G), this.identifierPrefix = i, this.onRecoverableError = l, this.mutableSourceEagerHydrationData = null, this.effectDuration = 0, this.passiveEffectDuration = 0;
      {
        this.memoizedUpdaters = /* @__PURE__ */ new Set();
        for (var s = this.pendingUpdatersLaneMap = [], d = 0; d < Wt; d++)
          s.push(/* @__PURE__ */ new Set());
      }
      switch (t) {
        case Xh:
          this._debugRootType = a ? "hydrateRoot()" : "createRoot()";
          break;
        case $l:
          this._debugRootType = a ? "hydrate()" : "render()";
          break;
      }
    }
    function wT(e, t, a, i, l, s, d, h, y, b) {
      var C = new SO(e, t, a, h, y), N = pO(t, s);
      C.current = N, N.stateNode = C;
      {
        var k = {
          element: i,
          isDehydrated: a,
          cache: null,
          // not enabled yet
          transitions: null,
          pendingSuspenseBoundaries: null
        };
        N.memoizedState = k;
      }
      return Xg(N), C;
    }
    var $0 = "18.2.0";
    function EO(e, t, a) {
      var i = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
      return Jn(i), {
        // This tag allow us to uniquely identify this as a React Portal
        $$typeof: Ta,
        key: i == null ? null : "" + i,
        children: e,
        containerInfo: t,
        implementation: a
      };
    }
    var W0, Y0;
    W0 = !1, Y0 = {};
    function DT(e) {
      if (!e)
        return _a;
      var t = ra(e), a = rw(t);
      if (t.tag === F) {
        var i = t.type;
        if (to(i))
          return JE(t, i, a);
      }
      return a;
    }
    function bO(e, t) {
      {
        var a = ra(e);
        if (a === void 0) {
          if (typeof e.render == "function")
            throw new Error("Unable to find node on an unmounted component.");
          var i = Object.keys(e).join(",");
          throw new Error("Argument appears to not be a ReactComponent. Keys: " + i);
        }
        var l = la(a);
        if (l === null)
          return null;
        if (l.mode & tn) {
          var s = it(a) || "Component";
          if (!Y0[s]) {
            Y0[s] = !0;
            var d = Sn;
            try {
              Ut(l), a.mode & tn ? g("%s is deprecated in StrictMode. %s was passed an instance of %s which is inside StrictMode. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s) : g("%s is deprecated in StrictMode. %s was passed an instance of %s which renders StrictMode children. Instead, add a ref directly to the element you want to reference. Learn more about using refs safely here: https://reactjs.org/link/strict-mode-find-node", t, t, s);
            } finally {
              d ? Ut(d) : xn();
            }
          }
        }
        return l.stateNode;
      }
    }
    function kT(e, t, a, i, l, s, d, h) {
      var y = !1, b = null;
      return wT(e, t, y, b, a, i, l, s, d);
    }
    function OT(e, t, a, i, l, s, d, h, y, b) {
      var C = !0, N = wT(a, i, C, e, l, s, d, h, y);
      N.context = DT(null);
      var k = N.current, P = Qr(), H = tu(k), Y = qo(P, H);
      return Y.callback = t ?? null, Ql(k, Y, H), kk(N, H, P), N;
    }
    function Bp(e, t, a, i) {
      Zv(t, e);
      var l = t.current, s = Qr(), d = tu(l);
      xo(d);
      var h = DT(a);
      t.context === null ? t.context = h : t.pendingContext = h, ea && Sn !== null && !W0 && (W0 = !0, g(`Render methods should be a pure function of props and state; triggering nested component updates from render is not allowed. If necessary, trigger nested updates in componentDidUpdate.

Check the render method of %s.`, it(Sn) || "Unknown"));
      var y = qo(s, d);
      y.payload = {
        element: e
      }, i = i === void 0 ? null : i, i !== null && (typeof i != "function" && g("render(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", i), y.callback = i);
      var b = Ql(l, y, d);
      return b !== null && (Zn(b, l, d, s), cm(b, l, d)), d;
    }
    function ty(e) {
      var t = e.current;
      if (!t.child)
        return null;
      switch (t.child.tag) {
        case I:
          return t.child.stateNode;
        default:
          return t.child.stateNode;
      }
    }
    function CO(e) {
      switch (e.tag) {
        case V: {
          var t = e.stateNode;
          if (kn(t)) {
            var a = $y(t);
            _k(t, a);
          }
          break;
        }
        case te: {
          Zo(function() {
            var l = ha(e, Ke);
            if (l !== null) {
              var s = Qr();
              Zn(l, e, Ke, s);
            }
          });
          var i = Ke;
          Q0(e, i);
          break;
        }
      }
    }
    function NT(e, t) {
      var a = e.memoizedState;
      a !== null && a.dehydrated !== null && (a.retryLane = ch(a.retryLane, t));
    }
    function Q0(e, t) {
      NT(e, t);
      var a = e.alternate;
      a && NT(a, t);
    }
    function TO(e) {
      if (e.tag === te) {
        var t = Cl, a = ha(e, t);
        if (a !== null) {
          var i = Qr();
          Zn(a, e, t, i);
        }
        Q0(e, t);
      }
    }
    function xO(e) {
      if (e.tag === te) {
        var t = tu(e), a = ha(e, t);
        if (a !== null) {
          var i = Qr();
          Zn(a, e, t, i);
        }
        Q0(e, t);
      }
    }
    function MT(e) {
      var t = Gv(e);
      return t === null ? null : t.stateNode;
    }
    var _T = function(e) {
      return null;
    };
    function RO(e) {
      return _T(e);
    }
    var LT = function(e) {
      return !1;
    };
    function wO(e) {
      return LT(e);
    }
    var zT = null, UT = null, AT = null, FT = null, PT = null, HT = null, jT = null, VT = null, BT = null;
    {
      var IT = function(e, t, a) {
        var i = t[a], l = Ln(e) ? e.slice() : vt({}, e);
        return a + 1 === t.length ? (Ln(l) ? l.splice(i, 1) : delete l[i], l) : (l[i] = IT(e[i], t, a + 1), l);
      }, $T = function(e, t) {
        return IT(e, t, 0);
      }, WT = function(e, t, a, i) {
        var l = t[i], s = Ln(e) ? e.slice() : vt({}, e);
        if (i + 1 === t.length) {
          var d = a[i];
          s[d] = s[l], Ln(s) ? s.splice(l, 1) : delete s[l];
        } else
          s[l] = WT(
            // $FlowFixMe number or string is fine here
            e[l],
            t,
            a,
            i + 1
          );
        return s;
      }, YT = function(e, t, a) {
        if (t.length !== a.length) {
          R("copyWithRename() expects paths of the same length");
          return;
        } else
          for (var i = 0; i < a.length - 1; i++)
            if (t[i] !== a[i]) {
              R("copyWithRename() expects paths to be the same except for the deepest key");
              return;
            }
        return WT(e, t, a, 0);
      }, QT = function(e, t, a, i) {
        if (a >= t.length)
          return i;
        var l = t[a], s = Ln(e) ? e.slice() : vt({}, e);
        return s[l] = QT(e[l], t, a + 1, i), s;
      }, qT = function(e, t, a) {
        return QT(e, t, 0, a);
      }, q0 = function(e, t) {
        for (var a = e.memoizedState; a !== null && t > 0; )
          a = a.next, t--;
        return a;
      };
      zT = function(e, t, a, i) {
        var l = q0(e, t);
        if (l !== null) {
          var s = qT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = vt({}, e.memoizedProps);
          var d = ha(e, Ke);
          d !== null && Zn(d, e, Ke, jt);
        }
      }, UT = function(e, t, a) {
        var i = q0(e, t);
        if (i !== null) {
          var l = $T(i.memoizedState, a);
          i.memoizedState = l, i.baseState = l, e.memoizedProps = vt({}, e.memoizedProps);
          var s = ha(e, Ke);
          s !== null && Zn(s, e, Ke, jt);
        }
      }, AT = function(e, t, a, i) {
        var l = q0(e, t);
        if (l !== null) {
          var s = YT(l.memoizedState, a, i);
          l.memoizedState = s, l.baseState = s, e.memoizedProps = vt({}, e.memoizedProps);
          var d = ha(e, Ke);
          d !== null && Zn(d, e, Ke, jt);
        }
      }, FT = function(e, t, a) {
        e.pendingProps = qT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ha(e, Ke);
        i !== null && Zn(i, e, Ke, jt);
      }, PT = function(e, t) {
        e.pendingProps = $T(e.memoizedProps, t), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var a = ha(e, Ke);
        a !== null && Zn(a, e, Ke, jt);
      }, HT = function(e, t, a) {
        e.pendingProps = YT(e.memoizedProps, t, a), e.alternate && (e.alternate.pendingProps = e.pendingProps);
        var i = ha(e, Ke);
        i !== null && Zn(i, e, Ke, jt);
      }, jT = function(e) {
        var t = ha(e, Ke);
        t !== null && Zn(t, e, Ke, jt);
      }, VT = function(e) {
        _T = e;
      }, BT = function(e) {
        LT = e;
      };
    }
    function DO(e) {
      var t = la(e);
      return t === null ? null : t.stateNode;
    }
    function kO(e) {
      return null;
    }
    function OO() {
      return Sn;
    }
    function NO(e) {
      var t = e.findFiberByHostInstance, a = S.ReactCurrentDispatcher;
      return hd({
        bundleType: e.bundleType,
        version: e.version,
        rendererPackageName: e.rendererPackageName,
        rendererConfig: e.rendererConfig,
        overrideHookState: zT,
        overrideHookStateDeletePath: UT,
        overrideHookStateRenamePath: AT,
        overrideProps: FT,
        overridePropsDeletePath: PT,
        overridePropsRenamePath: HT,
        setErrorHandler: VT,
        setSuspenseHandler: BT,
        scheduleUpdate: jT,
        currentDispatcherRef: a,
        findHostInstanceByFiber: DO,
        findFiberByHostInstance: t || kO,
        // React Refresh
        findHostInstancesForRefresh: oO,
        scheduleRefresh: aO,
        scheduleRoot: iO,
        setRefreshHandler: rO,
        // Enables DevTools to append owner stacks to error messages in DEV mode.
        getCurrentFiber: OO,
        // Enables DevTools to detect reconciler version rather than renderer version
        // which may not match for third party renderers.
        reconcilerVersion: $0
      });
    }
    var GT = typeof reportError == "function" ? (
      // In modern browsers, reportError will dispatch an error event,
      // emulating an uncaught JavaScript error.
      reportError
    ) : function(e) {
      console.error(e);
    };
    function G0(e) {
      this._internalRoot = e;
    }
    ny.prototype.render = G0.prototype.render = function(e) {
      var t = this._internalRoot;
      if (t === null)
        throw new Error("Cannot update an unmounted root.");
      {
        typeof arguments[1] == "function" ? g("render(...): does not support the second callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().") : ry(arguments[1]) ? g("You passed a container to the second argument of root.render(...). You don't need to pass it again since you already passed it to create the root.") : typeof arguments[1] < "u" && g("You passed a second argument to root.render(...) but it only accepts one argument.");
        var a = t.containerInfo;
        if (a.nodeType !== En) {
          var i = MT(t.current);
          i && i.parentNode !== a && g("render(...): It looks like the React-rendered content of the root container was removed without using React. This is not supported and will cause errors. Instead, call root.unmount() to empty a root's container.");
        }
      }
      Bp(e, t, null, null);
    }, ny.prototype.unmount = G0.prototype.unmount = function() {
      typeof arguments[0] == "function" && g("unmount(...): does not support a callback argument. To execute a side effect after rendering, declare it in a component body with useEffect().");
      var e = this._internalRoot;
      if (e !== null) {
        this._internalRoot = null;
        var t = e.containerInfo;
        lT() && g("Attempted to synchronously unmount a root while React was already rendering. React cannot finish unmounting the root until the current render has completed, which may lead to a race condition."), Zo(function() {
          Bp(null, e, null, null);
        }), qE(t);
      }
    };
    function MO(e, t) {
      if (!ry(e))
        throw new Error("createRoot(...): Target container is not a DOM element.");
      KT(e);
      var a = !1, i = !1, l = "", s = GT;
      t != null && (t.hydrate ? R("hydrate through createRoot is deprecated. Use ReactDOMClient.hydrateRoot(container, <App />) instead.") : typeof t == "object" && t !== null && t.$$typeof === nl && g(`You passed a JSX element to createRoot. You probably meant to call root.render instead. Example usage:

  let root = createRoot(domContainer);
  root.render(<App />);`), t.unstable_strictMode === !0 && (a = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onRecoverableError !== void 0 && (s = t.onRecoverableError), t.transitionCallbacks !== void 0 && t.transitionCallbacks);
      var d = kT(e, Xh, null, a, i, l, s);
      $h(d.current, e);
      var h = e.nodeType === En ? e.parentNode : e;
      return Kd(h), new G0(d);
    }
    function ny(e) {
      this._internalRoot = e;
    }
    function _O(e) {
      e && gh(e);
    }
    ny.prototype.unstable_scheduleHydration = _O;
    function LO(e, t, a) {
      if (!ry(e))
        throw new Error("hydrateRoot(...): Target container is not a DOM element.");
      KT(e), t === void 0 && g("Must provide initial children as second argument to hydrateRoot. Example usage: hydrateRoot(domContainer, <App />)");
      var i = a ?? null, l = a != null && a.hydratedSources || null, s = !1, d = !1, h = "", y = GT;
      a != null && (a.unstable_strictMode === !0 && (s = !0), a.identifierPrefix !== void 0 && (h = a.identifierPrefix), a.onRecoverableError !== void 0 && (y = a.onRecoverableError));
      var b = OT(t, null, e, Xh, i, s, d, h, y);
      if ($h(b.current, e), Kd(e), l)
        for (var C = 0; C < l.length; C++) {
          var N = l[C];
          Vw(b, N);
        }
      return new ny(b);
    }
    function ry(e) {
      return !!(e && (e.nodeType === xr || e.nodeType === Da || e.nodeType === ho || !Ze));
    }
    function Ip(e) {
      return !!(e && (e.nodeType === xr || e.nodeType === Da || e.nodeType === ho || e.nodeType === En && e.nodeValue === " react-mount-point-unstable "));
    }
    function KT(e) {
      e.nodeType === xr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("createRoot(): Creating roots directly with document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try using a container element created for your app."), lp(e) && (e._reactRootContainer ? g("You are calling ReactDOMClient.createRoot() on a container that was previously passed to ReactDOM.render(). This is not supported.") : g("You are calling ReactDOMClient.createRoot() on a container that has already been passed to createRoot() before. Instead, call root.render() on the existing root instead if you want to update it."));
    }
    var zO = S.ReactCurrentOwner, XT;
    XT = function(e) {
      if (e._reactRootContainer && e.nodeType !== En) {
        var t = MT(e._reactRootContainer.current);
        t && t.parentNode !== e && g("render(...): It looks like the React-rendered content of this container was removed without using React. This is not supported and will cause errors. Instead, call ReactDOM.unmountComponentAtNode to empty a container.");
      }
      var a = !!e._reactRootContainer, i = K0(e), l = !!(i && Bl(i));
      l && !a && g("render(...): Replacing React-rendered children with a new root component. If you intended to update the children of this node, you should instead have the existing children update their state and render the new components instead of calling ReactDOM.render."), e.nodeType === xr && e.tagName && e.tagName.toUpperCase() === "BODY" && g("render(): Rendering components directly into document.body is discouraged, since its children are often manipulated by third-party scripts and browser extensions. This may lead to subtle reconciliation issues. Try rendering into a container element created for your app.");
    };
    function K0(e) {
      return e ? e.nodeType === Da ? e.documentElement : e.firstChild : null;
    }
    function ZT() {
    }
    function UO(e, t, a, i, l) {
      if (l) {
        if (typeof i == "function") {
          var s = i;
          i = function() {
            var k = ty(d);
            s.call(k);
          };
        }
        var d = OT(
          t,
          i,
          e,
          $l,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ZT
        );
        e._reactRootContainer = d, $h(d.current, e);
        var h = e.nodeType === En ? e.parentNode : e;
        return Kd(h), Zo(), d;
      } else {
        for (var y; y = e.lastChild; )
          e.removeChild(y);
        if (typeof i == "function") {
          var b = i;
          i = function() {
            var k = ty(C);
            b.call(k);
          };
        }
        var C = kT(
          e,
          $l,
          null,
          // hydrationCallbacks
          !1,
          // isStrictMode
          !1,
          // concurrentUpdatesByDefaultOverride,
          "",
          // identifierPrefix
          ZT
        );
        e._reactRootContainer = C, $h(C.current, e);
        var N = e.nodeType === En ? e.parentNode : e;
        return Kd(N), Zo(function() {
          Bp(t, C, a, i);
        }), C;
      }
    }
    function AO(e, t) {
      e !== null && typeof e != "function" && g("%s(...): Expected the last optional `callback` argument to be a function. Instead received: %s.", t, e);
    }
    function ay(e, t, a, i, l) {
      XT(a), AO(l === void 0 ? null : l, "render");
      var s = a._reactRootContainer, d;
      if (!s)
        d = UO(a, t, e, l, i);
      else {
        if (d = s, typeof l == "function") {
          var h = l;
          l = function() {
            var y = ty(d);
            h.call(y);
          };
        }
        Bp(t, d, e, l);
      }
      return ty(d);
    }
    function FO(e) {
      {
        var t = zO.current;
        if (t !== null && t.stateNode !== null) {
          var a = t.stateNode._warnedAboutRefsInRender;
          a || g("%s is accessing findDOMNode inside its render(). render() should be a pure function of props and state. It should never access something that requires stale data from the previous render, such as refs. Move this logic to componentDidMount and componentDidUpdate instead.", Pt(t.type) || "A component"), t.stateNode._warnedAboutRefsInRender = !0;
        }
      }
      return e == null ? null : e.nodeType === xr ? e : bO(e, "findDOMNode");
    }
    function PO(e, t, a) {
      if (g("ReactDOM.hydrate is no longer supported in React 18. Use hydrateRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = lp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.hydrate() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call hydrateRoot(container, element)?");
      }
      return ay(null, e, t, !0, a);
    }
    function HO(e, t, a) {
      if (g("ReactDOM.render is no longer supported in React 18. Use createRoot instead. Until you switch to the new API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(t))
        throw new Error("Target container is not a DOM element.");
      {
        var i = lp(t) && t._reactRootContainer === void 0;
        i && g("You are calling ReactDOM.render() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.render(element)?");
      }
      return ay(null, e, t, !1, a);
    }
    function jO(e, t, a, i) {
      if (g("ReactDOM.unstable_renderSubtreeIntoContainer() is no longer supported in React 18. Consider using a portal instead. Until you switch to the createRoot API, your app will behave as if it's running React 17. Learn more: https://reactjs.org/link/switch-to-createroot"), !Ip(a))
        throw new Error("Target container is not a DOM element.");
      if (e == null || !Nu(e))
        throw new Error("parentComponent must be a valid React Component");
      return ay(e, t, a, !1, i);
    }
    function VO(e) {
      if (!Ip(e))
        throw new Error("unmountComponentAtNode(...): Target container is not a DOM element.");
      {
        var t = lp(e) && e._reactRootContainer === void 0;
        t && g("You are calling ReactDOM.unmountComponentAtNode() on a container that was previously passed to ReactDOMClient.createRoot(). This is not supported. Did you mean to call root.unmount()?");
      }
      if (e._reactRootContainer) {
        {
          var a = K0(e), i = a && !Bl(a);
          i && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by another copy of React.");
        }
        return Zo(function() {
          ay(null, null, e, !1, function() {
            e._reactRootContainer = null, qE(e);
          });
        }), !0;
      } else {
        {
          var l = K0(e), s = !!(l && Bl(l)), d = e.nodeType === xr && Ip(e.parentNode) && !!e.parentNode._reactRootContainer;
          s && g("unmountComponentAtNode(): The node you're attempting to unmount was rendered by React and is not a top-level container. %s", d ? "You may have accidentally passed in a React root node instead of its container." : "Instead, have the parent component update its state and rerender in order to remove this component.");
        }
        return !1;
      }
    }
    Oe(CO), dh(TO), Wu(xO), _d(ca), vh(Bu), (typeof Map != "function" || // $FlowIssue Flow incorrectly thinks Map has no prototype
    Map.prototype == null || typeof Map.prototype.forEach != "function" || typeof Set != "function" || // $FlowIssue Flow incorrectly thinks Set has no prototype
    Set.prototype == null || typeof Set.prototype.clear != "function" || typeof Set.prototype.forEach != "function") && g("React depends on Map and Set built-in types. Make sure that you load a polyfill in older browsers. https://reactjs.org/link/react-polyfills"), Yv($x), Ws(D0, Lk, Zo);
    function BO(e, t) {
      var a = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : null;
      if (!ry(t))
        throw new Error("Target container is not a DOM element.");
      return EO(e, t, null, a);
    }
    function IO(e, t, a, i) {
      return jO(e, t, a, i);
    }
    var X0 = {
      usingClientEntryPoint: !1,
      // Keep in sync with ReactTestUtils.js.
      // This is an array for better minification.
      Events: [Bl, Qc, Wh, $s, Du, D0]
    };
    function $O(e, t) {
      return X0.usingClientEntryPoint || g('You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), MO(e, t);
    }
    function WO(e, t, a) {
      return X0.usingClientEntryPoint || g('You are importing hydrateRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".'), LO(e, t, a);
    }
    function YO(e) {
      return lT() && g("flushSync was called from inside a lifecycle method. React cannot flush when React is already rendering. Consider moving this call to a scheduler task or micro task."), Zo(e);
    }
    var QO = NO({
      findFiberByHostInstance: ts,
      bundleType: 1,
      version: $0,
      rendererPackageName: "react-dom"
    });
    if (!QO && Ge && window.top === window.self && (navigator.userAgent.indexOf("Chrome") > -1 && navigator.userAgent.indexOf("Edge") === -1 || navigator.userAgent.indexOf("Firefox") > -1)) {
      var JT = window.location.protocol;
      /^(https?|file):$/.test(JT) && console.info("%cDownload the React DevTools for a better development experience: https://reactjs.org/link/react-devtools" + (JT === "file:" ? `
You might need to use a local HTTP server (instead of file://): https://reactjs.org/link/react-devtools-faq` : ""), "font-weight:bold");
    }
    Ea.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = X0, Ea.createPortal = BO, Ea.createRoot = $O, Ea.findDOMNode = FO, Ea.flushSync = YO, Ea.hydrate = PO, Ea.hydrateRoot = WO, Ea.render = HO, Ea.unmountComponentAtNode = VO, Ea.unstable_batchedUpdates = D0, Ea.unstable_renderSubtreeIntoContainer = IO, Ea.version = $0, typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u" && typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop == "function" && __REACT_DEVTOOLS_GLOBAL_HOOK__.registerInternalModuleStop(new Error());
  }()), Ea;
}
function U1() {
  if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function")) {
    if (process.env.NODE_ENV !== "production")
      throw new Error("^_^");
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(U1);
    } catch (v) {
      console.error(v);
    }
  }
}
process.env.NODE_ENV === "production" ? (U1(), aE.exports = dN()) : aE.exports = pN();
var fE = aE.exports;
const oy = /* @__PURE__ */ KO(fE), s1 = {
  disabled: !1
};
var vN = process.env.NODE_ENV !== "production" ? c.oneOfType([c.number, c.shape({
  enter: c.number,
  exit: c.number,
  appear: c.number
}).isRequired]) : null, sL = process.env.NODE_ENV !== "production" ? c.oneOfType([c.string, c.shape({
  enter: c.string,
  exit: c.string,
  active: c.string
}), c.shape({
  enter: c.string,
  enterDone: c.string,
  enterActive: c.string,
  exit: c.string,
  exitDone: c.string,
  exitActive: c.string
})]) : null, hN = function(m) {
  return m.scrollTop;
}, qp = "unmounted", gs = "exited", Ss = "entering", Ef = "entered", iE = "exiting", tl = /* @__PURE__ */ function(v) {
  nN(m, v);
  function m(x, w) {
    var R;
    R = v.call(this, x, w) || this;
    var g = w, A = g && !g.isMounting ? x.enter : x.appear, z;
    return R.appearStatus = null, x.in ? A ? (z = gs, R.appearStatus = Ss) : z = Ef : x.unmountOnExit || x.mountOnEnter ? z = qp : z = gs, R.state = {
      status: z
    }, R.nextCallback = null, R;
  }
  m.getDerivedStateFromProps = function(w, R) {
    var g = w.in;
    return g && R.status === qp ? {
      status: gs
    } : null;
  };
  var S = m.prototype;
  return S.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, S.componentDidUpdate = function(w) {
    var R = null;
    if (w !== this.props) {
      var g = this.state.status;
      this.props.in ? g !== Ss && g !== Ef && (R = Ss) : (g === Ss || g === Ef) && (R = iE);
    }
    this.updateStatus(!1, R);
  }, S.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, S.getTimeouts = function() {
    var w = this.props.timeout, R, g, A;
    return R = g = A = w, w != null && typeof w != "number" && (R = w.exit, g = w.enter, A = w.appear !== void 0 ? w.appear : g), {
      exit: R,
      enter: g,
      appear: A
    };
  }, S.updateStatus = function(w, R) {
    if (w === void 0 && (w = !1), R !== null)
      if (this.cancelNextCallback(), R === Ss) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var g = this.props.nodeRef ? this.props.nodeRef.current : oy.findDOMNode(this);
          g && hN(g);
        }
        this.performEnter(w);
      } else
        this.performExit();
    else
      this.props.unmountOnExit && this.state.status === gs && this.setState({
        status: qp
      });
  }, S.performEnter = function(w) {
    var R = this, g = this.props.enter, A = this.context ? this.context.isMounting : w, z = this.props.nodeRef ? [A] : [oy.findDOMNode(this), A], F = z[0], ne = z[1], V = this.getTimeouts(), q = A ? V.appear : V.enter;
    if (!w && !g || s1.disabled) {
      this.safeSetState({
        status: Ef
      }, function() {
        R.props.onEntered(F);
      });
      return;
    }
    this.props.onEnter(F, ne), this.safeSetState({
      status: Ss
    }, function() {
      R.props.onEntering(F, ne), R.onTransitionEnd(q, function() {
        R.safeSetState({
          status: Ef
        }, function() {
          R.props.onEntered(F, ne);
        });
      });
    });
  }, S.performExit = function() {
    var w = this, R = this.props.exit, g = this.getTimeouts(), A = this.props.nodeRef ? void 0 : oy.findDOMNode(this);
    if (!R || s1.disabled) {
      this.safeSetState({
        status: gs
      }, function() {
        w.props.onExited(A);
      });
      return;
    }
    this.props.onExit(A), this.safeSetState({
      status: iE
    }, function() {
      w.props.onExiting(A), w.onTransitionEnd(g.exit, function() {
        w.safeSetState({
          status: gs
        }, function() {
          w.props.onExited(A);
        });
      });
    });
  }, S.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, S.safeSetState = function(w, R) {
    R = this.setNextCallback(R), this.setState(w, R);
  }, S.setNextCallback = function(w) {
    var R = this, g = !0;
    return this.nextCallback = function(A) {
      g && (g = !1, R.nextCallback = null, w(A));
    }, this.nextCallback.cancel = function() {
      g = !1;
    }, this.nextCallback;
  }, S.onTransitionEnd = function(w, R) {
    this.setNextCallback(R);
    var g = this.props.nodeRef ? this.props.nodeRef.current : oy.findDOMNode(this), A = w == null && !this.props.addEndListener;
    if (!g || A) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var z = this.props.nodeRef ? [this.nextCallback] : [g, this.nextCallback], F = z[0], ne = z[1];
      this.props.addEndListener(F, ne);
    }
    w != null && setTimeout(this.nextCallback, w);
  }, S.render = function() {
    var w = this.state.status;
    if (w === qp)
      return null;
    var R = this.props, g = R.children;
    R.in, R.mountOnEnter, R.unmountOnExit, R.appear, R.enter, R.exit, R.timeout, R.addEndListener, R.onEnter, R.onEntering, R.onEntered, R.onExit, R.onExiting, R.onExited, R.nodeRef;
    var A = qt(R, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ bf.createElement(w1.Provider, {
        value: null
      }, typeof g == "function" ? g(w, A) : bf.cloneElement(bf.Children.only(g), A))
    );
  }, m;
}(bf.Component);
tl.contextType = w1;
tl.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * A React reference to DOM element that need to transition:
   * https://stackoverflow.com/a/51127130/4671932
   *
   *   - When `nodeRef` prop is used, `node` is not passed to callback functions
   *      (e.g. `onEnter`) because user already has direct access to the node.
   *   - When changing `key` prop of `Transition` in a `TransitionGroup` a new
   *     `nodeRef` need to be provided to `Transition` with changed `key` prop
   *     (see
   *     [test/CSSTransition-test.js](https://github.com/reactjs/react-transition-group/blob/13435f897b3ab71f6e19d724f145596f5910581c/test/CSSTransition-test.js#L362-L437)).
   */
  nodeRef: c.shape({
    current: typeof Element > "u" ? c.any : function(v, m, S, x, w, R) {
      var g = v[m];
      return c.instanceOf(g && "ownerDocument" in g ? g.ownerDocument.defaultView.Element : Element)(v, m, S, x, w, R);
    }
  }),
  /**
   * A `function` child can be used instead of a React element. This function is
   * called with the current transition status (`'entering'`, `'entered'`,
   * `'exiting'`, `'exited'`), which can be used to apply context
   * specific props to a component.
   *
   * ```jsx
   * <Transition in={this.state.in} timeout={150}>
   *   {state => (
   *     <MyComponent className={`fade fade-${state}`} />
   *   )}
   * </Transition>
   * ```
   */
  children: c.oneOfType([c.func.isRequired, c.element.isRequired]).isRequired,
  /**
   * Show the component; triggers the enter or exit states
   */
  in: c.bool,
  /**
   * By default the child component is mounted immediately along with
   * the parent `Transition` component. If you want to "lazy mount" the component on the
   * first `in={true}` you can set `mountOnEnter`. After the first enter transition the component will stay
   * mounted, even on "exited", unless you also specify `unmountOnExit`.
   */
  mountOnEnter: c.bool,
  /**
   * By default the child component stays mounted after it reaches the `'exited'` state.
   * Set `unmountOnExit` if you'd prefer to unmount the component after it finishes exiting.
   */
  unmountOnExit: c.bool,
  /**
   * By default the child component does not perform the enter transition when
   * it first mounts, regardless of the value of `in`. If you want this
   * behavior, set both `appear` and `in` to `true`.
   *
   * > **Note**: there are no special appear states like `appearing`/`appeared`, this prop
   * > only adds an additional enter transition. However, in the
   * > `<CSSTransition>` component that first enter transition does result in
   * > additional `.appear-*` classes, that way you can choose to style it
   * > differently.
   */
  appear: c.bool,
  /**
   * Enable or disable enter transitions.
   */
  enter: c.bool,
  /**
   * Enable or disable exit transitions.
   */
  exit: c.bool,
  /**
   * The duration of the transition, in milliseconds.
   * Required unless `addEndListener` is provided.
   *
   * You may specify a single timeout for all transitions:
   *
   * ```jsx
   * timeout={500}
   * ```
   *
   * or individually:
   *
   * ```jsx
   * timeout={{
   *  appear: 500,
   *  enter: 300,
   *  exit: 500,
   * }}
   * ```
   *
   * - `appear` defaults to the value of `enter`
   * - `enter` defaults to `0`
   * - `exit` defaults to `0`
   *
   * @type {number | { enter?: number, exit?: number, appear?: number }}
   */
  timeout: function(m) {
    var S = vN;
    m.addEndListener || (S = S.isRequired);
    for (var x = arguments.length, w = new Array(x > 1 ? x - 1 : 0), R = 1; R < x; R++)
      w[R - 1] = arguments[R];
    return S.apply(void 0, [m].concat(w));
  },
  /**
   * Add a custom transition end trigger. Called with the transitioning
   * DOM node and a `done` callback. Allows for more fine grained transition end
   * logic. Timeouts are still used as a fallback if provided.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * ```jsx
   * addEndListener={(node, done) => {
   *   // use the css transitionend event to mark the finish of a transition
   *   node.addEventListener('transitionend', done, false);
   * }}
   * ```
   */
  addEndListener: c.func,
  /**
   * Callback fired before the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEnter: c.func,
  /**
   * Callback fired after the "entering" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool)
   */
  onEntering: c.func,
  /**
   * Callback fired after the "entered" status is applied. An extra parameter
   * `isAppearing` is supplied to indicate if the enter stage is occurring on the initial mount
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement, isAppearing: bool) -> void
   */
  onEntered: c.func,
  /**
   * Callback fired before the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExit: c.func,
  /**
   * Callback fired after the "exiting" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed.
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExiting: c.func,
  /**
   * Callback fired after the "exited" status is applied.
   *
   * **Note**: when `nodeRef` prop is passed, `node` is not passed
   *
   * @type Function(node: HtmlElement) -> void
   */
  onExited: c.func
} : {};
function Sf() {
}
tl.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: Sf,
  onEntering: Sf,
  onEntered: Sf,
  onExit: Sf,
  onExiting: Sf,
  onExited: Sf
};
tl.UNMOUNTED = qp;
tl.EXITED = gs;
tl.ENTERING = Ss;
tl.ENTERED = Ef;
tl.EXITING = iE;
const A1 = tl;
function sy(v) {
  return typeof v == "string";
}
function mN(v, m, S) {
  return v === void 0 || sy(v) ? m : K({}, m, {
    ownerState: K({}, m.ownerState, S)
  });
}
function F1(v, m = []) {
  if (v === void 0)
    return {};
  const S = {};
  return Object.keys(v).filter((x) => x.match(/^on[A-Z]/) && typeof v[x] == "function" && !m.includes(x)).forEach((x) => {
    S[x] = v[x];
  }), S;
}
function yN(v, m, S) {
  return typeof v == "function" ? v(m, S) : v;
}
function c1(v) {
  if (v === void 0)
    return {};
  const m = {};
  return Object.keys(v).filter((S) => !(S.match(/^on[A-Z]/) && typeof v[S] == "function")).forEach((S) => {
    m[S] = v[S];
  }), m;
}
function gN(v) {
  const {
    getSlotProps: m,
    additionalProps: S,
    externalSlotProps: x,
    externalForwardedProps: w,
    className: R
  } = v;
  if (!m) {
    const I = cr(w == null ? void 0 : w.className, x == null ? void 0 : x.className, R, S == null ? void 0 : S.className), ee = K({}, S == null ? void 0 : S.style, w == null ? void 0 : w.style, x == null ? void 0 : x.style), pe = K({}, S, w, x);
    return I.length > 0 && (pe.className = I), Object.keys(ee).length > 0 && (pe.style = ee), {
      props: pe,
      internalRef: void 0
    };
  }
  const g = F1(K({}, w, x)), A = c1(x), z = c1(w), F = m(g), ne = cr(F == null ? void 0 : F.className, S == null ? void 0 : S.className, R, w == null ? void 0 : w.className, x == null ? void 0 : x.className), V = K({}, F == null ? void 0 : F.style, S == null ? void 0 : S.style, w == null ? void 0 : w.style, x == null ? void 0 : x.style), q = K({}, F, S, z, A);
  return ne.length > 0 && (q.className = ne), Object.keys(V).length > 0 && (q.style = V), {
    props: q,
    internalRef: F.ref
  };
}
const SN = ["elementType", "externalSlotProps", "ownerState", "skipResolvingSlotProps"];
function Tf(v) {
  var m;
  const {
    elementType: S,
    externalSlotProps: x,
    ownerState: w,
    skipResolvingSlotProps: R = !1
  } = v, g = qt(v, SN), A = R ? {} : yN(x, w), {
    props: z,
    internalRef: F
  } = gN(K({}, g, {
    externalSlotProps: A
  })), ne = Ja(F, A == null ? void 0 : A.ref, (m = v.additionalProps) == null ? void 0 : m.ref);
  return mN(S, K({}, z, {
    ref: ne
  }), w);
}
const P1 = (v) => v.scrollTop;
function cy(v, m) {
  var S, x;
  const {
    timeout: w,
    easing: R,
    style: g = {}
  } = v;
  return {
    duration: (S = g.transitionDuration) != null ? S : typeof w == "number" ? w : w[m.mode] || 0,
    easing: (x = g.transitionTimingFunction) != null ? x : typeof R == "object" ? R[m.mode] : R,
    delay: g.transitionDelay
  };
}
const EN = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"], bN = {
  entering: {
    opacity: 1
  },
  entered: {
    opacity: 1
  }
}, H1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = sE(), w = {
    enter: x.transitions.duration.enteringScreen,
    exit: x.transitions.duration.leavingScreen
  }, {
    addEndListener: R,
    appear: g = !0,
    children: A,
    easing: z,
    in: F,
    onEnter: ne,
    onEntered: V,
    onEntering: q,
    onExit: I,
    onExited: ee,
    onExiting: pe,
    style: de,
    timeout: me = w,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: Se = A1
  } = m, B = qt(m, EN), $ = X.useRef(null), te = Ja($, A.ref, S), le = (ve) => (Ce) => {
    if (ve) {
      const be = $.current;
      Ce === void 0 ? ve(be) : ve(be, Ce);
    }
  }, J = le(q), ke = le((ve, Ce) => {
    P1(ve);
    const be = cy({
      style: de,
      timeout: me,
      easing: z
    }, {
      mode: "enter"
    });
    ve.style.webkitTransition = x.transitions.create("opacity", be), ve.style.transition = x.transitions.create("opacity", be), ne && ne(ve, Ce);
  }), Ve = le(V), Ue = le(pe), Ne = le((ve) => {
    const Ce = cy({
      style: de,
      timeout: me,
      easing: z
    }, {
      mode: "exit"
    });
    ve.style.webkitTransition = x.transitions.create("opacity", Ce), ve.style.transition = x.transitions.create("opacity", Ce), I && I(ve);
  }), Be = le(ee);
  return /* @__PURE__ */ qe(Se, K({
    appear: g,
    in: F,
    nodeRef: $,
    onEnter: ke,
    onEntered: Ve,
    onEntering: J,
    onExit: Ne,
    onExited: Be,
    onExiting: Ue,
    addEndListener: (ve) => {
      R && R($.current, ve);
    },
    timeout: me
  }, B, {
    children: (ve, Ce) => /* @__PURE__ */ X.cloneElement(A, K({
      style: K({
        opacity: 0,
        visibility: ve === "exited" && !F ? "hidden" : void 0
      }, bN[ve], de, A.props.style),
      ref: te
    }, Ce))
  }));
});
process.env.NODE_ENV !== "production" && (H1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: vy.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   * @default {
   *   enter: theme.transitions.duration.enteringScreen,
   *   exit: theme.transitions.duration.leavingScreen,
   * }
   */
  timeout: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
const CN = H1;
function TN(v) {
  const m = Xa(v);
  return m.body === v ? Es(v).innerWidth > m.documentElement.clientWidth : v.scrollHeight > v.clientHeight;
}
function Gp(v, m) {
  m ? v.setAttribute("aria-hidden", "true") : v.removeAttribute("aria-hidden");
}
function f1(v) {
  return parseInt(Es(v).getComputedStyle(v).paddingRight, 10) || 0;
}
function xN(v) {
  const S = ["TEMPLATE", "SCRIPT", "STYLE", "LINK", "MAP", "META", "NOSCRIPT", "PICTURE", "COL", "COLGROUP", "PARAM", "SLOT", "SOURCE", "TRACK"].indexOf(v.tagName) !== -1, x = v.tagName === "INPUT" && v.getAttribute("type") === "hidden";
  return S || x;
}
function d1(v, m, S, x, w) {
  const R = [m, S, ...x];
  [].forEach.call(v.children, (g) => {
    const A = R.indexOf(g) === -1, z = !xN(g);
    A && z && Gp(g, w);
  });
}
function tE(v, m) {
  let S = -1;
  return v.some((x, w) => m(x) ? (S = w, !0) : !1), S;
}
function RN(v, m) {
  const S = [], x = v.container;
  if (!m.disableScrollLock) {
    if (TN(x)) {
      const g = M1(Xa(x));
      S.push({
        value: x.style.paddingRight,
        property: "padding-right",
        el: x
      }), x.style.paddingRight = `${f1(x) + g}px`;
      const A = Xa(x).querySelectorAll(".mui-fixed");
      [].forEach.call(A, (z) => {
        S.push({
          value: z.style.paddingRight,
          property: "padding-right",
          el: z
        }), z.style.paddingRight = `${f1(z) + g}px`;
      });
    }
    let R;
    if (x.parentNode instanceof DocumentFragment)
      R = Xa(x).body;
    else {
      const g = x.parentElement, A = Es(x);
      R = (g == null ? void 0 : g.nodeName) === "HTML" && A.getComputedStyle(g).overflowY === "scroll" ? g : x;
    }
    S.push({
      value: R.style.overflow,
      property: "overflow",
      el: R
    }, {
      value: R.style.overflowX,
      property: "overflow-x",
      el: R
    }, {
      value: R.style.overflowY,
      property: "overflow-y",
      el: R
    }), R.style.overflow = "hidden";
  }
  return () => {
    S.forEach(({
      value: R,
      el: g,
      property: A
    }) => {
      R ? g.style.setProperty(A, R) : g.style.removeProperty(A);
    });
  };
}
function wN(v) {
  const m = [];
  return [].forEach.call(v.children, (S) => {
    S.getAttribute("aria-hidden") === "true" && m.push(S);
  }), m;
}
class DN {
  constructor() {
    this.containers = void 0, this.modals = void 0, this.modals = [], this.containers = [];
  }
  add(m, S) {
    let x = this.modals.indexOf(m);
    if (x !== -1)
      return x;
    x = this.modals.length, this.modals.push(m), m.modalRef && Gp(m.modalRef, !1);
    const w = wN(S);
    d1(S, m.mount, m.modalRef, w, !0);
    const R = tE(this.containers, (g) => g.container === S);
    return R !== -1 ? (this.containers[R].modals.push(m), x) : (this.containers.push({
      modals: [m],
      container: S,
      restore: null,
      hiddenSiblings: w
    }), x);
  }
  mount(m, S) {
    const x = tE(this.containers, (R) => R.modals.indexOf(m) !== -1), w = this.containers[x];
    w.restore || (w.restore = RN(w, S));
  }
  remove(m, S = !0) {
    const x = this.modals.indexOf(m);
    if (x === -1)
      return x;
    const w = tE(this.containers, (g) => g.modals.indexOf(m) !== -1), R = this.containers[w];
    if (R.modals.splice(R.modals.indexOf(m), 1), this.modals.splice(x, 1), R.modals.length === 0)
      R.restore && R.restore(), m.modalRef && Gp(m.modalRef, S), d1(R.container, m.mount, m.modalRef, R.hiddenSiblings, !1), this.containers.splice(w, 1);
    else {
      const g = R.modals[R.modals.length - 1];
      g.modalRef && Gp(g.modalRef, !1);
    }
    return x;
  }
  isTopModal(m) {
    return this.modals.length > 0 && this.modals[this.modals.length - 1] === m;
  }
}
function kN(v) {
  return typeof v == "function" ? v() : v;
}
function ON(v) {
  return v ? v.props.hasOwnProperty("in") : !1;
}
const NN = new DN();
function MN(v) {
  const {
    container: m,
    disableEscapeKeyDown: S = !1,
    disableScrollLock: x = !1,
    // @ts-ignore internal logic - Base UI supports the manager as a prop too
    manager: w = NN,
    closeAfterTransition: R = !1,
    onTransitionEnter: g,
    onTransitionExited: A,
    children: z,
    onClose: F,
    open: ne,
    rootRef: V
  } = v, q = X.useRef({}), I = X.useRef(null), ee = X.useRef(null), pe = Ja(ee, V), [de, me] = X.useState(!ne), Se = ON(z);
  let B = !0;
  (v["aria-hidden"] === "false" || v["aria-hidden"] === !1) && (B = !1);
  const $ = () => Xa(I.current), te = () => (q.current.modalRef = ee.current, q.current.mount = I.current, q.current), le = () => {
    w.mount(te(), {
      disableScrollLock: x
    }), ee.current && (ee.current.scrollTop = 0);
  }, J = n1(() => {
    const be = kN(m) || $().body;
    w.add(te(), be), ee.current && le();
  }), ke = X.useCallback(() => w.isTopModal(te()), [w]), Ve = n1((be) => {
    I.current = be, be && (ne && ke() ? le() : ee.current && Gp(ee.current, B));
  }), Ue = X.useCallback(() => {
    w.remove(te(), B);
  }, [B, w]);
  X.useEffect(() => () => {
    Ue();
  }, [Ue]), X.useEffect(() => {
    ne ? J() : (!Se || !R) && Ue();
  }, [ne, Ue, Se, R, J]);
  const Ne = (be) => (Ae) => {
    var W;
    (W = be.onKeyDown) == null || W.call(be, Ae), !(Ae.key !== "Escape" || !ke()) && (S || (Ae.stopPropagation(), F && F(Ae, "escapeKeyDown")));
  }, Be = (be) => (Ae) => {
    var W;
    (W = be.onClick) == null || W.call(be, Ae), Ae.target === Ae.currentTarget && F && F(Ae, "backdropClick");
  };
  return {
    getRootProps: (be = {}) => {
      const Ae = F1(v);
      delete Ae.onTransitionEnter, delete Ae.onTransitionExited;
      const W = K({}, Ae, be);
      return K({
        role: "presentation"
      }, W, {
        onKeyDown: Ne(W),
        ref: pe
      });
    },
    getBackdropProps: (be = {}) => {
      const Ae = be;
      return K({
        "aria-hidden": !0
      }, Ae, {
        onClick: Be(Ae),
        open: ne
      });
    },
    getTransitionProps: () => {
      const be = () => {
        me(!1), g && g();
      }, Ae = () => {
        me(!0), A && A(), R && Ue();
      };
      return {
        onEnter: t1(be, z == null ? void 0 : z.props.onEnter),
        onExited: t1(Ae, z == null ? void 0 : z.props.onExited)
      };
    },
    rootRef: pe,
    portalRef: Ve,
    isTopModal: ke,
    exited: de,
    hasTransition: Se
  };
}
const _N = ["input", "select", "textarea", "a[href]", "button", "[tabindex]", "audio[controls]", "video[controls]", '[contenteditable]:not([contenteditable="false"])'].join(",");
function LN(v) {
  const m = parseInt(v.getAttribute("tabindex") || "", 10);
  return Number.isNaN(m) ? v.contentEditable === "true" || (v.nodeName === "AUDIO" || v.nodeName === "VIDEO" || v.nodeName === "DETAILS") && v.getAttribute("tabindex") === null ? 0 : v.tabIndex : m;
}
function zN(v) {
  if (v.tagName !== "INPUT" || v.type !== "radio" || !v.name)
    return !1;
  const m = (x) => v.ownerDocument.querySelector(`input[type="radio"]${x}`);
  let S = m(`[name="${v.name}"]:checked`);
  return S || (S = m(`[name="${v.name}"]`)), S !== v;
}
function UN(v) {
  return !(v.disabled || v.tagName === "INPUT" && v.type === "hidden" || zN(v));
}
function AN(v) {
  const m = [], S = [];
  return Array.from(v.querySelectorAll(_N)).forEach((x, w) => {
    const R = LN(x);
    R === -1 || !UN(x) || (R === 0 ? m.push(x) : S.push({
      documentOrder: w,
      tabIndex: R,
      node: x
    }));
  }), S.sort((x, w) => x.tabIndex === w.tabIndex ? x.documentOrder - w.documentOrder : x.tabIndex - w.tabIndex).map((x) => x.node).concat(m);
}
function FN() {
  return !0;
}
function fy(v) {
  const {
    children: m,
    disableAutoFocus: S = !1,
    disableEnforceFocus: x = !1,
    disableRestoreFocus: w = !1,
    getTabbable: R = AN,
    isEnabled: g = FN,
    open: A
  } = v, z = X.useRef(!1), F = X.useRef(null), ne = X.useRef(null), V = X.useRef(null), q = X.useRef(null), I = X.useRef(!1), ee = X.useRef(null), pe = Ja(m.ref, ee), de = X.useRef(null);
  X.useEffect(() => {
    !A || !ee.current || (I.current = !S);
  }, [S, A]), X.useEffect(() => {
    if (!A || !ee.current)
      return;
    const B = Xa(ee.current);
    return ee.current.contains(B.activeElement) || (ee.current.hasAttribute("tabIndex") || (process.env.NODE_ENV !== "production" && console.error(["MUI: The modal content node does not accept focus.", 'For the benefit of assistive technologies, the tabIndex of the node is being set to "-1".'].join(`
`)), ee.current.setAttribute("tabIndex", "-1")), I.current && ee.current.focus()), () => {
      w || (V.current && V.current.focus && (z.current = !0, V.current.focus()), V.current = null);
    };
  }, [A]), X.useEffect(() => {
    if (!A || !ee.current)
      return;
    const B = Xa(ee.current), $ = (J) => {
      de.current = J, !(x || !g() || J.key !== "Tab") && B.activeElement === ee.current && J.shiftKey && (z.current = !0, ne.current && ne.current.focus());
    }, te = () => {
      const J = ee.current;
      if (J === null)
        return;
      if (!B.hasFocus() || !g() || z.current) {
        z.current = !1;
        return;
      }
      if (J.contains(B.activeElement) || x && B.activeElement !== F.current && B.activeElement !== ne.current)
        return;
      if (B.activeElement !== q.current)
        q.current = null;
      else if (q.current !== null)
        return;
      if (!I.current)
        return;
      let ke = [];
      if ((B.activeElement === F.current || B.activeElement === ne.current) && (ke = R(ee.current)), ke.length > 0) {
        var Ve, Ue;
        const Ne = !!((Ve = de.current) != null && Ve.shiftKey && ((Ue = de.current) == null ? void 0 : Ue.key) === "Tab"), Be = ke[0], se = ke[ke.length - 1];
        typeof Be != "string" && typeof se != "string" && (Ne ? se.focus() : Be.focus());
      } else
        J.focus();
    };
    B.addEventListener("focusin", te), B.addEventListener("keydown", $, !0);
    const le = setInterval(() => {
      B.activeElement && B.activeElement.tagName === "BODY" && te();
    }, 50);
    return () => {
      clearInterval(le), B.removeEventListener("focusin", te), B.removeEventListener("keydown", $, !0);
    };
  }, [S, x, w, g, A, R]);
  const me = (B) => {
    V.current === null && (V.current = B.relatedTarget), I.current = !0, q.current = B.target;
    const $ = m.props.onFocus;
    $ && $(B);
  }, Se = (B) => {
    V.current === null && (V.current = B.relatedTarget), I.current = !0;
  };
  return /* @__PURE__ */ Za(X.Fragment, {
    children: [/* @__PURE__ */ qe("div", {
      tabIndex: A ? 0 : -1,
      onFocus: Se,
      ref: F,
      "data-testid": "sentinelStart"
    }), /* @__PURE__ */ X.cloneElement(m, {
      ref: pe,
      onFocus: me
    }), /* @__PURE__ */ qe("div", {
      tabIndex: A ? 0 : -1,
      onFocus: Se,
      ref: ne,
      "data-testid": "sentinelEnd"
    })]
  });
}
process.env.NODE_ENV !== "production" && (fy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * A single child content element.
   */
  children: vy,
  /**
   * If `true`, the focus trap will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any focus trap children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the focus trap will not prevent focus from leaving the focus trap while open.
   *
   * Generally this should never be set to `true` as it makes the focus trap less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, the focus trap will not restore focus to previously focused element once
   * focus trap is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Returns an array of ordered tabbable nodes (i.e. in tab order) within the root.
   * For instance, you can provide the "tabbable" npm dependency.
   * @param {HTMLElement} root
   */
  getTabbable: c.func,
  /**
   * This prop extends the `open` prop.
   * It allows to toggle the open state without having to wait for a rerender when changing the `open` prop.
   * This prop should be memoized.
   * It can be used to support multiple focus trap mounted at the same time.
   * @default function defaultIsEnabled(): boolean {
   *   return true;
   * }
   */
  isEnabled: c.func,
  /**
   * If `true`, focus is locked.
   */
  open: c.bool.isRequired
});
process.env.NODE_ENV !== "production" && (fy["propTypes"] = N1(fy.propTypes));
function PN(v) {
  return typeof v == "function" ? v() : v;
}
const dy = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const {
    children: x,
    container: w,
    disablePortal: R = !1
  } = m, [g, A] = X.useState(null), z = Ja(/* @__PURE__ */ X.isValidElement(x) ? x.ref : null, S);
  if (Cf(() => {
    R || A(PN(w) || document.body);
  }, [w, R]), Cf(() => {
    if (g && !R)
      return r1(S, g), () => {
        r1(S, null);
      };
  }, [S, g, R]), R) {
    if (/* @__PURE__ */ X.isValidElement(x)) {
      const F = {
        ref: z
      };
      return /* @__PURE__ */ X.cloneElement(x, F);
    }
    return /* @__PURE__ */ qe(X.Fragment, {
      children: x
    });
  }
  return /* @__PURE__ */ qe(X.Fragment, {
    children: g && /* @__PURE__ */ fE.createPortal(x, g)
  });
});
process.env.NODE_ENV !== "production" && (dy.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * The children to render into the `container`.
   */
  children: c.node,
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Xp, c.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool
});
process.env.NODE_ENV !== "production" && (dy["propTypes"] = N1(dy.propTypes));
const HN = ["onChange", "maxRows", "minRows", "style", "value"];
function ly(v) {
  return parseInt(v, 10) || 0;
}
const jN = {
  shadow: {
    // Visibility needed to hide the extra text area on iPads
    visibility: "hidden",
    // Remove from the content flow
    position: "absolute",
    // Ignore the scrollbar width
    overflow: "hidden",
    height: 0,
    top: 0,
    left: 0,
    // Create a new layer, increase the isolation of the computed values
    transform: "translateZ(0)"
  }
};
function p1(v) {
  return v == null || Object.keys(v).length === 0 || v.outerHeightStyle === 0 && !v.overflow;
}
const j1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const {
    onChange: x,
    maxRows: w,
    minRows: R = 1,
    style: g,
    value: A
  } = m, z = qt(m, HN), {
    current: F
  } = X.useRef(A != null), ne = X.useRef(null), V = Ja(S, ne), q = X.useRef(null), I = X.useRef(0), [ee, pe] = X.useState({
    outerHeightStyle: 0
  }), de = X.useCallback(() => {
    const $ = ne.current, le = Es($).getComputedStyle($);
    if (le.width === "0px")
      return {
        outerHeightStyle: 0
      };
    const J = q.current;
    J.style.width = le.width, J.value = $.value || m.placeholder || "x", J.value.slice(-1) === `
` && (J.value += " ");
    const ke = le.boxSizing, Ve = ly(le.paddingBottom) + ly(le.paddingTop), Ue = ly(le.borderBottomWidth) + ly(le.borderTopWidth), Ne = J.scrollHeight;
    J.value = "x";
    const Be = J.scrollHeight;
    let se = Ne;
    R && (se = Math.max(Number(R) * Be, se)), w && (se = Math.min(Number(w) * Be, se)), se = Math.max(se, Be);
    const ve = se + (ke === "border-box" ? Ve + Ue : 0), Ce = Math.abs(se - Ne) <= 1;
    return {
      outerHeightStyle: ve,
      overflow: Ce
    };
  }, [w, R, m.placeholder]), me = ($, te) => {
    const {
      outerHeightStyle: le,
      overflow: J
    } = te;
    return I.current < 20 && (le > 0 && Math.abs(($.outerHeightStyle || 0) - le) > 1 || $.overflow !== J) ? (I.current += 1, {
      overflow: J,
      outerHeightStyle: le
    }) : (process.env.NODE_ENV !== "production" && I.current === 20 && console.error(["MUI: Too many re-renders. The layout is unstable.", "TextareaAutosize limits the number of renders to prevent an infinite loop."].join(`
`)), $);
  }, Se = X.useCallback(() => {
    const $ = de();
    p1($) || pe((te) => me(te, $));
  }, [de]);
  Cf(() => {
    const $ = () => {
      const Be = de();
      p1(Be) || fE.flushSync(() => {
        pe((se) => me(se, Be));
      });
    }, te = () => {
      I.current = 0, $();
    };
    let le;
    const J = () => {
      cancelAnimationFrame(le), le = requestAnimationFrame(() => {
        te();
      });
    }, ke = x1(te), Ve = ne.current, Ue = Es(Ve);
    Ue.addEventListener("resize", ke);
    let Ne;
    return typeof ResizeObserver < "u" && (Ne = new ResizeObserver(process.env.NODE_ENV === "test" ? J : te), Ne.observe(Ve)), () => {
      ke.clear(), cancelAnimationFrame(le), Ue.removeEventListener("resize", ke), Ne && Ne.disconnect();
    };
  }, [de]), Cf(() => {
    Se();
  }), X.useEffect(() => {
    I.current = 0;
  }, [A]);
  const B = ($) => {
    I.current = 0, F || Se(), x && x($);
  };
  return /* @__PURE__ */ Za(X.Fragment, {
    children: [/* @__PURE__ */ qe("textarea", K({
      value: A,
      onChange: B,
      ref: V,
      rows: R,
      style: K({
        height: ee.outerHeightStyle,
        // Need a large enough difference to allow scrolling.
        // This prevents infinite rendering loop.
        overflow: ee.overflow ? "hidden" : void 0
      }, g)
    }, z)), /* @__PURE__ */ qe("textarea", {
      "aria-hidden": !0,
      className: m.className,
      readOnly: !0,
      ref: q,
      tabIndex: -1,
      style: K({}, jN.shadow, g, {
        paddingTop: 0,
        paddingBottom: 0
      })
    })]
  });
});
process.env.NODE_ENV !== "production" && (j1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  className: c.string,
  /**
   * Maximum number of rows to display.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display.
   * @default 1
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * @ignore
   */
  onChange: c.func,
  /**
   * @ignore
   */
  placeholder: c.string,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * @ignore
   */
  value: c.oneOfType([c.arrayOf(c.string), c.number, c.string])
});
function VN(v) {
  return Kr("MuiBackdrop", v);
}
Xr("MuiBackdrop", ["root", "invisible"]);
const BN = ["children", "className", "component", "components", "componentsProps", "invisible", "open", "slotProps", "slots", "TransitionComponent", "transitionDuration"], IN = (v) => {
  const {
    classes: m,
    invisible: S
  } = v;
  return Zr({
    root: ["root", S && "invisible"]
  }, VN, m);
}, $N = kt("div", {
  name: "MuiBackdrop",
  slot: "Root",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [m.root, S.invisible && m.invisible];
  }
})(({
  ownerState: v
}) => K({
  position: "fixed",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  right: 0,
  bottom: 0,
  top: 0,
  left: 0,
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  WebkitTapHighlightColor: "transparent"
}, v.invisible && {
  backgroundColor: "transparent"
})), V1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w, R;
  const g = ba({
    props: m,
    name: "MuiBackdrop"
  }), {
    children: A,
    className: z,
    component: F = "div",
    components: ne = {},
    componentsProps: V = {},
    invisible: q = !1,
    open: I,
    slotProps: ee = {},
    slots: pe = {},
    TransitionComponent: de = CN,
    transitionDuration: me
  } = g, Se = qt(g, BN), B = K({}, g, {
    component: F,
    invisible: q
  }), $ = IN(B), te = (x = ee.root) != null ? x : V.root;
  return /* @__PURE__ */ qe(de, K({
    in: I,
    timeout: me
  }, Se, {
    children: /* @__PURE__ */ qe($N, K({
      "aria-hidden": !0
    }, te, {
      as: (w = (R = pe.root) != null ? R : ne.Root) != null ? w : F,
      className: cr($.root, z, te == null ? void 0 : te.className),
      ownerState: K({}, B, te == null ? void 0 : te.ownerState),
      classes: $,
      ref: S,
      children: A
    }))
  }));
});
process.env.NODE_ENV !== "production" && (V1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    root: c.object
  }),
  /**
   * If `true`, the backdrop is invisible.
   * It can be used when rendering a popover or a custom select component.
   * @default false
   */
  invisible: c.bool,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Fade
   */
  TransitionComponent: c.elementType,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   */
  transitionDuration: c.oneOfType([c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
const WN = V1;
function YN(v) {
  return Kr("MuiModal", v);
}
Xr("MuiModal", ["root", "hidden", "backdrop"]);
const QN = ["BackdropComponent", "BackdropProps", "classes", "className", "closeAfterTransition", "children", "container", "component", "components", "componentsProps", "disableAutoFocus", "disableEnforceFocus", "disableEscapeKeyDown", "disablePortal", "disableRestoreFocus", "disableScrollLock", "hideBackdrop", "keepMounted", "onBackdropClick", "onClose", "onTransitionEnter", "onTransitionExited", "open", "slotProps", "slots", "theme"], qN = (v) => {
  const {
    open: m,
    exited: S,
    classes: x
  } = v;
  return Zr({
    root: ["root", !m && S && "hidden"],
    backdrop: ["backdrop"]
  }, YN, x);
}, GN = kt("div", {
  name: "MuiModal",
  slot: "Root",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [m.root, !S.open && S.exited && m.hidden];
  }
})(({
  theme: v,
  ownerState: m
}) => K({
  position: "fixed",
  zIndex: (v.vars || v).zIndex.modal,
  right: 0,
  bottom: 0,
  top: 0,
  left: 0
}, !m.open && m.exited && {
  visibility: "hidden"
})), KN = kt(WN, {
  name: "MuiModal",
  slot: "Backdrop",
  overridesResolver: (v, m) => m.backdrop
})({
  zIndex: -1
}), B1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w, R, g, A, z;
  const F = ba({
    name: "MuiModal",
    props: m
  }), {
    BackdropComponent: ne = KN,
    BackdropProps: V,
    className: q,
    closeAfterTransition: I = !1,
    children: ee,
    container: pe,
    component: de,
    components: me = {},
    componentsProps: Se = {},
    disableAutoFocus: B = !1,
    disableEnforceFocus: $ = !1,
    disableEscapeKeyDown: te = !1,
    disablePortal: le = !1,
    disableRestoreFocus: J = !1,
    disableScrollLock: ke = !1,
    hideBackdrop: Ve = !1,
    keepMounted: Ue = !1,
    onBackdropClick: Ne,
    open: Be,
    slotProps: se,
    slots: ve
    // eslint-disable-next-line react/prop-types
  } = F, Ce = qt(F, QN), be = K({}, F, {
    closeAfterTransition: I,
    disableAutoFocus: B,
    disableEnforceFocus: $,
    disableEscapeKeyDown: te,
    disablePortal: le,
    disableRestoreFocus: J,
    disableScrollLock: ke,
    hideBackdrop: Ve,
    keepMounted: Ue
  }), {
    getRootProps: Ae,
    getBackdropProps: W,
    getTransitionProps: fe,
    portalRef: ue,
    isTopModal: ut,
    exited: Ze,
    hasTransition: gt
  } = MN(K({}, be, {
    rootRef: S
  })), st = K({}, be, {
    exited: Ze
  }), _t = qN(st), yt = {};
  if (ee.props.tabIndex === void 0 && (yt.tabIndex = "-1"), gt) {
    const {
      onEnter: Ge,
      onExited: tt
    } = fe();
    yt.onEnter = Ge, yt.onExited = tt;
  }
  const dn = (x = (w = ve == null ? void 0 : ve.root) != null ? w : me.Root) != null ? x : GN, Bt = (R = (g = ve == null ? void 0 : ve.backdrop) != null ? g : me.Backdrop) != null ? R : ne, an = (A = se == null ? void 0 : se.root) != null ? A : Se.root, Mn = (z = se == null ? void 0 : se.backdrop) != null ? z : Se.backdrop, at = Tf({
    elementType: dn,
    externalSlotProps: an,
    externalForwardedProps: Ce,
    getSlotProps: Ae,
    additionalProps: {
      ref: S,
      as: de
    },
    ownerState: st,
    className: cr(q, an == null ? void 0 : an.className, _t == null ? void 0 : _t.root, !st.open && st.exited && (_t == null ? void 0 : _t.hidden))
  }), wt = Tf({
    elementType: Bt,
    externalSlotProps: Mn,
    additionalProps: V,
    getSlotProps: (Ge) => W(K({}, Ge, {
      onClick: (tt) => {
        Ne && Ne(tt), Ge != null && Ge.onClick && Ge.onClick(tt);
      }
    })),
    className: cr(Mn == null ? void 0 : Mn.className, V == null ? void 0 : V.className, _t == null ? void 0 : _t.backdrop),
    ownerState: st
  });
  return !Ue && !Be && (!gt || Ze) ? null : /* @__PURE__ */ qe(dy, {
    ref: ue,
    container: pe,
    disablePortal: le,
    children: /* @__PURE__ */ Za(dn, K({}, at, {
      children: [!Ve && ne ? /* @__PURE__ */ qe(Bt, K({}, wt)) : null, /* @__PURE__ */ qe(fy, {
        disableEnforceFocus: $,
        disableAutoFocus: B,
        disableRestoreFocus: J,
        isEnabled: ut,
        open: Be,
        children: /* @__PURE__ */ X.cloneElement(ee, yt)
      })]
    }))
  });
});
process.env.NODE_ENV !== "production" && (B1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A backdrop component. This prop enables custom backdrop rendering.
   * @deprecated Use `slots.backdrop` instead. While this prop currently works, it will be removed in the next major version.
   * Use the `slots.backdrop` prop to make your application ready for the next version of Material UI.
   * @default styled(Backdrop, {
   *   name: 'MuiModal',
   *   slot: 'Backdrop',
   *   overridesResolver: (props, styles) => {
   *     return styles.backdrop;
   *   },
   * })({
   *   zIndex: -1,
   * })
   */
  BackdropComponent: c.elementType,
  /**
   * Props applied to the [`Backdrop`](/material-ui/api/backdrop/) element.
   * @deprecated Use `slotProps.backdrop` instead.
   */
  BackdropProps: c.object,
  /**
   * A single child content element.
   */
  children: vy.isRequired,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When set to true the Modal waits until a nested Transition is completed before closing.
   * @default false
   */
  closeAfterTransition: c.bool,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Backdrop: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Xp, c.func]),
  /**
   * If `true`, the modal will not automatically shift focus to itself when it opens, and
   * replace it to the last focused element when it closes.
   * This also works correctly with any modal children that have the `disableAutoFocus` prop.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableAutoFocus: c.bool,
  /**
   * If `true`, the modal will not prevent focus from leaving the modal while open.
   *
   * Generally this should never be set to `true` as it makes the modal less
   * accessible to assistive technologies, like screen readers.
   * @default false
   */
  disableEnforceFocus: c.bool,
  /**
   * If `true`, hitting escape will not fire the `onClose` callback.
   * @default false
   */
  disableEscapeKeyDown: c.bool,
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: c.bool,
  /**
   * If `true`, the modal will not restore focus to previously focused element once
   * modal is hidden or unmounted.
   * @default false
   */
  disableRestoreFocus: c.bool,
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * If `true`, the backdrop is not rendered.
   * @default false
   */
  hideBackdrop: c.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Modal.
   * @default false
   */
  keepMounted: c.bool,
  /**
   * Callback fired when the backdrop is clicked.
   * @deprecated Use the `onClose` prop with the `reason` argument to handle the `backdropClick` events.
   */
  onBackdropClick: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`.
   */
  onClose: c.func,
  /**
   * A function called when a transition enters.
   */
  onTransitionEnter: c.func,
  /**
   * A function called when a transition has exited.
   */
  onTransitionExited: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * The props used for each slot inside the Modal.
   * @default {}
   */
  slotProps: c.shape({
    backdrop: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside the Modal.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: c.shape({
    backdrop: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
const XN = B1, ZN = ["addEndListener", "appear", "children", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "style", "timeout", "TransitionComponent"];
function oE(v) {
  return `scale(${v}, ${v ** 2})`;
}
const JN = {
  entering: {
    opacity: 1,
    transform: oE(1)
  },
  entered: {
    opacity: 1,
    transform: "none"
  }
}, nE = typeof navigator < "u" && /^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent) && /(os |version\/)15(.|_)4/i.test(navigator.userAgent), dE = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const {
    addEndListener: x,
    appear: w = !0,
    children: R,
    easing: g,
    in: A,
    onEnter: z,
    onEntered: F,
    onEntering: ne,
    onExit: V,
    onExited: q,
    onExiting: I,
    style: ee,
    timeout: pe = "auto",
    // eslint-disable-next-line react/prop-types
    TransitionComponent: de = A1
  } = m, me = qt(m, ZN), Se = X.useRef(), B = X.useRef(), $ = sE(), te = X.useRef(null), le = Ja(te, R.ref, S), J = (Ce) => (be) => {
    if (Ce) {
      const Ae = te.current;
      be === void 0 ? Ce(Ae) : Ce(Ae, be);
    }
  }, ke = J(ne), Ve = J((Ce, be) => {
    P1(Ce);
    const {
      duration: Ae,
      delay: W,
      easing: fe
    } = cy({
      style: ee,
      timeout: pe,
      easing: g
    }, {
      mode: "enter"
    });
    let ue;
    pe === "auto" ? (ue = $.transitions.getAutoHeightDuration(Ce.clientHeight), B.current = ue) : ue = Ae, Ce.style.transition = [$.transitions.create("opacity", {
      duration: ue,
      delay: W
    }), $.transitions.create("transform", {
      duration: nE ? ue : ue * 0.666,
      delay: W,
      easing: fe
    })].join(","), z && z(Ce, be);
  }), Ue = J(F), Ne = J(I), Be = J((Ce) => {
    const {
      duration: be,
      delay: Ae,
      easing: W
    } = cy({
      style: ee,
      timeout: pe,
      easing: g
    }, {
      mode: "exit"
    });
    let fe;
    pe === "auto" ? (fe = $.transitions.getAutoHeightDuration(Ce.clientHeight), B.current = fe) : fe = be, Ce.style.transition = [$.transitions.create("opacity", {
      duration: fe,
      delay: Ae
    }), $.transitions.create("transform", {
      duration: nE ? fe : fe * 0.666,
      delay: nE ? Ae : Ae || fe * 0.333,
      easing: W
    })].join(","), Ce.style.opacity = 0, Ce.style.transform = oE(0.75), V && V(Ce);
  }), se = J(q), ve = (Ce) => {
    pe === "auto" && (Se.current = setTimeout(Ce, B.current || 0)), x && x(te.current, Ce);
  };
  return X.useEffect(() => () => {
    clearTimeout(Se.current);
  }, []), /* @__PURE__ */ qe(de, K({
    appear: w,
    in: A,
    nodeRef: te,
    onEnter: Ve,
    onEntered: Ue,
    onEntering: ke,
    onExit: Be,
    onExited: se,
    onExiting: Ne,
    addEndListener: ve,
    timeout: pe === "auto" ? null : pe
  }, me, {
    children: (Ce, be) => /* @__PURE__ */ X.cloneElement(R, K({
      style: K({
        opacity: 0,
        transform: oE(0.75),
        visibility: Ce === "exited" && !A ? "hidden" : void 0
      }, JN[Ce], ee, R.props.style),
      ref: le
    }, be))
  }));
});
process.env.NODE_ENV !== "production" && (dE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: c.func,
  /**
   * Perform the enter transition when it first mounts if `in` is also `true`.
   * Set this to `false` to disable this behavior.
   * @default true
   */
  appear: c.bool,
  /**
   * A single child content element.
   */
  children: vy.isRequired,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: c.oneOfType([c.shape({
    enter: c.string,
    exit: c.string
  }), c.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: c.bool,
  /**
   * @ignore
   */
  onEnter: c.func,
  /**
   * @ignore
   */
  onEntered: c.func,
  /**
   * @ignore
   */
  onEntering: c.func,
  /**
   * @ignore
   */
  onExit: c.func,
  /**
   * @ignore
   */
  onExited: c.func,
  /**
   * @ignore
   */
  onExiting: c.func,
  /**
   * @ignore
   */
  style: c.object,
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  timeout: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })])
});
dE.muiSupportAuto = !0;
const eM = dE, I1 = /* @__PURE__ */ X.createContext({});
process.env.NODE_ENV !== "production" && (I1.displayName = "ListContext");
const tM = I1;
function nM(v) {
  return Kr("MuiList", v);
}
Xr("MuiList", ["root", "padding", "dense", "subheader"]);
const rM = ["children", "className", "component", "dense", "disablePadding", "subheader"], aM = (v) => {
  const {
    classes: m,
    disablePadding: S,
    dense: x,
    subheader: w
  } = v;
  return Zr({
    root: ["root", !S && "padding", x && "dense", w && "subheader"]
  }, nM, m);
}, iM = kt("ul", {
  name: "MuiList",
  slot: "Root",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [m.root, !S.disablePadding && m.padding, S.dense && m.dense, S.subheader && m.subheader];
  }
})(({
  ownerState: v
}) => K({
  listStyle: "none",
  margin: 0,
  padding: 0,
  position: "relative"
}, !v.disablePadding && {
  paddingTop: 8,
  paddingBottom: 8
}, v.subheader && {
  paddingTop: 0
})), $1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = ba({
    props: m,
    name: "MuiList"
  }), {
    children: w,
    className: R,
    component: g = "ul",
    dense: A = !1,
    disablePadding: z = !1,
    subheader: F
  } = x, ne = qt(x, rM), V = X.useMemo(() => ({
    dense: A
  }), [A]), q = K({}, x, {
    component: g,
    dense: A,
    disablePadding: z
  }), I = aM(q);
  return /* @__PURE__ */ qe(tM.Provider, {
    value: V,
    children: /* @__PURE__ */ Za(iM, K({
      as: g,
      className: cr(I.root, R),
      ref: S,
      ownerState: q
    }, ne, {
      children: [F, w]
    }))
  });
});
process.env.NODE_ENV !== "production" && ($1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, compact vertical padding designed for keyboard and mouse input is used for
   * the list and list items.
   * The prop is available to descendant components as the `dense` context.
   * @default false
   */
  dense: c.bool,
  /**
   * If `true`, vertical padding is removed from the list.
   * @default false
   */
  disablePadding: c.bool,
  /**
   * The content of the subheader, normally `ListSubheader`.
   */
  subheader: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
const oM = $1;
function W1(v) {
  return /* @__PURE__ */ qe(L1, K({}, v, {
    defaultTheme: XO,
    themeId: ZO
  }));
}
process.env.NODE_ENV !== "production" && (W1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The styles you want to apply globally.
   */
  styles: c.oneOfType([c.array, c.func, c.number, c.object, c.string, c.bool])
});
function v1(v) {
  return v != null && !(Array.isArray(v) && v.length === 0);
}
function py(v, m = !1) {
  return v && (v1(v.value) && v.value !== "" || m && v1(v.defaultValue) && v.defaultValue !== "");
}
function lM(v) {
  return v.startAdornment;
}
function uM(v) {
  return Kr("MuiInputBase", v);
}
const sM = Xr("MuiInputBase", ["root", "formControl", "focused", "disabled", "adornedStart", "adornedEnd", "error", "sizeSmall", "multiline", "colorSecondary", "fullWidth", "hiddenLabel", "readOnly", "input", "inputSizeSmall", "inputMultiline", "inputTypeSearch", "inputAdornedStart", "inputAdornedEnd", "inputHiddenLabel"]), xf = sM, cM = ["aria-describedby", "autoComplete", "autoFocus", "className", "color", "components", "componentsProps", "defaultValue", "disabled", "disableInjectingGlobalStyles", "endAdornment", "error", "fullWidth", "id", "inputComponent", "inputProps", "inputRef", "margin", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onClick", "onFocus", "onKeyDown", "onKeyUp", "placeholder", "readOnly", "renderSuffix", "rows", "size", "slotProps", "slots", "startAdornment", "type", "value"], hy = (v, m) => {
  const {
    ownerState: S
  } = v;
  return [m.root, S.formControl && m.formControl, S.startAdornment && m.adornedStart, S.endAdornment && m.adornedEnd, S.error && m.error, S.size === "small" && m.sizeSmall, S.multiline && m.multiline, S.color && m[`color${Oi(S.color)}`], S.fullWidth && m.fullWidth, S.hiddenLabel && m.hiddenLabel];
}, my = (v, m) => {
  const {
    ownerState: S
  } = v;
  return [m.input, S.size === "small" && m.inputSizeSmall, S.multiline && m.inputMultiline, S.type === "search" && m.inputTypeSearch, S.startAdornment && m.inputAdornedStart, S.endAdornment && m.inputAdornedEnd, S.hiddenLabel && m.inputHiddenLabel];
}, fM = (v) => {
  const {
    classes: m,
    color: S,
    disabled: x,
    error: w,
    endAdornment: R,
    focused: g,
    formControl: A,
    fullWidth: z,
    hiddenLabel: F,
    multiline: ne,
    readOnly: V,
    size: q,
    startAdornment: I,
    type: ee
  } = v, pe = {
    root: ["root", `color${Oi(S)}`, x && "disabled", w && "error", z && "fullWidth", g && "focused", A && "formControl", q && q !== "medium" && `size${Oi(q)}`, ne && "multiline", I && "adornedStart", R && "adornedEnd", F && "hiddenLabel", V && "readOnly"],
    input: ["input", x && "disabled", ee === "search" && "inputTypeSearch", ne && "inputMultiline", q === "small" && "inputSizeSmall", F && "inputHiddenLabel", I && "inputAdornedStart", R && "inputAdornedEnd", V && "readOnly"]
  };
  return Zr(pe, uM, m);
}, yy = kt("div", {
  name: "MuiInputBase",
  slot: "Root",
  overridesResolver: hy
})(({
  theme: v,
  ownerState: m
}) => K({}, v.typography.body1, {
  color: (v.vars || v).palette.text.primary,
  lineHeight: "1.4375em",
  // 23px
  boxSizing: "border-box",
  // Prevent padding issue with fullWidth.
  position: "relative",
  cursor: "text",
  display: "inline-flex",
  alignItems: "center",
  [`&.${xf.disabled}`]: {
    color: (v.vars || v).palette.text.disabled,
    cursor: "default"
  }
}, m.multiline && K({
  padding: "4px 0 5px"
}, m.size === "small" && {
  paddingTop: 1
}), m.fullWidth && {
  width: "100%"
})), gy = kt("input", {
  name: "MuiInputBase",
  slot: "Input",
  overridesResolver: my
})(({
  theme: v,
  ownerState: m
}) => {
  const S = v.palette.mode === "light", x = K({
    color: "currentColor"
  }, v.vars ? {
    opacity: v.vars.opacity.inputPlaceholder
  } : {
    opacity: S ? 0.42 : 0.5
  }, {
    transition: v.transitions.create("opacity", {
      duration: v.transitions.duration.shorter
    })
  }), w = {
    opacity: "0 !important"
  }, R = v.vars ? {
    opacity: v.vars.opacity.inputPlaceholder
  } : {
    opacity: S ? 0.42 : 0.5
  };
  return K({
    font: "inherit",
    letterSpacing: "inherit",
    color: "currentColor",
    padding: "4px 0 5px",
    border: 0,
    boxSizing: "content-box",
    background: "none",
    height: "1.4375em",
    // Reset 23pxthe native input line-height
    margin: 0,
    // Reset for Safari
    WebkitTapHighlightColor: "transparent",
    display: "block",
    // Make the flex item shrink with Firefox
    minWidth: 0,
    width: "100%",
    // Fix IE11 width issue
    animationName: "mui-auto-fill-cancel",
    animationDuration: "10ms",
    "&::-webkit-input-placeholder": x,
    "&::-moz-placeholder": x,
    // Firefox 19+
    "&:-ms-input-placeholder": x,
    // IE11
    "&::-ms-input-placeholder": x,
    // Edge
    "&:focus": {
      outline: 0
    },
    // Reset Firefox invalid required input style
    "&:invalid": {
      boxShadow: "none"
    },
    "&::-webkit-search-decoration": {
      // Remove the padding when type=search.
      WebkitAppearance: "none"
    },
    // Show and hide the placeholder logic
    [`label[data-shrink=false] + .${xf.formControl} &`]: {
      "&::-webkit-input-placeholder": w,
      "&::-moz-placeholder": w,
      // Firefox 19+
      "&:-ms-input-placeholder": w,
      // IE11
      "&::-ms-input-placeholder": w,
      // Edge
      "&:focus::-webkit-input-placeholder": R,
      "&:focus::-moz-placeholder": R,
      // Firefox 19+
      "&:focus:-ms-input-placeholder": R,
      // IE11
      "&:focus::-ms-input-placeholder": R
      // Edge
    },
    [`&.${xf.disabled}`]: {
      opacity: 1,
      // Reset iOS opacity
      WebkitTextFillColor: (v.vars || v).palette.text.disabled
      // Fix opacity Safari bug
    },
    "&:-webkit-autofill": {
      animationDuration: "5000s",
      animationName: "mui-auto-fill"
    }
  }, m.size === "small" && {
    paddingTop: 1
  }, m.multiline && {
    height: "auto",
    resize: "none",
    padding: 0,
    paddingTop: 0
  }, m.type === "search" && {
    // Improve type search style.
    MozAppearance: "textfield"
  });
}), dM = /* @__PURE__ */ qe(W1, {
  styles: {
    "@keyframes mui-auto-fill": {
      from: {
        display: "block"
      }
    },
    "@keyframes mui-auto-fill-cancel": {
      from: {
        display: "block"
      }
    }
  }
}), Y1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x;
  const w = ba({
    props: m,
    name: "MuiInputBase"
  }), {
    "aria-describedby": R,
    autoComplete: g,
    autoFocus: A,
    className: z,
    components: F = {},
    componentsProps: ne = {},
    defaultValue: V,
    disabled: q,
    disableInjectingGlobalStyles: I,
    endAdornment: ee,
    fullWidth: pe = !1,
    id: de,
    inputComponent: me = "input",
    inputProps: Se = {},
    inputRef: B,
    maxRows: $,
    minRows: te,
    multiline: le = !1,
    name: J,
    onBlur: ke,
    onChange: Ve,
    onClick: Ue,
    onFocus: Ne,
    onKeyDown: Be,
    onKeyUp: se,
    placeholder: ve,
    readOnly: Ce,
    renderSuffix: be,
    rows: Ae,
    slotProps: W = {},
    slots: fe = {},
    startAdornment: ue,
    type: ut = "text",
    value: Ze
  } = w, gt = qt(w, cM), st = Se.value != null ? Se.value : Ze, {
    current: _t
  } = X.useRef(st != null), yt = X.useRef(), dn = X.useCallback((ct) => {
    process.env.NODE_ENV !== "production" && ct && ct.nodeName !== "INPUT" && !ct.focus && console.error(["MUI: You have provided a `inputComponent` to the input component", "that does not correctly handle the `ref` prop.", "Make sure the `ref` prop is called with a HTMLInputElement."].join(`
`));
  }, []), Bt = Ja(yt, B, Se.ref, dn), [an, Mn] = X.useState(!1), at = Zp();
  process.env.NODE_ENV !== "production" && X.useEffect(() => {
    if (at)
      return at.registerEffect();
  }, [at]);
  const wt = Jp({
    props: w,
    muiFormControl: at,
    states: ["color", "disabled", "error", "hiddenLabel", "size", "required", "filled"]
  });
  wt.focused = at ? at.focused : an, X.useEffect(() => {
    !at && q && an && (Mn(!1), ke && ke());
  }, [at, q, an, ke]);
  const Ge = at && at.onFilled, tt = at && at.onEmpty, pt = X.useCallback((ct) => {
    py(ct) ? Ge && Ge() : tt && tt();
  }, [Ge, tt]);
  Cf(() => {
    _t && pt({
      value: st
    });
  }, [st, pt, _t]);
  const Jt = (ct) => {
    if (wt.disabled) {
      ct.stopPropagation();
      return;
    }
    Ne && Ne(ct), Se.onFocus && Se.onFocus(ct), at && at.onFocus ? at.onFocus(ct) : Mn(!0);
  }, Gt = (ct) => {
    ke && ke(ct), Se.onBlur && Se.onBlur(ct), at && at.onBlur ? at.onBlur(ct) : Mn(!1);
  }, mn = (ct, ...Ca) => {
    if (!_t) {
      const tr = ct.target || yt.current;
      if (tr == null)
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: Expected valid input target. Did you use a custom `inputComponent` and forget to forward refs? See https://mui.com/r/input-component-ref-interface for more info." : C1(1));
      pt({
        value: tr.value
      });
    }
    Se.onChange && Se.onChange(ct, ...Ca), Ve && Ve(ct, ...Ca);
  };
  X.useEffect(() => {
    pt(yt.current);
  }, []);
  const Jn = (ct) => {
    yt.current && ct.currentTarget === ct.target && yt.current.focus(), Ue && Ue(ct);
  };
  let er = me, Lt = Se;
  le && er === "input" && (Ae ? (process.env.NODE_ENV !== "production" && (te || $) && console.warn("MUI: You can not use the `minRows` or `maxRows` props when the input `rows` prop is set."), Lt = K({
    type: void 0,
    minRows: Ae,
    maxRows: Ae
  }, Lt)) : Lt = K({
    type: void 0,
    maxRows: $,
    minRows: te
  }, Lt), er = j1);
  const _n = (ct) => {
    pt(ct.animationName === "mui-auto-fill-cancel" ? yt.current : {
      value: "x"
    });
  };
  X.useEffect(() => {
    at && at.setAdornedStart(!!ue);
  }, [at, ue]);
  const Kt = K({}, w, {
    color: wt.color || "primary",
    disabled: wt.disabled,
    endAdornment: ee,
    error: wt.error,
    focused: wt.focused,
    formControl: at,
    fullWidth: pe,
    hiddenLabel: wt.hiddenLabel,
    multiline: le,
    size: wt.size,
    startAdornment: ue,
    type: ut
  }), zt = fM(Kt), Vn = fe.root || F.Root || yy, Tr = W.root || ne.root || {}, yn = fe.input || F.Input || gy;
  return Lt = K({}, Lt, (x = W.input) != null ? x : ne.input), /* @__PURE__ */ Za(X.Fragment, {
    children: [!I && dM, /* @__PURE__ */ Za(Vn, K({}, Tr, !sy(Vn) && {
      ownerState: K({}, Kt, Tr.ownerState)
    }, {
      ref: S,
      onClick: Jn
    }, gt, {
      className: cr(zt.root, Tr.className, z, Ce && "MuiInputBase-readOnly"),
      children: [ue, /* @__PURE__ */ qe(T1.Provider, {
        value: null,
        children: /* @__PURE__ */ qe(yn, K({
          ownerState: Kt,
          "aria-invalid": wt.error,
          "aria-describedby": R,
          autoComplete: g,
          autoFocus: A,
          defaultValue: V,
          disabled: wt.disabled,
          id: de,
          onAnimationStart: _n,
          name: J,
          placeholder: ve,
          readOnly: Ce,
          required: wt.required,
          rows: Ae,
          value: st,
          onKeyDown: Be,
          onKeyUp: se,
          type: ut
        }, Lt, !sy(yn) && {
          as: er,
          ownerState: K({}, Kt, Lt.ownerState)
        }, {
          ref: Bt,
          className: cr(zt.input, Lt.className, Ce && "MuiInputBase-readOnly"),
          onBlur: Gt,
          onChange: mn,
          onFocus: Jt
        }))
      }), ee, be ? be(K({}, wt, {
        startAdornment: ue
      })) : null]
    }))]
  });
});
process.env.NODE_ENV !== "production" && (Y1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  "aria-describedby": c.string,
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * If `true`, GlobalStyles for the auto-fill keyframes will not be injected/removed on mount/unmount. Make sure to inject them at the top of your application.
   * This option is intended to help with boosting the initial rendering performance if you are loading a big amount of Input components at once.
   * @default false
   */
  disableInjectingGlobalStyles: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: D1,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: iu,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * Callback fired when the `input` is blurred.
   *
   * Notice that the first argument (event) might be undefined.
   */
  onBlur: c.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * @ignore
   */
  onClick: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * Callback fired when the `input` doesn't satisfy its constraints.
   */
  onInvalid: c.func,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * @ignore
   */
  onKeyUp: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * @ignore
   */
  renderSuffix: c.func,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The size of the component.
   */
  size: c.oneOfType([c.oneOf(["medium", "small"]), c.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
const pE = Y1;
function pM(v) {
  return Kr("MuiInput", v);
}
const vM = K({}, xf, Xr("MuiInput", ["root", "underline", "input"])), Wp = vM, hM = ["disableUnderline", "components", "componentsProps", "fullWidth", "inputComponent", "multiline", "slotProps", "slots", "type"], mM = (v) => {
  const {
    classes: m,
    disableUnderline: S
  } = v, w = Zr({
    root: ["root", !S && "underline"],
    input: ["input"]
  }, pM, m);
  return K({}, m, w);
}, yM = kt(yy, {
  shouldForwardProp: (v) => bs(v) || v === "classes",
  name: "MuiInput",
  slot: "Root",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [...hy(v, m), !S.disableUnderline && m.underline];
  }
})(({
  theme: v,
  ownerState: m
}) => {
  let x = v.palette.mode === "light" ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)";
  return v.vars && (x = `rgba(${v.vars.palette.common.onBackgroundChannel} / ${v.vars.opacity.inputUnderline})`), K({
    position: "relative"
  }, m.formControl && {
    "label + &": {
      marginTop: 16
    }
  }, !m.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(v.vars || v).palette[m.color].main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: v.transitions.create("transform", {
        duration: v.transitions.duration.shorter,
        easing: v.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${Wp.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${Wp.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (v.vars || v).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${x}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: v.transitions.create("border-bottom-color", {
        duration: v.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${Wp.disabled}, .${Wp.error}):before`]: {
      borderBottom: `2px solid ${(v.vars || v).palette.text.primary}`,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        borderBottom: `1px solid ${x}`
      }
    },
    [`&.${Wp.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  });
}), gM = kt(gy, {
  name: "MuiInput",
  slot: "Input",
  overridesResolver: my
})({}), vE = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w, R, g;
  const A = ba({
    props: m,
    name: "MuiInput"
  }), {
    disableUnderline: z,
    components: F = {},
    componentsProps: ne,
    fullWidth: V = !1,
    inputComponent: q = "input",
    multiline: I = !1,
    slotProps: ee,
    slots: pe = {},
    type: de = "text"
  } = A, me = qt(A, hM), Se = mM(A), $ = {
    root: {
      ownerState: {
        disableUnderline: z
      }
    }
  }, te = ee ?? ne ? lE(ee ?? ne, $) : $, le = (x = (w = pe.root) != null ? w : F.Root) != null ? x : yM, J = (R = (g = pe.input) != null ? g : F.Input) != null ? R : gM;
  return /* @__PURE__ */ qe(pE, K({
    slots: {
      root: le,
      input: J
    },
    slotProps: te,
    fullWidth: V,
    inputComponent: q,
    multiline: I,
    ref: S,
    type: de
  }, me, {
    classes: Se
  }));
});
process.env.NODE_ENV !== "production" && (vE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * If `true`, the `input` will not have an underline.
   */
  disableUnderline: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: c.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: iu,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
vE.muiName = "Input";
const Q1 = vE;
function SM(v) {
  return Kr("MuiFilledInput", v);
}
const EM = K({}, xf, Xr("MuiFilledInput", ["root", "underline", "input"])), ys = EM, bM = ["disableUnderline", "components", "componentsProps", "fullWidth", "hiddenLabel", "inputComponent", "multiline", "slotProps", "slots", "type"], CM = (v) => {
  const {
    classes: m,
    disableUnderline: S
  } = v, w = Zr({
    root: ["root", !S && "underline"],
    input: ["input"]
  }, SM, m);
  return K({}, m, w);
}, TM = kt(yy, {
  shouldForwardProp: (v) => bs(v) || v === "classes",
  name: "MuiFilledInput",
  slot: "Root",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [...hy(v, m), !S.disableUnderline && m.underline];
  }
})(({
  theme: v,
  ownerState: m
}) => {
  var S;
  const x = v.palette.mode === "light", w = x ? "rgba(0, 0, 0, 0.42)" : "rgba(255, 255, 255, 0.7)", R = x ? "rgba(0, 0, 0, 0.06)" : "rgba(255, 255, 255, 0.09)", g = x ? "rgba(0, 0, 0, 0.09)" : "rgba(255, 255, 255, 0.13)", A = x ? "rgba(0, 0, 0, 0.12)" : "rgba(255, 255, 255, 0.12)";
  return K({
    position: "relative",
    backgroundColor: v.vars ? v.vars.palette.FilledInput.bg : R,
    borderTopLeftRadius: (v.vars || v).shape.borderRadius,
    borderTopRightRadius: (v.vars || v).shape.borderRadius,
    transition: v.transitions.create("background-color", {
      duration: v.transitions.duration.shorter,
      easing: v.transitions.easing.easeOut
    }),
    "&:hover": {
      backgroundColor: v.vars ? v.vars.palette.FilledInput.hoverBg : g,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: v.vars ? v.vars.palette.FilledInput.bg : R
      }
    },
    [`&.${ys.focused}`]: {
      backgroundColor: v.vars ? v.vars.palette.FilledInput.bg : R
    },
    [`&.${ys.disabled}`]: {
      backgroundColor: v.vars ? v.vars.palette.FilledInput.disabledBg : A
    }
  }, !m.disableUnderline && {
    "&:after": {
      borderBottom: `2px solid ${(S = (v.vars || v).palette[m.color || "primary"]) == null ? void 0 : S.main}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '""',
      position: "absolute",
      right: 0,
      transform: "scaleX(0)",
      transition: v.transitions.create("transform", {
        duration: v.transitions.duration.shorter,
        easing: v.transitions.easing.easeOut
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&.${ys.focused}:after`]: {
      // translateX(0) is a workaround for Safari transform scale bug
      // See https://github.com/mui/material-ui/issues/31766
      transform: "scaleX(1) translateX(0)"
    },
    [`&.${ys.error}`]: {
      "&:before, &:after": {
        borderBottomColor: (v.vars || v).palette.error.main
      }
    },
    "&:before": {
      borderBottom: `1px solid ${v.vars ? `rgba(${v.vars.palette.common.onBackgroundChannel} / ${v.vars.opacity.inputUnderline})` : w}`,
      left: 0,
      bottom: 0,
      // Doing the other way around crash on IE11 "''" https://github.com/cssinjs/jss/issues/242
      content: '"\\00a0"',
      position: "absolute",
      right: 0,
      transition: v.transitions.create("border-bottom-color", {
        duration: v.transitions.duration.shorter
      }),
      pointerEvents: "none"
      // Transparent to the hover style.
    },
    [`&:hover:not(.${ys.disabled}, .${ys.error}):before`]: {
      borderBottom: `1px solid ${(v.vars || v).palette.text.primary}`
    },
    [`&.${ys.disabled}:before`]: {
      borderBottomStyle: "dotted"
    }
  }, m.startAdornment && {
    paddingLeft: 12
  }, m.endAdornment && {
    paddingRight: 12
  }, m.multiline && K({
    padding: "25px 12px 8px"
  }, m.size === "small" && {
    paddingTop: 21,
    paddingBottom: 4
  }, m.hiddenLabel && {
    paddingTop: 16,
    paddingBottom: 17
  }));
}), xM = kt(gy, {
  name: "MuiFilledInput",
  slot: "Input",
  overridesResolver: my
})(({
  theme: v,
  ownerState: m
}) => K({
  paddingTop: 25,
  paddingRight: 12,
  paddingBottom: 8,
  paddingLeft: 12
}, !v.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: v.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: v.palette.mode === "light" ? null : "#fff",
    caretColor: v.palette.mode === "light" ? null : "#fff",
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  }
}, v.vars && {
  "&:-webkit-autofill": {
    borderTopLeftRadius: "inherit",
    borderTopRightRadius: "inherit"
  },
  [v.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, m.size === "small" && {
  paddingTop: 21,
  paddingBottom: 4
}, m.hiddenLabel && {
  paddingTop: 16,
  paddingBottom: 17
}, m.multiline && {
  paddingTop: 0,
  paddingBottom: 0,
  paddingLeft: 0,
  paddingRight: 0
}, m.startAdornment && {
  paddingLeft: 0
}, m.endAdornment && {
  paddingRight: 0
}, m.hiddenLabel && m.size === "small" && {
  paddingTop: 8,
  paddingBottom: 9
})), hE = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w, R, g;
  const A = ba({
    props: m,
    name: "MuiFilledInput"
  }), {
    components: z = {},
    componentsProps: F,
    fullWidth: ne = !1,
    // declare here to prevent spreading to DOM
    inputComponent: V = "input",
    multiline: q = !1,
    slotProps: I,
    slots: ee = {},
    type: pe = "text"
  } = A, de = qt(A, bM), me = K({}, A, {
    fullWidth: ne,
    inputComponent: V,
    multiline: q,
    type: pe
  }), Se = CM(A), B = {
    root: {
      ownerState: me
    },
    input: {
      ownerState: me
    }
  }, $ = I ?? F ? lE(I ?? F, B) : B, te = (x = (w = ee.root) != null ? w : z.Root) != null ? x : TM, le = (R = (g = ee.input) != null ? g : z.Input) != null ? R : xM;
  return /* @__PURE__ */ qe(pE, K({
    slots: {
      root: te,
      input: le
    },
    componentsProps: $,
    fullWidth: ne,
    inputComponent: V,
    multiline: q,
    ref: S,
    type: pe
  }, de, {
    classes: Se
  }));
});
process.env.NODE_ENV !== "production" && (hE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `slotProps` prop.
   * It's recommended to use the `slotProps` prop instead, as `componentsProps` will be deprecated in the future.
   *
   * @default {}
   */
  componentsProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * If `true`, the input will not have an underline.
   */
  disableUnderline: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: c.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: iu,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: c.shape({
    input: c.object,
    root: c.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
hE.muiName = "Input";
const q1 = hE;
var h1;
const RM = ["children", "classes", "className", "label", "notched"], wM = kt("fieldset")({
  textAlign: "left",
  position: "absolute",
  bottom: 0,
  right: 0,
  top: -5,
  left: 0,
  margin: 0,
  padding: "0 8px",
  pointerEvents: "none",
  borderRadius: "inherit",
  borderStyle: "solid",
  borderWidth: 1,
  overflow: "hidden",
  minWidth: "0%"
}), DM = kt("legend")(({
  ownerState: v,
  theme: m
}) => K({
  float: "unset",
  // Fix conflict with bootstrap
  width: "auto",
  // Fix conflict with bootstrap
  overflow: "hidden"
}, !v.withLabel && {
  padding: 0,
  lineHeight: "11px",
  // sync with `height` in `legend` styles
  transition: m.transitions.create("width", {
    duration: 150,
    easing: m.transitions.easing.easeOut
  })
}, v.withLabel && K({
  display: "block",
  // Fix conflict with normalize.css and sanitize.css
  padding: 0,
  height: 11,
  // sync with `lineHeight` in `legend` styles
  fontSize: "0.75em",
  visibility: "hidden",
  maxWidth: 0.01,
  transition: m.transitions.create("max-width", {
    duration: 50,
    easing: m.transitions.easing.easeOut
  }),
  whiteSpace: "nowrap",
  "& > span": {
    paddingLeft: 5,
    paddingRight: 5,
    display: "inline-block",
    opacity: 0,
    visibility: "visible"
  }
}, v.notched && {
  maxWidth: "100%",
  transition: m.transitions.create("max-width", {
    duration: 100,
    easing: m.transitions.easing.easeOut,
    delay: 50
  })
})));
function G1(v) {
  const {
    className: m,
    label: S,
    notched: x
  } = v, w = qt(v, RM), R = S != null && S !== "", g = K({}, v, {
    notched: x,
    withLabel: R
  });
  return /* @__PURE__ */ qe(wM, K({
    "aria-hidden": !0,
    className: m,
    ownerState: g
  }, w, {
    children: /* @__PURE__ */ qe(DM, {
      ownerState: g,
      children: R ? /* @__PURE__ */ qe("span", {
        children: S
      }) : (
        // notranslate needed while Google Translate will not fix zero-width space issue
        h1 || (h1 = /* @__PURE__ */ qe("span", {
          className: "notranslate",
          children: "​"
        }))
      )
    })
  }));
}
process.env.NODE_ENV !== "production" && (G1.propTypes = {
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The label.
   */
  label: c.node,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: c.bool.isRequired,
  /**
   * @ignore
   */
  style: c.object
});
function kM(v) {
  return Kr("MuiOutlinedInput", v);
}
const OM = K({}, xf, Xr("MuiOutlinedInput", ["root", "notchedOutline", "input"])), au = OM, NM = ["components", "fullWidth", "inputComponent", "label", "multiline", "notched", "slots", "type"], MM = (v) => {
  const {
    classes: m
  } = v, x = Zr({
    root: ["root"],
    notchedOutline: ["notchedOutline"],
    input: ["input"]
  }, kM, m);
  return K({}, m, x);
}, _M = kt(yy, {
  shouldForwardProp: (v) => bs(v) || v === "classes",
  name: "MuiOutlinedInput",
  slot: "Root",
  overridesResolver: hy
})(({
  theme: v,
  ownerState: m
}) => {
  const S = v.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return K({
    position: "relative",
    borderRadius: (v.vars || v).shape.borderRadius,
    [`&:hover .${au.notchedOutline}`]: {
      borderColor: (v.vars || v).palette.text.primary
    },
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      [`&:hover .${au.notchedOutline}`]: {
        borderColor: v.vars ? `rgba(${v.vars.palette.common.onBackgroundChannel} / 0.23)` : S
      }
    },
    [`&.${au.focused} .${au.notchedOutline}`]: {
      borderColor: (v.vars || v).palette[m.color].main,
      borderWidth: 2
    },
    [`&.${au.error} .${au.notchedOutline}`]: {
      borderColor: (v.vars || v).palette.error.main
    },
    [`&.${au.disabled} .${au.notchedOutline}`]: {
      borderColor: (v.vars || v).palette.action.disabled
    }
  }, m.startAdornment && {
    paddingLeft: 14
  }, m.endAdornment && {
    paddingRight: 14
  }, m.multiline && K({
    padding: "16.5px 14px"
  }, m.size === "small" && {
    padding: "8.5px 14px"
  }));
}), LM = kt(G1, {
  name: "MuiOutlinedInput",
  slot: "NotchedOutline",
  overridesResolver: (v, m) => m.notchedOutline
})(({
  theme: v
}) => {
  const m = v.palette.mode === "light" ? "rgba(0, 0, 0, 0.23)" : "rgba(255, 255, 255, 0.23)";
  return {
    borderColor: v.vars ? `rgba(${v.vars.palette.common.onBackgroundChannel} / 0.23)` : m
  };
}), zM = kt(gy, {
  name: "MuiOutlinedInput",
  slot: "Input",
  overridesResolver: my
})(({
  theme: v,
  ownerState: m
}) => K({
  padding: "16.5px 14px"
}, !v.vars && {
  "&:-webkit-autofill": {
    WebkitBoxShadow: v.palette.mode === "light" ? null : "0 0 0 100px #266798 inset",
    WebkitTextFillColor: v.palette.mode === "light" ? null : "#fff",
    caretColor: v.palette.mode === "light" ? null : "#fff",
    borderRadius: "inherit"
  }
}, v.vars && {
  "&:-webkit-autofill": {
    borderRadius: "inherit"
  },
  [v.getColorSchemeSelector("dark")]: {
    "&:-webkit-autofill": {
      WebkitBoxShadow: "0 0 0 100px #266798 inset",
      WebkitTextFillColor: "#fff",
      caretColor: "#fff"
    }
  }
}, m.size === "small" && {
  padding: "8.5px 14px"
}, m.multiline && {
  padding: 0
}, m.startAdornment && {
  paddingLeft: 0
}, m.endAdornment && {
  paddingRight: 0
})), mE = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w, R, g, A;
  const z = ba({
    props: m,
    name: "MuiOutlinedInput"
  }), {
    components: F = {},
    fullWidth: ne = !1,
    inputComponent: V = "input",
    label: q,
    multiline: I = !1,
    notched: ee,
    slots: pe = {},
    type: de = "text"
  } = z, me = qt(z, NM), Se = MM(z), B = Zp(), $ = Jp({
    props: z,
    muiFormControl: B,
    states: ["color", "disabled", "error", "focused", "hiddenLabel", "size", "required"]
  }), te = K({}, z, {
    color: $.color || "primary",
    disabled: $.disabled,
    error: $.error,
    focused: $.focused,
    formControl: B,
    fullWidth: ne,
    hiddenLabel: $.hiddenLabel,
    multiline: I,
    size: $.size,
    type: de
  }), le = (x = (w = pe.root) != null ? w : F.Root) != null ? x : _M, J = (R = (g = pe.input) != null ? g : F.Input) != null ? R : zM;
  return /* @__PURE__ */ qe(pE, K({
    slots: {
      root: le,
      input: J
    },
    renderSuffix: (ke) => /* @__PURE__ */ qe(LM, {
      ownerState: te,
      className: Se.notchedOutline,
      label: q != null && q !== "" && $.required ? A || (A = /* @__PURE__ */ Za(X.Fragment, {
        children: [q, " ", "*"]
      })) : q,
      notched: typeof ee < "u" ? ee : !!(ke.startAdornment || ke.filled || ke.focused)
    }),
    fullWidth: ne,
    inputComponent: V,
    multiline: I,
    ref: S,
    type: de
  }, me, {
    classes: K({}, Se, {
      notchedOutline: null
    })
  }));
});
process.env.NODE_ENV !== "production" && (mE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: c.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * The prop defaults to the value (`'primary'`) inherited from the parent FormControl component.
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary"]), c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: c.shape({
    Input: c.elementType,
    Root: c.elementType
  }),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  disabled: c.bool,
  /**
   * End `InputAdornment` for this component.
   */
  endAdornment: c.node,
  /**
   * If `true`, the `input` will indicate an error.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  error: c.bool,
  /**
   * If `true`, the `input` will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The id of the `input` element.
   */
  id: c.string,
  /**
   * The component used for the `input` element.
   * Either a string to use a HTML element or a component.
   * @default 'input'
   */
  inputComponent: c.elementType,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * @default {}
   */
  inputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: iu,
  /**
   * The label of the `input`. It is only used for layout. The actual labelling
   * is handled by `InputLabel`.
   */
  label: c.node,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   * The prop defaults to the value (`'none'`) inherited from the parent FormControl component.
   */
  margin: c.oneOf(["dense", "none"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a [TextareaAutosize](/material-ui/react-textarea-autosize/) element is rendered.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * If `true`, the outline is notched to accommodate the label.
   */
  notched: c.bool,
  /**
   * Callback fired when the value is changed.
   *
   * @param {React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: c.bool,
  /**
   * If `true`, the `input` element is required.
   * The prop defaults to the value (`false`) inherited from the parent FormControl component.
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: c.shape({
    input: c.elementType,
    root: c.elementType
  }),
  /**
   * Start `InputAdornment` for this component.
   */
  startAdornment: c.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   * @default 'text'
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any
});
mE.muiName = "Input";
const K1 = mE;
function UM(v) {
  return Kr("MuiFormLabel", v);
}
const AM = Xr("MuiFormLabel", ["root", "colorSecondary", "focused", "disabled", "error", "filled", "required", "asterisk"]), Kp = AM, FM = ["children", "className", "color", "component", "disabled", "error", "filled", "focused", "required"], PM = (v) => {
  const {
    classes: m,
    color: S,
    focused: x,
    disabled: w,
    error: R,
    filled: g,
    required: A
  } = v, z = {
    root: ["root", `color${Oi(S)}`, w && "disabled", R && "error", g && "filled", x && "focused", A && "required"],
    asterisk: ["asterisk", R && "error"]
  };
  return Zr(z, UM, m);
}, HM = kt("label", {
  name: "MuiFormLabel",
  slot: "Root",
  overridesResolver: ({
    ownerState: v
  }, m) => K({}, m.root, v.color === "secondary" && m.colorSecondary, v.filled && m.filled)
})(({
  theme: v,
  ownerState: m
}) => K({
  color: (v.vars || v).palette.text.secondary
}, v.typography.body1, {
  lineHeight: "1.4375em",
  padding: 0,
  position: "relative",
  [`&.${Kp.focused}`]: {
    color: (v.vars || v).palette[m.color].main
  },
  [`&.${Kp.disabled}`]: {
    color: (v.vars || v).palette.text.disabled
  },
  [`&.${Kp.error}`]: {
    color: (v.vars || v).palette.error.main
  }
})), jM = kt("span", {
  name: "MuiFormLabel",
  slot: "Asterisk",
  overridesResolver: (v, m) => m.asterisk
})(({
  theme: v
}) => ({
  [`&.${Kp.error}`]: {
    color: (v.vars || v).palette.error.main
  }
})), X1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = ba({
    props: m,
    name: "MuiFormLabel"
  }), {
    children: w,
    className: R,
    component: g = "label"
  } = x, A = qt(x, FM), z = Zp(), F = Jp({
    props: x,
    muiFormControl: z,
    states: ["color", "required", "focused", "disabled", "error", "filled"]
  }), ne = K({}, x, {
    color: F.color || "primary",
    component: g,
    disabled: F.disabled,
    error: F.error,
    filled: F.filled,
    focused: F.focused,
    required: F.required
  }), V = PM(ne);
  return /* @__PURE__ */ Za(HM, K({
    as: g,
    ownerState: ne,
    className: cr(V.root, R),
    ref: S
  }, A, {
    children: [w, F.required && /* @__PURE__ */ Za(jM, {
      ownerState: ne,
      "aria-hidden": !0,
      className: V.asterisk,
      children: [" ", "*"]
    })]
  }));
});
process.env.NODE_ENV !== "production" && (X1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: c.oneOfType([c.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, the label should be displayed in a disabled state.
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: c.bool,
  /**
   * If `true`, the label should use filled classes key.
   */
  filled: c.bool,
  /**
   * If `true`, the input of this label is focused (used by `FormGroup` components).
   */
  focused: c.bool,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: c.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object])
});
const VM = X1;
function BM(v) {
  return Kr("MuiInputLabel", v);
}
Xr("MuiInputLabel", ["root", "focused", "disabled", "error", "required", "asterisk", "formControl", "sizeSmall", "shrink", "animated", "standard", "filled", "outlined"]);
const IM = ["disableAnimation", "margin", "shrink", "variant", "className"], $M = (v) => {
  const {
    classes: m,
    formControl: S,
    size: x,
    shrink: w,
    disableAnimation: R,
    variant: g,
    required: A
  } = v, z = {
    root: ["root", S && "formControl", !R && "animated", w && "shrink", x && x !== "normal" && `size${Oi(x)}`, g],
    asterisk: [A && "asterisk"]
  }, F = Zr(z, BM, m);
  return K({}, m, F);
}, WM = kt(VM, {
  shouldForwardProp: (v) => bs(v) || v === "classes",
  name: "MuiInputLabel",
  slot: "Root",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [{
      [`& .${Kp.asterisk}`]: m.asterisk
    }, m.root, S.formControl && m.formControl, S.size === "small" && m.sizeSmall, S.shrink && m.shrink, !S.disableAnimation && m.animated, m[S.variant]];
  }
})(({
  theme: v,
  ownerState: m
}) => K({
  display: "block",
  transformOrigin: "top left",
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
  maxWidth: "100%"
}, m.formControl && {
  position: "absolute",
  left: 0,
  top: 0,
  // slight alteration to spec spacing to match visual spec result
  transform: "translate(0, 20px) scale(1)"
}, m.size === "small" && {
  // Compensation for the `Input.inputSizeSmall` style.
  transform: "translate(0, 17px) scale(1)"
}, m.shrink && {
  transform: "translate(0, -1.5px) scale(0.75)",
  transformOrigin: "top left",
  maxWidth: "133%"
}, !m.disableAnimation && {
  transition: v.transitions.create(["color", "transform", "max-width"], {
    duration: v.transitions.duration.shorter,
    easing: v.transitions.easing.easeOut
  })
}, m.variant === "filled" && K({
  // Chrome's autofill feature gives the input field a yellow background.
  // Since the input field is behind the label in the HTML tree,
  // the input field is drawn last and hides the label with an opaque background color.
  // zIndex: 1 will raise the label above opaque background-colors of input.
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(12px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, m.size === "small" && {
  transform: "translate(12px, 13px) scale(1)"
}, m.shrink && K({
  userSelect: "none",
  pointerEvents: "auto",
  transform: "translate(12px, 7px) scale(0.75)",
  maxWidth: "calc(133% - 24px)"
}, m.size === "small" && {
  transform: "translate(12px, 4px) scale(0.75)"
})), m.variant === "outlined" && K({
  // see comment above on filled.zIndex
  zIndex: 1,
  pointerEvents: "none",
  transform: "translate(14px, 16px) scale(1)",
  maxWidth: "calc(100% - 24px)"
}, m.size === "small" && {
  transform: "translate(14px, 9px) scale(1)"
}, m.shrink && {
  userSelect: "none",
  pointerEvents: "auto",
  // Theoretically, we should have (8+5)*2/0.75 = 34px
  // but it feels a better when it bleeds a bit on the left, so 32px.
  maxWidth: "calc(133% - 32px)",
  transform: "translate(14px, -9px) scale(0.75)"
}))), Z1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = ba({
    name: "MuiInputLabel",
    props: m
  }), {
    disableAnimation: w = !1,
    shrink: R,
    className: g
  } = x, A = qt(x, IM), z = Zp();
  let F = R;
  typeof F > "u" && z && (F = z.filled || z.focused || z.adornedStart);
  const ne = Jp({
    props: x,
    muiFormControl: z,
    states: ["size", "variant", "required"]
  }), V = K({}, x, {
    disableAnimation: w,
    formControl: z,
    shrink: F,
    size: ne.size,
    variant: ne.variant,
    required: ne.required
  }), q = $M(V);
  return /* @__PURE__ */ qe(WM, K({
    "data-shrink": F,
    ownerState: V,
    ref: S,
    className: cr(q.root, g)
  }, A, {
    classes: q
  }));
});
process.env.NODE_ENV !== "production" && (Z1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: c.oneOfType([c.oneOf(["error", "info", "primary", "secondary", "success", "warning"]), c.string]),
  /**
   * If `true`, the transition animation is disabled.
   * @default false
   */
  disableAnimation: c.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   */
  error: c.bool,
  /**
   * If `true`, the `input` of this label is focused.
   */
  focused: c.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: c.oneOf(["dense"]),
  /**
   * if `true`, the label will indicate that the `input` is required.
   */
  required: c.bool,
  /**
   * If `true`, the label is shrunk.
   */
  shrink: c.bool,
  /**
   * The size of the component.
   * @default 'normal'
   */
  size: c.oneOfType([c.oneOf(["normal", "small"]), c.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
const YM = Z1;
function QM(v) {
  return Kr("MuiFormControl", v);
}
Xr("MuiFormControl", ["root", "marginNone", "marginNormal", "marginDense", "fullWidth", "disabled"]);
const qM = ["children", "className", "color", "component", "disabled", "error", "focused", "fullWidth", "hiddenLabel", "margin", "required", "size", "variant"], GM = (v) => {
  const {
    classes: m,
    margin: S,
    fullWidth: x
  } = v, w = {
    root: ["root", S !== "none" && `margin${Oi(S)}`, x && "fullWidth"]
  };
  return Zr(w, QM, m);
}, KM = kt("div", {
  name: "MuiFormControl",
  slot: "Root",
  overridesResolver: ({
    ownerState: v
  }, m) => K({}, m.root, m[`margin${Oi(v.margin)}`], v.fullWidth && m.fullWidth)
})(({
  ownerState: v
}) => K({
  display: "inline-flex",
  flexDirection: "column",
  position: "relative",
  // Reset fieldset default style.
  minWidth: 0,
  padding: 0,
  margin: 0,
  border: 0,
  verticalAlign: "top"
}, v.margin === "normal" && {
  marginTop: 16,
  marginBottom: 8
}, v.margin === "dense" && {
  marginTop: 8,
  marginBottom: 4
}, v.fullWidth && {
  width: "100%"
})), J1 = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = ba({
    props: m,
    name: "MuiFormControl"
  }), {
    children: w,
    className: R,
    color: g = "primary",
    component: A = "div",
    disabled: z = !1,
    error: F = !1,
    focused: ne,
    fullWidth: V = !1,
    hiddenLabel: q = !1,
    margin: I = "none",
    required: ee = !1,
    size: pe = "medium",
    variant: de = "outlined"
  } = x, me = qt(x, qM), Se = K({}, x, {
    color: g,
    component: A,
    disabled: z,
    error: F,
    fullWidth: V,
    hiddenLabel: q,
    margin: I,
    required: ee,
    size: pe,
    variant: de
  }), B = GM(Se), [$, te] = X.useState(() => {
    let se = !1;
    return w && X.Children.forEach(w, (ve) => {
      if (!Z0(ve, ["Input", "Select"]))
        return;
      const Ce = Z0(ve, ["Select"]) ? ve.props.input : ve;
      Ce && lM(Ce.props) && (se = !0);
    }), se;
  }), [le, J] = X.useState(() => {
    let se = !1;
    return w && X.Children.forEach(w, (ve) => {
      Z0(ve, ["Input", "Select"]) && (py(ve.props, !0) || py(ve.props.inputProps, !0)) && (se = !0);
    }), se;
  }), [ke, Ve] = X.useState(!1);
  z && ke && Ve(!1);
  const Ue = ne !== void 0 && !z ? ne : ke;
  let Ne;
  if (process.env.NODE_ENV !== "production") {
    const se = X.useRef(!1);
    Ne = () => (se.current && console.error(["MUI: There are multiple `InputBase` components inside a FormControl.", "This creates visual inconsistencies, only use one `InputBase`."].join(`
`)), se.current = !0, () => {
      se.current = !1;
    });
  }
  const Be = X.useMemo(() => ({
    adornedStart: $,
    setAdornedStart: te,
    color: g,
    disabled: z,
    error: F,
    filled: le,
    focused: Ue,
    fullWidth: V,
    hiddenLabel: q,
    size: pe,
    onBlur: () => {
      Ve(!1);
    },
    onEmpty: () => {
      J(!1);
    },
    onFilled: () => {
      J(!0);
    },
    onFocus: () => {
      Ve(!0);
    },
    registerEffect: Ne,
    required: ee,
    variant: de
  }), [$, g, z, F, le, Ue, V, q, Ne, ee, pe, de]);
  return /* @__PURE__ */ qe(T1.Provider, {
    value: Be,
    children: /* @__PURE__ */ qe(KM, K({
      as: A,
      ownerState: Se,
      className: cr(B.root, R),
      ref: S
    }, me, {
      children: w
    }))
  });
});
process.env.NODE_ENV !== "production" && (J1.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: c.elementType,
  /**
   * If `true`, the label, input and helper text should be displayed in a disabled state.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: c.bool,
  /**
   * If `true`, the component is displayed in focused state.
   */
  focused: c.bool,
  /**
   * If `true`, the component will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * If `true`, the label is hidden.
   * This is used to increase density for a `FilledInput`.
   * Be sure to add `aria-label` to the `input` element.
   * @default false
   */
  hiddenLabel: c.bool,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: c.oneOf(["dense", "none", "normal"]),
  /**
   * If `true`, the label will indicate that the `input` is required.
   * @default false
   */
  required: c.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: c.oneOfType([c.oneOf(["medium", "small"]), c.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
const XM = J1, ZM = ["actions", "autoFocus", "autoFocusItem", "children", "className", "disabledItemsFocusable", "disableListWrap", "onKeyDown", "variant"];
function rE(v, m, S) {
  return v === m ? v.firstChild : m && m.nextElementSibling ? m.nextElementSibling : S ? null : v.firstChild;
}
function m1(v, m, S) {
  return v === m ? S ? v.firstChild : v.lastChild : m && m.previousElementSibling ? m.previousElementSibling : S ? null : v.lastChild;
}
function ex(v, m) {
  if (m === void 0)
    return !0;
  let S = v.innerText;
  return S === void 0 && (S = v.textContent), S = S.trim().toLowerCase(), S.length === 0 ? !1 : m.repeating ? S[0] === m.keys[0] : S.indexOf(m.keys.join("")) === 0;
}
function Yp(v, m, S, x, w, R) {
  let g = !1, A = w(v, m, m ? S : !1);
  for (; A; ) {
    if (A === v.firstChild) {
      if (g)
        return !1;
      g = !0;
    }
    const z = x ? !1 : A.disabled || A.getAttribute("aria-disabled") === "true";
    if (!A.hasAttribute("tabindex") || !ex(A, R) || z)
      A = w(v, A, S);
    else
      return A.focus(), !0;
  }
  return !1;
}
const tx = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: x,
    autoFocus: w = !1,
    autoFocusItem: R = !1,
    children: g,
    className: A,
    disabledItemsFocusable: z = !1,
    disableListWrap: F = !1,
    onKeyDown: ne,
    variant: V = "selectedMenu"
  } = m, q = qt(m, ZM), I = X.useRef(null), ee = X.useRef({
    keys: [],
    repeating: !0,
    previousKeyMatched: !0,
    lastTime: null
  });
  Cf(() => {
    w && I.current.focus();
  }, [w]), X.useImperativeHandle(x, () => ({
    adjustStyleForScrollbar: (B, $) => {
      const te = !I.current.style.width;
      if (B.clientHeight < I.current.clientHeight && te) {
        const le = `${M1(Xa(B))}px`;
        I.current.style[$.direction === "rtl" ? "paddingLeft" : "paddingRight"] = le, I.current.style.width = `calc(100% + ${le})`;
      }
      return I.current;
    }
  }), []);
  const pe = (B) => {
    const $ = I.current, te = B.key, le = Xa($).activeElement;
    if (te === "ArrowDown")
      B.preventDefault(), Yp($, le, F, z, rE);
    else if (te === "ArrowUp")
      B.preventDefault(), Yp($, le, F, z, m1);
    else if (te === "Home")
      B.preventDefault(), Yp($, null, F, z, rE);
    else if (te === "End")
      B.preventDefault(), Yp($, null, F, z, m1);
    else if (te.length === 1) {
      const J = ee.current, ke = te.toLowerCase(), Ve = performance.now();
      J.keys.length > 0 && (Ve - J.lastTime > 500 ? (J.keys = [], J.repeating = !0, J.previousKeyMatched = !0) : J.repeating && ke !== J.keys[0] && (J.repeating = !1)), J.lastTime = Ve, J.keys.push(ke);
      const Ue = le && !J.repeating && ex(le, J);
      J.previousKeyMatched && (Ue || Yp($, le, !1, z, rE, J)) ? B.preventDefault() : J.previousKeyMatched = !1;
    }
    ne && ne(B);
  }, de = Ja(I, S);
  let me = -1;
  X.Children.forEach(g, (B, $) => {
    if (!/* @__PURE__ */ X.isValidElement(B)) {
      me === $ && (me += 1, me >= g.length && (me = -1));
      return;
    }
    process.env.NODE_ENV !== "production" && uE.isFragment(B) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), B.props.disabled || (V === "selectedMenu" && B.props.selected || me === -1) && (me = $), me === $ && (B.props.disabled || B.props.muiSkipListHighlight || B.type.muiSkipListHighlight) && (me += 1, me >= g.length && (me = -1));
  });
  const Se = X.Children.map(g, (B, $) => {
    if ($ === me) {
      const te = {};
      return R && (te.autoFocus = !0), B.props.tabIndex === void 0 && V === "selectedMenu" && (te.tabIndex = 0), /* @__PURE__ */ X.cloneElement(B, te);
    }
    return B;
  });
  return /* @__PURE__ */ qe(oM, K({
    role: "menu",
    ref: de,
    className: A,
    onKeyDown: pe,
    tabIndex: w ? 0 : -1
  }, q, {
    children: Se
  }));
});
process.env.NODE_ENV !== "production" && (tx.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, will focus the `[role="menu"]` container and move into tab order.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * If `true`, will focus the first menuitem if `variant="menu"` or selected item
   * if `variant="selectedMenu"`.
   * @default false
   */
  autoFocusItem: c.bool,
  /**
   * MenuList contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: c.bool,
  /**
   * If `true`, the menu items will not wrap focus.
   * @default false
   */
  disableListWrap: c.bool,
  /**
   * @ignore
   */
  onKeyDown: c.func,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus
   * and the vertical alignment relative to the anchor element.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
const JM = tx;
function e_(v) {
  return Kr("MuiPopover", v);
}
Xr("MuiPopover", ["root", "paper"]);
const t_ = ["onEntering"], n_ = ["action", "anchorEl", "anchorOrigin", "anchorPosition", "anchorReference", "children", "className", "container", "elevation", "marginThreshold", "open", "PaperProps", "slots", "slotProps", "transformOrigin", "TransitionComponent", "transitionDuration", "TransitionProps", "disableScrollLock"], r_ = ["slotProps"];
function y1(v, m) {
  let S = 0;
  return typeof m == "number" ? S = m : m === "center" ? S = v.height / 2 : m === "bottom" && (S = v.height), S;
}
function g1(v, m) {
  let S = 0;
  return typeof m == "number" ? S = m : m === "center" ? S = v.width / 2 : m === "right" && (S = v.width), S;
}
function S1(v) {
  return [v.horizontal, v.vertical].map((m) => typeof m == "number" ? `${m}px` : m).join(" ");
}
function uy(v) {
  return typeof v == "function" ? v() : v;
}
const a_ = (v) => {
  const {
    classes: m
  } = v;
  return Zr({
    root: ["root"],
    paper: ["paper"]
  }, e_, m);
}, i_ = kt(XN, {
  name: "MuiPopover",
  slot: "Root",
  overridesResolver: (v, m) => m.root
})({}), nx = kt(rN, {
  name: "MuiPopover",
  slot: "Paper",
  overridesResolver: (v, m) => m.paper
})({
  position: "absolute",
  overflowY: "auto",
  overflowX: "hidden",
  // So we see the popover when it's empty.
  // It's most likely on issue on userland.
  minWidth: 16,
  minHeight: 16,
  maxWidth: "calc(100% - 32px)",
  maxHeight: "calc(100% - 32px)",
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), rx = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w, R;
  const g = ba({
    props: m,
    name: "MuiPopover"
  }), {
    action: A,
    anchorEl: z,
    anchorOrigin: F = {
      vertical: "top",
      horizontal: "left"
    },
    anchorPosition: ne,
    anchorReference: V = "anchorEl",
    children: q,
    className: I,
    container: ee,
    elevation: pe = 8,
    marginThreshold: de = 16,
    open: me,
    PaperProps: Se = {},
    slots: B,
    slotProps: $,
    transformOrigin: te = {
      vertical: "top",
      horizontal: "left"
    },
    TransitionComponent: le = eM,
    transitionDuration: J = "auto",
    TransitionProps: {
      onEntering: ke
    } = {},
    disableScrollLock: Ve = !1
  } = g, Ue = qt(g.TransitionProps, t_), Ne = qt(g, n_), Be = (x = $ == null ? void 0 : $.paper) != null ? x : Se, se = X.useRef(), ve = Ja(se, Be.ref), Ce = K({}, g, {
    anchorOrigin: F,
    anchorReference: V,
    elevation: pe,
    marginThreshold: de,
    externalPaperSlotProps: Be,
    transformOrigin: te,
    TransitionComponent: le,
    transitionDuration: J,
    TransitionProps: Ue
  }), be = a_(Ce), Ae = X.useCallback(() => {
    if (V === "anchorPosition")
      return process.env.NODE_ENV !== "production" && (ne || console.error('MUI: You need to provide a `anchorPosition` prop when using <Popover anchorReference="anchorPosition" />.')), ne;
    const Ge = uy(z), tt = Ge && Ge.nodeType === 1 ? Ge : Xa(se.current).body, pt = tt.getBoundingClientRect();
    if (process.env.NODE_ENV !== "production") {
      const Jt = tt.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && Jt.top === 0 && Jt.left === 0 && Jt.right === 0 && Jt.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    return {
      top: pt.top + y1(pt, F.vertical),
      left: pt.left + g1(pt, F.horizontal)
    };
  }, [z, F.horizontal, F.vertical, ne, V]), W = X.useCallback((Ge) => ({
    vertical: y1(Ge, te.vertical),
    horizontal: g1(Ge, te.horizontal)
  }), [te.horizontal, te.vertical]), fe = X.useCallback((Ge) => {
    const tt = {
      width: Ge.offsetWidth,
      height: Ge.offsetHeight
    }, pt = W(tt);
    if (V === "none")
      return {
        top: null,
        left: null,
        transformOrigin: S1(pt)
      };
    const Jt = Ae();
    let Gt = Jt.top - pt.vertical, mn = Jt.left - pt.horizontal;
    const Jn = Gt + tt.height, er = mn + tt.width, Lt = Es(uy(z)), _n = Lt.innerHeight - de, Kt = Lt.innerWidth - de;
    if (de !== null && Gt < de) {
      const zt = Gt - de;
      Gt -= zt, pt.vertical += zt;
    } else if (de !== null && Jn > _n) {
      const zt = Jn - _n;
      Gt -= zt, pt.vertical += zt;
    }
    if (process.env.NODE_ENV !== "production" && tt.height > _n && tt.height && _n && console.error(["MUI: The popover component is too tall.", `Some part of it can not be seen on the screen (${tt.height - _n}px).`, "Please consider adding a `max-height` to improve the user-experience."].join(`
`)), de !== null && mn < de) {
      const zt = mn - de;
      mn -= zt, pt.horizontal += zt;
    } else if (er > Kt) {
      const zt = er - Kt;
      mn -= zt, pt.horizontal += zt;
    }
    return {
      top: `${Math.round(Gt)}px`,
      left: `${Math.round(mn)}px`,
      transformOrigin: S1(pt)
    };
  }, [z, V, Ae, W, de]), [ue, ut] = X.useState(me), Ze = X.useCallback(() => {
    const Ge = se.current;
    if (!Ge)
      return;
    const tt = fe(Ge);
    tt.top !== null && (Ge.style.top = tt.top), tt.left !== null && (Ge.style.left = tt.left), Ge.style.transformOrigin = tt.transformOrigin, ut(!0);
  }, [fe]);
  X.useEffect(() => (Ve && window.addEventListener("scroll", Ze), () => window.removeEventListener("scroll", Ze)), [z, Ve, Ze]);
  const gt = (Ge, tt) => {
    ke && ke(Ge, tt), Ze();
  }, st = () => {
    ut(!1);
  };
  X.useEffect(() => {
    me && Ze();
  }), X.useImperativeHandle(A, () => me ? {
    updatePosition: () => {
      Ze();
    }
  } : null, [me, Ze]), X.useEffect(() => {
    if (!me)
      return;
    const Ge = x1(() => {
      Ze();
    }), tt = Es(z);
    return tt.addEventListener("resize", Ge), () => {
      Ge.clear(), tt.removeEventListener("resize", Ge);
    };
  }, [z, me, Ze]);
  let _t = J;
  J === "auto" && !le.muiSupportAuto && (_t = void 0);
  const yt = ee || (z ? Xa(uy(z)).body : void 0), dn = (w = B == null ? void 0 : B.root) != null ? w : i_, Bt = (R = B == null ? void 0 : B.paper) != null ? R : nx, an = Tf({
    elementType: Bt,
    externalSlotProps: K({}, Be, {
      style: ue ? Be.style : K({}, Be.style, {
        opacity: 0
      })
    }),
    additionalProps: {
      elevation: pe,
      ref: ve
    },
    ownerState: Ce,
    className: cr(be.paper, Be == null ? void 0 : Be.className)
  }), Mn = Tf({
    elementType: dn,
    externalSlotProps: ($ == null ? void 0 : $.root) || {},
    externalForwardedProps: Ne,
    additionalProps: {
      ref: S,
      slotProps: {
        backdrop: {
          invisible: !0
        }
      },
      container: yt,
      open: me
    },
    ownerState: Ce,
    className: cr(be.root, I)
  }), {
    slotProps: at
  } = Mn, wt = qt(Mn, r_);
  return /* @__PURE__ */ qe(dn, K({}, wt, !sy(dn) && {
    slotProps: at,
    disableScrollLock: Ve
  }, {
    children: /* @__PURE__ */ qe(le, K({
      appear: !0,
      in: me,
      onEntering: gt,
      onExited: st,
      timeout: _t
    }, Ue, {
      children: /* @__PURE__ */ qe(Bt, K({}, an, {
        children: q
      }))
    }))
  }));
});
process.env.NODE_ENV !== "production" && (rx.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports updatePosition() action.
   */
  action: iu,
  /**
   * An HTML element, [PopoverVirtualElement](/material-ui/react-popover/#virtual-element),
   * or a function that returns either.
   * It's used to set the position of the popover.
   */
  anchorEl: cE(c.oneOfType([Xp, c.func]), (v) => {
    if (v.open && (!v.anchorReference || v.anchorReference === "anchorEl")) {
      const m = uy(v.anchorEl);
      if (m && m.nodeType === 1) {
        const S = m.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && S.top === 0 && S.left === 0 && S.right === 0 && S.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", `It should be an Element or PopoverVirtualElement instance but it's \`${m}\` instead.`].join(`
`));
    }
    return null;
  }),
  /**
   * This is the point on the anchor where the popover's
   * `anchorEl` will attach to. This is not used when the
   * anchorReference is 'anchorPosition'.
   *
   * Options:
   * vertical: [top, center, bottom];
   * horizontal: [left, center, right].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  anchorOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * This is the position that may be used to set the position of the popover.
   * The coordinates are relative to the application's client area.
   */
  anchorPosition: c.shape({
    left: c.number.isRequired,
    top: c.number.isRequired
  }),
  /**
   * This determines which anchor prop to refer to when setting
   * the position of the popover.
   * @default 'anchorEl'
   */
  anchorReference: c.oneOf(["anchorEl", "anchorPosition", "none"]),
  /**
   * The content of the component.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * An HTML element, component instance, or function that returns either.
   * The `container` will passed to the Modal component.
   *
   * By default, it uses the body of the anchorEl's top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: c.oneOfType([Xp, c.func]),
  /**
   * Disable the scroll lock behavior.
   * @default false
   */
  disableScrollLock: c.bool,
  /**
   * The elevation of the popover.
   * @default 8
   */
  elevation: aN,
  /**
   * Specifies how close to the edge of the window the popover can appear.
   * If null, the popover will not be constrained by the window.
   * @default 16
   */
  marginThreshold: c.number,
  /**
   * Callback fired when the component requests to be closed.
   * The `reason` parameter can optionally be used to control the response to `onClose`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * Props applied to the [`Paper`](/material-ui/api/paper/) element.
   *
   * This prop is an alias for `slotProps.paper` and will be overriden by it if both are used.
   * @deprecated Use `slotProps.paper` instead.
   *
   * @default {}
   */
  PaperProps: c.shape({
    component: D1
  }),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: c.shape({
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: c.shape({
    paper: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * This is the point on the popover which
   * will attach to the anchor's origin.
   *
   * Options:
   * vertical: [top, center, bottom, x(px)];
   * horizontal: [left, center, right, x(px)].
   * @default {
   *   vertical: 'top',
   *   horizontal: 'left',
   * }
   */
  transformOrigin: c.shape({
    horizontal: c.oneOfType([c.oneOf(["center", "left", "right"]), c.number]).isRequired,
    vertical: c.oneOfType([c.oneOf(["bottom", "center", "top"]), c.number]).isRequired
  }),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Grow
   */
  TransitionComponent: c.elementType,
  /**
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: c.object
});
const o_ = rx;
function l_(v) {
  return Kr("MuiMenu", v);
}
Xr("MuiMenu", ["root", "paper", "list"]);
const u_ = ["onEntering"], s_ = ["autoFocus", "children", "className", "disableAutoFocusItem", "MenuListProps", "onClose", "open", "PaperProps", "PopoverClasses", "transitionDuration", "TransitionProps", "variant", "slots", "slotProps"], c_ = {
  vertical: "top",
  horizontal: "right"
}, f_ = {
  vertical: "top",
  horizontal: "left"
}, d_ = (v) => {
  const {
    classes: m
  } = v;
  return Zr({
    root: ["root"],
    paper: ["paper"],
    list: ["list"]
  }, l_, m);
}, p_ = kt(o_, {
  shouldForwardProp: (v) => bs(v) || v === "classes",
  name: "MuiMenu",
  slot: "Root",
  overridesResolver: (v, m) => m.root
})({}), v_ = kt(nx, {
  name: "MuiMenu",
  slot: "Paper",
  overridesResolver: (v, m) => m.paper
})({
  // specZ: The maximum height of a simple menu should be one or more rows less than the view
  // height. This ensures a tappable area outside of the simple menu with which to dismiss
  // the menu.
  maxHeight: "calc(100% - 96px)",
  // Add iOS momentum scrolling for iOS < 13.0
  WebkitOverflowScrolling: "touch"
}), h_ = kt(JM, {
  name: "MuiMenu",
  slot: "List",
  overridesResolver: (v, m) => m.list
})({
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0
}), ax = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x, w;
  const R = ba({
    props: m,
    name: "MuiMenu"
  }), {
    autoFocus: g = !0,
    children: A,
    className: z,
    disableAutoFocusItem: F = !1,
    MenuListProps: ne = {},
    onClose: V,
    open: q,
    PaperProps: I = {},
    PopoverClasses: ee,
    transitionDuration: pe = "auto",
    TransitionProps: {
      onEntering: de
    } = {},
    variant: me = "selectedMenu",
    slots: Se = {},
    slotProps: B = {}
  } = R, $ = qt(R.TransitionProps, u_), te = qt(R, s_), le = sE(), J = le.direction === "rtl", ke = K({}, R, {
    autoFocus: g,
    disableAutoFocusItem: F,
    MenuListProps: ne,
    onEntering: de,
    PaperProps: I,
    transitionDuration: pe,
    TransitionProps: $,
    variant: me
  }), Ve = d_(ke), Ue = g && !F && q, Ne = X.useRef(null), Be = (fe, ue) => {
    Ne.current && Ne.current.adjustStyleForScrollbar(fe, le), de && de(fe, ue);
  }, se = (fe) => {
    fe.key === "Tab" && (fe.preventDefault(), V && V(fe, "tabKeyDown"));
  };
  let ve = -1;
  X.Children.map(A, (fe, ue) => {
    /* @__PURE__ */ X.isValidElement(fe) && (process.env.NODE_ENV !== "production" && uE.isFragment(fe) && console.error(["MUI: The Menu component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`)), fe.props.disabled || (me === "selectedMenu" && fe.props.selected || ve === -1) && (ve = ue));
  });
  const Ce = (x = Se.paper) != null ? x : v_, be = (w = B.paper) != null ? w : I, Ae = Tf({
    elementType: Se.root,
    externalSlotProps: B.root,
    ownerState: ke,
    className: [Ve.root, z]
  }), W = Tf({
    elementType: Ce,
    externalSlotProps: be,
    ownerState: ke,
    className: Ve.paper
  });
  return /* @__PURE__ */ qe(p_, K({
    onClose: V,
    anchorOrigin: {
      vertical: "bottom",
      horizontal: J ? "right" : "left"
    },
    transformOrigin: J ? c_ : f_,
    slots: {
      paper: Ce,
      root: Se.root
    },
    slotProps: {
      root: Ae,
      paper: W
    },
    open: q,
    ref: S,
    transitionDuration: pe,
    TransitionProps: K({
      onEntering: Be
    }, $),
    ownerState: ke
  }, te, {
    classes: ee,
    children: /* @__PURE__ */ qe(h_, K({
      onKeyDown: se,
      actions: Ne,
      autoFocus: g && (ve === -1 || F),
      autoFocusItem: Ue,
      variant: me
    }, ne, {
      className: cr(Ve.list, ne.className),
      children: A
    }))
  }));
});
process.env.NODE_ENV !== "production" && (ax.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, or a function that returns one.
   * It's used to set the position of the menu.
   */
  anchorEl: c.oneOfType([Xp, c.func]),
  /**
   * If `true` (Default) will focus the `[role="menu"]` if no focusable child is found. Disabled
   * children are not focusable. If you set this prop to `false` focus will be placed
   * on the parent modal container. This has severe accessibility implications
   * and should only be considered if you manage focus otherwise.
   * @default true
   */
  autoFocus: c.bool,
  /**
   * Menu contents, normally `MenuItem`s.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * When opening the menu will not focus the active item but the `[role="menu"]`
   * unless `autoFocus` is also set to `false`. Not using the default means not
   * following WAI-ARIA authoring practices. Please be considerate about possible
   * accessibility implications.
   * @default false
   */
  disableAutoFocusItem: c.bool,
  /**
   * Props applied to the [`MenuList`](/material-ui/api/menu-list/) element.
   * @default {}
   */
  MenuListProps: c.object,
  /**
   * Callback fired when the component requests to be closed.
   *
   * @param {object} event The event source of the callback.
   * @param {string} reason Can be: `"escapeKeyDown"`, `"backdropClick"`, `"tabKeyDown"`.
   */
  onClose: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool.isRequired,
  /**
   * @ignore
   */
  PaperProps: c.object,
  /**
   * `classes` prop applied to the [`Popover`](/material-ui/api/popover/) element.
   */
  PopoverClasses: c.object,
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * @default {}
   */
  slotProps: c.shape({
    paper: c.oneOfType([c.func, c.object]),
    root: c.oneOfType([c.func, c.object])
  }),
  /**
   * The components used for each slot inside.
   *
   * @default {}
   */
  slots: c.shape({
    paper: c.elementType,
    root: c.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The length of the transition in `ms`, or 'auto'
   * @default 'auto'
   */
  transitionDuration: c.oneOfType([c.oneOf(["auto"]), c.number, c.shape({
    appear: c.number,
    enter: c.number,
    exit: c.number
  })]),
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   * @default {}
   */
  TransitionProps: c.object,
  /**
   * The variant to use. Use `menu` to prevent selected items from impacting the initial focus.
   * @default 'selectedMenu'
   */
  variant: c.oneOf(["menu", "selectedMenu"])
});
const m_ = ax;
function y_(v) {
  return Kr("MuiNativeSelect", v);
}
const g_ = Xr("MuiNativeSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), yE = g_, S_ = ["className", "disabled", "error", "IconComponent", "inputRef", "variant"], E_ = (v) => {
  const {
    classes: m,
    variant: S,
    disabled: x,
    multiple: w,
    open: R,
    error: g
  } = v, A = {
    select: ["select", S, x && "disabled", w && "multiple", g && "error"],
    icon: ["icon", `icon${Oi(S)}`, R && "iconOpen", x && "disabled"]
  };
  return Zr(A, y_, m);
}, ix = ({
  ownerState: v,
  theme: m
}) => K({
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  // When interacting quickly, the text can end up selected.
  // Native select can't be selected either.
  userSelect: "none",
  borderRadius: 0,
  // Reset
  cursor: "pointer",
  "&:focus": K({}, m.vars ? {
    backgroundColor: `rgba(${m.vars.palette.common.onBackgroundChannel} / 0.05)`
  } : {
    backgroundColor: m.palette.mode === "light" ? "rgba(0, 0, 0, 0.05)" : "rgba(255, 255, 255, 0.05)"
  }, {
    borderRadius: 0
    // Reset Chrome style
  }),
  // Remove IE11 arrow
  "&::-ms-expand": {
    display: "none"
  },
  [`&.${yE.disabled}`]: {
    cursor: "default"
  },
  "&[multiple]": {
    height: "auto"
  },
  "&:not([multiple]) option, &:not([multiple]) optgroup": {
    backgroundColor: (m.vars || m).palette.background.paper
  },
  // Bump specificity to allow extending custom inputs
  "&&&": {
    paddingRight: 24,
    minWidth: 16
    // So it doesn't collapse.
  }
}, v.variant === "filled" && {
  "&&&": {
    paddingRight: 32
  }
}, v.variant === "outlined" && {
  borderRadius: (m.vars || m).shape.borderRadius,
  "&:focus": {
    borderRadius: (m.vars || m).shape.borderRadius
    // Reset the reset for Chrome style
  },
  "&&&": {
    paddingRight: 32
  }
}), b_ = kt("select", {
  name: "MuiNativeSelect",
  slot: "Select",
  shouldForwardProp: bs,
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [m.select, m[S.variant], S.error && m.error, {
      [`&.${yE.multiple}`]: m.multiple
    }];
  }
})(ix), ox = ({
  ownerState: v,
  theme: m
}) => K({
  // We use a position absolute over a flexbox in order to forward the pointer events
  // to the input and to support wrapping tags..
  position: "absolute",
  right: 0,
  top: "calc(50% - .5em)",
  // Center vertically, height is 1em
  pointerEvents: "none",
  // Don't block pointer events on the select under the icon.
  color: (m.vars || m).palette.action.active,
  [`&.${yE.disabled}`]: {
    color: (m.vars || m).palette.action.disabled
  }
}, v.open && {
  transform: "rotate(180deg)"
}, v.variant === "filled" && {
  right: 7
}, v.variant === "outlined" && {
  right: 7
}), C_ = kt("svg", {
  name: "MuiNativeSelect",
  slot: "Icon",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [m.icon, S.variant && m[`icon${Oi(S.variant)}`], S.open && m.iconOpen];
  }
})(ox), lx = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const {
    className: x,
    disabled: w,
    error: R,
    IconComponent: g,
    inputRef: A,
    variant: z = "standard"
  } = m, F = qt(m, S_), ne = K({}, m, {
    disabled: w,
    variant: z,
    error: R
  }), V = E_(ne);
  return /* @__PURE__ */ Za(X.Fragment, {
    children: [/* @__PURE__ */ qe(b_, K({
      ownerState: ne,
      className: cr(V.select, x),
      disabled: w,
      ref: A || S
    }, F)), m.multiple ? null : /* @__PURE__ */ qe(C_, {
      as: g,
      ownerState: ne,
      className: V.icon
    })]
  });
});
process.env.NODE_ENV !== "production" && (lx.propTypes = {
  /**
   * The option elements to populate the select with.
   * Can be some `<option>` elements.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: c.object,
  /**
   * The CSS class name of the select element.
   */
  className: c.string,
  /**
   * If `true`, the select is disabled.
   */
  disabled: c.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: c.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: c.elementType.isRequired,
  /**
   * Use that prop to pass a ref to the native select element.
   * @deprecated
   */
  inputRef: iu,
  /**
   * @ignore
   */
  multiple: c.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: c.string,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * The input value.
   */
  value: c.any,
  /**
   * The variant to use.
   */
  variant: c.oneOf(["standard", "outlined", "filled"])
});
const T_ = lx;
function x_(v) {
  return Kr("MuiSelect", v);
}
const R_ = Xr("MuiSelect", ["root", "select", "multiple", "filled", "outlined", "standard", "disabled", "focused", "icon", "iconOpen", "iconFilled", "iconOutlined", "iconStandard", "nativeInput", "error"]), Qp = R_;
var E1;
const w_ = ["aria-describedby", "aria-label", "autoFocus", "autoWidth", "children", "className", "defaultOpen", "defaultValue", "disabled", "displayEmpty", "error", "IconComponent", "inputRef", "labelId", "MenuProps", "multiple", "name", "onBlur", "onChange", "onClose", "onFocus", "onOpen", "open", "readOnly", "renderValue", "SelectDisplayProps", "tabIndex", "type", "value", "variant"], D_ = kt("div", {
  name: "MuiSelect",
  slot: "Select",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [
      // Win specificity over the input base
      {
        [`&.${Qp.select}`]: m.select
      },
      {
        [`&.${Qp.select}`]: m[S.variant]
      },
      {
        [`&.${Qp.error}`]: m.error
      },
      {
        [`&.${Qp.multiple}`]: m.multiple
      }
    ];
  }
})(ix, {
  // Win specificity over the input base
  [`&.${Qp.select}`]: {
    height: "auto",
    // Resets for multiple select with chips
    minHeight: "1.4375em",
    // Required for select\text-field height consistency
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    overflow: "hidden"
  }
}), k_ = kt("svg", {
  name: "MuiSelect",
  slot: "Icon",
  overridesResolver: (v, m) => {
    const {
      ownerState: S
    } = v;
    return [m.icon, S.variant && m[`icon${Oi(S.variant)}`], S.open && m.iconOpen];
  }
})(ox), O_ = kt("input", {
  shouldForwardProp: (v) => JO(v) && v !== "classes",
  name: "MuiSelect",
  slot: "NativeInput",
  overridesResolver: (v, m) => m.nativeInput
})({
  bottom: 0,
  left: 0,
  position: "absolute",
  opacity: 0,
  pointerEvents: "none",
  width: "100%",
  boxSizing: "border-box"
});
function b1(v, m) {
  return typeof m == "object" && m !== null ? v === m : String(v) === String(m);
}
function N_(v) {
  return v == null || typeof v == "string" && !v.trim();
}
const M_ = (v) => {
  const {
    classes: m,
    variant: S,
    disabled: x,
    multiple: w,
    open: R,
    error: g
  } = v, A = {
    select: ["select", S, x && "disabled", w && "multiple", g && "error"],
    icon: ["icon", `icon${Oi(S)}`, R && "iconOpen", x && "disabled"],
    nativeInput: ["nativeInput"]
  };
  return Zr(A, x_, m);
}, ux = /* @__PURE__ */ X.forwardRef(function(m, S) {
  var x;
  const {
    "aria-describedby": w,
    "aria-label": R,
    autoFocus: g,
    autoWidth: A,
    children: z,
    className: F,
    defaultOpen: ne,
    defaultValue: V,
    disabled: q,
    displayEmpty: I,
    error: ee = !1,
    IconComponent: pe,
    inputRef: de,
    labelId: me,
    MenuProps: Se = {},
    multiple: B,
    name: $,
    onBlur: te,
    onChange: le,
    onClose: J,
    onFocus: ke,
    onOpen: Ve,
    open: Ue,
    readOnly: Ne,
    renderValue: Be,
    SelectDisplayProps: se = {},
    tabIndex: ve,
    value: Ce,
    variant: be = "standard"
  } = m, Ae = qt(m, w_), [W, fe] = e1({
    controlled: Ce,
    default: V,
    name: "Select"
  }), [ue, ut] = e1({
    controlled: Ue,
    default: ne,
    name: "Select"
  }), Ze = X.useRef(null), gt = X.useRef(null), [st, _t] = X.useState(null), {
    current: yt
  } = X.useRef(Ue != null), [dn, Bt] = X.useState(), an = Ja(S, de), Mn = X.useCallback((he) => {
    gt.current = he, he && _t(he);
  }, []), at = st == null ? void 0 : st.parentNode;
  X.useImperativeHandle(an, () => ({
    focus: () => {
      gt.current.focus();
    },
    node: Ze.current,
    value: W
  }), [W]), X.useEffect(() => {
    ne && ue && st && !yt && (Bt(A ? null : at.clientWidth), gt.current.focus());
  }, [st, A]), X.useEffect(() => {
    g && gt.current.focus();
  }, [g]), X.useEffect(() => {
    if (!me)
      return;
    const he = Xa(gt.current).getElementById(me);
    if (he) {
      const $e = () => {
        getSelection().isCollapsed && gt.current.focus();
      };
      return he.addEventListener("click", $e), () => {
        he.removeEventListener("click", $e);
      };
    }
  }, [me]);
  const wt = (he, $e) => {
    he ? Ve && Ve($e) : J && J($e), yt || (Bt(A ? null : at.clientWidth), ut(he));
  }, Ge = (he) => {
    he.button === 0 && (he.preventDefault(), gt.current.focus(), wt(!0, he));
  }, tt = (he) => {
    wt(!1, he);
  }, pt = X.Children.toArray(z), Jt = (he) => {
    const $e = pt.find((Ct) => Ct.props.value === he.target.value);
    $e !== void 0 && (fe($e.props.value), le && le(he, $e));
  }, Gt = (he) => ($e) => {
    let Ct;
    if ($e.currentTarget.hasAttribute("tabindex")) {
      if (B) {
        Ct = Array.isArray(W) ? W.slice() : [];
        const Vt = W.indexOf(he.props.value);
        Vt === -1 ? Ct.push(he.props.value) : Ct.splice(Vt, 1);
      } else
        Ct = he.props.value;
      if (he.props.onClick && he.props.onClick($e), W !== Ct && (fe(Ct), le)) {
        const Vt = $e.nativeEvent || $e, fr = new Vt.constructor(Vt.type, Vt);
        Object.defineProperty(fr, "target", {
          writable: !0,
          value: {
            value: Ct,
            name: $
          }
        }), le(fr, he);
      }
      B || wt(!1, $e);
    }
  }, mn = (he) => {
    Ne || [
      " ",
      "ArrowUp",
      "ArrowDown",
      // The native select doesn't respond to enter on macOS, but it's recommended by
      // https://www.w3.org/WAI/ARIA/apg/patterns/combobox/examples/combobox-select-only/
      "Enter"
    ].indexOf(he.key) !== -1 && (he.preventDefault(), wt(!0, he));
  }, Jn = st !== null && ue, er = (he) => {
    !Jn && te && (Object.defineProperty(he, "target", {
      writable: !0,
      value: {
        value: W,
        name: $
      }
    }), te(he));
  };
  delete Ae["aria-invalid"];
  let Lt, _n;
  const Kt = [];
  let zt = !1, Vn = !1;
  (py({
    value: W
  }) || I) && (Be ? Lt = Be(W) : zt = !0);
  const Tr = pt.map((he) => {
    if (!/* @__PURE__ */ X.isValidElement(he))
      return null;
    process.env.NODE_ENV !== "production" && uE.isFragment(he) && console.error(["MUI: The Select component doesn't accept a Fragment as a child.", "Consider providing an array instead."].join(`
`));
    let $e;
    if (B) {
      if (!Array.isArray(W))
        throw new Error(process.env.NODE_ENV !== "production" ? "MUI: The `value` prop must be an array when using the `Select` component with `multiple`." : C1(2));
      $e = W.some((Ct) => b1(Ct, he.props.value)), $e && zt && Kt.push(he.props.children);
    } else
      $e = b1(W, he.props.value), $e && zt && (_n = he.props.children);
    return $e && (Vn = !0), /* @__PURE__ */ X.cloneElement(he, {
      "aria-selected": $e ? "true" : "false",
      onClick: Gt(he),
      onKeyUp: (Ct) => {
        Ct.key === " " && Ct.preventDefault(), he.props.onKeyUp && he.props.onKeyUp(Ct);
      },
      role: "option",
      selected: $e,
      value: void 0,
      // The value is most likely not a valid HTML attribute.
      "data-value": he.props.value
      // Instead, we provide it as a data attribute.
    });
  });
  process.env.NODE_ENV !== "production" && X.useEffect(() => {
    if (!Vn && !B && W !== "") {
      const he = pt.map(($e) => $e.props.value);
      console.warn([`MUI: You have provided an out-of-range value \`${W}\` for the select ${$ ? `(name="${$}") ` : ""}component.`, "Consider providing a value that matches one of the available options or ''.", `The available values are ${he.filter(($e) => $e != null).map(($e) => `\`${$e}\``).join(", ") || '""'}.`].join(`
`));
    }
  }, [Vn, pt, B, $, W]), zt && (B ? Kt.length === 0 ? Lt = null : Lt = Kt.reduce((he, $e, Ct) => (he.push($e), Ct < Kt.length - 1 && he.push(", "), he), []) : Lt = _n);
  let yn = dn;
  !A && yt && st && (yn = at.clientWidth);
  let ct;
  typeof ve < "u" ? ct = ve : ct = q ? null : 0;
  const Ca = se.id || ($ ? `mui-component-select-${$}` : void 0), tr = K({}, m, {
    variant: be,
    value: W,
    open: Jn,
    error: ee
  }), Ee = M_(tr), He = K({}, Se.PaperProps, (x = Se.slotProps) == null ? void 0 : x.paper), ft = R1();
  return /* @__PURE__ */ Za(X.Fragment, {
    children: [/* @__PURE__ */ qe(D_, K({
      ref: Mn,
      tabIndex: ct,
      role: "combobox",
      "aria-controls": ft,
      "aria-disabled": q ? "true" : void 0,
      "aria-expanded": Jn ? "true" : "false",
      "aria-haspopup": "listbox",
      "aria-label": R,
      "aria-labelledby": [me, Ca].filter(Boolean).join(" ") || void 0,
      "aria-describedby": w,
      onKeyDown: mn,
      onMouseDown: q || Ne ? null : Ge,
      onBlur: er,
      onFocus: ke
    }, se, {
      ownerState: tr,
      className: cr(se.className, Ee.select, F),
      id: Ca,
      children: N_(Lt) ? (
        // notranslate needed while Google Translate will not fix zero-width space issue
        E1 || (E1 = /* @__PURE__ */ qe("span", {
          className: "notranslate",
          children: "​"
        }))
      ) : Lt
    })), /* @__PURE__ */ qe(O_, K({
      "aria-invalid": ee,
      value: Array.isArray(W) ? W.join(",") : W,
      name: $,
      ref: Ze,
      "aria-hidden": !0,
      onChange: Jt,
      tabIndex: -1,
      disabled: q,
      className: Ee.nativeInput,
      autoFocus: g,
      ownerState: tr
    }, Ae)), /* @__PURE__ */ qe(k_, {
      as: pe,
      className: Ee.icon,
      ownerState: tr
    }), /* @__PURE__ */ qe(m_, K({
      id: `menu-${$ || ""}`,
      anchorEl: at,
      open: Jn,
      onClose: tt,
      anchorOrigin: {
        vertical: "bottom",
        horizontal: "center"
      },
      transformOrigin: {
        vertical: "top",
        horizontal: "center"
      }
    }, Se, {
      MenuListProps: K({
        "aria-labelledby": me,
        role: "listbox",
        "aria-multiselectable": B ? "true" : void 0,
        disableListWrap: !0,
        id: ft
      }, Se.MenuListProps),
      slotProps: K({}, Se.slotProps, {
        paper: K({}, He, {
          style: K({
            minWidth: yn
          }, He != null ? He.style : null)
        })
      }),
      children: Tr
    }))]
  });
});
process.env.NODE_ENV !== "production" && (ux.propTypes = {
  /**
   * @ignore
   */
  "aria-describedby": c.string,
  /**
   * @ignore
   */
  "aria-label": c.string,
  /**
   * @ignore
   */
  autoFocus: c.bool,
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   */
  autoWidth: c.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `<MenuItem>` elements.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: c.object,
  /**
   * The CSS class name of the select element.
   */
  className: c.string,
  /**
   * If `true`, the component is toggled on mount. Use when the component open state is not controlled.
   * You can only use it when the `native` prop is `false` (default).
   */
  defaultOpen: c.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the select is disabled.
   */
  disabled: c.bool,
  /**
   * If `true`, the selected item is displayed even if its value is empty.
   */
  displayEmpty: c.bool,
  /**
   * If `true`, the `select input` will indicate an error.
   */
  error: c.bool,
  /**
   * The icon that displays the arrow.
   */
  IconComponent: c.elementType.isRequired,
  /**
   * Imperative handle implementing `{ value: T, node: HTMLElement, focus(): void }`
   * Equivalent to `ref`
   */
  inputRef: iu,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: c.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: c.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   */
  multiple: c.bool,
  /**
   * Name attribute of the `select` or hidden `input` element.
   */
  name: c.string,
  /**
   * @ignore
   */
  onBlur: c.func,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * @param {object} [child] The react element that was selected.
   */
  onChange: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: c.func,
  /**
   * If `true`, the component is shown.
   */
  open: c.bool,
  /**
   * @ignore
   */
  readOnly: c.bool,
  /**
   * Render the selected value.
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: c.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: c.object,
  /**
   * @ignore
   */
  tabIndex: c.oneOfType([c.number, c.string]),
  /**
   * @ignore
   */
  type: c.any,
  /**
   * The input value.
   */
  value: c.any,
  /**
   * The variant to use.
   */
  variant: c.oneOf(["standard", "outlined", "filled"])
});
const __ = ux, L_ = iN(/* @__PURE__ */ qe("path", {
  d: "M7 10l5 5 5-5z"
}), "ArrowDropDown"), z_ = ["autoWidth", "children", "classes", "className", "defaultOpen", "displayEmpty", "IconComponent", "id", "input", "inputProps", "label", "labelId", "MenuProps", "multiple", "native", "onClose", "onOpen", "open", "renderValue", "SelectDisplayProps", "variant"], U_ = ["root"], A_ = (v) => {
  const {
    classes: m
  } = v;
  return m;
}, gE = {
  name: "MuiSelect",
  overridesResolver: (v, m) => m.root,
  shouldForwardProp: (v) => bs(v) && v !== "variant",
  slot: "Root"
}, F_ = kt(Q1, gE)(""), P_ = kt(K1, gE)(""), H_ = kt(q1, gE)(""), SE = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = ba({
    name: "MuiSelect",
    props: m
  }), {
    autoWidth: w = !1,
    children: R,
    classes: g = {},
    className: A,
    defaultOpen: z = !1,
    displayEmpty: F = !1,
    IconComponent: ne = L_,
    id: V,
    input: q,
    inputProps: I,
    label: ee,
    labelId: pe,
    MenuProps: de,
    multiple: me = !1,
    native: Se = !1,
    onClose: B,
    onOpen: $,
    open: te,
    renderValue: le,
    SelectDisplayProps: J,
    variant: ke = "outlined"
  } = x, Ve = qt(x, z_), Ue = Se ? T_ : __, Ne = Zp(), Be = Jp({
    props: x,
    muiFormControl: Ne,
    states: ["variant", "error"]
  }), se = Be.variant || ke, ve = K({}, x, {
    variant: se,
    classes: g
  }), Ce = A_(ve), be = qt(Ce, U_), Ae = q || {
    standard: /* @__PURE__ */ qe(F_, {
      ownerState: ve
    }),
    outlined: /* @__PURE__ */ qe(P_, {
      label: ee,
      ownerState: ve
    }),
    filled: /* @__PURE__ */ qe(H_, {
      ownerState: ve
    })
  }[se], W = Ja(S, Ae.ref);
  return /* @__PURE__ */ qe(X.Fragment, {
    children: /* @__PURE__ */ X.cloneElement(Ae, K({
      // Most of the logic is implemented in `SelectInput`.
      // The `Select` component is a simple API wrapper to expose something better to play with.
      inputComponent: Ue,
      inputProps: K({
        children: R,
        error: Be.error,
        IconComponent: ne,
        variant: se,
        type: void 0,
        // We render a select. We can ignore the type provided by the `Input`.
        multiple: me
      }, Se ? {
        id: V
      } : {
        autoWidth: w,
        defaultOpen: z,
        displayEmpty: F,
        labelId: pe,
        MenuProps: de,
        onClose: B,
        onOpen: $,
        open: te,
        renderValue: le,
        SelectDisplayProps: K({
          id: V
        }, J)
      }, I, {
        classes: I ? lE(be, I.classes) : be
      }, q ? q.props.inputProps : {})
    }, me && Se && se === "outlined" ? {
      notched: !0
    } : {}, {
      ref: W,
      className: cr(Ae.props.className, A, Ce.root)
    }, !q && {
      variant: se
    }, Ve))
  });
});
process.env.NODE_ENV !== "production" && (SE.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the width of the popover will automatically be set according to the items inside the
   * menu, otherwise it will be at least the width of the select input.
   * @default false
   */
  autoWidth: c.bool,
  /**
   * The option elements to populate the select with.
   * Can be some `MenuItem` when `native` is false and `option` when `native` is true.
   *
   * ⚠️The `MenuItem` elements **must** be direct descendants when `native` is false.
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   * @default {}
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * If `true`, the component is initially open. Use when the component open state is not controlled (i.e. the `open` prop is not defined).
   * You can only use it when the `native` prop is `false` (default).
   * @default false
   */
  defaultOpen: c.bool,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, a value is displayed even if no items are selected.
   *
   * In order to display a meaningful value, a function can be passed to the `renderValue` prop which
   * returns the value to be displayed when no items are selected.
   *
   * ⚠️ When using this prop, make sure the label doesn't overlap with the empty displayed value.
   * The label should either be hidden or forced to a shrunk state.
   * @default false
   */
  displayEmpty: c.bool,
  /**
   * The icon that displays the arrow.
   * @default ArrowDropDownIcon
   */
  IconComponent: c.elementType,
  /**
   * The `id` of the wrapper element or the `select` element when `native`.
   */
  id: c.string,
  /**
   * An `Input` element; does not have to be a material-ui specific `Input`.
   */
  input: c.element,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   * When `native` is `true`, the attributes are applied on the `select` element.
   */
  inputProps: c.object,
  /**
   * See [OutlinedInput#label](/material-ui/api/outlined-input/#props)
   */
  label: c.node,
  /**
   * The ID of an element that acts as an additional label. The Select will
   * be labelled by the additional label and the selected value.
   */
  labelId: c.string,
  /**
   * Props applied to the [`Menu`](/material-ui/api/menu/) element.
   */
  MenuProps: c.object,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: c.bool,
  /**
   * If `true`, the component uses a native `select` element.
   * @default false
   */
  native: c.bool,
  /**
   * Callback fired when a menu item is selected.
   *
   * @param {SelectChangeEvent<Value>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (any).
   * **Warning**: This is a generic event, not a change event, unless the change event is caused by browser autofill.
   * @param {object} [child] The react element that was selected when `native` is `false` (default).
   */
  onChange: c.func,
  /**
   * Callback fired when the component requests to be closed.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select collapses).
   *
   * @param {object} event The event source of the callback.
   */
  onClose: c.func,
  /**
   * Callback fired when the component requests to be opened.
   * Use it in either controlled (see the `open` prop), or uncontrolled mode (to detect when the Select expands).
   *
   * @param {object} event The event source of the callback.
   */
  onOpen: c.func,
  /**
   * If `true`, the component is shown.
   * You can only use it when the `native` prop is `false` (default).
   */
  open: c.bool,
  /**
   * Render the selected value.
   * You can only use it when the `native` prop is `false` (default).
   *
   * @param {any} value The `value` provided to the component.
   * @returns {ReactNode}
   */
  renderValue: c.func,
  /**
   * Props applied to the clickable div element.
   */
  SelectDisplayProps: c.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * The `input` value. Providing an empty string will select no options.
   * Set to an empty string `''` if you don't want any of the available options to be selected.
   *
   * If the value is an object it must have reference equality with the option in order to be selected.
   * If the value is not an object, the string representation must match with the string representation of the option in order to be selected.
   */
  value: c.oneOfType([c.oneOf([""]), c.any]),
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
SE.muiName = "Select";
const j_ = SE;
function V_(v) {
  return Kr("MuiTextField", v);
}
Xr("MuiTextField", ["root"]);
const B_ = ["autoComplete", "autoFocus", "children", "className", "color", "defaultValue", "disabled", "error", "FormHelperTextProps", "fullWidth", "helperText", "id", "InputLabelProps", "inputProps", "InputProps", "inputRef", "label", "maxRows", "minRows", "multiline", "name", "onBlur", "onChange", "onFocus", "placeholder", "required", "rows", "select", "SelectProps", "type", "value", "variant"], I_ = {
  standard: Q1,
  filled: q1,
  outlined: K1
}, $_ = (v) => {
  const {
    classes: m
  } = v;
  return Zr({
    root: ["root"]
  }, V_, m);
}, W_ = kt(XM, {
  name: "MuiTextField",
  slot: "Root",
  overridesResolver: (v, m) => m.root
})({}), sx = /* @__PURE__ */ X.forwardRef(function(m, S) {
  const x = ba({
    props: m,
    name: "MuiTextField"
  }), {
    autoComplete: w,
    autoFocus: R = !1,
    children: g,
    className: A,
    color: z = "primary",
    defaultValue: F,
    disabled: ne = !1,
    error: V = !1,
    FormHelperTextProps: q,
    fullWidth: I = !1,
    helperText: ee,
    id: pe,
    InputLabelProps: de,
    inputProps: me,
    InputProps: Se,
    inputRef: B,
    label: $,
    maxRows: te,
    minRows: le,
    multiline: J = !1,
    name: ke,
    onBlur: Ve,
    onChange: Ue,
    onFocus: Ne,
    placeholder: Be,
    required: se = !1,
    rows: ve,
    select: Ce = !1,
    SelectProps: be,
    type: Ae,
    value: W,
    variant: fe = "outlined"
  } = x, ue = qt(x, B_), ut = K({}, x, {
    autoFocus: R,
    color: z,
    disabled: ne,
    error: V,
    fullWidth: I,
    multiline: J,
    required: se,
    select: Ce,
    variant: fe
  }), Ze = $_(ut);
  process.env.NODE_ENV !== "production" && Ce && !g && console.error("MUI: `children` must be passed when using the `TextField` component with `select`.");
  const gt = {};
  fe === "outlined" && (de && typeof de.shrink < "u" && (gt.notched = de.shrink), gt.label = $), Ce && ((!be || !be.native) && (gt.id = void 0), gt["aria-describedby"] = void 0);
  const st = R1(pe), _t = ee && st ? `${st}-helper-text` : void 0, yt = $ && st ? `${st}-label` : void 0, dn = I_[fe], Bt = /* @__PURE__ */ qe(dn, K({
    "aria-describedby": _t,
    autoComplete: w,
    autoFocus: R,
    defaultValue: F,
    fullWidth: I,
    multiline: J,
    name: ke,
    rows: ve,
    maxRows: te,
    minRows: le,
    type: Ae,
    value: W,
    id: st,
    inputRef: B,
    onBlur: Ve,
    onChange: Ue,
    onFocus: Ne,
    placeholder: Be,
    inputProps: me
  }, gt, Se));
  return /* @__PURE__ */ Za(W_, K({
    className: cr(Ze.root, A),
    disabled: ne,
    error: V,
    fullWidth: I,
    ref: S,
    required: se,
    color: z,
    variant: fe,
    ownerState: ut
  }, ue, {
    children: [$ != null && $ !== "" && /* @__PURE__ */ qe(YM, K({
      htmlFor: st,
      id: yt
    }, de, {
      children: $
    })), Ce ? /* @__PURE__ */ qe(j_, K({
      "aria-describedby": _t,
      id: st,
      labelId: yt,
      value: W,
      input: Bt
    }, be, {
      children: g
    })) : Bt, ee && /* @__PURE__ */ qe(tN, K({
      id: _t
    }, q, {
      children: ee
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (sx.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * This prop helps users to fill forms faster, especially on mobile devices.
   * The name can be confusing, as it's more like an autofill.
   * You can learn more about it [following the specification](https://html.spec.whatwg.org/multipage/form-control-infrastructure.html#autofill).
   */
  autoComplete: c.string,
  /**
   * If `true`, the `input` element is focused during the first mount.
   * @default false
   */
  autoFocus: c.bool,
  /**
   * @ignore
   */
  children: c.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: c.object,
  /**
   * @ignore
   */
  className: c.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: c.oneOfType([c.oneOf(["primary", "secondary", "error", "info", "success", "warning"]), c.string]),
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: c.any,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: c.bool,
  /**
   * If `true`, the label is displayed in an error state.
   * @default false
   */
  error: c.bool,
  /**
   * Props applied to the [`FormHelperText`](/material-ui/api/form-helper-text/) element.
   */
  FormHelperTextProps: c.object,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: c.bool,
  /**
   * The helper text content.
   */
  helperText: c.node,
  /**
   * The id of the `input` element.
   * Use this prop to make `label` and `helperText` accessible for screen readers.
   */
  id: c.string,
  /**
   * Props applied to the [`InputLabel`](/material-ui/api/input-label/) element.
   * Pointer events like `onClick` are enabled if and only if `shrink` is `true`.
   */
  InputLabelProps: c.object,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: c.object,
  /**
   * Props applied to the Input element.
   * It will be a [`FilledInput`](/material-ui/api/filled-input/),
   * [`OutlinedInput`](/material-ui/api/outlined-input/) or [`Input`](/material-ui/api/input/)
   * component depending on the `variant` prop value.
   */
  InputProps: c.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: iu,
  /**
   * The label content.
   */
  label: c.node,
  /**
   * If `dense` or `normal`, will adjust vertical spacing of this and contained components.
   * @default 'none'
   */
  margin: c.oneOf(["dense", "none", "normal"]),
  /**
   * Maximum number of rows to display when multiline option is set to true.
   */
  maxRows: c.oneOfType([c.number, c.string]),
  /**
   * Minimum number of rows to display when multiline option is set to true.
   */
  minRows: c.oneOfType([c.number, c.string]),
  /**
   * If `true`, a `textarea` element is rendered instead of an input.
   * @default false
   */
  multiline: c.bool,
  /**
   * Name attribute of the `input` element.
   */
  name: c.string,
  /**
   * @ignore
   */
  onBlur: c.func,
  /**
   * Callback fired when the value is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: c.func,
  /**
   * @ignore
   */
  onFocus: c.func,
  /**
   * The short hint displayed in the `input` before the user enters a value.
   */
  placeholder: c.string,
  /**
   * If `true`, the label is displayed as required and the `input` element is required.
   * @default false
   */
  required: c.bool,
  /**
   * Number of rows to display when multiline option is set to true.
   */
  rows: c.oneOfType([c.number, c.string]),
  /**
   * Render a [`Select`](/material-ui/api/select/) element while passing the Input element to `Select` as `input` parameter.
   * If this option is set you must pass the options of the select as children.
   * @default false
   */
  select: c.bool,
  /**
   * Props applied to the [`Select`](/material-ui/api/select/) element.
   */
  SelectProps: c.object,
  /**
   * The size of the component.
   */
  size: c.oneOfType([c.oneOf(["medium", "small"]), c.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: c.oneOfType([c.arrayOf(c.oneOfType([c.func, c.object, c.bool])), c.func, c.object]),
  /**
   * Type of the `input` element. It should be [a valid HTML5 input type](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types).
   */
  type: c.string,
  /**
   * The value of the `input` element, required for a controlled component.
   */
  value: c.any,
  /**
   * The variant to use.
   * @default 'outlined'
   */
  variant: c.oneOf(["filled", "outlined", "standard"])
});
const Y_ = sx, Q_ = {
  size: "small",
  variant: "outlined",
  type: "text",
  fullWidth: !0,
  rows: 1,
  multiline: !1
}, cL = ({
  name: v,
  rows: m = 1,
  onChange: S,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  loading: x = !1,
  // `loadign` added here to avoid to have it on `rest` and pass it down to `<MuiTextField />`
  ...w
}) => {
  const R = (g) => {
    const A = g.target.value;
    S && S(A);
  };
  return /* @__PURE__ */ qe(
    Y_,
    {
      ...w,
      ...Q_,
      id: v,
      name: v,
      rows: m,
      multiline: m > 1,
      onChange: R
    }
  );
};
export {
  L_ as A,
  CN as F,
  eM as G,
  Xp as H,
  tM as L,
  Y_ as M,
  dy as P,
  cL as S,
  A1 as T,
  xf as a,
  JM as b,
  Q_ as c,
  hN as d,
  sL as e,
  ys as f,
  cy as g,
  fy as h,
  Wp as i,
  sy as j,
  oM as k,
  au as o,
  yN as r,
  Tf as u
};
