const {RichEmbed} = require('discord.js');

exports.run = (client, message, args) => {
if(!args[0]){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help Da Naolii`,`${client.user.avatarURL}`)
    .setTitle("Para  ver o que o comando faz use n!help (comando) sem o n!não irá funcionar Ex: n!help ban")
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField('🛠Comandos De Admin:','``n!ban`` , ``n!kick``')
    .addField('👨‍👨‍👦Comandos De Membros:',' ``n!kamehameha`` , ``n!ping`` , ``n!sugerir`` , ``n!embed``');
message.channel.send(embed)
}if(args[0]){
var cmd = args[0].toLowerCase()
 if(cmd == "ban"){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help Ban`,`${client.user.avatarURL}`)
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField("Ban:","esse comando bane a pessoa mencionada e você tem que colocar o Motivo do ban")
    .addField("Exemplo:","n!ban <@341053979452637205> bot");

    message.channel.send(embed)
    return 
}if(cmd == "kick"){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help Kick:`,`${client.user.avatarURL}`)
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField("Kick:","esse comando kicka a pessoa que você mencinou pelo motivo que você colocou")
    .addField("Exemplo:",`n!kick <@341053979452637205> bot`);

    message.channel.send(embed)
    return 
}if(cmd == "kamehameha"){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help Kamehameha:`,`${client.user.avatarURL}`)
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField("Kamehameha:","usa um kamehameha na pessoa mencionada")
    .addField("Exemplo:",`n!kamehameha <@${client.user.id}>`);

    message.channel.send(embed)
    return 
}if(cmd == "ping"){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help Ping:`,`${client.user.avatarURL}`)
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField("Ping:","mostra o seu ping")
    .addField("Exemplo:",`n!ping`);

    message.channel.send(embed)
    return 
}if(cmd == "sugestao"){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help Sugestao:`,`${client.user.avatarURL}`)
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField("Sugestao:","envia uma sugestao para meu server")
    .addField("Exemplo:",`n!sugerir criar o comando sugestão , esse comando deverá enviar uma sugestão`);

    message.channel.send(embed)
    return 
}if(cmd == "sugestao"){
    var embed = new RichEmbed()
    .setColor('00FF00')
    .setAuthor(`Help embed:`,`${client.user.avatarURL}`)
    .setThumbnail("https://prntscr.com/j9mk54")
    .addField("embed:","envia um info sobre o servidor!")
    .addField("Exemplo:",`n!embed aparecerá um info sobre o servidor , esse comando deverá enviar uma infomação`);

    message.channel.send(embed)
    return 
}else{
     message.channel.send('<@' + message.author.id + '> Comando ``' + args[0] + '`` não encontrado por favor verifique se escreveu certo ou envie uma sugestao de comando usando n!sugerir')
 }
}
}