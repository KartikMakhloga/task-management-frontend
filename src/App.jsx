import Todo from "./components/Todo";
import { useState, useEffect } from "react";
import { addToDo, getAllToDo, updateToDo, deleteToDo } from "./utils/HandleApi";
import Modal from "./components/Modal";

function App() {
  const [todos, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [toDoId, setToDoId] = useState("");
  const [modalData, setModalData] = useState(null);

  const updateMode = (_id, text, description, dueDate) => {
    setIsUpdating(true);
    setText(text);
    setDescription(description);
    setDueDate(dueDate);
    setToDoId(_id);
  }

  const showDetails = (todo) => {
    setModalData(todo);
  }

  const closeModal = () => {
    setModalData(null);
  }

  useEffect(() => {
    getAllToDo(setTodo);
  }, []);

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Add ToDo..."
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <input
            type="text"
            placeholder="Description..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <input
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
          />
          <div
            className="add"
            onClick={
              isUpdating
                ? () => updateToDo(toDoId, text, description, dueDate, setTodo, setText, setDescription, setDueDate, setIsUpdating)
                : () => addToDo(text, description, dueDate, setText, setDescription, setDueDate, setTodo)
            }
          >
            {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todos.map((todo) => (
            <Todo key={todo._id} todo={todo} 
            updateMode={() => updateMode(todo._id, todo.text, todo.description, todo.dueDate)}
            deleteToDo={() => deleteToDo(todo._id, setTodo)}
            showDetails={() => showDetails(todo)}
            />
          ))}
        </div>
        {modalData && <Modal todo={modalData} closeModal={closeModal} />}
      </div>
    </div>
  );
}

export default App;
