const Calculator = { //create object//
  Display_Value: '0', //displays 0//
  First_Operand: null, //will hold first operand//
  Wait_Second_Operand: false, //checks for second operand//
  operator: null, //hold operator//
};
function Input_Digit(digit) { //modifies values each time a button is clicked//
  const { Display_Value, Wait_Second_Operand } = Calculator;
  if (Wait_Second_Operand === true) { //check to see if Wait_Second_Operand is true//
    Calculator.Display_Value = digit; //display value ot the clicked key//
    Calculator.Wait_Second_Operand = false;
  } else {
    Calculator.Display_Value = Display_Value === '0' ? digit : Display_Value + digit; //overwrites the display value if current value is 0 otherwise adds to it//
  }
}
function Input_Decimal(dot) { //Handles decimal points//
  if (Calculator.Wait_Second_Operand === true) return; //wont cause bugs if accidental click//
  if (!Calculator.Display_Value.includes(dot)) { //if it does not contain a dot//
    Calculator.Display_Value += dot; // add a dot//
  }
}

function Handle_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator //Gets value of Calculator//
  const Value_of_Input = parseFloat(Display_Value); //parse floats the display value//
  if (operator && Calculator.Wait_Second_Operand) { //checks if they are the same//
    Calculator.operator = Next_Operator; //next operator//
    return;
  }
  if (First_Operand == null) { //checks if there is an operand yet//
    Calculator.First_Operand = Value_of_Input; //sets first operand to be inputted value//
  } else if (operator) { //checks if operator//
    const Value_Now = First_Operand || 0; //checks if first operand is 0 or not//
    let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);//Sets result to a calculation//
    result = Number(result).toFixed(9) //sets it to be length of 9//
    result = (result * 1).toString() //changes it to a string//
    Calculator.Display_Value = parseFloat(result); //updates the diplay result//
    Calculator.First_Operand = parseFloat(result);//updates 1st operand//
  }
  Calculator.Wait_Second_Operand = true; //sets it to let another operator//
  Calculator.operator = Next_Operator; //next opperator//
}

const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,//runs calculation//
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,//runs calculation//
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,//runs calculation//
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,//runs calculation//
  '=': (First_Operand, Second_Operand) => Second_Operand //runs calculation//
}

function  Calculator_Reset() { //ressets calc//
  Calculator.Display_Value = '0'; //sets display to blank//
  Calculator.First_Operand = null; //removes first operand//
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null; //removes second operand//
}
function Update_Display() { //creates function//
  const display = document.querySelector(".calculator-screen"); //selects display screen and sets it to the const display//
  display.value = Calculator.Display_Value; //updates display//
}
Update_Display(); //runs updates display//
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{ //adds event listener for click//
  const { target } = event; //sets othe target to event
  if (!target.matches('button')) { //checks for match//
    return; //end
  }
  if (target.classList.contains('operator')) { //checks ot see if it is a number or an operator//
    Handle_Operator(target.value); //run handle operator//
    Update_Display();//runs updates display//
    return;
  }
  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);//runs decimal//
    Update_Display(); //runs updates display//
    return;
  }
  if (target.classList.contains('all-clear')) {
    Calculator_Reset(); //clears calc//
    Update_Display();//runs updates display//
    return;
  }
  Input_Digit(target.value) //putsi n digit//
  Update_Display(); //runs updates display//
})
