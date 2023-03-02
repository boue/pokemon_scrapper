import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import { Client, Events, GatewayIntentBits, Collection } from "discord.js";
import { Routes } from "discord-api-types/v10";
import data from "../data/dataList.json" assert { type: "json" };

import {
  PokemonPriceCommand,
  autocomplete,
  execute as executePokemonPrice,
} from "./commands/pokemonprice.js";
import {
  PopulationCommand,
  autocomplete as autocompletePopulation,
  execute as executePopulation,
} from "./commands/population.js";
import {
  SetWeightCommand,
  execute as executeSetWeights,
} from "./commands/setweights.js";
import {
  MarketSummaryCommand,
  execute as executeSummary,
} from "./commands/marketsummary.js";
import {
  TotalMarketCapCommand,
  execute as executeTotalMarketCap,
} from "./commands/totalmarketcap.js";
import {
  MarketCapCommand,
  execute as executeMarketCap,
} from "./commands/marketcap.js";
import {
  CompareAllCommand,
  execute as executeCompareAllCommand,
} from "./commands/compareall.js";
import {
  PsaComparisonCommand,
  execute as executePsaComparisonCommand,
} from "./commands/psacomparison.js";
import {
  PsaSpreadCommand,
  execute as executePsaSpreadCommand,
} from "./commands/psaspread.js";

config();

const TOKEN = process.env.DISCORDJS_BOT_TOKEN;
const CLIENT_ID = process.env.DISCORDJS_CLIENT_ID;
const GUILD_ID = process.env.DISCORDJS_GUILD_ID;
const CHANNEL_ID = process.env.DISCORDJS_CHANNEL_ID;

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
    if (interaction.commandName === "price") {
      console.log("inside price execution");
      await interaction.reply("Working on getting you price info...");
      await executePokemonPrice(interaction);
    }
    if (interaction.commandName === "population") {
      console.log("inside population execution");
      await interaction.reply("Working on getting you population info...");
      await executePopulation(interaction);
    }
    if (interaction.commandName === "weight") {
      console.log("inside setweights execution");
      await executeSetWeights(interaction);
    }
    if (interaction.commandName === "marketsummary") {
      console.log("inside marketsummary execution");
      await interaction.reply("Working on getting you a summary...");
      await executeSummary(interaction);
    }
    if (interaction.commandName === "totalmarketcap") {
      console.log("inside totalmarketcap execution");
      await executeTotalMarketCap(interaction);
    }
    if (interaction.commandName === "marketcap") {
      console.log("inside marketcap execution");
      await interaction.reply("Working on getting you a market cap...");
      await executeMarketCap(interaction);
    }
    if (interaction.commandName === "compareall") {
      console.log("inside compareall execution");
      await interaction.reply("Working on comparing all...");
      await executeCompareAllCommand(interaction);
    }
    if (interaction.commandName === "psacomparison") {
      console.log("inside psacomparison execution");
      await interaction.reply(
        "Working on getting you a PSA comparison...REMINDER! -> PSA10/PS9, PSA10/RAW, PSA9/RAW are the options supported"
      );
      await executePsaComparisonCommand(interaction);
    }
    if (interaction.commandName === "psaspread") {
      console.log("inside psaspread execution");
      await interaction.reply(
        "Working on getting you a PSA spread...REMINDER! -> PSA10/PS9, PSA10/RAW, PSA9/RAW are the options supported"
      );
      await executePsaSpreadCommand(interaction);
    }
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: error.message ?? "There was an error executing this command",
    });
  }
});

async function main() {
  const commands = [
    PokemonPriceCommand,
    MarketSummaryCommand,
    PsaComparisonCommand,
    MarketCapCommand,
    TotalMarketCapCommand,
    PsaSpreadCommand,
    CompareAllCommand,
    PopulationCommand,
    SetWeightCommand,
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
