"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  title,
  children,
}: {
  title: React.ReactNode;
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 800);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.8, 0.9] : [0.9, 0.8];
  };

  const rotate = useTransform(scrollYProgress, [10, 1], [1, 50]);
  const scale = useTransform(scrollYProgress, [0, 0.9], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div className="md:h-[60rem] xs:h-[45rem] relative" ref={containerRef}>
      <div
        className="sticky top-0 transition-all  duration-100 ease-in-out "
        style={{
          perspective: "1200px",
        }}
      >
        <div className="xs:pt-10 md:pt-36 "> {title}</div>

        <Card rotate={rotate} translate={translate} scale={scale}>
          <div className="xl:px-32 xs:px-auto "> {children}</div>
        </Card>
      </div>
    </div>
  );
};

export const Card = ({
  rotate,
  scale,
  children,
}: {
  rotate: MotionValue<number>;
  scale: MotionValue<number>;
  translate: MotionValue<number>;
  children: React.ReactNode;
}) => {
  return (
    <motion.div
      className="transition-all duration-500 ease-in-out "
      style={{
        rotateX: rotate,
        rotateY: rotate,
        scale,
      }}
    >
      {children}
    </motion.div>
  );
};
