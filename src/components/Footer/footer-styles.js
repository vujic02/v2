import styled from "styled-components";
import { FiGithub, FiInstagram } from "react-icons/fi";
import { AiOutlineLinkedin } from "react-icons/ai";

export const FooterContainer = styled.footer`
  display: grid;
  grid-template-columns: 1fr;
  align-items: center;
  justify-items: center;
  gap: 20px 0;
`;

export const IconsContainer = styled.div`
  display: none;
  justify-content: space-between;
  width: 120px;
  max-width: 200px;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`;

export const GithubIcon = styled(FiGithub)`
  width: 30px;
  height: 30px;
  color: #fff;
  margin: ${({ m }) => m};

  &:active {
    transition: color 0.3s linear;
    color: var(--main);
  }

  &:hover {
    transition: color 0.3s linear;
    color: var(--main);
    cursor: pointer;
  }
`;

export const InstagramIcon = styled(FiInstagram)`
  width: 30px;
  height: 30px;
  color: #fff;
  margin: ${({ m }) => m};

  &:active {
    transition: color 0.3s linear;
    color: var(--main);
  }

  &:hover {
    transition: color 0.3s linear;
    color: var(--main);
    cursor: pointer;
  }
`;

export const LinkedinIcon = styled(AiOutlineLinkedin)`
  width: 30px;
  height: 30px;
  color: #fff;
  margin: ${({ m }) => m};

  &:active {
    transition: color 0.3s linear;
    color: var(--main);
  }

  &:hover {
    transition: color 0.3s linear;
    color: var(--main);
    cursor: pointer;
  }
`;

export const FooterText = styled.p`
  font-size: 1rem;
  font-weight: 200;
  font-family: "Montserrat", sans-serif;
  color: #fff;

  .github {
    color: #acacac;
    text-decoration: none;
    transition: 0.3 ease-in-out all;
    &:hover {
      color: var(--main);
    }
  }
`;
