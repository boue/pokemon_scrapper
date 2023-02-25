import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const PsaComparisonCommand = new SlashCommandBuilder()
  .setName("psacomparison")
  .setDescription(
    "Gives you the spread between PSA10/PS9, PSA10/RAW, PSA9/RAW for one pokemon"
  )
  .addStringOption((option) =>
    option
      .setName("pokemon")
      .setDescription("Select the pokemon")
      .addChoices(
        {
          name: "Alakazam Holo 1 - Base Set 1st Edition",
          value: "Alakazam Holo 1 - Base Set 1st Edition",
        },
        {
          name: "Blastoise Holo 2 - Base Set 1st Edition",
          value: "Blastoise Holo 2 - Base Set 1st Edition",
        },
        {
          name: "Chansey Holo 3 - Base Set 1st Edition",
          value: "Chansey Holo 3 - Base Set 1st Edition",
        },
        {
          name: "Charizard Holo 4 - Base Set 1st Edition",
          value: "Charizard Holo 4 - Base Set 1st Edition",
        },
        {
          name: "Clefairy Holo 5 - Base Set 1st Edition",
          value: "Clefairy Holo 5",
        },
        {
          name: "Gyarados Holo 6 - Base Set 1st Edition",
          value: "Gyarados Holo 6 - Base Set 1st Edition",
        },
        {
          name: "Hitmonchan Holo 7 - Base Set 1st Edition",
          value: "Hitmonchan Holo 7 - Base Set 1st Edition",
        },
        {
          name: "Magneton Holo 9 - Base Set 1st Edition",
          value: "Magneton Holo 9 - Base Set 1st Edition",
        },
        {
          name: "Mewtwo Holo 10- Base Set 1st Edition",
          value: "Mewtwo Holo 10 - Base Set 1st Edition",
        },
        {
          name: "Nidoking Holo 11 - Base Set 1st Edition",
          value: "Nidoking Holo 11 - Base Set 1st Edition",
        },
        {
          name: "Ninetales Holo 12 - Base Set 1st Edition",
          value: "Ninetales Holo 12 - Base Set 1st Edition",
        },
        {
          name: "Poliwrath Holo 13 - Base Set 1st Edition",
          value: "Poliwrath Holo 13 - Base Set 1st Edition",
        },
        {
          name: "Raichu Holo 14 - Base Set 1st Edition",
          value: "Raichu Holo 14 - Base Set 1st Edition",
        },
        {
          name: "Venusaur Holo 15 - Base Set 1st Edition",
          value: "Venusaur Holo 15 - Base Set 1st Edition",
        },
        {
          name: "Zapdos Holo 16 - Base Set 1st Edition",
          value: "Zapdos Holo 16 - Base Set 1st Edition",
        },
        {
          name: "Electrode Holo 2 - Jungle 1st Edition",
          value: "Electrode Holo 2 - Jungle 1st Edition",
        },
        {
          name: "Flareon Holo 3 - Jungle 1st Edition",
          value: "Flareon Holo 3 - Jungle 1st Edition",
        },
        {
          name: "Jolteon Holo 4 - Jungle 1st Edition",
          value: "Jolteon Holo 4 - Jungle 1st Edition",
        },
        {
          name: "Kangaskhan Holo 5 - Jungle 1st Edition",
          value: "Kangaskhan Holo 5 - Jungle 1st Edition",
        },
        {
          name: "Mr. Mime Holo 6 - Jungle 1st Edition",
          value: "Mr. Mime Holo 6 - Jungle 1st Edition",
        },
        {
          name: "Nidoqueen Holo 7 - Jungle 1st Edition",
          value: "Nidoqueen Holo 7 - Jungle 1st Edition",
        },
        {
          name: "Pidgeot Holo 8 - Jungle 1st Edition",
          value: "Pidgeot Holo 8 - Jungle 1st Edition",
        },
        {
          name: "Pinsir Holo 9 - Jungle 1st Edition",
          value: "Pinsir Holo 9 - Jungle 1st Edition",
        },
        {
          name: "Scyther Holo 10 - Jungle 1st Edition",
          value: "Scyther Holo 10 - Jungle 1st Edition",
        },
        {
          name: "Snorlax Holo 11 - Jungle 1st Edition",
          value: "Snorlax Holo 11 - Jungle 1st Edition",
        },
        {
          name: "Vaporeon Holo 12 - Jungle 1st Edition",
          value: "Vaporeon Holo 12 - Jungle 1st Edition",
        },
        {
          name: "Venomoth Holo 13 - Jungle 1st Edition",
          value: "Venomoth Holo 13 - Jungle 1st Edition",
        },
        {
          name: "Victreebel Holo 14 - Jungle 1st Edition",
          value: "Victreebel Holo 14 - Jungle 1st Edition",
        },
        {
          name: "Vileplume Holo 15 - Jungle 1st Edition",
          value: "Vileplume Holo 15 - Jungle 1st Edition",
        },
        {
          name: "Wigglytuff Holo 16 - Jungle 1st Edition",
          value: "Wigglytuff Holo 16 - Jungle 1st Edition",
        }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("value1")
      .setDescription("Select value")
      .addChoices(
        { name: "psa10", value: "psa10" },
        { name: "psa9", value: "psa9" }
      )
      .setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("value2")
      .setDescription(
        "REMINDER: PSA10/PS9, PSA10/RAW, PSA9/RAW are the options supported"
      )
      .addChoices(
        { name: "psa9", value: "psa9" },
        { name: "raw", value: "raw" }
      )
      .setRequired(true)
  );

export default PsaComparisonCommand.toJSON();
