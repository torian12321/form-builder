import { useState as B } from "react";
import { useFormFields as O } from "./useFormFields.js";
import { useFormValidate as P } from "./useFormMessages.js";
import "./applyLogic.js";
import "../../../utils/objectUtils.js";
import "../../../utils/textUtils.js";
import "../../FormRenderer.constants.js";
import "./getFieldValues.js";
import "./validateField.js";
import "react/jsx-runtime";
import "../FormContext.js";
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
const Z = ({
  fields: a = {},
  logic: n = [],
  validateAfterSubmit: p = !0,
  onSubmit: u = () => {
  }
}) => {
  const {
    formFields: i,
    fieldValues: r,
    allFieldValues: s,
    touchField: d,
    setFormFieldValue: F
  } = O(a, n), [c, V] = B(!1), { validations: l, validateFormField: v, getFieldValidations: g } = P(i), b = () => {
    V(!0);
    const o = Object.values(i).filter((t) => t.visible).filter(
      (t) => l[t.name] && !l[t.name].isValid
    ).map((t) => t.name);
    u({
      values: r,
      allValues: s,
      isValid: o.length === 0,
      invalidFields: o
    });
  }, h = (o) => {
    const t = i[o];
    v(t), d(o);
  }, S = (o) => {
    const t = i[o], { messages: f, isValid: e } = g(o), m = (t == null ? void 0 : t.touched) && !p && !e || c && !e;
    return {
      ...t,
      value: r[o],
      isValid: m ? e : !0,
      messages: m ? f : []
    };
  };
  return {
    values: r,
    allValues: s,
    getFieldProps: (o) => ({
      ...S(o),
      onBlur: () => h(o),
      setValue: (t) => F(o, t)
    }),
    onSubmit: b
  };
};
export {
  Z as useForm
};
