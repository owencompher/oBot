const { Client, GatewayIntentBits } = require('discord.js');
const bot = new Client({ intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildPresences,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.GuildMessageReactions,
    GatewayIntentBits.DirectMessages,
    GatewayIntentBits.DirectMessageReactions
] });

const fs = require('fs');
const TOKEN = fs.readFileSync('TOKEN', 'utf8').trim();

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var commands = {};
for(var commandFile of commandFiles) {
    const command = require(`./commands/${commandFile}`);
    commands[command.info.name] = command;
}

bot.on('interactionCreate', async interaction => {
    if (interaction.isChatInputCommand()) {
        try {
            commands[interaction.commandName].execute(interaction, bot);
        } catch (err) {
            console.log('unexpected error');
            console.error(err);
        }
    }
});

bot.login(TOKEN);
