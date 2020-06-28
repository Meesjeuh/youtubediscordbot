// You need a command handler.

const { Client, Collection, MessageEmbed } = require("discord.js");

module.exports.config = {
    name: "ping",
    aliases: []
}

module.exports.run = async (client, message, args) => {
    const msg = await message.channel.send(`Ping Pong!`)

    const latency = msg.createdTimestamp - message.createdTimestamp;

    msg.edit(`🏓  \`${latency}ms\`  🏓`);
}