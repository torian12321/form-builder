import { jsx as c, jsxs as q } from "react/jsx-runtime";
import { FIELD_TYPE as L } from "../../FormRenderer.constants.js";
import { r as W } from "../../../../Fields.styles-a09d0a4e.js";
import { getFieldChoices as A } from "./Fields.utils.js";
import { s as y, a as f, P as e, g as F, r as H, h as x, j as Y, _ as N } from "../../../../styled-c6437ab8.js";
import * as p from "react";
import { a as Z, u as J } from "../../../../useFormControl-a3d8b2b6.js";
import { r as K, a as Q } from "../../../../TransitionGroupContext-fe4c547b.js";
import { c as X, f as oo, u as eo } from "../../../../FormHelperText-5a47fd9c.js";
import { c as $ } from "../../../../clsx-f0826a09.js";
import { g as T, u as E, c as M } from "../../../../useThemeProps-7889d54e.js";
import { M as ro } from "../../../../FormControlLabel-0067f876.js";
import { S as to } from "../../../../SwitchBase-33511e9c.js";
import { c as P } from "../../../../createSvgIcon-4c228bdf.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
import "../../../../moment-a2f61e40.js";
import "../../../utils/dateUtils.js";
import "../../../../SharedTextField-c5888703.js";
import "../../../../useTheme-f100ae81.js";
import "../../../../Paper-79c19457.js";
const no = P(/* @__PURE__ */ c("path", {
  d: "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
}), "RadioButtonUnchecked"), ao = P(/* @__PURE__ */ c("path", {
  d: "M8.465 8.465C9.37 7.56 10.62 7 12 7C14.76 7 17 9.24 17 12C17 13.38 16.44 14.63 15.535 15.535C14.63 16.44 13.38 17 12 17C9.24 17 7 14.76 7 12C7 10.62 7.56 9.37 8.465 8.465Z"
}), "RadioButtonChecked"), so = y("span")({
  position: "relative",
  display: "flex"
}), co = y(no)({
  // Scale applied to prevent dot misalignment in Safari
  transform: "scale(1)"
}), io = y(ao)(({
  theme: o,
  ownerState: r
}) => f({
  left: 0,
  position: "absolute",
  transform: "scale(0)",
  transition: o.transitions.create("transform", {
    easing: o.transitions.easing.easeIn,
    duration: o.transitions.duration.shortest
  })
}, r.checked && {
  transform: "scale(1)",
  transition: o.transitions.create("transform", {
    easing: o.transitions.easing.easeOut,
    duration: o.transitions.duration.shortest
  })
}));
function O(o) {
  const {
    checked: r = !1,
    classes: t = {},
    fontSize: n
  } = o, a = f({}, o, {
    checked: r
  });
  return /* @__PURE__ */ q(so, {
    className: t.root,
    ownerState: a,
    children: [/* @__PURE__ */ c(co, {
      fontSize: n,
      className: t.background,
      ownerState: a
    }), /* @__PURE__ */ c(io, {
      fontSize: n,
      className: t.dot,
      ownerState: a
    })]
  });
}
process.env.NODE_ENV !== "production" && (O.propTypes = {
  /**
   * If `true`, the component is checked.
   */
  checked: e.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: e.object,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   */
  fontSize: e.oneOf(["small", "medium"])
});
const _ = /* @__PURE__ */ p.createContext(void 0);
process.env.NODE_ENV !== "production" && (_.displayName = "RadioGroupContext");
const j = _;
function lo() {
  return p.useContext(j);
}
function uo(o) {
  return F("MuiRadio", o);
}
const po = T("MuiRadio", ["root", "checked", "disabled", "colorPrimary", "colorSecondary", "sizeSmall"]), I = po, fo = ["checked", "checkedIcon", "color", "icon", "name", "onChange", "size", "className"], mo = (o) => {
  const {
    classes: r,
    color: t,
    size: n
  } = o, a = {
    root: ["root", `color${x(t)}`, n !== "medium" && `size${x(n)}`]
  };
  return f({}, r, M(a, uo, r));
}, ho = y(to, {
  shouldForwardProp: (o) => H(o) || o === "classes",
  name: "MuiRadio",
  slot: "Root",
  overridesResolver: (o, r) => {
    const {
      ownerState: t
    } = o;
    return [r.root, r[`color${x(t.color)}`]];
  }
})(({
  theme: o,
  ownerState: r
}) => f({
  color: (o.vars || o).palette.text.secondary
}, !r.disableRipple && {
  "&:hover": {
    backgroundColor: o.vars ? `rgba(${r.color === "default" ? o.vars.palette.action.activeChannel : o.vars.palette[r.color].mainChannel} / ${o.vars.palette.action.hoverOpacity})` : Y(r.color === "default" ? o.palette.action.active : o.palette[r.color].main, o.palette.action.hoverOpacity),
    // Reset on touch devices, it doesn't add specificity
    "@media (hover: none)": {
      backgroundColor: "transparent"
    }
  }
}, r.color !== "default" && {
  [`&.${I.checked}`]: {
    color: (o.vars || o).palette[r.color].main
  }
}, {
  [`&.${I.disabled}`]: {
    color: (o.vars || o).palette.action.disabled
  }
}));
function Co(o, r) {
  return typeof r == "object" && r !== null ? o === r : String(o) === String(r);
}
const G = /* @__PURE__ */ c(O, {
  checked: !0
}), z = /* @__PURE__ */ c(O, {}), V = /* @__PURE__ */ p.forwardRef(function(r, t) {
  var n, a;
  const l = E({
    props: r,
    name: "MuiRadio"
  }), {
    checked: R,
    checkedIcon: u = G,
    color: g = "primary",
    icon: C = z,
    name: m,
    onChange: s,
    size: i = "medium",
    className: h
  } = l, b = N(l, fo), k = f({}, l, {
    color: g,
    size: i
  }), d = mo(k), v = lo();
  let S = R;
  const U = X(s, v && v.onChange);
  let w = m;
  return v && (typeof S > "u" && (S = Co(v.value, l.value)), typeof w > "u" && (w = v.name)), /* @__PURE__ */ c(ho, f({
    type: "radio",
    icon: /* @__PURE__ */ p.cloneElement(C, {
      fontSize: (n = z.props.fontSize) != null ? n : i
    }),
    checkedIcon: /* @__PURE__ */ p.cloneElement(u, {
      fontSize: (a = G.props.fontSize) != null ? a : i
    }),
    ownerState: k,
    classes: d,
    name: w,
    checked: S,
    onChange: U,
    ref: t,
    className: $(d.root, h)
  }, b));
});
process.env.NODE_ENV !== "production" && (V.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component is checked.
   */
  checked: e.bool,
  /**
   * The icon to display when the component is checked.
   * @default <RadioButtonIcon checked />
   */
  checkedIcon: e.node,
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
  color: e.oneOfType([e.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), e.string]),
  /**
   * If `true`, the component is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the ripple effect is disabled.
   * @default false
   */
  disableRipple: e.bool,
  /**
   * The icon to display when the component is unchecked.
   * @default <RadioButtonIcon />
   */
  icon: e.node,
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
  inputRef: K,
  /**
   * Name attribute of the `input` element.
   */
  name: e.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * You can pull out the new value by accessing `event.target.value` (string).
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: e.func,
  /**
   * If `true`, the `input` element is required.
   * @default false
   */
  required: e.bool,
  /**
   * The size of the component.
   * `small` is equivalent to the dense radio styling.
   * @default 'medium'
   */
  size: e.oneOfType([e.oneOf(["medium", "small"]), e.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The value of the component. The DOM API casts this to a string.
   */
  value: e.any
});
const Ro = V;
function go(o) {
  return F("MuiFormGroup", o);
}
T("MuiFormGroup", ["root", "row", "error"]);
const vo = ["className", "row"], yo = (o) => {
  const {
    classes: r,
    row: t,
    error: n
  } = o;
  return M({
    root: ["root", t && "row", n && "error"]
  }, go, r);
}, bo = y("div", {
  name: "MuiFormGroup",
  slot: "Root",
  overridesResolver: (o, r) => {
    const {
      ownerState: t
    } = o;
    return [r.root, t.row && r.row];
  }
})(({
  ownerState: o
}) => f({
  display: "flex",
  flexDirection: "column",
  flexWrap: "wrap"
}, o.row && {
  flexDirection: "row"
})), B = /* @__PURE__ */ p.forwardRef(function(r, t) {
  const n = E({
    props: r,
    name: "MuiFormGroup"
  }), {
    className: a,
    row: l = !1
  } = n, R = N(n, vo), u = Z(), g = oo({
    props: n,
    muiFormControl: u,
    states: ["error"]
  }), C = f({}, n, {
    row: l,
    error: g.error
  }), m = yo(C);
  return /* @__PURE__ */ c(bo, f({
    className: $(m.root, a),
    ownerState: C,
    ref: t
  }, R));
});
process.env.NODE_ENV !== "production" && (B.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
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
   * Display group of elements in a compact row.
   * @default false
   */
  row: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const ko = B, So = ["actions", "children", "defaultValue", "name", "onChange", "value"], D = /* @__PURE__ */ p.forwardRef(function(r, t) {
  const {
    // private
    // eslint-disable-next-line react/prop-types
    actions: n,
    children: a,
    defaultValue: l,
    name: R,
    onChange: u,
    value: g
  } = r, C = N(r, So), m = p.useRef(null), [s, i] = J({
    controlled: g,
    default: l,
    name: "RadioGroup"
  });
  p.useImperativeHandle(n, () => ({
    focus: () => {
      let d = m.current.querySelector("input:not(:disabled):checked");
      d || (d = m.current.querySelector("input:not(:disabled)")), d && d.focus();
    }
  }), []);
  const h = Q(t, m), b = eo(R), k = p.useMemo(() => ({
    name: b,
    onChange(d) {
      i(d.target.value), u && u(d, d.target.value);
    },
    value: s
  }), [b, u, i, s]);
  return /* @__PURE__ */ c(j.Provider, {
    value: k,
    children: /* @__PURE__ */ c(ko, f({
      role: "radiogroup",
      ref: h
    }, C, {
      children: a
    }))
  });
});
process.env.NODE_ENV !== "production" && (D.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * The default value. Use when the component is not controlled.
   */
  defaultValue: e.any,
  /**
   * The name used to reference the value of the control.
   * If you don't provide this prop, it falls back to a randomly generated name.
   */
  name: e.string,
  /**
   * Callback fired when a radio button is selected.
   *
   * @param {React.ChangeEvent<HTMLInputElement>} event The event source of the callback.
   * @param {string} value The value of the selected radio button.
   * You can pull out the new value by accessing `event.target.value` (string).
   */
  onChange: e.func,
  /**
   * Value of the selected radio button. The DOM API casts this to a string.
   */
  value: e.any
});
const wo = D, Ho = ({
  type: o,
  name: r,
  value: t,
  disabled: n = !1,
  required: a = !1,
  onChange: l,
  onBlur: R,
  ...u
}) => {
  if (o !== L.RADIO_BUTTON)
    return null;
  const g = A(u == null ? void 0 : u.properties), C = (s) => {
    var h;
    const i = ((h = s == null ? void 0 : s.target) == null ? void 0 : h.value) || null;
    l(i);
  }, m = (s) => {
    var h;
    const i = (h = s.target) == null ? void 0 : h.value;
    !a && i === t && l(null);
  };
  return /* @__PURE__ */ c(
    wo,
    {
      row: !0,
      id: r,
      name: r,
      value: t,
      onChange: C,
      children: g.map((s, i) => /* @__PURE__ */ c(
        ro,
        {
          onClick: m,
          sx: W,
          value: s.value,
          control: /* @__PURE__ */ c(Ro, { size: "small" }),
          label: s.label || s.value,
          disabled: s.disabled || n,
          onBlur: R
        },
        i
      ))
    }
  );
};
export {
  Ho as RadioGroup
};
