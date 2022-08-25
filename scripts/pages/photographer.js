//Code JavaScript lié à la page photographer.html
document.querySelector(".logo").onclick = function () {
  location.href = "http://localhost:8888/Front-End-Fisheye";
};

document.querySelector(".logo").addEventListener("keypress", function (event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.querySelector(".logo").click();
  }
});

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

// Affiche le prix du photographe
async function displayPhotographerProfil(photographer) {
  const photographerProfil = document.getElementById("block-fix");
  const photographerProfilModel = photographerProfilFactory(photographer);
  const photographerProfilCardDOM =
    photographerProfilModel.getphotographerProfilCardDOM();
  photographerProfil.appendChild(photographerProfilCardDOM);
}
async function initProfil() {
  // Récupère les datas des photographes
  const photographer = await getPhotographerData();
  displayPhotographerProfil(photographer);
}

initProfil();

// Affiche les likes du photographe
async function displayPhotographerLikes(medias) {
  let likeArray = [];

  medias.filter(function (obj) {
    likeArray.push(obj.likes);
  });

  updateLikesSum();

  const photographerLikes = document.getElementById("block-fix");
  medias.forEach((media) => {
    const photographerPageLikes = photographerPageFactoryLikes(media);
    const photographerPageLikesCardDOM =
      photographerPageLikes.getphotographerPageLikesCardDOM();
    photographerLikes.appendChild(photographerPageLikesCardDOM);
  });
}

function updateLikesSum() {
  window.photographer.likesSum = window.photographer.medias.reduce(
    (previous, { likes }) => previous + likes,
    0
  );
}

async function initLikes() {
  // Récupère les datas des medias
  var medias = await getPhotographerDataMedia();

  window.photographer = {
    medias: [...medias.photographerMedia],
  };

  displayPhotographerLikes(medias["photographerMedia"]);
}

initLikes();

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
async function displayPhotographerPageMedia() {
  const photographerPageMedia = document.querySelector(".photograph-media");
  photographerPageMedia.innerHTML = "";

  updateLikesSum();

  window.photographer.medias.forEach((media) => {
    const photographerPageMediaModel = photographerPageFactoryMedia(media);
    const photographerPageMediaCardDOM =
      photographerPageMediaModel.getphotographerPageMediaCardDOM();
    photographerPageMedia.appendChild(photographerPageMediaCardDOM);
  });

  initLightBoxMedias();
}

function updateLikesSum() {
  window.photographer.likesSum = window.photographer.medias.reduce(
    (previous, { likes }) => previous + likes,
    0
  );
}

async function initMedia() {
  // Récupère les datas des medias
  var medias = await getPhotographerDataMedia();

  window.photographer = {
    medias: [...medias.photographerMedia],
  };

  displayPhotographerPageMedia();
}

initMedia();
