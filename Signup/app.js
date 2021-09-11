
function validate(){
let Name = document.getElementById("Username").value;
let email = documeent.getElementById("mail").value;
let password = document.getElementById("Password").value;
// This is to put the data of the user in local storage for now

localStorage.setItem("name" , Name);
localStorage.setItem("mail", email);
localStorage.setItem("Password", password);

console.log(Name , email, password);
}