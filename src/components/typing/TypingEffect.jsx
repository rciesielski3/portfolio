import React, { useContext, useEffect, useState } from "react";
import "./TypingEffect.css";

import { DataContext } from "../../context/DataContext";

const TypingEffect = () => {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopIndex, setLoopIndex] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);
  const { iAm } = useContext(DataContext);
  const staticText = "I'm";

  React.useEffect(() => {
    if (iAm.length === 0) return;

    const fullWord = iAm[loopIndex % iAm.length];

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
  }, [currentWord, isDeleting, loopIndex, typingSpeed, iAm]);

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
