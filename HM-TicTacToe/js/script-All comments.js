// declare variable player
// var player;
// set player to "X";
player = "X";

// or combined: declare variable player and set player to "X"
var player = "X";

// life-sign
// alert (player);
// alert value of variable player
// alert (player);
// alert "Hello" plus value of player
// alert ("Hallo Spieler " + player);

// declare variable hint and set it to element object with 
// id "hint", using document.querySelector () 
var hint = document.querySelector("#hint");

// alert(hint);
// set inner HTML text of hint to "Hello" plus value 
// of player plus " - select a field!" at the end
hint.innerHTML = "Hallo Spieler " + player + " - bitte wähle ein Spielfeld";

function markField (mouseEvent) {

   // dev only: alert target object of mouse event
   // alert (mouseEvent.target);    
   // var target = button.innerHTML;
   // alert (mouseEvent.target);
   // declare variable field and set to target object of mouse event;
   var field = mouseEvent.target;

   // label the field with the player's name, set aria-label attribute to set background-image)
   field.setAttribute ("aria-label", player);

   // disable field against further mouse clicks (set disabled attribute)
   field.setAttribute ("disabled", "disabled");

   // change name of current player
   if(player == "X") player = "O";
   else player = "X";

   // set inner HTML text of hint to "Next player is " 
   // plus value of player plus "!"
   hint.innerHTML = "Der nächste Spieler ist " + player + " - bitte wähle das nächste Spielfeld!";

   // call function allFieldsAreSelected
   allFieldsAreSelected();

      // !! insert as last lines of markField() !!
      // if all fields were selected, using allFieldsAreSelected(),then
      // set hint indicating the end of the game
      if (allFieldsAreSelected() ) hint.innerHTML = "Das war's!";
}

// declare the variable fields and set it to the list of field objects, 
// using document.querySelectorAll()
function allFieldsAreSelected() {
   // alert("... und weiter geht's!");

   var fields = document.querySelectorAll("#gameboard button");

   // fields is a list/Array, let's get the lenght of the list
   // alert(fields.length);

   var len = fields.length;  // "len" für "Länge(length)""

   // "c" für counter und "c++" für "c = c + 1"
   // alert("c = " + c);
   for (var c = 0; c < len; c++) {

      // get field item from the list fields
      var f = fields[c]

      // alert (f.getAttribute("aria-label"));
      // if there is an empty label, return false (exit function)
      if (f.getAttribute("aria-label") == "") {
      return false;
      }  

   }

   return true;

}