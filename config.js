module.exports = {
  TOKEN:
    "",
  ownerID: ["272681557515436033"],
  botInvite:
    "https://discord.com/api/oauth2/authorize?client_id=1027828697828433980&permissions=279230934336&scope=bot",
  supportServer: "https://discord.gg/BaafDx3D",
  mongodbURL:
    "mongodb+srv://SubayTr2:20232022.@cluster0.0gvamuz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
  status: "",
  commandsDir: "./commands",
  language: "en",
  embedColor: "00fbff",
  errorLog: "",

  voteManager: {
    status: false,
    api_key: "",
    vote_commands: [
      "back",
      "channel",
      "clear",
      "dj",
      "filter",
      "loop",
      "nowplaying",
      "pause",
      "playnormal",
      "playlist",
      "queue",
      "resume",
      "save",
      "play",
      "skip",
      "stop",
      "time",
      "volume",
    ],
    vote_url: "https://top.gg/bot/1027828697828433980/vote",
  },

  shardManager: {
    shardStatus: false,
  },

  playlistSettings: {
    maxPlaylist: 10,
    maxMusic: 75,
  },

  opt: {
    DJ: {
      commands: [
        "back",
        "clear",
        "filter",
        "loop",
        "pause",
        "resume",
        "skip",
        "stop",
        "volume",
        "shuffle",
      ],
    },

    voiceConfig: {
      leaveOnFinish: false,
      leaveOnStop: false,
      leaveOnEmpty: {
        status: false,
        cooldown: 10000000,
      },
    },

    maxVol: 150,
  },

  sponsor: {
    status: true,
    url: "https://www.youtube.com/@kronixx2077",
  },
};
