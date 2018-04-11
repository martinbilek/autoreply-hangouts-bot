'use strict';

const hangoutsBot = require('hangouts-bot'),
    config = require('./config.json');

let bot = new hangoutsBot(config.email, config.password);

bot.on('online', function() {
	console.info('Connected as:', config.email);
});

bot.on('message', function(from, message) {
	console.log('\nNew message from:', from);
    console.log(message);

    // autoreply message
    bot.sendMessage(from, config.autoreplyMessage);
});
