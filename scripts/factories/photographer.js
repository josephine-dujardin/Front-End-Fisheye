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
      const state = { page_id: 1, user_id: 5 };
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
  const { place, tagline, price, name, portrait, id } = data[0];

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
    p3.textContent = price;
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
    price,
    name,
    picture,
    index,
    alt,
    getphotographerPageCardDOM,
  };
}

function photographerContactFactory(data) {
  const { name } = data;

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

function mediasLightboxFactory(media) {
  const { image, photographerId } = media;

  const picture = `assets/photographers/${photographerId}/${image}`;

  function getMediasLightboxCardDOM() {
    const img = document.createElement("img");
    img.setAttribute("src", picture);

    img.className = "lightbox-medias";

    return img;
  }

  return {
    picture,
    getMediasLightboxCardDOM,
  };
}

function photographerPageFactoryMedia(media) {
  const { title, image, id, photographerId } = media;

  const picture = `assets/photographers/${photographerId}/${image}`;
  const index = `${id}`;
  const alt = `${title}`;

  function getphotographerPageMediaCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    img.setAttribute("src", picture);
    img.setAttribute("id", index);
    img.setAttribute("alt", alt);
    const h2 = document.createElement("h2");
    h2.setAttribute("id", index);
    h2.textContent = title;
    article.appendChild(img);
    article.appendChild(h2);

    h2.className = "title";
    img.className = "medias";

    return article;
  }

  return {
    title,
    picture,
    index,
    alt,
    getphotographerPageMediaCardDOM,
  };
}
