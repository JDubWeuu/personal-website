"use client";

import React, { useState } from "react";
import Searchbar from "../_components/Searchbar";
import { Suspense } from "react";
// type Props = {}

type Message = {
  role: string;
  content: string;
};

const Learn = () => {
  const [] = useState<Message[]>([]);
  return (
    <>
      <header className="my-3 mx-4 md:ml-[100px] w-full flex flex-col">
        <h1 className="font-bold text-3xl">Meet Ja-Google!</h1>
        <div className="text-slate-600 mt-2">
          <p className="text-sm md:text-base">
            You can query this LLM to learn more about me! Ask about hobbies,
            goals, aspirations, or anything else!
          </p>
        </div>
      </header>
      <div className="flex justify-start items-start min-h-screen">
        <Suspense>
          <Searchbar />
        </Suspense>

        {/* <section className="border border-solid rounded-lg h-[500px] w-full ml-[100px] mr-[200px] shadow-md"></section> */}
      </div>
    </>
  );
};

export default Learn;
