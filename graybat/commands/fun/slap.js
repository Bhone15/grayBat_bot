const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'slap',
    aliases : [],
     description : 'Slap your friends',
     run : async(client, message, args) => {
       const slapedPerson = message.mentions.users.first();
          if(!slapedPerson) {
               return message.channel.send(`You need to mention a person who u want to slap`);
          }
          axios.get(`https://anime-api.hisoka17.repl.co/img/slap`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setTitle(`You slap ${slapedPerson.username} :face_with_symbols_over_mouth:`)
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