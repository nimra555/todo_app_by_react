import React, { useState } from 'react';
import './App.css';

function App() {
  let [tudoList, settudoList] = useState(["read book", "home work"]);
  let [addTudo, setAddtudo] = useState("");


  return (
    <div className="App">
      <h2>Tudo App</h2>
      <form>
        <label htmlFor="input_text">
          <input type="text" placeholder="Enter Item" onChange={event => { setAddtudo(event.target.value) }} id="input_text" />
        </label>
        <br></br>
        <br></br>
        <button onClick={() => {settudoList([...tudoList,addTudo])}} >Add</button>
      </form>
      <ul>
        {tudoList.map((listItem, index) => {
          console.log(listItem);
          return (
            <div>

              <li key={index}>{listItem}</li>
              <button onClick={()=>{tudoList.filter(tudo => tudo.index)}}></button>
            </div>
            )
        })}
      </ul>
    </div>
  );
}

export default App;

// const classes = useStyles();
// let [tudoItem, setTudo] = useState([]); // list
// let [tudoAdd, setAdd] = useState(""); // add item

// return (
//     <div className={classes.root}>
//         <Paper elevation={3} className={classes.center} >
//             <h1 className={classes.head}>Tudo App</h1>
//             <input type="text" class={classes.input} placeholder="Enter Tudo" value={tudoAdd} onChange={(e) => { setAdd(e.target.value) }} />

//             <ul>
//                 {tudoItem.map((tudoList, ind) => {
//                     return (<li key={ind} className={classes.list}>{tudoList}
//                         <button className={classes.butn} onClick={() => { setTudo(tudoItem.slice(0, tudoItem.length - 1)) }}>x</button>
//                         <button className={classes.butn} onClick={() => { setAdd(tudoList); setTudo(tudoItem.filter(item => item !== tudoList)) }}>edit</button>
//                     </li>)
//                 })}
//             </ul>
//             <button className={classes.add} onClick={() => { setTudo([...tudoItem, tudoAdd]) }}>Add Tudo</button>
//         </Paper>
//     </div>