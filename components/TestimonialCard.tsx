import React from "react";
import Image from "next/image";

interface TestimonialCardProps {
  quote: string;
  author: string;
  title: string;
  imageIndex: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  title,
  imageIndex,
}) => {
  return (
    <div className="bg-background p-6 rounded-lg shadow-md">
      <p className="text-muted-foreground mb-4">"{quote}"</p>
      <div className="flex items-center">
        <Image
          src={`https://i.pravatar.cc/60?img=${imageIndex}`}
          alt={author}
          width={40}
          height={40}
          className="rounded-full mr-3"
        />
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-muted-foreground">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
