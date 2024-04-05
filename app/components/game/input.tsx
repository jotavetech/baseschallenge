"use client";

import { SystemNumbersType } from "@/types";

import { Send } from "lucide-react";

import { useEffect, useRef } from "react";

interface InputProps {
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  onChange?: ({ target }: { target: { value: string } }) => void;
  type?: SystemNumbersType;
  submitable?: boolean;
  id: string;
  error?: string;
}

const Input = ({
  disabled,
  onChange,
  placeholder,
  submitable,
  type,
  value,
  id,
  error,
}: InputProps) => {
  const buttonMap = {
    binary: "01",
    hex: "0f",
    decimal: "09",
  };

  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

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
          className={`bg-input-bg dark:bg-input-bg-dark h-12 w-72 outline-none border-primary dark:border-primary-dark border-2 text-primary dark:text-primary-dark placeholder:text-primary placeholder:dark:text-primary-dark p-4 rounded-tl-2xl ${
            !disabled && "hover:opacity-85"
          } ${error && "border-red-400 dark:border-red-400 animate-pulse"}`}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          autoFocus={!disabled}
        />
        <button
          disabled={!submitable}
          type={submitable ? "submit" : "button"}
          className="h-12 w-12 bg-button-bg-1 dark:bg-button-bg-1-dark text-primary dark:text-primary-dark font-medium rounded-br-2xl flex items-center justify-center"
        >
          {type && !submitable && !error ? buttonMap[type] : <Send />}
        </button>
      </div>
    </div>
  );
};

export default Input;
