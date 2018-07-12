window.onscroll = function() {stickness()};

var navbar = document.getElementById("headbarwrap");
var sticky = navbar.offsetTop;

function stickness() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

console.log(sticky);