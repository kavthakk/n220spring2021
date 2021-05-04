/* Concentration
Create a version of the 'classic' game of memory (aka concentration). There should be a 4 x 4 grid of cards laid out face-down in front of the user. When clicked, reveal the face of a card. When a second card is tapped, reveal the face of that card as well. If the two cards match, remove them from the game. If they don’t, return them to face-down and allow the user to choose two more. */

//first pile; to hold all cards at start
let cards = [dv1, dv2, dv3, dv4, dv5, dv6, dv7, dv8, dv9, dv10, dv11, dv12, dv13, dv14, dv15, dv16];
//loop to add listeners to each div
for (let i = 0; i < cards.length; i++) {
  cards[i].addEventListener("click", doFlip);
}

//the second and third piles; to hold selected cards and removed cards
let upCards = [];
//this will help trigger when the replay button pops up
let removedCards = [];

//the main *event* where the magic happens
function doFlip(event) {
//sets a variable with the card attribute defined in HTML
  let faceUp = event.target.getAttribute("data-face");
//sets the variable for the initial state of the card  
  let faceDown = "#909090";
  event.target.style.backgroundColor = faceUp; //after clicked, show color
  upCards.unshift(event.target); //put clicked card into array

  if (upCards.length > 2) {
    upCards.pop();
    //only keeps two cards in the array
  }

  // wait until there are two cards
  if (upCards.length == 2) {
    if (upCards[0].style.backgroundColor == upCards[1].style.backgroundColor) {
      //if the first two cards in the array have the same background color
      setTimeout(function () { //so it doesn't disappear without you knowing what happened
        removedCards.unshift(upCards[0]); //moves the matched cards from the 2nd pile to the 3rd
        removedCards.unshift(upCards[1]);
        upCards[0].remove(); //and removes the matched cards from the 2nd pile to make room for the next cards
        upCards[1].remove();
      }, 500);

    } else {
      setTimeout(function () {
        event.target.style.backgroundColor = faceDown
      }, 2000);
      //if not, flip them back down after 2 seconds
    }
  }

  //once all the cards are gone, show a message and a reset button
  //this is the time for the 3rd pile to shine
  if (removedCards.length == 16) {
      //the user has two options once the game is over
    let endMenu = confirm("Game over! Click 'ok' to play again, 'cancel' to close the tab.");
    if (endMenu == true) {
      //replay the game
      location.reload();
    } else {
      //end the game
      window.close();
    }
  }
}
//this is a failsafe replay button
function replayGame() {
  location.reload();
}


//Requirements
//A 4x4 grid of facedown cards
        //done
//Reveal the value of a facedown card on click
        //maybe set data-face to .innerHTML? How to actually "flip" them?
        //very similar to color changer 3 div click code
        //I'll do colors instead of text
        //done
//If two revealed cards match, remove them
        //if clicked card == other clicked card, then delete them
        //somehow have to separate these two cards from the restore
        //put them into an array to compare them?
        //yes, done.
//If two revealed cards do not match, return them to face down
        //if else, then flip back to face down
        //actually the most simple part of the thing
        //done
//A ‘replay game’ option when the game is over
        //a reset button to restore all cards
        //done
//Use setTimeout to keep both face up cards visible for two seconds before hiding / removing them
        //somehow set a delay before action: setTimeout()
        //done
        //use it for both yes match and no match, so that people can see it for some time.

//sources: w3schools, Mozilla Developer for general learning syntax and how to use certain tools and features.
//jacobenfield.com to learn how to replay a game. 
    //There's more complicated ways, but they showed me how to just refresh the page, which for me it works to replay the game. location.reload();
//thesitewizard.com showed me how to close a tab using JS. 
    //So if someone doesn't want to play the game again, they can just close the tab. Boom, easy. window.close();