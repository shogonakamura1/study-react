"use client";

export interface CheckboxProps {
  checked: boolean;
  onChange: () => void;
  ariaLabel?: string;
}

export function Checkbox({ checked, onChange, ariaLabel }: CheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={onChange}
      aria-label={ariaLabel}
      className="w-5 h-5 text-gray-900 border-gray-300 rounded focus:ring-gray-400 cursor-pointer"
    />
  );
}
