import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };
import { findCard } from "../../utils/utils.js";

export const PsaSpreadCommand = new SlashCommandBuilder()
  .setName("psaspread")
  .setDescription(
    "Gives you the spread between PSA10/PS9, PSA10/RAW, PSA9/RAW - !Pick different Pokemons!"
  )
  .addStringOption((option) =>
    option
      .setName("value1")
      .setDescription(
        "Select the value for the 1st pokemon that you want to compare"
      )
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
        "Select the value for the 2nd pokemon that you want to compare"
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
      .setDescription("Select if your 1st Pokemon is in Base Set 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("silvertempest")
      .setDescription("Select if your 1st Pokemon is in Silver Tempest")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("jungle")
      .setDescription("Select if your 1st Pokemon is in Jungle 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("base2")
      .setDescription("Select if your 2nd Pokemon is in Base Set 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("jungle2")
      .setDescription("Select if your 2nd Pokemon is in Jungle 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("silvertempest2")
      .setDescription("Select if your 2nd Pokemon is in Silver Tempest")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");
  const pokemonSilverTempest = interaction.options.getString("silvertempest");
  const pokemonBase2 = interaction.options.getString("base2");
  const pokemonJungle2 = interaction.options.getString("jungle2");
  const pokemonSilverTempest2 = interaction.options.getString("silvertempest2");
  const value1 = interaction.options.getString("value1");
  const value2 = interaction.options.getString("value2");

  if (value1 === value2) {
    await interaction.editReply("Please pick two different values to compare.");
    throw new Error("Please pick two different values to compare.");
  }

  if (pokemonBase && pokemonJungle && pokemonSilverTempest) {
    await interaction.editReply("You already picked your 1st Pokemon..");
    throw new Error("Pick one of: base, jungle or silvertempest.");
  }
  if (pokemonBase2 && pokemonJungle2 && pokemonSilverTempest2) {
    await interaction.editReply("You already picked your 2nd Pokemon..");
    throw new Error("Pick one of: base2 ,jungle2, or silvertempest2.");
  }

  const pokemon = pokemonBase || pokemonJungle || pokemonSilverTempest;
  const set = pokemonBase
    ? "Base Set 1st Edition"
    : pokemonJungle
    ? "Jungle 1st Edition"
    : "Silver Tempest";
  const caughtPokemon1 = findCard(pokemon, set);

  const pokemon2 = pokemonBase2 || pokemonJungle2 || pokemonSilverTempest2;
  console.log("pokemon2: ", pokemon2);
  const set2 = pokemonBase2
    ? "Base Set 1st Edition"
    : pokemonJungle2
    ? "Jungle 1st Edition"
    : "Silver Tempest";
  console.log("set2: ", set2);
  const caughtPokemon2 = findCard(pokemon2, set2);

  console.log("caughtPokemon2: ", caughtPokemon2);

  let result =
    ((caughtPokemon1[value1] - 20) / caughtPokemon2[value2]) * 100 - 100;

  const formattedPokemon =
    "\n" +
    "Spread of: " +
    caughtPokemon1["name"] +
    " " +
    value1 +
    "  $" +
    caughtPokemon1[value1] +
    " and " +
    caughtPokemon2["name"] +
    " " +
    value2 +
    " $" +
    caughtPokemon2[value2] +
    " :" +
    "\n" +
    "%" +
    result.toFixed(0);

  await interaction.editReply(formattedPokemon);
};
