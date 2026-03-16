import { useState } from "react";
import { RootState } from "./store";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import { useSelector } from "react-redux";
export default function ArrayStateVariable() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  const [array, setArray] = useState([1, 2, 3, 4, 5]);
  const addElement = () => {
    setArray([...array, Math.floor(Math.random() * 100)]);
  };
  const deleteElement = (index: number) => {
    setArray(array.filter((item, i) => i !== index));
  };
  return (
    <div id="wd-array-state-variables" className="mt-4">
      <h2>Array State Variable</h2>

      <button className="btn btn-success mb-3" onClick={addElement}>
        Add Element
      </button>
      <ul className="list-group mb-3">
        {array.map((item, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-center fs-5 fw-bold"
          >
            {item}
            <button
              onClick={() => deleteElement(index)}
              className="btn btn-danger btn-sm rounded-2"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>

      <ListGroup>
        {todos.map((todo: any) => (
          <ListGroupItem key={todo.id}>{todo.title}</ListGroupItem>
        ))}
      </ListGroup>
      <hr />
    </div>
  );
}
