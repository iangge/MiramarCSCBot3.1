const fs = require("fs");
const { Client, Intents, Collection } = require('discord.js');
const { REST } = require('@discordjs/rest');
const client = new Client({ intents: [
  Intents.FLAGS.GUILDS,
  Intents.FLAGS.GUILD_MESSAGES] });
const token = process.env['token']
const keepAlive = require("./server")

const commandFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));

const commands = [];

client.commands = new Collection();

for (const file of commandFiles) {
  const command = require(`./commands/${file}`);
  commands.push(command.data.toJSON());
  client.commands.set(command.data.name, command);
}


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  const CLIENT_ID = client.user.id;
  
  const GUILD_ID = process.env['guild_id']
  
  const rest = new REST({
      version: "9"
  }).setToken(token);

  (async () => {
    try {
        if (process.env.ENV === "production") {
            await rest.put(Routes.applicationCommands(CLIENT_ID), {
                body: commands
            });
            console.log("Successfully registered commands globally.");
        } else {
            await rest.put(Routes.applicationGuildCommands(CLIENT_ID, GUILD_ID), {
                body: commands
            });
            console.log("Successfully registered commands locally")
        }
    } catch (err) {
          if (err) console.error(err);
    }
  }
)
});

client.on("interactionCreate", async interaction => {
  if (!interaction.isCommand()) return;

  const command = client.commands.get(interaction.commandName);

  if (!command) return;

  try {
    await command.execute(interaction);
  } catch (err) {
    if (err) console.error(err);

    await interaction.reply({
      content: "An error occured while executing that command",
      ephemeral: true
    })
  }
})

// Run Debugger to reset slash commands

keepAlive()
client.login(token);