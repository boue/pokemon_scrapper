import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

const CompareAllCommand = new SlashCommandBuilder()
  .setName("compareall")
  .setDescription(
    "Gives the difference in % between PSA10 and PSA9 for each card in the set"
  )
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

export default CompareAllCommand.toJSON();
