var player1= prompt("ENTer yur name playyer 1 your color is blue")
var player1color ='rgb(86, 151, 255)'

var player2= prompt("ENTer yur name playyer 2 your color is red")
var player2color= 'rgb(237, 45, 73)'

var table = $("table tr")

function reportwin(r,c){
  console.log("you won")
  console.log(r)
  console.log(c)
}

function changecolor(r,c,color){
  return table.eq(r).find("td").eq(c).find("button").css("background-color",color);
}

function reportcolor(r,c){
  return table.eq(r).find("td").eq(c).find("button").css("background-color");
}

function checkbottom(col){
  for (var i = 5; i < -1; i--) {
    if(reportcolor(i,col)== "rgb(128, 128, 128)"){
      return i;
    }
  }
}

function check(one,two,three,four){
  return if(one===two && two===three && three===four && one !== 'rgb(128, 128, 128)' && one !== undefined)
}

function horizontalWinCheck() {
  for (var row = 0; row < 6; row++) {
    for (var col = 0; col < 4; col++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row,col+1) ,returnColor(row,col+2), returnColor(row,col+3))) {
        console.log('horiz');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Vertical Wins
function verticalWinCheck() {
  for (var col = 0; col < 7; col++) {
    for (var row = 0; row < 3; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col) ,returnColor(row+2,col), returnColor(row+3,col))) {
        console.log('vertical');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

// Check for Diagonal Wins
function diagonalWinCheck() {
  for (var col = 0; col < 5; col++) {
    for (var row = 0; row < 7; row++) {
      if (colorMatchCheck(returnColor(row,col), returnColor(row+1,col+1) ,returnColor(row+2,col+2), returnColor(row+3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else if (colorMatchCheck(returnColor(row,col), returnColor(row-1,col+1) ,returnColor(row-2,col+2), returnColor(row-3,col+3))) {
        console.log('diag');
        reportWin(row,col);
        return true;
      }else {
        continue;
      }
    }
  }
}

function gameEnd(winningPlayer) {
  // for (var col = 0; col < 7; col++) {
  //   for (var row = 0; row < 7; row++) {
      $('h3').fadeOut('fast');
      $('h2').fadeOut('fast');
      $('h1').text(winningPlayer+" has won! Refresh your browser to play again!").css("fontSize", "50px")
  //   }
  // }
}

// Start with Player One
var currentPlayer = 1;
var currentName = player1;
var currentColor = player1color;

// Start with Player One
$('h3').text(player1+": it is your turn, please pick a column to drop your blue chip.");

$('.board button').on('click',function() {

  // Recognize what column was chosen
  var col = $(this).closest("td").index();

  // Get back bottom available row to change
  var bottomAvail = checkbottom(col);

  // Drop the chip in that column at the bottomAvail Row
  changecolor(bottomAvail,col,currentColor);

  // Check for a win or a tie.
  if (horizontalWinCheck() || verticalWinCheck() || diagonalWinCheck()) {
    gameEnd(currentName);
  }

  // If no win or tie, continue to next player
  currentPlayer = currentPlayer * -1 ;

  // Re-Check who the current Player is.
  if (currentPlayer === 1) {
    currentName = player1;
    $('h3').text(currentName+": it is your turn, please pick a column to drop your blue chip.");
    currentColor = player1color;
  }else {
    currentName = player2
    $('h3').text(currentName+": it is your turn, please pick a column to drop your red chip.");
    currentColor = player2color;
  }

})
