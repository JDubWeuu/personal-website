"use client"
import React from 'react'
import "../css/skills.css"
import Skill from './Skill'
import { delay, motion } from 'framer-motion'

type Icons = {
    languages: string[],
    frameworks: string[],
    developerTools: string[]
}

const Skills = () => {
    const fadeVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.3, ease: "easeOut", delay: 1.4 },
      },
    };

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          when: "beforeChildren", // Wait for this animation to finish before animating children
          staggerChildren: 0.5, // Delay each child's animation by 0.5s
          duration: 2,
        },
      },
    };

    const cardVariants = {
      hidden: { opacity: 0 },
      visible: { opacity: 1, transition: { duration: 0.5, ease: "ease-out" } },
    };
    const iconList: Icons = {
      languages: [
        "python.png",
        "cpp.png",
        "c.svg",
        "java.png",
        "html.png",
        "css.png",
        "javascript.png",
        "typescript.png",
        "sql.png",
        "assembly.png",
      ],
      frameworks: [
        "reactjs.png",
        "nextjs.png",
        "nodejs.png",
        "flask.png",
        "fastapi.png",
        "mongodb.png",
        "opencv.png",
        "tailwind.png",
        "firebase.png",
        "tensorflow.png",
        "postgresql.png",
        "langchain.png"
      ],
      developerTools: [
        "aws.png",
        "google_cloud.png",
        "linux.png",
        "git.png",
        "github.png",
        "docker.png"
      ],
    };
  return (
    <section>
      <motion.h2
        className="text-5xl font-semibold flex justify-center"
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
      >
        Skills
      </motion.h2>
      <motion.div
        className="flex justify-center skills"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="skill-card"
          variants={cardVariants}
        >
          <h3 className="">Languages</h3>
          <div className="flex flex-wrap justify-start gap-x-3.5 gap-y-3.5">
            {iconList.languages.map((languageLink, ind) => {
              return <Skill skill={languageLink} id={ind} key={ind} />;
            })}
          </div>
        </motion.div>
        <motion.div
          className="skill-card"
          variants={cardVariants}
        >
          <h3 className="">Frameworks</h3>
          <div className="flex flex-wrap justify-start gap-x-3.5 gap-y-3.5">
            {iconList.frameworks.map((framework, ind) => {
              return <Skill skill={framework} id={ind} key={ind} />;
            })}
          </div>
        </motion.div>
        <motion.div className="skill-card" variants={cardVariants}>
          <h3>Developer Tools</h3>
          <div className="flex flex-wrap justify-start gap-x-3.5 gap-y-3.5">
            {iconList.developerTools.map((developerTool, ind) => {
              return <Skill skill={developerTool} key={ind} id={ind} />;
            })}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

export default Skills