let board_size = 30;
let gameboard = new Array(board_size); // Array containing X and O, used for checking winner
var person = 1;

function setup()	{
	background(255);
	createCanvas(750, 750);
	createGameboard(gameboard, board_size);
}

function createGameboard(gameboard, board_size)	{
	for(let i = 0; i < board_size; i++)	{
		gameboard[i] = new Array(board_size);
	}

	for(let i = 0; i < board_size; i++)	{
		for(let j = 0; j < board_size; j++)	{
			gameboard[i][j] = 0;
		}
	}
}

// Draw lines representing a game grid
function drawGameboard()	{
	stroke(0);
	let i = 1;
	while(25 * i < 750)	{
		line(25 * i, 0, 25 * i, 750);
		line(0, 25 * i, 750, 25 * i);
		i++;
	}
}

function mousePressed()	{
	let x = Math.floor(mouseX / 25);
	let y = Math.floor(mouseY / 25);

	if(gameboard[x][y] != 0) // Prevents clicking the same tile for a second time
		return;

	if(person == 1)	{
		gameboard[x][y] = 1;
		person = 2;
	} else {
		gameboard[x][y] = 2;
		person = 1;
	}
}

function drawTurns(gameboard, board_size)	{
	for(let i = 0; i < board_size; i++)	{
		for(let j = 0; j < board_size; j++)	{
			stroke(5);
			if(gameboard[i][j] == 1)	{
				line(25 * i + 7, 25 * j + 7, 25 * i + 17, 25 * j + 17);
				line(25 * i + 7, 25 * j + 17, 25 * i + 17, 25 * j + 7);
			} else if(gameboard[i][j] == 2)	{
				noFill();
				ellipse(25 * i + 12, 25 * j + 12, 10, 10);
			}
		}
	}
}

function draw()	{
	drawGameboard();
	drawTurns(gameboard, board_size);
}
