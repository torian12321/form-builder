import { g as $, s as M, r as B, h as f, a, j as R, _ as S, P as o } from "./styled-c6437ab8.js";
import * as m from "react";
import { c as T } from "./clsx-f0826a09.js";
import { S as j } from "./SwitchBase-33511e9c.js";
import { c as h } from "./createSvgIcon-4c228bdf.js";
import { jsx as t } from "react/jsx-runtime";
import { g as _, u as N, c as H } from "./useThemeProps-7889d54e.js";
import { r as V } from "./TransitionGroupContext-fe4c547b.js";
const E = h(/* @__PURE__ */ t("path", {
  d: "M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"
}), "CheckBoxOutlineBlank"), U = h(/* @__PURE__ */ t("path", {
  d: "M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"
}), "CheckBox"), L = h(/* @__PURE__ */ t("path", {
  d: "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-2 10H7v-2h10v2z"
}), "IndeterminateCheckBox");
function w(e) {
  return $("MuiCheckbox", e);
}
const F = _("MuiCheckbox", ["root", "checked", "disabled", "indeterminate", "colorPrimary", "colorSecondary", "sizeSmall", "sizeMedium"]), u = F, q = ["checkedIcon", "color", "icon", "indeterminate", "indeterminateIcon", "inputProps", "size", "className"], D = (e) => {
  const {
    classes: c,
    indeterminate: n,
    color: r,
    size: i
  } = e, s = {
    root: ["root", n && "indeterminate", `color${f(r)}`, `size${f(i)}`]
  }, d = H(s, w, c);
  return a({}, c, d);
}, W = M(j, {
  shouldForwardProp: (e) => B(e) || e === "classes",
  name: "MuiCheckbox",
  slot: "Root",
  overridesResolver: (e, c) => {
    const {
      ownerState: n
    } = e;
    return [c.root, n.indeterminate && c.indeterminate, n.color !== "default" && c[`color${f(n.color)}`]];
  }
})(({
  theme: e,
  ownerState: c
}) => a({
  color: (e.vars || e).palette.text.secondary
}, !c.disableRipple && {
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${c.color === "default" ? e.vars.palette.action.activeChannel : e.vars.palette[c.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : R(c.color === "default" ? e.palette.action.active : e.palette[c.color].main, e.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, c.color !== "default" && {
  [`&.${u.checked}, &.${u.indeterminate}`]: {
    color: (e.vars || e).palette[c.color].main
  },
  [`&.${u.disabled}`]: {
    color: (e.vars || e).palette.action.disabled
  }
})), A = /* @__PURE__ */ t(U, {}), G = /* @__PURE__ */ t(E, {}), J = /* @__PURE__ */ t(L, {}), y = /* @__PURE__ */ m.forwardRef(function(c, n) {
  var r, i;
  const s = N({
    props: c,
    name: "MuiCheckbox"
  }), {
    checkedIcon: d = A,
    color: I = "primary",
    icon: z = G,
    indeterminate: l = !1,
    indeterminateIcon: b = J,
    inputProps: g,
    size: p = "medium",
    className: P
  } = s, O = S(s, q), k = l ? b : z, C = l ? b : d, v = a({}, s, {
    color: I,
    indeterminate: l,
    size: p
  }), x = D(v);
  return /* @__PURE__ */ t(W, a({
    type: "checkbox",
    inputProps: a({
      "data-indeterminate": l
    }, g),
    icon: /* @__PURE__ */ m.cloneElement(k, {
      fontSize: (r = k.props.fontSize) != null ? r : p
    }),
    checkedIcon: /* @__PURE__ */ m.cloneElement(C, {
      fontSize: (i = C.props.fontSize) != null ? i : p
    }),
    ownerState: v,
    ref: n,
    className: T(x.root, P)
  }, O, {
    classes: x
  }));
});
process.env.NODE_ENV !== "production" && (y.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: o.bool,
  /**
   * The icon to display when the component is checked.
   * @default <CheckBoxIcon />
   */
  checkedIcon: o.node,
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
   * @default 'primary'
   */
  color: o.oneOfType([o.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), o.string]),
  /**
   * The default checked state. Use when the component is not controlled.
   */
  defaultChecked: o.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: o.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: o.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <CheckBoxOutlineBlankIcon />
   */
  icon: o.node,
  /**
   * The id of the `input` element.
   */
  id: o.string,
  /**
   * If `true`, the component appears indeterminate.
   * This does not set the native input element to indeterminate due
   * to inconsistent behavior across browsers.
   * However, we set a `data-indeterminate` attribute on the `input`.
   * @default false
   */
  indeterminate: o.bool,
  /**
   * The icon to display when the component is indeterminate.
   * @default <IndeterminateCheckBoxIcon />
   */
  indeterminateIcon: o.node,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: o.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: V,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: o.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: o.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense checkbox styling.
   * @default 'medium'
   */
  size: o.oneOfType([o.oneOf(["medium", "small"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   * The browser uses "on" as the default value.
   */
  value: o.any
});
const co = y;
export {
  co as M
};
