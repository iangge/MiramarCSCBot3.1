const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("girlswhocode")
    //TODO: Finish setting description and reply
      .setDescription('Invite link to the Girls Who Code club Discord' +
                'server'),
  async execute(interaction) {
      interaction.reply('https://discord.gg/JzJYF4ve6x');
  }
}; 