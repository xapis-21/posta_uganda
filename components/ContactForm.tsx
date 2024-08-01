"use client";

import { useTransition, useState } from "react";

// import { Resend } from "resend";

import * as z from "zod";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MessageSchema } from "@/schemas";
import { SendEmail } from "@/actions/send-email";
import FormError from "./FormError";
import FormSuccess from "./FormSucces";
import { Button } from "@/components/ui/button";

const ContactForm = () => {
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | undefined>();
  const [success, setSucess] = useState<string | undefined>();

  const form = useForm<z.infer<typeof MessageSchema>>({
    resolver: zodResolver(MessageSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
      phone: ""
    },
  });

  const onSubmit = (values: z.infer<typeof MessageSchema>) => {
    setError("");
    setSucess("");
    startTransition(() => {
      SendEmail(values).then((data) => {
        setError(data.error);
        setSucess(data.success);
        form.reset();
      });
    });
  };

  return (
    <Card className="w-full h-fit max-w-[600px] shadow-2xl border-white bg-white/60 backdrop-blur-2xl py-4 md:py-8">
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="bg-white/60"
                        placeholder="John Doe"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="bg-white/60"
                        placeholder="johndoe@example.com"
                        type="email"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone number</FormLabel>
                    <FormControl>
                      <Input
                        {...field}
                        disabled={isPending}
                        className="bg-white/60"
                        placeholder="+00 100 002220"
                        type="tel"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            

              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={isPending}
                        rows={6}
                        className="bg-white/60"
                        placeholder="provide message here."
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormError message={error} />
            <FormSuccess message={success} />

            <Button type="submit" disabled={isPending} className="ml-auto">
              Send message
            </Button>
          </form>
        </Form>
      </CardContent>
      <CardFooter>
        <p className="text-[10px] text-center text-secondary-foreground/50">

          <br />
          By submitting this form I give consent for this website to store my
          submitted information for the purpose of responding to my inquiry.
        </p>
      </CardFooter>
    </Card>
  );
};

export default ContactForm;
