const { REST } = require("@discordjs/rest");
const { Client, Events, GatewayIntentBits, Collection } = require("discord.js");
const { Routes } = require("discord-api-types/v10");
const { token, clientId, guildId } = require("../scripts/config.json");

const fs = require("fs");
const path = require("path");

//https://discordjs.guide/popular-topics/intents.html#the-intents-bitfield
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

// List of all commands
const commands = [];
client.commands = new Collection();

const commandsPath = path.join(__dirname, "commands");
const commandFiles = fs
  .readdirSync(commandsPath)
  .filter((file) => file.endsWith(".cjs"));
for (const file of commandFiles) {
  const filePath = path.join(commandsPath, file);
  const command = require(filePath);

  client.commands.set(command.data.name, command);
  commands.push(command.data.toJSON());
}

// client.on("ready", () => {
//   // Get all ids of the servers
//   const guild_ids = client.guilds.cache.map((guild) => guild.id);

//   const rest = new REST({ version: "10" }).setToken(token);

//   for (const guildId of guild_ids) {
//     rest
//       .put(Routes.applicationGuildCommands(clientId, guildId), {
//         body: commands,
//       })
//       .then(() =>
//         console.log("Successfully updated commands for guild " + guildId)
//       )
//       .catch(console.error);
//   }
// });

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);
  console.log("command is: ", command);
  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (error) {
    console.error(error);
    await interaction.reply({
      content: "There was an error executing this command",
    });
  }
});

// Log in to Discord with your client's token
client.login(token);

//make sure it responds to only messages from a certain channel it's allowed to
// client.on(Events.InteractionCreate, async (interaction) => {
//   if (!interaction.isChatInputCommand()) return;

//   const command = interaction.client.commands.get(interaction.commandName);

//   if (!command) {
//     console.error(`No command matching ${interaction.commandName} was found.`);
//     return;
//   }

//   try {
//     await command.execute(interaction);
//   } catch (error) {
//     console.error(error);
//     await interaction.reply({
//       content: "There was an error while executing this command!",
//       ephemeral: true,
//     });
//   }
// });

// client.on("messageCreate");
