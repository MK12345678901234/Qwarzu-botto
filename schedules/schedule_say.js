const {Schedule} = require("./Schedule.js")

const exec = async (message, args, time) => {
    await message.channel.send(args.join(" "))
}

const description = ""

const say = new Schedule("say", description, exec)

module.exports = say