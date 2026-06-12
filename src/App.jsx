import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />

      <Hero
        name="Ratnadeep Choyal"
        role="Full Stack Developer & Engineering Student"
      />

      <About />

      <Skills />

      <Projects />
      <Contact />
      <Footer />
    </>
  );
}

export default App;