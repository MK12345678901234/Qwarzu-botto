const {Command} = require("./Command.js")
const {individualListeners} = require("../listeners/listeners.js")
const groups = require("../groups/membergroups.js")

const exec = (message, args) => {
    const listenerName = args[0]
    
    if (!message.member.roles.cache.hasAny('708716555785076798', '708722040286478356', '945585653024964721', '948632972427423784')) {
        return
    }
    
    if(!individualListeners.hasOwnProperty(listenerName)) {
        message.channel.send(`Listener ${listenerName} doesn't exist`)
        return
    }
    
    individualListeners[listenerName].enabled = true
    message.channel.send(`Listener ${listenerName} has been enabled`)
}

const description = ""

const enable = new Command("enable", description, exec)
enable.executeGroup = groups.admins

module.exports = enable