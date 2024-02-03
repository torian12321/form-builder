import { g as P, s as $, a as l, j as c, _ as N, P as t } from "./styled-c6437ab8.js";
import * as T from "react";
import { c as I } from "./clsx-f0826a09.js";
import { g as O, u as R, c as q } from "./useThemeProps-7889d54e.js";
import { u as x } from "./useTheme-f100ae81.js";
import { jsx as E } from "react/jsx-runtime";
import { c as M } from "./TransitionGroupContext-fe4c547b.js";
function j(e) {
  const o = typeof e;
  switch (o) {
    case "number":
      return Number.isNaN(e) ? "NaN" : Number.isFinite(e) ? e !== Math.floor(e) ? "float" : "number" : "Infinity";
    case "object":
      return e === null ? "null" : e.constructor.name;
    default:
      return o;
  }
}
function V(e) {
  return typeof e == "number" && isFinite(e) && Math.floor(e) === e;
}
const _ = Number.isInteger || V;
function d(e, o, n, a) {
  const r = e[o];
  if (r == null || !_(r)) {
    const i = j(r);
    return new RangeError(`Invalid ${a} \`${o}\` of type \`${i}\` supplied to \`${n}\`, expected \`integer\`.`);
  }
  return null;
}
function f(e, o, ...n) {
  return e[o] === void 0 ? null : d(e, o, ...n);
}
function u() {
  return null;
}
f.isRequired = d;
u.isRequired = u;
const w = process.env.NODE_ENV === "production" ? u : f, C = (e) => {
  let o;
  return e < 1 ? o = 5.11916 * e ** 2 : o = 4.5 * Math.log(e + 1) + 2, (o / 100).toFixed(2);
}, p = C;
function k(e) {
  return P("MuiPaper", e);
}
O("MuiPaper", ["root", "rounded", "outlined", "elevation", "elevation0", "elevation1", "elevation2", "elevation3", "elevation4", "elevation5", "elevation6", "elevation7", "elevation8", "elevation9", "elevation10", "elevation11", "elevation12", "elevation13", "elevation14", "elevation15", "elevation16", "elevation17", "elevation18", "elevation19", "elevation20", "elevation21", "elevation22", "elevation23", "elevation24"]);
const U = ["className", "component", "elevation", "square", "variant"], D = (e) => {
  const {
    square: o,
    elevation: n,
    variant: a,
    classes: r
  } = e, i = {
    root: ["root", a, !o && "rounded", a === "elevation" && `elevation${n}`]
  };
  return q(i, k, r);
}, F = $("div", {
  name: "MuiPaper",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: n
    } = e;
    return [o.root, o[n.variant], !n.square && o.rounded, n.variant === "elevation" && o[`elevation${n.elevation}`]];
  }
})(({
  theme: e,
  ownerState: o
}) => {
  var n;
  return l({
    backgroundColor: (e.vars || e).palette.background.paper,
    color: (e.vars || e).palette.text.primary,
    transition: e.transitions.create("box-shadow")
  }, !o.square && {
    borderRadius: e.shape.borderRadius
  }, o.variant === "outlined" && {
    border: `1px solid ${(e.vars || e).palette.divider}`
  }, o.variant === "elevation" && l({
    boxShadow: (e.vars || e).shadows[o.elevation]
  }, !e.vars && e.palette.mode === "dark" && {
    backgroundImage: `linear-gradient(${c("#fff", p(o.elevation))}, ${c("#fff", p(o.elevation))})`
  }, e.vars && {
    backgroundImage: (n = e.vars.overlays) == null ? void 0 : n[o.elevation]
  }));
}), m = /* @__PURE__ */ T.forwardRef(function(o, n) {
  const a = R({
    props: o,
    name: "MuiPaper"
  }), {
    className: r,
    component: i = "div",
    elevation: s = 1,
    square: g = !1,
    variant: y = "elevation"
  } = a, b = N(a, U), v = l({}, a, {
    component: i,
    elevation: s,
    square: g,
    variant: y
  }), h = D(v);
  return process.env.NODE_ENV !== "production" && x().shadows[s] === void 0 && console.error([`MUI: The elevation provided <Paper elevation={${s}}> is not available in the theme.`, `Please make sure that \`theme.shadows[${s}]\` is defined.`].join(`
`)), /* @__PURE__ */ E(F, l({
    as: i,
    ownerState: v,
    className: I(h.root, r),
    ref: n
  }, b));
});
process.env.NODE_ENV !== "production" && (m.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: t.elementType,
  /**
   * Shadow depth, corresponds to `dp` in the spec.
   * It accepts values between 0 and 24 inclusive.
   * @default 1
   */
  elevation: M(w, (e) => {
    const {
      elevation: o,
      variant: n
    } = e;
    return o > 0 && n === "outlined" ? new Error(`MUI: Combining \`elevation={${o}}\` with \`variant="${n}"\` has no effect. Either use \`elevation={0}\` or use a different \`variant\`.`) : null;
  }),
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * The variant to use.
   * @default 'elevation'
   */
  variant: t.oneOfType([t.oneOf(["elevation", "outlined"]), t.string])
});
const J = m;
export {
  J as P,
  w as i
};
