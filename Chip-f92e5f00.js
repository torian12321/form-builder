import { g as vt, _ as Te, a as V, P as a, s as Se, h as R, j as X } from "./styled-c6437ab8.js";
import * as j from "react";
import { jsx as oe, jsxs as Nt } from "react/jsx-runtime";
import { g as mt, c as bt, u as ht } from "./useThemeProps-7889d54e.js";
import { o as tt } from "./FormHelperText-5a47fd9c.js";
import { P as St, H as $e, u as Vt } from "./SharedTextField-c5888703.js";
import { c as Wt, r as gt, a as Be, b as ot } from "./TransitionGroupContext-fe4c547b.js";
import { a as zt, c as ae } from "./clsx-f0826a09.js";
import { c as Ht } from "./createSvgIcon-4c228bdf.js";
import { B as rt } from "./ButtonBase-b38416c5.js";
import { u as Ut } from "./unsupportedProp-3dbf01f6.js";
const Ft = {
  disableDefaultClasses: !1
}, qt = /* @__PURE__ */ j.createContext(Ft);
function Kt(e) {
  const {
    disableDefaultClasses: t
  } = j.useContext(qt);
  return (o) => t ? "" : e(o);
}
var W = "top", F = "bottom", q = "right", z = "left", Ve = "auto", he = [W, F, q, z], ie = "start", me = "end", Xt = "clippingParents", yt = "viewport", de = "popper", Yt = "reference", nt = /* @__PURE__ */ he.reduce(function(e, t) {
  return e.concat([t + "-" + ie, t + "-" + me]);
}, []), xt = /* @__PURE__ */ [].concat(he, [Ve]).reduce(function(e, t) {
  return e.concat([t, t + "-" + ie, t + "-" + me]);
}, []), _t = "beforeRead", Gt = "read", Jt = "afterRead", Qt = "beforeMain", Zt = "main", eo = "afterMain", to = "beforeWrite", oo = "write", ro = "afterWrite", no = [_t, Gt, Jt, Qt, Zt, eo, to, oo, ro];
function _(e) {
  return e ? (e.nodeName || "").toLowerCase() : null;
}
function H(e) {
  if (e == null)
    return window;
  if (e.toString() !== "[object Window]") {
    var t = e.ownerDocument;
    return t && t.defaultView || window;
  }
  return e;
}
function re(e) {
  var t = H(e).Element;
  return e instanceof t || e instanceof Element;
}
function U(e) {
  var t = H(e).HTMLElement;
  return e instanceof t || e instanceof HTMLElement;
}
function We(e) {
  if (typeof ShadowRoot > "u")
    return !1;
  var t = H(e).ShadowRoot;
  return e instanceof t || e instanceof ShadowRoot;
}
function ao(e) {
  var t = e.state;
  Object.keys(t.elements).forEach(function(o) {
    var r = t.styles[o] || {}, n = t.attributes[o] || {}, l = t.elements[o];
    !U(l) || !_(l) || (Object.assign(l.style, r), Object.keys(n).forEach(function(p) {
      var s = n[p];
      s === !1 ? l.removeAttribute(p) : l.setAttribute(p, s === !0 ? "" : s);
    }));
  });
}
function io(e) {
  var t = e.state, o = {
    popper: {
      position: t.options.strategy,
      left: "0",
      top: "0",
      margin: "0"
    },
    arrow: {
      position: "absolute"
    },
    reference: {}
  };
  return Object.assign(t.elements.popper.style, o.popper), t.styles = o, t.elements.arrow && Object.assign(t.elements.arrow.style, o.arrow), function() {
    Object.keys(t.elements).forEach(function(r) {
      var n = t.elements[r], l = t.attributes[r] || {}, p = Object.keys(t.styles.hasOwnProperty(r) ? t.styles[r] : o[r]), s = p.reduce(function(i, f) {
        return i[f] = "", i;
      }, {});
      !U(n) || !_(n) || (Object.assign(n.style, s), Object.keys(l).forEach(function(i) {
        n.removeAttribute(i);
      }));
    });
  };
}
const so = {
  name: "applyStyles",
  enabled: !0,
  phase: "write",
  fn: ao,
  effect: io,
  requires: ["computeStyles"]
};
function Y(e) {
  return e.split("-")[0];
}
var te = Math.max, Ee = Math.min, se = Math.round;
function Le() {
  var e = navigator.userAgentData;
  return e != null && e.brands && Array.isArray(e.brands) ? e.brands.map(function(t) {
    return t.brand + "/" + t.version;
  }).join(" ") : navigator.userAgent;
}
function Ot() {
  return !/^((?!chrome|android).)*safari/i.test(Le());
}
function le(e, t, o) {
  t === void 0 && (t = !1), o === void 0 && (o = !1);
  var r = e.getBoundingClientRect(), n = 1, l = 1;
  t && U(e) && (n = e.offsetWidth > 0 && se(r.width) / e.offsetWidth || 1, l = e.offsetHeight > 0 && se(r.height) / e.offsetHeight || 1);
  var p = re(e) ? H(e) : window, s = p.visualViewport, i = !Ot() && o, f = (r.left + (i && s ? s.offsetLeft : 0)) / n, c = (r.top + (i && s ? s.offsetTop : 0)) / l, v = r.width / n, x = r.height / l;
  return {
    width: v,
    height: x,
    top: c,
    right: f + v,
    bottom: c + x,
    left: f,
    x: f,
    y: c
  };
}
function ze(e) {
  var t = le(e), o = e.offsetWidth, r = e.offsetHeight;
  return Math.abs(t.width - o) <= 1 && (o = t.width), Math.abs(t.height - r) <= 1 && (r = t.height), {
    x: e.offsetLeft,
    y: e.offsetTop,
    width: o,
    height: r
  };
}
function Ct(e, t) {
  var o = t.getRootNode && t.getRootNode();
  if (e.contains(t))
    return !0;
  if (o && We(o)) {
    var r = t;
    do {
      if (r && e.isSameNode(r))
        return !0;
      r = r.parentNode || r.host;
    } while (r);
  }
  return !1;
}
function G(e) {
  return H(e).getComputedStyle(e);
}
function lo(e) {
  return ["table", "td", "th"].indexOf(_(e)) >= 0;
}
function Q(e) {
  return ((re(e) ? e.ownerDocument : (
    // $FlowFixMe[prop-missing]
    e.document
  )) || window.document).documentElement;
}
function ke(e) {
  return _(e) === "html" ? e : (
    // this is a quicker (but less type safe) way to save quite some bytes from the bundle
    // $FlowFixMe[incompatible-return]
    // $FlowFixMe[prop-missing]
    e.assignedSlot || // step into the shadow DOM of the parent of a slotted node
    e.parentNode || // DOM Element detected
    (We(e) ? e.host : null) || // ShadowRoot detected
    // $FlowFixMe[incompatible-call]: HTMLElement is a Node
    Q(e)
  );
}
function at(e) {
  return !U(e) || // https://github.com/popperjs/popper-core/issues/837
  G(e).position === "fixed" ? null : e.offsetParent;
}
function co(e) {
  var t = /firefox/i.test(Le()), o = /Trident/i.test(Le());
  if (o && U(e)) {
    var r = G(e);
    if (r.position === "fixed")
      return null;
  }
  var n = ke(e);
  for (We(n) && (n = n.host); U(n) && ["html", "body"].indexOf(_(n)) < 0; ) {
    var l = G(n);
    if (l.transform !== "none" || l.perspective !== "none" || l.contain === "paint" || ["transform", "perspective"].indexOf(l.willChange) !== -1 || t && l.willChange === "filter" || t && l.filter && l.filter !== "none")
      return n;
    n = n.parentNode;
  }
  return null;
}
function ge(e) {
  for (var t = H(e), o = at(e); o && lo(o) && G(o).position === "static"; )
    o = at(o);
  return o && (_(o) === "html" || _(o) === "body" && G(o).position === "static") ? t : o || co(e) || t;
}
function He(e) {
  return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y";
}
function ue(e, t, o) {
  return te(e, Ee(t, o));
}
function po(e, t, o) {
  var r = ue(e, t, o);
  return r > o ? o : r;
}
function wt() {
  return {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  };
}
function Pt(e) {
  return Object.assign({}, wt(), e);
}
function $t(e, t) {
  return t.reduce(function(o, r) {
    return o[r] = e, o;
  }, {});
}
var fo = function(t, o) {
  return t = typeof t == "function" ? t(Object.assign({}, o.rects, {
    placement: o.placement
  })) : t, Pt(typeof t != "number" ? t : $t(t, he));
};
function uo(e) {
  var t, o = e.state, r = e.name, n = e.options, l = o.elements.arrow, p = o.modifiersData.popperOffsets, s = Y(o.placement), i = He(s), f = [z, q].indexOf(s) >= 0, c = f ? "height" : "width";
  if (!(!l || !p)) {
    var v = fo(n.padding, o), x = ze(l), d = i === "y" ? W : z, g = i === "y" ? F : q, m = o.rects.reference[c] + o.rects.reference[i] - p[i] - o.rects.popper[c], b = p[i] - o.rects.reference[i], C = ge(l), E = C ? i === "y" ? C.clientHeight || 0 : C.clientWidth || 0 : 0, O = m / 2 - b / 2, u = v[d], y = E - x[c] - v[g], h = E / 2 - x[c] / 2 + O, w = ue(u, h, y), k = i;
    o.modifiersData[r] = (t = {}, t[k] = w, t.centerOffset = w - h, t);
  }
}
function vo(e) {
  var t = e.state, o = e.options, r = o.element, n = r === void 0 ? "[data-popper-arrow]" : r;
  n != null && (typeof n == "string" && (n = t.elements.popper.querySelector(n), !n) || Ct(t.elements.popper, n) && (t.elements.arrow = n));
}
const mo = {
  name: "arrow",
  enabled: !0,
  phase: "main",
  fn: uo,
  effect: vo,
  requires: ["popperOffsets"],
  requiresIfExists: ["preventOverflow"]
};
function ce(e) {
  return e.split("-")[1];
}
var bo = {
  top: "auto",
  right: "auto",
  bottom: "auto",
  left: "auto"
};
function ho(e, t) {
  var o = e.x, r = e.y, n = t.devicePixelRatio || 1;
  return {
    x: se(o * n) / n || 0,
    y: se(r * n) / n || 0
  };
}
function it(e) {
  var t, o = e.popper, r = e.popperRect, n = e.placement, l = e.variation, p = e.offsets, s = e.position, i = e.gpuAcceleration, f = e.adaptive, c = e.roundOffsets, v = e.isFixed, x = p.x, d = x === void 0 ? 0 : x, g = p.y, m = g === void 0 ? 0 : g, b = typeof c == "function" ? c({
    x: d,
    y: m
  }) : {
    x: d,
    y: m
  };
  d = b.x, m = b.y;
  var C = p.hasOwnProperty("x"), E = p.hasOwnProperty("y"), O = z, u = W, y = window;
  if (f) {
    var h = ge(o), w = "clientHeight", k = "clientWidth";
    if (h === H(o) && (h = Q(o), G(h).position !== "static" && s === "absolute" && (w = "scrollHeight", k = "scrollWidth")), h = h, n === W || (n === z || n === q) && l === me) {
      u = F;
      var $ = v && h === y && y.visualViewport ? y.visualViewport.height : (
        // $FlowFixMe[prop-missing]
        h[w]
      );
      m -= $ - r.height, m *= i ? 1 : -1;
    }
    if (n === z || (n === W || n === F) && l === me) {
      O = q;
      var T = v && h === y && y.visualViewport ? y.visualViewport.width : (
        // $FlowFixMe[prop-missing]
        h[k]
      );
      d -= T - r.width, d *= i ? 1 : -1;
    }
  }
  var D = Object.assign({
    position: s
  }, f && bo), L = c === !0 ? ho({
    x: d,
    y: m
  }, H(o)) : {
    x: d,
    y: m
  };
  if (d = L.x, m = L.y, i) {
    var I;
    return Object.assign({}, D, (I = {}, I[u] = E ? "0" : "", I[O] = C ? "0" : "", I.transform = (y.devicePixelRatio || 1) <= 1 ? "translate(" + d + "px, " + m + "px)" : "translate3d(" + d + "px, " + m + "px, 0)", I));
  }
  return Object.assign({}, D, (t = {}, t[u] = E ? m + "px" : "", t[O] = C ? d + "px" : "", t.transform = "", t));
}
function go(e) {
  var t = e.state, o = e.options, r = o.gpuAcceleration, n = r === void 0 ? !0 : r, l = o.adaptive, p = l === void 0 ? !0 : l, s = o.roundOffsets, i = s === void 0 ? !0 : s, f = {
    placement: Y(t.placement),
    variation: ce(t.placement),
    popper: t.elements.popper,
    popperRect: t.rects.popper,
    gpuAcceleration: n,
    isFixed: t.options.strategy === "fixed"
  };
  t.modifiersData.popperOffsets != null && (t.styles.popper = Object.assign({}, t.styles.popper, it(Object.assign({}, f, {
    offsets: t.modifiersData.popperOffsets,
    position: t.options.strategy,
    adaptive: p,
    roundOffsets: i
  })))), t.modifiersData.arrow != null && (t.styles.arrow = Object.assign({}, t.styles.arrow, it(Object.assign({}, f, {
    offsets: t.modifiersData.arrow,
    position: "absolute",
    adaptive: !1,
    roundOffsets: i
  })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-placement": t.placement
  });
}
const yo = {
  name: "computeStyles",
  enabled: !0,
  phase: "beforeWrite",
  fn: go,
  data: {}
};
var we = {
  passive: !0
};
function xo(e) {
  var t = e.state, o = e.instance, r = e.options, n = r.scroll, l = n === void 0 ? !0 : n, p = r.resize, s = p === void 0 ? !0 : p, i = H(t.elements.popper), f = [].concat(t.scrollParents.reference, t.scrollParents.popper);
  return l && f.forEach(function(c) {
    c.addEventListener("scroll", o.update, we);
  }), s && i.addEventListener("resize", o.update, we), function() {
    l && f.forEach(function(c) {
      c.removeEventListener("scroll", o.update, we);
    }), s && i.removeEventListener("resize", o.update, we);
  };
}
const Oo = {
  name: "eventListeners",
  enabled: !0,
  phase: "write",
  fn: function() {
  },
  effect: xo,
  data: {}
};
var Co = {
  left: "right",
  right: "left",
  bottom: "top",
  top: "bottom"
};
function Pe(e) {
  return e.replace(/left|right|bottom|top/g, function(t) {
    return Co[t];
  });
}
var wo = {
  start: "end",
  end: "start"
};
function st(e) {
  return e.replace(/start|end/g, function(t) {
    return wo[t];
  });
}
function Ue(e) {
  var t = H(e), o = t.pageXOffset, r = t.pageYOffset;
  return {
    scrollLeft: o,
    scrollTop: r
  };
}
function Fe(e) {
  return le(Q(e)).left + Ue(e).scrollLeft;
}
function Po(e, t) {
  var o = H(e), r = Q(e), n = o.visualViewport, l = r.clientWidth, p = r.clientHeight, s = 0, i = 0;
  if (n) {
    l = n.width, p = n.height;
    var f = Ot();
    (f || !f && t === "fixed") && (s = n.offsetLeft, i = n.offsetTop);
  }
  return {
    width: l,
    height: p,
    x: s + Fe(e),
    y: i
  };
}
function $o(e) {
  var t, o = Q(e), r = Ue(e), n = (t = e.ownerDocument) == null ? void 0 : t.body, l = te(o.scrollWidth, o.clientWidth, n ? n.scrollWidth : 0, n ? n.clientWidth : 0), p = te(o.scrollHeight, o.clientHeight, n ? n.scrollHeight : 0, n ? n.clientHeight : 0), s = -r.scrollLeft + Fe(e), i = -r.scrollTop;
  return G(n || o).direction === "rtl" && (s += te(o.clientWidth, n ? n.clientWidth : 0) - l), {
    width: l,
    height: p,
    x: s,
    y: i
  };
}
function qe(e) {
  var t = G(e), o = t.overflow, r = t.overflowX, n = t.overflowY;
  return /auto|scroll|overlay|hidden/.test(o + n + r);
}
function Et(e) {
  return ["html", "body", "#document"].indexOf(_(e)) >= 0 ? e.ownerDocument.body : U(e) && qe(e) ? e : Et(ke(e));
}
function ve(e, t) {
  var o;
  t === void 0 && (t = []);
  var r = Et(e), n = r === ((o = e.ownerDocument) == null ? void 0 : o.body), l = H(r), p = n ? [l].concat(l.visualViewport || [], qe(r) ? r : []) : r, s = t.concat(p);
  return n ? s : (
    // $FlowFixMe[incompatible-call]: isBody tells us target will be an HTMLElement here
    s.concat(ve(ke(p)))
  );
}
function Ne(e) {
  return Object.assign({}, e, {
    left: e.x,
    top: e.y,
    right: e.x + e.width,
    bottom: e.y + e.height
  });
}
function Eo(e, t) {
  var o = le(e, !1, t === "fixed");
  return o.top = o.top + e.clientTop, o.left = o.left + e.clientLeft, o.bottom = o.top + e.clientHeight, o.right = o.left + e.clientWidth, o.width = e.clientWidth, o.height = e.clientHeight, o.x = o.left, o.y = o.top, o;
}
function lt(e, t, o) {
  return t === yt ? Ne(Po(e, o)) : re(t) ? Eo(t, o) : Ne($o(Q(e)));
}
function Ro(e) {
  var t = ve(ke(e)), o = ["absolute", "fixed"].indexOf(G(e).position) >= 0, r = o && U(e) ? ge(e) : e;
  return re(r) ? t.filter(function(n) {
    return re(n) && Ct(n, r) && _(n) !== "body";
  }) : [];
}
function To(e, t, o, r) {
  var n = t === "clippingParents" ? Ro(e) : [].concat(t), l = [].concat(n, [o]), p = l[0], s = l.reduce(function(i, f) {
    var c = lt(e, f, r);
    return i.top = te(c.top, i.top), i.right = Ee(c.right, i.right), i.bottom = Ee(c.bottom, i.bottom), i.left = te(c.left, i.left), i;
  }, lt(e, p, r));
  return s.width = s.right - s.left, s.height = s.bottom - s.top, s.x = s.left, s.y = s.top, s;
}
function Rt(e) {
  var t = e.reference, o = e.element, r = e.placement, n = r ? Y(r) : null, l = r ? ce(r) : null, p = t.x + t.width / 2 - o.width / 2, s = t.y + t.height / 2 - o.height / 2, i;
  switch (n) {
    case W:
      i = {
        x: p,
        y: t.y - o.height
      };
      break;
    case F:
      i = {
        x: p,
        y: t.y + t.height
      };
      break;
    case q:
      i = {
        x: t.x + t.width,
        y: s
      };
      break;
    case z:
      i = {
        x: t.x - o.width,
        y: s
      };
      break;
    default:
      i = {
        x: t.x,
        y: t.y
      };
  }
  var f = n ? He(n) : null;
  if (f != null) {
    var c = f === "y" ? "height" : "width";
    switch (l) {
      case ie:
        i[f] = i[f] - (t[c] / 2 - o[c] / 2);
        break;
      case me:
        i[f] = i[f] + (t[c] / 2 - o[c] / 2);
        break;
    }
  }
  return i;
}
function be(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, n = r === void 0 ? e.placement : r, l = o.strategy, p = l === void 0 ? e.strategy : l, s = o.boundary, i = s === void 0 ? Xt : s, f = o.rootBoundary, c = f === void 0 ? yt : f, v = o.elementContext, x = v === void 0 ? de : v, d = o.altBoundary, g = d === void 0 ? !1 : d, m = o.padding, b = m === void 0 ? 0 : m, C = Pt(typeof b != "number" ? b : $t(b, he)), E = x === de ? Yt : de, O = e.rects.popper, u = e.elements[g ? E : x], y = To(re(u) ? u : u.contextElement || Q(e.elements.popper), i, c, p), h = le(e.elements.reference), w = Rt({
    reference: h,
    element: O,
    strategy: "absolute",
    placement: n
  }), k = Ne(Object.assign({}, O, w)), $ = x === de ? k : h, T = {
    top: y.top - $.top + C.top,
    bottom: $.bottom - y.bottom + C.bottom,
    left: y.left - $.left + C.left,
    right: $.right - y.right + C.right
  }, D = e.modifiersData.offset;
  if (x === de && D) {
    var L = D[n];
    Object.keys(T).forEach(function(I) {
      var N = [q, F].indexOf(I) >= 0 ? 1 : -1, K = [W, F].indexOf(I) >= 0 ? "y" : "x";
      T[I] += L[K] * N;
    });
  }
  return T;
}
function ko(e, t) {
  t === void 0 && (t = {});
  var o = t, r = o.placement, n = o.boundary, l = o.rootBoundary, p = o.padding, s = o.flipVariations, i = o.allowedAutoPlacements, f = i === void 0 ? xt : i, c = ce(r), v = c ? s ? nt : nt.filter(function(g) {
    return ce(g) === c;
  }) : he, x = v.filter(function(g) {
    return f.indexOf(g) >= 0;
  });
  x.length === 0 && (x = v);
  var d = x.reduce(function(g, m) {
    return g[m] = be(e, {
      placement: m,
      boundary: n,
      rootBoundary: l,
      padding: p
    })[Y(m)], g;
  }, {});
  return Object.keys(d).sort(function(g, m) {
    return d[g] - d[m];
  });
}
function Do(e) {
  if (Y(e) === Ve)
    return [];
  var t = Pe(e);
  return [st(e), t, st(t)];
}
function Ao(e) {
  var t = e.state, o = e.options, r = e.name;
  if (!t.modifiersData[r]._skip) {
    for (var n = o.mainAxis, l = n === void 0 ? !0 : n, p = o.altAxis, s = p === void 0 ? !0 : p, i = o.fallbackPlacements, f = o.padding, c = o.boundary, v = o.rootBoundary, x = o.altBoundary, d = o.flipVariations, g = d === void 0 ? !0 : d, m = o.allowedAutoPlacements, b = t.options.placement, C = Y(b), E = C === b, O = i || (E || !g ? [Pe(b)] : Do(b)), u = [b].concat(O).reduce(function(ne, J) {
      return ne.concat(Y(J) === Ve ? ko(t, {
        placement: J,
        boundary: c,
        rootBoundary: v,
        padding: f,
        flipVariations: g,
        allowedAutoPlacements: m
      }) : J);
    }, []), y = t.rects.reference, h = t.rects.popper, w = /* @__PURE__ */ new Map(), k = !0, $ = u[0], T = 0; T < u.length; T++) {
      var D = u[T], L = Y(D), I = ce(D) === ie, N = [W, F].indexOf(L) >= 0, K = N ? "width" : "height", M = be(t, {
        placement: D,
        boundary: c,
        rootBoundary: v,
        altBoundary: x,
        padding: f
      }), B = N ? I ? q : z : I ? F : W;
      y[K] > h[K] && (B = Pe(B));
      var S = Pe(B), A = [];
      if (l && A.push(M[L] <= 0), s && A.push(M[B] <= 0, M[S] <= 0), A.every(function(ne) {
        return ne;
      })) {
        $ = D, k = !1;
        break;
      }
      w.set(D, A);
    }
    if (k)
      for (var ye = g ? 3 : 1, Ae = function(J) {
        var fe = u.find(function(Oe) {
          var Z = w.get(Oe);
          if (Z)
            return Z.slice(0, J).every(function(je) {
              return je;
            });
        });
        if (fe)
          return $ = fe, "break";
      }, pe = ye; pe > 0; pe--) {
        var xe = Ae(pe);
        if (xe === "break")
          break;
      }
    t.placement !== $ && (t.modifiersData[r]._skip = !0, t.placement = $, t.reset = !0);
  }
}
const jo = {
  name: "flip",
  enabled: !0,
  phase: "main",
  fn: Ao,
  requiresIfExists: ["offset"],
  data: {
    _skip: !1
  }
};
function ct(e, t, o) {
  return o === void 0 && (o = {
    x: 0,
    y: 0
  }), {
    top: e.top - t.height - o.y,
    right: e.right - t.width + o.x,
    bottom: e.bottom - t.height + o.y,
    left: e.left - t.width - o.x
  };
}
function pt(e) {
  return [W, q, F, z].some(function(t) {
    return e[t] >= 0;
  });
}
function Io(e) {
  var t = e.state, o = e.name, r = t.rects.reference, n = t.rects.popper, l = t.modifiersData.preventOverflow, p = be(t, {
    elementContext: "reference"
  }), s = be(t, {
    altBoundary: !0
  }), i = ct(p, r), f = ct(s, n, l), c = pt(i), v = pt(f);
  t.modifiersData[o] = {
    referenceClippingOffsets: i,
    popperEscapeOffsets: f,
    isReferenceHidden: c,
    hasPopperEscaped: v
  }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
    "data-popper-reference-hidden": c,
    "data-popper-escaped": v
  });
}
const Mo = {
  name: "hide",
  enabled: !0,
  phase: "main",
  requiresIfExists: ["preventOverflow"],
  fn: Io
};
function Bo(e, t, o) {
  var r = Y(e), n = [z, W].indexOf(r) >= 0 ? -1 : 1, l = typeof o == "function" ? o(Object.assign({}, t, {
    placement: e
  })) : o, p = l[0], s = l[1];
  return p = p || 0, s = (s || 0) * n, [z, q].indexOf(r) >= 0 ? {
    x: s,
    y: p
  } : {
    x: p,
    y: s
  };
}
function Lo(e) {
  var t = e.state, o = e.options, r = e.name, n = o.offset, l = n === void 0 ? [0, 0] : n, p = xt.reduce(function(c, v) {
    return c[v] = Bo(v, t.rects, l), c;
  }, {}), s = p[t.placement], i = s.x, f = s.y;
  t.modifiersData.popperOffsets != null && (t.modifiersData.popperOffsets.x += i, t.modifiersData.popperOffsets.y += f), t.modifiersData[r] = p;
}
const No = {
  name: "offset",
  enabled: !0,
  phase: "main",
  requires: ["popperOffsets"],
  fn: Lo
};
function So(e) {
  var t = e.state, o = e.name;
  t.modifiersData[o] = Rt({
    reference: t.rects.reference,
    element: t.rects.popper,
    strategy: "absolute",
    placement: t.placement
  });
}
const Vo = {
  name: "popperOffsets",
  enabled: !0,
  phase: "read",
  fn: So,
  data: {}
};
function Wo(e) {
  return e === "x" ? "y" : "x";
}
function zo(e) {
  var t = e.state, o = e.options, r = e.name, n = o.mainAxis, l = n === void 0 ? !0 : n, p = o.altAxis, s = p === void 0 ? !1 : p, i = o.boundary, f = o.rootBoundary, c = o.altBoundary, v = o.padding, x = o.tether, d = x === void 0 ? !0 : x, g = o.tetherOffset, m = g === void 0 ? 0 : g, b = be(t, {
    boundary: i,
    rootBoundary: f,
    padding: v,
    altBoundary: c
  }), C = Y(t.placement), E = ce(t.placement), O = !E, u = He(C), y = Wo(u), h = t.modifiersData.popperOffsets, w = t.rects.reference, k = t.rects.popper, $ = typeof m == "function" ? m(Object.assign({}, t.rects, {
    placement: t.placement
  })) : m, T = typeof $ == "number" ? {
    mainAxis: $,
    altAxis: $
  } : Object.assign({
    mainAxis: 0,
    altAxis: 0
  }, $), D = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null, L = {
    x: 0,
    y: 0
  };
  if (h) {
    if (l) {
      var I, N = u === "y" ? W : z, K = u === "y" ? F : q, M = u === "y" ? "height" : "width", B = h[u], S = B + b[N], A = B - b[K], ye = d ? -k[M] / 2 : 0, Ae = E === ie ? w[M] : k[M], pe = E === ie ? -k[M] : -w[M], xe = t.elements.arrow, ne = d && xe ? ze(xe) : {
        width: 0,
        height: 0
      }, J = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : wt(), fe = J[N], Oe = J[K], Z = ue(0, w[M], ne[M]), je = O ? w[M] / 2 - ye - Z - fe - T.mainAxis : Ae - Z - fe - T.mainAxis, At = O ? -w[M] / 2 + ye + Z + Oe + T.mainAxis : pe + Z + Oe + T.mainAxis, Ie = t.elements.arrow && ge(t.elements.arrow), jt = Ie ? u === "y" ? Ie.clientTop || 0 : Ie.clientLeft || 0 : 0, Ke = (I = D == null ? void 0 : D[u]) != null ? I : 0, It = B + je - Ke - jt, Mt = B + At - Ke, Xe = ue(d ? Ee(S, It) : S, B, d ? te(A, Mt) : A);
      h[u] = Xe, L[u] = Xe - B;
    }
    if (s) {
      var Ye, Bt = u === "x" ? W : z, Lt = u === "x" ? F : q, ee = h[y], Ce = y === "y" ? "height" : "width", _e = ee + b[Bt], Ge = ee - b[Lt], Me = [W, z].indexOf(C) !== -1, Je = (Ye = D == null ? void 0 : D[y]) != null ? Ye : 0, Qe = Me ? _e : ee - w[Ce] - k[Ce] - Je + T.altAxis, Ze = Me ? ee + w[Ce] + k[Ce] - Je - T.altAxis : Ge, et = d && Me ? po(Qe, ee, Ze) : ue(d ? Qe : _e, ee, d ? Ze : Ge);
      h[y] = et, L[y] = et - ee;
    }
    t.modifiersData[r] = L;
  }
}
const Ho = {
  name: "preventOverflow",
  enabled: !0,
  phase: "main",
  fn: zo,
  requiresIfExists: ["offset"]
};
function Uo(e) {
  return {
    scrollLeft: e.scrollLeft,
    scrollTop: e.scrollTop
  };
}
function Fo(e) {
  return e === H(e) || !U(e) ? Ue(e) : Uo(e);
}
function qo(e) {
  var t = e.getBoundingClientRect(), o = se(t.width) / e.offsetWidth || 1, r = se(t.height) / e.offsetHeight || 1;
  return o !== 1 || r !== 1;
}
function Ko(e, t, o) {
  o === void 0 && (o = !1);
  var r = U(t), n = U(t) && qo(t), l = Q(t), p = le(e, n, o), s = {
    scrollLeft: 0,
    scrollTop: 0
  }, i = {
    x: 0,
    y: 0
  };
  return (r || !r && !o) && ((_(t) !== "body" || // https://github.com/popperjs/popper-core/issues/1078
  qe(l)) && (s = Fo(t)), U(t) ? (i = le(t, !0), i.x += t.clientLeft, i.y += t.clientTop) : l && (i.x = Fe(l))), {
    x: p.left + s.scrollLeft - i.x,
    y: p.top + s.scrollTop - i.y,
    width: p.width,
    height: p.height
  };
}
function Xo(e) {
  var t = /* @__PURE__ */ new Map(), o = /* @__PURE__ */ new Set(), r = [];
  e.forEach(function(l) {
    t.set(l.name, l);
  });
  function n(l) {
    o.add(l.name);
    var p = [].concat(l.requires || [], l.requiresIfExists || []);
    p.forEach(function(s) {
      if (!o.has(s)) {
        var i = t.get(s);
        i && n(i);
      }
    }), r.push(l);
  }
  return e.forEach(function(l) {
    o.has(l.name) || n(l);
  }), r;
}
function Yo(e) {
  var t = Xo(e);
  return no.reduce(function(o, r) {
    return o.concat(t.filter(function(n) {
      return n.phase === r;
    }));
  }, []);
}
function _o(e) {
  var t;
  return function() {
    return t || (t = new Promise(function(o) {
      Promise.resolve().then(function() {
        t = void 0, o(e());
      });
    })), t;
  };
}
function Go(e) {
  var t = e.reduce(function(o, r) {
    var n = o[r.name];
    return o[r.name] = n ? Object.assign({}, n, r, {
      options: Object.assign({}, n.options, r.options),
      data: Object.assign({}, n.data, r.data)
    }) : r, o;
  }, {});
  return Object.keys(t).map(function(o) {
    return t[o];
  });
}
var ft = {
  placement: "bottom",
  modifiers: [],
  strategy: "absolute"
};
function dt() {
  for (var e = arguments.length, t = new Array(e), o = 0; o < e; o++)
    t[o] = arguments[o];
  return !t.some(function(r) {
    return !(r && typeof r.getBoundingClientRect == "function");
  });
}
function Jo(e) {
  e === void 0 && (e = {});
  var t = e, o = t.defaultModifiers, r = o === void 0 ? [] : o, n = t.defaultOptions, l = n === void 0 ? ft : n;
  return function(s, i, f) {
    f === void 0 && (f = l);
    var c = {
      placement: "bottom",
      orderedModifiers: [],
      options: Object.assign({}, ft, l),
      modifiersData: {},
      elements: {
        reference: s,
        popper: i
      },
      attributes: {},
      styles: {}
    }, v = [], x = !1, d = {
      state: c,
      setOptions: function(C) {
        var E = typeof C == "function" ? C(c.options) : C;
        m(), c.options = Object.assign({}, l, c.options, E), c.scrollParents = {
          reference: re(s) ? ve(s) : s.contextElement ? ve(s.contextElement) : [],
          popper: ve(i)
        };
        var O = Yo(Go([].concat(r, c.options.modifiers)));
        return c.orderedModifiers = O.filter(function(u) {
          return u.enabled;
        }), g(), d.update();
      },
      // Sync update – it will always be executed, even if not necessary. This
      // is useful for low frequency updates where sync behavior simplifies the
      // logic.
      // For high frequency updates (e.g. `resize` and `scroll` events), always
      // prefer the async Popper#update method
      forceUpdate: function() {
        if (!x) {
          var C = c.elements, E = C.reference, O = C.popper;
          if (dt(E, O)) {
            c.rects = {
              reference: Ko(E, ge(O), c.options.strategy === "fixed"),
              popper: ze(O)
            }, c.reset = !1, c.placement = c.options.placement, c.orderedModifiers.forEach(function(T) {
              return c.modifiersData[T.name] = Object.assign({}, T.data);
            });
            for (var u = 0; u < c.orderedModifiers.length; u++) {
              if (c.reset === !0) {
                c.reset = !1, u = -1;
                continue;
              }
              var y = c.orderedModifiers[u], h = y.fn, w = y.options, k = w === void 0 ? {} : w, $ = y.name;
              typeof h == "function" && (c = h({
                state: c,
                options: k,
                name: $,
                instance: d
              }) || c);
            }
          }
        }
      },
      // Async and optimistically optimized update – it will not be executed if
      // not necessary (debounced to run at most once-per-tick)
      update: _o(function() {
        return new Promise(function(b) {
          d.forceUpdate(), b(c);
        });
      }),
      destroy: function() {
        m(), x = !0;
      }
    };
    if (!dt(s, i))
      return d;
    d.setOptions(f).then(function(b) {
      !x && f.onFirstUpdate && f.onFirstUpdate(b);
    });
    function g() {
      c.orderedModifiers.forEach(function(b) {
        var C = b.name, E = b.options, O = E === void 0 ? {} : E, u = b.effect;
        if (typeof u == "function") {
          var y = u({
            state: c,
            name: C,
            instance: d,
            options: O
          }), h = function() {
          };
          v.push(y || h);
        }
      });
    }
    function m() {
      v.forEach(function(b) {
        return b();
      }), v = [];
    }
    return d;
  };
}
var Qo = [Oo, Vo, yo, so, No, jo, Ho, mo, Mo], Zo = /* @__PURE__ */ Jo({
  defaultModifiers: Qo
});
function er(e) {
  return vt("MuiPopper", e);
}
mt("MuiPopper", ["root"]);
const tr = ["anchorEl", "children", "direction", "disablePortal", "modifiers", "open", "placement", "popperOptions", "popperRef", "slotProps", "slots", "TransitionProps", "ownerState"], or = ["anchorEl", "children", "container", "direction", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "style", "transition", "slotProps", "slots"];
function rr(e, t) {
  if (t === "ltr")
    return e;
  switch (e) {
    case "bottom-end":
      return "bottom-start";
    case "bottom-start":
      return "bottom-end";
    case "top-end":
      return "top-start";
    case "top-start":
      return "top-end";
    default:
      return e;
  }
}
function Re(e) {
  return typeof e == "function" ? e() : e;
}
function De(e) {
  return e.nodeType !== void 0;
}
function nr(e) {
  return !De(e);
}
const ar = () => bt({
  root: ["root"]
}, Kt(er)), ir = {}, sr = /* @__PURE__ */ j.forwardRef(function(t, o) {
  var r;
  const {
    anchorEl: n,
    children: l,
    direction: p,
    disablePortal: s,
    modifiers: i,
    open: f,
    placement: c,
    popperOptions: v,
    popperRef: x,
    slotProps: d = {},
    slots: g = {},
    TransitionProps: m
    // @ts-ignore internal logic
    // prevent from spreading to DOM, it can come from the parent component e.g. Select.
  } = t, b = Te(t, tr), C = j.useRef(null), E = Be(C, o), O = j.useRef(null), u = Be(O, x), y = j.useRef(u);
  ot(() => {
    y.current = u;
  }, [u]), j.useImperativeHandle(x, () => O.current, []);
  const h = rr(c, p), [w, k] = j.useState(h), [$, T] = j.useState(Re(n));
  j.useEffect(() => {
    O.current && O.current.forceUpdate();
  }), j.useEffect(() => {
    n && T(Re(n));
  }, [n]), ot(() => {
    if (!$ || !f)
      return;
    const K = (S) => {
      k(S.placement);
    };
    if (process.env.NODE_ENV !== "production" && $ && De($) && $.nodeType === 1) {
      const S = $.getBoundingClientRect();
      process.env.NODE_ENV !== "test" && S.top === 0 && S.left === 0 && S.right === 0 && S.bottom === 0 && console.warn(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
    }
    let M = [{
      name: "preventOverflow",
      options: {
        altBoundary: s
      }
    }, {
      name: "flip",
      options: {
        altBoundary: s
      }
    }, {
      name: "onUpdate",
      enabled: !0,
      phase: "afterWrite",
      fn: ({
        state: S
      }) => {
        K(S);
      }
    }];
    i != null && (M = M.concat(i)), v && v.modifiers != null && (M = M.concat(v.modifiers));
    const B = Zo($, C.current, V({
      placement: h
    }, v, {
      modifiers: M
    }));
    return y.current(B), () => {
      B.destroy(), y.current(null);
    };
  }, [$, s, i, f, v, h]);
  const D = {
    placement: w
  };
  m !== null && (D.TransitionProps = m);
  const L = ar(), I = (r = g.root) != null ? r : "div", N = Vt({
    elementType: I,
    externalSlotProps: d.root,
    externalForwardedProps: b,
    additionalProps: {
      role: "tooltip",
      ref: E
    },
    ownerState: t,
    className: L.root
  });
  return /* @__PURE__ */ oe(I, V({}, N, {
    children: typeof l == "function" ? l(D) : l
  }));
}), Tt = /* @__PURE__ */ j.forwardRef(function(t, o) {
  const {
    anchorEl: r,
    children: n,
    container: l,
    direction: p = "ltr",
    disablePortal: s = !1,
    keepMounted: i = !1,
    modifiers: f,
    open: c,
    placement: v = "bottom",
    popperOptions: x = ir,
    popperRef: d,
    style: g,
    transition: m = !1,
    slotProps: b = {},
    slots: C = {}
  } = t, E = Te(t, or), [O, u] = j.useState(!0), y = () => {
    u(!1);
  }, h = () => {
    u(!0);
  };
  if (!i && !c && (!m || O))
    return null;
  let w;
  if (l)
    w = l;
  else if (r) {
    const T = Re(r);
    w = T && De(T) ? tt(T).body : tt(null).body;
  }
  const k = !c && i && (!m || O) ? "none" : void 0, $ = m ? {
    in: c,
    onEnter: y,
    onExited: h
  } : void 0;
  return /* @__PURE__ */ oe(St, {
    disablePortal: s,
    container: w,
    children: /* @__PURE__ */ oe(sr, V({
      anchorEl: r,
      direction: p,
      disablePortal: s,
      modifiers: f,
      ref: o,
      open: m ? !O : c,
      placement: v,
      popperOptions: x,
      popperRef: d,
      slotProps: b,
      slots: C
    }, E, {
      style: V({
        // Prevents scroll issue, waiting for Popper.js to add this style once initiated.
        position: "fixed",
        // Fix Popper.js display issue
        top: 0,
        left: 0,
        display: k
      }, g),
      TransitionProps: $,
      children: n
    }))
  });
});
process.env.NODE_ENV !== "production" && (Tt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: Wt(a.oneOfType([$e, a.object, a.func]), (e) => {
    if (e.open) {
      const t = Re(e.anchorEl);
      if (t && De(t) && t.nodeType === 1) {
        const o = t.getBoundingClientRect();
        if (process.env.NODE_ENV !== "test" && o.top === 0 && o.left === 0 && o.right === 0 && o.bottom === 0)
          return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "The anchor element should be part of the document layout.", "Make sure the element is present in the document or that it's not display none."].join(`
`));
      } else if (!t || typeof t.getBoundingClientRect != "function" || nr(t) && t.contextElement != null && t.contextElement.nodeType !== 1)
        return new Error(["MUI: The `anchorEl` prop provided to the component is invalid.", "It should be an HTML element instance or a virtualElement ", "(https://popper.js.org/docs/v2/virtual-elements/)."].join(`
`));
    }
    return null;
  }),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([$e, a.func]),
  /**
   * Direction of the text.
   * @default 'ltr'
   */
  direction: a.oneOf(["ltr", "rtl"]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: gt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
const lr = ["anchorEl", "component", "components", "componentsProps", "container", "disablePortal", "keepMounted", "modifiers", "open", "placement", "popperOptions", "popperRef", "transition", "slots", "slotProps"], cr = Se(Tt, {
  name: "MuiPopper",
  slot: "Root",
  overridesResolver: (e, t) => t.root
})({}), kt = /* @__PURE__ */ j.forwardRef(function(t, o) {
  var r;
  const n = zt(), l = ht({
    props: t,
    name: "MuiPopper"
  }), {
    anchorEl: p,
    component: s,
    components: i,
    componentsProps: f,
    container: c,
    disablePortal: v,
    keepMounted: x,
    modifiers: d,
    open: g,
    placement: m,
    popperOptions: b,
    popperRef: C,
    transition: E,
    slots: O,
    slotProps: u
  } = l, y = Te(l, lr), h = (r = O == null ? void 0 : O.root) != null ? r : i == null ? void 0 : i.Root, w = V({
    anchorEl: p,
    container: c,
    disablePortal: v,
    keepMounted: x,
    modifiers: d,
    open: g,
    placement: m,
    popperOptions: b,
    popperRef: C,
    transition: E
  }, y);
  return /* @__PURE__ */ oe(cr, V({
    as: s,
    direction: n == null ? void 0 : n.direction,
    slots: {
      root: h
    },
    slotProps: u ?? f
  }, w, {
    ref: o
  }));
});
process.env.NODE_ENV !== "production" && (kt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit TypeScript types and run "yarn proptypes"  |
  // ----------------------------------------------------------------------
  /**
   * An HTML element, [virtualElement](https://popper.js.org/docs/v2/virtual-elements/),
   * or a function that returns either.
   * It's used to set the position of the popper.
   * The return value will passed as the reference object of the Popper instance.
   */
  anchorEl: a.oneOfType([$e, a.object, a.func]),
  /**
   * Popper render function or node.
   */
  children: a.oneOfType([a.node, a.func]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  components: a.shape({
    Root: a.elementType
  }),
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  componentsProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * An HTML element or function that returns one.
   * The `container` will have the portal children appended to it.
   *
   * By default, it uses the body of the top-level document object,
   * so it's simply `document.body` most of the time.
   */
  container: a.oneOfType([$e, a.func]),
  /**
   * The `children` will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: a.bool,
  /**
   * Always keep the children in the DOM.
   * This prop can be useful in SEO situation or
   * when you want to maximize the responsiveness of the Popper.
   * @default false
   */
  keepMounted: a.bool,
  /**
   * Popper.js is based on a "plugin-like" architecture,
   * most of its features are fully encapsulated "modifiers".
   *
   * A modifier is a function that is called each time Popper.js needs to
   * compute the position of the popper.
   * For this reason, modifiers should be very performant to avoid bottlenecks.
   * To learn how to create a modifier, [read the modifiers documentation](https://popper.js.org/docs/v2/modifiers/).
   */
  modifiers: a.arrayOf(a.shape({
    data: a.object,
    effect: a.func,
    enabled: a.bool,
    fn: a.func,
    name: a.any,
    options: a.object,
    phase: a.oneOf(["afterMain", "afterRead", "afterWrite", "beforeMain", "beforeRead", "beforeWrite", "main", "read", "write"]),
    requires: a.arrayOf(a.string),
    requiresIfExists: a.arrayOf(a.string)
  })),
  /**
   * If `true`, the component is shown.
   */
  open: a.bool.isRequired,
  /**
   * Popper placement.
   * @default 'bottom'
   */
  placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
  /**
   * Options provided to the [`Popper.js`](https://popper.js.org/docs/v2/constructors/#options) instance.
   * @default {}
   */
  popperOptions: a.shape({
    modifiers: a.array,
    onFirstUpdate: a.func,
    placement: a.oneOf(["auto-end", "auto-start", "auto", "bottom-end", "bottom-start", "bottom", "left-end", "left-start", "left", "right-end", "right-start", "right", "top-end", "top-start", "top"]),
    strategy: a.oneOf(["absolute", "fixed"])
  }),
  /**
   * A ref that points to the used popper instance.
   */
  popperRef: gt,
  /**
   * The props used for each slot inside the Popper.
   * @default {}
   */
  slotProps: a.shape({
    root: a.oneOfType([a.func, a.object])
  }),
  /**
   * The components used for each slot inside the Popper.
   * Either a string to use a HTML element or a component.
   * @default {}
   */
  slots: a.shape({
    root: a.elementType
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * Help supporting a react-transition-group/Transition component.
   * @default false
   */
  transition: a.bool
});
const Rr = kt, pr = Ht(/* @__PURE__ */ oe("path", {
  d: "M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z"
}), "Cancel");
function fr(e) {
  return vt("MuiChip", e);
}
const dr = mt("MuiChip", ["root", "sizeSmall", "sizeMedium", "colorError", "colorInfo", "colorPrimary", "colorSecondary", "colorSuccess", "colorWarning", "disabled", "clickable", "clickableColorPrimary", "clickableColorSecondary", "deletable", "deletableColorPrimary", "deletableColorSecondary", "outlined", "filled", "outlinedPrimary", "outlinedSecondary", "filledPrimary", "filledSecondary", "avatar", "avatarSmall", "avatarMedium", "avatarColorPrimary", "avatarColorSecondary", "icon", "iconSmall", "iconMedium", "iconColorPrimary", "iconColorSecondary", "label", "labelSmall", "labelMedium", "deleteIcon", "deleteIconSmall", "deleteIconMedium", "deleteIconColorPrimary", "deleteIconColorSecondary", "deleteIconOutlinedColorPrimary", "deleteIconOutlinedColorSecondary", "deleteIconFilledColorPrimary", "deleteIconFilledColorSecondary", "focusVisible"]), P = dr, ur = ["avatar", "className", "clickable", "color", "component", "deleteIcon", "disabled", "icon", "label", "onClick", "onDelete", "onKeyDown", "onKeyUp", "size", "variant", "tabIndex", "skipFocusWhenDisabled"], vr = (e) => {
  const {
    classes: t,
    disabled: o,
    size: r,
    color: n,
    iconColor: l,
    onDelete: p,
    clickable: s,
    variant: i
  } = e, f = {
    root: ["root", i, o && "disabled", `size${R(r)}`, `color${R(n)}`, s && "clickable", s && `clickableColor${R(n)}`, p && "deletable", p && `deletableColor${R(n)}`, `${i}${R(n)}`],
    label: ["label", `label${R(r)}`],
    avatar: ["avatar", `avatar${R(r)}`, `avatarColor${R(n)}`],
    icon: ["icon", `icon${R(r)}`, `iconColor${R(l)}`],
    deleteIcon: ["deleteIcon", `deleteIcon${R(r)}`, `deleteIconColor${R(n)}`, `deleteIcon${R(i)}Color${R(n)}`]
  };
  return bt(f, fr, t);
}, mr = Se("div", {
  name: "MuiChip",
  slot: "Root",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      color: r,
      iconColor: n,
      clickable: l,
      onDelete: p,
      size: s,
      variant: i
    } = o;
    return [{
      [`& .${P.avatar}`]: t.avatar
    }, {
      [`& .${P.avatar}`]: t[`avatar${R(s)}`]
    }, {
      [`& .${P.avatar}`]: t[`avatarColor${R(r)}`]
    }, {
      [`& .${P.icon}`]: t.icon
    }, {
      [`& .${P.icon}`]: t[`icon${R(s)}`]
    }, {
      [`& .${P.icon}`]: t[`iconColor${R(n)}`]
    }, {
      [`& .${P.deleteIcon}`]: t.deleteIcon
    }, {
      [`& .${P.deleteIcon}`]: t[`deleteIcon${R(s)}`]
    }, {
      [`& .${P.deleteIcon}`]: t[`deleteIconColor${R(r)}`]
    }, {
      [`& .${P.deleteIcon}`]: t[`deleteIcon${R(i)}Color${R(r)}`]
    }, t.root, t[`size${R(s)}`], t[`color${R(r)}`], l && t.clickable, l && r !== "default" && t[`clickableColor${R(r)})`], p && t.deletable, p && r !== "default" && t[`deletableColor${R(r)}`], t[i], t[`${i}${R(r)}`]];
  }
})(({
  theme: e,
  ownerState: t
}) => {
  const o = e.palette.mode === "light" ? e.palette.grey[700] : e.palette.grey[300];
  return V({
    maxWidth: "100%",
    fontFamily: e.typography.fontFamily,
    fontSize: e.typography.pxToRem(13),
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    height: 32,
    color: (e.vars || e).palette.text.primary,
    backgroundColor: (e.vars || e).palette.action.selected,
    borderRadius: 32 / 2,
    whiteSpace: "nowrap",
    transition: e.transitions.create(["background-color", "box-shadow"]),
    // reset cursor explicitly in case ButtonBase is used
    cursor: "unset",
    // We disable the focus ring for mouse, touch and keyboard users.
    outline: 0,
    textDecoration: "none",
    border: 0,
    // Remove `button` border
    padding: 0,
    // Remove `button` padding
    verticalAlign: "middle",
    boxSizing: "border-box",
    [`&.${P.disabled}`]: {
      opacity: (e.vars || e).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`& .${P.avatar}`]: {
      marginLeft: 5,
      marginRight: -6,
      width: 24,
      height: 24,
      color: e.vars ? e.vars.palette.Chip.defaultAvatarColor : o,
      fontSize: e.typography.pxToRem(12)
    },
    [`& .${P.avatarColorPrimary}`]: {
      color: (e.vars || e).palette.primary.contrastText,
      backgroundColor: (e.vars || e).palette.primary.dark
    },
    [`& .${P.avatarColorSecondary}`]: {
      color: (e.vars || e).palette.secondary.contrastText,
      backgroundColor: (e.vars || e).palette.secondary.dark
    },
    [`& .${P.avatarSmall}`]: {
      marginLeft: 4,
      marginRight: -4,
      width: 18,
      height: 18,
      fontSize: e.typography.pxToRem(10)
    },
    [`& .${P.icon}`]: V({
      marginLeft: 5,
      marginRight: -6
    }, t.size === "small" && {
      fontSize: 18,
      marginLeft: 4,
      marginRight: -4
    }, t.iconColor === t.color && V({
      color: e.vars ? e.vars.palette.Chip.defaultIconColor : o
    }, t.color !== "default" && {
      color: "inherit"
    })),
    [`& .${P.deleteIcon}`]: V({
      WebkitTapHighlightColor: "transparent",
      color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.26)` : X(e.palette.text.primary, 0.26),
      fontSize: 22,
      cursor: "pointer",
      margin: "0 5px 0 -6px",
      "&:hover": {
        color: e.vars ? `rgba(${e.vars.palette.text.primaryChannel} / 0.4)` : X(e.palette.text.primary, 0.4)
      }
    }, t.size === "small" && {
      fontSize: 16,
      marginRight: 4,
      marginLeft: -4
    }, t.color !== "default" && {
      color: e.vars ? `rgba(${e.vars.palette[t.color].contrastTextChannel} / 0.7)` : X(e.palette[t.color].contrastText, 0.7),
      "&:hover, &:active": {
        color: (e.vars || e).palette[t.color].contrastText
      }
    })
  }, t.size === "small" && {
    height: 24
  }, t.color !== "default" && {
    backgroundColor: (e.vars || e).palette[t.color].main,
    color: (e.vars || e).palette[t.color].contrastText
  }, t.onDelete && {
    [`&.${P.focusVisible}`]: {
      backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : X(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
    }
  }, t.onDelete && t.color !== "default" && {
    [`&.${P.focusVisible}`]: {
      backgroundColor: (e.vars || e).palette[t.color].dark
    }
  });
}, ({
  theme: e,
  ownerState: t
}) => V({}, t.clickable && {
  userSelect: "none",
  WebkitTapHighlightColor: "transparent",
  cursor: "pointer",
  "&:hover": {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.hoverOpacity}))` : X(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.hoverOpacity)
  },
  [`&.${P.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette.action.selectedChannel} / calc(${e.vars.palette.action.selectedOpacity} + ${e.vars.palette.action.focusOpacity}))` : X(e.palette.action.selected, e.palette.action.selectedOpacity + e.palette.action.focusOpacity)
  },
  "&:active": {
    boxShadow: (e.vars || e).shadows[1]
  }
}, t.clickable && t.color !== "default" && {
  [`&:hover, &.${P.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette[t.color].dark
  }
}), ({
  theme: e,
  ownerState: t
}) => V({}, t.variant === "outlined" && {
  backgroundColor: "transparent",
  border: e.vars ? `1px solid ${e.vars.palette.Chip.defaultBorder}` : `1px solid ${e.palette.mode === "light" ? e.palette.grey[400] : e.palette.grey[700]}`,
  [`&.${P.clickable}:hover`]: {
    backgroundColor: (e.vars || e).palette.action.hover
  },
  [`&.${P.focusVisible}`]: {
    backgroundColor: (e.vars || e).palette.action.focus
  },
  [`& .${P.avatar}`]: {
    marginLeft: 4
  },
  [`& .${P.avatarSmall}`]: {
    marginLeft: 2
  },
  [`& .${P.icon}`]: {
    marginLeft: 4
  },
  [`& .${P.iconSmall}`]: {
    marginLeft: 2
  },
  [`& .${P.deleteIcon}`]: {
    marginRight: 5
  },
  [`& .${P.deleteIconSmall}`]: {
    marginRight: 3
  }
}, t.variant === "outlined" && t.color !== "default" && {
  color: (e.vars || e).palette[t.color].main,
  border: `1px solid ${e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : X(e.palette[t.color].main, 0.7)}`,
  [`&.${P.clickable}:hover`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.hoverOpacity})` : X(e.palette[t.color].main, e.palette.action.hoverOpacity)
  },
  [`&.${P.focusVisible}`]: {
    backgroundColor: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / ${e.vars.palette.action.focusOpacity})` : X(e.palette[t.color].main, e.palette.action.focusOpacity)
  },
  [`& .${P.deleteIcon}`]: {
    color: e.vars ? `rgba(${e.vars.palette[t.color].mainChannel} / 0.7)` : X(e.palette[t.color].main, 0.7),
    "&:hover, &:active": {
      color: (e.vars || e).palette[t.color].main
    }
  }
})), br = Se("span", {
  name: "MuiChip",
  slot: "Label",
  overridesResolver: (e, t) => {
    const {
      ownerState: o
    } = e, {
      size: r
    } = o;
    return [t.label, t[`label${R(r)}`]];
  }
})(({
  ownerState: e
}) => V({
  overflow: "hidden",
  textOverflow: "ellipsis",
  paddingLeft: 12,
  paddingRight: 12,
  whiteSpace: "nowrap"
}, e.variant === "outlined" && {
  paddingLeft: 11,
  paddingRight: 11
}, e.size === "small" && {
  paddingLeft: 8,
  paddingRight: 8
}, e.size === "small" && e.variant === "outlined" && {
  paddingLeft: 7,
  paddingRight: 7
}));
function ut(e) {
  return e.key === "Backspace" || e.key === "Delete";
}
const Dt = /* @__PURE__ */ j.forwardRef(function(t, o) {
  const r = ht({
    props: t,
    name: "MuiChip"
  }), {
    avatar: n,
    className: l,
    clickable: p,
    color: s = "default",
    component: i,
    deleteIcon: f,
    disabled: c = !1,
    icon: v,
    label: x,
    onClick: d,
    onDelete: g,
    onKeyDown: m,
    onKeyUp: b,
    size: C = "medium",
    variant: E = "filled",
    tabIndex: O,
    skipFocusWhenDisabled: u = !1
    // TODO v6: Rename to `focusableWhenDisabled`.
  } = r, y = Te(r, ur), h = j.useRef(null), w = Be(h, o), k = (A) => {
    A.stopPropagation(), g && g(A);
  }, $ = (A) => {
    A.currentTarget === A.target && ut(A) && A.preventDefault(), m && m(A);
  }, T = (A) => {
    A.currentTarget === A.target && (g && ut(A) ? g(A) : A.key === "Escape" && h.current && h.current.blur()), b && b(A);
  }, D = p !== !1 && d ? !0 : p, L = D || g ? rt : i || "div", I = V({}, r, {
    component: L,
    disabled: c,
    size: C,
    color: s,
    iconColor: /* @__PURE__ */ j.isValidElement(v) && v.props.color || s,
    onDelete: !!g,
    clickable: D,
    variant: E
  }), N = vr(I), K = L === rt ? V({
    component: i || "div",
    focusVisibleClassName: N.focusVisible
  }, g && {
    disableRipple: !0
  }) : {};
  let M = null;
  g && (M = f && /* @__PURE__ */ j.isValidElement(f) ? /* @__PURE__ */ j.cloneElement(f, {
    className: ae(f.props.className, N.deleteIcon),
    onClick: k
  }) : /* @__PURE__ */ oe(pr, {
    className: ae(N.deleteIcon),
    onClick: k
  }));
  let B = null;
  n && /* @__PURE__ */ j.isValidElement(n) && (B = /* @__PURE__ */ j.cloneElement(n, {
    className: ae(N.avatar, n.props.className)
  }));
  let S = null;
  return v && /* @__PURE__ */ j.isValidElement(v) && (S = /* @__PURE__ */ j.cloneElement(v, {
    className: ae(N.icon, v.props.className)
  })), process.env.NODE_ENV !== "production" && B && S && console.error("MUI: The Chip component can not handle the avatar and the icon prop at the same time. Pick one."), /* @__PURE__ */ Nt(mr, V({
    as: L,
    className: ae(N.root, l),
    disabled: D && c ? !0 : void 0,
    onClick: d,
    onKeyDown: $,
    onKeyUp: T,
    ref: w,
    tabIndex: u && c ? -1 : O,
    ownerState: I
  }, K, y, {
    children: [B || S, /* @__PURE__ */ oe(br, {
      className: ae(N.label),
      ownerState: I,
      children: x
    }), M]
  }));
});
process.env.NODE_ENV !== "production" && (Dt.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The Avatar element to display.
   */
  avatar: a.element,
  /**
   * This prop isn't supported.
   * Use the `component` prop if you need to change the children structure.
   */
  children: Ut,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: a.object,
  /**
   * @ignore
   */
  className: a.string,
  /**
   * If `true`, the chip will appear clickable, and will raise when pressed,
   * even if the onClick prop is not defined.
   * If `false`, the chip will not appear clickable, even if onClick prop is defined.
   * This can be used, for example,
   * along with the component prop to indicate an anchor Chip is clickable.
   * Note: this controls the UI and does not affect the onClick event.
   */
  clickable: a.bool,
  /**
   * The color of the component.
   * It supports both default and custom theme colors, which can be added as shown in the
   * [palette customization guide](https://mui.com/material-ui/customization/palette/#custom-colors).
   * @default 'default'
   */
  color: a.oneOfType([a.oneOf(["default", "primary", "secondary", "error", "info", "success", "warning"]), a.string]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: a.elementType,
  /**
   * Override the default delete icon element. Shown only if `onDelete` is set.
   */
  deleteIcon: a.element,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: a.bool,
  /**
   * Icon element.
   */
  icon: a.element,
  /**
   * The content of the component.
   */
  label: a.node,
  /**
   * @ignore
   */
  onClick: a.func,
  /**
   * Callback fired when the delete icon is clicked.
   * If set, the delete icon will be shown.
   */
  onDelete: a.func,
  /**
   * @ignore
   */
  onKeyDown: a.func,
  /**
   * @ignore
   */
  onKeyUp: a.func,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: a.oneOfType([a.oneOf(["medium", "small"]), a.string]),
  /**
   * If `true`, allows the disabled chip to escape focus.
   * If `false`, allows the disabled chip to receive focus.
   * @default false
   */
  skipFocusWhenDisabled: a.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: a.oneOfType([a.arrayOf(a.oneOfType([a.func, a.object, a.bool])), a.func, a.object]),
  /**
   * @ignore
   */
  tabIndex: a.number,
  /**
   * The variant to use.
   * @default 'filled'
   */
  variant: a.oneOfType([a.oneOf(["filled", "outlined"]), a.string])
});
const Tr = Dt;
export {
  Tr as C,
  Rr as P
};
