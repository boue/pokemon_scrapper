import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

const PopulationCommand = new SlashCommandBuilder()
  .setName("population")
  .setDescription("Gives you individual pokemon population")
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
        { name: "pop10", value: "pop10" },
        { name: "pop9", value: "pop9" }
      )
      .setRequired(true)
  );
export default PopulationCommand.toJSON();
