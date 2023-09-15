import { SlashCommandBuilder } from 'discord.js'

// const data = new SlashCommandBuilder()
// 		.setName('server')
// 		.setDescription('Provides information about the server.')

// 	async function execute(interaction) {
// 		// interaction.guild is the object representing the Guild in which the command was run
// 		await interaction.reply(`This server is ${interaction.guild.name} and has ${interaction.guild.memberCount} members.`);
// 	}

//   export {data, execute}

// module.exports = {
// 	data: new SlashCommandBuilder()
// 		.setName('server')
// 		.setDescription('Display info about this server.'),
// 	async execute(interaction) {
// 		return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
// 	},
// };

export const data = new SlashCommandBuilder()
	.setName('server')
	.setDescription('Display info about this server.');

export async function execute(interaction) {
	return interaction.reply(`Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}`);
}