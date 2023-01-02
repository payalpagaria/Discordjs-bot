//imports all the environmental variables in .env file 
require("dotenv").config();
// client class allows us to interact with dicord api
const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
	intents: [
		GatewayIntentBits.Guilds,
		GatewayIntentBits.GuildMessages,
		GatewayIntentBits.MessageContent,
		GatewayIntentBits.GuildMembers,
	],
});
client.on("ready",()=>{
	console.log(client.user.username);
})
client.on("messageCreate",(message)=>{
	if(message.author.bot) return;
	console.log(`${message.author.tag} => ${message.content}`);
	if(message.content==="hey"){
		message.channel.send("hello there")
	}
})
client.login(process.env.DISCORDJS_BOT_TOKEN)