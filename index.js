const Discord = require('discord.js');
const bot = new Discord.Client 

const token = "NzcxOTEzMDA0OTY2MDg0NjI5.X5zCAQ.Nu2dV_uAYEFoRbCB_M6MgsBPsJA"

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