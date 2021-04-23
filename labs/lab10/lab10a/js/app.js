//Color Changer
//Create an application with three grey, square divs, in a row. They should be 200px by 200px, and all floated left. Give them a margin of 5px.
//Using only one event handler, write event listeners to respond to a click on each element. Each element should change to a different color: one red, one green, and one blue. Use a data attribute on the elements to store the color to be changed to.
//The result, after clicking on the first and third, should look something like this:

var box1 = document.getElementById("box1");
var box2 = document.getElementById("box2");
var box3 = document.getElementById("box3");

box1.addEventListener("click", boxColor);
box2.addEventListener("click", boxColor);
box3.addEventListener("click", boxColor);

//only one event handler
//event listeners for click on each element
//red, green, blue
//use data attribute to store colors

function boxColor(event) {
let color = event.target.getAttribute("data-color");
event.target.style.backgroundColor = color;
}