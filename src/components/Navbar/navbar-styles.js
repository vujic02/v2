import styled from "styled-components";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background: rgba(21, 21, 21, 1);
  position: fixed;
  top: ${({ visible }) => (visible ? "0" : "-80px")};
  transition: top 0.6s;
`;
