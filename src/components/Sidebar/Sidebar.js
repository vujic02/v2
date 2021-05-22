import React from "react";
import { Container } from "../../global-styles";
import {
  SidebarClose,
  SidebarLink,
  SidebarStyled,
  SidebarWrapper,
} from "./sidebar-styles";

const Sidebar = ({ show, setIsOpened }) => {
  return (
    <SidebarStyled show={show}>
      <SidebarWrapper>
        <SidebarClose onClick={() => setIsOpened((prev) => !prev)} />
        <Container
          h="100%"
          w="100%"
          flexDir="column"
          justify="space-around"
          align="center"
        >
          <SidebarLink
            to="about"
            spy={true}
            smooth={true}
            duration={500}
            offset={-120}
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span className="num">01.</span> About
          </SidebarLink>
          <SidebarLink
            to="projects"
            spy={true}
            smooth={true}
            duration={500}
            offset={100}
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span className="num">02.</span> Projects
          </SidebarLink>
          <SidebarLink
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
            onClick={() => setIsOpened((prev) => !prev)}
          >
            <span className="num">03.</span> Contact
          </SidebarLink>
        </Container>
      </SidebarWrapper>
    </SidebarStyled>
  );
};

export default Sidebar;
