import { jsx as n, jsxs as z } from "react/jsx-runtime";
import { FIELD_TYPE as D } from "../../FormRenderer.constants.js";
import { I as Z, a as G } from "../../../../Fields.styles-a09d0a4e.js";
import { g as Y, s as d, h as L, k as S, l as O, a as i, _ as q, P as e } from "../../../../styled-c6437ab8.js";
import * as J from "react";
import { c as K } from "../../../../clsx-f0826a09.js";
import { g as Q, u as X, c as oo } from "../../../../useThemeProps-7889d54e.js";
import { c as u } from "../../../../createSvgIcon-4c228bdf.js";
import { C as eo } from "../../../../Close-ad39bb4a.js";
import { P as to } from "../../../../Paper-79c19457.js";
import { I as so } from "../../../../IconButton-cb9cf13b.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
import "../../../../useTheme-f100ae81.js";
function no(o) {
  return Y("MuiAlert", o);
}
const ro = Q("MuiAlert", ["root", "action", "icon", "message", "filled", "filledSuccess", "filledInfo", "filledWarning", "filledError", "outlined", "outlinedSuccess", "outlinedInfo", "outlinedWarning", "outlinedError", "standard", "standardSuccess", "standardInfo", "standardWarning", "standardError"]), b = ro, lo = u(/* @__PURE__ */ n("path", {
  d: "M20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4C12.76,4 13.5,4.11 14.2, 4.31L15.77,2.74C14.61,2.26 13.34,2 12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0, 0 22,12M7.91,10.08L6.5,11.5L11,16L21,6L19.59,4.58L11,13.17L7.91,10.08Z"
}), "SuccessOutlined"), ao = u(/* @__PURE__ */ n("path", {
  d: "M12 5.99L19.53 19H4.47L12 5.99M12 2L1 21h22L12 2zm1 14h-2v2h2v-2zm0-6h-2v4h2v-4z"
}), "ReportProblemOutlined"), io = u(/* @__PURE__ */ n("path", {
  d: "M11 15h2v2h-2zm0-8h2v6h-2zm.99-5C6.47 2 2 6.48 2 12s4.47 10 9.99 10C17.52 22 22 17.52 22 12S17.52 2 11.99 2zM12 20c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "ErrorOutline"), co = u(/* @__PURE__ */ n("path", {
  d: "M11,9H13V7H11M12,20C7.59,20 4,16.41 4,12C4,7.59 7.59,4 12,4C16.41,4 20,7.59 20, 12C20,16.41 16.41,20 12,20M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10, 10 0 0,0 12,2M11,17H13V11H11V17Z"
}), "InfoOutlined"), po = ["action", "children", "className", "closeText", "color", "components", "componentsProps", "icon", "iconMapping", "onClose", "role", "severity", "slotProps", "slots", "variant"], uo = (o) => {
  const {
    variant: s,
    color: r,
    severity: l,
    classes: t
  } = o, p = {
    root: ["root", `${s}${L(r || l)}`, `${s}`],
    icon: ["icon"],
    message: ["message"],
    action: ["action"]
  };
  return oo(p, no, t);
}, fo = d(to, {
  name: "MuiAlert",
  slot: "Root",
  overridesResolver: (o, s) => {
    const {
      ownerState: r
    } = o;
    return [s.root, s[r.variant], s[`${r.variant}${L(r.color || r.severity)}`]];
  }
})(({
  theme: o,
  ownerState: s
}) => {
  const r = o.palette.mode === "light" ? S : O, l = o.palette.mode === "light" ? O : S, t = s.color || s.severity;
  return i({}, o.typography.body2, {
    backgroundColor: "transparent",
    display: "flex",
    padding: "6px 16px"
  }, t && s.variant === "standard" && {
    color: o.vars ? o.vars.palette.Alert[`${t}Color`] : r(o.palette[t].light, 0.6),
    backgroundColor: o.vars ? o.vars.palette.Alert[`${t}StandardBg`] : l(o.palette[t].light, 0.9),
    [`& .${b.icon}`]: o.vars ? {
      color: o.vars.palette.Alert[`${t}IconColor`]
    } : {
      color: o.palette[t].main
    }
  }, t && s.variant === "outlined" && {
    color: o.vars ? o.vars.palette.Alert[`${t}Color`] : r(o.palette[t].light, 0.6),
    border: `1px solid ${(o.vars || o).palette[t].light}`,
    [`& .${b.icon}`]: o.vars ? {
      color: o.vars.palette.Alert[`${t}IconColor`]
    } : {
      color: o.palette[t].main
    }
  }, t && s.variant === "filled" && i({
    fontWeight: o.typography.fontWeightMedium
  }, o.vars ? {
    color: o.vars.palette.Alert[`${t}FilledColor`],
    backgroundColor: o.vars.palette.Alert[`${t}FilledBg`]
  } : {
    backgroundColor: o.palette.mode === "dark" ? o.palette[t].dark : o.palette[t].main,
    color: o.palette.getContrastText(o.palette[t].main)
  }));
}), go = d("div", {
  name: "MuiAlert",
  slot: "Icon",
  overridesResolver: (o, s) => s.icon
})({
  marginRight: 12,
  padding: "7px 0",
  display: "flex",
  fontSize: 22,
  opacity: 0.9
}), vo = d("div", {
  name: "MuiAlert",
  slot: "Message",
  overridesResolver: (o, s) => s.message
})({
  padding: "8px 0",
  minWidth: 0,
  overflow: "auto"
}), B = d("div", {
  name: "MuiAlert",
  slot: "Action",
  overridesResolver: (o, s) => s.action
})({
  display: "flex",
  alignItems: "flex-start",
  padding: "4px 0 0 16px",
  marginLeft: "auto",
  marginRight: -8
}), T = {
  success: /* @__PURE__ */ n(lo, {
    fontSize: "inherit"
  }),
  warning: /* @__PURE__ */ n(ao, {
    fontSize: "inherit"
  }),
  error: /* @__PURE__ */ n(io, {
    fontSize: "inherit"
  }),
  info: /* @__PURE__ */ n(co, {
    fontSize: "inherit"
  })
}, _ = /* @__PURE__ */ J.forwardRef(function(s, r) {
  var l, t, p, m, C, A;
  const f = X({
    props: s,
    name: "MuiAlert"
  }), {
    action: g,
    children: R,
    className: E,
    closeText: I = "Close",
    color: N,
    components: y = {},
    componentsProps: M = {},
    icon: h,
    iconMapping: j = T,
    onClose: x,
    role: k = "alert",
    severity: v = "success",
    slotProps: $ = {},
    slots: P = {},
    variant: w = "standard"
  } = f, W = q(f, po), a = i({}, f, {
    color: N,
    severity: v,
    variant: w
  }), c = uo(a), H = (l = (t = P.closeButton) != null ? t : y.CloseButton) != null ? l : so, F = (p = (m = P.closeIcon) != null ? m : y.CloseIcon) != null ? p : eo, U = (C = $.closeButton) != null ? C : M.closeButton, V = (A = $.closeIcon) != null ? A : M.closeIcon;
  return /* @__PURE__ */ z(fo, i({
    role: k,
    elevation: 0,
    ownerState: a,
    className: K(c.root, E),
    ref: r
  }, W, {
    children: [h !== !1 ? /* @__PURE__ */ n(go, {
      ownerState: a,
      className: c.icon,
      children: h || j[v] || T[v]
    }) : null, /* @__PURE__ */ n(vo, {
      ownerState: a,
      className: c.message,
      children: R
    }), g != null ? /* @__PURE__ */ n(B, {
      ownerState: a,
      className: c.action,
      children: g
    }) : null, g == null && x ? /* @__PURE__ */ n(B, {
      ownerState: a,
      className: c.action,
      children: /* @__PURE__ */ n(H, i({
        size: "small",
        "aria-label": I,
        title: I,
        color: "inherit",
        onClick: x
      }, U, {
        children: /* @__PURE__ */ n(F, i({
          fontSize: "small"
        }, V))
      }))
    }) : null]
  }));
});
process.env.NODE_ENV !== "production" && (_.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The action to display. It renders after the message, at the end of the alert.
   */
  action: e.node,
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * Override the default label for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: e.string,
  /**
   * The color of the component. Unless provided, the value is taken from the `severity` prop.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   */
  color: e.oneOfType([e.oneOf(["error", "info", "success", "warning"]), e.string]),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `slots` prop.
   * It's recommended to use the `slots` prop instead.
   *
   * @default {}
   */
  components: e.shape({
    CloseButton: e.elementType,
    CloseIcon: e.elementType
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
  componentsProps: e.shape({
    closeButton: e.object,
    closeIcon: e.object
  }),
  /**
   * Override the icon displayed before the children.
   * Unless provided, the icon is mapped to the value of the `severity` prop.
   * Set to `false` to remove the `icon`.
   */
  icon: e.node,
  /**
   * The component maps the `severity` prop to a range of different icons,
   * for instance success to `<SuccessOutlined>`.
   * If you wish to change this mapping, you can provide your own.
   * Alternatively, you can use the `icon` prop to override the icon displayed.
   */
  iconMapping: e.shape({
    error: e.node,
    info: e.node,
    success: e.node,
    warning: e.node
  }),
  /**
   * Callback fired when the component requests to be closed.
   * When provided and no `action` prop is set, a close icon button is displayed that triggers the callback when clicked.
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onClose: e.func,
  /**
   * The ARIA role attribute of the element.
   * @default 'alert'
   */
  role: e.string,
  /**
   * The severity of the alert. This defines the color and icon used.
   * @default 'success'
   */
  severity: e.oneOf(["error", "info", "success", "warning"]),
  /**
   * The extra props for the slot components.
   * You can override the existing props or add new ones.
   *
   * This prop is an alias for the `componentsProps` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slotProps: e.shape({
    closeButton: e.object,
    closeIcon: e.object
  }),
  /**
   * The components used for each slot inside.
   *
   * This prop is an alias for the `components` prop, which will be deprecated in the future.
   *
   * @default {}
   */
  slots: e.shape({
    closeButton: e.elementType,
    closeIcon: e.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The variant to use.
   * @default 'standard'
   */
  variant: e.oneOfType([e.oneOf(["filled", "outlined", "standard"]), e.string])
});
const mo = _, _o = ({
  type: o,
  label: s,
  placeholder: r
}) => o !== D.INFO_MESSAGE ? null : /* @__PURE__ */ z(mo, { severity: "info", icon: !1, children: [
  s && /* @__PURE__ */ n(Z, { children: /* @__PURE__ */ n("strong", { children: s }) }),
  r && /* @__PURE__ */ n(G, { children: r })
] });
export {
  _o as InfoMessage
};
