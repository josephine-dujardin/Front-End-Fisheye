/**
 * Display photographers
 * @param {Object} data Data
 * @returns Object
 */

// array to put the sum of likes
const array = [];

// displays photographer's profiles
function photographerPageFactory(data) {
  const { place, tagline, name, portrait, id } = data[0];

  const picture = `assets/photographers/${portrait}`;
  const index = `${id}`;
  const alt = `${name}`;

  // Displays the photographer's elements
  function getphotographerPageCardDOM() {
    const article = document.createElement("article");
    const div = document.createElement("div");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("id", index);
    img.setAttribute("alt", alt);
    const h2 = document.createElement("h2");
    h2.setAttribute("id", index);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    h2.textContent = name;
    p1.textContent = place;
    p2.textContent = tagline;
    article.appendChild(img);
    article.appendChild(div);

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);

    h2.className = "name";
    p1.className = "place";
    p2.className = "profil-tagline";
    img.className = "photographers";

    return article;
  }

  return {
    place,
    tagline,
    name,
    picture,
    index,
    alt,
    getphotographerPageCardDOM,
  };
}

// displays photographer's name in contact form
function photographerContactFactory(data) {
  const name = data[0].name;

  function getphotographerContactCardDOM() {
    const h2 = document.createElement("h2");
    h2.textContent = name;

    h2.className = "contact-name";

    return h2;
  }

  return {
    name,
    getphotographerContactCardDOM,
  };
}

// displays photographer's price
function photographerProfilFactory(data) {
  const prices = data[0].price;

  function getphotographerProfilCardDOM() {
    const h2 = document.createElement("h2");
    const div = document.createElement("div");
    h2.textContent = prices;

    h2.className = "price";

    div.appendChild(h2);

    div.className = "div-profil";

    return div;
  }

  return {
    prices,
    getphotographerProfilCardDOM,
  };
}

// displays photographer's media in lightbox
function mediasLightboxFactory(media) {
  const { image, video, title, photographerId, id } = media;

  let mediaType, medias;

  // displays an image or a video
  mediaType = image ? "image" : "video";
  // media source
  medias =
    mediaType == "image"
      ? `assets/photographers/${photographerId}/${image}`
      : `assets/photographers/${photographerId}/${video}`;

  function getMediasLightboxCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const videoMedia = document.createElement("video");
    const mediaName = document.createElement("h2");

    // Display video and img
    if (mediaType === "video") {
      // Create video
      videoMedia.controls = true;
      videoMedia.setAttribute("src", medias);
      videoMedia.setAttribute("media-id", id);
      videoMedia.setAttribute("tabindex", 6);
      videoMedia.setAttribute("alt", `${title}`);
      videoMedia.className = "video-mp4";
      mediaName.textContent = title;
      mediaName.className = "title";
      mediaName.setAttribute("alt", `${title}`);
      article.appendChild(videoMedia);
      article.appendChild(mediaName);
    } else {
      // Create img
      img.setAttribute("src", medias);
      img.setAttribute("media-id", id);
      img.setAttribute("tabindex", 6);
      img.setAttribute("alt", `${title}`);
      img.className = "medias";
      mediaName.textContent = title;
      mediaName.className = "title";
      mediaName.setAttribute("alt", `${title}`);
      article.appendChild(img);
      article.appendChild(mediaName);
    }

    article.className = "lightbox-medias";

    // keyboard accessiblity
    document.addEventListener("keydown", (e) => {
      if (e.key === "Enter") {
        videoMedia.paused ? videoMedia.play() : videoMedia.pause();
      }
    });

    return article;
  }

  return {
    medias,
    getMediasLightboxCardDOM,
  };
}

// displays photographer's media
function photographerPageFactoryMedia(media) {
  const dbMediaIndex = window.photographer.medias.findIndex(
    ({ id }) => id === media.id
  );
  const dbMedia = window.photographer.medias[dbMediaIndex];

  const { title, image, video, id, photographerId } = dbMedia;
  let { likes } = dbMedia;

  let mediaType, medias;
  const clicked = [];

  // displays an image or a video
  mediaType = image ? "image" : "video";
  // media source
  medias =
    mediaType === "image"
      ? `assets/photographers/${photographerId}/${image}`
      : `assets/photographers/${photographerId}/${video}`;

  const index = `${id}`;
  const alt = `${title}`;
  const likeImg = document.createElement("span");
  const span = document.createElement("span");
  const p = document.createElement("p");
  const likeSrc = `assets/icons/red-heart-solid.svg`;

  function getphotographerPageMediaCardDOM() {
    const article = document.createElement("article");
    const divVideo = document.createElement("div");
    const div = document.createElement("div");
    const img = document.createElement("img");
    const videoMedia = document.createElement("video");

    // Display video and img
    if (mediaType == "video") {
      // Create video
      videoMedia.controls = true;
      videoMedia.setAttribute("src", medias);
      videoMedia.setAttribute("id", index);
      videoMedia.setAttribute("alt", alt);
      divVideo.setAttribute("id", index);
      divVideo.setAttribute("alt", alt);
      divVideo.setAttribute("tabindex", 5);
      article.appendChild(divVideo);
      article.appendChild(videoMedia);
      videoMedia.className = "video-mp4";
      divVideo.className = "div-video";
    } else {
      // Create img
      img.setAttribute("src", medias);
      img.setAttribute("id", index);
      img.setAttribute("alt", alt);
      img.setAttribute("tabindex", 5);
      article.appendChild(img);
      img.className = "medias";
    }

    const h2 = document.createElement("h2");

    h2.setAttribute("id", index);
    p.textContent = likes;
    likeImg.innerHTML = "<img class='like-image' src=" + likeSrc + ">";
    h2.textContent = title;

    span.appendChild(likeImg);
    span.appendChild(p);
    div.appendChild(span);
    div.appendChild(h2);
    article.appendChild(div);

    div.className = "div";
    h2.className = "title";
    p.className = "text-likes";
    likeImg.className = "like-img";
    span.className = "likes";

    // img keyboard accessiblity
    img.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        img.click();
        img.blur();
      }
    });

    // video keyboard accessiblity
    videoMedia.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        divVideo.click();
        divVideo.blur();
      }
    });

    // video keyboard accessiblity
    divVideo.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        divVideo.click();
        divVideo.blur();
      }
    });

    return article;
  }

  // add +1 when click on like
  likeImg.onclick = () => {
    if (clicked.includes(id)) return;
    clicked.push(id);

    const newLikes = likes + 1;
    span.textContent = newLikes;

    likeImg.innerHTML = "<img class='like-image' src=" + likeSrc + ">";

    span.style.flexDirection = "row";
    span.appendChild(likeImg);

    dbMedia.likes = newLikes;
    updateLikesSum();
  };

  return {
    title,
    likes,
    medias,
    index,
    alt,
    getphotographerPageMediaCardDOM,
  };
}

// displays photographer's sum of likes
function photographerPageFactoryLikes(media) {
  const dbMediaIndex = window.photographer.medias.findIndex(
    ({ id }) => id === media.id
  );
  const dbMedia = window.photographer.medias[dbMediaIndex];
  const { id } = dbMedia;

  const clicked = [];

  const likeImg = document.createElement("div");
  const h2 = document.createElement("h2");
  const likeSrc = `assets/icons/heart-solid.svg`;

  function getphotographerPageLikesCardDOM() {
    likeImg.innerHTML = "<img class='total-like' src=" + likeSrc + ">";
    h2.textContent = window.photographer.likesSum;

    // adds +1 to total likes when one photographer's likes is clicked
    window.onclick = () => {
      clicked.push(id);
      h2.textContent = window.photographer.likesSum;
      likeImg.appendChild(h2);
      updateLikesSum();
    };

    likeImg.className = "like-img";
    h2.className = "like-h2";

    likeImg.appendChild(h2);

    array.push(likeImg);

    return array[0];
  }

  window.addEventListener("click", onclick);

  return {
    getphotographerPageLikesCardDOM,
  };
}
