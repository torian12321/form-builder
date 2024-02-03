import * as l from "react";
import { g as h, s as F, h as y, a as f, _ as H, P as n } from "./styled-c6437ab8.js";
import { c as w } from "./clsx-f0826a09.js";
import { a as C } from "./useFormControl-a3d8b2b6.js";
import { g as N, u as _, c as q } from "./useThemeProps-7889d54e.js";
import { jsx as p } from "react/jsx-runtime";
function B(...e) {
  return e.reduce((o, t) => t == null ? o : function(...s) {
    o.apply(this, s), t.apply(this, s);
  }, () => {
  });
}
function W(e, o = 166) {
  let t;
  function r(...s) {
    const a = () => {
      e.apply(this, s);
    };
    clearTimeout(t), t = setTimeout(a, o);
  }
  return r.clear = () => {
    clearTimeout(t);
  }, r;
}
function A(e, o) {
  var t, r;
  return /* @__PURE__ */ l.isValidElement(e) && o.indexOf(
    // For server components `muiName` is avaialble in element.type._payload.value.muiName
    // relevant info - https://github.com/facebook/react/blob/2807d781a08db8e9873687fccc25c0f12b4fb3d4/packages/react/src/ReactLazy.js#L45
    // eslint-disable-next-line no-underscore-dangle
    (t = e.type.muiName) != null ? t : (r = e.type) == null || (r = r._payload) == null || (r = r.value) == null ? void 0 : r.muiName
  ) !== -1;
}
function I(e) {
  return e && e.ownerDocument || document;
}
function G(e) {
  return I(e).defaultView || window;
}
let b = 0;
function M(e) {
  const [o, t] = l.useState(e), r = e || o;
  return l.useEffect(() => {
    o == null && (b += 1, t(`mui-${b}`));
  }, [o]), r;
}
const T = l["useId".toString()];
function k(e) {
  if (T !== void 0) {
    const o = T();
    return e ?? o;
  }
  return M(e);
}
function R({
  props: e,
  states: o,
  muiFormControl: t
}) {
  return o.reduce((r, s) => (r[s] = e[s], t && typeof e[s] > "u" && (r[s] = t[s]), r), {});
}
function $(e) {
  return h("MuiFormHelperText", e);
}
const S = N("MuiFormHelperText", ["root", "error", "disabled", "sizeSmall", "sizeMedium", "contained", "focused", "filled", "required"]), g = S;
var x;
const j = ["children", "className", "component", "disabled", "error", "filled", "focused", "margin", "required", "variant"], E = (e) => {
  const {
    classes: o,
    contained: t,
    size: r,
    disabled: s,
    error: a,
    filled: d,
    focused: c,
    required: u
  } = e, i = {
    root: ["root", s && "disabled", a && "error", r && `size${y(r)}`, t && "contained", c && "focused", d && "filled", u && "required"]
  };
  return q(i, $, o);
}, O = F("p", {
  name: "MuiFormHelperText",
  slot: "Root",
  overridesResolver: (e, o) => {
    const {
      ownerState: t
    } = e;
    return [o.root, t.size && o[`size${y(t.size)}`], t.contained && o.contained, t.filled && o.filled];
  }
})(({
  theme: e,
  ownerState: o
}) => f({
  color: (e.vars || e).palette.text.secondary
}, e.typography.caption, {
  textAlign: "left",
  marginTop: 3,
  marginRight: 0,
  marginBottom: 0,
  marginLeft: 0,
  [`&.${g.disabled}`]: {
    color: (e.vars || e).palette.text.disabled
  },
  [`&.${g.error}`]: {
    color: (e.vars || e).palette.error.main
  }
}, o.size === "small" && {
  marginTop: 4
}, o.contained && {
  marginLeft: 14,
  marginRight: 14
})), v = /* @__PURE__ */ l.forwardRef(function(o, t) {
  const r = _({
    props: o,
    name: "MuiFormHelperText"
  }), {
    children: s,
    className: a,
    component: d = "p"
  } = r, c = H(r, j), u = C(), i = R({
    props: r,
    muiFormControl: u,
    states: ["variant", "size", "disabled", "error", "filled", "focused", "required"]
  }), m = f({}, r, {
    component: d,
    contained: i.variant === "filled" || i.variant === "outlined",
    variant: i.variant,
    size: i.size,
    disabled: i.disabled,
    error: i.error,
    filled: i.filled,
    focused: i.focused,
    required: i.required
  }), z = E(m);
  return /* @__PURE__ */ p(O, f({
    as: d,
    ownerState: m,
    className: w(z.root, a),
    ref: t
  }, c, {
    children: s === " " ? (
      // notranslate needed while Google Translate will not fix zero-width space issue
      x || (x = /* @__PURE__ */ p("span", {
        className: "notranslate",
        children: "​"
      }))
    ) : s
  }));
});
process.env.NODE_ENV !== "production" && (v.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   *
   * If `' '` is provided, the component reserves one line height for displaying a future message.
   */
  children: n.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: n.object,
  /**
   * @ignore
   */
  className: n.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: n.elementType,
  /**
   * If `true`, the helper text should be displayed in a disabled state.
   */
  disabled: n.bool,
  /**
   * If `true`, helper text should be displayed in an error state.
   */
  error: n.bool,
  /**
   * If `true`, the helper text should use filled classes key.
   */
  filled: n.bool,
  /**
   * If `true`, the helper text should use focused classes key.
   */
  focused: n.bool,
  /**
   * If `dense`, will adjust vertical spacing. This is normally obtained via context from
   * FormControl.
   */
  margin: n.oneOf(["dense"]),
  /**
   * If `true`, the helper text should use required classes key.
   */
  required: n.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: n.oneOfType([n.arrayOf(n.oneOfType([n.func, n.object, n.bool])), n.func, n.object]),
  /**
   * The variant to use.
   */
  variant: n.oneOfType([n.oneOf(["filled", "outlined", "standard"]), n.string])
});
const J = v;
export {
  J as M,
  G as a,
  B as c,
  W as d,
  R as f,
  A as i,
  I as o,
  k as u
};
