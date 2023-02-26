import { SlashCommandBuilder } from "@discordjs/builders";
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

export const PokemonPriceCommand = new SlashCommandBuilder()
  .setName("price")
  .setDescription("Gives you individual pokemon price")
  .addStringOption(
    (option) =>
      option
        .setName("base")
        .setDescription("Search a card in Base Set 1st Edition")
        .setAutocomplete(true)
    // .setRequired(true)
  )
  // .addStringOption(
  //   (option) =>
  //     option
  //       .setName("jungle")
  //       .setDescription("Search a card in Jungle 1st Edition")
  //       .setAutocomplete(true)
  //   // .setRequired(true)
  // )
  .addStringOption(
    (option) =>
      option
        .setName("value")
        .setDescription("Select value")
        .addChoices(
          { name: "psa10", value: "psa10" },
          { name: "psa9", value: "psa9" },
          { name: "raw", value: "raw" }
        )
    // .setRequired(true)
  )
  .toJSON();

export const autocomplete = async (interaction) => {
  console.log("inside autocomplete");
  const focusedOption = interaction.options.getFocused();
  console.log("this is the focused option: ", focusedOption);
  const choices = [
    "Charizard Holo 4",
    "Blastoise Holo 2",
    "Venusaur Holo 15",
    "Nidoking Holo 11",
    "Chansey Holo 3",
    "Clefairy Holo 5",
    "Alakazam Holo 1",
    "Poliwrath Holo 13",
    "Raichu Holo 14",
    "Ninetales Holo 12",
    "Hitmonchan Holo 7",
    "Mewtwo Holo 10",
    "Zapdos Holo 16",
    "Gyarados Holo 6",
    "Magneton Holo 9",
  ];

  const filtered = choices.filter((choice) =>
    choice.lowerCase().startsWith(focusedOption)
  );
  // const filtered = choices.filter((choice) =>
  //   choice.startsWith(focusedOption.value)
  // );
  console.log("these are the filtered choices: ", filtered);
  await interaction.respond(
    filtered.map((choice) => ({ name: choice, value: choice }))
  );
};

// if (focusedOption.name === "jungle") {
//   choices = [
//     "Electrode Holo 2",
//     "Flareon Holo 3",
//     "Jolteon Holo 4",
//     "Kangaskhan Holo 5",
//     "Mr. Mime Holo 6",
//     "Nidoqueen Holo 7",
//     "Pidgeot Holo 8",
//     "Pinsir Holo 9",
//     "Scyther Holo 10",
//     "Snorlax Holo 11",
//     "Vaporeon Holo 12",
//     "Venomoth Holo 13",
//     "Victreebel Holo 14",
//     "Vileplume Holo 15",
//     "Wigglytuff Holo 16",
//   ];
// }
// console.log("these are the choices: ", choices);

// };
// module.exports = {
//   data: new SlashCommandBuilder()
//     .setName("price")
//     .setDescription("Gives you individual pokemon price")
//     .addStringOption((option) =>
//       option
//         .setName("set")
//         .setDescription("Select the set")
//         .setAutocomplete(true)
//     )
//     .setRequired(true)

//     .addStringOption((option) =>
//       option
//         .setName("value")
//         .setDescription("Select value")
//         .addChoices(
//           { name: "psa10", value: "psa10" },
//           { name: "psa9", value: "psa9" },
//           { name: "raw", value: "raw" }
//         )
//         .setRequired(true)
//     ),
//   async autocomplete(interaction) {
//     const focusedOption = interaction.options.getFocused(true);
//     let choices;

//     if (focusedOption.name === "Base Set 1st Edition") {
//       choices = [
//         "Charizard Holo 4",
//         "Blastoise Holo 2",
//         "Venusaur Holo 15",
//         "Nidoking Holo 11",
//         "Chansey Holo 3",
//         "Clefairy Holo 5",
//         "Alakazam Holo 1",
//         "Poliwrath Holo 13",
//         "Raichu Holo 14",
//         "Ninetales Holo 12",
//         "Hitmonchan Holo 7",
//         "Mewtwo Holo 10",
//         "Zapdos Holo 16",
//         "Gyarados Holo 6",
//         "Magneton Holo 9",
//       ];
//     }

//     if (focusedOption.name === "Jungle 1st Edition") {
//       choices = [
//         "Electrode Holo 2",
//         "Flareon Holo 3",
//         "Jolteon Holo 4",
//         "Kangaskhan Holo 5",
//         "Mr. Mime Holo 6",
//         "Nidoqueen Holo 7",
//         "Pidgeot Holo 8",
//         "Pinsir Holo 9",
//         "Scyther Holo 10",
//         "Snorlax Holo 11",
//         "Vaporeon Holo 12",
//         "Venomoth Holo 13",
//         "Victreebel Holo 14",
//         "Vileplume Holo 15",
//         "Wigglytuff Holo 16",
//       ];
//     }
//     const filtered = choices.filter((choice) =>
//       choice.startsWith(focusedOption.value)
//     );
//     await interaction.respond(
//       filtered.map((choice) => ({ name: choice, value: choice }))
//     );
//   },
// };
