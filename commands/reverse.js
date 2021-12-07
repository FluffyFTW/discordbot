module.exports = {
    name: 'reverse',
    description: "reverse inputted text",
    execute(client, message, args, Discord){
        var original = message.content;
		original = original.substring(9)
		message.channel.send(original.split("").reverse().join(""));
    }
}
