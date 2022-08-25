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
  border-left: ${({ borderL }) => borderL};
  box-shadow: ${({ shadow }) => shadow};
  text-align: ${({ alignText }) => alignText};
  max-width: ${({ maxW }) => maxW};
  cursor: ${({ cursor }) => cursor};
  color: ${({ color }) => color};
  transition: ${({ transition }) => transition};
  font-family: ${({ fontF }) => fontF};

  &:hover {
    border-left: ${({ borderLH }) => borderLH};
    color: ${({ colorH }) => colorH};
    transition: ${({ transitionH }) => transitionH};
  }

  @media screen and (max-width: 1366px) {
    width: ${({ wM1 }) => wM1};
    padding: ${({ pM }) => pM};
    flex-direction: ${({ flexDirM1 }) => flexDirM1};
  }

  @media screen and (max-width: 768px) {
    &:hover {
      border-bottom: ${({ borderBM2H }) => borderBM2H};
      border-left: ${({ borderLM2H }) => borderLM2H};
    }
    width: ${({ wM2 }) => wM2};
    height: ${({ hM2 }) => hM2};
    flex-direction: ${({ flexDirM2 }) => flexDirM2};
    justify-content: ${({ justifyM2 }) => justifyM2};
    border-bottom: ${({ borderBM2 }) => borderBM2};
    border-left: ${({ borderLM2 }) => borderLM2};
  }

  @media screen and (max-width: 420px) {
    width: ${({ wM3 }) => wM3};
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
  transition: ${({ transition }) => transition};

  span {
    color: ${({ insideText }) => insideText};
    transition: ${({ transitionInsideText }) => transitionInsideText};
  }

  &:hover {
    span {
      transition: ${({ transitionInsideTextH }) => transitionInsideTextH};
      color: ${({ insideTextH }) => insideTextH};
    }
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ fontSM }) => fontSM};
    font-weight: ${({ fontWM }) => fontWM};
  }

  @media screen and (max-width: 420px) {
    font-size: ${({ fontSM3 }) => fontSM3};
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
  transition: ${({ transition }) => transition};

  span {
    color: ${({ insideText }) => insideText};
    transition: ${({ transitionInsideText }) => transitionInsideText};
  }

  &:hover {
    span {
      transition: ${({ transitionInsideTextH }) => transitionInsideTextH};
      color: ${({ insideTextH }) => insideTextH};
    }
  }

  a {
    color: ${({ col }) => col};
    text-decoration: none;
  }

  @media screen and (max-width: 768px) {
    font-size: ${({ fontSM }) => fontSM};
    font-weight: ${({ fontWM }) => fontWM};
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
  font-family: ${({ fontF }) => fontF};
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

export const Main = styled.section`
  padding: 0 150px;

  @media screen and (max-width: 1080px) {
    padding: 0 100px;
  }

  @media screen and (max-width: 768px) {
    padding: 0 50px;
  }

  @media screen and (max-width: 428px) {
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
  margin: ${({ m }) => m};

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
    width: 350px;
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
      width: 240px;
    }
  }

  @media screen and (max-width: 768px) {
    &:after {
      width: 110px;
    }
  }

  @media screen and (max-width: 466px) {
    justify-content: center;
    &:after {
      display: none;
    }
  }
`;

export const SideIconsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: fixed;
  bottom: 0;
  left: 20px;

  .line {
    display: block;
    width: 1px;
    height: 90px;
    margin: 0px auto;
    background-color: #acacac;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;
