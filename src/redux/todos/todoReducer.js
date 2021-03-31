import { ADD_TODO, DELETE_TODO, DONE_TODO } from "./todoTypes";

let storage = JSON.parse(localStorage.getItem("todos"));
if (storage == null) {
  storage = [];
}
const initialState = {
  todos: storage,
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    case DONE_TODO:
      const todo = state.todos.find((item) => item.id === action.payload.id);
      const todos = state.todos.filter((item) => item.id !== action.payload.id);
      todo.done = !todo.done;
      return {
        ...state,
        todos: [...todos, todo],
      };
    case DELETE_TODO:
      const filteredTodos = state.todos.filter(
        (item) => item.id !== action.payload.id
      );
      return {
        ...state,
        todos: filteredTodos,
      };
    default:
      return state;
  }
};

export default todoReducer;
