import React, { useState } from 'react';

export const Calculator = () => {
  const [input, setInput] = useState('');

  const handleClick = (value) => {
    const lastChar = input.slice(-1);
    const operators = ['+', '-', '*', '/'];

    if (operators.includes(value) && operators.includes(lastChar)) {
      return;
    }

    setInput((prev) => prev + value);
  };

  const handleClear = () => {
    setInput('');
  };

  const handleDelete = () => {
    setInput((prev) => prev.slice(0, -1));
  };

  const handleEvaluate = () => {
    try {
      const result = eval(input);
      setInput(result.toString());
    } catch (error) {
      setInput('Error');
    }
  };

  const CalcButton = ({ label, onClick, className = '' }) => (
    <button
      onClick={onClick}
      className={`p-3 rounded shadow font-minecraft border-2 transition ${className}`}
    >
      {label}
    </button>
  );

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-[#e9ecef] via-[#dee2e6] to-[#bfc9d1] font-minecraft">
      <div className="bg-[#f8f9fa]/95 p-6 rounded-xl shadow-2xl w-80 border-4 border-[#1e293b]">
        
        <input
          type="text"
          className="w-full h-12 mb-4 p-2 text-right text-xl bg-[#e3e5e8] border-2 border-[#1e293b] rounded font-minecraft tracking-widest text-[#1e293b] focus:outline-none"
          readOnly
          value={input}
        />

        <div className="grid grid-cols-4 gap-3">
          <CalcButton label="AC" onClick={handleClear} className="bg-[#fbbf24] text-[#1e293b] hover:bg-[#fde68a] border-[#fbbf24]" />
          <CalcButton label="DEL" onClick={handleDelete} className="bg-[#e9ecef] text-[#1e293b] hover:bg-[#fbbf24] border-[#cbd5e1]" />
          <CalcButton label="/" onClick={() => handleClick('/')} className="bg-[#2563eb] text-white hover:bg-[#60a5fa] border-[#1e40af]" />
          <CalcButton label="*" onClick={() => handleClick('*')} className="bg-[#2563eb] text-white hover:bg-[#60a5fa] border-[#1e40af]" />

          <CalcButton label="7" onClick={() => handleClick('7')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="8" onClick={() => handleClick('8')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="9" onClick={() => handleClick('9')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="-" onClick={() => handleClick('-')} className="bg-[#2563eb] text-white hover:bg-[#60a5fa] border-[#1e40af]" />

          <CalcButton label="4" onClick={() => handleClick('4')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="5" onClick={() => handleClick('5')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="6" onClick={() => handleClick('6')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="+" onClick={() => handleClick('+')} className="bg-[#2563eb] text-white hover:bg-[#60a5fa] border-[#1e40af]" />

          <CalcButton label="1" onClick={() => handleClick('1')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="2" onClick={() => handleClick('2')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="3" onClick={() => handleClick('3')} className="bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="=" onClick={handleEvaluate} className="bg-[#fbbf24] text-[#1e293b] hover:bg-[#fde68a] border-[#fbbf24] row-span-2" />

          <CalcButton label="0" onClick={() => handleClick('0')} className="col-span-2 bg-[#f8fafc] text-[#1e293b] hover:bg-[#e9ecef] border-[#cbd5e1]" />
          <CalcButton label="." onClick={() => handleClick('.')} className="bg-[#e9ecef] text-[#1e293b] hover:bg-[#fbbf24] border-[#cbd5e1]" />
        </div>
      </div>
    </div>
  );
};
