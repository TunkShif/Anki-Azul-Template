## Anki Azul Template

![demo](docs/demo.png)

English | [简体中文][0]

A collection of clean style anki card templates. Check out the [Online Preview][1].

An older version of this templates can be found [here][2].

## Features

- Basic Q&A card template.
- English & Spanish vocabulary card with online audio support.
- Better experience on AnkiDroid.

## Usage

Download and import the latest [release][4].

## Development

All card templates reside in `templates` folder, we use tailwind css for styling. Run `yarn gen` to generate css styles for all the cards.

And under the `tools` folder, there is a rust program for generating `apkg` collections. (Thanks to [genanki-rs][3])

[0]: https://github.com/TunkShif/Anki-Azul-Template/blob/main/README-zh-CN.md
[1]: https://anki-azul-template.vercel.app/
[2]: https://github.com/TunkShif/Anki-Azul-Template/tree/legacy
[3]: https://github.com/yannickfunk/genanki-rs
[4]: https://github.com/TunkShif/Anki-Azul-Template/releases
