import logo from "./logo.svg";
import "./App.css";

import React, { useState } from "react";
import TodoList from "./TodoList";

const App = () => {
  const [todos, setTodos] = useState([]);
  const [inputText, setInputText] = useState("");

  const addTodo = () => {
    if (inputText.trim() !== "") {
      setTodos([...todos, { id: Date.now(), text: inputText }]);
      setInputText("");
    }
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="w-full max-w-md p-4 bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold underline mb-4">Todo List</h1>
        <input
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500 mb-4"
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
        />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={addTodo}
        >
          Add Todo
        </button>
        <TodoList todos={todos} onDelete={deleteTodo} />
      </div>
    </div>
  );
};

export default App;
