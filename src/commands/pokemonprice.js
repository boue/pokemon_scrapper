// import { SlashCommandBuilder } from "@discordjs/builders";
// import data from "../../data/data.json" assert { type: "json" };

// // for now supports one set
// const PokemonPriceCommand = new SlashCommandBuilder()
//   .setName("price")
//   .setDescription("Gives you individual pokemon price")
//   .addStringOption((option) =>
//     option
//       .setName("pokemon")
//       .setDescription("Select the pokemon")
//       .setAutocomplete(true)
//   )
//   .setRequired(true)

//   .addStringOption((option) =>
//     option
//       .setName("value")
//       .setDescription("Select value")
//       .addChoices(
//         { name: "psa10", value: "psa10" },
//         { name: "psa9", value: "psa9" },
//         { name: "raw", value: "raw" }
//       )
//       .setRequired(true)
//   );
// export default PokemonPriceCommand.toJSON();
module.exports = {
  data: new SlashCommandBuilder()
    .setName("price")
    .setDescription("Gives you individual pokemon price")
    .addStringOption((option) =>
      option
        .setName("pokemon")
        .setDescription("Select the pokemon")
        .setAutocomplete(true)
    )
    .setRequired(true)

    .addStringOption((option) =>
      option
        .setName("value")
        .setDescription("Select value")
        .addChoices(
          { name: "psa10", value: "psa10" },
          { name: "psa9", value: "psa9" },
          { name: "raw", value: "raw" }
        )
        .setRequired(true)
    ),
  async autocomplete(interaction) {
    const focusedValue = interaction.options.getFocused();
    const choices = [
      "Alakazam Holo 1 - Base Set 1st Edition",
      "Blastoise Holo 2 - Base Set 1st Edition",
      "Chansey Holo 3 - Base Set 1st Edition",
      "Charizard Holo 4 - Base Set 1st Edition",
      "Clefairy Holo 5 - Base Set 1st Edition",
      "Gyarados Holo 6 - Base Set 1st Edition",
      "Hitmonchan Holo 7 - Base Set 1st Edition",
      "Magneton Holo 9 - Base Set 1st Edition",
      "Mewtwo Holo 10- Base Set 1st Edition",
      "Nidoking Holo 11 - Base Set 1st Edition",
      "Ninetales Holo 12 - Base Set 1st Edition",
      "Poliwrath Holo 13 - Base Set 1st Edition",
      "Raichu Holo 14 - Base Set 1st Edition",
      "Venusaur Holo 15 - Base Set 1st Edition",
      "Zapdos Holo 16 - Base Set 1st Edition",
      "Electrode Holo 2 - Jungle 1st Edition",
      "Flareon Holo 3 - Jungle 1st Edition",
      "Jolteon Holo 4 - Jungle 1st Edition",
      "Kangaskhan Holo 5 - Jungle 1st Edition",
      "Mr. Mime Holo 6 - Jungle 1st Edition",
      "Nidoqueen Holo 7 - Jungle 1st Edition",
      "Pidgeot Holo 8 - Jungle 1st Edition",
      "Pinsir Holo 9 - Jungle 1st Edition",
      "Scyther Holo 10 - Jungle 1st Edition",
      "Snorlax Holo 11 - Jungle 1st Edition",
      "Vaporeon Holo 12 - Jungle 1st Edition",
      "Venomoth Holo 13 - Jungle 1st Edition",
      "Victreebel Holo 14 - Jungle 1st Edition",
      "Vileplume Holo 15 - Jungle 1st Edition",
      "Wigglytuff Holo 16 - Jungle 1st Edition",
    ];
    const filtered = choices.filter((choice) =>
      choice.startsWith(focusedValue)
    );
    await interaction.respond(
      filtered.map((choice) => ({ name: choice, value: choice }))
    );
  },
};
