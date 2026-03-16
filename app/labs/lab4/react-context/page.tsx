"use client";
import { CounterProvider } from "./counter/context";
import CounterContext from "./counter";
import { TodoProvider } from "./todos/todosContext";
import TodoList from "./todos/ReactContextTodoList";

export default function ReactContextExamples() {
  return (
    <div>
      <h1>React Context Examples</h1>
      <CounterProvider>
        <CounterContext />
      </CounterProvider>
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    </div>
  );
}
