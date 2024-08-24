import imageRickAndMorty from "./img/rick-morty.png";
import "./App.css";
import { useState } from "react";
import Characters from "./components/Characters";

function App() {
  const [characters, setCharacters] = useState([]);

  const reqApi = async () => {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");
      const characterApi = await response.json();
      setCharacters(characterApi.results);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">Rick & Morty</h1>
        {characters.length > 0 ? (
          <Characters characters={characters} setCharacters={setCharacters} />
        ) : (
          <>
            <img
              src={imageRickAndMorty}
              alt="Rick & Morty"
              className="img-home"
            />
            <button type="button" onClick={reqApi} className="btn-search">
              Buscar Personajes
            </button>
          </>
        )}
      </header>
    </div>
  );
}

export default App;
