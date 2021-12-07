var flip = require('flip')

module.exports = {
    name: 'flip',
    description: "flip whatever text put in afterwards",
    execute(client, message, args, Discord){
        message.channel.send(flip(`${args}`));
    }
}