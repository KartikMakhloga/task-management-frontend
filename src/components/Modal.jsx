import React from "react";

const formatDate = (dateString) => {
  const options = { day: 'numeric', month: 'long', year: 'numeric' };
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', options);
};

const Modal = ({ todo, closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <span className="close" onClick={closeModal}>&times;</span>
        <h2>ToDo Details</h2>
        <p><strong>Text:</strong> {todo.text}</p>
        <p><strong>Description:</strong> {todo.description}</p>
        <p><strong>Due Date:</strong> {todo.dueDate ? formatDate(todo.dueDate) : "N/A" }</p>
      </div>
    </div>
  );
};

export default Modal;
