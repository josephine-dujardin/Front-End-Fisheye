//Code JavaScript lié à la page index.html

// Récupère les données photographer du fichier Json
function storeMedias(json) {
  console.log(json["media"]);
}

async function getPhotographers() {
  var photographers = [];

  var storePhotographers = () => {};
  await fetch("data/photographers.json")
    .then((response) => response.json())
    .then((json) => {
      photographers = json["photographers"];
    });

  return {
    photographers,
  };
}

// Affiche le profil du photographe
async function displayData(photographers) {
  const photographersSection = document.querySelector(".photographer_section");

  photographers.forEach((photographer) => {
    const photographerModel = photographerFactory(photographer);
    const userCardDOM = photographerModel.getUserCardDOM();
    photographersSection.appendChild(userCardDOM);
  });
}

async function init() {
  // Récupère les datas des photographes
  const { photographers } = await getPhotographers();
  displayData(photographers);
}

init();
