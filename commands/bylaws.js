const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("bylaws")
      .setDescription('Link to the bylaws of our club'),
  async execute(interaction) {
      interaction.reply('https://docs.google.com/document/d/' +       
                        '18w_1HmIrTHVCmPCLaF0nN96OXNKuuLwhI7' +
                        '6JqkkHMiw/edit#');
  }
}; 