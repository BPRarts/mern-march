import './App.css';
import React, {useState} from "react";


function App() {
  const[newTodo, setNewTodo] = useState("")
  const[todos, setTodos] = useState([])
  

  const handleNewTodoSubmit = (event) => {
    event.preventDefault();

    setTodos([...todos, newTodo]);
    setNewTodo("");
  }

  const handleTodoDelete = (delIdx) => {
    const filterdTodos = todos.filter((todo, i) =>{
      return i!== delIdx;
    });
    
    setTodos(filterdTodos);
  }


  return (
    <div class="container">
      <h1>Todo List</h1>
      <form onSubmit={(event) => {
        handleNewTodoSubmit(event);
      }}>
       
      <input onChange={(event)=>{
        setNewTodo(event.target.value);
      }}
      type = "text" value={newTodo}/>
      <div>
        <button class="btn-add">Add</button>
      </div>
      </form>


      {todos.map((todo, i)=> {
          return (
            <div Key={i}>
              <input type ="checkbox"/>
              <span>{todo}</span>
              <button class="btn-delete" onClick={(event) => {
                handleTodoDelete(i);
              

              }}>Delete</button>
            </div>
          );
        })}
    </div>
  );
}

export default App;
