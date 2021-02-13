const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";

client.once("ready", () => {
    console.log("PRONTO PARA SENTIR PENA");
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === "comes") {
        message.channel.send("TENHO PENA");
    }
    
    if (command === "bebes") {
        message.channel.send("TENHO PENA");
    }

    if (command === "comecrit") {
        message.channel.send("TENHO PENA");
    }

    if (command === "matola") {
        message.channel.send("MATOLA NÃO COMA O MEU CRIT");
    }
})







client.login("NTA1MDc3NzYxMjA3OTU5NTYz.W9IEUg.pZDF8Fpwnw1Fjs1zqh4RWAZ-uV4");