import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { Container, Grid, SectionHeading, TextH1, TextP } from "../../global-styles";
import gsap, { Power3 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TimelineMax } from "gsap/gsap-core";

const List = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style: none;
  font-size: 16px;
  font-weight: 400px;
  color: var(--grayThird);
  max-width: 550px;
  font-family: "Montserrat", sans-serif;
`;

const ListItem = styled.li`
  position: relative;
  padding-left: 30px;
  margin-bottom: 12px;

  &:before {
    content: "▹";
    position: absolute;
    left: 0px;
    color: var(--main);
  }
`;

const Work = () => {
  const [selected, setSelected] = useState(2);
  let headingRef = useRef();
  let gridRef = useRef();
  let workSectionRef = useRef();

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (headingRef.current !== null) {
      let section = headingRef.current;

      let tl = new TimelineMax({
        scrollTrigger: {
          trigger: section,
          start: "center 70%",
          end: "+=200",
        },
      });

      if (window.innerWidth > 769) {
        tl.from(
          section,
          {
            opacity: 0,
            x: 100,
            ease: Power3.easeOut,
            duration: 1,
          },
          0.3
        )
          .from(gridRef.children[0], { opacity: 0, x: 0, ease: Power3.easeInOut, duration: 0.5 }, 0.4)
          .from(gridRef.children[1], { opacity: 0, x: 100, ease: Power3.easeInOut, duration: 0.5 }, 0.6);
      } else if (window.innerWidth < 769) {
        gsap.from(workSectionRef.current, {
          opacity: 0,
          ease: Power3.easeOut,
          duration: 1,
          scrollTrigger: {
            trigger: headingRef.current,
            start: "bottom bottom",
            end: "+=200",
          },
          delay: 0.5,
        });
      }

      return () => {
        tl.kill();
      };
    }
  }, [headingRef]);

  return (
    <Container justify="center" name="work" m="12rem 0 0 0" ref={workSectionRef}>
      <Container flexDir="column" maxW="900px">
        <SectionHeading className="section-heading" ref={headingRef}>
          Work experience
        </SectionHeading>
        <Grid cols="0.2fr 0.8fr" colsM2="1fr" gridGap="10px" gridGapM1="50px 0" ref={(el) => (gridRef = el)}>
          <Container flexDir="column" flexDirM2="row" justifyM2="center">
            <Container
              flexDir="row"
              justify="start"
              justifyM2="center"
              align="center"
              borderL={selected === 2 ? "2px solid var(--main)" : "2px solid var(--gray)"}
              borderLM2="0px"
              borderLM2H="0px"
              borderBM2={selected === 2 ? "2px solid var(--main)" : "2px solid var(--gray)"}
              borderBM2H={selected === 2 ? "2px solid var(--turquoise)" : "2px solid var(--gray)"}
              borderLH={selected === 2 ? "2px solid var(--turquoise)" : "2px solid var(--gray)"}
              color={selected === 2 ? "var(--main)" : "var(--graySecondary)"}
              colorH={selected === 2 ? "var(--turquoise)" : "var(--gray)"}
              transition="0.2s ease-in all"
              p="0 0 0 12px"
              h="123px"
              hM2="50px"
              wM2="150px"
              wM3="50%"
              cursor="pointer"
              onClick={() => setSelected(2)}
            >
              <TextP maxW="450px" breakWord="break-word" m="0" fontS="1.2rem" fontSM3="1rem" fontF="'Montserrat', sans-serif" fontW="200">
                Royal Fox
              </TextP>
            </Container>
            <Container
              flexDir="row"
              justify="start"
              justifyM2="center"
              align="center"
              borderL={selected === 1 ? "2px solid var(--main)" : "2px solid var(--gray)"}
              borderLM2="0px"
              borderLM2H="0px"
              borderBM2={selected === 1 ? "2px solid var(--main)" : "2px solid var(--gray)"}
              borderBM2H={selected === 1 ? "2px solid var(--turquoise)" : "2px solid var(--gray)"}
              borderLH={selected === 1 ? "2px solid var(--turquoise)" : "2px solid var(--gray)"}
              color={selected === 1 ? "var(--main)" : "var(--graySecondary)"}
              colorH={selected === 1 ? "var(--turquoise)" : "var(--gray)"}
              transition="0.2s ease-in all"
              p="0 0 0 12px"
              h="123px"
              hM2="50px"
              wM2="150px"
              wM3="50%"
              cursor="pointer"
              onClick={() => setSelected(1)}
            >
              <TextP maxW="450px" breakWord="break-word" m="0" fontS="1.2rem" fontSM3="1rem" fontF="'Montserrat', sans-serif" fontW="200">
                yadada
              </TextP>
            </Container>
            <Container
              flexDir="row"
              justify="start"
              justifyM2="center"
              align="center"
              borderL={selected === 0 ? "2px solid var(--main)" : "2px solid var(--gray)"}
              borderLM2="0px"
              borderLM2H="0px"
              borderBM2={selected === 0 ? "2px solid var(--main)" : "2px solid var(--gray)"}
              borderBM2H={selected === 0 ? "2px solid var(--turquoise)" : "2px solid var(--gray)"}
              borderLH={selected === 0 ? "2px solid var(--turquoise)" : "2px solid var(--gray)"}
              color={selected === 0 ? "var(--main)" : "var(--graySecondary)"}
              colorH={selected === 0 ? "var(--turquoise)" : "var(--gray)"}
              transition="0.2s ease-in all"
              p="0 0 0 12px"
              h="123px"
              hM2="50px"
              wM2="150px"
              wM3="50%"
              cursor="pointer"
              onClick={() => setSelected(0)}
            >
              <TextP maxW="450px" breakWord="break-word" m="0" fontS="1.2rem" fontSM3="1rem" fontF="'Montserrat', sans-serif" fontW="200">
                MTopTech
              </TextP>
            </Container>
          </Container>
          {selected === 2 && (
            <Container flexDir="column" m="0 0 0 8px" fontF="'Montserrat', sans-serif">
              <TextH1 col="var(--grayThird)" fontS="22px" fontW="500" insideText="var(--main)" m="0">
                Frontend Developer <span style={{ marginLeft: "2px" }}>@ Royal Fox s.r.o.</span>
              </TextH1>
              <TextP col="var(--grayThird)" fontS="14px" fontW="300" m="4px 0 20px 0">
                February 2023 - September 2023
              </TextP>
              <List>
                <ListItem>
                  Develop new features, solve bugs, research future implementations of new features and fix issues while working in a small team.
                </ListItem>
                <ListItem>
                  Work with a variety of different languages, platforms, frameworks and API's such as JavaScript, React Native, KateX, Expo
                </ListItem>
                <ListItem>
                  Ensured seamless functionality on both iOS and Android platforms by rigorously testing and optimizing the application
                </ListItem>
              </List>
            </Container>
          )}
          {selected === 1 && (
            <Container flexDir="column" m="0 0 0 8px" fontF="'Montserrat', sans-serif">
              <TextH1 col="var(--grayThird)" fontS="22px" fontW="500" insideText="var(--main)" m="0">
                Frontend Developer <span style={{ marginLeft: "2px" }}>@ yadada s.r.o.</span>
              </TextH1>
              <TextP col="var(--grayThird)" fontS="14px" fontW="300" m="4px 0 20px 0">
                January 2022 - December 2022
              </TextP>
              <List>
                <ListItem>Write modern, performant, maintainable code while working in a team. </ListItem>
                <ListItem>
                  Work with a variety of different languages, platforms and frameworks such as JavaScript, TypeScript, React.js, Next.js, Firebase,
                  Netlify & Youtube IFrame API.
                </ListItem>
                <ListItem>Communicate with multi-disciplinary team of developers and designers on a daily basis.</ListItem>
              </List>
            </Container>
          )}
          {selected === 0 && (
            <Container flexDir="column" m="0 0 0 8px" fontF="'Montserrat', sans-serif">
              <TextH1 col="var(--grayThird)" fontS="22px" fontW="500" insideText="var(--main)" m="0">
                Internship <span style={{ marginLeft: "2px" }}>@ MTopTech</span>
              </TextH1>
              <TextP col="var(--grayThird)" fontS="14px" fontW="300" m="4px 0 20px 0">
                July 2021 - November 2021
              </TextP>
              <List>
                <ListItem>
                  Learn new languages, libraries, frameworks & content managment systems (PHP, Laravel, Vue.js, React-Native, Wordpress and
                  WinterCMS).
                </ListItem>
                <ListItem>Help out with maintaining and writing clean code while working with a friend.</ListItem>
                <ListItem>Development of company's website.</ListItem>
              </List>
            </Container>
          )}
        </Grid>
      </Container>
    </Container>
  );
};

export default Work;
