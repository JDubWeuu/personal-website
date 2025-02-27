import React from "react";
import Project, { Props as ProjectProps } from "./Project";

const Projects = () => {
  const projectsInfo: ProjectProps[] = [
    {
      title: "Nezerac",
      description: "AI Agent for Business Owners.",
      logoLink: "/assets/nezerac.png",
      redirectLink: "/projects/nezerac"
    },
    {
        title: "Visionairy",
        description: "Automating Flight Booking for Visually Impaired.",
        logoLink: "/assets/visionairy.png",
        redirectLink: "/projects/visionairy"
    }
  ];

  return (
    <div className="mt-6 ml-10">
      <header className="ml-8">
        <h1 className="font-bold text-3xl mb-2">Projects</h1>
        <span className="w-full text-slate-600">
          Take a look at some of the projects I&#39;ve built!
        </span>
      </header>
      <section className="flex items-center p-8 space-x-6">
        {projectsInfo.map((project, i) => {
            return <Project key={i} title={project.title} description={project.description} logoLink={project.logoLink} redirectLink={project.redirectLink} />
        })}
      </section>
    </div>
  );
};

export default Projects;
