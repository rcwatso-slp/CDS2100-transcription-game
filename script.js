const levels = [
  {
    id: "warmup",
    name: "Level 1",
    title: "Warm-Up Words",
    detail: "single syllables, common segments",
    hint: "Focus on broad transcription. Slashes are optional.",
    words: [
      { word: "cat", ipa: "kæt", hint: "Low front vowel" },
      { word: "ship", ipa: "ʃɪp", hint: "Begins with a voiceless postalveolar fricative" },
      { word: "goose", ipa: "ɡus", hint: "High back tense vowel" },
      { word: "thin", ipa: "θɪn", hint: "Begins with a voiceless interdental fricative" },
      { word: "judge", ipa: "dʒʌdʒ", hint: "Affricates at both edges" },
      { word: "red", ipa: "rɛd", hint: "American English rhotic onset" },
      { word: "sing", ipa: "sɪŋ", hint: "Ends with a velar nasal" },
      { word: "shoe", ipa: "ʃu", hint: "Two IPA symbols" },
      { word: "leaf", ipa: "lif", hint: "High front tense vowel" },
      { word: "back", ipa: "bæk", hint: "Final sound is /k/" }
    ]
  },
  {
    id: "contrast",
    name: "Level 2",
    title: "Contrast Builder",
    detail: "vowels, fricatives, affricates",
    hint: "Watch tense/lax vowels and place of articulation.",
    words: [
      { word: "teeth", ipa: "tiθ", hint: "Final interdental fricative" },
      { word: "then", ipa: "ðɛn", hint: "Begins voiced, not voiceless" },
      { word: "measure", ipa: "mɛʒɚ", hint: "Contains /ʒ/ and an r-colored vowel" },
      { word: "choice", ipa: "tʃɔɪs", hint: "Begins with a voiceless affricate" },
      { word: "zoo", ipa: "zu", hint: "Voiced alveolar fricative onset" },
      { word: "phone", ipa: "foʊn", hint: "Diphthong in the nucleus" },
      { word: "cup", ipa: "kʌp", hint: "Mid central-ish stressed vowel in English" },
      { word: "coin", ipa: "kɔɪn", hint: "Diphthong /ɔɪ/" },
      { word: "bath", ipa: "bæθ", hint: "Final voiceless interdental" },
      { word: "vision", ipa: "vɪʒən", hint: "Medial /ʒ/" }
    ]
  },
  {
    id: "syllables",
    name: "Level 3",
    title: "Stress and Syllables",
    detail: "multisyllabic words",
    hint: "Primary stress matters here. Use ˈ before the stressed syllable.",
    words: [
      { word: "banana", ipa: "bəˈnænə", hint: "Stress the middle syllable" },
      { word: "computer", ipa: "kəmˈpjutɚ", hint: "Stress the second syllable" },
      { word: "phonetics", ipa: "fəˈnɛtɪks", hint: "Stress the second syllable" },
      { word: "syllable", ipa: "ˈsɪləbəl", hint: "Stress the first syllable" },
      { word: "professor", ipa: "prəˈfɛsɚ", hint: "Stress the second syllable" },
      { word: "tomato", ipa: "təˈmeɪtoʊ", hint: "General American pronunciation" },
      { word: "record", ipa: "ˈrɛkɚd", hint: "Noun pronunciation" },
      { word: "produce", ipa: "ˈproʊdus", hint: "Noun pronunciation" },
      { word: "campus", ipa: "ˈkæmpəs", hint: "Stress the first syllable" },
      { word: "language", ipa: "ˈlæŋɡwɪdʒ", hint: "Final affricate" }
    ]
  },
  {
    id: "challenge",
    name: "Level 4",
    title: "Clinic Mode",
    detail: "longer words, rhotics, reduced vowels",
    hint: "Use broad General American IPA with stress where helpful.",
    words: [
      { word: "articulation", ipa: "ɑrˌtɪkjəˈleɪʃən", hint: "Primary stress near the end" },
      { word: "transcription", ipa: "trænˈskrɪpʃən", hint: "Contains /ʃ/" },
      { word: "phonology", ipa: "fəˈnɑlədʒi", hint: "Stress the second syllable" },
      { word: "diagnostic", ipa: "ˌdaɪəɡˈnɑstɪk", hint: "Primary stress on /nɑs/" },
      { word: "acoustic", ipa: "əˈkustɪk", hint: "Stress the second syllable" },
      { word: "vocalization", ipa: "ˌvoʊkələˈzeɪʃən", hint: "Primary stress before /ʃən/" },
      { word: "intervention", ipa: "ˌɪntɚˈvɛnʃən", hint: "Contains r-colored vowel" },
      { word: "assessment", ipa: "əˈsɛsmənt", hint: "Stress the second syllable" },
      { word: "laryngeal", ipa: "ləˈrɪndʒiəl", hint: "Contains /dʒ/" },
      { word: "coarticulation", ipa: "koʊɑrˌtɪkjəˈleɪʃən", hint: "Starts with /koʊ/" }
    ]
  }
];

const keyboardGroups = [
  {
    id: "pulmonic",
    label: "Consonants",
    keys: ["p", "b", "t", "d", "ʈ", "ɖ", "c", "ɟ", "k", "ɡ", "q", "ɢ", "ʔ", "m", "ɱ", "n", "ɳ", "ɲ", "ŋ", "ɴ", "ʙ", "r", "ʀ", "ɾ", "ɽ", "ɸ", "β", "f", "v", "θ", "ð", "s", "z", "ʃ", "ʒ", "ʂ", "ʐ", "ç", "ʝ", "x", "ɣ", "χ", "ʁ", "ħ", "ʕ", "h", "ɦ", "ɬ", "ɮ", "ʋ", "ɹ", "ɻ", "j", "ɰ", "l", "ɭ", "ʎ", "ʟ"]
  },
  {
    id: "vowels",
    label: "Vowels",
    keys: ["i", "y", "ɨ", "ʉ", "ɯ", "u", "ɪ", "ʏ", "ʊ", "e", "ø", "ɘ", "ɵ", "ɤ", "o", "ə", "ɛ", "œ", "ɜ", "ɞ", "ʌ", "ɔ", "æ", "ɐ", "a", "ɶ", "ɑ", "ɒ", "ɚ", "ɝ"]
  },
  {
    id: "american",
    label: "English",
    keys: ["tʃ", "dʒ", "eɪ", "aɪ", "ɔɪ", "aʊ", "oʊ", "ju", "əl", "ən", "ɾ", "ʍ", "w"]
  },
  {
    id: "marks",
    label: "Marks",
    keys: ["/", "[", "]", "ˈ", "ˌ", ".", "ː", "ˑ", "̆", "̃", "̩", "̯", "ʰ", "ʷ", "ʲ", "ˠ", "ˤ", "̪", "̬", "̥", "̹", "̜", "̟", "̠", "̚"]
  }
];

const badges = [
  { id: "first", label: "First Check", earned: (s) => s.attempts >= 1 },
  { id: "streak3", label: "3-Streak", earned: (s) => s.bestStreak >= 3 },
  { id: "streak5", label: "5-Streak", earned: (s) => s.bestStreak >= 5 },
  { id: "level", label: "Level Clear", earned: (s) => s.correct >= 8 },
  { id: "careful", label: "No-Hint Round", earned: (s) => s.correctWithoutHints >= 5 }
];

const state = {
  levelIndex: 0,
  wordIndex: 0,
  score: 0,
  xp: 0,
  streak: 0,
  bestStreak: 0,
  hearts: 3,
  attempts: 0,
  correct: 0,
  correctWithoutHints: 0,
  hintUsed: false,
  soundOn: true,
  activeKeyboard: "pulmonic",
  history: []
};

const els = {
  levelStrip: document.querySelector("#levelStrip"),
  challengeTitle: document.querySelector("#challengeTitle"),
  levelName: document.querySelector("#levelName"),
  wordHint: document.querySelector("#wordHint"),
  roundCount: document.querySelector("#roundCount"),
  answerInput: document.querySelector("#answerInput"),
  keyboardTabs: document.querySelector("#keyboardTabs"),
  keyboardPanel: document.querySelector("#keyboardPanel"),
  feedback: document.querySelector("#feedback"),
  scoreValue: document.querySelector("#scoreValue"),
  accuracyValue: document.querySelector("#accuracyValue"),
  streakValue: document.querySelector("#streakValue"),
  xpValue: document.querySelector("#xpValue"),
  heartsValue: document.querySelector("#heartsValue"),
  badgeList: document.querySelector("#badgeList"),
  historyList: document.querySelector("#historyList"),
  soundToggle: document.querySelector("#soundToggle"),
  speakBtn: document.querySelector("#speakBtn"),
  hintBtn: document.querySelector("#hintBtn"),
  checkBtn: document.querySelector("#checkBtn"),
  nextBtn: document.querySelector("#nextBtn"),
  backspaceBtn: document.querySelector("#backspaceBtn"),
  clearBtn: document.querySelector("#clearBtn"),
  resetBtn: document.querySelector("#resetBtn")
};

function currentLevel() {
  return levels[state.levelIndex];
}

function currentWord() {
  return currentLevel().words[state.wordIndex];
}

function normalizeIpa(value) {
  return value
    .trim()
    .replaceAll("ɡ", "g")
    .replaceAll("ɹ", "r")
    .replace(/[\/\[\]\s]/g, "")
    .normalize("NFC");
}

function insertAtCursor(text) {
  const input = els.answerInput;
  const start = input.selectionStart ?? input.value.length;
  const end = input.selectionEnd ?? input.value.length;
  input.value = input.value.slice(0, start) + text + input.value.slice(end);
  input.focus();
  input.setSelectionRange(start + text.length, start + text.length);
}

function speakWord() {
  if (!state.soundOn || !("speechSynthesis" in window)) return;
  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(currentWord().word);
  utterance.lang = "en-US";
  utterance.rate = 0.86;
  window.speechSynthesis.speak(utterance);
}

function levenshtein(a, b) {
  const left = Array.from(a);
  const right = Array.from(b);
  const dp = Array.from({ length: left.length + 1 }, () => Array(right.length + 1).fill(0));
  for (let i = 0; i <= left.length; i += 1) dp[i][0] = i;
  for (let j = 0; j <= right.length; j += 1) dp[0][j] = j;
  for (let i = 1; i <= left.length; i += 1) {
    for (let j = 1; j <= right.length; j += 1) {
      const cost = left[i - 1] === right[j - 1] ? 0 : 1;
      dp[i][j] = Math.min(dp[i - 1][j] + 1, dp[i][j - 1] + 1, dp[i - 1][j - 1] + cost);
    }
  }
  return dp[left.length][right.length];
}

function renderLevels() {
  els.levelStrip.innerHTML = "";
  levels.forEach((level, index) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `levelButton${index === state.levelIndex ? " active" : ""}`;
    button.innerHTML = `<strong>${level.name}</strong><span>${level.title}</span>`;
    button.addEventListener("click", () => {
      state.levelIndex = index;
      state.wordIndex = 0;
      startRound();
    });
    els.levelStrip.append(button);
  });
}

function renderKeyboardTabs() {
  els.keyboardTabs.innerHTML = "";
  keyboardGroups.forEach((group) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `tabButton${group.id === state.activeKeyboard ? " active" : ""}`;
    button.textContent = group.label;
    button.setAttribute("role", "tab");
    button.setAttribute("aria-selected", String(group.id === state.activeKeyboard));
    button.addEventListener("click", () => {
      state.activeKeyboard = group.id;
      renderKeyboardTabs();
      renderKeyboard();
    });
    els.keyboardTabs.append(button);
  });
}

function renderKeyboard() {
  const group = keyboardGroups.find((item) => item.id === state.activeKeyboard) ?? keyboardGroups[0];
  els.keyboardPanel.innerHTML = "";
  group.keys.forEach((key) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `keyButton${key.length > 1 ? " wide" : ""}`;
    button.textContent = key;
    button.title = `Insert ${key}`;
    button.addEventListener("click", () => insertAtCursor(key));
    els.keyboardPanel.append(button);
  });
}

function renderStats() {
  const accuracy = state.attempts === 0 ? 0 : Math.round((state.correct / state.attempts) * 100);
  els.scoreValue.textContent = String(state.score);
  els.accuracyValue.textContent = `${accuracy}%`;
  els.streakValue.textContent = String(state.streak);
  els.xpValue.textContent = String(state.xp);
  els.heartsValue.textContent = "♥".repeat(state.hearts) + "♡".repeat(3 - state.hearts);

  els.badgeList.innerHTML = "";
  badges.forEach((badge) => {
    const earned = badge.earned(state);
    const item = document.createElement("div");
    item.className = `badge${earned ? "" : " locked"}`;
    item.textContent = `${earned ? "✓" : "○"} ${badge.label}`;
    els.badgeList.append(item);
  });

  els.historyList.innerHTML = "";
  state.history.slice(0, 8).forEach((entry) => {
    const li = document.createElement("li");
    li.innerHTML = `<b>${entry.word} ${entry.correct ? "✓" : "×"}</b><span>Your answer: ${entry.answer || "(blank)"} | Target: /${entry.target}/</span>`;
    els.historyList.append(li);
  });
}

function startRound() {
  const level = currentLevel();
  const item = currentWord();
  state.hintUsed = false;
  els.challengeTitle.textContent = item.word;
  els.levelName.textContent = `${level.name}: ${level.title}`;
  els.wordHint.textContent = level.hint;
  els.roundCount.textContent = `${state.wordIndex + 1} / ${level.words.length}`;
  els.answerInput.value = "";
  els.feedback.className = "feedback";
  els.feedback.textContent = "Listen as often as you need, then submit a broad IPA transcription.";
  els.nextBtn.disabled = true;
  els.checkBtn.disabled = false;
  renderLevels();
  renderStats();
  window.setTimeout(speakWord, 250);
}

function checkAnswer() {
  const item = currentWord();
  const answer = els.answerInput.value.trim();
  const normalizedAnswer = normalizeIpa(answer);
  const normalizedTarget = normalizeIpa(item.ipa);
  const correct = normalizedAnswer === normalizedTarget;
  const distance = levenshtein(normalizedAnswer, normalizedTarget);

  state.attempts += 1;
  if (correct) {
    const hintPenalty = state.hintUsed ? 5 : 0;
    const streakBonus = Math.min(state.streak * 2, 12);
    const points = 20 + streakBonus - hintPenalty;
    state.correct += 1;
    state.streak += 1;
    state.bestStreak = Math.max(state.bestStreak, state.streak);
    state.score += points;
    state.xp += 15;
    if (!state.hintUsed) state.correctWithoutHints += 1;
    els.feedback.className = "feedback correct";
    els.feedback.textContent = `Correct: /${item.ipa}/. +${points} points.`;
  } else {
    state.streak = 0;
    state.hearts = Math.max(0, state.hearts - 1);
    state.xp += 3;
    els.feedback.className = "feedback missed";
    els.feedback.textContent = `Not quite. Target: /${item.ipa}/. Your answer was ${distance} symbol edit${distance === 1 ? "" : "s"} away.`;
  }

  state.history.unshift({ word: item.word, answer, target: item.ipa, correct });
  els.nextBtn.disabled = false;
  els.checkBtn.disabled = true;
  renderStats();
}

function nextWord() {
  const level = currentLevel();
  if (state.wordIndex < level.words.length - 1) {
    state.wordIndex += 1;
  } else {
    state.wordIndex = 0;
    state.levelIndex = Math.min(levels.length - 1, state.levelIndex + 1);
    state.hearts = 3;
  }
  startRound();
}

function showHint() {
  state.hintUsed = true;
  els.feedback.className = "feedback";
  els.feedback.textContent = `Hint: ${currentWord().hint}`;
}

function resetGame() {
  Object.assign(state, {
    levelIndex: 0,
    wordIndex: 0,
    score: 0,
    xp: 0,
    streak: 0,
    bestStreak: 0,
    hearts: 3,
    attempts: 0,
    correct: 0,
    correctWithoutHints: 0,
    hintUsed: false,
    history: []
  });
  startRound();
}

els.speakBtn.addEventListener("click", speakWord);
els.hintBtn.addEventListener("click", showHint);
els.checkBtn.addEventListener("click", checkAnswer);
els.nextBtn.addEventListener("click", nextWord);
els.resetBtn.addEventListener("click", resetGame);
els.soundToggle.addEventListener("click", () => {
  state.soundOn = !state.soundOn;
  els.soundToggle.textContent = state.soundOn ? "🔊" : "🔇";
  els.soundToggle.setAttribute("aria-pressed", String(state.soundOn));
});
els.backspaceBtn.addEventListener("click", () => {
  const input = els.answerInput;
  const cursor = input.selectionStart ?? input.value.length;
  if (cursor === 0) return;
  input.value = input.value.slice(0, cursor - 1) + input.value.slice(input.selectionEnd ?? cursor);
  input.focus();
  input.setSelectionRange(cursor - 1, cursor - 1);
});
els.clearBtn.addEventListener("click", () => {
  els.answerInput.value = "";
  els.answerInput.focus();
});
els.answerInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter" && !els.checkBtn.disabled) checkAnswer();
});

renderKeyboardTabs();
renderKeyboard();
startRound();
