import { createContext as o, useContext as t } from "react";
const n = {
  disabled: !1,
  innerLabel: !1,
  inlineDisplay: !1,
  values: {},
  allValues: {},
  choicesCollection: {},
  getFieldProps: (e) => ({}),
  onSubmit: () => {
  }
}, r = o(n), i = () => {
  const e = t(r);
  if (!e)
    throw new Error(
      "Form compound components cannot be rendered outside the Form component"
    );
  return e;
};
export {
  r as FormContext,
  i as useFormContext
};
