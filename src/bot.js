import { config } from "dotenv";
import { REST } from "@discordjs/rest";
import { Client, Events, GatewayIntentBits, Collection } from "discord.js";
import { Routes } from "discord-api-types/v10";
import data from "../data/data.json" assert { type: "json" };
import cron from "cron";

import fs from "fs";
import path from "path";
import MarketPriceCommand from "./commands/marketprice.js";
import PokemonPriceCommand from "./commands/pokemonprice.js";
import PsaComparisonCommand from "./commands/psacomparison.js";

config();

const TOKEN = process.env.DISCORDJS_BOT_TOKEN;
const CLIENT_ID = process.env.DISCORDJS_CLIENT_ID;
const GUILD_ID = process.env.DISCORDJS_GUILD_ID;
const CHANNEL_ID = process.env.DISCORDJS_CHANNEL_ID;

const formattedPokemons = Object.entries(data)
  .map((key, value) => {
    return (
      "\n" +
      "Name: " +
      key["1"]["name"] +
      "\n" +
      "Current PSA10 Price: " +
      "$" +
      parseInt(key["1"]["psa10"].replace(/,/g, "")) +
      "\n" +
      "Current PSA9 Price: " +
      "$" +
      parseInt(key["1"]["psa9"].replace(/,/g, "")) +
      "\n" +
      "Current POP10: " +
      key["1"]["pop10"] +
      "\n" +
      "Current POP9: " +
      key["1"]["pop9"] +
      "\n" +
      "\n"
    );
  })
  .join("");

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
  const dailyReport = [
    "This is your daily marketprice report: ",
    "\n",
    ...formattedPokemons,
  ].join("");
  console.log(`${client.user.tag} has logged in!`);

  console.log("Cron job scheduled for once every min");
  let scheduledMessage = new cron.CronJob("0 8 * * *", () => {
    const guild = client.guilds.cache.get(GUILD_ID);
    const channel = guild.channels.cache.get(CHANNEL_ID);
    channel.send(dailyReport);
  });

  // When you want to start it, use:
  scheduledMessage.start();
});

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  try {
    if (interaction.commandName === "marketprice") {
      await interaction.reply(formattedPokemons);
    }
    if (interaction.commandName === "price") {
      const target = interaction.options.getString("pokemon");
      const reason = interaction.options.getString("psa");

      const caughtPokemon = Object.entries(data).find((p) => {
        return p["1"]["name"] === target;
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
    }
    if (interaction.commandName === "psacomparison") {
      const target = interaction.options.getString("pokemon");

      const caughtPokemon = Object.entries(data).find((p) => {
        return p["1"]["name"] === target;
      });

      const value =
        parseInt(caughtPokemon[1]["psa10"]) /
        parseInt(caughtPokemon[1]["psa9"]);

      const formattedPokemon =
        "\n" +
        "Name: " +
        caughtPokemon[1]["name"] +
        "\n" +
        "Comparison Value is: " +
        value.toFixed(2);

      await interaction.reply(formattedPokemon);
    }
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error executing this command",
    });
  }
});

async function main() {
  const commands = [
    MarketPriceCommand,
    PokemonPriceCommand,
    PsaComparisonCommand,
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
