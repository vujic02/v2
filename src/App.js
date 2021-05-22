import React, { useEffect, useState, useRef } from "react";
import { Main } from "./global-styles";
import LandingText from "./components/LandingText/LandingText";
import Navbar from "./components/Navbar/Navbar";
import Sidebar from "./components/Sidebar/Sidebar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Background from "./components/Background/Background";
import Footer from "./components/Footer/Footer";
import SideIcons from "./components/SideIcons/SideIcons";

function App() {
  const [isOpened, setIsOpened] = useState(false);
  let mainRef = useRef();

  useEffect(() => {
    if (isOpened) {
      mainRef.current.classList.add("blur");
      document.body.style.overflowY = "hidden";
    } else {
      mainRef.current.classList.remove("blur");
      document.body.style.overflowY = "scroll";
    }
  });

  return (
    <div className="App">
      <Background show={isOpened} setIsOpened={setIsOpened} />
      <Navbar show={isOpened} setIsOpened={setIsOpened} />
      <Sidebar show={isOpened} setIsOpened={setIsOpened} />
      <Main ref={mainRef}>
        <LandingText />
        <About />
        <Projects />
        <Contact />
      </Main>
      <SideIcons />
      <Footer />
    </div>
  );
}

export default App;
