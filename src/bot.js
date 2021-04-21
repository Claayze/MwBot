import dotenv from "dotenv"; 
import { Client, Message } from 'discord.js';
dotenv.config();
const DISCORD_CHANNEL_ID = process.env.DISCORD_CHANNEL_ID
const DISCORD_TOKEN = process.env.DISCORD_TOKEN;

const client = new Client();

client.login(DISCORD_TOKEN);

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
  });

/* client.on('message', msg => {
    msg.reply(msg.content)
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
}); */
client.on('message',gotmessage)
function gotmessage(msg)
{
    if(msg.author.bot) return;
    if(msg.channel.id == DISCORD_CHANNEL_ID)
    {

        if (msg.content === 'ping') 
        {
            msg.reply('Pong!');
        }
        
    }
}