import React from "react";
import styled from "styled-components";
import { Container } from "../../global-styles";
import { GithubIcon, Redirect, WebpageIcon } from "../ScrollingImage/image-style";

export const ImageContainer = styled.div`
  display: block;
  background: url(${({ imgUrl }) => imgUrl});
  color: #fff;
  width: 294px;
  height: 620px;
  background-size: contain;
  background-repeat: no-repeat;
  border-radius: 5px;
  border: 1px solid var(--main);
  cursor: pointer;
  font-family: "Inconsolata", monospace;
  object-fit: cover;

  .overlay {
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.35);
    display: none;
    justify-content: center;
    align-items: center;

    a {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      text-decoration: none;

      .text-visible {
        margin: 2px 0 0 0;
        color: var(--main);
        font-weight: 500;
      }
    }
  }

  &:hover {
    background-position: 0px ${({ imgHeight }) => imgHeight};
    .overlay {
      display: flex;
    }
  }

  &:active {
    transition: background 0.2s linear;
    background: var(--main);
  }

  @media screen and (max-width: 550px) {
    width: 310px;
    height: 200px;

    &:hover {
      background-position: 0px 0px;
    }
  }

  @media screen and (max-width: 320px) {
    width: 270px;
    height: 150px;
  }
`;

const Gif = ({ githubUrl, imgUrl, livepageUrl }) => {
  return (
    <Redirect href={githubUrl}>
      <ImageContainer imgUrl={imgUrl}>
        <div className="overlay">
          <Container w="70%" justify="space-around">
            <a href={githubUrl} target="_blank" rel="noreferrer">
              <GithubIcon />
              <p className="text-visible">Github page</p>
            </a>
            <a href={livepageUrl} target="_blank" rel="noreferrer">
              <WebpageIcon />
              <p className="text-visible">Live website</p>
            </a>
          </Container>
        </div>
      </ImageContainer>
    </Redirect>
  );
};

export default Gif;
