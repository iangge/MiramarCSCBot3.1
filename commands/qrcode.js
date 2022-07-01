const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("qrcode")
      .setDescription("Sends the QR Code and invite link to the CSC Discord server"),
  async execute(interaction) {
      interaction.reply('https://i.imgur.com/ml39WcE.png\n' +     
                            'https://discord.gg/UZreXzqXdC');
  }
}; 