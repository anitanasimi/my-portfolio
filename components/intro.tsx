"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="max-w-[40rem] text-center sm:mb-0 scroll-mt-[50rem] mb-40"
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
              width="150"
              height="150"
              quality="95"
              priority={true}
              className="rounded-full border-[0.25rem] object-cover border-white shadow-xl h-48 w-48 mb-4"
            />
          </motion.div>
        </div>
      </div>
      <motion.p
        className="mb-6 mt-2 px-4 !leading-[1.5] sm:text-2xl font-normal"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="block text-4xl font-bold sm:text-6xl text-gray-900 dark:text-gray-50">
          Anita Nasimi
        </span>
        <span className="block text-lg sm:text-2xl mt-2 text-gray-700 dark:text-gray-300">
          Web Developer
        </span>
        <span className="block text-sm sm:text-xl text-gray-600 dark:text-gray-400">
          Specialized in both front-end and back-end development
        </span>
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center gap-2 px-4 text-base font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-5 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-100 hover:bg-gray-950 active:scale-105 transition hover:scale-90"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-2 transition" />
        </Link>
        <a
          className="group bg-white px-3 py-2 flex items-center gap-2 rounded-full outline-none focus:scale-110 active:scale-105 transition hover:scale-90 cursor-pointer border border-purple-950/40 dark:bg-white/10"
          href="/resume.pdf"
          download
        >
          Resume{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white text-gray-700 p-3 flex items-center gap-2 rounded-full border borderBlack cursor-pointer hover:scale-110 active:scale-110 focuse:scale-110 hover:text-gray-950 dark:bg-white/20 dark:text-white/60"
          href="https://www.linkedin.com/in/anita-nasimi/"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="bg-white text-gray-700 p-3 flex items-center gap-2 rounded-full border borderBlack cursor-pointer hover:scale-110 active:scale-110 focuse:scale-110 hover:text-gray-950 dark:bg-white/20 dark:text-white/60"
          href="https://github.com/anitanasimi"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
