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
        <a href={socialMedia.github} target="_blank" rel="noreferrer">
          <GithubIcon m="0" />
        </a>
        <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
          <LinkedinIcon m="0" />
        </a>
        <a href={socialMedia.instagram} target="_blank" rel="noreferrer">
          <InstagramIcon m="0" />
        </a>
      </IconsContainer>
      <FooterText>
        Built & Designed by: 
        <a
          className="github"
          href="http://www.github.com/vujic02"
          target="_blank"
          rel="noreferrer"
        >
          Nikola Vujic
        </a>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
