const Discord = require("discord.js");
const Client = new Discord.Client({
    intents: [
        Discord.Intents.FLAGS.GUILDS,
        Discord.Intents.FLAGS.GUILD_MESSAGES
    ]});

const prefix = "!";

Client.on("ready", () => {
    console.log("bot opérationnel");
});

Client.on("messageCreate", message =>{
    if (message.author.bot)return;
    
    //!ping
    if(message.content ===prefix + "ping"){
      message.reply("...");  
    }
    //!help
    if(message.content === prefix + "help"){
        const embed = new Discord.MessageEmbed()
            .setColor("#03224c")
            .setTitle("Liste des commandes")
            .addField("!help", "Affiche la liste des commandes")
            .addField("!ban", "Permet de bannir un membre")
            .addField("!tempban", "Permet de bannir un membre pour une durée déterminée");
         
         message.channel.send({embeds: [embed]});
    }
    
});
Client.login("ODg3MzE1MjkzNjI0NDk2MjA5.YUCWww.c62RjgUVobickXkjpXgu97ZuRzY");