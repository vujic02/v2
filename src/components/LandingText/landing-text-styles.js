import styled from "styled-components";

export const H2 = styled.h2`
  font-size: clamp(30px, 8vw, 70px);
  font-family: "Montserrat", sans-serif;
  color: #fff;
  margin: 0;
`;

export const H3 = styled.h3`
  font-size: clamp(30px, 8vw, 70px);
  font-family: "Montserrat", sans-serif;
  color: #8892b0;
  margin: 0;
`;

export const P = styled.p`
  font-family: "Montserrat", sans-serif;
  font-size: clamp(14px, 8vw, 17px);
  color: ${({ col }) => (col ? "var(--main)" : "#fff")};
  max-width: ${({ maxW }) => (maxW ? "500px" : "none")};
  margin: 2px 0;
`;
