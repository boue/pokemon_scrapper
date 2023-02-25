import { SlashCommandBuilder } from "@discordjs/builders";

const SetWeightCommand = new SlashCommandBuilder()
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
  );
export default SetWeightCommand.toJSON();
