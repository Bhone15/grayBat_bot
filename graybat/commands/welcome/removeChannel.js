const Schema = require('../../models/welcomeChannel');
const { Client, Message, MessageEmbed } = require('discord.js');

module.exports = {
     name : 'remove-channel',
     aliases: ['rmw'],
     description : 'Set the welcome channel',
     /**
      * @param {Client} client
      * @param {Message} message
      * @param {String[]} args
      */
     run: async(client, message, args) => {
          if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send(`You do not have permission to use this command.`);

          Schema.findOne({ Guild: message.guild.id }, async(err, data) => {
               if(err) throw err;
               if(data) {
                    await Schema.findOneAndDelete({
                         Guild: message.guild.id
                    })
                    data.save();
               } else {
                    message.channel.send(`There is no stored data in my database`)
               }
               message.channel.send(`Successfully turned off welcome feature!`);
          })
     }
}