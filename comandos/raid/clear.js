const Discord = require("discord.js");
const { red, green, blue, yellow, cyan, magenta, bgBlue } = require('chalk');


module.exports.run = async (bot, message, args) => { 
   message.delete()

let amount = 100

        if (args.length != 0) {
            amount = parseInt(args[0])
        }

        if (!amount) {
            return console.log("["  +   blue("*")  +   "] :: "  +  `Mencione o quanto você quer apagar suas mensagens | 0 - 100`)
        }

        const messages = await message.channel.fetchMessages({limit: amount})
        const filtered = messages.filter(msg => msg.author.id == message.author.id)

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




