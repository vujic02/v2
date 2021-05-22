import styled from "styled-components";
import { Link } from "react-scroll";
import { IoClose } from "react-icons/io5";

export const Overlay = styled.div`
  width: 100%;
  z-index: 120;
  height: 100%;
  position: fixed;
  top: 0;
  left: 0;
  background-color: rgba(20, 20, 20, 0.5);
  opacity: ${({ show }) => (show ? "1" : "0")};
  visibility: ${({ show }) => (show ? "visible" : "hidden")};
  transition: all 0.3s;
  filter: blur(5px);
`;

export const SidebarStyled = styled.div`
  position: fixed;
  z-index: 999;
  top: 0;
  right: 0;
  width: 80%;
  background-color: #000;
  padding: 1rem;
  color: #fff;
  max-width: 300px;
  height: 100%;
  transform: translateX(${({ show }) => (show ? "0" : "100%")});
  transition: all 0.3s ease-in-out;
`;

export const SidebarWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
`;

export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  height: 50px;
  text-decoration: none;
  color: #fff;
  font-family: "Montserrat", sans-serif;
  font-size: 1rem;
  font-weight: 400;
  text-align: center;
  cursor: pointer;

  .num {
    font-family: "Inconsolata", monospace;
    font-size: 1rem;
    font-weight: 400;
    color: var(--main);
  }
`;

export const SidebarClose = styled(IoClose)`
  display: flex;

  position: absolute;
  top: 0;
  left: 1rem;
  color: #fff;
  cursor: pointer;
  transition: 0.3s color ease-in-out;
  width: 45px;
  height: 45px;

  &:hover {
    color: var(--main);
  }
`;
