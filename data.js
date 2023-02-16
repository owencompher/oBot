const fs = require('fs');
const userPath = './data/users.json';

async function getUser(id) {
    const userData = JSON.parse(fs.readFileSync(userPath, 'utf8'));
    return userData[id];
}

function addUser(id, data) {
    const userData = JSON.parse(fs.readFileSync(userPath, 'utf8'));
    if (!userData[id]) userData[id] = data;
    fs.writeFileSync(userPath, JSON.stringify(userData));
}

module.exports = { getUser, addUser };

