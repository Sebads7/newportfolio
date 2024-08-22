import Hero from "../pages/Hero";
import Projects from "../pages/Projects";
import Skills from "../pages/Skills";
import Resume from "../pages/Resume";
import Contact from "../pages/Contact";
import Footer from "../components/Footer";
import Navbar from "../components/NavBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Projects />
      <Skills />
      <Resume />
      <Contact />
      <Footer />
    </>
  );
}
