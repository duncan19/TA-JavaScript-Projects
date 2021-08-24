function My_Func() {
  var x = 64
  document.getElementById("result").innerHTML = (typeof x)
}
function Conversion_Func() {
  var x = 64
  x = String(x)
    document.getElementById("result").innerHTML = (typeof x)
}
function Nan_func() {
  document.getElementById("result").innerHTML = 0/0
}
function Nan2_func() {
  document.getElementById("result").innerHTML =isNaN(23);
}
function Nan3_func() {
  document.getElementById("result").innerHTML =isNaN("words");
}
function Infin_func() {
  document.getElementById("result").innerHTML =(2E310);
}
function Infin2_func() {
  document.getElementById("result").innerHTML =(-2E310);
}
function Bool_func() {
  document.getElementById("result").innerHTML =( 10 < 2);
}
function Bool2_func() {
  document.getElementById("result").innerHTML =( 10 > 2);
}
function Clog_func() {
  var result = 2 + 5;
  console.log("hello here is what 2 + 5 = " + result );
}
function Clog2_func() {
  var result = 2 + 5;
  console.log(12 < result );
}
function Clog3_func() {
  var result = 2 + 5;
  console.log(7 == result );
}
function Clog4_func() {
  var result = 2 + 5;
  console.log(8 == result );
}
function Clog5_func() {
  var result = 7;
  var str = "i am a string";
  console.log(7 === result );
  console.log("7" === result );
  console.log("i am a string" === str );
}
function Clog6_func() {
  var result = 2 + 5;
  console.log(result > 4 && result < 10);
  console.log(result < 4 || result < 10);
  console.log(!(result == 7))
  console.log(!(result == 8))
}
