// ambientSounds.js

// Map each button ID to its corresponding audio file in AmbientMp3 folder
const ambientSounds = {
    rain: "AmbientMp3/rain.mp3",
    thunder: "AmbientMp3/thunder.mp3",
    waves: "AmbientMp3/waves.mp3",
    wind: "AmbientMp3/wind.mp3",
    gentlebreeze: "AmbientMp3/gentlebreeze.mp3",
    fire: "AmbientMp3/fire.mp3",
    crickets: "AmbientMp3/crickets.mp3",
    whiteNoise: "AmbientMp3/whiteNoise.mp3",
    singingBowl: "AmbientMp3/singingbowl.mp3",
    piano : "AmbientMp3/inthesea.mp3"
};

// Object to hold Audio elements
const audioElements = {};

// Initialize audio elements
for (const [key, src] of Object.entries(ambientSounds)) {
    const audio = new Audio(src);
    audio.loop = true; // Loop sound continuously
    audio.volume = 0.5; // Default volume
    audioElements[key] = audio;
}

// Toggle function for each button
function toggleSound(key) {
    const button = document.getElementById(key);
    const audio = audioElements[key];

    if (!audio) return;

    if (audio.paused) {
        audio.play();
        button.classList.add("active-shuffle"); // Highlight active button
    } else {
        audio.pause();
        button.classList.remove("active-shuffle"); // Remove highlight
    }
}

// Adjust volume for the slider
function setVolume(key, value) {
    if (audioElements[key]) {
        audioElements[key].volume = value / 100; // Slider 0-100 -> volume 0-1
    }
}

// Add event listeners for buttons and sliders
for (const key of Object.keys(ambientSounds)) {
    const button = document.getElementById(key);
    const slider = document.getElementById(key + "Slider");

    if (button) {
        button.addEventListener("click", () => toggleSound(key));
    }

    if (slider) {
        slider.addEventListener("input", (e) => setVolume(key, e.target.value));
    }
}