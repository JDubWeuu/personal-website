"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css"; // Make sure to import the CSS
import Image from "next/image";
import { useQuery } from "@tanstack/react-query";
import { fetchData } from "./fetch";
import ErrorMessage from "@/app/_components/ErrorMessage";
import AIForm from "./AIForm";
import { Button } from "@/components/ui/button";

const AIResponsePage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const query = searchParams.get("q");
  const [question, setQuestion] = useState("");

  const { status, data, error } = useQuery({
    queryKey: ["airesponse", question],
    queryFn: ({ queryKey }) => {
      const question = queryKey[1];
      return fetchData(question);
    },
    enabled: !!question,
  });

  useEffect(() => {
    if (error) {
      console.error("Error fetching data", error);
    }
  }, [error]);

  useEffect(() => {
    console.log(data);
  }, [data]);

  useEffect(() => {
    if (!query) {
      router.push("/learn");
      return;
    }
    if (query === question) {
      return;
    }
    setQuestion(query);
  }, [searchParams, router, query]); //run when both router and searchParams mount/change

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto pt-8 px-4 h-dvh">
      <div className="w-full">
        {/* Header with icon */}
        <div className="flex items-center space-x-3 mb-4 pb-2 border-b border-gray-200">
          <Image
            src={"/assets/stars.png"}
            width={25}
            height={20}
            alt="ai search logo"
            className="object-contain"
          />
          <h3 className="font-bold text-lg tracking-tight text-gray-800">
            AI Search Overview
          </h3>
        </div>

        <div className="mb-6">
          <h2 className="text-xl font-medium text-gray-900 mb-1">{question}</h2>
          <p className="text-sm text-gray-500">Based on search results</p>
        </div>

        <div
          className={`bg-white rounded-lg p-4 shadow-sm border max-h-screen border-gray-100 ${
            error && "border-red-500 bg-red-200"
          }`}
        >
          {status === "pending" ? (
            <SkeletonTheme
              baseColor="#e0f2fe"
              highlightColor="#bfdbfe"
              duration={1.5}
            >
              <p className="text-base leading-relaxed text-gray-700">
                <Skeleton count={5} />
              </p>
              <div className="mt-4">
                <Skeleton width={120} height={20} />
              </div>
            </SkeletonTheme>
          ) : status === "error" ? (
            <>
              <ErrorMessage errorMessage={error.message} />
            </>
          ) : data.contact === true ? (
            <>
              <AIForm aiMessage={data.data.response} />
              <Button
                onClick={() => router.back()}
                className="mb-2 border-black bg-white text-black hover:bg-black hover:text-black hover:border-black"
              >
                Try Another Query
              </Button>
            </>
          ) : (
            <>
              <div className="h-full flex flex-col justify-between">
                <p className="text-black text-md font-medium">
                  {data.data.response}
                </p>

                <div>
                  <Button
                    onClick={() => router.back()}
                    className="mb-2 border-black bg-white text-black hover:bg-black hover:text-black hover:border-black"
                  >
                    Try Another Query
                  </Button>
                  <p className="text-slate-400 text-sm">
                    Don&apos;t always trust AI Generated Content.
                  </p>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default AIResponsePage;
