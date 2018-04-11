# Introduction

"autoreply-hangouts-bot" is a very simple Hangouts chat bot designed to auto-reply all incoming messages.

Main reason to made such app is, that I'm trying to leave Hangouts.
Because I used Hangouts for last couple of years, I would miss some (maybe important) messages from
collegues or friends. So I wanted to inform them via autoreply message, that I'm not using Hangouts anymore.

## 🔨 Installation

### Clone fresh code directly from github and install:

```
git clone https://github.com/martinbilek/autoreply-hangouts-bot.git
cd autoreply-hangouts-bot
npm install
```

### Configure app properly:

First you need to generate "[App password](https://myaccount.google.com/apppasswords)" for your Google account - sorry, Oauth is not supported.

```
cp config.json.template config.json
```

### Start app:

```
node index.js
```
