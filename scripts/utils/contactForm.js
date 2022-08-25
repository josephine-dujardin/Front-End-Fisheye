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
  modalbg.style.display = "flex";
  blockTransparent.style.display = "block";
}

// close modal
function closeModal() {
  modalbg.style.display = "none";
  blockTransparent.style.display = "none";
}

document.onkeyup = (e) => {
  switch (e.key) {
    case "Escape":
      // Close contactForm & lightbox
      document.querySelectorAll(".modal").forEach((modal) => {
        modalbg.style.display = "none";
        blockTransparent.style.display = "none";
        document.getElementById("lightbox").style.display = "none";
        document.querySelector(".lightbox-photo-content").innerHTML = "";
      });
      break;
  }
};

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
