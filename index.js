const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged on as ${client.user.tag}`);

});

client.on('message', msg => {
    if (msg.content === '!ping') {
        if (msg.channel.id != '598065979771060224'){
            return msg.reply('please message in #bot channel');
    }
    else msg.channel.send('pong');
}});


client.login('NTk4MDUwNTU2MDQ0NjQwMjc3.XSwDog.FQfgqfRfU38ukc_rqgf46XLVmSY');
