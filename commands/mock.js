info = {
    name: 'mock',
    type: 3
};

function execute(interaction, bot) {
    interaction.targetMessage.reply({content: '*'+interaction.targetMessage.content+'*'}).catch(console.error);
    interaction.deleteReply();
}

module.exports = { info, execute };
