const curse = require( 'curse-text' );

module.exports = {
    name: 'curse',
    description: "curses whatever text put in afterwards",
    execute(client, message, args, Discord){
        message.channel.send(curse(`${args}`));
    }
}