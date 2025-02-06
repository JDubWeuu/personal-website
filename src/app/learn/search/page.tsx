"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


const AIResponsePage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [question, setQuestion] = useState("");
    

    useEffect(() => {
      const query = searchParams.get("q");
      if (!query) {
        router.push("/learn");
        return;
      }
      setQuestion(query);
    }, [searchParams, router]); //run when router and searchParams mount

    if (!question) {
      return <div>Loading...</div>;
    }

    return (
      <div>{question}</div>
    )
}

export default AIResponsePage