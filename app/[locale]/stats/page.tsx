"use client";

import { statsType } from "@/types";

import { Gamepad, PieChart, RotateCcw, Trophy } from "lucide-react";
import { useTranslations } from "next-intl";

import { useEffect, useState } from "react";

const StatsPage = () => {
  const [timesPlayed, setTimesPlayed] = useState(0);
  const [timesWon, setTimesWon] = useState(0);

  const translate = useTranslations("stats");

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
      translate("reset_stats_confirm")
    );

    if (accept) {
      localStorage.removeItem("stats");
      setTimesPlayed(0);
      setTimesWon(0);
    }
  };



  return (
    <div className="py-20 lg:py-36 min-h-screen flex items-center justify-center flex-col">
      <h1 className="text-primary dark:text-primary-dark mt-5 md:mt-10 font-semibold flex items-center gap-2">
        {translate("title")} <PieChart />
      </h1>
      <div className="mt-5 text-center flex flex-col items-center justify-center gap-5">
        <p className="text-primary dark:text-primary-dark text-sm md:text-xl flex items-center gap-2">
          {translate("new_number_generated")} <Gamepad />
        </p>
        <span className="text-secondary dark:text-secondary-dark text-lg md:text-xl">
          {timesPlayed}x
        </span>
        <p className="text-primary dark:text-primary-dark text-sm md:text-xl flex items-center gap-2">
        {translate("guessed_numbers")}  <Trophy />
        </p>
        <span className="text-secondary dark:text-secondary-dark text-lg md:text-xl">
          {timesWon}x
        </span>
        <button
          className="bg-button-bg-2 dark:bg-button-bg-2-dark text-primary dark:text-primary-dark font-medium px-4 py-3 rounded-md hover:-translate-y-1 flex items-center gap-2"
          onClick={deleteStats}
        >
          {translate("reset")}
          <RotateCcw />
        </button>
      </div>
    </div>
  );
};

export default StatsPage;
