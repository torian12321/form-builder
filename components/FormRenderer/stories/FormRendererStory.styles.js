import { s as o } from "../../../styled-c6437ab8.js";
import "react";
const n = o("pre")(({ theme: i }) => ({
  fontSize: i.typography.pxToRem(12),
  lineHeight: 1.2
})), s = o("div")(({ theme: i }) => ({
  width: "100%",
  display: "flex",
  flexDirection: "row",
  gap: i.spacing(3.5),
  "& > *": {
    minWidth: "200px",
    maxWidth: "840px",
    flexGrow: 1
  }
})), l = {
  width: "50%"
}, d = {
  display: "inline-block"
}, p = {
  width: "25%",
  display: "inline-block",
  "& > div": {
    flexDirection: "row",
    alignItems: "center"
  },
  ".MuiCheckbox-root": {
    padding: 0
  }
};
export {
  n as SBCode,
  s as SBTabBody,
  l as stylesHalfRow,
  d as stylesInlined,
  p as stylesLastRow
};
