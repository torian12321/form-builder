import { useMemo as u } from "react";
import { INFO_FIELDS as a } from "../../FormRenderer.constants.js";
const l = (e, o) => Object.values(e).filter((t) => !a.includes(t.type)).filter((t) => o || !!(t != null && t.visible)).reduce(
  (t, s) => ({
    ...t,
    [s.name]: s.value
  }),
  {}
), r = (e) => u(() => l(e, !1), [e]), m = (e) => u(() => l(e, !0), [e]);
export {
  m as useGetAllFieldValues,
  r as useGetFieldValues
};
