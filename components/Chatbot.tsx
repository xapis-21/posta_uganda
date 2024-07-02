"use client";

import { useEffect, useRef, useState } from "react";
import { useChat, Message } from "ai/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { FaRobot } from "react-icons/fa";
import { useActions, useUIState } from "ai/rsc";
import { generateId } from "ai";
import { ClientMessage } from "@/app/actions/bot";

// Force the page to be dynamic and allow streaming responses up to 30 seconds



const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [conversation, setConversation] = useUIState();
  const [input, setInput] = useState<String>("");
const { continueConversation } = useActions();
  const chatContainerRef = useRef<HTMLDivElement>(null);
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollToBottom();
  }, [conversation]);

  const scrollToBottom = () => {
    if (chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSubmit = async (e:any)=>{
    e.preventDefault();
    if(input){
        setConversation((currentConversation: ClientMessage[]) => [
      ...currentConversation,
      {
        id: generateId(),
        role: "user",
        display: input,
      },
    ]);

     const message = await continueConversation(input);

     setConversation((currentConversation: ClientMessage[]) => [
       ...currentConversation,
       message,
     ]);

    setInput("")
    }
  }


  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16 flex items-center justify-center"
        onClick={() => setIsOpen(!isOpen)}
      >
        <FaRobot className="w-8 h-8" />
      </Button>
      {isOpen && (
        <Card ref={chatContainerRef} className="fixed bottom-24 right-4 w-80 h-96 flex flex-col p-4">
          <div className="flex-grow overflow-auto mb-4">
            {conversation.map((message: ClientMessage) => (
              <div
                key={message.id}
                className={`mb-2 ${
                  message.role === "user" ? "text-right" : "text-left"
                }`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${
                    message.role === "user"
                      ? "bg-primary text-primary-foreground"
                      : "bg-secondary"
                  }`}
                >
                  {message.display}
                </span>
              </div>
            ))}
            <div ref={chatEndRef}/>
          </div>
          <form onSubmit={handleSubmit} className="flex gap-2">
            <Input
              onChange={(e)=>{setInput(e?.target?.value)}}
              placeholder="Type your message..."
            />
            <Button type="submit">Send</Button>
          </form>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
