const { REST, Routes } = require('discord.js');
const fs = require('fs');

const TOKEN = fs.readFileSync('TOKEN', 'utf8').trim();

const rest = new REST({ version: '10' }).setToken(TOKEN);

rest.get(Routes.applicationCommands('827690516258488381'))
  .then(response => {
    console.log(response);
}).catch(err => {
    console.error(err);
});
