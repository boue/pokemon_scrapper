import { SlashCommandBuilder } from "@discordjs/builders";
import { findCardsType } from "../../utils/utils.js";

export const TypeCommand = new SlashCommandBuilder()
  .setName("type")
  .setDescription("Gives you all pokemons of a specific type from a set")
  .addStringOption((option) =>
    option
      .setName("type")
      .setDescription("Select type")
      .addChoices(
        {
          name: "Trainer Secret Rare Rainbow",
          value: "Trainer Secret Rare Rainbow",
        },
        { name: "VMAX Secret Rare Rainbow", value: "VMAX Secret Rare Rainbow" },
        {
          name: "Trainer Full Art Ultra Rare",
          value: "Trainer Full Art Ultra Rare",
        },
        {
          name: "V Star Secret Rare Rainbow",
          value: "V Star Secret Rare Rainbow",
        },
        {
          name: "V Alternate Full Art Ultra Rare",
          value: "V Alternate Full Art Ultra Rare",
        },
        {
          name: "V Star Secret Rare Rainbow",
          value: "V Star Secret Rare Rainbow",
        },
        {
          name: "V Alternate Art Ultra Rare",
          value: "V Alternate Art Ultra Rare",
        }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the set")
      .addChoices({
        name: "Silver Tempest",
        value: "Silver Tempest",
      })
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const set = interaction.options.getString("set");
  const type = interaction.options.getString("type");

  const cardsByType = findCardsType(type, set);

  console.log("cardsByType: ", cardsByType);

  let formattedReply = "\n" + type + " in set " + set + ":\n";

  cardsByType.forEach(({ name }) => {
    const tempStr = name + "\n";
    return (formattedReply += tempStr);
  });

  await interaction.editReply(formattedReply);
};
