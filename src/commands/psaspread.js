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
  .toJSON();

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");
  const pokemonBase2 = interaction.options.getString("base2");
  const pokemonJungle2 = interaction.options.getString("jungle2");
  const value1 = interaction.options.getString("value1");
  const value2 = interaction.options.getString("value2");

  if (value1 === value2)
    await interaction.editReply("Please pick two different values to compare.");
  throw new Error("Please pick two different values to compare.");

  if (value1 === "psa9" && value2 === "psa10")
    await interaction.editReply(
      "PSA9/PS10 is not supported. Pick PSA10 first then PS9."
    );
  throw new Error("PSA9/PS10 is not supported. Pick PSA10 first then PS9.");

  if (pokemonBase && pokemonJungle) {
    await interaction.editReply("You already picked your 1st Pokemon..");
    throw new Error("Pick base or jungle, not both.");
  }
  if (pokemonBase2 && pokemonJungle2) {
    await interaction.editReply("You already picked your 2nd Pokemon..");
    throw new Error("Pick base2 or jungle2, not both.");
  }

  const pokemon = pokemonBase || pokemonJungle;
  const set = pokemonBase ? "Base Set 1st Edition" : "Jungle 1st Edition";
  const caughtPokemon1 = findCard(pokemon, set);

  const pokemon2 = pokemonBase2 || pokemonJungle2;
  console.log("pokemon2: ", pokemon2);
  const set2 = pokemonBase2 ? "Base Set 1st Edition" : "Jungle 1st Edition";
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
