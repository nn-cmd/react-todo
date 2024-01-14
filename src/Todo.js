import React from "react";

const Todo = ({ todo, onDelete }) => {
  return (
    <div>
      <span>{todo.text} </span>
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-5"
        onClick={() => onDelete(todo.id)}
      >
        Delete
      </button>
    </div>
  );
};

export default Todo;
