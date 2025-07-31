import React, { useEffect, useState } from "react";
import "./TypingEffect.css";

const TypingEffect = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [words, setWords] = useState([]);
  const staticText = "I'm";

  // Fetch words from public/data/iAm.json
  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("/data/iAm.json");
        if (!response.ok) throw new Error("Network response was not ok");
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch words from iAm.json:", error);
        setWords(["Quality Assurance Expert"]);
      }
    };

    fetchWords();
  }, []);

  React.useEffect(() => {
    if (words.length === 0) return;

    const fullWord = words[loopIndex % words.length];

    const updateWord = () => {
      setCurrentWord((prev) => {
        if (isDeleting) {
          return fullWord.substring(0, prev.length - 1);
        } else {
          return fullWord.substring(0, prev.length + 1);
        }
      });

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
  }, [currentWord, isDeleting, loopIndex, typingSpeed, words]);

  return (
    <>
      <h1 className="heading">Rafal Ciesielski</h1>
      <div className="typing-text">
        <span>{staticText}</span>{" "}
        <span className="dynamic-text">{currentWord}</span>
        <span className="cursor">|</span>
      </div>
    </>
  );
};

export default TypingEffect;
