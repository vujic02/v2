import React, { useEffect, useState, useRef } from "react";
import { Main } from "./global-styles";
import {Navbar, Sidebar, Background, About, LandingText, Projects, Contact, SideIcons, Footer} from "./components/index"

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
