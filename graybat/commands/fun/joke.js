const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : 'joke',
    aliases : [],
     description : 'Send a jokes to text channel',
     run : async(client, message, args) => {
       axios.get(`https://v2.jokeapi.dev/joke/Any`)
          .then((res) => {
               // console.log(res);
               if(res.data.type === 'twopart'){
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`Category: ${res.data.category}`)
                    .setDescription(`${res.data.setup}\n${res.data.delivery}`)
                    .setColor(`RANDOM`)
                    .setTimestamp();
                    message.channel.send(embed);
               } else {
                    const embed = new Discord.MessageEmbed()
                    .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
                    .setTitle(`Category: ${res.data.category}`)
                    .setDescription(`${res.data.joke}`)
                    .setColor(`RANDOM`)
                    .setTimestamp();
               }
          }).catch((err) => {
               throw(err);               
          });
     }
}