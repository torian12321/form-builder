import { g as D, s as F, a as d, _ as V, P as e, h as W } from "./styled-c6437ab8.js";
import * as A from "react";
import { c as G } from "./clsx-f0826a09.js";
import { u as H, a as J } from "./useFormControl-a3d8b2b6.js";
import { g as K, c as M } from "./useThemeProps-7889d54e.js";
import { jsxs as Q, jsx as X } from "react/jsx-runtime";
import { B as Y } from "./ButtonBase-b38416c5.js";
import { r as Z } from "./TransitionGroupContext-fe4c547b.js";
function ee(o) {
  return D("PrivateSwitchBase", o);
}
K("PrivateSwitchBase", ["root", "checked", "disabled", "input", "edgeStart", "edgeEnd"]);
const oe = ["autoFocus", "checked", "checkedIcon", "className", "defaultChecked", "disabled", "disableFocusRipple", "edge", "icon", "id", "inputProps", "inputRef", "name", "onBlur", "onChange", "onFocus", "readOnly", "required", "tabIndex", "type", "value"], se = (o) => {
  const {
    classes: n,
    checked: r,
    disabled: l,
    edge: a
  } = o, u = {
    root: ["root", r && "checked", l && "disabled", a && `edge${W(a)}`],
    input: ["input"]
  };
  return M(u, ee, n);
}, te = F(Y)(({
  ownerState: o
}) => d({
  padding: 9,
  borderRadius: "50%"
}, o.edge === "start" && {
  marginLeft: o.size === "small" ? -3 : -12
}, o.edge === "end" && {
  marginRight: o.size === "small" ? -3 : -12
})), ne = F("input")({
  cursor: "inherit",
  position: "absolute",
  opacity: 0,
  width: "100%",
  height: "100%",
  top: 0,
  left: 0,
  margin: 0,
  padding: 0,
  zIndex: 1
}), R = /* @__PURE__ */ A.forwardRef(function(n, r) {
  const {
    autoFocus: l,
    checked: a,
    checkedIcon: u,
    className: x,
    defaultChecked: f,
    disabled: w,
    disableFocusRipple: h = !1,
    edge: S = !1,
    icon: I,
    id: P,
    inputProps: q,
    inputRef: N,
    name: O,
    onBlur: m,
    onChange: b,
    onFocus: g,
    readOnly: j,
    required: v = !1,
    tabIndex: _,
    type: c,
    value: k
  } = n, z = V(n, oe), [y, E] = H({
    controlled: a,
    default: !!f,
    name: "SwitchBase",
    state: "checked"
  }), t = J(), T = (s) => {
    g && g(s), t && t.onFocus && t.onFocus(s);
  }, U = (s) => {
    m && m(s), t && t.onBlur && t.onBlur(s);
  }, L = (s) => {
    if (s.nativeEvent.defaultPrevented)
      return;
    const C = s.target.checked;
    E(C), b && b(s, C);
  };
  let i = w;
  t && typeof i > "u" && (i = t.disabled);
  const $ = c === "checkbox" || c === "radio", p = d({}, n, {
    checked: y,
    disabled: i,
    disableFocusRipple: h,
    edge: S
  }), B = se(p);
  return /* @__PURE__ */ Q(te, d({
    component: "span",
    className: G(B.root, x),
    centerRipple: !0,
    focusRipple: !h,
    disabled: i,
    tabIndex: null,
    role: void 0,
    onFocus: T,
    onBlur: U,
    ownerState: p,
    ref: r
  }, z, {
    children: [/* @__PURE__ */ X(ne, d({
      autoFocus: l,
      checked: a,
      defaultChecked: f,
      className: B.input,
      disabled: i,
      id: $ ? P : void 0,
      name: O,
      onChange: L,
      readOnly: j,
      ref: N,
      required: v,
      ownerState: p,
      tabIndex: _,
      type: c
    }, c === "checkbox" && k === void 0 ? {} : {
      value: k
    }, q)), y ? u : I]
  }));
});
process.env.NODE_ENV !== "production" && (R.propTypes = {
  /**
   * If `true`, the `input` element is focused during the first mount.
   */
  autoFocus: e.bool,
  /**
   * If `true`, the component is checked.
   */
  checked: e.bool,
  /**
   * The icon to display when the component is checked.
   */
  checkedIcon: e.node.isRequired,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * @ignore
   */
  defaultChecked: e.bool,
  /**
   * If `true`, the component is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the  keyboard focus ripple is disabled.
   * @default false
   */
  disableFocusRipple: e.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one
   * side (this is often helpful for aligning the left or right
   * side of the icon with content above or below, without ruining the border
   * size and shape).
   * @default false
   */
  edge: e.oneOf(["end", "start", !1]),
  /**
   * The icon to display when the component is unchecked.
   */
  icon: e.node.isRequired,
  /**
   * The id of the `input` element.
   */
  id: e.string,
  /**
   * [Attributes](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Attributes) applied to the `input` element.
   */
  inputProps: e.object,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: Z,
  /*
   * @ignore
   */
  name: e.string,
  /**
   * @ignore
   */
  onBlur: e.func,
  /**
   * Callback fired when the state is changed.
   *
   * @param {object} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: e.func,
  /**
   * @ignore
   */
  onFocus: e.func,
  /**
   * It prevents the user from changing the value of the field
   * (not from interacting with the field).
   */
  readOnly: e.bool,
  /**
   * If `true`, the `input` element is required.
   */
  required: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.object,
  /**
   * @ignore
   */
  tabIndex: e.oneOfType([e.number, e.string]),
  /**
   * The input component prop `type`.
   */
  type: e.string.isRequired,
  /**
   * The value of the component.
   */
  value: e.any
});
const pe = R;
export {
  pe as S
};
