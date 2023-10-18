import type { PropsWithChildren } from "react";
import Toolbar from "@mui/material/Toolbar";
import { Wrapper } from "./Body.styles";

export const Body = ({ children }: PropsWithChildren) => (
  <Wrapper>
    <Toolbar />
    {children}
  </Wrapper>
);
