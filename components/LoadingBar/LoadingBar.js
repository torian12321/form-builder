import { jsxs as D, jsx as m } from "react/jsx-runtime";
import { g as R, s as p, h as n, a as l, _ as q, P as o, l as j, k as E } from "../../styled-c6437ab8.js";
import * as U from "react";
import { c as z } from "../../clsx-f0826a09.js";
import { u as A } from "../../useTheme-f100ae81.js";
import { g as w, u as K, c as V } from "../../useThemeProps-7889d54e.js";
import { k as y, c as C } from "../../emotion-react.browser.esm-3aa427f2.js";
function S(r) {
  return R("MuiLinearProgress", r);
}
w("MuiLinearProgress", ["root", "colorPrimary", "colorSecondary", "determinate", "indeterminate", "buffer", "query", "dashed", "dashedColorPrimary", "dashedColorSecondary", "bar", "barColorPrimary", "barColorSecondary", "bar1Indeterminate", "bar1Determinate", "bar1Buffer", "bar2Indeterminate", "bar2Buffer"]);
const X = ["className", "color", "value", "valueBuffer", "variant"];
let f = (r) => r, k, x, B, N, _, I;
const h = 4, Y = y(k || (k = f`
  0% {
    left: -35%;
    right: 100%;
  }

  60% {
    left: 100%;
    right: -90%;
  }

  100% {
    left: 100%;
    right: -90%;
  }
`)), W = y(x || (x = f`
  0% {
    left: -200%;
    right: 100%;
  }

  60% {
    left: 107%;
    right: -8%;
  }

  100% {
    left: 107%;
    right: -8%;
  }
`)), F = y(B || (B = f`
  0% {
    opacity: 1;
    background-position: 0 -23px;
  }

  60% {
    opacity: 0;
    background-position: 0 -23px;
  }

  100% {
    opacity: 1;
    background-position: -200px -23px;
  }
`)), G = (r) => {
  const {
    classes: e,
    variant: a,
    color: t
  } = r, g = {
    root: ["root", `color${n(t)}`, a],
    dashed: ["dashed", `dashedColor${n(t)}`],
    bar1: ["bar", `barColor${n(t)}`, (a === "indeterminate" || a === "query") && "bar1Indeterminate", a === "determinate" && "bar1Determinate", a === "buffer" && "bar1Buffer"],
    bar2: ["bar", a !== "buffer" && `barColor${n(t)}`, a === "buffer" && `color${n(t)}`, (a === "indeterminate" || a === "query") && "bar2Indeterminate", a === "buffer" && "bar2Buffer"]
  };
  return V(g, S, e);
}, P = (r, e) => e === "inherit" ? "currentColor" : r.vars ? r.vars.palette.LinearProgress[`${e}Bg`] : r.palette.mode === "light" ? j(r.palette[e].main, 0.62) : E(r.palette[e].main, 0.5), H = p("span", {
  name: "MuiLinearProgress",
  slot: "Root",
  overridesResolver: (r, e) => {
    const {
      ownerState: a
    } = r;
    return [e.root, e[`color${n(a.color)}`], e[a.variant]];
  }
})(({
  ownerState: r,
  theme: e
}) => l({
  position: "relative",
  overflow: "hidden",
  display: "block",
  height: 4,
  zIndex: 0,
  // Fix Safari's bug during composition of different paint.
  "@media print": {
    colorAdjust: "exact"
  },
  backgroundColor: P(e, r.color)
}, r.color === "inherit" && r.variant !== "buffer" && {
  backgroundColor: "none",
  "&::before": {
    content: '""',
    position: "absolute",
    left: 0,
    top: 0,
    right: 0,
    bottom: 0,
    backgroundColor: "currentColor",
    opacity: 0.3
  }
}, r.variant === "buffer" && {
  backgroundColor: "transparent"
}, r.variant === "query" && {
  transform: "rotate(180deg)"
})), J = p("span", {
  name: "MuiLinearProgress",
  slot: "Dashed",
  overridesResolver: (r, e) => {
    const {
      ownerState: a
    } = r;
    return [e.dashed, e[`dashedColor${n(a.color)}`]];
  }
})(({
  ownerState: r,
  theme: e
}) => {
  const a = P(e, r.color);
  return l({
    position: "absolute",
    marginTop: 0,
    height: "100%",
    width: "100%"
  }, r.color === "inherit" && {
    opacity: 0.3
  }, {
    backgroundImage: `radial-gradient(${a} 0%, ${a} 16%, transparent 42%)`,
    backgroundSize: "10px 10px",
    backgroundPosition: "0 -23px"
  });
}, C(N || (N = f`
    animation: ${0} 3s infinite linear;
  `), F)), Q = p("span", {
  name: "MuiLinearProgress",
  slot: "Bar1",
  overridesResolver: (r, e) => {
    const {
      ownerState: a
    } = r;
    return [e.bar, e[`barColor${n(a.color)}`], (a.variant === "indeterminate" || a.variant === "query") && e.bar1Indeterminate, a.variant === "determinate" && e.bar1Determinate, a.variant === "buffer" && e.bar1Buffer];
  }
})(({
  ownerState: r,
  theme: e
}) => l({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left",
  backgroundColor: r.color === "inherit" ? "currentColor" : (e.vars || e).palette[r.color].main
}, r.variant === "determinate" && {
  transition: `transform .${h}s linear`
}, r.variant === "buffer" && {
  zIndex: 1,
  transition: `transform .${h}s linear`
}), ({
  ownerState: r
}) => (r.variant === "indeterminate" || r.variant === "query") && C(_ || (_ = f`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.65, 0.815, 0.735, 0.395) infinite;
    `), Y)), Z = p("span", {
  name: "MuiLinearProgress",
  slot: "Bar2",
  overridesResolver: (r, e) => {
    const {
      ownerState: a
    } = r;
    return [e.bar, e[`barColor${n(a.color)}`], (a.variant === "indeterminate" || a.variant === "query") && e.bar2Indeterminate, a.variant === "buffer" && e.bar2Buffer];
  }
})(({
  ownerState: r,
  theme: e
}) => l({
  width: "100%",
  position: "absolute",
  left: 0,
  bottom: 0,
  top: 0,
  transition: "transform 0.2s linear",
  transformOrigin: "left"
}, r.variant !== "buffer" && {
  backgroundColor: r.color === "inherit" ? "currentColor" : (e.vars || e).palette[r.color].main
}, r.color === "inherit" && {
  opacity: 0.3
}, r.variant === "buffer" && {
  backgroundColor: P(e, r.color),
  transition: `transform .${h}s linear`
}), ({
  ownerState: r
}) => (r.variant === "indeterminate" || r.variant === "query") && C(I || (I = f`
      width: auto;
      animation: ${0} 2.1s cubic-bezier(0.165, 0.84, 0.44, 1) 1.15s infinite;
    `), W)), T = /* @__PURE__ */ U.forwardRef(function(e, a) {
  const t = K({
    props: e,
    name: "MuiLinearProgress"
  }), {
    className: g,
    color: O = "primary",
    value: v,
    valueBuffer: L,
    variant: s = "indeterminate"
  } = t, M = q(t, X), c = l({}, t, {
    color: O,
    variant: s
  }), u = G(c), $ = A(), d = {}, b = {
    bar1: {},
    bar2: {}
  };
  if (s === "determinate" || s === "buffer")
    if (v !== void 0) {
      d["aria-valuenow"] = Math.round(v), d["aria-valuemin"] = 0, d["aria-valuemax"] = 100;
      let i = v - 100;
      $.direction === "rtl" && (i = -i), b.bar1.transform = `translateX(${i}%)`;
    } else
      process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a value prop when using the determinate or buffer variant of LinearProgress .");
  if (s === "buffer")
    if (L !== void 0) {
      let i = (L || 0) - 100;
      $.direction === "rtl" && (i = -i), b.bar2.transform = `translateX(${i}%)`;
    } else
      process.env.NODE_ENV !== "production" && console.error("MUI: You need to provide a valueBuffer prop when using the buffer variant of LinearProgress.");
  return /* @__PURE__ */ D(H, l({
    className: z(u.root, g),
    ownerState: c,
    role: "progressbar"
  }, d, {
    ref: a
  }, M, {
    children: [s === "buffer" ? /* @__PURE__ */ m(J, {
      className: u.dashed,
      ownerState: c
    }) : null, /* @__PURE__ */ m(Q, {
      className: u.bar1,
      ownerState: c,
      style: b.bar1
    }), s === "determinate" ? null : /* @__PURE__ */ m(Z, {
      className: u.bar2,
      ownerState: c,
      style: b.bar2
    })]
  }));
});
process.env.NODE_ENV !== "production" && (T.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
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
  color: o.oneOfType([o.oneOf(["inherit", "primary", "secondary"]), o.string]),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: o.oneOfType([o.arrayOf(o.oneOfType([o.func, o.object, o.bool])), o.func, o.object]),
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: o.number,
  /**
   * The value for the buffer variant.
   * Value between 0 and 100.
   */
  valueBuffer: o.number,
  /**
   * The variant to use.
   * Use indeterminate or query when there is no progress value.
   * @default 'indeterminate'
   */
  variant: o.oneOf(["buffer", "determinate", "indeterminate", "query"])
});
const rr = T, er = "loader", lr = ({
  show: r = !0,
  sx: e
}) => r ? /* @__PURE__ */ m(rr, { "data-testid": er, sx: e }) : null;
export {
  er as DATA_TEST,
  lr as LoadingBar,
  lr as default
};
