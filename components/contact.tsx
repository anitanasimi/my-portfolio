"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import SubmitButton from "./submitButton";
import toast from "react-hot-toast";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  const { pending } = useFormStatus();
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
    >
      <SectionHeading>Contact me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:anitanasimi79@gmail.com">
          anitanasimi79@gmail.com
        </a>{" "}
      
      </p>
   
    </motion.section>
  );
}
