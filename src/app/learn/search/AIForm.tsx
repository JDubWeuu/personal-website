"use client"
import React, { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import ErrorMessage from "@/app/_components/ErrorMessage";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import SuccessMessage from "@/app/_components/SuccessMessage";

const formSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email(),
  message: z.string().nonempty(),
});

type FormSchema = z.infer<typeof formSchema>;

type Props = {
  aiMessage: string
}

const AIForm = (props: Props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormSchema>({
    resolver: zodResolver(formSchema),
  });
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [successMessage, setSuccessMessage] = useState<string>("");

  const sendForm: SubmitHandler<FormSchema> = async (data: FormSchema) => {
    console.log(data);
    const res = await fetch(
      "https://2ppjz9mj3h.execute-api.us-east-1.amazonaws.com/ja-google/send-email",
      {
        method: "POST",
        body: JSON.stringify({
          name: data.name,
          email: data.email,
          content: data.message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if (!res.ok) {
      setTimeout(() => {
        router.push("/learn");
      }, 3000);
      setErrorMessage("Unable to submit form, redirecting in three seconds...");
      return;
    }
    setTimeout(() => {
      router.push("/learn");
    }, 1000);
    setSuccessMessage("Form has been successfully submitted...redirecting");

  }

  if (errorMessage) {
    return <ErrorMessage errorMessage={errorMessage} />;
  }
  return (
    <>
      {successMessage.length > 0 && <SuccessMessage successMessage={successMessage} />}
      <p className="mb-2">{props.aiMessage}</p>
      <form
        onSubmit={handleSubmit(sendForm)}
        className="flex flex-col space-y-2 mb-3"
      >
        <div className="my-2">
          <Label htmlFor="name">Name:</Label>
          <Input
            className="w-[300px]"
            id="name"
            placeholder="Input your first and last name"
            {...register("name")}
          />
          {errors.name && <p>{errors.name.message}</p>}
        </div>
        <div className="my-2">
          <Label htmlFor="email">Email:</Label>
          <Input
            className=""
            id="email"
            placeholder="Input your email"
            {...register("email")}
          />
          {errors.email && <p>{errors.email?.message}</p>}
        </div>
        <div className="my-2">
          <Label htmlFor="message">Message Content:</Label>
          <Input
            className=""
            id="message"
            placeholder="Input what you want to say to Jason."
            {...register("message")}
          />
          {errors.message && <p>{errors.message?.message}</p>}
        </div>
        <div className="my-3">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </>
  );
};

export default AIForm;
