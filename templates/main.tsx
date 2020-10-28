import React from "react";

import styled from "styled-components";

import { Title, Description, Footer, SocialIcon, Logo } from "../components/elements";
import { Fade, Content, HeaderStart, IconsTop, IconsBottom, FooterCenter } from "../components/layers";
import GlobalFonts from "../fonts/fonts";
import Discord from "../static/discord.png";
import Facebook from "../static/facebook.png";
import Instagram from "../static/instagram.png";
import LinkedIn from "../static/linkedin.png";
import Messenger from "../static/messenger.png";
import Slack from "../static/slack.png";
import Teams from "../static/teams.png";
import Twitter from "../static/twitter.png";
import WhatsApp from "../static/whatsapp.png";

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

// Make sure to 'export default' a React component
export default function MainTemplate({ variables }) {
  const {
    title = "Social",
    title2 = "Preview",
    title3 = ".io",
    description = "Find out how people perceive your website",
    footer = "Preview your links on WhatsApp, Twitter, Facebook, and more!",
    simplify = false,
    colored = true,
  } = variables;

  /**
   * Adapt to your own booleans as with simplify & colored
   * so you make sure your boolean vars are "boolean" typeof
   * because "false" would return true
   */
  const booleans = {};
  // simplify
  if (typeof simplify !== "boolean") booleans["simplify"] = Boolean(simplify === "true" ? 1 : 0);
  else booleans["simplify"] = simplify;
  // colored
  if (typeof colored !== "boolean") booleans["colored"] = Boolean(colored === "true" ? 1 : 0);
  else booleans["colored"] = colored;

  return (
    <>
      <GlobalFonts />
      {!simplify && <Fade />}
      <HeaderStart>
        <Logo>FLAYYER</Logo>
      </HeaderStart>
      <IconsTop expanded>
        <SocialIcon src={Twitter} />
        <SocialIcon src={Teams} background="white" fit="small" simplify={simplify} />
        <SocialIcon src={Discord} />
        <SocialIcon src={Slack} background="white" fit="medium" simplify={simplify} />
        <SocialIcon src={Messenger} />
      </IconsTop>
      <Content>
        <Row>
          <Title colored={colored} color="#e7e700" simplify={simplify}>
            {title}
          </Title>
          <Title colored={colored} color="#ff922a" simplify={simplify}>
            {title2}
          </Title>
          <Title colored={colored} color="#ffff" simplify={simplify}>
            {title3}
          </Title>
        </Row>
        {description && <Description simplify={simplify}>{description}</Description>}
      </Content>
      <IconsBottom>
        <SocialIcon src={Facebook} background="white" simplify={simplify} />
        <SocialIcon src={WhatsApp} />
        <SocialIcon src={Instagram} />
        <SocialIcon src={LinkedIn} />
      </IconsBottom>
      <FooterCenter>
        <Footer simplify={simplify}>{footer}</Footer>
      </FooterCenter>
    </>
  );
}
