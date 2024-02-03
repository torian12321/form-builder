import { a as X, _ as ue, P as t, s as ae, g as We } from "./styled-c6437ab8.js";
import * as c from "react";
import W, { Children as He, isValidElement as G, cloneElement as J } from "react";
import { c as v } from "./clsx-f0826a09.js";
import { g as Ce, u as ve, c as Ge } from "./useThemeProps-7889d54e.js";
import { jsx as I, jsxs as Je } from "react/jsx-runtime";
import { k as le } from "./emotion-react.browser.esm-3aa427f2.js";
import { _ as Qe, T as be, a as ge, u as H, r as Ze, e as et } from "./TransitionGroupContext-fe4c547b.js";
let Q = !0, ie = !1, Re;
const tt = {
  text: !0,
  search: !0,
  url: !0,
  tel: !0,
  email: !0,
  password: !0,
  number: !0,
  date: !0,
  month: !0,
  week: !0,
  time: !0,
  datetime: !0,
  "datetime-local": !0
};
function nt(e) {
  const {
    type: n,
    tagName: i
  } = e;
  return !!(i === "INPUT" && tt[n] && !e.readOnly || i === "TEXTAREA" && !e.readOnly || e.isContentEditable);
}
function ot(e) {
  e.metaKey || e.altKey || e.ctrlKey || (Q = !0);
}
function re() {
  Q = !1;
}
function rt() {
  this.visibilityState === "hidden" && ie && (Q = !0);
}
function it(e) {
  e.addEventListener("keydown", ot, !0), e.addEventListener("mousedown", re, !0), e.addEventListener("pointerdown", re, !0), e.addEventListener("touchstart", re, !0), e.addEventListener("visibilitychange", rt, !0);
}
function st(e) {
  const {
    target: n
  } = e;
  try {
    return n.matches(":focus-visible");
  } catch {
  }
  return Q || nt(n);
}
function ut() {
  const e = c.useCallback((o) => {
    o != null && it(o.ownerDocument);
  }, []), n = c.useRef(!1);
  function i() {
    return n.current ? (ie = !0, window.clearTimeout(Re), Re = window.setTimeout(() => {
      ie = !1;
    }, 100), n.current = !1, !0) : !1;
  }
  function a(o) {
    return st(o) ? (n.current = !0, !0) : !1;
  }
  return {
    isFocusVisibleRef: n,
    onFocus: a,
    onBlur: i,
    ref: e
  };
}
function at(e) {
  if (e === void 0)
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return e;
}
function ce(e, n) {
  var i = function(r) {
    return n && G(r) ? n(r) : r;
  }, a = /* @__PURE__ */ Object.create(null);
  return e && He.map(e, function(o) {
    return o;
  }).forEach(function(o) {
    a[o.key] = i(o);
  }), a;
}
function lt(e, n) {
  e = e || {}, n = n || {};
  function i(h) {
    return h in n ? n[h] : e[h];
  }
  var a = /* @__PURE__ */ Object.create(null), o = [];
  for (var r in e)
    r in n ? o.length && (a[r] = o, o = []) : o.push(r);
  var s, p = {};
  for (var l in n) {
    if (a[l])
      for (s = 0; s < a[l].length; s++) {
        var f = a[l][s];
        p[a[l][s]] = i(f);
      }
    p[l] = i(l);
  }
  for (s = 0; s < o.length; s++)
    p[o[s]] = i(o[s]);
  return p;
}
function S(e, n, i) {
  return i[n] != null ? i[n] : e.props[n];
}
function ct(e, n) {
  return ce(e.children, function(i) {
    return J(i, {
      onExited: n.bind(null, i),
      in: !0,
      appear: S(i, "appear", e),
      enter: S(i, "enter", e),
      exit: S(i, "exit", e)
    });
  });
}
function pt(e, n, i) {
  var a = ce(e.children), o = lt(n, a);
  return Object.keys(o).forEach(function(r) {
    var s = o[r];
    if (G(s)) {
      var p = r in n, l = r in a, f = n[r], h = G(f) && !f.props.in;
      l && (!p || h) ? o[r] = J(s, {
        onExited: i.bind(null, s),
        in: !0,
        exit: S(s, "exit", e),
        enter: S(s, "enter", e)
      }) : !l && p && !h ? o[r] = J(s, {
        in: !1
      }) : l && p && G(f) && (o[r] = J(s, {
        onExited: i.bind(null, s),
        in: f.props.in,
        exit: S(s, "exit", e),
        enter: S(s, "enter", e)
      }));
    }
  }), o;
}
var ft = Object.values || function(e) {
  return Object.keys(e).map(function(n) {
    return e[n];
  });
}, dt = {
  component: "div",
  childFactory: function(n) {
    return n;
  }
}, pe = /* @__PURE__ */ function(e) {
  Qe(n, e);
  function n(a, o) {
    var r;
    r = e.call(this, a, o) || this;
    var s = r.handleExited.bind(at(r));
    return r.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: s,
      firstRender: !0
    }, r;
  }
  var i = n.prototype;
  return i.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, i.componentWillUnmount = function() {
    this.mounted = !1;
  }, n.getDerivedStateFromProps = function(o, r) {
    var s = r.children, p = r.handleExited, l = r.firstRender;
    return {
      children: l ? ct(o, p) : pt(o, s, p),
      firstRender: !1
    };
  }, i.handleExited = function(o, r) {
    var s = ce(this.props.children);
    o.key in s || (o.props.onExited && o.props.onExited(r), this.mounted && this.setState(function(p) {
      var l = X({}, p.children);
      return delete l[o.key], {
        children: l
      };
    }));
  }, i.render = function() {
    var o = this.props, r = o.component, s = o.childFactory, p = ue(o, ["component", "childFactory"]), l = this.state.contextValue, f = ft(this.state.children).map(s);
    return delete p.appear, delete p.enter, delete p.exit, r === null ? /* @__PURE__ */ W.createElement(be.Provider, {
      value: l
    }, f) : /* @__PURE__ */ W.createElement(be.Provider, {
      value: l
    }, /* @__PURE__ */ W.createElement(r, p, f));
  }, n;
}(W.Component);
pe.propTypes = process.env.NODE_ENV !== "production" ? {
  /**
   * `<TransitionGroup>` renders a `<div>` by default. You can change this
   * behavior by providing a `component` prop.
   * If you use React v16+ and would like to avoid a wrapping `<div>` element
   * you can pass in `component={null}`. This is useful if the wrapping div
   * borks your css styles.
   */
  component: t.any,
  /**
   * A set of `<Transition>` components, that are toggled `in` and out as they
   * leave. the `<TransitionGroup>` will inject specific transition props, so
   * remember to spread them through if you are wrapping the `<Transition>` as
   * with our `<Fade>` example.
   *
   * While this component is meant for multiple `Transition` or `CSSTransition`
   * children, sometimes you may want to have a single transition child with
   * content that you want to be transitioned out and in when you change it
   * (e.g. routes, images etc.) In that case you can change the `key` prop of
   * the transition child as you change its content, this will cause
   * `TransitionGroup` to transition the child out and back in.
   */
  children: t.node,
  /**
   * A convenience prop that enables or disables appear animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  appear: t.bool,
  /**
   * A convenience prop that enables or disables enter animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  enter: t.bool,
  /**
   * A convenience prop that enables or disables exit animations
   * for all children. Note that specifying this will override any defaults set
   * on individual children Transitions.
   */
  exit: t.bool,
  /**
   * You may need to apply reactive updates to a child as it is exiting.
   * This is generally done by using `cloneElement` however in the case of an exiting
   * child the element has already been removed and not accessible to the consumer.
   *
   * If you do need to update a child as it leaves you can provide a `childFactory`
   * to wrap every child, even the ones that are leaving.
   *
   * @type Function(child: ReactElement) -> ReactElement
   */
  childFactory: t.func
} : {};
pe.defaultProps = dt;
const ht = pe;
function xe(e) {
  const {
    className: n,
    classes: i,
    pulsate: a = !1,
    rippleX: o,
    rippleY: r,
    rippleSize: s,
    in: p,
    onExited: l,
    timeout: f
  } = e, [h, y] = c.useState(!1), g = v(n, i.ripple, i.rippleVisible, a && i.ripplePulsate), x = {
    width: s,
    height: s,
    top: -(s / 2) + r,
    left: -(s / 2) + o
  }, m = v(i.child, h && i.childLeaving, a && i.childPulsate);
  return !p && !h && y(!0), c.useEffect(() => {
    if (!p && l != null) {
      const T = setTimeout(l, f);
      return () => {
        clearTimeout(T);
      };
    }
  }, [l, p, f]), /* @__PURE__ */ I("span", {
    className: g,
    style: x,
    children: /* @__PURE__ */ I("span", {
      className: m
    })
  });
}
process.env.NODE_ENV !== "production" && (xe.propTypes = {
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object.isRequired,
  className: t.string,
  /**
   * @ignore - injected from TransitionGroup
   */
  in: t.bool,
  /**
   * @ignore - injected from TransitionGroup
   */
  onExited: t.func,
  /**
   * If `true`, the ripple pulsates, typically indicating the keyboard focus state of an element.
   */
  pulsate: t.bool,
  /**
   * Diameter of the ripple.
   */
  rippleSize: t.number,
  /**
   * Horizontal position of the ripple center.
   */
  rippleX: t.number,
  /**
   * Vertical position of the ripple center.
   */
  rippleY: t.number,
  /**
   * exit delay
   */
  timeout: t.number.isRequired
});
const mt = Ce("MuiTouchRipple", ["root", "ripple", "rippleVisible", "ripplePulsate", "child", "childLeaving", "childPulsate"]), b = mt, bt = ["center", "classes", "className"];
let Z = (e) => e, ye, Te, Ee, Me;
const se = 550, gt = 80, Rt = le(ye || (ye = Z`
  0% {
    transform: scale(0);
    opacity: 0.1;
  }

  100% {
    transform: scale(1);
    opacity: 0.3;
  }
`)), yt = le(Te || (Te = Z`
  0% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`)), Tt = le(Ee || (Ee = Z`
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.92);
  }

  100% {
    transform: scale(1);
  }
`)), Et = ae("span", {
  name: "MuiTouchRipple",
  slot: "Root"
})({
  overflow: "hidden",
  pointerEvents: "none",
  position: "absolute",
  zIndex: 0,
  top: 0,
  right: 0,
  bottom: 0,
  left: 0,
  borderRadius: "inherit"
}), Mt = ae(xe, {
  name: "MuiTouchRipple",
  slot: "Ripple"
})(Me || (Me = Z`
  opacity: 0;
  position: absolute;

  &.${0} {
    opacity: 0.3;
    transform: scale(1);
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  &.${0} {
    animation-duration: ${0}ms;
  }

  & .${0} {
    opacity: 1;
    display: block;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background-color: currentColor;
  }

  & .${0} {
    opacity: 0;
    animation-name: ${0};
    animation-duration: ${0}ms;
    animation-timing-function: ${0};
  }

  & .${0} {
    position: absolute;
    /* @noflip */
    left: 0px;
    top: 0;
    animation-name: ${0};
    animation-duration: 2500ms;
    animation-timing-function: ${0};
    animation-iteration-count: infinite;
    animation-delay: 200ms;
  }
`), b.rippleVisible, Rt, se, ({
  theme: e
}) => e.transitions.easing.easeInOut, b.ripplePulsate, ({
  theme: e
}) => e.transitions.duration.shorter, b.child, b.childLeaving, yt, se, ({
  theme: e
}) => e.transitions.easing.easeInOut, b.childPulsate, Tt, ({
  theme: e
}) => e.transitions.easing.easeInOut), Ve = /* @__PURE__ */ c.forwardRef(function(n, i) {
  const a = ve({
    props: n,
    name: "MuiTouchRipple"
  }), {
    center: o = !1,
    classes: r = {},
    className: s
  } = a, p = ue(a, bt), [l, f] = c.useState([]), h = c.useRef(0), y = c.useRef(null);
  c.useEffect(() => {
    y.current && (y.current(), y.current = null);
  }, [l]);
  const g = c.useRef(!1), x = c.useRef(0), m = c.useRef(null), T = c.useRef(null);
  c.useEffect(() => () => {
    x.current && clearTimeout(x.current);
  }, []);
  const U = c.useCallback((d) => {
    const {
      pulsate: E,
      rippleX: M,
      rippleY: L,
      rippleSize: _,
      cb: K
    } = d;
    f((C) => [...C, /* @__PURE__ */ I(Mt, {
      classes: {
        ripple: v(r.ripple, b.ripple),
        rippleVisible: v(r.rippleVisible, b.rippleVisible),
        ripplePulsate: v(r.ripplePulsate, b.ripplePulsate),
        child: v(r.child, b.child),
        childLeaving: v(r.childLeaving, b.childLeaving),
        childPulsate: v(r.childPulsate, b.childPulsate)
      },
      timeout: se,
      pulsate: E,
      rippleX: M,
      rippleY: L,
      rippleSize: _
    }, h.current)]), h.current += 1, y.current = K;
  }, [r]), O = c.useCallback((d = {}, E = {}, M = () => {
  }) => {
    const {
      pulsate: L = !1,
      center: _ = o || E.pulsate,
      fakeElement: K = !1
      // For test purposes
    } = E;
    if ((d == null ? void 0 : d.type) === "mousedown" && g.current) {
      g.current = !1;
      return;
    }
    (d == null ? void 0 : d.type) === "touchstart" && (g.current = !0);
    const C = K ? null : T.current, B = C ? C.getBoundingClientRect() : {
      width: 0,
      height: 0,
      left: 0,
      top: 0
    };
    let V, D, P;
    if (_ || d === void 0 || d.clientX === 0 && d.clientY === 0 || !d.clientX && !d.touches)
      V = Math.round(B.width / 2), D = Math.round(B.height / 2);
    else {
      const {
        clientX: k,
        clientY: w
      } = d.touches && d.touches.length > 0 ? d.touches[0] : d;
      V = Math.round(k - B.left), D = Math.round(w - B.top);
    }
    if (_)
      P = Math.sqrt((2 * B.width ** 2 + B.height ** 2) / 3), P % 2 === 0 && (P += 1);
    else {
      const k = Math.max(Math.abs((C ? C.clientWidth : 0) - V), V) * 2 + 2, w = Math.max(Math.abs((C ? C.clientHeight : 0) - D), D) * 2 + 2;
      P = Math.sqrt(k ** 2 + w ** 2);
    }
    d != null && d.touches ? m.current === null && (m.current = () => {
      U({
        pulsate: L,
        rippleX: V,
        rippleY: D,
        rippleSize: P,
        cb: M
      });
    }, x.current = setTimeout(() => {
      m.current && (m.current(), m.current = null);
    }, gt)) : U({
      pulsate: L,
      rippleX: V,
      rippleY: D,
      rippleSize: P,
      cb: M
    });
  }, [o, U]), j = c.useCallback(() => {
    O({}, {
      pulsate: !0
    });
  }, [O]), $ = c.useCallback((d, E) => {
    if (clearTimeout(x.current), (d == null ? void 0 : d.type) === "touchend" && m.current) {
      m.current(), m.current = null, x.current = setTimeout(() => {
        $(d, E);
      });
      return;
    }
    m.current = null, f((M) => M.length > 0 ? M.slice(1) : M), y.current = E;
  }, []);
  return c.useImperativeHandle(i, () => ({
    pulsate: j,
    start: O,
    stop: $
  }), [j, O, $]), /* @__PURE__ */ I(Et, X({
    className: v(b.root, r.root, s),
    ref: T
  }, p, {
    children: /* @__PURE__ */ I(ht, {
      component: null,
      exit: !0,
      children: l
    })
  }));
});
process.env.NODE_ENV !== "production" && (Ve.propTypes = {
  /**
   * If `true`, the ripple starts at the center of the component
   * rather than at the point of interaction.
   */
  center: t.bool,
  /**
   * Override or extend the styles applied to the component.
   * See [CSS API](#css) below for more details.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string
});
const Ct = Ve;
function vt(e) {
  return We("MuiButtonBase", e);
}
const xt = Ce("MuiButtonBase", ["root", "disabled", "focusVisible"]), Vt = xt, wt = ["action", "centerRipple", "children", "className", "component", "disabled", "disableRipple", "disableTouchRipple", "focusRipple", "focusVisibleClassName", "LinkComponent", "onBlur", "onClick", "onContextMenu", "onDragLeave", "onFocus", "onFocusVisible", "onKeyDown", "onKeyUp", "onMouseDown", "onMouseLeave", "onMouseUp", "onTouchEnd", "onTouchMove", "onTouchStart", "tabIndex", "TouchRippleProps", "touchRippleRef", "type"], Nt = (e) => {
  const {
    disabled: n,
    focusVisible: i,
    focusVisibleClassName: a,
    classes: o
  } = e, s = Ge({
    root: ["root", n && "disabled", i && "focusVisible"]
  }, vt, o);
  return i && a && (s.root += ` ${a}`), s;
}, Bt = ae("button", {
  name: "MuiButtonBase",
  slot: "Root",
  overridesResolver: (e, n) => n.root
})({
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  position: "relative",
  boxSizing: "border-box",
  WebkitTapHighlightColor: "transparent",
  backgroundColor: "transparent",
  // Reset default value
  // We disable the focus ring for mouse, touch and keyboard users.
  outline: 0,
  border: 0,
  margin: 0,
  // Remove the margin in Safari
  borderRadius: 0,
  padding: 0,
  // Remove the padding in Firefox
  cursor: "pointer",
  userSelect: "none",
  verticalAlign: "middle",
  MozAppearance: "none",
  // Reset
  WebkitAppearance: "none",
  // Reset
  textDecoration: "none",
  // So we take precedent over the style of a native <a /> element.
  color: "inherit",
  "&::-moz-focus-inner": {
    borderStyle: "none"
    // Remove Firefox dotted outline.
  },
  [`&.${Vt.disabled}`]: {
    pointerEvents: "none",
    // Disable link interactions
    cursor: "default"
  },
  "@media print": {
    colorAdjust: "exact"
  }
}), we = /* @__PURE__ */ c.forwardRef(function(n, i) {
  const a = ve({
    props: n,
    name: "MuiButtonBase"
  }), {
    action: o,
    centerRipple: r = !1,
    children: s,
    className: p,
    component: l = "button",
    disabled: f = !1,
    disableRipple: h = !1,
    disableTouchRipple: y = !1,
    focusRipple: g = !1,
    LinkComponent: x = "a",
    onBlur: m,
    onClick: T,
    onContextMenu: U,
    onDragLeave: O,
    onFocus: j,
    onFocusVisible: $,
    onKeyDown: d,
    onKeyUp: E,
    onMouseDown: M,
    onMouseLeave: L,
    onMouseUp: _,
    onTouchEnd: K,
    onTouchMove: C,
    onTouchStart: B,
    tabIndex: V = 0,
    TouchRippleProps: D,
    touchRippleRef: P,
    type: k
  } = a, w = ue(a, wt), z = c.useRef(null), R = c.useRef(null), Ne = ge(R, P), {
    isFocusVisibleRef: fe,
    onFocus: Be,
    onBlur: De,
    ref: Pe
  } = ut(), [F, Y] = c.useState(!1);
  f && F && Y(!1), c.useImperativeHandle(o, () => ({
    focusVisible: () => {
      Y(!0), z.current.focus();
    }
  }), []);
  const [ee, Le] = c.useState(!1);
  c.useEffect(() => {
    Le(!0);
  }, []);
  const te = ee && !h && !f;
  c.useEffect(() => {
    F && g && !h && ee && R.current.pulsate();
  }, [h, g, F, ee]);
  function N(u, he, qe = y) {
    return H((me) => (he && he(me), !qe && R.current && R.current[u](me), !0));
  }
  const ke = N("start", M), Fe = N("stop", U), Se = N("stop", O), Oe = N("stop", _), $e = N("stop", (u) => {
    F && u.preventDefault(), L && L(u);
  }), _e = N("start", B), Ie = N("stop", K), Ue = N("stop", C), je = N("stop", (u) => {
    De(u), fe.current === !1 && Y(!1), m && m(u);
  }, !1), Ke = H((u) => {
    z.current || (z.current = u.currentTarget), Be(u), fe.current === !0 && (Y(!0), $ && $(u)), j && j(u);
  }), ne = () => {
    const u = z.current;
    return l && l !== "button" && !(u.tagName === "A" && u.href);
  }, oe = c.useRef(!1), ze = H((u) => {
    g && !oe.current && F && R.current && u.key === " " && (oe.current = !0, R.current.stop(u, () => {
      R.current.start(u);
    })), u.target === u.currentTarget && ne() && u.key === " " && u.preventDefault(), d && d(u), u.target === u.currentTarget && ne() && u.key === "Enter" && !f && (u.preventDefault(), T && T(u));
  }), Ae = H((u) => {
    g && u.key === " " && R.current && F && !u.defaultPrevented && (oe.current = !1, R.current.stop(u, () => {
      R.current.pulsate(u);
    })), E && E(u), T && u.target === u.currentTarget && ne() && u.key === " " && !u.defaultPrevented && T(u);
  });
  let q = l;
  q === "button" && (w.href || w.to) && (q = x);
  const A = {};
  q === "button" ? (A.type = k === void 0 ? "button" : k, A.disabled = f) : (!w.href && !w.to && (A.role = "button"), f && (A["aria-disabled"] = f));
  const Xe = ge(i, Pe, z);
  process.env.NODE_ENV !== "production" && c.useEffect(() => {
    te && !R.current && console.error(["MUI: The `component` prop provided to ButtonBase is invalid.", "Please make sure the children prop is rendered in this custom component."].join(`
`));
  }, [te]);
  const de = X({}, a, {
    centerRipple: r,
    component: l,
    disabled: f,
    disableRipple: h,
    disableTouchRipple: y,
    focusRipple: g,
    tabIndex: V,
    focusVisible: F
  }), Ye = Nt(de);
  return /* @__PURE__ */ Je(Bt, X({
    as: q,
    className: v(Ye.root, p),
    ownerState: de,
    onBlur: je,
    onClick: T,
    onContextMenu: Fe,
    onFocus: Ke,
    onKeyDown: ze,
    onKeyUp: Ae,
    onMouseDown: ke,
    onMouseLeave: $e,
    onMouseUp: Oe,
    onDragLeave: Se,
    onTouchEnd: Ie,
    onTouchMove: Ue,
    onTouchStart: _e,
    ref: Xe,
    tabIndex: f ? -1 : V,
    type: k
  }, A, w, {
    children: [s, te ? (
      /* TouchRipple is only needed client-side, x2 boost on the server. */
      /* @__PURE__ */ I(Ct, X({
        ref: Ne,
        center: r
      }, D))
    ) : null]
  }));
});
process.env.NODE_ENV !== "production" && (we.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * A ref for imperative actions.
   * It currently only supports `focusVisible()` action.
   */
  action: Ze,
  /**
   * If `true`, the ripples are centered.
   * They won't start at the cursor interaction position.
   * @default false
   */
  centerRipple: t.bool,
  /**
   * The content of the component.
   */
  children: t.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: t.object,
  /**
   * @ignore
   */
  className: t.string,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: et,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: t.bool,
  /**
   * If `true`, the ripple effect is disabled.
   *
   * ⚠️ Without a ripple there is no styling for :focus-visible by default. Be sure
   * to highlight the element by applying separate styles with the `.Mui-focusVisible` class.
   * @default false
   */
  disableRipple: t.bool,
  /**
   * If `true`, the touch ripple effect is disabled.
   * @default false
   */
  disableTouchRipple: t.bool,
  /**
   * If `true`, the base button will have a keyboard focus ripple.
   * @default false
   */
  focusRipple: t.bool,
  /**
   * This prop can help identify which element has keyboard focus.
   * The class name will be applied when the element gains the focus through keyboard interaction.
   * It's a polyfill for the [CSS :focus-visible selector](https://drafts.csswg.org/selectors-4/#the-focus-visible-pseudo).
   * The rationale for using this feature [is explained here](https://github.com/WICG/focus-visible/blob/HEAD/explainer.md).
   * A [polyfill can be used](https://github.com/WICG/focus-visible) to apply a `focus-visible` class to other components
   * if needed.
   */
  focusVisibleClassName: t.string,
  /**
   * @ignore
   */
  href: t.any,
  /**
   * The component used to render a link when the `href` prop is provided.
   * @default 'a'
   */
  LinkComponent: t.elementType,
  /**
   * @ignore
   */
  onBlur: t.func,
  /**
   * @ignore
   */
  onClick: t.func,
  /**
   * @ignore
   */
  onContextMenu: t.func,
  /**
   * @ignore
   */
  onDragLeave: t.func,
  /**
   * @ignore
   */
  onFocus: t.func,
  /**
   * Callback fired when the component is focused with a keyboard.
   * We trigger a `onFocus` callback too.
   */
  onFocusVisible: t.func,
  /**
   * @ignore
   */
  onKeyDown: t.func,
  /**
   * @ignore
   */
  onKeyUp: t.func,
  /**
   * @ignore
   */
  onMouseDown: t.func,
  /**
   * @ignore
   */
  onMouseLeave: t.func,
  /**
   * @ignore
   */
  onMouseUp: t.func,
  /**
   * @ignore
   */
  onTouchEnd: t.func,
  /**
   * @ignore
   */
  onTouchMove: t.func,
  /**
   * @ignore
   */
  onTouchStart: t.func,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: t.oneOfType([t.arrayOf(t.oneOfType([t.func, t.object, t.bool])), t.func, t.object]),
  /**
   * @default 0
   */
  tabIndex: t.number,
  /**
   * Props applied to the `TouchRipple` element.
   */
  TouchRippleProps: t.object,
  /**
   * A ref that points to the `TouchRipple` element.
   */
  touchRippleRef: t.oneOfType([t.func, t.shape({
    current: t.shape({
      pulsate: t.func.isRequired,
      start: t.func.isRequired,
      stop: t.func.isRequired
    })
  })]),
  /**
   * @ignore
   */
  type: t.oneOfType([t.oneOf(["button", "reset", "submit"]), t.string])
});
const _t = we;
export {
  _t as B,
  ht as T,
  ut as u
};
