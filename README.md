# CDS 2100 Transcription Game

A browser-based IPA transcription practice game for undergraduate phonetics students. Students hear a word, build a broad IPA transcription with the embedded IPA keyboard, and receive immediate scoring feedback.

## Features

- Four difficulty levels, from warm-up words to clinic-style multisyllabic forms
- Full embedded IPA keyboard with consonants, vowels, common English sequences, stress marks, brackets, slashes, and diacritics
- Browser speech synthesis for hearing each target word aloud
- Exact-match scoring with streak bonuses, hint penalties, XP, focus hearts, badges, and round review
- Static HTML/CSS/JavaScript project, so it can run locally and deploy easily to GitHub Pages

## Run Locally

Open `index.html` in a browser.

For a local server, run this from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Customize the Word Bank

Edit the `levels` array near the top of `script.js`.

Each item looks like this:

```js
{ word: "phonetics", ipa: "fəˈnɛtɪks", hint: "Stress the second syllable" }
```

The scoring normalizer ignores slashes, brackets, and spaces. It treats `ɡ` and `g` as equivalent, and it accepts `r` for the English rhotic convention used in CDS 2100.

## GitHub Pages

This project does not require a build step.

1. Push this folder to a GitHub repository.
2. Open the repository settings.
3. Go to Pages.
4. Deploy from the main branch and root folder.

## Teaching Notes

The current answer key uses broad General American English transcriptions and writes the English rhotic as `r` for CDS 2100. Narrow transcription can be added later as a separate mode with diacritics and stricter scoring.
