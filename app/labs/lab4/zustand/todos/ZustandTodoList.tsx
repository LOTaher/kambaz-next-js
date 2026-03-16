"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { useTodosStore } from "./useTodoStore";
import { useState } from "react";

type Todo = { id: string; description: string };

const emptyTodo = (): Todo => ({ id: "", description: "" });

export default function ZustandTodos() {
  const todos = useTodosStore((state) => state.todos);
  const addTodo = useTodosStore((state) => state.addTodo);
  const deleteTodo = useTodosStore((state) => state.deleteTodo);
  const updateTodo = useTodosStore((state) => state.updateTodo);

  const [currentTodo, setCurrentTodo] = useState<Todo>(emptyTodo());

  const handleAdd = () => {
    if (!currentTodo.description.trim()) return;
    addTodo(currentTodo.description);
    setCurrentTodo(emptyTodo());
  };

  const handleUpdate = () => {
    updateTodo(currentTodo);
    setCurrentTodo(emptyTodo());
  };

  return (
    <div id="wd-counter-context">
      <h2>Todo List</h2>
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex gap-2">
            <FormControl
              placeholder="Enter a task..."
              value={currentTodo.description}
              onChange={(e) => setCurrentTodo({ ...currentTodo, description: e.target.value })}
            />
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
            <Button variant="warning" onClick={handleUpdate} disabled={!currentTodo.id}>
              Update
            </Button>
          </div>
        </ListGroupItem>

        {todos.map((todo: Todo) => (
          <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center">
            <span>{todo.description}</span>
            <div className="d-flex gap-2">
              <Button size="sm" onClick={() => setCurrentTodo(todo)}>
                Edit
              </Button>
              <Button size="sm" variant="danger" onClick={() => deleteTodo(todo.id)}>
                Delete
              </Button>
            </div>
          </ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
