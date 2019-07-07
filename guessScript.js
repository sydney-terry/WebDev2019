let randomNum = Math.floor(Math.random() * Math.floor(99));

makeGuess = (form) => {
    let guessedNum = parseInnt(form.inbox.value, 10);
    form.inputbox.value = "";
    document.getElementById("response").innerHTML = "You guessed " + guessedNum
}