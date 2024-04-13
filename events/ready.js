const config = require("../config.js");
const { ActivityType } = require("discord.js");
module.exports = async (client) => {
  if (config.mongodbURL || process.env.MONGO) {
    const { REST } = require("@discordjs/rest");
    const { Routes } = require("discord-api-types/v10");
    const rest = new REST({ version: "10" }).setToken(
      config.TOKEN || process.env.TOKEN,
    );
    (async () => {
      try {
        await rest.put(Routes.applicationCommands(client.user.id), {
          body: await client.commands,
        });
        console.log("\x1b[36m%s\x1b[0m", "Kronix |    🚀 Commands Loaded!");
      } catch (err) {
        console.log("\x1b[36m%s\x1b[0m", "Kronix |    🚀 Commands Distracted!");
      }
    })();

    console.log(
      "\x1b[32m%s\x1b[0m",
      `Kronix |    🌼 Logged in as ${client.user.username}`,
    );

    setInterval(
      () =>
        client.user.setActivity({
          name: `Hayatla`,
          type: ActivityType.Streaming,
        }),
      10000,
    );
    client.user.setStatus("idle");
    client.errorLog = config.errorLog;
  } else {
    console.log("\x1b[36m%s\x1b[0m", `Kronix |    🍔 Error MongoDB!`);
  }
  console.log("\x1b[36m%s\x1b[0m", `Kronix |    🎯 Activity sucessfully set!`);

  if (
    client.config.voteManager.status === true &&
    client.config.voteManager.api_key
  ) {
    const { AutoPoster } = require("topgg-autoposter");
    const ap = AutoPoster(client.config.voteManager.api_key, client);
    ap.on("posted", () => {});
  }
};
