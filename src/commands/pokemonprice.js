import { SlashCommandBuilder } from "@discordjs/builders";
import { findCard } from "../../utils/utils.js";

export const PokemonPriceCommand = new SlashCommandBuilder()
  .setName("price")
  .setDescription(
    "Gives you individual pokemon price, pick only one set after you pick value"
  )
  .addStringOption((option) =>
    option
      .setName("value")
      .setDescription("Select value")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" },
        { name: "raw", value: "raw" }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("base")
      .setDescription("Search a card in Base Set 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("jungle")
      .setDescription("Search a card in Jungle 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .toJSON();

export const autocomplete = async (interaction) => {
  const focusedOption = interaction.options.getFocused(true);

  let choices = null;

  if (focusedOption.name === "base") {
    choices = [
      "Charizard Holo 4",
      "Blastoise Holo 2",
      "Venusaur Holo 15",
      "Nidoking Holo 11",
      "Chansey Holo 3",
      "Clefairy Holo 5",
      "Alakazam Holo 1",
      "Poliwrath Holo 13",
      "Raichu Holo 14",
      "Ninetales Holo 12",
      "Hitmonchan Holo 7",
      "Mewtwo Holo 10",
      "Zapdos Holo 16",
      "Gyarados Holo 6",
      "Magneton Holo 9",
    ];
  }

  if (focusedOption.name === "jungle") {
    choices = [
      "Electrode Holo 2",
      "Flareon Holo 3",
      "Jolteon Holo 4",
      "Kangaskhan Holo 5",
      "Mr. Mime Holo 6",
      "Nidoqueen Holo 7",
      "Pidgeot Holo 8",
      "Pinsir Holo 9",
      "Scyther Holo 10",
      "Snorlax Holo 11",
      "Vaporeon Holo 12",
      "Venomoth Holo 13",
      "Victreebel Holo 14",
      "Vileplume Holo 15",
      "Wigglytuff Holo 16",
    ];
  }

  const filtered = choices.filter((choice) =>
    choice.toLowerCase().startsWith(focusedOption.value)
  );
  await interaction.respond(
    filtered.map((choice) => ({ name: choice, value: choice }))
  );
};

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");

  if (pokemonBase && pokemonJungle) {
    throw new Error("You can only search one pokemon at a time");
  }

  const pokemon = pokemonBase || pokemonJungle;
  const set = pokemonBase ? "Base Set 1st Edition" : "Jungle 1st Edition";
  const value = interaction.options.getString("value");

  console.log("pokemon is: ", pokemon);
  const caughtPokemon = findCard(pokemon, set);

  const priceMessage =
    "\n" +
    "Name: " +
    caughtPokemon["name"] +
    "\n" +
    "Current " +
    value +
    " Price: " +
    "$" +
    caughtPokemon[value] +
    "\n";

  console.log("formatted Pokemon in price: ", priceMessage);

  await interaction.editReply(priceMessage);
};
