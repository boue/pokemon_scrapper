import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/dataList.json" assert { type: "json" };

export const CompareAllByTypeCommand = new SlashCommandBuilder()
  .setName("compareallbytype")
  .setDescription(
    "Gives the difference BY TYPE in % between for each card in the set"
  )
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the Set")
      .addChoices({ name: "Crown Zenith", value: "Crown Zenith" })
      .addChoices({ name: "Silver Tempest", value: "Silver Tempest" })
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("type")
      .setDescription("Select the Type")
      .addChoices({ name: "V Alternate Art", value: "V Alternate Art" })
      .addChoices({ name: "VMAX Alternate Art", value: "VMAX Alternate Art" })
      .addChoices({ name: "VSTAR Alternate Art", value: "VSTAR Alternate Art" })
      .addChoices({
        name: "Alternate Art Trainer",
        value: "Alternate Art Trainer",
      })
      .addChoices({ name: "Character Rare", value: "Character Rare" })
      .addChoices({ name: "V", value: "V" })
      .addChoices({ name: "VMAX", value: "VMAX" })
      .addChoices({ name: "VSTAR", value: "VSTAR" })
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
  const type = interaction.options.getString("type");
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
    "Difference in set percentage between " +
    value1.toUpperCase() +
    " with " +
    value2.toUpperCase() +
    " in set " +
    set +
    " for all " +
    type +
    ":\n";

  const differencePokemons = data
    .find((d) => d.name === set)
    ?.cards?.filter((c) => c.type === type)
    .map((card) => {
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
