import { jsx as r } from "react/jsx-runtime";
import { FIELD_TYPE as i } from "../../FormRenderer.constants.js";
import { TextField as p } from "../Fields/TextField.js";
import { FieldWrapper as m } from "./FieldWrapper.js";
import { MESSAGE_SEVERITY as a } from "./FieldWrapper.types.js";
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
import "./FieldWrapper.styles.js";
import "./FieldWrapperHelperText.js";
import "./FieldWrapperLabel.js";
import "../../../../Box-6fc25e2b.js";
import "../../../../extendSxProp-e33cd6d1.js";
const _ = {
  title: "components/ui/FormRenderer/FieldWrapper",
  component: m
}, o = (e) => /* @__PURE__ */ r(m, { name: "field-name", label: "Field label", ...e, children: /* @__PURE__ */ r(
  p,
  {
    type: i.TEXT,
    name: "field-name",
    placeholder: "Add any field as child",
    onChange: (t) => console.log(t)
  }
) }), y = o.bind({}), n = o.bind({}), s = o.bind({});
n.args = {
  required: !0
};
s.args = {
  messages: Object.values(a).map((e) => ({
    message: `Example of ${e} message`,
    severity: e
  }))
};
export {
  y as Base,
  n as RequiredContent,
  s as WithMessages,
  _ as default
};
