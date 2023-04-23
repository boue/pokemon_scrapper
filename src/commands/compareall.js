import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/dataList.json" assert { type: "json" };

export const CompareAllCommand = new SlashCommandBuilder()
  .setName("compareall")
  .setDescription("Gives the difference in % between for each card in the set")
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
        { name: "PSA10/PSA9 ", value: "PSA10/PSA9" },
        { name: "PSA10/RAW", value: "PSA10/RAW" },
        { name: "PSA9/RAW", value: "PSA9/RAW" }
      )
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const set = interaction.options.getString("set");
  const options = interaction.options.getString("options");
  let value1;
  let value2;

  if (options === "PSA10/PSA9") {
    value1 = "psa10";
    value2 = "psa9";
  } else if (options === "PSA10/RAW") {
    value1 = "psa10";
    value2 = "raw";
  } else if (options === "PSA9/RAW") {
    value1 = "psa9";
    value2 = "raw";
  }

  let formattedReply =
    "\n" +
    "Difference in percentage between " +
    value1.toUpperCase() +
    " with " +
    value2.toUpperCase() +
    " in set " +
    set +
    ":\n";

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
