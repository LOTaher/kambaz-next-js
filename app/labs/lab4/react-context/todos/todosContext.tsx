"use client";
import { createContext, useContext, useState, ReactNode } from "react";

export type Todo = {
  id: string;
  description: string;
};

interface TodoContextType {
  todos: Todo[];
  addTodo: (description: string) => void;
  removeTodo: (id: string) => void;
  editTodo: (updated: Todo) => void;
}

const TodoContext = createContext<TodoContextType | undefined>(undefined);

const generateId = () => Math.random().toString(36).substring(2, 9);

const initialTodos: Todo[] = [
  { id: generateId(), description: "Buy groceries" },
  { id: generateId(), description: "Walk the dog" },
];

export const TodoProvider = ({ children }: { children: ReactNode }) => {
  const [todos, setTodos] = useState<Todo[]>(initialTodos);

  const addTodo = (description: string) => {
    const newTodo: Todo = { id: generateId(), description };
    setTodos((prev) => [...prev, newTodo]);
  };

  const removeTodo = (id: string) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  const editTodo = (updated: Todo) => {
    setTodos((prev) =>
      prev.map((todo) => (todo.id === updated.id ? { ...todo, ...updated } : todo))
    );
  };

  return (
    <TodoContext.Provider value={{ todos, addTodo, removeTodo, editTodo }}>
      {children}
    </TodoContext.Provider>
  );
};

export const useTodoContext = () => useContext(TodoContext);
