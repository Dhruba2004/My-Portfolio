import { projectsData } from "@/lib/data";
import React from "react";
import SectionHeading from "./section-heading";
import Project from "./project";

export default function Projects() {
  return (
    <search>
      <SectionHeading>My projects</SectionHeading>
      <div className="relative top-[-1rem]">
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </search>
  );
}
