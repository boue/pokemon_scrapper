import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

const CompareAllCommand = new SlashCommandBuilder()
  .setName("compareall")
  .setDescription(
    "Gives the difference between PSA10 and PSA9 for each card in the set"
  );

export default CompareAllCommand.toJSON();
