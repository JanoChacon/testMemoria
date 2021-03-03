const letters = ['a', 'b', 'c', 'd', 'e', ];
const lettersopts = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l'];

const sentences = '{"sentences":[' +
    '{"sentence":"Hola como estas","response":"True" },' +
    '{"sentence":"yo estoy papafrita","response":"False" },' +
    '{"sentence":"soy una frase true","response":"True" }]}';

sentenceData = JSON.parse(sentences);

document.addEventListener("DOMContentLoaded", function() {

    async function displayPractice() {
        const timeLetter = 3;
        var value = await displaySentence(sentenceData, 1, 4);
        console.log(JSON.parse(value).response);
        await displayLetter(letters, 2, timeLetter);
        var value2 = await displaySentence(sentenceData, 2, -1);
        console.log(JSON.parse(value2).time);
        await displayLetter(letters, 3, timeLetter);
        await displaySentence(sentenceData, 0, -1);
        await displayLetter(letters, 0, timeLetter);
        displayLetterForm(lettersopts, 3);
    }

    async function displayLetterPractice() {
        const timeLetter = 4;
        await displayLetter(letters, 2, timeLetter);
        await displayLetter(letters, 3, timeLetter);
        await displayLetter(letters, 0, timeLetter);
        await displayLetter(letters, 1, timeLetter);
        await displayLetter(letters, 4, timeLetter);
        displayLetterForm(lettersopts, 5);
    }

    /* displayPractice(); */
    /* async function displayTest() {
        await displayLetter(letters, 3, 3000);
    } */
    /* displayTest() */
    /* displayLetterForm(lettersopts, 3); */
    displayLetterPracticeIntro(displayLetterPractice);

    /* displayPracticeIntro(displayPractice); */
});