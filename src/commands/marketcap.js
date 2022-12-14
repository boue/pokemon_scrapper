// const { SlashCommandBuilder } = require("discord.js");
// const data = require("../../data/data.json");
import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const MarketCapCommand = new SlashCommandBuilder()
  .setName("marketcap")
  .setDescription("Multiples Last Sale Of PSA value to its Population")
  .addStringOption((option) =>
    option
      .setName("pokemon")
      .setDescription("Select the pokemon")
      .addChoices(
        { name: "Alakazam Holo 1", value: "Alakazam Holo 1" },
        { name: "Blastoise Holo 2", value: "Blastoise Holo 2" },
        { name: "Chansey Holo 3", value: "Chansey Holo 3" },
        { name: "Charizard Holo 4", value: "Charizard Holo 4" },
        { name: "Clefairy Holo 5", value: "Clefairy Holo 5" },
        { name: "Gyarados Holo 6", value: "Gyarados Holo 6" },
        { name: "Hitmonchan Holo 7", value: "Hitmonchan Holo 7" },
        { name: "Magneton Holo 9", value: "Magneton Holo 9" },
        { name: "Mewtwo Holo 10", value: "Mewtwo Holo 10" },
        { name: "Nidoking Holo 11", value: "Nidoking Holo 11" },
        { name: "Ninetales Holo 12", value: "Ninetales Holo 12" },
        { name: "Poliwrath Holo 13", value: "Poliwrath Holo 13" },
        { name: "Raichu Holo 14", value: "Raichu Holo 14" },
        { name: "Venusaur Holo 15", value: "Venusaur Holo 15" },
        { name: "Zapdos Holo 16", value: "Zapdos Holo 16" }
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
  );
export default MarketCapCommand.toJSON();
