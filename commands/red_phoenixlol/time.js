var moment = require("moment")

exports.run = (client, channel, userstate, message, messagePrefix, startTime, version, totalCommands, developers, apiKey, apiEndpoint, args, champList) => {
  client.say(channel, messagePrefix + `Die aktuelle Uhrzeit für ${channel} ist ${moment().locale('de').format('LTS')}!`)
}