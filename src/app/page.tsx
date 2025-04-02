"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import profileImage from "../../public/assets/cover_photo.jpeg"; 
import { ReactTyped } from "react-typed";
import { useEffect, useState } from "react";
import { Github, Mail, Linkedin } from "lucide-react";
import { HoverBorderGradient } from "./_components/ui/hover-border-gradient";
import { ArrowButton } from "./_components/ui/Arrow";
import { links } from "@/config/site";

export default function Home() {
  const router = useRouter();
  const [isMounted, setIsMounted] = useState<boolean>(false);
  const [buttonClicked, setButtonClicked] = useState<boolean>(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (buttonClicked) {
      router.push("/about");
    }
  }, [buttonClicked, router]);

  return (
    <>
      <main className="flex min-h-screen flex-col items-center mt-20">
        <div className="w-full max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between px-4 gap-8">
          <div className="w-full md:max-w-lg flex flex-col items-center md:items-start">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-4 text-center md:text-left">
              Hello &#128075;,
            </h1>
            <div className="text-xl sm:text-2xl md:text-3xl font-normal text-center md:text-left">
              I&apos;m{" "}
              {isMounted && (
                <span className="inline-block sm:h-[48px]">
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
                </span>
              )}
            </div>

            <div className="relative mt-8 mb-6 md:hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-200 rounded-full blur-md transform scale-110"></div>
              <Image
                src={profileImage}
                alt="Profile Photo"
                width={250}
                height={250}
                className={`rounded-full relative z-10 object-cover fade-in w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] ${isMounted && "active"}`}
              />
            </div>

            <div className="flex items-center pt-3 pb-6 gap-x-3.5 justify-center md:justify-start w-full">
              <Link className="transition-all duration-300" href={`/contact`}>
                <Mail
                  size={45}
                  className="hover:brightness-200 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                className="transition-all duration-300"
                href={links.linkedin}
              >
                <Linkedin
                  size={45}
                  className="hover:brightness-200 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </Link>
              <Link
                className="transition-all duration-300"
                href={links.github}
              >
                <Github
                  size={45}
                  className="hover:brightness-200 transition-all duration-300"
                  strokeWidth={1.5}
                />
              </Link>
            </div>
            <div className="flex justify-center md:justify-start w-full">
              <HoverBorderGradient
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center"
                duration={0.5}
                onClick={() => setButtonClicked(!buttonClicked)}
              >
                <ArrowButton>Learn More</ArrowButton>
              </HoverBorderGradient>
            </div>
          </div>

          {/* Right: Image content - desktop only */}
          <div className="relative flex-shrink-0 md:mr-32 hidden md:block">
            <div className="absolute inset-0 bg-gradient-to-br from-gray-200 to-gray-200 rounded-full blur-md transform scale-110"></div>
            <Image
              src={profileImage}
              alt="Profile Photo"
              width={300}
              height={300}
              className={`rounded-full relative z-10 object-cover fade-in md:w-[300px] md:h-[300px] ${isMounted && "active"}`}
            />
          </div>
        </div>
      </main>
    </>
  );
}
