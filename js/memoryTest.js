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

var letterposition = 0;

var sentenceResp;

/* var letterContainer = document.createElement("div");

letterContainer.setAttribute("id", "letter-container");
letterContainer.setAttribute("style", "text-align:center;margin-top:40vh;font-size:10vh;");

function displayLetter() {
    document.getElementById("app").appendChild(letterContainer);
    setTimeout(function() {
        letterContainer.remove();
        return true;
    }, iTime);
} */

var btnTrue = document.createElement("button");
btnTrue.appendChild(document.createTextNode("Verdadero"));

var btnFalse = document.createElement("button");
btnFalse.appendChild(document.createTextNode("Falso"));
btnTrue.setAttribute("style", "margin:10px;font-size:3vh;border: 2px solid #008CBA;");
btnFalse.setAttribute("style", "margin:10px;font-size:3vh;border: 2px solid #008CBA;");

var questionElem = document.createElement("h3");
questionElem.setAttribute("id", "question-elem");
questionElem.setAttribute("style", "text-align:center;margin:auto;margin-top:10vh;font-family: Calibri;");
questionElem.appendChild(document.createTextNode("¿Esta frase tiene sentido?"));
questionElem.appendChild(document.createElement("br"));
questionElem.appendChild(document.createElement("br"));


function showQuestion() {
    if (!document.body.contains(document.getElementById('question-elem'))) {
        document.getElementById("sentence-container").appendChild(questionElem);
        document.getElementById("sentence-container").appendChild(btnTrue);
        document.getElementById("sentence-container").appendChild(btnFalse);
        if (document.body.contains(document.getElementById('clic-to-continue'))) {
            document.getElementById('clic-to-continue').remove();
        }
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
        document.getElementById("letter").innerHTML = letters[i].toUpperCase();
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
    letterContainer.appendChild(document.createTextNode(letters[index].toUpperCase()));
    letterContainer.setAttribute("id", "letter-container");
    letterContainer.setAttribute("style", "text-align:center;padding-top:30vh;padding-bottom:30vh;font-size:6vh;background-color:lightgray;position: relative;top: 50%;transform: translateY(15%);");
    document.getElementById("app").appendChild(letterContainer);
    await sleep(iTime * 1000);
    letterContainer.remove();
    return letters[index].toUpperCase();
}

function buttonValue(el, letter, limit) {
    if (el.value === "  " && this.letterposition <= limit) {
        this.letterposition++;
        document.getElementById("input-letters").value += letter;
        el.value = this.letterposition;
    } else if (this.letterposition > el.value) {

    } else {
        el.value = "  ";
        document.getElementById("input-letters").value = document.getElementById("input-letters").value.slice(0, -1);
        if (this.letterposition > 0) {
            this.letterposition--;
        }
    }
}

function borrarLetra() {
    var allBtns = document.getElementsByTagName("input");

    if (document.getElementById("input-letters").value.charAt(document.getElementById("input-letters").value.length - 1) == "_") {
        document.getElementById("input-letters").value = document.getElementById("input-letters").value.slice(0, -1);
        this.letterposition--;
        return
    }

    for (var i = 0; i < allBtns.length; i++) {
        if (allBtns[i].value == this.letterposition) {
            document.getElementById("input-letters").value = document.getElementById("input-letters").value.slice(0, -1);
            allBtns[i].value = "  ";
            if (this.letterposition > 0) {
                this.letterposition--;
            }
            break;
        }
    }
}

function enBlancoLetra(limit) {
    if (this.letterposition <= limit) {
        this.letterposition++;
        document.getElementById("input-letters").value += "_";
    }
}

function displayLetterForm(lettersToDisplay, limit) {
    var letterFormContainer = document.createElement("div");

    var table = document.createElement("table");
    table.setAttribute("id", "letter-table");
    letterFormContainer.setAttribute("style", "width:100%;text-align:center;font-family: Calibri;");
    table.setAttribute("style", "margin: 10vh auto;");

    var title = document.createElement("h3");
    title.setAttribute("style", "text-align:center;margin: 10vh auto;;margin-top:2vh;");
    title.appendChild(document.createTextNode("Seleccione las letras según el orden de presentación."));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Utilice el botón "En blanco" para llenar las letras olvidadas.'));
    letterFormContainer.appendChild(title);

    var tr = [],
        td = [];
    tr.length = 4;
    td.length = 12;

    var lidx = 0;
    for (var i = 0; i < tr.length; i++) {
        tr[i] = document.createElement("tr");
        tr[i].setAttribute("style", "text-align:left;font-size:6vh");
        table.appendChild(tr[i]);

        for (let n = 0; n < 3; n++) {
            var tempobj;
            td[lidx] = document.createElement("td");
            td[lidx].setAttribute("id", "letter-" + lettersToDisplay[lidx].toUpperCase());
            td[lidx].appendChild(document.createTextNode(lettersToDisplay[lidx].toUpperCase()));
            tr[i].appendChild(td[lidx]);
            tempobj = document.createElement("input");
            tempobj.setAttribute("type", "button");
            tempobj.setAttribute("value", "  ");
            tempobj.setAttribute("id", "btn-" + lettersToDisplay[lidx].toUpperCase());
            tempobj.setAttribute("onclick", "return buttonValue(this, '" + lettersToDisplay[lidx].toUpperCase() + "', " + limit + ");");
            tempobj.setAttribute("style", "margin-right:10vw;margin-bottom:1vw;padding:2vw;font-size:3vh;");
            tr[i].appendChild(tempobj);
            lidx++;
        }
    }

    inputletters = document.createElement("input");
    inputletters.setAttribute("disabled", true);
    inputletters.setAttribute("style", "margin: 5vh auto; font-size:4vh;color: black;background-color:white;border: 0;");
    inputletters.setAttribute("id", "input-letters");

    var btnBorrar = document.createElement("button");
    btnBorrar.appendChild(document.createTextNode("Borrar"));
    btnBorrar.setAttribute("style", "margin-right: 5vh;font-size:3vh;");
    btnBorrar.setAttribute("onclick", "return borrarLetra();");

    var btnEnBlanco = document.createElement("button");
    btnEnBlanco.appendChild(document.createTextNode("En blanco"));
    btnEnBlanco.setAttribute("style", "margin-right: 5vh;font-size:3vh;");
    btnEnBlanco.setAttribute("onclick", "return enBlancoLetra(" + limit + ");");

    letterFormContainer.appendChild(table);
    letterFormContainer.appendChild(inputletters);
    letterFormContainer.appendChild(btnBorrar);
    letterFormContainer.appendChild(btnEnBlanco);
    document.getElementById("app").appendChild(letterFormContainer);

}

async function waitCliker() {
    do {
        await sleep(300)
            /* console.log("wait..") */
    } while (typeof sentenceResp === "undefined");
    return new Promise(resolve => setTimeout(resolve, 300))
}

async function waitClikerTime(time) {
    var timeleft = time;
    setInterval(function() {
        timeleft--;
    }, 1000);
    do {
        await sleep(100);
    } while (typeof sentenceResp === "undefined" && timeleft >= 1);
    return new Promise(resolve => setTimeout(resolve, 100))
}

async function displaySentence(sentences, index, iTime) {

    var sentenceContainer = document.createElement("div");
    sentenceContainer.setAttribute("style", "text-align:center;margin-top:30vh;font-family: Calibri;");
    sentenceContainer.setAttribute("id", "sentence-container");

    var sentenceElem = document.createElement("h2");
    sentenceElem.setAttribute("style", "text-align:center;");

    var clicElem = document.createElement("h3");
    clicElem.setAttribute("style", "text-align:center;margin:auto;");
    clicElem.setAttribute("id", "clic-to-continue");

    var timecount = 0;
    /* var timeCounter =  */
    setInterval(function() {
        timecount++;
    }, 1000);

    sentenceElem.appendChild(document.createTextNode(sentences.sentences[index].sentence));
    clicElem.appendChild(document.createTextNode("Cuando termine de leer la frase, presione el ratón para continuar"));
    document.getElementById("app").appendChild(sentenceContainer);
    document.getElementById("sentence-container").appendChild(sentenceElem);
    document.getElementById("sentence-container").appendChild(clicElem);
    window.addEventListener("click", showQuestion);
    if (iTime == -1) {
        await waitCliker();
    } else {
        await waitClikerTime(iTime);
        window.removeEventListener("click", showQuestion);
    }

    sentenceContainer.remove();
    sentenceElem.appendChild(document.createTextNode(''));
    sentenceElem.remove();
    questionElem.remove();
    response = sentenceResp;
    sentenceResp = undefined;
    /* clearInterval(timeCounter); */
    return JSON.stringify({ response: response, time: timecount });
}

function displayPracticeIntro(displayPractice) {
    var textContainer = document.createElement("div");
    textContainer.setAttribute("style", "width:100%;height:100%;text-align:center;font-family: Calibri;");
    textContainer.setAttribute("id", "practice-text-container");
    var title = document.createElement("h3");
    title.setAttribute("style", "text-align:center;margin: 20vh auto;line-height: 200%;");
    title.appendChild(document.createTextNode("En esta fase de práctica, las letras van a aparecer en la pantalla, una a la vez."));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Intente memorizar cada letra en el orden que fueron presentadas.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Después de 2-3 letras presentadas, observara una pantalla en la cual aparece una lista de 12 posibles letras con una casilla a la par de cada una.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Su tarea es recordar cada letra en el orden en el cual fueron presentadas.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Para esto, utilize el ratón y seleccione cada casilla abajo de cada letra. Las letras seleccionadas apareceran abajo de la pantalla.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Presione el ratón para continuar.'));

    textContainer.appendChild(title);
    document.getElementById("app").appendChild(textContainer);
    window.addEventListener("click", launch);

    function launch() {
        displayPractice.call();
        window.removeEventListener("click", launch);
        document.getElementById("practice-text-container").remove();
    }
}

function displayLetterPracticeIntro(displayPractice) {
    var textContainer = document.createElement("div");
    textContainer.setAttribute("style", "width:100%;height:100%;text-align:center;font-family: Calibri;");
    textContainer.setAttribute("id", "practice-text-container");
    var title = document.createElement("h3");
    title.setAttribute("style", "text-align:center;margin: 20vh auto;line-height: 200%;");
    title.appendChild(document.createTextNode("Cuando haya seleccionado todas las letras, y este seguro de que están en el orden correcto, presione el botón ENTER en la esquina inferior derecha de la pantalla."));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Si comete un error, presione el botón BORRAR para corregir su respuesta.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Si ha olvidado una de las letras, presione el botón EN BLANCO para indicar la letra faltante.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Recuerde que es muy importante que indique las letras en el mismo orden que las ha visto. Si olvida una, use el botón EN BLANCO para indicar su posición.'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('¿Tiene alguna pregunta hasta ahora?'));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode('Cuando este listo, presione el ratón para empezar con la práctica con las letras.'));

    textContainer.appendChild(title);
    document.getElementById("app").appendChild(textContainer);
    window.addEventListener("click", launch);

    function launch() {
        displayPractice.call();
        window.removeEventListener("click", launch);
        document.getElementById("practice-text-container").remove();
    }

}

function compareLeterrs(letters, responseLetters) {
    let hits = 0;
    for (let index = 0; index < letters.length; index++) {
        if (letters[index] == responseLetters[index]) {
            hits++;
        }
    }
    var textContainer = document.createElement("div");
    textContainer.setAttribute("style", "width:100%;height:100%;text-align:center;font-family: Calibri;");
    textContainer.setAttribute("id", "letterhits-container");
    var title = document.createElement("h3");
    title.setAttribute("style", "text-align:center;margin: 20vh auto;line-height: 200%;");
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createElement("br"));
    title.appendChild(document.createTextNode("Usted ha recordado" + hits + "letras correctas de " + letters.length));
    title.appendChild(document.createElement("br"));
    textContainer.appendChild(title);
    document.getElementById("app").appendChild(textContainer);
}