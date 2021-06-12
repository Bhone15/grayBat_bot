const schema = require('../../models/custom-command');

module.exports = {
     name: 'cc-delete',
     description: 'Delete custom command',
     /**
      * 
      * @param {Client} client 
      * @param {Message} message 
      * @param {String[]} args 
      */
     run: async(client, message, args) => {
          if(!message.member.hasPermission('AMDINISTRATOR')) return message.channel.send('You do not have permissions to use this command');

          const name = args[0];

          if(!name) return message.channel.send('Please specify a command name');

          const data = await schema.findOne({ Guild: message.guild.id, Command: name });
          if(!data) return message.channel.send('That custom command does not exist!');
          await schema.findOneAndDelete({ Guild: message.guild.id, Command: name});
          message.channel.send(`Removed **${name}** from custom commands!`);
     }
}