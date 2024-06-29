"use client"
import { useEffect, useState } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";

const TextTypeEffect = () => {
    const changingPhrases = [
      "...reliable postal addresses",
      "...swift EMS deliveries",
      "...global money transfers",
      "...diverse mailing solutions",
    ];
    const [words, setWords] = useState(changingPhrases[0]);

    useEffect(() => {
        let index = 0;
        const interval = setInterval(() => {
            index = index === changingPhrases.length - 1 ? 0 : index + 1;
            setWords(changingPhrases[index]);
        }, 3000);
        return () => clearInterval(interval);
        }, [words]);

  return (
    <TextGenerateEffect
      words={words}
      className="text-4xl"
    />
  );
};

export default TextTypeEffect;
