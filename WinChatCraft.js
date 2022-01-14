const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log("WinChatCraft - github.com/kl3sshydra")
const mineflayer = require('mineflayer')
rl.question("Insert bots's name:\n> ", function(prefix) {
    rl.question("Insert ip:\n>", function(ip) {
        rl.question("Insert port:\n>", function(port) {

            console.log(`\nPreparing bot...\n\n==============================\n[Name >> ${prefix}]\n[Ip:port >> ${ip}:${port}]\n==============================`)
            
            var fullname = prefix
            const bot = mineflayer.createBot({
                host: ip,            
                username: fullname, 
                port: parseInt(port),
                })
                bot.on('chat', (username, message) => {
                if (username === bot.username) return
                
                rl.question("\n> ", function(message) {
                    bot.chat(message)
                });
                
            })
            
            bot.on('kicked', console.log)
            bot.on('error', console.log)         
         
        });
    });
});