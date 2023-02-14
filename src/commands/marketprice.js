import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

const MarketPriceCommand = new SlashCommandBuilder()
  .setName("marketprice")
  .setDescription("Gives you market price")
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the Set")
      .addChoices(
        { name: "Base Set 1st Edition", value: "Base Set 1st Edition" },
        { name: "Jungle 1st Edition", value: "Jungle 1st Edition" }
      )
      .setRequired(true)
  );

export default MarketPriceCommand.toJSON();
