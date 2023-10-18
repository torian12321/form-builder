import type { PropsWithChildren } from "react";
import { Header } from "./Header";
import { SideBar } from "./SideBar";
import { Body } from "./Body";
import { Wrapper, Content } from "./Layout.styles";

export const ResponsiveDrawer = ({ children }: PropsWithChildren) => (
  <Wrapper>
    <SideBar />
    <Content>
      <Header />
      <Body>{children}</Body>
    </Content>
  </Wrapper>
);
