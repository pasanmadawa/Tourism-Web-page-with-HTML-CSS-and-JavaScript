// Get the button
let my_button = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 190 || document.documentElement.scrollTop > 190) {
    my_button.style.display = "block";
  } else {
    my_button.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}