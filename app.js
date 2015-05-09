var game = [
	[0, 1, 0, 1, 0, 1, 0, 1],
	[1, 0, 1, 0, 1, 0, 1, 0],
	[0, 1, 0, 1, 0, 1, 0, 1],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0],
	[2, 0, 2, 0, 2, 0, 2, 0],
	[0, 2, 0, 2, 0, 2, 0, 2],
	[2, 0, 2, 0, 2, 0, 2, 0]
];

var computerMove = function() {

};

var playerMove = function() {

};

var checkForJumps = function(computer) {
	if(computer) {
		
	}
}

var initializeGameboard = function() {
	var board = document.createElement('div');
	board.className = 'gameboard';
	var invert = false;
	for(var i = 0; i < 8; i++) {
		var row = document.createElement('div');
		row.className = 'row';
		for(var j = 0; j < 8; j++) {
			var space = document.createElement('div');
			if(invert) {
				space.className = (j % 2 === 0) ? 'space red' : 'space black';
			} else {
				space.className = (j % 2 === 0) ? 'space black' : 'space red';
			}
			if(i < 3 || i > 4) {
				if(game[i][j] === 1 || game[i][j] === 2) {
					var piece = document.createElement('div');
					if(game[i][j] === 1) {
						piece.className = 'piece black';
					} else if(game[i][j] === 2) {
						piece.className = 'piece white';
					}
					// piece.addEventListener('mousedown', drag);
					space.appendChild(piece);
				}
			}
			row.appendChild(space);
		}
		board.appendChild(row);
		invert = !invert;
	}
	document.body.appendChild(board);
};

var initializeGame = function() {
	initializeGameboard();
	var randomFirstMove = Math.round(Math.random());
	var firstMove = (randomFirstMove === 0) ? 'Computer\'s' : 'Your';
	var turn = document.createElement('h1');
	turn.className = 'turn';
	turn.innerHTML = firstMove + ' turn';
	document.body.appendChild(turn);

	(randomFirstMove === 0) ? computerMove() : playerMove();
};

initializeGame();







// var drag = function(e) {
// 	var piece = e.target;
// 	piece.className += ' dragging';
// 	piece.
// };


