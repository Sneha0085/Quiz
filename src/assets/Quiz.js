import React, { useState } from 'react';

const questions = [
  {
    question: 'What is the capital of France?',
    options: ['Berlin', 'London', 'Paris', 'Madrid'],
    answer: 2,
  },
  {
    question: 'Which planet is known as the Red Planet?',
    options: ['Earth', 'Mars', 'Jupiter', 'Saturn'],
    answer: 1,
  },
  {
    question: 'Who wrote the play "Romeo and Juliet"?',
    options: ['William Shakespeare', 'Charles Dickens', 'Jane Austen', 'Mark Twain'],
    answer: 0,
  },
  {
    question: 'What is the largest ocean on Earth?',
    options: ['Atlantic Ocean', 'Indian Ocean', 'Arctic Ocean', 'Pacific Ocean'],
    answer: 3,
  },
  {
    question: 'Which element has the chemical symbol O?',
    options: ['Gold', 'Oxygen', 'Silver', 'Iron'],
    answer: 1,
  },
];

const Quiz = () => {
  const [current, setCurrent] = useState(0);
  const [selected, setSelected] = useState(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (idx) => {
    setSelected(idx);
  };

  const handleNext = () => {
    if (selected === questions[current].answer) {
      setScore(score + 1);
    }
    if (current < questions.length - 1) {
      setCurrent(current + 1);
      setSelected(null);
    } else {
      setShowScore(true);
    }
  };

  const handleRestart = () => {
    setCurrent(0);
    setSelected(null);
    setScore(0);
    setShowScore(false);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 via-gray-200 to-blue-100 font-sans">
      <div className="bg-white border border-gray-300 shadow-xl rounded-xl p-10 w-full max-w-lg">
        <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center tracking-tight">Quiz Assessment</h1>
        {showScore ? (
          <div className="text-center">
            <p className="text-2xl font-medium mb-6 text-blue-700">
              Your Score: <span className="font-bold text-blue-500">{score}</span> / {questions.length}
            </p>
            <button
              onClick={handleRestart}
              className="mt-2 px-6 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition font-medium"
            >
              Restart Quiz
            </button>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <span className="block text-sm text-gray-500 mb-2">
                Question {current + 1} of {questions.length}
              </span>
              <p className="text-lg text-gray-900 font-semibold">{questions[current].question}</p>
            </div>
            <div className="flex flex-col gap-4">
              {questions[current].options.map((opt, idx) => (
                <button
                  key={idx}
                  onClick={() => handleOptionClick(idx)}
                  className={`px-5 py-3 border rounded-lg text-left font-medium transition-colors duration-150 ${
                    selected === idx
                      ? 'bg-blue-700 text-white border-blue-700'
                      : 'bg-gray-50 text-gray-800 border-gray-300 hover:bg-blue-100'
                  }`}
                  disabled={selected !== null}
                  aria-pressed={selected === idx}
                >
                  {opt}
                </button>
              ))}
            </div>
            <button
              onClick={handleNext}
              disabled={selected === null}
              className={`mt-8 w-full px-5 py-3 rounded-lg font-semibold transition ${
                selected !== null
                  ? 'bg-blue-700 text-white hover:bg-blue-800'
                  : 'bg-gray-200 text-gray-400 cursor-not-allowed'
              }`}
            >
              {current === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default Quiz;