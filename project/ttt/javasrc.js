var header = document.querySelector("#cvd")
function getRandomColor(){
  var letters = "0123456789ABCDEF";
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random()*16)];
  }
  return color
}

// Simple function for clarity
function changeHeaderColor(){
  colorInput = getRandomColor()
  header.style.color = colorInput;
}

// Now perform the action over intervals (milliseocnds):


var restart= document.querySelector('#asd')
var squares= document.querySelectorAll("td")
// function clearb(){
//   for (var i = 0; i < squares.length; i++) {
//     squares[i].textContent="";
//   }
// }
// restart.addEventListener("click",clearb)
var player1= prompt("Enter player 1 name ")
var player2= prompt("Enter player 2 name ")
var currentplayer= 1;
$("h2").eq(0).text(player1+" -> X")
$("h2").eq(1).text(player2+" -> O")
// function ase(){
//   if(this.textContent===""){
//     this.textContent="X"
//   }
//   else if (this.textContent=="X") {
//     this.textContent="O"
//   }
//   else{
//     this.textContent=""
//   }
// }

// for (var i = 0; i < squares.length; i++) {
//   squares[i].addEventListener("click",ase)
// }

var table= $("table tr")

function val(rowIndex,colIndex) {
  return table.eq(rowIndex).find('td').eq(colIndex).text();

}
//row
function rowcheck(){
  for (var i = 0; i <3; i++) {
   for (var j = 0; j < 3; j++) {
         if(val(i,j)===val(i,j+1) && val(i,j+1)==val(i,j+2)  && val(i,j)!== undefined && val(i,j)!==""){
           currentplayer=val(i,j);
           return true;
         }
   }
 }}
 function colcheck(){
   for (var i = 0; i <3; i++) {
    for (var j = 0; j < 3; j++) {
          if(val(j,i)===val(j+1,i) && val(j+1,i)==val(j+2,i)  && val(j,i)!== undefined && val(j,i)!==""){
            currentplayer=val(j,i);
            return true;}}}}

function digcheck(){
  if(( val(0,0)== val(1,1) && val(1,1)== val(2,2) && val(1,1)!=="") || (val(0,2)== val(1,1) && val(1,1)== val(2,0) && val(1,1)!=="")) {
  currentplayer=val(1,1);
  return true;}
}
 // for (var i = 0; i < squares.length; i++) {
 //   squares[i].addEventListener("click",ase)
$('.board td').on('click',function() {
  if(this.textContent===""){
    this.textContent="X"
  }
  else if (this.textContent=="X") {
    this.textContent="O"
  }
  else{
    this.textContent=""
  }

  if(rowcheck() || colcheck() || digcheck()){
     console.log("hello")
     if(currentplayer== 'X'){
      $('h2').eq(0).text("")
     $('h2').eq(1).text(player1+" has won! Refresh your browser to play again!")
     $(".board td").fadeOut("fast")
     setInterval("changeHeaderColor()",500);
  }
  else{
      $('h2').eq(0).text("")
    $('h2').eq(1).text(player2+" has won! Refresh your browser to play again!")
    $(".board td").fadeOut("fast")
    setInterval("changeHeaderColor()",500);
  }
}})
