const db = require("../../mongoDB");
const { EmbedBuilder } = require("discord.js");

module.exports = async (client, queue, song) => {
  if (queue) {
    if (!client.config.opt.loopMessage && queue?.repeatMode !== 0) return;
    if (queue?.textChannel) {
      const embed = new EmbedBuilder()
        .setAuthor({
          name: "Added To Queue",
          iconURL:
            "https://cdn.discordapp.com/attachments/1156866389819281418/1157218651179597884/1213-verified.gif?ex=6517cf5a&is=65167dda&hm=bc8fb4414cb412587ade0af285b77569d2568214cf7d6baab8702ddeb6c38ad5&",
          url: "https://discord.gg/FUEHs7RCqz",
        })
        .setDescription(`<@${song.user.id}>, **${song.name}**`)
        .setColor("#14bdff")
        .setFooter({ text: "Use /queue for more Information" });
      const { muzicard } = require("muzicard");
      const { track } = this.player.queue.current;

      const card = new muzicard()
        .setName(song.name)
        .setAuthor(`FalconY`)
        .setColor("auto")
        .setTheme("dynamic")
        .setBrightness(69)
        .setThumbnail(
          "https://media.discordapp.net/attachments/1063839539824709792/1222201352726384791/48dc9061e34fc318b2c2e5c0e89bca05.webp?ex=66155ab5&is=6602e5b5&hm=5a3acf9c2788c6553f30a0b573eb02dba5786412df1dd82a63005a21ca1e9e6c&=&format=webp&width=160&height=160",
        )
        .setProgress(100)
        .setStartTime("0:00")
        .setEndTime("3:63");

      const buffer = await card.build();
      const attachment = new AttachmentBuilder(buffer, {
        name: `muzicard.png`,
      });
      queue?.textChannel?.send({ files: [attachment] }).catch((e) => {});
    }
  }
};
