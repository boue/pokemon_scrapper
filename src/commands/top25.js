import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/dataList.json" assert { type: "json" };

export const Top25Command = new SlashCommandBuilder()
  .setName("top25")
  .setDescription("Top 25 by spread per set")
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the Set")
      .addChoices(
        { name: "Base Set 1st Edition", value: "Base Set 1st Edition" },
        { name: "Jungle 1st Edition", value: "Jungle 1st Edition" },
        { name: "Silver Tempest", value: "Silver Tempest" },
        { name: "Crown Zenith", value: "Crown Zenith" },
        { name: "All", value: "All" }
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
    set === "All"
      ? "\n" +
        "Top 25 by spread for difference in percentage between " +
        value1.toUpperCase() +
        " with " +
        value2.toUpperCase() +
        " in all sets we support" +
        ":\n"
      : "\n" +
        "Top 25 by spread for difference in percentage between " +
        value1.toUpperCase() +
        " with " +
        value2.toUpperCase() +
        " in set " +
        set +
        ":\n";

  const differencePokemons =
    set === "All"
      ? data
          .map((d) => d.cards)
          .flat()
          ?.filter((card) => card.psa9 !== null && card.psa10 !== null)
          .map((card) => {
            const result1 = card[value1] - 20;
            const result2 = card[value2];
            const result = (result1 / result2) * 100 - 100;

            return [card.name, result.toFixed(0)];
          })
          .reduce(
            (uniqueArr, currentArr) => {
              const stringified = JSON.stringify(currentArr);
              if (!uniqueArr.set.has(stringified)) {
                uniqueArr.set.add(stringified);
                uniqueArr.arr.push(currentArr);
              }
              return uniqueArr;
            },
            { set: new Set(), arr: [] }
          )
          .arr.sort((a, b) => b[1] - a[1])
          .slice(0, 25)
      : data
          .find((d) => d.name === set)
          ?.cards?.filter((card) => card.psa9 !== null && card.psa10 !== null)
          .map((card) => {
            const result1 = card[value1] - 20;
            const result2 = card[value2];
            const result = (result1 / result2) * 100 - 100;

            return [card["name"], result.toFixed(0)];
          })
          .sort(function (a, b) {
            return b[1] - a[1];
          })
          .slice(0, 25);

  differencePokemons.forEach((pokemon) => {
    // let tempStr;

    // tempStr =
    //   set === "All"
    //     ? pokemon[0] + ": from set " + set + " " + pokemon[1] + "%" + "\n"
    //     : pokemon[0] + ": " + pokemon[1] + "%" + "\n";

    const tempStr = pokemon[0] + ": " + pokemon[1] + "%" + "\n";
    return (formattedReply += tempStr);
  });

  await interaction.editReply(formattedReply);
};
