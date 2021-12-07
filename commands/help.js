const fs = require('fs');

module.exports = {
    name: 'help',
    description: "lists all the commands",
    execute(client, message, args, Discord){
        var end = "Here are the commands: \n";
        const load_dir = (dirs) =>{
            const commands = fs.readdirSync(`./commands/${dirs}`).filter(file => file.endsWith('.js')); 
        for (const file of commands){
            end = end + commands.name + "- " + commands.description + "\n";
        }
    }
        console.log(end);
    }
}