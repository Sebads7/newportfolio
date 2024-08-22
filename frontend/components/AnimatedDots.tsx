import React, { useEffect, useRef } from "react";

interface AnimatedDotsProps {
  onLoad: () => void;
}

const AnimatedDots: React.FC<AnimatedDotsProps> = ({ onLoad }) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    handleResize(); // Set initial size

    const dots = [...Array(15)].map(() => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 2,
      speedX: Math.random() * 3 - 1.5,
      speedY: Math.random() * 3 - 1.5,
    }));

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height); // Clear canvas

      ctx.fillStyle = "black";
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = "white";
      dots.forEach((dot) => {
        dot.x += dot.speedX;
        dot.y += dot.speedY;
        if (dot.x > canvas.width || dot.x < 0) dot.speedX *= -1;
        if (dot.y > canvas.height || dot.y < 0) dot.speedY *= -1;

        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.size, 0, Math.PI * 2);
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    if (onLoad) {
      onLoad();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [onLoad]);

  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 -z-10 w-full h-full"
    />
  );
};

export default AnimatedDots;
