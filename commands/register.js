info = {
    name: 'register',
    description: 'register yourself in the bot\'s database'
};

function execute(interaction, bot) {
    const id = interaction.user.id;
    bot.data.addUser(id, {score: 2});
}

module.exports = { info, execute };
