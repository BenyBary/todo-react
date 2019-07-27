import React, { useState } from "react";
import './App.css';


const App = () =>  {
  const list = [
    {name: "alon", title: "get milk"},
    {name: "benny", title: "get banana"},
    {name: "alon", title: "get milk"},
    {name: "benny", title: "get banana"}
  ]

  const [todos, setTodos] = useState(list);

  const handleDone = e => {
    console.log(e.target.style );
    e.target.style.color = "red";
    // setTodos(todos.splice(i, 1))
  }

  if (!todos) return 'loading...'

  return (
    <div className="App">
       <ul>
          {
           todos.map((todo, i) => {
             return <li onClick={handleDone} key={i}>
             {`name: ${todo.name} action: ${todo.title}`}
             </li>
           })
         }
        </ul>
    </div>
  );
}

export default App;
