import React, { useEffect, useRef } from "react";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Container, SectionHeading, Img, TextP, Grid } from "../../global-styles";
import styled from "styled-components";
import { TimelineMax } from "gsap/gsap-core";

const ListItem = styled.p`
  font-size: 1rem;
  font-family: "Montserrat", sans-serif;
  font-weight: 400;
  position: relative;
  color: #fff;
  padding-left: 20px;
  margin-bottom: 5px;

  &:before {
    content: "•";
    position: absolute;
    left: 0;
    line-height: 12px;
    font-size: 2.5rem;
    font-weight: 500;
    color: var(--main);
  }
`;

const About = () => {
  let sectionRef = useRef();
  let textsRef = useRef();
  let itemsRef = useRef();
  let imgRef = useRef();
  let aboutSectionRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let section = sectionRef.current;

    let tl = new TimelineMax({
      scrollTrigger: {
        trigger: section,
        start: "center 90%",
        end: "+=200",
      },
    });

    if (window.innerWidth > 769) {
      tl.from(
        section,
        {
          opacity: 0,
          y: 100,
          ease: Power3.easeOut,
          duration: 1,
        },
        0.3
      )
        .from(textsRef.children[0], { opacity: 0, x: -100, ease: Power3.easeInOut, duration: 0.5 }, 0.5)
        .from(textsRef.children[1], { opacity: 0, x: -100, ease: Power3.easeInOut, duration: 0.5 }, 0.6)
        .from(itemsRef.children[0], { opacity: 0, ease: Power3.easeIn, duration: 0.2 }, 0.7)
        .from(itemsRef.children[1], { opacity: 0, ease: Power3.easeIn, duration: 0.2 }, 1)
        .from(itemsRef.children[2], { opacity: 0, ease: Power3.easeIn, duration: 0.2 }, 1.1)
        .from(itemsRef.children[3], { opacity: 0, ease: Power3.easeIn, duration: 0.2 }, 1.2)
        .from(itemsRef.children[4], { opacity: 0, ease: Power3.easeIn, duration: 0.2 }, 1.3)
        .from(itemsRef.children[5], { opacity: 0, ease: Power3.easeIn, duration: 0.2 }, 1.4)
        .from(imgRef.current, {
          opacity: 0,
          x: 100,
          ease: Power3.easeOut,
          duration: 1,
        });
    } else if (window.innerWidth < 769) {
      gsap.from(aboutSectionRef.current, {
        opacity: 0,
        ease: Power3.easeOut,
        duration: 1,
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top center",
          end: "+=200",
        },
        delay: 0.5,
      });
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <Container justify="center" name="about">
      <Container flexDir="column" maxW="900px" ref={aboutSectionRef}>
        <SectionHeading className="section-heading" ref={sectionRef}>
          About
        </SectionHeading>
        <Grid cols="1.8fr 1fr" gridGap="10px" colsM1="1fr" gridGapM1="50px 0" justifyM1="center">
          <Container flexDir="column" ref={(el) => (textsRef = el)}>
            <TextP maxW="450px" breakWord="break-word" col="#fff" m="0" fontS="1.2rem" fontF="'Montserrat', sans-serif" fontW="200">
              Hey there, I'm Nikola Vujic, and I'm passionate about the art of building websites. My venture into the realm of web development kicked
              off in January 2020. It wasn't a walk in the park initially, but I persevered, pushing my boundaries. Through this journey, I discovered
              a love for challenging myself and pushing my limits. I'm always eager to enhance my skills and connect with fellow enthusiasts on this
              exciting path.
            </TextP>
            <TextP fontS="1.2rem" fontF="'Montserrat', sans-serif" fontW="200" col="#fff" m="2rem 0 0 0">
              Here are few technologies that I used:
            </TextP>
            <Grid cols="repeat(2, 1fr)" ref={(el) => (itemsRef = el)}>
              <ListItem>React.js</ListItem>
              <ListItem>Next.js(SSG)</ListItem>
              <ListItem>JavaScript(ES6+)</ListItem>
              <ListItem>TypeScript</ListItem>
              <ListItem>Firebase</ListItem>
              <ListItem>React Native</ListItem>
            </Grid>
          </Container>
          <Img ref={imgRef} src="./misc/my-image.png" w="320px" h="400px" objFit="cover" borR="5px" bor="1px solid var(--main)" />
        </Grid>
      </Container>
    </Container>
  );
};

export default About;
