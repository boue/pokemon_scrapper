import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

export const CompareAllCommand = new SlashCommandBuilder()
  .setName("compareall")
  .setDescription(
    "Gives the difference in % between either PSA10/PSA9 OR PSA10/RAW OR PSA9/RAW for each card in the set"
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
  .addStringOption((option) =>
    option
      .setName("options")
      .setDescription("PSA10/PSA9 OR PSA10/RAW OR PSA9/RAW")
      .addChoices(
        { name: "PSA10/PSA9 ", value: "psa10psa9" },
        { name: "PSA10/RAW", value: "psa10raw" },
        { name: "PSA9/RAW", value: "psa9raw" }
      )
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const set = interaction.options.getString("set");
  const options = interaction.options.getString("options");
  let value1;
  let value2;

  if (options === "psa10psa9") {
    value1 = "psa10";
    value2 = "psa9";
  } else if (options === "psa10raw") {
    value1 = "psa10";
    value2 = "raw";
  } else if (options === "psa9raw") {
    value1 = "psa9";
    value2 = "raw";
  }

  let formattedReply = "";

  const differencePokemons = data
    .find((d) => d.name === set)
    ?.cards?.map((card) => {
      const result1 = card[value1] - 20;
      const result2 = card[value2];
      const result = (result1 / result2) * 100 - 100;

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
