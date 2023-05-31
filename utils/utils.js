import { POKE_DATA_DOMAIN } from "../constants/pokemons.js";
import data from "../data/dataList.json" assert { type: "json" };

export const findCard = (name, set) => {
  const setFound = data.find((d) => d.name === set);
  console.log("set found: ", setFound);
  const cardsInSet = setFound?.cards;
  console.log("cards in set: ", cardsInSet);
  const card = cardsInSet.find((card) => card.name === name);
  console.log("card found: ", card);
  return card;
};

export const findCardsType = (type, set) => {
  console.log("type: ", type);
  const setFound = data.find((d) => d.name === set);
  console.log("set found: ", setFound);
  const cardsInSet = setFound?.cards;
  console.log("cards in set: ", cardsInSet);
  const cards = cardsInSet.filter((card) => card.type === type);
  console.log("cards found: ", cards);
  return cards;
};

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

export const millisToMinutesAndSeconds = (millis) => {
  var minutes = Math.floor(millis / 60000);
  var seconds = ((millis % 60000) / 1000).toFixed(0);
  return minutes + ":" + (seconds < 10 ? "0" : "") + seconds;
};

export const generateDataObject = (data) => {
  return data.map((d) => {
    let name = `${d.name} ${d.num}`;
    let type = d.name.includes("Holo") ? "Holo" : "Non-holo";
    let endLink = type === "Holo" ? `Holo+${d.num}` : d.num;
    let link = `https://www.pokedata.io/card/Jungle+1st+Edition/${
      d.name.split(" ")[0]
    }+${endLink}`;
    return { name, type, link };
  });
};

export const generateModernDataObject = (data) => {
  return data.map((d) => {
    let splitName = d.name.split(" ").join("+");
    let name = `${splitName}+${d.num}`;
    let type = d.num.includes("TG")
      ? "Trainer Gallery"
      : d.name.includes("V")
      ? "V"
      : d.name.includes("VMAX")
      ? "VMAX"
      : d.name.includes("V Star")
      ? "V Star"
      : "normal";
    let link = `https://www.pokedata.io/card/Cosmic+Eclipse/${name}`;
    return { name: `${d.name} ${d.num}`, type, link };
  });
};

// get only V VMAX and VSTAR
function filterCards(cards) {
  return cards.filter((card) => {
    const hasVKeywords = ["V", "VMAX", "VSTAR"].some((keyword) =>
      card.name.includes(keyword)
    );
    return hasVKeywords || card.secret;
  });
}

function transformCards(cards) {
  return cards.map((card) => {
    const name = card.name.replace(/ /g, "+");
    const type = card.secret ? "Secret Rare" : "Ultra Rare";

    return {
      name: card.name,
      type,
      pokeDataLink: `https://www.pokedata.io/card/Crown+Zenith/${name}`,
      psaLink: `https://www.psacard.com/auctionprices/tcg-cards/2023-pokemon-sword-shield-crown-zenith/${type
        .toLowerCase()
        .replace(/ /g, "-")}/summary/${card.id}`,
    };
  });
}

export const generateModernDataObjectWithEncoding = (data) => {
  return data.map((d) => {
    let name = `${encodeURIComponent(d.name)}+${d.num}`;
    let type = d.num.includes("TG")
      ? "Trainer Gallery"
      : d.name.includes("V")
      ? "V"
      : d.name.includes("VMAX")
      ? "VMAX"
      : d.name.includes("V Star")
      ? "V Star"
      : "normal";
    let pokeDataLink = `https://www.pokedata.io/card/Cosmic+Eclipse/${name}`;
    return { name: `${d.name} ${d.num}`, type, pokeDataLink };
  });
};
