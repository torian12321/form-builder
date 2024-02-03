import { c as h, e as T, _ as N, a as B, f as y, T as _, C, P as e } from "./styled-c6437ab8.js";
import * as P from "react";
import { u as M, c as b } from "./clsx-f0826a09.js";
import { jsx as j } from "react/jsx-runtime";
import { e as v } from "./extendSxProp-e33cd6d1.js";
const E = ["className", "component"];
function O(m = {}) {
  const {
    themeId: s,
    defaultTheme: d,
    defaultClassName: a = "MuiBox-root",
    generateClassName: r
  } = m, x = h("div", {
    shouldForwardProp: (o) => o !== "theme" && o !== "sx" && o !== "as"
  })(T);
  return /* @__PURE__ */ P.forwardRef(function(f, l) {
    const t = M(d), n = v(f), {
      className: u,
      component: p = "div"
    } = n, i = N(n, E);
    return /* @__PURE__ */ j(x, B({
      as: p,
      ref: l,
      className: b(u, r ? r(a) : a),
      theme: s && t[s] || t
    }, i));
  });
}
const g = y(), c = O({
  themeId: _,
  defaultTheme: g,
  defaultClassName: "MuiBox-root",
  generateClassName: C.generate
});
process.env.NODE_ENV !== "production" && (c.propTypes = {
  // ----------------------------- Warning --------------------------------
  // | These PropTypes are generated from the TypeScript type definitions |
  // |     To update them edit the d.ts file and run "yarn proptypes"     |
  // ----------------------------------------------------------------------
  /**
   * @ignore
   */
  children: e.node,
  /**
   * The component used for the root node.
   * Either a string to use a HTML element or a component.
   */
  component: e.elementType,
  /**
   * The system prop that allows defining system overrides as well as additional CSS styles.
   */
  sx: e.oneOfType([e.arrayOf(e.oneOfType([e.func, e.object, e.bool])), e.func, e.object])
});
const F = c;
export {
  F as M
};
