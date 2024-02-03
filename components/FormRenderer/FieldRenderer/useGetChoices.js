import { useFormContext as c } from "../FormContext/FormContext.js";
import "react";
import "react/jsx-runtime";
import "./FieldWrapper/FieldWrapper.styles.js";
import "../../../moment-a2f61e40.js";
import "../../../Fields.styles-a09d0a4e.js";
import "./Fields/FileInput/FileInput.styles.js";
import "./FieldWrapper/FieldWrapper.types.js";
import "../../../styled-c6437ab8.js";
import "../../../clsx-f0826a09.js";
import "../../../useThemeProps-7889d54e.js";
import "../../../ButtonBase-b38416c5.js";
import "../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../TransitionGroupContext-fe4c547b.js";
import "../../../Typography-cd3e79a2.js";
import "../../../extendSxProp-e33cd6d1.js";
const w = (i) => {
  const { getFieldProps: r, choicesCollection: t = {} } = c(), { properties: e = {} } = r(i), { choices: p = [], choicesRef: o } = e;
  return o && !t[o] && console.warn(
    `Collection '${o}' not provided, please add it to 'choicesCollection' object.`
  ), t[o] || {
    isLoading: !1,
    choices: p
  };
};
export {
  w as useGetChoices
};
