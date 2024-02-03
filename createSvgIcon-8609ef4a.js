import { a as _, C as g, h as E, F as y } from "./styled-c6437ab8.js";
import { c as b } from "./createSvgIcon-4c228bdf.js";
import { c as C, d as N, i as S, o as I, a as $, u as x } from "./FormHelperText-5a47fd9c.js";
import { s as T, b as q, u as P, a as w } from "./TransitionGroupContext-fe4c547b.js";
import { u as D } from "./unsupportedProp-3dbf01f6.js";
import { u as O } from "./useFormControl-a3d8b2b6.js";
import { u as R } from "./ButtonBase-b38416c5.js";
function F(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : (r, s, u, n, o) => {
    const a = u || "<<anonymous>>", i = o || s;
    return typeof r[s] < "u" ? new Error(`The ${n} \`${i}\` of \`${a}\` is deprecated. ${t}`) : null;
  };
}
function M(e, t) {
  if (process.env.NODE_ENV === "production")
    return () => null;
  const r = t ? _({}, t.propTypes) : null;
  return (u) => (n, o, a, i, l, ...v) => {
    const f = l || o, p = r == null ? void 0 : r[f];
    if (p) {
      const d = p(n, o, a, i, l, ...v);
      if (d)
        return d;
    }
    return typeof n[o] < "u" && !n[u] ? new Error(`The prop \`${f}\` of \`${e}\` can only be used together with the \`${u}\` prop.`) : null;
  };
}
const k = {
  configure: (e) => {
    process.env.NODE_ENV !== "production" && console.warn(["MUI: `ClassNameGenerator` import from `@mui/material/utils` is outdated and might cause unexpected issues.", "", "You should use `import { unstable_ClassNameGenerator } from '@mui/material/className'` instead", "", "The detail of the issue: https://github.com/mui/material-ui/issues/30011#issuecomment-1024993401", "", "The updated documentation: https://mui.com/guides/classname-generator/"].join(`
`)), g.configure(e);
  }
}, G = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  capitalize: E,
  createChainedFunction: C,
  createSvgIcon: b,
  debounce: N,
  deprecatedPropType: F,
  isMuiElement: S,
  ownerDocument: I,
  ownerWindow: $,
  requirePropFactory: M,
  setRef: T,
  unstable_ClassNameGenerator: k,
  unstable_useEnhancedEffect: q,
  unstable_useId: x,
  unsupportedProp: D,
  useControlled: O,
  useEventCallback: P,
  useForkRef: w,
  useIsFocusVisible: R
}, Symbol.toStringTag, { value: "Module" }));
var h = { exports: {} };
(function(e) {
  function t(r) {
    return r && r.__esModule ? r : {
      default: r
    };
  }
  e.exports = t, e.exports.__esModule = !0, e.exports.default = e.exports;
})(h);
var H = h.exports, c = {};
const V = /* @__PURE__ */ y(G);
var m;
function J() {
  return m || (m = 1, function(e) {
    "use client";
    Object.defineProperty(e, "__esModule", {
      value: !0
    }), Object.defineProperty(e, "default", {
      enumerable: !0,
      get: function() {
        return t.createSvgIcon;
      }
    });
    var t = V;
  }(c)), c;
}
export {
  H as i,
  J as r
};
