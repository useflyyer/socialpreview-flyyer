import React from "react";

// import styled from "styled-components";

import { Title, Description, Footer, Logo } from "../components/elements";
import { Fade, Content, HeaderStart, FooterCenter } from "../components/layers";
import GlobalFonts from "../fonts/fonts";

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }) {
  const {
    title = "SocialPreview.io",
    description = "Find out how people perceive your website",
    footer = "Preview your links on WhatsApp, Twitter, Facebook, and more!",
    simplify = false,
  } = variables;

  return (
    <>
      <GlobalFonts />
      {!simplify && <Fade />}
      <HeaderStart>
        <Logo>FLAYYER</Logo>
      </HeaderStart>
      <Content>
        <Title simplify={simplify}>{title}</Title>
        {description && <Description simplify={simplify}>{description}</Description>}
      </Content>
      <FooterCenter>
        <Footer simplify={simplify}>{footer}</Footer>
      </FooterCenter>
    </>
  );
}
