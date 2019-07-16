const Discord = require('discord.js');
const client = new Discord.Client();
const fetch = require('node-fetch');

client.on('ready', () => {
    console.log(`Logged on as ${client.user.tag}`);

});

client.on('message', async msg => {
    if (msg.content === '!ping') {
        if (msg.channel.id != '598065979771060224'){
            return msg.reply(`Please execute this command in #bot channel`);
    }
    else msg.channel.send('pong');
    };

    if (msg.content === '!price') {
        if (msg.channel.id != '598065979771060224') {
            return msg.reply('Please execute this commaand in #bot channel')
        }
        
        const btcusd = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd').then(response => response.json());
        const embed = new Discord.MessageEmbed()
        .setDescription ('price plot')
        .addField('Bitcoin price:', btcusd.bitcoin.usd)
        msg.channel.send(embed);
    };


});


client.login('NjAwNTkzODYyNzAzOTcyMzUz.XS28Ig.6hVH3jzhmzEz4brew-FsHUlokok');
