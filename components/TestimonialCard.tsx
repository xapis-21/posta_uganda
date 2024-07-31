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
    <div className="bg-white-100 p-6 rounded-lg shadow-xl">
      <p className="text-black-10 mb-4">"{quote}"</p>
      <div className="flex items-center">
        <div>
          <p className="font-semibold">{author}</p>
          <p className="text-sm text-black-10/50">{title}</p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
