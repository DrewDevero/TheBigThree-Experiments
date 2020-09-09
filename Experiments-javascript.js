console.log("Alston Drew Devero-Belfon");
const goodTest = [2, 3, 4, 5, 67, 34, 42, 56, "fun", "thumb", "gerung", "tungue", 22];
var bgChange = ["green", "yellow", "blue", "grey", "red"];
var currentColor = bgChange[2];
const HTMLBODY = document.body.style;
const BGCHANGE_DIV = document.getElementById("bgChange");
document.getElementById("textColor").onclick = changeTextColor;
document.getElementById("bgChange").onclick = changeBackgroundColor;
document.getElementById("numbers").onclick = numberButton;
const SHOWNUM = document.getElementById("showNum");

function changeTextColor() {
    if(currentColor == bgChange[2]) {
        HTMLBODY.color = bgChange[0];
        currentColor = bgChange[0];
    } else {
        HTMLBODY.color = bgChange[2];
        currentColor = bgChange[2];
    }
    return currentColor;
}

function changeBackgroundColor() {
    const RANDOMCOLOR = Math.floor(Math.random() * 5);
        HTMLBODY.backgroundColor = bgChange[RANDOMCOLOR];
    }

var minNum = 1;
var maxNum = 10;
var randomNum = 0;
function numberButton() {
    randomNum = Math.floor(Math.random() * maxNum) + minNum
   randomNum < 10 ? SHOWNUM.innerHTML = `${randomNum} Out Of 10` : SHOWNUM.innerHTML = "Equals 10";
    console.log(randomNum);
}




// export const capitalizeString = str => str.toUpperCase();

for (i = 0; i < goodTest.length; i++) {
    let integer = "this is the first integer in the array";
    let string = "this is the first string in the array";
    let lastInteger = "and the list ends with a switch back to an integer: ";
    let other = "continued";
    if (goodTest[i] == "fun") {
        console.log(string);
    } else if (goodTest[i] == 2) {
        console.log(integer);
    } else if (goodTest[i] == 22) {
        console.log(lastInteger);
    } else {
        console.log(other);
    }
}
console.log(goodTest.toString());

// JQuery tests:

window.addEventListener("DOMContentLoaded", function(evt) {
    var elem = document.getElementById("moreContent");
    var para = document.createElement("p");
    var text = document.createTextNode("The page just loaded.");
    para.appendChild(text);
    elem.appendChild(para);
});