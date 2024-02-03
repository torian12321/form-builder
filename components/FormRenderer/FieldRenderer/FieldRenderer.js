import { jsx as r } from "react/jsx-runtime";
import { useMemo as S } from "react";
import { useFormContext as x } from "../FormContext/FormContext.js";
import { FIELD_TYPE as i } from "../FormRenderer.constants.js";
import { FieldWrapper as A } from "./FieldWrapper/FieldWrapper.js";
import { isInfoField as B, isFieldWithLabel as R } from "./FieldRenderer.utils.js";
import { BooleanField as M } from "./Fields/BooleanField.js";
import { DateField as P } from "./Fields/DateField.js";
import { DateTimeField as q } from "./Fields/DateTimeField.js";
import { DropdownField as v } from "./Fields/DropdownField.js";
import { FileInput as w } from "./Fields/FileInput/FileInput.js";
import { InfoList as G } from "./Fields/InfoList.js";
import { InfoMessage as y } from "./Fields/InfoMessage.js";
import { LongTextField as C } from "./Fields/LongTextField.js";
import { NumericField as U } from "./Fields/NumericField.js";
import { OptionsListField as V } from "./Fields/OptionsListField.js";
import { RadioGroup as W } from "./Fields/RadioGroupField.js";
import { TextField as X } from "./Fields/TextField.js";
import { useGetChoices as j } from "./useGetChoices.js";
import { useValidateOptionSelected as Y } from "./useValidateOptionSelected.js";
import "./FieldWrapper/FieldWrapper.styles.js";
import "./FieldWrapper/FieldWrapper.types.js";
import "../../../styled-c6437ab8.js";
import "./FieldWrapper/FieldWrapperHelperText.js";
import "./FieldWrapper/FieldWrapperLabel.js";
import "../../../Box-6fc25e2b.js";
import "../../../clsx-f0826a09.js";
import "../../../extendSxProp-e33cd6d1.js";
import "../../../Checkbox-51fe4077.js";
import "../../../SwitchBase-33511e9c.js";
import "../../../useFormControl-a3d8b2b6.js";
import "../../../useThemeProps-7889d54e.js";
import "../../../ButtonBase-b38416c5.js";
import "../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../TransitionGroupContext-fe4c547b.js";
import "../../../createSvgIcon-4c228bdf.js";
import "../../../moment-a2f61e40.js";
import "./Fields/Fields.utils.js";
import "../../utils/dateUtils.js";
import "../../../SharedTextField-c5888703.js";
import "../../../FormHelperText-5a47fd9c.js";
import "../../../useTheme-f100ae81.js";
import "../../../Paper-79c19457.js";
import "../../../dateViewRenderers-bf92a99d.js";
import "../../../Typography-cd3e79a2.js";
import "../../../Chip-f92e5f00.js";
import "../../../unsupportedProp-3dbf01f6.js";
import "../../../IconButton-cb9cf13b.js";
import "../../../Button-1104b2f9.js";
import "../../../Fields.styles-a09d0a4e.js";
import "../../../CircularProgress-692b550b.js";
import "../../../Close-ad39bb4a.js";
import "../../../createSvgIcon-8609ef4a.js";
import "../../LoadingBar/LoadingBar.js";
import "./Fields/FileInput/FileInput.styles.js";
import "../../../FormControlLabel-0067f876.js";
const Hr = ({
  name: e,
  sxFields: a = {},
  sxFieldsByType: u = {},
  sxFieldsByName: c = {}
}) => {
  Y(e);
  const { choices: f = [], isLoading: p = !1 } = j(e), { getFieldProps: F, innerLabel: s, inlineDisplay: m } = x(), {
    type: t,
    value: T,
    label: l,
    messages: L,
    placeholder: I,
    disabled: O,
    isValid: E = !0,
    visible: D = !0,
    validations: b = {},
    onBlur: h,
    setValue: N
  } = F(e), n = !!b.required, d = S(
    () => B(t) || !m && s && !R(t),
    [m, s, t]
  );
  if (!D)
    return null;
  const o = {
    type: t,
    name: e,
    value: T,
    placeholder: I,
    label: d ? l : void 0,
    onBlur: h,
    onChange: N,
    loading: p,
    disabled: O || p,
    error: !E,
    required: n,
    properties: {
      choices: f
    }
  }, _ = () => {
    switch (t) {
      case i.FILE_UPLOAD:
        return /* @__PURE__ */ r(w, { ...o });
      case i.BOOLEAN:
        return /* @__PURE__ */ r(M, { ...o });
      case i.DATE:
        return /* @__PURE__ */ r(P, { ...o });
      case i.DATE_TIME:
        return /* @__PURE__ */ r(q, { ...o });
      case i.NUMBER:
        return /* @__PURE__ */ r(U, { ...o });
      case i.RADIO_BUTTON:
        return /* @__PURE__ */ r(W, { ...o });
      case i.LONG_TEXT:
        return /* @__PURE__ */ r(C, { ...o });
      case i.DROPDOWN:
        return /* @__PURE__ */ r(v, { ...o });
      case i.OPTIONS_LIST:
        return /* @__PURE__ */ r(V, { ...o });
      case i.INFO_MESSAGE:
        return /* @__PURE__ */ r(y, { ...o });
      case i.INFO_LIST:
        return /* @__PURE__ */ r(G, { ...o });
      case i.TEXT:
      default:
        return /* @__PURE__ */ r(X, { ...o });
    }
  }, g = {
    ...a,
    ...c[e] || {},
    ...u[t] || {}
  };
  return /* @__PURE__ */ r(
    A,
    {
      sx: g,
      name: e,
      label: l,
      required: n,
      messages: L,
      showLabel: !d,
      inlineDisplay: m,
      children: _()
    }
  );
};
export {
  Hr as FieldRenderer
};
