import React, { useEffect, useRef } from "react";
import { Button, Container } from "../../global-styles";
import { H2, H3, P } from "./landing-text-styles";
import { Power3, TimelineLite } from "gsap";

const LandingText = () => {
  let tl = new TimelineLite({ delay: 1 });

  let textRef = useRef();

  useEffect(() => {
    let first = textRef.children[0];
    let second = textRef.children[1];
    let third = textRef.children[2];
    let fourth = textRef.children[3];
    let fifth = textRef.children[4];

    tl.from(first, 1, { opacity: 0, y: 50, ease: Power3.easeOut })
      .from(second, 1, { opacity: 0, y: 50, ease: Power3.easeOut }, 0.2)
      .from(third, 1, { opacity: 0, y: 50, ease: Power3.easeOut }, 0.4)
      .from(fourth, 1, { opacity: 0, y: 50, ease: Power3.easeOut }, 0.6)
      .from(fifth, 1, { opacity: 0, y: 50, ease: Power3.easeOut }, 0.85);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Container flexDir="column" align="center" p="200px 0 400px 0" alignText="center" ref={(el) => (textRef = el)}>
      <P col={true}>Hi, my name is</P>
      <H2>Nikola Vujić.</H2>
      <H3>I make web apps.</H3>
      <P col={false} maxW={true}>
        I'm a 21-year-old Web developer based in Stara Pazova, Serbia. I'm deeply passionate about crafting visually appealing and dynamic websites,
        utilizing the latest technologies available.
      </P>
      <Container m="1rem 0 0 0">
        <Button
          col="var(--main)"
          bor="1px solid var(--main)"
          borR="5px"
          justify="center"
          align="center"
          p=".8rem 1.5rem"
          bgH="var(--main)"
          colH="#111"
          fontS="1rem"
          fontW="500"
          fontF="'Montserrat', sans-serif"
          onClick={() => {
            window.open("mailto:vujicn02@gmail.com");
          }}
        >
          Contact
        </Button>
      </Container>
    </Container>
  );
};

export default LandingText;
