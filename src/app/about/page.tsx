"use client";
import React from "react";
import Image from "next/image";
import profileImage from "../../../public/assets/cover_photo.jpeg";
import secondImage from "../../../public/assets/photo_2.png";
import thirdImage from "../../../public/assets/photo_3.png";
import Skills from "../_components/Skills";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { motion } from "framer-motion";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

// type Props = {}

const responsive = {
  desktop: {
    breakpoint: {
      max: 3000,
      min: 1024,
    },
    items: 1,
    slidesToSlide: 1,
  },
  tablet: {
    breakpoint: {
      max: 1024,
      min: 464,
    },
    items: 1,
    slidesToSlide: 1,
  },
  mobile: {
    breakpoint: {
      max: 464,
      min: 0,
    },
    items: 1,
    slidesToShow: 1,
  },
};

const About = () => {
  const fadeVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.2, ease: "easeOut" },
    },
  };
  return (
    <main className="max-w-4xl mx-auto p-4 sm:p-6 space-y-8 sm:space-y-10">
      <motion.h1
        className="font-bold text-3xl sm:text-4xl text-center md:text-left"
        variants={fadeVariants}
        initial="hidden"
        animate="visible"
      >
        About
      </motion.h1>

      <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-12">
        <div className="w-full md:w-2/3 flex flex-col items-center md:items-start">
          <motion.div
            className="text-base sm:text-lg leading-relaxed text-center md:text-left"
            variants={{
              ...fadeVariants,
              visible: {
                ...fadeVariants.visible,
                transition: {
                  ...fadeVariants.visible.transition,
                  delay: 0.2,
                  duration: 1,
                  ease: "easeInOut",
                },
              },
            }}
            initial="hidden"
            animate="visible"
          >
            Hi, I&apos;m Jason, a sophomore majoring in Computer Science and
            Engineering at Santa Clara University, driven and passionate about
            using my skills in software development and machine learning to
            create innovative applications which make a meaningful impact on
            society. I am eager to collaborate with like-minded individuals on
            projects that promote camaraderie as we work together on developing
            cutting-edge technologies.
          </motion.div>
          <Link href="/assets/Jason_Wu_Resume.pdf" className="mt-4">
            <motion.div
              variants={{
                ...fadeVariants,
                visible: {
                  ...fadeVariants.visible,
                  transition: {
                    ...fadeVariants.visible.transition,
                    delay: 0.6,
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              <Button className="w-full sm:w-auto">Resum&eacute;</Button>
            </motion.div>
          </Link>
        </div>

        <motion.div
          className="w-full md:w-1/3 flex justify-center mb-8 md:mb-14"
          variants={{
            ...fadeVariants,
            visible: {
              ...fadeVariants.visible,
              transition: {
                ...fadeVariants.visible.transition,
                delay: 0.4,
                duration: 1,
                ease: "easeIn",
              },
            },
          }}
          initial="hidden"
          animate="visible"
        >
          <Carousel
            swipeable={true}
            showDots={true}
            responsive={responsive}
            ssr={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            draggable={false}
            keyBoardControl={true}
            customTransition="transform 500ms ease-in-out"
            transitionDuration={500}
            containerClass="carousel-container w-full max-w-[300px]"
            dotListClass="custom-dot-list-style"
            itemClass="carousel-item-padding"
            arrows={false}
          >
            <div className="flex justify-center">
              <Image
                src={thirdImage}
                alt="Jason's third photo"
                width={300}
                height={300}
                className="rounded-lg transition-shadow duration-300 object-cover h-auto"
                placeholder="blur"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={profileImage}
                alt="Jason's profile photo"
                width={300}
                height={300}
                className="rounded-lg transition-shadow duration-300 object-cover h-auto"
                placeholder="blur"
              />
            </div>
            <div className="flex justify-center">
              <Image
                src={secondImage}
                alt="Jason's second photo"
                width={300}
                height={300}
                className="rounded-lg transition-shadow duration-300 object-cover h-auto"
                placeholder="blur"
              />
            </div>
          </Carousel>
        </motion.div>
      </div>

      <div className="pt-1 sm:pt-3">
        <Skills />
      </div>
    </main>
  );
};

export default About;
