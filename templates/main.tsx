import React from "react";

import { TemplateProps } from "@flayyer/flayyer-types";
import styled from "styled-components";

import { Title, Description, Logo } from "../components/elements";
import { Content, Layer } from "../components/layers";
import GlobalFonts from "../fonts/fonts";
import logo from "../static/logo.png";
import waves from "../static/waves.svg";

export const Background = styled(Layer)`
  background-image: url(${waves});
  background-color: white;
  background-position: center top;
  background-repeat: no-repeat;
  background-size: 100% 100%;
`;

export const Header = styled(Layer)`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 1em;
`;

export const Page = styled(Layer)`
  top: unset;
  bottom: -10px;
  /* height: 35vh; */
  margin: 0 260px;
  border-radius: 8px;
  background: #ffffff;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.12), 0 2px 2px rgba(0, 0, 0, 0.12), 0 4px 4px rgba(0, 0, 0, 0.12),
    0 8px 8px rgba(0, 0, 0, 0.12), 0 16px 16px rgba(0, 0, 0, 0.12);

  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: stretch;
`;

const Button = styled.button`
  background-color: #2427ca;
  border-color: transparent;
  border-radius: 8px;
  border: 1px solid transparent;

  color: #fff;
  font-family: "IBM Plex Sans", sans-serif;
  font-size: 2.8em;
  font-weight: 600;
  text-align: center;
  white-space: nowrap;
  border-width: 1px;

  justify-content: center;
  padding: calc(0.5em - 1px) 0.9em;
  margin: 3rem;
  align-items: center;
  box-shadow: none;
`;

type Variables = {
  title: string;
  description: string;
  footer: string;
};

// Make sure to 'export default' a React component
export default function MainTemplate({ agent, variables }: TemplateProps<Variables>) {
  const {
    title = "SocialPreview.io",
    description = "How does your website looks like from the outside?",
    footer = "Try it for free",
  } = variables;

  if (agent.name === "whatsapp") {
    return (
      <Background>
        <img style={{ width: "100%", height: "100%" }} src={logo} />
      </Background>
    );
  }

  return (
    <Background>
      <GlobalFonts />

      <Header>
        <Logo>FLAYYER</Logo>
      </Header>

      <Content>
        {title && <Title>{title}</Title>}
        {description && <Description>{description}</Description>}
      </Content>

      {footer && (
        <Page>
          <Button>{footer}</Button>
        </Page>
      )}
    </Background>
  );
}
