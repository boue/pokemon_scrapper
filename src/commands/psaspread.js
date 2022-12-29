import { SlashCommandBuilder } from "@discordjs/builders";
import data from "../../data/data.json" assert { type: "json" };

// for now supports one set
const PsaSpreadCommand = new SlashCommandBuilder()
  .setName("psaspread")
  .setDescription(
    "Gives you the spread between PSA10 and PSA9 - !Pick different Pokemons!"
  )
  .addStringOption((option) =>
    option
      .setName("pokemon1")
      .setDescription("Select the first pokemon")
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
      .setName("pokemon2")
      .setDescription("Select the second pokemon - pick a different!å")
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
  );

export default PsaSpreadCommand.toJSON();
