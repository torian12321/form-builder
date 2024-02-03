import { jsx as r } from "react/jsx-runtime";
import { useEffect as a } from "react";
import { useFormContext as u } from "./FormContext/FormContext.js";
import "./FieldRenderer/FieldWrapper/FieldWrapper.styles.js";
import "../../moment-a2f61e40.js";
import "../../Fields.styles-a09d0a4e.js";
import "./FieldRenderer/Fields/FileInput/FileInput.styles.js";
import { s as d } from "../../styled-c6437ab8.js";
import { M as l } from "../../Box-6fc25e2b.js";
import "./FieldRenderer/FieldWrapper/FieldWrapper.types.js";
import "../../clsx-f0826a09.js";
import "../../useThemeProps-7889d54e.js";
import "../../ButtonBase-b38416c5.js";
import "../../emotion-react.browser.esm-3aa427f2.js";
import "../../TransitionGroupContext-fe4c547b.js";
import "../../Typography-cd3e79a2.js";
import "../../extendSxProp-e33cd6d1.js";
const c = d("fieldset")({
  padding: 0,
  border: 0,
  margin: 0,
  background: "transparent"
}), w = ({
  children: m,
  id: i,
  sx: e,
  disabled: p = !1,
  onChange: t
}) => {
  const { onSubmit: n, values: o } = u(), s = (f) => {
    f.preventDefault(), n();
  };
  return a(() => {
    t && t({
      values: o
    });
  }, [o, t]), /* @__PURE__ */ r(
    l,
    {
      component: "form",
      autoComplete: "off",
      noValidate: !0,
      id: i,
      sx: e,
      onSubmit: s,
      children: /* @__PURE__ */ r(c, { disabled: p, children: m })
    }
  );
};
export {
  w as Form
};
