import React, { useState } from 'react';

const questions = [
  {
    question: "What's your preferred coffee strength?",
    options: ["Mild", "Medium", "Strong", "Extra Strong"],
  },
  {
    question: "Which milk do you like?",
    options: ["Normal Milk", "Whole", "Skim", "Soy", "Almond", "Oat", "Coconut", "None"],
  },
  {
    question: "Do you prefer flavored coffee?",
    options: ["Vanilla", "Caramel", "Hazelnut", "Chocolate", "No Flavor"],
  },
  {
    question: "How sweet do you like your coffee?",
    options: ["No Sugar", "Lightly Sweet", "Moderately Sweet", "Very Sweet"],
  },
  {
    question: "Which size do you prefer?",
    options: ["Small", "Medium", "Large", "Extra Large"],
  },
  {
    question: "Do you prefer your coffee hot or cold?",
    options: ["Hot", "Iced", "Cold Brew"],
  },
  {
    question: "Which brewing method do you enjoy?",
    options: ["Espresso Machine", "French Press", "Pour Over", "Drip Coffee", "Moka Pot", "Aeropress"],
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
      // Recommendation logic based on multiple answers
      const strength = newAnswers[0];
      const milk = newAnswers[1];
      const flavor = newAnswers[2];
      const temperature = newAnswers[5];

      let recommended = "Cappuccino"; // default

      // Strength-based recommendations
      if (strength === "Strong" || strength === "Extra Strong") recommended = "Espresso";
      if (strength === "Mild") recommended = "Latte";

      // Milk-based adjustments
      if (milk === "Normal Milk" || milk === "Whole" || milk === "Skim") {
        recommended += " with Milk";
      } else if (milk === "Soy" || milk === "Almond" || milk === "Oat" || milk === "Coconut") {
        recommended = "Plant-Based " + recommended;
      }

      // Flavor adjustments
      if (["Vanilla", "Caramel", "Hazelnut", "Chocolate"].includes(flavor)) {
        recommended = flavor + " " + recommended;
      }

      // Temperature adjustments
      if (temperature === "Iced" || temperature === "Cold Brew") {
        recommended = "Iced " + recommended;
      }

      setResult(recommended);
    }
  };

  return (
    <section 
      id="quiz" 
      className={`py-20 relative overflow-hidden px-4 ${isDarkMode ? 'bg-[#171716] text-white' : 'bg-gray-100 text-gray-900'}`}
    >
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
            <h3 className="text-2xl font-bold text-amber-500">{result}</h3>
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
  );
};

export default CoffeeQuiz;
