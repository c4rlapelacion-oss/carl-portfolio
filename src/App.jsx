import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import Background from "./components/layout/Background";
import About from "./components/sections/About";
import Experience from "./components/sections/Experience";
import Skills from "./components/sections/Skills";
import ProfessionalDevelopment from "./components/sections/ProfessionalDevelopment";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";
import Projects from "./components/sections/Projects";


function App() {
  return (
    <>
      <Background/>
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <ProfessionalDevelopment />
      <Projects />
      <Contact />
      <Footer/>
    </>
  );
}

export default App;