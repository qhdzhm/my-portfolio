import "./App.css";
import Header from "./components/header/header";
import "./assets/js/script";
import Works from "./components/Works/Works";
import WorkProcess from "./components/WorkProcess/WorkProcess";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import { Element } from "react-scroll";
import Skills from "./components/Service/Skills";
function App() {
  return (
    <div className="App">
      <div className="App">
        <Header />
        <Element name="skills">
          <Skills />
        </Element>
        <Element name="works">
          <Works />
        </Element>
        <Element name="workProcess">
          <WorkProcess />
        </Element>
        <Element name="about">
          <About />
        </Element>

        <Element name="contact">
          <Contact />
        </Element>
        <Footer />
      </div>
    </div>
  );
}

export default App;
