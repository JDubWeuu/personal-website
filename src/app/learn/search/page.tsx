"use client"
import React, { Suspense, useEffect, useState } from 'react'
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
    }, [searchParams, router]); //run when both router and searchParams mount/change

    // if (!question) {
    //   return <div>Loading...</div>;
    // }

    return (
      <Suspense fallback={<div>Loading...</div>}>
        <div>{question}</div>
      </Suspense>
    );
}

export default AIResponsePage