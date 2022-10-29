/* main.js
 * This is the main file for the bot, containing simple messaging functions
 * Author: Trevor Foresta
 * Last Modified: 10/29/2022
 */

var Discord = require('discord.js'); // imports the discord.js module
const client = new Discord.Client({ // creates a new Discord client
	intents: ['GUILDS', 'GUILD_MESSAGES'],
});

client.once('ready', () => {
    console.log('Logged in!');
});

const fs = require('fs'); // creates a new Discord collection

/* getRandomQuote() 
 * returns a random quote/line of text from a txt file
 */
function getRandomQuote() {
	var data = fs.readFileSync('quotes.txt', 'utf8'); // reads the file as a buffer
	data = data.toString(); // makes the buffer into a readable string
	data = data.split('\n'); // splits the string into an array of strings
	var randomQuote = data[Math.floor(Math.random() * data.length)]; // gets a random quote from the array
	return randomQuote; // returns the random quote
}

/* spamWarning()
 * sends a message to prevent the bot from spamming the chat
 */
function spamWarning() {
	console.log('Spam Warning sent for User: ' + message.author.username);
	client.channels.cache.get('CHANNEL ID').send('Please do not spam the chat, ' + message.author.username);
}


// When the chat receives a message for the bot
client.on('messageCreate', (message) => {
	const msgQuote = String(getRandomQuote());
	if (message.content === '!quote' || message.content === '!q') {
		message.channel.send(msgQuote);
	}
});

//Note: change 'token' to bot's token
client.login('token');
