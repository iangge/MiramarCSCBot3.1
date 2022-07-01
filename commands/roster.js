const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("roster")
      .setDescription("Link to the membership roster to put " +
                     "your info in"),
  async execute(interaction) {
      interaction.reply('https://docs.google.com/spreadsheets/' +
                            'd/1LP4aWUW9kX-GVEQOlQUo6ypRqF7CpJnWtt24nFblpns/' +
                            'edit#gid=0');
  }
}; 