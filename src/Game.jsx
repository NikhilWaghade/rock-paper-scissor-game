import React, { useState } from "react";

// image import 
import paperImg from "./assets/GameImg/paper.png";
import scissorsImg from "./assets/GameImg/scissors.png";
import rackImg from "./assets/GameImg/rack.png";

const Game01 = () => {
  const allInput = ["paper", "scissor", "rack"];
  const [userInput, setUserInput] = useState(null);
  const [result, setResult] = useState(null);
  const [comInput, setComInput] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [comScore, setComScore] = useState(0);

  const handleUserClick = (choice) => {
    setUserInput(choice);
  };

  const generateComputerInput = () => {
    const randomIndex = Math.floor(Math.random() * 3);
    const computerChoice = allInput[randomIndex];
    setComInput(computerChoice);
    return computerChoice;
  };

  const handlePlayBtn = () => {
    const computerChoice = generateComputerInput();

    if (
      (userInput === "rack" && computerChoice === "scissor") ||
      (userInput === "scissor" && computerChoice === "paper") ||
      (userInput === "paper" && computerChoice === "rack")
    ) {
      setResult("You Won!");
      setUserScore((prev) => prev + 1);
    } else if (userInput === computerChoice) {
      setResult("Draw!");
    } else {
      setResult("Computer Won!");
      setComScore((prev) => prev + 1);
    }
  };

  const resetGame = () => {
    setComInput(null);
    setResult(null);
    setUserInput(null);
  };

  return (
    <div className="container mx-auto p-6 bg-gradient-to-br from-blue-100 to-purple-100 shadow-md rounded-md max-w-4xl">
      <h1 className="text-4xl font-bold text-blue-600 mb-8 text-center">
        The Game of Rock Paper Scissors 
      </h1>

      {/* Scoreboard */}
      <div className="flex justify-between items-center bg-white shadow-lg rounded-md p-4 mb-6">
        <div className="text-xl font-semibold text-blue-500">
          <p>Player: <span className="text-black">{userScore}</span></p>
        </div>
        <div className="text-xl font-semibold text-red-500">
          <p>Computer: <span className="text-black">{comScore}</span></p>
        </div>
      </div>

      {/* Game Images */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-4 justify-items-center mb-6">
        <img
          src={paperImg}
          alt="Paper"
          onClick={() => handleUserClick("paper")}
          className={`h-36 w-36 sm:h-44 sm:w-44 cursor-pointer transition-transform transform border-4 rounded-3xl border-gray-500 hover:scale-110 ${
            userInput === "paper" ? "border-4 border-green-500 rounded-lg" : ""
          }`}
        />
        <img
          src={scissorsImg}
          alt="Scissors"
          onClick={() => handleUserClick("scissor")}
          className={`h-36 w-36 sm:h-44 sm:w-44 cursor-pointer transition-transform transform border-4 rounded-3xl border-gray-500  hover:scale-110 ${
            userInput === "scissor" ? "border-4 border-green-500 rounded-lg" : ""
          }`}
        />
        <img
          src={rackImg}
          alt="Rack"
          onClick={() => handleUserClick("rack")}
          className={`h-36 w-36 sm:h-44 sm:w-44 cursor-pointer transition-transform transform border-4 rounded-3xl border-gray-500  hover:scale-110 ${
            userInput === "rack" ? "border-4 border-green-500 rounded-lg" : ""
          }`}
        />
      </div>

      {/* Play Button or Prompt */}
      {userInput ? (
        <button
          className="px-6 py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
          onClick={handlePlayBtn}
        >
          Play Game
        </button>
      ) : (
        <p className="text-lg font-semibold bg-white shadow-lg rounded-md p-4 mb-6">
          Please Select An Option to Play
        </p>
      )}

      {/* Result Display */}
      {result && (
        <div className="mt-6 animate-fade-in">
          <p className="text-lg font-semibold text-gray-700">
            Computer Chooses:{" "}
            <span className="text-blue-500 capitalize">{comInput}</span>
          </p>
          <p className="text-2xl font-bold text-purple-700 mt-2">{result}</p>
          <button
            onClick={resetGame}
            className="mt-4 px-6 py-3 bg-red-500 text-white font-semibold rounded-md hover:bg-red-600 transition-colors"
          >
            Reset Game
          </button>
        </div>
      )}

      {/* Background Animation */}
      <div className="absolute inset-0 -z-10 opacity-50">
        <div className="w-96 h-96 bg-gradient-to-r from-purple-300 to-blue-300 rounded-full blur-3xl absolute top-20 left-10"></div>
        <div className="w-72 h-72 bg-gradient-to-r from-pink-300 to-yellow-300 rounded-full blur-3xl absolute bottom-10 right-10"></div>
      </div>
    </div>
  );
};

export default Game01;
