import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { Suspense } from "react";
import AIResponsePage from "./search";

const Search = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AIResponsePage />
    </Suspense>
  );
};

export default Search;
