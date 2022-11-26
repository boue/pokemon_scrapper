import dotenv from "dotenv";
import { Client, Events, GatewayIntentBits } from "discord.js";
dotenv.config();

//https://discordjs.guide/popular-topics/intents.html#the-intents-bitfield
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
    GatewayIntentBits.GuildMembers,
  ],
});

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(process.env.DISCORDJS_BOT_TOKEN);
