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
    <div className="sm:w-[400px] md:w-[800px] flex justify-start items-start md:mx-[100px] mx-[20px] relative">
      <Input
        type="text"
        ref={searchRef}
        placeholder="Type what you want to know about me... ⌘K"
        className="w-full font-medium border-slate-200 border-2 rounded-xl focus:ring-offset-2 focus:ring-2 focus:ring-blue-400 transition-colors pr-10 text-sm md:text-base"
        onKeyDown={(event) => event.key === "Enter" && onSubmit(event)}
        onChange={(event) => setUserInput(event.target.value)}
      />
      <button
        className="absolute right-[2px] px-1.5 h-[calc(100%-4px)] hover:bg-slate-300 transition-colors rounded-tr-xl rounded-br-xl bg-white my-auto top-1/2 -translate-y-1/2"
        onClick={onSubmit}
      >
        <Search className="h-4 w-4" />
      </button>
    </div>
  );
};

export default Searchbar;
