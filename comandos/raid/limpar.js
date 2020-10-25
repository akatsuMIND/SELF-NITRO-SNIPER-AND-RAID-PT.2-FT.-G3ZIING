const Discord = require("discord.js");
const { red, green, blue, yellow, cyan, magenta, bgBlue } = require('chalk'); 

module.exports.run = async (bot, message, args) => { 
   message.delete()

message.channel.fetchMessages({ limit: 100 }).then(messages => messages.filter(m => m.author.id === bot.user.id).map(r => r.delete()))

        let messages = await message.channel.fetchMessages({ limit: 100 })
        let filtered = messages.filter(msg => msg.author.id == message.author.id)

        const startTime = new Date().getTime()
        console.log("[" +  yellow("!")  +  "] :: "  +  "Deletando: " + filtered.size + " | Mensagens espere um pouco")

        for (msg of filtered.keys()) {
            msg = filtered.get(msg)

            await msg.delete()
        }

        const endTime = new Date().getTime()
        const timeTaken = (endTime - startTime) / 1000

        console.log("["  +  green("+")  +  "] :: "  +  "Limpei: "  + filtered.size  +  " | mensagens em: " + timeTaken + "s")

}





