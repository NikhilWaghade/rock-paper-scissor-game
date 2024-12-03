import React from 'react';
import { Container, Image, Button } from "react-bootstrap";
import paper from './paper.png';
import scissors from './scissors.png';
import rack from "./rack.png";
import { useState } from "react";

const Game01 = () => {

    const allInput = ["paper", "scissor", "rack"];
    const [userInput, setUserInput] = useState(null);
    const [result, setResult] = useState(null);
    const [comInput, setComInput] = useState(null);

    const handleUserClick = (choosedChance) => {
        setUserInput(choosedChance);
    };

    const generateComputerInput = () => {
        const randomInput = Math.floor(Math.random() * 3);
        const computerChoice = allInput[randomInput];
        setComInput(computerChoice);
        return computerChoice;
    };

    const handlePlayBtn = () => {
        let comInput = generateComputerInput();

        if (userInput === "rack" && comInput === "scissor" || userInput === "scissor" && comInput === "paper" || userInput === "paper" && comInput === "rack") {
            setResult("You Won!");
        } else if (userInput === comInput) {
            setResult("Draw!");
        } else {
            setResult("Computer Won!");
        }
    };

    const resetGame = () => {
        setComInput(null);
        setResult(null);
        setUserInput(null);
    };

    return (
        <>
            <Container className="text-center bg-gray-100 p-4 md:p-10 rounded-lg shadow-lg">
                <h1 className="text-2xl md:text-3xl font-bold mb-6 text-[#277dd9]">Rock Paper Scissors Game</h1>
                <div className="flex flex-col md:flex-row justify-around items-center mb-6 space-y-4 md:space-y-0">
                    {/* Apply border to the selected image */}
                    <Image
                        src={paper}
                        alt="paper"
                        fluid
                        onClick={() => handleUserClick("paper")}
                        className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${userInput === "paper" ? "border-4 border-blue-600 rounded-lg" : ""}`}
                        height={150}
                        width={150}
                    />
                    <Image
                        src={scissors}
                        alt="scissors"
                        fluid
                        onClick={() => handleUserClick("scissor")}
                        className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${userInput === "scissor" ? "border-4 border-blue-600 rounded-lg" : ""}`}
                        height={150}
                        width={150}
                    />
                    <Image
                        src={rack}
                        alt="rack"
                        fluid
                        onClick={() => handleUserClick("rack")}
                        className={`cursor-pointer hover:scale-110 transition-transform duration-300 ${userInput === "rack" ? "border-4 border-black rounded-lg" : ""}`}
                        height={150}
                        width={150}
                    />
                </div>

                {userInput ? (
                    <Button
                        className="border-2 border-green-800 bg-green-500 text-white font-semibold px-4 py-2 rounded-lg hover:bg-green-700 transition-colors"
                        variant="success"
                        onClick={() => handlePlayBtn()}
                    >
                        Play Game
                    </Button>
                ) : (
                    <h1 className="border-2 border-black text-[#277dd9] rounded-2xl p-2 max-w-[80%] md:w-[35rem] mx-auto mt-4 text-lg md:text-3xl font-bold mb-6 ">Please select an image</h1>
                )}

                {result && (
                    <>
                        <div className="mt-6 text-lg md:text-xl font-semibold">
                            <h1>Computer Chooses: <span className="text-blue-500">{comInput}</span></h1>
                        </div>
                        <h1 className="text-xl md:text-2xl font-bold mt-4 text-purple-700">{result}</h1>
                        <Button
                            variant="danger"
                            onClick={() => resetGame()}
                            className="bg-red-500 text-white px-4 py-2 rounded-lg mt-4 hover:bg-red-700 transition-colors"
                        >
                            Reset
                        </Button>
                    </>
                )}
            </Container>
        </>
    );
};

export default Game01;
