function Call_Loop(){
  var Digit = "" //create variable//
  var X = 0 //create variable//
  while (X < 25) { //create while loop that runs when x is less than 25//
    Digit += "<br>" + X;
    X = X + 5
  }
  document.getElementById("Loop").innerHTML = Digit //display result in html//
}
function My_Func() {
  var array1 = [0,2,5,7,9] //create variable//
  console.log(array1.length);  //log the result//
}

var Movies = ["Your name", "A silent voice", "Interstellar", "Silent Hill"] //create variable//
var Content = "" //create variable//
var X ; //create var//
function My_Func2() {
  for (X = 0; X < Movies.length; X++) { //run while x is less than the length of the movies array//
    Content += Movies[X] + "<br>"; //list movies with a br between each one//
  }
  document.getElementById("List_of_movies").innerHTML = Content; //display result//
}

function My_Func3(){
  var Cat_Picture = []; //create array//
  Cat_Picture[0] = "sleeping"; //add object to array//
  Cat_Picture[1] = "playing"; //add object to array//
  Cat_Picture[2] = "eating"; //add object to array//
  Cat_Picture[3] = "purring"; //add object to array//
  document.getElementById("Cat").innerHTML = "in this picture the cat is " + Cat_Picture[3] + "."   //display result//
}
function My_Func4(){
  const Musical_Insturment ={type:"guitar", brand:"Fender", color:"black"} //create the object//
  Musical_Insturment.color = "blue"; //change color of our object//
  Musical_Insturment.price = "$900" //add price to the object//
  document.getElementById("Constant").innerHTML = "The cost of the "  + Musical_Insturment.type + " was " + Musical_Insturment.price;  //display result//
}
function My_Func5(){
  var x = 42 //create variable//
  console.log(x);  //log the result//
  {
    let x = 32 //create variable//
    console.log(x);  //log the result//
  }
  console.log(x);  //log the result//
}
function My_Func6(){
  var x = "test"; //create variable//
  return x.toUpperCase()
}
function My_Func7(){
  console.log(My_Func6());  //log the result//
}

let car = { //create object//
  make: "Dodge ",  //assign property//
  model: "Viper ", //assign property//
  year: "2021 ", //assign property//
  color: "red ", //assign property//
  description : function() {
    return "The car is a " + this.year + this.color + this.make + this.model; //create sentence//
  }
}
console.log(car.description());  //log the result//

function My_Func8(){
var x = 12 //create variable//
while (x > 10){ //create condition//
if (x === 6) {
  break //break out when x is 6//
}
  console.log(x); //log x after each itteration//
  x = x-1 //update x//
}
console.log("finished");  //log the result//
}

function  My_Func9() {
  var x = 17; //create variable//
  while (x > 2){ //create condition//
    if (x === 9){ //create condition//
      x= x - 1 //update x//
      console.log("will run continue"); //log that the code reached here//
      continue //call continue //
    }
    x = x - 2; //update x//
    console.log(x); //log x//
  }
  console.log("exit while loop"); //log the result//
}
