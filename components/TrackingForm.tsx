"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { useRouter } from "next/navigation";
import { LuPackageSearch } from "react-icons/lu";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  trackingNumber: z.string().min(1, {
    message: "Tracking number is required.",
  }),
});

export function TrackingForm() {
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      trackingNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    router.push(
      `https://eposta.ug/web?trackingNumber=${values.trackingNumber}`
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex items-center"
      >
        <div className="relative flex-grow">
          <FormField
            control={form.control}
            name="trackingNumber"
            render={({ field }) => (
              <FormItem className="space-y-0">
                <FormControl>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                      <LuPackageSearch className="h-5 w-5 text-gray-400" />
                    </div>
                    <Input
                      placeholder="Enter tracking number"
                      {...field}
                      className="pl-10 pr-4 py-2 w-full border-none shadow-none bg-secondary rounded-l-full rounded-r-none focus-visible:ring-0 focus:border-transparent"
                      autoComplete="off"
                    />
                  </div>
                </FormControl>
                <FormMessage className="absolute text-xs mt-1" />
              </FormItem>
            )}
          />
        </div>
        <Button
          type="submit"
          className="rounded-track"
        >
          Track Package
        </Button>
      </form>
    </Form>
  );
}
