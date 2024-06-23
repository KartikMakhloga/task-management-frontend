// HandleApi.js
import axios from "axios";

const baseUrl = "https://task-management-backend-ryoi.onrender.com/";

const getAllToDo = async (setToDo) => {
  try {
    const response = await axios.get(`${baseUrl}`);
    setToDo(response.data);
    return response;
  } catch (error) {
    console.error(error);
  }
};

const addToDo = (text, description, dueDate, setText, setDescription, setDueDate, setToDo) => {
  axios
    .post(`${baseUrl}/save`, { text, description, dueDate })
    .then((data) => {
      setText("");
      setDescription("");
      setDueDate("");
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error(error);
    });
};

const updateToDo = (toDoId, text, description, dueDate, setToDo, setText, setDescription, setDueDate, setIsUpdating) => {
  axios
    .post(`${baseUrl}/update/${toDoId}`, { text, description, dueDate })
    .then((data) => {
      setText("");
      setDescription("");
      setDueDate("");
      setIsUpdating(false);
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error(error);
    });
};

const deleteToDo = (_id, setToDo) => {
  axios
    .post(`${baseUrl}/delete/${_id}`)
    .then((data) => {
      getAllToDo(setToDo);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getAllToDo, addToDo, updateToDo, deleteToDo };
