// You need a command handler.

const { Client, Collection, MessageEmbed } = require("discord.js");
const ms = require("ms");

module.exports.config = {
    name: "uptime",
    aliases: ["up"]
}

module.exports.run = async (client, message, args) => {
    message.channel.send(`Uptime: \`${ms(client.uptime, { long: true })}\``)
}