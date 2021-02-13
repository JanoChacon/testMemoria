const letters = ['a', 'b', 'c', 'd', 'e'];

const sentences = '{"sentences":[' +
    '{"sentence":"Hola como estas","response":"True" },' +
    '{"sentence":"yo estoy papafrita","response":"False" },' +
    '{"sentence":"soy una frase true","response":"True" }]}';

sentenceData = JSON.parse(sentences);

document.addEventListener("DOMContentLoaded", function() {

    async function displayPractice() {
        const timeLetter = 3000;
        var value = await displaySentence(sentenceData, 1);
        console.log(value);
        await displayLetter(letters, 2, timeLetter);
        await displaySentence(sentenceData, 2);
        await displayLetter(letters, 3, timeLetter);
        await displaySentence(sentenceData, 0);
        await displayLetter(letters, 0, timeLetter);
    }
    displayPractice();
});