const Discord = require("discord.js");
const ascii = require("figlet");
const { red, green, blue, yellow, cyan, magenta, bgBlue } = require('chalk');


module.exports.run = async (bot, message, args) => { 
ascii(args.join(" "), async function(err, data) {
            if (!err) {
                data = "```" + data + "```"
                if (data.length > 1950)  {
                    return console.log("[" + red("*") + "] :: " + "Texto muito grande pra esse Ascii tente novamente")
                } else {
                    await message.edit(data)
                    console.log("[" + green("@") + "] :: " + "Texto editado com sucesso. fé!")
                
              }
            }
        })

    }
