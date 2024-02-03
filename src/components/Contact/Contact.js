import React, { useEffect } from "react";
import { Button, Container, Heading, TextH1, TextP } from "../../global-styles";
import gsap, { Power1 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact = () => {
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from(".contactStagger", {
      opacity: 0,
      y: 100,
      ease: Power1.easeOut,
      duration: 1,
      scrollTrigger: {
        trigger: ".contactStagger",
        start: "center bottom",
        end: "+=200",
      },
      stagger: 0.3,
    });
  }, []);

  return (
    <Container name="contact" flexDir="column" justify="center" align="center" p="16rem 0 8rem 0" className="contact">
      <Heading m="0" className="contactStagger">
        Contact
      </Heading>
      <TextH1
        fontS="clamp(2rem, 8vw, 3rem)"
        col="#CCD6F6"
        fontW="500"
        fontF="'Montserrat',sans-serif"
        m="0"
        alignText="center"
        className="contactStagger"
      >
        Get in touch
      </TextH1>
      <Container maxW="450px">
        <TextP
          fontS="clamp(.8rem, 8vw, 1.1rem)"
          col="#ACACAC"
          fontW="300"
          fontF="'Montserrat',sans-serif"
          m=".3rem 0 0 0"
          alignText="center"
          className="contactStagger"
        >
          I'm always on the lookout for ways to grow and explore new possibilities. My inbox welcomes everyone—whether you have a job offer, a
          question, or just want to say hi, don't hesitate to shoot me an email.
        </TextP>
      </Container>
      <Container maxW="180px" m="1rem 0 0 0" className="contactStagger">
        <Button
          borR="5px"
          bor="1px solid var(--main)"
          p=".8rem 2.5rem"
          col="var(--main)"
          fontF="'Montserrat', sans-serif"
          fontS="1rem"
          fontW="400"
          bgH="var(--main)"
          colH="#222222"
          onClick={() => {
            window.open("mailto:vujicn02@gmail.com");
          }}
        >
          Say hello
        </Button>
      </Container>
    </Container>
  );
};

export default Contact;
