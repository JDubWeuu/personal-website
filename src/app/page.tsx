"use client";
import Image from "next/image";
import Link from "next/link";
import profileImage from "../../public/assets/cover_photo.jpeg"; // Adjust the path as necessary
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { Github, Mail, Linkedin, Sparkles } from 'lucide-react'
import Skills from "./_components/Skills";

export default function Home() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  return (
    <div className="">
      <main className="flex h-dvh flex-col items-center mt-20">
        {/* Use a container that spans the width and separates the two sections */}
        <div className="w-full max-w-6xl mx-auto flex items-center justify-between px-4">
          {/* Left: Text content */}
          <div className="max-w-lg flex flex-col">
            <h1 className="font-bold text-6xl md:text-7xl mb-4">
              Hello &#128075;,
            </h1>
            <div className="text-3xl font-normal">
              I&apos;m{" "}
              {isMounted && (
                <ReactTyped
                  strings={[
                    "<span class='text-red-500'>Jason Wu.</span>",
                    "<span class='text-green-500'>a Software Engineer.</span>",
                    "<span class='text-yellow-500'>a Data Engineer.</span>",
                    "<span class='text-blue-500'>an AI Engineer.</span>",
                  ]}
                  typeSpeed={70}
                  backSpeed={50}
                  loop
                  contentType="html"
                />
              )}
            </div>
            <div className="flex items-center py-6 gap-x-3.5 w-full">
              <Link className="transition-all duration-300" href={`/contact`}>
                <Mail
                  size={45}
                  className="hover:brightness-200 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                className="transition-all duration-300"
                href={`https://www.linkedin.com/in/jason-wu-261741215/`}
              >
                <Linkedin
                  size={45}
                  className="hover:brightness-200 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                className="transition-all duration-300"
                href={`https://github.com/JDubWeuu`}
              >
                <Github
                  size={45}
                  className="hover:brightness-200 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
          </div>

          {/* Right: Image content */}
          <div className="relative flex-shrink-0 mr-32">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-200 rounded-full blur-md transform scale-110"></div>
            <Image
              src={profileImage}
              alt="Profile Photo"
              width={300}
              height={300}
              className="rounded-full shadow-md relative z-10 object-cover"
            />
          </div>
        </div>
      </main>
      <Skills />
      <footer className="absolute bottom-0 w-full py-4 flex gap-6 flex-wrap items-center justify-center"></footer>
    </div>
  );
}
