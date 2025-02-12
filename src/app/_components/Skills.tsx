import React from 'react'
import "../css/skills.css"
import Skill from './Skill'

type Icons = {
    languages: string[],
    frameworks: string[],
    developerTools: string[]
}

const Skills = () => {
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
      <h2 className="text-5xl font-semibold flex justify-center">Skills</h2>
      <div className="flex justify-center skills">
        <div className="skill-card">
          <h3 className="">Languages</h3>
          <div className='flex flex-wrap justify-start gap-x-3.5 gap-y-3.5'>
            {iconList.languages.map((languageLink, ind) => {
                return (
                  <Skill skill={languageLink} id={ind} key={ind} />
                );
            })}
          </div>
        </div>
        <div className="skill-card">
          <h3 className="">Frameworks</h3>
          <div className='flex flex-wrap justify-start gap-x-3.5 gap-y-3.5'>
            {iconList.frameworks.map((framework, ind) => {
              return (
                <Skill skill={framework} id={ind} key={ind} />
              );
            })}
          </div>
        </div>
        <div className="skill-card">
          <h3>Developer Tools</h3>
          <div className='flex flex-wrap justify-start gap-x-3.5 gap-y-3.5'>
            {iconList.developerTools.map((developerTool, ind) => {
              return (
                <Skill skill={developerTool} key={ind} id={ind}/>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills