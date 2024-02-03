import { jsx as l } from "react/jsx-runtime";
import { FIELD_TYPE as d } from "../../FormRenderer.constants.js";
import { S as f } from "../../../../SharedTextField-c5888703.js";
import "../../../../styled-c6437ab8.js";
import "react";
import "../../../../clsx-f0826a09.js";
import "../../../../useThemeProps-7889d54e.js";
import "../../../../useFormControl-a3d8b2b6.js";
import "../../../../FormHelperText-5a47fd9c.js";
import "../../../../useTheme-f100ae81.js";
import "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../Paper-79c19457.js";
import "../../../../createSvgIcon-4c228bdf.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
const B = ({
  type: o,
  name: e,
  value: p,
  label: m,
  disabled: n = !1,
  placeholder: s = "",
  onChange: r,
  onBlur: a,
  error: u
}) => o !== d.NUMBER ? null : /* @__PURE__ */ l(
  f,
  {
    name: e,
    type: "number",
    inputProps: { step: "1", inputMode: "numeric", pattern: "[0-9]*" },
    label: m,
    value: p,
    placeholder: s,
    disabled: n,
    error: u,
    onChange: (t) => {
      const i = parseFloat(t);
      r && !isNaN(i) ? r(i) : t || r(void 0);
    },
    onBlur: a
  }
);
export {
  B as NumericField
};
