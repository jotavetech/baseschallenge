import { SystemNumbersType } from "@/types";

const generateNumber = (type: SystemNumbersType) => {
  const randomNumber = Math.floor(Math.random() * 30) + 1;

  return randomNumber.toString(getNumberSystem(type));
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
