const fs = require("fs");
const { REST } = require('@discordjs/rest');
const { Routes } = require('discord-api-types/v9');
const { Client, Intents, Collection } = require("discord.js");

const client = new Client({
  intents: [
      Intents.FLAGS.GUILDS,
      Intents.FLAGS.GUILD_MESSAGES
  ]
})

const token = process.env['token']
const CLIENT_ID = process.env['client_id']
const GUILD_ID = process.env['guild_id']

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}

/* 
        https://discord.com/developers/docs/interactions/application-
        commands#application-command-object-application-
        command-option-type

    */

const rest = new REST({ version: '9' }).setToken(token);

(async () => {
  try {
    console.log('Started refreshing application (/) commands.');

    await rest.put(
      Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID),
      { body: commands },
    );

    console.log('Successfully reloaded application (/) commands.');
  } catch (error) {
    console.error(error);
  }
})();