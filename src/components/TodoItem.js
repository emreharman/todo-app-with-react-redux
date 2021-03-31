import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { doneTodo, deleteTodo } from "../redux/todos/todoActions";

const TodoItem = ({ todo }) => {
  const [doneClassName, setDoneClassName] = useState(false);
  const state = useSelector((state) =>
    state.todos.find((item) => item.id === todo.id)
  );
  const dispatch = useDispatch();
  const changeButtonHandler = () => {
    dispatch(doneTodo(state));
    setDoneClassName(!doneClassName);
  };
  const deleteButtonHandler = () => {
    dispatch(deleteTodo(state));
  };

  return (
    <div className="todo-item">
      <div className="todo-item-context">
        <h2
          className={state.done ? "done-item" : ""}
          style={state.done ? { color: "#eb5e0b" } : {}}
        >
          {state.todoContext}
        </h2>
        <p>{state.date}</p>
      </div>

      <div className="todo-item-buttons">
        {state.done ? (
          <button onClick={changeButtonHandler}>Undone</button>
        ) : (
          <button onClick={changeButtonHandler}>Done</button>
        )}
        <button id="delete-button" onClick={deleteButtonHandler}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
