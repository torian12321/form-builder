import { g as R, s as y, h as l, a as i, _ as j, P as e } from "./styled-c6437ab8.js";
import * as U from "react";
import { c as z } from "./clsx-f0826a09.js";
import { g as E, u as I, c as F } from "./useThemeProps-7889d54e.js";
import { jsx as g } from "react/jsx-runtime";
import { k as w, c as D } from "./emotion-react.browser.esm-3aa427f2.js";
import { c as K } from "./TransitionGroupContext-fe4c547b.js";
function V(r) {
  return R("MuiCircularProgress", r);
}
E("MuiCircularProgress", ["root", "determinate", "indeterminate", "colorPrimary", "colorSecondary", "svg", "circle", "circleDeterminate", "circleIndeterminate", "circleDisableShrink"]);
const W = ["className", "color", "disableShrink", "size", "style", "thickness", "value", "variant"];
let m = (r) => r, P, S, M, $;
const o = 44, B = w(P || (P = m`
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
`)), G = w(S || (S = m`
  0% {
    stroke-dasharray: 1px, 200px;
    stroke-dashoffset: 0;
  }

  50% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -15px;
  }

  100% {
    stroke-dasharray: 100px, 200px;
    stroke-dashoffset: -125px;
  }
`)), L = (r) => {
  const {
    classes: s,
    variant: t,
    color: a,
    disableShrink: d
  } = r, u = {
    root: ["root", t, `color${l(a)}`],
    svg: ["svg"],
    circle: ["circle", `circle${l(t)}`, d && "circleDisableShrink"]
  };
  return F(u, V, s);
}, Y = y("span", {
  name: "MuiCircularProgress",
  slot: "Root",
  overridesResolver: (r, s) => {
    const {
      ownerState: t
    } = r;
    return [s.root, s[t.variant], s[`color${l(t.color)}`]];
  }
})(({
  ownerState: r,
  theme: s
}) => i({
  display: "inline-block"
}, r.variant === "determinate" && {
  transition: s.transitions.create("transform")
}, r.color !== "inherit" && {
  color: (s.vars || s).palette[r.color].main
}), ({
  ownerState: r
}) => r.variant === "indeterminate" && D(M || (M = m`
      animation: ${0} 1.4s linear infinite;
    `), B)), Z = y("svg", {
  name: "MuiCircularProgress",
  slot: "Svg",
  overridesResolver: (r, s) => s.svg
})({
  display: "block"
  // Keeps the progress centered
}), q = y("circle", {
  name: "MuiCircularProgress",
  slot: "Circle",
  overridesResolver: (r, s) => {
    const {
      ownerState: t
    } = r;
    return [s.circle, s[`circle${l(t.variant)}`], t.disableShrink && s.circleDisableShrink];
  }
})(({
  ownerState: r,
  theme: s
}) => i({
  stroke: "currentColor"
}, r.variant === "determinate" && {
  transition: s.transitions.create("stroke-dashoffset")
}, r.variant === "indeterminate" && {
  // Some default value that looks fine waiting for the animation to kicks in.
  strokeDasharray: "80px, 200px",
  strokeDashoffset: 0
  // Add the unit to fix a Edge 16 and below bug.
}), ({
  ownerState: r
}) => r.variant === "indeterminate" && !r.disableShrink && D($ || ($ = m`
      animation: ${0} 1.4s ease-in-out infinite;
    `), G)), _ = /* @__PURE__ */ U.forwardRef(function(s, t) {
  const a = I({
    props: s,
    name: "MuiCircularProgress"
  }), {
    className: d,
    color: u = "primary",
    disableShrink: T = !1,
    size: f = 40,
    style: N,
    thickness: n = 3.6,
    value: p = 0,
    variant: k = "indeterminate"
  } = a, O = j(a, W), c = i({}, a, {
    color: u,
    disableShrink: T,
    size: f,
    thickness: n,
    value: p,
    variant: k
  }), h = L(c), v = {}, b = {}, x = {};
  if (k === "determinate") {
    const C = 2 * Math.PI * ((o - n) / 2);
    v.strokeDasharray = C.toFixed(3), x["aria-valuenow"] = Math.round(p), v.strokeDashoffset = `${((100 - p) / 100 * C).toFixed(3)}px`, b.transform = "rotate(-90deg)";
  }
  return /* @__PURE__ */ g(Y, i({
    className: z(h.root, d),
    style: i({
      width: f,
      height: f
    }, b, N),
    ownerState: c,
    ref: t,
    role: "progressbar"
  }, x, O, {
    children: /* @__PURE__ */ g(Z, {
      className: h.svg,
      ownerState: c,
      viewBox: `${o / 2} ${o / 2} ${o} ${o}`,
      children: /* @__PURE__ */ g(q, {
        className: h.circle,
        style: v,
        ownerState: c,
        cx: o,
        cy: o,
        r: (o - n) / 2,
        fill: "none",
        strokeWidth: n
      })
    })
  }));
});
process.env.NODE_ENV !== "production" && (_.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: e.oneOfType([e.oneOf(["inherit", "primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * If `true`, the shrink animation is disabled.
   * This only works if variant is `indeterminate`.
   * @default false
   */
  disableShrink: K(e.bool, (r) => r.disableShrink && r.variant && r.variant !== "indeterminate" ? new Error("MUI: You have provided the `disableShrink` prop with a variant other than `indeterminate`. This will have no effect.") : null),
  /**
   * The size of the component.
   * If using a number, the pixel unit is assumed.
   * If using a string, you need to provide the CSS unit, e.g. '3rem'.
   * @default 40
   */
  size: e.oneOfType([e.number, e.string]),
  /**
   * @ignore
   */
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The thickness of the circle.
   * @default 3.6
   */
  thickness: e.number,
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: e.number,
  /**
   * The variant to use.
   * Use indeterminate when there is no progress value.
   * @default 'indeterminate'
   */
  variant: e.oneOf(["determinate", "indeterminate"])
});
const er = _;
export {
  er as M
};
