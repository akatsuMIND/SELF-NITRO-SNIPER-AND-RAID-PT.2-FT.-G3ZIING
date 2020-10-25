//Livraria
const Discord = require('discord.js');
const fs = require('fs');
const { RichEmbed } = require('discord');
const { red, green, blue, yellow, cyan, magenta, bgBlue } = require('chalk');
const axios = require('axios').default;
const setTitle = require('console-title');
const bot = new Discord.Client();


//Painel
console.log(red("                         ███╗   ██╗███████╗████████╗"));
console.log(red("                         ████╗  ██║██╔════╝╚══██╔══╝"));
console.log(red("                         ██╔██╗ ██║███████╗   ██║"));   
console.log(red("                         ██║╚██╗██║╚════██║   ██║"));   
console.log(red("                         ██║ ╚████║███████║   ██║ "));  
console.log(red("                         ╚═╝  ╚═══╝╚══════╝   ╚═╝ "));  
                           


//Configurações do bot
   bot.commands = new Discord.Collection()
  let config = require('./util/config.json')
   let token = config.token

//Comandos Handler
fs.readdirSync("./comandos").forEach(folders => {
       fs.readdirSync(`./comandos/${folders}`).forEach(i => {
      if(!i.endsWith(".js")) return;
        let commandFile = i.split(".")[0].trim()
      bot.commands.set(commandFile, require(`./comandos/${folders}/${commandFile}.js`))
   
    })
  })
   const evtFiles = fs.readdirSync("./events")
    evtFiles.forEach(file => {
      var eventName = file.split(".")[0];
      let event = require(`./events/${file}`)
        bot.on(eventName, event.bin(null, bot));
   }); 


//Mensagem quando o bot estiver Online!
bot.on('ready', () => {  
console.log(red('==============================================================================='))
    console.log(" ")
    });


//Nitro Sniper
bot.on('message', message => {
    function getDateTime() {

        var date = new Date();
    
        var hour = date.getHours();
        hour = (hour < 10 ? "0" : "") + hour;
    
        var min  = date.getMinutes();
        min = (min < 10 ? "0" : "") + min;
    
        var sec  = date.getSeconds();
        sec = (sec < 10 ? "0" : "") + sec;
    
    
        return hour + ":" + min + ":" + sec;
    
    }
    if(message.content.includes('discord.gift') || message.content.includes('discordapp.com/gifts/') || message.content.includes('discord.com/gifts')) {
        var start = new Date()

        if(message.channel.type == "dm") {
            var bruh = "DM" 
         } else {
            var bruh = message.guild.name
         }

        var gift = /(discord\.(gift)|discordapp\.com\/gift)\/.+[a-z]/
        var link = gift.exec(message.content);
        if(!link) return;
        var gcode = link[0].split('/')[1];

        console.log("["  +  yellow("!")  +   "] :: "  +  `${getDateTime()} | Opa! meu sistema identificou um Discord Nitro (informações) | ${message.content}`);
        console.log(`Server: ${bruh}`);
        console.log(`Author: ${message.author.tag}`);
        console.log(`Author ID: ${message.author.id}`);
        var time = new Date() - start
        console.log(`Tempo Decorrido: ${time}ms`);
        console.log(" ");
        axios({
            method: 'POST',
            url: `https://discordapp.com/api/v6/entitlements/gift-codes/${gcode}/redeem`, 
            headers: 
            {
            'Authorization': bot.token 
            }
        }).then(
            () => {console.log("["  +   green("+")  +   "] :: "   +   `Nitro reivindicado com sucesso! | ${bruh} | ${message.content}`);
                    var sniped = sniped + 1
                    setTitle(`(NITRO SNIPER) | Código: ${sniped}`);
                }
        ).catch(ex => console.log("["  +  red("-")  + "] :: "   +  `Não consegui pegar o código do nitro | (Error 404): Link Inválido, Fake, ou já foi pego.`))
    
      }
});

var chalk = require("chalk")

//Giveaway Sniper
bot.on('message', message => {
     if (message.embeds.length && message.author.id === "294882584201003009") {
   if (message.embeds[0].description.match("React with")) {
  message.react("🎉")
  console.log(chalk.rgb(70, 181, 15).bold('GIVEAWAY SNIPER | NST'))
  console.log(chalk.hex("#FFB6C1")("Guild") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`${message.guild.name}`))
   console.log(chalk.hex("#FFB6C1")("Guild") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(message.guild.name + ` (${message.channel.id})`))
  console.log(chalk.hex("#FFB6C1")("Guild") + chalk.hex("#9400D3")(" | ") + chalk.hex("#FFA500")(`https://discord.com/channels/${message.guild.id}/${message.channel.id}`))
      console.log(chalk.rgb(255,20,147)('—————————————————————————————————————'))
             
            
          }
        }
      
    });

bot.login(token)


















