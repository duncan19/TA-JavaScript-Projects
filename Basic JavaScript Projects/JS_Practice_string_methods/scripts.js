function full_Sentence() {
  var part_1= "I have "
  var part_2= "made this "
  var part_3= "into a "
  var part_4= "complete  "
  var part_5= "sentence."
  var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5)
  document.getElementById("Concatenate").innerHTML = whole_sentence
}

function slice_Method() {
  var Sentence = "All work and no play makes Jhonny a dull boy.";
  var Section = Sentence.slice(27,33);
  Section = Section.toUpperCase();
  var result = Section.search("O")
  console.log(result);
  document.getElementById("Slice").innerHTML = Section
}

function  my_Func(){
  var x = 123;
  x = x + x
  console.log(x);
  x = x.toString()
  x = x + 2
  console.log(x);
}
function my_Func2(){
  var x = 12321321.23412341234123421
  console.log(x.toPrecision(12));
}

function my_Func3(){
  var x = 123.63731345
  console.log(x.toFixed(5));
}

function my_Func4(){
  var x = "this is a string"
  console.log(x.valueOf());
}
