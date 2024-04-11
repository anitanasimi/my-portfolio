import React from "react";
import Intro from "@/components/intro";
import SectionDivider from "@/components/section-devider";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <div className="flex flex-col items-center px-4">
      <Intro />
    <SectionDivider/>
    <About/>
    <Projects/>
    <Skills/>
    <Contact/>
    </div>
  );
}
