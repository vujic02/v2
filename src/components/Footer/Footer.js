import React from "react";
import {
  FooterContainer,
  GithubIcon,
  LinkedinIcon,
  InstagramIcon,
  IconsContainer,
  FooterText,
} from "./footer-styles";
import { socialMedia } from "../../utils/data";

const Footer = () => {
  return (
    <FooterContainer>
      <IconsContainer>
        <a href={socialMedia.github}>
        <GithubIcon m="0" />
        </a>
        <a href={socialMedia.linkedin}>
        <LinkedinIcon m="0" />
        </a>
        <a href={socialMedia.instagram}>
        <InstagramIcon m="0" />
        </a>
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
