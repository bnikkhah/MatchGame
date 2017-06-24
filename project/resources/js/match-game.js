var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
	var numArray = [];
	var randArray = [];
	for (var i = 1; i <= 8; i++){
		numArray.push(i);
		numArray.push(i);
	}
	
	var j = 0;
	var y = 16;
	while (j < 16){
		var index = Math.floor(Math.random() * y);
		randArray.push(numArray[index]);
		numArray.splice(index, 1);
		y--;
		j++;
	}
	
	console.log(randArray);
	
	return randArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};