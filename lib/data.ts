import React from "react";
import { LuGraduationCap } from "react-icons/lu";
export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Education",
    hash: "#education",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Redux",
  "Express",
  "Python",
  "C",
  "C++",
  "Java",
  "Framer Motion",
] as const;

export const educationData = [
  {
    title: "Secondary",
    location: "Barasat PCS Govt.High School",
    description:
      "Successfully completed secondary standard studies and secured 86% in WBBSE examination.",
    icon: React.createElement(LuGraduationCap),
    date: "2019-2020",
  },
  {
    title: "Higher Secondary",
    location: "Barasat PCS Govt.High School ",
    description:
      "Successfully completed higher secondary standard studies and secured 85% in WBCHSE examination.",
    icon: React.createElement(LuGraduationCap),
    date: "2020 -2022",
  },
  {
    title: "Bachelor of Technology in Computer Science and Engineering",
    location: "University of Engineering and Management, Kolkata",
    description:
      " Currently on the path of becoming a software engineer and learn new technologies everyday.",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - present",
  },
] as const;
