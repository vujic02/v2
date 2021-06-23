import styled from "styled-components";
import { HiMenuAlt3 } from "react-icons/hi";

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  width: 100%;
  background: rgba(10, 10, 10, 0.8);
  position: fixed;
  top: ${({ visible }) => (visible ? "0" : "-80px")};
  transition: top 0.6s;
  z-index: 900;
`;

export const NavLinks = styled.div`
  padding: 0 30px 0 0;
  display: ${({ show }) => (show ? "none" : "flex")};
  align-items: center;

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MenuIcon = styled(HiMenuAlt3)`
  display: none;

  @media screen and (max-width: 768px) {
    display: ${({ showIcon }) => (showIcon ? "none" : "flex")};
    position: absolute;
    top: 1rem;
    right: 1.5rem;
    color: #fff;
    cursor: pointer;
    transition: 0.3s color ease-in-out;
    width: 45px;
    height: 45px;

    &:hover {
      color: var(--main);
    }
  }
`;
