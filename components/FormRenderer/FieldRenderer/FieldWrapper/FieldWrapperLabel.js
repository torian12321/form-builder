import { jsxs as e, jsx as i } from "react/jsx-runtime";
import { Label as m, LabelAsterisk as l } from "./FieldWrapper.styles.js";
import "./FieldWrapper.types.js";
import "../../../../styled-c6437ab8.js";
import "react";
const x = ({
  label: r = "",
  name: o = "",
  required: t = !1
}) => /* @__PURE__ */ e(m, { htmlFor: o, children: [
  r,
  t && /* @__PURE__ */ i(l, {})
] });
export {
  x as FieldLabel
};
