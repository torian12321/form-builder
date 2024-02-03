import { g as G, s as f, r as F, h as r, a as t, j as v, _ as D, P as a } from "./styled-c6437ab8.js";
import * as p from "react";
import { c as m } from "./clsx-f0826a09.js";
import { g as U, r as H, u as A, c as q } from "./useThemeProps-7889d54e.js";
import { jsx as h, jsxs as J } from "react/jsx-runtime";
import { B as K } from "./ButtonBase-b38416c5.js";
function Q(o) {
  return G("MuiButton", o);
}
const X = U("MuiButton", ["root", "text", "textInherit", "textPrimary", "textSecondary", "textSuccess", "textError", "textInfo", "textWarning", "outlined", "outlinedInherit", "outlinedPrimary", "outlinedSecondary", "outlinedSuccess", "outlinedError", "outlinedInfo", "outlinedWarning", "contained", "containedInherit", "containedPrimary", "containedSecondary", "containedSuccess", "containedError", "containedInfo", "containedWarning", "disableElevation", "focusVisible", "disabled", "colorInherit", "textSizeSmall", "textSizeMedium", "textSizeLarge", "outlinedSizeSmall", "outlinedSizeMedium", "outlinedSizeLarge", "containedSizeSmall", "containedSizeMedium", "containedSizeLarge", "sizeMedium", "sizeSmall", "sizeLarge", "fullWidth", "startIcon", "endIcon", "iconSizeSmall", "iconSizeMedium", "iconSizeLarge"]), b = X, R = /* @__PURE__ */ p.createContext({});
process.env.NODE_ENV !== "production" && (R.displayName = "ButtonGroupContext");
const Y = R, N = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (N.displayName = "ButtonGroupButtonContext");
const Z = N, w = ["children", "color", "component", "className", "disabled", "disableElevation", "disableFocusRipple", "endIcon", "focusVisibleClassName", "fullWidth", "size", "startIcon", "type", "variant"], oo = (o) => {
  const {
    color: n,
    disableElevation: i,
    fullWidth: e,
    size: s,
    variant: l,
    classes: c
  } = o, g = {
    root: ["root", l, `${l}${r(n)}`, `size${r(s)}`, `${l}Size${r(s)}`, n === "inherit" && "colorInherit", i && "disableElevation", e && "fullWidth"],
    label: ["label"],
    startIcon: ["startIcon", `iconSize${r(s)}`],
    endIcon: ["endIcon", `iconSize${r(s)}`]
  }, x = q(g, Q, c);
  return t({}, c, x);
}, E = (o) => t({}, o.size === "small" && {
  "& > *:nth-of-type(1)": {
    fontSize: 18
  }
}, o.size === "medium" && {
  "& > *:nth-of-type(1)": {
    fontSize: 20
  }
}, o.size === "large" && {
  "& > *:nth-of-type(1)": {
    fontSize: 22
  }
}), no = f(K, {
  shouldForwardProp: (o) => F(o) || o === "classes",
  name: "MuiButton",
  slot: "Root",
  overridesResolver: (o, n) => {
    const {
      ownerState: i
    } = o;
    return [n.root, n[i.variant], n[`${i.variant}${r(i.color)}`], n[`size${r(i.size)}`], n[`${i.variant}Size${r(i.size)}`], i.color === "inherit" && n.colorInherit, i.disableElevation && n.disableElevation, i.fullWidth && n.fullWidth];
  }
})(({
  theme: o,
  ownerState: n
}) => {
  var i, e;
  const s = o.palette.mode === "light" ? o.palette.grey[300] : o.palette.grey[800], l = o.palette.mode === "light" ? o.palette.grey.A100 : o.palette.grey[700];
  return t({}, o.typography.button, {
    minWidth: 64,
    padding: "6px 16px",
    borderRadius: (o.vars || o).shape.borderRadius,
    transition: o.transitions.create(["background-color", "box-shadow", "border-color", "color"], {
      duration: o.transitions.duration.short
    }),
    "&:hover": t({
      textDecoration: "none",
      backgroundColor: o.vars ? `rgba(${o.vars.palette.text.primaryChannel} / ${o.vars.palette.action.hoverOpacity})` : v(o.palette.text.primary, o.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "text" && n.color !== "inherit" && {
      backgroundColor: o.vars ? `rgba(${o.vars.palette[n.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : v(o.palette[n.color].main, o.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "outlined" && n.color !== "inherit" && {
      border: `1px solid ${(o.vars || o).palette[n.color].main}`,
      backgroundColor: o.vars ? `rgba(${o.vars.palette[n.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : v(o.palette[n.color].main, o.palette.action.hoverOpacity),
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    }, n.variant === "contained" && {
      backgroundColor: o.vars ? o.vars.palette.Button.inheritContainedHoverBg : l,
      boxShadow: (o.vars || o).shadows[4],
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        boxShadow: (o.vars || o).shadows[2],
        backgroundColor: (o.vars || o).palette.grey[300]
      }
    }, n.variant === "contained" && n.color !== "inherit" && {
      backgroundColor: (o.vars || o).palette[n.color].dark,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: (o.vars || o).palette[n.color].main
      }
    }),
    "&:active": t({}, n.variant === "contained" && {
      boxShadow: (o.vars || o).shadows[8]
    }),
    [`&.${b.focusVisible}`]: t({}, n.variant === "contained" && {
      boxShadow: (o.vars || o).shadows[6]
    }),
    [`&.${b.disabled}`]: t({
      color: (o.vars || o).palette.action.disabled
    }, n.variant === "outlined" && {
      border: `1px solid ${(o.vars || o).palette.action.disabledBackground}`
    }, n.variant === "contained" && {
      color: (o.vars || o).palette.action.disabled,
      boxShadow: (o.vars || o).shadows[0],
      backgroundColor: (o.vars || o).palette.action.disabledBackground
    })
  }, n.variant === "text" && {
    padding: "6px 8px"
  }, n.variant === "text" && n.color !== "inherit" && {
    color: (o.vars || o).palette[n.color].main
  }, n.variant === "outlined" && {
    padding: "5px 15px",
    border: "1px solid currentColor"
  }, n.variant === "outlined" && n.color !== "inherit" && {
    color: (o.vars || o).palette[n.color].main,
    border: o.vars ? `1px solid rgba(${o.vars.palette[n.color].mainChannel} / 0.5)` : `1px solid ${v(o.palette[n.color].main, 0.5)}`
  }, n.variant === "contained" && {
    color: o.vars ? (
      // this is safe because grey does not change between default light/dark mode
      o.vars.palette.text.primary
    ) : (i = (e = o.palette).getContrastText) == null ? void 0 : i.call(e, o.palette.grey[300]),
    backgroundColor: o.vars ? o.vars.palette.Button.inheritContainedBg : s,
    boxShadow: (o.vars || o).shadows[2]
  }, n.variant === "contained" && n.color !== "inherit" && {
    color: (o.vars || o).palette[n.color].contrastText,
    backgroundColor: (o.vars || o).palette[n.color].main
  }, n.color === "inherit" && {
    color: "inherit",
    borderColor: "currentColor"
  }, n.size === "small" && n.variant === "text" && {
    padding: "4px 5px",
    fontSize: o.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "text" && {
    padding: "8px 11px",
    fontSize: o.typography.pxToRem(15)
  }, n.size === "small" && n.variant === "outlined" && {
    padding: "3px 9px",
    fontSize: o.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "outlined" && {
    padding: "7px 21px",
    fontSize: o.typography.pxToRem(15)
  }, n.size === "small" && n.variant === "contained" && {
    padding: "4px 10px",
    fontSize: o.typography.pxToRem(13)
  }, n.size === "large" && n.variant === "contained" && {
    padding: "8px 22px",
    fontSize: o.typography.pxToRem(15)
  }, n.fullWidth && {
    width: "100%"
  });
}, ({
  ownerState: o
}) => o.disableElevation && {
  boxShadow: "none",
  "&:hover": {
    boxShadow: "none"
  },
  [`&.${b.focusVisible}`]: {
    boxShadow: "none"
  },
  "&:active": {
    boxShadow: "none"
  },
  [`&.${b.disabled}`]: {
    boxShadow: "none"
  }
}), ao = f("span", {
  name: "MuiButton",
  slot: "StartIcon",
  overridesResolver: (o, n) => {
    const {
      ownerState: i
    } = o;
    return [n.startIcon, n[`iconSize${r(i.size)}`]];
  }
})(({
  ownerState: o
}) => t({
  display: "inherit",
  marginRight: 8,
  marginLeft: -4
}, o.size === "small" && {
  marginLeft: -2
}, E(o))), io = f("span", {
  name: "MuiButton",
  slot: "EndIcon",
  overridesResolver: (o, n) => {
    const {
      ownerState: i
    } = o;
    return [n.endIcon, n[`iconSize${r(i.size)}`]];
  }
})(({
  ownerState: o
}) => t({
  display: "inherit",
  marginRight: -4,
  marginLeft: 8
}, o.size === "small" && {
  marginRight: -2
}, E(o))), O = /* @__PURE__ */ p.forwardRef(function(n, i) {
  const e = p.useContext(Y), s = p.useContext(Z), l = H(e, n), c = A({
    props: l,
    name: "MuiButton"
  }), {
    children: g,
    color: x = "primary",
    component: y = "button",
    className: k,
    disabled: C = !1,
    disableElevation: T = !1,
    disableFocusRipple: z = !1,
    endIcon: B,
    focusVisibleClassName: P,
    fullWidth: W = !1,
    size: M = "medium",
    startIcon: I,
    type: $,
    variant: V = "text"
  } = c, S = D(c, w), u = t({}, c, {
    color: x,
    component: y,
    disabled: C,
    disableElevation: T,
    disableFocusRipple: z,
    fullWidth: W,
    size: M,
    type: $,
    variant: V
  }), d = oo(u), L = I && /* @__PURE__ */ h(ao, {
    className: d.startIcon,
    ownerState: u,
    children: I
  }), _ = B && /* @__PURE__ */ h(io, {
    className: d.endIcon,
    ownerState: u,
    children: B
  }), j = s || "";
  return /* @__PURE__ */ J(no, t({
    ownerState: u,
    className: m(e.className, d.root, k, j),
    component: y,
    disabled: C,
    focusRipple: !z,
    focusVisibleClassName: m(d.focusVisible, P),
    ref: i,
    type: $
  }, S, {
    classes: d,
    children: [L, g, _]
  }));
});
process.env.NODE_ENV !== "production" && (O.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: a.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'primary'
   */
  color: a.oneOfType([a.oneOf(["inherit", "primary", "secondary", "success", "error", "info", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * If `true`, no elevation is used.
   * @default false
   */
  disableElevation: a.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: a.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: a.bool,
  /**
   * Element placed after the children.
   */
  endIcon: a.node,
  /**
   * @ignore
   */
  focusVisibleClassName: a.string,
  /**
   * If `true`, the button will take up the full width of its container.
   * @default false
   */
  fullWidth: a.bool,
  /**
   * The URL to link to when the button is clicked.
   * If defined, an `a` element will be used as the root node.
   */
  href: a.string,
  /**
   * The size of the component.
   * `small` is equivalent to the dense button styling.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["small", "medium", "large"]), a.string]),
  /**
   * Element placed before the children.
   */
  startIcon: a.node,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @ignore
   */
  type: a.oneOfType([a.oneOf(["button", "reset", "submit"]), a.string]),
  /**
   * The variant to use.
   * @default 'text'
   */
  variant: a.oneOfType([a.oneOf(["contained", "outlined", "text"]), a.string])
});
const co = O;
export {
  co as M
};
