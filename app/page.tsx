import React from 'react'
import Intro from "@/components/intro";
import About from "@/components/about";
import Skills from "@/components/skills";
import SectionDivider from "@/components/section-divider";
import Education from "@/components/education";
import Contact from "@/components/contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <Intro/>
    <SectionDivider/>
    <About/>
    <Skills/>
    <Education/>
    <Contact/>
    </main>
  )
}
