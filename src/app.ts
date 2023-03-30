import * as Discord from "discord.js"
import cfg from "../config.json" assert { type: 'json'}
import * as commands from "./commands/index.js"

const client = new Discord.Client({intents:
    [
        Discord.GatewayIntentBits.GuildMembers,
        Discord.GatewayIntentBits.GuildMessages,
        Discord.GatewayIntentBits.Guilds,
        Discord.GatewayIntentBits.MessageContent,
        Discord.GatewayIntentBits.DirectMessages
    ]})

client.once(Discord.Events.ClientReady, c => {
    console.log(`Ready! Logged in as ${c.user.tag}`);
});

client.login(cfg.token)


