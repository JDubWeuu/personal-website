"use client";

import React, { useEffect } from "react";
import {
  Form,
  FormField,
  FormLabel,
  FormControl,
  FormDescription,
  FormMessage,
  FormItem,
} from "@/components/ui/form";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from 'zod'
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
    name: z.string()
        .nonempty("Name is required")
        .refine((val) => isNaN(Number(val)), {
            message: "Name must be a string, not a number",
        }),
});

const Contact = () => {
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
        name: "",
    },
    mode: "onChange"
  });

//   const onSubmit = (data: z.infer<typeof contactSchema>) => {
//     console.log('Form submitted:', data);
//   };

//   const onError = (errors: any) => {
//     console.log('Form errors:', errors);
//   };

  useEffect(() => {
    console.log(form);
  }, []);
  return (
    <div className="flex justify-center items-center w-full min-h-screen">
      <Card className="w-[400px]">
        <CardHeader>
          <CardTitle className="font-bold text-4xl">Contact</CardTitle>
          <CardDescription>
            For any inquires, you can contact me here
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form>
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => {
                  return (
                    <>
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input placeholder="Input your first and last name" {...field} />
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
              ></FormField>
              <Button type="submit">
                Send
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
};

export default Contact;
