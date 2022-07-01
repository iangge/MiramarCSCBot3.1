const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
      .setName("infolist")
      .setDescription("Lists all slash commands"),
  async execute(interaction) {
      interaction.reply("**/infolist** - " + "Lists all slash commands\n" +
                       "**/agenda** - " + "Links to the meeting agenda " +
                           "on Google Docs\n" + 
                       "**/bylaws** - " + "Links to our club's bylaws\n" +
                       "**/girlswhocode** - " + "Discord invite to the " +
                           "Girls Who Code server\n" +
                       "**/nomination** - " + "Nominates a member for " +
                         "an officer role\n" +
                       "**/qrcode** - " + "Sends the QR Code and invite " + 
                          "link to this server\n" + 
                       "**/roster** - " + "Links to the membership roster " +
                           "to put your info in\n" +
                       "**/vote** - " + "Creates a ✅ or ❌ poll for " +
                           "members to vote on");
  }
}; 