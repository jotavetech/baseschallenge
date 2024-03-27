"use client";

import { useState } from "react";

import SelectSystem from "./select-system";
import Game from "./game";

import { SystemNumbersType } from "@/types";

import numberThreeMap from "../../utils/numberThreeMap";

const GameSetup = () => {
  const [systemFrom, setSystemFrom] = useState<SystemNumbersType>("binary");
  const [systemTo, setSystemTo] = useState<SystemNumbersType>("decimal");

  return (
    <div>
      <div className="flex gap-2 justify-center mb-5">
        <SelectSystem
          value={systemFrom}
          onChange={({ target }) =>
            setSystemFrom(target.value as SystemNumbersType)
          }
        />
        <span className="text-primary dark:text-primary-dark">to</span>
        <SelectSystem
          value={systemTo}
          onChange={({ target }) =>
            setSystemTo(target.value as SystemNumbersType)
          }
        />
      </div>
      <p className="text-primary dark:text-primary-dark font-medium text-base lg:text-lg px-10 text-center">
        convert{" "}
        <span className="text-secondary dark:text-secondary-dark">
          {numberThreeMap[systemFrom]}
        </span>{" "}
        random{" "}
        <span className="text-secondary dark:text-secondary-dark">
          {systemFrom} numbers
        </span>{" "}
        to a {systemTo} number
      </p>
      <Game from={systemFrom} to={systemTo} />
    </div>
  );
};

export default GameSetup;
