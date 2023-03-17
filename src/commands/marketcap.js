import { SlashCommandBuilder } from "@discordjs/builders";
import { findCard } from "../../utils/utils.js";

export const MarketCapCommand = new SlashCommandBuilder()
  .setName("marketcap")
  .setDescription(
    "Multiples Last Sale Of PSA value to its Population, pick only one set after you pick value"
  )
  .addStringOption((option) =>
    option
      .setName("value")
      .setDescription("Select value")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" }
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
  .addStringOption((option) =>
    option
      .setName("silvertempest")
      .setDescription("Search a card in Silver Tempest set")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");
  const pokemonSilverTempest = interaction.options.getString("silvertempest");
  const truthyArray = [pokemonBase, pokemonJungle, pokemonSilverTempest].filter(
    Boolean
  );

  if (truthyArray.length > 1) {
    await interaction.editReply("You can only search one pokemon at a time");
    throw new Error("You can only search one pokemon at a time");
  }

  const pokemon = pokemonBase || pokemonJungle || pokemonSilverTempest;
  const set = pokemonBase
    ? "Base Set 1st Edition"
    : pokemonJungle
    ? "Jungle 1st Edition"
    : "Silver Tempest";
  const value = interaction.options.getString("value");
  const popValue = value.substring(3);
  const pop = `pop${popValue}`;

  const caughtPokemon = findCard(pokemon, set);
  const marketcap = caughtPokemon[value] * caughtPokemon[pop];

  const result =
    "\n" +
    "Name: " +
    caughtPokemon["name"] +
    "\n" +
    "Marketcap is: " +
    "$" +
    marketcap;

  await interaction.editReply(result);
};
