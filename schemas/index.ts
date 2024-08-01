import { z } from "zod";

export const MessageSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
  phone: z.string().email({
    message: "Email is required",
  }),
  message: z
    .string({
      required_error: "Message is required",
    })
    .min(10, {
      message: "Please type a more detailed message",
    }),
  name: z.string().min(2, {
    message: "Name is required",
  }),
});
