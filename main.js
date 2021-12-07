const Discord = require('discord.js');
const client = new Discord.Client({partials: ["MESSAGE","CHANNEL","REACTION"]});

client.commands = new Discord.Collection();
client.events = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handlers/${handler}`)(client, Discord);
})

client.login('ODUzNDc4NTY2Njk1Nzk2NzU2.YMV92w.TEiSbeZ4VQ_SuZY2wKkh6pLzKCU');