const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
require("dotenv").config();

client.once("ready", () => {
    console.log("PRONTO PARA SENTIR PENA");
});

client.on("message", message => {
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLocaleLowerCase();

    if (command === "comes" || command ==="come" || command ==="bebes" || command === "comecrit") {
        message.channel.send("TENHO PENA");
    };

    if (command === "matola") {
        message.channel.send("MATOLA NÃO COMA O MEU CRIT" + "<:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313><:bobsponga:445344728733581313>" );
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
        message.channel.send({files: ["https://i.imgur.com/6bKWryZ.png"]});
    };

    if (command === "greve") {
        message.channel.send({files: ["https://i.imgur.com/NpTh5mR.jpg"]});
    };

    if (command === "mat") {
        message.channel.send("Matola..? Pra onde está me levando? Por que estamos indo para o disk?\nMatola..?\nPor que está mandando comes?\nO que você está faz.. aaahh Pare.. Matola.. por favor..AAAaaaaah.. Agora estou todo melado de criticos");
    };
});







client.login(process.env.TOKEN);
