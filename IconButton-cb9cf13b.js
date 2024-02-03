import { g as z, s as R, h as n, a, j as f, _ as C, P as r } from "./styled-c6437ab8.js";
import * as d from "react";
import { c as B } from "./clsx-f0826a09.js";
import { g as I, u as O, c as $ } from "./useThemeProps-7889d54e.js";
import { jsx as T } from "react/jsx-runtime";
import { B as x } from "./ButtonBase-b38416c5.js";
import { c as k } from "./TransitionGroupContext-fe4c547b.js";
function j(o) {
  return z("MuiIconButton", o);
}
const P = I("MuiIconButton", ["root", "disabled", "colorInherit", "colorPrimary", "colorSecondary", "colorError", "colorInfo", "colorSuccess", "colorWarning", "edgeStart", "edgeEnd", "sizeSmall", "sizeMedium", "sizeLarge"]), E = P, M = ["edge", "children", "className", "color", "disabled", "disableFocusRipple", "size"], N = (o) => {
  const {
    classes: e,
    disabled: s,
    color: t,
    edge: i,
    size: l
  } = o, c = {
    root: ["root", s && "disabled", t !== "default" && `color${n(t)}`, i && `edge${n(i)}`, `size${n(l)}`]
  };
  return $(c, j, e);
}, _ = R(x, {
  name: "MuiIconButton",
  slot: "Root",
  overridesResolver: (o, e) => {
    const {
      ownerState: s
    } = o;
    return [e.root, s.color !== "default" && e[`color${n(s.color)}`], s.edge && e[`edge${n(s.edge)}`], e[`size${n(s.size)}`]];
  }
})(({
  theme: o,
  ownerState: e
}) => a({
  textAlign: "center",
  flex: "0 0 auto",
  fontSize: o.typography.pxToRem(24),
  padding: 8,
  borderRadius: "50%",
  overflow: "visible",
  // Explicitly set the default value to solve a bug on IE11.
  color: (o.vars || o).palette.action.active,
  transition: o.transitions.create("background-color", {
    duration: o.transitions.duration.shortest
  })
}, !e.disableRipple && {
  "&:hover": {
    backgroundColor: o.vars ? `rgba(${o.vars.palette.action.activeChannel} / ${o.vars.palette.action.hoverOpacity})` : f(o.palette.action.active, o.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, e.edge === "start" && {
  marginLeft: e.size === "small" ? -3 : -12
}, e.edge === "end" && {
  marginRight: e.size === "small" ? -3 : -12
}), ({
  theme: o,
  ownerState: e
}) => {
  var s;
  const t = (s = (o.vars || o).palette) == null ? void 0 : s[e.color];
  return a({}, e.color === "inherit" && {
    color: "inherit"
  }, e.color !== "inherit" && e.color !== "default" && a({
    color: t == null ? void 0 : t.main
  }, !e.disableRipple && {
    "&:hover": a({}, t && {
      backgroundColor: o.vars ? `rgba(${t.mainChannel} / ${o.vars.palette.action.hoverOpacity})` : f(t.main, o.palette.action.hoverOpacity)
    }, {
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    })
  }), e.size === "small" && {
    padding: 5,
    fontSize: o.typography.pxToRem(18)
  }, e.size === "large" && {
    padding: 12,
    fontSize: o.typography.pxToRem(28)
  }, {
    [`&.${E.disabled}`]: {
      backgroundColor: "transparent",
      color: (o.vars || o).palette.action.disabled
    }
  });
}), b = /* @__PURE__ */ d.forwardRef(function(e, s) {
  const t = O({
    props: e,
    name: "MuiIconButton"
  }), {
    edge: i = !1,
    children: l,
    className: c,
    color: v = "default",
    disabled: p = !1,
    disableFocusRipple: u = !1,
    size: m = "medium"
  } = t, y = C(t, M), g = a({}, t, {
    edge: i,
    color: v,
    disabled: p,
    disableFocusRipple: u,
    size: m
  }), h = N(g);
  return /* @__PURE__ */ T(_, a({
    className: B(h.root, c),
    centerRipple: !0,
    focusRipple: !u,
    disabled: p,
    ref: s,
    ownerState: g
  }, y, {
    children: l
  }));
});
process.env.NODE_ENV !== "production" && (b.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The icon to display.
   */
  children: k(r.node, (o) => d.Children.toArray(o.children).some((s) => /* @__PURE__ */ d.isValidElement(s) && s.props.onClick) ? new Error(["MUI: You are providing an onClick event listener to a child of a button element.", "Prefer applying it to the IconButton directly.", "This guarantees that the whole <button> will be responsive to click events."].join(`
`)) : null),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: r.oneOfType([r.oneOf(["inherit", "default", "primary", "secondary", "error", "info", "success", "warning"]), r.string]),
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: r.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: r.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: r.oneOf(["end", "start", !1]),
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium", "large"]), r.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const D = b;
export {
  D as I
};
