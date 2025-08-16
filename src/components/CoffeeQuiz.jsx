import React, { useState } from 'react';

const questions = [
  {
    question: "What's your preferred coffee strength?",
    options: ["Mild", "Medium", "Strong"],
  },
  {
    question: "Which milk do you like?",
    options: ["Whole", "Almond", "Oat", "None"],
  },
  {
    question: "Do you prefer flavored coffee?",
    options: ["Yes", "No"],
  },
];

const CoffeeQuiz = ({ isDarkMode }) => {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [result, setResult] = useState(null);

  const handleAnswer = (option) => {
    const newAnswers = [...answers, option];
    setAnswers(newAnswers);
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
    } else {
      // Simple recommendation logic
      const recommended = newAnswers.includes("Strong") ? "Espresso" : "Cappuccino";
      setResult(recommended);
    }
  };

  return (
    <>
      <section id="quiz" className={`py-50 relative overflow-hidden px-4 ${isDarkMode ? 'bg-[#171716] text-white' : 'bg-gray-100 text-gray-900'}`}>
        <div 
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'url(https://wallpapercrafter.com/desktop/10097-coffee-cup-table-minimalism-dark-4k.jpg)',
          backgroundSize: 'cover',
          backgroundAttachment: 'fixed',
          backgroundPosition: 'center'
        }}
      />
        <div className="max-w-xl mx-auto text-center relative z-10">
          <h2 className="text-3xl font-bold mb-8">Find Your Perfect Coffee</h2>
          {!result ? (
            <>
              <p className="mb-6 text-lg">{questions[current].question}</p>
              <div className="flex flex-col gap-4">
                {questions[current].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleAnswer(option)}
                    className="py-2 px-4 rounded-lg bg-amber-500 hover:bg-amber-600 text-white transition"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <div>
              <p className="text-xl mb-4">Your recommended coffee is:</p>
              <h3 className="text-2xl font-bold">{result}</h3>
              <button
                onClick={() => { setCurrent(0); setAnswers([]); setResult(null); }}
                className="mt-4 py-2 px-4 rounded-lg bg-gray-500 hover:bg-gray-600 text-white transition"
              >
                Retake Quiz
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default CoffeeQuiz;
