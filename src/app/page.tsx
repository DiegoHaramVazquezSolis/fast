"use client";

import { useState, useEffect } from "react";
import { fast } from "./data/fast";

export default function Home() {
  const [randomFact, setRandomFact] = useState("");

  const getRandomFact = () => {
    const randomIndex = Math.floor(Math.random() * fast.length);
    setRandomFact(fast[randomIndex]);
  };

  useEffect(() => {
    getRandomFact();
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-gray-900 p-4">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 shadow-lg rounded-lg overflow-hidden">
        <div className="p-6">
          <h1 className="text-2xl font-bold mb-4 text-center text-gray-800 dark:text-white">Fast Facts</h1>
          <div 
            dangerouslySetInnerHTML={{ __html: randomFact }} 
            className="text-sm mb-6 text-gray-700 dark:text-gray-300"
          />
          <button
            onClick={getRandomFact}
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded transition duration-200"
          >
            Load New Fact
          </button>
        </div>
      </div>
    </div>
  );
}
