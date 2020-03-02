const Discord = require('discord.js');
const client = new Discord.Client();
const https = require('https');

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === '!NickPlz') {
    https.get('https://nick.denaro.dev/routes', (resp) => {
      let data = '';
      resp.on('data', (chunk) => {
        data += chunk;
      });

      resp.on('end', () => {
        if (!data.includes('swagger')) {
          msg.channel.send("<@117809686543204361> plz: https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-3.1");
        } else {
          msg.channel.send("<@118534418125029379> <@!118536732500164610> IT'S GO TIME");
        }
      });
    });
  }
});

client.login(process.env.SYMMETRICAL_MEMORY_BOT_TOKEN);