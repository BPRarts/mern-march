import './App.css';
import Axios from 'axios'
import React, {useState} from "react";

function App() {

  const [pokeName,setPokeName]=useState([])

    Axios.get("https://pokeapi.co/api/v2/pokemon?limit=807&offset=0").then((response)=>{
      console.log(response.data.results);
      setPokeName(response.data.results);
    })
      
  
  return (
    <div className="App">
      <h1>Catch Em All!</h1>
      <ul class="poke-list">
        {pokeName.map((pokemon,i)=> (
          <li key={i}>{pokemon.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
