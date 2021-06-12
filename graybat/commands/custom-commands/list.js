const scheme = require('../../models/custom-command')
const { MessageEmbed } = require('discord.js');

module.exports = {
     name: 'cc-list',
     description: 'List all custom commands',
     /**
      * 
      * @param {Client} client 
      * @param {Message} message 
      * @param {String[]} args 
      */
     run: async(client, message, args) => {
          const data = await scheme.find({ Guild: message.guild.id });
          if(!!data === false) return message.channel.send('There is no custom commands!');
          message.channel.send(
               new MessageEmbed()
                    .setColor('BLUE')
                    .setDescription(
                         data.map((cmd, i) => 
                              `${i + 1} | ${cmd.Command}`
                         ).join('\n')
                    )
          )
     }
}