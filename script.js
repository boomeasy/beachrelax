const quotes = [
    "Peace comes from within. Do not seek it without.",
    "Breathe in calm, breathe out tension.",
    "In the midst of movement and chaos, keep stillness inside of you.",
    "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
    "Slow down and everything you are chasing will come around and catch you.",
    "Quiet the mind and the soul will speak.",
    "Sometimes the most productive thing you can do is relax.",
    "Calmness is the cradle of power.",
    "Within you, there is a stillness and a sanctuary to which you can retreat at any time.",
    "Let go of the thoughts that don't make you strong.",
    "Tension is who you think you should be. Relaxation is who you are.",
    "The time to relax is when you don't have time for it.",
    "Almost everything will work again if you unplug it for a few minutes, including you.",
    "Your calm mind is the ultimate weapon against your challenges.",
    "Be like water. Flow, adapt, relax.",
    "Rest and be thankful.",
    "Do not let the behavior of others destroy your inner peace.",
    "Relax your mind, let your conscience be free.",
    "The greatest weapon against stress is our ability to choose one thought over another.",
    "Serenity is not freedom from the storm, but peace amid the storm."
];

let currentQuoteIndex = 0;
let isMuted = true;

const quoteText = document.getElementById('quote-text');
const unmuteBtn = document.getElementById('unmute-btn');
const youtubePlayer = document.getElementById('youtube-player');

function showQuote(index) {
    quoteText.classList.remove('visible');

    setTimeout(() => {
        quoteText.textContent = `"${quotes[index]}"`;
        quoteText.classList.add('visible');
    }, 1000);
}

function nextQuote() {
    currentQuoteIndex = (currentQuoteIndex + 1) % quotes.length;
    showQuote(currentQuoteIndex);
}

// Show first quote
showQuote(currentQuoteIndex);

// Rotate quotes every 8 seconds (gives time to read)
setInterval(nextQuote, 8000);

// Unmute button functionality
unmuteBtn.addEventListener('click', () => {
    isMuted = !isMuted;

    if (isMuted) {
        youtubePlayer.src = youtubePlayer.src.replace('mute=0', 'mute=1');
        unmuteBtn.classList.remove('unmuted');
        unmuteBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <line x1="23" y1="9" x2="17" y2="15"/>
                <line x1="17" y1="9" x2="23" y2="15"/>
            </svg>
        `;
    } else {
        youtubePlayer.src = youtubePlayer.src.replace('mute=1', 'mute=0');
        unmuteBtn.classList.add('unmuted');
        unmuteBtn.innerHTML = `
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <path d="M11 5L6 9H2v6h4l5 4V5z"/>
                <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"/>
            </svg>
        `;
    }
});
