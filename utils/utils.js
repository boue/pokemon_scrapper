import { POKE_DATA_DOMAIN } from "../constants/pokemons.js";

const parseAndAdd = (str) => {
  let tempArray = [];
  const strArray = str.split(" ");
  tempArray.push(strArray[0]);
  tempArray.push(strArray.slice(1));
  return tempArray.flat().join("+");
};

export const createUrl = (set, pokemon) => {
  const formatedSet = parseAndAdd(set);
  const formatedPokemon = parseAndAdd(pokemon);

  return `${POKE_DATA_DOMAIN}/card/${formatedSet}/${formatedPokemon}`;
};
