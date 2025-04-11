"use client"

import React, { useEffect, useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

// type Props = {}

const Searchbar = () => {
  const router = useRouter();
  const [userInput, setUserInput] = useState("");
  const searchRef = useRef<HTMLInputElement>(null);

  function onSubmit(event: React.MouseEvent<HTMLButtonElement> | React.KeyboardEvent<HTMLInputElement>) {
    event.preventDefault();
    if (!userInput) {
      alert("Make sure to pass in a valid user input!");
    }
    router.push(`/learn/search?q=${userInput}`);
  }

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key === 'k') {
        event.preventDefault();
        searchRef.current?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    }
  })

  return (
    <div className="w-full max-w-[800px] flex items-center mx-auto px-[20px] sm:px-[20px] md:px-[100px] relative">
      <div className="relative w-full">
        <Input
          type="text"
          ref={searchRef}
          placeholder="Type what you want to know about me... ⌘K"
          className="w-full font-medium border-slate-200 border-2 rounded-xl focus:ring-offset-2 focus:ring-2 focus:ring-blue-400 transition-colors pr-10 text-sm md:text-base"
          onKeyDown={(event) => event.key === "Enter" && onSubmit(event)}
          onChange={(event) => setUserInput(event.target.value)}
        />
        <button
          className="absolute right-0.5 rounded-r-lg top-1/2 transform -translate-y-1/2 h-8 w-6 hover:bg-slate-200 transition-colors bg-white flex items-center justify-center"
          onClick={onSubmit}
        >
          <Search className="h-4 w-4" />
        </button>
      </div>
    </div>
  );
};

export default Searchbar;
