export interface TextfieldProps {
  content: string;
  completed?: boolean;
}

export function Textfield({ content, completed = false }: TextfieldProps) {
  return (
    <span
      className={`text-base flex-1 ${
        completed
          ? "text-gray-400 line-through"
          : "text-gray-900"
      }`}
    >
      {content}
    </span>
  )
}
