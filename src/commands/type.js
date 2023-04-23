import { SlashCommandBuilder } from "@discordjs/builders";
import { SUPPORTED_TYPES_SET } from "../../constants/supported.js";
import data from "../../data/dataList.json" assert { type: "json" };

export const TypeCommand = new SlashCommandBuilder()
  .setName("type")
  .setDescription("Retreats the top 25 by type from all modern sets")
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
      .setName("option")
      .setDescription("Select the option")
      .addChoices(
        {
          name: "Raw Price",
          value: "Raw Price",
        },
        {
          name: "PSA10 Price",
          value: "PSA10 Price",
        },
        {
          name: "PSA9 Price",
          value: "PSA9 Price",
        }
      )
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const type = interaction.options.getString("type");
  const option = interaction.options.getString("option");
  let result;
  const supportedSets = data.filter((set) =>
    SUPPORTED_TYPES_SET.includes(set.name)
  );

  const cardsByTypeAll = supportedSets
    .map((set) => {
      return data.find((s) => s.name === set.name).cards;
    })
    .flat(1);

  console.log("cardsByType: ", cardsByTypeAll);

  let formattedReply =
    "\n" + "Top 25 cards by" + option + type + "types: " + "\n";

  if (option === "Raw Price") {
    result = cardsByTypeAll.sort((a, b) => b.raw - a.raw).slice(0, 25);
    console.log("result: ", result);
    result.forEach(({ name, raw }) => {
      const tempStr = name + ": $" + raw + "\n";
      return (formattedReply += tempStr);
    });
  } else if (option === "PSA10 Price") {
    result = cardsByTypeAll.sort((a, b) => b.psa10 - a.psa10).slice(0, 25);
    console.log("result: ", result);
    result.forEach(({ name, psa10 }) => {
      const tempStr = name + ": $" + psa10 + "\n";
      return (formattedReply += tempStr);
    });
  } else if (option === "PSA9 Price") {
    result = cardsByTypeAll.sort((a, b) => b.psa9 - a.psa9).slice(0, 25);
    console.log("result: ", result);
    result.forEach(({ name, psa9 }) => {
      const tempStr = name + ": $" + psa9 + "\n";
      return (formattedReply += tempStr);
    });
  }

  // cardsByType.forEach(({ name, psa10, psa9, raw }) => {
  //   const tempStr =
  //     name + ": PSA10 $" + psa10 + " / PSA9 $" + psa9 + " / Raw $" + raw + "\n";
  //   return (formattedReply += tempStr);
  // });

  await interaction.editReply(formattedReply);
};
