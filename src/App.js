import "./App.css";
import Todos from "./components/Todos";
import { useEffect } from "react";

function App() {
  return (
    <div className="App">
      <h1 className="header">My ToDo's</h1>
      <Todos />
    </div>
  );
}

export default App;
