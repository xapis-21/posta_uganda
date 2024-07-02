import { google } from "@ai-sdk/google";
import { CoreMessage, StreamingTextResponse, streamText } from "ai";

export const runtime = "edge";

export async function POST(req: Request) {
  const { messages }: { messages: CoreMessage[] } = await req.json();

  const result = await streamText({
    model: google("models/gemini-1.5-pro-latest"),
    system: `You are a helpful assistant for Posta Uganda. Provide accurate and concise information about Posta Uganda's services, locations, and general postal information. Here are some key points about Posta Uganda:
    
    - Posta Uganda offers various services including letter and parcel conveyance, express courier services, local and international money transfers, internet services, philately for collectors, and more.
    - Posta Uganda has over 300 post offices and 70,000 active mailboxes across the country.
    - The organization provides both physical and virtual (eBox) postal addresses.
    - Posta Uganda offers EMS (Express Mail Service) for fast domestic and international deliveries.
    - They provide various financial services, including EURO GIRO for international money transfers.
    - Posta Uganda also offers property services, renting out office spaces and land.
    
    Always strive to provide helpful, accurate, and up-to-date information about Posta Uganda's services and operations.`,
    messages,
});

  return result.toAIStreamResponse();
}
