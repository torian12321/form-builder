import { useState as e } from "react";
import { validateField as m } from "./validateField.js";
import "../../../utils/textUtils.js";
import "react/jsx-runtime";
import "../FormContext.js";
import "../../FormRenderer.constants.js";
import "../../FieldRenderer/FieldWrapper/FieldWrapper.styles.js";
import "../../FieldRenderer/FieldWrapper/FieldWrapper.types.js";
import "../../../../styled-c6437ab8.js";
import "../../../../moment-a2f61e40.js";
import "../../../../Fields.styles-a09d0a4e.js";
import "../../../../clsx-f0826a09.js";
import "../../../../useThemeProps-7889d54e.js";
import "../../../../ButtonBase-b38416c5.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../Typography-cd3e79a2.js";
import "../../../../extendSxProp-e33cd6d1.js";
import "../../FieldRenderer/Fields/FileInput/FileInput.styles.js";
const p = (r) => Object.values(r).reduce(
  (t, i) => ({
    ...t,
    [i.name]: m(i)
  }),
  {}
), y = (r) => {
  const [t, i] = e(
    p(r)
  );
  return {
    validations: t,
    getFieldValidations: (o) => t[o] || [],
    validateFormField: (o) => {
      i((a) => ({
        ...a,
        [o.name]: m(o)
      }));
    }
  };
};
export {
  y as useFormValidate
};
