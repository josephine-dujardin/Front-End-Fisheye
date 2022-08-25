/**
 * Display photographers
 * @param {Object} data Data
 * @returns Object
 */

const array = [];

function photographerFactory(data) {
  const { place, tagline, price, name, portrait, id } = data;

  const picture = `assets/photographers/${portrait}`;
  const index = `${id}`;
  const alt = `${name}`;

  function getUserCardDOM() {
    const article = document.createElement("article");
    const img = document.createElement("img");
    const h2 = document.createElement("h2");
    const a = document.createElement("a");
    img.setAttribute("src", picture);
    img.setAttribute("id", index);
    img.setAttribute("alt", alt);
    a.setAttribute("id", index);
    h2.setAttribute("id", index);
    a.setAttribute("tabindex", 0);
    const p1 = document.createElement("p");
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    h2.textContent = name;
    p1.textContent = place;
    p2.textContent = tagline;
    p3.textContent = price;
    a.appendChild(img);
    a.appendChild(h2);
    article.appendChild(a);
    article.appendChild(p1);
    article.appendChild(p2);
    article.appendChild(p3);

    a.className = "photographer-link";
    h2.className = "name";
    p1.className = "place";
    p2.className = "tagline";
    p3.className = "profil-price";
    img.className = "photographers";

    a.addEventListener("keypress", function (event) {
      if (event.key === "Enter") {
        event.preventDefault();
        img.click();
      }
    });

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
