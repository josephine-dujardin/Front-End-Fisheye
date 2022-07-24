// Lightbox

// DOM Elements
const lightboxContent = document.getElementById("lightbox");
const btnCloseLightbox = document.querySelectorAll(".close-lightbox");

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
async function displayMediasLightbox(media) {
  const mediasLightbox = document.querySelector(".lightbox-photo-content");
  // console.log(meda)
  const mediasLightboxModel = mediasLightboxFactory(media);
  const mediasLightboxCardDOM = mediasLightboxModel.getMediasLightboxCardDOM();
  mediasLightbox.appendChild(mediasLightboxCardDOM);
}

async function initLightBoxMedias() {
  // Récupère les datas des medias
  var medias = await getLightBoxMedias();
  const blockTransparent = document.getElementById("block-transparent");

  function onClick(event) {
    console.log(event.srcElement.id);

    var photographerIdMedia = medias["photographerMedia"].filter(function (
      obj
    ) {
      if (obj.id == event.srcElement.id) {
        // launch lightbox content
        lightboxContent.style.display = "flex";
        blockTransparent.style.display = "block";
        displayMediasLightbox(obj);
        console.log(obj);
      }

      return photographerIdMedia;
    });

    var closeLightbox = medias["photographerMedia"].filter(function (obj) {
      if (event.srcElement.id === "close-lb") {
        lightboxContent.style.display = "none";
        blockTransparent.style.display = "none";
        document.querySelector(".lightbox-photo-content").innerHTML = "";
      }

      return closeLightbox;
    });
  }

  window.addEventListener("click", onClick);
}
initLightBoxMedias();
