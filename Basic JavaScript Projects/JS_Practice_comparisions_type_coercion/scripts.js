function My_Func() {
  var x = 64 //create variable//
  document.getElementById("result").innerHTML = (typeof x) //display result displaying what x is//
}
function Conversion_Func() {
  var x = 64 //create variable//
  x = String(x) //change x to a string//
    document.getElementById("result").innerHTML = (typeof x) //display result displaying what x is//
}
function Nan_func() {
  document.getElementById("result").innerHTML = 0/0 //display result//
}
function Nan2_func() {
  document.getElementById("result").innerHTML =isNaN(23); //display result showing if 23 is or is not a number//
}
function Nan3_func() {
  document.getElementById("result").innerHTML =isNaN("words"); //display result showing if the words string is or is not a number//
}
function Infin_func() {
  document.getElementById("result").innerHTML =(2E310);  //display result of infinity//
}
function Infin2_func() {
  document.getElementById("result").innerHTML =(-2E310); //display result of negative infinity//
}
function Bool_func() {
  document.getElementById("result").innerHTML =( 10 < 2); //display result showing if the statement is true or false//
}
function Bool2_func() {
  document.getElementById("result").innerHTML =( 10 > 2); //display result showing if the statement is true or false//
}
function Clog_func() {
  var result = 2 + 5; //create variable//
  console.log("hello here is what 2 + 5 = " + result ); //display info in console//
}
function Clog2_func() {
  var result = 2 + 5; //create variable//
  console.log(12 < result ); //display result showing if the statement is true or false//
}
function Clog3_func() {
  var result = 2 + 5; //create variable//
  console.log(7 == result ); //display result showing if the statement is true or false//
}
function Clog4_func() {
  var result = 2 + 5; //create variable//
  console.log(8 == result ); //display result showing if the statement is true or false//
}
function Clog5_func() {
  var result = 7; //create variable//
  var str = "i am a string"; //create variable//
  console.log(7 === result ); //display result showing if the statement is true or false//
  console.log("7" === result ); //display result showing if the statement is true or false//
  console.log("i am a string" === str ); //display result showing if the statement is true or false//
}
function Clog6_func() {
  var result = 2 + 5; //create variable//
  console.log(result > 4 && result < 10); //display result showing if the statement is true or false//
  console.log(result < 4 || result < 10); //display result showing if the statement is true or false//
  console.log(!(result == 7)) //display result showing if the statement is true or false//
  console.log(!(result == 8)) //display result showing if the statement is true or false//
}
