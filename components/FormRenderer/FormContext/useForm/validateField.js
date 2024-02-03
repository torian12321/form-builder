import { capitaliseFirstLetter as E } from "../../../utils/textUtils.js";
import "react/jsx-runtime";
import "react";
import "../FormContext.js";
import { FIELD_TYPE as o } from "../../FormRenderer.constants.js";
import "../../FieldRenderer/FieldWrapper/FieldWrapper.styles.js";
import { MESSAGE_SEVERITY as g } from "../../FieldRenderer/FieldWrapper/FieldWrapper.types.js";
import "../../../../moment-a2f61e40.js";
import "../../../../Fields.styles-a09d0a4e.js";
import "../../FieldRenderer/Fields/FileInput/FileInput.styles.js";
import "../../../../styled-c6437ab8.js";
import "../../../../clsx-f0826a09.js";
import "../../../../useThemeProps-7889d54e.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
const d = (t) => {
  const { label: i, type: e } = t, a = E(i);
  let r = "Please make a selection";
  if (a.trim() !== "")
    switch (e) {
      case o.DROPDOWN:
      case o.OPTIONS_LIST:
      case o.RADIO_BUTTON:
        r = `Select a valid ${a}`;
        break;
      case o.TEXT:
      default:
        r = `Please enter a ${a}`;
        break;
    }
  else
    e === o.FILE_UPLOAD && (r = "Select a valid File");
  return r;
}, f = (t) => Array.isArray(t) && !t.length, M = (t) => {
  const i = [], { value: e, validations: a = {} } = t, {
    required: r = !1,
    min_length: m,
    max_length: l,
    min: n,
    max: p
  } = a, s = (c) => {
    i.push({
      message: c,
      severity: g.ERROR
    });
  };
  return r && (!e || f(e)) && s(d(t)), m && e.length < m && s(`Min characters: ${m}`), l && e.length > l && s(`Max characters: ${l}`), n && e < n && s(`Please enter a number bigger than ${n}`), p && e > p && s(`Please enter a number smaller than ${p}`), {
    messages: i,
    isValid: !i.some(
      (c) => c.severity === g.ERROR
    )
  };
};
export {
  M as validateField
};
