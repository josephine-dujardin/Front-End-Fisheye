// Lightbox

// Affiche les médias du photographe
async function displayMediasLightbox(media) {
  const mediasLightbox = document.querySelector(".lightbox-photo-content");
  // console.log(meda)
  mediasLightbox.innerHTML = "";
  const mediasLightboxModel = mediasLightboxFactory(media);
  const mediasLightboxCardDOM = mediasLightboxModel.getMediasLightboxCardDOM();
  mediasLightbox.appendChild(mediasLightboxCardDOM);
}

async function initLightBoxMedias() {
  // Récupère les datas des medias
  const lightboxContent = document.getElementById("lightbox");
  const blockTransparent = document.getElementById("block-transparent");
  const leftArrow = document.getElementById("lft-arrow");
  const rightArrow = document.getElementById("rgt-arrow");

  function onClickShow(event) {
    var photographerIdMedia = window.photographer.medias.filter(function (obj) {
      if (obj.id == event.srcElement.id) {
        // launch lightbox content
        lightboxContent.style.display = "flex";
        blockTransparent.style.display = "block";
        displayMediasLightbox(obj);
        console.log(obj);
      }

      return photographerIdMedia;
    });
  }
  document
    .querySelectorAll("article img.medias, article .div-video")
    .forEach((e) => {
      e.addEventListener("click", onClickShow);
    });

  function onClickHide() {
    var closeLightbox = window.photographer.medias.filter(function (obj) {
      lightboxContent.style.display = "none";
      blockTransparent.style.display = "none";
      document.querySelector(".lightbox-photo-content").innerHTML = "";

      return closeLightbox;
    });
  }
  document.getElementById("close-lb").addEventListener("click", onClickHide);

  leftArrow.onclick = (event) => {
    const media = event.target.nextElementSibling.querySelector("[media-id]");
    const actualMediaIndex = window.photographer.medias.findIndex(
      ({ id }) => id == media.getAttribute("media-id")
    );

    let previousMediaIndex = actualMediaIndex - 1;
    if (previousMediaIndex < 0)
      previousMediaIndex = window.photographer.medias.length - 1;

    displayMediasLightbox(window.photographer.medias[previousMediaIndex]);
  };

  rightArrow.onclick = (event) => {
    const media =
      event.target.previousElementSibling.querySelector("[media-id]");
    const actualMediaIndex = window.photographer.medias.findIndex(
      ({ id }) => id == media.getAttribute("media-id")
    );

    let nextMediaIndex = actualMediaIndex + 1;
    if (nextMediaIndex >= window.photographer.medias.length) nextMediaIndex = 0;

    displayMediasLightbox(window.photographer.medias[nextMediaIndex]);
  };
}
