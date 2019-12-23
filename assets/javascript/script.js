let inlogDiv = document.getElementById("inlog-div");

function checkAnswer() {
    let inputAnswer = document.getElementById("input-answer");
    let x = inputAnswer.value.toLowerCase();
    if (x === "kola" || x === "köla" || x === "cola" || x === "cöla") {
        checkSucceeded();
    } else {
        inputAnswer.value = "";
        inputAnswer.placeholder = "Probeer opnieuw!"
    }

}

function checkSucceeded() {
    inlogDiv.className = "logged-in";
    inlogDiv.style["border-radius"] = "50%";
    setTimeout(removeLoginElement, 300);
    setTimeout(bigArea, 1000);
    setTimeout(showText, 2000);
}

function removeLoginElement() {
    document.getElementById("output-answer").style.display = "none";
    document.getElementById("input-answer").style.display = "none";
    document.getElementById("span-one").style.display = "none";
    document.getElementById("span-two").style.display = "none";
    inlogDiv.style["border-radius"] = "";
}

function bigArea() {
    inlogDiv.className = "show-everything";
}

function showText() {
    inlogDiv.className += " show-text";
}