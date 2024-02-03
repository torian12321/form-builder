import { jsx as a } from "react/jsx-runtime";
import { FIELD_TYPE as l } from "../../FormRenderer.constants.js";
import { M as c } from "../../../../Checkbox-51fe4077.js";
import "../../../../styled-c6437ab8.js";
import "react";
import "../../../../clsx-f0826a09.js";
import "../../../../SwitchBase-33511e9c.js";
import "../../../../useFormControl-a3d8b2b6.js";
import "../../../../useThemeProps-7889d54e.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../createSvgIcon-4c228bdf.js";
const M = ({
  type: t,
  name: o,
  value: r = !1,
  disabled: e = !1,
  onBlur: i,
  onChange: m
}) => t !== l.BOOLEAN ? null : /* @__PURE__ */ a(
  c,
  {
    id: o,
    name: o,
    value: r,
    checked: r,
    disabled: e,
    onChange: (n) => {
      const p = n.target.checked || !1;
      m(p);
    },
    onBlur: i
  }
);
export {
  M as BooleanField
};
