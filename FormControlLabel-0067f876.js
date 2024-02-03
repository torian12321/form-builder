import { o as W, P as e, n as z, a as m, p as q, q as N, t as H, u as J, v as K, _ as w, g as E, w as D, s as M, h as _ } from "./styled-c6437ab8.js";
import * as h from "react";
import { c as $ } from "./clsx-f0826a09.js";
import { a as Q, c as B, u as U, g as X } from "./useThemeProps-7889d54e.js";
import { f as Y } from "./FormHelperText-5a47fd9c.js";
import { jsx as A, jsxs as S } from "react/jsx-runtime";
import { a as Z } from "./useFormControl-a3d8b2b6.js";
import { T as V } from "./Typography-cd3e79a2.js";
import { e as ee } from "./extendSxProp-e33cd6d1.js";
import { r as oe } from "./TransitionGroupContext-fe4c547b.js";
const re = W(), te = re, se = ["component", "direction", "spacing", "divider", "children", "className", "useFlexGap"], ne = z(), le = te("div", {
  name: "MuiStack",
  slot: "Root",
  overridesResolver: (o, r) => r.root
});
function ae(o) {
  return Q({
    props: o,
    name: "MuiStack",
    defaultTheme: ne
  });
}
function ce(o, r) {
  const s = h.Children.toArray(o).filter(Boolean);
  return s.reduce((l, c, t) => (l.push(c), t < s.length - 1 && l.push(/* @__PURE__ */ h.cloneElement(r, {
    key: `separator-${t}`
  })), l), []);
}
const ie = (o) => ({
  row: "Left",
  "row-reverse": "Right",
  column: "Top",
  "column-reverse": "Bottom"
})[o], pe = ({
  ownerState: o,
  theme: r
}) => {
  let s = m({
    display: "flex",
    flexDirection: "column"
  }, q({
    theme: r
  }, N({
    values: o.direction,
    breakpoints: r.breakpoints.values
  }), (l) => ({
    flexDirection: l
  })));
  if (o.spacing) {
    const l = H(r), c = Object.keys(r.breakpoints.values).reduce((n, a) => ((typeof o.spacing == "object" && o.spacing[a] != null || typeof o.direction == "object" && o.direction[a] != null) && (n[a] = !0), n), {}), t = N({
      values: o.direction,
      base: c
    }), i = N({
      values: o.spacing,
      base: c
    });
    typeof t == "object" && Object.keys(t).forEach((n, a, u) => {
      if (!t[n]) {
        const b = a > 0 ? t[u[a - 1]] : "column";
        t[n] = b;
      }
    }), s = J(s, q({
      theme: r
    }, i, (n, a) => o.useFlexGap ? {
      gap: D(l, n)
    } : {
      // The useFlexGap={false} implement relies on each child to give up control of the margin.
      // We need to reset the margin to avoid double spacing.
      "& > :not(style):not(style)": {
        margin: 0
      },
      "& > :not(style) ~ :not(style)": {
        [`margin${ie(a ? t[a] : o.direction)}`]: D(l, n)
      }
    }));
  }
  return s = K(r.breakpoints, s), s;
};
function de(o = {}) {
  const {
    // This will allow adding custom styled fn (for example for custom sx style function)
    createStyledComponent: r = le,
    useThemeProps: s = ae,
    componentName: l = "MuiStack"
  } = o, c = () => B({
    root: ["root"]
  }, (n) => E(l, n), {}), t = r(pe), i = /* @__PURE__ */ h.forwardRef(function(n, a) {
    const u = s(n), f = ee(u), {
      component: b = "div",
      direction: C = "column",
      spacing: x = 0,
      divider: T,
      children: p,
      className: O,
      useFlexGap: y = !1
    } = f, k = w(f, se), F = {
      direction: C,
      spacing: x,
      useFlexGap: y
    }, g = c();
    return /* @__PURE__ */ A(t, m({
      as: b,
      ownerState: F,
      ref: a,
      className: $(g.root, O)
    }, k, {
      children: T ? ce(p, T) : p
    }));
  });
  return process.env.NODE_ENV !== "production" && (i.propTypes = {
    children: e.node,
    direction: e.oneOfType([e.oneOf(["column-reverse", "column", "row-reverse", "row"]), e.arrayOf(e.oneOf(["column-reverse", "column", "row-reverse", "row"])), e.object]),
    divider: e.node,
    spacing: e.oneOfType([e.arrayOf(e.oneOfType([e.number, e.string])), e.number, e.object, e.string]),
    sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
  }), i;
}
const G = de({
  createStyledComponent: M("div", {
    name: "MuiStack",
    slot: "Root",
    overridesResolver: (o, r) => r.root
  }),
  useThemeProps: (o) => U({
    props: o,
    name: "MuiStack"
  })
});
process.env.NODE_ENV !== "production" && (G.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: e.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * Defines the `flex-direction` style property.
   * It is applied for all screen sizes.
   * @default 'column'
   */
  direction: e.oneOfType([e.oneOf(["column-reverse", "column", "row-reverse", "row"]), e.arrayOf(e.oneOf(["column-reverse", "column", "row-reverse", "row"])), e.object]),
  /**
   * Add an element between each child.
   */
  divider: e.node,
  /**
   * Defines the space between immediate children.
   * @default 0
   */
  spacing: e.oneOfType([e.arrayOf(e.oneOfType([e.number, e.string])), e.number, e.object, e.string]),
  /**
   * The system prop, which allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * If `true`, the CSS flexbox `gap` is used instead of applying `margin` to children.
   *
   * While CSS `gap` removes the [known limitations](https://mui.com/joy-ui/react-stack/#limitations),
   * it is not fully supported in some browsers. We recommend checking https://caniuse.com/?search=flex%20gap before using this flag.
   *
   * To enable this flag globally, follow the [theme's default props](https://mui.com/material-ui/customization/theme-components/#default-props) configuration.
   * @default false
   */
  useFlexGap: e.bool
});
const me = G;
function ue(o) {
  return E("MuiFormControlLabel", o);
}
const fe = X("MuiFormControlLabel", ["root", "labelPlacementStart", "labelPlacementTop", "labelPlacementBottom", "disabled", "label", "error", "required", "asterisk"]), v = fe, be = ["checked", "className", "componentsProps", "control", "disabled", "disableTypography", "inputRef", "label", "labelPlacement", "name", "onChange", "required", "slotProps", "value"], ye = (o) => {
  const {
    classes: r,
    disabled: s,
    labelPlacement: l,
    error: c,
    required: t
  } = o, i = {
    root: ["root", s && "disabled", `labelPlacement${_(l)}`, c && "error", t && "required"],
    label: ["label", s && "disabled"],
    asterisk: ["asterisk", c && "error"]
  };
  return B(i, ue, r);
}, ge = M("label", {
  name: "MuiFormControlLabel",
  slot: "Root",
  overridesResolver: (o, r) => {
    const {
      ownerState: s
    } = o;
    return [{
      [`& .${v.label}`]: r.label
    }, r.root, r[`labelPlacement${_(s.labelPlacement)}`]];
  }
})(({
  theme: o,
  ownerState: r
}) => m({
  display: "inline-flex",
  alignItems: "center",
  cursor: "pointer",
  // For correct alignment with the text.
  verticalAlign: "middle",
  WebkitTapHighlightColor: "transparent",
  marginLeft: -11,
  marginRight: 16,
  // used for row presentation of radio/checkbox
  [`&.${v.disabled}`]: {
    cursor: "default"
  }
}, r.labelPlacement === "start" && {
  flexDirection: "row-reverse",
  marginLeft: 16,
  // used for row presentation of radio/checkbox
  marginRight: -11
}, r.labelPlacement === "top" && {
  flexDirection: "column-reverse",
  marginLeft: 16
}, r.labelPlacement === "bottom" && {
  flexDirection: "column",
  marginLeft: 16
}, {
  [`& .${v.label}`]: {
    [`&.${v.disabled}`]: {
      color: (o.vars || o).palette.text.disabled
    }
  }
})), ve = M("span", {
  name: "MuiFormControlLabel",
  slot: "Asterisk",
  overridesResolver: (o, r) => r.asterisk
})(({
  theme: o
}) => ({
  [`&.${v.error}`]: {
    color: (o.vars || o).palette.error.main
  }
})), I = /* @__PURE__ */ h.forwardRef(function(r, s) {
  var l, c;
  const t = U({
    props: r,
    name: "MuiFormControlLabel"
  }), {
    className: i,
    componentsProps: P = {},
    control: n,
    disabled: a,
    disableTypography: u,
    label: f,
    labelPlacement: b = "end",
    required: C,
    slotProps: x = {}
  } = t, T = w(t, be), p = Z(), O = (l = a ?? n.props.disabled) != null ? l : p == null ? void 0 : p.disabled, y = C ?? n.props.required, k = {
    disabled: O,
    required: y
  };
  ["checked", "name", "onChange", "value", "inputRef"].forEach((j) => {
    typeof n.props[j] > "u" && typeof t[j] < "u" && (k[j] = t[j]);
  });
  const F = Y({
    props: t,
    muiFormControl: p,
    states: ["error"]
  }), g = m({}, t, {
    disabled: O,
    labelPlacement: b,
    required: y,
    error: F.error
  }), R = ye(g), L = (c = x.typography) != null ? c : P.typography;
  let d = f;
  return d != null && d.type !== V && !u && (d = /* @__PURE__ */ A(V, m({
    component: "span"
  }, L, {
    className: $(R.label, L == null ? void 0 : L.className),
    children: d
  }))), /* @__PURE__ */ S(ge, m({
    className: $(R.root, i),
    ownerState: g,
    ref: s
  }, T, {
    children: [/* @__PURE__ */ h.cloneElement(n, k), y ? /* @__PURE__ */ S(me, {
      direction: "row",
      alignItems: "center",
      children: [d, /* @__PURE__ */ S(ve, {
        ownerState: g,
        "aria-hidden": !0,
        className: R.asterisk,
        children: [" ", "*"]
      })]
    }) : d]
  }));
});
process.env.NODE_ENV !== "production" && (I.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the component appears selected.
   */
  checked: e.bool,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: e.shape({
    typography: e.object
  }),
  /**
   * A control element. For instance, it can be a `Radio`, a `Switch` or a `Checkbox`.
   */
  control: e.element.isRequired,
  /**
   * If `true`, the control is disabled.
   */
  disabled: e.bool,
  /**
   * If `true`, the label is rendered as it is passed without an additional typography node.
   */
  disableTypography: e.bool,
  /**
   * Pass a ref to the `input` element.
   */
  inputRef: oe,
  /**
   * A text or an element to be used in an enclosing label element.
   */
  label: e.node,
  /**
   * The position of the label.
   * @default 'end'
   */
  labelPlacement: e.oneOf(["bottom", "end", "start", "top"]),
  /**
   * @ignore
   */
  name: e.string,
  /**
   * Callback fired when the state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * You can pull out the new checked state by accessing `event.target.checked` (boolean).
   */
  onChange: e.func,
  /**
   * If `true`, the label will indicate that the `input` is required.
   */
  required: e.bool,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: e.shape({
    typography: e.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The value of the component.
   */
  value: e.any
});
const Re = I;
export {
  Re as M
};
