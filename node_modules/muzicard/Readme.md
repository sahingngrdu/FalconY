# MUZICARD 🎵 [v2.6.1]

This Package Is A Modified Version of Musicard With Some Exicting New Themes.!

## Usage

```js
(async () => {
  const { AttachmentBuilder } = require("discord.js");
  const { muzicard } = require("muzicard");
  const { track } = this.player.queue.current;

  const card = new muzicard()
        .setName(track.title)
        .setAuthor(`G V D K REDDY`)
        .setColor("auto")
        .setTheme("neonx")
        .setBrightness(69)
        if (track.thumbnail) { card.setThumbnail(track.thumbnail); // If No Thumbnail is there, Then
        } else { card.setThumbnail(this.client.user.displayAvatarURL());  } // Bot's Avatar Will Be Displayed
        .setProgress(69)
        .setStartTime("0:00")
        .setEndTime(track.length)

    const buffer = await card.build();
    const attachment = new AttachmentBuilder(buffer, { name: `muzicard.png` });
    return message.channel.send(files:[attachment]);
  console.log("Done Dona Done Done!");
})();
```

# Preview Of Theme's:

| Square Thumbnail                                                                                     | Round Thumbnail                                                                                         |
| ---------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- |
| Setting: `.setTheme("neon")` ![neon](https://arjunreddy.sirv.com/Images/Examples/neon.webp)          | Setting: `.setTheme("neonx")` ![neonx](https://arjunreddy.sirv.com/Images/Examples/neonx.webp)          |
| Setting: `.setTheme("anime")` ![anime](https://arjunreddy.sirv.com/Images/Examples/anime.webp)       | Setting: `.setTheme("animex")` ![animex](https://arjunreddy.sirv.com/Images/Examples/animex.webp)       |
| Setting: `.setTheme("bluesky")` ![bluesky](https://arjunreddy.sirv.com/Images/Examples/bluesky.webp) | Setting: `.setTheme("blueskyx")` ![blueskyx](https://arjunreddy.sirv.com/Images/Examples/blueskyx.webp) |
| Setting: `.setTheme("ravyy")` ![ravyy](https://arjunreddy.sirv.com/Images/Examples/ravvy.webp)       | Setting: `.setTheme("ravyyx")` ![ravyyx](https://arjunreddy.sirv.com/Images/Examples/ravvyx.webp)       |
| Setting: `.setTheme("animes")` ![animes](https://arjunreddy.sirv.com/Images/Examples/animes.webp)    | Setting: `.setTheme("animesx")` ![animesx](https://arjunreddy.sirv.com/Images/Examples/animesx.webp)    |
| Setting: `.setTheme("space")` ![space](IMAGE SOON)                                                   | Setting: `.setTheme("spacex")` ![spacex](IMAGE SOON)                                                    |
| Setting: `.setTheme("classic")` ![classic](https://arjunreddy.sirv.com/Images/Examples/classic.webp) | Setting: `.setTheme("dynamic")` ![dynamic](https://arjunreddy.sirv.com/Images/Examples/dynamic.webp)    |

## Support / Help

| Links                                               | Developer's                                                    | Supporter's                                                     |
| --------------------------------------------------- | -------------------------------------------------------------- | --------------------------------------------------------------- |
| [iShowKronix' YT](https://youtube.com/@kronixx2077) | [G V D K REDDY](https://discord.com/users/1057674644905279498) | [A R J U N](https://discord.com/users/795294090609557504)       |
| [Kronix's Server](https://discord.gg/aMC2e8zgQb)    | [A K S H A T](https://discord.com/users/924144335535091744)    | [F I C K L I N G](https://discord.com/users/728958118536675369) |

## Credits

Original musicard package by [A3PIRE](https://github.com/a3pire/musicard)
