import React from "react";

// import styled from "styled-components";

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
      <IconsTop>
        <SocialIcon src={Twitter} />
        <SocialIcon src={Teams} background="white" fit="small" />
        <SocialIcon src={Discord} />
        <SocialIcon src={Slack} background="white" fit="medium" />
        <SocialIcon src={Messenger} />
      </IconsTop>
      <Content>
        <Title simplify={simplify}>{title}</Title>
        {description && <Description simplify={simplify}>{description}</Description>}
      </Content>
      <IconsBottom>
        <SocialIcon src={Facebook} background="white" />
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
