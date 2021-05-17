import React from "react";
import { Grid, Container, Heading, TextP } from "../../global-styles";
import ScrollingImage from "../ScrollingImage/ScrollingImage";
import { urls } from "../../utils/data";

const Projects = () => {
  return (
    <Container name="projects" flexDir="column" p="12rem 0 0 0" align="center">
      <Container justify="center">
        <Heading>Projects</Heading>
      </Container>
      <Grid
        cols="repeat(2, 550px)"
        justify="center"
        gridGap="60px 0"
        colsM1="1fr"
        gridGapM1="30px"
      >
        {urls.map((url, idx) => (
          <Container key={idx} flexDir="column">
            <ScrollingImage
              imgUrl={url.imgUrl}
              imgHeight={url.imgHeight}
              trans={url.transition}
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
