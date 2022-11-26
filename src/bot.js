import dotenv from "dotenv";
import { Client, Events, GatewayIntentBits } from "discord.js";
dotenv.config();

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

client.once(Events.ClientReady, (c) => {
  console.log(`Ready! Logged in as ${c.user.tag}`);
});

// Log in to Discord with your client's token
client.login(process.env.DISCORDJS_BOT_TOKEN);
