//Over and Out
//Write the markup and JavaScript to place a square div on the page (100px x 100px), with a blue background. Using onmouseover and onmouseout (instead of "onclick"), change the div's color to black when the mouse is over the div, and back to blue when the mouse leaves.

var dvSquare = document.getElementById("dvSquare");

function over() {
dvSquare.style.backgroundColor = "#001aff";
}

function out() {
dvSquare.style.backgroundColor = "#000000";
}
