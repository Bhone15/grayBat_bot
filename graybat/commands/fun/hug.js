const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'hug',
    aliases : [],
     description : 'hug your friend',
     run : async(client, message, args) => {
       const personHuged = message.mentions.users.first();
          if (!personHuged) {
               return message.channel.send(`You need to mentions a person who u want to hug`);               
          }
          axios.get(`https://anime-api.hisoka17.repl.co/img/hug`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
                .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                .setTitle(`You hug ${personHuged.username} :heart:`)
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
