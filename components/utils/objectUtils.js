const a = (r) => typeof r == "object" && !Array.isArray(r) && r !== null, l = (r) => {
  for (const t in r)
    if (Object.hasOwn(r, t))
      return !1;
  return !0;
}, o = (r, t) => {
  t = t.replace(/\[(\w+)\]/g, ".$1"), t = t.replace(/^\./, "");
  const s = t.split(".");
  for (let e = 0, c = s.length; e < c; ++e) {
    const n = s[e];
    if (n in r)
      r = r[n];
    else
      return;
  }
  return r;
}, i = (...r) => r.reduce((t, s) => (Object.keys(s).forEach((e) => {
  const c = t[e], n = s[e];
  Array.isArray(c) && Array.isArray(n) ? t[e] = c.concat(...n) : a(c) && a(n) ? t[e] = i(c, n) : t[e] = n;
}), t), {});
export {
  o as get,
  l as isEmpty,
  a as isObject,
  i as mergeDeep
};
