const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");
const { AttachmentBuilder } = require("discord.js");
const { muzicard } = require("muzicard");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: "Currently playing a Track",
          iconURL:
            "https://cdn.discordapp.com/attachments/1140841446228897932/1144671132948103208/giphy.gif",
          url: "https://discord.gg/teamkronix",
        })
        .setDescription(
          `\n ‎ \n▶️ **Details :** **${song?.name}**\n▶️ **Enjoy the Ultimate Music Experience. ** \n▶️ **If link breaks playback try to give query.**`,
        )
        .setImage(queue.songs[0].thumbnail)
        .setColor("#FF0000")
        .setFooter({ text: "More info - Use /help command [Team Kronix]" });
      const card = new muzicard()
        .setName(song?.name)
        .setAuthor(`FalconY`)
        .setColor("auto")
        .setTheme("neonx")
        .setThumbnail(queue.songs[0].thumbnail)
        .setBrightness(69)
        .setProgress(69)
        .setStartTime("0:00")
        .setEndTime(song?.length);

      const buffer = await card.build();
      const attachment = new AttachmentBuilder(buffer, {
        name: `muzicard.png`,
      });
      queue?.textChannel?.send({ files: [attachment] }).catch((e) => {});
    }
  }
};
