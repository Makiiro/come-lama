module.exports = {
    name: "mute",
    descripition: "Muta uma pessoa",
    execute(message, args){
        const target = message.mentions.users.first();
        if (target){
            let mainRole = message.guild.roles.cache.find(role => role.name === "ROLETERS");
            let muteRole = message.guild.roles.cache.find(role => role.name === "mute");
            let memberTarget = message.guild.members.cache.get(target.id);

            memberTarget.roles.remove(mainRole.id);
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> foi amassado`);
        } else {
            message.channel.send("Corno não encontrado");
        }
    };
};