

function Vehicle(Make, Model, Year, Color) {  //make constructor //
  this.Vehicle_Make = Make;  //assign properties//
  this.Vehicle_Model = Model; //assign properties//
  this.Vehicle_Year = Year; //assign properties//
  this.Vehicle_Color = Color; //assign properties//
}
var Bob = new Vehicle("Dodge", "Viper", 2020, "Red"); //Create new variable using constructor//
var Joe = new Vehicle("Jeep", "Trail Hawk", 2019, "White"); //Create new variable using constructor//
var Jack = new Vehicle("Ford", "Pinto", 1971, "Blue"); //Create new variable using constructor//

function my_Func() {
  document.getElementById("Keywords_and_Constructors").innerHTML = //Sets the paragrah to display info of bob's vehicle//
  "Bob drives a " + Bob.Vehicle_Color + "-colored " + Bob.Vehicle_Model + " manufactured in " + Bob.Vehicle_Year;
}

function count_Func() {
  document.getElementById("Counting").innerHTML = Count() ; //run the dunction Count//
  function Count() {
    var Starting_point = 9; //set starting point to 9//
    function Plus_one() {Starting_point += 1;} //add one to starting point//
    Plus_one(); //run function//
    return Starting_point; //update var//
  }
}

function Vote_Func() {
  var Age, Can_vote; //create two variables//
  Age = document.getElementById("Age").value //set age to the input from user//
  Can_vote = (Age < 52) ? "You are too young":"You are old enough"; //test to see if age is true or false//
  document.getElementById("Vote").innerHTML = Can_vote + " to vote."; //update html//
}
