import { Main } from "./global-styles";
import LandingText from "./components/LandingText/LandingText";
import Navbar from "./components/Navbar/Navbar";
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main>
        <LandingText />
        <About />
        <Projects />
        <Contact />
      </Main>
    </div>
  );
}

export default App;
