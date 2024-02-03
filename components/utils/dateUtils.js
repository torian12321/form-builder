import { h as o } from "../../moment-a2f61e40.js";
const n = "MM/DD/YYYY", r = "YYYY-MM-DDTHH:mm:ss", e = "YYYY-MM-DD", Y = (t) => t ? o(t, [e, r]).format(
  n
) : "", a = (t) => t ? o.utc(t).format(n) : "", f = (t) => t && t !== "Invalid Date" && t !== "null" ? o(t, [
  `${r}.SSSZ`,
  "ddd MMM DD YYYY HH:mm:ss"
]) : o(/* @__PURE__ */ new Date()), u = (t) => t && t !== "Invalid Date" && t !== "null" ? o(t, [e, "ddd MMM DD YYYY"]) : o(/* @__PURE__ */ new Date()), M = (t = e) => o().format(t).toString(), c = (t = r) => o().format(t).toString(), T = () => (/* @__PURE__ */ new Date()).getFullYear(), l = (t) => {
  if (!t)
    return "";
  const m = o(t, [
    e,
    r
  ]).format("HH:mm");
  if (o([m]).isDST())
    return m;
  {
    const s = o.duration({ hours: 1 });
    return o(t, [e, r]).add(s).format("HH:mm");
  }
};
export {
  r as DATETIME_FORMAT,
  e as DATE_FORMAT,
  n as US_DATE_FORMAT,
  u as formatDate,
  f as formatDateTime,
  Y as formatDateUs,
  a as formatDateUsUtc,
  l as formatTime,
  T as getCurrentYear,
  M as getDateNow,
  c as getDateTimeNow
};
