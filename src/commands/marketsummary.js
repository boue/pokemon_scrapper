import { SlashCommandBuilder } from "@discordjs/builders";
import { findCard } from "../../utils/utils.js";

export const MarketSummaryCommand = new SlashCommandBuilder()
  .setName("marketsummary")
  .setDescription("Gives you market summary for a pokemon")
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

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");

  if (pokemonBase && pokemonJungle) {
    throw new Error("You can only search one set at a time");
  }

  const pokemon = pokemonBase || pokemonJungle;
  const set = pokemonBase ? "Base Set 1st Edition" : "Jungle 1st Edition";
  const { name, psa10, psa9, pop10, pop9, raw } = findCard(pokemon, set);

  const formattedPokemons =
    "\n" +
    "Name: " +
    name +
    "\n" +
    "Current PSA10 Price: " +
    "$" +
    psa10 +
    "\n" +
    "Current PSA9 Price: " +
    "$" +
    psa9 +
    "\n" +
    "Current POP10: " +
    pop10 +
    "\n" +
    "Current POP9: " +
    pop9 +
    "\n" +
    "Current Raw Price: " +
    "$" +
    raw +
    "\n";

  await interaction.editReply(formattedPokemons);
};
