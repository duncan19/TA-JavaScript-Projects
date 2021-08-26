function countdown(){
  var seconds = document.getElementById("seconds").value;

  function tick() {
    seconds = seconds - 1;
    timer.innerHTML = seconds
    var time = setTimeout(tick, 1000);
    if (seconds == -1) {
      alert ("Times up!")
      clearTimeout(time);
      timer.innerHTML = "";
    }
  }
  tick()
}


var slideIndex = 1; //sets variable//
showSlides(slideIndex); //runs showslides with the current slide index//

function moveSlide(n) {
  showSlides(slideIndex += n); //moves the active slide//
}

function currentSlide(n) {
  showSlides(slideIndex = n); //sets slide relevant towhat dot was clicked//
}

function showSlides(n) {
  var i; //sets variable//
  var slides = document.getElementsByClassName("slides"); //create variable//
  var dots = document.getElementsByClassName("dot");  //create variable//
  if (n > slides.length) {slideIndex = 1}  //update slideindex//
  if (n < 1) {slideIndex = slides.length}  //update slideindex//
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; //select what slide to display//
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", ""); //what dot to be active//
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
