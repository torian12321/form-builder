const i = (t) => typeof t == "string", a = (t) => t === "" || !t ? "" : t.split(" ").map((r) => r[0].toUpperCase() + r.substring(1)).join(" "), o = (t) => a((t == null ? void 0 : t.toLowerCase()) || ""), s = (t) => t.replace(/[A-Z]/g, (r) => `_${r.toLowerCase()}`);
export {
  s as camelToSnakeCase,
  a as capitalise,
  o as capitaliseFirstLetter,
  i as isString
};
