import { getTodayDateTime as d, getTodayDate as u } from "./FieldRenderer/Fields/Fields.utils.js";
import { emptyFieldValues as T, FIELD_TYPE as i } from "./FormRenderer.constants.js";
import "../../moment-a2f61e40.js";
import "../utils/dateUtils.js";
import "../../SharedTextField-c5888703.js";
import "react/jsx-runtime";
import "../../styled-c6437ab8.js";
import "react";
import "../../clsx-f0826a09.js";
import "../../useThemeProps-7889d54e.js";
import "../../useFormControl-a3d8b2b6.js";
import "../../FormHelperText-5a47fd9c.js";
import "../../useTheme-f100ae81.js";
import "../../TransitionGroupContext-fe4c547b.js";
import "../../Paper-79c19457.js";
import "../../createSvgIcon-4c228bdf.js";
import "../../emotion-react.browser.esm-3aa427f2.js";
const x = (a, p = {}) => a.reduce((s, o) => {
  const { type: e, name: r, defaultValue: l = void 0, properties: c = {} } = o;
  let t = p[r] || l;
  if (!t)
    switch (e) {
      case i.RADIO_BUTTON: {
        const { choices: m = [] } = c;
        t = m.length ? m[0].value : void 0;
        break;
      }
      default:
        t = T[e];
        break;
    }
  if (t === "today")
    switch (e) {
      case i.DATE:
        t = u();
        break;
      case i.DATE_TIME:
        t = d();
        break;
    }
  return {
    ...s,
    [r]: {
      ...o,
      value: t,
      messages: [],
      visible: !0,
      isValid: !0,
      touched: !1
    }
  };
}, {});
export {
  x as setInitialFormFields
};
