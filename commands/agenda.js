const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("agenda")
      .setDescription('Links the meeting minutes and agenda from ' +
              'Google Docs'),
  async execute(interaction) {
      interaction.reply('https://docs.google.com/document/' + 
                            'd/1C5HZIMy4lKJOqSlXSN0ZqDPV' + 
                            '-VuDn4lBtj4ocx7mmNo/edit');
  }
}; 