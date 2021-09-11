
let name = document.getElementById("memberName");
let email = document.getElementById("email");
let depart = document.getElementById("department");
function addmember() {
  
  name= name.value;
  email = email.value;
  depart = email.value;

  let memberName = localStorage.setItem(`Member Name`, name);
  let memberemail = localStorage.setItem(`Member email`, email);
  let memberdepart = localStorage.setItem(`Member depart`, depart);

  // console.log(memberName, memberemail, memberdepart);
}

function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}

function addmember(){
 
  
  let box = document.createElement('div');
  let boxValue = document.createTextNode(name.value,depart.value);
  box.appendChild(boxValue);
  console.log(boxValue);
}