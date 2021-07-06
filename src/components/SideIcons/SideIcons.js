import React, { useRef, useEffect } from "react";
import { SideIconsContainer } from "../../global-styles";
import { Power2, TimelineLite } from "gsap";
import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
} from "../Footer/footer-styles";
import { socialMedia } from "../../utils/data";

const SideIcons = () => {
  let iconsRef = useRef();
  const tl = new TimelineLite({ delay: 2 });
  useEffect(() => {
    let icon1 = iconsRef.children[0];
    let icon2 = iconsRef.children[1];
    let icon3 = iconsRef.children[2];
    let line = iconsRef.children[3];

    tl.from(icon1, 1, { ease: Power2.easeInOut, opacity: 0, x: 50 })
      .from(icon2, 1, { ease: Power2.easeInOut, opacity: 0, x: -50 }, 0.3)
      .from(icon3, 1, { ease: Power2.easeInOut, opacity: 0, x: 50 }, 0.6)
      .from(line, 1, { ease: Power2.easeInOut, opacity: 0, y: 100 }, 0.9);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <SideIconsContainer ref={(el) => (iconsRef = el)}>
      <a href={socialMedia.github} target="_blank" rel="noreferrer">
        <GithubIcon m="10px 0 0 0" />
      </a>
      <a href={socialMedia.linkedin} target="_blank" rel="noreferrer">
        <LinkedinIcon m="10px 0 0 0" />
      </a>
      <a href={socialMedia.instagram} target="_blank" rel="noreferrer">
        <InstagramIcon m="10px 0 10px 0" />
      </a>
      <div className="line"></div>
    </SideIconsContainer>
  );
};

export default SideIcons;
