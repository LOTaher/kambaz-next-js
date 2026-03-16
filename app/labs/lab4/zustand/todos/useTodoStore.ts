import { create } from "zustand";

type Todo = {
  id: string;
  description: string;
};

interface TodoStoreState {
  todos: Todo[];
  addTodo: (description: string) => void;
  deleteTodo: (id: string) => void;
  updateTodo: (todo: Todo) => void;
}

const generateId = () => Math.random().toString(36).substring(2, 9);

export const useTodosStore = create<TodoStoreState>((set) => ({
  todos: [
    { id: generateId(), description: "Buy groceries" },
    { id: generateId(), description: "Walk the dog" },
  ],

  addTodo: (description) =>
    set((state) => ({
      todos: [...state.todos, { id: generateId(), description }],
    })),

  deleteTodo: (id) =>
    set((state) => ({
      todos: state.todos.filter((todo) => todo.id !== id),
    })),

  updateTodo: (updated) =>
    set((state) => ({
      todos: state.todos.map((todo) =>
        todo.id === updated.id ? updated : todo,
      ),
    })),
}));
