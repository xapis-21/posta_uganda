"use client"

import React, { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; isUser: boolean }[]>(
    []
  );
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, isUser: true }]);
    
      setTimeout(() => {
        setMessages((prev) => [
          ...prev,
          { text: `You said: ${input}`, isUser: false },
        ]);
      }, 1000);
      setInput("");
    }
  };

  return (
    <>
      <Button
        className="fixed bottom-4 right-4 rounded-full w-16 h-16"
        onClick={() => setIsOpen(!isOpen)}
      >
        Chat
      </Button>
      {isOpen && (
        <Card className="fixed bottom-24 right-4 w-80 h-96 flex flex-col p-4">
          <div className="flex-grow overflow-auto mb-4">
            {messages.map((message, index) => (
              <div
                key={index}
                className={`mb-2 ${message.isUser ? "text-right" : "text-left"}`}
              >
                <span
                  className={`inline-block p-2 rounded-lg ${message.isUser ? "bg-primary text-primary-foreground" : "bg-secondary"}`}
                >
                  {message.text}
                </span>
              </div>
            ))}
          </div>
          <div className="flex gap-2">
            <Input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              onKeyPress={(e) => e.key === "Enter" && handleSend()}
            />
            <Button onClick={handleSend}>Send</Button>
          </div>
        </Card>
      )}
    </>
  );
};

export default Chatbot;
