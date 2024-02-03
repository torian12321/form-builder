import { useState as c, useEffect as d } from "react";
import { applyFieldLogic as m } from "./applyLogic.js";
import { useGetFieldValues as n, useGetAllFieldValues as f } from "./getFieldValues.js";
import "../../../utils/objectUtils.js";
import "../../../utils/textUtils.js";
import "../../FormRenderer.constants.js";
const J = (u = {}, l = []) => {
  const [e, i] = c(u), F = n(e), r = f(e);
  return d(() => {
    const t = m(e, l);
    JSON.stringify(t) !== JSON.stringify(e) && i(t);
  }, [r, l]), {
    formFields: e,
    fieldValues: F,
    allFieldValues: r,
    setFormFieldValue: (t, s) => {
      i((o) => ({
        ...o,
        [t]: {
          ...o[t],
          value: s
        }
      }));
    },
    touchField: (t) => {
      var s;
      (s = e[t]) != null && s.touched || i((o) => ({
        ...o,
        [t]: {
          ...o[t],
          touched: !0
        }
      }));
    }
  };
};
export {
  J as useFormFields
};
