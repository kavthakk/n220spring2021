//3 - Password Protected

//PROBLEM LINE: HTML 13!!!

let dvResponse = document.getElementById("dvResponse");
let txtUsername = document.getElementById("txtUsername");
let txtPassword = document.getElementById("txtPassword");

function checkInfo() {
  var username = txtUsername.value;
  var password = txtPassword.value;
  
  if (username == "Username" && password == "Password") {
    dvResponse.innerHTML = "Success";
  }
  else {
    dvResponse.innerHTML = "Wrong information.";
  }
}