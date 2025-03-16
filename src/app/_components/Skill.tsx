import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Image from "next/image";
import "../css/skills.css";


type Props = {
    id: number,
    skill: string
}

const Skill = (props: Props) => {
  
  return (
    <TooltipProvider key={props.id}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Image
            key={props.id}
            src={`/assets/${props.skill}`}
            alt={`${props.skill.split(".")[0]}`}
            width={50}
            height={50}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>{props.skill.includes("_") ? props.skill.split(".")[0].split("_").join(" ") : props.skill.split(".")[0]}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default Skill