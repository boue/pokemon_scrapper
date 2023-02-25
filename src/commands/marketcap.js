// const { SlashCommandBuilder } = require("discord.js");
// const data = require("../../data/data.json");
import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const MarketCapCommand = new SlashCommandBuilder()
  .setName("marketcap")
  .setDescription("Multiples Last Sale Of PSA value to its Population")
  .addStringOption((option) =>
    option
      .setName("pokemon")
      .setDescription("Select the pokemon")
      .setAutocomplete(true)
  )
  .setRequired(true)
  .addStringOption((option) =>
    option
      .setName("value")
      .setDescription("Select value")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" }
      )
      .setRequired(true)
  );
export default MarketCapCommand.toJSON();
