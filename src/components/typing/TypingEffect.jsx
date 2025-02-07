import React, { useEffect, useState } from "react";
import "./TypingEffect.css";

const TypingEffect = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const [words, setWords] = useState([]);
  const staticText = "I'm";

  useEffect(() => {
    const fetchWords = async () => {
      try {
        const response = await fetch("/data/iAm.json");
        const data = await response.json();
        setWords(data);
      } catch (error) {
        console.error("Failed to fetch words from JSON", error);
        setWords([
          "Father",
          "QA engineer",
          "FullStack Learner",
          "Sports enthusiast",
        ]);
      }
    };
    fetchWords();
  }, []);

  useEffect(() => {
    if (words.length === 0) return;

    const handleTyping = () => {
      const currentIndex = loopIndex % words.length;
      const fullWord = words[currentIndex];

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
        setLoopIndex(loopIndex + 1);
        setTypingSpeed(150);
      }
    };

    const typingTimeout = setTimeout(handleTyping, typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [currentWord, isDeleting, loopIndex, typingSpeed, words]);

  return (
    // <div className="container">
    <h1 className="heading">
      <span className="static-text">Rafal Ciesielski</span>
      <br />
      <span>{staticText}</span>{" "}
      <span className="dynamic-text">{currentWord}</span>
      <span className="cursor">|</span>
    </h1>
    // </div>
  );
};

export default TypingEffect;
