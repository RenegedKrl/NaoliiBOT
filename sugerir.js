exports.run = (client,message,args)=>{
    var sugest = args.slice(0).join(" ")
    if(!sugest) return message.reply("escreva sua sugestão")
        client.guilds.get("437079463180632077").channels.get("436653523481001994").send("----------------------Sugestão------------------------\n"+ sugest + "\n sugestão enviada por <@" + message.author.id + "> ou " + message.author.tag + "\n---------------------fim--------------------")
    message.channel.send("sua sugestão foi enviada para meu server")
}