import React, { useState, useEffect } from "react";

const Quotes = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    const fetchQuote = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          "https://api.api-ninjas.com/v1/quotes?category=computers",
          {
            headers: {
              "X-Api-Key": process.env.REACT_APP_API_NINJAS_KEY,
            },
          }
        );
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setQuote(data[0].quote);
        setAuthor(data[0].author);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchQuote();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center">
        <div className="spinner border-t-4 border-blue-500 rounded-full w-8 h-8 animate-spin"></div>
        <span className="ml-2 text-gray-500">Loading quote...</span>
      </div>
    );
  }

  if (error) {
    return (
      <span>
        "The only way to do great work is to love what you do." — Steve Jobs
      </span>
    );
  }

  return (
    <span>
      {quote} <p className="text-sm text-orange-650">{author}</p>
    </span>
  );
};

export default Quotes;
