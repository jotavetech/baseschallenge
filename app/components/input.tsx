import { SystemNumbersType } from "@/types";

interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: (value: string) => void;
  type?: SystemNumbersType;
  submitabble?: boolean;
  id: string;
}

const Input = ({
  disabled,
  onChange,
  placeholder,
  submitabble,
  type,
  value,
  id,
}: InputProps) => {
  const buttonMap = {
    binary: "01",
    hex: "0f",
    decimal: "09",
  };

  return (
    <div className="flex flex-col">
      <label
        htmlFor={id}
        className="text-primary dark:text-primary-dark text-xs font-medium mb-1"
      >
        {type}
      </label>
      <div className="flex items-center">
        <input
          id={id}
          type="text"
          className="bg-input-bg dark:bg-input-bg-dark h-12 w-72 outline-none border-primary dark:border-primary-dark border-2 text-primary dark:text-primary-dark placeholder:text-primary placeholder:dark:text-primary-dark p-4  rounded-tl-2xl"
          placeholder={placeholder}
          disabled={disabled}
        />
        <button
          disabled={!submitabble}
          className="h-12 w-12 bg-button-bg-1 dark:bg-button-bg-1-dark text-primary dark:text-primary-dark font-medium rounded-br-2xl"
        >
          {type && !submitabble ? buttonMap[type] : "S"}
        </button>
      </div>
    </div>
  );
};

export default Input;
