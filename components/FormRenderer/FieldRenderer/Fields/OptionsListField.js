import { jsx as o } from "react/jsx-runtime";
import { FIELD_TYPE as f } from "../../FormRenderer.constants.js";
import { getFieldChoices as d } from "./Fields.utils.js";
import { M as b } from "../../../../FormControlLabel-0067f876.js";
import { M as g } from "../../../../Checkbox-51fe4077.js";
import "../../../../moment-a2f61e40.js";
import "../../../utils/dateUtils.js";
import "../../../../SharedTextField-c5888703.js";
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
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
import "../../../../SwitchBase-33511e9c.js";
import "../../../../ButtonBase-b38416c5.js";
const v = (r) => r.value ? r == null ? void 0 : r.value.toString() : r.label ? r == null ? void 0 : r.label.toString() : "", H = ({
  type: r,
  name: C,
  value: i = [],
  disabled: a = !1,
  onChange: p,
  onBlur: n,
  ...e
}) => {
  if (r !== f.OPTIONS_LIST || !Array.isArray(i))
    return null;
  const s = d(e == null ? void 0 : e.properties), u = (t) => {
    const m = t.target.value;
    i.includes(m) ? p(i.filter((l) => l !== m)) : p([...i, m]);
  };
  return /* @__PURE__ */ o("div", { children: s.map((t, m) => {
    const l = v(t);
    return /* @__PURE__ */ o(
      b,
      {
        value: t.value,
        control: /* @__PURE__ */ o(
          g,
          {
            defaultChecked: i.includes(l),
            name: l,
            value: t.value,
            size: "small",
            disabled: a,
            onChange: u,
            onBlur: n
          },
          m
        ),
        label: t.label || t.value,
        disabled: t.disabled || a,
        onBlur: n
      },
      m
    );
  }) });
};
export {
  H as OptionsListField
};
