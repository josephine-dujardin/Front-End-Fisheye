//Code JavaScript lié à la page photographer.html

// Récupère l'id du photographe dans l'URL

var a = window.location.href;

var photographerId = a.split("?")[1];

// récupère les données du photographe
async function getPhotographerData() {
  var photographers = [];
  // var photographerId = a.split('?')[1];

  await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((json) => {
      photographers = json["photographers"];
      // console.log(photographers);
    });

  // Filtre les données du photographe en fonction de l'ID
  var photographerData = photographers.filter(function (obj) {
    if (obj.id === photographerId) {
      return obj;
    }
  });

  return photographerData;
}

// Affiche le profil du photographe
async function displayPhotographerPageData(photographer) {
  const photographerPageHeader = document.querySelector(".photograph-header");

  const photographerPageModel = photographerPageFactory(photographer);
  const photographerPageCardDOM =
    photographerPageModel.getphotographerPageCardDOM();
  photographerPageHeader.appendChild(photographerPageCardDOM);
}
async function init() {
  // Récupère les datas des photographes
  const photographer = await getPhotographerData();

  displayPhotographerPageData(photographer);
}

init();

// Affiche le nom du photographe
async function displayPhotographerName(photographer) {
  const photographerContactName = document.querySelector(".photographer-name");
  const photographerContactModel = photographerContactFactory(photographer);
  const photographerContactCardDOM =
    photographerContactModel.getphotographerContactCardDOM();
  photographerContactName.appendChild(photographerContactCardDOM);
}
async function initName() {
  // Récupère les datas des photographes
  const photographer = await getPhotographerData();
  displayPhotographerName(photographer);
}

initName();

// Récupère les données médias du fichier Json
async function getPhotographerDataMedia() {
  var medias = [];

  var storeMedias = () => {};
  await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((json) => {
      medias = json["media"];
      // console.log(medias)
    });

  var photographerMedia = medias.filter(function (obj) {
    // console.log('MEDIAAA')
    // console.log(obj.photographerId)
    // console.log(photographerId)
    if (obj.photographerId === photographerId) {
      return obj;
    }
  });

  return {
    photographerMedia,
  };
}

// Affiche les médias du photographe
async function displayPhotographerPageMedia(medias) {
  const photographerPageMedia = document.querySelector(".photograph-media");
  medias.forEach((media) => {
    const photographerPageMediaModel = photographerPageFactoryMedia(media);
    const photographerPageMediaCardDOM =
      photographerPageMediaModel.getphotographerPageMediaCardDOM();
    photographerPageMedia.appendChild(photographerPageMediaCardDOM);
  });
}

async function initMedia() {
  // Récupère les datas des medias
  var medias = await getPhotographerDataMedia();

  displayPhotographerPageMedia(medias["photographerMedia"]);
}

initMedia();
