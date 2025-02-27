import React from "react";
import Image from "next/image";
import profileImage from "../../../public/assets/cover_photo.jpeg";
import Skills from "../_components/Skills";
import { Button } from "@/components/ui/button";
import Link from "next/link";

// type Props = {}

const About = () => {
  return (
    <main className="max-w-4xl mx-auto p-6 space-y-12">
      <h1 className="font-bold text-4xl">About</h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
        <div className="md:w-2/3 flex flex-col">
          <div className="text-lg space-y-6 leading-relaxed">
            Hi, I&apos;m Jason, a sophomore majoring in Computer Science and
            Engineering at Santa Clara University, driven and passionate about
            using my skills in software development and machine learning to
            create innovative applications which make a meaningful impact on
            society. I am eager to collaborate with like-minded individuals on
            projects that promote camaraderie as we work together on developing
            cutting-edge technologies.
          </div>
          <Link href="/assets/Jason_Wu_Resume.pdf" className="md:w-1/5 mt-2">
            <Button>Resum&eacute;</Button>
          </Link>
        </div>

        <div className="md:w-1/3">
          <Image
            src={profileImage}
            alt="Jason's profile photo"
            width={300}
            height={300}
            className="rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
          />
        </div>
      </div>

      <div className="pt-4">
        <Skills />
      </div>
    </main>
  );
};

export default About;
