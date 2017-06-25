var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/
$(document).ready(function(){
	MatchGame.renderCards(MatchGame.generateCardValues(), $('#game'));
});
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
	
	return randArray;
};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {
	$game.empty();
	$game.data('flippedCards', []);
	var colorArray = [
	'hsl(25,85%,65%)', 
	'hsl(55,85%,65%)', 
	'hsl(90,85%,65%)',
	'hsl(160,85%,65%)',
	'hsl(220,85%,65%)',
	'hsl(265,85%,65%)',
	'hsl(310,85%,65%)',
	'hsl(360,85%,65%)'];
	
	for (var i = 0; i < cardValues.length; i++){
		var $cardObject = $("<div class='col-md-3 card'></div>");
		var data = {
			flipped:false,
			value:cardValues[i],
			color:colorArray[cardValues[i] - 1]
		};
		$cardObject.data(data);
		$game.append($cardObject);
	}
	
	$('.card').on('click', function(){
		MatchGame.flipCard($(this), $game);
	});
};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {
	if ($card.data('flipped')){
		return;
	}

	$card.css('background-color', $card.data('color')).text($card.data('value')).data('flipped', true);

	var flippedCards = $game.data('flippedCards');
	flippedCards.push($card);
	console.log(flippedCards);

	if (flippedCards.length === 2){
		if (flippedCards[0].data('value') === flippedCards[1].data('value')){
			var matching = {
				backgroundColor: 'rgb(153,153,153)',
				color: 'rgb(204,204,204)'
			};
			
			flippedCards[0].css(matching);
			flippedCards[1].css(matching);
		}else{
			var resetCss = {
				backgroundColor: 'rgb(32,64,86)',
			};
			
			window.setTimeout(function(){
				flippedCards[0].css(resetCss).text('').data('flipped', false);
				flippedCards[1].css(resetCss).text('').data('flipped', false);
			}, 350);
		}
		$game.data('flippedCards', []);
	}
};