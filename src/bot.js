import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import { Client, Events, GatewayIntentBits, Collection } from "discord.js";
import { Routes } from "discord-api-types/v10";
import data from "../data/dataList.json" assert { type: "json" };

// import MarketPriceCommand from "./commands/marketprice.js";
import { PokemonPriceCommand, autocomplete } from "./commands/pokemonprice.js";
// import PsaComparisonCommand from "./commands/psacomparison.js";
// import MarketCapCommand from "./commands/marketcap.js";
// import TotalMarketCap from "./commands/totalmarketcap.js";
// import PsaSpreadCommand from "./commands/psaspread.js";
// import CompareAllCommand from "./commands/compareall.js";
// import PopulationCommand from "./commands/population.js";
// import SetWeightCommand from "./commands/setweights.js";

config();

const TOKEN = process.env.DISCORDJS_BOT_TOKEN;
const CLIENT_ID = process.env.DISCORDJS_CLIENT_ID;
const GUILD_ID = process.env.DISCORDJS_GUILD_ID;
const CHANNEL_ID = process.env.DISCORDJS_CHANNEL_ID;

const findCard = (name, set) => {
  const cardsInSet = data[set]?.cards;
  const card = cardsInSet.find((card) => card.name === name);
  return card;
};

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

const rest = new REST({ version: "10" }).setToken(TOKEN);

client.on("ready", () => {
  console.log(`${client.user.tag} has logged in!`);
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;
  if (!interaction.isAutocomplete()) return;
  autocomplete(interaction);

  try {
    // if (interaction.commandName === "marketprice") {
    //   const set = interaction.options.getString("set");
    //   const cardsInSet = data[set]?.cards;

    //   const formattedPokemons = cardsInSet
    //     .map(({ name, psa10, psa9, pop10, pop9, raw }) => {
    //       return (
    //         "\n" +
    //         "Name: " +
    //         name +
    //         "\n" +
    //         "Current PSA10 Price: " +
    //         "$" +
    //         psa10 +
    //         "\n" +
    //         "Current PSA9 Price: " +
    //         "$" +
    //         psa9 +
    //         "\n" +
    //         "Current POP10: " +
    //         pop10 +
    //         "\n" +
    //         "Current POP9: " +
    //         pop9 +
    //         "\n" +
    //         "\n"
    //       );
    //     })
    //     .join("");

    //   await interaction.reply(formattedPokemons);
    // }
    // if (interaction.commandName === "psaspread") {
    //   const target1 = interaction.options.getString("pokemon1");
    //   const pokemon1 = findCard(
    //     target1.split(" - ")[0],
    //     target1.split(" - ")[1]
    //   );
    //   const target2 = interaction.options.getString("pokemon2");
    //   const pokemon2 = findCard(
    //     target2.split(" - ")[0],
    //     target2.split(" - ")[1]
    //   );
    //   const value1 = interaction.options.getString("value1");
    //   const value2 = interaction.options.getString("value2");

    //   if (pokemon1.name === pokemon2.name)
    //     throw new Error("Please pick two different pokemons.");

    //   if (value1 === value2)
    //     throw new Error("Please pick two different values to compare.");

    //   if (value1 === "psa9" && value2 === "psa10")
    //     throw new Error(
    //       "PSA9/PS10 is not supported. Pick PSA10 first then PS9."
    //     );

    //   let value = ((pokemon1[value1] - 20) / pokemon2[value2]) * 100 - 100;

    //   const formattedPokemon =
    //     "\n" +
    //     "Spread of: " +
    //     pokemon1.name +
    //     value1 +
    //     "  $" +
    //     pokemon1[value1] +
    //     " and " +
    //     pokemon2.name +
    //     value2 +
    //     " $" +
    //     pokemon2[value2] +
    //     " :" +
    //     "\n" +
    //     "%" +
    //     value.toFixed(2);

    //   await interaction.reply(formattedPokemon);
    // }
    // if (interaction.commandName === "totalmarketcap") {
    //   const set = interaction.options.getString("set");
    //   const reason = interaction.options.getString("value");
    //   const popValue = reason.substring(3);
    //   const pop = `pop${popValue}`;

    //   let marketCaps = data
    //     .find((d) => d.name === set)
    //     .cards.map((card) => {
    //       card[reason] * card[pop];
    //     });

    //   const totalMarketCap = marketCaps.reduce((a, b) => a + b);

    //   const result =
    //     "\n" + "Total Marketcap for: " + set + "\n" + "$" + totalMarketCap;

    //   await interaction.reply(result);
    // }
    // if (interaction.commandName === "marketcap") {
    //   const pokemon = interaction.options.getString("pokemon");
    //   const value = interaction.options.getString("value");
    //   const popValue = reason.substring(3);
    //   const pop = `pop${popValue}`;

    //   const caughtPokemon = findCard(
    //     pokemon.split(" - ")[0],
    //     pokemon.split(" - ")[1]
    //   );

    //   const marketcap = caughtPokemon[reason] * caughtPokemon[pop];

    //   const formattedPokemon =
    //     "\n" +
    //     "Name: " +
    //     caughtPokemon["name"] +
    //     "\n" +
    //     "Marketcap is: " +
    //     "$" +
    //     marketcap;

    //   await interaction.reply(formattedPokemon);
    // }
    if (interaction.commandName === "price") {
      const pokemon = interaction.options.getString("pokemon");
      const value = interaction.options.getString("value");

      const caughtPokemon = findCard(
        pokemon.split(" - ")[0],
        pokemon.split(" - ")[1]
      );

      const formattedPokemon =
        "\n" +
        "Name: " +
        caughtPokemon["name"] +
        "\n" +
        "Current " +
        reason +
        " Price: " +
        "$" +
        caughtPokemon[value] +
        "\n";

      await interaction.reply(formattedPokemon);
    }
    // if (interaction.commandName === "population") {
    //   const pokemon = interaction.options.getString("pokemon");
    //   const value = interaction.options.getString("value");

    //   const caughtPokemon = findCard(
    //     pokemon.split(" - ")[0],
    //     pokemon.split(" - ")[1]
    //   );

    //   const formattedPokemon =
    //     "\n" +
    //     "Name: " +
    //     caughtPokemon["name"] +
    //     "\n" +
    //     reason +
    //     ": " +
    //     caughtPokemon[value] +
    //     "\n";

    //   await interaction.reply(formattedPokemon);
    // }
    // if (interaction.commandName === "weight") {
    //   const setName = interaction.options.getString("set");
    //   const weightClass = interaction.options.getString("weight");

    //   const targetSetData = sets.find((s) => s.name === setName);

    //   const result =
    //     "\n" +
    //     "Set: " +
    //     targetSetData?.name +
    //     "\n" +
    //     "Average " +
    //     weightClass +
    //     " pack: " +
    //     targetSetData[weightClass] +
    //     "\n";

    //   await interaction.reply(result);
    // }
    // if (interaction.commandName === "compareall") {
    //   const set = interaction.options.getString("set");

    //   let formattedReply = "";

    //   const differencePokemons = data
    //     .find((d) => d.name === set)
    //     ?.cards?.map((card) => {
    //       const psa10 = card["psa10"] - 20;
    //       const psa9 = card["psa9"];
    //       const result = (psa10 / psa9) * 100 - 100;

    //       return [card["name"], result.toFixed(2)];
    //     })
    //     .sort(function (a, b) {
    //       return b[1] - a[1];
    //     });

    //   differencePokemons.forEach((pokemon) => {
    //     const tempStr = pokemon[0] + ": " + pokemon[1] + "%" + "\n";
    //     return (formattedReply += tempStr);
    //   });

    //   await interaction.reply(formattedReply);
    // }
    // if (interaction.commandName === "psacomparison") {
    //   const pokemon = interaction.options.getString("pokemon");
    //   const value1 = interaction.options.getString("value1");
    //   const value2 = interaction.options.getString("value2");

    //   const caughtPokemon = findCard(
    //     pokemon.split(" - ")[0],
    //     pokemon.split(" - ")[1]
    //   );

    //   if (value1 === value2)
    //     throw new Error("Please pick two different values to compare.");

    //   if (value1 === "psa9" && value2 === "psa10")
    //     throw new Error(
    //       "PSA9/PS10 is not supported. Pick PSA10 first then PS9."
    //     );

    //   let result =
    //     ((caughtPokemon[value1] - 20) / caughtPokemon[value2]) * 100 - 100;

    //   const formattedPokemon =
    //     "\n" +
    //     caughtPokemon["name"] +
    //     " " +
    //     value1 +
    //     " with " +
    //     value2 +
    //     ":\n" +
    //     result.toFixed(2) +
    //     "%";

    //   await interaction.reply(formattedPokemon);
    // }
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: error.message ?? "There was an error executing this command",
    });
  }
});

async function main() {
  const commands = [
    // MarketPriceCommand,
    PokemonPriceCommand,
    // PsaComparisonCommand,
    // MarketCapCommand,
    // TotalMarketCap,
    // PsaSpreadCommand,
    // CompareAllCommand,
    // PopulationCommand,
    // SetWeightCommand,
  ];
  try {
    console.log("Started refreshing application (/) commands.");
    await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
      body: commands,
    });
    client.login(TOKEN);
  } catch (err) {
    console.log(err);
  }
}

main();
