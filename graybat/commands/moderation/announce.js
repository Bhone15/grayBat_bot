const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
     name : 'announce',
     aliases: ['ann'],
     description: 'Make a announcement',
     /**
      * 
      * @param {Client} client 
      * @param {Message} message 
      * @param {String[]} args 
      */
     run : async (client, message, args) => {
          if(!message.member.hasPermission('MANAGE_MESSAGES')) return message.channel.send('You do not have permission to use this command');

          let mention;

          if(!args.length) return message.channel.send('> Usage: eli!announce <#channel> <message> <-ping>')
          
          const channel = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);
          if(!channel) return message.reply('Please Specify a channel!')

          if(!args[1]) return message.reply('Please specify a message to announce');

          //mentions
          if(args.some((val) => val.toLowerCase() === '-ping')) {
               for(let i = 0; i < args.length; i++) {
                    if(args[i].toLowerCase() === '-ping') args.splice(i, 1);
               }

               mention = true;
          } else mention = false;
 
          
          if(mention === true) {
               
               channel.send(`@everyone`);
          }
               

          channel.send(
               new MessageEmbed()
               .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
               .setThumbnail(message.guild.iconURL( {dynamic : true} ))
               .setDescription(args.slice(1).join(" "))
               .setTimestamp()
               .setColor('RANDOM')
          )
     }
}