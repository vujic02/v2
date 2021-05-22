import React from "react";
import {
  FooterContainer,
  GithubIcon,
  CodepenIcon,
  InstagramIcon,
  IconsContainer,
  FooterText,
} from "./footer-styles";

const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <GithubIcon m="0" />
        <CodepenIcon m="0" />
        <InstagramIcon m="0" />
      </IconsContainer>
      <FooterText>
        Built & Designed by: 
        <a className="github" href="http://www.github.com/vujic02">
          Nikola Vujic
        </a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
