const Discord = require('discord.js');
const client = new Discord.Client();

client.on('message', message => {
    client.channels.cache.get('853469186909929472').send('<@194238059196317697> is a boomer and needs to make an instagram').then(() => client.destroy());
});

client.login('ODUzNDc4NTY2Njk1Nzk2NzU2.YMV92w.TEiSbeZ4VQ_SuZY2wKkh6pLzKCU');
