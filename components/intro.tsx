"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";
export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[50rem] text-center sm:mb-0 mb-28 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "tween", duration: 0.2 }}
          >
            <Image
              src="/intro.jpg"
              alt="my image"
              width="200"
              height="200"
              quality="95"
              priority={true}
              className="rounded-full border-[0.35rem] object-cover border-white shadow-xl h-48 w-48 "
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-10 mt-4 px-4 text-sm !leading-[1.5] sm:text-4xl font-normal "
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        Hi, I&apos;m Anita, a full-stack developer with a strong focus on
        frontend development. I&apos;m passionate about building innovative and
        user-friendly interfaces that bring ideas to life.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:bg-gray-950 active:scale-105 transition hover:scale-90"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now);
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white  px-4 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 transition hover:scale-90 cursor-pointer border border-purple-950/40 dark:bg-white/10"
          href="/resume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-gray-700  p-4 flex items-center gap-2 rounded-full border borderBlack
        cursor-pointer hover:scale-110 active:scale-110 focuse:scale-110 
         hover:text-gray-950 
dark:bg-white/20
dark:text-white/60
        "
          href="https://www.linkedin.com/in/anita-nasimi/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700  p-4 flex items-center gap-2 rounded-full border borderBlack
        cursor-pointer hover:scale-110 active:scale-110 focuse:scale-110
        hover:text-gray-950
        dark:bg-white/20
        dark:text-white/60
        "
          href="https://github.com/anitanasimi"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
