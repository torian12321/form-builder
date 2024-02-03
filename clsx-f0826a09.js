import * as s from "react";
import { m as u, n as f } from "./styled-c6437ab8.js";
function a(t) {
  return Object.keys(t).length === 0;
}
function m(t = null) {
  const e = s.useContext(u);
  return !e || a(e) ? t : e;
}
const c = f();
function h(t = c) {
  return m(t);
}
function o(t) {
  var e, n, r = "";
  if (typeof t == "string" || typeof t == "number")
    r += t;
  else if (typeof t == "object")
    if (Array.isArray(t))
      for (e = 0; e < t.length; e++)
        t[e] && (n = o(t[e])) && (r && (r += " "), r += n);
    else
      for (e in t)
        t[e] && (r && (r += " "), r += e);
  return r;
}
function l() {
  for (var t, e, n = 0, r = ""; n < arguments.length; )
    (t = arguments[n++]) && (e = o(t)) && (r && (r += " "), r += e);
  return r;
}
export {
  m as a,
  l as c,
  h as u
};
