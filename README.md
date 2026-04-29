# CDS 2100 Transcription Game

A browser-based IPA transcription practice game for undergraduate phonetics students in CDS 2100. Students hear a target word, build a broad IPA transcription with the embedded IPA keyboard, and receive immediate scoring feedback.

Live game: <https://rcwatso-slp.github.io/CDS2100-transcription-game/>

## Purpose

This game gives students low-stakes, repeatable practice with English phonetic transcription. It is designed for sophomore-level undergraduate phonetics coursework, especially students who are learning to connect spoken word forms with broad IPA symbols.

The current version focuses on broad transcription. A later version can add a separate narrow transcription mode with diacritics, allophonic detail, and stricter scoring.

## Features

- Four difficulty levels, from warm-up words to clinic-style multisyllabic forms
- Full embedded IPA keyboard with consonants, vowels, affricates, diphthongs, stress marks, brackets, slashes, and diacritics
- Browser speech synthesis for hearing each target word aloud
- Exact-match scoring with streak bonuses, hint penalties, XP, focus hearts, badges, and round review
- CDS 2100 transcription convention that accepts regular `r` for English rhotics
- EIU-inspired blue, white, and gray visual design
- Static HTML/CSS/JavaScript project, so it can run locally and deploy easily to GitHub Pages

## How Students Play

1. Choose a difficulty level.
2. Click `Hear Word` to listen to the target.
3. Use the IPA keyboard to enter the transcription.
4. Submit the answer to receive immediate feedback.
5. Build streaks, earn XP, and review missed items.

Slashes are optional when students submit answers. The checker ignores slashes, brackets, and spaces so students can focus on the transcription itself.

## Difficulty Levels

- `Level 1: Warm-Up Words` covers single-syllable words and common segment contrasts.
- `Level 2: Contrast Builder` focuses on vowels, fricatives, affricates, and diphthongs.
- `Level 3: Stress and Syllables` adds multisyllabic words and primary stress.
- `Level 4: Clinic Mode` uses longer words with rhotics, reduced vowels, and stress patterns.

## Run Locally

Open `index.html` in a browser.

For a local server, run this from the project folder:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

No package installation or build step is required.

## Customize the Word Bank

Edit the `levels` array near the top of `script.js`.

Each item looks like this:

```js
{ word: "phonetics", ipa: "fəˈnɛtɪks", hint: "Stress the second syllable" }
```

The scoring normalizer ignores slashes, brackets, and spaces. It treats `ɡ` and `g` as equivalent, and it accepts `r` for the English rhotic convention used in CDS 2100.

To add another accepted answer later, the word bank can be extended to support alternate target forms. The current version uses one target transcription per word.

## GitHub Pages

This project is deployed with GitHub Actions and GitHub Pages. The workflow lives at:

`.github/workflows/deploy-pages.yml`

Every push to `main` triggers a Pages deployment.

If setting up a fresh copy of the repository:

1. Push the project to a GitHub repository.
2. Open the repository settings.
3. Go to Pages.
4. Set the source to `GitHub Actions`.
5. Push to `main` and wait for the Pages workflow to finish.

## Teaching Notes

The current answer key uses broad General American English transcriptions and writes the English rhotic as `r` for CDS 2100. Narrow transcription can be added later as a separate mode with diacritics and stricter scoring.

The browser voice comes from the user's device through the Web Speech API. Pronunciation quality can vary slightly by browser and operating system, so instructors should review the word bank and decide which targets work best for their course.

## Project Structure

- `index.html` contains the page structure.
- `styles.css` controls the visual design and responsive layout.
- `script.js` contains the word bank, IPA keyboard, speech synthesis, scoring, badges, and game logic.
- `.github/workflows/deploy-pages.yml` deploys the static site to GitHub Pages.

## Roadmap Ideas

- Add narrow transcription mode.
- Support multiple accepted transcriptions for dialectal or course-specific variants.
- Add instructor-editable word sets.
- Add a printable or downloadable score summary.
- Add themed review rounds for vowels, place/manner/voicing, stress, and clinical terminology.
