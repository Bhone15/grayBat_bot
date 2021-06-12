const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'hentai',
     run : async(client, message, args) => {
       if(!message.channel.nsfw)
          return message.channel.send("Please run this command in a `NSFW Channel`")
          axios.get(`https://anime-api.hisoka17.repl.co/img/nsfw/hentai`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`Here is it enjoy! :smirk:`)
                .setColor(`RANDOM`)
                .setImage(res.data.url)
                .setTimestamp();
                message.channel.send(embed);
          })
          .catch((err) => {
               throw(err);
          })
     }
}