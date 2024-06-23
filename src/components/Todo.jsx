import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";
import { FcAbout } from "react-icons/fc";

const Todo = ({ todo, updateMode, deleteToDo, showDetails }) => {
  const confirmDelete = () => {
    if (window.confirm("Are you sure you want to delete this ToDo?")) {
      deleteToDo();
    }
  };

  return (
    <div className="todo">
      <div className="text">{todo.text}</div>
      <div className="icons">
        <FcAbout className="icon" onClick={showDetails} />
        <BiEdit className="icon" onClick={updateMode} />
        <AiFillDelete className="icon" onClick={confirmDelete} />
      </div>
    </div>
  );
};

export default Todo;
