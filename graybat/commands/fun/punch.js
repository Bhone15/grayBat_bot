const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'punch',
    aliases : [],
     description : 'Punch your friends',
     run : async(client, message, args) => {
       const punchedPerson = message.mentions.users.first();
          if(!punchedPerson) {
               return message.channel.send(`You need to mention a person who u want to punch`);
          }
          axios.get(`https://anime-api.hisoka17.repl.co/img/punch`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setTitle(`You punch ${punchedPerson.username} :face_with_symbols_over_mouth:`)
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