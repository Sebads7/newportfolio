import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
