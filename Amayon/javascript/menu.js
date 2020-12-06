const trig = document.querySelector("#trigger");
const closer = document.querySelector("#close");

trig.addEventListener("click", openNav);
closer.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("myNav").style.width = "400px";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

const dropclick = document.querySelector("#dropdown");

dropclick.addEventListener("click", openToggle);

function openToggle() {
  const opencontent = document.querySelector("#dropdown-content");
  opencontent.style.display = "block";
}
