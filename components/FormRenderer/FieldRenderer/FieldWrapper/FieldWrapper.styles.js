import { MESSAGE_SEVERITY as o } from "./FieldWrapper.types.js";
import { s as t } from "../../../../styled-c6437ab8.js";
import "react";
const d = t("div")(({ theme: i }) => ({
  display: "block",
  width: "100%",
  padding: i.spacing(1),
  boxSizing: "border-box"
})), c = t("div", {
  shouldForwardProp: (i) => !["inlineDisplay"].includes(i)
})(({ theme: i, inlineDisplay: e = !1 }) => ({
  display: "flex",
  flexDirection: "column",
  padding: 0,
  ...e && {
    flexDirection: "row",
    Label: {
      minWidth: "140px",
      maxWidth: "240px",
      width: "20%",
      lineHeight: 1.2,
      paddingTop: i.spacing(1)
    }
  }
})), r = 600, g = t("ul", {
  shouldForwardProp: (i) => !["isOpen"].includes(i)
})(({ theme: i, isOpen: e = !1 }) => ({
  listStyle: "none",
  padding: 0,
  margin: `0 ${i.spacing(0.5)}`,
  // Fade-in animation styles
  maxHeight: 0,
  overflow: "hidden",
  boxSizing: "border-box",
  transition: `max-height ${r / 1e3}s ease-in-out`,
  ...e && {
    maxHeight: 100
  }
})), n = (i, e) => ({
  [o.SUCCESS]: i.palette.success.dark,
  [o.INFO]: i.palette.info.dark,
  [o.WARNING]: i.palette.warning.main,
  [o.ERROR]: i.palette.error.main,
  [o.DEFAULT]: i.palette.text.secondary
})[e || o.DEFAULT], x = t("li", {
  shouldForwardProp: (i) => i !== "severity"
})(({ theme: i, severity: e }) => ({
  fontSize: "12px",
  margin: `${i.spacing(0.5)} ${i.spacing(1.5)} 0`,
  color: n(i, e),
  "&:first-letter": {
    textTransform: "uppercase"
  }
})), f = t("div")({
  position: "relative",
  display: "flex",
  flexDirection: "column",
  flexGrow: 1,
  padding: 0,
  margin: 0
}), m = t("label")(({ theme: i }) => ({
  marginRight: i.spacing(1.5),
  marginBottom: "2px",
  color: i.palette.text.secondary,
  fontWeight: "bold",
  textTransform: "uppercase",
  lineHeight: 1,
  textAlign: "start"
})), u = t("span")(({ theme: i }) => ({
  color: i.palette.error.main,
  marginLeft: i.spacing(0.5),
  "&:after": {
    content: '"*"'
  }
}));
export {
  r as FADE_IN_DELAY,
  f as FieldBox,
  c as FieldContainer,
  x as HelperMessage,
  g as HelperTextWrapper,
  m as Label,
  u as LabelAsterisk,
  d as Wrapper
};
