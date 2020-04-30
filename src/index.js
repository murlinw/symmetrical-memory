const Discord = require("discord.js");
const client = new Discord.Client();
const https = require("https");

client.on("ready", () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", (msg) => {
  if (msg.content === "!NickPlz") {
    process.on("uncaughtException", (error) => {
      msg.channel.send(
        "<@117809686543204361> your server errored with:\n" +
          JSON.stringify(error)
      );
    });

    https.get("https://nick.denaro.dev/routes", (resp) => {
      let data = "";
      resp.on("data", (chunk) => {
        data += chunk;
      });

      resp.on("end", () => {
        if (!data.includes("swagger-ui")) {
          msg.channel.send(
            "<@117809686543204361>, an annonucement: plz https://docs.microsoft.com/en-us/aspnet/core/tutorials/web-api-help-pages-using-swagger?view=aspnetcore-3.1#swagger-ui"
          );
        } else {
          msg.channel.send(
            "<@118534418125029379> <@!118536732500164610> IT'S GO TIME"
          );
        }
      });
    });
  } else if (msg.content === "!DrewPlz") {
    if (
      msg.member.voice.channel.members
        .map((user) => user.displayName)
        .includes("Drew")
    ) {
      msg.channel.send(
        "<@118534418125029379> <@!118536732500164610> <@117809686543204361> an annonucement: IT'S GO TIME"
      );
    } else {
      msg.channel.send("<@118533809598627843> IT'S THURSDAY");
    }
  } else if(msg.content === "!Hey") {
    msg.channel.send("Hey :)")
  }
});

client.login(process.env.SYMMETRICAL_MEMORY_BOT_TOKEN);