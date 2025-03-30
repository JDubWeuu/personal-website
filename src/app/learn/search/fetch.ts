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
    `https://ljaubtqyl2.execute-api.us-east-1.amazonaws.com/ja-google/query/?q=${question}`,
    {
      method: "GET",
      headers: {
        "x-api-key": process.env.API_KEY || "",
      },
    }
  );
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data: DataResponse = await response.json();
  return data;
};
