'use client'
import React from 'react'
import { LinkPreview } from '@/components/ui/link-preview'

type Work = {
    position: string,
    company: string,
    startDate: {
        month: string,
        year: string
    },
    endDate: {
        month: string,
        year: string
    },
    smallDesc: string,
    largeDesc: string,
    imageLink: string,
    src: string
}

const Experience = () => {

    const experience: Work[] = [
      {
        position: "Software Engineer Intern",
        company: "Datatrixs",
        startDate: {
          month: "July",
          year: "2024",
        },
        endDate: {
          month: "October",
          year: "2024",
        },
        smallDesc: "developed end-to-end agentic pipelines for accountants.",
        largeDesc: "",
        imageLink: "/assets/datatrixs-preview-image.png",
        src: "https://datatrixs.com/",
      },
      {
        position: "Undergraduate Researcher",
        company: "Human-AI Systems Optimization Lab",
        startDate: {
          month: "September",
          year: "2023",
        },
        endDate: {
          month: "July",
          year: "2024",
        },
        smallDesc:
          "machine learning to increase employment opportunities for amputees.",
        largeDesc: "",
        imageLink: "/assets/digital_twin_img.png",
        src: "https://scholar.google.com/citations?user=IM9VhkGGY0MC&hl=en",
      },
      {
        position: "Software Engineer",
        company: "AVBotz",
        startDate: {
          month: "August",
          year: "2021",
        },
        endDate: {
          month: "June",
          year: "2023",
        },
        smallDesc:
          "computer vision and object detection algorithms for autonomous underwater vehicles.",
        largeDesc: "",
        imageLink: "/assets/avbotz_img.avif",
        src: "https://www.youtube.com/watch?v=rhu36NEXQAI",
      },
    ];

    const colors: string[][] = [
      ["bg-yellow-200", "ring-yellow-200"],
      ["bg-green-300", "ring-green-300"],
      ["bg-blue-300", "ring-blue-300"],
      ["bg-red-300", "ring-red-300"],
    ];
  return (
    <div className="max-w-4xl mx-auto py-12 h-dvh">
      <h1 className="text-4xl font-bold mb-10">Experience</h1>
      <div className="relative">
        <div className="absolute left-[31px] top-7 bottom-0 w-[2px] bg-slate-300" />
        {experience.map((job, index) => {
          const color = colors[index][0];
          return (
            <div key={index} className="relative pl-16 pb-8">
              <div className="relative -left-8 top-7">
                <div
                  className={`absolute w-3.5 h-3.5 ${color} rounded-full transform -translate-x-1/2 z-10 ring-4 ring-opacity-30 ${colors[index][1]}`}
                ></div>
                {/* <div className={`absolute w-5 h-5 ${color} rounded-full transform -translate-x-1/2 -translate-y-0.5 `}></div> */}
              </div>
              <LinkPreview url={job.src} isStatic imageSrc={job.imageLink} width={200} height={150}>
                <div className="bg-white py-6 rounded-lg px-10">
                  <div className="flex justify-between md:w-5/6">
                    <h3 className="font-semibold pb-0.5">{job.company}</h3>
                    <h4 className="font-normal italic text-sm">
                      {job.startDate.month} {job.startDate.year} - {" "}
                      {job.endDate.month} {job.endDate.year}
                    </h4>
                  </div>
                  <h4 className="italic font-normal text-gray-500">
                    {job.position}
                  </h4>
                  <li className="px-2 text-sm">{job.smallDesc}</li>
                </div>
              </LinkPreview>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Experience;