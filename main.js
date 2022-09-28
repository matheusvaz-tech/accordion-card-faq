var title = document.querySelector("#title-bold");
var dropDown = document.querySelector("#dropdown");
var img = document.querySelector("#img");

title.onclick = function () {
  img.classList.toggle("active");
  dropDown.classList.toggle("active");
};

img.onclick = function () {
  img.classList.toggle("active");
  dropDown.classList.toggle("active");
};
