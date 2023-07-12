import './App.css';

import {useState} from "react";
import axios from 'axios';

function App() {
    const [pokemons, setPokemon]= useState([]);

    // useEffect(()=>{
    //   axiosPokemon();
    // },
    // []
    // )
    const axiosPokemon =()=>{
      axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then((resp)=>{
        console.log(resp);
        setPokemon(resp.data.results)
      })
      .catch((err)=>{
        console.log(err)
      });
    }
  return (
    <div className="App">
      <h1>Pokemon🎊</h1>
      <button onClick={axiosPokemon}>Axios Pokemon</button>
      <ul>
        {pokemons.map((pokemon, i)=>{
          return(
          <li key={i}>
            {pokemon.name}
          </li>)
        })}

      </ul>
    </div>
  );
}

export default App;
