// In a Javascript file, write a program which checks the following things:
// checks that the password is 12345678
// if the password is incorrect, send an alert message
// Your page should also include an <h1> tag. 
// If the information in the form is correct, have Javascript change the text in the <h1> .HTML page. 
var loginForm = document.getElementById("loginForm"); 
var changedH1 = document.getElementById("h1"); 
loginForm.addEventListener("submit", function(){
    var password = document.getElementById("password").value; 
    if (password !== "12345678") {
        alert("Password Incorrect!")
    } else {
        changedH1.innerText = "Login"; 
    }
})