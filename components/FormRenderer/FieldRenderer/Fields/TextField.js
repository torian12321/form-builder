import { jsx as T } from "react/jsx-runtime";
import { FIELD_TYPE as n } from "../../FormRenderer.constants.js";
import { S as s } from "../../../../SharedTextField-c5888703.js";
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
const X = ({
  type: r,
  name: t,
  value: o,
  label: i,
  disabled: m = !1,
  placeholder: p = "",
  onChange: e,
  onBlur: f,
  error: l
}) => r !== n.TEXT ? null : /* @__PURE__ */ T(
  s,
  {
    name: t,
    label: i,
    value: o,
    placeholder: p,
    disabled: m,
    error: l,
    onChange: e,
    onBlur: f
  }
);
export {
  X as TextField
};
