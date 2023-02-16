const { REST, Routes } = require('discord.js');
const fs = require('fs');

const TOKEN = fs.readFileSync('TOKEN', 'utf8').trim();

const rest = new REST({ version: '10' }).setToken(TOKEN);

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));
var commands = [];
for(var commandFile of commandFiles) {
    const command = require(`./commands/${commandFile}`).info;
    console.log(`loaded ${command.name}`);
    commands.push(command);
}

console.log('Started refreshing application (/) commands.');
rest.put(Routes.applicationCommands('827690516258488381'), { body: commands })
  .then(response => {
    console.log(response);
    console.log('Successfully reloaded application (/) commands.');
}).catch(err => {
    console.error(err);
});
