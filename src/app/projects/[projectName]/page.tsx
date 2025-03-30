import React from "react";
import { ProjectInformationType } from "@/app/models/ProjectInformation";
import { notFound } from "next/navigation";
import Image from "next/image";
import Used from "../Used";
import Links from "../Links";

const ProjectInformation = async ({
  params,
}: {
  params: Promise<{ projectName: string }>;
}) => {
  const projectInformation: ProjectInformationType[] = [
    {
      name: "Nezerac",
      content:
        "Secured 2nd Place in an AI hackathon hosted by AWS and Inrix, competing against 349 participants (36 teams). In just 24 hours, my team developed an AI agent that streamlines the process of sourcing suppliers, analyzing product pricing, and negotiating deals. Built with Next.js, AWS Lambda, Bedrock, DynamoDB, SES, and S3, the agent empowers business owners to focus on running and growing their businesses instead of having to dedicate their time to tedious tasks.",
      techStack: [
        "AWS",
        "Lambda",
        "DynamoDB",
        "AWS S3",
        "Next.js",
        "Oxylabs",
        "Python",
        "TypeScript",
      ],
      links: {
        GitHub: "https://github.com/okay1204/aws-hack-front",
        DevPost: "https://devpost.com/software/nezerac",
        imageLink: "/assets/nezerac_demo.jpg",
        videoLink: "https://youtu.be/rAX1ihyIF5g",
      },
      imageSettings: {
        width: 400,
        height: 400,
      },
    },
    {
      name: "Visionairy",
      content:
        "Secured the Most Likely to Be a Startup prize at a hackathon with over 330+ participants from across California. I developed a backend using FastAPI, Langchain, Google Cloud Speech-to-Text Models, and Browser Use to automate and ease the booking process of flights for those who are visually impaired.",
      techStack: [
        "FastAPI",
        "LangChain",
        "OpenAI API",
        "Next.js",
        "Google Cloud",
        "Python",
        "TypeScript",
      ],
      links: {
        GitHub: "https://github.com/JDubWeuu/h4h-2025",
        DevPost: "https://devpost.com/software/visionairy",
        imageLink: "/assets/visionairy_demo.jpg",
        videoLink: "https://youtu.be/ftuHUrt1KTg",
      },
      imageSettings: {
        width: 400,
        height: 400,
      },
    },
    {
      name: "Personal Website",
      content: "The current iteration of my personal website.",
      techStack: [
        "FastAPI",
        "LangChain",
        "Next.js",
        "Framer Motion",
        "PostgreSQL",
        "Supabase",
        "Python",
        "Groq",
        "TypeScript",
        "Redis",
        "Docker",
        "AWS"
      ],
      links: {
        GitHub: "https://github.com/JDubWeuu/personal-website",
        imageLink: "/assets/personal-website-img.png",
      },
      imageSettings: {
        width: 300,
        height: 100,
      },
    },
  ];

  const paramValues = await params;
  let projectName = paramValues.projectName;
  console.log(projectName);
  if (projectName === "personal-website") {
    projectName = "Personal Website";
  }
  const projectToRender = projectInformation.filter((project) => {
    return project.name.toLowerCase() === projectName.toLowerCase();
  })[0];

  if (!projectToRender) {
    return notFound();
  }

  return (
    <>
      <div className="flex justify-center items-center">
        <main className="max-w-5xl w-full px-6 h-[680px]">
          {/* Header on top left */}
          <header className="my-6">
            <h2 className="font-bold text-3xl">{projectToRender.name}</h2>
          </header>
          {/* Image and Description Layout */}
          <div className="flex items-start justify-between w-full p-2 space-x-3">
            {/* Image Centered */}
            <div className="w-1/2 flex justify-center">
              <div className="flex flex-col space-y-4">
                {" "}
                {/* Increased spacing */}
                <Image
                  src={projectToRender.links?.imageLink as string}
                  alt={projectToRender.name}
                  className="h-auto shadow-lg"
                  width={projectToRender.imageSettings.width}
                  height={projectToRender.imageSettings.height}
                />
                <Used skills={projectToRender.techStack} />
              </div>
            </div>
            <div className="w-1/2 flex items-start flex-col">
              <div>
                <p className="text-lg tracking-tight font-normal mb-8">
                  {projectToRender.content}
                </p>
              </div>
              <Links GitHub={projectToRender.links?.GitHub} DevPost={projectToRender.links?.DevPost} videoLink={projectToRender.links?.videoLink} />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ProjectInformation;
