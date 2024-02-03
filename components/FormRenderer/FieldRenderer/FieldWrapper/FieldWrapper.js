import { jsx as r, jsxs as o } from "react/jsx-runtime";
import { Wrapper as d, FieldContainer as f, FieldBox as n } from "./FieldWrapper.styles.js";
import { HelperText as x } from "./FieldWrapperHelperText.js";
import { FieldLabel as c } from "./FieldWrapperLabel.js";
import { M as h } from "../../../../Box-6fc25e2b.js";
import "./FieldWrapper.types.js";
import "../../../../styled-c6437ab8.js";
import "react";
import "../../../../clsx-f0826a09.js";
import "../../../../extendSxProp-e33cd6d1.js";
const g = ({
  children: i,
  name: t = "",
  label: e,
  messages: p = [],
  required: m = !1,
  sx: a,
  inlineDisplay: l = !1,
  showLabel: s = !0
}) => /* @__PURE__ */ r(d, { sx: a, children: /* @__PURE__ */ o(f, { inlineDisplay: l, children: [
  e && s && /* @__PURE__ */ r(c, { name: t, label: e, required: m }),
  /* @__PURE__ */ o(n, { children: [
    /* @__PURE__ */ r(h, { children: i }),
    /* @__PURE__ */ r(x, { messages: p })
  ] })
] }) });
export {
  g as FieldWrapper,
  g as default
};
