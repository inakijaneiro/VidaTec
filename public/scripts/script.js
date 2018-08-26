let password = document.getElementById("password")
  , confirm_password = document.getElementById("confirm_password"),
  button = document.getElementById("disabled");

function validatePassword(){
  if(password.value != confirm_password.value) {
    confirm_password.setCustomValidity("Passwords Don't Match");
    confirm_password.style.border = "1px solid red";
  } else {
    confirm_password.setCustomValidity('');
    button.disabled = false;
  }
}
password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;

function openNav() {
  document.getElementById("myMenu").style.transform = "translateX(100%)";
}
function closeNav() {
  document.getElementById("myMenu").style.transform = "translateX(200%)";
}