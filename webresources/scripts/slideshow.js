/*
Example HTML Content:
<img class="banner mySlides" src="img_snowtops.jpg">
<img class="banner mySlides" src="img_lights.jpg">
<img class="banner mySlides" src="img_mountains.jpg">
<img class="banner mySlides" src="img_forest.jpg">
*/

var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {slideIndex = 1}
  x[slideIndex-1].style.display = "block";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}