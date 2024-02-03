import { useEffect as l } from "react";
import { useFormContext as f } from "../FormContext/FormContext.js";
import { emptyFieldValues as a } from "../FormRenderer.constants.js";
import "react/jsx-runtime";
import { isFieldWithOptions as u } from "./FieldRenderer.utils.js";
import "./FieldWrapper/FieldWrapper.styles.js";
import "../../../moment-a2f61e40.js";
import "../../../Fields.styles-a09d0a4e.js";
import "./Fields/FileInput/FileInput.styles.js";
import { useGetChoices as d } from "./useGetChoices.js";
import "./FieldWrapper/FieldWrapper.types.js";
import "../../../styled-c6437ab8.js";
import "../../../clsx-f0826a09.js";
import "../../../useThemeProps-7889d54e.js";
import "../../../ButtonBase-b38416c5.js";
import "../../../emotion-react.browser.esm-3aa427f2.js";
import "../../../TransitionGroupContext-fe4c547b.js";
import "../../../Typography-cd3e79a2.js";
import "../../../extendSxProp-e33cd6d1.js";
const k = (r) => {
  const { choices: i = [], isLoading: p = !1 } = d(r), { getFieldProps: n } = f(), { type: e, value: t, setValue: m } = n(r);
  l(() => {
    if (!p && t && u(e))
      if (!Array.isArray(t))
        i.find((o) => o.value === t) || m(a[e]);
      else {
        const s = i.filter((o) => t.includes(o == null ? void 0 : o.value));
        m(s);
      }
  }, [p, i]);
};
export {
  k as useValidateOptionSelected
};
