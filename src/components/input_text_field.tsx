"use client";

import { ChangeEvent, KeyboardEvent } from "react";

export interface InputTextFieldProps {
  value: string;
  onChange: (value: string) => void;
  onSubmit?: () => void;
  placeholder?: string;
}

export function InputTextField({ value, onChange, onSubmit, placeholder = "新しいTodoを入力..." }: InputTextFieldProps) {
  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.nativeEvent.isComposing && onSubmit) {
      e.preventDefault();
      onSubmit();
      onChange("");
    }
  };

  return (
    <input
      type="text"
      value={value}
      onChange={(e: ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.value);
      }}
      onKeyDown={handleKeyDown}
      className="flex-1 px-4 py-2.5 border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-gray-400 focus:border-gray-400 text-gray-900 placeholder-gray-400 text-base"
      placeholder={placeholder}
    />
  )
}
