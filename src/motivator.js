const phrases = [
    "Tu es plus fort que tu ne le penses ! 💪",
    "Chaque jour est une nouvelle opportunité. 🌅",
    "N'abandonne jamais, le succès est proche. 🚀",
    "Fais de ton mieux et le reste suivra. ⭐",
    "Le travail acharné paie toujours. 🎯"
];

function getMotivationalPhrase() {
    return phrases[Math.floor(Math.random() * phrases.length)];
}

module.exports = getMotivationalPhrase;

//Cette fonction retourne une phrase motivante aléatoire à chaque appel.
