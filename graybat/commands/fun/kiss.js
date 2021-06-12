const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'kiss',
    aliases : [],
     description : 'Kiss your friend',
     run : async(client, message, args) => {
       const kissedPerson = message.mentions.users.first();
          if(!kissedPerson) {
               return message.channel.send(`You need to mention a person who u want to kiss`);
          }
          axios.get(`https://anime-api.hisoka17.repl.co/img/kiss`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setTitle(`You kiss ${kissedPerson.username} :heart:`)
               .setColor(`RANDOM`)
               .setImage(res.data.url)
               .setTimestamp();
               message.channel.send(embed)
          })
          .catch((err) => {
               throw(err);
          })
     }
}
