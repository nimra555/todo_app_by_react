import React, { useState } from 'react';
import './App.css';

function App() {
  let [todoList, settodoList] = useState([]);
  let [addTodo, setAddtodo] = useState("");

  const handleChange = (e) => {
    setAddtodo(e.target.value)
  }

  const addList = (e) => {
    e.preventDefault();
    settodoList([...todoList, addTodo]);
    setAddtodo("");
  }

  const deleteItem = () => {
  settodoList(todoList.splice(0, todoList.length - 1));
  }

return (
  <div className="wrapper">
      <h1>ToDo App</h1>
    <div className="center">
      <form>
        <label htmlFor="input_text">
          <input type="text" placeholder="Enter Item" value={addTodo} onChange={handleChange} id="input_text" />
        </label>
        <button onClick={addList} className="add">+</button>
        </form>
        <table>
          {todoList.map((listItem, index) => {
            return (
              <div key={index} className="list-container">
               
               
                  <tr>
                    <td>{listItem}</td>
                    <td> <button onClick={deleteItem} className="remove"><i className="fas fa-trash-alt"></i></button></td>
                  </tr>
              </div>
            )
          })}
        </table>
    </div>
  </div>
)
}        


export default App;

