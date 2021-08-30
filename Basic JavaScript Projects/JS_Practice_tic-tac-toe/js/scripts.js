let activePlayer = "X"; //assign var to keep track of turn//

let selectedSquares = []; // Creates an array for storing the player's moves//

function placeXOrO (squareNumber) { //creates function//
  if(!selectedSquares.some(element => element.includes(squareNumber))) { //checks to make sure square has not been selected already//
    let select = document.getElementById(squareNumber) //sets var to be equal to the square number selected//
    if (activePlayer === "X") {
      select.style.backgroundImage = 'url("images/x.png")' // selects what image to display//
      console.log("displayed x.png"); //log to see if it is working//
    } else {
      select.style.backgroundImage = 'url("images/o.png")' // selects what image to display//
      console.log("displayed o.png"); //log to see if it is working//
    }
    selectedSquares.push(squareNumber + activePlayer); //pushes selected square into the array//

    checkWinConditions(); // runs check wincon

    if(activePlayer === "X") {
      activePlayer = "O" //change active player to O//
    } else {
      activePlayer = "X" //change active player to x//
    }

    audio("./media/place.mp3"); //this func plays a sound

    if(activePlayer === "O") { //checks to see if it is the ocmputers turn or not//
      disableClick(); //Turns of clicking so computer can move//
      setTimeout(function () { computersTurn() }, 1000) //makes comp wait 1 sec//
    }
    return true; //returns the end of the func//
  }
  function computersTurn() { //create function that selects random square//
    let success = false; //boolean for loop//
    let pickASquare; // var that stores a num between 0-8//
    while(!success){ //try again till it finds square not selected//
      pickASquare = String(Math.floor(Math.random() * 9)) // checks to see if square has been selected//
      if (placeXOrO(pickASquare)) { //calls func//
        placeXOrO(pickASquare); //calls func//
        success = true; //change boolean to end loop//
      };
    }
  }
}

function checkWinConditions() {
  if      (arrayIncludes('0X','1X','2X')) { drawWinLine(50,100,558,100) }//draws line relative to the wincon//
  else if (arrayIncludes('3X','4X','5X')) { drawWinLine(50,304,558,304) } //draws line relative to the wincon//
  else if (arrayIncludes('6X','7X','8X')) { drawWinLine(50,508,558,508) }//draws line relative to the wincon//
  else if (arrayIncludes('3X','4X','5X')) { drawWinLine(50,304,558,304) }//draws line relative to the wincon//
  else if (arrayIncludes('0X','3X','6X')) { drawWinLine(100,50,100,558) }//draws line relative to the wincon//
  else if (arrayIncludes('1X','4X','7X')) { drawWinLine(304,50,304,558) }//draws line relative to the wincon//
  else if (arrayIncludes('2X','5X','8X')) { drawWinLine(508,50,508,558) }//draws line relative to the wincon//
  else if (arrayIncludes('6X','4X','2X')) { drawWinLine(100,508,510,90) }//draws line relative to the wincon//
  else if (arrayIncludes('0X','4X','8X')) { drawWinLine(100,100,520,520) }//draws line relative to the wincon//
  //checking O//
  else if (arrayIncludes('0O','1O','2O')) { drawWinLine(50,100,558,100) }//draws line relative to the wincon//
  else if (arrayIncludes('3O','4O','5O')) { drawWinLine(50,304,558,304) }//draws line relative to the wincon//
  else if (arrayIncludes('6O','7O','8O')) { drawWinLine(50,508,558,508) }//draws line relative to the wincon//
  else if (arrayIncludes('3O','4O','5O')) { drawWinLine(50,304,558,304) }//draws line relative to the wincon//
  else if (arrayIncludes('0O','3O','6O')) { drawWinLine(100,50,100,558) }//draws line relative to the wincon//
  else if (arrayIncludes('1O','4O','7O')) { drawWinLine(304,50,304,558) }//draws line relative to the wincon//
  else if (arrayIncludes('2O','5O','8O')) { drawWinLine(508,50,508,558) }//draws line relative to the wincon//
  else if (arrayIncludes('6O','4O','2O')) { drawWinLine(100,508,510,90) }//draws line relative to the wincon//
  else if (arrayIncludes('0O','4O','8O')) { drawWinLine(100,100,520,520) }//draws line relative to the wincon//

  else if (selectedSquares.length >= 9) { //checks for when 9 squares have been selected//
    audio('./media/tie.mp3'); //plays sound//
    setTimeout( function () { resetGame(); }, 2000); //waits time then resets game
  }

  function arrayIncludes(squareA, squareB, squareC) {
    const a = selectedSquares.includes(squareA)
    const b = selectedSquares.includes(squareB)
    const c = selectedSquares.includes(squareC)
    if(a === true && b === true && c === true) { return true}
  }
}

function disableClick() {
  body.style.pointerEvents = 'none';
  setTimeout(function() {body.style.pointerEvents = 'auto';},1000)
}

function audio(audioURL) { //function that plays audio//
  let audio = new Audio(audioURL) //gets url of audio when called//
  audio.play(); //play audtio//
}

function  drawWinLine(coordX1, coordY1, coordX2, coordY2) { //draw winline
  const canvas = document.getElementById('win-lines')
  const c = canvas.getContext('2d');
  let x1 = coordX1, y1 = coordY1, x2 = coordX2, y2 = coordY2, x = x1, y = y1; //sets variables equal to the coordinates//


  function  animateLineDrawing() { //create func//
    const animationLoop = requestAnimationFrame(animateLineDrawing); //creates loop//
    c.clearRect(0,0,608,608) //clears content//
    c.beginPath()// starts new path//
    c.moveTo(x1, y1)//creates new starting point//
    c.lineTo(x, y) //creates new end point//
    c.lineWidth = 10; //dicleares width//
    c.strokestyle = 'rgba(70, 255, 33, .8)' //what line looks like//
    c.stroke();//does the line//

    if (x1 <= x2 && y1 <= y2) { //checks if we reached end pint//
      if (x < x2) { x +=10; } //adds 10 to previous end x point//
      if(y < y2) { y += 10; } //adds 10 to previous end y point//
      if(x >= x2 && y >= y2) {cancelAnimationFrame(animationLoop)}//cancels animation//
    }
    if (x1 <= x2 && y1 >= y2) {
      if (x < x2) { x +=10; } //adds 10 to previous end x point//
      if( y < y2) {y -=10; } //removes 10 to previous end x point//
      if (x >= x2 && y <=y2 ) {cancelAnimationFrame(animationLoop);}
    }
  }

  function  clear() {
    const animationLoop= requestAnimationFrame(clear); //starts animation loop//
    c.clearRect(0,0, 608, 608);//clears canvas//
    cancelAnimationFrame(animationLoop) //ends animation loop//
  }
  disableClick();
  audio('./media/wingame.mp3'); //plays win sound
  animateLineDrawing(); //draws line//
  setTimeout(function () { clear(); resetGame(); }, 1000) //when winning resets and clears game//
}
function resetGame() { //resets game after tie/win//
    for (let i =0; i < 9; i++) { // loop goes through each square//
      let square = document.getElementById(String(i)) //gets html of i//
      square.style.backgroundImage = '' //empties the img//
    }
    selectedSquares = [] //clears array//
}
