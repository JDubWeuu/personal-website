"use server";

export type DataResponse = {
  data: {
    response: string;
    link: string;
  };
  contact: boolean;
};

export const fetchData = async (question: string): Promise<DataResponse> => {
  const response = await fetch(
    `https://xwl3kbkucufa6m34gzn3nopmje0qhfao.lambda-url.us-east-1.on.aws/ja-google/query/?q=${question}`,
    {
      method: "GET"
    }
  );
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data: DataResponse = await response.json();
  return data;
};
