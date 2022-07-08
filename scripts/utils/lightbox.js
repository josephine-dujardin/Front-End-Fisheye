// Lightbox

// DOM Elements
const lightboxContent = document.getElementById("lightbox");
const medias = document.querySelectorAll(".medias");
const btnCloseLightbox = document.querySelectorAll(".close-lightbox");

// launch lightbox event
medias.forEach((btn) => btn.addEventListener("click", launchLightbox));

// close lightbox event
btnCloseLightbox.forEach((btn) => btn.addEventListener("click", closeLightbox));

// launch lightbox content
function launchLightbox() {
  lightboxContent.style.display = "flex";

  // create a `NodeList` object
  const lgPhotoContent = document.querySelectorAll(".lightbox-medias");

  // convert `NodeList` to an array
  const lgPhotoContentArr = Array.from(lgPhotoContent);

  // affiche un objet du tableau en fonction de son id
  const onClick = (event) => {
    if (event.srcElement.id == 623534343) {
      lgPhotoContentArr[0].style.display = "block";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 625025343) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "block";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 2525345343) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "block";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 2523434634) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "block";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 398847109) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "block";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 2534342) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "block";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 65235234) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "block";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 23523434) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "block";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 5234343) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "block";
      lgPhotoContentArr[9].style.display = "none";
    } else if (event.srcElement.id == 95234343) {
      lgPhotoContentArr[0].style.display = "none";
      lgPhotoContentArr[1].style.display = "none";
      lgPhotoContentArr[2].style.display = "none";
      lgPhotoContentArr[3].style.display = "none";
      lgPhotoContentArr[4].style.display = "none";
      lgPhotoContentArr[5].style.display = "none";
      lgPhotoContentArr[6].style.display = "none";
      lgPhotoContentArr[7].style.display = "none";
      lgPhotoContentArr[8].style.display = "none";
      lgPhotoContentArr[9].style.display = "block";
    }
    console.log(event.srcElement.id);
  };
  window.addEventListener("click", onClick);
}

// close lightbox
function closeLightbox() {
  lightboxContent.style.display = "none";
}

// left arrow function
function leftArrow() {
  const lgPhotoContent = document.querySelectorAll(".lightbox-medias");
  const lgPhotoContentArr = Array.from(lgPhotoContent);

  console.log(lgPhotoContentArr);
}
