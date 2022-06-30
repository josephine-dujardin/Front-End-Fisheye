// Formulaire de contact

// DOM Elements
const blockTransparent = document.getElementById("block-transparent");
const modalbg = document.getElementById("contact_modal");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const modalClose = document.querySelectorAll(".close");
const btnClose = document.querySelectorAll(".btn-close");

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// close modal event
modalClose.forEach((btn) => btn.addEventListener("click", closeModal));
btnClose.forEach((btn) => btn.addEventListener("click", closeModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  blockTransparent.style.display = "block";
  document.body.style.overflow = "hidden";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
  blockTransparent.style.display = "none";
  document.body.style.overflow = "auto";
}
// Display values ​​in console
function checkAll() {
  var lastName = document.getElementById("last").value;
  var firstName = document.getElementById("first").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  if (firstName && lastName && email && message) {
    dataArray = [
      "Prénom : " + firstName,
      "Nom : " + lastName,
      "Email : " + email,
      "Message : " + message,
    ];
    console.log(dataArray);
  } else {
    console.log("fields to fill");
  }
}
