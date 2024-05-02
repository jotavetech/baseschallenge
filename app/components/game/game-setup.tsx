"use client";

import { useState } from "react";

import SelectSystem from "./select-system";
import Game from "./game";

import { DifficultyType, SystemNumbersType } from "@/types";

import { numberThreeMap } from "../../utils/map";

import SelectDifficulty from "./select-difficulty";
import { useTranslations,  } from "next-intl";

const GameSetup = () => {

  const translate = useTranslations("game");
  
  const [systemFrom, setSystemFrom] = useState<SystemNumbersType>("binary");
  const [systemTo, setSystemTo] = useState<SystemNumbersType>("decimal");
  const [difficulty, setDifficulty] = useState<DifficultyType>("easy");


  return (
    <div>
      <div className="flex gap-2 justify-center mb-5">
        <SelectSystem
          value={systemFrom}
          onChange={({ target }) =>
            setSystemFrom(target.value as SystemNumbersType)
          }
        />
        <span className="text-primary dark:text-primary-dark">{translate("to")}</span>
        <SelectSystem
          value={systemTo}
          onChange={({ target }) =>
            setSystemTo(target.value as SystemNumbersType)
          }
        />
      </div>
      
      <p className="text-primary dark:text-primary-dark font-medium text-base lg:text-lg px-10 text-center">
        
        {translate("title.convert")}{" "}
        
        <span className="text-secondary dark:text-secondary-dark">
        {numberThreeMap[systemFrom]}{" "}
        </span>

        <span className="text-secondary dark:text-secondary-dark">
          {translate("title.from", { from: translate(`${systemFrom}s`) })}
        </span>{" "}
        {translate("to")} {translate("title.to", { to: translate(`${systemTo}s`) })}
      </p>

      <Game from={systemFrom} to={systemTo} difficulty={difficulty} />
      
      <div className="flex justify-center mt-5 md:mt-10 flex-col items-center">
      
        <p className="text-primary dark:text-primary-dark font-medium text-xs mb-1">
          {translate("difficulty")}
        </p>
      
        <SelectDifficulty
          value={difficulty}
          onChange={({ target }) =>
            setDifficulty(target.value as DifficultyType)
          }
        />
      
      </div>
    </div>
  );
};

export default GameSetup;
