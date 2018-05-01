var falas = ["Abys","Reneged"]
exports.run(client,message,args) = > [
message.channel.sendMessage("Deve ser... " +falas[Math.round(Math.random)(*falas.length-1)]);
]