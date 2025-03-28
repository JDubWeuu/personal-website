"use client";

import React, { useEffect, useRef, useState } from "react";
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
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useForm, Controller } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
// import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import ReCAPTCHA from "react-google-recaptcha";
import { zodResolver } from "@hookform/resolvers/zod";

const contactSchema = z.object({
  name: z
    .string()
    .nonempty("Name is required")
    .refine((val) => isNaN(Number(val)), {
      message: "Name must be a string, not a number",
    }),
  email: z.string().email("Please input a valid email"),
  message: z
    .string()
    .nonempty("Message content must be included in contact form"),
  captcha: z.string(),
});

const Contact = () => {
  const captchaRef = useRef<ReCAPTCHA>(null);
  const form = useForm<z.infer<typeof contactSchema>>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      message: "",
      email: "",
      captcha: "",
    },
    mode: "onChange",
  });

  const [showAlert, setShowAlert] = useState<string>("");

  const onSubmit = async (values: z.infer<typeof contactSchema>) => {
    let captchaValue;
    if (captchaRef.current) {
      captchaValue = captchaRef.current.getValue();
    }
    if (!captchaValue) {
      alert("Make sure to do the CAPTCHA before submitting the form!");
      return;
    }
    console.log(values);
    try {
      const res = await fetch("http://127.0.0.1:8000/contact/send-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: values.name,
          email: values.email,
          content: values.message,
          captchaCode: values.captcha,
        }),
      });
      if (!res.ok) {
        throw Error("Unable to send contact form.");
      }
      const { message }: { message: string } = await res.json();
      setShowAlert(message);
    } catch (error) {
      console.error(error as Error);
    }
  };

  useEffect(() => {
    console.log("passed");
    console.log(form);
    console.log(form.getValues());
    console.log(Object.keys(form?.formState.touchedFields));
    console.log(form?.formState?.errors);
  }, [form.formState]);

  useEffect(() => {
    if (showAlert) {
      const timer = setTimeout(() => {
        setShowAlert("");
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [showAlert]);

  return (
    <div className="flex justify-center items-center w-full min-h-screen mb-6">
      <Card className="w-[420px]">
        <CardHeader>
          <CardTitle className="font-bold text-4xl">Contact</CardTitle>
          <CardDescription>
            For any inquires, you can contact me here.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {showAlert.length > 0 && (
            <Alert className="mb-4" variant="success">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>{showAlert}</AlertDescription>
            </Alert>
          )}
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
                name="email"
                render={({ field }) => {
                  return (
                    <>
                      <FormItem className="mb-6">
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Input your email address"
                            {...field}
                          />
                        </FormControl>
                        {form?.formState?.errors?.email && (
                          <>
                            <FormMessage>
                              {form.formState.errors.email.message}
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
              <Controller
                name="captcha"
                control={form.control}
                rules={{ required: "Please complete the CAPTCHA" }}
                render={({ field }) => {
                  return (
                    <div className="mb-6">
                      <ReCAPTCHA
                        sitekey={
                          process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY || ""
                        }
                        ref={captchaRef}
                        onChange={field.onChange}
                        onBlur={field.onBlur}
                      />
                      {form.formState.errors.captcha && (
                        <p>{form.formState.errors.captcha.message}</p>
                      )}
                    </div>
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
