import { SystemNumbersType } from "@/types";

const generateNumber = (type: SystemNumbersType) => {
  const randomNumber = Math.floor(Math.random() * 100) + 1;

  switch (type) {
    case "binary":
      return randomNumber.toString(2);
    case "hex":
      return randomNumber.toString(16);
    case "decimal":
      return randomNumber.toString(10);
  }
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

export { generateNumber, compareNumbers };
