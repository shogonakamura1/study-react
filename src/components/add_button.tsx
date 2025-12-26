export interface AddButtonProps {
  onClick: () => void;
  ariaLabel?: string;
}

export function AddButton({ onClick, ariaLabel = "Todoを追加" }: AddButtonProps) {
  return (
    <button
      onClick={onClick}
      aria-label={ariaLabel}
      className="bg-gray-900 hover:bg-gray-800 text-white font-normal py-2.5 px-6 rounded transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 min-w-[60px] text-lg"
    >
      +
    </button>
  )
}
