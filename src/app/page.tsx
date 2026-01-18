"use client";

import { useState } from "react";

const phrases = ["سبحان الله", "الحمدلله", "لا إله الا الله"];

export default function Home() {
  const [count, setCount] = useState(0);
  const [phraseIndex, setPhraseIndex] = useState(0);

  const handleIncrement = () => {
    if (count === 33) {
      setCount(0);
      setPhraseIndex((prevIndex) => (prevIndex + 1) % phrases.length);
    } else {
      setCount((prevCount) => prevCount + 1);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-900 text-white p-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold mb-4">
          {phrases[phraseIndex]}
        </h1>
        <p className="text-8xl md:text-9xl font-mono mb-8">{count}</p>
        <button
          onClick={handleIncrement}
          className="bg-teal-500 hover:bg-teal-600 text-white font-bold py-4 px-12 rounded-full text-4xl shadow-lg shadow-teal-500/50 transform transition-transform duration-200 hover:scale-105"
        >
          سبح
        </button>
      </div>
    </main>
  );
}
