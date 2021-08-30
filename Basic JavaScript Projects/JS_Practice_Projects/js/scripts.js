function  Pet_Func() {
  var Pet_Output;
  var Pets = document.getElementById("Pet_input").value;
  var Pet_String = " is a great pet!";
  switch(Pets) {
    case "Dog":
    Pet_Output = "A dog" + Pet_String
    break;
    case "Cat":
    Pet_Output = "A cat" + Pet_String
    break;
    case "Fish":
    Pet_Output = "A fish" + Pet_String
    break;
    case "Hamster":
    Pet_Output = "A hamster" + Pet_String
    break;
    default:
    Pet_Output = "Please enter a pet exactly as written in the list above.";
  }
  document.getElementById("Output").innerHTML = Pet_Output;
}

function My_Func(){
var A = document.getElementsByClassName("colors");
A[0].innerHTML = "this is a string that will displayed in html"
}

function  My_Func2() {
  var x= document.getElementById("my_canvas");
  var ctx = x.getContext("2d");
  ctx.font = "30px Arial";
  ctx.fillText("This is some text!", 10, 50);
}

function My_Func3(){
  var x= document.getElementById("my_canvas");
  var ctx = x.getContext("2d");
  var grd = ctx.createLinearGradient(0, 0, 170, 0);
  grd.addColorStop(0, "black");
  grd.addColorStop(1, "white");

  ctx.fillStyle = grd;
  ctx.fillRect(200, 200, 150, 100);
}

function validateForm() {
  let x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
  console.log(x);
}
