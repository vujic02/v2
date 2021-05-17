import React from "react";
import { ImageContainer, GithubIcon, WebpageIcon } from "./image-style";
import { Container } from "../../global-styles";

const ScrollingImage = ({ imgUrl, imgHeight, trans }) => {
  return (
    <ImageContainer imgUrl={imgUrl} imgHeight={imgHeight} trans={trans}>
      <div className="overlay">
        <Container w="70%" justify="space-around">
          <a href="http://hello.com">
            <GithubIcon />
            <p className="text-visible">Github page</p>
          </a>
          <a href="http://helloworld.com">
            <WebpageIcon />
            <p className="text-visible">Live website</p>
          </a>
        </Container>
      </div>
    </ImageContainer>
  );
};

export default ScrollingImage;
