import React from "react";
import {
  Container,
  SectionHeading,
  Img,
  TextP,
  Grid,
} from "../../global-styles";
import styled from "styled-components";

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
  return (
    <Container justify="center" name="about">
      <Container flexDir="column" maxW="900px">
        <SectionHeading className="section-heading">About</SectionHeading>
        <Grid cols="1.8fr 1fr" gridGap="10px">
          <Container flexDir="column">
            <TextP
              maxW="450px"
              breakWord="break-word"
              col="#fff"
              m="0"
              fontS="1.2rem"
              fontF="'Montserrat', sans-serif"
              fontW="200"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut non
              pellentesque nibh, et dapibus ligula. In semper augue est, eget
              molestie urna malesuada ut. Curabitur vehicula vel purus elementum
              convallis. Ut pellentesque metus eu interdum consequat. Phasellus
              gravida nibh sed tincidunt lacinia.
            </TextP>
            <TextP
              fontS="1.2rem"
              fontF="'Montserrat', sans-serif"
              fontW="200"
              col="#fff"
              m="2rem 0 0 0"
            >
              Here are few technologies that I used:
            </TextP>
            <Grid cols="repeat(2, 1fr)">
              <ListItem>React.js</ListItem>
              <ListItem>Next.js(SSG)</ListItem>
              <ListItem>JavaScript(ES6+)</ListItem>
              <ListItem>Node.js</ListItem>
              <ListItem>Express.js</ListItem>
              <ListItem>MongoDB</ListItem>
            </Grid>
          </Container>
          <Img
            src="./my-image.png"
            w="320px"
            h="400px"
            objFit="cover"
            borR="5px"
            bor="1px solid var(--main)"
          />
        </Grid>
      </Container>
    </Container>
  );
};

export default About;
