import { SystemNumbersType } from "@/types";

let generatedNumbers: string[] = [];

const generateNumber = (
  type: SystemNumbersType,
  newArray?: boolean,
  range = 30
) => {
  let randomNumber: string;

  if (newArray) generatedNumbers = [];

  do {
    randomNumber = (Math.floor(Math.random() * range) + 1).toString(
      getNumberSystem(type)
    );
  } while (generatedNumbers.includes(randomNumber));

  generatedNumbers.push(randomNumber);

  return randomNumber;
};

const getNumberSystem = (type: SystemNumbersType) => {
  return type === "binary" ? 2 : type === "hex" ? 16 : 10;
};

const compareNumbers = (
  generatedNumber: string,
  inputNumber: string,
  from: SystemNumbersType,
  to: SystemNumbersType
) => {
  const inputNumberConverted = parseInt(inputNumber, getNumberSystem(to));
  const generatedNumberConverted = parseInt(
    generatedNumber,
    getNumberSystem(from)
  );

  return inputNumberConverted === generatedNumberConverted;
};

const getConversion = (
  from: SystemNumbersType,
  to: SystemNumbersType,
  number: string
) => {
  const inputNumber = parseInt(number, getNumberSystem(from));

  return inputNumber.toString(getNumberSystem(to));
};

export { generateNumber, compareNumbers, getConversion };
