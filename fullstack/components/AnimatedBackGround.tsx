import React, { useEffect } from "react";

interface DotsProps {
  onLoad: () => void;
}

const ParticlesBackground: React.FC<DotsProps> = ({ onLoad }) => {
  useEffect(() => {
    // Function to load the script dynamically
    const loadScript = (url: string, callback: () => void) => {
      if (document.querySelector(`script[src="${url}"]`)) {
        callback();
        return;
      }
      const script = document.createElement("script");
      script.src = url;
      script.onload = callback;
      document.body.appendChild(script);
    };

    // Load particles.js script and initialize particles
    loadScript(
      "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js",
      () => {
        (window as any).particlesJS("particles-js", {
          fps_limit: 10,
          particles: {
            number: { value: 80, density: { enable: true, value_area: 800 } },
            color: { value: "#335592" },
            shape: {
              type: "circle",
              stroke: { width: 0, color: "#000000" },
              polygon: { nb_sides: 5 },
              image: { src: "img/github.svg", width: 100, height: 100 },
            },
            opacity: {
              value: 0.5,
              random: false,
              anim: { enable: false, speed: 1, opacity_min: 0.1, sync: false },
            },
            size: {
              value: 3,
              random: true,
              anim: { enable: false, speed: 40, size_min: 0.1, sync: false },
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#ffffff",
              opacity: 0.4,
              width: 1,
            },
            move: {
              enable: true,
              speed: 6,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: { enable: false, rotateX: 600, rotateY: 1200 },
            },
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: { enable: true, mode: "repulse" },
              onclick: { enable: true, mode: "push" },
              resize: true,
            },
            modes: {
              grab: { distance: 400, line_linked: { opacity: 1 } },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3,
              },
              repulse: { distance: 200, duration: 0.4 },
              push: { particles_nb: 4 },
              remove: { particles_nb: 2 },
            },
          },
          retina_detect: true,
        });
      },
    );

    if (onLoad) {
      onLoad();
    }

    // Cleanup script when component unmounts
    return () => {
      const script = document.querySelector(
        'script[src="https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js"]',
      );
      if (script) {
        document.body.removeChild(script);
      }
    };
  }, [onLoad]);

  return (
    <div
      id="particles-js"
      className="w-full h-full fixed top-0 left-0 z-0 bg-black"
    >
      {/* Particles will be rendered here */}
    </div>
  );
};

export default ParticlesBackground;