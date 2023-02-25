import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const PsaComparisonCommand = new SlashCommandBuilder()
  .setName("psacomparison")
  .setDescription(
    "Gives you the spread between PSA10/PS9, PSA10/RAW, PSA9/RAW for one pokemon"
  )
  .addStringOption((option) =>
    option
      .setName("pokemon")
      .setDescription("Select the pokemon")
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

export default PsaComparisonCommand.toJSON();
