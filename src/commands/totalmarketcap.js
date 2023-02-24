import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const TotalMarketCap = new SlashCommandBuilder()
  .setName("totalmarketcap")
  .setDescription("Total Market Cap")
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the set")
      .addChoices(
        {
          name: "1st Edition Base Set",
          value: "1st Edition Base Set",
        },
        {
          name: "Jungle 1st Edition",
          value: "Jungle 1st Edition",
        }
      )
      .setRequired(true)
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
  );

export default TotalMarketCap.toJSON();
