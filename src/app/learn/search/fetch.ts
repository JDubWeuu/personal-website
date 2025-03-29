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
    `http://3.95.159.41/ja-google/query/?q=${question}`,
    {
      method: "GET",
    }
  );
  if (!response.ok) {
    throw Error(response.statusText);
  }
  const data: DataResponse = await response.json();
  return data;
};
