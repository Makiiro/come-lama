const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
equire("dotenv").config();
const fs = require("fs");


client.commands = new Discord.Collection();
const commandFiles = fs.readFileSync("./commands/").filter(file => file.endsWith(".js"));
for(const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
};


client.once("ready", () => {
    console.log("PRONTO PARA SENTIR PENA");
});


client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === "comes" || command === "come" || command === "bebes" || command === "comecrit") {
        message.channel.send("TENHO PENA");
    };

    if (command === "matola") {
        message.channel.send("MATOLA NÃO COMA O MEU CRIT" + "<:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313>");
    };

    if (command === "inaba") {
        message.channel.send(`
        \nVAI TOMAR NO CU ${message.author.username}
................./¯/)............(¯
.............../¯ ./............... ¯
............./. . /................ | . .
......../´¯/' . '/´¯•¸,....,•´¯' . '´¯
..../' /. ./ . ./ . ./¯../¯. . . . . .| '
..( . ( . ( . ( ¯ ./' . ')..(' . '. ¯ ) . ) . ) . )
...| . . . . . . . . . . ./.... . . . . . . . . . ./
.....| . . . . . . . . ./....... . . . . . . . . /
.....(. . . . . . . . . ......./. . . . . . . . . )`);
    };

    if (command === "craque") {
        message.channel.send({ files: ["https://i.imgur.com/6bKWryZ.png"] });
    } else if (command === "greve") {
        message.channel.send({ files: ["https://i.imgur.com/NpTh5mR.jpg"] });
    };

    if (command === "mat") {
        message.channel.send("Matola..? Pra onde está me levando? Por que estamos indo para o disk?\nMatola..?\nPor que está mandando comes?\nO que você está faz.. aaahh Pare.. Matola.. por favor..AAAaaaaah.. Agora estou todo melado de criticos");
    };

    if (command === "mute") {
        client.commands.get("mute").execute(message, args);
    }


});







client.login(process.env.TOKEN);
