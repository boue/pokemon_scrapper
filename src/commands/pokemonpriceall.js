import { SlashCommandBuilder } from "@discordjs/builders";
import { findCard } from "../../utils/utils.js";

export const PokemonPriceAllCommand = new SlashCommandBuilder()
  .setName("priceall")
  .setDescription(
    "Gives you price for psa10, psa9 and raw for one pokemon. Pick only one set"
  )
  .addStringOption((option) =>
    option
      .setName("base")
      .setDescription("Search a card in Base Set 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("jungle")
      .setDescription("Search a card in Jungle 1st Edition")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .addStringOption((option) =>
    option
      .setName("silvertempest")
      .setDescription("Search a card in Silver Tempest set")
      .setMinLength(1)
      .setAutocomplete(true)
  )
  .toJSON();

export const autocomplete = async (interaction) => {
  const focusedOption = interaction.options.getFocused(true);

  let choices = null;

  if (focusedOption.name === "base" || focusedOption.name === "base2") {
    console.log("here in base");
    choices = [
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
  }

  if (focusedOption.name === "jungle" || focusedOption.name === "jungle2") {
    console.log("here in jungle");
    choices = [
      "Electrode Holo 2",
      "Flareon Holo 3",
      "Jolteon Holo 4",
      "Kangaskhan Holo 5",
      "Mr. Mime Holo 6",
      "Nidoqueen Holo 7",
      "Pidgeot Holo 8",
      "Pinsir Holo 9",
      "Scyther Holo 10",
      "Snorlax Holo 11",
      "Vaporeon Holo 12",
      "Venomoth Holo 13",
      "Victreebel Holo 14",
      "Vileplume Holo 15",
      "Wigglytuff Holo 16",
    ];
  }

  if (
    focusedOption.name === "silvertempest" ||
    focusedOption.name === "silvertempest2"
  ) {
    console.log("here in silvertempest");
    choices = [
      "Lugia V 186",
      "Serena 193",
      "Lugia VSTAR 202",
      "Unown V 177",
      "Regidrago V 184",
      "Serena 207",
      "Alolan Vulpix VSTAR 197",
      "Skuntank V 181",
      "Unown VSTAR 199",
      "Candice 189",
      "Wallace 194",
      "Regieleki VMAX 198",
      "Regidrago VSTAR 201",
      "Candice 204",
      "Furisode Girl 205",
      "Serperior VSTAR 196",
      "Lance 206",
      "Wallace 208",
      "Lance 192",
      "Worker 209",
      "Brandon 203",
    ];
  }

  const filtered = choices.filter((choice) =>
    choice.toLowerCase().startsWith(focusedOption.value)
  );
  await interaction.respond(
    filtered.map((choice) => ({ name: choice, value: choice }))
  );
};

export const execute = async (interaction) => {
  const pokemonBase = interaction.options.getString("base");
  const pokemonJungle = interaction.options.getString("jungle");
  const pokemonSilverTempest = interaction.options.getString("silvertempest");

  const truthyArray = [pokemonBase, pokemonJungle, pokemonSilverTempest].filter(
    Boolean
  );

  if (truthyArray.length > 1) {
    await interaction.editReply("You can only search one pokemon at a time");
    throw new Error("You can only search one pokemon at a time");
  }
  const pokemon = pokemonBase || pokemonJungle || pokemonSilverTempest;
  const set = pokemonBase
    ? "Base Set 1st Edition"
    : pokemonJungle
    ? "Jungle 1st Edition"
    : "Silver Tempest";
  console.log("set is: ", set);
  console.log("pokemon is: ", pokemon);
  const caughtPokemon = findCard(pokemon, set);
  console.log("caughtPokemon is: ", caughtPokemon);

  const priceAllMessage =
    "\n" +
    caughtPokemon["name"] +
    " current prices: " +
    "\n" +
    "PSA 10: " +
    "$" +
    caughtPokemon["psa10"] +
    "\n" +
    "PSA 9: " +
    "$" +
    caughtPokemon["psa9"] +
    "\n" +
    "Raw: " +
    "$" +
    caughtPokemon["raw"] +
    "\n";

  await interaction.editReply(priceAllMessage);
};
