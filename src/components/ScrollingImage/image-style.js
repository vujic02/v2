import styled from "styled-components";
import { IoEarthSharp } from "react-icons/io5";
import { AiOutlineGithub } from "react-icons/ai";

export const WebpageIcon = styled(IoEarthSharp)`
  width: 45px;
  height: 45px;
  color: #fff;
  transition: color 0.3s linear;

  &:hover {
    color: var(--main);
  }
`;
export const GithubIcon = styled(AiOutlineGithub)`
  width: 45px;
  height: 45px;
  color: #fff;
  transition: color 0.3s linear;

  &:hover {
    color: var(--main);
  }
`;

export const ImageContainer = styled.div`
  background: url(${({ imgUrl }) => imgUrl});
  display: block;
  color: #fff;
  width: 500px;
  height: 320px;
  background-size: cover;
  background-repeat: no-repeat;
  transition: background-position ${({ trans }) => trans} linear;
  border-radius: 5px;
  border: 1px solid var(--main);
  cursor: pointer;
  font-family: "Inconsolata", monospace;

  .overlay {
    width: 100%;
    height: 100%;
    z-index: 10;
    background: rgba(0, 0, 0, 0.3);
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
    transition: background 0.5s linear;
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
