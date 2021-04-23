//Flash Cards
//An application with 3 buttons that ask questions. For instance, they might ask "What is the capital of Indiana?". Each button should have a data-answer attribute that lists the answer.
//When a button is clicked, display the answer to the button's question in a div. Use only one function, and that function must make use of the button's data-attribute.

var txtAnswer = document.getElementById("txtAnswer");
var b1 = document.getElementById("b1");
var b2 = document.getElementById("b2");
var b3 = document.getElementById("b3");

b1.addEventListener("click", getAnswer);
b2.addEventListener("click", getAnswer);
b3.addEventListener("click", getAnswer);

function getAnswer(event) {
let answer = event.target.getAttribute("data-answer");
txtAnswer.innerHTML = answer;
}