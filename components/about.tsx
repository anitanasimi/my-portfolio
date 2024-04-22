"use client";

import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function About() {

  const { ref, inView } = useInView({
    threshold: 0.75,
  });
    const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection("About");
    }
  }, [inView, setActiveSection, timeOfLastClick]);

  return (
    <motion.section
      ref={ref}
      className="scroll-mt-28 mb-28 max-w-[45rem] text-center leading-8 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        Im a passionate full-stack developer with a strong foundation in web
        development. My journey into the world of technology began at BCIT,
        where I honed my skills in HTML, CSS, and JavaScript. Since then, I've
        expanded my expertise to include advanced technologies such as
        TypeScript, React, and Next.js for frontend development, and Node.js,
        Express, and Django for backend development. I'm proficient in database
        management with MongoDB and PostgreSQL, and I use Git for version
        control. I also have experience with modern CSS frameworks like Tailwind
        CSS and animation libraries like Framer Motion. My diverse skill set
        allows me to approach projects with a holistic perspective, ensuring
        both functionality and aesthetics are top-notch.
      </p>
    </motion.section>
  );
}
