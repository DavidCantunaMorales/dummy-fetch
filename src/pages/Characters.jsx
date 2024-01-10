import './Characters.css'

import { useEffect, useState } from "react";
import { fetchCharacters } from "../api/fetchCharacters";

export const Characters = () => {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacters = async () => {
      const data = await fetchCharacters();
      setCharacters(data);
    };
    getCharacters();
  }, []);

  return (
    <div className="dummy">
      {characters ? (
        <ul>
          {characters.map((character) => (
            <li key={character.id}>
              <img src={character.image} alt="" height="200px" width="200px" />
              <div>
                {character.firstName} {character.age}{" "}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p>Loading characters</p>
      )}
    </div>
  );
};