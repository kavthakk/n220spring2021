/*Bad word catcher with loops ~24:00-30:00 in the video
For the purposes of this exercise, bad words are: clear, water, tires.
Create an application that:
Takes input from a user using a simple text input field.
Splits the string on spaces
Loops through  the array looking for bad words in the array
Adds 1 to a tally count when a bad word is found
Outputs to the document
If any bad words were found (found / not found)
How many bad words, in total, were found
Clears out the text field so the user can input a new string
For example, if the user input "clear water is clear", there are 3 bad words in the string. */

var txtWord = document.getElementById("txtWord");
var dvResult = document.getElementById("dvResult");
var dvCount = document.getElementById("dvCount");

let bad1 = "clear";
let bad2 = "water";
let bad3 = "tires";

let badCount = 0;

function badCheck() {
  let txtRaw = txtWord.value;
  let txtSplit = txtRaw.split(" ");
  //look for bad words
  for (let i = 0; i < txtSplit.length; i++) {
    if (txtSplit[i].toLowerCase() == bad1 || txtSplit[i].toLowerCase() == bad2 || txtSplit[i].toLowerCase() == bad3) {
      //tally for each bad word
      badCount += 1;
      dvResult.innerText = "found. " + badCount + " bad word(s) found.";
      //dvCount.innerHTML = number of bad words found
      
      
    } else { //dvResult.innerHTML = "found" OR "not found"
      dvResult.innerText = "not found";
      
    }
  }
}