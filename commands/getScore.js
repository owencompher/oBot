info = {
    name: 'getscore',
    description: 'gets a user\'s score, yours by default',
    options: [{
        name: 'user',
        description: 'the user whose score to get, you if not specified',
        type: 6,
        required: false
    }]
};

function execute(interaction, bot) {
    var user = interaction.options.get('user');
    if (!user) user = interaction.user;
    bot.data.getUser(user.id).then(userData => {
        if (userData) interaction.reply(userData.score.toString());
        else interaction.reply('user is not registered');
    });
}

module.exports = { info, execute };

