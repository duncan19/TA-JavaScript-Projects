console.log("test");
window.addEventListener('DOMContentLoaded', () => {
  document.body.classList.remove('fade-out');
});
console.log("test2");

function validateForm() {
  let x = document.forms["my-form"]["name"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
    console.log('test3');
  }
}
function openForm() {
  document.getElementById("myForm").style.display = "block";
}

function closeForm() {
  document.getElementById("myForm").style.display = "none";
}
$(document).ready(function() {
$("#slideshow > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow > div:first')
  .fadeOut(1000)
  .next()
  .fadeIn(1000)
  .end()
  .appendTo('#slideshow');
}, 3000);
});
