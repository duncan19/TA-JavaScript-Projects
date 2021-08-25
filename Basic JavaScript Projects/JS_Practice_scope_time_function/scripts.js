var z = 10
function My_Func(){
  var x = 10
  x = z + x + 4
  y = x +2
  console.log(x)
}
function My_Func2(){
  console.log(z)
  console.log(x)
  console.log(y)
}
function My_Func3(){
if (4 < 2) {
  console.log("true");
}
else {
  console.log("False");
}
}
function My_Func4(){
  if (new Date().getHours() < 14) {
    console.log("how are you today");
  }
}

function Age_Func() {
  Age= document.getElementById("Age").value;
  if (Age >= 18 ) {
    Vote = "You are old enough to vote!";
  }
  else {
    Vote = "You are not old enough to vote";
  }
  document.getElementById("How_old_are_you").innerHTML = Vote;
}

function Time_Func() {
  var Time = new Date().getHours();
  var Reply = "";
  if (Time < 12 == Time > 0) {
    Reply = "It is morning time!"
  }
  else if (Time >= 12 == Time < 0) {
    Reply = "It is afternoon!"
  }
  else {
    Reply = "It is night time"
  }
  document.getElementById("Time_of_day").innerHTML = Reply;
}
