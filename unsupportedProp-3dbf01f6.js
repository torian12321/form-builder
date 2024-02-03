function p(n, e, t, u, o) {
  if (process.env.NODE_ENV === "production")
    return null;
  const r = o || e;
  return typeof n[e] < "u" ? new Error(`The prop \`${r}\` is not supported. Please remove it.`) : null;
}
export {
  p as u
};
