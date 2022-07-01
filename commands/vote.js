const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("vote")
      .setDescription("creates a poll for members to vote on")
      .addStringOption((option) =>
          option
              .setName('question')
              .setDescription('enter a yes✅ or no❌ question')
              .setRequired(true)
        ),
  async execute(interaction) {
      const voteMessage = await interaction.reply({
        content: interaction.options.getString('question'),
        fetchReply: true
    });
    if (voteMessage > 0) {
      voteMessage.react('✅').then(() =>     
          voteMessage.react('❌'));
    }
  }, 
}; 