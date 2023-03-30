import { BaseInteraction, SlashCommandBuilder } from "discord.js";

export default {
    data: new SlashCommandBuilder()
    .setName("ow-register")
    .setDescription("Register your BattleTag"),

    async execute(interaction: BaseInteraction){
        console.log(interaction.member?.toString())
    }

}


