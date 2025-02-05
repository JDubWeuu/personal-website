"use client"
import React, { useEffect, useState } from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation'


const AIResponsePage = () => {
    const router = useRouter();
    const searchParams = useSearchParams();
    const [question, setQuestion] = useState("");
    useEffect(() => {
      if (!searchParams.get("q")) {
        router.push("/learn");
      }
      setQuestion(searchParams.get("q") as string);
    }, [])


  return (
    <div>{question}</div>
  )
}

export default AIResponsePage