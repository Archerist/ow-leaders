import { REST, Routes, Collection } from "discord.js"
import cfg from "../../../config.json" assert { type: 'json'}
import fs from "fs"
import path from 'path';
import { fileURLToPath } from 'url';
import type command from "./commandType.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename)
const commands = new Collection<string, command >()
const commandRESTbody = []
const commandFiles = fs.readdirSync(__dirname).filter((val)=>{
    return val!="index.js"
})

for (const file of commandFiles) {
	const command : command = (await import(`./${file}`)).default;
	commands.set(command.data.name, command);
    commandRESTbody.push(command.data.toJSON())
}

try {
    console.log(`Started refreshing application (/) commands.`);
    const rest = new REST({version:"10"}).setToken(cfg.discord_token)
    // The put method is used to fully refresh all commands in the guild with the current set
    const data = await rest.put(
        Routes.applicationCommands(cfg.discord_application_id),
        { body: commandRESTbody },
    );

    console.log(`Done.`);
} catch (error) {
    // And of course, make sure you catch and log any errors!
    console.error(error);
}

export default commands