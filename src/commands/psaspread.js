import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const PsaSpreadCommand = new SlashCommandBuilder()
  .setName("psaspread")
  .setDescription(
    "Gives you the spread between PSA10/PS9, PSA10/RAW, PSA9/RAW - !Pick different Pokemons!"
  )
  .addStringOption((option) =>
    option
      .setName("pokemon1")
      .setDescription("Select the first pokemon")
      .setAutocomplete(true)
  )
  .setRequired(true)
  .addStringOption((option) =>
    option
      .setName("value1")
      .setDescription("Select value")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("pokemon2")
      .setDescription("Select the second pokemon - pick a different one!")
      .setAutocomplete(true)
  )
  .setRequired(true)
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
  );

export default PsaSpreadCommand.toJSON();
