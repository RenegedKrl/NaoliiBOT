var discord = require('discord.js')

exports.run = (client,message,args)=>{
 var embed = new discord.RichEmbed()
 .setAuthor(message.author.username)
 .setColor("#6A5ACD")
 .setDescription("👑Dono (@RenegedKrl#4610)")
 .setTitle("Informações do servidor ⚔️Naolli")
 .setURL("https://discordapp.com/channels/406209503684722689/411602529680490496")
 .setTimestamp()
 .setImage(client.user.avatarURL)
 .setFooter("⚔️Naolli™")
 .setThumbnail(message.author.avatarURL)
 .addField(":scroll:titulo:⚔️Naolli™",":book:conteudo:Dúvidas vão em #suporte adicione o Bot acessando: https://mrzpowercontato.wixsite.com/naolli")
 .addBlankField();

 message.channel.send(embed)
}