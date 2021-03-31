import { ADD_TODO, DELETE_TODO, DONE_TODO } from "./todoTypes";

export const addTodo = (payload = {}) => {
  return {
    type: ADD_TODO,
    payload: payload,
  };
};

export const deleteTodo = (payload = null) => {
  return {
    type: DELETE_TODO,
    payload: payload,
  };
};

export const doneTodo = (payload = false) => {
  return {
    type: DONE_TODO,
    payload: payload,
  };
};
