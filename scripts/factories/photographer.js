function photographerFactory(data) {
  const { place, tagline, price, name, portrait, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const index = `${id}`;
  const alt = `${name}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("id", index);
    img.setAttribute("alt", alt);
    const h2 = document.createElement("h2");
    h2.setAttribute("id", index);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    h2.textContent = name;
    p1.textContent = place;
    p2.textContent = tagline;
    p3.textContent = price;
    article.appendChild(img);
    article.appendChild(h2);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    h2.className = "name";
    p1.className = "place";
    p2.className = "tagline";
    p3.className = "price";
    img.className = "photographers";

    return article;
  }

  document.addEventListener(
    "click",
    function (event) {
      // If the clicked element doesn't have the right selector, bail
      if (!event.target.matches("#" + `${id}`)) return;

      // Don't follow the link
      event.preventDefault();

      // Log the clicked element in the console
      const state = {
        page_id: 1,
        user_id: 5,
      };
      const url = `photographer.html?${id}`;
      history.pushState(state, "", url);
      location.reload();
      false;
    },
    false
  );

  return {
    place,
    tagline,
    price,
    name,
    picture,
    index,
    alt,
    getUserCardDOM,
  };
}

function photographerPageFactory(data) {
  const { place, tagline, name, portrait, id } = data[0];

  const picture = `assets/photographers/${portrait}`;
  const index = `${id}`;
  const alt = `${name}`;

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
    const p3 = document.createElement("p");
    h2.textContent = name;
    p1.textContent = place;
    p2.textContent = tagline;
    article.appendChild(img);
    article.appendChild(div);

    div.appendChild(h2);
    div.appendChild(p1);
    div.appendChild(p2);
    div.appendChild(p3);

    h2.className = "name";
    p1.className = "place";
    p2.className = "tagline";
    p3.className = "price";
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

function photographerProfilFactory(data) {
  const prices = data[0].price;
  const likeImage = document.querySelectorAll(".like-img");
  const likes = document.createElement("h2");
  const likeImg = document.createElement("span");

  function getphotographerProfilCardDOM() {
    const h2 = document.createElement("h2");
    const likeSrc = `assets/icons/heart-solid.svg`;
    const div = document.createElement("div");
    const divLikes = document.createElement("div");
    h2.textContent = prices;

    h2.className = "price";

    var bills = [
      {
        likes: 88,
      },
      {
        likes: 85,
      },
      {
        likes: 34,
      },
      {
        likes: 63,
      },
      {
        likes: 55,
      },
      {
        likes: 25,
      },
      {
        likes: 52,
      },
      {
        likes: 77,
      },
      {
        likes: 142,
      },
      {
        likes: 59,
      },
    ];

    var res = bills
      .map((bill) => bill.likes)
      .reduce((acc, amount) => acc + amount);

    console.log(res);

    likeImg.innerHTML = "<img class='like-image' src=" + likeSrc + ">";
    likes.textContent = res;

    divLikes.appendChild(likes);
    divLikes.appendChild(likeImg);
    div.appendChild(divLikes);
    div.appendChild(h2);

    likes.className = "h2-likes";
    div.className = "div-profil";
    divLikes.className = "div-likes";
    likeImg.className = "span-likes";

    console.log(Number(likes.textContent) + 1);

    return div;
  }

  likeImg.onclick = () => {
    let nbLikes = Number(likes.textContent) + 1;
    likes.textContent = nbLikes;
    console.log(nbLikes);
    console.log(likeImage);
  };

  return {
    prices,
    getphotographerProfilCardDOM,
  };
}

function mediasLightboxFactory(media) {
  const { image, video, photographerId } = media;

  let mediaType, medias;

  // AVAILABLE MEDIA: IMAGE || VIDEO ?
  mediaType = image ? "image" : "video";
  // MEDIA SRC
  medias =
    mediaType == "image"
      ? `assets/photographers/${photographerId}/${image}`
      : `assets/photographers/${photographerId}/${video}`;

  function getMediasLightboxCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const videoMedia = document.createElement("video");

    // MAKE IMG AND VIDEO
    if (mediaType == "video") {
      // Create video
      videoMedia.controls = true;
      videoMedia.setAttribute("src", medias);
      videoMedia.className = "video-mp4";
      article.appendChild(videoMedia);
    } else {
      // Create img
      img.setAttribute("src", medias);
      img.className = "medias";
      article.appendChild(img);
    }

    article.className = "lightbox-medias";

    return article;
  }

  return {
    medias,
    getMediasLightboxCardDOM,
  };
}

function photographerPageFactoryMedia(media) {
  const { title, image, video, likes, id, photographerId } = media;

  let mediaType, medias;

  // AVAILABLE MEDIA: IMAGE || VIDEO ?
  mediaType = image ? "image" : "video";
  // MEDIA SRC
  medias =
    mediaType == "image"
      ? `assets/photographers/${photographerId}/${image}`
      : `assets/photographers/${photographerId}/${video}`;

  // const picture = `assets/photographers/${photographerId}/${image}`;
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

    // MAKE IMG AND VIDEO
    if (mediaType == "video") {
      // Create video
      videoMedia.controls = true;
      videoMedia.setAttribute("src", medias);
      videoMedia.setAttribute("id", index);
      videoMedia.setAttribute("alt", alt);
      divVideo.setAttribute("id", index);
      divVideo.setAttribute("alt", alt);
      article.appendChild(divVideo);
      article.appendChild(videoMedia);
      videoMedia.className = "video-mp4";
      divVideo.className = "div-video";
    } else {
      // Create img
      img.setAttribute("src", medias);
      img.setAttribute("id", index);
      img.setAttribute("alt", alt);
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

    return article;
  }

  likeImg.onclick = () => {
    let nbLikes = likes + 1;
    span.textContent = nbLikes;
    likeImg.innerHTML = "<img class='like-image' src=" + likeSrc + ">";
    span.style.flexDirection = "row-reverse";
    span.appendChild(likeImg);
  };

  console.log(likeImg);

  return {
    title,
    likes,
    medias,
    index,
    alt,
    getphotographerPageMediaCardDOM,
  };
}
