const urban = require('relevant-urban');

module.exports = {
    name: 'define',
    description: "returns anything in urban dictionary",
    async execute(client, message, args, Discord){
       var results = await urban(args);
       console.log(results);
       message.channel.send(results.word);
       message.channel.send(results.definition);
       message.channel.send(results.example);
    }
}