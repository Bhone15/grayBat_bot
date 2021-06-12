const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'wink',
    aliases : [],
     description : 'Wink your friends',
     run : async(client, message, args) => {
       const personwinked = message.mentions.users.first();
          if (!personwinked ) {
               return message.channel.send(`You need to mentions a person who u want to wink`);               
          }
          axios.get(`https://anime-api.hisoka17.repl.co/img/Wink`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`You wink ${personwinked .username} :zany_face:`)
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