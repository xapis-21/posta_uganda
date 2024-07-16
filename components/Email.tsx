import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Link,
  Preview,
  Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";
import * as React from "react";

interface EmailProps {
  name?: FormDataEntryValue | null;
  email?: FormDataEntryValue | null;
  message?: FormDataEntryValue | null;
}

const baseUrl = "https://ugapost.ug.co";

export const Email = ({ name, message, email }: EmailProps) => {
  const previewText = `Urgent: Respond to ${name}'s inquiry from Posta Uganda Website.`;

  return (
    <Html>
      <Head />
      <Preview>{previewText}</Preview>
      <Tailwind>
        <Body className="bg-white my-auto mx-auto font-sans px-2">
          <Container className="border border-solid border-[#eaeaea] rounded my-[40px] mx-auto p-[20px] max-w-[465px]">
            <Heading className="text-black text-[14px] font-bold text-center p-0 my-[18px] mx-0">
              A new inquiry has been submitted through the Posta Uganda. Please
              see the details below:
            </Heading>

            <Container className="flex flex-col py-2">
              <Heading className="text-black text-[14px] p-0 my-[10px] mx-0 font-semibold">
                Dear Posta team,
              </Heading>
              <Text className="font-semibold">From:</Text>
              <Text className="">Name: {String(name)}</Text>
              <Text className="">Email: {String(email)}</Text>
              <Text className="text-black text-[14px] leading-[24px]">
                {String(message)}
              </Text>
              <Text>
                Kindly respond to this inquiry promptly to provide the necessary
                assistance and information.
              </Text>
              <Text>Thank you, The Posta Uganda website</Text>
            </Container>

            <Text className="text-[#666666] text-[12px] leading-[24px]">
              This email was intended for the Posta Uganda team. If you were not
              expecting this, you can ignore this email.
            </Text>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

