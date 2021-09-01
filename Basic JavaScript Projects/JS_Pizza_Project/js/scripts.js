function getReceipt() {
  var text1 = "<h3>You Ordered:</h3>"; //creates variable of what i have ordered//
  var runningTotal = 0; //creates variable//
  var sizeTotal = 0; //creates variable//
  var sizeArray = document.getElementsByClassName("size"); //creates array of the size//
  for (var i = 0; i < sizeArray.length; i++) { //checks length of size array and runs loop for as long as i is less than array length//
    if (sizeArray[i].checked) {  //checks what has been checked /
      var selectedSize = sizeArray[i].value;  //creates variable of the selected size//
      text1 = text1+selectedSize+"<br>";  //updates variable//
    }
  }
  if (selectedSize === "Personal Pizza") {  //sets price relative to selcted size//
    sizeTotal = 6;
  } else if (selectedSize === "Small Pizza") { //sets price relative to selcted size//
    sizeTotal = 8
  } else if (selectedSize === "Medium Pizza") { //sets price relative to selcted size//
    sizeTotal = 10
  } else if (selectedSize === "Large Pizza") { //sets price relative to selcted size//
    sizeTotal = 14
  } else if (selectedSize === "Extra Large Pizza") { //sets price relative to selcted size//
    sizeTotal = 16
  }
  runningTotal = sizeTotal; //sets the total to be relative to selcted size//
  console.log(selectedSize+" = $"+sizeTotal+".00"); //logs our size total//
  console.log("size text1: "+text1); //logs our size//
  console.log("subtotal: $"+runningTotal+".00"); //logs our total//
  getTopping(runningTotal,text1)  //Calls function//
};

function  getTopping(runningTotal,text1){
  var toppingTotal = 0; //creates variable//
  var selectedTopping = [];//creates array//
  var toppingArray = document.getElementsByClassName("toppings");   //creates array of the toppings//
  for (var y = 0; y < toppingArray.length; y++) { //checks length of topping array and runs loop for as long as it is less than array length//
    if(toppingArray[y].checked){ //checks if they are checked//
      selectedTopping.push(toppingArray[y].value); //updates array//
      console.log("Selected topping item: ("+toppingArray[y].value+")");//logs our topping itme selected//
      text1 = text1+toppingArray[y].value+"<br>"; //updates text//
    }
  }
  var toppingCount = selectedTopping.length; //creates var set to the number of toppings selcted//
  if (toppingCount > 1) { //checks for toppings//
    toppingTotal = (toppingCount - 1); //sets price//
  } else {
    toppingTotal = 0; //sets price//
  }
  runningTotal = (runningTotal + toppingTotal) //updates price//
  console.log("total selected topping items: "+toppingCount); //logs amount of toppings//
  console.log(toppingCount+" topping - 1 free topping = "+"$"+toppingTotal+".00"); //logs price of toppings//
  console.log("toppping text1: "+text1);  //logs text1//
  console.log("Purchase Total: "+"$"+runningTotal+".00"); //logs running total//
  document.getElementById("showText").innerHTML=text1;  //sets text to be text1//
  document.getElementById("totalPrice").innerHTML = "<h3>Total: <strong>$"+runningTotal+".00"+"</strong></h3>" //displays price//
}
