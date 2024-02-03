import { a as c, g as h, d as l, T as d } from "./styled-c6437ab8.js";
import { u as g } from "./clsx-f0826a09.js";
function f(o, s) {
  const e = c({}, s);
  return Object.keys(o).forEach((t) => {
    if (t.toString().match(/^(components|slots)$/))
      e[t] = c({}, o[t], e[t]);
    else if (t.toString().match(/^(componentsProps|slotProps)$/)) {
      const n = o[t] || {}, u = s[t];
      e[t] = {}, !u || !Object.keys(u) ? e[t] = n : !n || !Object.keys(n) ? e[t] = u : (e[t] = c({}, u), Object.keys(n).forEach((i) => {
        e[t][i] = f(n[i], u[i]);
      }));
    } else
      e[t] === void 0 && (e[t] = o[t]);
  }), e;
}
function b(o, s, e = void 0) {
  const t = {};
  return Object.keys(o).forEach(
    // `Object.keys(slots)` can't be wider than `T` because we infer `T` from `slots`.
    // @ts-expect-error https://github.com/microsoft/TypeScript/pull/12253#issuecomment-263132208
    (n) => {
      t[n] = o[n].reduce((u, i) => {
        if (i) {
          const r = s(i);
          r !== "" && u.push(r), e && e[i] && u.push(e[i]);
        }
        return u;
      }, []).join(" ");
    }
  ), t;
}
function j(o, s, e = "Mui") {
  const t = {};
  return s.forEach((n) => {
    t[n] = h(o, n, e);
  }), t;
}
function a(o) {
  const {
    theme: s,
    name: e,
    props: t
  } = o;
  return !s || !s.components || !s.components[e] || !s.components[e].defaultProps ? t : f(s.components[e].defaultProps, t);
}
function m({
  props: o,
  name: s,
  defaultTheme: e,
  themeId: t
}) {
  let n = g(e);
  return t && (n = n[t] || n), a({
    theme: n,
    name: s,
    props: o
  });
}
function E({
  props: o,
  name: s
}) {
  return m({
    props: o,
    name: s,
    defaultTheme: l,
    themeId: d
  });
}
export {
  m as a,
  a as b,
  b as c,
  j as g,
  f as r,
  E as u
};
