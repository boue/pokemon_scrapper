const { SlashCommandBuilder } = require("discord.js");
const data = require("../../data/data.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("marketprice")
    .setDescription("Gives you market price"),
  async execute(interaction) {
    const formattedPokemons = Object.entries(data)
      .map((key, value) => {
        return (
          "\n" +
          "Name: " +
          key["1"]["name"] +
          "\n" +
          "Current PSA10 Price: " +
          "$" +
          parseInt(key["1"]["psa10"].replace(/,/g, "")) +
          "\n" +
          "Current PSA9 Price: " +
          "$" +
          parseInt(key["1"]["psa9"].replace(/,/g, "")) +
          "\n" +
          "Current POP10: " +
          key["1"]["pop10"] +
          "\n" +
          "Current POP9: " +
          key["1"]["pop9"] +
          "\n" +
          "\n"
        );
      })
      .join("");
    await interaction.reply(formattedPokemons);
  },
};
