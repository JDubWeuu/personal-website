"use client"
import React from "react";
import Project, { Props as ProjectProps } from "./Project";
import { motion } from 'framer-motion';

const Projects = () => {
  const containerVariants = {
    hidden:{},
    visible: {
      transition: {
        staggerChildren: 0.3
      }
    }
  }
  const cardVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      },
    },
  };
  const projectsInfo: ProjectProps[] = [
    {
      title: "Nezerac",
      description: "AI Agent for Business Owners.",
      logoLink: "/assets/nezerac.png",
      redirectLink: "/projects/nezerac",
    },
    {
      title: "Visionairy",
      description: "Automating Flight Booking for Visually Impaired.",
      logoLink: "/assets/visionairy.png",
      redirectLink: "/projects/visionairy",
    },
    {
      title: "Personal Website",
      description: "My current personal website developed with Next.js and FastAPI.",
      logoLink: "/assets/personal-website-img.png",
      redirectLink: "/projects/personal-website"
    }
  ];

  return (
    <div className="mt-6 h-dvh flex flex-col items-center">
      <div>
        <header className="ml-8">
          <h1 className="font-bold text-3xl mb-2">Projects</h1>
          <span className="w-full text-slate-600">
            Take a look at some of the projects I&#39;ve built!
          </span>
        </header>
        <section className="">
          <motion.ul
            className="flex items-center p-8 space-x-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {projectsInfo.map((project, i) => {
              return (
                <motion.li
                  key={i}
                  variants={cardVariants}
                  className="group border bg-white max-w-sm border-gray-200 rounded-xl shadow-sm hover:bg-gray-100 transition duration-300 w-[300px] h-[340px]"
                >
                  <Project
                    title={project.title}
                    description={project.description}
                    logoLink={project.logoLink}
                    redirectLink={project.redirectLink}
                  />
                </motion.li>
              );
            })}
          </motion.ul>
        </section>
      </div>
    </div>
  );
};

export default Projects;
