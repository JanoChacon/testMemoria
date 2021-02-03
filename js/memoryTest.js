const letters = ['a', 'b', 'c', 'd', 'e'];

const sentences = ['hola como estas', 'yo estoy bien y tu como estas', 'que bueno me alegro mucho ',
    'como anda la cosa alla por tus lares', 'estas frases no tienen sentido xd'
];

function displayLetters(letters, iTime) {
    let i = 0;
    var displayletter = setInterval(function() {
        document.getElementById("letter").innerHTML = letters[i];
        i++;
        if (i == letters.length) {
            clearInterval(displayletter);
        }
    }, iTime);
}

function displayLetter(letters, index, iTime) {
    var displayletter = setInterval(function() {
        alert(letters[index]);
        clearInterval(displayletter);
    }, iTime);
}

function displaySentence(sentences, index, iTime) {
    document.getElementById("sentence-container").style.display = "block";
    document.getElementById("sentence").innerHTML = sentences[index];
    return false;
}

function displaySentences(sentence, iTime) {
    var h1 = document.createElement("h1");
    h1.appendChild(document.createTextNode(sentence));
    document.getElementById("app").appendChild(h1);
}