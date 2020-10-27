import React from "react";

import styled from "styled-components";

import { Title, Description, Footer, Logo } from "../components/elements";
import { Fade, Content, HeaderStart, FooterCenter } from "../components/layers";
import GlobalFonts from "../fonts/fonts";

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }) {
  const {
    title = "SocialPreview.io",
    description = "Find out how people perceive your website",
    footer = "Preview your links on WhatsApp, Twitter, Facebook, and more!",
  } = variables;

  return (
    <>
      <GlobalFonts />
      <Fade />
      <HeaderStart>
        <Logo>FLAYYER</Logo>
      </HeaderStart>
      <Content>
        <Title>{title}</Title>
        {description && <Description>{description}</Description>}
      </Content>
      <FooterCenter>
        <Footer>{footer}</Footer>
      </FooterCenter>
    </>
  );
}
