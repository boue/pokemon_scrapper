import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

const MarketPriceCommand = new SlashCommandBuilder()
  .setName("marketprice")
  .setDescription("Gives you market price");

export default MarketPriceCommand.toJSON();
