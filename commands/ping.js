info = {
    name: 'ping',
    description: 'replies pong, for testing'
};

function execute(interaction) {
    interaction.reply({content: 'pong'}).catch(console.error);
}

module.exports = { info, execute };
