"use client";

import { statsType } from "@/types";

import { Gamepad, Trophy } from "lucide-react";

const StatsPage = () => {
  const stats = localStorage.getItem("stats");

  let timesPlayed = 0;
  let timesWinned = 0;

  if (stats) {
    const statsJson = JSON.parse(stats) as statsType;

    timesPlayed = statsJson.timesPlayed;
    timesWinned = statsJson.timesWinned;
  }

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
          {timesWinned}x
        </span>
      </div>
    </div>
  );
};

export default StatsPage;
