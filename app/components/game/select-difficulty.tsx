import { useTranslations } from "next-intl";

interface SelectDifficultyProps {
  value: string;
  onChange: ({ target }: { target: { value: string } }) => void;
}

const SelectDifficulty = ({ value, onChange }: SelectDifficultyProps) => {

  const translate = useTranslations("game");

  return (
    <select
      onChange={onChange}
      value={value}
      className="rounded-xl bg-button-bg-1 dark:bg-button-bg-1-dark text-xs font-medium px-3 py-1 text-primary dark:text-primary-dark cursor-pointer text-center"
    >
      <option value="easy">{translate("easy")} (1 - 10)</option>
      <option value="medium">{translate("medium")} (1 - 30)</option>
      <option value="hard">{translate("hard")} (1 - 50)</option>
      <option value="extreme">{translate("extreme")} (1 - 100)</option>
      <option value="plus">{translate("god")} (1 - 1000)</option>
    </select>
  );
};

export default SelectDifficulty;
