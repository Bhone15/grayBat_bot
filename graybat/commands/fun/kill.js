const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'kill',
    aliases : [],
     description : 'kill your friends',
     run : async(client, message, args) => {
       const killedPerson = message.mentions.users.first();
          if(!killedPerson) {
               return message.channel.send(`You need to mention a person who u want to kill`);
          }
          axios.get(`https://anime-api.hisoka17.repl.co/img/kill`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setTitle(`You kill ${killedPerson.username} :face_with_symbols_over_mouth:`)
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