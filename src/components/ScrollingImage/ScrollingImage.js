import React from "react";
import {
  ImageContainer,
  GithubIcon,
  WebpageIcon,
  Redirect,
} from "./image-style";
import { Container } from "../../global-styles";

const ScrollingImage = ({
  imgUrl,
  imgHeight,
  trans,
  githubUrl,
  livepageUrl,
}) => {
  return (
    <Redirect href={githubUrl}>
      <ImageContainer imgUrl={imgUrl} imgHeight={imgHeight} trans={trans}>
        <div className="overlay">
          <Container w="70%" justify="space-around">
            <a href={githubUrl}>
              <GithubIcon />
              <p className="text-visible">Github page</p>
            </a>
            <a href={livepageUrl}>
              <WebpageIcon />
              <p className="text-visible">Live website</p>
            </a>
          </Container>
        </div>
      </ImageContainer>
    </Redirect>
  );
};

export default ScrollingImage;
