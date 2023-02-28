import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

export const SetWeightCommand = new SlashCommandBuilder()
  .setName("weight")
  .setDescription("Gives you weight averages for a set")
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the set")
      .addChoices(
        { name: "Base Set 1st Edition", value: "Base Set 1st Edition" },
        { name: "Jungle 1st Edition", value: "Jungle 1st Edition" }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("weight")
      .setDescription("Select weight average")
      .addChoices(
        { name: "light", value: "light" },
        { name: "heavy", value: "heavy" }
      )
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  console.log("interaction: ", interaction);
  const setName = interaction.options.getString("set");
  const weight = interaction.options.getString("weight");

  const targetSetData = data?.find((set) => {
    return set?.name === setName;
  });

  const result =
    "\n" +
    "Set: " +
    setName +
    "\n" +
    "Average " +
    weight +
    " pack: " +
    targetSetData[weight] +
    "\n";

  await interaction.editReply(result);
};
