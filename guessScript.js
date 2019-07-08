var count = 0
var ranNum = Math.round(Math.random()*99) + 1;
console.log(ranNum)
function sendData(form) {
    var guessNum = form.inputbox.value;
    form.inputbox.value ="";
    count = count + 1;
    console.log(count);
    var msg = ""
if (guessNum > 100) {
    msg = "Too high!"
} else if (guessNum < 0) {
    msg = "Too low!";
 } else if (isNaN(guessNum)) {
    msg = "Invalid";
} else if (guessNum==ranNum) {
    msg = "You got it! Tries: " + count
}
    document.getElementById("msg").innerHTML = msg;
} 

