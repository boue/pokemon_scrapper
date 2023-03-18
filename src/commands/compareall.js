import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

export const CompareAllCommand = new SlashCommandBuilder()
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
        { name: "Jungle 1st Edition", value: "Jungle 1st Edition" },
        { name: "Silver Tempest", value: "Silver Tempest" }
      )
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const set = interaction.options.getString("set");

  let formattedReply = "";

  const differencePokemons = data
    .find((d) => d.name === set)
    ?.cards?.map((card) => {
      const psa10 = card["psa10"] - 20;
      const psa9 = card["psa9"];
      const result = (psa10 / psa9) * 100 - 100;

      return [card["name"], result.toFixed(0)];
    })
    .sort(function (a, b) {
      return b[1] - a[1];
    });

  differencePokemons.forEach((pokemon) => {
    const tempStr = pokemon[0] + ": " + pokemon[1] + "%" + "\n";
    return (formattedReply += tempStr);
  });

  await interaction.editReply(formattedReply);
};
