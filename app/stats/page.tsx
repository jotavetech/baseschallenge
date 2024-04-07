"use client";

import { statsType } from "@/types";

import { Gamepad, RotateCcw, Trophy } from "lucide-react";

import { useEffect, useState } from "react";

const StatsPage = () => {
  const [timesPlayed, setTimesPlayed] = useState(0);
  const [timesWon, setTimesWon] = useState(0);

  useEffect(() => {
    const stats = localStorage.getItem("stats");

    if (stats) {
      const statsJson = JSON.parse(stats) as statsType;

      setTimesPlayed(statsJson.timesPlayed);
      setTimesWon(statsJson.timesWon);
    }
  }, []);

  const deleteStats = () => {
    const accept = confirm(
      "Are you sure? Doing this will reset all your statistics"
    );

    if (accept) {
      localStorage.removeItem("stats");
      setTimesPlayed(0);
      setTimesWon(0);
    }
  };

  return (
    <div className="py-20 lg:py-36 min-h-screen flex items-center md:justify-start justify-center flex-col">
      <h1 className="text-primary dark:text-primary-dark md:mt-28 font-semibold text-3xl">
        statistics
      </h1>
      <div className="mt-5 text-center flex flex-col items-center gap-5">
        <p className="text-primary dark:text-primary-dark text-sm md:text-xl flex items-center gap-2">
          times you have generated a new number <Gamepad />
        </p>
        <span className="text-secondary dark:text-secondary-dark text-lg md:text-xl">
          {timesPlayed}x
        </span>
        <p className="text-primary dark:text-primary-dark text-sm md:text-xl flex items-center gap-2">
          times you have guessed the number <Trophy />
        </p>
        <span className="text-secondary dark:text-secondary-dark text-lg md:text-xl">
          {timesWon}x
        </span>
        <button
          className="bg-button-bg-2 dark:bg-button-bg-2-dark text-primary dark:text-primary-dark font-medium px-4 py-3 rounded-md hover:-translate-y-1 flex items-center gap-2"
          onClick={deleteStats}
        >
          reset
          <RotateCcw />
        </button>
      </div>
    </div>
  );
};

export default StatsPage;
