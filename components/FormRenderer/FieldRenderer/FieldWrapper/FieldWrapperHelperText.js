import { jsx as p } from "react/jsx-runtime";
import { HelperTextWrapper as n, HelperMessage as a } from "./FieldWrapper.styles.js";
import "./FieldWrapper.types.js";
import "../../../../styled-c6437ab8.js";
import "react";
const d = ({
  messages: e = []
}) => {
  const r = e.length > 0;
  return /* @__PURE__ */ p(n, { isOpen: r, "aria-hidden": !r, children: e.map(({ message: o, severity: t }, i) => /* @__PURE__ */ p(a, { severity: t, children: o }, i)) });
};
export {
  d as HelperText
};
