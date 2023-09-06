"use client"
import React, { useEffect } from "react";
import SectionHeading from "./section-heading";
import {motion} from 'framer-motion';
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";

export default function About() {
  const {ref,inView} = useInView();
  const {setActiveSection}= useActiveSectionContext();
  useEffect(()=>{
    if(inView){
      setActiveSection("About");
    }
  },[inView,setActiveSection])
  
  return (
    <motion.section className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
    initial={{opacity:0,y:100}}
    animate={{opacity:1,y:0}}
    transition={{delay:0.175}}
    id="about"
    ref={ref}
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        A passionate Software Engineering Undergrad from Kolkata, 🇮🇳 Currently
        in the 2nd year of my B.Tech in Computer Science & Engineering from
        University of Engineering & Management, Kolkata.
        I am good at {""}<span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">My favorite part of programming</span> is the
        problem-solving aspect. I <span className="underline">love</span> the
        feeling of finally figuring out a solution to a problem. My core stack
        is{" "}
        <span className="font-bold">
          MongoDB, Express.js, React.js, and Node.js
        </span>
        . I am also familiar with programming languages like <span className="font-bold">{""}C, Python, Java, C++, Javascript.</span> I am always looking to
        learn new technologies.
        I am also Interested in <span className="font-bold">Cloud Computing , DevOps,</span> and a lot other fields
      </p>
      <p>
        <span className="italic">When I'm not coding</span>, I enjoy playing
        video games, watching movies, and playing with my friends.
      </p>
    </motion.section>
  );
}
