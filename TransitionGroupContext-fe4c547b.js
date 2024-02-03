import { P as c } from "./styled-c6437ab8.js";
import * as r from "react";
import s from "react";
function l(e, t) {
  return process.env.NODE_ENV === "production" ? () => null : function(...o) {
    return e(...o) || t(...o);
  };
}
function y(e) {
  const {
    prototype: t = {}
  } = e;
  return !!t.isReactComponent;
}
function d(e, t, n, o, u) {
  const i = e[t], a = u || t;
  if (i == null || // When server-side rendering React doesn't warn either.
  // This is not an accurate check for SSR.
  // This is only in place for emotion compat.
  // TODO: Revisit once https://github.com/facebook/react/issues/20047 is resolved.
  typeof window > "u")
    return null;
  let f;
  return typeof i == "function" && !y(i) && (f = "Did you accidentally provide a plain function component instead?"), f !== void 0 ? new Error(`Invalid ${o} \`${a}\` supplied to \`${n}\`. Expected an element type that can hold a ref. ${f} For more information see https://mui.com/r/caveat-with-refs-guide`) : null;
}
const P = l(c.elementType, d), m = c.oneOfType([c.func, c.object]), R = m;
function E(e, t) {
  typeof e == "function" ? e(t) : e && (e.current = t);
}
const _ = typeof window < "u" ? r.useLayoutEffect : r.useEffect, T = _;
function w(e) {
  const t = r.useRef(e);
  return T(() => {
    t.current = e;
  }), r.useCallback((...n) => (
    // @ts-expect-error hide `this`
    // tslint:disable-next-line:ban-comma-operator
    (0, t.current)(...n)
  ), []);
}
function $(...e) {
  return r.useMemo(() => e.every((t) => t == null) ? null : (t) => {
    e.forEach((n) => {
      E(n, t);
    });
  }, e);
}
function p(e, t) {
  return p = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(o, u) {
    return o.__proto__ = u, o;
  }, p(e, t);
}
function v(e, t) {
  e.prototype = Object.create(t.prototype), e.prototype.constructor = e, p(e, t);
}
const b = s.createContext(null);
export {
  b as T,
  v as _,
  $ as a,
  T as b,
  l as c,
  P as e,
  R as r,
  E as s,
  w as u
};
