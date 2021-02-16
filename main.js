const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
require("dotenv").config();

client.once("ready", async () => {
    console.log("PRONTO PARA SENTIR PENA");
});

client.on("message", async message => {
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
        message.channel.reply(`
        \nVAI TOMAR NO CU <@!${message.author.id}>
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
    } else if (command === "greve") {
        message.channel.send({files: ["https://i.imgur.com/NpTh5mR.jpg"]});
    };

    if (command === "linda") {
        message.channel.send(`vdd #Princesa_Linda🎯💞👑{ 🔝🔝}😱👌😱❤💞😍😘 ╭━╮┳┈┳╭━╮╭━━╭━╮, ╰━╮┃┈┃┣━╯┣━┈┣┳╯, ╰━╯╰━╯┻┈┈╰━━┻╰━ ❥❥════════❥❥ #GATAH.😍👏💘❤😍🇵‌🇷‌🇮‌🇳‌🇨‌🇪‌🇸‌🇦 😍❤. 🍃💎#Gatinha💎 👑😍💞❤ 🍃💎#tão_lindah💎👑😍💞❤ 🍃💎#Princesah💎👑😍💞❤ 🍃💎#tão_top💎👑😍💞❤ 🍃💎#Diva💎👑😍💞❤ 🍃💎#perfeição💎👑😍💞😘💓❤😉╲\ | /╱╭━━━━━━━╮╲\ | /╱ #Liindah❤😙👌😉💋#PerFeIçÂo ╱/ | \╲╰━━━━━━━╯╱/ | \╲👉👈🙈❤😍💟👏 #Ela_Arrasa 👉👈🙈❤😍💟👏 #Ela_é_Simplesmente_Uma_Diva 👉👈🙈❤😍💟👏 #Ela_é_GataTãÖö_LïNdÄa" 😍😍👏❤💘💍💑👑💞🍃 #TãÖö_PeRfEiTaA😍😍👌👑💞❤👏💘🍃 #TãÖö_MäRäVïLhÖöSäÄ👆😱😍😍💘❤😘😘👑💍🍃 #TãÖö_DëËsLÜnBrÄäNtë👏😍😍😱👌😘👑💘💍❤ #JëÏtÖö_Dë_MöDëLöÖ🙆😍😍👌 & #RöStÏnHöÖ_Dë_PrÏnCëSäÄ🙆👑✊😍😍😘👏💘❤💍💞 Perfeita 😍💓 Linda 😍💝 Bonita 😍💙 Musa😍☺ Maravilhosa 😍😚 Magnífica 😍😘 Top Das Top 😍🙆 Diva😍💘 Deusa😍 👊😍 💘💟😍👑 😍pft 💘💟😍👑 😍tão pft💘💟😍👑 😍linda💘💟😍👑 😍gata💘💟😍👑 😍Bonita💘💟😍 😍Top💘😍qualidade💘💟😍👑 ?😍q beleza💘💟😍👑 😍Princesa💘💟😍👑 😍Só no grau💘💟😍👑 😍dama💘💟😍👑 😍diva💘💟😍👑 😍maravilhosa💘💟😍👑 😍 - Linda 😍♥ 😍- Perfeita 😍😍😱👌 😍- Diva ♥👏👊👌🍃 😍- Top 😍😍😱 😍- Dlç 😍😍👊👌🍃 😍- Sdç 😍😱👏 😍- Princesa 😍👊♡ 👏😱❤ tão Lindaa ❤😱👏`);
    }


    if (command === "mat") {
        message.channel.send("Matola..? Pra onde está me levando? Por que estamos indo para o disk?\nMatola..?\nPor que está mandando comes?\nO que você está faz.. aaahh Pare.. Matola.. por favor..AAAaaaaah.. Agora estou todo melado de criticos");
    };

    if (command === "mute") {
        const syntax = "$mute <@> <duration as a number> <m, h, d or life>";
        const {member, channel, content, mentions} = message;
        if (!member.hasPermission("ADMINISTRATOR")) {
            channel.send("Você não tem permissão amassar cranios");
            return;
        };

        const split = content.trim().split(" ");
        if (split.length !== 4) {
            channel.send("Amasse da forma correta:" + syntax);
            return;
        };

        const duration = split[2];
        const durationType = split[3];

        if (isNaN(duration)) {
            channel.send("Coloque o tempo que vai amassar" + syntax);
            return;
        };

        const durations = {
            m: 60,
            h: 60 * 60,
            d: 60 * 60 * 24,
            life: -1
        };

        if (!durations[durationType]) {
            channel.send("Coloque uma forma valida de amassar o crânio " + syntax);
            return;
        };

        const seconds = duration * durations[durationType];
        const target = mentions.users.first();
        console.log("MENTIONS", mentions);
    };
});







client.login(process.env.TOKEN);
