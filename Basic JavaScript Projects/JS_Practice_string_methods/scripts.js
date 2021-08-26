function full_Sentence() {
  var part_1= "I have " //create variable//
  var part_2= "made this " //create variable//
  var part_3= "into a " //create variable//
  var part_4= "complete  " //create variable//
  var part_5= "sentence." //create variable//
  var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5) //concat all vars together//
  document.getElementById("Concatenate").innerHTML = whole_sentence //display result//
}

function slice_Method() {
  var Sentence = "All work and no play makes Jhonny a dull boy."; //create variable//
  var Section = Sentence.slice(27,33); //Slice variable//
  Section = Section.toUpperCase();  //Change variable to uppercase//
  var result = Section.search("O") //search variable for letter O//
  console.log(result); //display result//
  document.getElementById("Slice").innerHTML = Section //display result//
}

function  my_Func(){
  var x = 123; //create variable//
  x = x + x //update variable //
  console.log(x); //display result//
  x = x.toString() //change variable to string//
  x = x + 2  //test new variable//
  console.log(x); //display result//
}
function my_Func2(){
  var x = 12321321.23412341234123421 //create variable//
  console.log(x.toPrecision(12)); //display result with only 12 intigers//
}

function my_Func3(){
  var x = 123.63731345 //create variable//
  console.log(x.toFixed(5)); //display result rounded//
}

function my_Func4(){
  var x = "this is a string" //create variable//
  console.log(x.valueOf()); //display value of x//
}
