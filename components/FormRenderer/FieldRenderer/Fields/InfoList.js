import ue, { jsx as c, jsxs as $ } from "react/jsx-runtime";
import { r as fe, i as me } from "../../../../createSvgIcon-8609ef4a.js";
import { FIELD_TYPE as he } from "../../FormRenderer.constants.js";
import { A as ge, b as be, l as xe, c as ye, d as Ee, e as ve, f as Ce } from "../../../../Fields.styles-a09d0a4e.js";
import { getFieldChoices as Te } from "./Fields.utils.js";
import { g as G, s as z, a as s, G as Re, _ as B, P as e, H as we } from "../../../../styled-c6437ab8.js";
import * as d from "react";
import { c as V } from "../../../../clsx-f0826a09.js";
import { g as k, u as Y, c as J } from "../../../../useThemeProps-7889d54e.js";
import { P as Ae } from "../../../../Paper-79c19457.js";
import { u as Me } from "../../../../useFormControl-a3d8b2b6.js";
import { a as De, e as Ie, c as $e } from "../../../../TransitionGroupContext-fe4c547b.js";
import { T as ze, g as oe } from "../../../../SharedTextField-c5888703.js";
import { u as Ne } from "../../../../useTheme-f100ae81.js";
import { M as Se } from "../../../../CircularProgress-692b550b.js";
import "../../../../createSvgIcon-4c228bdf.js";
import "../../../../FormHelperText-5a47fd9c.js";
import "../../../../unsupportedProp-3dbf01f6.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
import "../../../../moment-a2f61e40.js";
import "../../../utils/dateUtils.js";
var K = {}, Le = me;
Object.defineProperty(K, "__esModule", {
  value: !0
});
var te = K.default = void 0, Oe = Le(fe()), Pe = ue, _e = (0, Oe.default)(/* @__PURE__ */ (0, Pe.jsx)("path", {
  d: "M16.59 8.59 12 13.17 7.41 8.59 6 10l6 6 6-6z"
}), "ExpandMore");
te = K.default = _e;
function je(o) {
  return G("MuiCollapse", o);
}
k("MuiCollapse", ["root", "horizontal", "vertical", "entered", "hidden", "wrapper", "wrapperInner"]);
const qe = ["addEndListener", "children", "className", "collapsedSize", "component", "easing", "in", "onEnter", "onEntered", "onEntering", "onExit", "onExited", "onExiting", "orientation", "style", "timeout", "TransitionComponent"], Fe = (o) => {
  const {
    orientation: t,
    classes: r
  } = o, i = {
    root: ["root", `${t}`],
    entered: ["entered"],
    hidden: ["hidden"],
    wrapper: ["wrapper", `${t}`],
    wrapperInner: ["wrapperInner", `${t}`]
  };
  return J(i, je, r);
}, Ue = z("div", {
  name: "MuiCollapse",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: r
    } = o;
    return [t.root, t[r.orientation], r.state === "entered" && t.entered, r.state === "exited" && !r.in && r.collapsedSize === "0px" && t.hidden];
  }
})(({
  theme: o,
  ownerState: t
}) => s({
  height: 0,
  overflow: "hidden",
  transition: o.transitions.create("height")
}, t.orientation === "horizontal" && {
  height: "auto",
  width: 0,
  transition: o.transitions.create("width")
}, t.state === "entered" && s({
  height: "auto",
  overflow: "visible"
}, t.orientation === "horizontal" && {
  width: "auto"
}), t.state === "exited" && !t.in && t.collapsedSize === "0px" && {
  visibility: "hidden"
})), He = z("div", {
  name: "MuiCollapse",
  slot: "Wrapper",
  overridesResolver: (o, t) => t.wrapper
})(({
  ownerState: o
}) => s({
  // Hack to get children with a negative margin to not falsify the height computation.
  display: "flex",
  width: "100%"
}, o.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), We = z("div", {
  name: "MuiCollapse",
  slot: "WrapperInner",
  overridesResolver: (o, t) => t.wrapperInner
})(({
  ownerState: o
}) => s({
  width: "100%"
}, o.orientation === "horizontal" && {
  width: "auto",
  height: "100%"
})), Q = /* @__PURE__ */ d.forwardRef(function(t, r) {
  const i = Y({
    props: t,
    name: "MuiCollapse"
  }), {
    addEndListener: p,
    children: u,
    className: f,
    collapsedSize: a = "0px",
    component: b,
    easing: N,
    in: C,
    onEnter: R,
    onEntered: S,
    onEntering: L,
    onExit: O,
    onExited: m,
    onExiting: w,
    orientation: A = "vertical",
    style: x,
    timeout: h = Re.standard,
    // eslint-disable-next-line react/prop-types
    TransitionComponent: U = ze
  } = i, P = B(i, qe), y = s({}, i, {
    orientation: A,
    collapsedSize: a
  }), E = Fe(y), X = Ne(), Z = d.useRef(), v = d.useRef(null), H = d.useRef(), _ = typeof a == "number" ? `${a}px` : a, M = A === "horizontal", D = M ? "width" : "height";
  d.useEffect(() => () => {
    clearTimeout(Z.current);
  }, []);
  const j = d.useRef(null), ie = De(r, j), T = (n) => (l) => {
    if (n) {
      const g = j.current;
      l === void 0 ? n(g) : n(g, l);
    }
  }, W = () => v.current ? v.current[M ? "clientWidth" : "clientHeight"] : 0, se = T((n, l) => {
    v.current && M && (v.current.style.position = "absolute"), n.style[D] = _, R && R(n, l);
  }), ae = T((n, l) => {
    const g = W();
    v.current && M && (v.current.style.position = "");
    const {
      duration: I,
      easing: q
    } = oe({
      style: x,
      timeout: h,
      easing: N
    }, {
      mode: "enter"
    });
    if (h === "auto") {
      const ee = X.transitions.getAutoHeightDuration(g);
      n.style.transitionDuration = `${ee}ms`, H.current = ee;
    } else
      n.style.transitionDuration = typeof I == "string" ? I : `${I}ms`;
    n.style[D] = `${g}px`, n.style.transitionTimingFunction = q, L && L(n, l);
  }), de = T((n, l) => {
    n.style[D] = "auto", S && S(n, l);
  }), ce = T((n) => {
    n.style[D] = `${W()}px`, O && O(n);
  }), le = T(m), pe = T((n) => {
    const l = W(), {
      duration: g,
      easing: I
    } = oe({
      style: x,
      timeout: h,
      easing: N
    }, {
      mode: "exit"
    });
    if (h === "auto") {
      const q = X.transitions.getAutoHeightDuration(l);
      n.style.transitionDuration = `${q}ms`, H.current = q;
    } else
      n.style.transitionDuration = typeof g == "string" ? g : `${g}ms`;
    n.style[D] = _, n.style.transitionTimingFunction = I, w && w(n);
  });
  return /* @__PURE__ */ c(U, s({
    in: C,
    onEnter: se,
    onEntered: de,
    onEntering: ae,
    onExit: ce,
    onExited: le,
    onExiting: pe,
    addEndListener: (n) => {
      h === "auto" && (Z.current = setTimeout(n, H.current || 0)), p && p(j.current, n);
    },
    nodeRef: j,
    timeout: h === "auto" ? null : h
  }, P, {
    children: (n, l) => /* @__PURE__ */ c(Ue, s({
      as: b,
      className: V(E.root, f, {
        entered: E.entered,
        exited: !C && _ === "0px" && E.hidden
      }[n]),
      style: s({
        [M ? "minWidth" : "minHeight"]: _
      }, x),
      ownerState: s({}, y, {
        state: n
      }),
      ref: ie
    }, l, {
      children: /* @__PURE__ */ c(He, {
        ownerState: s({}, y, {
          state: n
        }),
        className: E.wrapper,
        ref: v,
        children: /* @__PURE__ */ c(We, {
          ownerState: s({}, y, {
            state: n
          }),
          className: E.wrapperInner,
          children: u
        })
      })
    }))
  }));
});
process.env.NODE_ENV !== "production" && (Q.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * Add a custom transition end trigger. Called with the transitioning DOM
   * node and a done callback. Allows for more fine grained transition end
   * logic. Note: Timeouts are still used as a fallback if provided.
   */
  addEndListener: e.func,
  /**
   * The content node to be collapsed.
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
   * The width (horizontal) or height (vertical) of the container when collapsed.
   * @default '0px'
   */
  collapsedSize: e.oneOfType([e.number, e.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: Ie,
  /**
   * The transition timing function.
   * You may specify a single easing or a object containing enter and exit values.
   */
  easing: e.oneOfType([e.shape({
    enter: e.string,
    exit: e.string
  }), e.string]),
  /**
   * If `true`, the component will transition in.
   */
  in: e.bool,
  /**
   * @ignore
   */
  onEnter: e.func,
  /**
   * @ignore
   */
  onEntered: e.func,
  /**
   * @ignore
   */
  onEntering: e.func,
  /**
   * @ignore
   */
  onExit: e.func,
  /**
   * @ignore
   */
  onExited: e.func,
  /**
   * @ignore
   */
  onExiting: e.func,
  /**
   * The transition orientation.
   * @default 'vertical'
   */
  orientation: e.oneOf(["horizontal", "vertical"]),
  /**
   * @ignore
   */
  style: e.object,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The duration for the transition, in milliseconds.
   * You may specify a single timeout for all transitions, or individually with an object.
   *
   * Set to 'auto' to automatically calculate transition time based on height.
   * @default duration.standard
   */
  timeout: e.oneOfType([e.oneOf(["auto"]), e.number, e.shape({
    appear: e.number,
    enter: e.number,
    exit: e.number
  })])
});
Q.muiSupportAuto = !0;
const Ge = Q;
function Be(o) {
  return G("MuiAccordion", o);
}
const Ve = k("MuiAccordion", ["root", "rounded", "expanded", "disabled", "gutters", "region"]), F = Ve, ke = ["children", "className", "defaultExpanded", "disabled", "disableGutters", "expanded", "onChange", "square", "TransitionComponent", "TransitionProps"], Ye = (o) => {
  const {
    classes: t,
    square: r,
    expanded: i,
    disabled: p,
    disableGutters: u
  } = o;
  return J({
    root: ["root", !r && "rounded", i && "expanded", p && "disabled", !u && "gutters"],
    region: ["region"]
  }, Be, t);
}, Je = z(Ae, {
  name: "MuiAccordion",
  slot: "Root",
  overridesResolver: (o, t) => {
    const {
      ownerState: r
    } = o;
    return [{
      [`& .${F.region}`]: t.region
    }, t.root, !r.square && t.rounded, !r.disableGutters && t.gutters];
  }
})(({
  theme: o
}) => {
  const t = {
    duration: o.transitions.duration.shortest
  };
  return {
    position: "relative",
    transition: o.transitions.create(["margin"], t),
    overflowAnchor: "none",
    // Keep the same scrolling position
    "&:before": {
      position: "absolute",
      left: 0,
      top: -1,
      right: 0,
      height: 1,
      content: '""',
      opacity: 1,
      backgroundColor: (o.vars || o).palette.divider,
      transition: o.transitions.create(["opacity", "background-color"], t)
    },
    "&:first-of-type": {
      "&:before": {
        display: "none"
      }
    },
    [`&.${F.expanded}`]: {
      "&:before": {
        opacity: 0
      },
      "&:first-of-type": {
        marginTop: 0
      },
      "&:last-of-type": {
        marginBottom: 0
      },
      "& + &": {
        "&:before": {
          display: "none"
        }
      }
    },
    [`&.${F.disabled}`]: {
      backgroundColor: (o.vars || o).palette.action.disabledBackground
    }
  };
}, ({
  theme: o,
  ownerState: t
}) => s({}, !t.square && {
  borderRadius: 0,
  "&:first-of-type": {
    borderTopLeftRadius: (o.vars || o).shape.borderRadius,
    borderTopRightRadius: (o.vars || o).shape.borderRadius
  },
  "&:last-of-type": {
    borderBottomLeftRadius: (o.vars || o).shape.borderRadius,
    borderBottomRightRadius: (o.vars || o).shape.borderRadius,
    // Fix a rendering issue on Edge
    "@supports (-ms-ime-align: auto)": {
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0
    }
  }
}, !t.disableGutters && {
  [`&.${F.expanded}`]: {
    margin: "16px 0"
  }
})), ne = /* @__PURE__ */ d.forwardRef(function(t, r) {
  const i = Y({
    props: t,
    name: "MuiAccordion"
  }), {
    children: p,
    className: u,
    defaultExpanded: f = !1,
    disabled: a = !1,
    disableGutters: b = !1,
    expanded: N,
    onChange: C,
    square: R = !1,
    TransitionComponent: S = Ge,
    TransitionProps: L
  } = i, O = B(i, ke), [m, w] = Me({
    controlled: N,
    default: f,
    name: "Accordion",
    state: "expanded"
  }), A = d.useCallback((E) => {
    w(!m), C && C(E, !m);
  }, [m, C, w]), [x, ...h] = d.Children.toArray(p), U = d.useMemo(() => ({
    expanded: m,
    disabled: a,
    disableGutters: b,
    toggle: A
  }), [m, a, b, A]), P = s({}, i, {
    square: R,
    disabled: a,
    disableGutters: b,
    expanded: m
  }), y = Ye(P);
  return /* @__PURE__ */ $(Je, s({
    className: V(y.root, u),
    ref: r,
    ownerState: P,
    square: R
  }, O, {
    children: [/* @__PURE__ */ c(ge.Provider, {
      value: U,
      children: x
    }), /* @__PURE__ */ c(S, s({
      in: m,
      timeout: "auto"
    }, L, {
      children: /* @__PURE__ */ c("div", {
        "aria-labelledby": x.props.id,
        id: x.props["aria-controls"],
        role: "region",
        className: y.region,
        children: h
      })
    }))]
  }));
});
process.env.NODE_ENV !== "production" && (ne.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: $e(e.node.isRequired, (o) => {
    const t = d.Children.toArray(o.children)[0];
    return we.isFragment(t) ? new Error("MUI: The Accordion doesn't accept a Fragment as a child. Consider providing an array instead.") : /* @__PURE__ */ d.isValidElement(t) ? null : new Error("MUI: Expected the first child of Accordion to be a valid element.");
  }),
  /**
   * Override or extend the styles applied to the component.
   */
  classes: e.object,
  /**
   * @ignore
   */
  className: e.string,
  /**
   * If `true`, expands the accordion by default.
   * @default false
   */
  defaultExpanded: e.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: e.bool,
  /**
   * If `true`, it removes the margin between two expanded accordion items and the increase of height.
   * @default false
   */
  disableGutters: e.bool,
  /**
   * If `true`, expands the accordion, otherwise collapse it.
   * Setting this prop enables control over the accordion.
   */
  expanded: e.bool,
  /**
   * Callback fired when the expand/collapse state is changed.
   *
   * @param {React.SyntheticEvent} event The event source of the callback. **Warning**: This is a generic event not a change event.
   * @param {boolean} expanded The `expanded` state of the accordion.
   */
  onChange: e.func,
  /**
   * If `true`, rounded corners are disabled.
   * @default false
   */
  square: e.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object]),
  /**
   * The component used for the transition.
   * [Follow this guide](/material-ui/transitions/#transitioncomponent-prop) to learn more about the requirements for this component.
   * @default Collapse
   */
  TransitionComponent: e.elementType,
  /**
   * Props applied to the transition element.
   * By default, the element is based on this [`Transition`](http://reactcommunity.org/react-transition-group/transition/) component.
   */
  TransitionProps: e.object
});
const Ke = ne;
function Qe(o) {
  return G("MuiAccordionDetails", o);
}
k("MuiAccordionDetails", ["root"]);
const Xe = ["className"], Ze = (o) => {
  const {
    classes: t
  } = o;
  return J({
    root: ["root"]
  }, Qe, t);
}, eo = z("div", {
  name: "MuiAccordionDetails",
  slot: "Root",
  overridesResolver: (o, t) => t.root
})(({
  theme: o
}) => ({
  padding: o.spacing(1, 2, 2)
})), re = /* @__PURE__ */ d.forwardRef(function(t, r) {
  const i = Y({
    props: t,
    name: "MuiAccordionDetails"
  }), {
    className: p
  } = i, u = B(i, Xe), f = i, a = Ze(f);
  return /* @__PURE__ */ c(eo, s({
    className: V(a.root, p),
    ref: r,
    ownerState: f
  }, u));
});
process.env.NODE_ENV !== "production" && (re.propTypes = {
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
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const oo = re, Mo = ({
  type: o,
  name: t,
  label: r,
  loading: i = !1,
  disabled: p = !1,
  properties: u = {}
}) => {
  if (o !== he.INFO_LIST)
    return null;
  const f = Te(u);
  return /* @__PURE__ */ $(Ke, { children: [
    /* @__PURE__ */ $(
      be,
      {
        disabled: p,
        expandIcon: /* @__PURE__ */ c(te, {}),
        "aria-controls": `infolist-${t}-content`,
        id: `infolist-${t}-header`,
        children: [
          i && /* @__PURE__ */ c(Se, { size: 12, sx: xe }),
          /* @__PURE__ */ c(ye, { children: r })
        ]
      }
    ),
    /* @__PURE__ */ c(oo, { children: f.map((a, b) => /* @__PURE__ */ $(Ee, { children: [
      /* @__PURE__ */ $(ve, { children: [
        a.label,
        ":"
      ] }),
      /* @__PURE__ */ c(Ce, { children: a.value })
    ] }, b)) })
  ] });
};
export {
  Mo as InfoList
};
