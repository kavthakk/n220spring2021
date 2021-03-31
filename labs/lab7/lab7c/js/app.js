// 2) Tip calculator

//PROBLEM LINE: HTML 13!!!

let dvResponse = document.getElementById("dvResponse");
let txtSub = document.getElementById("txtSub");

function calcTip() {
  var subTotal = Number(txtSub.value);
  var tipRaw = Number(subTotal * .25);
  var tip = tipRaw.toFixed(2);
  var totalRaw = Number(subTotal * 1.25);
  var totalValue = totalRaw.toFixed(2);

  console.log("Tip: $" + tip + " Total to pay: $" + totalValue);
}