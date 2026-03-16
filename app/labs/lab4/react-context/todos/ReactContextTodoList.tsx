"use client";
import { Button, FormControl, ListGroup, ListGroupItem } from "react-bootstrap";
import { Todo, useTodoContext } from "./todosContext";
import { useState } from "react";

export default function TodoList() {
  const { todos, addTodo, removeTodo, editTodo } = useTodoContext()!;
  const [activeItem, setActiveItem] = useState<Todo>({ id: "", description: "" });

  const handleAdd = () => {
    if (!activeItem.description.trim()) return;
    addTodo(activeItem.description);
    setActiveItem({ id: "", description: "" });
  };

  const handleUpdate = () => {
    editTodo(activeItem);
    setActiveItem({ id: "", description: "" });
  };

  return (
    <div id="todo-manager">
      <h2>My Todos</h2>
      <ListGroup>
        <ListGroupItem>
          <div className="d-flex gap-2">
            <FormControl
              placeholder="Enter a task..."
              value={activeItem.description}
              onChange={(e) => setActiveItem({ ...activeItem, description: e.target.value })}
            />
            <Button variant="success" onClick={handleAdd}>
              Add
            </Button>
            <Button variant="warning" onClick={handleUpdate} disabled={!activeItem.id}>
              Save
            </Button>
          </div>
        </ListGroupItem>

        {todos.map((todo: Todo) => (
          <ListGroupItem key={todo.id} className="d-flex justify-content-between align-items-center">
            <span>{todo.description}</span>
            <div className="d-flex gap-2">
              <Button size="sm" variant="primary" onClick={() => setActiveItem(todo)}>
                Edit
              </Button>
              <Button size="sm" variant="danger" onClick={() => removeTodo(todo.id)}>
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
