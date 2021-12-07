const genshin = require('genshin');

module.exports = {
    name: 'genshinchar',
    description: "sends a description of the character typed in",
    async execute(client, message, args, Discord){
        var results = await genshin.characters(`${args}`);
        message.channel.send(results.name + ": " + results.quote);
        message.channel.send(results.image);
        message.channel.send(results.element + ", " + results.weapon);
    }
}