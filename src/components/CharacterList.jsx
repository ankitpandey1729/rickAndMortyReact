// CharacterList.js
import React,{useState} from 'react';
import CharacterCard from './CharacterCard';

export const CharacterList = ({ results }) => {
  const [showAlive, setShowAlive] = useState(true);
  const [showDead, setShowDead] = useState(true);
  
  if (!results) {
    return "No Characters Found :/";
  }
  const filteredResults = results.filter(character => {
    if (showAlive && showDead) {
      return true; // Show all characters
    }
    if (showAlive) {
      return character.status === 'Alive';
    }
    if (showDead) {
      return character.status === 'Dead';
    }
    return true; // Show all characters
  });

  console.log(filteredResults);

  return (
<>
      <div>
        <label>
          <input
            type="checkbox"
            checked={showAlive}
            onChange={() => setShowAlive(!showAlive)}
          />
          Show Alive Characters
        </label>
        <label>
          <input
            type="checkbox"
            checked={showDead}
            onChange={() => setShowDead(!showDead)}
          />
          Show Dead Characters
        </label>
      </div>
      {filteredResults.map((character) => (
        <CharacterCard key={character.id} {...character} />
      ))}
    </>
  );
};

