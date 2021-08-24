

function My_First_Func() {
  var str = "This text is blue" //Creates string//
  str  += " and here is some more text" //updates the str var to include more text//
  var result = str.fontcolor("blue") //Sets the string to be blue//
  document.getElementById("Blue_text").innerHTML = result; //Creates it in html//
}
