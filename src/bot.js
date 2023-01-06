//imports all the environmental variables in .env file 
require("dotenv").config();
// client class allows us to interact with dicord api
const { Client, GatewayIntentBits } = require('discord.js');
const PREFIX="$"
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
	if(message.content.startsWith(PREFIX)){
			const [CMD_NAME,...args]=message.
		content.trim().
		substring(PREFIX.length).
		split(/\s+/); //match all white spaces
	
		if(CMD_NAME==='kick'){
			if(args.length===0){
				return message.reply("please provide an Id")
				
			}
			const member=message.guild.members.cache.get(args[0]);
				if(member){
					member.kick().
					then((member)=>message.channel.send(`${member} was kicked`));
				}
				else{
					message.channel.send("member was not found");
				}
		}
		else if(CMD_NAME==='ban'){
			message.channel.send("Banned the user");

		}
	}	
})

client.login(process.env.DISCORDJS_BOT_TOKEN)