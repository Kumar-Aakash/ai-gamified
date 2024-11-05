'use client';

import { useState } from "react";
import questions from "../data/questions";
import { Question } from "../data/types";

const Quiz = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [responses, setResponses] = useState<{ [key: number]: string[] }>({});

  const currentQuestion: Question = questions[currentQuestionIndex];

  const handleOptionSelect = (option: string) => {
    setResponses((prev) => {
      const prevAnswers = prev[currentQuestion.id] || [];
      const updatedAnswers = currentQuestion.multiple
        ? prevAnswers.includes(option)
          ? prevAnswers.filter((answer) => answer !== option)
          : [...prevAnswers, option]
        : [option];
      return { ...prev, [currentQuestion.id]: updatedAnswers };
    });
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      console.log("Quiz complete!", responses);
    }
  };

  return (
    <div style={{ backgroundColor: "#fff", padding: "2rem", maxWidth: "600px", margin: "auto", borderRadius: "8px", boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)" }} className="mb-4 mt-14">
      <h2 className="text-[#000]">{currentQuestion.text}</h2>
      <div>
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            onClick={() => handleOptionSelect(option)}
            style={{
              display: "block",
              padding: "0.5rem 1rem",
              margin: "0.5rem 0",
              backgroundColor: responses[currentQuestion.id]?.includes(option) ? "#0070f3" : "#f0f0f0",
              color: responses[currentQuestion.id]?.includes(option) ? "#fff" : "#000",
              border: "1px solid #ccc",
              borderRadius: "4px",
              cursor: "pointer",
            }}
          >
            {option}
          </button>
        ))}
      </div>
      <button
        onClick={handleNext}
        disabled={!responses[currentQuestion.id]?.length}
        style={{
          marginTop: "1rem",
          padding: "0.75rem 1.5rem",
          backgroundColor: "#0070f3",
          color: "#fff",
          border: "none",
          borderRadius: "4px",
          cursor: "pointer",
        }}
      >
        {currentQuestionIndex < questions.length - 1 ? "Next" : "Finish"}
      </button>
    </div>
  );
};

export default Quiz;
