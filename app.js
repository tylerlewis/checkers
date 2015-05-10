// 0's for unoccupied spaces, 1's for computer-occupied spaces, 2's for player-occupied spaces
var game = [
	[null, 1, null, 1, null, 1, null, 1],
	[1, null, 1, null, 1, null, 1, null],
	[null, 1, null, 1, null, 1, null, 1],
	[0, null, 0, null, 0, null, 0, null],
	[null, 0, null, 0, null, 0, null, 0],
	[2, null, 2, null, 2, null, 2, null],
	[null, 2, null, 2, null, 2, null, 2],
	[2, null, 2, null, 2, null, 2, null]
];

// Store the piece DOM elements in their corresponding space in the game matrix for easy movement manipulation
var pieces = [ [], [], [], [], [], [], [], [] ];

var computerMove = function() {
	var jumpsAvailable = checkForJumps(true);
	if(jumpsAvailable) {
		// Need to build in ability to move pieces first
	} else {
		var availableMove = moveToAvailableSpace(true);
	}
};

var playerMove = function() {
	var jumpsAvailable = checkForJumps(false);
};

var computerMoveLeft = function(i, j) {
	return (game[i + 1][j - 1] === 0);
};

var computerMoveRight = function(i, j) {
	return (game[i + 1][j + 1] === 0);
};

var computerJumpLeft = function(i, j) {
	return (game[i + 1][j - 1] === 2 && game[i + 2][j - 2] === 0);
};

var computerJumpRight = function(i, j) {
	return (game[i + 1][j + 1] === 2 && game[i + 2][j + 2] === 0);
};

var playerMoveLeft = function(i, j) {

};

var playerMoveRight = function(i, j) {

};

var playerJumpLeft = function(i, j) {
	return;
};

var playerJumpRight = function(i, j) {
	return;
};

var checkForJumps = function(computer) {
	if(computer) {
		for(var i = 0; i < game.length; i++) {
			for(var j = 0; j < game[i].length; j++) {
				if(game[i][j] === 1) {
					if(computerJumpLeft(i, j) || computerJumpRight(i, j)) {
						return true;
					}
				}
			}
		}
		return false;
	} else {
		//
	}
};

var moveToAvailableSpace = function(computer) {
	if(computer) {
		for(var i = 0; i < game.length; i++) {
			for(var j = 0; j < game[i].length; j++) {
				if(game[i][j] === 1) {
					if(computerMoveLeft(i, j) || computerMoveRight(i, j)) {
						console.log(pieces[i][j].style)
						pieces[i][j].style.top = '98px';
						if(computerMoveLeft(i, j)) {
							pieces[i][j].style.left = '-68px';
						} else {
							pieces[i][j].style.left = '98px';
						}
						return true;;
					}
				}
			}
		}
		return false;
	}
};

var getRandomNumber = function() {
	return Math.round(Math.random());
};

var initializeGameboard = function() {
	var board = document.createElement('div');
	board.className = 'gameboard';
	var invert = false;
	for(var i = 0; i < game.length; i++) {
		var row = document.createElement('div');
		row.className = 'row';
		for(var j = 0; j < game[i].length; j++) {
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
					pieces[i].push(piece);
					// piece.addEventListener('mousedown', drag);
					space.appendChild(piece);
				} else {
					pieces[i].push(null);
				}
			} else {
				pieces[i].push(null);
			}
			row.appendChild(space);
		}
		board.appendChild(row);
		invert = !invert;
	}
	console.log(pieces)
	document.body.appendChild(board);
};

var initializeGame = function() {
	initializeGameboard();
	var randomFirstMove = getRandomNumber();
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


