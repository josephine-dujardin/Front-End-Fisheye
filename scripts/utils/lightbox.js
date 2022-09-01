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

  // launch lightbox content
  function onClickShow(event) {
    var photographerIdMedia = window.photographer.medias.filter(function (obj) {
      if (obj.id == event.srcElement.id) {
        lightboxContent.style.display = "flex";
        blockTransparent.style.display = "block";
        displayMediasLightbox(obj);
        console.log(obj);
      }

      document.onkeydown = checkKey;

      // lightbox arrow with keyboard
      function checkKey(e) {
        e = e || window.event;

        if (e.keyCode == "37" && lightboxContent.style.display == "flex") {
          e.preventDefault();
          document.getElementById("lft-arrow").click();
          // left arrow
        } else if (
          e.keyCode == "39" &&
          lightboxContent.style.display == "flex"
        ) {
          document.getElementById("rgt-arrow").click();
          // right arrow
        }
      }
      return photographerIdMedia;
    });
  }

  // launch lightbox content event when click on img and video
  document
    .querySelectorAll("article img.medias, article .div-video")
    .forEach((e) => {
      e.addEventListener("click", onClickShow);
    });

  // close lightbox content
  function onClickHide() {
    var closeLightbox = window.photographer.medias.filter(function () {
      lightboxContent.style.display = "none";
      blockTransparent.style.display = "none";
      document.querySelector(".lightbox-photo-content").innerHTML = "";

      return closeLightbox;
    });
  }
  document.getElementById("close-lb").addEventListener("click", onClickHide);

  // left arrow event : previous media onclick
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

  // right arrow event : next media onclick
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
