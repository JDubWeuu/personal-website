'use client'
import { Suspense } from "react";
import AIResponsePage from "./search";

import {
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";


const queryClient = new QueryClient();

const Search = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <Suspense fallback={<div>Loading...</div>}>
        <AIResponsePage />
      </Suspense>
    </QueryClientProvider>
  );
};

export default Search;
