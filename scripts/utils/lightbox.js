// Lightbox

// DOM Elements
const lightboxContent = document.getElementById("lightbox");
const btnCloseLightbox = document.querySelectorAll(".close-lightbox");

// close lightbox event
btnCloseLightbox.forEach((btn) => btn.addEventListener("click", closeLightbox));

// Display ID OnClick
// Récupère les données médias du fichier Json
async function getLightBoxMedias() {
  var medias = [];

  var storeMedias = () => {};
  await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((json) => {
      medias = json["media"];
    });

  var photographerMedia = medias.filter(function (obj) {
    if (obj.photographerId === photographerId) {
      return obj;
    }
  });
  console.log(photographerMedia);

  return {
    photographerMedia,
  };
}

// Affiche les médias du photographe
async function displayMediasLightbox(medias) {
  const mediasLightbox = document.querySelector(".lightbox-photo-content");
  medias.forEach((media) => {
    const mediasLightboxModel = mediasLightboxFactory(media);
    const mediasLightboxCardDOM =
      mediasLightboxModel.getMediasLightboxCardDOM();
    mediasLightbox.appendChild(mediasLightboxCardDOM);
  });
}

async function initLightBoxMedias() {
  // Récupère les datas des medias
  var medias = await getLightBoxMedias();

  function onClick(event) {
    console.log(event.srcElement.id);

    var photographerIdMedia = medias["photographerMedia"].filter(function (
      obj
    ) {
      if (obj.id == event.srcElement.id) {
        // launch lightbox content
        lightboxContent.style.display = "flex";
        return obj;
      }

      return photographerIdMedia;
    });

    console.log(photographerIdMedia);
  }
  window.addEventListener("click", onClick);

  displayMediasLightbox(medias["photographerMedia"]);
}
initLightBoxMedias();

// close lightbox
function closeLightbox() {
  lightboxContent.style.display = "none";
}
