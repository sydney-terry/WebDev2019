var count = 0
var ranNum = Math.round(Math.random()*99) + 1;
console.log(ranNum)
function sendData(form) {
    var guessNum = form.inputbox.value;
    console.log(guessNum);
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
    msg = "You got it! Tries: " + count;
   let myImg = document.createElement('image');
    myImg.src = "/thumbsup.jpeg";
   let photo = document.querySelector('br');
    photo.appendChild(myImg);
    //var src = document.getElementsByTagName("main");
    //var myImg = document.createElement("img");
   // myImg.src = "/thumbsup.jpeg";
    //src.appendChild(myImg);
} else {
    msg = "wrong, try again";
}
    document.getElementById("msg").innerText = msg;

} 

