"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

const AIResponsePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [question, setQuestion] = useState("");

  useEffect(() => {
    if (!query) {
      router.push("/learn");
      return;
    }
    setQuestion(query);
  }, [searchParams, router, query]); //run when both router and searchParams mount/change

  if (!question) {
    return <div>Loading...</div>;
  }

  return <div>{question}</div>;
};

export default AIResponsePage;
