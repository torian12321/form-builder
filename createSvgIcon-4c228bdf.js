import { g as b, s as w, h as g, _ as C, a as y, P as o } from "./styled-c6437ab8.js";
import * as v from "react";
import { jsxs as T, jsx as z } from "react/jsx-runtime";
import { c as N } from "./clsx-f0826a09.js";
import { g as R, u as O, c as B } from "./useThemeProps-7889d54e.js";
function j(e) {
  return b("MuiSvgIcon", e);
}
R("MuiSvgIcon", ["root", "colorPrimary", "colorSecondary", "colorAction", "colorError", "colorDisabled", "fontSizeInherit", "fontSizeSmall", "fontSizeMedium", "fontSizeLarge"]);
const A = ["children", "className", "color", "component", "fontSize", "htmlColor", "inheritViewBox", "titleAccess", "viewBox"], E = (e) => {
  const {
    color: n,
    fontSize: t,
    classes: r
  } = e, i = {
    root: ["root", n !== "inherit" && `color${g(n)}`, `fontSize${g(t)}`]
  };
  return B(i, j, r);
}, V = w("svg", {
  name: "MuiSvgIcon",
  slot: "Root",
  overridesResolver: (e, n) => {
    const {
      ownerState: t
    } = e;
    return [n.root, t.color !== "inherit" && n[`color${g(t.color)}`], n[`fontSize${g(t.fontSize)}`]];
  }
})(({
  theme: e,
  ownerState: n
}) => {
  var t, r, i, u, f, c, h, d, m, s, a, p, l;
  return {
    userSelect: "none",
    width: "1em",
    height: "1em",
    display: "inline-block",
    // the <svg> will define the property that has `currentColor`
    // e.g. heroicons uses fill="none" and stroke="currentColor"
    fill: n.hasSvgAsChild ? void 0 : "currentColor",
    flexShrink: 0,
    transition: (t = e.transitions) == null || (r = t.create) == null ? void 0 : r.call(t, "fill", {
      duration: (i = e.transitions) == null || (i = i.duration) == null ? void 0 : i.shorter
    }),
    fontSize: {
      inherit: "inherit",
      small: ((u = e.typography) == null || (f = u.pxToRem) == null ? void 0 : f.call(u, 20)) || "1.25rem",
      medium: ((c = e.typography) == null || (h = c.pxToRem) == null ? void 0 : h.call(c, 24)) || "1.5rem",
      large: ((d = e.typography) == null || (m = d.pxToRem) == null ? void 0 : m.call(d, 35)) || "2.1875rem"
    }[n.fontSize],
    // TODO v5 deprecate, v6 remove for sx
    color: (s = (a = (e.vars || e).palette) == null || (a = a[n.color]) == null ? void 0 : a.main) != null ? s : {
      action: (p = (e.vars || e).palette) == null || (p = p.action) == null ? void 0 : p.active,
      disabled: (l = (e.vars || e).palette) == null || (l = l.action) == null ? void 0 : l.disabled,
      inherit: void 0
    }[n.color]
  };
}), S = /* @__PURE__ */ v.forwardRef(function(n, t) {
  const r = O({
    props: n,
    name: "MuiSvgIcon"
  }), {
    children: i,
    className: u,
    color: f = "inherit",
    component: c = "svg",
    fontSize: h = "medium",
    htmlColor: d,
    inheritViewBox: m = !1,
    titleAccess: s,
    viewBox: a = "0 0 24 24"
  } = r, p = C(r, A), l = /* @__PURE__ */ v.isValidElement(i) && i.type === "svg", $ = y({}, r, {
    color: f,
    component: c,
    fontSize: h,
    instanceFontSize: n.fontSize,
    inheritViewBox: m,
    viewBox: a,
    hasSvgAsChild: l
  }), x = {};
  m || (x.viewBox = a);
  const I = E($);
  return /* @__PURE__ */ T(V, y({
    as: c,
    className: N(I.root, u),
    focusable: "false",
    color: d,
    "aria-hidden": s ? void 0 : !0,
    role: s ? "img" : void 0,
    ref: t
  }, x, p, l && i.props, {
    ownerState: $,
    children: [l ? i.props.children : i, s ? /* @__PURE__ */ z("title", {
      children: s
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (S.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Node passed into the SVG element.
   */
  children: o.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: o.object,
  /**
   * @ignore
   */
  className: o.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * You can use the `htmlColor` prop to apply a color attribute to the SVG element.
   * @default 'inherit'
   */
  color: o.oneOfType([o.oneOf(["inherit", "action", "disabled", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: o.elementType,
  /**
   * The fontSize applied to the icon. Defaults to 24px, but can be configure to inherit font size.
   * @default 'medium'
   */
  fontSize: o.oneOfType([o.oneOf(["inherit", "large", "medium", "small"]), o.string]),
  /**
   * Applies a color attribute to the SVG element.
   */
  htmlColor: o.string,
  /**
   * If `true`, the root node will inherit the custom `component`'s viewBox and the `viewBox`
   * prop will be ignored.
   * Useful when you want to reference a custom `component` and have `SvgIcon` pass that
   * `component`'s viewBox to the root node.
   * @default false
   */
  inheritViewBox: o.bool,
  /**
   * The shape-rendering attribute. The behavior of the different options is described on the
   * [MDN Web Docs](https://developer.mozilla.org/en-US/docs/Web/SVG/Attribute/shape-rendering).
   * If you are having issues with blurry icons you should investigate this prop.
   */
  shapeRendering: o.string,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * Provides a human-readable title for the element that contains it.
   * https://www.w3.org/TR/SVG-access/#Equivalent
   */
  titleAccess: o.string,
  /**
   * Allows you to redefine what the coordinates without units mean inside an SVG element.
   * For example, if the SVG element is 500 (width) by 200 (height),
   * and you pass viewBox="0 0 50 20",
   * this means that the coordinates inside the SVG will go from the top left corner (0,0)
   * to bottom right (50,20) and each unit will be worth 10px.
   * @default '0 0 24 24'
   */
  viewBox: o.string
});
S.muiName = "SvgIcon";
const _ = S;
function k(e, n) {
  function t(r, i) {
    return /* @__PURE__ */ z(_, y({
      "data-testid": `${n}Icon`,
      ref: i
    }, r, {
      children: e
    }));
  }
  return process.env.NODE_ENV !== "production" && (t.displayName = `${n}Icon`), t.muiName = _.muiName, /* @__PURE__ */ v.memo(/* @__PURE__ */ v.forwardRef(t));
}
export {
  k as c
};
