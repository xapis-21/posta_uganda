"use server";

import{ Email} from "@/components/Email";
import { MessageSchema } from "@/schemas";
import sendgrid from "@sendgrid/mail";
import { render } from "@react-email/render";

import { z } from "zod";

sendgrid.setApiKey(
  process.env.SG_API!
);


export const SendEmail = async (values: z.infer<typeof MessageSchema>) => {
  const validatedFields = MessageSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, message, name} = validatedFields.data;

  const options = {
    from: "client@apost@ug.com",
    to: "postaug@ug.com",
    replyTo: `${email.toString()}`,
    cc: [""],
    bcc: "zziwafic@gmail.com",
    subject: `Urgent! Posta Uganda contact form Website Submission`,
    html: render(Email({ name, email, message})),
  };

  await sendgrid
    .send(options)
    .then(() => {
      console.log("Email sent");
    })
    .catch((error) => {
      console.error(error.response.body);
    });

  return { success: "Message sent sucessfully" };
};
