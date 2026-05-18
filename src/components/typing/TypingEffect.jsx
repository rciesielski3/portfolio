import React, { useContext, useState } from "react";
import "./TypingEffect.css";

import { DataContext } from "../../context/DataContext";

const TypingEffect = ({ staticText = "I'm", words = [] }) => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { iAm } = useContext(DataContext);
  const typingWords = words.length > 0 ? words : iAm;

  React.useEffect(() => {
    setCurrentWord("");
    setIsDeleting(false);
    setLoopIndex(0);
    setTypingSpeed(150);
  }, [words]);

  React.useEffect(() => {
    if (typingWords.length === 0) return;

    const fullWord = typingWords[loopIndex % typingWords.length];

    const updateWord = () => {
      setCurrentWord((prev) =>
        isDeleting
          ? fullWord.substring(0, prev.length - 1)
          : fullWord.substring(0, prev.length + 1)
      );

      if (!isDeleting && currentWord === fullWord) {
        setTimeout(() => setIsDeleting(true), 1000);
        setTypingSpeed(50);
      } else if (isDeleting && currentWord === "") {
        setIsDeleting(false);
        setLoopIndex((prev) => prev + 1);
        setTypingSpeed(150);
      }
    };

    const timeout = setTimeout(updateWord, typingSpeed);
    return () => clearTimeout(timeout);
  }, [currentWord, isDeleting, loopIndex, typingSpeed, typingWords]);

  return (
    <div className="typing-text">
      <span>{staticText}</span>{" "}
      <span className="dynamic-text">{currentWord}</span>
      <span className="cursor">|</span>
    </div>
  );
};

export default TypingEffect;
