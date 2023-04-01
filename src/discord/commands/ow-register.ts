import { ChatInputCommandInteraction, SlashCommandBuilder } from "discord.js";
import command from "./commandType.js"

let _c :command = {
    data: new SlashCommandBuilder()
    .setName("ow-register")
    .setDescription("Register your BattleTag"),

    async execute(interaction: ChatInputCommandInteraction){
        console.log(interaction.member?.toString())
        interaction.reply("test")
    }

}
export default _c


