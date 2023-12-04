// Character.js
import React from 'react';
import CharacterList from './CharacterList';

export const Character = ({ results }) => {
  console.log(results);

  return <CharacterList results={results} />;
};
