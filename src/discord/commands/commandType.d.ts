import type { SlashCommandBuilder, BaseInteraction } from "discord.js"

type command = {data:SlashCommandBuilder, execute: (interaction:ChatInputCommandInteraction)=> Promise<any>}

export default type