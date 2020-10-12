import React, { useState } from 'react';
import './App.css';

function App() {
  let [tudoList, settudoList] = useState([]);
  let [addTudo, setAddtudo] = useState("");

  return (
    <div className="wrapper">
      <h2>Tudo App</h2>
      <form>
        <label htmlFor="input_text">
          <input type="text" placeholder="Enter Item"  onChange={(event) =>  setAddtudo(event.target.value)} id="input_text" />
        </label>
        <br></br>
        <br></br>
        <button onClick={(event) => {
          event.preventDefault();
          settudoList([...tudoList,addTudo]);
        }} className="add">Add</button>
      </form>
      <ul>
        {tudoList.map((listItem, index) => {
          return (
            <div key={index}>

              <li>{listItem}</li>
              <button onClick={()=>{settudoList(tudoList.splice(0,tudoList.length - 1))}} className="remove">Remove</button>
            </div>
            )
        })}
      </ul>
    </div>
  );
}

export default App;

