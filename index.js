const Discord = require('discord.js');
const bot = new Discord.Client 



bot.on('ready', () =>{
    console.log('Bot online!')
    bot.user.setActivity('Minecraft')

})

    bot.on('message', msg=>{
        if(msg.content === "Hi"){
            msg.channel.send('Hi I will go now')
        }
    })


bot.login(process.env.token)