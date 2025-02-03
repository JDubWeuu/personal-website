import React from 'react'
import Image from 'next/image'
import "../css/skills.css"

type Icons = {
    languages: string[],
    frameworks: string[],
    developerTools: string[]
}

const Skills = () => {
    const iconList: Icons = {
        languages: ["python", "c++", "c", "java", "html", "css", "javascript", "typescript", "sql", "assembly"],
        frameworks: [],
        developerTools: []

    }
  return (
    <section>
      <h2 className="text-5xl font-semibold flex justify-center">Skills</h2>
      <div className="flex justify-evenly skills">
        <div className="skill-card">
          <h3 className="">Languages</h3>
          <div className='flex flex-wrap items-center gap-x-3'>
            {iconList.languages.map((language, ind) => {
                return (
                  <Image
                    key={ind}
                    src={`/assets/${language}.png`}
                    alt={`${language} icon`}
                    width={40}
                    height={40}
                  />
                );
            })}
          </div>
        </div>
        <div className="skill-card">
          <h3 className="">Frameworks</h3>
          <div>
            
          </div>
        </div>
        <div className="skill-card">
          <h3>Developer Tools</h3>
        </div>
      </div>
    </section>
  );
}

export default Skills