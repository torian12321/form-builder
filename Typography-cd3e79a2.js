import { g as W, s as C, h as f, a as s, _ as M, P as t } from "./styled-c6437ab8.js";
import * as O from "react";
import { c as j } from "./clsx-f0826a09.js";
import { g as P, u as N, c as R } from "./useThemeProps-7889d54e.js";
import { jsx as _ } from "react/jsx-runtime";
import { e as U } from "./extendSxProp-e33cd6d1.js";
function $(a) {
  return W("MuiTypography", a);
}
P("MuiTypography", ["root", "h1", "h2", "h3", "h4", "h5", "h6", "subtitle1", "subtitle2", "body1", "body2", "inherit", "button", "caption", "overline", "alignLeft", "alignRight", "alignCenter", "alignJustify", "noWrap", "gutterBottom", "paragraph"]);
const D = ["align", "className", "component", "gutterBottom", "noWrap", "paragraph", "variant", "variantMapping"], E = (a) => {
  const {
    align: o,
    gutterBottom: r,
    noWrap: e,
    paragraph: i,
    variant: n,
    classes: h
  } = a, p = {
    root: ["root", n, a.align !== "inherit" && `align${f(o)}`, r && "gutterBottom", e && "noWrap", i && "paragraph"]
  };
  return R(p, $, h);
}, L = C("span", {
  name: "MuiTypography",
  slot: "Root",
  overridesResolver: (a, o) => {
    const {
      ownerState: r
    } = a;
    return [o.root, r.variant && o[r.variant], r.align !== "inherit" && o[`align${f(r.align)}`], r.noWrap && o.noWrap, r.gutterBottom && o.gutterBottom, r.paragraph && o.paragraph];
  }
})(({
  theme: a,
  ownerState: o
}) => s({
  margin: 0
}, o.variant === "inherit" && {
  // Some elements, like <button> on Chrome have default font that doesn't inherit, reset this.
  font: "inherit"
}, o.variant !== "inherit" && a.typography[o.variant], o.align !== "inherit" && {
  textAlign: o.align
}, o.noWrap && {
  overflow: "hidden",
  textOverflow: "ellipsis",
  whiteSpace: "nowrap"
}, o.gutterBottom && {
  marginBottom: "0.35em"
}, o.paragraph && {
  marginBottom: 16
})), u = {
  h1: "h1",
  h2: "h2",
  h3: "h3",
  h4: "h4",
  h5: "h5",
  h6: "h6",
  subtitle1: "h6",
  subtitle2: "h6",
  body1: "p",
  body2: "p",
  inherit: "p"
}, V = {
  primary: "primary.main",
  textPrimary: "text.primary",
  secondary: "secondary.main",
  textSecondary: "text.secondary",
  error: "error.main"
}, z = (a) => V[a] || a, d = /* @__PURE__ */ O.forwardRef(function(o, r) {
  const e = N({
    props: o,
    name: "MuiTypography"
  }), i = z(e.color), n = U(s({}, e, {
    color: i
  })), {
    align: h = "inherit",
    className: p,
    component: l,
    gutterBottom: b = !1,
    noWrap: v = !1,
    paragraph: c = !1,
    variant: g = "body1",
    variantMapping: m = u
  } = n, T = M(n, D), y = s({}, n, {
    align: h,
    color: i,
    className: p,
    component: l,
    gutterBottom: b,
    noWrap: v,
    paragraph: c,
    variant: g,
    variantMapping: m
  }), x = l || (c ? "p" : m[g] || u[g]) || "span", B = E(y);
  return /* @__PURE__ */ _(L, s({
    as: x,
    ref: r,
    ownerState: y,
    className: j(B.root, p)
  }, T));
});
process.env.NODE_ENV !== "production" && (d.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Set the text-align on the component.
   * @default 'inherit'
   */
  align: t.oneOf(["center", "inherit", "justify", "left", "right"]),
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
   * If `true`, the text will have a bottom margin.
   * @default false
   */
  gutterBottom: t.bool,
  /**
   * If `true`, the text will not wrap, but instead will truncate with a text overflow ellipsis.
   *
   * Note that text overflow can only happen with block or inline-block level elements
   * (the element needs to have a width in order to overflow).
   * @default false
   */
  noWrap: t.bool,
  /**
   * If `true`, the element will be a paragraph element.
   * @default false
   */
  paragraph: t.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * Applies the theme typography styles.
   * @default 'body1'
   */
  variant: t.oneOfType([t.oneOf(["body1", "body2", "button", "caption", "h1", "h2", "h3", "h4", "h5", "h6", "inherit", "overline", "subtitle1", "subtitle2"]), t.string]),
  /**
   * The component maps the variant prop to a range of different HTML element types.
   * For instance, subtitle1 to `<h6>`.
   * If you wish to change that mapping, you can provide your own.
   * Alternatively, you can use the `component` prop.
   * @default {
   *   h1: 'h1',
   *   h2: 'h2',
   *   h3: 'h3',
   *   h4: 'h4',
   *   h5: 'h5',
   *   h6: 'h6',
   *   subtitle1: 'h6',
   *   subtitle2: 'h6',
   *   body1: 'p',
   *   body2: 'p',
   *   inherit: 'p',
   * }
   */
  variantMapping: t.object
});
const F = d;
export {
  F as T
};
