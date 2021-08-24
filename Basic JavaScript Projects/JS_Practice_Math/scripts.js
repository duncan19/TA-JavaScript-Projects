function addition_Func() {
  var addition = 2 + 2; //creates variable and adds two numbers together//
  document.getElementById("Math").innerHTML = "2 + 2 = " + addition //makes html display my variable//
}

function sub_Func() {
  var sub  = 4 - 2; //creates variable and subtracts two numbers//
  document.getElementById("Math").innerHTML = "4 - 2 = " + sub //makes html display my variable//
}
function mult_Func() {
  var mult  = 4 * 2; //creates variable and multiplies two numbers//
  document.getElementById("Math").innerHTML = "4 * 2 = " + mult //makes html display my variable//
}
function div_Func() {
  var div  = 8 / 2; //creates variable and devides two numbers//
  document.getElementById("Math").innerHTML = "8 / 2 = " + div //makes html display my variable//
}

function more_Math() {
  var simple_math = (1 + 4) / 2 * 12 - 40; //creates variable and adds, subtracts, devides, multiplies numbers//
  document.getElementById("Math").innerHTML = "(1 + 4) / 2 * 12 - 40 = " + simple_math //makes html display my variable//
}
function modulus_Math() {
  var simple_math = 100 % 7;  //creates variable and finds the remainder//
  document.getElementById("Math").innerHTML = "when deviding 100 by 7 you have a remainder of  " + simple_math //makes html display my variable//
}

function neg_Op() {
  var num = 230;  //creates variable and sets it euqal to number//
  document.getElementById("Math").innerHTML = -num //makes html display my variable//
}
function inc() {
  var num = 24;   //creates variable and sets it euqal to number//
  num++; //updates var to num +1 //
  document.getElementById("Math").innerHTML = num //makes html display my variable//
}
function dec() {
  var num = 41.25;  //creates variable and sets it euqal to number//
  num--; //updates var to num -1 //
  document.getElementById("Math").innerHTML = num //makes html display my variable//
}
function rand_Num() {
  num = Math.random() * 200  //creates variable equal to a random number//
  num = Math.round(num) //updates var to be equal to a whole number//
  document.getElementById("Math").innerHTML = num //makes html display my variable//
}
