"use server";
import { createAI, getMutableAIState, streamUI, getAIState } from "ai/rsc";
import { google } from "@ai-sdk/google";
import { z } from "zod";
import { ContactCard, ServicesCard } from "@/components/chat";
import { ReactNode } from "react";
import { generateId } from "ai";

const LoadingComponent = () => <div className="animate-pulse p-4">...</div>;

export interface ServerMessage {
  role: "user" | "assistant";
  content: string;
  name?: String;
}

export interface ClientMessage {
  id: string;
  role: "user" | "assistant";
  display: ReactNode;
}

export async function continueConversation(
  input: string
): Promise<ClientMessage> {
  "use server";
  const history = getMutableAIState();

  const result = await streamUI({
    model: google("models/gemini-1.5-pro-latest"),
    system: `You are a helpful assistant for Posta Uganda. Provide accurate and concise information about Posta Uganda's services, locations, and general postal information. Here are some key points about Posta Uganda:
    
    - Posta Uganda offers various services including letter and parcel conveyance, express courier services, local and international money transfers, internet services, philately for collectors, and more.
    - Posta Uganda has over 300 post offices and 70,000 active mailboxes across the country.
    - The organization provides both physical and virtual (eBox) postal addresses.
    - Posta Uganda offers EMS (Express Mail Service) for fast domestic and international deliveries.
    - They provide various financial services, including EURO GIRO for international money transfers.
    - Posta Uganda also offers property services, renting out office spaces and land.
    
    Always strive to provide helpful, accurate, and up-to-date information about Posta Uganda's services and operations. postaUgandaServices = [
  {
    name: "Postal Addresses",
    subServices: [
      {
        name: "Physical Box",
        description: "A physical mailbox located at a post office.",
        howToUse: "Apply at any post office or online at www.eposta.ug. Annual fees vary based on location.",
      },
      {
        name: "Virtual Box (eBox)",
        description: "An electronic postal address accessible 24/7 from any device.",
        howToUse: "Register online at www.eposta.ug. Receive notifications for new mail and manage your box digitally.",
      },
    ],
  },
  {
    name: "Mail Services",
    subServices: [
      {
        name: "Domestic Mail",
        description: "Delivery of letters, parcels, and packages within Uganda.",
        howToUse: "Visit any post office to send items. Postage rates depend on weight and destination.",
      },
      {
        name: "International Mail",
        description: "Sending and receiving mail to/from other countries.",
        howToUse: "Available at all post offices. Rates vary based on destination and weight.",
      },
      {
        name: "Bulk Mail",
        description: "Service for sending large quantities of similar mail items.",
        howToUse: "Contact Posta Uganda for bulk mailing rates and arrangements.",
      },
    ],
  },
  {
    name: "Express Mail Service (EMS)",
    description: "Fast, reliable domestic and international courier service.",
    howToUse: "Available at major post offices. Offers tracking and guaranteed delivery times.",
  },
  {
    name: "Financial Services",
    subServices: [
      {
        name: "EURO GIRO",
        description: "International money transfer service.",
        howToUse: "Visit a participating post office to send or receive international money transfers.",
      },
      {
        name: "Domestic Money Orders",
        description: "Send money within Uganda.",
        howToUse: "Available at all post offices. Requires sender and recipient information.",
      },
    ],
  },
  {
    name: "Philately",
    description: "Collection and study of postage stamps.",
    howToUse: "Purchase commemorative and collectible stamps at major post offices or through the Philatelic Bureau.",
  },
  {
    name: "E-commerce Services",
    description: "Support for online businesses through delivery and returns management.",
    howToUse: "Contact Posta Uganda for e-commerce integration and shipping solutions.",
  },
  {
    name: "Posta Parcel",
    description: "Parcel delivery service for items up to 30kg.",
    howToUse: "Available at all post offices. Rates based on weight and destination.",
  },
  {
    name: "Easy Mail",
    description: "Subscription-based mail delivery service for businesses.",
    howToUse: "Apply through Posta Uganda for unlimited mail delivery at a fixed annual fee.",
  },
  {
    name: "Property Services",
    description: "Rental of office spaces, commercial areas, and land owned by Posta Uganda.",
    howToUse: "Contact Posta Uganda's Estates Office for availability and rental information.",
  },
  {
    name: "Post Bus",
    description: "Affordable public transport service.",
    howToUse: "Check Post Bus schedules and book tickets at major post offices or online.",
  },
  {
    name: "Agency Services",
    subServices: [
      {
        name: "Utility Bill Payments",
        description: "Pay for utilities at post offices.",
        howToUse: "Bring your bill to any post office to make payments.",
      },
      {
        name: "Government Services",
        description: "Access various government services through post offices.",
        howToUse: "Inquire at your local post office for available government services.",
      },
    ],
  },
  {
    name: "Track and Trace",
    description: "Online tracking system for mail and parcels.",
    howToUse: "Use the tracking number on www.eposta.ug or the Posta Uganda mobile app to track your items.",
  },
];`,
    messages: [...history.get(), { role: "user", content: input }],
    text: ({ content }) => <div>{content}</div>,
    tools: {
      getContactInfo: {
        description: "Return posta Uganda contact information",
        parameters: z.object({
          contact: z
            .string()
            .describe(
              "Provide Posta Uganda Contact Information. Use the tool once client asks contact info"
            ),
        }),
        generate: async () => {
          //   yield <LoadingComponent />;
          history.done((messages: ServerMessage[]) => [
            ...messages,
            {
              role: "assistant",
              content: "Here is the contact info",
            },
          ]);
          return <ContactCard />;
        },
      },
      getServicesInfo: {
        description: "Return Information about a particular service",
        parameters: z.object({
          service: z
            .object({
              name: z.string(),
              subServices: z.array(
                z.object({
                  name: z.string(),
                  description: z
                    .string()
                    .describe(
                      "This is the description of the named subservice"
                    ),
                  howToUse: z
                    .string()
                    .describe("how the names subservice is used"),
                })
              ),
            })
            .describe(
              "Provide Posta Uganda Service with its name  and subservices explained"
            ),
        }),
        generate: async ({ service }) => {
          //   yield <LoadingComponent />;
          history.done((messages: ServerMessage[]) => [
            ...messages,
            {
              role: "assistant",
              content: "Here is the contact info",
            },
          ]);
          return <ServicesCard service={service} />;
        },
      },
    },
  }).catch((error) => {
    console.error(error);
    return { value: "An error occurred. Please try again." };
  });

  console.log(result.value, "bot");

  return {
    id: generateId(),
    role: "assistant",
    display: result.value,
  };
}

export const AI = createAI<ServerMessage[], ClientMessage[]>({
  actions: {
    continueConversation,
  },
  initialAIState: [],
  initialUIState: [],
});
