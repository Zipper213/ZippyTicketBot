const Discord = require('discord.js');
const Client = new Discord.Client();

const Prefix = "[";

Client.on('ready', () => {
	console.log('Bot Ready!');
});

Client.on('message', (message) => {

	let msgP = message.content
	let msg = msg.substring(1);
	let author = message.author;
	let channel = message.channel;

	if(!msgP.startsWith(Prefix)) return;

	if(msg === "test") {
		channel.send("IT WORKS!");
	}
})

Client.login(process.env.BOT_TOKEN);
