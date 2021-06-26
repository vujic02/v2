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

    TweenMax.from(navLogo.current, 1.5, {
      opacity: 0,
      ease: Power3.easeInOut,
    });

    tl.from(first, 1, { opacity: 0, y: -100, ease: Power3.easeOut })
      .from(second, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.3)
      .from(third, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.6)
      .from(fourth, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.9);
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
          >
            01.
            <span className="nav-link">About</span>
          </TextP>
        </Link>
        <Link
          to="projects"
          spy={true}
          smooth={true}
          duration={500}
          offset={100}
        >
          <TextP
            col="var(--main)"
            fontS="1rem"
            m="0 1rem 0 0"
            cur="pointer"
            fontF="'Inconsolata', monospace"
          >
            02.
            <span className="nav-link">Projects</span>
          </TextP>
        </Link>
        <Link to="contact" spy={true} smooth={true} duration={500}>
          <TextP
            col="var(--main)"
            fontS="1rem"
            m="0 1rem 0 0"
            cur="pointer"
            fontF="'Inconsolata', monospace"
          >
            03.
            <span className="nav-link">Contact</span>
          </TextP>
        </Link>
        <Button
          col="var(--main)"
          fontS="1.2rem"
          m="0 1rem 0 0"
          cur="pointer"
          fontF="'Inconsolata', monospace"
          bor="1px solid var(--main)"
          p=".5rem"
          bgH="var(--main)"
          colH="var(--white)"
        >
          <a href="/cv.pdf">Resume/CV</a>
        </Button>
      </NavLinks>
      <MenuIcon onClick={() => setIsOpened((prev) => !prev)} />
    </Nav>
  );
};

export default Navbar;
