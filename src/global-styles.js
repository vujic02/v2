import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  position: ${({ pos }) => pos};
  top: ${({ t }) => t};
  right: ${({ r }) => r};
  left: ${({ l }) => l};
  bottom: ${({ b }) => b};
  background: ${({ bg }) => bg};
  border-radius: ${({ borR }) => borR};
  box-shadow: ${({ shadow }) => shadow};
  text-align: ${({ alignText }) => alignText};
  max-width: ${({ maxW }) => maxW};

  @media screen and (max-width: 1366px) {
    width: ${({ wM1 }) => wM1};
    padding: ${({ pM }) => pM};
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: ${({ cols }) => cols};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  gap: ${({ gridGap }) => gridGap};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  justify-items: ${({ justify }) => justify};
  align-items: ${({ align }) => align};

  @media screen and (max-width: 1366px) {
    justify-items: ${({ justifyM1 }) => justifyM1};
    gap: ${({ gridGapM1 }) => gridGapM1};
    grid-template-columns: ${({ colsM1 }) => colsM1};
    margin: ${({ mM1 }) => mM1};
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: ${({ colsM2 }) => colsM2};
    padding: ${({ pM }) => pM};
    margin: ${({ mM2 }) => mM2};
    gap: ${({ gridGapM }) => gridGapM};
  }
`;

export const TextP = styled.p`
  font-size: ${({ fontS }) => fontS};
  font-weight: ${({ fontW }) => fontW};
  color: ${({ col }) => col};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  text-align: ${({ alignText }) => alignText};
  opacity: ${({ opac }) => opac};
  font-family: ${({ fontF }) => fontF};
  cursor: ${({ cur }) => cur};
  max-width: ${({ maxW }) => maxW};
  word-break: ${({ breakWord }) => breakWord};

  .nav-link {
    color: #fff;
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    margin-left: 3px;
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ fontSM }) => fontSM};
    font-weight: ${({ fontWM }) => fontWM};
  }
`;

export const TextH1 = styled.h1`
  font-size: ${({ fontS }) => fontS};
  font-weight: ${({ fontW }) => fontW};
  color: ${({ col }) => col};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  text-align: ${({ alignText }) => alignText};
  opacity: ${({ opac }) => opac};
  position: ${({ pos }) => pos};
  top: ${({ t }) => t};
  right: ${({ r }) => r};
  left: ${({ l }) => l};
  bottom: ${({ b }) => b};

  a {
    color: ${({ col }) => col};
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ fontSM }) => fontSM};
    font-weight: ${({ fontWM }) => fontWM};
  }
`;

export const Overlay = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
  background: ${({ bg }) => bg};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  border-radius: ${({ borR }) => borR};

  @media screen and (max-width: 768px) {
    padding: ${({ pM }) => pM};
  }
`;

export const Button = styled.div`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: inline-flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
  background: ${({ bg }) => bg};
  padding: ${({ p }) => p};
  margin: ${({ m }) => m};
  border: ${({ bor }) => bor};
  border-radius: ${({ borR }) => borR};
  color: ${({ col }) => col};
  font-size: ${({ fontS }) => fontS};
  font-weight: ${({ fontW }) => fontW};
  cursor: pointer;
  a {
    color: ${({ col }) => col};
    text-decoration: none;
  }

  &:hover {
    transition: all ease-in-out 0.3s;
    border: ${({ borH }) => borH};
    background: ${({ bgH }) => bgH};
    color: ${({ colH }) => colH};
    a {
      color: ${({ colH }) => colH};
    }
  }
`;

export const Img = styled.img`
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  object-fit: ${({ objFit }) => objFit};
  object-position: ${({ objPos }) => objPos};
  margin: ${({ m }) => m};
  padding: ${({ p }) => p};
  border-radius: ${({ borR }) => borR};
  border: ${({ bor }) => bor};
`;

export const DivImg = styled.div`
  background-image: url(${({ bgImage }) => bgImage});
  background-position: ${({ bgPos }) => bgPos};
  background-size: ${({ bgSize }) => bgSize};
  border-radius: ${({ borR }) => borR};
  width: ${({ w }) => w};
  height: ${({ h }) => h};
  display: flex;
  justify-content: ${({ justify }) => justify};
  align-items: ${({ align }) => align};
  flex-direction: ${({ flexDir }) => flexDir};
`;

export const Main = styled.section`
  padding: 0 150px;

  @media screen and (max-width: 1080px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 480px) {
    padding: 0 25px;
  }
`;

export const Heading = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  color: #fff;
  font-size: clamp(1rem, 8vw, 1.5rem);
  font-weight: 500;
  padding-bottom: 5px;
  border-bottom: 1px solid #4a4a4a;

  &:before {
    position: relative;
    bottom: -1px;
    counter-increment: section;
    content: "0" counter(section) ".";
    margin-right: 5px;
    font-family: "Inconsolata", monospace;
    color: var(--main);
    font-size: clamp(1rem, 8vw, 1.5rem);
    font-weight: 300;
  }
`;

export const SectionHeading = styled.h2`
  display: flex;
  align-items: center;
  position: relative;
  color: #fff;
  font-size: clamp(1rem, 8vw, 1.5rem);
  font-weight: 500;

  &:after {
    content: "";
    display: block;
    position: relative;
    top: 5px;
    width: 300px;
    height: 1px;
    margin-left: 20px;
    background: #4a4a4a;
  }

  &:before {
    position: relative;
    bottom: -1px;
    counter-increment: section;
    content: "0" counter(section) ".";
    margin-right: 5px;
    font-family: "Inconsolata", monospace;
    color: var(--main);
    font-size: clamp(1rem, 8vw, 1.5rem);
    font-weight: 300;
  }

  @media screen and (max-width: 1080px) {
    &:after {
      width: 200px;
    }
  }

  @media screen and (max-width: 768px) {
    &:after {
      width: 100px;
    }
  }

  @media screen and (max-width: 400px) {
    &:after {
      width: 80px;
    }
  }
`;
