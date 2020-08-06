const Discord = require('discord.js');

const client = new Discord.Client();


client.on('ready', () => {
    console.log('I am ready!');
});

 

client.on('message', message => {
    if (message.content === 'ping') {
       message.reply('pong');
       }
    else {
        console.log(`Message ${message.content} from ${message.author.username}`);
        message.react('👍');
        //message.react(':discor:');
    }
});

 

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);