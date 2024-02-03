import { jsx as C, jsxs as Se, Fragment as wt } from "react/jsx-runtime";
import * as O from "react";
import { useEffect as kt } from "react";
import { FIELD_TYPE as Rt } from "../../FormRenderer.constants.js";
import { l as Et } from "../../../../Fields.styles-a09d0a4e.js";
import { getFieldChoices as Nt } from "./Fields.utils.js";
import { i as at, a as pe, o as bt, f as me, A as Dt, S as Mt } from "../../../../SharedTextField-c5888703.js";
import { M as Ft } from "../../../../CircularProgress-692b550b.js";
import { a as d, g as It, s as _, h as Be, _ as pt, P as r, j as lt } from "../../../../styled-c6437ab8.js";
import { c as he } from "../../../../clsx-f0826a09.js";
import { C as Vt } from "../../../../Close-ad39bb4a.js";
import { g as vt, u as Pt, c as Ct } from "../../../../useThemeProps-7889d54e.js";
import { I as $t } from "../../../../IconButton-cb9cf13b.js";
import { P as St, C as Ht } from "../../../../Chip-f92e5f00.js";
import { P as Tt, i as zt } from "../../../../Paper-79c19457.js";
import { u as jt } from "../../../../FormHelperText-5a47fd9c.js";
import { u as it } from "../../../../useFormControl-a3d8b2b6.js";
import { u as _e, s as _t, a as Bt, c as mt } from "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
import "../../../../moment-a2f61e40.js";
import "../../../utils/dateUtils.js";
import "../../../../useTheme-f100ae81.js";
import "../../../../createSvgIcon-4c228bdf.js";
import "../../../../unsupportedProp-3dbf01f6.js";
const Ut = (o) => {
  const a = O.useRef({});
  return O.useEffect(() => {
    a.current = o;
  }), a.current;
}, Wt = Ut;
function ht(o) {
  return typeof o.normalize < "u" ? o.normalize("NFD").replace(/[\u0300-\u036f]/g, "") : o;
}
function Lt(o = {}) {
  const {
    ignoreAccents: a = !0,
    ignoreCase: u = !0,
    limit: h,
    matchFrom: $ = "any",
    stringify: S,
    trim: I = !1
  } = o;
  return (b, {
    inputValue: B,
    getOptionLabel: y
  }) => {
    let T = I ? B.trim() : B;
    u && (T = T.toLowerCase()), a && (T = ht(T));
    const D = T ? b.filter((G) => {
      let A = (S || y)(G);
      return u && (A = A.toLowerCase()), a && (A = ht(A)), $ === "start" ? A.indexOf(T) === 0 : A.indexOf(T) > -1;
    }) : b;
    return typeof h == "number" ? D.slice(0, h) : D;
  };
}
function st(o, a) {
  for (let u = 0; u < o.length; u += 1)
    if (a(o[u]))
      return u;
  return -1;
}
const Gt = Lt(), xt = 5, qt = (o) => {
  var a;
  return o.current !== null && ((a = o.current.parentElement) == null ? void 0 : a.contains(document.activeElement));
};
function Kt(o) {
  const {
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_isActiveElementInListbox: a = qt,
    // eslint-disable-next-line @typescript-eslint/naming-convention
    unstable_classNamePrefix: u = "Mui",
    autoComplete: h = !1,
    autoHighlight: $ = !1,
    autoSelect: S = !1,
    blurOnSelect: I = !1,
    clearOnBlur: b = !o.freeSolo,
    clearOnEscape: B = !1,
    componentName: y = "useAutocomplete",
    defaultValue: T = o.multiple ? [] : null,
    disableClearable: D = !1,
    disableCloseOnSelect: G = !1,
    disabled: A,
    disabledItemsFocusable: Te = !1,
    disableListWrap: Le = !1,
    filterOptions: U = Gt,
    filterSelectedOptions: H = !1,
    freeSolo: Y = !1,
    getOptionDisabled: X,
    getOptionLabel: Ue = (t) => {
      var e;
      return (e = t.label) != null ? e : t;
    },
    groupBy: ue,
    handleHomeEndKeys: We = !o.freeSolo,
    id: le,
    includeInputInList: Ge = !1,
    inputValue: ct,
    isOptionEqualToValue: q = (t, e) => t === e,
    multiple: f = !1,
    onChange: xe,
    onClose: Oe,
    onHighlightChange: Ae,
    onInputChange: Q,
    onOpen: we,
    open: qe,
    openOnFocus: dt = !1,
    options: ke,
    readOnly: Z = !1,
    selectOnFocus: Ke = !o.freeSolo,
    value: ye
  } = o, R = jt(le);
  let w = Ue;
  w = (t) => {
    const e = Ue(t);
    if (typeof e != "string") {
      if (process.env.NODE_ENV !== "production") {
        const n = e === void 0 ? "undefined" : `${typeof e} (${e})`;
        console.error(`MUI: The \`getOptionLabel\` method of ${y} returned ${n} instead of a string for ${JSON.stringify(t)}.`);
      }
      return String(e);
    }
    return e;
  };
  const Ie = O.useRef(!1), ve = O.useRef(!0), m = O.useRef(null), E = O.useRef(null), [ce, Je] = O.useState(null), [M, de] = O.useState(-1), Re = $ ? 0 : -1, k = O.useRef(Re), [i, Ee] = it({
    controlled: ye,
    default: T,
    name: y
  }), [c, ne] = it({
    controlled: ct,
    default: "",
    name: y,
    state: "inputValue"
  }), [ee, Ne] = O.useState(!1), fe = O.useCallback((t, e) => {
    if (!(f ? i.length < e.length : e !== null) && !b)
      return;
    let l;
    if (f)
      l = "";
    else if (e == null)
      l = "";
    else {
      const s = w(e);
      l = typeof s == "string" ? s : "";
    }
    c !== l && (ne(l), Q && Q(t, l, "reset"));
  }, [w, c, f, Q, ne, b, i]), [te, De] = it({
    controlled: qe,
    default: !1,
    name: y,
    state: "open"
  }), [Ye, Me] = O.useState(!0), Fe = !f && i != null && c === w(i), N = te && !Z, x = N ? U(
    ke.filter((t) => !(H && (f ? i : [i]).some((e) => e !== null && q(t, e)))),
    // we use the empty string to manipulate `filterOptions` to not filter any options
    // i.e. the filter predicate always returns true
    {
      inputValue: Fe && Ye ? "" : c,
      getOptionLabel: w
    }
  ) : [], F = Wt({
    filteredOptions: x,
    value: i,
    inputValue: c
  });
  O.useEffect(() => {
    const t = i !== F.value;
    ee && !t || Y && !t || fe(null, i);
  }, [i, fe, ee, F.value, Y]);
  const Pe = te && x.length > 0 && !Z;
  if (process.env.NODE_ENV !== "production" && i !== null && !Y && ke.length > 0) {
    const t = (f ? i : [i]).filter((e) => !ke.some((n) => q(n, e)));
    t.length > 0 && console.warn([`MUI: The value provided to ${y} is invalid.`, `None of the options match with \`${t.length > 1 ? JSON.stringify(t) : JSON.stringify(t[0])}\`.`, "You can use the `isOptionEqualToValue` prop to customize the equality test."].join(`
`));
  }
  const ge = _e((t) => {
    t === -1 ? m.current.focus() : ce.querySelector(`[data-tag-index="${t}"]`).focus();
  });
  O.useEffect(() => {
    f && M > i.length - 1 && (de(-1), ge(-1));
  }, [i, f, M, ge]);
  function Xe(t, e) {
    if (!E.current || t === -1)
      return -1;
    let n = t;
    for (; ; ) {
      if (e === "next" && n === x.length || e === "previous" && n === -1)
        return -1;
      const l = E.current.querySelector(`[data-option-index="${n}"]`), s = Te ? !1 : !l || l.disabled || l.getAttribute("aria-disabled") === "true";
      if (l && !l.hasAttribute("tabindex") || s)
        n += e === "next" ? 1 : -1;
      else
        return n;
    }
  }
  const z = _e(({
    event: t,
    index: e,
    reason: n = "auto"
  }) => {
    if (k.current = e, e === -1 ? m.current.removeAttribute("aria-activedescendant") : m.current.setAttribute("aria-activedescendant", `${R}-option-${e}`), Ae && Ae(t, e === -1 ? null : x[e], n), !E.current)
      return;
    const l = E.current.querySelector(`[role="option"].${u}-focused`);
    l && (l.classList.remove(`${u}-focused`), l.classList.remove(`${u}-focusVisible`));
    let s = E.current;
    if (E.current.getAttribute("role") !== "listbox" && (s = E.current.parentElement.querySelector('[role="listbox"]')), !s)
      return;
    if (e === -1) {
      s.scrollTop = 0;
      return;
    }
    const g = E.current.querySelector(`[data-option-index="${e}"]`);
    if (g && (g.classList.add(`${u}-focused`), n === "keyboard" && g.classList.add(`${u}-focusVisible`), s.scrollHeight > s.clientHeight && n !== "mouse" && n !== "touch")) {
      const v = g, V = s.clientHeight + s.scrollTop, je = v.offsetTop + v.offsetHeight;
      je > V ? s.scrollTop = je - s.clientHeight : v.offsetTop - v.offsetHeight * (ue ? 1.3 : 0) < s.scrollTop && (s.scrollTop = v.offsetTop - v.offsetHeight * (ue ? 1.3 : 0));
    }
  }), j = _e(({
    event: t,
    diff: e,
    direction: n = "next",
    reason: l = "auto"
  }) => {
    if (!N)
      return;
    const g = Xe((() => {
      const v = x.length - 1;
      if (e === "reset")
        return Re;
      if (e === "start")
        return 0;
      if (e === "end")
        return v;
      const V = k.current + e;
      return V < 0 ? V === -1 && Ge ? -1 : Le && k.current !== -1 || Math.abs(e) > 1 ? 0 : v : V > v ? V === v + 1 && Ge ? -1 : Le || Math.abs(e) > 1 ? v : 0 : V;
    })(), n);
    if (z({
      index: g,
      reason: l,
      event: t
    }), h && e !== "reset")
      if (g === -1)
        m.current.value = c;
      else {
        const v = w(x[g]);
        m.current.value = v, v.toLowerCase().indexOf(c.toLowerCase()) === 0 && c.length > 0 && m.current.setSelectionRange(c.length, v.length);
      }
  }), Qe = () => {
    const t = (e, n) => {
      const l = e ? w(e) : "", s = n ? w(n) : "";
      return l === s;
    };
    if (k.current !== -1 && F.filteredOptions && F.filteredOptions.length !== x.length && F.inputValue === c && (f ? i.length === F.value.length && F.value.every((e, n) => w(i[n]) === w(e)) : t(F.value, i))) {
      const e = F.filteredOptions[k.current];
      if (e && x.some((l) => w(l) === w(e)))
        return !0;
    }
    return !1;
  }, re = O.useCallback(() => {
    if (!N || Qe())
      return;
    const t = f ? i[0] : i;
    if (x.length === 0 || t == null) {
      j({
        diff: "reset"
      });
      return;
    }
    if (E.current) {
      if (t != null) {
        const e = x[k.current];
        if (f && e && st(i, (l) => q(e, l)) !== -1)
          return;
        const n = st(x, (l) => q(l, t));
        n === -1 ? j({
          diff: "reset"
        }) : z({
          index: n
        });
        return;
      }
      if (k.current >= x.length - 1) {
        z({
          index: x.length - 1
        });
        return;
      }
      z({
        index: k.current
      });
    }
  }, [
    // Only sync the highlighted index when the option switch between empty and not
    x.length,
    // Don't sync the highlighted index with the value when multiple
    // eslint-disable-next-line react-hooks/exhaustive-deps
    f ? !1 : i,
    H,
    j,
    z,
    N,
    c,
    f
  ]), Ze = _e((t) => {
    _t(E, t), t && re();
  });
  process.env.NODE_ENV !== "production" && O.useEffect(() => {
    (!m.current || m.current.nodeName !== "INPUT") && (m.current && m.current.nodeName === "TEXTAREA" ? console.warn([`A textarea element was provided to ${y} where input was expected.`, "This is not a supported scenario but it may work under certain conditions.", "A textarea keyboard navigation may conflict with Autocomplete controls (e.g. enter and arrow keys).", "Make sure to test keyboard navigation and add custom event handlers if necessary."].join(`
`)) : console.error([`MUI: Unable to find the input element. It was resolved to ${m.current} while an HTMLInputElement was expected.`, `Instead, ${y} expects an input element.`, "", y === "useAutocomplete" ? "Make sure you have bound getInputProps correctly and that the normal ref/effect resolutions order is guaranteed." : "Make sure you have customized the input component correctly."].join(`
`)));
  }, [y]), O.useEffect(() => {
    re();
  }, [re]);
  const oe = (t) => {
    te || (De(!0), Me(!0), we && we(t));
  }, K = (t, e) => {
    te && (De(!1), Oe && Oe(t, e));
  }, J = (t, e, n, l) => {
    if (f) {
      if (i.length === e.length && i.every((s, g) => s === e[g]))
        return;
    } else if (i === e)
      return;
    xe && xe(t, e, n, l), Ee(e);
  }, ae = O.useRef(!1), ie = (t, e, n = "selectOption", l = "options") => {
    let s = n, g = e;
    if (f) {
      if (g = Array.isArray(i) ? i.slice() : [], process.env.NODE_ENV !== "production") {
        const V = g.filter((je) => q(e, je));
        V.length > 1 && console.error([`MUI: The \`isOptionEqualToValue\` method of ${y} does not handle the arguments correctly.`, `The component expects a single value to match a given option but found ${V.length} matches.`].join(`
`));
      }
      const v = st(g, (V) => q(e, V));
      v === -1 ? g.push(e) : l !== "freeSolo" && (g.splice(v, 1), s = "removeOption");
    }
    fe(t, g), J(t, g, s, {
      option: e
    }), !G && (!t || !t.ctrlKey && !t.metaKey) && K(t, s), (I === !0 || I === "touch" && ae.current || I === "mouse" && !ae.current) && m.current.blur();
  };
  function et(t, e) {
    if (t === -1)
      return -1;
    let n = t;
    for (; ; ) {
      if (e === "next" && n === i.length || e === "previous" && n === -1)
        return -1;
      const l = ce.querySelector(`[data-tag-index="${n}"]`);
      if (!l || !l.hasAttribute("tabindex") || l.disabled || l.getAttribute("aria-disabled") === "true")
        n += e === "next" ? 1 : -1;
      else
        return n;
    }
  }
  const Ce = (t, e) => {
    if (!f)
      return;
    c === "" && K(t, "toggleInput");
    let n = M;
    M === -1 ? c === "" && e === "previous" && (n = i.length - 1) : (n += e === "next" ? 1 : -1, n < 0 && (n = 0), n === i.length && (n = -1)), n = et(n, e), de(n), ge(n);
  }, Ve = (t) => {
    Ie.current = !0, ne(""), Q && Q(t, "", "clear"), J(t, f ? [] : null, "clear");
  }, tt = (t) => (e) => {
    if (t.onKeyDown && t.onKeyDown(e), !e.defaultMuiPrevented && (M !== -1 && ["ArrowLeft", "ArrowRight"].indexOf(e.key) === -1 && (de(-1), ge(-1)), e.which !== 229))
      switch (e.key) {
        case "Home":
          N && We && (e.preventDefault(), j({
            diff: "start",
            direction: "next",
            reason: "keyboard",
            event: e
          }));
          break;
        case "End":
          N && We && (e.preventDefault(), j({
            diff: "end",
            direction: "previous",
            reason: "keyboard",
            event: e
          }));
          break;
        case "PageUp":
          e.preventDefault(), j({
            diff: -xt,
            direction: "previous",
            reason: "keyboard",
            event: e
          }), oe(e);
          break;
        case "PageDown":
          e.preventDefault(), j({
            diff: xt,
            direction: "next",
            reason: "keyboard",
            event: e
          }), oe(e);
          break;
        case "ArrowDown":
          e.preventDefault(), j({
            diff: 1,
            direction: "next",
            reason: "keyboard",
            event: e
          }), oe(e);
          break;
        case "ArrowUp":
          e.preventDefault(), j({
            diff: -1,
            direction: "previous",
            reason: "keyboard",
            event: e
          }), oe(e);
          break;
        case "ArrowLeft":
          Ce(e, "previous");
          break;
        case "ArrowRight":
          Ce(e, "next");
          break;
        case "Enter":
          if (k.current !== -1 && N) {
            const n = x[k.current], l = X ? X(n) : !1;
            if (e.preventDefault(), l)
              return;
            ie(e, n, "selectOption"), h && m.current.setSelectionRange(m.current.value.length, m.current.value.length);
          } else
            Y && c !== "" && Fe === !1 && (f && e.preventDefault(), ie(e, c, "createOption", "freeSolo"));
          break;
        case "Escape":
          N ? (e.preventDefault(), e.stopPropagation(), K(e, "escape")) : B && (c !== "" || f && i.length > 0) && (e.preventDefault(), e.stopPropagation(), Ve(e));
          break;
        case "Backspace":
          if (f && !Z && c === "" && i.length > 0) {
            const n = M === -1 ? i.length - 1 : M, l = i.slice();
            l.splice(n, 1), J(e, l, "removeOption", {
              option: i[n]
            });
          }
          break;
        case "Delete":
          if (f && !Z && c === "" && i.length > 0 && M !== -1) {
            const n = M, l = i.slice();
            l.splice(n, 1), J(e, l, "removeOption", {
              option: i[n]
            });
          }
          break;
      }
  }, ot = (t) => {
    Ne(!0), dt && !Ie.current && oe(t);
  }, nt = (t) => {
    if (a(E)) {
      m.current.focus();
      return;
    }
    Ne(!1), ve.current = !0, Ie.current = !1, S && k.current !== -1 && N ? ie(t, x[k.current], "blur") : S && Y && c !== "" ? ie(t, c, "blur", "freeSolo") : b && fe(t, i), K(t, "blur");
  }, $e = (t) => {
    const e = t.target.value;
    c !== e && (ne(e), Me(!1), Q && Q(t, e, "input")), e === "" ? !D && !f && J(t, null, "clear") : oe(t);
  }, L = (t) => {
    const e = Number(t.currentTarget.getAttribute("data-option-index"));
    k.current !== e && z({
      event: t,
      index: e,
      reason: "mouse"
    });
  }, P = (t) => {
    z({
      event: t,
      index: Number(t.currentTarget.getAttribute("data-option-index")),
      reason: "touch"
    }), ae.current = !0;
  }, W = (t) => {
    const e = Number(t.currentTarget.getAttribute("data-option-index"));
    ie(t, x[e], "selectOption"), ae.current = !1;
  }, ft = (t) => (e) => {
    const n = i.slice();
    n.splice(t, 1), J(e, n, "removeOption", {
      option: i[t]
    });
  }, He = (t) => {
    te ? K(t, "toggleInput") : oe(t);
  }, gt = (t) => {
    t.currentTarget.contains(t.target) && t.target.getAttribute("id") !== R && t.preventDefault();
  }, rt = (t) => {
    t.currentTarget.contains(t.target) && (m.current.focus(), Ke && ve.current && m.current.selectionEnd - m.current.selectionStart === 0 && m.current.select(), ve.current = !1);
  }, ze = (t) => {
    !A && (c === "" || !te) && He(t);
  };
  let se = Y && c.length > 0;
  se = se || (f ? i.length > 0 : i !== null);
  let be = x;
  if (ue) {
    const t = /* @__PURE__ */ new Map();
    let e = !1;
    be = x.reduce((n, l, s) => {
      const g = ue(l);
      return n.length > 0 && n[n.length - 1].group === g ? n[n.length - 1].options.push(l) : (process.env.NODE_ENV !== "production" && (t.get(g) && !e && (console.warn(`MUI: The options provided combined with the \`groupBy\` method of ${y} returns duplicated headers.`, "You can solve the issue by sorting the options with the output of `groupBy`."), e = !0), t.set(g, !0)), n.push({
        key: s,
        index: s,
        group: g,
        options: [l]
      })), n;
    }, []);
  }
  return A && ee && nt(), {
    getRootProps: (t = {}) => d({
      "aria-owns": Pe ? `${R}-listbox` : null
    }, t, {
      onKeyDown: tt(t),
      onMouseDown: gt,
      onClick: rt
    }),
    getInputLabelProps: () => ({
      id: `${R}-label`,
      htmlFor: R
    }),
    getInputProps: () => ({
      id: R,
      value: c,
      onBlur: nt,
      onFocus: ot,
      onChange: $e,
      onMouseDown: ze,
      // if open then this is handled imperatively so don't let react override
      // only have an opinion about this when closed
      "aria-activedescendant": N ? "" : null,
      "aria-autocomplete": h ? "both" : "list",
      "aria-controls": Pe ? `${R}-listbox` : void 0,
      "aria-expanded": Pe,
      // Disable browser's suggestion that might overlap with the popup.
      // Handle autocomplete but not autofill.
      autoComplete: "off",
      ref: m,
      autoCapitalize: "none",
      spellCheck: "false",
      role: "combobox",
      disabled: A
    }),
    getClearProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: Ve
    }),
    getPopupIndicatorProps: () => ({
      tabIndex: -1,
      type: "button",
      onClick: He
    }),
    getTagProps: ({
      index: t
    }) => d({
      key: t,
      "data-tag-index": t,
      tabIndex: -1
    }, !Z && {
      onDelete: ft(t)
    }),
    getListboxProps: () => ({
      role: "listbox",
      id: `${R}-listbox`,
      "aria-labelledby": `${R}-label`,
      ref: Ze,
      onMouseDown: (t) => {
        t.preventDefault();
      }
    }),
    getOptionProps: ({
      index: t,
      option: e
    }) => {
      const n = (f ? i : [i]).some((s) => s != null && q(e, s)), l = X ? X(e) : !1;
      return {
        key: w(e),
        tabIndex: -1,
        role: "option",
        id: `${R}-option-${t}`,
        onMouseMove: L,
        onClick: W,
        onTouchStart: P,
        "data-option-index": t,
        "aria-disabled": l,
        "aria-selected": n
      };
    },
    id: R,
    inputValue: c,
    value: i,
    dirty: se,
    expanded: N && ce,
    popupOpen: N,
    focused: ee || M !== -1,
    anchorEl: ce,
    setAnchorEl: Je,
    focusedTag: M,
    groupedOptions: be
  };
}
function Jt(o) {
  return It("MuiListSubheader", o);
}
vt("MuiListSubheader", ["root", "colorPrimary", "colorInherit", "gutters", "inset", "sticky"]);
const Yt = ["className", "color", "component", "disableGutters", "disableSticky", "inset"], Xt = (o) => {
  const {
    classes: a,
    color: u,
    disableGutters: h,
    inset: $,
    disableSticky: S
  } = o, I = {
    root: ["root", u !== "default" && `color${Be(u)}`, !h && "gutters", $ && "inset", !S && "sticky"]
  };
  return Ct(I, Jt, a);
}, Qt = _("li", {
  name: "MuiListSubheader",
  slot: "Root",
  overridesResolver: (o, a) => {
    const {
      ownerState: u
    } = o;
    return [a.root, u.color !== "default" && a[`color${Be(u.color)}`], !u.disableGutters && a.gutters, u.inset && a.inset, !u.disableSticky && a.sticky];
  }
})(({
  theme: o,
  ownerState: a
}) => d({
  boxSizing: "border-box",
  lineHeight: "48px",
  listStyle: "none",
  color: (o.vars || o).palette.text.secondary,
  fontFamily: o.typography.fontFamily,
  fontWeight: o.typography.fontWeightMedium,
  fontSize: o.typography.pxToRem(14)
}, a.color === "primary" && {
  color: (o.vars || o).palette.primary.main
}, a.color === "inherit" && {
  color: "inherit"
}, !a.disableGutters && {
  paddingLeft: 16,
  paddingRight: 16
}, a.inset && {
  paddingLeft: 72
}, !a.disableSticky && {
  position: "sticky",
  top: 0,
  zIndex: 1,
  backgroundColor: (o.vars || o).palette.background.paper
})), ut = /* @__PURE__ */ O.forwardRef(function(a, u) {
  const h = Pt({
    props: a,
    name: "MuiListSubheader"
  }), {
    className: $,
    color: S = "default",
    component: I = "li",
    disableGutters: b = !1,
    disableSticky: B = !1,
    inset: y = !1
  } = h, T = pt(h, Yt), D = d({}, h, {
    color: S,
    component: I,
    disableGutters: b,
    disableSticky: B,
    inset: y
  }), G = Xt(D);
  return /* @__PURE__ */ C(Qt, d({
    as: I,
    className: he(G.root, $),
    ref: u,
    ownerState: D
  }, T));
});
ut.muiSkipListHighlight = !0;
process.env.NODE_ENV !== "production" && (ut.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * The content of the component.
   */
  children: r.node,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The color of the component. It supports those theme colors that make sense for this component.
   * @default 'default'
   */
  color: r.oneOf(["default", "inherit", "primary"]),
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: r.elementType,
  /**
   * If `true`, the List Subheader will not have gutters.
   * @default false
   */
  disableGutters: r.bool,
  /**
   * If `true`, the List Subheader will not stick to the top during scroll.
   * @default false
   */
  disableSticky: r.bool,
  /**
   * If `true`, the List Subheader is indented.
   * @default false
   */
  inset: r.bool,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object])
});
const Zt = ut;
function eo(o) {
  return It("MuiAutocomplete", o);
}
const to = vt("MuiAutocomplete", ["root", "expanded", "fullWidth", "focused", "focusVisible", "tag", "tagSizeSmall", "tagSizeMedium", "hasPopupIcon", "hasClearIcon", "inputRoot", "input", "inputFocused", "endAdornment", "clearIndicator", "popupIndicator", "popupIndicatorOpen", "popper", "popperDisablePortal", "paper", "listbox", "loading", "noOptions", "option", "groupLabel", "groupUl"]), p = to;
var Ot, yt;
const oo = ["autoComplete", "autoHighlight", "autoSelect", "blurOnSelect", "ChipProps", "className", "clearIcon", "clearOnBlur", "clearOnEscape", "clearText", "closeText", "componentsProps", "defaultValue", "disableClearable", "disableCloseOnSelect", "disabled", "disabledItemsFocusable", "disableListWrap", "disablePortal", "filterOptions", "filterSelectedOptions", "forcePopupIcon", "freeSolo", "fullWidth", "getLimitTagsText", "getOptionDisabled", "getOptionLabel", "isOptionEqualToValue", "groupBy", "handleHomeEndKeys", "id", "includeInputInList", "inputValue", "limitTags", "ListboxComponent", "ListboxProps", "loading", "loadingText", "multiple", "noOptionsText", "onChange", "onClose", "onHighlightChange", "onInputChange", "onOpen", "open", "openOnFocus", "openText", "options", "PaperComponent", "PopperComponent", "popupIcon", "readOnly", "renderGroup", "renderInput", "renderOption", "renderTags", "selectOnFocus", "size", "slotProps", "value"], no = ["ref"], ro = (o) => {
  const {
    classes: a,
    disablePortal: u,
    expanded: h,
    focused: $,
    fullWidth: S,
    hasClearIcon: I,
    hasPopupIcon: b,
    inputFocused: B,
    popupOpen: y,
    size: T
  } = o, D = {
    root: ["root", h && "expanded", $ && "focused", S && "fullWidth", I && "hasClearIcon", b && "hasPopupIcon"],
    inputRoot: ["inputRoot"],
    input: ["input", B && "inputFocused"],
    tag: ["tag", `tagSize${Be(T)}`],
    endAdornment: ["endAdornment"],
    clearIndicator: ["clearIndicator"],
    popupIndicator: ["popupIndicator", y && "popupIndicatorOpen"],
    popper: ["popper", u && "popperDisablePortal"],
    paper: ["paper"],
    listbox: ["listbox"],
    loading: ["loading"],
    noOptions: ["noOptions"],
    option: ["option"],
    groupLabel: ["groupLabel"],
    groupUl: ["groupUl"]
  };
  return Ct(D, eo, a);
}, ao = _("div", {
  name: "MuiAutocomplete",
  slot: "Root",
  overridesResolver: (o, a) => {
    const {
      ownerState: u
    } = o, {
      fullWidth: h,
      hasClearIcon: $,
      hasPopupIcon: S,
      inputFocused: I,
      size: b
    } = u;
    return [{
      [`& .${p.tag}`]: a.tag
    }, {
      [`& .${p.tag}`]: a[`tagSize${Be(b)}`]
    }, {
      [`& .${p.inputRoot}`]: a.inputRoot
    }, {
      [`& .${p.input}`]: a.input
    }, {
      [`& .${p.input}`]: I && a.inputFocused
    }, a.root, h && a.fullWidth, S && a.hasPopupIcon, $ && a.hasClearIcon];
  }
})(({
  ownerState: o
}) => d({
  [`&.${p.focused} .${p.clearIndicator}`]: {
    visibility: "visible"
  },
  /* Avoid double tap issue on iOS */
  "@media (pointer: fine)": {
    [`&:hover .${p.clearIndicator}`]: {
      visibility: "visible"
    }
  }
}, o.fullWidth && {
  width: "100%"
}, {
  [`& .${p.tag}`]: d({
    margin: 3,
    maxWidth: "calc(100% - 6px)"
  }, o.size === "small" && {
    margin: 2,
    maxWidth: "calc(100% - 4px)"
  }),
  [`& .${p.inputRoot}`]: {
    flexWrap: "wrap",
    [`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]: {
      paddingRight: 26 + 4
    },
    [`.${p.hasPopupIcon}.${p.hasClearIcon}&`]: {
      paddingRight: 52 + 4
    },
    [`& .${p.input}`]: {
      width: 0,
      minWidth: 30
    }
  },
  [`& .${at.root}`]: {
    paddingBottom: 1,
    "& .MuiInput-input": {
      padding: "4px 4px 4px 0px"
    }
  },
  [`& .${at.root}.${pe.sizeSmall}`]: {
    [`& .${at.input}`]: {
      padding: "2px 4px 3px 0"
    }
  },
  [`& .${bt.root}`]: {
    padding: 9,
    [`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${p.hasPopupIcon}.${p.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${p.input}`]: {
      padding: "7.5px 4px 7.5px 5px"
    },
    [`& .${p.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${bt.root}.${pe.sizeSmall}`]: {
    // Don't specify paddingRight, as it overrides the default value set when there is only
    // one of the popup or clear icon as the specificity is equal so the latter one wins
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 6,
    [`& .${p.input}`]: {
      padding: "2.5px 4px 2.5px 8px"
    }
  },
  [`& .${me.root}`]: {
    paddingTop: 19,
    paddingLeft: 8,
    [`.${p.hasPopupIcon}&, .${p.hasClearIcon}&`]: {
      paddingRight: 26 + 4 + 9
    },
    [`.${p.hasPopupIcon}.${p.hasClearIcon}&`]: {
      paddingRight: 52 + 4 + 9
    },
    [`& .${me.input}`]: {
      padding: "7px 4px"
    },
    [`& .${p.endAdornment}`]: {
      right: 9
    }
  },
  [`& .${me.root}.${pe.sizeSmall}`]: {
    paddingBottom: 1,
    [`& .${me.input}`]: {
      padding: "2.5px 4px"
    }
  },
  [`& .${pe.hiddenLabel}`]: {
    paddingTop: 8
  },
  [`& .${me.root}.${pe.hiddenLabel}`]: {
    paddingTop: 0,
    paddingBottom: 0,
    [`& .${p.input}`]: {
      paddingTop: 16,
      paddingBottom: 17
    }
  },
  [`& .${me.root}.${pe.hiddenLabel}.${pe.sizeSmall}`]: {
    [`& .${p.input}`]: {
      paddingTop: 8,
      paddingBottom: 9
    }
  },
  [`& .${p.input}`]: d({
    flexGrow: 1,
    textOverflow: "ellipsis",
    opacity: 0
  }, o.inputFocused && {
    opacity: 1
  })
})), lo = _("div", {
  name: "MuiAutocomplete",
  slot: "EndAdornment",
  overridesResolver: (o, a) => a.endAdornment
})({
  // We use a position absolute to support wrapping tags.
  position: "absolute",
  right: 0,
  top: "calc(50% - 14px)"
  // Center vertically
}), io = _($t, {
  name: "MuiAutocomplete",
  slot: "ClearIndicator",
  overridesResolver: (o, a) => a.clearIndicator
})({
  marginRight: -2,
  padding: 4,
  visibility: "hidden"
}), so = _($t, {
  name: "MuiAutocomplete",
  slot: "PopupIndicator",
  overridesResolver: ({
    ownerState: o
  }, a) => d({}, a.popupIndicator, o.popupOpen && a.popupIndicatorOpen)
})(({
  ownerState: o
}) => d({
  padding: 2,
  marginRight: -2
}, o.popupOpen && {
  transform: "rotate(180deg)"
})), po = _(St, {
  name: "MuiAutocomplete",
  slot: "Popper",
  overridesResolver: (o, a) => {
    const {
      ownerState: u
    } = o;
    return [{
      [`& .${p.option}`]: a.option
    }, a.popper, u.disablePortal && a.popperDisablePortal];
  }
})(({
  theme: o,
  ownerState: a
}) => d({
  zIndex: (o.vars || o).zIndex.modal
}, a.disablePortal && {
  position: "absolute"
})), uo = _(Tt, {
  name: "MuiAutocomplete",
  slot: "Paper",
  overridesResolver: (o, a) => a.paper
})(({
  theme: o
}) => d({}, o.typography.body1, {
  overflow: "auto"
})), co = _("div", {
  name: "MuiAutocomplete",
  slot: "Loading",
  overridesResolver: (o, a) => a.loading
})(({
  theme: o
}) => ({
  color: (o.vars || o).palette.text.secondary,
  padding: "14px 16px"
})), fo = _("div", {
  name: "MuiAutocomplete",
  slot: "NoOptions",
  overridesResolver: (o, a) => a.noOptions
})(({
  theme: o
}) => ({
  color: (o.vars || o).palette.text.secondary,
  padding: "14px 16px"
})), go = _("div", {
  name: "MuiAutocomplete",
  slot: "Listbox",
  overridesResolver: (o, a) => a.listbox
})(({
  theme: o
}) => ({
  listStyle: "none",
  margin: 0,
  padding: "8px 0",
  maxHeight: "40vh",
  overflow: "auto",
  position: "relative",
  [`& .${p.option}`]: {
    minHeight: 48,
    display: "flex",
    overflow: "hidden",
    justifyContent: "flex-start",
    alignItems: "center",
    cursor: "pointer",
    paddingTop: 6,
    boxSizing: "border-box",
    outline: "0",
    WebkitTapHighlightColor: "transparent",
    paddingBottom: 6,
    paddingLeft: 16,
    paddingRight: 16,
    [o.breakpoints.up("sm")]: {
      minHeight: "auto"
    },
    [`&.${p.focused}`]: {
      backgroundColor: (o.vars || o).palette.action.hover,
      // Reset on touch devices, it doesn't add specificity
      "@media (hover: none)": {
        backgroundColor: "transparent"
      }
    },
    '&[aria-disabled="true"]': {
      opacity: (o.vars || o).palette.action.disabledOpacity,
      pointerEvents: "none"
    },
    [`&.${p.focusVisible}`]: {
      backgroundColor: (o.vars || o).palette.action.focus
    },
    '&[aria-selected="true"]': {
      backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / ${o.vars.palette.action.selectedOpacity})` : lt(o.palette.primary.main, o.palette.action.selectedOpacity),
      [`&.${p.focused}`]: {
        backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.hoverOpacity}))` : lt(o.palette.primary.main, o.palette.action.selectedOpacity + o.palette.action.hoverOpacity),
        // Reset on touch devices, it doesn't add specificity
        "@media (hover: none)": {
          backgroundColor: (o.vars || o).palette.action.selected
        }
      },
      [`&.${p.focusVisible}`]: {
        backgroundColor: o.vars ? `rgba(${o.vars.palette.primary.mainChannel} / calc(${o.vars.palette.action.selectedOpacity} + ${o.vars.palette.action.focusOpacity}))` : lt(o.palette.primary.main, o.palette.action.selectedOpacity + o.palette.action.focusOpacity)
      }
    }
  }
})), bo = _(Zt, {
  name: "MuiAutocomplete",
  slot: "GroupLabel",
  overridesResolver: (o, a) => a.groupLabel
})(({
  theme: o
}) => ({
  backgroundColor: (o.vars || o).palette.background.paper,
  top: -8
})), mo = _("ul", {
  name: "MuiAutocomplete",
  slot: "GroupUl",
  overridesResolver: (o, a) => a.groupUl
})({
  padding: 0,
  [`& .${p.option}`]: {
    paddingLeft: 24
  }
}), At = /* @__PURE__ */ O.forwardRef(function(a, u) {
  var h, $, S, I;
  const b = Pt({
    props: a,
    name: "MuiAutocomplete"
  }), {
    autoComplete: B = !1,
    autoHighlight: y = !1,
    autoSelect: T = !1,
    blurOnSelect: D = !1,
    ChipProps: G,
    className: A,
    clearIcon: Te = Ot || (Ot = /* @__PURE__ */ C(Vt, {
      fontSize: "small"
    })),
    clearOnBlur: Le = !b.freeSolo,
    clearOnEscape: U = !1,
    clearText: H = "Clear",
    closeText: Y = "Close",
    componentsProps: X = {},
    defaultValue: Ue = b.multiple ? [] : null,
    disableClearable: ue = !1,
    disableCloseOnSelect: We = !1,
    disabled: le = !1,
    disabledItemsFocusable: Ge = !1,
    disableListWrap: ct = !1,
    disablePortal: q = !1,
    filterSelectedOptions: f = !1,
    forcePopupIcon: xe = "auto",
    freeSolo: Oe = !1,
    fullWidth: Ae = !1,
    getLimitTagsText: Q = (n) => `+${n}`,
    getOptionLabel: we,
    groupBy: qe,
    handleHomeEndKeys: dt = !b.freeSolo,
    includeInputInList: ke = !1,
    limitTags: Z = -1,
    ListboxComponent: Ke = "ul",
    ListboxProps: ye,
    loading: R = !1,
    loadingText: w = "Loading…",
    multiple: Ie = !1,
    noOptionsText: ve = "No options",
    openOnFocus: m = !1,
    openText: E = "Open",
    PaperComponent: ce = Tt,
    PopperComponent: Je = St,
    popupIcon: M = yt || (yt = /* @__PURE__ */ C(Dt, {})),
    readOnly: de = !1,
    renderGroup: Re,
    renderInput: k,
    renderOption: i,
    renderTags: Ee,
    selectOnFocus: c = !b.freeSolo,
    size: ne = "medium",
    slotProps: ee = {}
  } = b, Ne = pt(b, oo), {
    getRootProps: fe,
    getInputProps: te,
    getInputLabelProps: De,
    getPopupIndicatorProps: Ye,
    getClearProps: Me,
    getTagProps: Fe,
    getListboxProps: N,
    getOptionProps: x,
    value: F,
    dirty: Pe,
    expanded: ge,
    id: Xe,
    popupOpen: z,
    focused: j,
    focusedTag: Qe,
    anchorEl: re,
    setAnchorEl: Ze,
    inputValue: oe,
    groupedOptions: K
  } = Kt(d({}, b, {
    componentName: "Autocomplete"
  })), J = !ue && !le && Pe && !de, ae = (!Oe || xe === !0) && xe !== !1, {
    onMouseDown: ie
  } = te(), {
    ref: et
  } = ye ?? {}, Ce = N(), {
    ref: Ve
  } = Ce, tt = pt(Ce, no), ot = Bt(Ve, et), $e = we || ((n) => {
    var l;
    return (l = n.label) != null ? l : n;
  }), L = d({}, b, {
    disablePortal: q,
    expanded: ge,
    focused: j,
    fullWidth: Ae,
    getOptionLabel: $e,
    hasClearIcon: J,
    hasPopupIcon: ae,
    inputFocused: Qe === -1,
    popupOpen: z,
    size: ne
  }), P = ro(L);
  let W;
  if (Ie && F.length > 0) {
    const n = (l) => d({
      className: P.tag,
      disabled: le
    }, Fe(l));
    Ee ? W = Ee(F, n, L) : W = F.map((l, s) => /* @__PURE__ */ C(Ht, d({
      label: $e(l),
      size: ne
    }, n({
      index: s
    }), G)));
  }
  if (Z > -1 && Array.isArray(W)) {
    const n = W.length - Z;
    !j && n > 0 && (W = W.splice(0, Z), W.push(/* @__PURE__ */ C("span", {
      className: P.tag,
      children: Q(n)
    }, W.length)));
  }
  const He = Re || ((n) => /* @__PURE__ */ Se("li", {
    children: [/* @__PURE__ */ C(bo, {
      className: P.groupLabel,
      ownerState: L,
      component: "div",
      children: n.group
    }), /* @__PURE__ */ C(mo, {
      className: P.groupUl,
      ownerState: L,
      children: n.children
    })]
  }, n.key)), rt = i || ((n, l) => /* @__PURE__ */ C("li", d({}, n, {
    children: $e(l)
  }))), ze = (n, l) => {
    const s = x({
      option: n,
      index: l
    });
    return rt(d({}, s, {
      className: P.option
    }), n, {
      selected: s["aria-selected"],
      index: l,
      inputValue: oe
    }, L);
  }, se = (h = ee.clearIndicator) != null ? h : X.clearIndicator, be = ($ = ee.paper) != null ? $ : X.paper, t = (S = ee.popper) != null ? S : X.popper, e = (I = ee.popupIndicator) != null ? I : X.popupIndicator;
  return /* @__PURE__ */ Se(O.Fragment, {
    children: [/* @__PURE__ */ C(ao, d({
      ref: u,
      className: he(P.root, A),
      ownerState: L
    }, fe(Ne), {
      children: k({
        id: Xe,
        disabled: le,
        fullWidth: !0,
        size: ne === "small" ? "small" : void 0,
        InputLabelProps: De(),
        InputProps: d({
          ref: Ze,
          className: P.inputRoot,
          startAdornment: W,
          onClick: (n) => {
            n.target === n.currentTarget && ie(n);
          }
        }, (J || ae) && {
          endAdornment: /* @__PURE__ */ Se(lo, {
            className: P.endAdornment,
            ownerState: L,
            children: [J ? /* @__PURE__ */ C(io, d({}, Me(), {
              "aria-label": H,
              title: H,
              ownerState: L
            }, se, {
              className: he(P.clearIndicator, se == null ? void 0 : se.className),
              children: Te
            })) : null, ae ? /* @__PURE__ */ C(so, d({}, Ye(), {
              disabled: le,
              "aria-label": z ? Y : E,
              title: z ? Y : E,
              ownerState: L
            }, e, {
              className: he(P.popupIndicator, e == null ? void 0 : e.className),
              children: M
            })) : null]
          })
        }),
        inputProps: d({
          className: P.input,
          disabled: le,
          readOnly: de
        }, te())
      })
    })), re ? /* @__PURE__ */ C(po, d({
      as: Je,
      disablePortal: q,
      style: {
        width: re ? re.clientWidth : null
      },
      ownerState: L,
      role: "presentation",
      anchorEl: re,
      open: z
    }, t, {
      className: he(P.popper, t == null ? void 0 : t.className),
      children: /* @__PURE__ */ Se(uo, d({
        ownerState: L,
        as: ce
      }, be, {
        className: he(P.paper, be == null ? void 0 : be.className),
        children: [R && K.length === 0 ? /* @__PURE__ */ C(co, {
          className: P.loading,
          ownerState: L,
          children: w
        }) : null, K.length === 0 && !Oe && !R ? /* @__PURE__ */ C(fo, {
          className: P.noOptions,
          ownerState: L,
          role: "presentation",
          onMouseDown: (n) => {
            n.preventDefault();
          },
          children: ve
        }) : null, K.length > 0 ? /* @__PURE__ */ C(go, d({
          as: Ke,
          className: P.listbox,
          ownerState: L
        }, tt, ye, {
          ref: ot,
          children: K.map((n, l) => qe ? He({
            key: n.key,
            group: n.group,
            children: n.options.map((s, g) => ze(s, n.index + g))
          }) : ze(n, l))
        })) : null]
      }))
    })) : null]
  });
});
process.env.NODE_ENV !== "production" && (At.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * If `true`, the portion of the selected suggestion that has not been typed by the user,
   * known as the completion string, appears inline after the input cursor in the textbox.
   * The inline completion string is visually highlighted and has a selected state.
   * @default false
   */
  autoComplete: r.bool,
  /**
   * If `true`, the first option is automatically highlighted.
   * @default false
   */
  autoHighlight: r.bool,
  /**
   * If `true`, the selected option becomes the value of the input
   * when the Autocomplete loses focus unless the user chooses
   * a different option or changes the character string in the input.
   *
   * When using `freeSolo` mode, the typed value will be the input value
   * if the Autocomplete loses focus without highlighting an option.
   * @default false
   */
  autoSelect: r.bool,
  /**
   * Control if the input should be blurred when an option is selected:
   *
   * - `false` the input is not blurred.
   * - `true` the input is always blurred.
   * - `touch` the input is blurred after a touch event.
   * - `mouse` the input is blurred after a mouse event.
   * @default false
   */
  blurOnSelect: r.oneOfType([r.oneOf(["mouse", "touch"]), r.bool]),
  /**
   * Props applied to the [`Chip`](/material-ui/api/chip/) element.
   */
  ChipProps: r.object,
  /**
   * Override or extend the styles applied to the component.
   */
  classes: r.object,
  /**
   * @ignore
   */
  className: r.string,
  /**
   * The icon to display in place of the default clear icon.
   * @default <ClearIcon fontSize="small" />
   */
  clearIcon: r.node,
  /**
   * If `true`, the input's text is cleared on blur if no value is selected.
   *
   * Set to `true` if you want to help the user enter a new value.
   * Set to `false` if you want to help the user resume their search.
   * @default !props.freeSolo
   */
  clearOnBlur: r.bool,
  /**
   * If `true`, clear all values when the user presses escape and the popup is closed.
   * @default false
   */
  clearOnEscape: r.bool,
  /**
   * Override the default text for the *clear* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Clear'
   */
  clearText: r.string,
  /**
   * Override the default text for the *close popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Close'
   */
  closeText: r.string,
  /**
   * The props used for each slot inside.
   * @default {}
   */
  componentsProps: r.shape({
    clearIndicator: r.object,
    paper: r.object,
    popper: r.object,
    popupIndicator: r.object
  }),
  /**
   * The default value. Use when the component is not controlled.
   * @default props.multiple ? [] : null
   */
  defaultValue: mt(r.any, (o) => o.multiple && o.defaultValue !== void 0 && !Array.isArray(o.defaultValue) ? new Error(["MUI: The Autocomplete expects the `defaultValue` prop to be an array when `multiple={true}` or undefined.", `However, ${o.defaultValue} was provided.`].join(`
`)) : null),
  /**
   * If `true`, the input can't be cleared.
   * @default false
   */
  disableClearable: r.bool,
  /**
   * If `true`, the popup won't close when a value is selected.
   * @default false
   */
  disableCloseOnSelect: r.bool,
  /**
   * If `true`, the component is disabled.
   * @default false
   */
  disabled: r.bool,
  /**
   * If `true`, will allow focus on disabled items.
   * @default false
   */
  disabledItemsFocusable: r.bool,
  /**
   * If `true`, the list box in the popup will not wrap focus.
   * @default false
   */
  disableListWrap: r.bool,
  /**
   * If `true`, the `Popper` content will be under the DOM hierarchy of the parent component.
   * @default false
   */
  disablePortal: r.bool,
  /**
   * A function that determines the filtered options to be rendered on search.
   *
   * @default createFilterOptions()
   * @param {Value[]} options The options to render.
   * @param {object} state The state of the component.
   * @returns {Value[]}
   */
  filterOptions: r.func,
  /**
   * If `true`, hide the selected options from the list box.
   * @default false
   */
  filterSelectedOptions: r.bool,
  /**
   * Force the visibility display of the popup icon.
   * @default 'auto'
   */
  forcePopupIcon: r.oneOfType([r.oneOf(["auto"]), r.bool]),
  /**
   * If `true`, the Autocomplete is free solo, meaning that the user input is not bound to provided options.
   * @default false
   */
  freeSolo: r.bool,
  /**
   * If `true`, the input will take up the full width of its container.
   * @default false
   */
  fullWidth: r.bool,
  /**
   * The label to display when the tags are truncated (`limitTags`).
   *
   * @param {number} more The number of truncated tags.
   * @returns {ReactNode}
   * @default (more) => `+${more}`
   */
  getLimitTagsText: r.func,
  /**
   * Used to determine the disabled state for a given option.
   *
   * @param {Value} option The option to test.
   * @returns {boolean}
   */
  getOptionDisabled: r.func,
  /**
   * Used to determine the string value for a given option.
   * It's used to fill the input (and the list box options if `renderOption` is not provided).
   *
   * If used in free solo mode, it must accept both the type of the options and a string.
   *
   * @param {Value} option
   * @returns {string}
   * @default (option) => option.label ?? option
   */
  getOptionLabel: r.func,
  /**
   * If provided, the options will be grouped under the returned string.
   * The groupBy value is also used as the text for group headings when `renderGroup` is not provided.
   *
   * @param {Value} options The options to group.
   * @returns {string}
   */
  groupBy: r.func,
  /**
   * If `true`, the component handles the "Home" and "End" keys when the popup is open.
   * It should move focus to the first option and last option, respectively.
   * @default !props.freeSolo
   */
  handleHomeEndKeys: r.bool,
  /**
   * This prop is used to help implement the accessibility logic.
   * If you don't provide an id it will fall back to a randomly generated one.
   */
  id: r.string,
  /**
   * If `true`, the highlight can move to the input.
   * @default false
   */
  includeInputInList: r.bool,
  /**
   * The input value.
   */
  inputValue: r.string,
  /**
   * Used to determine if the option represents the given value.
   * Uses strict equality by default.
   * ⚠️ Both arguments need to be handled, an option can only match with one value.
   *
   * @param {Value} option The option to test.
   * @param {Value} value The value to test against.
   * @returns {boolean}
   */
  isOptionEqualToValue: r.func,
  /**
   * The maximum number of tags that will be visible when not focused.
   * Set `-1` to disable the limit.
   * @default -1
   */
  limitTags: zt,
  /**
   * The component used to render the listbox.
   * @default 'ul'
   */
  ListboxComponent: r.elementType,
  /**
   * Props applied to the Listbox element.
   */
  ListboxProps: r.object,
  /**
   * If `true`, the component is in a loading state.
   * This shows the `loadingText` in place of suggestions (only if there are no suggestions to show, e.g. `options` are empty).
   * @default false
   */
  loading: r.bool,
  /**
   * Text to display when in a loading state.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Loading…'
   */
  loadingText: r.node,
  /**
   * If `true`, `value` must be an array and the menu will support multiple selections.
   * @default false
   */
  multiple: r.bool,
  /**
   * Text to display when there are no options.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'No options'
   */
  noOptionsText: r.node,
  /**
   * Callback fired when the value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value|Value[]} value The new value of the component.
   * @param {string} reason One of "createOption", "selectOption", "removeOption", "blur" or "clear".
   * @param {string} [details]
   */
  onChange: r.func,
  /**
   * Callback fired when the popup requests to be closed.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} reason Can be: `"toggleInput"`, `"escape"`, `"selectOption"`, `"removeOption"`, `"blur"`.
   */
  onClose: r.func,
  /**
   * Callback fired when the highlight option changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {Value} option The highlighted option.
   * @param {string} reason Can be: `"keyboard"`, `"auto"`, `"mouse"`, `"touch"`.
   */
  onHighlightChange: r.func,
  /**
   * Callback fired when the input value changes.
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   * @param {string} value The new value of the text input.
   * @param {string} reason Can be: `"input"` (user input), `"reset"` (programmatic change), `"clear"`.
   */
  onInputChange: r.func,
  /**
   * Callback fired when the popup requests to be opened.
   * Use in controlled mode (see open).
   *
   * @param {React.SyntheticEvent} event The event source of the callback.
   */
  onOpen: r.func,
  /**
   * If `true`, the component is shown.
   */
  open: r.bool,
  /**
   * If `true`, the popup will open on input focus.
   * @default false
   */
  openOnFocus: r.bool,
  /**
   * Override the default text for the *open popup* icon button.
   *
   * For localization purposes, you can use the provided [translations](/material-ui/guides/localization/).
   * @default 'Open'
   */
  openText: r.string,
  /**
   * Array of options.
   */
  options: r.array.isRequired,
  /**
   * The component used to render the body of the popup.
   * @default Paper
   */
  PaperComponent: r.elementType,
  /**
   * The component used to position the popup.
   * @default Popper
   */
  PopperComponent: r.elementType,
  /**
   * The icon to display in place of the default popup icon.
   * @default <ArrowDropDownIcon />
   */
  popupIcon: r.node,
  /**
   * If `true`, the component becomes readonly. It is also supported for multiple tags where the tag cannot be deleted.
   * @default false
   */
  readOnly: r.bool,
  /**
   * Render the group.
   *
   * @param {AutocompleteRenderGroupParams} params The group to render.
   * @returns {ReactNode}
   */
  renderGroup: r.func,
  /**
   * Render the input.
   *
   * @param {object} params
   * @returns {ReactNode}
   */
  renderInput: r.func.isRequired,
  /**
   * Render the option, use `getOptionLabel` by default.
   *
   * @param {object} props The props to apply on the li element.
   * @param {Value} option The option to render.
   * @param {object} state The state of each option.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderOption: r.func,
  /**
   * Render the selected value.
   *
   * @param {Value[]} value The `value` provided to the component.
   * @param {function} getTagProps A tag props getter.
   * @param {object} ownerState The state of the Autocomplete component.
   * @returns {ReactNode}
   */
  renderTags: r.func,
  /**
   * If `true`, the input's text is selected on focus.
   * It helps the user clear the selected value.
   * @default !props.freeSolo
   */
  selectOnFocus: r.bool,
  /**
   * The size of the component.
   * @default 'medium'
   */
  size: r.oneOfType([r.oneOf(["small", "medium"]), r.string]),
  /**
   * The props used for each slot inside.
   * @default {}
   */
  slotProps: r.shape({
    clearIndicator: r.object,
    paper: r.object,
    popper: r.object,
    popupIndicator: r.object
  }),
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: r.oneOfType([r.arrayOf(r.oneOfType([r.func, r.object, r.bool])), r.func, r.object]),
  /**
   * The value of the autocomplete.
   *
   * The value must have reference equality with the option in order to be selected.
   * You can customize the equality behavior with the `isOptionEqualToValue` prop.
   */
  value: mt(r.any, (o) => o.multiple && o.value !== void 0 && !Array.isArray(o.value) ? new Error(["MUI: The Autocomplete expects the `value` prop to be an array when `multiple={true}` or undefined.", `However, ${o.value} was provided.`].join(`
`)) : null)
});
const ho = At, xo = Lt({
  limit: 50
}), Wo = ({
  type: o,
  name: a,
  value: u,
  label: h,
  loading: $ = !1,
  disabled: S = !1,
  required: I = !1,
  placeholder: b = "Select",
  properties: B = {},
  error: y,
  onChange: T,
  onBlur: D = () => {
  }
}) => {
  if (kt(() => D(), [u]), o !== Rt.DROPDOWN)
    return null;
  const G = Nt(B), A = G.find((U) => U.value === u) || null;
  return /* @__PURE__ */ Se(wt, { children: [
    $ && /* @__PURE__ */ C(Ft, { size: 12, sx: Et }),
    /* @__PURE__ */ C(
      ho,
      {
        disablePortal: !0,
        options: G,
        filterOptions: xo,
        onChange: (U, H) => {
          H != null && H.value ? T(H.value) : T(null);
        },
        onBlur: D,
        isOptionEqualToValue: (U, H) => U.value === H.value,
        loading: $,
        disabled: S,
        value: A,
        defaultValue: A,
        disableClearable: I,
        getOptionDisabled: ({ disabled: U = !1 }) => !!U,
        renderInput: (U) => /* @__PURE__ */ C(
          Mt,
          {
            ...U,
            placeholder: `-- ${b} --`,
            name: a,
            label: h,
            error: y,
            value: u
          }
        )
      }
    )
  ] });
};
export {
  Wo as DropdownField
};
