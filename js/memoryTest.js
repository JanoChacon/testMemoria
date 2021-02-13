/* class Letter {
    constructor(letter, iTime) {
        this.letter = letter;
        this.iTime = iTime;
    }

    get iTime() {
        return this.iTime;
    }
}

class Sentence {
    constructor(sentence, response) {
        this.sentence = sentence;
        this.response = response;
    }

    get sentence() {
        return this.sentence;
    }

    get response() {
        return this.response;
    }
} */


var sentenceResp;

var letterContainer = document.createElement("div");

letterContainer.setAttribute("id", "letter-container");
letterContainer.setAttribute("style", "text-align:center;margin-top:40vh;font-size:10vh;");

function displayLetter() {
    document.getElementById("app").appendChild(letterContainer);
    setTimeout(function() {
        letterContainer.remove();
        return true;
    }, iTime);
}

var btnTrue = document.createElement("button");
btnTrue.appendChild(document.createTextNode("Verdadero"));

var btnFalse = document.createElement("button");
btnFalse.appendChild(document.createTextNode("Falso"));

btnTrue.setAttribute("style", "margin:10px;");
btnFalse.setAttribute("style", "margin:10px;");



var questionElem = document.createElement("h3");
questionElem.setAttribute("style", "text-align:center;margin:auto;margin-top:10vh;");
questionElem.appendChild(document.createTextNode("¿Esta frase tiene sentido?"));
questionElem.setAttribute("id", "question-elem");

function showQuestion() {
    if (!document.body.contains(document.getElementById('question-elem'))) {
        document.getElementById('clic-to-continue').remove();
        document.getElementById("sentence-container").appendChild(questionElem);
        document.getElementById("sentence-container").appendChild(btnTrue);
        document.getElementById("sentence-container").appendChild(btnFalse);
    }
}

btnTrue.addEventListener("click", function() {
    window.removeEventListener("click", showQuestion);
    sentenceResp = true;
});

btnFalse.addEventListener("click", function() {
    window.removeEventListener("click", showQuestion);
    sentenceResp = false;
});

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

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms))
}

async function displayLetter(letters, index, iTime) {
    var letterContainer = document.createElement("div");
    letterContainer.appendChild(document.createTextNode(letters[index]));
    letterContainer.setAttribute("id", "letter-container");
    letterContainer.setAttribute("style", "text-align:center;margin-top:40vh;font-size:10vh;");
    document.getElementById("app").appendChild(letterContainer);
    await sleep(iTime);
    letterContainer.remove();
    return "sucesss";
}

async function waitCliker() {
    do {
        await sleep(300)
            /* console.log("wait..") */
    } while (typeof sentenceResp === "undefined");
    return new Promise(resolve => setTimeout(resolve, 300))
}

async function displaySentence(sentences, index, iTime) {

    var sentenceContainer = document.createElement("div");
    sentenceContainer.setAttribute("style", "text-align:center;margin-top:30vh");
    sentenceContainer.setAttribute("id", "sentence-container");

    var sentenceElem = document.createElement("h2");
    sentenceElem.setAttribute("style", "text-align:center;");

    var clicElem = document.createElement("h3");
    clicElem.setAttribute("style", "text-align:center;margin:auto;");
    clicElem.setAttribute("id", "clic-to-continue");

    var timecount = 0;
    var timeCounter = setInterval(function() {
        timecount++;
    }, 1000);

    sentenceElem.appendChild(document.createTextNode(sentences.sentences[index].sentence));
    clicElem.appendChild(document.createTextNode("Cuando termine de leer la frase, presione el ratón para continuar"));
    document.getElementById("app").appendChild(sentenceContainer);
    document.getElementById("sentence-container").appendChild(sentenceElem);
    document.getElementById("sentence-container").appendChild(clicElem);
    window.addEventListener("click", showQuestion);
    await waitCliker();
    sentenceContainer.remove();
    sentenceElem.appendChild(document.createTextNode(''));
    sentenceElem.remove();
    questionElem.remove();
    response = sentenceResp;
    sentenceResp = undefined;
    /* clearInterval(timeCounter); */
    return response;
}