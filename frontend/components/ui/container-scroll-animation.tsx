"use client";
import React, { useRef } from "react";
import { useScroll, useTransform, motion, MotionValue } from "framer-motion";

export const ContainerScroll = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const containerRef = useRef<any>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[80rem] flex items-center justify-center relative   "
      ref={containerRef}
    >
      <div
        className=" w-full relative  "
        style={{
          perspective: "900px",
        }}
      >
        <h2 className="text-5xl font-bold text-center   text-white">
          My Skills
        </h2>

        <Card rotate={rotate} translate={translate} scale={scale}>
          <div className="translate-y-28"> {children}</div>
        </Card>
      </div>
    </div>
  );
};

export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
    ></motion.div>
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
      style={{
        rotateX: rotate,
        scale,
      }}
    >
      <div className="pt-28">{children}</div>
    </motion.div>
  );
};
