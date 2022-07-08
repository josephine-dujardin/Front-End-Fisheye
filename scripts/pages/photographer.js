//Code JavaScript lié à la page photographer.html
document.getElementById("logo").onclick = function () {
  location.href = "http://localhost:8888/Front-End-Fisheye-15/";
};
// Récupère les données photographer du fichier Json
if (window.location.href.indexOf("mimi-keel") > -1) {
  async function getPhotographerData() {
    var photographers = [];

    var storePhotographers = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        photographers = json["photographers"];
      });

    photographers.splice(1, 5);
    return {
      photographers,
    };
  }

  // Affiche le profil du photographe
  async function displayPhotographerPageData(photographers) {
    const photographerPageHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      const photographerPageModel = photographerPageFactory(photographer);
      const photographerPageCardDOM =
        photographerPageModel.getphotographerPageCardDOM();
      photographerPageHeader.appendChild(photographerPageCardDOM);
    });
  }
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerPageData(photographers);
  }

  init();

  // Affiche le nom du photographe
  async function displayPhotographerName(photographers) {
    const photographerContactName =
      document.querySelector(".photographer-name");
    photographers.forEach((photographer) => {
      const photographerContactModel = photographerContactFactory(photographer);
      const photographerContactCardDOM =
        photographerContactModel.getphotographerContactCardDOM();
      photographerContactName.appendChild(photographerContactCardDOM);
    });
  }
  async function initName() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerName(photographers);
  }

  initName();

  // Affiche les photos dans la lightbox
  async function displayPhotographerPhotos(medias) {
    const photographerPhoto = document.querySelector(".lightbox-photo-content");
    medias.forEach((media) => {
      const photographerPhotoModel = photographerPhotoFactory(media);
      const photographerPhotoCardDOM =
        photographerPhotoModel.getphotographerPhotoCardDOM();
      photographerPhoto.appendChild(photographerPhotoCardDOM);
    });
  }
  async function initPhoto() {
    // Récupère les datas des photographes
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPhotos(medias);
  }

  initPhoto();

  // Récupère les données médias du fichier Json
  async function getPhotographerDataMedia() {
    var medias = [];

    var storeMedias = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        medias = json["media"];
      });

    medias.splice(0, 28);

    medias.splice(10, 21);
    return {
      medias,
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
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPageMedia(medias);
  }

  initMedia();
} else if (window.location.href.indexOf("ellie-rose-wilkens") > -1) {
  async function getPhotographerData() {
    var photographers = [];

    var storePhotographers = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        photographers = json["photographers"];
      });

    photographers.splice(0, 1);
    photographers.splice(1, 4);
    return {
      photographers,
    };
  }

  // Affiche le profil du photographe
  async function displayPhotographerPageData(photographers) {
    const photographerPageHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      const photographerPageModel = photographerPageFactory(photographer);
      const photographerPageCardDOM =
        photographerPageModel.getphotographerPageCardDOM();
      photographerPageHeader.appendChild(photographerPageCardDOM);
    });
  }
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerPageData(photographers);
  }

  init();

  // Affiche le nom du photographe
  async function displayPhotographerName(photographers) {
    const photographerContactName =
      document.querySelector(".photographer-name");
    photographers.forEach((photographer) => {
      const photographerContactModel = photographerContactFactory(photographer);
      const photographerContactCardDOM =
        photographerContactModel.getphotographerContactCardDOM();
      photographerContactName.appendChild(photographerContactCardDOM);
    });
  }
  async function initName() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerName(photographers);
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
      });

    medias.splice(0, 48);

    return {
      medias,
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
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPageMedia(medias);
  }

  initMedia();
} else if (window.location.href.indexOf("tracy-galindo") > -1) {
  async function getPhotographerData() {
    var photographers = [];

    var storePhotographers = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        photographers = json["photographers"];
      });

    photographers.splice(0, 2);
    photographers.splice(1, 3);
    return {
      photographers,
    };
  }

  // Affiche le profil du photographe
  async function displayPhotographerPageData(photographers) {
    const photographerPageHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      const photographerPageModel = photographerPageFactory(photographer);
      const photographerPageCardDOM =
        photographerPageModel.getphotographerPageCardDOM();
      photographerPageHeader.appendChild(photographerPageCardDOM);
    });
  }
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerPageData(photographers);
  }

  init();

  // Affiche le nom du photographe
  async function displayPhotographerName(photographers) {
    const photographerContactName =
      document.querySelector(".photographer-name");
    photographers.forEach((photographer) => {
      const photographerContactModel = photographerContactFactory(photographer);
      const photographerContactCardDOM =
        photographerContactModel.getphotographerContactCardDOM();
      photographerContactName.appendChild(photographerContactCardDOM);
    });
  }
  async function initName() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerName(photographers);
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
      });

    medias.splice(10, 49);

    return {
      medias,
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
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPageMedia(medias);
  }

  initMedia();
} else if (window.location.href.indexOf("nabeel-bradford") > -1) {
  async function getPhotographerData() {
    var photographers = [];

    var storePhotographers = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        photographers = json["photographers"];
      });

    photographers.splice(0, 3);
    photographers.splice(1, 2);
    return {
      photographers,
    };
  }

  // Affiche le profil du photographe
  async function displayPhotographerPageData(photographers) {
    const photographerPageHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      const photographerPageModel = photographerPageFactory(photographer);
      const photographerPageCardDOM =
        photographerPageModel.getphotographerPageCardDOM();
      photographerPageHeader.appendChild(photographerPageCardDOM);
    });
  }
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerPageData(photographers);
  }

  init();

  // Affiche le nom du photographe
  async function displayPhotographerName(photographers) {
    const photographerContactName =
      document.querySelector(".photographer-name");
    photographers.forEach((photographer) => {
      const photographerContactModel = photographerContactFactory(photographer);
      const photographerContactCardDOM =
        photographerContactModel.getphotographerContactCardDOM();
      photographerContactName.appendChild(photographerContactCardDOM);
    });
  }
  async function initName() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerName(photographers);
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
      });

    medias.splice(0, 19);
    medias.splice(9, 39);

    return {
      medias,
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
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPageMedia(medias);
  }

  initMedia();
} else if (window.location.href.indexOf("rhode-dubois") > -1) {
  async function getPhotographerData() {
    var photographers = [];

    var storePhotographers = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        photographers = json["photographers"];
      });

    photographers.splice(0, 4);
    photographers.splice(1, 1);
    return {
      photographers,
    };
  }

  // Affiche le profil du photographe
  async function displayPhotographerPageData(photographers) {
    const photographerPageHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      const photographerPageModel = photographerPageFactory(photographer);
      const photographerPageCardDOM =
        photographerPageModel.getphotographerPageCardDOM();
      photographerPageHeader.appendChild(photographerPageCardDOM);
    });
  }
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerPageData(photographers);
  }

  init();

  // Affiche le nom du photographe
  async function displayPhotographerName(photographers) {
    const photographerContactName =
      document.querySelector(".photographer-name");
    photographers.forEach((photographer) => {
      const photographerContactModel = photographerContactFactory(photographer);
      const photographerContactCardDOM =
        photographerContactModel.getphotographerContactCardDOM();
      photographerContactName.appendChild(photographerContactCardDOM);
    });
  }
  async function initName() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerName(photographers);
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
      });

    medias.splice(0, 10);
    medias.splice(9, 40);

    return {
      medias,
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
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPageMedia(medias);
  }

  initMedia();
} else if (window.location.href.indexOf("marcel-nikolic") > -1) {
  async function getPhotographerData() {
    var photographers = [];

    var storePhotographers = () => {};
    await fetch("data/photographers.json")
      .then((response) => response.json())
      .then((json) => {
        photographers = json["photographers"];
      });

    photographers.splice(0, 5);
    return {
      photographers,
    };
  }

  // Affiche le profil du photographe
  async function displayPhotographerPageData(photographers) {
    const photographerPageHeader = document.querySelector(".photograph-header");
    photographers.forEach((photographer) => {
      const photographerPageModel = photographerPageFactory(photographer);
      const photographerPageCardDOM =
        photographerPageModel.getphotographerPageCardDOM();
      photographerPageHeader.appendChild(photographerPageCardDOM);
    });
  }
  async function init() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerPageData(photographers);
  }

  init();

  // Affiche le nom du photographe
  async function displayPhotographerName(photographers) {
    const photographerContactName =
      document.querySelector(".photographer-name");
    photographers.forEach((photographer) => {
      const photographerContactModel = photographerContactFactory(photographer);
      const photographerContactCardDOM =
        photographerContactModel.getphotographerContactCardDOM();
      photographerContactName.appendChild(photographerContactCardDOM);
    });
  }
  async function initName() {
    // Récupère les datas des photographes
    const { photographers } = await getPhotographerData();
    displayPhotographerName(photographers);
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
      });

    medias.splice(0, 38);
    medias.splice(10, 11);

    return {
      medias,
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
    const { medias } = await getPhotographerDataMedia();
    displayPhotographerPageMedia(medias);
  }

  initMedia();
}
