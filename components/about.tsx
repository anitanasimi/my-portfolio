"use client"
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
      <p className="mb-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
        I&apos;m a passionate{" "}
        <span className="font-bold text-gray-900 dark:text-gray-50">
          Full-stack Developer
        </span>{" "}
        with a strong foundation in web development.
        <br /> My journey into the world of technology began at{" "}
        <span className="font-semibold text-indigo-600 dark:text-indigo-400">
          BCIT
        </span>
        , where I honed my skills in{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          HTML
        </span>
        ,{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          CSS
        </span>
        , and{" "}
        <span className="font-medium text-blue-600 dark:text-blue-400">
          JavaScript.
        </span>
        <br />
        Since then, I&apos;ve expanded my expertise to include advanced
        technologies such as{" "}
        <span className="font-medium text-green-600 dark:text-green-400">
          TypeScript
        </span>
        ,{" "}
        <span className="font-medium text-green-600 dark:text-green-400">
          React
        </span>
        , and{" "}
        <span className="font-medium text-green-600 dark:text-green-400">
          Next.js
        </span>{" "}
        for frontend development, and{" "}
        <span className="font-medium text-red-600 dark:text-red-400">
          Node.js
        </span>
        ,{" "}
        <span className="font-medium text-red-600 dark:text-red-400">
          Express
        </span>
        , and{" "}
        <span className="font-medium text-red-600 dark:text-red-400">
          Django
        </span>{" "}
        for backend development.
        <br /> I&apos;m proficient in database management with{" "}
        <span className="font-medium text-purple-600 dark:text-purple-400">
          MongoDB
        </span>{" "}
        and{" "}
        <span className="font-medium text-purple-600 dark:text-purple-400">
          PostgreSQL
        </span>
        , and I use{" "}
        <span className="font-medium text-yellow-600 dark:text-yellow-400">
          Git
        </span>{" "}
        for version control. <br />I also have experience with modern CSS
        frameworks like{" "}
        <span className="font-medium text-pink-600 dark:text-pink-400">
          Tailwind CSS
        </span>{" "}
        and animation libraries like{" "}
        <span className="font-medium text-pink-600 dark:text-pink-400">
          Framer Motion
        </span>
        . <br />
        My diverse skill set allows me to approach projects with a holistic
        perspective, ensuring both functionality and aesthetics are top-notch.
      </p>
    </motion.section>
  );
}
