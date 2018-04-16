# Introduction

`autoreply-hangouts-bot` is a simple Google Hangouts chatbot designed to auto-reply all incoming messages.

My motivation to create such chatbot is that I'm trying to leave Google Hangouts and I fear that I would miss some (maybe important) messages from colleagues or friends.

So I created tool to automaticaly inform them whenewer they write me a message.

## 🔨 Installation

### Clone from github and install

```
git clone https://github.com/martinbilek/autoreply-hangouts-bot.git
cd autoreply-hangouts-bot
npm install
```

### Configure

First you need to generate an [App password](https://myaccount.google.com/apppasswords) for your Google account. Sorry, OAuth is not supported.

```
cp config.json.template config.json
```

Then edit `config.json` and fill in your e-mail, generated application password and autoreply message.


### Start app

```
node index.js
```
