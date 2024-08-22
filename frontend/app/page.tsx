"use client";
import dynamic from "next/dynamic";
import { useEffect, useState } from "react";

// Use dynamic import for components
const Hero = dynamic(() => import("@/pages/Hero"), {
  ssr: false,
});

const Projects = dynamic(() => import("@/pages/Projects"), {
  ssr: false,
});

const Skills = dynamic(() => import("@/pages/Skills"), {
  ssr: false,
});

const Resume = dynamic(() => import("@/pages/Resume"), {
  ssr: false,
});

const Contact = dynamic(() => import("@/pages/Contact"), {
  ssr: false,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  ssr: false,
});

export default function Home() {
  const [showProject, setProjects] = useState(false);
  const [showSkills, setShowSkills] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [showContact, setShowContact] = useState(false);
  const [showFooter, setShowFooter] = useState(false);

  useEffect(() => {
    // Function to handle delay
    const loadAdditionalComponents = () => {
      setTimeout(() => setProjects(true), 1000);
      setTimeout(() => setShowSkills(true), 2000); // Delay of 1 second
      setTimeout(() => setShowResume(true), 3000); // Delay of 2 seconds
      setTimeout(() => setShowContact(true), 3000); // Delay of 3 seconds
      setTimeout(() => setShowFooter(true), 4000); // Delay of 4 seconds
    };

    // Start loading additional components after initial render
    loadAdditionalComponents();
  }, []);
  return (
    <>
      <Hero />
      {showProject && <Projects />}
      {showSkills && <Skills />}
      {showResume && <Resume />}
      {showContact && <Contact />}
      {showFooter && <Footer />}
    </>
  );
}
