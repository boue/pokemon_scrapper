import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

export const TotalMarketCapCommand = new SlashCommandBuilder()
  .setName("totalmarketcap")
  .setDescription("Total Market Cap")
  .addStringOption((option) =>
    option
      .setName("set")
      .setDescription("Select the set")
      .addChoices(
        {
          name: "1st Edition Base Set",
          value: "1st Edition Base Set",
        },
        {
          name: "Jungle 1st Edition",
          value: "Jungle 1st Edition",
        }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("value")
      .setDescription("Select value")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" }
      )
      .setRequired(true)
  )
  .toJSON();

export const execute = async (interaction) => {
  const set = interaction.options.getString("set");
  const value = interaction.options.getString("value");
  const popValue = value.substring(3);
  const pop = `pop${popValue}`;

  let marketCaps = data
    .find((d) => d.name === set)
    .cards.map((card) => {
      return card[value] * card[pop];
    });

  const totalMarketCap = marketCaps.reduce((a, b) => a + b);

  const result =
    "\n" + "Total Marketcap for: " + set + "\n" + "$" + totalMarketCap;

  await interaction.reply(result);
};
