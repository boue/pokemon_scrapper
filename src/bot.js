import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import { Client, Events, GatewayIntentBits, Collection } from "discord.js";
import { Routes } from "discord-api-types/v10";
import data from "../data/dataList.json" assert { type: "json" };

// import MarketPriceCommand from "./commands/marketprice.js";
import {
  PokemonPriceCommand,
  autocomplete,
  execute,
} from "./commands/pokemonprice.js";
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

// const findCard = (name, set) => {
//   const cardsInSet = data[set]?.cards;
//   const card = cardsInSet.find((card) => card.name === name);
//   return card;
// };

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
  try {
    if (interaction.isAutocomplete()) {
      console.log("inside autocomplete");
      await autocomplete(interaction);
    }
    if (interaction.isChatInputCommand()) {
      await execute(interaction);
    }
    // if (interaction.commandName === "price") {
    // const pokemon = interaction.options.getString("base");
    // console.log("pokemon is: ", pokemon);
    // const value = interaction.options.getString("value");
    // console.log("value is: ", value);

    // const caughtPokemon = findCard(
    //   pokemon.split(" - ")[0],
    //   pokemon.split(" - ")[1]
    // );

    // console.log("caughtPokemon is: ", caughtPokemon);

    // const formattedPokemon =
    //   "\n" +
    //   "Name: " +
    //   caughtPokemon["name"] +
    //   "\n" +
    //   "Current " +
    //   reason +
    //   " Price: " +
    //   "$" +
    //   caughtPokemon[value] +
    //   "\n";

    // await interaction.reply(formattedPokemon);
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
