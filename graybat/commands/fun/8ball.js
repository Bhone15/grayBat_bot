const axios = require('axios')
const Discord = require('discord.js')
module.exports = {
     name : '8ball',
    aliases : ['8ball', 'eightball'],
     description : 'Send the 8ball random response',
     run : async(client, message, args) => {
       if(!args[2]) return message.channel.send("Please ask a full question!");
          let question = args.slice(0).join(" ");
          axios.get(`https://api.monkedev.com/fun/8ball?key=FQ14e7mR2f7oft6sJdZQm6hth`)
          .then((res) => {
               const embed = new Discord.MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setColor(`RANDOM`)
               .addField("Question", `${question}`)
               .addField("Answer", `${res.data.answer}`)
               .setTimestamp();
               message.channel.send(embed);
          })
          .catch((err) =>{
               console.log(err);
          })
     }
}