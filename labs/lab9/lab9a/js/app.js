//Its just average
var txtCatcher = document.getElementById("txtCatcher");
var numCrunch = document.getElementById("numCrunch");
var dvSum = document.getElementById("dvSum");
var dvAverage = document.getElementById("dvAverage");

function numCalc() {
  let numRaw = txtCatcher.value;
  let numSplit = numRaw.split(",");
  let numSum = 0;
  for (let i = 0; i < numSplit.length; i++) {
    numSum += Number(numSplit[i]);
  }
  let numAverage = 0;
  numAverage = numSum / numSplit.length;
  dvSum.innerHTML = "Sum: " + numSum;
  dvAverage.innerHTML = "Average: " + numAverage;
  //txtCatcher.value = " ";
}