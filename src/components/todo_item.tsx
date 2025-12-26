"use client";

import { Checkbox } from "@/components/checkbox";
import { Textfield } from "@/components/text_field";
import type { Todo } from "@/types/todo";

export interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
}

export function TodoItem({ todo, onToggle }: TodoItemProps) {
  return (
    <div
      className={`flex items-center gap-3 p-4 border-b border-gray-200 transition-colors ${
        todo.completed
          ? "bg-white"
          : "bg-white hover:bg-gray-50"
      }`}
    >
      <Checkbox
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
        ariaLabel={`${todo.text}を${todo.completed ? "未完了" : "完了"}にする`}
      />
      <Textfield content={todo.text} completed={todo.completed} />
    </div>
  );
}

