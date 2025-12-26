"use client";

import { Header } from "@/components/header";
import { InputTextField } from "@/components/input_text_field";
import { AddButton } from "@/components/add_button";
import { TodoItem } from "@/components/todo_item";
import { useState, useCallback } from "react";
import type { Todo } from "@/types/todo";

export default function Home() {
  const [text, setText] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);

  const handleAddTodo = useCallback(() => {
    const trimmedText = text.trim();
    if (trimmedText === "") return;
    
    const newTodo: Todo = {
      id: crypto.randomUUID(),
      text: trimmedText,
      completed: false,
    };
    
    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setText("");
  }, [text]);

  const handleToggleTodo = useCallback((id: string) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="max-w-2xl mx-auto px-6 py-12">
        <div className="mb-12">
          <h2 className="text-lg font-normal text-gray-900 mb-6 tracking-tight">Todo一覧</h2>
          {todos.length === 0 ? (
            <p className="text-gray-500 text-center py-12 text-base">Todoがありません。新しいTodoを追加してください。</p>
          ) : (
            <div className="border border-gray-200 rounded">
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  todo={todo}
                  onToggle={handleToggleTodo}
                />
              ))}
            </div>
          )}
        </div>
        <div>
          <h2 className="text-lg font-normal text-gray-900 mb-6 tracking-tight">新しいTodoを追加</h2>
          <div className="flex gap-3">
            <InputTextField value={text} onChange={setText} onSubmit={handleAddTodo} />
            <AddButton onClick={handleAddTodo} />
          </div>
        </div>
      </main>
    </div>
  );
}
