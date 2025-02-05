import React from 'react'
import Image from 'next/image'
import "../css/skills.css"
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

type Icons = {
    languages: string[],
    frameworks: string[],
    developerTools: string[]
}

const Skills = () => {
    const iconList: Icons = {
        languages: ["python.png", "cpp.png", "c.svg", "java.png", "html.png", "css.png", "javascript.png", "typescript.png", "sql.png", "assembly.png"],
        frameworks: [],
        developerTools: []

    }
  return (
    <section>
      <h2 className="text-5xl font-semibold flex justify-center">Skills</h2>
      <div className="flex justify-evenly skills">
        <div className="skill-card">
          <h3 className="">Languages</h3>
          <div className='flex flex-wrap items-center gap-x-3.5 gap-y-3.5'>
            {iconList.languages.map((languageLink, ind) => {
                return (
                  <TooltipProvider key={ind}>
                    <Tooltip>
                      <TooltipTrigger asChild>
                        <Image
                          key={ind}
                          src={`/assets/${languageLink}`}
                          alt={`${languageLink.split(".")[0]}`}
                          width={50}
                          height={50}
                        />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>{languageLink.split(".")[0]}</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
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