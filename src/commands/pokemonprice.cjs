const { SlashCommandBuilder } = require("discord.js");
const data = require("../../data/data.json");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("price")
    .setDescription("Gives you individual pokemon price")
    .addStringOption((option) =>
      option.setName("pokemon").setDescription("the pokemon").setRequired(true)
    )
    .addStringOption((option) =>
      option
        .setName("psa")
        .setDescription("The input to echo back")
        .addChoices(
          { name: "psa10", value: "psa10" },
          { name: "psa9", value: "psa9" }
        )
        .setRequired(true)
    ),

  async execute(interaction) {
    const target = interaction.options.getString("pokemon");
    const reason = interaction.options.getString("psa");

    const caughtPokemon = Object.entries(data).find((p) => {
      return p["1"]["name"] === target;
      // return pokemon[1];
    });

    const formattedPokemon =
      "\n" +
      "Name: " +
      caughtPokemon[1]["name"] +
      "\n" +
      "Current " +
      reason +
      " Price: " +
      "$" +
      parseInt(caughtPokemon[1][reason].replace(/,/g, "")) +
      "\n";

    await interaction.reply(formattedPokemon);
  },
};
