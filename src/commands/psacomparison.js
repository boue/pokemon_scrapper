import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };
import { findCard } from "../../utils/utils.js";

export const PsaComparisonCommand = new SlashCommandBuilder()
  .setName("psacomparison")
  .setDescription(
    "Gives you the spread between PSA10/PS9, PSA10/RAW, PSA9/RAW for one pokemon"
  )
  .addStringOption((option) =>
    option
      .setName("value1")
      .setDescription("Select the 1st value to compare")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("value2")
      .setDescription(
        "REMINDER: PSA10/PS9, PSA10/RAW, PSA9/RAW are the options supported"
      )
      .addChoices(
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
  .addStringOption((option) =>
    option
      .setName("silvertempest")
      .setDescription("Search a card in Silver Tempest")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");
  const pokemonSilverTempest = interaction.options.getString("silvertempest");
  const value1 = interaction.options.getString("value1");
  const value2 = interaction.options.getString("value2");

  const truthyArray = [pokemonBase, pokemonJungle, pokemonSilverTempest].filter(
    Boolean
  );

  if (truthyArray.length > 1) {
    await interaction.editReply("You can only search one pokemon at a time");
    throw new Error("You can only search one pokemon at a time");
  }

  if (value1 === value2) {
    await interaction.editReply("Please pick two different values to compare.");
    throw new Error("Please pick two different values to compare.");
  }

  if (value1 === "psa9" && value2 === "psa10")
    await interaction.editReply(
      "PSA9/PS10 is not supported. Pick PSA10 first then PS9."
    );
  // throw new Error("PSA9/PS10 is not supported. Pick PSA10 first then PS9.");

  const pokemon = pokemonBase || pokemonJungle || pokemonSilverTempest;
  const set = pokemonBase
    ? "Base Set 1st Edition"
    : pokemonJungle
    ? "Jungle 1st Edition"
    : "Silver Tempest";
  const caughtPokemon = findCard(pokemon, set);

  let result =
    ((caughtPokemon[value1] - 20) / caughtPokemon[value2]) * 100 - 100;

  const formattedPokemon =
    "\n" +
    caughtPokemon["name"] +
    " " +
    value1 +
    " with " +
    value2 +
    ":\n" +
    result.toFixed(0) +
    "%";

  await interaction.editReply(formattedPokemon);
};
