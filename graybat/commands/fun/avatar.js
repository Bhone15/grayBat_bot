const { MessageEmbed } = require('discord.js');

module.exports = {
     name : 'avatar',
    aliases : ['av'],
     description : 'Show the avatar',
     run : async(client, message, args) => {
       let user;

          if (message.mentions.users.first()) {
               user = message.mentions.users.first();
          }
          else if (args[0]) {
               user = message.guild.members.cache.get(args[0]).user;
          } else {
               user = message.author;
          }
          let avatar = user.displayAvatarURL({ size: 4096, dynamic: true });

          const embed = new MessageEmbed()
               .setTitle(`${user.tag} avatar`)
               .setDescription(`[Avatar URL of **${user.tag}**](${avatar})`)
               .setColor('RANDOM')
               .setImage(avatar)
               .setTimestamp();

          return message.channel.send(embed);
     }
}