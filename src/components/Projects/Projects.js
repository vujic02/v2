import React, { useEffect, useRef } from "react";
import { Grid, Container, Heading, TextP } from "../../global-styles";
import ScrollingImage from "../ScrollingImage/ScrollingImage";
import { urls } from "../../utils/data";
import gsap, { Power3, Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = () => {
  let sectionRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    let section = sectionRef.current;

    gsap.from(section, {
      opacity: 0,
      x: 200,
      ease: Power3.easeOut,
      duration: 1,
      scrollTrigger: section,
      delay: 0.5,
    });

    gsap.from(".project", {
      opacity: 0,
      y: 100,
      ease: Power4.easeOut,
      duration: 1,
      scrollTrigger: {
        trigger: ".project",
        start: "center bottom",
        end: "+=200",
      },
      stagger: 0.5,
    });
  }, []);

  return (
    <Container name="projects" flexDir="column" p="12rem 0 0 0" align="center">
      <Container justify="center" ref={sectionRef}>
        <Heading m="3rem 0">Projects</Heading>
      </Container>
      <Grid
        cols="repeat(2, 550px)"
        justify="center"
        gridGap="60px 0"
        colsM1="1fr"
        gridGapM1="30px"
      >
        {urls.map((url, idx) => (
          <Container key={idx} flexDir="column" className="project">
            <ScrollingImage
              imgUrl={url.imgUrl}
              imgHeight={url.imgHeight}
              trans={url.transition}
              githubUrl={url.githubUrl}
              livepageUrl={url.livepageUrl}
            />
            <Container justify="center" align="center" flexDir="column">
              <TextP
                fontS="1rem"
                fontW="400"
                fontF="'Montserrat', sans-serif"
                col="#ccd6f6"
                m=".5rem 0 0 0"
              >
                {url.name}
              </TextP>
              <TextP
                fontS=".8rem"
                fontW="200"
                fontF="'Montserrat', sans-serif"
                col="#fff"
                m=".5rem 0 0 0"
              >
                {url.technologies}
              </TextP>
            </Container>
          </Container>
        ))}
      </Grid>
    </Container>
  );
};

export default Projects;
