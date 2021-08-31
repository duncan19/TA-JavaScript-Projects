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
function Input_Decimal(dot) { //Handels decimal points//
  if (Calculator.Wait_Second_Operand === true) return; //wont cause bugs if accidental click//
  if (!Calculator.Display_Value.includes(dot)) { //if it does not contain a dot//
    Calculator.Display_Value += dot; // add a dot//
  }
}

function Handel_Operator(Next_Operator) {
  const { First_Operand, Display_Value, operator } = Calculator
  const Value_of_Input = parseFloat(Display_Value);
  if (operator && Calculator.Wait_Second_Operand) {
    Calculator.operator = Next_Operator;
    return;
  }
  if (First_Operand == null) {
    Calculator.First_Operand = Value_of_Input;
  } else if (operator) {
    const Value_Now = First_Operand || 0;
    let result = Perform_Calculation[operator] (Value_Now, Value_of_Input);
    result = Number(result).toFixed(9)
    result = (result * 1).toString()
    Calculator.Display_Value = parseFloat(result);
    Calculator.First_Operand = parseFloat(result);
  }
  Calculator.Wait_Second_Operand = true;
  Calculator.operator = Next_Operator;
}

const Perform_Calculation = {
  '/': (First_Operand, Second_Operand) => First_Operand / Second_Operand,
  '*': (First_Operand, Second_Operand) => First_Operand * Second_Operand,
  '+': (First_Operand, Second_Operand) => First_Operand + Second_Operand,
  '-': (First_Operand, Second_Operand) => First_Operand - Second_Operand,
  '=': (First_Operand, Second_Operand) => Second_Operand
}

function  Calculator_Reset() {
  Calculator.Display_Value = '0';
  Calculator.First_Operand = null;
  Calculator.Wait_Second_Operand = false;
  Calculator.operator = null;
}
console.log(Calculator.Display_Value);
function Update_Display() {
  const display = document.querySelector(".calculator-screen");
  display.value = Calculator.Display_Value;
}
console.log(Calculator.Display_Value);
Update_Display();
const keys = document.querySelector('.calculator-keys');
keys.addEventListener('click', (event) =>{
  const { target } = event;
  if (!target.matches('button')) {
    return;
  }
  if (target.classList.contains('operator')) {
    Handel_Operator(target.value);
    Update_Display();
    return;
  }
  if (target.classList.contains('decimal')) {
    Input_Decimal(target.value);
    Update_Display();
    return;
  }
  if (target.classList.contains('all-clear')) {
    Calculator_Reset();
    Update_Display();
    return;
  }
  Input_Digit(target.value)
  Update_Display();
})
