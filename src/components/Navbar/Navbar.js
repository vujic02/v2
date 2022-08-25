import React, { useState, useEffect, useRef } from "react";
import { Container, Img, TextP, Button } from "../../global-styles";
import { Nav, NavLinks, MenuIcon } from "./navbar-styles";
import { Link } from "react-scroll";
import { TweenMax, Power3, TimelineLite } from "gsap";

const Navbar = ({ show, setIsOpened }) => {
  const [prevScrollpos, setPrevScrollpos] = useState(window.pageYOffset);
  const [visible, setVisible] = useState(true);

  let navLinks = useRef();
  let navLogo = useRef();
  let tl = new TimelineLite();

  const handleScroll = () => {
    const prevPos = prevScrollpos;

    const currentScrollPos = window.pageYOffset;
    const visible = prevPos > currentScrollPos;

    setPrevScrollpos(currentScrollPos);
    setVisible(visible);
  };

  useEffect(() => {
    let first = navLinks.firstElementChild;
    let second = navLinks.children[1];
    let third = navLinks.children[2];
    let fourth = navLinks.children[3];
    let fifth = navLinks.children[4];

    TweenMax.from(navLogo.current, 1.5, {
      opacity: 0,
      ease: Power3.easeInOut,
    });

    tl.from(first, 1, { opacity: 0, y: -100, ease: Power3.easeOut })
      .from(second, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.2)
      .from(third, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.4)
      .from(fourth, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.6)
      .from(fifth, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.8);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Nav visible={visible}>
      <Container w="60px" justify="center" p="0 0 0 25px" ref={navLogo}>
        <Img src="./misc/logo.png" h="60px" w="60px" objFit="cover" />
      </Container>
      <NavLinks ref={(el) => (navLinks = el)} show={show}>
        <Link to="about" spy={true} smooth={true} duration={500} offset={-200}>
          <TextP
            col="var(--main)"
            fontS="1rem"
            m="0 1rem 0 0"
            cur="pointer"
            fontF="'Inconsolata', monospace"
            insideText="#fff"
            insideTextH="var(--main)"
            transitionInsideText="0.2s ease-in all"
          >
            01.
            <span>About</span>
          </TextP>
        </Link>
        <Link to="projects" spy={true} smooth={true} duration={500} offset={100}>
          <TextP
            col="var(--main)"
            fontS="1rem"
            m="0 1rem 0 0"
            cur="pointer"
            fontF="'Inconsolata', monospace"
            insideText="#fff"
            insideTextH="var(--main)"
            transitionInsideText="0.2s ease-in all"
          >
            02.
            <span>Projects</span>
          </TextP>
        </Link>
        <Link to="work" spy={true} smooth={true} duration={500}>
          <TextP
            col="var(--main)"
            fontS="1rem"
            m="0 1rem 0 0"
            cur="pointer"
            fontF="'Inconsolata', monospace"
            insideText="#fff"
            insideTextH="var(--main)"
            transitionInsideText="0.2s ease-in all"
          >
            03.
            <span>Work</span>
          </TextP>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <TextP
            col="var(--main)"
            fontS="1rem"
            m="0 1rem 0 0"
            cur="pointer"
            fontF="'Inconsolata', monospace"
            insideText="#fff"
            insideTextH="var(--main)"
            transitionInsideText="0.2s ease-in all"
          >
            04.
            <span>Contact</span>
          </TextP>
        </Link>
        <Button
          col="var(--main)"
          fontS="1rem"
          m="0 1rem 0 0"
          cur="pointer"
          fontF="'Inconsolata', monospace"
          bor="1px solid var(--main)"
          p=".5rem"
          bgH="var(--mainTransparent)"
          colH="#fff"
        >
          <a href="/cv.pdf" target="_blank" rel="noreferrer">
            Resume/CV
          </a>
        </Button>
      </NavLinks>
      <MenuIcon onClick={() => setIsOpened((prev) => !prev)} />
    </Nav>
  );
};

export default Navbar;
