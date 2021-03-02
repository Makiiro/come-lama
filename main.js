const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "$";
require("dotenv").config();

client.on("ready", async () => {
    console.log("PRONTO PARA SENTIR PENA");
    client.user.setActivity('AMASSANDO', { type: 'AMASSANDO CR' }).catch(console.error);
});



client.on("message", async message => {
    client.user.setActivity('AMASSANDO', { type: 'AMASSANDO CR' });
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
    } else if (command === "matcrit") {
        message.channel.send({files: ["https://i.imgur.com/5E0hSCJ.jpg"]});
    } else if (command === "perdemo") {
        message.channel.send({files: ["https://i.imgur.com/6SOaUub.png"]});
    } else if (command === "bonk") {
        message.channel.send({files: ["https://i.imgur.com/xE1Kpk7.png"]});
    } else if (command === "casada") {
        message.channel.send({files: ["https://i.imgur.com/8ootkQ1.jpg"]});
    };

    if (command === "linda") {
        message.channel.send(`vdd #Princesa_Linda🎯💞👑{ 🔝🔝}😱👌😱❤💞😍😘 ╭━╮┳┈┳╭━╮╭━━╭━╮, ╰━╮┃┈┃┣━╯┣━┈┣┳╯, ╰━╯╰━╯┻┈┈╰━━┻╰━ ❥❥════════❥❥ #GATAH.😍👏💘❤😍🇵‌🇷‌🇮‌🇳‌🇨‌🇪‌🇸‌🇦 😍❤. 🍃💎#Gatinha💎 👑😍💞❤ 🍃💎#tão_lindah💎👑😍💞❤ 🍃💎#Princesah💎👑😍💞❤ 🍃💎#tão_top💎👑😍💞❤ 🍃💎#Diva💎👑😍💞❤ 🍃💎#perfeição💎👑😍💞😘💓❤😉╲\ | /╱╭━━━━━━━╮╲\ | /╱ #Liindah❤😙👌😉💋#PerFeIçÂo ╱/ | \╲╰━━━━━━━╯╱/ | \╲👉👈🙈❤😍💟👏 #Ela_Arrasa 👉👈🙈❤😍💟👏 #Ela_é_Simplesmente_Uma_Diva 👉👈🙈❤😍💟👏 #Ela_é_GataTãÖö_LïNdÄa" 😍😍👏❤💘💍💑👑💞🍃 #TãÖö_PeRfEiTaA😍😍👌👑💞❤👏💘🍃 #TãÖö_MäRäVïLhÖöSäÄ👆😱😍😍💘❤😘😘👑💍🍃 #TãÖö_DëËsLÜnBrÄäNtë👏😍😍😱👌😘👑💘💍❤ #JëÏtÖö_Dë_MöDëLöÖ🙆😍😍👌 & #RöStÏnHöÖ_Dë_PrÏnCëSäÄ🙆👑✊😍😍😘👏💘❤💍💞 Perfeita 😍💓 Linda 😍💝 Bonita 😍💙 Musa😍☺ Maravilhosa 😍😚 Magnífica 😍😘 Top Das Top 😍🙆 Diva😍💘 Deusa😍 👊😍 💘💟😍👑 😍pft 💘💟😍👑 😍tão pft💘💟😍👑 😍linda💘💟😍👑 😍gata💘💟😍👑 😍Bonita💘💟😍 😍Top💘😍qualidade💘💟😍👑 ?😍q beleza💘💟😍👑 😍Princesa💘💟😍👑 😍Só no grau💘💟😍👑 😍dama💘💟😍👑 😍diva💘💟😍👑 😍maravilhosa💘💟😍👑 😍 - Linda 😍♥ 😍- Perfeita 😍😍😱👌 😍- Diva ♥👏👊👌🍃 😍- Top 😍😍😱 😍- Dlç 😍😍👊👌🍃 😍- Sdç 😍😱👏 😍- Princesa 😍👊♡ 👏😱❤ tão Lindaa ❤😱👏`);
    };

    if (command === "k7") {
        message.channel.send("CACETE VAI SE FODE ESCREVE IGUAL GENTE IRMAO, ACHA QUE TODO MUNDO É NERDOLA IGUAL TU PRA ENTENDER ESSAS GIRIAZINHA DE JOGO");
    };

    if (command === "onii") {
        message.channel.send("Suspira * Onii-chaaaaan * pula e abraça * Ｏ (≧ ∇ ≦) Ｏ Eu senti sua falta * cheira * (* ^ ) * fuah * Eu amo o seu cheiro Onii-chan (^ w ), hein? Não cheirar você? Não seja bobo Onii-chan, eu te amo, por que não posso mostrar meu carinho? (─‿‿─) ♡ Hahaha, seu rosto está vermelho. Woah Onii-chan, por que você está me empurrando para a cama? ヽ (° 〇 °) ﾉ * Kyaaaaa * não me faz cócegas Onii-chan haha ​​counter attaaaaack * empurra você para baixo * ヽ (> ∀ <☆) ノ. Hehehe eu ganhei! Onii-chan, seu rosto está realmente vermelho agora, Hmmh * sorri * (= ^ - ω - ^ =) talvez você esteja se apaixonando por mim? * Chuuuuu * (ﾉ ´ з ) ノ * beija você * Woah O-onii-chan w-o que você está fazendo ?! * H-hyyaaaaa * não tire minha calcinha! Não olhe para o meu lugar privado! ( / ▽ ＼ *) * Ah * * Ah * Não me lamba lá, está sujo! * Ahhhhhh * * fuah * * ah * * ah * (// ω //) O-onii-chan a-você vai colocar? O-ok, eu estou pronto. (／。＼) * Heeeee * eu-dói. ~ (> _ <~) SWW dwon * ah * * ah * * MMMH * O-onii-chan Eu amo você! * AHHHHHHH * * MMMHHH * * AH * * Hah * * Hah * hah * O-ONIII-CHAAANN você baka, por que você fez isso por dentro? ヽ (д´ *) ノ B-bem, se foi bom para você, eu estou feliz, m-mas certifique-se de assumir a responsabilidade. (ღ˘⌣˘ღ).");
    };

    if (command === "mat") {
        message.channel.send("Matola..? Pra onde está me levando? Por que estamos indo para o disk?\nMatola..?\nPor que está mandando comes?\nO que você está faz.. aaahh Pare.. Matola.. por favor..AAAaaaaah.. Agora estou todo melado de criticos");
    };

    if (command === "roy") {
        message.channel.send("MATOLA POR FAVOR ME DA O ROY PELO AMOR DE DEUS EU IMPLORO\nMATOLA POR FAVOR ME DA O ROY PELO AMOR DE DEUS EU IMPLORO\nMATOLA POR FAVOR ME DA O ROY PELO AMOR DE DEUS EU IMPLORO");
        message.channel.send({files: ["https://i.imgur.com/pLEBu1Y.jpg"]});
    };

    if (command === "corn") {
        message.channel.send(`<@!${message.author.id}> É\n
    :corn: :corn: :corn: :corn:   :corn: :corn: :corn::corn:  :corn: :corn:  :corn:       :corn:                 :corn:   :corn: :corn: :corn: :corn:
    :corn:                        :corn:              :corn:  :corn:         :corn:       :corn:  :corn:         :corn:   :corn:               :corn:                  
    :corn:                        :corn:              :corn:  :corn: :corn:               :corn:     :corn:      :corn:   :corn:               :corn:                          
    :corn:                        :corn:              :corn:  :corn:      :corn:          :corn:        :corn:   :corn:   :corn:               :corn:                      
    :corn: :corn: :corn: :corn:   :corn: :corn: :corn::corn:  :corn:          :corn:      :corn:             :corn:       :corn: :corn: :corn: :corn:       

    :corn: :corn: :corn::corn:
    :corn:              :corn:
    :corn:              :corn:
    :corn:              :corn:
    :corn: :corn: :corn::corn:

    :corn: :corn:  :corn:
    :corn:         :corn: 
    :corn: :corn: 
    :corn:      :corn: 
    :corn:          :corn:

    :corn:                :corn:
    :corn: :corn:         :corn:
    :corn:    :corn:      :corn:
    :corn:       :corn:   :corn:
    :corn:          :corn::corn:

    :corn: :corn: :corn: :corn:
    :corn:               :corn:
    :corn:               :corn:
    :corn:               :corn:
    :corn: :corn: :corn: :corn:`);

    };


    if (command === "kong") {
        message.channel.send(`TROPA DO KONG 🦍🦍🦍🦍 TROPA DO KONG 🦍🦍🦍🦍 😡 VAI TOMAR NO CU GODZILLA
        🇧🇷 TROPA DO KONG 🇧🇷
        
        🇧🇷 TROPA DO KONG 🇧🇷
        
        🇧🇷 TROPA DO KONG 🇧🇷
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        😡 VAI TOMAR NO CU GODZILLA
        
        
        
        Quem é o GODZILLA?
        
        Para o cego, é a cegueira
        
        Para o faminto, é a fome
        
        Para o sedento, é o nordeste
        
        Para o morto, é a morte
        
        Para o enfermo, é desgraça
        
        Para o prisioneiro, é a prisão perpétua
        
        Para o solitário, a solidão
        
        Para o viajante, é porra nenhuma
        
        Para mim, é nada.
        
        📂Documentos📂‬
        
        ‪ └📂 KONG
        
        ‪ └📂 Defeitos
        
        ‪ └ Arquivo não Encontrado
        
        ┃┃╱╲ EU E
        
        ┃╱╱╲╲ E MINHA CASA
        
        ╱╱╭╮╲╲ SERVIMOS KONG
        
        ▔▏┗┛▕▔
        
        ╱▔▔▔▔▔▔▔▔▔▔╲
        
        ╱╱┏┳┓╭╮┏┳┓ ╲╲
        
        ▔▏┗┻┛┃┃┗┻┛▕▔
        
        
        
        🇧🇷 TROPA DO KONG 🇧🇷
        
        🇧🇷 TROPA DO KONG 🇧🇷
        
        🇧🇷 TROPA DO KONG 🇧🇷
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        TROPA DO KONG 🦍🦍🦍🦍
        
        😡 VAI TOMAR NO CU GODZILLA
        
        
        
        EI GODZILLA! VAI TOMA NO CÚ😡
        
        EI GODZILLA! VAI TOMA NO CÚ!
        
        GODZILLA É MEU PERU👿
        
        GODZILLA NADINHA
        
        KONG REI
        
        🐲TROPA DOS KONG ONLINE🤡🤡😎😎😎👌🖕 TA EIN SHOCK LARGATIXA?? 🤡🤡🤡👌🖕🖕VAI TOMA NO CU GODZILLA👿👌`);
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
    
    if (command === "clear") {
        if (message.deletable) {
            message.delete();
        };

        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Você não pode apagar").then(m => m.delete(5000));
        };

        if (!message.guild.me.hasPermission("ADMINISTRATOR")) {
            return message.reply("???").then(m => m.delete(5000));
        };

        let deleteAmout;
        
        if (parseInt(args[0]) > 100) {
            deleteAmout = 100;
        } else {
            deleteAmout = parseInt(args[0]);
        };

        message.channel.bulkDelete(deleteAmout, true)
        .then(deleted => message.channel.send(`${deleted.size} mensagens foram deletadas`))
        .catch(err => message.reply(`Tu fez alguma merda ${err}`));

    };

    if (command === "timeout") {
        if (!message.member.hasPermission("ADMINISTRATOR")) {
            return message.reply("Você não pode dar timeout").then(m => m.delete(5000));
        };
        
        let person = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[1]));
        if (!person) return message.reply("não achei o corno");

        let mainRole = message.guild.roles.cache.find(role => role.name === "ROLETERS");
        let muteRole = message.guild.roles.cache.find(role => role.name === "mute");

        if (!muteRole) return message.reply("não encontrei a role");

        let time = args[2];

        if (!time) {
            return message.reply("Coloque o tempo");
        };

        person.roles.remove(mainRole.id);
        person.roles.add(muteRole.id);

        message.channel.send(`@${person.user.tag} tomou um mute insano de ${ms(ms(time))}`);

        setTimeout(function() {
            person.roles.add(mainRole.id);
            person.roles.remove(muteRole.id);
            message.channel.send(`@${person.user.tag} desmutado`)

        }, ms(time));

    };
});







client.login(process.env.TOKEN);