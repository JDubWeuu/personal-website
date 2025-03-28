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
          className={`bg-white rounded-lg p-4 shadow-sm border h-[50vh] overflow-y-auto border-gray-100 ${
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
                className="mb-2 border-black bg-white text-black hover:bg-black hover:text-white hover:border-black transition-colors"
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
                    className="mb-2 border-black bg-white text-black hover:bg-black hover:text-white hover:border-black transition-colors"
                  >
                    Try Another Query
                  </Button>
                  <div className="flex items-center gap-2 mt-1 p-2 text-xs">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="text-amber-500"
                    >
                      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                      <line x1="12" y1="9" x2="12" y2="13"></line>
                      <line x1="12" y1="17" x2="12.01" y2="17"></line>
                    </svg>
                    <span className="font-medium">Don't always trust AI-generated content</span>
                  </div>
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
