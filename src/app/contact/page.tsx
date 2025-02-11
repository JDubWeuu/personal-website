"use client";

import React, { useEffect } from "react";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .refine((val) => isNaN(Number(val)), {
      message: "Name must be a string, not a number",
    }),
  message: z
    .string()
    .nonempty("Message content must be included in contact form"),
});

const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      message: "",
    },
    mode: "onChange",
  });

  //   const onSubmit = (data: z.infer<typeof contactSchema>) => {
  //     console.log('Form submitted:', data);
  //   };

  //   const onError = (errors: any) => {
  //     console.log('Form errors:', errors);
  //   };

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    console.log(values);
    // make a post request to api with values from form and send the email to my email
  };

  useEffect(() => {
    console.log(form);
    console.log(Object.keys(form?.formState.touchedFields));
    console.log(form?.formState?.errors);
  }, [form.formState]);
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle className="font-bold text-4xl">Contact</CardTitle>
          <CardDescription>
            For any inquires, you can contact me here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)}>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <>
                      <FormItem className="mb-6">
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Input your first and last name"
                            {...field}
                          />
                        </FormControl>
                        {form?.formState?.errors?.name && (
                          <>
                            <FormMessage>
                              {form.formState.errors.name.message}
                            </FormMessage>
                          </>
                        )}
                      </FormItem>
                    </>
                  );
                }}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => {
                  return (
                    <>
                      <FormItem className="mb-6">
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Type in your inquiry here."
                            {...field}
                          />
                        </FormControl>
                        {form?.formState?.errors?.message && (
                          <FormMessage>
                            {form?.formState?.errors?.message?.message}
                          </FormMessage>
                        )}
                      </FormItem>
                    </>
                  );
                }}
              />
              <Button type="submit">Send</Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
