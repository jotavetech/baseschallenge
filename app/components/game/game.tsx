import { SystemNumbersType } from "@/types";

import { FormEvent, useEffect, useRef, useState } from "react";

import Input from "./input";

import { ArrowRight } from "lucide-react";

import {
  compareNumbers,
  generateNumber,
  getConversion,
} from "@/app/utils/generateNumbers";
import Result from "./result";

interface GameProps {
  from: SystemNumbersType;
  to: SystemNumbersType;
}

const Game = ({ from, to }: GameProps) => {
  const [generatedNumber, setGeneratedNumber] = useState("");
  const [inputNumber, setInputNumber] = useState("");
  const [score, setScore] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    setError("");
    setShowResult(false);
    setGeneratedNumber(generateNumber(from));
    setInputNumber("");
    setScore(0);
    setRounds(0);
  }, [from, to]);

  useEffect(() => {
    if (rounds === 5) {
      setShowResult(true);
    }
  }, [rounds]);

  const checkNumber = (e: FormEvent) => {
    e.preventDefault();
    if (!inputNumber) return;

    if (compareNumbers(generatedNumber, inputNumber, from, to)) {
      setScore((prev) => prev + 1);
      setRounds((prev) => prev + 1);
      setGeneratedNumber(generateNumber(from));
      setInputNumber("");
    } else {
      const correctNumber = getConversion(from, to, generatedNumber);
      setError(correctNumber);
      setInputNumber("");

      setTimeout(() => {
        setError("");
        setGeneratedNumber(generateNumber(from));
        setRounds((prev) => prev + 1);
      }, 1000);
    }
  };

  const playAgain = () => {
    setGeneratedNumber(generateNumber(from));
    setScore(0);
    setRounds(0);
    setShowResult(false);
  };

  return (
    <div>
      {!showResult ? (
        <>
          <form
            className="flex flex-col lg:flex-row items-center gap-1 lg:gap-4 mt-5"
            onSubmit={checkNumber}
          >
            <Input
              id="generated-number"
              value={generatedNumber}
              type={from}
              disabled
            />
            <ArrowRight className="text-primary dark:text-primary-dark mt-5 rotate-90 lg:-rotate-0" />
            <Input
              id="input-number"
              type={to}
              disabled={error.length > 0}
              placeholder={error}
              submitable={!error}
              value={inputNumber}
              error={error}
              onChange={({ target }) => setInputNumber(target.value)}
            />
          </form>
          <p className="font-medium text-center text-primary dark:text-primary-dark mt-5 lg:mt-10">
            your score: {score}/5
          </p>
          <p className="text-secondary dark:text-secondary-dark text-center font-medium text-xs">
            rounds: {rounds}/5
          </p>
        </>
      ) : (
        <Result score={score} rounds={rounds} playAgain={playAgain} />
      )}
    </div>
  );
};

export default Game;
