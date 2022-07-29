// DOM Elements
const selectedInactive = document.querySelectorAll(".selected-inactive");
const liste = document.getElementById("liste");
const inactive = document.querySelectorAll(".inactive");
const hr = document.querySelectorAll("hr");
const up = document.querySelectorAll(".angle-up");
const down = document.querySelectorAll(".angle-down");

down[0].onclick = () => {
  inactive[1].style.display = "flex";
  inactive[0].style.display = "flex";
  hr[1].style.display = "flex";
  hr[0].style.display = "flex";
  up[0].style.display = "flex";
  down[0].style.display = "none";
  down[1].style.display = "none";
  down[2].style.display = "none";
};
up[0].onclick = () => {
  inactive[1].style.display = "none";
  inactive[0].style.display = "none";
  hr[1].style.display = "none";
  hr[0].style.display = "none";
  up[0].style.display = "none";
  down[0].style.display = "flex";
};
