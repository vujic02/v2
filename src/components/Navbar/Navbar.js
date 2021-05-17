import React, { useState, useEffect, useRef } from "react";
import { Container, Img, TextP } from "../../global-styles";
import { Nav } from "./navbar-styles";
import { Link } from "react-scroll";
import { TweenMax, Power3, TimelineLite } from "gsap";

const Navbar = () => {
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
    let third = navLinks.lastElementChild;

    TweenMax.from(navLogo.current, 1.5, {
      opacity: 0,
      ease: Power3.easeInOut,
    });

    tl.from(first, 1, { opacity: 0, y: -100, ease: Power3.easeOut })
      .from(second, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.3)
      .from(third, 1, { opacity: 0, y: -100, ease: Power3.easeOut }, 0.6);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return function onUnmount() {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <Nav visible={visible}>
      <Container w="60px" justify="center" p="0 0 0 25px" ref={navLogo}>
        <Img src="./logo.png" h="60px" w="60px" objFit="cover" />
      </Container>
      <Container p="0 25px 0 0" ref={(el) => (navLinks = el)}>
        <Link to="about" spy={true} smooth={true} duration={500} offset={-290}>
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
        <Link to="projects" spy={true} smooth={true} duration={500}>
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
      </Container>
    </Nav>
  );
};

export default Navbar;
