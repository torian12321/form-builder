import { jsx as r } from "react/jsx-runtime";
import { FieldRenderer as R } from "./FieldRenderer/FieldRenderer.js";
import "./FieldRenderer/FieldWrapper/FieldWrapper.styles.js";
import { Form as g } from "./Form.js";
import { FormContext as j } from "./FormContext/FormContext.js";
import { useForm as y } from "./FormContext/useForm/useForm.js";
import { applyFieldLogic as C } from "./FormContext/useForm/applyLogic.js";
import { setInitialFormFields as I } from "./setInitialFormFields.js";
import "react";
import "./FormRenderer.constants.js";
import "./FieldRenderer/FieldWrapper/FieldWrapper.js";
import "./FieldRenderer/FieldWrapper/FieldWrapperHelperText.js";
import "./FieldRenderer/FieldWrapper/FieldWrapperLabel.js";
import "../../Box-6fc25e2b.js";
import "../../styled-c6437ab8.js";
import "../../clsx-f0826a09.js";
import "../../extendSxProp-e33cd6d1.js";
import "./FieldRenderer/FieldRenderer.utils.js";
import "./FieldRenderer/Fields/BooleanField.js";
import "../../Checkbox-51fe4077.js";
import "../../SwitchBase-33511e9c.js";
import "../../useFormControl-a3d8b2b6.js";
import "../../useThemeProps-7889d54e.js";
import "../../ButtonBase-b38416c5.js";
import "../../emotion-react.browser.esm-3aa427f2.js";
import "../../TransitionGroupContext-fe4c547b.js";
import "../../createSvgIcon-4c228bdf.js";
import "./FieldRenderer/Fields/DateField.js";
import "../../moment-a2f61e40.js";
import "./FieldRenderer/Fields/Fields.utils.js";
import "../utils/dateUtils.js";
import "../../SharedTextField-c5888703.js";
import "../../FormHelperText-5a47fd9c.js";
import "../../useTheme-f100ae81.js";
import "../../Paper-79c19457.js";
import "../../dateViewRenderers-bf92a99d.js";
import "../../Typography-cd3e79a2.js";
import "../../Chip-f92e5f00.js";
import "../../unsupportedProp-3dbf01f6.js";
import "../../IconButton-cb9cf13b.js";
import "../../Button-1104b2f9.js";
import "./FieldRenderer/Fields/DateTimeField.js";
import "./FieldRenderer/Fields/DropdownField.js";
import "../../Fields.styles-a09d0a4e.js";
import "../../CircularProgress-692b550b.js";
import "../../Close-ad39bb4a.js";
import "./FieldRenderer/Fields/FileInput/FileInput.js";
import "../../createSvgIcon-8609ef4a.js";
import "../LoadingBar/LoadingBar.js";
import "./FieldRenderer/Fields/FileInput/FileInput.styles.js";
import "./FieldRenderer/Fields/InfoList.js";
import "./FieldRenderer/Fields/InfoMessage.js";
import "./FieldRenderer/Fields/LongTextField.js";
import "./FieldRenderer/Fields/NumericField.js";
import "./FieldRenderer/Fields/OptionsListField.js";
import "../../FormControlLabel-0067f876.js";
import "./FieldRenderer/Fields/RadioGroupField.js";
import "./FieldRenderer/Fields/TextField.js";
import "./FieldRenderer/useGetChoices.js";
import "./FieldRenderer/useValidateOptionSelected.js";
import "./FieldRenderer/FieldWrapper/FieldWrapper.types.js";
import "./FormContext/useForm/useFormFields.js";
import "./FormContext/useForm/getFieldValues.js";
import "./FormContext/useForm/useFormMessages.js";
import "./FormContext/useForm/validateField.js";
import "../utils/textUtils.js";
import "../utils/objectUtils.js";
const Jr = ({
  id: m,
  fields: o = [],
  logic: i = [],
  disabled: p = !1,
  defaultValues: e = {},
  validateAfterSubmit: l = !0,
  sxForm: s,
  sxFields: d,
  sxFieldsByName: n = {},
  sxFieldsByType: f = {},
  innerLabel: F = !1,
  inlineDisplay: a = !1,
  choicesCollection: c = {},
  onSubmit: u = () => {
  },
  onChange: v = () => {
  }
}) => {
  const x = I(o, e), h = C(x, i), L = y({
    fields: h,
    logic: i,
    validateAfterSubmit: l,
    onSubmit: u
  });
  return /* @__PURE__ */ r(
    j.Provider,
    {
      value: {
        innerLabel: F,
        inlineDisplay: a,
        choicesCollection: c,
        ...L
      },
      children: /* @__PURE__ */ r(g, { id: m, sx: s, disabled: p, onChange: v, children: o.map(({ name: t }) => /* @__PURE__ */ r(
        R,
        {
          name: t,
          sxFields: d,
          sxFieldsByName: n,
          sxFieldsByType: f
        },
        t
      )) })
    }
  );
};
export {
  Jr as FormRenderer
};
