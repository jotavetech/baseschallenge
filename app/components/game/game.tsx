import { SystemNumbersType } from "@/types";

import { useState } from "react";
import Input from "./input";
import { ArrowRight } from "lucide-react";

interface GameProps {
  from: SystemNumbersType;
  to: SystemNumbersType;
}

const Game = ({ from, to }: GameProps) => {
  const [score, setScore] = useState(0);

  return (
    <div>
      <form className="flex flex-col lg:flex-row items-center gap-1 lg:gap-4 mt-5">
        <Input id="generated-number" value={"001"} type={from} disabled />
        <ArrowRight className="text-primary dark:text-primary-dark mt-5 rotate-90 lg:-rotate-0" />
        <Input id="input-number" type={to} submitabble />
      </form>
      <p className="font-medium text-center text-primary dark:text-primary-dark mt-5 lg:mt-10">
        your score {score}/3
      </p>
    </div>
  );
};

export default Game;
