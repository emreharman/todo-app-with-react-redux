import React, { useState, useEffect } from "react";
import TodoItem from "./TodoItem";
import { useSelector, useDispatch } from "react-redux";
import { addTodo } from "../redux/todos/todoActions";

const Todos = () => {
  const date = new Date();
  let dateString = "";
  if (date.getMinutes() < 10) {
    dateString = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} - ${date.getHours()}:0${date.getMinutes()}`;
  } else {
    dateString = `${date.getDate()}.${
      date.getMonth() + 1
    }.${date.getFullYear()} - ${date.getHours()}:${date.getMinutes()}`;
  }
  const [todoContext, setTodoContext] = useState("");
  const [error, setError] = useState("");
  const state = useSelector((state) => state.todos);
  const dispatch = useDispatch();
  useEffect(() => {
    localStorage.clear();
    localStorage.setItem("todos", JSON.stringify(state));
  }, [state]);
  const addButtonHandle = () => {
    if (todoContext) {
      dispatch(
        addTodo({
          id: Math.random(),
          todoContext: todoContext,
          done: false,
          date: dateString,
        })
      );
      setError("");
    } else {
      setError("Do not leave blank ");
      setTimeout(() => {
        setError("");
      }, 2000);
    }

    setTodoContext("");
  };

  return (
    <div>
      {error ? (
        <p className="header" style={{ textAlign: "center" }}>
          {error}
        </p>
      ) : (
        <p style={{ color: "#f8f1f1" }}>no error</p>
      )}
      <div className="todo-input">
        <input
          type="text"
          value={todoContext}
          onChange={(e) => setTodoContext(e.target.value)}
        />
        <button onClick={addButtonHandle}>
          <i className="fas fa-plus"></i>
        </button>
      </div>

      <div className="todos-container">
        {state.length ? (
          state.map((todo) => <TodoItem todo={todo} key={todo.id} />)
        ) : (
          <h3 className="header">No Todos Yet</h3>
        )}
      </div>
    </div>
  );
};

export default Todos;
