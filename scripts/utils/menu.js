const menuOptions = document.getElementById("menu-options");

menuOptions.onchange = ({ target }) => {
  const { value } = target;

  if ("popularite" === value) {
    // Sort by DESC likes
    window.photographer.medias.sort((a, b) => {
      if (a.likes < b.likes) return 1;
      else if (a.likes > b.likes) return -1;
      else return 0;
    });
  } else if ("date" === value) {
    // Sort by DESC date
    window.photographer.medias.sort((a, b) => {
      if (a.date < b.date) return 1;
      else if (a.date > b.date) return -1;
      else return 0;
    });
  } else if ("titre" === value) {
    // Sort by ASC title
    window.photographer.medias.sort((a, b) => {
      if (a.title < b.title) return -1;
      else if (a.title > b.title) return 1;
      else return 0;
    });
  }

  displayPhotographerPageMedia();
};
