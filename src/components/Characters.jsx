/* eslint-disable react/prop-types */
function Characters({ characters, setCharacters }) {
  const resetCharacters = () => {
    setCharacters([]);
  };

  return (
    <div className="characters">
      <h1>Personajes</h1>
      <span className="back-home" onClick={resetCharacters}>
        Volver a la home
      </span>
      <div className="container-characters">
        {characters.map((character, index) => (
          <div className="character-container" key={index}>
            <div>
              <img src={character.image} alt={character.name} />
            </div>
            <div>
              <h3>{character.name}</h3>
              <h6>
                <span className={`${character.status}`}>
                  {character.status}
                </span>
              </h6>
              <p>
                <span className="text-grey">Episodios:</span>
                <span>{character.episode.length}</span>
              </p>
              <p className="text-grey">Especie:</p>
              <span>{character.species}</span>
            </div>
          </div>
        ))}
      </div>
      <span className="back-home" onClick={resetCharacters}>
        Volver a la home
      </span>
    </div>
  );
}

export default Characters;
