const getMotivationalPhrase = require("./motivator");

test("La fonction retourne une phrase non vide", () => {
    const phrase = getMotivationalPhrase();
    expect(phrase.length).toBeGreaterThan(0);


});

//Ce test vérifie que la fonction retourne bien une phrase et qu’elle n’est pas vide.




