const trig = document.querySelector("#trigger");
const closer = document.querySelector("#close");

trig.addEventListener("click", openNav);
closer.addEventListener("click", closeNav);

function openNav() {
  document.getElementById("myNav").style.width = "330px";
}

function closeNav() {
  document.getElementById("myNav").style.width = "0%";
}

// open dropdown on click
function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// close dropdown on click outside
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    let dropdowns = document.getElementsByClassName("dropdown-content");
    let i;
    for (i = 0; i < dropdowns.length; i++) {
      let openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

document
  .getElementById("myDropdown")
  .addEventListener("click", function (event) {
    event.stopPropagation();
  });

//Get the button:
mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// const dropClick = document.querySelector("#dropDown");
//
// dropClick.addEventListener("click", openToggle);
//
// function openToggle() {
//   const openContent = document.querySelector("#dropdown-content");
//   openContent.style.display = "block";
// }
