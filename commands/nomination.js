const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("nomination")
      .setDescription("nominate a member for an officer role")
        .addUserOption((option) =>
          option
              .setName('member')
              .setDescription('the member you wish to nominate')
              .setRequired(true)
        )
        .addStringOption((option) =>
          option
              .setName('position')
              .setDescription('the officer role they will' + 
                              ' be voted in to')
              .setRequired(true)
        ),
  async execute(interaction) {
      const nominateMessage = await interaction.reply({
        content: `Vote ${interaction.options.getUser('member')} ` +
          `for the position of ${interaction.options.getString('position')}?\n` +
          'Please vote YEA✅ or NAY❌',
        fetchReply: true
    }); if (nominateMessage > 0) {
        nominateMessage.react('✅').then(() =>     
          nominateMessage.react('❌'));
    }
  }, 
}; 