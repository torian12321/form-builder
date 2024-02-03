import { h as t } from "../../../../moment-a2f61e40.js";
import { DATETIME_FORMAT as i, DATE_FORMAT as p } from "../../../utils/dateUtils.js";
import { c as s } from "../../../../SharedTextField-c5888703.js";
import "react/jsx-runtime";
import "../../../../styled-c6437ab8.js";
import "react";
import "../../../../clsx-f0826a09.js";
import "../../../../useThemeProps-7889d54e.js";
import "../../../../useFormControl-a3d8b2b6.js";
import "../../../../FormHelperText-5a47fd9c.js";
import "../../../../useTheme-f100ae81.js";
import "../../../../TransitionGroupContext-fe4c547b.js";
import "../../../../Paper-79c19457.js";
import "../../../../createSvgIcon-4c228bdf.js";
import "../../../../emotion-react.browser.esm-3aa427f2.js";
const E = (o) => {
  const { choices: r = [] } = o || {};
  return r;
}, u = (o) => t(o).format(i), m = (o) => t(o).format(p), y = () => m(t()), O = () => m(t()), R = (o) => {
  const { slotProps: r, ...e } = o;
  return {
    ...s,
    ...e
  };
};
export {
  m as formatMomentToDate,
  u as formatMomentToDateTime,
  E as getFieldChoices,
  R as getSlotPropsTextField,
  y as getTodayDate,
  O as getTodayDateTime
};
